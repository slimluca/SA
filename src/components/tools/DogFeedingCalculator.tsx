"use client";

import { useMemo, useState } from "react";

const ageMultipliers = {
  puppy: { label: "Puppy", factor: 2.2 },
  adult: { label: "Adult", factor: 1.4 },
  senior: { label: "Senior", factor: 1.2 },
} as const;

const activityMultipliers = {
  low: { label: "Low activity", factor: 0.9 },
  normal: { label: "Normal activity", factor: 1 },
  high: { label: "High activity", factor: 1.25 },
} as const;

const conditionMultipliers = {
  underweight: { label: "Underweight", factor: 1.12 },
  ideal: { label: "Ideal", factor: 1 },
  overweight: { label: "Overweight", factor: 0.85 },
} as const;

const foodTypes = {
  kibble: { label: "Kibble", kcalPer100g: 360 },
  wet: { label: "Wet food", kcalPer100g: 110 },
  mixed: { label: "Mixed feeding", kcalPer100g: 220 },
} as const;

export function DogFeedingCalculator() {
  const [weight, setWeight] = useState(15);
  const [age, setAge] = useState<keyof typeof ageMultipliers>("adult");
  const [activity, setActivity] = useState<keyof typeof activityMultipliers>("normal");
  const [condition, setCondition] = useState<keyof typeof conditionMultipliers>("ideal");
  const [foodType, setFoodType] = useState<keyof typeof foodTypes>("kibble");

  const result = useMemo(() => {
    const safeWeight = Math.max(1, Math.min(weight, 90));
    const rer = 70 * Math.pow(safeWeight, 0.75);
    const calories =
      rer * ageMultipliers[age].factor * activityMultipliers[activity].factor * conditionMultipliers[condition].factor;
    const grams = (calories / foodTypes[foodType].kcalPer100g) * 100;

    return {
      calories: Math.round(calories),
      gramsLow: Math.max(10, Math.round(grams * 0.9)),
      gramsHigh: Math.max(20, Math.round(grams * 1.1)),
    };
  }, [activity, age, condition, foodType, weight]);

  return (
    <div className="rounded-2xl border border-oat bg-white p-5 shadow-sm">
      <div className="grid gap-4 md:grid-cols-2">
        <label className="grid gap-2 text-sm font-bold text-cocoa">
          Dog weight in kg
          <input
            className="rounded-xl border border-oat bg-cream px-3 py-3 text-bark"
            min="1"
            max="90"
            type="number"
            value={weight}
            onChange={(event) => setWeight(Number(event.target.value))}
          />
        </label>
        <label className="grid gap-2 text-sm font-bold text-cocoa">
          Age stage
          <select className="rounded-xl border border-oat bg-cream px-3 py-3 text-bark" value={age} onChange={(event) => setAge(event.target.value as keyof typeof ageMultipliers)}>
            {Object.entries(ageMultipliers).map(([key, item]) => (
              <option key={key} value={key}>{item.label}</option>
            ))}
          </select>
        </label>
        <label className="grid gap-2 text-sm font-bold text-cocoa">
          Activity level
          <select className="rounded-xl border border-oat bg-cream px-3 py-3 text-bark" value={activity} onChange={(event) => setActivity(event.target.value as keyof typeof activityMultipliers)}>
            {Object.entries(activityMultipliers).map(([key, item]) => (
              <option key={key} value={key}>{item.label}</option>
            ))}
          </select>
        </label>
        <label className="grid gap-2 text-sm font-bold text-cocoa">
          Body condition
          <select className="rounded-xl border border-oat bg-cream px-3 py-3 text-bark" value={condition} onChange={(event) => setCondition(event.target.value as keyof typeof conditionMultipliers)}>
            {Object.entries(conditionMultipliers).map(([key, item]) => (
              <option key={key} value={key}>{item.label}</option>
            ))}
          </select>
        </label>
        <label className="grid gap-2 text-sm font-bold text-cocoa md:col-span-2">
          Food type
          <select className="rounded-xl border border-oat bg-cream px-3 py-3 text-bark" value={foodType} onChange={(event) => setFoodType(event.target.value as keyof typeof foodTypes)}>
            {Object.entries(foodTypes).map(([key, item]) => (
              <option key={key} value={key}>{item.label}</option>
            ))}
          </select>
        </label>
      </div>

      <div className="mt-6 rounded-2xl border border-honey/45 bg-honey/15 p-5">
        <p className="text-sm font-black uppercase tracking-wide text-bark">Estimated daily starting point</p>
        <p className="mt-2 text-3xl font-black text-cocoa">{result.calories.toLocaleString("en-ZA")} kcal/day</p>
        <p className="mt-2 text-lg font-black text-moss">
          About {result.gramsLow}g - {result.gramsHigh}g per day for this food type estimate
        </p>
        <p className="mt-3 text-sm leading-6 text-bark">
          Check your exact food label because calories vary widely. Adjust with body condition and veterinary advice.
        </p>
      </div>
    </div>
  );
}
