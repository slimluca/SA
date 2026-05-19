import type { CardLink, GuideContent, HubContent, Source } from "@/lib/content";
import { localCities } from "@/lib/phase17-local-guides";

const reviewed = "2026-05-19";

type CostServiceKey = "grooming" | "training" | "emergency-vet" | "monthly";

type CostService = {
  key: CostServiceKey;
  slugPrefix: string;
  titleLabel: string;
  cardDescription: string;
};

const costServices: CostService[] = [
  {
    key: "grooming",
    slugPrefix: "dog-grooming-prices",
    titleLabel: "Dog Grooming Prices",
    cardDescription:
      "City grooming budget guidance covering mobile vs parlour grooming, coat type, matting, and seasonal care.",
  },
  {
    key: "training",
    slugPrefix: "dog-training-costs",
    titleLabel: "Dog Training Costs",
    cardDescription:
      "City training cost guidance for puppy classes, group lessons, private sessions, and behaviour support.",
  },
  {
    key: "emergency-vet",
    slugPrefix: "emergency-vet-costs",
    titleLabel: "Emergency Vet Costs",
    cardDescription:
      "City emergency vet budget planning for after-hours care, diagnostics, transport, and urgent decisions.",
  },
  {
    key: "monthly",
    slugPrefix: "monthly-dog-costs",
    titleLabel: "Monthly Dog Costs",
    cardDescription:
      "City dog ownership budget planning for food, vet care, parasite control, grooming, training, and savings.",
  },
];

const defaultCostCity = localCities[0]!;

const coreSources: Source[] = [
  {
    label: "South African Veterinary Council",
    href: "https://savc.org.za/",
    note: "Professional veterinary context and a starting point for checking veterinary service legitimacy.",
  },
  {
    label: "South African Veterinary Association",
    href: "https://www.sava.co.za/",
    note: "South African veterinary context for responsible pet care and veterinary guidance.",
  },
  {
    label: "NSPCA",
    href: "https://nspca.co.za/",
    note: "South African animal welfare context for responsible ownership and service-provider questions.",
  },
];

function pathFor(city: (typeof localCities)[number], service: CostService) {
  return `/local-costs/${city.slug}/${service.slugPrefix}-${city.slug}`;
}

function titleFor(city: (typeof localCities)[number], service: CostService) {
  if (service.key === "monthly") return `Monthly Dog Costs in ${city.name}: Ownership Budget Guide`;
  if (service.key === "emergency-vet") return `Emergency Vet Costs in ${city.name}: Budget Planning Guide`;
  return `${service.titleLabel} in ${city.name}: Cost Factors and Questions`;
}

function sourceList(city: (typeof localCities)[number]): Source[] {
  return [city.source, ...coreSources];
}

function commonRelated(city: (typeof localCities)[number]): CardLink[] {
  return [
    { title: "Dog Cost Calculator", description: "Estimate monthly dog ownership costs.", href: "/tools/dog-cost-calculator" },
    { title: "Dog Cost Calculator Guide", description: "Understand the planning estimate.", href: "/costs/dog-cost-calculator-south-africa" },
    { title: `${city.name} Local Services`, description: "Local service-intent guides for the city.", href: `/local/${city.slug}` },
    { title: `${city.name} City Guide`, description: "Daily dog-owner context for the city.", href: `/city/${city.slug}` },
    { title: `${city.province} Province Guide`, description: "Province-level climate, rules, and local care context.", href: `/province/${city.provinceSlug}` },
  ];
}

function generalCostNote(cityName: string) {
  return [
    `Costs in ${cityName} vary by suburb, provider, dog size, age, coat, health, behaviour, urgency, time of day, travel, and what is included.`,
    "DogHaven does not publish invented exact prices or rank providers. Use these guides to ask better questions and request current written quotes directly.",
  ];
}

