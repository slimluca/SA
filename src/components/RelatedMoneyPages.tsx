import { ContentLinkCard } from "@/components/ContentLinkCard";
import type { CardLink } from "@/lib/content";

export function RelatedMoneyPages({ pages }: { pages: CardLink[] }) {
  if (pages.length === 0) {
    return null;
  }

  return (
    <section className="section-shell pt-4">
      <p className="section-kicker">Insurance and cost guides</p>
      <h2 className="section-title">Money decisions without fake rankings or pressure</h2>
      <p className="section-copy">
        Compare costs, cover, exclusions, feeding budgets, and emergency planning with neutral
        South Africa-specific guidance. No affiliate links, fake prices, or insurer rankings.
      </p>
      <div className="mt-8 grid items-stretch gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {pages.map((page) => (
          <ContentLinkCard key={page.href} {...page} />
        ))}
      </div>
    </section>
  );
}
