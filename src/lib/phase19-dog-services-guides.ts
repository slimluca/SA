import type { CardLink, GuideContent, HubContent, Source } from "@/lib/content";
import { localCities } from "@/lib/phase17-local-guides";

const reviewed = "2026-05-19";

type DogServiceKey = "boarding" | "daycare" | "pet-sitters" | "dog-walkers" | "holiday-care";

type DogService = {
  key: DogServiceKey;
  slugPrefix: string;
  titleLabel: string;
  cardDescription: string;
};

export const dogServices: DogService[] = [
  {
    key: "boarding",
    slugPrefix: "dog-boarding-kennels",
    titleLabel: "Dog Boarding Kennels",
    cardDescription:
      "How to check kennels, vaccination rules, hygiene, sleeping routines, exercise, feeding, and emergency plans.",
  },
  {
    key: "daycare",
    slugPrefix: "dog-daycare",
    titleLabel: "Dog Daycare",
    cardDescription:
      "How to evaluate daycare supervision, safe introductions, group sizes, rest, water, and over-arousal risks.",
  },
  {
    key: "pet-sitters",
    slugPrefix: "pet-sitters",
    titleLabel: "Pet Sitters",
    cardDescription:
      "How to check home visits, overnight sitting, references, keys, care instructions, updates, and emergency plans.",
  },
  {
    key: "dog-walkers",
    slugPrefix: "dog-walkers",
    titleLabel: "Dog Walkers",
    cardDescription:
      "How to check leash safety, solo vs group walks, heat precautions, transport, escape risk, and local rules.",
  },
  {
    key: "holiday-care",
    slugPrefix: "holiday-dog-care",
    titleLabel: "Holiday Dog Care",
    cardDescription:
      "How to plan December, school holiday, weekend, and travel care without relying on fake local listings.",
  },
];

const defaultServiceCity = localCities[0]!;

const coreSources: Source[] = [
  {
    label: "NSPCA",
    href: "https://nspca.co.za/",
    note: "South African animal welfare context for responsible care, welfare checks, and owner questions.",
  },
  {
    label: "South African Veterinary Council",
    href: "https://savc.org.za/",
    note: "Professional veterinary context and a useful starting point when checking veterinary services.",
  },
  {
    label: "South African Veterinary Association",
    href: "https://www.sava.co.za/",
    note: "South African veterinary context for responsible dog care and emergency planning.",
  },
];

function pathFor(city: (typeof localCities)[number], service: DogService) {
  return `/dog-services/${city.slug}/${service.slugPrefix}-${city.slug}`;
}

function titleFor(city: (typeof localCities)[number], service: DogService) {
  if (service.key === "boarding") return `Dog Boarding Kennels in ${city.name}: Safe Booking Guide`;
  if (service.key === "daycare") return `Dog Daycare in ${city.name}: Safety and Booking Guide`;
  if (service.key === "pet-sitters") return `Pet Sitters in ${city.name}: Home Care Checklist`;
  if (service.key === "dog-walkers") return `Dog Walkers in ${city.name}: Leash Safety Guide`;
  return `Holiday Dog Care in ${city.name}: Boarding, Sitters and Travel Planning`;
}

function seoTitleFor(city: (typeof localCities)[number], service: DogService) {
  if (service.key === "boarding") return `Dog Boarding in ${city.name} | Kennel Checks, Vaccines and Trial Stays`;
  if (service.key === "daycare") return `Dog Daycare in ${city.name} | Supervision, Groups and Safety Checks`;
  if (service.key === "pet-sitters") return `Pet Sitters in ${city.name} | Keys, Care Notes and Emergency Plans`;
  if (service.key === "dog-walkers") return `Dog Walkers in ${city.name} | Leash Safety, Heat and Route Checks`;
  return `Holiday Dog Care in ${city.name} | Boarding, Sitters and Travel Checks`;
}

function sourceList(city: (typeof localCities)[number]): Source[] {
  return [city.source, ...coreSources];
}

function serviceLink(city: (typeof localCities)[number], serviceKey: DogServiceKey): CardLink {
  const service = dogServices.find((item) => item.key === serviceKey)!;
  return {
    title: `${service.titleLabel} in ${city.name}`,
    description: service.cardDescription,
    href: pathFor(city, service),
  };
}

