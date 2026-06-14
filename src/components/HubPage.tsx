import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ContentLinkCard } from "@/components/ContentLinkCard";
import { EmergencyNotice } from "@/components/EmergencyNotice";
import { FAQBlock } from "@/components/FAQBlock";
import { PopularGuides } from "@/components/PopularGuides";
import { VerifiedLocalOptions } from "@/components/VerifiedLocalOptions";
import type { HubContent } from "@/lib/content";
import { hubPromos } from "@/lib/promo-links";
import { JsonLd, collectionPageSchema, faqSchema } from "@/lib/schema";

export function HubPage({ hub }: { hub: HubContent }) {
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

        {hub.notice ? (
          <div className="mt-8">
            <EmergencyNotice />
          </div>
        ) : null}

        <PopularGuides
          title={hub.slug === "tools" ? "Popular tools to try first" : "Most useful guides to start with"}
          intro={
            hub.slug === "tools"
              ? "Start with the calculators and lookups owners use for quick everyday decisions."
              : "These high-value DogHaven pages answer common South African dog-owner questions and point to helpful next steps."
          }
          guides={promotedGuides}
        />

        <VerifiedLocalOptions providers={[]} showNotice={showProviderNotice} />

        <div className="mt-10">
          <h2 className="text-2xl font-black text-cocoa">Start here</h2>
          <div className="mt-5 grid gap-4 md:grid-cols-3">
            {hub.cards.map((card) => (
              <ContentLinkCard key={`${hub.slug}-${card.title}`} {...card} />
            ))}
          </div>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-[1fr_0.8fr]">
          <section>
            <h2 className="text-2xl font-black text-cocoa">Related DogHaven hubs</h2>
            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              {hub.related.map((card) => (
                <ContentLinkCard key={`${hub.slug}-related-${card.title}`} {...card} />
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-black text-cocoa">Common questions</h2>
            <div className="mt-5">
              <FAQBlock items={hub.faqs} />
            </div>
          </section>
        </div>
      </section>
    </>
  );
}
