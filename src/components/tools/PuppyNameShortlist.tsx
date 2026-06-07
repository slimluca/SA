"use client";

import { useState } from "react";

const starterNames = ["Milo", "Lulu", "Pip", "Nala", "Bean", "Scout", "Cleo", "Koda"];

export function PuppyNameShortlist() {
  const [draft, setDraft] = useState("");
  const [shortlist, setShortlist] = useState<string[]>([]);

  function addName(name: string) {
    const cleanName = name.trim().replace(/\s+/g, " ");
    if (!cleanName || shortlist.some((item) => item.toLowerCase() === cleanName.toLowerCase())) {
      return;
    }
    setShortlist((current) => [...current, cleanName].slice(0, 8));
    setDraft("");
  }

  return (
    <div className="rounded-2xl border border-oat bg-white p-5 shadow-sm md:p-6">
      <div className="rounded-2xl border border-honey/45 bg-honey/12 p-5 text-sm leading-6 text-bark">
        <p className="font-black text-cocoa">Shortlist note</p>
        <p className="mt-1">
          This tool uses browser state only. It does not save your list, ask for login details or
          collect personal information. Say each name out loud before choosing.
        </p>
      </div>

      <div className="mt-6 grid gap-3 sm:grid-cols-[1fr_auto]">
        <label className="grid gap-2 text-sm font-bold text-cocoa">
          Add a favourite name
          <input
            value={draft}
            onChange={(event) => setDraft(event.target.value)}
            maxLength={32}
            className="rounded-xl border border-oat bg-cream px-4 py-3 text-bark outline-none transition focus:border-sage focus:ring-4 focus:ring-sage/15"
          />
        </label>
        <button
          type="button"
          onClick={() => addName(draft)}
          className="rounded-xl bg-honey px-5 py-3 text-sm font-black text-cocoa shadow-sm transition hover:bg-sage sm:self-end"
        >
          Add name
        </button>
      </div>

      <div className="mt-5 grid gap-2 sm:grid-cols-4">
        {starterNames.map((name) => (
          <button
            key={name}
            type="button"
            onClick={() => addName(name)}
            className="rounded-xl border border-sage/30 bg-sage/10 px-3 py-3 text-sm font-bold text-cocoa transition hover:border-sage"
          >
            {name}
          </button>
        ))}
      </div>

      <section className="mt-6 rounded-2xl border border-oat bg-cream p-5">
        <h2 className="text-xl font-black text-cocoa">Your shortlist</h2>
        {shortlist.length ? (
          <div className="mt-4 grid gap-3 sm:grid-cols-2">
            {shortlist.map((name) => (
              <div key={name} className="flex items-center justify-between gap-3 rounded-xl bg-white px-4 py-3">
                <span className="text-lg font-black text-cocoa">{name}</span>
                <button
                  type="button"
                  onClick={() => setShortlist((current) => current.filter((item) => item !== name))}
                  className="text-sm font-bold text-bark transition hover:text-cocoa"
                >
                  Remove
                </button>
              </div>
            ))}
          </div>
        ) : (
          <p className="mt-3 text-sm leading-6 text-bark">
            Add two or three names, then test them in a happy voice, a recall voice and a calm vet
            waiting-room voice.
          </p>
        )}
      </section>
    </div>
  );
}
