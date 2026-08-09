import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { FAQBlock } from "@/components/FAQBlock";
import type { CardLink, HubContent } from "@/lib/content";
import type { HubFeature, PremiumHubConfig } from "@/lib/premium-hubs";
import { JsonLd, collectionPageSchema, faqSchema } from "@/lib/schema";

type PremiumHubPageProps = {
  hub: HubContent;
  config: PremiumHubConfig;
  promotedGuides: CardLink[];
};

const themeStyles: Record<PremiumHubConfig["theme"], { hero: string; accent: string; panel: string }> = {
  health: { hero: "from-[#eff4e7] via-[#f9f7ef] to-white", accent: "bg-moss", panel: "bg-[#f3f6ed]" },
  emergency: { hero: "from-[#fff3d6] via-[#fffaf0] to-white", accent: "bg-[#b96532]", panel: "bg-[#fff7e5]" },
  breeds: { hero: "from-[#edf3e6] via-[#faf7ee] to-white", accent: "bg-sage", panel: "bg-[#f4f6ed]" },
  food: { hero: "from-[#f7ecd7] via-[#fffaf0] to-white", accent: "bg-honey", panel: "bg-[#fbf3e5]" },
  adoption: { hero: "from-[#eaf3e9] via-[#faf7ee] to-white", accent: "bg-moss", panel: "bg-[#f0f5ec]" },
  costs: { hero: "from-[#f4eadf] via-[#fcf8f1] to-white", accent: "bg-cocoa", panel: "bg-[#f8f1e8]" },
};

function HubLink({ link, compact = false }: { link: CardLink; compact?: boolean }) {
  return (
    <Link
      href={link.href}
      className={`group flex justify-between gap-4 border-b border-oat py-4 outline-none transition-colors last:border-b-0 hover:text-moss focus-visible:rounded-lg focus-visible:ring-2 focus-visible:ring-moss ${compact ? "items-center" : "items-start"}`}
    >
      <span>
        <span className="block font-black leading-6 text-cocoa group-hover:text-moss">{link.title}</span>
        {!compact ? <span className="mt-1 block text-sm leading-6 text-bark">{link.description}</span> : null}
      </span>
      <ArrowRight className="mt-1 h-4 w-4 shrink-0 text-sage transition-transform group-hover:translate-x-1" aria-hidden="true" />
    </Link>
  );
}

function FeatureLink({ feature, lead = false }: { feature: HubFeature; lead?: boolean }) {
  return (
    <Link
      href={feature.href}
      className={`group overflow-hidden rounded-2xl border border-oat bg-white outline-none transition hover:-translate-y-0.5 hover:shadow-panel focus-visible:ring-2 focus-visible:ring-moss ${lead ? "grid sm:grid-cols-[0.9fr_1.1fr]" : "grid grid-cols-[88px_1fr]"}`}
    >
      {feature.image ? (
        <div className={`relative overflow-hidden bg-cream ${lead ? "min-h-48 lg:h-56" : "min-h-28"}`}>
          <Image src={feature.image.src} alt={feature.image.alt} fill sizes={lead ? "(min-width: 1024px) 42vw, 88vw" : "88px"} className="object-cover transition duration-500 group-hover:scale-[1.03]" />
        </div>
      ) : null}
      <div className={`${lead ? "p-6" : "p-4"} ${!feature.image && !lead ? "col-span-2" : ""}`}>
        <h3 className={`${lead ? "text-2xl" : "text-base"} font-black leading-tight text-cocoa group-hover:text-moss`}>{feature.title}</h3>
        <p className={`mt-2 text-bark ${lead ? "leading-7" : "text-sm leading-6"}`}>{feature.description}</p>
        {lead ? <span className="mt-5 inline-flex items-center gap-2 text-sm font-black text-moss">Read the guide <ArrowRight className="h-4 w-4" aria-hidden="true" /></span> : null}
      </div>
    </Link>
  );
}

