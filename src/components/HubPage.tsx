import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Compass, MapPin, ShieldCheck } from "lucide-react";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { FAQBlock } from "@/components/FAQBlock";
import { PremiumHubPage } from "@/components/PremiumHubPage";
import { VerifiedLocalOptions } from "@/components/VerifiedLocalOptions";
import type { CardLink, HubContent } from "@/lib/content";
import { getPremiumHubConfig } from "@/lib/premium-hubs";
import { hubPromos } from "@/lib/promo-links";
import { JsonLd, collectionPageSchema, faqSchema } from "@/lib/schema";

type HubCardGroup = { title: string; description: string; cards: CardLink[] };

const presentations: Record<string, { image: string; alt: string; eyebrow: string }> = {
  puppy: { image: "/images/guides/puppy-training-south-africa.webp", alt: "South African owner guiding a puppy through a calm training routine", eyebrow: "A confident beginning" },
  training: { image: "/images/guides/dog-behaviour-training-south-africa.webp", alt: "Owner practising calm, humane training with a dog", eyebrow: "Clear, humane guidance" },
  grooming: { image: "/images/home/south-africa-dog-everyday-care.webp", alt: "Owner caring for a dog at home", eyebrow: "Comfort in the everyday" },
  insurance: { image: "/images/guides/compare-dog-insurance-south-africa.webp", alt: "Dog owner comparing practical insurance information", eyebrow: "Plan for the unexpected" },
  "dog-friendly": { image: "/images/home/south-africa-dog-outdoors-hero.webp", alt: "Dog and owner exploring a South African trail", eyebrow: "Explore responsibly" },
  local: { image: "/images/home/south-africa-dog-lifestyle.webp", alt: "Dog and owner enjoying a South African landscape", eyebrow: "Useful local context" },
  province: { image: "/images/home/south-africa-dog-outdoors-hero.webp", alt: "Dog walking with its owner in South Africa", eyebrow: "Across South Africa" },
  city: { image: "/images/home/south-africa-dog-lifestyle.webp", alt: "Dog and owner outdoors in South Africa", eyebrow: "City-by-city guidance" },
  "dog-services": { image: "/images/home/south-africa-dog-everyday-care.webp", alt: "Dog owner planning practical everyday care", eyebrow: "Choose services carefully" },
  "local-costs": { image: "/images/home/south-africa-dog-cost-planning.webp", alt: "South African dog owner planning care costs", eyebrow: "Local planning context" },
  tools: { image: "/images/home/south-africa-dog-cost-planning.webp", alt: "Dog owner using practical planning tools", eyebrow: "Practical tools, clearer choices" },
  laws: { image: "/images/home/south-africa-dog-family-adoption.webp", alt: "South African family spending time with their dog", eyebrow: "Responsible ownership" },
  fun: { image: "/images/home/south-africa-dog-outdoors-hero.webp", alt: "Dog and owner sharing an outdoor adventure", eyebrow: "More life together" },
  "dog-names": { image: "/images/home/south-africa-choosing-dog-hero.webp", alt: "Owner getting to know dogs before choosing a name", eyebrow: "Find the right name" },
};

const fallbackPresentation = { image: "/images/home/south-africa-dog-lifestyle.webp", alt: "A dog and owner sharing everyday life in South Africa", eyebrow: "Dog Haven South Africa" };

function LibraryLink({ link }: { link: CardLink }) {
  return (
    <Link href={link.href} className="group flex min-h-24 items-start justify-between gap-4 border-t border-oat py-4 outline-none hover:text-moss focus-visible:rounded-lg focus-visible:ring-2 focus-visible:ring-moss">
      <span><span className="block font-black leading-6 text-navy group-hover:text-moss">{link.title}</span><span className="mt-1 block text-sm leading-6 text-bark">{link.description}</span></span>
      <ArrowRight className="mt-1 h-4 w-4 shrink-0 text-sage transition group-hover:translate-x-1" aria-hidden="true" />
    </Link>
  );
}

