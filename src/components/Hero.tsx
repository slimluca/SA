import { CheckCircle2, PawPrint, Sparkles } from "lucide-react";
import { SearchBox } from "@/components/SearchBox";

type HeroProps = {
  title: string;
  intro: string;
};

export function Hero({ title, intro }: HeroProps) {
  const trustChips = ["South Africa focused", "No fake listings", "Built for dog owners"];

  return (
    <section className="bg-cream">
      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 md:py-14 lg:px-8">
        <div className="relative overflow-hidden rounded-[2rem] border border-oat bg-white shadow-soft">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_12%_18%,rgba(217,164,65,0.18),transparent_30%),radial-gradient(circle_at_88%_20%,rgba(111,143,114,0.18),transparent_28%),linear-gradient(135deg,#ffffff_0%,#fff9ee_58%,#f3ead8_100%)]" />
          <div className="relative grid gap-8 p-6 sm:p-8 lg:grid-cols-[minmax(0,1fr)_260px] lg:p-10">
            <div className="flex min-w-0 flex-col justify-center">
              <div className="mb-5 inline-flex w-fit items-center gap-2 rounded-full border border-honey/50 bg-cream/85 px-3 py-2 text-sm font-bold text-bark shadow-sm">
                <Sparkles className="h-4 w-4 text-honey" aria-hidden="true" />
                Practical, local, dog-loving guidance
              </div>
              <h1 className="max-w-4xl text-4xl font-black leading-[1.08] text-cocoa sm:text-5xl lg:text-[3.25rem]">
                {title}
              </h1>
              <p className="mt-5 max-w-3xl text-base leading-7 text-bark sm:text-lg sm:leading-8">
                {intro}
              </p>
              <div className="mt-8 max-w-4xl">
                <SearchBox />
              </div>
              <div className="mt-5 flex flex-wrap gap-2">
                {trustChips.map((chip) => (
                  <span
                    key={chip}
                    className="inline-flex items-center gap-2 rounded-full border border-oat bg-cream px-3 py-2 text-sm font-bold text-cocoa"
                  >
                    <CheckCircle2 className="h-4 w-4 text-sage" aria-hidden="true" />
                    {chip}
                  </span>
                ))}
              </div>
            </div>

            <div className="hidden items-center justify-center lg:flex">
              <div className="relative flex h-48 w-48 items-center justify-center rounded-full border border-honey/35 bg-cream/80 shadow-sm">
                <div className="absolute inset-5 rounded-full bg-sage/12" />
                <div className="relative flex h-28 w-28 items-center justify-center rounded-[2rem] bg-sage text-cream shadow-soft">
                  <PawPrint className="h-14 w-14" aria-hidden="true" />
                </div>
                <span className="absolute right-7 top-8 h-4 w-4 rounded-full bg-honey" />
                <span className="absolute bottom-8 left-8 h-3 w-3 rounded-full bg-honey/80" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
