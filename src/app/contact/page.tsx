import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ContactForm } from "@/components/ContactForm";
import { contactReasons } from "@/lib/data";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "Contact DogHaven | South African Dog Care Guide",
  description:
    "Contact DogHaven to suggest a practical guide topic, share a correction, or ask about future manually verified listings.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <section className="section-shell">
      <Breadcrumbs items={[{ name: "Contact", href: "/contact" }]} />
      <p className="section-kicker">Contact</p>
      <h1 className="section-title">Help make DogHaven more useful</h1>
      <p className="section-copy">
        DogHaven welcomes practical topic suggestions, correction requests, and source ideas that
        can help South African dog owners make better decisions. For medical concerns about your
        own dog, please contact a veterinarian directly.
      </p>

      <div className="mt-8">
        <ContactForm />
      </div>

      <div className="mt-8 grid gap-4 md:grid-cols-3">
        {contactReasons.map(({ title, description, icon: Icon }) => (
          <article key={title} className="rounded-2xl border border-oat bg-white p-5 shadow-sm">
            <span className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-sage text-cream">
              <Icon className="h-5 w-5" aria-hidden="true" />
            </span>
            <h2 className="text-lg font-black text-cocoa">{title}</h2>
            <p className="mt-2 text-sm leading-6 text-bark">{description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
