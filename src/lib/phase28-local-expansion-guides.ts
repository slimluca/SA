import type { CardLink, GuideContent, HubContent, Source } from "@/lib/content";

const reviewed = "2026-06-14";

type ExpansionCity = {
  slug: string;
  name: string;
  province: string;
  provinceSlug: string;
  localContext: string;
  climate: string;
  servicePlanning: string;
  dogFriendlyContext: string;
  emergencyContext: string;
  source: Source;
};

type ExpansionServiceKey = "grooming" | "training" | "emergency-vets" | "dog-friendly";

type ExpansionService = {
  key: ExpansionServiceKey;
  slugPrefix: string;
  titleLabel: string;
  cardDescription: string;
};

export const phase28ExpansionCities: ExpansionCity[] = [
  {
    slug: "centurion",
    name: "Centurion",
    province: "Gauteng",
    provinceSlug: "gauteng",
    localContext:
      "Centurion dog owners often balance estates, townhouse complexes, security gates, busy commuter roads, garden routines, and quick trips between Pretoria and Johannesburg. Good planning helps dogs cope with visitors, traffic noise, close neighbours, and service appointments.",
    climate:
      "Hot Highveld summers, thunderstorms, dry winter mornings, dust, grass seeds, and ticks after parks or kennels can affect paws, coats, ears, and exercise timing.",
    servicePlanning:
      "Ask providers how they handle estate access, parking, collection times, anxious dogs, heat, traffic delays, and written updates before you book.",
    dogFriendlyContext:
      "Estate, complex, park, cafe, accommodation, and public-space rules can differ across Centurion. Check rules directly and keep dogs controlled in shared spaces.",
    emergencyContext:
      "Traffic on major routes can slow urgent trips, so Centurion owners should save after-hours vet options, transport plans, and medical records before a crisis.",
    source: {
      label: "City of Tshwane",
      href: "https://www.tshwane.gov.za/",
      note: "Official municipal starting point for local public-space and by-law checks affecting Centurion owners.",
    },
  },
  {
    slug: "sandton",
    name: "Sandton",
    province: "Gauteng",
    provinceSlug: "gauteng",
    localContext:
      "Sandton dogs may live in apartments, estates, secure complexes, or busy suburban homes where lifts, guards, visitors, traffic, and workday routines shape everyday care. Dogs benefit from calm manners and predictable service plans.",
    climate:
      "Summer heat, storms, paved surfaces, dust, and grass exposure make water, shade, paw checks, coat care, and parasite prevention important.",
    servicePlanning:
      "Confirm building access, parking, collection, cancellation, behaviour handling, insurance responsibility, and what happens if a dog becomes stressed or unwell.",
    dogFriendlyContext:
      "Sandton dog-friendly outings often depend on venue rules, estate policies, leash control, and a dog's comfort around people, children, traffic, and other dogs.",
    emergencyContext:
      "Sandton traffic and high-rise or complex access can matter in emergencies. Keep a carrier, lead, vet records, and after-hours numbers easy to reach.",
    source: {
      label: "City of Johannesburg",
      href: "https://www.joburg.org.za/",
      note: "Official municipal starting point for Sandton public-space, park, and by-law information.",
    },
  },
  {
    slug: "midrand",
    name: "Midrand",
    province: "Gauteng",
    provinceSlug: "gauteng",
    localContext:
      "Midrand dog ownership is shaped by fast-growing estates, complexes, business parks, traffic corridors, construction noise, gardens, and a mix of urban and semi-rural edges. Dogs need safe routines around gates, roads, visitors, and shared spaces.",
    climate:
      "Highveld heat, storms, dust, ticks, grass seeds, and changing walking surfaces can affect coat care, parasite planning, and exercise times.",
    servicePlanning:
      "Ask providers about travel areas, estate entry, pick-up windows, group sizes, heat plans, behaviour screening, and emergency procedures.",
    dogFriendlyContext:
      "Rules can differ by estate, park, accommodation, and venue. Verify dog access directly and do not assume a nearby green space allows dogs off lead.",
    emergencyContext:
      "Because Midrand sits between Johannesburg and Pretoria routes, owners should plan which vet option is realistic at different times of day.",
    source: {
      label: "City of Johannesburg",
      href: "https://www.joburg.org.za/",
      note: "Official municipal starting point for local public-space and by-law information relevant to parts of Midrand.",
    },
  },
  {
    slug: "east-london",
    name: "East London",
    province: "Eastern Cape",
    provinceSlug: "eastern-cape",
    localContext:
      "East London dogs often move between coastal suburbs, gardens, beach outings, holiday accommodation, traffic routes, and windy or humid conditions. Owners need practical routines for sand, skin, ears, public rules, and emergency planning.",
    climate:
      "Coastal humidity, wind, swimming, beach sand, ticks, fleas, and summer heat can affect ears, paws, coats, skin, and water needs.",
    servicePlanning:
      "Ask providers how they manage wet dogs, beach sand, ticks, nervous dogs, transport, holiday demand, and emergency vet communication.",
    dogFriendlyContext:
      "Beach, park, accommodation, and venue rules may change by area or season. Check official and venue rules before taking a dog.",
    emergencyContext:
      "Coastal outings can involve heat, injuries, vomiting, snake encounters, poisoning, or traffic delays. Keep emergency information ready before weekends and holidays.",
    source: {
      label: "Buffalo City Metropolitan Municipality",
      href: "https://www.buffalocity.gov.za/",
      note: "Official municipal starting point for East London public-space, beach, and by-law information.",
    },
  },
  {
    slug: "nelspruit",
    name: "Nelspruit",
    province: "Mpumalanga",
    provinceSlug: "mpumalanga",
    localContext:
      "Nelspruit dog care is shaped by warm weather, garden living, bushveld trips, holiday travel, ticks, snakes, thunderstorms, and longer distances to some specialist services. Prevention and emergency planning matter.",
    climate:
      "Heat, ticks, fleas, long grass, snakes, humidity after rain, and outdoor lifestyles can influence parasite prevention, grooming, hydration, and walking times.",
    servicePlanning:
      "Ask providers how they manage heat, secure fencing, tick checks, transport, anxious dogs, medication notes, and emergency vet contact plans.",
    dogFriendlyContext:
      "Accommodation, hiking, parks, and travel stops can each have different pet rules. Verify access directly and plan water, shade, and tick prevention.",
    emergencyContext:
      "Nelspruit owners should plan for heat stress, tick-related illness concerns, snake encounters, poisoning, injuries, and after-hours transport before a crisis.",
    source: {
      label: "City of Mbombela",
      href: "https://www.mbombela.gov.za/",
      note: "Official municipal starting point for Nelspruit/Mbombela public-space and local rule checks.",
    },
  },
  {
    slug: "polokwane",
    name: "Polokwane",
    province: "Limpopo",
    provinceSlug: "limpopo",
    localContext:
      "Polokwane dog ownership often involves hot summers, gardens, dusty walks, town traffic, holiday travel, and outdoor routines. Owners should plan for heat, parasite prevention, safe transport, and practical vet access.",
    climate:
      "Heat, dry conditions, ticks, fleas, long grass, dust, and summer storms can affect exercise timing, coat care, water, and routine health planning.",
    servicePlanning:
      "Ask providers about heat precautions, secure handling, transport, vaccination checks, medication instructions, and what happens if a dog becomes unwell.",
    dogFriendlyContext:
      "Rules for public spaces, accommodation, estates, and venues can vary. Confirm dog access before visiting and keep dogs leashed where rules or safety require it.",
    emergencyContext:
      "Polokwane owners should know where they would call after hours, how they would transport a large or injured dog, and what records to keep ready.",
    source: {
      label: "Polokwane Municipality",
      href: "https://www.polokwane.gov.za/",
      note: "Official municipal starting point for local public-space and by-law checks.",
    },
  },
];