function groomingPage(city: (typeof localCities)[number], service: CostService): GuideContent {
  return {
    slug: `${service.slugPrefix}-${city.slug}`,
    path: pathFor(city, service),
    hubTitle: "Local Cost Guides",
    hubPath: "/local-costs",
    title: titleFor(city, service),
    seoTitle: `${titleFor(city, service)} | DogHaven`,
    description: `Practical ${city.name} dog grooming price guidance covering mobile vs parlour grooming, coat type, matting, seasonal care, quote questions, and cost factors without fake exact prices.`,
    intro: `Dog grooming prices in ${city.name} depend on much more than a quick bath. This guide explains what affects the quote, what to ask before booking, and how to budget without relying on fake local price lists or unverified groomer rankings.`,
    updated: reviewed,
    quickFacts: [
      "DogHaven does not invent exact grooming prices or rank local groomers.",
      "Ask for a written quote that explains what is included before booking.",
      "Dog size, coat type, matting, behaviour, mobile travel, and extras can all change the final cost.",
      "Skin, ear, wound, pain, parasite, or severe matting concerns may need a vet rather than a routine grooming appointment.",
    ],
    sections: [
      {
        heading: `Grooming cost context in ${city.name}`,
        body: [...generalCostNote(city.name), city.groomingNote],
      },
      {
        heading: "What affects grooming prices",
        body: [
          "A groomer usually prices the appointment around time, handling, products, travel, and coat difficulty. Two dogs of the same breed can cost differently if one has matting, anxiety, skin issues, or extra handling needs.",
        ],
        table: {
          headers: ["Cost factor", "Why it matters"],
          rows: [
            ["Dog size", "Large dogs usually need more time, shampoo, drying, equipment, and handling."],
            ["Coat type", "Curly, long, double, wire, and high-shedding coats can take longer than short coats."],
            ["Matting", "Dematting can be time-consuming, uncomfortable, and sometimes unsafe without a vet plan."],
            ["Mobile vs parlour", "Mobile grooming may include travel convenience; parlours may have more equipment and staff support."],
            ["Ticks and fleas", "Providers may need special handling, cleaning, or a vet referral if infestation or skin irritation is present."],
            ["Season", "Summer shave requests, winter coat maintenance, beach sand, dust, and shedding can change the work needed."],
          ],
        },
      },
      {
        heading: "Questions to ask before booking",
        body: ["Use provider answers to understand the quote and whether the groomer is a good fit for your dog."],
        checklist: [
          "What is included in the quoted service and what costs extra?",
          "Is nail trimming, ear cleaning, de-shedding, sanitary trimming, or tick handling included?",
          "How do you price large dogs, matted dogs, senior dogs, anxious dogs, or first-time puppies?",
          "Do you charge travel, parking, cancellation, or late collection fees?",
          "What happens if you find sore skin, ear discharge, wounds, ticks, fleas, or pain?",
          "Can you stop and phone me if the groom becomes stressful or unsafe?",
        ],
      },
      {
        heading: "Warning signs to avoid",
        body: ["A low quote is not helpful if the dog is handled roughly or medical concerns are ignored."],
        bullets: [
          "No clear explanation of what the price includes.",
          "Pressure to book before you can ask safety questions.",
          "Dismissal of breathing, heat, pain, senior-dog, or anxiety concerns.",
          "Treating skin infections, painful ears, wounds, or parasites as routine grooming problems.",
          "No hygiene explanation between dogs.",
        ],
      },
      {
        heading: "Practical grooming budget checklist",
        body: ["Build grooming into your normal dog budget if your dog's coat needs regular care."],
        checklist: [
          "Ask for a current written quote before the first appointment.",
          "Budget extra for de-shedding, dematting, long coats, curly coats, or mobile travel.",
          "Keep tick, flea, skin, and ear concerns on your vet checklist.",
          "Use the DogHaven dog cost calculator to estimate monthly grooming alongside food and vet care.",
          "Review grooming needs before choosing a breed or adopting a long-coated dog.",
        ],
      },
    ],
    faqs: [
      {
        question: `Are dog grooming prices in ${city.name} the same for every dog?`,
        answer:
          "No. Grooming costs vary by dog size, coat type, matting, behaviour, provider, travel, suburb, and what is included.",
      },
      {
        question: "Should I choose the cheapest groomer?",
        answer:
          "Not automatically. Look for clear pricing, safe handling, hygiene, and a willingness to refer medical concerns to a vet.",
      },
      {
        question: "Does DogHaven list grooming prices from local businesses?",
        answer:
          "No. DogHaven avoids fake exact prices and unverified listings. Request current quotes directly from providers.",
      },
    ],
    related: [
      { title: `${city.name} Grooming Guide`, description: "How to choose grooming support safely.", href: `/local/${city.slug}/dog-grooming-${city.slug}` },
      { title: "Dog Grooming Costs", description: "National grooming cost factors.", href: "/grooming/dog-grooming-costs-south-africa" },
      { title: "Grooming Hub", description: "Coat, nails, shedding, and groomer choice.", href: "/grooming" },
      { title: "Dog Shedding", description: "Plan brushing and coat maintenance.", href: "/grooming/dog-shedding-south-africa" },
      { title: "Breed Guides", description: "Understand coat and size before choosing a dog.", href: "/breeds" },
      ...commonRelated(city),
    ],
    sources: sourceList(city),
  };
}

