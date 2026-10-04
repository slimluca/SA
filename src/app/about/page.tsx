import type { Metadata } from "next";
import { UtilityHero } from "@/components/UtilityHero";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "About Dog Haven | Practical Dog Care for South Africa",
  description:
    "Learn who Dog Haven serves, how its South African dog care guides are produced, and how verified local options and corrections are handled.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <>
      <UtilityHero path="/about" kicker="About Dog Haven" title="Dog care written for South African owners" intro="Dog Haven makes dog care easier to understand for people living in South Africa. Owners often need information before they know which professional to call, what to ask, or how much to budget. The site addresses those moments with useful local context and honest limits." />
      <section className="section-shell py-12 sm:py-16">
      <div className="mt-8 grid gap-5 md:grid-cols-2">
        <article className="rounded-xl border border-oat bg-white p-5 shadow-panel">
          <h2 className="text-2xl font-black text-cocoa">Who Dog Haven serves</h2>
          <p className="mt-3 leading-7 text-bark">
            Dog Haven is for current and prospective owners dealing with a new puppy, adoption,
            symptoms, an emergency, everyday care, service providers, or the cost of ownership.
            The guides explain the options and questions without making personal decisions for the
            reader.
          </p>
        </article>
        <article className="rounded-xl border border-oat bg-white p-5 shadow-panel">
          <h2 className="text-2xl font-black text-cocoa">Why the focus is South Africa</h2>
          <p className="mt-3 leading-7 text-bark">
            Climate, tick and rabies risks, travel distances, local rules, housing patterns,
            available services, and costs all affect dog-care decisions. Dog Haven checks whether a
            topic needs South African context instead of simply repeating generic international
            advice.
          </p>
        </article>
        <article className="rounded-xl border border-oat bg-white p-5 shadow-panel">
          <h2 className="text-2xl font-black text-cocoa">What makes the guides different</h2>
          <p className="mt-3 leading-7 text-bark">
            Guides connect general dog-care information to useful owner actions: warning signs,
            questions to ask, records to keep, costs to plan for, and checks to make locally. Dog
            Haven avoids invented statistics, unsupported prices, paid-looking rankings, fake
            reviews, and certainty where a veterinarian or current provider must answer.
          </p>
        </article>
        <article className="rounded-xl border border-oat bg-white p-5 shadow-panel">
          <h2 className="text-2xl font-black text-cocoa">How guides are selected and written</h2>
          <p className="mt-3 leading-7 text-bark">
            The Dog Haven Editorial Team is the organisation responsible for planning, sourcing,
            checking, publishing, and correcting these guides. Topics are chosen around recurring
            South African owner decisions, especially questions where unclear advice could waste
            time, money, or delay care. Drafts define the reader&apos;s decision, check local relevance,
            use appropriate sources, state safety limits, and link to a useful next step before
            publication.
          </p>
        </article>
        <article className="rounded-xl border border-oat bg-white p-5 shadow-panel">
          <h2 className="text-2xl font-black text-cocoa">How verified local options work</h2>
          <p className="mt-3 leading-7 text-bark">
            Selected local and service pages publish provider details only after the records have
            been manually researched against an official provider source or a clearly identified
            public source. These options are starting points, not rankings or endorsements. Readers
            must confirm current services, availability, prices, rules, and emergency intake
            directly. Where there are not enough verified options, the page still provides a
            questions and checklists for readers researching their own options.
          </p>
        </article>
        <article className="rounded-xl border border-oat bg-white p-5 shadow-panel">
          <h2 className="text-2xl font-black text-cocoa">What Dog Haven cannot verify</h2>
          <p className="mt-3 leading-7 text-bark">
            A published source cannot guarantee a provider&apos;s present availability, service quality,
            price, suitability for a particular dog, or response in an emergency. Venue rules,
            laws, product information, and professional availability can also change. Check the
            current details with the responsible organisation or professional before relying on
            them.
          </p>
        </article>
        <article className="rounded-xl border border-oat bg-white p-5 shadow-panel md:col-span-2">
          <h2 className="text-2xl font-black text-cocoa">Veterinary advice and corrections</h2>
          <p className="mt-3 leading-7 text-bark">
            Dog Haven does not diagnose, prescribe treatment, or replace a veterinarian. Medical
            guides use cautious boundaries and direct readers to veterinary care when symptoms,
            uncertainty, or urgency require it. Dog Haven does not claim that articles are reviewed
            by a veterinarian.
          </p>
          <p className="mt-3 leading-7 text-bark">
            If a reader finds an error, an outdated provider detail, or missing safety context, they
            can send the page URL, the disputed detail, and a supporting source through the{" "}
            <a className="font-bold text-moss underline-offset-4 hover:underline" href="/contact">
              contact page
            </a>
            . The evidence is checked before a correction is made.
          </p>
        </article>
      </div>
      </section>
    </>
  );
}
