import type { CardLink, GuideContent, HubContent, Source } from "@/lib/content";

const reviewed = "2026-05-17";

type LocalCity = {
  slug: string;
  name: string;
  province: string;
  provinceSlug: string;
  localContext: string;
  groomingNote: string;
  trainingNote: string;
  emergencyNote: string;
  dogFriendlyNote: string;
  source: Source;
};

type LocalServiceKey = "grooming" | "training" | "emergency-vets" | "dog-friendly";

type LocalService = {
  key: LocalServiceKey;
  slugPrefix: string;
  hubTitle: string;
  serviceTitle: string;
  seoLabel: string;
  cardDescription: string;
};

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

export const localCities: LocalCity[] = [
  {
    slug: "cape-town",
    name: "Cape Town",
    province: "Western Cape",
    provinceSlug: "western-cape",
    localContext:
      "Cape Town dog owners often balance apartments, windy suburbs, mountain-edge walks, beaches, summer heat, winter rain, and changing public-space rules. Dogs may move between dense neighbourhoods, coastal outings, and weekend travel, so owners need clear vet, grooming, training, and rule-check routines.",
    groomingNote:
      "Sand, wind, winter rain, long coats, beach outings, and seasonal shedding can make regular brushing, paw checks, ear drying, and tick checks especially useful.",
    trainingNote:
      "Lead manners, recall foundations, calm cafe or promenade behaviour, and reliable control around cyclists, runners, children, and other dogs are especially useful in Cape Town's shared spaces.",
    emergencyNote:
      "Traffic, mountain or beach outings, heat, poisoning risks, snake encounters, and after-hours access all make advance emergency planning important.",
    dogFriendlyNote:
      "Beach, trail, park, accommodation, and venue rules can change by area and season, so owners should check official or venue rules before every outing.",
    source: {
      label: "City of Cape Town",
      href: "https://www.capetown.gov.za/",
      note: "Official municipal starting point for current public-space, beach, park, and by-law information.",
    },
  },
  {
    slug: "johannesburg",
    name: "Johannesburg",
    province: "Gauteng",
    provinceSlug: "gauteng",
    localContext:
      "Johannesburg dog ownership is shaped by traffic, security gates, townhouse living, dense suburbs, summer storms, hot pavements, and busy work routines. Good local planning helps dogs cope with visitors, neighbours, public walks, grooming trips, and vet access.",
    groomingNote:
      "Dry Highveld weather, dust, grass seeds, ticks after parks or kennels, and seasonal shedding can affect coats, ears, paws, and skin.",
    trainingNote:
      "Johannesburg dogs often need calm gate routines, lead manners near traffic, barking management for close neighbours, and confidence around domestic workers, visitors, runners, and cyclists.",
    emergencyNote:
      "Traffic delays can make emergency transport slower, so owners should save after-hours options and know how they would move a large or injured dog.",
    dogFriendlyNote:
      "Parks, estates, cafes, and accommodation may each have different pet rules. Owners should confirm current rules before arriving with a dog.",
    source: {
      label: "City of Johannesburg",
      href: "https://www.joburg.org.za/",
      note: "Official municipal starting point for current public-space, park, and by-law information.",
    },
  },
  {
    slug: "pretoria",
    name: "Pretoria",
    province: "Gauteng",
    provinceSlug: "gauteng",
    localContext:
      "Pretoria dog owners often manage hot summers, jacaranda-lined suburbs, estates, townhouses, traffic corridors, and garden-based routines. Dogs still need structured walks, training, grooming checks, and emergency planning even when they have yard space.",
    groomingNote:
      "Heat, dust, garden exposure, ticks, and grass seeds make coat, paw, ear, and skin checks useful after walks or garden play.",
    trainingNote:
      "Polite lead walking, barking control, recall practice, and safe behaviour around gates, school runs, cyclists, and other dogs are common Pretoria priorities.",
    emergencyNote:
      "Summer heat, traffic, poisoning concerns, snake encounters, and after-hours planning should be considered before a crisis happens.",
    dogFriendlyNote:
      "Estate, park, restaurant, accommodation, and municipal rules can differ. Owners should verify rules directly and keep dogs controlled in shared areas.",
    source: {
      label: "City of Tshwane",
      href: "https://www.tshwane.gov.za/",
      note: "Official municipal starting point for Pretoria public-space, park, and local by-law information.",
    },
  },
  {
    slug: "durban",
    name: "Durban",
    province: "KwaZulu-Natal",
    provinceSlug: "kwazulu-natal",
    localContext:
      "Durban dog care is strongly shaped by humidity, beaches, warm weather, holiday crowds, coastal skin and ear concerns, ticks, and busy roads. Owners need routines that suit both daily suburban life and coastal outings.",
    groomingNote:
      "Humidity, beach sand, swimming, ticks, fleas, and ear moisture can make coat care, drying, parasite prevention, and skin checks especially important.",
    trainingNote:
      "Dogs benefit from calm lead walking near promenades, polite public behaviour, recall foundations, and confidence around crowds, children, and other dogs.",
    emergencyNote:
      "Heat stress, poisoning, snake encounters, beach injuries, vomiting, and after-hours care are worth planning for before peak-season outings.",
    dogFriendlyNote:
      "Beach and promenade rules can change by area and season. Accommodation and venues may also have strict pet policies, so owners should check before visiting.",
    source: {
      label: "eThekwini Municipality",
      href: "https://www.durban.gov.za/",
      note: "Official municipal starting point for Durban beach, park, public-space, and by-law information.",
    },
  },
  {
    slug: "gqeberha",
    name: "Gqeberha",
    province: "Eastern Cape",
    provinceSlug: "eastern-cape",
    localContext:
      "Gqeberha dog owners often deal with coastal wind, beaches, suburban gardens, traffic, rural trips, and changing public-space rules. Dogs may need both beach etiquette and practical everyday training for neighbourhood life.",
    groomingNote:
      "Wind, sand, swimming, grass, ticks, and seasonal shedding can affect coats, ears, paws, and skin, especially after beach or long-grass outings.",
    trainingNote:
      "Lead manners, recall foundations, calm behaviour around children and other dogs, and reliable control near roads or beaches are useful local priorities.",
    emergencyNote:
      "Beach injuries, poisoning, vomiting, snake encounters, traffic accidents, and after-hours access should be planned for before they happen.",
    dogFriendlyNote:
      "Beach, park, accommodation, and venue rules should be checked directly because access can vary by area and change over time.",
    source: {
      label: "Nelson Mandela Bay Municipality",
      href: "https://www.nelsonmandelabay.gov.za/",
      note: "Official municipal starting point for local public-space, beach, and by-law information.",
    },
  },
  {
    slug: "bloemfontein",
    name: "Bloemfontein",
    province: "Free State",
    provinceSlug: "free-state",
    localContext:
      "Bloemfontein dog ownership is shaped by dry summers, cold winter mornings, gardens, traffic, dusty walks, storm noise, and longer travel planning for some services. Practical preparation matters more than trendy dog-care choices.",
    groomingNote:
      "Dust, dry grass, ticks, winter coats, cracked paws, and seasonal shedding can make brushing, nail checks, paw care, and parasite prevention useful.",
    trainingNote:
      "Dogs often need calm visitor routines, lead manners, barking management for neighbours, recall foundations, and confidence around traffic, children, and other dogs.",
    emergencyNote:
      "Heat, snake encounters, poisoning, injuries, and after-hours planning should be considered, especially if a dog is large, elderly, or difficult to transport.",
    dogFriendlyNote:
      "Public-space, estate, accommodation, and venue rules can differ. Owners should verify rules directly before assuming dogs are welcome.",
    source: {
      label: "Mangaung Metropolitan Municipality",
      href: "https://www.mangaung.co.za/",
      note: "Official municipal starting point for Bloemfontein public-space and local by-law information.",
    },
  },
];