function relatedFor(city: (typeof localCities)[number], service: DogService): CardLink[] {
  const useCoastalJourney = new Set(["cape-town", "durban", "gqeberha"]).has(city.slug);
  const localHub = {
    title: `${city.name} Local Dog Guides`,
    description: "Local grooming, training, emergency vet, and dog-friendly guidance.",
    href: `/local/${city.slug}`,
  };

  if (service.key === "boarding") {
    return [
      localHub,
      serviceLink(city, "holiday-care"),
      { title: "Vaccination Schedule", description: "Prepare the health records a kennel may request.", href: "/health/vaccination-schedule-south-africa" },
      useCoastalJourney
        ? { title: `${city.name} Dog Cost Guide`, description: "Plan boarding alongside routine and emergency costs.", href: `/local-costs/${city.slug}/monthly-dog-costs-${city.slug}` }
        : { title: `${city.province} Dog Owner Guide`, description: "Plan climate, travel, local risks, and emergency preparation.", href: `/province/${city.provinceSlug}` },
    ];
  }

  if (service.key === "daycare") {
    return [
      localHub,
      serviceLink(city, "dog-walkers"),
      { title: "Puppy Socialisation", description: "Compare structured early exposure with group daycare.", href: "/puppy/puppy-socialisation-south-africa" },
      useCoastalJourney
        ? { title: "Dog Training", description: "Work on recall, calm greetings, and over-arousal.", href: "/training" }
        : { title: "Dog Age Calculator", description: "Consider life stage, stamina, rest, and group-play fit.", href: "/tools/dog-age-calculator" },
    ];
  }

  if (service.key === "pet-sitters") {
    return [
      localHub,
      serviceLink(city, "holiday-care"),
      { title: "Vet Visit Checklist", description: "Prepare medication, allergy, and emergency notes for a sitter.", href: "/tools/vet-visit-checklist" },
      useCoastalJourney
        ? { title: "Dog Costs", description: "Budget for home care, travel, and emergencies.", href: "/costs" }
        : { title: "New Dog Shopping List", description: "Prepare home supplies, routines, and care notes.", href: "/tools/new-dog-shopping-list" },
    ];
  }

  if (service.key === "dog-walkers") {
    return [
      localHub,
      serviceLink(city, "pet-sitters"),
      { title: `${city.name} Dog-Friendly Places`, description: "Check local outing rules, access, heat, and etiquette.", href: `/local/${city.slug}/dog-friendly-places-${city.slug}` },
      useCoastalJourney
        ? { title: "Dog Training", description: "Improve lead manners, recall, and public behaviour.", href: "/training" }
        : { title: "Dog Leash Laws", description: "Check lead control and public-space responsibilities.", href: "/laws/dog-leash-laws-south-africa" },
    ];
  }

  return [
    localHub,
    serviceLink(city, "daycare"),
    { title: `${city.name} Dog Cost Guide`, description: "Plan holiday care alongside travel and emergency costs.", href: `/local-costs/${city.slug}/monthly-dog-costs-${city.slug}` },
    useCoastalJourney
      ? { title: "Dog-Friendly Travel Checklist", description: "Prepare water, records, rules, heat, and emergency steps.", href: "/tools/dog-friendly-travel-checklist" }
      : { title: "Pet-Friendly Accommodation", description: "Check stay rules, access, safety, and current pet policies.", href: "/dog-friendly/pet-friendly-accommodation-south-africa" },
  ];
}

function generalServiceNote(city: (typeof localCities)[number]) {
  return [
    `Dog services in ${city.name} can vary by suburb, provider experience, transport, availability, dog size, behaviour, health needs, season, and what is included.`,
    "Verified local options appear where reliable source details are available. If a page has no shortlist, use its questions and checklist when contacting providers directly.",
    city.localContext,
  ];
}

function costFactorSection(serviceLabel: string) {
  return {
    heading: "Cost factors to ask about",
    body: [
      `Dog Haven does not publish fake prices for ${serviceLabel}. Ask providers for current written quotes and check exactly what is included before you book.`,
    ],
    table: {
      headers: ["Cost factor", "Why it can change the quote"],
      rows: [
        ["Dog size and age", "Large dogs, puppies, seniors, and medically fragile dogs may need more handling, space, supervision, or time."],
        ["Behaviour and training needs", "Anxious, reactive, escape-prone, or under-socialised dogs may need quieter care, solo attention, or a trial plan."],
        ["Transport and distance", "Pick-up, drop-off, travel, parking, and peak traffic can affect availability and pricing."],
        ["Season and demand", "December, school holidays, long weekends, and public holidays can book up early."],
        ["Included services", "Food, medication handling, updates, walks, grooming, playtime, overnight care, or extra visits may be priced differently."],
      ],
    },
  };
}

function verificationQuickFacts(serviceLabel: string) {
  return [
    `Dog Haven treats ${serviceLabel} pages as planning guides unless verified provider options are shown on the page.`,
    "Do not rely on social media claims, photos, or reviews alone. Verify the provider directly before booking.",
    "Ask about vaccination records, emergency vet plans, supervision, insurance or responsibility, and what happens if your dog becomes ill or stressed.",
    "Avoid providers who pressure you to pay before answering safety, handling, and emergency questions.",
  ];
}