function trainingPage(city: (typeof localCities)[number], service: CostService): GuideContent {
  return {
    slug: `${service.slugPrefix}-${city.slug}`,
    path: pathFor(city, service),
    hubTitle: "Local Cost Guides",
    hubPath: "/local-costs",
    title: titleFor(city, service),
    seoTitle: `${titleFor(city, service)} | DogHaven`,
    description: `Practical ${city.name} dog training cost guidance covering puppy classes, group lessons, private sessions, behaviour support, humane methods, quote questions, and cost factors.`,
    intro: `Dog training costs in ${city.name} can vary widely because puppy classes, private sessions, group classes, home visits, and behaviour support are not the same service. This guide helps you compare training quotes without fake rankings or invented prices.`,
    updated: reviewed,
    quickFacts: [
      "DogHaven does not rank trainers or invent exact local training prices.",
      "Training cost depends on the format, trainer experience, travel, class size, and behaviour complexity.",
      "Humane, reward-based training should involve the owner and avoid intimidation or fear-heavy methods.",
      "Sudden behaviour changes, pain, aggression, or severe anxiety may need veterinary or behaviour-professional input.",
    ],
    sections: [
      {
        heading: `Training cost context in ${city.name}`,
        body: [...generalCostNote(city.name), city.trainingNote],
      },
      {
        heading: "What affects dog training costs",
        body: [
          "A cheaper group class and a private behaviour consultation solve different problems. Compare the type of support, not only the fee.",
        ],
        table: {
          headers: ["Training option", "Cost factor to check"],
          rows: [
            ["Puppy classes", "Class size, vaccination safety, socialisation setup, course length, and owner coaching."],
            ["Group adult classes", "Number of sessions, distractions, class size, and whether the level suits your dog."],
            ["Private training", "Home visits, travel, written plans, follow-up, and how tailored the session is."],
            ["Behaviour support", "Fear, reactivity, separation anxiety, barking, or bite risk may need longer support."],
            ["Trainer experience", "Qualifications, continuing education, references, and humane handling standards."],
          ],
        },
      },
      {
        heading: "Questions to ask before paying",
        body: ["The best quote is clear about method, time, support, safety, and what owners need to practise at home."],
        checklist: [
          "What methods do you use, and what tools are not used?",
          "Is this group training, private training, home training, or behaviour support?",
          "How many sessions are included and how long is each session?",
          "Will I receive written homework or a training plan?",
          "Do you charge extra for travel, follow-up, cancellation, or additional dogs?",
          "When would you refer a dog to a vet or veterinary behaviour professional?",
        ],
      },
      {
        heading: "Warning signs to avoid",
        body: ["Training should make life safer and kinder, not more frightening for the dog."],
        bullets: [
          "Guaranteed instant fixes for aggression, fear, barking, or separation anxiety.",
          "Punishment-heavy methods, intimidation, flooding, or tools used without welfare discussion.",
          "No owner involvement or unclear explanation of what happens during sessions.",
          "Pressure to pay before method and service details are explained.",
          "Ignoring pain, illness, fear, or household routine as part of behaviour.",
        ],
      },
      {
        heading: "Practical training budget checklist",
        body: ["Plan training before behaviour becomes expensive and stressful."],
        checklist: [
          "Budget for puppy foundations or rescue-dog settling help early.",
          "Choose the format that matches the issue: group class, private session, or behaviour support.",
          "Ask for written inclusions before paying.",
          "Use daily practice time as part of the cost, because training does not end at the session.",
          "Use the dog cost calculator to include training alongside food, grooming, insurance, and vet care.",
        ],
      },
    ],
    faqs: [
      {
        question: `Why do dog training costs differ in ${city.name}?`,
        answer:
          "Costs vary by class type, private versus group support, trainer experience, travel, course length, behaviour complexity, and what follow-up is included.",
      },
      {
        question: "Is private dog training always better than group classes?",
        answer:
          "No. Group classes can work well for foundations, while private sessions may suit home routines, reactivity, barking, or individual issues.",
      },
      {
        question: "Should I pay for a trainer who guarantees results?",
        answer:
          "Be cautious. Behaviour depends on health, environment, owner practice, and the dog. Guarantees around fear or aggression can be a red flag.",
      },
    ],
    related: [
      { title: `${city.name} Training Guide`, description: "How to choose humane dog training locally.", href: `/local/${city.slug}/dog-training-${city.slug}` },
      { title: "Dog Training Hub", description: "Puppy, leash, behaviour, and trainer guidance.", href: "/training" },
      { title: "Puppy Training", description: "First-year routines and safe socialisation.", href: "/training/puppy-training-south-africa" },
      { title: "How to Choose a Dog Trainer", description: "Questions and red flags.", href: "/training/how-to-choose-a-dog-trainer-south-africa" },
      { title: "Breed Match Quiz", description: "Explore breed needs responsibly.", href: "/tools/dog-breed-match-quiz" },
      ...commonRelated(city),
    ],
    sources: sourceList(city),
  };
}