export const localServices: LocalService[] = [
  {
    key: "grooming",
    slugPrefix: "dog-grooming",
    hubTitle: "Dog Grooming",
    serviceTitle: "Dog Grooming",
    seoLabel: "dog grooming",
    cardDescription: "How to choose a groomer safely, compare mobile and parlour options, and plan coat care.",
  },
  {
    key: "training",
    slugPrefix: "dog-training",
    hubTitle: "Dog Training",
    serviceTitle: "Dog Training",
    seoLabel: "dog training",
    cardDescription: "How to choose humane trainers for puppy classes, lead manners, barking, recall, and adult dogs.",
  },
  {
    key: "emergency-vets",
    slugPrefix: "emergency-vets",
    hubTitle: "Emergency Vet Preparation",
    serviceTitle: "Emergency Vets",
    seoLabel: "emergency vets",
    cardDescription: "How to prepare for urgent symptoms and check after-hours veterinary options before a crisis.",
  },
  {
    key: "dog-friendly",
    slugPrefix: "dog-friendly-places",
    hubTitle: "Dog-Friendly Places",
    serviceTitle: "Dog-Friendly Places",
    seoLabel: "dog-friendly places",
    cardDescription: "How to verify local rules for parks, beaches, cafes, accommodation, and travel with dogs.",
  },
];

function pathFor(city: LocalCity, service: LocalService) {
  return `/local/${city.slug}/${service.slugPrefix}-${city.slug}`;
}

function titleFor(city: LocalCity, service: LocalService) {
  if (service.key === "emergency-vets") return `Emergency Vets in ${city.name}: How to Prepare`;
  if (service.key === "dog-friendly") return `Dog-Friendly Places in ${city.name}: What to Check`;
  return `${service.serviceTitle} in ${city.name}: How to Choose Safely`;
}

function indexingRecoveryLocalSections(city: LocalCity, service: LocalService) {
  if (city.slug === "gqeberha" && service.key === "dog-friendly") {
    return [
      {
        heading: "Why this Gqeberha dog-friendly guide is useful",
        body: [
          "Gqeberha outings can move quickly from suburban pavements to windy beachfront areas, beach-adjacent parking, busy holiday crowds, and coastal paths where rules, comfort, and safety change by location. This page is useful because it focuses on what to verify before leaving home rather than pretending to list every dog-friendly venue.",
          "Use it to plan rule checks, heat and wind preparation, water, waste bags, lead control, and backup vet details before a beach, park, cafe, accommodation, or road-trip stop.",
        ],
        checklist: [
          "Check Nelson Mandela Bay municipal rules or venue rules before assuming dogs are allowed.",
          "Plan for wind, sand, salt water, hot tar, holiday crowds, and dogs that become over-excited near beaches.",
          "Carry water, a lead, ID, waste bags, and a towel for sandy or wet paws.",
          "Keep your dog away from anglers, wildlife, children, runners, cyclists, and dogs who are not inviting contact.",
          "Know which vet you would phone if your dog eats something risky, overheats, is injured, or becomes suddenly unwell while out.",
        ],
      },
      {
        heading: "Next useful Gqeberha checks",
        body: [
          "Before a longer outing, combine this page with the travel checklist and the city emergency preparation guide so rules, comfort, and urgent-care planning are covered together.",
        ],
        table: {
          headers: ["Need", "Best DogHaven next step"],
          rows: [
            ["Beach or public-space rules", "Check official rules first, then read the beach rules guide."],
            ["Longer road trip", "Use the dog-friendly travel checklist before packing."],
            ["Uncertain behaviour in public", "Read leash training and dog training guidance before busy outings."],
            ["Emergency planning", "Save vet details before heading to beaches, trails, or accommodation."],
          ],
        },
      },
    ];
  }

  return [];
}

