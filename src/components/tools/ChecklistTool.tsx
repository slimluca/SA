"use client";

import { useMemo, useState } from "react";

export type ChecklistGroup = {
  title: string;
  items: string[];
};

export function ChecklistTool({ groups }: { groups: ChecklistGroup[] }) {
  const allItems = useMemo(
    () => groups.flatMap((group) => group.items.map((item) => `${group.title}:${item}`)),
    [groups],
  );
  const [checked, setChecked] = useState<string[]>([]);

  const progress = allItems.length ? Math.round((checked.length / allItems.length) * 100) : 0;

  function toggle(id: string) {
    setChecked((current) => (current.includes(id) ? current.filter((item) => item !== id) : [...current, id]));
  }

  return (
    <div className="rounded-2xl border border-oat bg-white p-5 shadow-sm">
      <div className="rounded-2xl border border-sage/35 bg-sage/10 p-4">
        <p className="text-sm font-black uppercase tracking-wide text-moss">Checklist progress</p>
        <div className="mt-3 h-3 overflow-hidden rounded-full bg-white">
          <div className="h-full rounded-full bg-sage" style={{ width: `${progress}%` }} />
        </div>
        <p className="mt-2 text-sm font-bold text-bark">{checked.length} of {allItems.length} items ticked</p>
      </div>

      <div className="mt-6 space-y-6">
        {groups.map((group) => (
          <section key={group.title}>
            <h2 className="text-xl font-black text-cocoa">{group.title}</h2>
            <div className="mt-3 grid gap-3">
              {group.items.map((item) => {
                const id = `${group.title}:${item}`;
                return (
                  <label key={id} className="flex cursor-pointer gap-3 rounded-xl border border-oat bg-cream px-4 py-3 text-sm font-semibold leading-6 text-bark">
                    <input className="mt-1 h-4 w-4 accent-sage" type="checkbox" checked={checked.includes(id)} onChange={() => toggle(id)} />
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
