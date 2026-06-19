import { NextResponse } from "next/server";
import { Resend } from "resend";

const messageTypes = new Set([
  "Editorial feedback",
  "Correction request",
  "Topic idea",
  "Listing enquiry",
  "Partnership enquiry",
  "General question",
]);

type ContactPayload = {
  name?: unknown;
  email?: unknown;
  messageType?: unknown;
  subject?: unknown;
  message?: unknown;
  consent?: unknown;
  source?: unknown;
  turnstileToken?: unknown;
  website?: unknown;
};

const rateLimitWindowMs = 10 * 60 * 1000;
const rateLimitMax = 5;
const submissions = new Map<string, { count: number; resetAt: number }>();

function text(value: unknown) {
  return typeof value === "string" ? value.trim() : "";
}

function getClientIp(request: Request) {
  const forwardedFor = request.headers.get("x-forwarded-for");
  return forwardedFor?.split(",")[0]?.trim() || request.headers.get("x-real-ip") || "unknown";
}

function checkRateLimit(ip: string) {
  const now = Date.now();
  const existing = submissions.get(ip);

  if (!existing || existing.resetAt < now) {
    submissions.set(ip, { count: 1, resetAt: now + rateLimitWindowMs });
    return true;
  }

  if (existing.count >= rateLimitMax) {
    return false;
  }

  existing.count += 1;
  return true;
}

function validate(payload: ContactPayload) {
  const name = text(payload.name);
  const email = text(payload.email).toLowerCase();
  const messageType = text(payload.messageType);
  const subject = text(payload.subject);
  const message = text(payload.message);
  const source = text(payload.source);
  const turnstileToken = text(payload.turnstileToken);
  const website = text(payload.website);
  const errors: string[] = [];

  if (website) {
    errors.push("Your message could not be sent.");
  }
  if (name.length < 2 || name.length > 80) {
    errors.push("Name must be between 2 and 80 characters.");
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || email.length > 120) {
    errors.push("Please enter a valid email address.");
  }
  if (!messageTypes.has(messageType)) {
    errors.push("Please choose a valid message type.");
  }
  if (subject.length < 4 || subject.length > 140) {
    errors.push("Subject must be between 4 and 140 characters.");
  }
  if (message.length < 20) {
    errors.push("Message must be at least 20 characters.");
  }
  if (message.length > 4000) {
    errors.push("Message must be under 4,000 characters.");
  }
  if (payload.consent !== true) {
    errors.push("Please confirm the message is not for urgent animal care.");
  }
  if (!turnstileToken) {
    errors.push("CAPTCHA verification is required.");
  }

  return {
    errors,
    data: { name, email, messageType, subject, message, source, turnstileToken },
  };
}

async function verifyTurnstile(token: string, ip: string) {
  const secret = process.env.TURNSTILE_SECRET_KEY;

  if (!secret) {
    return { success: false, error: "CAPTCHA is not configured." };
  }

  const body = new URLSearchParams({
    secret,
    response: token,
  });

  if (ip !== "unknown") {
    body.set("remoteip", ip);
  }

  const response = await fetch("https://challenges.cloudflare.com/turnstile/v0/siteverify", {
    method: "POST",
    body,
  });
  const result = (await response.json()) as { success?: boolean };

  return { success: Boolean(result.success), error: "CAPTCHA verification failed." };
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

export async function POST(request: Request) {
  const ip = getClientIp(request);

  if (!checkRateLimit(ip)) {
    return NextResponse.json(
      { success: false, error: "Too many messages from this connection. Please try again later." },
      { status: 429 },
    );
  }

  let payload: ContactPayload;

  try {
    payload = (await request.json()) as ContactPayload;
  } catch {
    return NextResponse.json({ success: false, error: "Invalid request body." }, { status: 400 });
  }

  const { errors, data } = validate(payload);

  if (errors.length > 0) {
    return NextResponse.json({ success: false, errors }, { status: 400 });
  }

  const turnstile = await verifyTurnstile(data.turnstileToken, ip);

  if (!turnstile.success) {
    return NextResponse.json({ success: false, error: turnstile.error }, { status: 400 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  const toEmail = process.env.CONTACT_TO_EMAIL || "info@doghavengroup.com";
  // Resend requires this sender to be from a verified domain. Set CONTACT_FROM_EMAIL to
  // your verified Resend sender, for example: DogHaven Contact <contact@doghaven.co.za>.
  const fromEmail = process.env.CONTACT_FROM_EMAIL;

  if (!apiKey) {
    return NextResponse.json(
      { success: false, error: "Contact email API key is not configured." },
      { status: 503 },
    );
  }

  if (!fromEmail) {
    return NextResponse.json(
      { success: false, error: "Contact sender email is not configured." },
      { status: 503 },
    );
  }

  const resend = new Resend(apiKey);
  const timestamp = new Date().toISOString();
  const subject = `[DogHaven] ${data.messageType}: ${data.subject}`;
  const html = `
    <h1>DogHaven contact form</h1>
    <p><strong>Name:</strong> ${escapeHtml(data.name)}</p>
    <p><strong>Email:</strong> ${escapeHtml(data.email)}</p>
    <p><strong>Message type:</strong> ${escapeHtml(data.messageType)}</p>
    <p><strong>Subject:</strong> ${escapeHtml(data.subject)}</p>
    <p><strong>Page/source:</strong> ${escapeHtml(data.source || "Not provided")}</p>
    <p><strong>Timestamp:</strong> ${escapeHtml(timestamp)}</p>
    <hr />
    <p>${escapeHtml(data.message).replace(/\n/g, "<br />")}</p>
  `;

  try {
    const result = await resend.emails.send({
      from: fromEmail,
      to: toEmail,
      replyTo: data.email,
      subject,
      html,
      text: [
        "DogHaven contact form",
        `Name: ${data.name}`,
        `Email: ${data.email}`,
        `Message type: ${data.messageType}`,
        `Subject: ${data.subject}`,
        `Page/source: ${data.source || "Not provided"}`,
        `Timestamp: ${timestamp}`,
        "",
        data.message,
      ].join("\n"),
    });

    if (result.error) {
      console.error("DogHaven contact email failed", {
        name: result.error.name,
        message: result.error.message,
        toEmail,
        fromEmail,
      });

      return NextResponse.json(
        { success: false, error: "The email service rejected the message. Please try again later." },
        { status: 502 },
      );
    }

    if (result.data) {
      console.log("DogHaven contact email sent", {
        messageId: result.data.id,
        toEmail,
        fromEmail,
      });

      return NextResponse.json({ success: true });
    }

    console.error("DogHaven contact email failed", {
      message: "Resend returned no data or error.",
      toEmail,
      fromEmail,
    });

    return NextResponse.json(
      { success: false, error: "The message could not be sent right now." },
      { status: 502 },
    );
  } catch (error) {
    console.error("DogHaven contact email exception", error);

    return NextResponse.json(
      { success: false, error: "The message could not be sent right now." },
      { status: 502 },
    );
  }
}