function serviceNextStepSection(city: (typeof localCities)[number], service: DogService) {
  if (service.key === "boarding") {
    return {
      heading: "Next steps before a boarding stay",
      body: [
        `Before boarding in ${city.name}, connect the kennel conversation to health records, temperament, cost, and an emergency decision plan.`,
      ],
      checklist: [
        "Ask your vet which vaccination and parasite-prevention records are sensible for boarding.",
        "Read the city cost guide so you can plan boarding alongside food, grooming, transport, and emergency savings.",
        "Prepare written feeding, medication, anxiety, escape-risk, and emergency contact notes.",
        "Consider a short trial stay if your dog is anxious, senior, young, or new to boarding.",
      ],
    };
  }

  if (service.key === "daycare") {
    return {
      heading: "Next steps before daycare",
      body: [
        `Daycare in ${city.name} should be matched to temperament, rest needs, health records, heat risk, and how well the provider manages groups.`,
      ],
      checklist: [
        "Ask how new dogs are assessed before group play.",
        "Read the training hub if daycare reveals poor recall, over-arousal, leash frustration, or anxiety.",
        "Check vaccination, parasite-prevention, coughing, diarrhoea, and illness policies before the first day.",
        "Watch your dog after daycare for limping, exhaustion, stress, vomiting, diarrhoea, or reluctance to return.",
      ],
    };
  }

  if (service.key === "pet-sitters") {
    return {
      heading: "Next steps before giving home access",
      body: [
        `Pet sitting in ${city.name} depends on trust, but trust should still be supported by written instructions, references, key handling, and an emergency plan.`,
      ],
      checklist: [
        "Write feeding, medication, gate, alarm, access, update, and restricted-area instructions.",
        "Use the vet visit checklist to collect medication, allergy, microchip, and emergency notes.",
        "Agree what happens if the sitter is delayed, ill, locked out, or unable to continue.",
        "Decide who can approve vet care if you cannot be reached.",
      ],
    };
  }

  if (service.key === "dog-walkers") {
    return {
      heading: "Next steps before the first walk",
      body: [
        `Dog walking in ${city.name} should be planned around heat, route safety, lead control, escape risk, public-space rules, and whether group walks suit the dog.`,
      ],
      checklist: [
        "Agree solo or group walks, lead equipment, transport, route rules, and off-lead boundaries in writing.",
        "Read the dog-friendly local guide before walks in parks, promenades, beaches, or shared public spaces.",
        "Use training support if pulling, lunging, fear, recall, or reactivity makes walks risky.",
        "Ask how walks change during heat, storms, traffic, illness, or public holidays.",
      ],
    };
  }

  return {
    heading: "Next steps before holiday care",
    body: [
      `Holiday dog care in ${city.name} is safer when the care option, budget, records, heat planning, and travel rules are settled before peak periods.`,
    ],
    checklist: [
      "Compare boarding, pet sitting, family care, and dog-friendly travel against your dog's temperament.",
      "Use the dog-friendly travel checklist if your dog is travelling with you.",
      "Use local cost guides to budget for care, transport, emergency savings, and holiday surcharges.",
      "Confirm vaccination records, feeding notes, medication, emergency contacts, and cancellation rules in writing.",
    ],
  };
}

