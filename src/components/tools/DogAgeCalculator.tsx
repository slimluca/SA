"use client";

import Link from "next/link";
import { useMemo, useState } from "react";

const sizeFactors = {
  small: { label: "Small", senior: 12 },
  medium: { label: "Medium", senior: 10 },
  large: { label: "Large", senior: 8 },
  giant: { label: "Giant", senior: 7 },
} as const;

export function DogAgeCalculator() {
  const [years, setYears] = useState(3);
  const [months, setMonths] = useState(0);
  const [size, setSize] = useState<keyof typeof sizeFactors>("medium");

  const result = useMemo(() => {
    const age = Math.max(0, years) + Math.max(0, Math.min(months, 11)) / 12;
    const seniorAt = sizeFactors[size].senior;
    let stage = "Mature adult";
    let reminder = "Keep routine vet checks, dental care, parasite prevention, weight control, and daily enrichment steady.";

    if (age < 1) {
      stage = "Puppy";
      reminder = "Focus on vaccines, deworming, safe socialisation, food for growth, and gentle training.";
    } else if (age < 3) {
      stage = "Young adult";
      reminder = "Adolescent dogs need training consistency, exercise, safe public manners, and body condition checks.";
    } else if (age >= seniorAt) {
      stage = "Senior";
      reminder = "Ask your vet about senior checks, dental care, mobility, weight changes, appetite, and chronic disease screening.";
    } else if (age >= seniorAt - 2) {
      stage = "Mature adult";
      reminder = "Start watching dental health, stiffness, weight, lumps, appetite, thirst, and insurance or emergency planning.";
    }

    return { stage, reminder };
  }, [months, size, years]);

  return (
    <div className="rounded-2xl border border-oat bg-white p-5 shadow-sm">
      <div className="grid gap-4 md:grid-cols-3">
        <label className="grid gap-2 text-sm font-bold text-cocoa">
          Years
          <input className="rounded-xl border border-oat bg-cream px-3 py-3 text-bark" min="0" max="25" type="number" value={years} onChange={(event) => setYears(Number(event.target.value))} />
        </label>
        <label className="grid gap-2 text-sm font-bold text-cocoa">
          Months
          <input className="rounded-xl border border-oat bg-cream px-3 py-3 text-bark" min="0" max="11" type="number" value={months} onChange={(event) => setMonths(Number(event.target.value))} />
        </label>
        <label className="grid gap-2 text-sm font-bold text-cocoa">
          Dog size
          <select className="rounded-xl border border-oat bg-cream px-3 py-3 text-bark" value={size} onChange={(event) => setSize(event.target.value as keyof typeof sizeFactors)}>
            {Object.entries(sizeFactors).map(([key, item]) => (
              <option key={key} value={key}>{item.label}</option>
            ))}
          </select>
        </label>
      </div>
      <div className="mt-6 rounded-2xl border border-sage/35 bg-sage/10 p-5">
        <p className="text-sm font-black uppercase tracking-wide text-moss">Approximate life stage</p>
        <p className="mt-2 text-3xl font-black text-cocoa">{result.stage}</p>
        <p className="mt-2 text-sm font-semibold text-bark">A broad estimate only; breed, health, and development can shift this timing.</p>
        <p className="mt-3 leading-7 text-bark">{result.reminder}</p>
      </div>

      <div className="mt-6 rounded-2xl border border-sage/30 bg-sage/5 p-5">
        <p className="text-sm font-black text-cocoa">Keep exploring</p>
        <div className="mt-3 flex flex-wrap gap-2">
          <Link href="/tools/dog-health-calendar" className="inline-flex rounded-full bg-white px-4 py-2 text-sm font-bold text-moss shadow-sm hover:bg-sage/10">
            Health calendar
          </Link>
          <Link href="/tools/senior-dog-care-checklist" className="inline-flex rounded-full bg-white px-4 py-2 text-sm font-bold text-moss shadow-sm hover:bg-sage/10">
            Senior care checklist
          </Link>
          <Link href="/puppy" className="inline-flex rounded-full bg-white px-4 py-2 text-sm font-bold text-moss shadow-sm hover:bg-sage/10">
            Puppy guides
          </Link>
        </div>
      </div>
    </div>
  );
}