function emergencyVetPage(city: (typeof localCities)[number], service: CostService): GuideContent {
  return {
    slug: `${service.slugPrefix}-${city.slug}`,
    path: pathFor(city, service),
    hubTitle: "Local Cost Guides",
    hubPath: "/local-costs",
    title: titleFor(city, service),
    seoTitle: `${titleFor(city, service)} | DogHaven`,
    description: `Practical ${city.name} emergency vet cost guidance covering after-hours care, diagnostics, hospitalisation, transport, insurance questions, and urgent-care budgeting.`,
    intro: `Emergency vet costs in ${city.name} can be stressful because decisions often happen quickly. This guide explains what can affect the bill, what records to keep ready, and why urgent care should not be delayed while searching online.`,
    updated: reviewed,
    isHealthGuide: true,
    quickFacts: [
      "If your dog has urgent symptoms, phone a veterinarian or emergency animal clinic immediately.",
      "DogHaven does not publish fake clinic prices, fake phone numbers, or emergency vet rankings.",
      "Emergency costs vary by time of day, severity, diagnostics, hospitalisation, medication, surgery, and dog size.",
      "Pet insurance may help, but policy limits, exclusions, excesses, and upfront payment rules differ.",
    ],
    sections: [
      {
        heading: `Emergency vet cost context in ${city.name}`,
        body: [...generalCostNote(city.name), city.emergencyNote],
      },
      {
        heading: "What affects emergency vet costs",
        body: [
          "Emergency care is priced around the dog's condition and the work needed to stabilise, diagnose, treat, monitor, or refer the patient. A phone quote cannot predict everything before examination.",
        ],
        table: {
          headers: ["Cost factor", "What to ask"],
          rows: [
            ["After-hours care", "Is there a separate emergency consult, triage, or after-hours fee?"],
            ["Diagnostics", "Could blood tests, X-rays, ultrasound, or other tests be needed?"],
            ["Medication and fluids", "Will treatment involve injections, IV fluids, oxygen, pain relief, or monitoring?"],
            ["Hospitalisation", "Could the dog need overnight care, isolation, or repeated checks?"],
            ["Surgery or referral", "Is referral or surgery possible, and how are estimates handled?"],
            ["Insurance", "Does the clinic require upfront payment, and what documents help with claims?"],
          ],
        },
      },
      {
        heading: "Questions to ask before an emergency",
        body: ["Ask these while your dog is healthy, not while you are panicking in the car."],
        checklist: [
          "Which after-hours clinic does my regular vet recommend?",
          "What information should I bring if my dog needs urgent care?",
          "How are estimates, deposits, payment, and updates handled?",
          "Can the clinic handle isolation for suspected parvovirus or infectious disease?",
          "What happens if my dog needs referral, surgery, or overnight monitoring?",
          "Which insurance documents should I keep ready?",
        ],
      },
      {
        heading: "Warning signs that should not wait",
        body: ["Do not delay urgent care because you are trying to compare costs online."],
        bullets: [
          "Collapse, breathing trouble, seizures, severe pain, heavy bleeding, or trauma.",
          "Possible poisoning, snake bite, heatstroke, or dangerous food exposure.",
          "Repeated vomiting, severe diarrhoea, blood, or gut symptoms in puppies.",
          "Unable to urinate, swollen abdomen, pale gums, or rapidly worsening weakness.",
          "Any situation where your vet tells you to come in immediately.",
        ],
      },
      {
        heading: "Emergency budget checklist",
        body: ["A little preparation can reduce panic and help you make faster decisions."],
        checklist: [
          "Save your regular vet and after-hours option.",
          "Keep vaccination records, medication names, allergy notes, microchip details, and insurance policy information accessible.",
          "Use a separate emergency savings buffer even if you have insurance.",
          "Check your policy excess, annual limit, exclusions, waiting periods, and claim process.",
          "Use the vet visit checklist before non-critical appointments and emergency calls.",
        ],
      },
    ],
    faqs: [
      {
        question: `Can DogHaven tell me the exact emergency vet cost in ${city.name}?`,
        answer:
          "No. Emergency costs depend on the dog's condition, diagnostics, treatment, time of day, and clinic process. Ask the clinic directly for current estimates.",
      },
      {
        question: "Should I delay emergency care to compare prices?",
        answer:
          "No. For urgent symptoms, phone a vet or emergency animal clinic immediately. Online research should not delay care.",
      },
      {
        question: "Can pet insurance cover emergency vet bills?",
        answer:
          "It may help, but cover depends on the policy wording, waiting periods, exclusions, excesses, limits, and claim process. Check your insurer directly.",
      },
    ],
    related: [
      { title: `${city.name} Emergency Vet Guide`, description: "Prepare before urgent symptoms happen.", href: `/local/${city.slug}/emergency-vets-${city.slug}` },
      { title: "Emergency Help", description: "Urgent symptoms and preparation.", href: "/emergency" },
      { title: "Emergency Vet Costs", description: "National emergency vet budget guidance.", href: "/costs/emergency-vet-costs-south-africa" },
      { title: "Budget for Emergency Vet Bills", description: "Plan a welfare-safe emergency buffer.", href: "/costs/how-to-budget-for-emergency-vet-bills-south-africa" },
      { title: "Pet Insurance", description: "Understand cover, limits, and exclusions.", href: "/insurance/pet-insurance-for-dogs-south-africa" },
      { title: "Vet Visit Checklist", description: "Prepare clearer notes for a vet call.", href: "/tools/vet-visit-checklist" },
      ...commonRelated(city),
    ],
    sources: sourceList(city),
  };
}

