import { Breadcrumbs } from "@/components/Breadcrumbs";

type UtilityHeroProps = { title: string; kicker: string; intro: string; path: string; compact?: boolean };

export function UtilityHero({ title, kicker, intro, path, compact = false }: UtilityHeroProps) {
  return (
    <header className="border-b border-white/10 bg-emerald-deep text-white">
      <div className={`section-shell ${compact ? "py-9 sm:py-12" : "py-12 sm:py-16"}`}>
        <div className="[&_a]:text-white/75 [&_span]:text-white/70"><Breadcrumbs items={[{ name: kicker, href: path }]} /></div>
        <p className="light-kicker">{kicker}</p>
        <h1 className="mt-4 max-w-3xl text-4xl font-black leading-[1.05] tracking-tight text-white sm:text-5xl">{title}</h1>
        <p className="mt-5 max-w-3xl text-base leading-7 text-white/80 sm:text-lg sm:leading-8">{intro}</p>
      </div>
    </header>
  );
}