export function PremiumHubPage({ hub, config, promotedGuides }: PremiumHubPageProps) {
  const style = themeStyles[config.theme];
  const sectionLinks = hub.sections?.flatMap((section) => section.links ?? []) ?? [];
  const uniqueLinks = new Map<string, CardLink>();

  [...hub.cards, ...promotedGuides, ...sectionLinks].forEach((link) => {
    if (link.href !== hub.path && !uniqueLinks.has(link.href)) uniqueLinks.set(link.href, link);
  });

  const reserved = new Set([...config.heroLinks, ...config.features].map((link) => link.href));
  let available = [...uniqueLinks.values()].filter((link) => !reserved.has(link.href));
  const groupedLinks = config.groups.map((group) => {
    const links = available.filter((link) => group.matches(link.href));
    const matched = new Set(links.map((link) => link.href));
    available = available.filter((link) => !matched.has(link.href));
    return { ...group, links };
  });

  return (
    <>
      <JsonLd data={collectionPageSchema({ title: hub.title, description: hub.description, path: hub.path })} />
      {hub.faqs.length > 0 ? <JsonLd data={faqSchema(hub.faqs)} /> : null}
      <div>
        <section className={`bg-gradient-to-br ${style.hero}`}>
          <div className="section-shell py-8 sm:py-11 lg:py-14">
            <Breadcrumbs items={[{ name: hub.title, href: hub.path }]} />
            <div className="grid items-center gap-8 lg:grid-cols-[minmax(0,0.9fr)_minmax(420px,1.1fr)] lg:gap-12">
              <div>
                <p className="section-kicker">{hub.kicker}</p>
                <h1 className="mt-2 max-w-3xl text-4xl font-black leading-[1.05] tracking-tight text-cocoa sm:text-5xl lg:text-6xl">{hub.title}</h1>
                <p className="mt-5 max-w-2xl text-lg leading-8 text-bark">{hub.intro}</p>
                <div className="mt-7 flex flex-wrap gap-3">
                  {config.heroLinks.map((link, index) => (
                    <Link key={link.href} href={link.href} className={`inline-flex min-h-12 items-center gap-2 rounded-full px-5 py-3 text-sm font-black outline-none transition focus-visible:ring-2 focus-visible:ring-moss focus-visible:ring-offset-2 ${index === 0 ? `${style.accent} text-white hover:opacity-90` : "border border-cocoa/20 bg-white text-cocoa hover:border-moss hover:text-moss"}`}>
                      {link.title}<ArrowRight className="h-4 w-4" aria-hidden="true" />
                    </Link>
                  ))}
                </div>
              </div>
              <div className="relative aspect-[3/2] overflow-hidden rounded-[2rem] border border-white/70 bg-white shadow-panel">
                <Image src={config.image.src} alt={config.image.alt} width={config.image.width} height={config.image.height} priority sizes="(min-width: 1024px) 52vw, 92vw" className="h-full w-full object-cover" />
                <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-black/5" />
              </div>
            </div>
          </div>
        </section>

        <section className="section-shell py-12 sm:py-16">
          <div className="max-w-3xl">
            <p className="section-kicker">Editor’s selection</p>
            <h2 className="mt-2 text-3xl font-black leading-tight text-cocoa sm:text-4xl">{config.featureTitle}</h2>
            <p className="mt-4 leading-7 text-bark">{config.featureIntro}</p>
          </div>
          <div className="mt-8">
            <FeatureLink feature={config.features[0]} lead />
            <div className="mt-5 grid items-start gap-4 sm:grid-cols-2">
              {config.features.slice(1).map((feature) => <FeatureLink key={feature.href} feature={feature} />)}
            </div>
          </div>
        </section>

        <section className={`${style.panel} border-y border-oat`}>
          <div className="section-shell py-10 lg:py-12">
            <div className="max-w-4xl">
              <h2 className="text-2xl font-black text-cocoa">{config.guidance.title}</h2>
              <div className="mt-4 space-y-3">
                {config.guidance.body.map((paragraph) => <p key={paragraph} className="leading-7 text-bark">{paragraph}</p>)}
              </div>
              {hub.sections?.map((section) => (
                <section key={section.title} className="mt-8 border-t border-oat pt-7 first-of-type:mt-7">
                  <h3 className="text-xl font-black text-cocoa">{section.title}</h3>
                  <div className="mt-3 space-y-4">
                    {section.body.map((paragraph) => <p key={paragraph} className="leading-7 text-bark">{paragraph}</p>)}
                  </div>
                </section>
              ))}
            </div>
            {config.checklist ? (
              <div className="mt-8 max-w-4xl rounded-2xl border border-oat bg-white p-6 shadow-sm">
                <h2 className="text-xl font-black text-cocoa">{config.checklist.title}</h2>
                <ul className="mt-4 grid gap-3">
                  {config.checklist.items.map((item) => <li key={item} className="flex gap-3 text-sm leading-6 text-bark"><CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-moss" aria-hidden="true" />{item}</li>)}
                </ul>
              </div>
            ) : null}
          </div>
        </section>

        <section className="section-shell py-12 sm:py-16">
          <div className="max-w-3xl">
            <p className="section-kicker">Explore by topic</p>
            <h2 className="mt-2 text-3xl font-black text-cocoa">Find the right guide faster</h2>
            <p className="mt-3 leading-7 text-bark">Move from the broad question to the most relevant practical guide. Every link remains available in the page’s crawlable HTML.</p>
          </div>
          <div className="mt-8 space-y-10">
            {groupedLinks.filter((group) => group.links.length > 0).map((group) => (
              <section key={group.title} className="border-t-4 border-sage pt-5">
                <h3 className="text-xl font-black text-cocoa">{group.title}</h3>
                <p className="mt-2 text-sm leading-6 text-bark">{group.description}</p>
                <div className="mt-3 grid items-start gap-x-10 sm:grid-cols-2">{group.links.map((link) => <HubLink key={link.href} link={link} />)}</div>
              </section>
            ))}
            {available.length > 0 ? (
              <section className="border-t-4 border-sage pt-5">
                <h3 className="text-xl font-black text-cocoa">{config.remainingTitle}</h3>
                <p className="mt-2 text-sm leading-6 text-bark">{config.remainingDescription}</p>
                <div className="mt-3 grid items-start gap-x-10 sm:grid-cols-2">{available.map((link) => <HubLink key={link.href} link={link} />)}</div>
              </section>
            ) : null}
          </div>
        </section>

        <section className="border-t border-oat bg-cream/40">
          <div className="section-shell space-y-10 py-12">
            <section>
              <h2 className="text-2xl font-black text-cocoa">Related Dog Haven hubs</h2>
              <div className="mt-4 grid items-start gap-x-10 border-t border-oat sm:grid-cols-2">{hub.related.map((link) => <HubLink key={link.href} link={link} compact />)}</div>
            </section>
            {hub.faqs.length > 0 ? <section className="max-w-4xl"><h2 className="text-2xl font-black text-cocoa">Common questions</h2><div className="mt-4"><FAQBlock items={hub.faqs} /></div></section> : null}
          </div>
        </section>
      </div>
    </>
  );
}
