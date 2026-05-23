"use client";

import type { ReactNode } from "react";
import { useMemo, useState } from "react";

type QuizOption = {
  label: string;
  result: keyof typeof personalityResults;
};

const personalityResults = {
  calm: {
    title: "Calm companion",
    copy: "Your dog sounds like they may enjoy steady routines, sniff walks, gentle enrichment and cosy downtime.",
    links: [
      { label: "Senior dog care checklist", href: "/tools/senior-dog-care-checklist" },
      { label: "Dog enrichment ideas", href: "/fun/dog-enrichment-ideas-south-africa" },
    ],
  },
  playful: {
    title: "Playful explorer",
    copy: "Your dog sounds like a cheerful explorer who may enjoy safe games, varied walks and playful training.",
    links: [
      { label: "Dog walk planner", href: "/tools/dog-walk-planner" },
      { label: "Indoor games", href: "/fun/indoor-games-for-dogs-south-africa" },
    ],
  },
  clever: {
    title: "Clever learner",
    copy: "Your dog sounds like a thinker who may enjoy short reward-based training games and problem-solving enrichment.",
    links: [
      { label: "Fun training games", href: "/fun/fun-training-games-for-dogs-south-africa" },
      { label: "Dog training", href: "/training/dog-training-south-africa" },
    ],
  },
  shadow: {
    title: "Gentle shadow",
    copy: "Your dog sounds people-focused and may benefit from calm routines, confidence-building and kind alone-time practice.",
    links: [
      { label: "Separation anxiety guide", href: "/training/separation-anxiety-dogs-south-africa" },
      { label: "Weekly planner", href: "/tools/weekly-dog-care-planner" },
    ],
  },
  busy: {
    title: "Busy adventurer",
    copy: "Your dog sounds like they may need movement, mental work, heat-safe planning and rest so excitement stays manageable.",
    links: [
      { label: "Dog-friendly trip checklist", href: "/tools/dog-friendly-trip-checklist" },
      { label: "Active owner breeds", href: "/breeds/best-dogs-for-active-owners-south-africa" },
    ],
  },
} as const;

const personalityQuestions: { question: string; options: QuizOption[] }[] = [
  {
    question: "On a normal morning, your dog most wants to...",
    options: [
      { label: "Stay close and ease into the day", result: "shadow" },
      { label: "Sniff every corner outside", result: "playful" },
      { label: "Do something with you right now", result: "busy" },
    ],
  },
  {
    question: "Their favourite kind of fun is probably...",
    options: [
      { label: "Learning a trick for treats", result: "clever" },
      { label: "A calm cuddle or nap nearby", result: "calm" },
      { label: "A new route or weekend outing", result: "busy" },
    ],
  },
  {
    question: "When life gets noisy, they often need...",
    options: [
      { label: "A quiet routine", result: "calm" },
      { label: "Reassurance from their person", result: "shadow" },
      { label: "A simple job to focus on", result: "clever" },
    ],
  },
  {
    question: "On walks, they would vote for...",
    options: [
      { label: "Slow sniffing", result: "playful" },
      { label: "Training games", result: "clever" },
      { label: "Longer adventures with water breaks", result: "busy" },
    ],
  },
];

