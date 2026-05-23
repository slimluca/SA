"use client";

import { useMemo, useState } from "react";

const sections = [
  {
    title: "Size and home fit",
    items: [
      "Adult size fits your home, car, gates, stairs, garden and emergency transport plan.",
      "Everyone who may walk the dog can handle the adult dog safely on lead.",
      "Rental, estate, body corporate or landlord rules allow the size and type of dog.",
      "The dog has a safe sleeping area away from heat, noise and rough handling.",
    ],
  },
  {
    title: "Grooming and shedding",
    items: [
      "Coat type matches your brushing time, grooming budget and access to a groomer.",
      "Shedding level is realistic for your home, allergies, furniture and cleaning routine.",
      "You have a plan for nails, ears, paws, matting, dust, beaches, grass seeds and ticks.",
      "You understand that low-shedding dogs often need more coat maintenance, not less.",
    ],
  },
  {
    title: "Exercise and enrichment",
    items: [
      "Daily exercise needs fit ordinary weekdays, not only ideal weekends.",
      "The dog can get mental enrichment through training, sniffing, food puzzles or safe games.",
      "Hot South African weather has been considered for walks, beaches, hikes and car trips.",
      "Garden time is not being treated as a full replacement for training and interaction.",
    ],
  },
  {
    title: "Training and public behaviour",
    items: [
      "You can commit to humane training, lead manners, recall foundations and calm greetings.",
      "Barking, jumping, guarding, digging or chasing tendencies have been discussed honestly.",
      "You know when to ask a qualified trainer or behaviour professional for help.",
      "The dog can be managed safely around visitors, gates, deliveries, children and other dogs.",
    ],
  },
  {
    title: "Children and family life",
    items: [
      "Adults will supervise children and dogs instead of expecting children to manage the dog.",
      "The dog is suitable for the youngest child, oldest adult and busiest household routine.",
      "Children can follow rules about food bowls, toys, sleeping dogs and personal space.",
      "The household has a calm plan for visitors, school friends, holidays and family gatherings.",
    ],
  },
  {
    title: "Cost, vet care and insurance",
    items: [
      "Food, parasite prevention, grooming, training, routine vet care and emergency savings are budgeted.",
      "Breed size and health concerns have been considered for medication, diagnostics and insurance questions.",
      "You have compared insurance wording for waiting periods, exclusions and pre-existing conditions.",
      "You can afford the dog during expensive months, not only in the first week.",
    ],
  },
  {
    title: "Heat and health considerations",
    items: [
      "Heat sensitivity, breathing, joints, skin, ears, dental care and weight risk have been researched.",
      "The breed or type can cope with your local climate, exercise routine and grooming plan.",
      "You will ask a vet about health screening, growth, body condition and prevention needs.",
      "You have a plan for ticks, fleas, worms, rabies records and routine checkups.",
    ],
  },
  {
    title: "Adoption and responsible sourcing",
    items: [
      "You have checked adoption, rescue and adult dog options before buying a puppy.",
      "If buying, you will verify records, health screening, microchip, written agreements and the puppy's environment.",
      "You will avoid pressure payments, delivery-only stories, missing paperwork and sellers who dodge questions.",
      "You are choosing for long-term welfare and fit, not status, looks or protection alone.",
    ],
  },
];

const allBreedLinks = [
  { label: "Choosing the Right Dog Breed", href: "/breeds/choosing-the-right-dog-breed-south-africa" },
  { label: "Breed Match Quiz", href: "/tools/dog-breed-match-quiz" },
  { label: "Mixed Breed Dogs", href: "/breeds/mixed-breed-dogs-south-africa" },
  { label: "Puppy Scam Checklist", href: "/adoption/puppy-scam-checklist-south-africa" },
  { label: "Dog Costs", href: "/costs" },
  { label: "Pet Insurance", href: "/insurance" },
];

export function DogBreedComparisonChecklist() {
  const [checkedItems, setCheckedItems] = useState<Record<string, boolean>>({});

  const allItems = useMemo(
    () => sections.flatMap((section) => section.items.map((item) => `${section.title}-${item}`)),
    [],
  );
  const completed = allItems.filter((item) => checkedItems[item]).length;

  function toggleItem(key: string) {
    setCheckedItems((current) => ({ ...current, [key]: !current[key] }));
  }

  return (
    <div className="rounded-2xl border border-oat bg-white p-5 shadow-sm md:p-6">
      <div className="grid items-start gap-5 lg:grid-cols-[minmax(0,1fr)_minmax(280px,0.75fr)]">
        <div className="rounded-2xl border border-honey/45 bg-honey/12 p-5 text-sm leading-6 text-bark">
          <p className="font-black text-cocoa">Breed planning note</p>
          <p className="mt-1">
            This checklist runs in your browser and does not collect or store personal information.
            It helps you compare care needs before adoption or buying, but individual dogs vary.
          </p>
          <p className="mt-3 font-bold text-cocoa">
            Checked {completed} of {allItems.length} planning prompts.
          </p>
        </div>

        <div className="rounded-2xl border border-sage/25 bg-sage/10 p-5 text-sm leading-6 text-bark">
          <p className="font-black text-cocoa">Useful next steps</p>
          <div className="mt-3 grid gap-2 sm:grid-cols-2">
            {allBreedLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="flex h-full items-center rounded-xl border border-sage/30 bg-white px-3 py-3 text-sm font-bold leading-snug text-cocoa transition hover:border-sage hover:text-sage"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-6 grid items-start gap-5 lg:grid-cols-2">
        {sections.map((section) => (
          <section key={section.title} className="rounded-2xl border border-oat bg-cream p-5">
            <h2 className="text-xl font-black text-cocoa">{section.title}</h2>
            <div className="mt-4 grid gap-3">
              {section.items.map((item) => {
                const key = `${section.title}-${item}`;

                return (
                  <label
                    key={key}
                    className="flex cursor-pointer gap-3 rounded-xl bg-white/75 p-3 text-sm font-semibold leading-6 text-bark transition hover:bg-white"
                  >
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
