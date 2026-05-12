import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { createMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = createMetadata({
  title: "Terms of Use | DogHaven",
  description:
    "DogHaven's terms of use for educational dog care content, responsible use, external links, and future listing boundaries.",
  path: "/terms",
});

export default function TermsPage() {
  return (
    <section className="section-shell">
      <Breadcrumbs items={[{ name: "Terms", href: "/terms" }]} />
      <p className="section-kicker">Terms of Use</p>
      <h1 className="section-title">Use DogHaven as guidance, not a substitute for care</h1>
      <p className="section-copy">
        By using DogHaven.co.za, you agree to use the information responsibly. The site provides
        educational dog care guidance for South African owners and does not provide veterinary,
        legal, financial, or emergency services.
      </p>

      <div className="mt-8 space-y-5 rounded-2xl border border-oat bg-white p-6 shadow-sm">
        <section>
          <h2 className="text-xl font-black text-cocoa">Educational information</h2>
          <p className="mt-2 leading-7 text-bark">
            DogHaven content can help you prepare questions and understand general care topics. It
            cannot diagnose, treat, or assess your dog. Contact a qualified veterinarian for medical
            concerns.
          </p>
        </section>
        <section>
          <h2 className="text-xl font-black text-cocoa">No emergency service</h2>
          <p className="mt-2 leading-7 text-bark">
            If your dog may be in danger, contact a veterinarian or emergency animal clinic
            immediately. Do not wait for a website response.
          </p>
        </section>
        <section>
          <h2 className="text-xl font-black text-cocoa">Listings and recommendations</h2>
          <p className="mt-2 leading-7 text-bark">
            DogHaven does not currently publish business directory listings. If listings are added
            later, publication will not mean a guarantee of service quality, availability, pricing,
            or suitability for your dog.
          </p>
        </section>
        <section>
          <h2 className="text-xl font-black text-cocoa">Contact</h2>
          <p className="mt-2 leading-7 text-bark">
            Questions about these terms can be sent to{" "}
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