function descriptionFor(city: LocalCity, service: LocalService) {
  if (city.slug === "gqeberha" && service.key === "dog-friendly") {
    return "Gqeberha dog-friendly places guide for checking beach, park, venue, accommodation and public-space rules, with coastal outing safety, leash etiquette, water, heat, and vet planning.";
  }

  if (service.key === "emergency-vets") {
    return `A practical ${city.name} guide to emergency vet preparation, urgent symptoms, transport planning, after-hours questions, and what dog owners should keep ready.`;
  }
  if (service.key === "dog-friendly") {
    return `A practical ${city.name} dog-friendly guide covering rule checks, leash etiquette, heat, water, parks, beaches, cafes, accommodation, and travel planning without fake venue listings.`;
  }
  return `A practical ${city.name} guide to ${service.seoLabel}, including how to choose safely, questions to ask, cost factors, warning signs, and helpful DogHaven links.`;
}

function seoTitleFor(city: LocalCity, service: LocalService) {
  if (city.slug === "gqeberha" && service.key === "dog-friendly") {
    return "Dog-Friendly Places Gqeberha | Rules, Beaches, Parks and Safety Checks";
  }

  return `${titleFor(city, service)} | DogHaven`;
}

function commonLocalRelated(city: LocalCity): CardLink[] {
  return [
    { title: `${city.name} City Guide`, description: "Local dog-owner context for daily life, costs, outings, and emergency planning.", href: `/city/${city.slug}` },
    { title: `${city.province} Province Guide`, description: "Wider provincial dog-care context and seasonal risks.", href: `/province/${city.provinceSlug}` },
    { title: "Free Dog Tools", description: "Checklists and calculators for practical dog ownership.", href: "/tools" },
  ];
}

function sourceList(city: LocalCity): Source[] {
  return [city.source, ...coreSources];
}

function groomingGuide(city: LocalCity, service: LocalService): GuideContent {
  return {
    slug: `${service.slugPrefix}-${city.slug}`,
    path: pathFor(city, service),
    hubTitle: "Local Dog Services",
    hubPath: "/local",
    title: titleFor(city, service),
    seoTitle: seoTitleFor(city, service),
    description: descriptionFor(city, service),
    intro: `Looking for dog grooming in ${city.name}? This page combines practical local grooming guidance with starting points you can verify before booking. Use it to compare mobile and parlour grooming, ask better questions, spot red flags, and plan coat care around real ${city.name} conditions.`,
    updated: reviewed,
    quickFacts: [
      "DogHaven does not list or rank local groomers unless they have been properly checked.",
      "Mobile grooming can be convenient, while parlour grooming may offer more equipment and support for some coat types.",
      "Cost depends on dog size, coat type, matting, behaviour, travel, and what is included.",
      "Skin, ear, pain, parasites, or wound concerns should be checked by a vet rather than treated as routine grooming issues.",
    ],
    sections: [
      {
        heading: `Grooming context in ${city.name}`,
        body: [city.localContext, city.groomingNote],
      },
      {
        heading: "Mobile vs parlour grooming",
        body: [
          "Neither option is automatically better. The safer choice is the one that suits your dog's coat, stress level, health, transport needs, and the groomer's handling standards.",
        ],
        table: {
          headers: ["Option", "What to check"],
          rows: [
            ["Mobile grooming", "Water, drying setup, hygiene, load-shedding plan, handling for anxious dogs, and whether the groomer can manage your dog's size and coat."],
            ["Grooming parlour", "Supervision, cage or holding setup, drying methods, noise level, vaccination policy, staff handling, and separation from reactive dogs."],
            ["Vet referral", "Painful mats, skin infection, ear discharge, wounds, severe itch, parasites, or a dog too stressed for normal grooming."],
          ],
        },
      },
      {
        heading: "Questions to ask before booking",
        body: ["A trustworthy groomer should be comfortable answering practical questions before you hand over your dog."],
        checklist: [
          "What experience do you have with my dog's coat type, size, age, and temperament?",
          "How do you handle anxious, senior, reactive, or first-time dogs?",
          "What exactly is included: bath, brush, drying, nails, ears, sanitary trim, or de-shedding?",
          "What happens if you find ticks, fleas, sore skin, ear discharge, wounds, or severe matting?",
          "Do you use heated dryers, cage dryers, muzzles, or restraints, and how are they monitored?",
          "Can you stop the groom and phone me if my dog becomes too stressed?",
        ],
      },
      {
        heading: "Cost factors without fake prices",
        body: [
          "DogHaven avoids invented local prices because grooming costs change by provider, suburb, dog size, coat condition, travel, and inflation. Ask providers for a written estimate before booking.",
        ],
        table: {
          headers: ["Cost factor", "Why it changes the quote"],
          rows: [
            ["Dog size", "Large dogs usually take more time, shampoo, drying, and handling."],
            ["Coat type", "Curly, double, long, or matted coats often need more work than short coats."],
            ["Mobile travel", "Some mobile groomers charge by distance, area, or parking access."],
            ["Behaviour and age", "Anxious, senior, sore, or difficult-to-handle dogs may need extra time or a vet-led plan."],
            ["Extras", "Nail trimming, de-shedding, ear cleaning, tick removal, or dematting may be priced separately."],
          ],
        },
      },
      {
        heading: "Warning signs to avoid",
        body: ["Pause before booking if the answers make your dog feel less safe, not more understood."],
        bullets: [
          "The groomer dismisses stress, pain, overheating, or breathing concerns.",
          "They cannot explain hygiene between dogs.",
          "They promise a perfect groom regardless of matting, fear, age, or health.",
          "They refuse to stop if the dog becomes distressed.",
          "They treat medical skin, ear, wound, or parasite problems as grooming-only issues.",
        ],
      },
      {
        heading: "Practical grooming checklist",
        body: ["Use this before your first appointment or when changing groomers."],
        checklist: [
          "Brush your dog enough to know where mats, ticks, or sore areas may be.",
          "Tell the groomer about bites, fear, pain, medical issues, heat sensitivity, or breathing problems.",
          "Ask for the expected collection time and what happens if the groom takes longer.",
          "Keep your vet details handy in case the groomer spots a medical concern.",
          "Budget for grooming as part of routine care, especially for high-maintenance coats.",
        ],
      },
    ],
    faqs: [
      {
        question: `Should I choose mobile or parlour grooming in ${city.name}?`,
        answer:
          "Choose based on your dog's coat, stress level, transport needs, and the provider's safety standards. Ask direct questions before booking.",
      },
      {
        question: "Can a groomer treat itchy skin or ear problems?",
        answer:
          "A groomer can notice concerns, but ongoing itch, sore skin, ear discharge, wounds, pain, or parasites may need a veterinarian.",
      },
      {
        question: "Does DogHaven recommend specific groomers?",
        answer:
          "Use this guide as a starting point, then confirm services, prices, availability, handling methods, and suitability directly with each provider.",
      },
    ],
    related: [
      { title: "Dog Grooming Hub", description: "Coat, nails, shedding, groomer choice, and grooming costs.", href: "/grooming" },
      { title: "Dog Grooming Costs", description: "Understand grooming cost factors without fake exact prices.", href: "/grooming/dog-grooming-costs-south-africa" },
      { title: "Dog Shedding", description: "Plan brushing, coat care, and seasonal shedding.", href: "/grooming/dog-shedding-south-africa" },
      { title: "Itchy Skin Signs", description: "When skin symptoms need a vet.", href: "/health/dog-scratching-and-itchy-skin-south-africa" },
      { title: "Dog Cost Calculator", description: "Estimate monthly ownership costs.", href: "/tools/dog-cost-calculator" },
      ...commonLocalRelated(city),
    ],
    sources: sourceList(city),
  };
}

