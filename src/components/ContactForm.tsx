"use client";

import Script from "next/script";
import { useEffect, useRef, useState } from "react";
import { CheckCircle2, Loader2, Send, ShieldCheck } from "lucide-react";

type TurnstileWidget = {
  render: (
    element: HTMLElement,
    options: {
      sitekey: string;
      callback: (token: string) => void;
      "expired-callback": () => void;
      "error-callback": () => void;
    },
  ) => string;
  reset: (widgetId: string) => void;
  remove: (widgetId: string) => void;
};

declare global {
  interface Window {
    turnstile?: TurnstileWidget;
  }
}

const messageTypes = [
  "Editorial feedback",
  "Correction request",
  "Topic idea",
  "Listing enquiry",
  "Partnership enquiry",
  "General question",
];

type FormState = {
  name: string;
  email: string;
  messageType: string;
  subject: string;
  message: string;
  consent: boolean;
  website: string;
};

const initialState: FormState = {
  name: "",
  email: "",
  messageType: "Editorial feedback",
  subject: "",
  message: "",
  consent: false,
  website: "",
};

function validateForm(form: FormState, turnstileToken: string) {
  const errors: string[] = [];

  if (form.name.trim().length < 2) errors.push("Please enter your name.");
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) errors.push("Please enter a valid email address.");
  if (!messageTypes.includes(form.messageType)) errors.push("Please choose a message type.");
  if (form.subject.trim().length < 4) errors.push("Please enter a subject.");
  if (form.message.trim().length < 20) errors.push("Please write a message of at least 20 characters.");
  if (form.message.length > 4000) errors.push("Please keep your message under 4,000 characters.");
  if (!form.consent) {
    errors.push("Please confirm this message is not for urgent animal care.");
  }
  if (!turnstileToken) {
    errors.push("Please complete the CAPTCHA check.");
  }

  return errors;
}