function boardingGuide(city: (typeof localCities)[number], service: DogService): GuideContent {
  return {
    slug: `${service.slugPrefix}-${city.slug}`,
    path: pathFor(city, service),
    hubTitle: "Dog Services",
    hubPath: "/dog-services",
    title: titleFor(city, service),
    seoTitle: seoTitleFor(city, service),
    description: `A practical ${city.name} dog boarding and kennel guide covering vaccination checks, hygiene, sleeping arrangements, exercise, feeding, emergency planning, trial stays, and questions to ask.`,
    intro: `Choose dog boarding kennels in ${city.name} by checking safety, hygiene, supervision, emergency plans and how the setup suits your dog's temperament. Visit where possible and confirm current details before a holiday, work trip, hospital stay or home renovation.`,
    updated: reviewed,
    quickFacts: verificationQuickFacts("boarding kennel"),
    sections: [
      {
        heading: `Boarding context in ${city.name}`,
        body: generalServiceNote(city),
      },
      {
        heading: "What to check before booking a kennel",
        body: ["A kennel should be willing to explain how dogs are housed, exercised, fed, monitored, and helped if stress or illness appears."],
        checklist: [
          "Ask which vaccinations and parasite prevention records are required.",
          "Ask how sleeping areas are cleaned, ventilated, and separated.",
          "Ask whether dogs are housed individually, paired, or grouped, and how compatibility is decided.",
          "Ask how exercise, toileting, enrichment, and rest are scheduled.",
          "Ask how your dog's food, medication, allergies, and feeding notes will be recorded.",
          "Ask which vet or emergency plan is used if your dog becomes ill.",
          "Ask whether a short trial stay is possible for anxious dogs or first-time boarders.",
        ],
      },
      {
        heading: "Warning signs to avoid",
        body: ["A provider does not need glossy marketing to be safe, but they should be clear, calm, and willing to answer practical questions."],
        bullets: [
          "No vaccination or health questions before accepting dogs.",
          "No clear sleeping, cleaning, feeding, or supervision routine.",
          "No emergency contact or vet plan.",
          "Pressure to pay without a visit, call, or written booking details.",
          "Dismissal of separation anxiety, medication, senior-dog needs, or behaviour concerns.",
        ],
      },
      {
        heading: "What to prepare for boarding",
        body: ["Written notes reduce mistakes, especially during busy holiday periods."],
        checklist: [
          "Vaccination record and microchip or ID information.",
          "Your vet's details and an emergency contact who can make decisions if you are unreachable.",
          "Food packed clearly with feeding instructions.",
          "Medication instructions from your vet, if relevant.",
          "Notes on anxiety, escape risk, resource guarding, noise sensitivity, or special routines.",
          "A familiar blanket or safe comfort item if the provider allows it.",
        ],
      },
      costFactorSection("dog boarding kennels"),
      {
        heading: "Links that help you plan",
        body: ["Boarding is easier when health records, budget, and emergency plans are ready before you need them."],
        bullets: [
          "Use the puppy and vaccination guides if your dog is young or records are incomplete.",
          "Use the vet visit checklist to write down medication and health notes.",
          "Use city cost guides to understand local budget factors without fake price lists.",
        ],
      },
      serviceNextStepSection(city, service),
    ],
    faqs: [
      {
        question: `Does Dog Haven list verified boarding kennels in ${city.name}?`,
        answer:
          "Confirm kennel services, prices, availability, health requirements, and suitability directly before booking.",
      },
      {
        question: "Should kennels ask for vaccination records?",
        answer:
          "Responsible providers usually ask about vaccinations and health status. Ask your vet which records are appropriate for your dog's age and risk.",
      },
      {
        question: "Is a trial stay useful?",
        answer:
          "It can be helpful for anxious dogs, first-time boarders, puppies, seniors, and dogs with separation concerns, if the provider offers it safely.",
      },
    ],
    related: relatedFor(city, service),
    sources: sourceList(city),
  };
}

function daycareGuide(city: (typeof localCities)[number], service: DogService): GuideContent {
  return {
    slug: `${service.slugPrefix}-${city.slug}`,
    path: pathFor(city, service),
    hubTitle: "Dog Services",
    hubPath: "/dog-services",
    title: titleFor(city, service),
    seoTitle: seoTitleFor(city, service),
    description: `A practical ${city.name} dog daycare guide covering temperament, staff supervision, group sizes, vaccination checks, introductions, heat, water, rest, and over-arousal warning signs.`,
    intro: `Dog daycare in ${city.name} can suit sociable dogs that cope well in groups, but it is stressful for others. Check supervision, group management, rest routines, trial procedures and safety before booking.`,
    updated: reviewed,
    quickFacts: verificationQuickFacts("dog daycare"),
    sections: [
      {
        heading: `Daycare context in ${city.name}`,
        body: generalServiceNote(city),
      },
      {
        heading: "Is daycare a good fit for your dog?",
        body: ["The right answer depends on temperament, age, health, play style, social confidence, and whether the daycare has enough structure."],
        table: {
          headers: ["Dog factor", "What to consider"],
          rows: [
            ["Social temperament", "Some dogs love structured play; others find group settings overwhelming or stressful."],
            ["Age and stamina", "Puppies, seniors, and short-nosed breeds may need careful rest and heat management."],
            ["Training basics", "Recall, handling, and calm lead manners help staff manage safe transitions."],
            ["Health records", "Ask what vaccination, parasite, illness, and coughing policies are used."],
            ["Arousal level", "Constant play without rest can make some dogs frantic, pushy, or exhausted."],
          ],
        },
      },
      {
        heading: "Questions to ask daycare providers",
        body: ["Good daycare should be able to explain how they prevent stress and conflict, not only how dogs play."],
        checklist: [
          "How are new dogs assessed and introduced?",
          "How many dogs are in each group, and how many staff supervise them?",
          "Are dogs grouped by size, age, play style, or temperament?",
          "How are rest periods, water breaks, heat, and shade managed?",
          "What happens if a dog is bullied, over-aroused, frightened, or too tired?",
          "What vaccination and illness policies are required?",
          "Can owners receive updates about behaviour, not only photos?",
        ],
      },
      {
        heading: "Warning signs to avoid",
        body: ["Busy play is not the same as safe play."],
        bullets: [
          "No assessment before group play.",
          "Very large groups with unclear supervision.",
          "No rest periods or quiet spaces.",
          "Dismissing stress signals, bullying, mounting, chasing, or repeated conflict as normal fun.",
          "No clear illness, vaccination, injury, or emergency plan.",
        ],
      },
      costFactorSection("dog daycare"),
      {
        heading: "Before your first daycare day",
        body: ["Prepare your dog and your paperwork before testing a new environment."],
        checklist: [
          "Check vaccination and parasite prevention records with your vet.",
          "Tell the provider about fear, guarding, escape risk, heat sensitivity, or past incidents.",
          "Start with a short trial if offered.",
          "Watch your dog after daycare for exhaustion, limping, coughing, vomiting, diarrhoea, or behaviour changes.",
          "Use training support if daycare reveals over-arousal, poor recall, or leash frustration.",
        ],
      },
      serviceNextStepSection(city, service),
    ],
    faqs: [
      {
        question: `Does Dog Haven list verified dog daycare providers in ${city.name}?`,
        answer:
          "Confirm daycare services, supervision, prices, availability, and suitability directly before booking.",
      },
      {
        question: "Is daycare good for every dog?",
        answer:
          "No. Some dogs do better with calm walks, enrichment at home, a sitter, or structured training instead of group daycare.",
      },
      {
        question: "What should I watch for after daycare?",
        answer:
          "Watch for limping, coughing, vomiting, diarrhoea, extreme tiredness, stress behaviours, or reluctance to return. Contact a vet for health concerns.",
      },
    ],
    related: relatedFor(city, service),
    sources: sourceList(city),
  };
}

