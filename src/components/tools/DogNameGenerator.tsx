"use client";

import { useMemo, useState } from "react";

const names = {
  cute: ["Bean", "Nunu", "Milo", "Lulu", "Biscuit", "Pip", "Teddy", "Mochi"],
  strong: ["Atlas", "Ranger", "Koda", "Storm", "Diesel", "Nova", "Boulder", "Zara"],
  food: ["Chutney", "Koeksister", "Biscuit", "Mielie", "Pepper", "Peanut", "Pumpkin", "Rooibos"],
  nature: ["Fynbos", "River", "Dune", "Aloe", "Thorn", "Skye", "Pebble", "Marula"],
  afrikaans: ["Liefie", "Blits", "Ster", "Klein", "Mooi", "Bokkie", "Vlooi", "Koffie"],
  nguni: ["Langa", "Nandi", "Themba", "Zola", "Buhle", "Khaya", "Sibu", "Lebo"],
  beach: ["Sandy", "Kelp", "Sunny", "Coral", "Splash", "Tide", "Shelly", "Breeze"],
  safari: ["Mamba", "Kudu", "Nyala", "Sable", "Savanna", "Acacia", "Ranger", "Tula"],
} as const;

const categoryLabels = {
  cute: "Cute names",
  strong: "Strong names",
  food: "Food-inspired names",
  nature: "Nature-inspired names",
  afrikaans: "Afrikaans-inspired names",
  nguni: "Zulu/Xhosa-inspired inspiration",
  beach: "Beach-inspired names",
  safari: "Safari-inspired names",
} as const;

export function DogNameGenerator() {
  const [category, setCategory] = useState<keyof typeof names>("cute");
  const [spin, setSpin] = useState(0);

  const generated = useMemo(() => {
    const list = names[category];
    return Array.from({ length: 6 }, (_, index) => list[(index + spin) % list.length]);
  }, [category, spin]);

  return (
    <div className="rounded-2xl border border-oat bg-white p-5 shadow-sm">
      <div className="flex flex-col gap-3 sm:flex-row">
        <select className="rounded-xl border border-oat bg-cream px-3 py-3 text-bark" value={category} onChange={(event) => setCategory(event.target.value as keyof typeof names)}>
          {Object.entries(categoryLabels).map(([key, label]) => (
            <option key={key} value={key}>{label}</option>
          ))}
        </select>
        <button className="rounded-xl bg-moss px-5 py-3 text-sm font-black text-white shadow-sm transition hover:bg-cocoa" type="button" onClick={() => setSpin((value) => value + 3)}>
          Generate names
        </button>
      </div>
      <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {generated.map((name) => (
          <div key={`${name}-${spin}`} className="rounded-2xl border border-honey/40 bg-honey/15 p-5 text-center text-2xl font-black text-cocoa">
            {name}
          </div>
        ))}
      </div>
      <p className="mt-4 text-sm leading-6 text-bark">
        The Zulu/Xhosa-inspired list is respectful sound and name inspiration only, not a cultural claim about your dog.
      </p>
    </div>
  );
}
