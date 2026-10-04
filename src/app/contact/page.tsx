import type { Metadata } from "next";
import { UtilityHero } from "@/components/UtilityHero";
import { ContactForm } from "@/components/ContactForm";
import { contactReasons } from "@/lib/data";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "Contact Dog Haven | South African Dog Care Guide",
  description:
    "Contact Dog Haven to suggest a topic, share a correction, or ask about future manually verified listings.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <>
      <UtilityHero path="/contact" kicker="Contact" title="Help make Dog Haven more useful" intro="Dog Haven welcomes topic suggestions, correction requests, and source ideas that can help South African dog owners make better decisions. For medical concerns about your own dog, please contact a veterinarian directly." />
      <section className="section-shell py-12 sm:py-16">
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
    </>
  );
}