function trainingGuide(city: LocalCity, service: LocalService): GuideContent {
  return {
    slug: `${service.slugPrefix}-${city.slug}`,
    path: pathFor(city, service),
    hubTitle: "Local Dog Services",
    hubPath: "/local",
    title: titleFor(city, service),
    seoTitle: seoTitleFor(city, service),
    description: descriptionFor(city, service),
    intro: `Looking for dog training in ${city.name}? This page combines practical local training guidance with starting points you can verify before booking. Use it to choose humane support for puppies, adult dogs, leash manners, barking, recall, and everyday public behaviour.`,
    updated: reviewed,
    quickFacts: [
      "Choose reward-based, humane training that involves the owner and avoids fear-heavy methods.",
      "Good trainers explain their methods clearly and do not promise instant fixed outcomes.",
      "Puppy classes should balance socialisation with vaccination safety and controlled exposure.",
      "Serious aggression, panic, or bite risk may need a qualified behaviour professional and veterinary input.",
    ],
    sections: [
      {
        heading: `Training context in ${city.name}`,
        body: [city.localContext, city.trainingNote],
      },
      {
        heading: "What local owners often need help with",
        body: [
          "Training should make normal life safer and kinder, not just produce tricks. In busy South African cities, calm handling and predictable routines matter.",
        ],
        bullets: [
          "Puppy toilet training, biting, safe socialisation, and calm handling.",
          "Adult dog lead manners, recall foundations, jumping, barking, and visitor routines.",
          "Public behaviour around children, runners, cyclists, other dogs, cafes, parks, and estate gates.",
          "Separation anxiety, fear, reactivity, and noise sensitivity that need careful support.",
        ],
      },
      {
        heading: "Questions to ask a trainer",
        body: ["A good trainer should welcome thoughtful questions and explain what happens during class or private sessions."],
        checklist: [
          "What training methods do you use, and how do you handle fear or reactivity?",
          "Will owners be coached, or is the dog trained away from the family?",
          "How many dogs are in a class, and how are nervous puppies protected?",
          "Do you use punishment, intimidation, choke chains, prong collars, shock collars, or flooding?",
          "What qualifications, experience, or referrals can you explain?",
          "When do you refer to a vet or veterinary behaviour professional?",
        ],
      },
      {
        heading: "Cost factors without fake prices",
        body: [
          "Training fees vary by city, trainer experience, session format, travel, class size, and the complexity of the behaviour. Ask for current fees and what is included.",
        ],
        table: {
          headers: ["Factor", "What it can affect"],
          rows: [
            ["Puppy class", "Usually covers foundations, safe handling, socialisation, and owner coaching."],
            ["Private session", "May cost more but can target home routines, barking, lead walking, or reactivity."],
            ["Behaviour complexity", "Fear, aggression, separation anxiety, or bite risk can need a longer plan."],
            ["Travel", "In-home sessions may include travel or area-based fees."],
            ["Follow-up support", "Written plans, check-ins, or group support may be included or separate."],
          ],
        },
      },
      {
        heading: "Warning signs to avoid",
        body: ["Avoid any trainer whose approach makes safety, trust, and welfare feel secondary."],
        bullets: [
          "Promised instant results for aggression, fear, or separation anxiety.",
          "Methods based on intimidation, pain, flooding, or frightening the dog into stopping.",
          "No owner involvement or no explanation of what is being done.",
          "Blaming the dog without asking about health, pain, routine, exercise, or environment.",
          "Encouraging risky off-lead exposure before the dog is ready.",
        ],
      },
      {
        heading: "Practical training checklist",
        body: ["Use this before booking training help."],
        checklist: [
          "Write down the behaviour, when it happens, and what usually happens before it.",
          "Check your dog's health if behaviour changes suddenly or pain may be involved.",
          "Ask the trainer how they keep dogs, children, and visitors safe during sessions.",
          "Avoid punishment-heavy shortcuts that can increase fear or reactivity.",
          "Practise small daily habits rather than expecting one session to fix everything.",
        ],
      },
    ],
    faqs: [
      {
        question: `How do I choose a dog trainer in ${city.name}?`,
        answer:
          "Ask about humane methods, owner coaching, class size, experience with your issue, and when they refer to a vet or behaviour professional.",
      },
      {
        question: "Are harsh tools necessary for strong dogs?",
        answer:
          "No tool should replace safe management, welfare, and skilled reward-based training. If a dog is difficult to control, get qualified help and avoid methods that create fear or pain.",
      },
      {
        question: "Does DogHaven list trainers?",
        answer:
          "Use this guide as a starting point, then confirm training methods, class structure, availability, pricing, and suitability directly with each provider.",
      },
    ],
    related: [
      { title: "Dog Training Hub", description: "Training guides for puppies, adults, leash manners, and behaviour.", href: "/training" },
      { title: "Puppy Training", description: "First-year puppy routines and safe socialisation.", href: "/training/puppy-training-south-africa" },
      { title: "Leash Training", description: "Build safer lead manners for public spaces.", href: "/training/leash-training-dogs-south-africa" },
      { title: "Barking and Rules", description: "Understand nuisance barking and neighbour planning.", href: "/laws/nuisance-barking-south-africa" },
      { title: "Breed Match Quiz", description: "Explore breed categories responsibly.", href: "/tools/dog-breed-match-quiz" },
      ...commonLocalRelated(city),
    ],
    sources: sourceList(city),
  };
}

