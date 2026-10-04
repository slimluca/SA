"use client";

import Link from "next/link";
import { ArrowRight, Search } from "lucide-react";
import { useMemo, useState } from "react";
import type { CardLink } from "@/lib/content";

export function GuideLibrary({ items, label = "Search the library" }: { items: CardLink[]; label?: string }) {
  const [query, setQuery] = useState("");
  const unique = useMemo(() => Array.from(new Map(items.map((item) => [item.href, item])).values()), [items]);
  const shown = useMemo(() => {
    const term = query.trim().toLowerCase();
    return term ? unique.filter((item) => `${item.title} ${item.description}`.toLowerCase().includes(term)) : unique;
  }, [query, unique]);

  return (
    <div>
      <label className="relative block max-w-xl">
        <span className="sr-only">{label}</span>
        <Search className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-sage" aria-hidden="true" />
        <input value={query} onChange={(event) => setQuery(event.target.value)} type="search" placeholder={label} className="h-12 w-full rounded-full border border-oat bg-white pl-12 pr-5 text-sm font-semibold text-navy shadow-sm outline-none focus:border-sage focus:ring-4 focus:ring-sage/15" />
      </label>
      <p className="mt-3 text-sm text-bark">Showing {shown.length} of {unique.length} guides.</p>
      <div className="mt-5 grid items-start gap-x-8 sm:grid-cols-2 lg:grid-cols-3">
        {shown.map((item) => (
          <Link key={item.href} href={item.href} className="group flex min-h-24 items-start justify-between gap-3 border-t border-oat py-4 outline-none hover:text-moss focus-visible:rounded-lg focus-visible:ring-2 focus-visible:ring-moss">
            <span><span className="block font-black leading-5 text-navy group-hover:text-moss">{item.title}</span><span className="mt-1 block text-sm leading-5 text-bark">{item.description}</span></span>
            <ArrowRight className="mt-1 h-4 w-4 shrink-0 text-sage transition group-hover:translate-x-1" aria-hidden="true" />
          </Link>
        ))}
      </div>
      {!shown.length ? <p className="rounded-2xl border border-oat bg-white p-5 text-bark">No matching guide. Try a broader term.</p> : null}
    </div>
  );
}
