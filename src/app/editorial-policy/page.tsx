import type { Metadata } from "next";
import { UtilityHero } from "@/components/UtilityHero";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "Editorial Policy | Dog Haven",
  description:
    "How Dog Haven researches, checks, updates and corrects its South African dog care content.",
  path: "/editorial-policy",
});

export default function EditorialPolicyPage() {
  return (
    <>
      <UtilityHero path="/editorial-policy" kicker="Editorial Policy" title="How Dog Haven earns trust" intro="This is the working method used to plan, source, check, publish, and correct Dog Haven content. It favours useful answers, honest limits, South African relevance, and traceable evidence over publishing volume." compact />
      <section className="section-shell py-12 sm:py-16">
      <div className="mt-8 space-y-5">
        {[
          {
            title: "1. Topic selection",
            text: "Topics begin with a real owner decision: recognising a warning sign, preparing for care, comparing service questions, understanding a cost, or planning responsible ownership. Priority goes to questions where a clear next step can reduce confusion or delay.",
          },
          {
            title: "2. South African relevance check",
            text: "Before drafting, the topic is checked for local disease risks, climate, law, travel, housing, service access, product availability, and cost context. Local differences are included only when they materially affect the reader's decision.",
          },
          {
            title: "3. Preferred source hierarchy",
            text: "For health, safety, law, and public-risk claims, Dog Haven prefers South African regulators and government bodies, veterinary or public-health authorities, primary research, and established professional organisations. Official provider or venue pages are preferred for their own services and rules. Secondary sources are used cautiously and identified when a direct source is unavailable.",
          },
          {
            title: "4. Medical and emergency safety",
            text: "Health content is educational: it does not diagnose, prescribe, or tell an owner to delay care. Emergency warning signs and unsafe home-treatment boundaries are stated plainly. Uncertainty is handled by directing the reader to a veterinarian. Dog Haven does not claim veterinary review where no qualified reviewer is identified.",
          },
          {
            title: "5. Local provider verification",
            text: "Provider details are published only on selected local and service pages after manual research against an official provider source or a clearly labelled public source. A listing is a starting point, not a ranking, review, endorsement, or guarantee. Readers must confirm current services, prices, availability, rules, and emergency intake directly. Pages without enough verified options retain practical planning guidance.",
          },
          {
            title: "6. Prices, comparisons, and rankings",
            text: "Dog Haven does not invent current prices, national averages, ratings, reviews, or best-provider lists. Cost pages explain the factors behind a quote and direct readers to current written information. Comparisons use relevant decision criteria rather than unsupported quality claims.",
          },
          {
            title: "7. Internal review before publication",
            text: "Before publication, a guide is checked for a clear reader purpose, source support, South African context, medical and emergency boundaries, unsupported claims, working internal links, and consistency with related Dog Haven pages. This editorial check is not presented as professional veterinary review.",
          },
          {
            title: "8. Corrections and updates",
            text: "Material errors, changed rules, outdated provider details, and missing safety context are assessed against current evidence. Confirmed problems are corrected in the affected page and checked against related copy so the same contradiction is not left elsewhere.",
          },
          {
            title: "9. Reporting an error",
            text: "Readers can use the contact page to send the page URL, the exact statement or provider detail in question, and a supporting official or otherwise reliable source. Dog Haven reviews the evidence before changing published information.",
          },
          {
            title: "10. Editorial guidance and advertising",
            text: "Advertising is kept separate from editorial decisions. An advertisement does not determine which topics are covered, how a guide reaches its conclusions, or whether a provider appears in verified local options. Provider inclusion is not sold as a ranking or endorsement.",
          },
        ].map((item) => (
          <article key={item.title} className="rounded-2xl border border-oat bg-white p-6 shadow-sm">
            <h2 className="text-xl font-black text-cocoa">{item.title}</h2>
            <p className="mt-2 leading-7 text-bark">{item.text}</p>
          </article>
        ))}
      </div>
      <p className="mt-6 leading-7 text-bark">
        To report an error, include the relevant page and evidence on the{" "}
        <a className="font-bold text-moss underline-offset-4 hover:underline" href="/contact">
          Dog Haven contact page
        </a>
        .
      </p>
      </section>
    </>
  );
}
