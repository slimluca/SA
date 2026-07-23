import type { Metadata } from "next";
import { HubPage } from "@/components/HubPage";
import { getHub } from "@/lib/content";
import { phase3HealthCards } from "@/lib/phase3-guides";
import { phase10HealthCards } from "@/lib/phase10-guides";
import { phase11HealthCards } from "@/lib/phase11-guides";
import { phase14HealthCards } from "@/lib/phase14-guides";
import { phase15HealthCards } from "@/lib/phase15-guides";
import { phase20HealthCards } from "@/lib/phase20-recovery-guides";
import { phase21HealthCards } from "@/lib/phase21-prevention-guides";
import { phase22HealthCards } from "@/lib/phase22-sterilisation-guides";
import { phase23HealthCards } from "@/lib/phase23-chronic-health-guides";
import { phase29HealthSymptomCards } from "@/lib/phase29-health-symptom-guides";
import { createMetadata } from "@/lib/seo";

const baseHub = getHub("health");
const allHealthCards = [
  ...baseHub.cards,
  ...phase3HealthCards,
  ...phase10HealthCards,
  ...phase11HealthCards,
  ...phase14HealthCards,
  ...phase15HealthCards,
  ...phase20HealthCards,
  ...phase29HealthSymptomCards,
  ...phase21HealthCards,
  ...phase22HealthCards,
  ...phase23HealthCards,
];

const uniqueHealthCards = Array.from(
  new Map(allHealthCards.filter((card) => card.href !== "/health").map((card) => [card.href, card])).values(),
);

const groupDefinitions = [
  {
    title: "Start here",
    description: "Use these first for vet decisions, routine planning, and preparing useful information before an appointment.",
    matches: (href: string) =>
      [
        "/emergency",
        "/health/vaccination-schedule-south-africa",
        "/health/when-to-take-your-dog-to-the-vet-south-africa",
        "/health/find-a-vet-south-africa",
        "/health/routine-vet-checkup-for-dogs-south-africa",
        "/health/dog-health-calendar-south-africa",
        "/tools/vet-visit-checklist",
        "/tools/can-my-dog-eat-this",
      ].includes(href),
  },
  {
    title: "Urgent symptoms",
    description: "Recognise warning signs, avoid unsafe home treatment, and know when a veterinary call should not wait.",
    matches: (href: string) =>
      /(toxic-|breathing-fast|seizures|pale-gums|swollen-belly|wont-stand|shaking|drooling|yellow-gums|lethargic|blood-in-urine|coughing)/.test(href),
  },
  {
    title: "Stomach, stool and appetite",
    description: "Sort common digestive signs from red flags and prepare the details your vet may need.",
    matches: (href: string) =>
      /(vomit|diarrh|not-eating|drinking|weight-loss|blood-in-stool|black-tarry|constipation|sensitive-stomach)/.test(href),
  },
  {
    title: "Ticks, fleas, worms and parasites",
    description: "Plan parasite prevention around South African risks and recognise signs that need veterinary care.",
    matches: (href: string) => /(tick|flea|worm|deworm|biliary|scooting|parasite)/.test(href),
  },
  {
    title: "Skin, ears and allergies",
    description: "Work through itching, ear and eye changes, lumps, hot spots, and allergy questions without guessing at a diagnosis.",
    matches: (href: string) =>
      /(scratching|ear-|eye-discharge|eye-problems|skin|hot-spots|allerg)/.test(href),
  },
  {
    title: "Vaccines and prevention",
    description: "Understand vaccine, rabies, identification, and preventive-care questions to discuss with your vet.",
    matches: (href: string) => /(vaccin|rabies|kennel-cough|microchip|id-tags)/.test(href),
  },
  {
    title: "Puppies",
    description: "Build age-appropriate routines for early vet visits, vaccination, deworming, and parasite safety.",
    matches: (href: string) =>
      href.startsWith("/puppy/") || /(deworming-puppies|puppy-checklist)/.test(href),
  },
  {
    title: "Reproductive health and sterilisation",
    description: "Prepare for sterilisation decisions, seasons, pregnancy questions, and responsible breeding boundaries.",
    matches: (href: string) =>
      /(spay|neuter|steril|in-heat|pregnan|unwanted-puppies|breeding)/.test(href),
  },
  {
    title: "Senior dogs and long-term care",
    description: "Plan checkups, daily support, and costs for ageing dogs and long-term health needs.",
    matches: (href: string) => /(senior|chronic)/.test(href),
  },
  {
    title: "Teeth, weight and mobility",
    description: "Use practical guides for dental care, body condition, limping, arthritis, hips, and mobility costs.",
    matches: (href: string) =>
      /(dental|teeth|bad-breath|limping|arthritis|hip-dysplasia|overweight|xray-surgery)/.test(href),
  },
] as const;

const groupedHrefs = new Set<string>();
const healthCardGroups = groupDefinitions.map((group) => {
  const cards = uniqueHealthCards.filter((card) => !groupedHrefs.has(card.href) && group.matches(card.href));
  cards.forEach((card) => groupedHrefs.add(card.href));
  return { title: group.title, description: group.description, cards };
});

const hub = {
  ...baseHub,
  cards: uniqueHealthCards,
  related: baseHub.related.filter(
    (card) => card.href !== "/emergency" && card.href !== "/health/when-to-take-your-dog-to-the-vet-south-africa",
  ),
};

export const metadata: Metadata = createMetadata({
  title: hub.seoTitle,
  description: hub.description,
  path: hub.path,
});

export default function HealthPage() {
  return <HubPage hub={hub} cardGroups={healthCardGroups} />;
}
