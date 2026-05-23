"use client";

import { useMemo, useState } from "react";

const checklistData = {
  puppy: {
    title: "New puppy home checklist",
    note: "Print or tick this planning list before your puppy arrives. It does not replace vet, shelter or breeder guidance.",
    groups: [
      { title: "Food and bowls", items: ["Current puppy food for transition", "Food and water bowls", "Measuring cup or kitchen scale", "Fresh water plan"] },
      { title: "Bed and safe space", items: ["Washable bed", "Quiet sleep area", "Crate or pen if suitable", "Baby gate or safe boundary"] },
      { title: "Collar and ID", items: ["Soft collar or harness", "ID tag", "Lead", "Microchip question for the vet"] },
      { title: "Vet appointment", items: ["First vet visit booked", "Vaccination card", "Deworming record", "Questions about rabies, ticks and fleas"] },
      { title: "Puppy-proofing", items: ["Cables secured", "Medicines and bait moved", "Pool and balcony risks checked", "Toxic plants moved where possible"] },
      { title: "Training basics", items: ["Toilet routine", "Chew-safe toys", "Reward treats", "Puppy class research after vet guidance"] },
      { title: "Paperwork and transport", items: ["Adoption or breeder paperwork", "Safe car restraint", "Emergency vet details", "Puppy scam red flags reviewed"] },
    ],
  },
  care: {
    title: "Dog care printable checklist",
    note: "Use this as a general dog-care planning list. Urgent symptoms need a vet, and provider prices or rules should be checked directly.",
    groups: [
      { title: "Daily basics", items: ["Measure meals", "Fresh water", "Toilet breaks", "Safe rest area"] },
      { title: "Exercise and enrichment", items: ["Walk or play plan", "Heat-safe timing", "Sniffing or puzzle time", "Calm recovery time"] },
      { title: "Grooming", items: ["Brush coat", "Check nails", "Check ears and paws", "Look for ticks, fleas or grass seeds"] },
      { title: "Health prevention", items: ["Parasite prevention reminder", "Vaccination and rabies record", "Dental check", "Routine vet checkup plan"] },
      { title: "Training and behaviour", items: ["Recall practice", "Lead manners", "Calm greetings", "Barking or separation notes"] },
      { title: "Emergency and budget", items: ["Emergency vet contact saved", "Transport plan", "Insurance or savings check", "Medication or diet notes stored"] },
    ],
  },
} as const;

export function PrintableChecklistTool({ type }: { type: keyof typeof checklistData }) {
  const data = checklistData[type];
  const [checked, setChecked] = useState<Record<string, boolean>>({});
  const allItems = useMemo(
    () => data.groups.flatMap((group) => group.items.map((item) => `${group.title}-${item}`)),
    [data.groups],
  );
  const completed = allItems.filter((item) => checked[item]).length;

  function toggleItem(key: string) {
    setChecked((current) => ({ ...current, [key]: !current[key] }));
  }

  return (
    <div className="rounded-2xl border border-oat bg-white p-5 shadow-sm md:p-6">
      <div className="flex flex-col gap-4 rounded-2xl border border-honey/45 bg-honey/12 p-5 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-sm font-black uppercase tracking-wide text-cocoa">{data.title}</p>
          <p className="mt-1 text-sm leading-6 text-bark">{data.note}</p>
          <p className="mt-2 text-sm font-bold text-cocoa">
            Checked {completed} of {allItems.length} items.
          </p>
        </div>
        <button
          type="button"
          onClick={() => window.print()}
          className="rounded-xl bg-moss px-5 py-3 text-sm font-black text-white shadow-sm transition hover:bg-cocoa"
        >
          Print checklist
        </button>
      </div>

      <div className="mt-6 grid items-start gap-5 lg:grid-cols-2">
        {data.groups.map((group) => (
          <section key={group.title} className="rounded-2xl border border-oat bg-cream p-5">
            <h2 className="text-xl font-black text-cocoa">{group.title}</h2>
            <div className="mt-4 grid gap-3">
              {group.items.map((item) => {
                const key = `${group.title}-${item}`;

                return (
                  <label key={key} className="flex cursor-pointer gap-3 rounded-xl bg-white/75 p-3 text-sm font-semibold leading-6 text-bark transition hover:bg-white">
                    <input
                      type="checkbox"
                      checked={Boolean(checked[key])}
                      onChange={() => toggleItem(key)}
                      className="mt-1 h-4 w-4 rounded border-oat text-sage focus:ring-sage"
                    />
                    <span>{item}</span>
                  </label>
                );
              })}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