export function DogPersonalityQuiz() {
  const [answers, setAnswers] = useState<Record<number, keyof typeof personalityResults>>({});
  const result = useMemo(() => {
    const counts = Object.values(answers).reduce<Record<string, number>>((acc, key) => {
      acc[key] = (acc[key] ?? 0) + 1;
      return acc;
    }, {});
    const top = Object.entries(counts).sort((a, b) => b[1] - a[1])[0]?.[0] as keyof typeof personalityResults | undefined;
    return top ? personalityResults[top] : null;
  }, [answers]);

  return (
    <ToolShell title="Dog personality quiz" note="This is a light, fun quiz only. It is not a behavioural assessment or training diagnosis.">
      <div className="grid items-start gap-5 lg:grid-cols-[minmax(0,1fr)_minmax(280px,0.72fr)]">
        <div className="space-y-5">
          {personalityQuestions.map((question, index) => (
            <section key={question.question} className="rounded-2xl border border-oat bg-cream p-5">
              <h2 className="text-lg font-black text-cocoa">{question.question}</h2>
              <div className="mt-3 grid gap-3">
                {question.options.map((option) => (
                  <button
                    key={option.label}
                    type="button"
                    onClick={() => setAnswers((current) => ({ ...current, [index]: option.result }))}
                    className={`rounded-xl border px-4 py-3 text-left text-sm font-bold transition ${
                      answers[index] === option.result
                        ? "border-sage bg-sage/15 text-cocoa"
                        : "border-oat bg-white text-bark hover:border-sage"
                    }`}
                  >
                    {option.label}
                  </button>
                ))}
              </div>
            </section>
          ))}
        </div>
        <ResultCard
          title={result?.title ?? "Pick a few answers"}
          copy={result?.copy ?? "Answer the quiz and DogHaven will show a playful result with practical next links."}
          links={result?.links ?? [{ label: "Dog enrichment ideas", href: "/fun/dog-enrichment-ideas-south-africa" }]}
        />
      </div>
    </ToolShell>
  );
}

const readinessQuestions = [
  "I can budget for food, vet care, parasite prevention, training, supplies and emergency savings.",
  "I have time for toilet training, chewing, night settling and safe socialisation.",
  "I have checked adoption safety and puppy scam warning signs.",
  "I can puppy-proof cables, medicines, bait, plants, pools, stairs and balconies.",
  "I have a vet plan for vaccines, deworming, rabies and urgent symptoms.",
  "Everyone in the household understands puppies bite, chew, cry and need patient training.",
];

export function PuppyReadinessQuiz() {
  const [checked, setChecked] = useState<Record<string, boolean>>({});
  const score = readinessQuestions.filter((item) => checked[item]).length;
  const title =
    score >= 5 ? "Strong starting plan" : score >= 3 ? "Getting there" : "More planning needed";
  const copy =
    score >= 5
      ? "You have many of the big puppy basics covered. Use the linked guides to tighten records, routines and safety."
      : score >= 3
        ? "You are part-way ready. Focus on the unchecked items before bringing a puppy home."
        : "Pause and plan first. Puppy life is easier when time, budget, vet care and home safety are clear.";

  return (
    <ToolShell title="Puppy readiness quiz" note="This tool is a planning prompt only. It does not judge your home or replace advice from a vet, shelter, rescue or responsible breeder.">
      <div className="grid items-start gap-5 lg:grid-cols-[minmax(0,1fr)_minmax(280px,0.72fr)]">
        <div className="grid gap-3">
          {readinessQuestions.map((item) => (
            <label key={item} className="flex cursor-pointer gap-3 rounded-xl border border-oat bg-cream p-4 text-sm font-semibold leading-6 text-bark">
              <input
                type="checkbox"
                checked={Boolean(checked[item])}
                onChange={() => setChecked((current) => ({ ...current, [item]: !current[item] }))}
                className="mt-1 h-4 w-4 rounded border-oat text-sage focus:ring-sage"
              />
              <span>{item}</span>
            </label>
          ))}
        </div>
        <ResultCard
          title={title}
          copy={`${copy} Checked ${score} of ${readinessQuestions.length} readiness prompts.`}
          links={[
            { label: "Puppy care", href: "/puppy/puppy-care-south-africa" },
            { label: "Puppy scam checklist", href: "/adoption/puppy-scam-checklist-south-africa" },
            { label: "Dog cost calculator", href: "/tools/dog-cost-calculator" },
          ]}
        />
      </div>
    </ToolShell>
  );
}

