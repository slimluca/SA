import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2, PawPrint } from "lucide-react";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { FAQBlock } from "@/components/FAQBlock";
import type { CardLink, HubContent } from "@/lib/content";
import type { HubFeature, PremiumHubConfig } from "@/lib/premium-hubs";
import { JsonLd, collectionPageSchema, faqSchema } from "@/lib/schema";

type PremiumHubPageProps = { hub: HubContent; config: PremiumHubConfig; promotedGuides: CardLink[] };

function HubLink({ link }: { link: CardLink }) {
  return <Link href={link.href} className="group flex min-h-24 items-start justify-between gap-4 border-t border-oat py-4 outline-none focus-visible:rounded-lg focus-visible:ring-2 focus-visible:ring-moss"><span><span className="block font-black leading-6 text-navy group-hover:text-moss">{link.title}</span><span className="mt-1 block text-sm leading-6 text-bark">{link.description}</span></span><ArrowRight className="mt-1 h-4 w-4 shrink-0 text-sage transition group-hover:translate-x-1" /></Link>;
}

function FeatureLink({ feature, lead = false }: { feature: HubFeature; lead?: boolean }) {
  return <Link href={feature.href} className={`group overflow-hidden rounded-[1.35rem] border border-oat bg-white shadow-panel outline-none transition hover:-translate-y-1 focus-visible:ring-2 focus-visible:ring-moss ${lead ? "grid sm:grid-cols-[1.05fr_.95fr]" : "flex min-h-36"}`}>
    {feature.image ? <div className={`relative shrink-0 overflow-hidden bg-cream ${lead ? "min-h-64" : "w-32 sm:w-40"}`}><Image src={feature.image.src} alt={feature.image.alt} fill sizes={lead ? "(min-width:640px) 48vw, 100vw" : "160px"} className="object-cover transition duration-500 group-hover:scale-[1.03]" /></div> : <div className={`flex shrink-0 items-center justify-center bg-sage/10 text-sage ${lead ? "min-h-64" : "w-32 sm:w-40"}`}><PawPrint className="h-10 w-10" /></div>}
    <div className="flex flex-col justify-center p-5 sm:p-6"><h3 className={`${lead ? "text-2xl sm:text-3xl" : "text-lg"} font-black leading-tight text-navy group-hover:text-moss`}>{feature.title}</h3><p className="mt-2 text-sm leading-6 text-bark">{feature.description}</p><span className="mt-4 inline-flex items-center gap-2 text-sm font-black text-moss">Explore <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" /></span></div>
  </Link>;
}

