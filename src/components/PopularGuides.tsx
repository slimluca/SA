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
    <section className="mt-10 rounded-3xl border border-oat bg-white/82 p-5 shadow-sm sm:p-6">
      <p className="section-kicker">{kicker}</p>
      <h2 className="mt-2 text-2xl font-black leading-tight text-cocoa sm:text-3xl">{title}</h2>
      {intro ? <p className="mt-3 max-w-3xl leading-7 text-bark">{intro}</p> : null}
      <div className="mt-5 grid items-stretch gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {guides.map((guide) => (
          <ContentLinkCard key={`${title}-${guide.href}`} {...guide} />
        ))}
      </div>
    </section>
  );
}
