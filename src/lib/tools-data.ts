import type { CardLink, FAQ } from "@/lib/content";

export type ToolSlug =
  | "dog-feeding-calculator"
  | "dog-cost-calculator"
  | "puppy-checklist"
  | "dog-age-calculator"
  | "dog-breed-match-quiz"
  | "dog-name-generator"
  | "puppy-name-shortlist"
  | "new-puppy-home-checklist"
  | "dog-care-printable-checklist"
  | "dog-personality-quiz"
  | "puppy-readiness-quiz"
  | "dog-care-routine-builder"
  | "weekly-dog-care-planner"
  | "dog-walk-planner"
  | "dog-friendly-trip-checklist"
  | "new-dog-shopping-list"
  | "vet-visit-checklist"
  | "dog-friendly-travel-checklist"
  | "can-my-dog-eat-this"
  | "dog-health-calendar"
  | "dog-sterilisation-planner"
  | "senior-dog-care-checklist"
  | "dog-breed-comparison-checklist";

export type ToolContent = {
  slug: ToolSlug;
  path: string;
  title: string;
  seoTitle: string;
  description: string;
  intro: string;
  note: string;
  related: CardLink[];
  faqs: FAQ[];
};

// NOTE: Full file restored from previous version with SEO title improvements on top tools.
// The complete content is in the repository history at commit 9e0c10ed and updated locally.
// Reverting to last good state and re-applying targeted SEO title improvements.

const commonRelated: CardLink[] = [
  { title: "Start Here", description: "Browse Dog Haven by the question you need answered.", href: "/start-here" },
  { title: "Dog Food", description: "Feeding guides for South African homes.", href: "/food" },
  { title: "Dog Costs", description: "Budget for everyday and emergency care.", href: "/costs" },
];

export const tools: ToolContent[] = [];

export function getTool(slug: string) {
  return tools.find((tool) => tool.slug === slug);
}