function sitterGuide(city: (typeof localCities)[number], service: DogService): GuideContent {
  return {
    slug: `${service.slugPrefix}-${city.slug}`,
    path: pathFor(city, service),
    hubTitle: "Dog Services",
    hubPath: "/dog-services",
    title: titleFor(city, service),
    seoTitle: seoTitleFor(city, service),
    description: `A practical ${city.name} pet sitter guide covering home visits, overnight sitting, references, written care notes, keys, updates, emergency contacts, and questions before booking.`,
    intro: `A pet sitter in ${city.name} can keep your dog in familiar surroundings, but the arrangement depends on trust and careful instructions. Check references, agree on key handover, write down the routine, and provide emergency contacts.`,
    updated: reviewed,
    quickFacts: verificationQuickFacts("pet sitter"),
    sections: [
      {
        heading: `Pet sitting context in ${city.name}`,
        body: generalServiceNote(city),
      },
      {
        heading: "Home visits vs overnight sitting",
        body: ["Choose the format around your dog's routine, confidence, toilet needs, medication, and how long they cope alone."],
        table: {
          headers: ["Care format", "Questions to ask"],
          rows: [
            ["Home visits", "How long is each visit, what tasks are included, and what happens if traffic delays the sitter?"],
            ["Overnight sitting", "Where will the sitter sleep, what home access is needed, and what security rules apply?"],
            ["House sitting", "Which home duties are included and which are outside the agreement?"],
            ["Family or friend care", "Do they understand feeding, medication, gates, walks, heat, and emergency decisions?"],
          ],
        },
      },
      {
        heading: "Questions to ask before booking",
        body: ["A good pet sitting arrangement should be written down clearly so the dog, home, and sitter are protected."],
        checklist: [
          "Can you provide references or a clear experience history?",
          "Will you meet the dog before the booking?",
          "How do you handle keys, alarm codes, gate access, and home security?",
          "Will you send updates and photos, and how often?",
          "What happens if you become ill, delayed, or unable to attend?",
          "What is your plan if my dog escapes, gets sick, refuses food, or has diarrhoea?",
          "Do you understand medication notes, feeding instructions, and restricted areas?",
        ],
      },
      {
        heading: "Warning signs to avoid",
        body: ["Pet sitting relies on trust. Slow down if answers feel vague."],
        bullets: [
          "No meet-and-greet before the first booking.",
          "No written care plan or emergency contact process.",
          "No clear key, access, or security handling.",
          "Pressure for payment before basic verification.",
          "Dismissal of medication, anxiety, escape risk, or feeding instructions.",
        ],
      },
      costFactorSection("pet sitting"),
      {
        heading: "Care notes to prepare",
        body: ["Write the instructions as if someone is caring for your dog on a difficult day, not only an easy day."],
        checklist: [
          "Feeding amounts, food location, treat limits, and water routine.",
          "Medication instructions from your vet, if relevant.",
          "Toilet routine, walking rules, gate rules, and areas to avoid.",
          "Emergency contact, vet details, microchip or ID details, and transport plan.",
          "Home security steps, key handover plan, and update expectations.",
        ],
      },
      serviceNextStepSection(city, service),
    ],
    faqs: [
      {
        question: `Does Dog Haven list verified pet sitters in ${city.name}?`,
        answer:
          "Confirm sitter services, references, prices, availability, and suitability directly before booking.",
      },
      {
        question: "Is a pet sitter better than boarding?",
        answer:
          "It depends on the dog, home, sitter, trip length, safety, and supervision needs. Some dogs cope better at home, while others need structured boarding.",
      },
      {
        question: "Should I leave written instructions?",
        answer:
          "Yes. Written notes reduce mistakes around food, medication, keys, gates, vet contacts, walks, and updates.",
      },
    ],
    related: relatedFor(city, service),
    sources: sourceList(city),
  };
}

