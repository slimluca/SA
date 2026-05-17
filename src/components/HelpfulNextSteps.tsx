import { ContentLinkCard } from "@/components/ContentLinkCard";
import type { CardLink } from "@/lib/content";

export function HelpfulNextSteps({ title = "Helpful next steps", links }: { title?: string; links: CardLink[] }) {
  if (links.length === 0) {
    return null;
  }

  return (
    <section className="rounded-2xl border border-sage/30 bg-sage/10 p-5 shadow-sm">
      <h2 className="text-xl font-black text-cocoa">{title}</h2>
      <p className="mt-2 text-sm leading-6 text-bark">
        Quick DogHaven tools and guides that naturally fit this page.
      </p>
      <div className="mt-4 space-y-3">
        {links.map((link) => (
          <ContentLinkCard key={`${title}-${link.href}`} {...link} />
        ))}
      </div>
    </section>
  );
}