const routineAdvice = {
  puppy: "Puppies need frequent toilet breaks, short training, safe chewing, naps, vet-guided vaccines and careful socialisation.",
  adult: "Adult dogs often do well with predictable meals, daily movement, training refreshers, grooming checks and rest.",
  senior: "Senior dogs may need gentler movement, dental and mobility checks, comfort planning and more frequent vet conversations.",
} as const;

export function DogCareRoutineBuilder() {
  const [stage, setStage] = useState<keyof typeof routineAdvice>("adult");
  const [size, setSize] = useState("medium");
  const [coat, setCoat] = useState("short");
  const [energy, setEnergy] = useState("moderate");

  const routine = [
    `${routineAdvice[stage]}`,
    `${size === "large" ? "Plan extra transport, food and joint-care awareness for a larger dog." : "Match portions, equipment and exercise to your dog's size."}`,
    `${coat === "long" ? "Brush more often and check for matting, grass seeds, ticks and heat discomfort." : "Use quick coat checks for ticks, fleas, skin changes and shedding."}`,
    `${energy === "high" ? "Use short training games and sniffing to balance exercise with calm rest." : "Keep movement steady and add gentle enrichment."}`,
  ];

  return (
    <ToolShell title="Dog care routine builder" note="This routine is a general planning guide. Adjust for your dog's health, vet advice, weather and temperament.">
      <div className="grid gap-4 md:grid-cols-4">
        <SelectControl label="Age stage" value={stage} setValue={(value) => setStage(value as keyof typeof routineAdvice)} options={["puppy", "adult", "senior"]} />
        <SelectControl label="Size" value={size} setValue={setSize} options={["small", "medium", "large"]} />
        <SelectControl label="Coat" value={coat} setValue={setCoat} options={["short", "long"]} />
        <SelectControl label="Energy" value={energy} setValue={setEnergy} options={["low", "moderate", "high"]} />
      </div>
      <div className="mt-6 grid gap-3">
        {routine.map((item) => (
          <div key={item} className="rounded-xl border border-oat bg-cream px-4 py-3 text-sm font-semibold leading-6 text-bark">
            {item}
          </div>
        ))}
      </div>
      <LinkChips links={[{ label: "Dog health calendar", href: "/tools/dog-health-calendar" }, { label: "Weekly planner", href: "/tools/weekly-dog-care-planner" }, { label: "Dog food", href: "/food" }]} />
    </ToolShell>
  );
}

const weeklyGroups = [
  { title: "Daily", items: ["Fresh water", "Measured meals", "Toilet breaks", "Safe exercise or enrichment"] },
  { title: "Training", items: ["Recall practice", "Lead manners", "Calm settle", "Polite greetings"] },
  { title: "Care checks", items: ["Brush coat", "Check ears and paws", "Clean bowls", "Look for ticks or fleas"] },
  { title: "Planning", items: ["Review parasite reminders", "Check food supply", "Plan vet questions", "Emergency contact still saved"] },
];

export function WeeklyDogCarePlanner() {
  return <ChecklistWidget title="Weekly dog care planner" note="A printable-style weekly checklist for ordinary dog care. Adjust it to your dog and vet guidance." groups={weeklyGroups} />;
}

const walkItems = [
  "Choose a cool time of day and check tar or sand temperature.",
  "Pack water, waste bags and a lead or harness that fits.",
  "Choose a route that matches your dog's fitness, confidence and training.",
  "Avoid crowded dog areas if your dog is fearful, reactive, sick, too young or overwhelmed.",
  "Check local leash, park, estate or beach rules before going.",
  "Plan traffic, gates, other dogs, children, cyclists and livestock calmly.",
];

export function DogWalkPlanner() {
  return <ChecklistWidget title="Dog walk planner" note="South African walks need heat, water, traffic, leash rules and temperament planning." groups={[{ title: "Before you leave", items: walkItems }]} />;
}

