"use client";

import { useMemo, useState } from "react";

const lifeStages = {
  puppy: {
    label: "Puppy",
    note: "Puppies need vet-guided vaccine, deworming, parasite, and safe socialisation planning.",
  },
  adult: {
    label: "Adult",
    note: "Adult dogs usually benefit from steady prevention records and routine checkups.",
  },
  senior: {
    label: "Senior",
    note: "Senior dogs often need closer monitoring for dental health, weight, mobility, appetite, and chronic disease.",
  },
} as const;

const lifestyles = {
  home: "Mostly home and neighbourhood walks",
  social: "Daycare, grooming, training classes, boarding, or regular dog contact",
  outdoor: "Hiking, farms, long grass, beaches, travel, or high parasite exposure",
} as const;

export function DogHealthCalendar() {
  const [stage, setStage] = useState<keyof typeof lifeStages>("adult");
  const [lifestyle, setLifestyle] = useState<keyof typeof lifestyles>("home");

  const reminders = useMemo(() => {
    const core = [
      {
        item: "Vaccinations",
        timing: stage === "puppy" ? "Follow your puppy vet schedule" : "Ask your vet when boosters are due",
        why: "Keeps core disease protection and records up to date.",
      },
      {
        item: "Rabies booster",
        timing: "Record the due date from your vet",
        why: "Rabies prevention is a serious South African public-health responsibility.",
      },
      {
        item: "Deworming",
        timing: stage === "puppy" ? "Puppies need a more frequent vet-guided plan" : "Set reminders based on vet and product guidance",
        why: "Schedules vary by age, risk, household, and product instructions.",
      },
      {
        item: "Tick and flea prevention",
        timing: lifestyle === "outdoor" ? "Discuss higher-risk exposure with your vet" : "Use the interval your vet recommends",
        why: "South African gardens, parks, kennels, beaches, and warm seasons can increase risk.",
      },
      {
        item: "Routine vet checkup",
        timing: stage === "senior" ? "Ask your vet whether checks should be more frequent" : "Ask your vet for a routine check rhythm",
        why: "Catches weight, dental, skin, mobility, and prevention issues earlier.",
      },
      {
        item: "Grooming and coat checks",
        timing: lifestyle === "outdoor" ? "Check coat and paws after high-risk outings" : "Plan by coat type and season",
        why: "Helps spot ticks, fleas, grass seeds, matting, ear issues, and paw problems.",
      },
      {
        item: "Dental checks",
        timing: stage === "senior" ? "Raise dental health at every routine check" : "Ask your vet what to watch at home",
        why: "Bad breath, tartar, pain, and gum changes can affect comfort and health.",
      },
    ];

    if (lifestyle === "social") {
      return [
        ...core,
        {
          item: "High-contact dog environments",
          timing: "Check records before boarding, daycare, grooming, or classes",
          why: "Providers may ask for vaccination records, parasite prevention, or kennel cough vaccine discussions.",
        },
      ];
    }

    return core;
  }, [lifestyle, stage]);

  return (
    <div className="rounded-2xl border border-oat bg-white p-5 shadow-sm">
      <div className="grid gap-4 md:grid-cols-2">
        <label className="grid gap-2 text-sm font-bold text-cocoa">
          Dog life stage
          <select
            className="rounded-xl border border-oat bg-cream px-3 py-3 text-bark outline-none transition focus:border-sage focus:ring-4 focus:ring-sage/15"
            value={stage}
            onChange={(event) => setStage(event.target.value as keyof typeof lifeStages)}
          >
            {Object.entries(lifeStages).map(([key, item]) => (
              <option key={key} value={key}>
                {item.label}
              </option>
            ))}
          </select>
        </label>

        <label className="grid gap-2 text-sm font-bold text-cocoa">
          Lifestyle and exposure
          <select
            className="rounded-xl border border-oat bg-cream px-3 py-3 text-bark outline-none transition focus:border-sage focus:ring-4 focus:ring-sage/15"
            value={lifestyle}
            onChange={(event) => setLifestyle(event.target.value as keyof typeof lifestyles)}
          >
            {Object.entries(lifestyles).map(([key, label]) => (
              <option key={key} value={key}>
                {label}
              </option>
            ))}
          </select>
        </label>
      </div>

      <div className="mt-6 rounded-2xl border border-sage/35 bg-sage/10 p-5">
        <p className="text-sm font-black uppercase tracking-wide text-moss">Planning note</p>
        <p className="mt-2 leading-7 text-bark">
          {lifeStages[stage].note} This tool does not store data or create exact medical
          reminders. Use it as a prompt list, then follow your veterinarian&apos;s schedule and
          product instructions.
        </p>
      </div>

      <div className="mt-6 overflow-hidden rounded-2xl border border-oat">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-oat text-left text-sm">
            <thead className="bg-cream text-cocoa">
              <tr>
                <th className="px-4 py-3 font-black">Reminder</th>
                <th className="px-4 py-3 font-black">General timing prompt</th>
                <th className="px-4 py-3 font-black">Why it matters</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-oat bg-white text-bark">
              {reminders.map((reminder) => (
                <tr key={reminder.item}>
                  <td className="px-4 py-3 align-top font-bold text-cocoa">{reminder.item}</td>
                  <td className="px-4 py-3 align-top leading-6">{reminder.timing}</td>
                  <td className="px-4 py-3 align-top leading-6">{reminder.why}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="mt-6 grid gap-3 sm:grid-cols-2">
        {[
          "Keep vaccine cards and rabies records backed up.",
          "Write down product names and dates used.",
          "Ask your vet what to do after missed prevention.",
          "Contact a vet quickly for urgent symptoms or sudden illness.",
        ].map((item) => (
          <div key={item} className="rounded-xl bg-cream px-4 py-3 text-sm font-semibold leading-6 text-cocoa">
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}
