import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function HomeHero() {
  return (
    <section
      className="overflow-hidden border-b border-oat bg-[radial-gradient(circle_at_12%_0%,rgba(255,184,28,0.22),transparent_30%),radial-gradient(circle_at_88%_100%,rgba(0,118,192,0.14),transparent_32%),linear-gradient(135deg,#e6f0e5_0%,#fbf5e9_54%,#f8e4d4_100%)]"
      aria-labelledby="home-hero-heading"
    >
      <div className="section-shell py-8 sm:py-10 lg:py-12">
        <div className="grid items-center gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-12">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3">
              <span className="h-1 w-10 rounded-full bg-[linear-gradient(90deg,#ffb81c_0%,#ffb81c_45%,#de3831_45%,#de3831_68%,#0076c0_68%,#0076c0_100%)]" aria-hidden="true" />
              <p className="text-sm font-black uppercase tracking-[0.12em] text-moss">
                Practical guidance for South African dog owners
              </p>
            </div>
            <h1
              id="home-hero-heading"
              className="mt-4 text-4xl font-black leading-[1.02] tracking-tight text-cocoa sm:text-5xl lg:text-6xl"
            >
              Dog Haven South Africa
            </h1>
            <p className="mt-5 text-base leading-7 text-bark sm:text-lg sm:leading-8">
              Clear, locally aware guidance for dog health, emergencies, breeds, adoption, food,
              costs, training and everyday life.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Link
                href="/start-here"
                className="inline-flex min-h-12 items-center gap-2 rounded-full bg-sage px-5 py-3 text-sm font-black text-white shadow-sm outline-none transition hover:bg-moss focus-visible:ring-2 focus-visible:ring-moss focus-visible:ring-offset-2"
              >
                Start here
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
              <Link
                href="#explore"
                className="inline-flex min-h-12 items-center rounded-full border border-sage/40 bg-white/65 px-5 py-3 text-sm font-black text-cocoa outline-none transition hover:border-moss hover:text-moss focus-visible:ring-2 focus-visible:ring-moss focus-visible:ring-offset-2"
              >
                Explore Dog Haven
              </Link>
            </div>
          </div>
          <div className="relative aspect-[3/2] overflow-hidden rounded-[2rem] border border-white/80 bg-white shadow-soft">
            <Image
              src="/images/home/dog-haven-south-africa-hero.webp"
              alt="Dog and owner walking along a quiet South African coastal path"
              fill
              priority
              sizes="(min-width: 1024px) 54vw, 100vw"
              className="object-cover object-center"
            />
            <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-navy/25 to-transparent" aria-hidden="true" />
          </div>
        </div>
      </div>
    </section>
  );
}