function walkerGuide(city: (typeof localCities)[number], service: DogService): GuideContent {
  return {
    slug: `${service.slugPrefix}-${city.slug}`,
    path: pathFor(city, service),
    hubTitle: "Dog Services",
    hubPath: "/dog-services",
    title: titleFor(city, service),
    seoTitle: seoTitleFor(city, service),
    description: `A practical ${city.name} dog walker guide covering leash safety, solo vs group walks, heat precautions, transport, recall, escape risk, responsibility questions, and local public-space rules.`,
    intro: `A dog walker in ${city.name} should be able to explain control, heat precautions, transport, group size and local rules. Ask how they handle escapes, conflict, illness and sudden weather before booking.`,
    updated: reviewed,
    quickFacts: verificationQuickFacts("dog walker"),
    sections: [
      {
        heading: `Dog walking context in ${city.name}`,
        body: generalServiceNote(city),
      },
      {
        heading: "Solo walks vs group walks",
        body: ["The safest format depends on your dog's training, social skills, health, age, size, and escape risk."],
        table: {
          headers: ["Walk type", "What to check"],
          rows: [
            ["Solo walk", "Useful for anxious, reactive, senior, young, or training-focused dogs who need individual handling."],
            ["Small group walk", "Can suit social dogs if dogs are matched carefully and the walker can manage every lead safely."],
            ["Transported walks", "Ask how dogs are secured in vehicles, separated if needed, and protected from heat."],
            ["Off-lead outings", "Avoid unless the area allows it, recall is reliable, and responsibility is clearly agreed in writing."],
          ],
        },
      },
      {
        heading: "Questions to ask a dog walker",
        body: ["A walker should be able to explain what happens when something goes wrong, not only where they like to walk."],
        checklist: [
          "How many dogs do you walk at once?",
          "Do you use a harness, collar, double lead, long line, or other handling plan?",
          "How do you prevent escapes at gates, car doors, parks, and busy roads?",
          "What is your heat, water, shade, and hot-pavement policy?",
          "Do you transport dogs, and how are they secured?",
          "What public-space rules do you check before walking dogs?",
          "What happens if my dog is injured, bitten, lost, overheated, or becomes unwell?",
        ],
      },
      {
        heading: "Warning signs to avoid",
        body: ["Dog walking should reduce stress, not create preventable risks."],
        bullets: [
          "Unclear group size or no matching by temperament.",
          "Casual off-lead walking without rule checks or recall proof.",
          "No heat precautions in summer.",
          "No escape, injury, bite, or emergency plan.",
          "Dismissing leash pulling, reactivity, fear, or poor recall as unimportant.",
        ],
      },
      costFactorSection("dog walking"),
      {
        heading: "Before the first walk",
        body: ["Set expectations clearly so your dog is handled the same way every time."],
        checklist: [
          "Share your dog's training level, triggers, recall, reactivity, and escape risks.",
          "Provide the correct harness, lead, ID tag, and rules for gates or cars.",
          "Agree whether treats are allowed and what cues the walker should use.",
          "Check current local public-space rules before off-lead or shared-space walking.",
          "Ask for a short first walk or meet-and-greet if your dog is nervous.",
        ],
      },
      serviceNextStepSection(city, service),
    ],
    faqs: [
      {
        question: `Does Dog Haven list verified dog walkers in ${city.name}?`,
        answer:
          "Confirm walker services, safety routines, prices, availability, and suitability directly before booking.",
      },
      {
        question: "Are group walks safe?",
        answer:
          "They can be safe for some dogs when groups are small, matched carefully, supervised well, and managed under local rules. They are not ideal for every dog.",
      },
      {
        question: "Should my dog be walked in hot weather?",
        answer:
          "Heat can be dangerous. Ask walkers about shade, water, timing, hot pavements, shorter walks, and when walks are cancelled or changed.",
      },
    ],
    related: relatedFor(city, service),
    sources: sourceList(city),
  };
}

