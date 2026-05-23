"use client";

import Link from "next/link";
import { useMemo, useState } from "react";

export function BreedMatchQuiz() {
  const [home, setHome] = useState("townhouse");
  const [garden, setGarden] = useState("some");
  const [activity, setActivity] = useState("moderate");
  const [grooming, setGrooming] = useState("medium");
  const [barking, setBarking] = useState("low");
  const [children, setChildren] = useState("yes");
  const [firstTime, setFirstTime] = useState("yes");
  const [heat, setHeat] = useState("yes");
  const [budget, setBudget] = useState("medium");

  const result = useMemo(() => {
    const links = [
      { title: "Mixed-breed dogs", href: "/breeds/mixed-breed-dogs-south-africa" },
      { title: "Best family dogs", href: "/breeds/best-family-dogs-south-africa" },
    ];
    const notes: string[] = [];

    if (home === "flat" || garden === "none") {
      notes.push("Research smaller companion dogs, calm adult rescue dogs, and lower-noise temperaments.");
      links.push({ title: "Small homes", href: "/breeds/best-dogs-for-small-homes-south-africa" });
    }
    if (activity === "high") {
      notes.push("Active homes may enjoy sporting, herding, or adventure-friendly dogs if training and enrichment are realistic.");
      links.push({ title: "Border Collie", href: "/breeds/border-collie-south-africa" });
      links.push({ title: "Labrador Retriever", href: "/breeds/labrador-retriever-south-africa" });
    }
    if (activity === "low") {
      notes.push("Look for adult dogs with known calm temperaments rather than high-drive puppies.");
    }
    if (grooming === "low") {
      notes.push("Short-coated or low-maintenance coats may suit you better than curly or heavy double coats.");
    }
    if (barking === "low") {
      notes.push("Avoid choosing a breed known for alert barking unless you can train and manage it kindly.");
    }
    if (children === "yes") {
      notes.push("Prioritise individual temperament, supervision, child education, and a dog that can retreat safely.");
    }
    if (firstTime === "yes") {
      notes.push("First-time owners often do well with stable adult dogs and good rescue or trainer support.");
    }
    if (heat === "yes") {
      notes.push("Be cautious with flat-faced, heavy-coated, overweight, and heat-sensitive breeds in hot South African areas.");
      links.push({ title: "English Bulldog", href: "/breeds/english-bulldog-south-africa" });
      links.push({ title: "Siberian Husky", href: "/breeds/siberian-husky-south-africa" });
    }
    if (budget === "careful") {
      notes.push("Compare food, grooming, insurance, training, and likely vet costs before choosing a large or high-maintenance dog.");
    }

    return {
      headline: "Responsible match themes",
      notes: notes.length ? notes : ["A balanced adult dog with a known temperament may be your best research starting point."],
      links: links.slice(0, 6),
    };
  }, [activity, barking, budget, children, firstTime, garden, grooming, heat, home]);

  const selectClass = "rounded-xl border border-oat bg-cream px-3 py-3 text-bark";

  return (
    <div className="rounded-2xl border border-oat bg-white p-5 shadow-sm">
      <div className="grid gap-4 md:grid-cols-2">
        <label className="grid gap-2 text-sm font-bold text-cocoa">Home type<select className={selectClass} value={home} onChange={(e) => setHome(e.target.value)}><option value="flat">Flat</option><option value="townhouse">Townhouse</option><option value="house">House</option><option value="rural">Rural home</option></select></label>
        <label className="grid gap-2 text-sm font-bold text-cocoa">Garden access<select className={selectClass} value={garden} onChange={(e) => setGarden(e.target.value)}><option value="none">No garden</option><option value="some">Small or shared garden</option><option value="large">Large garden</option></select></label>
        <label className="grid gap-2 text-sm font-bold text-cocoa">Activity level<select className={selectClass} value={activity} onChange={(e) => setActivity(e.target.value)}><option value="low">Low</option><option value="moderate">Moderate</option><option value="high">High</option></select></label>
        <label className="grid gap-2 text-sm font-bold text-cocoa">Grooming tolerance<select className={selectClass} value={grooming} onChange={(e) => setGrooming(e.target.value)}><option value="low">Low</option><option value="medium">Medium</option><option value="high">High</option></select></label>
        <label className="grid gap-2 text-sm font-bold text-cocoa">Barking tolerance<select className={selectClass} value={barking} onChange={(e) => setBarking(e.target.value)}><option value="low">Low</option><option value="medium">Medium</option><option value="high">High</option></select></label>
        <label className="grid gap-2 text-sm font-bold text-cocoa">Children at home<select className={selectClass} value={children} onChange={(e) => setChildren(e.target.value)}><option value="yes">Yes</option><option value="no">No</option></select></label>
        <label className="grid gap-2 text-sm font-bold text-cocoa">First-time owner<select className={selectClass} value={firstTime} onChange={(e) => setFirstTime(e.target.value)}><option value="yes">Yes</option><option value="no">No</option></select></label>
        <label className="grid gap-2 text-sm font-bold text-cocoa">Heat concerns<select className={selectClass} value={heat} onChange={(e) => setHeat(e.target.value)}><option value="yes">Yes</option><option value="no">No</option></select></label>
        <label className="grid gap-2 text-sm font-bold text-cocoa md:col-span-2">Budget level<select className={selectClass} value={budget} onChange={(e) => setBudget(e.target.value)}><option value="careful">Careful</option><option value="medium">Moderate</option><option value="flexible">Flexible</option></select></label>
      </div>
      <div className="mt-6 rounded-2xl border border-honey/45 bg-honey/15 p-5">
        <h2 className="text-2xl font-black text-cocoa">{result.headline}</h2>
        <ul className="mt-4 space-y-3">
          {result.notes.map((note) => (
            <li key={note} className="flex gap-3 text-sm leading-6 text-bark"><span className="mt-2 h-2 w-2 rounded-full bg-honey" />{note}</li>
          ))}
        </ul>
        <div className="mt-5 grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
          {result.links.map((link) => (
            <Link key={link.href} href={link.href} className="flex h-full items-center rounded-xl bg-white px-4 py-3 text-sm font-black leading-snug text-cocoa shadow-sm transition hover:text-moss">
              {link.title}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