function monthlyPage(city: (typeof localCities)[number], service: CostService): GuideContent {
  return {
    slug: `${service.slugPrefix}-${city.slug}`,
    path: pathFor(city, service),
    hubTitle: "Local Cost Guides",
    hubPath: "/local-costs",
    title: titleFor(city, service),
    seoTitle: `${titleFor(city, service)} | DogHaven`,
    description: `Practical ${city.name} monthly dog cost guide covering food, parasite control, grooming, vet care, insurance, toys, training, transport, and emergency savings without fake exact prices.`,
    intro: `Monthly dog costs in ${city.name} depend on your dog's size, age, coat, health, food, lifestyle, housing, transport, and emergency planning. This guide helps you build a realistic budget without pretending every household pays the same.`,
    updated: reviewed,
    quickFacts: [
      "DogHaven uses cost factors, not fake exact monthly prices.",
      "Food, parasite control, vet care, grooming, training, transport, insurance, and emergency savings should all be considered.",
      "Puppies, senior dogs, large breeds, high-maintenance coats, and chronic health issues can change the monthly budget.",
      "Ask providers for current written quotes and review your budget when your dog or household routine changes.",
    ],
    sections: [
      {
        heading: `Monthly dog cost context in ${city.name}`,
        body: [...generalCostNote(city.name), city.localContext],
      },
      {
        heading: "Core monthly cost categories",
        body: ["A realistic dog budget includes routine care and a buffer for the unexpected."],
        table: {
          headers: ["Category", "What affects it"],
          rows: [
            ["Food", "Dog size, age, activity, diet type, body condition, allergies, and vet diets."],
            ["Parasite control", "Weight, tick exposure, flea risk, product type, and vet guidance."],
            ["Routine vet care", "Vaccines, checkups, chronic conditions, dental care, and prevention."],
            ["Grooming", "Coat type, size, shedding, matting, ears, nails, and mobile or parlour choice."],
            ["Training", "Puppy classes, private support, behaviour help, and owner practice needs."],
            ["Insurance or savings", "Premiums, excesses, exclusions, emergency buffer, and claims process."],
            ["Transport and extras", "Fuel, parking, travel gear, toys, bedding, cleaning supplies, and replacement items."],
          ],
        },
      },
      {
        heading: "Illustrative budget examples",
        body: [
          "These are planning examples, not prices. Replace each line with current quotes from your vet, groomer, trainer, insurer, shelter, and suppliers.",
        ],
        table: {
          headers: ["Dog type", "Budget pressure points"],
          rows: [
            ["Small adult dog", "Food may be lower, but dental care, grooming, barking support, and insurance still matter."],
            ["Large active dog", "Food, parasite control, medication by weight, bedding, transport, and emergency savings can rise."],
            ["Puppy", "Vaccines, deworming, puppy food, training, chewing supplies, and sterilisation discussions affect the first year."],
            ["Senior dog", "Checkups, chronic care, mobility support, dental care, and insurance limits need closer review."],
          ],
        },
      },
      {
        heading: "Questions to ask providers",
        body: ["The safest budget is based on current local quotes, not assumptions."],
        checklist: [
          "Vet: what routine prevention should I budget for this year?",
          "Groomer: how often does this coat type need professional care?",
          "Trainer: should I plan for group classes, private sessions, or behaviour support?",
          "Insurer: what are the excess, limits, exclusions, waiting periods, and claim process?",
          "Food supplier or vet: how much should this dog eat each month and when should food change?",
          "Shelter or breeder: what costs should I expect in the first three months?",
        ],
      },
      {
        heading: "Monthly budget checklist",
        body: ["Use this as a practical starting point for city dog ownership."],
        checklist: [
          "Estimate food based on dog size, age, and feeding guidance.",
          "Include parasite control and routine vet care, not only food.",
          "Add grooming if the coat needs regular brushing, clipping, de-shedding, or nail care.",
          "Set aside emergency savings even if you have insurance.",
          "Use the DogHaven dog cost calculator and update it when costs change.",
        ],
      },
    ],
    faqs: [
      {
        question: `What affects monthly dog costs in ${city.name}?`,
        answer:
          "Dog size, food, health, age, coat type, grooming, training, parasite control, insurance, transport, emergency savings, and provider quotes all matter.",
      },
      {
        question: "Can I budget only for food?",
        answer:
          "No. Food is only one part of responsible ownership. Routine vet care, parasite prevention, grooming, training, and emergency planning also matter.",
      },
      {
        question: "Are puppies more expensive in the first year?",
        answer:
          "Often yes. Puppies may need multiple vet visits, vaccines, deworming, puppy food, training, setup supplies, and sterilisation discussions.",
      },
    ],
    related: [
      { title: "Monthly Cost of Owning a Dog", description: "National monthly dog budget guide.", href: "/costs/monthly-cost-of-owning-a-dog-south-africa" },
      { title: "Puppy First-Year Cost", description: "Plan puppy setup and first-year care.", href: "/costs/puppy-first-year-cost-south-africa" },
      { title: "Dog Food Cost", description: "Understand food budget factors.", href: "/costs/dog-food-cost-south-africa" },
      { title: "Pet Insurance", description: "Compare cover, excesses, and exclusions.", href: "/insurance" },
      { title: "New Dog Shopping List", description: "Prepare useful basics without overbuying.", href: "/tools/new-dog-shopping-list" },
      { title: "Breed Guides", description: "Size, coat, and health needs affect costs.", href: "/breeds" },
      ...commonRelated(city),
    ],
    sources: sourceList(city),
  };
}