export function HubPage({ hub, cardGroups }: { hub: HubContent; cardGroups?: HubCardGroup[] }) {
  const promotedGuides = hubPromos[hub.slug] ?? [];
  const premiumConfig = getPremiumHubConfig(hub.slug);
  if (premiumConfig) return <PremiumHubPage hub={hub} config={premiumConfig} promotedGuides={promotedGuides} />;

  const presentation = presentations[hub.slug] ?? fallbackPresentation;
  const showProviderNotice = hub.path === "/local" || hub.path === "/local-costs" || hub.path === "/dog-services" || hub.path.startsWith("/local/");
  const rawLinks = cardGroups?.flatMap((group) => group.cards) ?? hub.cards;
  const allLinks = Array.from(new Map(rawLinks.map((link) => [link.href, link])).values());
  const relatedLinks = Array.from(new Map(hub.related.map((link) => [link.href, link])).values());
  const featured = [...promotedGuides, ...allLinks].filter((link, index, links) => link.href !== hub.path && links.findIndex((item) => item.href === link.href) === index).slice(0, 3);
  const featuredHrefs = new Set(featured.map((link) => link.href));
  const library = allLinks.filter((link) => !featuredHrefs.has(link.href));

  return (
    <>
      <JsonLd data={collectionPageSchema({ title: hub.title, description: hub.description, path: hub.path })} />
      {hub.faqs.length > 0 ? <JsonLd data={faqSchema(hub.faqs)} /> : null}
      <section className="relative isolate overflow-hidden bg-emerald-deep text-white">
        <Image src={presentation.image} alt={presentation.alt} fill priority sizes="100vw" className="object-cover object-center" />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(3,55,45,.97),rgba(3,55,45,.82)_45%,rgba(3,55,45,.18))]" />
        <div className="section-shell relative min-h-[500px] py-10 sm:min-h-[540px] lg:flex lg:items-center lg:py-16">
          <div className="max-w-2xl">
            <div className="[&_a]:text-white/75 [&_span]:text-white/70"><Breadcrumbs items={[{ name: hub.title, href: hub.path }]} /></div>
            <p className="light-kicker">{presentation.eyebrow}</p>
            <h1 className="mt-4 max-w-2xl text-4xl font-black leading-[1.04] tracking-tight text-white sm:text-5xl lg:text-6xl">{hub.title}</h1>
            <p className="mt-5 max-w-xl text-base leading-7 text-white/85 sm:text-lg sm:leading-8">{hub.intro}</p>
            <div className="mt-8 flex flex-wrap gap-3">{allLinks[0] ? <Link href={allLinks[0].href} className="primary-light-button">Start with a guide <ArrowRight className="h-4 w-4" /></Link> : null}<Link href="#guide-library" className="secondary-light-button">Explore all topics</Link></div>
          </div>
        </div>
      </section>
      {hub.notice ? <section className="bg-[#edf7f0]"><div className="section-shell flex items-start gap-4 py-6"><ShieldCheck className="mt-1 h-6 w-6 shrink-0 text-sage" /><p className="max-w-4xl text-sm font-semibold leading-6 text-bark">{hub.notice}</p></div></section> : null}
      <section className="section-shell py-14 sm:py-20">
        <p className="section-kicker">Recommended starting points</p><h2 className="section-title">Useful guidance for the decision in front of you.</h2>
        <div className="mt-8 grid gap-5 lg:grid-cols-3">{featured.map((link, index) => <Link key={link.href} href={link.href} className={`group flex min-h-64 flex-col justify-between rounded-[1.4rem] border p-6 outline-none transition hover:-translate-y-1 focus-visible:ring-2 focus-visible:ring-moss ${index === 0 ? "border-emerald-deep bg-emerald-deep text-white shadow-soft" : "border-oat bg-white shadow-panel"}`}><span className={`flex h-11 w-11 items-center justify-center rounded-full ${index === 0 ? "bg-white/10 text-[#f3c76d]" : "bg-sage/10 text-sage"}`}><Compass className="h-5 w-5" /></span><span className="mt-8"><span className={`block text-2xl font-black leading-tight ${index === 0 ? "text-white" : "text-navy"}`}>{link.title}</span><span className={`mt-3 block text-sm leading-6 ${index === 0 ? "text-white/75" : "text-bark"}`}>{link.description}</span><span className={`mt-5 inline-flex items-center gap-2 text-sm font-black ${index === 0 ? "text-[#f3c76d]" : "text-moss"}`}>Explore <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" /></span></span></Link>)}</div>
      </section>
      {hub.sections?.length ? <section className="bg-emerald-deep text-white"><div className="section-shell grid gap-8 py-14 lg:grid-cols-[.72fr_1.28fr] lg:py-20"><div><p className="light-kicker">What to know first</p><h2 className="mt-4 text-3xl font-black leading-tight text-white sm:text-4xl">Context makes better decisions.</h2><p className="mt-4 leading-7 text-white/75">Dog Haven keeps the practical detail, local context and responsible boundaries close to the action you need to take.</p></div><div className="grid gap-4 sm:grid-cols-2">{hub.sections.map((section) => <article key={section.title} className="rounded-[1.25rem] border border-white/20 bg-white/10 p-5 backdrop-blur"><h3 className="text-xl font-black text-white">{section.title}</h3><div className="mt-3 space-y-3">{section.body.map((paragraph) => <p key={paragraph} className="text-sm leading-6 text-white/75">{paragraph}</p>)}</div></article>)}</div></div></section> : null}
      <div className="section-shell py-14 sm:py-20">
        <VerifiedLocalOptions providers={[]} showNotice={showProviderNotice} />
        <section id="guide-library" className="scroll-mt-24"><div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end"><div><p className="section-kicker">Complete guide library</p><h2 className="section-title">Keep exploring.</h2><p className="section-copy">Every established route remains available, grouped around useful owner questions.</p></div>{showProviderNotice ? <MapPin className="h-9 w-9 text-sage" /> : null}</div>{cardGroups ? <div className="mt-8 space-y-10">{cardGroups.map((group) => <section key={group.title}><h3 className="text-2xl font-black text-navy">{group.title}</h3><p className="mt-2 max-w-3xl leading-7 text-bark">{group.description}</p><div className="mt-4 grid gap-x-10 sm:grid-cols-2 lg:grid-cols-3">{group.cards.map((card) => <LibraryLink key={card.href} link={card} />)}</div></section>)}</div> : <div className="mt-8 grid gap-x-10 sm:grid-cols-2 lg:grid-cols-3">{library.map((card) => <LibraryLink key={card.href} link={card} />)}</div>}</section>
        <section className="mt-16 rounded-[1.5rem] border border-oat bg-white p-6 shadow-panel sm:p-8">
          <p className="section-kicker">Continue through Dog Haven</p>
          <h2 className="mt-3 text-3xl font-black leading-tight text-navy">Related guidance.</h2>
          <div className="mt-6 grid gap-x-8 sm:grid-cols-2 lg:grid-cols-3">{relatedLinks.map((link) => <LibraryLink key={link.href} link={link} />)}</div>
        </section>
        {hub.faqs.length > 0 ? <section className="mt-14 max-w-4xl"><p className="section-kicker">Common questions</p><h2 className="section-title">Clear answers, responsible limits.</h2><div className="mt-7"><FAQBlock items={hub.faqs} /></div></section> : null}
      </div>
    </>
  );
}
