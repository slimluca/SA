import type { CardLink } from "@/lib/content";

export type HubFeature = CardLink & {
  image?: {
    src: string;
    alt: string;
  };
};

export type PremiumHubConfig = {
  theme: "health" | "emergency" | "breeds" | "food" | "adoption" | "costs";
  image: {
    src: string;
    alt: string;
    width: number;
    height: number;
  };
  heroLinks: CardLink[];
  featureTitle: string;
  featureIntro: string;
  features: HubFeature[];
  guidance: {
    title: string;
    body: string[];
  };
  checklist?: {
    title: string;
    items: string[];
  };
  groups: Array<{
    title: string;
    description: string;
    matches: (href: string) => boolean;
  }>;
  remainingTitle: string;
  remainingDescription: string;
};

export const premiumHubConfigs: Record<string, PremiumHubConfig> = {
  health: {
    theme: "health",
    image: {
      src: "/images/hubs/dog-health-south-africa.webp",
      alt: "Dog owner calmly checking a healthy dog during a routine veterinary visit",
      width: 1536,
      height: 1024,
    },
    heroLinks: [
      { title: "Know when a vet visit cannot wait", description: "Use symptoms and context to decide the next step.", href: "/health/when-to-take-your-dog-to-the-vet-south-africa" },
      { title: "Plan routine prevention", description: "Start with vaccination and parasite protection.", href: "/health/vaccination-schedule-south-africa" },
    ],
    featureTitle: "Start with these health guides",
    featureIntro: "These resources cover urgent South African risks, everyday prevention, and the decisions owners most often need to make first.",
    features: [
      { title: "Biliary Tick Bite Fever", description: "Recognise possible warning signs and understand why veterinary assessment should not wait.", href: "/health/biliary-tick-bite-fever-dogs-south-africa", image: { src: "/images/guides/biliary-tick-check-dog-south-africa.webp", alt: "Dog owner checking a dog's coat for ticks" } },
      { title: "Ticks and Fleas", description: "Plan exposure checks, prevention questions, and safe product use.", href: "/health/ticks-and-fleas-dogs-south-africa", image: { src: "/images/guides/ticks-fleas-dog-check-south-africa.webp", alt: "Owner checking a healthy dog's coat after time outdoors" } },
      { title: "Vaccination Schedule", description: "Prepare an individual puppy or adult vaccination discussion with your vet.", href: "/health/vaccination-schedule-south-africa", image: { src: "/images/guides/dog-vaccination-vet-south-africa.webp", alt: "Dog at a routine vaccination consultation" } },
      { title: "Toxic Foods", description: "Keep common kitchen and braai hazards out of reach and know what information a vet needs.", href: "/health/toxic-foods-for-dogs-south-africa", image: { src: "/images/guides/toxic-foods-dogs-south-africa.webp", alt: "Dog owner storing potentially harmful food out of reach" } },
      { title: "When to Take Your Dog to the Vet", description: "Sort routine concerns from same-day and emergency warning signs.", href: "/health/when-to-take-your-dog-to-the-vet-south-africa" },
    ],
    guidance: {
      title: "Where online guidance should stop",
      body: [
        "Online information can help you notice patterns, prevent exposure, and prepare useful details. It cannot examine your dog, measure vital signs, run tests, or diagnose a changing condition.",
        "Contact a veterinarian promptly for severe pain, collapse, breathing difficulty, seizures, abnormal gum colour, suspected poisoning, rapid deterioration, or any concern involving a very young, older, pregnant, injured, or medically vulnerable dog.",
      ],
    },
    groups: [
      { title: "Prevention and routine care", description: "Vaccination, checkups, identification, dental care, weight, and everyday prevention.", matches: (href) => /(vaccin|routine-vet|health-calendar|microchip|id-tags|dental|teeth|overweight|spay|neuter|steril)/.test(href) },
      { title: "Symptoms and common concerns", description: "Prepare observations and recognise changes that deserve veterinary attention.", matches: (href) => /(vomit|diarrh|not-eating|drinking|limping|cough|breathing|seizure|pale|blood|letharg|scratching|ear-|eye-|skin|swollen|shaking|drooling|constipation|bad-breath)/.test(href) },
      { title: "Parasites and infectious disease", description: "South African tick, flea, worm, rabies, parvovirus, and infection guidance.", matches: (href) => /(tick|flea|worm|biliary|rabies|parvo|kennel-cough|parasite|infect)/.test(href) },
      { title: "Nutrition-related health", description: "Food hazards, digestion, allergy questions, and feeding-related health decisions.", matches: (href) => /(toxic-food|sensitive-stomach|allerg|food|weight-loss|stool)/.test(href) },
      { title: "Older dogs and chronic care", description: "Long-term monitoring, mobility, ageing, and chronic-condition planning.", matches: (href) => /(senior|chronic|arthritis|hip-dysplasia|mobility)/.test(href) },
    ],
    remainingTitle: "More dog-health guidance",
    remainingDescription: "Browse the remaining health guides by the concern or planning task that brought you here.",
  },
  emergency: {
    theme: "emergency",
    image: {
      src: "/images/hubs/dog-emergency-preparation-south-africa.webp",
      alt: "Dog owner calmly preparing a healthy dog and its records for veterinary travel",
      width: 1536,
      height: 1024,
    },
    heroLinks: [
      { title: "Check urgent warning signs", description: "Know when to phone ahead and leave for veterinary care.", href: "/health/when-to-take-your-dog-to-the-vet-south-africa" },
      { title: "Prepare for an emergency visit", description: "Collect the information and essentials your vet may need.", href: "/tools/vet-visit-checklist" },
    ],
    featureTitle: "Know what cannot wait",
    featureIntro: "These guides help owners recognise high-risk situations, avoid unsafe home treatment, and prepare for urgent professional care without trying to diagnose the dog themselves.",
    features: [
      { title: "Dog Poisoning", description: "Identify the possible substance, collect useful evidence, and avoid dangerous home remedies.", href: "/emergency/dog-poisoning-south-africa", image: { src: "/images/guides/dog-poisoning-prevention-south-africa.webp", alt: "Dog owner storing household products safely out of reach" } },
      { title: "Heatstroke", description: "Recognise heat-related danger and begin cautious first steps while arranging veterinary care.", href: "/emergency/heatstroke-in-dogs-south-africa", image: { src: "/images/guides/dog-heat-safety-south-africa.webp", alt: "Healthy dog resting in shade beside fresh water" } },
      { title: "Rabies", description: "Understand possible exposure, urgent contacts, vaccination records, and public-health caution.", href: "/emergency/rabies-south-africa", image: { src: "/images/guides/rabies-vaccination-dog-south-africa.webp", alt: "Dog owner attending a veterinary vaccination appointment" } },
      { title: "Snake Bites", description: "Keep the dog still, avoid first-aid myths, and contact an appropriate clinic urgently.", href: "/emergency/snake-bites-in-dogs-south-africa" },
      { title: "Bloat", description: "Recognise a rapidly expanding abdomen, unproductive retching, distress, and collapse risk.", href: "/emergency/bloat-in-dogs-south-africa" },
    ],
    guidance: {
      title: "What to do before leaving for the vet",
      body: [
        "Emergency pages describe warning signs and preparation, not a home diagnosis. Phone the veterinary clinic before arrival when possible so the team can advise on transport and prepare for the suspected problem.",
      ],
    },
    checklist: {
      title: "Emergency preparation checklist",
      items: [
        "Save your regular vet and nearest after-hours clinic details before you need them.",
        "Keep a secure lead, harness or carrier, towel, and vaccination or medical records accessible.",
        "Know the dog's approximate weight, medicines, conditions, allergies, and recent treatment.",
        "Phone ahead, describe the signs and timeline, and ask about the safest transport plan.",
        "Use another adult to monitor the dog during travel when available; the driver should focus on the road.",
      ],
    },
    groups: [
      { title: "Symptoms that need a decision", description: "Use symptom-led guidance to decide when a veterinary call cannot wait.", matches: (href) => /(symptom|collapse|breath|seizure|bleed|gum|vomit|swollen|pain|wont-stand|shaking)/.test(href) },
      { title: "Preparation and prevention", description: "Build safer routines for travel, outdoor risks, first-aid readiness, and emergency information.", matches: (href) => /(checklist|prevent|first-aid|travel|hot-weather|tick|snake|poison)/.test(href) },
      { title: "Emergency care and cost planning", description: "Find urgent-care pathways and prepare for the practical cost of emergency treatment.", matches: (href) => /(emergency-vet|cost|budget|local\/)/.test(href) },
    ],
    remainingTitle: "More emergency guidance",
    remainingDescription: "Use these additional resources for specific urgent situations and preparation tasks.",
  },
  breeds: {
    theme: "breeds",
    image: {
      src: "/images/hubs/dog-breeds-south-africa.webp",
      alt: "A diverse group of healthy dogs with their owner in a South African outdoor setting",
      width: 1536,
      height: 1024,
    },
    heroLinks: [
      { title: "Choose by lifestyle", description: "Start with household routine, energy, space, and care needs.", href: "/breeds/best-dog-breeds-for-south-african-homes" },
      { title: "Compare dogs carefully", description: "Use a checklist instead of choosing by appearance alone.", href: "/tools/dog-breed-comparison-checklist" },
    ],
    featureTitle: "Choose by lifestyle",
    featureIntro: "There is no universally best breed. Use these pathways to compare the household's real routine with an individual dog's temperament, energy, health, training, grooming, and long-term care needs.",
    features: [
      { title: "Best Family Dogs", description: "Think about children, visitors, energy, supervision, training, and individual temperament.", href: "/breeds/best-family-dogs-south-africa" },
      { title: "Dogs for Active Owners", description: "Match walking, hiking, running, training, heat, and recovery to a suitable individual.", href: "/breeds/best-dogs-for-active-owners-south-africa", image: { src: "/images/guides/active-dog-owner-south-africa.webp", alt: "Owner walking a healthy dog on a South African trail" } },
      { title: "Dogs for Small Homes", description: "Compare barking, energy, settling, toilet access, property rules, and daily exercise.", href: "/breeds/best-dogs-for-small-homes-south-africa", image: { src: "/images/guides/dog-small-home-south-africa.webp", alt: "Dog relaxing with its owner in a compact home" } },
    ],
    guidance: {
      title: "Start with the life you can offer",
      body: [
        "Breed type can suggest tendencies, but it cannot guarantee behaviour, health, silence, trainability, or suitability. Compare the individual dog with your housing, weekday time, children, other animals, activity, climate, grooming ability, budget, and access to veterinary and training support.",
      ],
    },
    groups: [
      { title: "Family and first-time owners", description: "Explore household fit, children, sociability, training needs, and beginner expectations.", matches: (href) => /(family|first-time|children|beginner)/.test(href) },
      { title: "Homes, climate, and daily routine", description: "Compare dogs for small homes, gardens, quieter living, shedding, and South African weather.", matches: (href) => /(small-home|small-garden|apartment|quiet|shed|hot-weather|cold-weather)/.test(href) },
      { title: "Activity, work, and security", description: "Understand drive, exercise, outdoor companionship, guarding, and responsible control.", matches: (href) => /(active|guard|security|working|hiking|running)/.test(href) },
      { title: "Breed profiles", description: "Read individual profiles for care, temperament context, health questions, grooming, training, and lifestyle fit.", matches: (href) => href.startsWith("/breeds/") },
    ],
    remainingTitle: "Comparison tools and related guides",
    remainingDescription: "Use these supporting resources to compare care commitments and make a more considered choice.",
  },
  food: {
    theme: "food",
    image: {
      src: "/images/hubs/dog-food-guides-south-africa.webp",
      alt: "Dog owner reviewing unbranded food options while preparing a dog's meal",
      width: 1536,
      height: 1024,
    },
    heroLinks: [
      { title: "Choose food for your dog", description: "Compare life stage, body condition, health, daily cost, and availability.", href: "/food/best-dog-food-south-africa" },
      { title: "Estimate a starting portion", description: "Use the feeding calculator, then monitor the individual dog.", href: "/tools/dog-feeding-calculator" },
    ],
    featureTitle: "Choose food for the dog in front of you",
    featureIntro: "No single food is universally best. A suitable choice depends on life stage, body condition, activity, health, digestibility, feeding amount, storage, availability, household budget, and veterinary guidance where needed.",
    features: [
      { title: "Best Dog Food: How to Choose", description: "A neutral decision guide without unsupported brand rankings.", href: "/food/best-dog-food-south-africa", image: { src: "/images/guides/choosing-dog-food-south-africa.webp", alt: "Dog owner comparing plain dog food options" } },
      { title: "Dog Food Comparison", description: "Compare labels, feeding amounts, format, cost, and practical fit.", href: "/food/dog-food-comparison-south-africa" },
      { title: "Feeding Calculator", description: "Estimate an initial portion, then adjust using body condition and veterinary advice.", href: "/tools/dog-feeding-calculator" },
      { title: "Toxic Foods", description: "Know which household foods require prevention and urgent veterinary advice.", href: "/health/toxic-foods-for-dogs-south-africa", image: { src: "/images/guides/toxic-foods-dogs-south-africa.webp", alt: "Dog owner keeping risky foods out of reach" } },
    ],
    guidance: {
      title: "Why there is no universal winner",
      body: [
        "A food that suits one healthy adult may be wrong for a growing puppy, a senior dog, a dog with a medical condition, or a household that cannot store or obtain it reliably. Look beyond the front of the bag and assess the complete feeding plan, the dog's response, daily cost, and whether professional guidance is needed.",
      ],
    },
    groups: [
      { title: "Choosing food", description: "Compare formats, labels, life stage, body condition, and practical suitability.", matches: (href) => /(dog-food|read-dog-food|comparison|best-dog-food|puppy-food|senior-dog-food)/.test(href) },
      { title: "Feeding and portions", description: "Plan portions, transitions, schedules, and monitoring without treating a calculator as a prescription.", matches: (href) => /(feeding|portion|calculator|how-much|transition)/.test(href) },
      { title: "Special diet considerations", description: "Prepare veterinary conversations about sensitivities, allergies, medical diets, and feeding formats.", matches: (href) => /(allerg|sensitive|raw|home-cooked|grain|medical|pancrea|special)/.test(href) },
      { title: "Food safety", description: "Prevent toxic exposures, unsafe leftovers, bones, spoilage, and kitchen mistakes.", matches: (href) => /(can-dogs-eat|foods-dogs|toxic|chocolate|grape|bone|safe|hazard)/.test(href) },
      { title: "Cost and storage", description: "Compare daily cost, pack use, storage, availability, and household planning.", matches: (href) => /(cost|budget|storage|price)/.test(href) },
    ],
    remainingTitle: "More feeding guides",
    remainingDescription: "Browse additional food and feeding resources for the dog's life stage and household routine.",
  },
  adoption: {
    theme: "adoption",
    image: {
      src: "/images/hubs/dog-adoption-guides-south-africa.webp",
      alt: "Prospective adopter calmly meeting a healthy rescue dog with a welfare worker",
      width: 1536,
      height: 1024,
    },
    heroLinks: [
      { title: "Plan a responsible adoption", description: "Assess fit, records, behaviour, cost, and the first week.", href: "/adoption/dog-adoption-south-africa" },
      { title: "Check a puppy listing", description: "Verify the seller, puppy, records, payment, and handover.", href: "/adoption/puppy-scam-checklist-south-africa" },
    ],
    featureTitle: "Before you adopt",
    featureIntro: "A thoughtful adoption starts with an honest household assessment, careful questions, and enough time to understand the individual dog. Processes differ between organisations, so ask rather than assuming one universal policy.",
    features: [
      { title: "Dog Adoption in South Africa", description: "Assess household fit, rescue questions, contracts, records, behaviour, and the first week.", href: "/adoption/dog-adoption-south-africa", image: { src: "/images/guides/dog-adoption-south-africa.webp", alt: "Prospective adopter meeting a rescue dog calmly" } },
      { title: "Puppy Scam Checklist", description: "Verify identity, records, payment, welfare, and handover before committing.", href: "/adoption/puppy-scam-checklist-south-africa", image: { src: "/images/guides/puppy-scam-verification-south-africa.webp", alt: "Prospective puppy owner checking information before payment" } },
      { title: "Questions Before Adopting", description: "Prepare practical questions about health, temperament, routine, and observed behaviour.", href: "/adoption/questions-to-ask-before-adopting-a-dog" },
      { title: "Rescue Dog's First Week", description: "Plan calm introductions, decompression, routine, veterinary care, and support.", href: "/adoption/rescue-dog-first-week-home-south-africa" },
      { title: "Shelter Checklist", description: "Keep records, household fit, meetings, and follow-up questions organised.", href: "/adoption/dog-shelter-checklist-south-africa" },
    ],
    guidance: {
      title: "Choose the individual, not the story",
      body: [
        "A dog's appearance or rescue story cannot tell you everything about energy, health, sociability, fear, guarding, separation, grooming, or home suitability. Ask what has actually been observed and avoid rushed decisions that leave no room for household planning.",
      ],
    },
    checklist: {
      title: "Adoption readiness checklist",
      items: [
        "Does the individual dog's energy, temperament, age, and care fit the household?",
        "Can the household afford routine care, training, food, services, and unexpected veterinary treatment?",
        "Is there enough weekday time for exercise, settling, training, companionship, and gradual adjustment?",
        "How will children, resident dogs, cats, visitors, and shared spaces be managed?",
        "Do the landlord, body corporate, complex, or estate rules allow this dog?",
        "Which vaccination, sterilisation, microchip, medication, and medical records are available?",
        "What behaviour history has been observed, and when should the rescue or a veterinarian be contacted?",
      ],
    },
    groups: [
      { title: "Prepare and ask", description: "Use checklists and questions to assess the rescue, records, process, and household readiness.", matches: (href) => /(question|checklist|shelter|scam|before-adopt)/.test(href) },
      { title: "Choosing the right dog", description: "Compare puppies, adults, temperament, lifestyle, and individual household fit.", matches: (href) => /(puppy|adult|right-dog|choos|breed)/.test(href) },
      { title: "First days and adjustment", description: "Plan decompression, introductions, routine, training, and early veterinary care.", matches: (href) => /(first-week|first-days|new-dog|introduc|settling|rescue-dog)/.test(href) },
      { title: "Responsible long-term care", description: "Connect adoption decisions with health, sterilisation, identification, cost, and training.", matches: (href) => /(steril|microchip|health|cost|training|insurance)/.test(href) },
    ],
    remainingTitle: "More adoption guidance",
    remainingDescription: "Browse the remaining resources for responsible adoption, rehoming, and early care.",
  },
  costs: {
    theme: "costs",
    image: {
      src: "/images/hubs/dog-cost-guides-south-africa.webp",
      alt: "Dog owner planning household dog expenses with a calculator and notebook",
      width: 1536,
      height: 1024,
    },
    heroLinks: [
      { title: "Build a realistic dog budget", description: "Start with recurring, annual, and unexpected costs.", href: "/costs/cost-of-owning-a-dog-south-africa" },
      { title: "Use your own figures", description: "Estimate monthly ownership costs with the calculator.", href: "/tools/dog-cost-calculator" },
    ],
    featureTitle: "Plan the whole cost, not one price",
    featureIntro: "Dog costs vary by individual health, size, life stage, location, household choices, and service needs. Use your own current quotes and records instead of relying on an invented national average.",
    features: [
      { title: "Cost of Owning a Dog", description: "Build a complete South African budget covering recurring, annual, setup, and emergency costs.", href: "/costs/cost-of-owning-a-dog-south-africa", image: { src: "/images/guides/dog-ownership-budget-south-africa.webp", alt: "Dog owner planning a household dog budget" } },
      { title: "Dog Cost Calculator", description: "Turn your own food, veterinary, grooming, training, insurance, and service figures into a monthly estimate.", href: "/tools/dog-cost-calculator" },
      { title: "Emergency Vet Costs", description: "Prepare for urgent consultation, diagnostics, hospitalisation, and follow-up without inventing a quote.", href: "/costs/emergency-vet-costs-south-africa" },
      { title: "Grooming Costs", description: "Plan by coat, size, condition, frequency, and home-care ability.", href: "/costs/dog-grooming-costs-south-africa" },
      { title: "Training Costs", description: "Compare puppy classes, group skills, private coaching, and behaviour support.", href: "/costs/dog-training-costs-south-africa" },
      { title: "Insurance Planning", description: "Compare eligible risks, exclusions, waiting periods, excesses, and savings needs.", href: "/insurance/pet-insurance-for-dogs-south-africa", image: { src: "/images/guides/pet-insurance-dog-planning-south-africa.webp", alt: "Dog owner reviewing insurance planning documents" } },
    ],
    guidance: {
      title: "Use local figures and keep revising",
      body: [
        "Separate ongoing costs such as food and prevention from one-off setup, annual renewals, and unpredictable veterinary care. A realistic plan includes both cash flow and an emergency strategy, then changes as the dog ages or the household's circumstances change.",
      ],
    },
    groups: [
      { title: "Ongoing costs", description: "Food, grooming, training, routine veterinary care, prevention, and regular services.", matches: (href) => !href.startsWith("/local-costs/") && /(monthly|food|groom|training|vaccin|prevent|walker|daycare|boarding)/.test(href) },
      { title: "One-off and life-stage costs", description: "Setup, puppy care, adoption, sterilisation, identification, and age-related transitions.", matches: (href) => !href.startsWith("/local-costs/") && /(first-year|puppy|setup|adoption|steril|spay|neuter|microchip|senior)/.test(href) },
      { title: "Unexpected costs", description: "Emergency care, diagnostics, surgery, treatment, chronic needs, and insurance decisions.", matches: (href) => !href.startsWith("/local-costs/") && /(emergency|vet|surgery|treatment|chronic|insurance|xray|hospital)/.test(href) },
      { title: "Planning tools", description: "Use calculators and checklists with your own current quotes and spending records.", matches: (href) => !href.startsWith("/local-costs/") && /(calculator|budget|checklist|compare)/.test(href) },
      { title: "Local cost references", description: "Location-specific pages remain available as secondary planning references and are not national price claims.", matches: (href) => href.startsWith("/local-costs/") },
    ],
    remainingTitle: "More cost guides",
    remainingDescription: "Browse additional cost topics without treating any one guide as a universal quote.",
  },
};

export function getPremiumHubConfig(slug: string) {
  return premiumHubConfigs[slug];
}
