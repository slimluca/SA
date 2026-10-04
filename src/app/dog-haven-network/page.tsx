import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, Globe2 } from "lucide-react";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = {
  ...createMetadata({
    title: "Dog Haven Network",
    description: "An overview of the separate Dog Haven country resources and Dog Haven Group.",
    path: "/dog-haven-network",
  }),
  robots: { index: false, follow: true },
};

const networkSites = [
  {
    name: "Dog Haven Italy",
    href: "https://doghaven.it",
    description: "A separate resource created for dog owners in Italy.",
  },
  {
    name: "Dog Haven USA",
    href: "https://doghaven.us",
    description: "A separate resource created for dog owners in the United States.",
  },
  {
    name: "Dog Haven Group",
    href: "https://doghavengroup.com",
    description: "The group website explaining the wider Dog Haven project.",
  },
] as const;

export default function DogHavenNetworkPage() {
  return (
    <div className="dog-haven-network-page">
      <section className="relative isolate overflow-hidden bg-emerald-deep text-white">
        <div className="absolute inset-y-0 right-0 hidden w-[44%] lg:block">
          <div className="absolute -right-20 -top-36 h-[30rem] w-[30rem] rounded-full border border-white/10" />
          <div className="absolute -right-5 -top-20 h-[22rem] w-[22rem] rounded-full border border-[#f3c76d]/25" />
          <div className="absolute right-24 top-20 h-32 w-32 rounded-full bg-sage/25 blur-3xl" />
        </div>

        <div className="section-shell relative py-11 sm:py-14 lg:py-16">
          <div className="[&_a]:text-white/75 [&_span]:text-white/70">
            <Breadcrumbs items={[{ name: "Dog Haven Network", href: "/dog-haven-network" }]} />
          </div>
          <div className="mt-6 grid items-end gap-8 lg:grid-cols-[minmax(0,1fr)_18rem]">
            <div className="max-w-3xl">
              <p className="light-kicker">About the network</p>
              <h1 className="mt-4 text-4xl font-black leading-[1.05] tracking-tight text-white sm:text-5xl">
                Dog Haven Network
              </h1>
              <p className="mt-5 max-w-2xl text-base leading-7 text-white/80 sm:text-lg sm:leading-8">
                DogHaven.co.za is the South African Dog Haven resource. The websites below are
                separate country resources or group information sites, with their own audiences and
                editorial scope.
              </p>
            </div>
            <div className="hidden justify-end lg:flex" aria-hidden="true">
              <div className="flex h-32 w-32 items-center justify-center rounded-full border border-white/15 bg-white/5 shadow-[0_20px_60px_rgba(0,0,0,.18)] backdrop-blur">
                <Globe2 className="h-14 w-14 text-[#f3c76d]" strokeWidth={1.4} />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-shell py-10 sm:py-12 lg:py-14" aria-label="Dog Haven network websites">
        <div className="grid gap-5 md:grid-cols-3">
          {networkSites.map((site, index) => (
            <article
              key={site.href}
              className="group flex min-h-full flex-col overflow-hidden rounded-[1.4rem] border border-oat bg-ivory shadow-panel transition duration-300 hover:-translate-y-1 hover:border-sage/40 hover:shadow-soft"
            >
              <div className="h-1.5 bg-gradient-to-r from-sage via-moss to-[#bf8424]" />
              <div className="flex flex-1 flex-col p-6 sm:p-7">
                <div className="flex items-start justify-between gap-4">
                  <span className="flex h-11 w-11 items-center justify-center rounded-full bg-[#e3f1e8] text-moss">
                    <Globe2 className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <span className="text-sm font-black tabular-nums text-gold" aria-hidden="true">
                    0{index + 1}
                  </span>
                </div>
                <h2 className="mt-6 text-2xl font-black tracking-tight text-navy">{site.name}</h2>
                <p className="mt-3 flex-1 text-sm leading-6 text-bark">{site.description}</p>
                <Link
                  className="mt-7 inline-flex min-h-11 items-center justify-between gap-3 rounded-full border border-oat bg-white px-4 py-2.5 text-sm font-black text-moss outline-none transition group-hover:border-sage/40 group-hover:bg-[#edf7f0] focus-visible:ring-2 focus-visible:ring-moss focus-visible:ring-offset-2"
                  href={site.href}
                >
                  Visit {site.name}
                  <ArrowUpRight className="h-4 w-4 shrink-0" aria-hidden="true" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
