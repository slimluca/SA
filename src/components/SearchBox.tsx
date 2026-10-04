"use client";

import { ArrowRight, Search } from "lucide-react";
import { useMemo, useState } from "react";
import { useRouter } from "next/navigation";

const searchItems = [
  { title: "Dog health", keywords: "health symptoms vet wellbeing", href: "/health" },
  { title: "Emergency help", keywords: "urgent poison collapse emergency", href: "/emergency" },
  { title: "Ticks and fleas", keywords: "biliary parasite prevention", href: "/health/ticks-and-fleas-dogs-south-africa" },
  { title: "Vaccination schedule", keywords: "puppy rabies boosters", href: "/health/vaccination-schedule-south-africa" },
  { title: "Breed explorer", keywords: "breed dog fit compare lifestyle", href: "/breeds" },
  { title: "Dog adoption", keywords: "rescue puppy adopt", href: "/adoption" },
  { title: "Dog food", keywords: "feeding nutrition diet", href: "/food" },
  { title: "Can my dog eat this?", keywords: "toxic foods chocolate grapes lookup", href: "/tools/can-my-dog-eat-this" },
  { title: "Dog cost calculator", keywords: "budget costs money calculator", href: "/tools/dog-cost-calculator" },
  { title: "Dog health calendar", keywords: "routine care reminders calendar", href: "/tools/dog-health-calendar" },
  { title: "Training", keywords: "behaviour puppy training", href: "/training" },
  { title: "Dog-friendly South Africa", keywords: "local places travel outings", href: "/dog-friendly" },
];

export function SearchBox({ compact = false }: { compact?: boolean }) {
  const router = useRouter();
  const [query, setQuery] = useState("");
  const matches = useMemo(() => {
    const term = query.trim().toLowerCase();
    if (!term) return [];
    return searchItems.filter((item) => `${item.title} ${item.keywords}`.toLowerCase().includes(term)).slice(0, 5);
  }, [query]);

  function submit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (matches[0]) router.push(matches[0].href);
  }

  return (
    <div className="relative">
      <form onSubmit={submit} className={`border border-white/70 bg-white/95 shadow-soft ${compact ? "rounded-2xl p-2" : "rounded-[1.4rem] p-3"}`}>
        {!compact ? <label htmlFor="site-search" className="mb-2 block text-sm font-black text-navy">What does your dog need today?</label> : null}
        <div className="flex gap-2">
          <div className="relative flex-1">
            <Search className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-sage" aria-hidden="true" />
            <input id="site-search" value={query} onChange={(event) => setQuery(event.target.value)} type="search" className="h-12 w-full rounded-xl border border-oat bg-cream pl-12 pr-4 text-sm font-semibold text-navy outline-none transition placeholder:text-bark/55 focus:border-sage focus:ring-4 focus:ring-sage/15" placeholder="Search health, breeds, food, tools..." autoComplete="off" />
          </div>
          <button type="submit" disabled={!matches.length} className="inline-flex h-12 items-center gap-2 rounded-xl bg-sage px-5 text-sm font-black text-white transition hover:bg-moss disabled:cursor-not-allowed disabled:opacity-60">
            <span className="hidden sm:inline">Search</span><ArrowRight className="h-4 w-4" aria-hidden="true" />
          </button>
        </div>
      </form>
      {query.trim() ? (
        <div className="absolute inset-x-0 top-full z-30 mt-2 overflow-hidden rounded-2xl border border-oat bg-white p-2 shadow-soft">
          {matches.length ? matches.map((item) => (
            <button key={item.href} type="button" onClick={() => router.push(item.href)} className="flex min-h-11 w-full items-center justify-between rounded-xl px-4 py-2 text-left text-sm font-bold text-navy hover:bg-cream hover:text-moss">
              {item.title}<ArrowRight className="h-4 w-4 text-sage" aria-hidden="true" />
            </button>
          )) : <p className="px-4 py-3 text-sm text-bark">No close match. Try “health”, “breed”, “food” or “cost”.</p>}
        </div>
      ) : null}
    </div>
  );
}
