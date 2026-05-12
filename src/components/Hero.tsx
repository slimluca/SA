import { Heart, Search, ShieldCheck, Sparkles } from "lucide-react";
import { SearchBox } from "@/components/SearchBox";

type HeroProps = {
  title: string;
  intro: string;
};

export function Hero({ title, intro }: HeroProps) {
  return (
    <section className="relative overflow-hidden bg-cream">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_18%,rgba(217,164,65,0.20),transparent_28%),radial-gradient(circle_at_86%_12%,rgba(111,143,114,0.22),transparent_26%),linear-gradient(180deg,#fff9ee_0%,#f7eddd_100%)]" />
      <div className="relative mx-auto grid max-w-6xl gap-8 px-4 py-14 sm:px-6 md:grid-cols-[1.2fr_0.8fr] md:py-20 lg:px-8">
        <div className="flex flex-col justify-center">
          <div className="mb-5 inline-flex w-fit items-center gap-2 rounded-full border border-honey/50 bg-white/70 px-3 py-2 text-sm font-bold text-bark shadow-soft">
            <Sparkles className="h-4 w-4 text-honey" aria-hidden="true" />
            Practical, local, dog-loving guidance
          </div>
          <h1 className="max-w-3xl text-4xl font-black leading-tight text-cocoa sm:text-5xl lg:text-6xl">
            {title}
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-bark">{intro}</p>
          <div className="mt-8 max-w-2xl">
            <SearchBox />
          </div>
        </div>

        <div className="relative min-h-[320px] rounded-[2rem] border border-white/80 bg-white/65 p-5 shadow-soft">
          <div className="absolute right-5 top-5 rounded-full bg-honey px-3 py-1 text-xs font-black uppercase tracking-wide text-cocoa">
            ZA guide
          </div>
          <div className="flex h-full flex-col justify-end overflow-hidden rounded-[1.5rem] bg-sage p-6 text-cream">
            <div className="mb-auto grid grid-cols-3 gap-3">
              {[Heart, ShieldCheck, Search].map((Icon, index) => (
                <span
                  key={index}
                  className="flex aspect-square items-center justify-center rounded-2xl bg-cream/14"
                >
                  <Icon className="h-7 w-7" aria-hidden="true" />
                </span>
              ))}
            </div>
            <div className="mt-10">
              <p className="text-sm font-bold uppercase tracking-wide text-honey">
                Built for everyday decisions
              </p>
              <p className="mt-3 text-3xl font-black leading-tight">
                Health, adoption, food, costs, training, and safer outings.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
