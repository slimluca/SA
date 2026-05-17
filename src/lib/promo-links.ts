import type { CardLink } from "@/lib/content";

export const homepageTools: CardLink[] = [
  { title: "All Free Dog Tools", description: "Calculators, checklists, quizzes, and quick lookups.", href: "/tools" },
  { title: "Dog Feeding Calculator", description: "Estimate daily feeding as a starting point.", href: "/tools/dog-feeding-calculator" },
  { title: "Dog Cost Calculator", description: "Estimate monthly dog ownership costs.", href: "/tools/dog-cost-calculator" },
  { title: "Can My Dog Eat This?", description: "Quick safety lookup for common foods.", href: "/tools/can-my-dog-eat-this" },
];

export const homepagePopularGuides: CardLink[] = [
  { title: "Best Dog Food South Africa", description: "Choose food for your individual dog, not hype.", href: "/food/best-dog-food-south-africa" },
  { title: "Foods Dogs Should Never Eat", description: "Common dangerous foods and when to call a vet.", href: "/food/foods-dogs-should-never-eat-south-africa" },
  { title: "Dog Vomiting Guide", description: "When vomiting is urgent and what to tell your vet.", href: "/health/dog-vomiting-south-africa" },
  { title: "Puppy Care South Africa", description: "First-year puppy care, vaccines, food, and safety.", href: "/puppy/puppy-care-south-africa" },
];

export const homepageMoneyPages: CardLink[] = [
  { title: "Compare Dog Insurance", description: "Premiums, excesses, limits, exclusions, and claims.", href: "/insurance/compare-dog-insurance-south-africa" },
  { title: "Dog Cost Calculator Guide", description: "Use a planning estimate without fake exact prices.", href: "/costs/dog-cost-calculator-south-africa" },
  { title: "Emergency Vet Bill Budget", description: "Plan savings, records, and insurance questions.", href: "/costs/how-to-budget-for-emergency-vet-bills-south-africa" },
];

export const hubPromos: Record<string, CardLink[]> = {
  tools: homepageTools,
  food: [
    { title: "Best Dog Food South Africa", description: "How to choose for your dog without brand rankings.", href: "/food/best-dog-food-south-africa" },
    { title: "Dog Feeding Calculator", description: "Estimate daily feeding as a starting point.", href: "/tools/dog-feeding-calculator" },
    { title: "Can My Dog Eat This?", description: "Quick food safety lookup.", href: "/tools/can-my-dog-eat-this" },
  ],
  insurance: [
    { title: "Compare Dog Insurance", description: "Neutral policy comparison checklist.", href: "/insurance/compare-dog-insurance-south-africa" },
    { title: "Pre-Existing Conditions", description: "Understand medical history and claim wording.", href: "/insurance/pre-existing-conditions-pet-insurance-south-africa" },
    { title: "Pet Insurance Claims Checklist", description: "Documents to prepare before a claim.", href: "/insurance/pet-insurance-claims-checklist-south-africa" },
  ],
  costs: [
    { title: "Dog Cost Calculator", description: "Estimate monthly ownership costs.", href: "/tools/dog-cost-calculator" },
    { title: "Dog Cost Calculator Guide", description: "Plan monthly costs with cautious ranges.", href: "/costs/dog-cost-calculator-south-africa" },
    { title: "Emergency Vet Bill Budget", description: "Prepare before urgent care happens.", href: "/costs/how-to-budget-for-emergency-vet-bills-south-africa" },
  ],
  health: [
    { title: "Dog Vomiting", description: "When vomiting needs same-day vet care.", href: "/health/dog-vomiting-south-africa" },
    { title: "Vet Visit Checklist", description: "Prepare symptoms, food notes, and questions.", href: "/tools/vet-visit-checklist" },
    { title: "Food Safety Lookup", description: "Check common risky foods quickly.", href: "/tools/can-my-dog-eat-this" },
  ],
  puppy: [
    { title: "Puppy Care", description: "First-year puppy care for South African homes.", href: "/puppy/puppy-care-south-africa" },
    { title: "Puppy Checklist", description: "Interactive first-week preparation list.", href: "/tools/puppy-checklist" },
    { title: "New Dog Shopping List", description: "Sensible supplies before the dog arrives.", href: "/tools/new-dog-shopping-list" },
  ],
  breeds: [
    { title: "Breed Match Quiz", description: "Explore responsible broad breed categories.", href: "/tools/dog-breed-match-quiz" },
    { title: "Mixed Breed Dogs", description: "Choose by fit, temperament, and care needs.", href: "/breeds/mixed-breed-dogs-south-africa" },
    { title: "Best Dogs for Small Homes", description: "Space, barking, exercise, and grooming tradeoffs.", href: "/breeds/best-dogs-for-small-homes-south-africa" },
  ],
};

export function getArticlePromos(hubPath: string): CardLink[] {
  if (hubPath === "/food") {
    return [
      { title: "Can My Dog Eat This?", description: "Quick safety lookup for common foods.", href: "/tools/can-my-dog-eat-this" },
      { title: "Dog Feeding Calculator", description: "Estimate daily feeding as a starting point.", href: "/tools/dog-feeding-calculator" },
    ];
  }

  if (hubPath === "/costs" || hubPath === "/insurance") {
    return [
      { title: "Dog Cost Calculator", description: "Estimate monthly dog ownership costs.", href: "/tools/dog-cost-calculator" },
    ];
  }

  if (hubPath === "/puppy") {
    return [
      { title: "Puppy Checklist", description: "Interactive first-week preparation list.", href: "/tools/puppy-checklist" },
      { title: "New Dog Shopping List", description: "Prepare practical supplies.", href: "/tools/new-dog-shopping-list" },
    ];
  }

  if (hubPath === "/breeds") {
    return [
      { title: "Breed Match Quiz", description: "Explore responsible breed categories.", href: "/tools/dog-breed-match-quiz" },
    ];
  }

  if (hubPath === "/health") {
    return [
      { title: "Vet Visit Checklist", description: "Prepare symptoms and questions.", href: "/tools/vet-visit-checklist" },
    ];
  }

  return [];
}
