import type { CardLink } from "@/lib/content";

export const homepageTools: CardLink[] = [
  { title: "All Free Dog Tools", description: "Calculators, checklists, quizzes, and quick lookups.", href: "/tools" },
  { title: "Dog Feeding Calculator", description: "Estimate daily feeding as a starting point.", href: "/tools/dog-feeding-calculator" },
  { title: "Dog Cost Calculator", description: "Estimate monthly dog ownership costs.", href: "/tools/dog-cost-calculator" },
  { title: "Can My Dog Eat This?", description: "Quick safety lookup for common foods.", href: "/tools/can-my-dog-eat-this" },
];

export const homepagePopularGuides: CardLink[] = [
  { title: "Ticks and Fleas in Dogs", description: "Year-round parasite checks, prevention questions, and South African risk context.", href: "/health/ticks-and-fleas-dogs-south-africa" },
  { title: "Heatstroke in Dogs", description: "Hot-weather warning signs, urgent next steps, and prevention for South African owners.", href: "/emergency/heatstroke-in-dogs-south-africa" },
  { title: "Snake Bites in Dogs", description: "What to do, what to avoid, and why fast veterinary care matters.", href: "/emergency/snake-bites-in-dogs-south-africa" },
  { title: "Dog Poisoning", description: "Emergency toxin steps, vet-call details, and home-remedy risks.", href: "/emergency/dog-poisoning-south-africa" },
  { title: "Dog Training South Africa", description: "Humane everyday training foundations for puppies and adult dogs.", href: "/training/dog-training-south-africa" },
  { title: "Dog Grooming South Africa", description: "Coat, nails, ears, ticks, skin checks, and groomer questions.", href: "/grooming/dog-grooming-south-africa" },
];

export const homepageMoneyPages: CardLink[] = [
  { title: "Pet Insurance for Dogs", description: "Premiums, excesses, limits, exclusions, claims, and waiting periods.", href: "/insurance/pet-insurance-for-dogs-south-africa" },
  { title: "Vet Costs for Dogs", description: "Understand routine, diagnostic, and urgent vet cost factors.", href: "/costs/vet-costs-for-dogs-south-africa" },
  { title: "Emergency Vet Costs", description: "Plan for after-hours care, diagnostics, hospitalisation, and urgent decisions.", href: "/costs/emergency-vet-costs-south-africa" },
  { title: "Dog Cost Calculator Guide", description: "Use a planning estimate without fake exact prices.", href: "/costs/dog-cost-calculator-south-africa" },
  { title: "Compare Dog Insurance", description: "Compare policy wording, limits, exclusions, and claim questions.", href: "/insurance/compare-dog-insurance-south-africa" },
  { title: "Johannesburg Emergency Vet Costs", description: "City-specific urgent-care budget planning without fake clinic prices.", href: "/local-costs/johannesburg/emergency-vet-costs-johannesburg" },
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