function buildGuide(city: (typeof localCities)[number], service: CostService): GuideContent {
  if (service.key === "grooming") return groomingPage(city, service);
  if (service.key === "training") return trainingPage(city, service);
  if (service.key === "emergency-vet") return emergencyVetPage(city, service);
  return monthlyPage(city, service);
}

export const phase18LocalCostGuidePages: GuideContent[] = localCities.flatMap((city) =>
  costServices.map((service) => buildGuide(city, service)),
);

export const localCostHub: HubContent = {
  slug: "local-costs",
  path: "/local-costs",
  title: "Local Dog Cost Guides in South Africa",
  seoTitle: "Local Dog Cost Guides South Africa | Grooming, Training, Vet Budgets",
  description:
    "City-specific South African dog cost guides for grooming prices, training costs, emergency vet budget planning, and monthly dog ownership costs.",
  kicker: "Local cost guides",
  intro:
    "Dog costs vary by city, suburb, provider, dog size, health, coat type, urgency, and lifestyle. DogHaven local cost guides help you plan and ask better questions without fake prices, fake rankings, or invented local listings.",
  cards: [
    ...localCities.map((city) => ({
      title: `${city.name} Dog Cost Guides`,
      description: `Grooming prices, training costs, emergency vet budgets, and monthly dog costs for ${city.name}.`,
      href: `/local-costs/${city.slug}/monthly-dog-costs-${city.slug}`,
    })),
    ...costServices.map((service) => ({
      title: service.titleLabel,
      description: service.cardDescription,
      href: pathFor(defaultCostCity, service),
    })),
  ],
  related: [
    { title: "Dog Cost Calculator", description: "Estimate monthly dog costs without sharing personal information.", href: "/tools/dog-cost-calculator" },
    { title: "Dog Cost Calculator Guide", description: "Understand the DogHaven estimate.", href: "/costs/dog-cost-calculator-south-africa" },
    { title: "Local Service Guides", description: "City service guides for grooming, training, emergency vets, and dog-friendly places.", href: "/local" },
    { title: "City Guides", description: "Daily local context for major South African cities.", href: "/city" },
    { title: "Province Guides", description: "Province-level climate, risk, and travel context.", href: "/province" },
    { title: "Pet Insurance", description: "Understand cover, excesses, exclusions, and claims.", href: "/insurance" },
  ],
  faqs: [
    {
      question: "Why does DogHaven avoid exact city price lists?",
      answer:
        "Exact prices change by provider, suburb, dog size, urgency, inflation, and what is included. DogHaven avoids fake prices and encourages written quotes from providers.",
    },
    {
      question: "Are these pages business rankings?",
      answer:
        "No. DogHaven does not rank local groomers, trainers, vets, clinics, or service providers. These are planning guides.",
    },
    {
      question: "What is the best way to budget for a dog in South Africa?",
      answer:
        "Start with food, routine vet care, parasite prevention, grooming, training, transport, insurance or savings, and an emergency buffer. Then update the budget using current quotes.",
    },
  ],
};