function emergencyGuide(city: LocalCity, service: LocalService): GuideContent {
  return {
    slug: `${service.slugPrefix}-${city.slug}`,
    path: pathFor(city, service),
    hubTitle: "Local Dog Services",
    hubPath: "/local",
    title: titleFor(city, service),
    seoTitle: seoTitleFor(city, service),
    description: descriptionFor(city, service),
    intro: `If you are looking for emergency vets in ${city.name}, use this page to prepare before an urgent situation. DogHaven does not list fake clinics or phone numbers. For a real emergency, phone a veterinarian or emergency animal clinic directly.`,
    updated: reviewed,
    isHealthGuide: true,
    quickFacts: [
      "For collapse, breathing trouble, seizures, poisoning, severe pain, repeated vomiting, heavy bleeding, or trauma, phone a vet immediately.",
      "Save your regular vet and after-hours option before you need them.",
      "Keep vaccination, medication, allergy, microchip, and insurance details easy to access.",
      "Do not give human medicine or induce vomiting unless a veterinarian tells you to.",
    ],
    sections: [
      {
        heading: `Emergency planning in ${city.name}`,
        body: [city.localContext, city.emergencyNote],
      },
      {
        heading: "What to keep ready before an emergency",
        body: [
          "Emergencies are harder when you are trying to search, drive, and think at the same time. Prepare the basics while your dog is well.",
        ],
        checklist: [
          "Your regular vet's phone number and after-hours instructions.",
          "The nearest emergency animal clinic details confirmed directly.",
          "Vaccination record, medication list, allergy notes, microchip number, and insurance details.",
          "A transport plan for a large, collapsed, painful, or injured dog.",
          "A muzzle or towel only if it can be used safely and calmly for a painful dog that may bite.",
        ],
      },
      {
        heading: "Warning symptoms that should not wait",
        body: [
          "This page cannot diagnose your dog. The signs below are reasons to contact a vet urgently and describe exactly what you are seeing.",
        ],
        bullets: [
          "Struggling to breathe, blue or pale gums, collapse, or extreme weakness.",
          "Repeated vomiting, severe diarrhoea, blood in vomit or stool, or a young puppy with gut symptoms.",
          "Possible poisoning, chocolate, grapes, xylitol, rat poison, medication, or chemical exposure.",
          "Snake bite, heatstroke signs, seizures, major trauma, heavy bleeding, or severe pain.",
          "A dog that cannot urinate, cannot stand, has a swollen abdomen, or is rapidly getting worse.",
        ],
      },
      {
        heading: "What to say when you phone",
        body: [
          "Clear details help veterinary staff triage and prepare. Keep the call practical and honest, even if you are worried.",
        ],
        table: {
          headers: ["Information", "Why it helps"],
          rows: [
            ["Dog details", "Age, size, breed or type, weight if known, and existing health issues."],
            ["Symptoms", "What changed, when it started, whether it is getting worse, and what you have observed."],
            ["Exposure", "Possible toxins, foods, medication, plants, snakes, heat, trauma, or fights."],
            ["Records", "Vaccination status, medications, allergies, microchip, and insurance details."],
            ["Transport", "How soon you can arrive and whether the dog can walk or needs carrying."],
          ],
        },
      },
      {
        heading: "Cost factors without fake prices",
        body: [
          "Emergency vet costs vary by clinic, time of day, diagnostics, medication, hospitalisation, surgery, and the dog's size and condition. Ask the practice directly about estimates, payment process, and what may change after examination.",
        ],
        bullets: [
          "After-hours consultation or emergency triage fees.",
          "Blood tests, X-rays, ultrasound, or other diagnostics.",
          "Fluids, medication, oxygen, monitoring, or hospitalisation.",
          "Surgery, referral, or follow-up visits.",
          "Insurance excesses, exclusions, claims process, or upfront payment requirements.",
        ],
      },
      {
        heading: "What not to do",
        body: ["Well-meant home action can make some emergencies worse."],
        checklist: [
          "Do not give human painkillers or leftover medication.",
          "Do not induce vomiting unless a veterinarian instructs you.",
          "Do not wait overnight for severe or fast-worsening symptoms.",
          "Do not force food or water into a collapsed, seizing, or struggling dog.",
          "Do not rely on social media replies when urgent vet care is needed.",
        ],
      },
    ],
    faqs: [
      {
        question: `Does DogHaven list emergency vets in ${city.name}?`,
        answer:
          "Use this guide as a starting point, then ask your regular vet for after-hours guidance and confirm emergency options directly before you need them.",
      },
      {
        question: "Should I call before driving to an emergency vet?",
        answer:
          "If it is safe to do so, phone first so the clinic can advise you and prepare. Do not delay urgent care if the dog is critically ill.",
      },
      {
        question: "Can I treat poisoning at home?",
        answer:
          "No. Contact a veterinarian urgently. Do not induce vomiting or give home remedies unless a vet specifically instructs you.",
      },
    ],
    related: [
      { title: "Emergency Help", description: "Urgent dog symptoms and first-step guidance.", href: "/emergency" },
      { title: "Dog Poisoning", description: "What to do when poisoning is possible.", href: "/emergency/dog-poisoning-south-africa" },
      { title: "Dog Vomiting", description: "When vomiting needs same-day vet advice.", href: "/health/dog-vomiting-south-africa" },
      { title: "Dog Diarrhea", description: "Red flags for puppies and adult dogs.", href: "/health/dog-diarrhea-south-africa" },
      { title: "Emergency Vet Costs", description: "Plan financially for urgent care.", href: "/costs/emergency-vet-costs-south-africa" },
      { title: "Vet Visit Checklist", description: "Prepare clearer notes for a vet call or visit.", href: "/tools/vet-visit-checklist" },
      ...commonLocalRelated(city),
    ],
    sources: sourceList(city),
  };
}

