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

const commonRelated: CardLink[] = [
  { title: "Start Here", description: "Browse Dog Haven by the question you need answered.", href: "/start-here" },
  { title: "Dog Food", description: "Feeding guides for South African homes.", href: "/food" },
  { title: "Dog Costs", description: "Budget for everyday and emergency care.", href: "/costs" },
];

export const tools: ToolContent[] = [
  {
    slug: "dog-feeding-calculator",
    path: "/tools/dog-feeding-calculator",
    title: "Dog Feeding Calculator",
    seoTitle: "Free Dog Feeding Calculator South Africa | Daily Portion by Weight & Age | Dog Haven",
    description: "Free dog feeding calculator for South Africa. Estimate daily food by weight, age, activity and food type. Compare with labels and body condition. No login required.",
    intro: "Estimate an initial daily amount, then compare it with the food packaging and your dog's body condition.",
    note: "This is an educational estimate only. Ask a vet for puppies, seniors, pregnant dogs, overweight dogs, underweight dogs, and dogs with health issues.",
    related: [
      { title: "How Much Should I Feed My Dog?", description: "Understand portions, labels, treats, and body condition.", href: "/food/how-much-should-i-feed-my-dog" },
      { title: "Dog Food Comparison", description: "Compare kibble, wet food, mixed feeding, and raw diets.", href: "/food/dog-food-comparison-south-africa" },
      ...commonRelated,
    ],
    faqs: [
      { question: "Is the feeding calculator exact?", answer: "No. It gives a general estimate. Food calories, health, body condition, and activity can change the right amount." },
      { question: "Can I use it for puppies?", answer: "Use it only as an initial estimate. Puppies need growth monitoring and vet-guided feeding." },
    ],
  },
  {
    slug: "dog-cost-calculator",
    path: "/tools/dog-cost-calculator",
    title: "Dog Cost Calculator",
    seoTitle: "Free Dog Cost Calculator South Africa | Monthly Ownership Budget | Dog Haven",
    description: "Free dog cost calculator for South Africa. Estimate monthly food, vet, grooming, insurance and parasite costs. Planning range, not a quote. No personal data.",
    intro: "Estimate a monthly planning range for dog ownership costs without entering any personal information.",
    note: "This is a planning tool, not a quote. Ask vets, groomers, trainers, insurers, shelters, and suppliers for current prices.",
    related: [
      { title: "Dog Ownership Cost Report", description: "Check the calculator against 46 dated public-price examples and download the source-linked dataset.", href: "/costs/south-africa-dog-ownership-cost-report" },
      { title: "Monthly Dog Costs", description: "Build a realistic South African dog budget.", href: "/costs/monthly-cost-of-owning-a-dog-south-africa" },
      ...commonRelated,
    ],
    faqs: [
      { question: "Does this collect my data?", answer: "No. The calculator runs in your browser and does not ask for your name, email, or account." },
      { question: "Why are the results a range?", answer: "Dog costs vary by city, provider, dog size, health, lifestyle, and inflation." },
    ],
  },
];

export function getTool(slug: string) {
  return tools.find((tool) => tool.slug === slug);
}