export const phase18CostCards: CardLink[] = [
  {
    title: "Local Dog Cost Guides",
    description: "City-specific grooming, training, emergency vet, and monthly dog budget guides.",
    href: "/local-costs",
  },
  {
    title: "Cape Town Grooming Prices",
    description: "Understand dog grooming quote factors in Cape Town.",
    href: "/local-costs/cape-town/dog-grooming-prices-cape-town",
  },
  {
    title: "Johannesburg Training Costs",
    description: "Compare puppy classes, private sessions, and behaviour support cost factors.",
    href: "/local-costs/johannesburg/dog-training-costs-johannesburg",
  },
  {
    title: "Pretoria Monthly Dog Costs",
    description: "Plan food, vet care, grooming, training, insurance, and emergency savings.",
    href: "/local-costs/pretoria/monthly-dog-costs-pretoria",
  },
  {
    title: "Durban Emergency Vet Costs",
    description: "Budget for urgent care factors without delaying emergency treatment.",
    href: "/local-costs/durban/emergency-vet-costs-durban",
  },
];

export const phase18GroomingCostCards: CardLink[] = localCities.map((city) => ({
  title: `Dog Grooming Prices in ${city.name}`,
  description: `Cost factors for ${city.name} grooming: coat type, mobile vs parlour, matting, ticks, and quote questions.`,
  href: `/local-costs/${city.slug}/dog-grooming-prices-${city.slug}`,
}));