function dogFriendlyGuide(city: LocalCity, service: LocalService): GuideContent {
  return {
    slug: `${service.slugPrefix}-${city.slug}`,
    path: pathFor(city, service),
    hubTitle: "Local Dog Services",
    hubPath: "/local",
    title: titleFor(city, service),
    seoTitle: seoTitleFor(city, service),
    description: descriptionFor(city, service),
    intro: `Looking for dog-friendly places in ${city.name}? DogHaven does not invent park, beach, cafe, hotel, or venue listings. This guide helps you check rules, plan safer outings, and avoid putting your dog or other people in awkward situations.`,
    updated: reviewed,
    quickFacts: [
      "Dog-friendly rules can change by municipality, beach, park, estate, accommodation provider, venue, season, and time of day.",
      "Always check official or venue rules before visiting with a dog.",
      "Bring water, waste bags, a lead, ID, and proof of vaccination if required.",
      "Leave if your dog is overwhelmed, reactive, unwell, overheating, or unable to settle.",
    ],
    sections: [
      {
        heading: `Dog-friendly context in ${city.name}`,
        body: [city.localContext, city.dogFriendlyNote],
      },
      ...indexingRecoveryLocalSections(city, service),
      {
        heading: "How to check local rules",
        body: [
          "A place being dog-friendly once does not mean it is always dog-friendly. Rules can change after complaints, seasons, wildlife concerns, events, or management changes.",
        ],
        checklist: [
          "Check municipal rules for parks, beaches, promenades, trails, and public spaces.",
          "Phone or message cafes, accommodation, markets, or venues before arriving.",
          "Ask whether dogs must be leashed, where they may sit, and whether water bowls are available.",
          "Check vaccination, size, breed, noise, waste, and cleaning rules for accommodation.",
          "Look for signs at entrances and follow staff instructions politely.",
        ],
      },
      {
        heading: "Leash etiquette and public behaviour",
        body: [
          "A good outing should be safe for your dog, other dogs, children, staff, wildlife, and people who may be nervous around dogs.",
        ],
        bullets: [
          "Use a lead unless official rules clearly allow off-lead access and your dog has reliable recall.",
          "Do not let your dog rush other dogs, tables, children, cyclists, runners, anglers, or wildlife.",
          "Keep barking, jumping, begging, and marking under control.",
          "Pick up waste immediately and carry extra bags.",
          "Avoid busy spaces if your dog is fearful, reactive, ill, in season, or not vaccinated appropriately.",
        ],
      },
      {
        heading: "Heat, water, beaches, parks, cafes, and travel",
        body: [
          "South African outings can become uncomfortable quickly in heat, humidity, wind, or crowded holiday periods. Plan the dog first, then the photo.",
        ],
        table: {
          headers: ["Outing type", "What to check"],
          rows: [
            ["Parks", "Leash rules, dog zones, waste rules, children, cyclists, water access, and event closures."],
            ["Beaches", "Dog access times, seasonal restrictions, protected areas, hot sand, tides, hooks, and fresh water."],
            ["Cafes or markets", "Dog seating areas, busy walkways, shade, water, barking, and staff rules."],
            ["Accommodation", "Pet fees, size limits, sleeping rules, garden security, cleaning rules, and nearby vet access."],
            ["Road trips", "Heat, hydration, rest stops, restraint, vaccination records, and emergency vet planning."],
          ],
        },
      },
      {
        heading: "Cost factors without fake prices",
        body: [
          "Dog-friendly outings are not always free. Avoid assuming costs until you have checked directly with the venue or accommodation provider.",
        ],
        bullets: [
          "Accommodation pet fees, deposits, or cleaning charges.",
          "Park, trail, parking, toll, or access fees.",
          "Training support if your dog struggles in public.",
          "Travel gear, water bowls, harnesses, shade mats, or car restraints.",
          "Emergency savings for heat stress, injuries, poisoning, or unexpected vet visits while away from home.",
        ],
      },
      {
        heading: "Dog-friendly outing checklist",
        body: ["Use this before heading out in or around the city."],
        checklist: [
          "Rules checked directly with the municipality, venue, beach, park, or accommodation provider.",
          "Lead, harness or collar, ID tag, water, bowl, waste bags, towel, and tick prevention considered.",
          "Weather and pavement temperature checked.",
          "Dog is healthy, vaccinated appropriately, and able to cope with the environment.",
          "Nearest vet or after-hours option known for longer trips.",
        ],
      },
    ],
    faqs: [
      {
        question: `Where can I find dog-friendly places in ${city.name}?`,
        answer:
          "Start by checking official municipal rules and contacting venues directly. Use this guide as a practical checklist before you visit.",
      },
      {
        question: "Can my dog go off lead if the area looks quiet?",
        answer:
          "Only if local rules allow it and your dog has reliable recall. Shared public spaces still require control and courtesy.",
      },
      {
        question: "What should I do before booking pet-friendly accommodation?",
        answer:
          "Ask for the written pet policy, fees, size rules, sleeping rules, garden security, cleaning expectations, and nearby vet options.",
      },
    ],
    related: [
      { title: "Dog-Friendly Hub", description: "Travel, parks, beaches, hiking, and accommodation guidance.", href: "/dog-friendly" },
      { title: "Travel Checklist", description: "Prepare for dog-friendly trips in South Africa.", href: "/tools/dog-friendly-travel-checklist" },
      { title: "Dog Leash Laws", description: "Understand why local leash rules must be checked.", href: "/laws/dog-leash-laws-south-africa" },
      { title: "Beach Rules", description: "Check beach access before taking a dog.", href: "/laws/dog-friendly-beach-rules-south-africa" },
      { title: "Travelling With Dogs", description: "Plan safer road trips and stays.", href: "/dog-friendly/travelling-with-dogs-south-africa" },
      ...commonLocalRelated(city),
    ],
    sources: sourceList(city),
  };
}