const tripGroups = [
  { title: "Pack", items: ["Water and bowl", "Lead and harness", "Waste bags", "Towel or blanket", "Vaccination record if needed"] },
  { title: "Check rules", items: ["Venue dog policy", "Beach or park rules", "Accommodation rules", "Leash requirements", "Seasonal restrictions"] },
  { title: "Safety", items: ["Shade plan", "Heat-safe timing", "Tick and flea prevention", "Emergency vet planning", "Transport restraint"] },
];

export function DogFriendlyTripChecklist() {
  return <ChecklistWidget title="Dog-friendly trip checklist" note="Use this for cafes, parks, beaches, accommodation and road trips. Rules can change, so check official or venue guidance before leaving." groups={tripGroups} />;
}

function ToolShell({ title, note, children }: { title: string; note: string; children: ReactNode }) {
  return (
    <div className="rounded-2xl border border-oat bg-white p-5 shadow-sm md:p-6">
      <div className="rounded-2xl border border-honey/45 bg-honey/12 p-5 text-sm leading-6 text-bark">
        <p className="font-black text-cocoa">{title}</p>
        <p className="mt-1">{note}</p>
      </div>
      <div className="mt-6">{children}</div>
    </div>
  );
}

function ResultCard({ title, copy, links }: { title: string; copy: string; links: readonly { label: string; href: string }[] }) {
  return (
    <aside className="h-fit self-start rounded-2xl border border-sage/30 bg-sage/10 p-5">
      <p className="text-sm font-black uppercase tracking-wide text-moss">Result</p>
      <h2 className="mt-2 text-2xl font-black text-cocoa">{title}</h2>
      <p className="mt-3 text-sm leading-6 text-bark">{copy}</p>
      <LinkChips links={links} />
    </aside>
  );
}

function LinkChips({ links }: { links: readonly { label: string; href: string }[] }) {
  return (
    <div className="mt-5 grid gap-2 sm:grid-cols-2">
      {links.map((link) => (
        <a key={link.href} href={link.href} className="flex h-full items-center rounded-xl border border-sage/30 bg-white px-3 py-3 text-sm font-bold leading-snug text-cocoa transition hover:border-sage hover:text-sage">
          {link.label}
        </a>
      ))}
    </div>
  );
}

function SelectControl({ label, value, setValue, options }: { label: string; value: string; setValue: (value: string) => void; options: string[] }) {
  return (
    <label className="grid gap-2 text-sm font-bold text-cocoa">
      {label}
      <select value={value} onChange={(event) => setValue(event.target.value)} className="rounded-xl border border-oat bg-cream px-3 py-3 text-bark focus:border-sage focus:outline-none focus:ring-4 focus:ring-sage/15">
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </label>
  );
}

function ChecklistWidget({ title, note, groups }: { title: string; note: string; groups: { title: string; items: string[] }[] }) {
  const [checked, setChecked] = useState<Record<string, boolean>>({});
  const allItems = groups.flatMap((group) => group.items.map((item) => `${group.title}-${item}`));
  const completed = allItems.filter((item) => checked[item]).length;

  return (
    <ToolShell title={title} note={`${note} Checked ${completed} of ${allItems.length} prompts.`}>
      <div className="grid items-start gap-5 lg:grid-cols-2">
        {groups.map((group) => (
          <section key={group.title} className="rounded-2xl border border-oat bg-cream p-5">
            <h2 className="text-xl font-black text-cocoa">{group.title}</h2>
            <div className="mt-4 grid gap-3">
              {group.items.map((item) => {
                const key = `${group.title}-${item}`;
                return (
                  <label key={key} className="flex cursor-pointer gap-3 rounded-xl bg-white/75 p-3 text-sm font-semibold leading-6 text-bark transition hover:bg-white">
                    <input
                      type="checkbox"
                      checked={Boolean(checked[key])}
                      onChange={() => setChecked((current) => ({ ...current, [key]: !current[key] }))}
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
      <LinkChips links={[{ label: "Dog-friendly places", href: "/dog-friendly" }, { label: "Dog laws", href: "/laws" }, { label: "Local guides", href: "/local" }]} />
    </ToolShell>
  );
}