export const phase18TrainingCostCards: CardLink[] = localCities.map((city) => ({
  title: `Dog Training Costs in ${city.name}`,
  description: `Cost factors for ${city.name} training: puppy classes, private sessions, group lessons, and behaviour support.`,
  href: `/local-costs/${city.slug}/dog-training-costs-${city.slug}`,
}));

export const phase18EmergencyCostCards: CardLink[] = localCities.map((city) => ({
  title: `Emergency Vet Costs in ${city.name}`,
  description: `Budget planning for urgent care in ${city.name}: after-hours, diagnostics, hospitalisation, and insurance questions.`,
  href: `/local-costs/${city.slug}/emergency-vet-costs-${city.slug}`,
}));

export const phase18InsuranceCards: CardLink[] = [
  {
    title: "Local Emergency Vet Cost Planning",
    description: "City-specific emergency vet budget guides and insurance questions to prepare before a crisis.",
    href: "/local-costs",
  },
  {
    title: "Cape Town Emergency Vet Costs",
    description: "Budget planning for urgent dog care in Cape Town.",
    href: "/local-costs/cape-town/emergency-vet-costs-cape-town",
  },
  {
    title: "Johannesburg Emergency Vet Costs",
    description: "Budget planning for urgent dog care in Johannesburg.",
    href: "/local-costs/johannesburg/emergency-vet-costs-johannesburg",
  },
];

export function getPhase18LocalCostGuide(citySlug: string, guideSlug: string) {
  return phase18LocalCostGuidePages.find((guide) => guide.path === `/local-costs/${citySlug}/${guideSlug}`);
}

export { costServices };
