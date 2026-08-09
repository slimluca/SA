import { ContentLinkCard } from "@/components/ContentLinkCard";
import type { CardLink } from "@/lib/content";

type PopularGuidesProps = {
  kicker?: string;
  title: string;
  intro?: string;
  guides: CardLink[];
};

export function PopularGuides({ kicker = "Most useful guides", title, intro, guides }: PopularGuidesProps) {
  if (guides.length === 0) {
    return null;
  }

  return (
    <section className="mt-7 border-y border-oat/70 bg-white/52 py-5 sm:rounded-xl sm:border sm:px-6 sm:shadow-panel">
      <p className="section-kicker">{kicker}</p>
      <h2 className="mt-2 text-2xl font-black leading-tight text-navy sm:text-3xl">{title}</h2>
      {intro ? <p className="mt-3 max-w-3xl leading-7 text-bark">{intro}</p> : null}
      <div className="mt-4 grid items-start gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {guides.map((guide) => (
          <ContentLinkCard key={`${title}-${guide.href}`} {...guide} />
        ))}
      </div>
    </section>
  );
}