export const phase28ExpansionServices: ExpansionService[] = [
  {
    key: "grooming",
    slugPrefix: "dog-grooming",
    titleLabel: "Dog Grooming",
    cardDescription: "How to choose safe grooming options, compare mobile and parlour care, and plan coat maintenance.",
  },
  {
    key: "training",
    slugPrefix: "dog-training",
    titleLabel: "Dog Training",
    cardDescription: "How to choose humane training for puppies, leash manners, recall, barking, and everyday behaviour.",
  },
  {
    key: "emergency-vets",
    slugPrefix: "emergency-vets",
    titleLabel: "Emergency Vet Planning",
    cardDescription: "How to prepare for urgent symptoms, transport, records, after-hours questions, and vet calls.",
  },
  {
    key: "dog-friendly",
    slugPrefix: "dog-friendly-places",
    titleLabel: "Dog-Friendly Living and Outings",
    cardDescription: "How to check parks, venues, accommodation, rules, heat, water, and public etiquette.",
  },
];

const coreSources: Source[] = [
  {
    label: "South African Veterinary Council",
    href: "https://savc.org.za/",
    note: "Professional veterinary registration context and a useful starting point when checking veterinary services.",
  },
  {
    label: "South African Veterinary Association",
    href: "https://www.sava.co.za/",
    note: "South African veterinary context for responsible pet care and veterinary guidance.",
  },
  {
    label: "NSPCA",
    href: "https://nspca.co.za/",
    note: "South African animal welfare context and responsible ownership guidance.",
  },
];

