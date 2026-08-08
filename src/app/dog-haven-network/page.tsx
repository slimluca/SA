import type { Metadata } from "next";
import Link from "next/link";
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
    <main className="section-shell">
      <Breadcrumbs items={[{ name: "Dog Haven Network", href: "/dog-haven-network" }]} />
      <p className="section-kicker">About the network</p>
      <h1 className="section-title">Dog Haven Network</h1>
      <p className="section-copy">
        DogHaven.co.za is the South African Dog Haven resource. The websites below are separate
        country resources or group information sites, with their own audiences and editorial scope.
      </p>
      <div className="mt-8 grid gap-4 md:grid-cols-3">
        {networkSites.map((site) => (
          <article key={site.href} className="rounded-xl border border-oat bg-white p-5 shadow-panel">
            <h2 className="text-xl font-black text-cocoa">{site.name}</h2>
            <p className="mt-3 text-sm leading-6 text-bark">{site.description}</p>
            <Link
              className="mt-5 inline-flex font-bold text-moss underline-offset-4 hover:underline"
              href={site.href}
            >
              Visit {site.name}
            </Link>
          </article>
        ))}
      </div>
    </main>
  );
}
