import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { EmergencyNotice } from "@/components/EmergencyNotice";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "About DogHaven | Practical Dog Care for South Africa",
  description:
    "Learn what DogHaven is building: a practical, trustworthy South African dog care guide for real owners and everyday decisions.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <section className="section-shell">
      <Breadcrumbs items={[{ name: "About", href: "/about" }]} />
      <p className="section-kicker">About DogHaven</p>
      <h1 className="section-title">A practical dog care guide for South African owners</h1>
      <p className="section-copy">
        DogHaven exists to make dog care easier to understand for people living in South Africa.
        Owners often need clear help before they know which professional to call, which question to
        ask, or which cost to budget for. This site is designed to answer those practical moments
        with warmth, care, and local context.
      </p>

      <div className="mt-8 grid gap-5 md:grid-cols-2">
        <article className="rounded-2xl border border-oat bg-white p-6 shadow-sm">
          <h2 className="text-2xl font-black text-cocoa">What DogHaven covers</h2>
          <p className="mt-3 leading-7 text-bark">
            The editorial focus includes dog health, emergency preparation, breed research,
            adoption safety, puppy scams, training, grooming, food choices, insurance, ownership
            costs, and dog-friendly planning. Content is written for owners who want useful next
            steps, not vague reassurance.
          </p>
        </article>
        <article className="rounded-2xl border border-oat bg-white p-6 shadow-sm">
          <h2 className="text-2xl font-black text-cocoa">What DogHaven avoids</h2>
          <p className="mt-3 leading-7 text-bark">
            DogHaven does not publish fake listings, fake phone numbers, fake reviews, unsupported
            ranking claims, or invented verification badges. If directory listings are added later,
            they will be checked manually before publication.
          </p>
        </article>
      </div>

      <div className="mt-8">
        <EmergencyNotice />
      </div>
    </section>
  );
}
