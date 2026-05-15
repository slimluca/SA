"use client";

import Link from "next/link";
import { useState } from "react";

const foods = [
  { key: "chocolate", label: "Chocolate", rating: "Emergency", note: "Chocolate can be dangerous. Contact a vet urgently if eaten.", href: "/food/can-dogs-eat-chocolate" },
  { key: "grapes", label: "Grapes", rating: "Emergency", note: "Grapes and raisins can be dangerous even in small amounts.", href: "/food/can-dogs-eat-grapes" },
  { key: "onions", label: "Onions", rating: "Dangerous", note: "Onions can damage red blood cells. Vet advice is important.", href: "/food/can-dogs-eat-onions" },
  { key: "garlic", label: "Garlic", rating: "Dangerous", note: "Garlic is risky for dogs, especially concentrated or repeated amounts.", href: "/food/can-dogs-eat-garlic" },
  { key: "avocado", label: "Avocado", rating: "Risky", note: "Avocado can be fatty and parts can be unsafe. Avoid as a treat.", href: "/food/can-dogs-eat-avocado" },
  { key: "chicken-bones", label: "Chicken bones", rating: "Dangerous", note: "Chicken bones can splinter or obstruct. Call a vet if eaten.", href: "/food/can-dogs-eat-chicken-bones" },
  { key: "cooked-bones", label: "Cooked bones", rating: "Dangerous", note: "Cooked bones are risky because they can splinter, choke, or obstruct.", href: "/food/can-dogs-eat-cooked-bones" },
  { key: "biltong", label: "Biltong", rating: "Risky", note: "Biltong is usually too salty, spicy, or rich for dogs.", href: "/food/can-dogs-eat-biltong" },
  { key: "boerewors", label: "Boerewors", rating: "Risky", note: "Boerewors is fatty and may contain onion, garlic, salt, or spices.", href: "/food/can-dogs-eat-boerewors" },
  { key: "mielie-pap", label: "Mielie pap", rating: "Safe in small amounts", note: "Plain pap may be okay in small amounts, but it is not a balanced diet.", href: "/food/can-dogs-eat-mielie-pap" },
  { key: "rice", label: "Rice", rating: "Safe in small amounts", note: "Plain cooked rice can suit some dogs in moderation.", href: "/food/can-dogs-eat-rice" },
  { key: "eggs", label: "Eggs", rating: "Safe in small amounts", note: "Plain cooked eggs can be okay for many dogs in moderation.", href: "/food/can-dogs-eat-eggs" },
  { key: "cheese", label: "Cheese", rating: "Risky", note: "Cheese can be fatty and may upset lactose-sensitive dogs.", href: "/food/can-dogs-eat-cheese" },
  { key: "bread", label: "Bread", rating: "Safe in small amounts", note: "Plain bread is usually not toxic, but it adds calories and little nutrition.", href: "/food/can-dogs-eat-bread" },
  { key: "peanut-butter", label: "Peanut butter", rating: "Risky", note: "Only use xylitol-free peanut butter, and keep portions small.", href: "/food/can-dogs-eat-peanut-butter" },
  { key: "apples", label: "Apples", rating: "Safe in small amounts", note: "Apple flesh can be okay; avoid cores and seeds.", href: "/food/can-dogs-eat-apples" },
  { key: "bananas", label: "Bananas", rating: "Safe in small amounts", note: "Banana is sugary, so keep portions small.", href: "/food/can-dogs-eat-bananas" },
  { key: "carrots", label: "Carrots", rating: "Safe in small amounts", note: "Plain carrot can be a useful low-calorie snack.", href: "/food/can-dogs-eat-carrots" },
  { key: "pumpkin", label: "Pumpkin", rating: "Safe in small amounts", note: "Plain cooked pumpkin may suit some dogs in moderation.", href: "/food/can-dogs-eat-pumpkin" },
];

const styleByRating: Record<string, string> = {
  Emergency: "border-red-200 bg-red-50 text-red-900",
  Dangerous: "border-orange-200 bg-orange-50 text-orange-900",
  Risky: "border-honey/45 bg-honey/15 text-cocoa",
  "Safe in small amounts": "border-sage/35 bg-sage/10 text-moss",
};

export function FoodSafetyLookup() {
  const [selected, setSelected] = useState(foods[0]);

  return (
    <div className="rounded-2xl border border-oat bg-white p-5 shadow-sm">
      <label className="grid gap-2 text-sm font-bold text-cocoa">
        Choose a food
        <select
          className="rounded-xl border border-oat bg-cream px-3 py-3 text-bark"
          value={selected.key}
          onChange={(event) => setSelected(foods.find((food) => food.key === event.target.value) ?? foods[0])}
        >
          {foods.map((food) => (
            <option key={food.key} value={food.key}>{food.label}</option>
          ))}
        </select>
      </label>
      <section className={`mt-5 rounded-2xl border p-5 ${styleByRating[selected.rating]}`}>
        <p className="text-sm font-black uppercase tracking-wide">Safety category</p>
        <h2 className="mt-2 text-3xl font-black">{selected.rating}</h2>
        <p className="mt-3 leading-7">{selected.note}</p>
        <Link href={selected.href} className="mt-4 inline-flex rounded-full bg-white px-4 py-2 text-sm font-black text-cocoa shadow-sm hover:text-moss">
          Read the full guide
        </Link>
      </section>
      <p className="mt-4 text-sm leading-6 text-bark">
        If your dog ate a dangerous food, ate a large amount, or has vomiting, weakness, tremors, collapse, pain, breathing changes, or unusual behaviour, contact a veterinarian urgently.
      </p>
    </div>
  );
}
