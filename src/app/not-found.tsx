import Link from "next/link";
import { Home, PawPrint } from "lucide-react";
import { ContentLinkCard } from "@/components/ContentLinkCard";

const helpfulLinks = [
  { title: "Emergency", description: "Urgent symptoms and what to prepare before phoning a vet.", href: "/emergency" },
  { title: "Health", description: "Vaccines, ticks, toxic foods, vet visits, and prevention.", href: "/health" },
  { title: "Breeds", description: "Choose a dog that fits your home, climate, and routine.", href: "/breeds" },
  { title: "Adoption", description: "Shelter questions, puppy scam safety, and first-week planning.", href: "/adoption" },
  { title: "Costs", description: "Monthly budgets, vet costs, puppy costs, and emergency savings.", href: "/costs" },
  { title: "Food", description: "Dog food choices, puppy food, labels, and unsafe local foods.", href: "/food" },
  { title: "Province Guides", description: "Local dog-care context by South African province.", href: "/province" },
  { title: "City Guides", description: "Dog-owner guidance for major South African cities.", href: "/city" },
];

export default function NotFound() {
  return (
    <section className="section-shell">
      <div className="rounded-[2rem] border border-oat bg-white p-6 shadow-soft sm:p-10">
        <span className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-honey/25 text-cocoa">
          <PawPrint className="h-7 w-7" aria-hidden="true" />
        </span>
        <p className="mt-6 text-sm font-black uppercase text-moss">Page not found</p>
        <h1 className="mt-2 max-w-3xl text-4xl font-black leading-tight text-cocoa sm:text-5xl">
          This DogHaven page wandered off.
        </h1>
        <p className="mt-4 max-w-3xl text-base leading-7 text-bark">
          The guide you were looking for may have moved, or the link may be mistyped. Here are the
          safest starting points for practical South African dog-care help.
        </p>
        <Link
          href="/"
          className="mt-6 inline-flex items-center gap-2 rounded-full bg-honey px-5 py-3 text-sm font-black text-cocoa shadow-soft transition hover:bg-sage"
        >
          <Home className="h-4 w-4" aria-hidden="true" />
          Back to homepage
        </Link>
      </div>

      <div className="mt-10 grid items-stretch gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {helpfulLinks.map((link) => (
          <ContentLinkCard key={link.title} {...link} />
        ))}
      </div>
    </section>
  );
}