function buildGuide(city: LocalCity, service: LocalService): GuideContent {
  if (service.key === "grooming") return groomingGuide(city, service);
  if (service.key === "training") return trainingGuide(city, service);
  if (service.key === "emergency-vets") return emergencyGuide(city, service);
  return dogFriendlyGuide(city, service);
}

export const phase17LocalGuidePages: GuideContent[] = localCities.flatMap((city) =>
  localServices.map((service) => buildGuide(city, service)),
);

export const phase17GroomingCards: CardLink[] = localCities.map((city) => ({
  title: `Dog Grooming in ${city.name}`,
  description: `How to choose grooming support in ${city.name}: mobile vs parlour options, coat needs, safety questions, and cost factors.`,
  href: pathFor(city, localServices[0]),
}));

export const phase17TrainingCards: CardLink[] = localCities.map((city) => ({
  title: `Dog Training in ${city.name}`,
  description: `How to choose humane training in ${city.name} for puppies, leash manners, barking, recall, and adult dogs.`,
  href: pathFor(city, localServices[1]),
}));

export const phase17EmergencyCards: CardLink[] = localCities.map((city) => ({
  title: `Emergency Vets in ${city.name}`,
  description: `Prepare for urgent dog symptoms in ${city.name}: after-hours checks, transport, records, and what not to do.`,
  href: pathFor(city, localServices[2]),
}));

export const phase17DogFriendlyCards: CardLink[] = localCities.map((city) => ({
  title: `Dog-Friendly Places in ${city.name}`,
  description: `How to check dog-friendly rules in ${city.name} for parks, beaches, cafes, accommodation, and public spaces.`,
  href: pathFor(city, localServices[3]),
}));

