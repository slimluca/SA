"use client";

import { useMemo, useState } from "react";

const ageStages = {
  puppy: "Puppy or adolescent",
  adult: "Adult dog",
  senior: "Senior dog",
} as const;

const sexes = {
  female: "Female dog",
  male: "Male dog",
  unsure: "Unsure or records unclear",
} as const;

const sources = {
  adoption: "Adopted from a shelter or rescue",
  breeder: "From a breeder",
  private: "Private rehoming or family dog",
  unknown: "Unknown or records missing",
} as const;

export function DogSterilisationPlanner() {
  const [ageStage, setAgeStage] = useState<keyof typeof ageStages>("adult");
  const [sex, setSex] = useState<keyof typeof sexes>("female");
  const [source, setSource] = useState<keyof typeof sources>("adoption");

  const sections = useMemo(() => {
    const sexSpecific =
      sex === "female"
        ? [
            "Ask whether heat cycles, possible pregnancy, false pregnancy, or recent puppies affect timing.",
            "Ask what signs after a spay would need urgent veterinary attention.",
          ]
        : sex === "male"
          ? [
              "Ask how age, growth, behaviour, and health affect neutering timing.",
              "Ask which behaviour concerns still need training or behaviour support.",
            ]
          : [
              "Ask your vet to confirm sex, scan for a microchip, and check records before planning.",
              "Ask whether missing history changes the timing discussion.",
            ];

    const sourceSpecific =
      source === "adoption"
        ? ["Ask the shelter or rescue what sterilisation agreement, records, or follow-up applies."]
        : source === "breeder"
          ? ["Ask for written health, vaccination, microchip, and ownership records before making plans."]
          : source === "unknown"
            ? ["Book a vet check and bring every record or message you have, even if details are incomplete."]
            : ["Clarify previous vet records, microchip details, and whether the dog may already be sterilised."];

    return [
      {
        title: "Before the vet visit",
        items: [
          `Dog stage selected: ${ageStages[ageStage]}. Ask your vet how age and growth affect timing.`,
          `Dog details selected: ${sexes[sex]}.`,
          `Source selected: ${sources[source]}.`,
          ...sourceSpecific,
          "Bring vaccination, rabies, deworming, tick and flea, medication, and previous surgery records.",
        ],
      },
      {
        title: "ID and record reminders",
        items: [
          "Ask the vet to scan for a microchip or discuss microchipping.",
          "Confirm microchip registration details are current.",
          "Check that your dog has a readable ID tag with a current phone number.",
          "Take photos of vaccine cards, rabies records, microchip details, and adoption paperwork.",
        ],
      },
      {
        title: "Pre-surgery questions to ask",
        items: [
          ...sexSpecific,
          "What pre-surgery checks do you recommend?",
          "What does the estimate include and what could cost extra?",
          "Which medications, food, or routines should I discuss before the day?",
          "What should I do if my dog comes into heat, seems unwell, or may be pregnant before the appointment?",
        ],
      },
      {
        title: "Post-surgery care questions to ask",
        items: [
          "What written recovery instructions will I receive?",
          "How should activity, stairs, jumping, bathing, and licking be managed?",
          "When is the follow-up check?",
          "Which symptoms are urgent and which are expected?",
          "Who do I contact after hours if I am worried?",
        ],
      },
      {
        title: "Emergency signs after surgery reminder",
        items: [
          "Contact a vet urgently for collapse, breathing trouble, pale gums, repeated vomiting, heavy bleeding, wound opening, uncontrolled pain, severe weakness, or fast-worsening symptoms.",
          "Do not give human medication or change prescribed medication unless your vet tells you to.",
          "Follow your vet's instructions before advice from friends, social media, or generic online posts.",
        ],
      },
    ];
  }, [ageStage, sex, source]);

  return (
    <div className="rounded-2xl border border-oat bg-white p-5 shadow-sm">
      <div className="grid gap-4 md:grid-cols-3">
        <label className="grid gap-2 text-sm font-bold text-cocoa">
          Dog age stage
          <select
            className="rounded-xl border border-oat bg-cream px-3 py-3 text-bark outline-none transition focus:border-sage focus:ring-4 focus:ring-sage/15"
            value={ageStage}
            onChange={(event) => setAgeStage(event.target.value as keyof typeof ageStages)}
          >
            {Object.entries(ageStages).map(([key, label]) => (
              <option key={key} value={key}>
                {label}
              </option>
            ))}
          </select>
        </label>
        <label className="grid gap-2 text-sm font-bold text-cocoa">
          Male or female
          <select
            className="rounded-xl border border-oat bg-cream px-3 py-3 text-bark outline-none transition focus:border-sage focus:ring-4 focus:ring-sage/15"
            value={sex}
            onChange={(event) => setSex(event.target.value as keyof typeof sexes)}
          >
            {Object.entries(sexes).map(([key, label]) => (
              <option key={key} value={key}>
                {label}
              </option>
            ))}
          </select>
        </label>
        <label className="grid gap-2 text-sm font-bold text-cocoa">
          Dog source
          <select
            className="rounded-xl border border-oat bg-cream px-3 py-3 text-bark outline-none transition focus:border-sage focus:ring-4 focus:ring-sage/15"
            value={source}
            onChange={(event) => setSource(event.target.value as keyof typeof sources)}
          >
            {Object.entries(sources).map(([key, label]) => (
              <option key={key} value={key}>
                {label}
              </option>
            ))}
          </select>
        </label>
      </div>

      <div className="mt-6 rounded-2xl border border-honey/45 bg-honey/12 p-5 text-sm leading-6 text-bark">
        <p className="font-black text-cocoa">Planning note</p>
        <p className="mt-1">
          This tool does not collect or store personal information. It is only a checklist to help
          you prepare questions for your veterinarian. Your vet&apos;s instructions come first.
        </p>
      </div>

      <div className="mt-6 grid gap-5">
        {sections.map((section) => (
          <section key={section.title} className="rounded-2xl border border-oat bg-cream p-5">
            <h2 className="text-xl font-black text-cocoa">{section.title}</h2>
            <ul className="mt-4 grid gap-3">
              {section.items.map((item) => (
                <li key={item} className="flex gap-3 text-sm font-semibold leading-6 text-bark">
                  <span className="mt-2 h-2 w-2 flex-none rounded-full bg-sage" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>
    </div>
  );
}
