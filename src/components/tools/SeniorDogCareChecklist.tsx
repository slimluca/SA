"use client";

import { useMemo, useState } from "react";

const checklistSections = [
  {
    title: "Mobility checks",
    items: [
      "Note stiffness after sleeping or resting.",
      "Watch for slipping on tiles, trouble with stairs, or reluctance to jump.",
      "Record any limping, dragging, weakness, or slower walks.",
      "Ask your vet what exercise is safe for your dog's joints and heart.",
    ],
  },
  {
    title: "Dental checks",
    items: [
      "Check for stronger breath, drooling, chewing on one side, or pawing at the mouth.",
      "Look for red gums, visible tartar, bleeding, swelling, or broken teeth if your dog allows it safely.",
      "Ask whether a dental assessment or teeth cleaning discussion is needed.",
    ],
  },
  {
    title: "Weight and body condition",
    items: [
      "Ask your vet what body condition score is healthy for your senior dog.",
      "Track weight changes rather than guessing from photos.",
      "Count treats, table scraps, chews, and training rewards.",
      "Discuss safe exercise and food portions before starting a weight plan.",
    ],
  },
  {
    title: "Appetite and water intake",
    items: [
      "Note appetite changes, picky eating, or difficulty chewing.",
      "Watch for drinking more water than usual or urinating more often.",
      "Record vomiting, diarrhoea, constipation, or accidents in the house.",
      "Contact a vet promptly for sudden appetite loss, repeated vomiting, or severe weakness.",
    ],
  },
  {
    title: "Skin and coat changes",
    items: [
      "Check for itchiness, hair loss, hot spots, scabs, sores, or strong smell.",
      "Look for fleas, ticks, and flea dirt during grooming.",
      "Note whether skin signs follow grass, dust, heat, swimming, grooming, or food changes.",
      "Do not use human creams, oils, or leftover medication without vet advice.",
    ],
  },
  {
    title: "Lumps and bumps to mention",
    items: [
      "Run your hands gently over your dog during calm cuddle or grooming time.",
      "Write down where new lumps are and when you first noticed them.",
      "Take a clear photo for your vet if safe and useful.",
      "Ask whether a lump should be measured, sampled, removed, or monitored.",
    ],
  },
  {
    title: "Behaviour changes",
    items: [
      "Watch for confusion, anxiety, night waking, grumpiness, hiding, or house soiling.",
      "Note whether behaviour changes happen with pain, hearing loss, vision changes, or routine changes.",
      "Avoid punishment for senior behaviour changes; ask your vet what may be driving them.",
    ],
  },
  {
    title: "Hearing and vision changes",
    items: [
      "Watch for bumping into objects, cloudy eyes, missed cues, or startling easily.",
      "Use calm routines and avoid surprising a dog who may not hear or see well.",
      "Ask your vet which eye or ear changes need assessment.",
    ],
  },
  {
    title: "Medication questions for the vet",
    items: [
      "Ask what each medication is for and how follow-up is monitored.",
      "Ask which side effects should be reported.",
      "Ask what to do if a dose is missed.",
      "Do not stop or change medication without veterinary advice.",
    ],
  },
  {
    title: "Comfort and home setup",
    items: [
      "Add non-slip mats where your dog stands, eats, or walks often.",
      "Provide supportive bedding in a quiet, easy-to-reach place.",
      "Keep water close and shade available in hot South African weather.",
      "Use ramps, steps, or barriers only if they are safe for your dog.",
    ],
  },
];

export function SeniorDogCareChecklist() {
  const [checkedItems, setCheckedItems] = useState<Record<string, boolean>>({});

  const allItems = useMemo(
    () => checklistSections.flatMap((section) => section.items.map((item) => `${section.title}-${item}`)),
    [],
  );
  const completed = allItems.filter((item) => checkedItems[item]).length;

  function toggleItem(key: string) {
    setCheckedItems((current) => ({ ...current, [key]: !current[key] }));
  }

  return (
    <div className="rounded-2xl border border-oat bg-white p-5 shadow-sm md:p-6">
      <div className="rounded-2xl border border-honey/45 bg-honey/12 p-5 text-sm leading-6 text-bark">
        <p className="font-black text-cocoa">Senior care planning note</p>
        <p className="mt-1">
          This checklist runs in your browser and does not collect or store personal information. It
          helps you prepare observations for your vet, but your veterinarian&apos;s advice comes
          first.
        </p>
        <p className="mt-3 font-bold text-cocoa">
          Checked {completed} of {allItems.length} planning prompts.
        </p>
      </div>

      <div className="mt-6 grid gap-5 lg:grid-cols-2">
        {checklistSections.map((section) => (
          <section key={section.title} className="rounded-2xl border border-oat bg-cream p-5">
            <h2 className="text-xl font-black text-cocoa">{section.title}</h2>
            <div className="mt-4 grid gap-3">
              {section.items.map((item) => {
                const key = `${section.title}-${item}`;

                return (
                  <label key={key} className="flex cursor-pointer gap-3 rounded-xl bg-white/70 p-3 text-sm font-semibold leading-6 text-bark transition hover:bg-white">
                    <input
                      type="checkbox"
                      checked={Boolean(checkedItems[key])}
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