function holidayGuide(city: (typeof localCities)[number], service: DogService): GuideContent {
  return {
    slug: `${service.slugPrefix}-${city.slug}`,
    path: pathFor(city, service),
    hubTitle: "Dog Services",
    hubPath: "/dog-services",
    title: titleFor(city, service),
    seoTitle: seoTitleFor(city, service),
    description: `A practical ${city.name} holiday dog care guide covering December planning, boarding vs sitters, vaccination records, emergency vet details, food, medication, travel rules, and heat precautions.`,
    intro: `Holiday dog care in ${city.name} books up quickly around December, school holidays and long weekends. Compare boarding, sitters, trusted family care and dog-friendly travel early, then verify availability and requirements directly.`,
    updated: reviewed,
    quickFacts: verificationQuickFacts("holiday dog care"),
    sections: [
      {
        heading: `Holiday care context in ${city.name}`,
        body: generalServiceNote(city),
      },
      {
        heading: "Compare your holiday care options",
        body: ["The right option depends on your dog's health, behaviour, routine, travel distance, supervision needs, and how early you can book."],
        table: {
          headers: ["Option", "What to check"],
          rows: [
            ["Boarding kennels", "Vaccination records, sleeping areas, exercise, feeding notes, medication, trial stays, and emergency vet plan."],
            ["Pet sitter", "References, home access, updates, overnight or visit schedule, key security, and emergency contacts."],
            ["Family or friend care", "Experience, secure gates, other pets, children, food instructions, medication, and vet authority."],
            ["Dog-friendly travel", "Accommodation rules, travel safety, heat, parasite prevention, public-space rules, and emergency vet planning."],
          ],
        },
      },
      {
        heading: "Holiday booking checklist",
        body: ["Start early for December, school holidays, Easter, long weekends, and periods when many owners travel."],
        checklist: [
          "Confirm dates, drop-off and collection times, cancellation rules, and payment terms in writing.",
          "Update vaccination records and parasite prevention before the stay.",
          "Pack food, medication, ID, vet details, emergency contacts, and comfort items if allowed.",
          "Write feeding, medication, anxiety, escape-risk, and behaviour notes clearly.",
          "Check heat precautions, especially for summer holidays and coastal travel.",
          "Confirm who can make vet decisions if you are unreachable.",
          "Check municipal, accommodation, park, and beach rules if travelling with your dog.",
        ],
      },
      {
        heading: "Warning signs to avoid",
        body: ["Holiday pressure makes rushed choices tempting. Slow down if safety questions are brushed aside."],
        bullets: [
          "No written booking details or emergency plan.",
          "No vaccination, illness, or parasite questions.",
          "Unclear supervision or sleeping arrangements.",
          "No key or home security process for sitters.",
          "Promises that every dog will be fine without asking about temperament, age, health, or anxiety.",
        ],
      },
      costFactorSection("holiday dog care"),
      {
        heading: "What to prepare before you leave",
        body: ["Good preparation helps the person caring for your dog act faster if something changes."],
        checklist: [
          "Vet details, emergency clinic plan, microchip or ID information, and a decision-making contact.",
          "Enough food for the stay plus extra for delays.",
          "Medication packed with vet instructions, if relevant.",
          "Written notes on routines, fears, triggers, toilet habits, and restricted foods.",
          "Travel checklist if your dog is coming with you.",
        ],
      },
      serviceNextStepSection(city, service),
    ],
    faqs: [
      {
        question: `Does Dog Haven list verified holiday dog care providers in ${city.name}?`,
        answer:
          "Confirm kennels, sitters, walkers, travel rules, prices, and availability directly before booking.",
      },
      {
        question: "When should I book holiday dog care?",
        answer:
          "Start as early as practical for December, school holidays, public holidays, and long weekends because responsible providers can book up.",
      },
      {
        question: "Should I travel with my dog instead?",
        answer:
          "Only if the dog is suited to travel and the accommodation, transport, weather, rules, and emergency plan are suitable.",
      },
    ],
    related: relatedFor(city, service),
    sources: sourceList(city),
  };
}

function guideFor(city: (typeof localCities)[number], service: DogService): GuideContent {
  if (service.key === "boarding") return boardingGuide(city, service);
  if (service.key === "daycare") return daycareGuide(city, service);
  if (service.key === "pet-sitters") return sitterGuide(city, service);
  if (service.key === "dog-walkers") return walkerGuide(city, service);
  return holidayGuide(city, service);
}

export const phase19DogServiceGuidePages: GuideContent[] = localCities.flatMap((city) =>
  dogServices.map((service) => guideFor(city, service)),
);