function pathFor(city: ExpansionCity, service: ExpansionService) {
  return `/local/${city.slug}/${service.slugPrefix}-${city.slug}`;
}

function titleFor(city: ExpansionCity, service: ExpansionService) {
  if (service.key === "emergency-vets") return `Emergency Vet Planning in ${city.name}`;
  if (service.key === "dog-friendly") return `Dog-Friendly Living and Outings in ${city.name}`;
  return `${service.titleLabel} in ${city.name}: How to Choose Safely`;
}

function commonRelated(city: ExpansionCity): CardLink[] {
  return [
    { title: "Local Dog Guides", description: "Browse practical local guides for South African dog owners.", href: "/local" },
    { title: `${city.province} Province Guide`, description: "Province-level climate, risks, and local dog-care context.", href: `/province/${city.provinceSlug}` },
    { title: "Dog Cost Calculator", description: "Estimate monthly dog ownership costs without sharing personal information.", href: "/tools/dog-cost-calculator" },
    { title: "Vet Visit Checklist", description: "Prepare symptoms, records, and questions before a vet call.", href: "/tools/vet-visit-checklist" },
    { title: "Dog-Friendly Trip Checklist", description: "Pack water, records, rule checks, and emergency planning.", href: "/tools/dog-friendly-trip-checklist" },
  ];
}

function sharedQuickFacts(city: ExpansionCity, service: ExpansionService) {
  return [
    `DogHaven does not list verified ${service.titleLabel.toLowerCase()} providers in ${city.name} yet.`,
    "Use this page to ask better questions and verify providers, venues, or rules directly before booking or visiting.",
    "Costs can vary by suburb, urgency, travel, dog size, dog behaviour, season, and what is included.",
    "For urgent symptoms, contact a veterinarian or emergency animal clinic directly rather than relying on online research.",
  ];
}

function cityContextSection(city: ExpansionCity) {
  return {
    heading: `Dog-owner context in ${city.name}`,
    body: [
      city.localContext,
      city.climate,
      "The safest local choices usually come from checking the details yourself: what is included, who handles the dog, what happens if something goes wrong, and whether the provider or venue is realistic for your dog's temperament.",
    ],
  };
}

function providerQuestions(service: ExpansionService) {
  if (service.key === "grooming") {
    return [
      "What is included in the groom, and what costs extra?",
      "How do you handle matting, anxious dogs, senior dogs, puppies, ticks, fleas, skin irritation, or sore ears?",
      "Do you offer mobile grooming, parlour grooming, or both, and how do travel or parking arrangements work?",
      "Will you stop and contact me if the groom becomes stressful, painful, or unsafe?",
    ];
  }

  if (service.key === "training") {
    return [
      "What methods do you use, and how do you avoid fear, intimidation, or punishment-heavy handling?",
      "Can owners stay involved during sessions and practise at home?",
      "How do you handle puppy classes, barking, leash manners, recall, jumping, and nervous dogs?",
      "What happens if the dog is overwhelmed, reactive, or not ready for a group setting?",
    ];
  }

  if (service.key === "emergency-vets") {
    return [
      "Which clinic should I call after hours, and when should I leave immediately?",
      "What information should I have ready when I phone?",
      "How are estimates, deposits, updates, transfers, and referrals handled?",
      "What is the safest transport plan for a large, painful, anxious, or injured dog?",
    ];
  }

  return [
    "Are dogs allowed at the specific venue, park, accommodation, or route on the day I plan to visit?",
    "Are leads, vaccination records, waste bags, breed or size limits, time restrictions, or booking rules required?",
    "Is there shade, water access, quiet space, and a safe exit if my dog becomes stressed?",
    "What should I do if another dog, child, cyclist, runner, or crowd makes the outing unsafe?",
  ];
}

