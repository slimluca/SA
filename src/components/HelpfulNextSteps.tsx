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
      <div className="mt-4 grid gap-3">
        {links.map((link) => (
          <a
            key={`${title}-${link.href}`}
            href={link.href}
            className="grid h-full rounded-xl border border-sage/25 bg-white p-4 text-sm leading-6 shadow-sm transition hover:border-sage hover:shadow-soft"
          >
            <span className="font-black leading-snug text-cocoa">{link.title}</span>
            <span className="mt-1 text-bark">{link.description}</span>
          </a>
        ))}
      </div>
    </section>
  );
}
