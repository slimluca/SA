import type { Metadata } from "next";
import { UtilityHero } from "@/components/UtilityHero";
import { createMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = createMetadata({
  title: "Privacy Policy | Dog Haven",
  description:
    "Dog Haven's privacy policy explaining basic site data, contact emails, analytics readiness, and future advertising boundaries.",
  path: "/privacy-policy",
});

export default function PrivacyPolicyPage() {
  return (
    <>
      <UtilityHero path="/privacy-policy" kicker="Privacy Policy" title="How Dog Haven handles visitor information" intro="This policy explains how DogHaven.co.za handles information, contact messages, analytics, cookies and third-party services." compact />
      <section className="section-shell max-w-5xl py-12 sm:py-16">
      <div className="mt-8 space-y-5 rounded-2xl border border-oat bg-white p-6 shadow-sm">
        <section>
          <h2 className="text-xl font-black text-cocoa">Information you send</h2>
          <p className="mt-2 leading-7 text-bark">
            If you email Dog Haven or use the contact form, your name, email address, message type,
            subject, message, page/source, and timestamp may be used to respond, review a
            correction, consider a guide topic, or improve Dog Haven. Contact form submissions are
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
            Dog Haven uses Google Analytics 4 to understand how the website is used and to improve
            website performance and content for South African readers. Analytics information may
            include page visits, interactions, usage information, device and browser information,
            approximate location, and the source that referred you to DogHaven.co.za. Google
            Analytics may use cookies or similar technologies, and Google may process analytics
            data according to its own privacy terms. Sensitive personal information should not
            intentionally be sent to Dog Haven through analytics.
          </p>
        </section>
        <section>
          <h2 className="text-xl font-black text-cocoa">Future advertising services</h2>
          <p className="mt-2 leading-7 text-bark">
            DogHaven.co.za does not currently display Google AdSense advertisements. Advertising
            services such as Google AdSense may be introduced in future, and this Privacy Policy
            will apply when those services are activated. Advertising providers may use cookies or
            similar technologies to serve advertisements, measure advertising performance, prevent
            fraud, and personalise advertising where permitted and consented to. This policy may be
            updated before or when advertising is introduced to reflect the services and choices
            then available.
          </p>
        </section>
        <section>
          <h2 className="text-xl font-black text-cocoa">Your choices</h2>
          <p className="mt-2 leading-7 text-bark">
            You can use your browser settings to block, limit, or delete cookies. Blocking some
            cookies may affect how parts of a website work. Where DogHaven.co.za provides consent
            controls, you can use them to make or change your choices. Analytics or advertising
            preferences may also be available through your browser, device, or the relevant service
            provider. Advertising personalisation will only be used where it is permitted and, when
            required, consented to.
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
    </>
  );
}
