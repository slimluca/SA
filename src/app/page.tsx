import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, MapPinned, Wrench } from "lucide-react";
import { FAQBlock } from "@/components/FAQBlock";
import { HomeHeroSlider } from "@/components/HomeHeroSlider";
import { ProvinceGrid } from "@/components/ProvinceGrid";
import { SearchBox } from "@/components/SearchBox";
import { SourceList } from "@/components/SourceList";
import { TrustBar } from "@/components/TrustBar";
import { categories, featuredGuides, homeFaqs, provinces, sourceLinks, trustItems } from "@/lib/data";
import { homepageMoneyPages, homepagePopularGuides, homepageTools } from "@/lib/promo-links";
import { createMetadata } from "@/lib/seo";
import { JsonLd, faqSchema } from "@/lib/schema";

export const metadata: Metadata = createMetadata({
  title: "Dog Care South Africa | Practical Guides & Free Tools | Dog Haven",
  description:
    "Practical South African dog care guides, free dog tools, puppy help, food safety, symptoms, insurance, dog costs, breeds, adoption and dog-friendly planning.",
  path: "/",
  image: "/images/home/dog-haven-south-africa-hero.webp",
  imageAlt: "Dog and owner walking along a quiet South African coastal path",
  imageWidth: 1536,
  imageHeight: 1024,
});

type EditorialLinkProps = {
  title: string;
  description: string;
  href: string;
  inverse?: boolean;
};

function EditorialLink({ title, description, href, inverse = false }: EditorialLinkProps) {
  return (
    <Link href={href} className={`group flex items-start justify-between gap-4 border-t py-4 outline-none transition focus-visible:rounded-lg focus-visible:ring-2 ${inverse ? "border-white/20 text-white focus-visible:ring-white" : "border-oat text-cocoa focus-visible:ring-moss"}`}>
      <span>
        <span className={`block font-black leading-6 ${inverse ? "text-white" : "text-cocoa group-hover:text-moss"}`}>{title}</span>
        <span className={`mt-1 block text-sm leading-6 ${inverse ? "text-white/80" : "text-bark"}`}>{description}</span>
      </span>
      <ArrowRight className={`mt-1 h-4 w-4 shrink-0 transition-transform group-hover:translate-x-1 ${inverse ? "text-honey" : "text-sage"}`} aria-hidden="true" />
    </Link>
  );
}

const extraDestinations = [
  { title: "Local Dog Guides", description: "Navigate local context, services, climate, outings and practical planning.", href: "/local", icon: MapPinned },
  { title: "Free Dog Tools", description: "Use calculators, checklists, quizzes and quick owner lookups.", href: "/tools", icon: Wrench },
] as const;