export const localHub: HubContent = {
  slug: "local",
  path: "/local",
  title: "Local Dog Service Guides in South Africa",
  seoTitle: "Local Dog Service Guides South Africa | Grooming, Training, Emergency Vets",
  description:
    "South African local dog service guides for grooming, training, emergency vet preparation, and dog-friendly places in major cities, with practical checks and verified local options where available.",
  kicker: "Local guides",
  intro:
    "DogHaven local guides help South African dog owners know what to ask, what to verify, and how to choose safer dog services. Where verified local options are available, we show sourced starting points; otherwise we clearly say that provider research is still being built.",
  cards: [
    ...localCities.map((city) => ({
      title: `${city.name} Local Dog Guides`,
      description: `Grooming, training, emergency vet preparation, and dog-friendly rule checks for ${city.name}.`,
      href: `/local/${city.slug}`,
    })),
    ...localServices.map((service) => ({
      title: service.serviceTitle,
      description: service.cardDescription,
      href: pathFor(localCities[0], service),
    })),
  ],
  related: [
    { title: "City Guides", description: "Practical dog-owner context by city.", href: "/city" },
    { title: "Province Guides", description: "Climate, local risks, and province planning.", href: "/province" },
    { title: "Free Dog Tools", description: "Checklists and calculators for everyday decisions.", href: "/tools" },
    { title: "Dog-Friendly Places", description: "Plan safer outings and verify rules.", href: "/dog-friendly" },
    { title: "Emergency Help", description: "Urgent symptoms and vet preparation.", href: "/emergency" },
    { title: "Dog Laws", description: "Rules for leashes, beaches, barking, rentals, and complexes.", href: "/laws" },
    { title: "Cape Town Local Guides", description: "A stronger city hub for grooming, training, emergency vet preparation, and dog-friendly checks.", href: "/local/cape-town" },
    { title: "Gqeberha Dog-Friendly Places", description: "Check coastal rules, beach comfort, outing etiquette, and vet preparation.", href: "/local/gqeberha/dog-friendly-places-gqeberha" },
  ],
  faqs: [
    {
      question: "Are DogHaven local guides directories?",
      answer:
        "Use these guides as starting points, then confirm services, contact details, prices, availability, and suitability directly with each provider.",
    },
    {
      question: "Why are there no specific groomer, trainer, vet, or venue names?",
      answer:
        "DogHaven will not invent or imply verified listings. Local providers, rules, hours, and services can change, so owners should verify directly before booking or visiting.",
    },
    {
      question: "What should I do in a dog emergency?",
      answer:
        "Phone a veterinarian or emergency animal clinic directly. DogHaven provides preparation guidance, but it is not emergency veterinary support.",
    },
  ],
};

export function getPhase17LocalGuide(citySlug: string, guideSlug: string) {
  return phase17LocalGuidePages.find((guide) => guide.path === `/local/${citySlug}/${guideSlug}`);
}

export const localCityHubs: HubContent[] = localCities.map((city) => ({
  slug: `local-${city.slug}`,
  path: `/local/${city.slug}`,
  title: `${city.name} Local Dog Service Guides`,
  seoTitle:
    city.slug === "cape-town"
      ? "Cape Town Dog Services Guide | Grooming, Training, Vets and Dog-Friendly Checks"
      : `${city.name} Dog Services Guide | Grooming, Training, Emergency Vets`,
  description:
    city.slug === "cape-town"
      ? "Cape Town dog service guide covering grooming, training, emergency vet preparation, dog-friendly rule checks, monthly costs, beaches, apartments, winter rain, summer heat and local planning."
      : `Helpful ${city.name} dog service guides covering grooming, training, emergency vet preparation, dog-friendly places, provider checks, and local planning.`,
  kicker: "Local city guide",
  intro: `${city.localContext} Use these DogHaven guides to ask better questions, verify rules directly, and choose safer dog services without relying on fake local listings.`,
  cards: localServices.map((service) => ({
    title: service.key === "emergency-vets" ? `Emergency Vets in ${city.name}` : `${service.serviceTitle} in ${city.name}`,
    description: service.cardDescription,
    href: pathFor(city, service),
  })),
  related: [
    { title: "All Local Guides", description: "Browse DogHaven local service guides by city and service type.", href: "/local" },
    { title: `${city.name} City Guide`, description: "Wider dog-owner context for daily life in the city.", href: `/city/${city.slug}` },
    { title: `${city.province} Province Guide`, description: "Province-level climate, risk, travel, and dog-care context.", href: `/province/${city.provinceSlug}` },
    ...(city.slug === "cape-town"
      ? [
          { title: "Cape Town Monthly Dog Costs", description: "Food, vet care, grooming, training, travel, and emergency budget factors for Cape Town owners.", href: "/local-costs/cape-town/monthly-dog-costs-cape-town" },
          { title: "Cape Town Emergency Vet Costs", description: "Urgent-care budgeting and preparation for Cape Town dog owners.", href: "/local-costs/cape-town/emergency-vet-costs-cape-town" },
          { title: "Dog-Friendly Travel Checklist", description: "Pack water, records, rule checks, and emergency planning before Cape Town outings.", href: "/tools/dog-friendly-travel-checklist" },
        ]
      : []),
    { title: "Free Dog Tools", description: "Checklists and calculators for practical dog ownership.", href: "/tools" },
  ],
  faqs: [
    {
      question: `Does DogHaven list specific dog businesses in ${city.name}?`,
      answer:
        "Use these guides as starting points, then confirm provider details, services, prices, opening hours, and suitability directly before booking or visiting.",
    },
    {
      question: `Which ${city.name} guide should I read first?`,
      answer:
        "Start with emergency vet preparation if you do not already have after-hours details saved. For everyday planning, use grooming, training, and dog-friendly guides based on what you need next.",
    },
    {
      question: "Can local dog-friendly rules change?",
      answer:
        "Yes. Rules can change by municipality, venue, park, beach, estate, season, and accommodation provider. Always check directly before visiting.",
    },
  ],
}));

export function getLocalCityHub(citySlug: string) {
  return localCityHubs.find((hub) => hub.path === `/local/${citySlug}`);
}

