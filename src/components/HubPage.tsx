import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ContentLinkCard } from "@/components/ContentLinkCard";
import { FAQBlock } from "@/components/FAQBlock";
import { PopularGuides } from "@/components/PopularGuides";
import { VerifiedLocalOptions } from "@/components/VerifiedLocalOptions";
import type { CardLink, HubContent } from "@/lib/content";
import { hubPromos } from "@/lib/promo-links";
import { JsonLd, collectionPageSchema, faqSchema } from "@/lib/schema";

type HubCardGroup = {
  title: string;
  description: string;
  cards: CardLink[];
};

export function HubPage({ hub, cardGroups }: { hub: HubContent; cardGroups?: HubCardGroup[] }) {
  const promotedGuides = hubPromos[hub.slug] ?? [];
  const showProviderNotice =
    hub.path === "/local" ||
    hub.path === "/local-costs" ||
    hub.path === "/dog-services" ||
    hub.path.startsWith("/local/");

  return (
    <>
      <JsonLd data={collectionPageSchema({ title: hub.title, description: hub.description, path: hub.path })} />
      {hub.faqs.length > 0 ? <JsonLd data={faqSchema(hub.faqs)} /> : null}
      <section className="section-shell">
        <Breadcrumbs items={[{ name: hub.title, href: hub.path }]} />
        <p className="section-kicker">{hub.kicker}</p>
        <h1 className="section-title">{hub.title}</h1>
        <p className="section-copy">{hub.intro}</p>

        {hub.sections && hub.sections.length > 0 ? (
          <div className="mt-7 grid gap-5 lg:grid-cols-2">
            {hub.sections.map((section) => (
              <section key={section.title} className="rounded-xl border border-oat bg-white p-5 shadow-panel">
                <h2 className="text-2xl font-black leading-tight text-cocoa">{section.title}</h2>
                <div className="mt-4 space-y-3">
                  {section.body.map((paragraph) => (
                    <p key={paragraph} className="leading-7 text-bark">
                      {paragraph}
                    </p>
                  ))}
                </div>
                {section.links && section.links.length > 0 ? (
                  <div className="mt-5 grid gap-3">
                    {section.links.map((link) => (
                      <ContentLinkCard key={`${section.title}-${link.href}`} {...link} />
                    ))}
                  </div>
                ) : null}
              </section>
            ))}
          </div>
        ) : null}

        {!cardGroups ? (
          <PopularGuides
            title={hub.slug === "tools" ? "Popular tools to try first" : "Most useful guides to start with"}
            intro={
              hub.slug === "tools"
                ? "Start with the calculators and lookups owners use for quick everyday decisions."
                : "These high-value Dog Haven pages answer common South African dog-owner questions and point to helpful next steps."
            }
            guides={promotedGuides}
          />
        ) : null}

        <VerifiedLocalOptions providers={[]} showNotice={showProviderNotice} />

        {cardGroups ? (
          <div className="mt-8 space-y-9">
            {cardGroups.map((group) => (
              <section key={group.title}>
                <h2 className="text-2xl font-black text-cocoa">{group.title}</h2>
                <p className="mt-2 max-w-3xl leading-7 text-bark">{group.description}</p>
                <div className="mt-4 grid items-stretch gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  {group.cards.map((card) => (
                    <ContentLinkCard key={`${hub.slug}-${card.href}`} {...card} />
                  ))}
                </div>
              </section>
            ))}
          </div>
        ) : (
          <div className="mt-8">
            <h2 className="text-2xl font-black text-cocoa">Start here</h2>
            <div className="mt-4 grid gap-4 md:grid-cols-3">
              {hub.cards.map((card) => (
                <ContentLinkCard key={`${hub.slug}-${card.title}`} {...card} />
              ))}
            </div>
          </div>
        )}

        <div className="mt-9 grid gap-6 lg:grid-cols-[1fr_0.8fr]">
          <section>
            <h2 className="text-2xl font-black text-cocoa">Related Dog Haven hubs</h2>
            <div className="mt-4 grid gap-4 sm:grid-cols-2">
              {hub.related.map((card) => (
                <ContentLinkCard key={`${hub.slug}-related-${card.title}`} {...card} />
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-black text-cocoa">Common questions</h2>
            <div className="mt-4">
              <FAQBlock items={hub.faqs} />
            </div>
          </section>
        </div>
      </section>
    </>
  );
}