export default function HomePage() {
  const destinations = [...categories, ...extraDestinations];

  return (
    <>
      {homeFaqs.length > 0 ? <JsonLd data={faqSchema(homeFaqs)} /> : null}
      <HomeHeroSlider />

      <section className="section-shell py-12 sm:py-16">
        <div className="max-w-4xl">
          <p className="section-kicker">A practical place to begin</p>
          <h2 className="section-title">Better dog decisions start with clear local context</h2>
          <div className="mt-5 space-y-4 text-base leading-7 text-bark">
            <p>Dog Haven helps South African owners work through real questions about health, safety, food, training, adoption, breeds, costs, services and everyday life. The aim is useful preparation: what matters, what to observe, what to ask and when professional help should not wait.</p>
            <p>Guides are written for local conditions and responsible ownership without fake rankings, invented providers or certainty where an individual dog needs veterinary or qualified professional advice.</p>
          </div>
        </div>
        <div className="mt-7 max-w-3xl">
          <SearchBox />
        </div>
      </section>

      <section id="explore" className="border-y border-oat bg-white/55 scroll-mt-24">
        <div className="section-shell py-12 sm:py-16">
          <div className="max-w-3xl">
            <p className="section-kicker">Explore Dog Haven</p>
            <h2 className="section-title">Start with the question in front of you</h2>
            <p className="section-copy">Move directly into the topic that fits today’s decision. These are compact pathways into the full guide library, not a wall of equal-looking cards.</p>
          </div>
          <div className="mt-8 grid items-start gap-x-10 sm:grid-cols-2 lg:grid-cols-3">
            {destinations.map((destination) => {
              const Icon = destination.icon;
              return (
                <Link key={destination.href} href={destination.href} className="group grid grid-cols-[40px_1fr_auto] items-start gap-3 border-t border-oat py-5 outline-none transition focus-visible:rounded-lg focus-visible:ring-2 focus-visible:ring-moss">
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-sage/10 text-moss"><Icon className="h-5 w-5" aria-hidden="true" /></span>
                  <span><span className="block font-black leading-6 text-cocoa group-hover:text-moss">{destination.title}</span><span className="mt-1 block text-sm leading-6 text-bark">{destination.description}</span></span>
                  <ArrowRight className="mt-1 h-4 w-4 text-sage transition-transform group-hover:translate-x-1" aria-hidden="true" />
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section-shell py-12 sm:py-16">
        <div className="max-w-3xl">
          <p className="section-kicker">Useful starting points</p>
          <h2 className="section-title">South African guides owners reach for first</h2>
          <p className="section-copy">Begin with locally important health, safety, adoption and budgeting guidance, then follow the contextual links into more specific decisions.</p>
        </div>
        <div className="mt-7 grid items-start gap-x-10 sm:grid-cols-2">
          {homepagePopularGuides.map((guide) => <EditorialLink key={guide.href} {...guide} />)}
        </div>
      </section>

      <section className="bg-sage text-white">
        <div className="section-shell py-12 sm:py-16">
          <div className="max-w-3xl">
            <p className="text-sm font-black uppercase tracking-wide text-honey">Featured guide areas</p>
            <h2 className="mt-2 text-3xl font-black leading-tight text-white sm:text-4xl">Practical guidance for high-stakes and high-frequency questions</h2>
            <p className="mt-4 leading-7 text-white/85">These editorial pathways cover safety, scams, costs, breed fit, tick-borne illness and responsible service planning without replacing professional care.</p>
          </div>
          <div className="mt-7 grid items-start gap-x-10 sm:grid-cols-2">
            {featuredGuides.map((guide) => <EditorialLink key={guide.href} title={guide.title} description={guide.description} href={guide.href} inverse />)}
          </div>
        </div>
      </section>

      <section className="section-shell py-12 sm:py-16">
        <div className="max-w-3xl">
          <p className="section-kicker">Free owner tools</p>
          <h2 className="section-title">Estimate, organise and prepare</h2>
          <p className="section-copy">Use these quick tools as planning aids, then adjust for your individual dog and current professional advice.</p>
        </div>
        <div className="mt-7 grid items-start gap-x-10 sm:grid-cols-2">
          {homepageTools.map((tool) => <EditorialLink key={tool.href} {...tool} />)}
        </div>
      </section>

      <section className="border-y border-oat bg-oat/35">
        <div className="section-shell py-12 sm:py-16">
          <div className="max-w-3xl">
            <p className="section-kicker">Insurance and costs</p>
            <h2 className="section-title">Plan money decisions without fake prices or pressure</h2>
            <p className="section-copy">Compare recurring costs, emergency preparation and policy wording using your own current quotes and household figures.</p>
          </div>
          <div className="mt-7 grid items-start gap-x-10 sm:grid-cols-2">
            {homepageMoneyPages.map((page) => <EditorialLink key={page.href} {...page} />)}
          </div>
        </div>
      </section>

      <section className="section-shell py-12 sm:py-16">
        <div className="max-w-3xl">
          <p className="section-kicker">Province explorer</p>
          <h2 className="section-title">Dog care varies by place, climate and access</h2>
          <p className="section-copy">Weather, tick pressure, travel distances, rental rules, public-space etiquette and emergency-care availability all shape responsible planning.</p>
        </div>
        <div className="mt-7"><ProvinceGrid provinces={provinces} /></div>
      </section>

      <section className="border-y border-oat bg-white/55">
        <div className="section-shell py-12 sm:py-16">
          <div className="max-w-4xl">
            <p className="section-kicker">Trust and editorial standards</p>
            <h2 className="section-title">Useful guidance with clear boundaries</h2>
            <p className="section-copy">Dog Haven combines practical South African context with transparent sourcing and correction standards. Medical guidance stays educational and directs owners to qualified care when symptoms or risk require it.</p>
          </div>
          <div className="mt-7"><TrustBar items={trustItems} /></div>
        </div>
      </section>

      <section className="section-shell space-y-10 py-12 sm:py-16">
        <section className="max-w-4xl">
          <p className="section-kicker">Common questions</p>
          <h2 className="section-title">What Dog Haven can—and cannot—do</h2>
          <p className="section-copy">Use the site to prepare, understand and ask better questions, never to delay urgent care or treat general information as an individual diagnosis.</p>
          <div className="mt-7"><FAQBlock items={homeFaqs} /></div>
        </section>
        <div className="max-w-4xl"><SourceList sources={sourceLinks} /></div>
      </section>
    </>
  );
}
