"use client";

import Link from "next/link";
import { useMemo, useState } from "react";

const budgetItems = [
  {
    id: "food",
    label: "Food",
    help: "Use the amount you spend in a typical month.",
  },
  {
    id: "routineVet",
    label: "Routine veterinary care and regular medicine",
    help: "Convert annual or periodic costs to a monthly amount.",
  },
  {
    id: "parasiteControl",
    label: "Parasite prevention",
    help: "Use the current product and schedule advised for your dog.",
  },
  {
    id: "grooming",
    label: "Grooming",
    help: "Include home supplies or professional appointments, without counting both twice.",
  },
  {
    id: "insurance",
    label: "Insurance premium",
    help: "Enter the current quote for the plan you are considering.",
  },
  {
    id: "careServices",
    label: "Boarding, daycare, walking or pet sitting",
    help: "Use your expected monthly frequency and current local quote.",
  },
  {
    id: "training",
    label: "Training and activities",
    help: "Convert a course or occasional sessions to a monthly provision.",
  },
  {
    id: "emergencySavings",
    label: "Emergency savings contribution",
    help: "This is a savings amount, not an estimate of emergency treatment.",
  },
  {
    id: "other",
    label: "Other recurring costs",
    help: "Add only costs that are not already included above.",
  },
] as const;

type BudgetItemId = (typeof budgetItems)[number]["id"];
type BudgetAmounts = Partial<Record<BudgetItemId, string>>;

function money(amount: number) {
  return `R${amount.toLocaleString("en-ZA", { maximumFractionDigits: 2 })}`;
}

export function DogCostEstimator() {
  const [amounts, setAmounts] = useState<BudgetAmounts>({});

  const enteredCount = Object.values(amounts).filter((value) => value?.trim() !== "").length;
  const total = useMemo(
    () =>
      Object.values(amounts).reduce((sum, value) => {
        const amount = Number(value);
        return Number.isFinite(amount) && amount > 0 ? sum + amount : sum;
      }, 0),
    [amounts],
  );

  return (
    <section className="mt-8 rounded-2xl border border-sage/30 bg-sage/10 p-5 shadow-sm">
      <div className="max-w-3xl">
        <p className="text-xs font-black uppercase tracking-wide text-moss">Planning calculator</p>
        <h2 className="mt-2 text-2xl font-black text-cocoa">Build your monthly dog budget</h2>
        <p className="mt-2 text-sm leading-6 text-bark">
          This calculator totals the amounts you enter; it does not guess a national price. Use
          current costs for your dog and leave any category blank if it does not apply.
        </p>
        <p className="mt-2 text-sm leading-6 text-bark">
          To convert a known annual cost, multiply it by the number of times it occurs in a year,
          then divide by 12. For source-linked South African price examples, see the{" "}
          <a className="font-bold text-moss underline underline-offset-4" href="/costs/south-africa-dog-ownership-cost-report">
            Dog Ownership Cost Report
          </a>.
        </p>
      </div>

      <div className="mt-5 grid gap-4 md:grid-cols-2">
        {budgetItems.map((item) => (
          <label key={item.id} htmlFor={`dog-cost-${item.id}`} className="grid content-start gap-2 text-sm font-bold text-cocoa">
            {item.label}
            <input
              id={`dog-cost-${item.id}`}
              className="rounded-xl border border-oat bg-white px-3 py-3 text-bark"
              type="number"
              min="0"
              step="0.01"
              inputMode="decimal"
              placeholder="Enter R per month"
              value={amounts[item.id] ?? ""}
              onChange={(event) =>
                setAmounts((current) => ({ ...current, [item.id]: event.target.value }))
              }
            />
            <span className="text-xs font-normal leading-5 text-bark">{item.help}</span>
          </label>
        ))}
      </div>

      <div aria-live="polite" className="mt-6 rounded-2xl border border-honey/45 bg-honey/15 p-5">
        <p className="text-sm font-black uppercase tracking-wide text-bark">Your entered monthly budget</p>
        {enteredCount > 0 ? (
          <p className="mt-2 text-3xl font-black text-cocoa">{money(total)}</p>
        ) : (
          <p className="mt-2 text-lg font-bold text-cocoa">Enter an amount to see your total.</p>
        )}
        <p className="mt-2 text-sm leading-6 text-bark">
          Enter each cost once. This total reflects only your inputs; it is not a national average,
          quote, or estimate of emergency treatment.
        </p>
        <button
          type="button"
          className="mt-4 rounded-lg border border-cocoa/25 bg-white px-4 py-2 text-sm font-bold text-cocoa hover:bg-cream"
          onClick={() => setAmounts({})}
        >
          Clear amounts
        </button>
      </div>

      <div className="mt-6 rounded-2xl border border-sage/30 bg-sage/5 p-5">
        <p className="text-sm font-black text-cocoa">Keep exploring</p>
        <div className="mt-3 flex flex-wrap gap-2">
          <Link href="/costs/south-africa-dog-ownership-cost-report" className="inline-flex rounded-full bg-white px-4 py-2 text-sm font-bold text-moss shadow-sm hover:bg-sage/10">
            Cost report
          </Link>
          <Link href="/tools/dog-feeding-calculator" className="inline-flex rounded-full bg-white px-4 py-2 text-sm font-bold text-moss shadow-sm hover:bg-sage/10">
            Feeding calculator
          </Link>
          <Link href="/insurance" className="inline-flex rounded-full bg-white px-4 py-2 text-sm font-bold text-moss shadow-sm hover:bg-sage/10">
            Insurance guides
          </Link>
        </div>
      </div>
    </section>
  );
}
