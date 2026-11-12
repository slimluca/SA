import type { Metadata } from "next";
import { UtilityHero } from "@/components/UtilityHero";
import { createMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = createMetadata({
  title: "Privacy Policy | Dog Haven",
  description:
    "How Dog Haven handles contact messages, technical site data, Cloudflare Turnstile, cookies, and third-party links.",
  path: "/privacy-policy",
});

export default function PrivacyPolicyPage() {
  return (
    <>
      <UtilityHero path="/privacy-policy" kicker="Privacy Policy" title="How Dog Haven handles visitor information" intro="This policy explains what information DogHaven.co.za receives when you use the site, contact us, or use the contact form." compact />
      <section className="section-shell max-w-5xl py-12 sm:py-16">
      <div className="mt-8 space-y-5 rounded-2xl border border-oat bg-white p-6 shadow-sm">
        <p className="leading-7 text-bark">Last updated: 12 November 2026.</p>
        <section>
          <h2 className="text-xl font-black text-cocoa">Information you send</h2>
          <p className="mt-2 leading-7 text-bark">
            If you email Dog Haven or use the contact form, we receive the details you provide,
            such as your name, email address, subject, and message. We use them to respond, review
            a correction, or consider a suggested topic. Contact messages are not displayed in a
            public directory or website account. Please do not send sensitive medical records.
          </p>
        </section>
        <section>
          <h2 className="text-xl font-black text-cocoa">Site delivery, security, and analytics</h2>
          <p className="mt-2 leading-7 text-bark">
            Dog Haven currently does not load Google Analytics 4 or Google AdSense. Our website
            hosting and security providers, including Vercel and Cloudflare where enabled, may
            process technical request information such as an IP address, browser details, the page
            requested, and the time of the request to deliver, maintain, and protect the site. We
            may review aggregate traffic and security information available in those services to
            understand whether the site is working and being visited. Their own privacy terms also
            apply to data they process.
          </p>
        </section>
        <section>
          <h2 className="text-xl font-black text-cocoa">Contact form spam protection</h2>
          <p className="mt-2 leading-7 text-bark">
            The contact form uses Cloudflare Turnstile to reduce automated spam. Cloudflare may
            process technical information needed to verify form submissions, subject to its own
            privacy practices.
          </p>
        </section>
        <section>
          <h2 className="text-xl font-black text-cocoa">Cookies and browser choices</h2>
          <p className="mt-2 leading-7 text-bark">
            Dog Haven does not currently use Google Analytics cookies or advertising cookies.
            Hosting, security, or spam-protection services may use technical storage or similar
            processing to provide their services. You can manage cookies and site data in your
            browser. Blocking some technical features may affect the contact form or other parts of
            the site.
          </p>
        </section>
        <section>
          <h2 className="text-xl font-black text-cocoa">Third-party links</h2>
          <p className="mt-2 leading-7 text-bark">
            Guides may link to official, veterinary, public-health, or other relevant websites.
            Those websites have their own privacy practices, which we do not control.
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