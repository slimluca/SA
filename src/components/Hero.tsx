import { Sparkles } from "lucide-react";
import { SearchBox } from "@/components/SearchBox";

type HeroProps = {
  title: string;
  intro: string;
};

export function Hero({ title, intro }: HeroProps) {
  return (
    <section className="bg-cream">
      <div className="mx-auto max-w-6xl px-4 py-7 sm:px-6 md:py-9 lg:px-8">
        <div className="relative overflow-hidden border-y border-oat/80 bg-ivory shadow-soft sm:rounded-[1.75rem] sm:border">
          <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.88)_0%,rgba(255,249,238,0.9)_58%,rgba(224,215,191,0.65)_100%)]" />
          <div className="relative p-6 sm:p-8 lg:p-10">
            <div className="flex min-w-0 flex-col justify-center">
              <div className="mb-4 inline-flex w-fit items-center gap-2 rounded-full border border-honey/50 bg-cream/85 px-3 py-2 text-sm font-bold text-bark shadow-sm">
                <Sparkles className="h-4 w-4 text-honey" aria-hidden="true" />
                Practical, local, dog-loving guidance
              </div>
              <h1 className="max-w-4xl text-4xl font-black leading-[1.08] text-navy sm:text-5xl lg:text-[3.25rem]">
                {title}
              </h1>
              <p className="mt-5 max-w-3xl text-base leading-7 text-bark sm:text-lg sm:leading-8">
                {intro}
              </p>
              <div className="mt-6 max-w-4xl">
                <SearchBox />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
