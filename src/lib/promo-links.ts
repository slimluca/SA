import type { CardLink } from "@/lib/content";

export const homepageTools: CardLink[] = [
  { title: "All Free Dog Tools", description: "Calculators, checklists, quizzes, and quick lookups.", href: "/tools" },
  { title: "Dog Feeding Calculator", description: "Estimate daily feeding as a starting point.", href: "/tools/dog-feeding-calculator" },
  { title: "Dog Cost Calculator", description: "Estimate monthly dog ownership costs.", href: "/tools/dog-cost-calculator" },
  { title: "Can My Dog Eat This?", description: "Quick safety lookup for common foods.", href: "/tools/can-my-dog-eat-this" },
];

export const homepagePopularGuides: CardLink[] = [
  { title: "Biliary Tick Bite Fever", description: "Warning signs, veterinary diagnosis, and South African Babesia context.", href: "/health/biliary-tick-bite-fever-dogs-south-africa" },
  { title: "Ticks and Fleas", description: "Parasite checks, prevention questions, and South African exposure context.", href: "/health/ticks-and-fleas-dogs-south-africa" },
  { title: "Rabies in South Africa", description: "Dog-owner duties and urgent steps after possible human exposure.", href: "/emergency/rabies-south-africa" },
  { title: "Dog Medical Aid and Pet Insurance", description: "Compare cover, limits, exclusions, and claims without provider rankings.", href: "/insurance/pet-insurance-for-dogs-south-africa" },
  { title: "Puppy Scam Checklist", description: "Check sellers, records, payment pressure, and responsible sourcing.", href: "/adoption/puppy-scam-checklist-south-africa" },
  { title: "Cost of Owning a Dog", description: "Plan recurring, preventive, and unexpected dog-care costs.", href: "/costs/cost-of-owning-a-dog-south-africa" },
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

const tickHealthCluster: CardLink[] = [
  { title: "Biliary Tick Bite Fever in Dogs", description: "Recognise warning signs and understand why veterinary diagnosis matters.", href: "/health/biliary-tick-bite-fever-dogs-south-africa" },
  { title: "Tick and Flea Prevention", description: "Plan safer parasite prevention for your dog's age, size, and health.", href: "/health/ticks-and-fleas-dogs-south-africa" },
  { title: "Tick and Flea Treatment", description: "Questions to ask before choosing or combining parasite products.", href: "/health/tick-and-flea-treatment-for-dogs-south-africa" },
  { title: "When Pale Gums Need Urgent Veterinary Care", description: "Check urgent anaemia and circulation warning signs.", href: "/health/dog-pale-gums-south-africa" },
  { title: "Dog Not Eating", description: "Know when appetite loss needs same-day veterinary advice.", href: "/health/dog-not-eating-south-africa" },
  { title: "When to Take Your Dog to the Vet", description: "Use symptom severity and timing to choose the next step.", href: "/health/when-to-take-your-dog-to-the-vet-south-africa" },
];

const insuranceCluster: CardLink[] = [
  { title: "Dog Medical Aid and Pet Insurance", description: "Understand cover types, limits, excesses, and payment flow.", href: "/insurance/pet-insurance-for-dogs-south-africa" },
  { title: "Compare Dog Insurance", description: "Use a neutral policy comparison checklist.", href: "/insurance/compare-dog-insurance-south-africa" },
  { title: "Pre-Existing Conditions", description: "Check how history and earlier symptoms may affect cover.", href: "/insurance/pre-existing-conditions-pet-insurance-south-africa" },
  { title: "Insurance Exclusions", description: "Read the limits and exclusions before relying on cover.", href: "/insurance/what-dog-insurance-does-not-cover-south-africa" },
  { title: "Pet Insurance Claims", description: "Prepare invoices, clinical notes, forms, and proof of payment.", href: "/insurance/pet-insurance-claims-checklist-south-africa" },
  { title: "Emergency Vet Budget", description: "Plan for deposits, excesses, exclusions, and reimbursement delays.", href: "/costs/how-to-budget-for-emergency-vet-bills-south-africa" },
];

const rabiesCluster: CardLink[] = [
  { title: "Rabies in South Africa", description: "Separate dog-owner actions from urgent human exposure actions.", href: "/emergency/rabies-south-africa" },
  { title: "Dog Vaccination Schedule", description: "Plan puppy and adult vaccination conversations with your vet.", href: "/health/vaccination-schedule-south-africa" },
  { title: "Rabies Vaccination Law", description: "Understand South African vaccination duties and record keeping.", href: "/laws/rabies-vaccination-law-south-africa" },
  { title: "When to Take Your Dog to the Vet", description: "Prepare for urgent veterinary escalation after an animal exposure.", href: "/health/when-to-take-your-dog-to-the-vet-south-africa" },
];

const adoptionCluster: CardLink[] = [
  { title: "Puppy Scam Checklist", description: "Check sellers, records, payment pressure, and collection arrangements.", href: "/adoption/puppy-scam-checklist-south-africa" },
  { title: "Dog Adoption in South Africa", description: "Prepare for welfare checks, records, and a realistic home match.", href: "/adoption/dog-adoption-south-africa" },
  { title: "Questions Before Adopting", description: "Ask about health, behaviour, history, support, and costs.", href: "/adoption/questions-to-ask-before-adopting-a-dog" },
  { title: "Responsible Puppy Planning", description: "Prepare health, records, routine, and early-care questions.", href: "/puppy/puppy-care-south-africa" },
  { title: "New Puppy Checklist", description: "Prepare the first days, supplies, records, and veterinary plan.", href: "/puppy/new-puppy-checklist-south-africa" },
];

function withoutCurrentPage(cards: CardLink[], guidePath: string) {
  return cards.filter((card) => card.href !== guidePath).slice(0, 5);
}

export function getArticlePromos(hubPath: string, guidePath: string): CardLink[] {
  if (tickHealthCluster.some((card) => card.href === guidePath)) {
    return withoutCurrentPage(tickHealthCluster, guidePath);
  }

  if (hubPath === "/insurance") {
    return withoutCurrentPage(insuranceCluster, guidePath);
  }

  if (guidePath === "/emergency/rabies-south-africa" || guidePath.includes("rabies")) {
    return withoutCurrentPage(rabiesCluster, guidePath);
  }

  if (hubPath === "/adoption" || guidePath.includes("puppy-scam")) {
    return withoutCurrentPage(adoptionCluster, guidePath);
  }

  if (hubPath === "/food") {
    return [
      { title: "Can My Dog Eat This?", description: "Quick safety lookup for common foods.", href: "/tools/can-my-dog-eat-this" },
      { title: "Dog Feeding Calculator", description: "Estimate daily feeding as a starting point.", href: "/tools/dog-feeding-calculator" },
    ];
  }

  if (hubPath === "/costs") {
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
