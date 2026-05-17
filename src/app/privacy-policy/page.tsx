import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { createMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = createMetadata({
  title: "Privacy Policy | DogHaven",
  description:
    "DogHaven's privacy policy explaining basic site data, contact emails, analytics readiness, and future advertising boundaries.",
  path: "/privacy-policy",
});

export default function PrivacyPolicyPage() {
  return (
    <section className="section-shell">
      <Breadcrumbs items={[{ name: "Privacy Policy", href: "/privacy-policy" }]} />
      <p className="section-kicker">Privacy Policy</p>
      <h1 className="section-title">Privacy matters, even on a practical guide</h1>
      <p className="section-copy">
        This policy explains how DogHaven.co.za handles information. The site is currently a
        content guide and does not include advertising tags, affiliate tracking, public accounts, or
        directory submission forms.
      </p>

      <div className="mt-8 space-y-5 rounded-2xl border border-oat bg-white p-6 shadow-sm">
        <section>
          <h2 className="text-xl font-black text-cocoa">Information you send</h2>
          <p className="mt-2 leading-7 text-bark">
            If you email DogHaven or use the contact form, your name, email address, message type,
            subject, message, page/source, and timestamp may be used to respond, review a
            correction, consider a guide topic, or improve DogHaven. Contact form submissions are
            sent by email and are not stored in a public directory or website account. Do not send
            sensitive medical records unless a qualified veterinary professional has told you it is
            appropriate.
          </p>
        </section>
        <section>
          <h2 className="text-xl font-black text-cocoa">Spam protection</h2>
          <p className="mt-2 leading-7 text-bark">
            The contact form uses Cloudflare Turnstile to reduce spam. CAPTCHA verification helps
            confirm that a real visitor is using the form, and the verification provider may process
            limited technical information according to its own privacy practices.
          </p>
        </section>
        <section>
          <h2 className="text-xl font-black text-cocoa">Analytics and cookies</h2>
          <p className="mt-2 leading-7 text-bark">
            DogHaven may use privacy-conscious analytics in future to understand which pages help
            readers. Advertising and affiliate tracking are not added in this foundation.
          </p>
        </section>
        <section>
          <h2 className="text-xl font-black text-cocoa">Third-party links</h2>
          <p className="mt-2 leading-7 text-bark">
            Guides may link to official, veterinary, public health, or other relevant websites.
            Those sites have their own privacy practices.
          </p>
        </section>
        <section>
          <h2 className="text-xl font-black text-cocoa">Contact</h2>
          <p className="mt-2 leading-7 text-bark">
            Privacy questions can be sent to{" "}
            <a className="font-bold text-moss underline-offset-4 hover:underline" href={`mailto:${siteConfig.email}`}>
              {siteConfig.email}
            </a>
            .
          </p>
        </section>
      </div>
    </section>
  );
}