function warningSigns(service: ExpansionService) {
  if (service.key === "emergency-vets") {
    return [
      "A plan that depends on searching online during an emergency.",
      "Waiting at home when a dog is collapsing, struggling to breathe, repeatedly vomiting, bleeding heavily, unable to stand, or may have been poisoned.",
      "Giving human medication or home treatment without a veterinarian's instruction.",
      "Not knowing how you would transport a large or injured dog.",
    ];
  }

  return [
    "Pressure to pay before your safety questions are answered.",
    "No clear explanation of what is included, what happens in an emergency, or who handles your dog.",
    "Dismissal of vaccination status, behaviour concerns, anxiety, pain, age, heat risk, or medical needs.",
    "Fake-looking reviews, vague locations, no written booking details, or refusal to let you verify rules directly.",
  ];
}

function sectionsFor(city: ExpansionCity, service: ExpansionService) {
  const serviceSpecific =
    service.key === "grooming"
      ? [
          "Grooming choices should fit coat type, shedding, heat, skin comfort, parasite prevention, and your dog's stress level.",
          city.servicePlanning,
        ]
      : service.key === "training"
        ? [
            "Good training should be humane, owner-involved, realistic, and focused on safe everyday behaviour rather than quick-fix promises.",
            city.servicePlanning,
          ]
        : service.key === "emergency-vets"
          ? [
              city.emergencyContext,
              "A useful emergency plan includes who to call, how to describe symptoms, how to transport the dog, and how to access records quickly.",
            ]
          : [
              city.dogFriendlyContext,
              "Dog-friendly does not always mean safe for every dog. Think about heat, water, crowds, other dogs, noise, leash rules, and your dog's recall and comfort.",
            ];

  return [
    cityContextSection(city),
    {
      heading: `How to approach ${service.titleLabel.toLowerCase()} in ${city.name}`,
      body: serviceSpecific,
      checklist: [
        "Write down your dog's age, size, health needs, behaviour concerns, and vaccination status before calling.",
        "Ask what is included, what is excluded, and what happens if the dog becomes stressed, sick, injured, or unsafe.",
        "Check rules or provider details directly rather than relying only on old posts, screenshots, or social media comments.",
        "Keep your vet details, emergency contact, microchip or ID information, and transport plan easy to find.",
      ],
    },
    {
      heading: "Questions to ask before you book or visit",
      body: ["Clear answers help you avoid rushed decisions and compare options more fairly."],
      checklist: providerQuestions(service),
    },
    {
      heading: "Cost and planning factors",
      body: [
        "DogHaven does not publish invented exact prices. Use this section to understand what can affect a quote, then ask the provider for current written information.",
        "Local cost differences can come from travel distance, suburb, time of day, season, dog size, behaviour, coat or health needs, public holidays, and whether extras are included.",
      ],
      table: {
        headers: ["Factor", "What to check"],
        rows: [
          ["Dog size and age", "Large dogs, puppies, seniors, and medically fragile dogs may need more time, space, or handling."],
          ["Behaviour", "Ask how anxious, reactive, excitable, or escape-prone dogs are managed."],
          ["Travel or access", "Confirm estate access, parking, pick-up windows, traffic delays, or mobile service travel areas."],
          ["Health records", "Ask what vaccination, parasite prevention, medication, or vet information is needed."],
          ["Emergency plan", "Check who phones you, which vet is contacted, and what decisions are made if you cannot be reached."],
        ],
      },
    },
    {
      heading: "Warning signs to avoid",
      body: ["Trustworthy local planning is about clarity, not hype."],
      bullets: warningSigns(service),
    },
    {
      heading: "Useful next steps",
      body: [
        "Use DogHaven tools and related guides to prepare before making calls. This helps you compare providers, plan costs, and avoid relying on unverified listings.",
      ],
      checklist: [
        "Use the dog cost calculator for a rough monthly budget.",
        "Use the vet visit checklist for health notes and emergency planning.",
        "Read the province guide for climate and local risk context.",
        "Read training, grooming, emergency, food, and insurance hubs before choosing services that affect your dog's wellbeing.",
      ],
    },
  ];
}

