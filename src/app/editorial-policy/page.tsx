import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "Editorial Policy | DogHaven",
  description:
    "DogHaven's editorial policy for practical, sourced, South Africa-focused dog care guidance.",
  path: "/editorial-policy",
});

export default function EditorialPolicyPage() {
  return (
    <section className="section-shell">
      <Breadcrumbs items={[{ name: "Editorial Policy", href: "/editorial-policy" }]} />
      <p className="section-kicker">Editorial Policy</p>
      <h1 className="section-title">How DogHaven earns trust</h1>
      <p className="section-copy">
        DogHaven is built for real South African dog owners. Editorial choices favour practical
        usefulness, clear limitations, local relevance, and responsible sourcing over volume.
      </p>

      <div className="mt-8 space-y-5">
        {[
          {
            title: "Practical first",
            text: "Articles should help owners understand what to do next, what to prepare, what to ask, and when a qualified professional is needed.",
          },
          {
            title: "Medical caution",
            text: "Health content is educational. It must not diagnose a dog, prescribe treatment, or encourage owners to delay urgent veterinary care.",
          },
          {
            title: "South African context",
            text: "Guides should consider local disease risks, climate, costs, adoption realities, travel patterns, and service availability where relevant.",
          },
          {
            title: "No invented trust signals",
            text: "DogHaven does not publish fake reviews, fake ratings, fake listings, unsupported ranking claims, or unverified badges.",
          },
          {
            title: "Source discipline",
            text: "Guides should cite official, veterinary, public health, academic, or clearly relevant sources where factual risk, law, health, or safety claims are made.",
          },
          {
            title: "Corrections",
            text: "When a material error is found, DogHaven should review the evidence and update the page clearly and promptly.",
          },
        ].map((item) => (
          <article key={item.title} className="rounded-2xl border border-oat bg-white p-6 shadow-sm">
            <h2 className="text-xl font-black text-cocoa">{item.title}</h2>
            <p className="mt-2 leading-7 text-bark">{item.text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
