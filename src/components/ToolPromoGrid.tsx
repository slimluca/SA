import { ContentLinkCard } from "@/components/ContentLinkCard";
import type { CardLink } from "@/lib/content";

export function ToolPromoGrid({ tools }: { tools: CardLink[] }) {
  if (tools.length === 0) {
    return null;
  }

  return (
    <section className="section-shell">
      <div className="rounded-3xl border border-sage/25 bg-sage/10 p-5 shadow-sm sm:p-7">
        <p className="section-kicker">Free DogHaven tools</p>
        <h2 className="mt-2 text-3xl font-black leading-tight text-cocoa sm:text-4xl">
          Quick calculators and checklists for everyday dog decisions
        </h2>
        <p className="mt-4 max-w-3xl leading-7 text-bark">
          These tools do not collect personal information or replace professional advice. They help
          South African owners estimate, organise, and check common dog-care questions faster.
        </p>
        <div className="mt-6 grid items-stretch gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {tools.map((tool) => (
            <ContentLinkCard key={tool.href} {...tool} />
          ))}
        </div>
      </div>
    </section>
  );
}
