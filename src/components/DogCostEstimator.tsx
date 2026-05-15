"use client";

import { useMemo, useState } from "react";

const sizeRanges = {
  small: { label: "Small dog", min: 350, max: 900 },
  medium: { label: "Medium dog", min: 550, max: 1400 },
  large: { label: "Large dog", min: 850, max: 2300 },
} as const;

const foodRanges = {
  basic: { label: "Careful budget", min: 0, max: 250 },
  standard: { label: "Balanced routine", min: 250, max: 650 },
  higher: { label: "Higher feeding budget", min: 650, max: 1300 },
} as const;

const groomingRanges = {
  low: { label: "Low grooming", min: 0, max: 150 },
  medium: { label: "Regular grooming", min: 200, max: 650 },
  high: { label: "High coat care", min: 500, max: 1100 },
} as const;

const insuranceRanges = {
  no: { label: "No insurance estimate", min: 0, max: 0 },
  yes: { label: "Insurance included", min: 180, max: 900 },
} as const;

const routineVetRanges = {
  low: { label: "Small routine buffer", min: 100, max: 250 },
  medium: { label: "Moderate routine buffer", min: 250, max: 500 },
  high: { label: "Larger routine buffer", min: 500, max: 900 },
} as const;

const parasiteRanges = {
  low: { label: "Basic parasite planning", min: 120, max: 250 },
  medium: { label: "Year-round parasite planning", min: 200, max: 450 },
  high: { label: "Higher tick-risk planning", min: 350, max: 700 },
} as const;

const extrasRanges = {
  none: { label: "No regular extras", min: 0, max: 0 },
  some: { label: "Some training or extras", min: 150, max: 500 },
  more: { label: "Regular training or extras", min: 500, max: 1200 },
} as const;

function money(amount: number) {
  return `R${amount.toLocaleString("en-ZA")}`;
}

export function DogCostEstimator() {
  const [size, setSize] = useState<keyof typeof sizeRanges>("medium");
  const [food, setFood] = useState<keyof typeof foodRanges>("standard");
  const [grooming, setGrooming] = useState<keyof typeof groomingRanges>("medium");
  const [insurance, setInsurance] = useState<keyof typeof insuranceRanges>("yes");
  const [routineVet, setRoutineVet] = useState<keyof typeof routineVetRanges>("medium");
  const [parasites, setParasites] = useState<keyof typeof parasiteRanges>("medium");
  const [extras, setExtras] = useState<keyof typeof extrasRanges>("some");

  const estimate = useMemo(() => {
    const selected = [
      sizeRanges[size],
      foodRanges[food],
      groomingRanges[grooming],
      insuranceRanges[insurance],
      routineVetRanges[routineVet],
      parasiteRanges[parasites],
      extrasRanges[extras],
    ];

    return selected.reduce(
      (total, item) => ({
        min: total.min + item.min,
        max: total.max + item.max,
      }),
      { min: 0, max: 0 },
    );
  }, [extras, food, grooming, insurance, parasites, routineVet, size]);

  return (
    <section className="mt-8 rounded-2xl border border-sage/30 bg-sage/10 p-5 shadow-sm">
      <div className="max-w-3xl">
        <p className="text-xs font-black uppercase tracking-wide text-moss">Planning calculator</p>
        <h2 className="mt-2 text-2xl font-black text-cocoa">Monthly dog cost estimate</h2>
        <p className="mt-2 text-sm leading-6 text-bark">
          This is an illustrative planning range, not a quote or current market price. Real South
          African costs vary by city, clinic, dog size, health, food choice, inflation, and provider.
        </p>
      </div>

      <div className="mt-5 grid gap-4 md:grid-cols-2">
        <label className="grid gap-2 text-sm font-bold text-cocoa">
          Dog size
          <select className="rounded-xl border border-oat bg-white px-3 py-3 text-bark" value={size} onChange={(event) => setSize(event.target.value as keyof typeof sizeRanges)}>
            {Object.entries(sizeRanges).map(([value, option]) => (
              <option key={value} value={value}>{option.label}</option>
            ))}
          </select>
        </label>
        <label className="grid gap-2 text-sm font-bold text-cocoa">
          Food budget level
          <select className="rounded-xl border border-oat bg-white px-3 py-3 text-bark" value={food} onChange={(event) => setFood(event.target.value as keyof typeof foodRanges)}>
            {Object.entries(foodRanges).map(([value, option]) => (
              <option key={value} value={value}>{option.label}</option>
            ))}
          </select>
        </label>
        <label className="grid gap-2 text-sm font-bold text-cocoa">
          Grooming needs
          <select className="rounded-xl border border-oat bg-white px-3 py-3 text-bark" value={grooming} onChange={(event) => setGrooming(event.target.value as keyof typeof groomingRanges)}>
            {Object.entries(groomingRanges).map(([value, option]) => (
              <option key={value} value={value}>{option.label}</option>
            ))}
          </select>
        </label>
        <label className="grid gap-2 text-sm font-bold text-cocoa">
          Insurance
          <select className="rounded-xl border border-oat bg-white px-3 py-3 text-bark" value={insurance} onChange={(event) => setInsurance(event.target.value as keyof typeof insuranceRanges)}>
            {Object.entries(insuranceRanges).map(([value, option]) => (
              <option key={value} value={value}>{option.label}</option>
            ))}
          </select>
        </label>
        <label className="grid gap-2 text-sm font-bold text-cocoa">
          Routine vet buffer
          <select className="rounded-xl border border-oat bg-white px-3 py-3 text-bark" value={routineVet} onChange={(event) => setRoutineVet(event.target.value as keyof typeof routineVetRanges)}>
            {Object.entries(routineVetRanges).map(([value, option]) => (
              <option key={value} value={value}>{option.label}</option>
            ))}
          </select>
        </label>
        <label className="grid gap-2 text-sm font-bold text-cocoa">
          Parasite control
          <select className="rounded-xl border border-oat bg-white px-3 py-3 text-bark" value={parasites} onChange={(event) => setParasites(event.target.value as keyof typeof parasiteRanges)}>
            {Object.entries(parasiteRanges).map(([value, option]) => (
              <option key={value} value={value}>{option.label}</option>
            ))}
          </select>
        </label>
        <label className="grid gap-2 text-sm font-bold text-cocoa md:col-span-2">
          Training or extras
          <select className="rounded-xl border border-oat bg-white px-3 py-3 text-bark" value={extras} onChange={(event) => setExtras(event.target.value as keyof typeof extrasRanges)}>
            {Object.entries(extrasRanges).map(([value, option]) => (
              <option key={value} value={value}>{option.label}</option>
            ))}
          </select>
        </label>
      </div>

      <div className="mt-6 rounded-2xl border border-honey/45 bg-honey/15 p-5">
        <p className="text-sm font-black uppercase tracking-wide text-bark">Estimated monthly planning range</p>
        <p className="mt-2 text-3xl font-black text-cocoa">
          {money(estimate.min)} - {money(estimate.max)}
        </p>
        <p className="mt-2 text-sm leading-6 text-bark">
          Use this as a conversation starter. Request actual quotes from vets, groomers, trainers,
          insurers, shelters, and suppliers before committing to a dog or policy.
        </p>
      </div>
    </section>
  );
}
