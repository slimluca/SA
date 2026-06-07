"use client";

import { useMemo, useState } from "react";

const names = {
  cute: ["Bean", "Nunu", "Milo", "Lulu", "Biscuit", "Pip", "Teddy", "Mochi", "Poppy", "Buttons"],
  strong: ["Atlas", "Ranger", "Koda", "Storm", "Diesel", "Nova", "Boulder", "Zara", "Sable", "Bruno"],
  southAfrican: ["Rooibos", "Fynbos", "Karoo", "Kudu", "Aloe", "Marula", "Dune", "Mielie", "Chutney", "Sable"],
  smallDog: ["Pip", "Bean", "Pixie", "Dot", "Pebble", "Bibi", "Kiki", "Coco", "Mila", "Nunu"],
  bigDog: ["Atlas", "Bruno", "Ranger", "Koda", "Nala", "Sable", "Storm", "Nova", "Rex", "Zara"],
  puppy: ["Sprout", "Peanut", "Mochi", "Biscuit", "Teddy", "Pip", "Lulu", "Finn", "Sunny", "Bean"],
  activeDog: ["Scout", "Rocket", "Dash", "River", "Echo", "Bolt", "Skye", "Ranger", "Storm", "Jax"],
} as const;

const categoryLabels = {
  cute: "Cute names",
  strong: "Strong names",
  southAfrican: "South African-inspired names",
  smallDog: "Small dog names",
  bigDog: "Big dog names",
  puppy: "Puppy names",
  activeDog: "Active dog names",
} as const;

const genderLabels = {
  either: "Either",
  female: "Female",
  male: "Male",
} as const;

const genderNames = {
  either: ["Milo", "Scout", "River", "Skye", "Bean", "Koda", "Sunny", "Echo", "Rooibos", "Pip"],
  female: ["Luna", "Nala", "Zara", "Mila", "Cleo", "Lulu", "Nova", "Poppy", "Bella", "Roxy"],
  male: ["Finn", "Max", "Bruno", "Atlas", "Jax", "Toby", "Rex", "Buddy", "Diesel", "Ollie"],
} as const;

export function DogNameGenerator() {
  const [category, setCategory] = useState<keyof typeof names>("cute");
  const [gender, setGender] = useState<keyof typeof genderLabels>("either");
  const [shortOnly, setShortOnly] = useState(false);
  const [spin, setSpin] = useState(0);

  const generated = useMemo(() => {
    const combined = [...names[category], ...genderNames[gender]];
    const unique = Array.from(new Set(combined)).filter((name) => !shortOnly || name.length <= 5);
    const list = unique.length ? unique : combined;
    return Array.from({ length: 9 }, (_, index) => list[(index + spin) % list.length]);
  }, [category, gender, shortOnly, spin]);

  return (
    <div className="rounded-2xl border border-oat bg-white p-5 shadow-sm md:p-6">
      <div className="grid gap-4 lg:grid-cols-[1fr_1fr_auto]">
        <label className="grid gap-2 text-sm font-bold text-cocoa">
          Style
          <select className="rounded-xl border border-oat bg-cream px-3 py-3 text-bark focus:border-sage focus:outline-none focus:ring-4 focus:ring-sage/15" value={category} onChange={(event) => setCategory(event.target.value as keyof typeof names)}>
            {Object.entries(categoryLabels).map(([key, label]) => (
              <option key={key} value={key}>{label}</option>
            ))}
          </select>
        </label>
        <label className="grid gap-2 text-sm font-bold text-cocoa">
          Name feel
          <select className="rounded-xl border border-oat bg-cream px-3 py-3 text-bark focus:border-sage focus:outline-none focus:ring-4 focus:ring-sage/15" value={gender} onChange={(event) => setGender(event.target.value as keyof typeof genderLabels)}>
            {Object.entries(genderLabels).map(([key, label]) => (
              <option key={key} value={key}>{label}</option>
            ))}
          </select>
        </label>
        <label className="flex items-center gap-3 rounded-xl border border-oat bg-cream px-4 py-3 text-sm font-bold text-cocoa lg:self-end">
          <input
            type="checkbox"
            checked={shortOnly}
            onChange={(event) => setShortOnly(event.target.checked)}
            className="h-4 w-4 rounded border-oat text-sage focus:ring-sage"
          />
          Short names only
        </label>
      </div>
      <button className="mt-4 w-full rounded-xl bg-honey px-5 py-3 text-sm font-black text-cocoa shadow-sm transition hover:bg-sage sm:w-auto" type="button" onClick={() => setSpin((value) => value + 4)}>
        Generate names
      </button>
      <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {generated.map((name, index) => (
          <div key={`${name}-${spin}-${index}`} className="rounded-2xl border border-honey/40 bg-honey/15 p-5 text-center text-2xl font-black text-cocoa">
            {name}
          </div>
        ))}
      </div>
      <p className="mt-4 text-sm leading-6 text-bark">
        Names are generated in your browser and are not stored. Test favourites out loud before
        choosing, and avoid names that sound too similar to cues such as sit, stay, no, down or come.
      </p>
    </div>
  );
}