export const dogServicesHub: HubContent = {
  slug: "dog-services",
  path: "/dog-services",
  title: "Dog Services in South Africa",
  seoTitle: "Dog Services South Africa | Boarding, Daycare, Sitters and Walkers",
  description:
    "South African dog service planning guides for boarding kennels, dog daycare, pet sitters, dog walkers, and holiday dog care in major cities.",
  kicker: "Dog service guides",
  intro:
    "Dog Haven dog service guides help South African owners choose boarding, daycare, pet sitting, dog walking, and holiday care more safely. Provider shortlists appear only where options can be checked against identifiable public or official sources.",
  cards: [
    ...localCities.map((city) => ({
      title: `${city.name} Dog Services`,
      description: `Boarding, daycare, pet sitting, dog walking, and holiday dog care planning for ${city.name}.`,
      href: `/dog-services/${city.slug}/dog-boarding-kennels-${city.slug}`,
    })),
    ...dogServices.map((service) => ({
      title: service.titleLabel,
      description: service.cardDescription,
      href: pathFor(defaultServiceCity, service),
    })),
  ],
  related: [
    { title: "Local Guides", description: "City guides for grooming, training, emergency vet preparation, and dog-friendly checks.", href: "/local" },
    { title: "Local Cost Guides", description: "City cost guides for grooming, training, emergency care, and monthly dog budgets.", href: "/local-costs" },
    { title: "City Guides", description: "Local daily dog ownership context by city.", href: "/city" },
    { title: "Province Guides", description: "Province-level dog care context.", href: "/province" },
    { title: "Dog Cost Calculator", description: "Estimate monthly dog costs without sharing personal information.", href: "/tools/dog-cost-calculator" },
    { title: "Dog-Friendly Travel Checklist", description: "Plan trips, stays, rules, and emergency steps.", href: "/tools/dog-friendly-travel-checklist" },
  ],
  faqs: [
    {
      question: "Does Dog Haven list verified dog service providers?",
      answer:
        "Selected dog service pages show manually researched provider options where reliable source details are available. They are starting points, not rankings or endorsements, and owners should confirm every provider directly before booking.",
    },
    {
      question: "Why are there no provider prices or rankings?",
      answer:
        "Prices, availability, service quality, and rules change by provider and suburb. Use the provider section, written quotes, and direct checks instead of relying on old or unsourced information.",
    },
    {
      question: "What should I verify before booking dog care?",
      answer:
        "Check vaccination requirements, supervision, emergency vet plans, written instructions, costs, cancellation rules, references, and how the provider handles stress, illness, escape risk, and heat.",
    },
  ],
};

export const phase19LocalCards: CardLink[] = [
  {
    title: "Dog Services",
    description: "City planning guides for boarding kennels, daycare, pet sitters, dog walkers, and holiday care.",
    href: "/dog-services",
  },
];

export const phase19LocalCostCards: CardLink[] = [
  {
    title: "Dog Services",
    description: "Plan boarding, daycare, sitting, walking, and holiday care alongside city cost guides.",
    href: "/dog-services",
  },
];

export const phase19ToolsCards: CardLink[] = [
  {
    title: "Dog Services",
    description: "Use Dog Haven tools to prepare instructions, vet notes, travel checks, and cost planning before booking care.",
    href: "/dog-services",
  },
  {
    title: "Cape Town Holiday Dog Care",
    description: "Plan boarding, sitters, family care, and dog-friendly travel before peak holidays.",
    href: "/dog-services/cape-town/holiday-dog-care-cape-town",
  },
];

export const phase19TrainingCards: CardLink[] = [
  {
    title: "Dog Daycare Guides",
    description: "Check supervision, temperament, safe introductions, rest, heat, and over-arousal before booking daycare.",
    href: "/dog-services/cape-town/dog-daycare-cape-town",
  },
  {
    title: "Dog Walker Guides",
    description: "Ask about leash safety, solo vs group walks, heat, transport, escape risk, and public-space rules.",
    href: "/dog-services/johannesburg/dog-walkers-johannesburg",
  },
];

export const phase19PuppyCards: CardLink[] = [
  {
    title: "Boarding and Kennel Safety",
    description: "Questions about vaccines, hygiene, sleeping areas, trial stays, and emergency plans before booking care.",
    href: "/dog-services/cape-town/dog-boarding-kennels-cape-town",
  },
  {
    title: "Dog Daycare Safety",
    description: "How to think about social temperament, rest periods, safe introductions, and vaccination checks.",
    href: "/dog-services/pretoria/dog-daycare-pretoria",
  },
  {
    title: "Pet Sitter Checks",
    description: "Home visits, overnight sitting, references, keys, care notes, and emergency contacts.",
    href: "/dog-services/durban/pet-sitters-durban",
  },
];

export const phase19DogFriendlyCards: CardLink[] = [
  {
    title: "Dog Walker Guides",
    description: "Leash safety, public-space rules, heat precautions, solo vs group walks, and escape risk checks.",
    href: "/dog-services/pretoria/dog-walkers-pretoria",
  },
  {
    title: "Pet Sitter Guides",
    description: "Plan home care, updates, keys, security, vet contacts, and written instructions.",
    href: "/dog-services/johannesburg/pet-sitters-johannesburg",
  },
  {
    title: "Holiday Dog Care",
    description: "Plan December, school holidays, boarding, sitters, family care, and travel checks.",
    href: "/dog-services/durban/holiday-dog-care-durban",
  },
];

export const phase19CostCards: CardLink[] = [
  {
    title: "Dog Services",
    description: "Budget for boarding, daycare, pet sitting, dog walking, and holiday care without fake price lists.",
    href: "/dog-services",
  },
  {
    title: "Holiday Dog Care Planning",
    description: "Understand booking, food, medication, records, and cost factors before busy travel periods.",
    href: "/dog-services/cape-town/holiday-dog-care-cape-town",
  },
];

export function getPhase19DogServiceGuide(citySlug: string, guideSlug: string) {
  return phase19DogServiceGuidePages.find((guide) => guide.path === `/dog-services/${citySlug}/${guideSlug}`);
}

