import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ContentLinkCard } from "@/components/ContentLinkCard";
import { FAQBlock } from "@/components/FAQBlock";
import { SourceList } from "@/components/SourceList";
import { createMetadata } from "@/lib/seo";
import { JsonLd, collectionPageSchema, faqSchema } from "@/lib/schema";

const standards = [
  {
    title: "Original South Africa-specific content",
    description:
      "DogHaven is written for South African dog owners, with local context such as climate, ticks, rabies, adoption risks, public-space rules, costs, and emergency planning.",
    href: "/start-here",
  },
  {
    title: "No fake listings",
    description:
      "DogHaven does not invent vets, shelters, groomers, trainers, venues, phone numbers, reviews, rankings, or verified badges.",
    href: "/editorial-policy",
  },
  {
    title: "Sources where they matter",
    description:
      "Medical, safety, welfare, public-rule, and technical claims use source starting points such as veterinary, welfare, public health, and official local resources.",
    href: "/health",
  },
  {
    title: "Editorial independence",
    description:
      "DogHaven does not publish paid rankings, affiliate recommendations, fake endorsements, or advertorial-style product reviews.",
    href: "/editorial-policy",
  },
  {
    title: "Ads stay separate from guidance",
    description:
      "If advertising is introduced later, DogHaven will keep editorial guidance separate from ads and will not let ads create fake recommendations.",
    href: "/privacy-policy",
  },
  {
    title: "User-first dog care",
    description:
      "The site is designed to help owners ask better questions, prepare sooner, and contact qualified professionals when needed.",
    href: "/about",
  },
];

const faqs = [
  {
    question: "Does DogHaven currently run advertising?",
    answer:
      "No AdSense or affiliate code has been added to the site at this stage. This page explains the quality standards DogHaven uses before any future advertising.",
  },
  {
    question: "Will future ads influence DogHaven's guide content?",
    answer:
      "No. Editorial content should remain separate from advertising. DogHaven will not publish fake rankings, paid recommendations disguised as advice, or invented reviews.",
  },
  {
    question: "Does DogHaven publish local business listings?",
    answer:
      "Not yet. Local directory listings would only be considered after manual verification. DogHaven will not publish fake phone numbers, fake listings, or unsupported verified badges.",
  },
];

const sources = [
  {
    label: "DogHaven Editorial Policy",
    href: "/editorial-policy",
    note: "Explains DogHaven's editorial boundaries, sourcing expectations, and no-fake-listings approach.",
  },
  {
    label: "DogHaven Privacy Policy",
    href: "/privacy-policy",
    note: "Explains current privacy and advertising-tracking status in public-facing terms.",
  },
  {
    label: "DogHaven Contact",
    href: "/contact",
    note: "Provides a way to suggest corrections, ask about listings, or share practical dog-owner questions.",
  },
];

export const metadata: Metadata = createMetadata({
  title: "AdSense Readiness and Quality Standards | DogHaven",
  description:
    "DogHaven's public quality standards for original South African dog-care content, no fake listings, clear sourcing, editorial independence, and future ad separation.",
  path: "/adsense-readiness",
});

export default function AdsenseReadinessPage() {
  return (
    <>
      <JsonLd
        data={collectionPageSchema({
          title: "AdSense Readiness and Quality Standards",
          description:
            "DogHaven's public-facing quality standards for trustworthy dog-care content and future advertising separation.",
          path: "/adsense-readiness",
        })}
      />
      <JsonLd data={faqSchema(faqs)} />
      <section className="section-shell">
        <Breadcrumbs items={[{ name: "AdSense Readiness", href: "/adsense-readiness" }]} />
        <p className="section-kicker">Quality standards</p>
        <h1 className="section-title">DogHaven quality and advertising readiness</h1>
        <p className="section-copy">
          DogHaven is being built as a trustworthy South African dog-care resource first. This page
          explains the public standards behind the site: original guidance, careful sourcing, no fake
          listings, no paid rankings, and a clear separation between future advertising and editorial
          help.
        </p>

        <div className="mt-10 grid items-stretch gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {standards.map((standard) => (
            <ContentLinkCard key={standard.title} {...standard} />
          ))}
        </div>

        <section className="mt-12 rounded-2xl border border-oat bg-white p-6 shadow-sm">
          <h2 className="text-2xl font-black text-cocoa">How DogHaven protects trust</h2>
          <div className="mt-4 space-y-4 leading-7 text-bark">
            <p>
              DogHaven does not add AdSense code or affiliate links during this foundation phase.
              The focus is useful content, strong internal navigation, source lists where needed,
              clear review dates, and practical South African owner guidance.
            </p>
            <p>
              If advertising appears in the future, it should be clearly separated from editorial
              content. DogHaven will not allow paid placement to become a fake recommendation,
              ranking, review, or verified listing.
            </p>
          </div>
        </section>

        <section className="mt-12 grid gap-8 lg:grid-cols-[1fr_0.8fr]">
          <div>
            <h2 className="text-2xl font-black text-cocoa">Common questions</h2>
            <div className="mt-5">
              <FAQBlock items={faqs} />
            </div>
          </div>
          <SourceList sources={sources} />
        </section>
      </section>
    </>
  );
}