export function PremiumHubPage({ hub, config, promotedGuides }: PremiumHubPageProps) {
  const sectionLinks = hub.sections?.flatMap((section) => section.links ?? []) ?? [];
  const uniqueLinks = new Map<string, CardLink>();
  [...hub.cards, ...promotedGuides, ...sectionLinks].forEach((link) => { if (link.href !== hub.path && !uniqueLinks.has(link.href)) uniqueLinks.set(link.href, link); });
  const reserved = new Set([...config.heroLinks, ...config.features].map((link) => link.href));
  let available = [...uniqueLinks.values()].filter((link) => !reserved.has(link.href));
  const groupedLinks = config.groups.map((group) => { const links = available.filter((link) => group.matches(link.href)); const matched = new Set(links.map((link) => link.href)); available = available.filter((link) => !matched.has(link.href)); return { ...group, links }; });

  return <>
    <JsonLd data={collectionPageSchema({ title: hub.title, description: hub.description, path: hub.path })} />
    {hub.faqs.length > 0 ? <JsonLd data={faqSchema(hub.faqs)} /> : null}
    <section className="relative isolate overflow-hidden bg-emerald-deep text-white">
      <Image src={config.image.src} alt={config.image.alt} fill priority sizes="100vw" className="object-cover object-center" />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(3,55,45,.98),rgba(3,55,45,.83)_45%,rgba(3,55,45,.12))]" />
      <div className="section-shell relative min-h-[540px] py-10 lg:flex lg:items-center lg:py-16"><div className="max-w-2xl"><div className="[&_a]:text-white/75 [&_span]:text-white/70"><Breadcrumbs items={[{ name: hub.title, href: hub.path }]} /></div><p className="light-kicker">{hub.kicker}</p><h1 className="mt-4 max-w-2xl text-4xl font-black leading-[1.03] tracking-tight text-white sm:text-5xl lg:text-6xl">{hub.title}</h1><p className="mt-5 max-w-xl text-base leading-7 text-white/85 sm:text-lg sm:leading-8">{hub.intro}</p><div className="mt-8 flex flex-wrap gap-3">{config.heroLinks.map((link, index) => <Link key={link.href} href={link.href} className={index === 0 ? "primary-light-button" : "secondary-light-button"}>{link.title}<ArrowRight className="h-4 w-4" /></Link>)}</div></div></div>
    </section>
    <section className="section-shell py-14 sm:py-20"><div className="max-w-3xl"><p className="section-kicker">Featured guidance</p><h2 className="section-title">{config.featureTitle}</h2><p className="section-copy">{config.featureIntro}</p></div><div className="mt-8 grid gap-5 lg:grid-cols-[1.15fr_.85fr]"><FeatureLink feature={config.features[0]} lead /><div className="grid gap-5">{config.features.slice(1, 3).map((feature) => <FeatureLink key={feature.href} feature={feature} />)}</div></div>{config.features.length > 3 ? <div className="mt-5 grid gap-5 md:grid-cols-2">{config.features.slice(3).map((feature) => <FeatureLink key={feature.href} feature={feature} />)}</div> : null}</section>
    <section className="bg-emerald-deep text-white"><div className="section-shell grid gap-10 py-14 lg:grid-cols-[.72fr_1.28fr] lg:py-20"><div><p className="light-kicker">Practical context</p><h2 className="mt-4 text-3xl font-black leading-tight text-white sm:text-4xl">{config.guidance.title}</h2>{config.guidance.body.map((paragraph) => <p key={paragraph} className="mt-4 leading-7 text-white/80">{paragraph}</p>)}</div><div className="grid gap-4 sm:grid-cols-2">{config.checklist?.items.map((item) => <div key={item} className="flex gap-3 rounded-2xl border border-white/20 bg-white/10 p-4 text-sm leading-6 text-white/80"><CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[#f3c76d]" />{item}</div>) ?? hub.sections?.flatMap((section) => section.body.slice(0, 2).map((item) => <div key={item} className="rounded-2xl border border-white/20 bg-white/10 p-5"><h3 className="font-black text-white">{section.title}</h3><p className="mt-2 text-sm leading-6 text-white/75">{item}</p></div>))}</div></div></section>
    <section id="guide-library" className="section-shell scroll-mt-24 py-14 sm:py-20"><p className="section-kicker">Complete guide library</p><h2 className="section-title">Find the right guide faster.</h2><p className="section-copy">Browse every established route by the question or planning task closest to yours.</p><div className="mt-9 space-y-12">{groupedLinks.filter((group) => group.links.length > 0).map((group) => <section key={group.title}><h3 className="text-2xl font-black text-navy">{group.title}</h3><p className="mt-2 max-w-3xl leading-7 text-bark">{group.description}</p><div className="mt-4 grid gap-x-10 sm:grid-cols-2 lg:grid-cols-3">{group.links.map((link) => <HubLink key={link.href} link={link} />)}</div></section>)}{available.length > 0 ? <section><h3 className="text-2xl font-black text-navy">{config.remainingTitle}</h3><p className="mt-2 max-w-3xl leading-7 text-bark">{config.remainingDescription}</p><div className="mt-4 grid gap-x-10 sm:grid-cols-2 lg:grid-cols-3">{available.map((link) => <HubLink key={link.href} link={link} />)}</div></section> : null}</div></section>
    <section className="border-t border-oat bg-white/55"><div className="section-shell space-y-12 py-14"><section className="grid gap-7 lg:grid-cols-[.65fr_1.35fr]"><div><p className="section-kicker">Continue exploring</p><h2 className="mt-3 text-3xl font-black text-navy">Related Dog Haven hubs.</h2></div><div className="grid gap-x-8 sm:grid-cols-2">{hub.related.map((link) => <HubLink key={link.href} link={link} />)}</div></section>{hub.faqs.length > 0 ? <section className="max-w-4xl"><p className="section-kicker">Common questions</p><h2 className="section-title">Clear answers, responsible limits.</h2><div className="mt-7"><FAQBlock items={hub.faqs} /></div></section> : null}</div></section>
  </>;
}