function guideFor(city: ExpansionCity, service: ExpansionService): GuideContent {
  return {
    slug: `${service.slugPrefix}-${city.slug}`,
    path: pathFor(city, service),
    hubTitle: "Local Guides",
    hubPath: "/local",
    title: titleFor(city, service),
    seoTitle: `${titleFor(city, service)} | DogHaven`,
    description: `Practical ${city.name} ${service.titleLabel.toLowerCase()} guidance for South African dog owners: local context, safety questions, cost factors, warning signs, and useful next steps without fake listings.`,
    intro: `${titleFor(city, service)} is a practical planning guide, not a fake directory. Use it to understand local context, ask safer questions, compare options, and prepare before booking a service or visiting a dog-friendly space.`,
    updated: reviewed,
    quickFacts: sharedQuickFacts(city, service),
    sections: sectionsFor(city, service),
    faqs: [
      {
        question: `Does DogHaven list verified providers in ${city.name}?`,
        answer:
          "No. DogHaven does not publish fake local listings, fake phone numbers, fake reviews, or provider rankings. These guides help owners verify options directly.",
      },
      {
        question: "How should I compare local options?",
        answer:
          "Compare safety questions, written details, health-record requirements, emergency plans, handling methods, cancellation rules, and what is included in the quote.",
      },
      {
        question: "Can local dog rules change?",
        answer:
          "Yes. Municipality, estate, complex, venue, accommodation, park, and public-space rules can change. Check official or provider rules before relying on general guidance.",
      },
    ],
    related: commonRelated(city),
    sources: [city.source, ...coreSources],
  };
}

export const phase28LocalGuidePages: GuideContent[] = phase28ExpansionCities.flatMap((city) =>
  phase28ExpansionServices.map((service) => guideFor(city, service)),
);

export const phase28LocalCityHubs: HubContent[] = phase28ExpansionCities.map((city) => ({
  slug: `local-${city.slug}`,
  path: `/local/${city.slug}`,
  title: `${city.name} Local Dog Guides`,
  seoTitle: `${city.name} Dog Services and Local Dog Owner Guide | DogHaven`,
  description: `Helpful ${city.name} dog-owner guides for grooming, training, emergency vet planning, dog-friendly outings, cost planning, and safe provider questions without fake listings.`,
  kicker: "Local city guide",
  intro: `${city.localContext} These guides help ${city.name} owners prepare safer questions, check local rules directly, and plan dog care without relying on fake business listings.`,
  cards: phase28ExpansionServices.map((service) => ({
    title: service.key === "emergency-vets" ? `Emergency Vet Planning in ${city.name}` : `${service.titleLabel} in ${city.name}`,
    description: service.cardDescription,
    href: pathFor(city, service),
  })),
  related: [
    { title: "All Local Guides", description: "Browse DogHaven local service guides by city and service type.", href: "/local" },
    { title: `${city.province} Province Guide`, description: "Province-level dog care, climate, and local risk context.", href: `/province/${city.provinceSlug}` },
    { title: "Dog Cost Calculator", description: "Estimate monthly costs before booking services.", href: "/tools/dog-cost-calculator" },
    { title: "Training Guides", description: "Humane behaviour and public manners guidance.", href: "/training" },
    { title: "Grooming Guides", description: "Coat, skin, nail, shedding, and groomer choice guidance.", href: "/grooming" },
    { title: "Emergency Help", description: "Urgent symptom and emergency preparation guidance.", href: "/emergency" },
  ],
  faqs: [
    {
      question: `Are these ${city.name} pages business directories?`,
      answer:
        "No. They are practical planning guides. DogHaven does not publish fake listings, fake reviews, fake phone numbers, or local rankings.",
    },
    {
      question: `Which ${city.name} guide should I read first?`,
      answer:
        "Start with emergency vet planning if you do not have after-hours details saved. For everyday care, use grooming, training, and dog-friendly guides based on what you need next.",
    },
    {
      question: "Why does local context matter?",
      answer:
        "Climate, traffic, housing type, estate rules, service access, public-space rules, and dog temperament all affect practical dog-care decisions.",
    },
  ],
}));

export const phase28LocalHubCards: CardLink[] = phase28LocalCityHubs.map((hub) => ({
  title: hub.title,
  description: hub.description,
  href: hub.path,
}));

export function getPhase28LocalGuide(citySlug: string, guideSlug: string) {
  return phase28LocalGuidePages.find((guide) => guide.path === `/local/${citySlug}/${guideSlug}`);
}

export function getPhase28LocalCityHub(citySlug: string) {
  return phase28LocalCityHubs.find((hub) => hub.path === `/local/${citySlug}`);
}