export function ContactForm() {
  const siteKey = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY;
  const captchaRef = useRef<HTMLDivElement | null>(null);
  const widgetIdRef = useRef<string | null>(null);
  const [form, setForm] = useState<FormState>(initialState);
  const [turnstileToken, setTurnstileToken] = useState("");
  const [scriptReady, setScriptReady] = useState(false);
  const [errors, setErrors] = useState<string[]>([]);
  const [status, setStatus] = useState<"idle" | "loading" | "success">("idle");

  useEffect(() => {
    if (!scriptReady || !siteKey || !captchaRef.current || !window.turnstile || widgetIdRef.current) {
      return;
    }

    widgetIdRef.current = window.turnstile.render(captchaRef.current, {
      sitekey: siteKey,
      callback: (token) => {
        setTurnstileToken(token);
        setErrors((current) => current.filter((error) => error !== "Please complete the CAPTCHA check."));
      },
      "expired-callback": () => setTurnstileToken(""),
      "error-callback": () => setTurnstileToken(""),
    });

    return () => {
      if (widgetIdRef.current && window.turnstile) {
        window.turnstile.remove(widgetIdRef.current);
        widgetIdRef.current = null;
      }
    };
  }, [scriptReady, siteKey]);

  function updateField<Key extends keyof FormState>(key: Key, value: FormState[Key]) {
    setForm((current) => ({ ...current, [key]: value }));
  }

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const validationErrors = validateForm(form, turnstileToken);

    if (validationErrors.length > 0) {
      setErrors(validationErrors);
      return;
    }

    setStatus("loading");
    setErrors([]);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...form,
          source: typeof window !== "undefined" ? window.location.href : "",
          turnstileToken,
        }),
      });
      const data = (await response.json()) as { success?: boolean; error?: string; errors?: string[] };

      if (!response.ok || !data.success) {
        setErrors(data.errors ?? [data.error ?? "Something went wrong. Please try again."]);
        setStatus("idle");
        if (widgetIdRef.current && window.turnstile) {
          window.turnstile.reset(widgetIdRef.current);
          setTurnstileToken("");
        }
        return;
      }

      setStatus("success");
      setForm(initialState);
      setTurnstileToken("");
      if (widgetIdRef.current && window.turnstile) {
        window.turnstile.reset(widgetIdRef.current);
      }
    } catch {
      setErrors(["The message could not be sent right now. Please try again later."]);
      setStatus("idle");
    }
  }

  return (
    <section className="mx-auto w-full max-w-5xl overflow-hidden rounded-3xl border border-oat bg-white p-5 shadow-soft sm:p-7 md:p-8 lg:p-10">
      <Script
        src="https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit"
        strategy="afterInteractive"
        onLoad={() => setScriptReady(true)}
      />
      <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <p className="section-kicker">Send a message</p>
          <h2 className="mt-2 text-2xl font-black text-cocoa">Contact DogHaven</h2>
          <p className="mt-3 max-w-2xl leading-7 text-bark">
            Use this form for editorial feedback, corrections, topic ideas, listing enquiries,
            partnership enquiries, or general questions. DogHaven does not provide emergency
            veterinary support by email.
          </p>
        </div>
        <div className="inline-flex w-fit items-center gap-2 rounded-full bg-sage/12 px-4 py-2 text-sm font-black text-moss">
          <ShieldCheck className="h-4 w-4" aria-hidden="true" />
          CAPTCHA protected
        </div>
      </div>

      <div className="mt-5 w-full rounded-2xl border border-honey/45 bg-honey/12 p-4 text-sm leading-6 text-bark sm:p-5">
        For urgent animal care, contact a veterinarian or emergency animal clinic directly. This
        inbox is not monitored for emergencies.
      </div>

      {status === "success" ? (
        <div className="mt-6 rounded-2xl border border-sage/40 bg-sage/10 p-5 text-bark">
          <div className="flex items-start gap-3">
            <CheckCircle2 className="mt-1 h-5 w-5 flex-none text-moss" aria-hidden="true" />
            <div>
              <h3 className="font-black text-cocoa">Message sent</h3>
              <p className="mt-1 text-sm leading-6">
                Thanks for helping improve DogHaven. We will review your message, but we cannot
                promise immediate replies.
              </p>
            </div>
          </div>
        </div>
      ) : null}

      {errors.length > 0 ? (
        <div className="mt-6 rounded-2xl border border-red-200 bg-red-50 p-5 text-sm leading-6 text-red-900">
          <p className="font-black">Please fix the following:</p>
          <ul className="mt-2 list-disc space-y-1 pl-5">
            {errors.map((error) => (
              <li key={error}>{error}</li>
            ))}
          </ul>
        </div>
      ) : null}

      <form className="mt-8 grid gap-5 rounded-2xl border border-oat/80 bg-cream/35 p-4 sm:gap-6 sm:p-6 lg:p-7" onSubmit={handleSubmit}>
        <input
          aria-hidden="true"
          autoComplete="off"
          className="hidden"
          name="website"
          tabIndex={-1}
          value={form.website}
          onChange={(event) => updateField("website", event.target.value)}
        />

        <div className="grid gap-5 md:grid-cols-2 md:gap-6">
          <label className="grid gap-2.5 text-sm font-bold text-cocoa">
            Name
            <input
              className="min-h-[52px] w-full rounded-xl border border-oat bg-white px-4 py-3 text-bark outline-none transition focus:border-sage focus:ring-4 focus:ring-sage/15"
              maxLength={80}
              name="name"
              value={form.name}
              onChange={(event) => updateField("name", event.target.value)}
            />
          </label>
          <label className="grid gap-2.5 text-sm font-bold text-cocoa">
            Email address
            <input
              className="min-h-[52px] w-full rounded-xl border border-oat bg-white px-4 py-3 text-bark outline-none transition focus:border-sage focus:ring-4 focus:ring-sage/15"
              maxLength={120}
              name="email"
              type="email"
              value={form.email}
              onChange={(event) => updateField("email", event.target.value)}
            />
          </label>
        </div>

        <div className="grid gap-5 md:grid-cols-2 md:gap-6">
          <label className="grid gap-2.5 text-sm font-bold text-cocoa">
            Message type
            <select
              className="min-h-[52px] w-full rounded-xl border border-oat bg-white px-4 py-3 text-bark outline-none transition focus:border-sage focus:ring-4 focus:ring-sage/15"
              name="messageType"
              value={form.messageType}
              onChange={(event) => updateField("messageType", event.target.value)}
            >
              {messageTypes.map((type) => (
                <option key={type} value={type}>
                  {type}
                </option>
              ))}
            </select>
          </label>
          <label className="grid gap-2.5 text-sm font-bold text-cocoa">
            Subject
            <input
              className="min-h-[52px] w-full rounded-xl border border-oat bg-white px-4 py-3 text-bark outline-none transition focus:border-sage focus:ring-4 focus:ring-sage/15"
              maxLength={140}
              name="subject"
              value={form.subject}
              onChange={(event) => updateField("subject", event.target.value)}
            />
          </label>
        </div>

        <label className="grid gap-2.5 text-sm font-bold text-cocoa">
          Message
          <textarea
            className="min-h-[160px] w-full resize-y rounded-xl border border-oat bg-white p-4 leading-7 text-bark outline-none transition focus:border-sage focus:ring-4 focus:ring-sage/15 sm:min-h-[180px]"
            maxLength={4000}
            name="message"
            value={form.message}
            onChange={(event) => updateField("message", event.target.value)}
          />
          <span className="text-right text-xs font-semibold text-bark/70">{form.message.length}/4000 characters</span>
        </label>

        <label className="flex gap-3 rounded-2xl border border-oat bg-white p-4 text-sm font-semibold leading-6 text-bark sm:p-5">
          <input
            className="mt-1 h-4 w-4 flex-none accent-sage"
            checked={form.consent}
            type="checkbox"
            onChange={(event) => updateField("consent", event.target.checked)}
          />
          <span>
            I understand DogHaven does not provide emergency veterinary support and this message is
            not for urgent animal care.
          </span>
        </label>

        <div className="w-full overflow-x-auto rounded-2xl border border-oat bg-white p-4 sm:p-5">
          {siteKey ? (
            <div ref={captchaRef} className="min-w-[300px]" />
          ) : (
            <p className="text-sm font-semibold leading-6 text-bark">
              CAPTCHA is not configured in this environment. Add{" "}
              <code className="mx-1 break-all rounded bg-cream px-1.5 py-0.5 text-cocoa">NEXT_PUBLIC_TURNSTILE_SITE_KEY</code>
              {" "}to enable Cloudflare Turnstile.
            </p>
          )}
        </div>

        <div className="grid gap-4 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-center">
          <p className="text-sm leading-6 text-bark">
            We use the information you submit only to respond to your message and improve DogHaven.{" "}
            <a className="font-black text-moss underline-offset-4 hover:underline" href="/privacy-policy">
              Privacy policy
            </a>
          </p>
          <button
            className="inline-flex min-h-[52px] w-full items-center justify-center gap-2 rounded-xl bg-honey px-6 py-3 text-sm font-black text-cocoa shadow-sm transition hover:bg-sage disabled:cursor-not-allowed disabled:opacity-65 sm:w-auto"
            disabled={status === "loading"}
            type="submit"
          >
            {status === "loading" ? <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" /> : <Send className="h-4 w-4" aria-hidden="true" />}
            {status === "loading" ? "Sending..." : "Send message"}
          </button>
        </div>
      </form>
    </section>
  );
}
