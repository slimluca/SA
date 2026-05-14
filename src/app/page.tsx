import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { EmergencyNotice } from "@/components/EmergencyNotice";
import { FAQBlock } from "@/components/FAQBlock";
import { FeatureCard } from "@/components/FeatureCard";
import { GuideCard } from "@/components/GuideCard";
import { Hero } from "@/components/Hero";
import { ProvinceGrid } from "@/components/ProvinceGrid";
import { SourceList } from "@/components/SourceList";
import { TrustBar } from "@/components/TrustBar";
import { categories, featuredGuides, homeFaqs, provinces, sourceLinks, trustItems } from "@/lib/data";
import { createMetadata } from "@/lib/seo";
import { JsonLd, faqSchema } from "@/lib/schema";

export const metadata: Metadata = createMetadata({
  title: "DogHaven | South Africa's Practical Dog Care Guide",
  description:
    "DogHaven helps South African dog owners with health, emergency guidance, breeds, adoption, training, grooming, food, insurance, dog costs, and dog-friendly places.",
  path: "/",
});

export default function HomePage() {
  return (
    <>
      {homeFaqs.length > 0 ? <JsonLd data={faqSchema(homeFaqs)} /> : null}
      <Hero
        title="South Africa's practical dog care guide"
        intro="DogHaven helps South African dog owners make calmer, better-informed decisions about health, emergency guidance, breeds, adoption, training, grooming, food, insurance, costs, and dog-friendly places."
      />

      <section className="section-shell">
        <Breadcrumbs items={[]} />
        <EmergencyNotice />
      </section>

      <section className="section-shell pt-4">
        <p className="section-kicker">Dog care topics</p>
        <h2 className="section-title">Start with the question in front of you</h2>
        <p className="section-copy">
          The goal is practical guidance, not panic or guesswork. Each topic is designed to help
          owners understand what matters, what to ask a professional, and what to prepare before a
          decision becomes urgent.
        </p>
        <div className="mt-8 grid items-stretch gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((category) => (
            <FeatureCard key={category.title} {...category} />
          ))}
        </div>
      </section>

      <section className="bg-oat/55">
        <div className="section-shell">
          <p className="section-kicker">Trust and editorial standards</p>
          <h2 className="section-title">Built to be useful before it is big</h2>
          <p className="section-copy">
            DogHaven is being built around practical South African owner needs, careful sourcing,
            and clear boundaries. Directory content will only be published after manual checks, and
            medical pages will point owners toward qualified veterinary care when symptoms or risk
            require it.
          </p>
          <div className="mt-8">
            <TrustBar items={trustItems} />
          </div>
        </div>
      </section>

      <section className="section-shell">
        <p className="section-kicker">Province explorer</p>
        <h2 className="section-title">Dog care varies by place, climate, and access</h2>
        <p className="section-copy">
          South African owners deal with different weather, tick pressure, travel distances, rental
          rules, beach access, park etiquette, and emergency-care availability. The province
          explorer keeps that local context visible.
        </p>
        <div className="mt-8">
          <ProvinceGrid provinces={provinces} />
        </div>
      </section>

      <section className="bg-sage text-cream">
        <div className="section-shell">
          <p className="text-sm font-black uppercase tracking-wide text-honey">Featured guide areas</p>
          <h2 className="mt-2 max-w-3xl text-3xl font-black leading-tight sm:text-4xl">
            Practical guides DogHaven owners will reach for first
          </h2>
          <p className="mt-4 max-w-3xl text-base leading-7 text-cream/86">
            These foundational guides are selected because they answer high-stakes, high-frequency
            questions for dog owners in South Africa without inventing claims or replacing
            professional care.
          </p>
          <div className="mt-8 grid items-stretch gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {featuredGuides.map((guide) => (
              <GuideCard key={guide.title} {...guide} />
            ))}
          </div>
        </div>
      </section>

      <section className="section-shell grid gap-6 lg:grid-cols-[1fr_0.85fr]">
        <div>
          <p className="section-kicker">Common questions</p>
          <h2 className="section-title">Clear boundaries make better guidance</h2>
          <p className="section-copy">
            DogHaven can help you prepare, understand, and ask better questions. It should not
            delay a vet visit, encourage risky home treatment, or dress opinion up as certainty.
          </p>
          <div className="mt-8">
            <FAQBlock items={homeFaqs} />
          </div>
        </div>
        <SourceList sources={sourceLinks} />
      </section>
    </>
  );
}
