import type { CardLink, GuideContent, HubContent, Source } from "@/lib/content";

type PuppyGuide = {
  slug: string;
  title: string;
  seoTitle: string;
  description: string;
  summary: string;
  context: string;
  ageRows: string[][];
  doList: string[];
  avoidList: string[];
  contactList: string[];
  checklist: string[];
  prevention: string[];
  faqs: GuideContent["faqs"];
  related: CardLink[];
  sources?: Source[];
};

const reviewed = "2026-05-15";

const puppySources: Source[] = [
  {
    label: "WSAVA Vaccination Guidelines",
    href: "https://wsava.org/global-guidelines/vaccination-guidelines/",
    note: "International veterinary vaccination guidance used for owner education and vet discussions.",
  },
  {
    label: "South African Veterinary Council",
    href: "https://savc.org.za/",
    note: "South African veterinary professional regulation and context for registered veterinary care.",
  },
  {
    label: "South African Veterinary Association",
    href: "https://www.sava.co.za/",
    note: "South African veterinary profession and animal health context.",
  },
  {
    label: "South African Government rabies information",
    href: "https://www.gov.za/issues/rabies",
    note: "Official South African rabies awareness and prevention context.",
  },
  {
    label: "NSPCA choosing a dog",
    href: "https://nspca.co.za/choosing-a-dog/",
    note: "South African animal welfare guidance on responsible dog choice and adoption.",
  },
];

const nutritionSources: Source[] = [
  {
    label: "WSAVA Global Nutrition Guidelines",
    href: "https://wsava.org/global-guidelines/global-nutrition-guidelines/",
    note: "Veterinary nutrition tools for diet history, body condition, and feeding conversations with vets.",
  },
  ...puppySources,
];

const trainingSources: Source[] = [
  {
    label: "American Veterinary Society of Animal Behavior puppy socialization position statement",
    href: "https://avsab.org/resources/position-statements/",
    note: "Veterinary behaviour guidance supporting safe, early, humane puppy socialisation with disease-risk awareness.",
  },
  {
    label: "RSPCA dog training guidance",
    href: "https://www.rspca.org.uk/adviceandwelfare/pets/dogs/training",
    note: "Animal welfare guidance on humane, reward-based dog training.",
  },
  ...puppySources,
];

const puppyRelated: CardLink[] = [
  {
    title: "Puppy Scam Checklist",
    description: "Avoid pressure payments, missing paperwork, and suspicious adverts.",
    href: "/adoption/puppy-scam-checklist-south-africa",
  },
  {
    title: "Puppy First-Year Cost",
    description: "Plan vaccines, food, training, gear, and vet care.",
    href: "/costs/puppy-first-year-cost-south-africa",
  },
  {
    title: "Parvovirus",
    description: "Understand puppy vomiting, diarrhoea, and urgent warning signs.",
    href: "/emergency/parvovirus-in-dogs-south-africa",
  },
];

const guides: PuppyGuide[] = [
  {
    slug: "puppy-care-south-africa",
    title: "Puppy Care in South Africa: First-Year Guide",
    seoTitle: "Puppy Care South Africa | First-Year Checklist and Guide",
    description:
      "South African puppy care guide for vaccines, food, toilet training, biting, socialisation, costs, safety and first-year vet planning.",
    summary:
      "Puppy care is a first-year routine, not one shopping trip. Start with a vet visit, vaccination plan, safe feeding, toilet training, parasite prevention, and calm socialisation that matches your puppy's vaccine status.",
    context:
      "South African puppy owners need to plan around parvovirus risk, rabies vaccination, ticks and fleas, hot summers, garden toxins, puppy scams, travel to vets, and different living setups such as flats, townhouses, farms, and busy family homes.",
    ageRows: [
      ["Before arrival", "Verify records, choose a vet, puppy-proof the home, and buy safe basics."],
      ["8-12 weeks", "Vet check, vaccine plan, toilet routine, settling, short handling, and safe socialisation."],
      ["12-16 weeks", "Continue vaccines, controlled exposure, bite training, lead practice, and parasite prevention."],
      ["4-12 months", "Adolescent manners, food transitions with vet advice, sterilisation discussion, and emergency fund planning."],
    ],
    doList: [
      "Book a vet check soon after arrival, even if the puppy looks healthy.",
      "Keep vaccination, deworming, microchip, adoption, and breeder records together.",
      "Create predictable sleep, toilet, feeding, and play routines.",
      "Use gentle reward-based training and short sessions.",
      "Save your regular vet and nearest after-hours emergency option.",
    ],
    avoidList: [
      "Do not take an incompletely vaccinated puppy to high-risk public dog areas without vet guidance.",
      "Do not punish toilet accidents, crying, or biting.",
      "Do not buy from sellers who avoid records, home checks, questions, or safe handover.",
      "Do not use human medication or old pet medication for puppy symptoms.",
    ],
    contactList: [
      "Contact a vet for vomiting, diarrhoea, weakness, not eating, coughing, breathing changes, pale gums, or suspected poisoning.",
      "Contact a qualified humane trainer for biting that escalates, fear, panic, or family conflict.",
      "Contact the shelter, rescue, or breeder registry if paperwork, health records, or handover promises do not match what you were told.",
    ],
    checklist: [
      "Vet appointment booked.",
      "Vaccination and deworming records checked.",
      "Safe sleeping area ready.",
      "Food transition plan confirmed.",
      "Puppy-proofing done before arrival.",
      "Emergency vet route known.",
    ],
    prevention: [
      "Keep puppies away from unknown dog faeces and risky public areas until your vet says outings are safer.",
      "Use vet-advised tick, flea, and worm prevention.",
      "Keep chocolate, xylitol, grapes, cooked bones, bait, and garden chemicals secured.",
      "Plan short training and rest periods to avoid overtired behaviour.",
    ],
    faqs: [
      {
        question: "What is the first thing to do with a new puppy?",
        answer:
          "Book a vet check, confirm vaccination and deworming records, and set up a safe routine for food, sleep, toilet breaks, and gentle handling.",
      },
      {
        question: "Can I take my puppy to a dog park?",
        answer:
          "Only when your vet says your puppy's vaccine status and local risk make it appropriate. Unknown dog faeces and high-traffic dog areas can be risky for young puppies.",
      },
      {
        question: "Does DogHaven replace a puppy class or vet?",
        answer:
          "No. DogHaven is educational. Puppies with urgent symptoms need a veterinarian, and behaviour concerns are best handled with a humane qualified trainer.",
      },
    ],
    related: [
      { title: "New Puppy Checklist", description: "Prepare before arrival.", href: "/puppy/new-puppy-checklist-south-africa" },
      { title: "Puppy Vaccination Schedule", description: "Plan vaccines with your vet.", href: "/puppy/puppy-vaccination-schedule-south-africa" },
      { title: "Puppy Food", description: "Feed growth safely.", href: "/puppy/puppy-food-south-africa" },
    ],
  },
  {
    slug: "new-puppy-checklist-south-africa",
    title: "New Puppy Checklist for South African Homes",
    seoTitle: "New Puppy Checklist South Africa | What to Prepare",
    description:
      "A practical new puppy checklist for South African homes covering vet records, puppy-proofing, supplies, first night setup, safety, and scams.",
    summary:
      "A good puppy checklist starts with records and safety, not toys. Confirm health paperwork, choose a vet, puppy-proof the home, and plan the first week before the puppy arrives.",
    context:
      "Whether you adopt from a shelter, use a rescue group, or buy from a responsible breeder, South African owners should verify vaccination records, deworming, microchipping, sterilisation policies, and who to contact if the puppy becomes ill after handover.",
    ageRows: [
      ["Before handover", "Confirm records, payment safety, collection plan, and questions for the shelter or breeder."],
      ["First 24 hours", "Keep the home calm, offer the same food, start toilet trips, and watch for illness."],
      ["First week", "Vet check, routine, gentle handling, and safe exposure at home."],
      ["First month", "Continue vaccines, training, food transition, and socialisation planning with your vet."],
    ],
    doList: [
      "Ask for written vaccination, deworming, microchip, and health records.",
      "Choose a vet before collection day.",
      "Prepare a quiet sleeping area, puppy-safe cleaner, food bowls, collar, lead, and ID tag.",
      "Use baby gates or pens to manage access safely.",
      "Keep the first week simple and predictable.",
    ],
    avoidList: [
      "Do not pay a suspicious seller before verifying the puppy and paperwork.",
      "Do not change food suddenly on the first day unless a vet advises it.",
      "Do not invite many visitors before the puppy has settled.",
      "Do not let children carry the puppy unsupervised.",
    ],
    contactList: [
      "Contact a vet if your puppy has vomiting, diarrhoea, coughing, weakness, or refuses food.",
      "Contact the shelter, rescue, or breeder promptly if records are missing or health promises were not met.",
      "Contact a humane puppy trainer if the household is struggling with biting, crying, or toilet routines.",
    ],
    checklist: [
      "Vaccination record.",
      "Deworming record.",
      "Microchip details if available.",
      "Food for the first week.",
      "Safe bed or crate area.",
      "Cleaning supplies.",
      "Vet appointment.",
      "Emergency fund or insurance comparison.",
    ],
    prevention: [
      "Keep the puppy away from unknown dogs and public dog toilets until your vet advises.",
      "Lock away bait, pesticides, pool chemicals, cleaning products, and human medication.",
      "Block stairs, balconies, pools, and gaps in gates.",
      "Plan car transport with a secure carrier or restraint.",
    ],
    faqs: [
      {
        question: "What paperwork should a new puppy come with?",
        answer:
          "Ask for vaccination, deworming, microchip, adoption or purchase agreement, and any health or sterilisation policy records that apply.",
      },
      {
        question: "Should I take a new puppy to the vet immediately?",
        answer:
          "A vet check soon after arrival is wise, especially if records are unclear, the puppy is from a high-risk environment, or any symptoms appear.",
      },
      {
        question: "What is the biggest first-week mistake?",
        answer:
          "Doing too much too quickly. Keep the first week calm, safe, and routine-based.",
      },
    ],
    related: [
      { title: "Puppy Scam Checklist", description: "Avoid unsafe sellers.", href: "/adoption/puppy-scam-checklist-south-africa" },
      { title: "Puppy First Vet Visit", description: "What to ask the vet.", href: "/puppy/puppy-first-vet-visit-south-africa" },
      { title: "Puppy-Proofing", description: "Prepare the home safely.", href: "/puppy/puppy-proofing-your-home-south-africa" },
    ],
  },
  {
    slug: "puppy-vaccination-schedule-south-africa",
    title: "Puppy Vaccination Schedule in South Africa",
    seoTitle: "Puppy Vaccination Schedule South Africa | Vet Guide",
    description:
      "A cautious South African puppy vaccination guide covering core vaccines, rabies, parvovirus risk, boosters, records, and questions for your vet.",
    summary:
      "Your vet should set your puppy's vaccine schedule. Puppies usually need a series of vaccines, not one visit, and rabies vaccination is an important South African public-health responsibility.",
    context:
      "Parvovirus remains a major puppy concern, especially where unknown dogs, contaminated ground, shelters, or incomplete records are involved. Rabies risk also matters in South Africa, so keep official vaccine records safe.",
    ageRows: [
      ["6-8 weeks", "Many puppies start core vaccine protection around this stage, depending on vet assessment and history."],
      ["9-12 weeks", "Follow-up vaccines are commonly needed as immunity develops."],
      ["12-16 weeks", "Further core protection and rabies timing should be discussed with your vet."],
      ["After puppy series", "Boosters depend on vaccine type, local risk, law, and your vet's plan."],
    ],
    doList: [
      "Ask your vet for a written schedule based on your puppy's age and records.",
      "Keep vaccine cards and rabies certificates safe.",
      "Ask when public walks, puppy classes, grooming, boarding, and dog parks become safer.",
      "Tell your vet if your puppy came from a shelter, informal seller, or unknown environment.",
    ],
    avoidList: [
      "Do not assume one injection means fully protected.",
      "Do not take incompletely vaccinated puppies to high-risk public dog areas.",
      "Do not ignore vomiting, diarrhoea, weakness, or appetite loss after any illness concern.",
      "Do not buy a puppy with vague or missing vaccine records without a vet check.",
    ],
    contactList: [
      "Contact a vet for a schedule, missed vaccines, unclear records, or illness before vaccination.",
      "Contact a vet urgently for puppy vomiting, diarrhoea, weakness, coughing, collapse, or not eating.",
      "Contact the shelter, rescue, breeder, or registry if vaccine paperwork seems inconsistent.",
    ],
    checklist: [
      "Current vaccine card.",
      "Puppy age and source.",
      "Previous vaccine dates.",
      "Rabies plan.",
      "Safe socialisation plan.",
      "Next appointment booked.",
    ],
    prevention: [
      "Carry puppies in high-risk areas instead of letting them walk on unknown ground when your vet advises caution.",
      "Avoid public dog parks until your vet says your puppy is ready.",
      "Clean accidents safely and avoid contact with unknown dog faeces.",
      "Keep all dogs in the home appropriately vaccinated.",
    ],
    faqs: [
      {
        question: "When can my puppy go outside?",
        answer:
          "Ask your vet. Safe exposure can begin earlier than risky public dog areas, but timing depends on vaccine status and local disease risk.",
      },
      {
        question: "Is rabies vaccination necessary?",
        answer:
          "Rabies vaccination is a serious public-health responsibility in South Africa. Your vet can advise on timing and legal requirements.",
      },
      {
        question: "What if I missed a puppy vaccine?",
        answer:
          "Phone your vet. They can adjust the schedule based on age, records, and vaccine history.",
      },
    ],
    related: [
      { title: "Vaccination Schedule", description: "Adult and puppy vaccine context.", href: "/health/vaccination-schedule-south-africa" },
      { title: "Parvovirus", description: "Puppy emergency warning signs.", href: "/emergency/parvovirus-in-dogs-south-africa" },
      { title: "Puppy Socialisation", description: "Balance learning and disease risk.", href: "/puppy/puppy-socialisation-south-africa" },
    ],
    sources: puppySources,
  },
  {
    slug: "puppy-deworming-south-africa",
    title: "Puppy Deworming in South Africa",
    seoTitle: "Puppy Deworming South Africa | Practical Vet Guidance",
    description:
      "A cautious South African guide to puppy deworming, parasite risk, records, stool signs, flea links, hygiene, and when to contact a vet.",
    summary:
      "Puppies need age- and weight-appropriate parasite prevention. Ask your vet for a deworming plan instead of guessing products or doses.",
    context:
      "Puppy parasite risk can be higher in shelters, informal litters, farms, yards with many dogs, and homes with uncertain deworming history. Fleas, stools, soil, and scavenging can all matter.",
    ageRows: [
      ["Before adoption or sale", "Ask what product was used, when, and at what weight."],
      ["First vet visit", "Vet checks weight, belly, stool history, and deworming plan."],
      ["Puppy months", "Follow repeat timing recommended by your vet."],
      ["First year", "Move into a long-term parasite prevention routine matched to lifestyle."],
    ],
    doList: [
      "Weigh your puppy accurately before parasite products.",
      "Keep a written deworming record.",
      "Ask your vet about flea prevention because fleas can be linked to tapeworm risk.",
      "Pick up stools quickly and clean puppy areas.",
    ],
    avoidList: [
      "Do not guess doses.",
      "Do not use livestock products or adult dog products without vet advice.",
      "Do not assume a pot belly is normal puppy shape.",
      "Do not delay care for diarrhoea, vomiting, pale gums, or weakness.",
    ],
    contactList: [
      "Contact a vet for the correct product, dose, and timing.",
      "Contact a vet promptly if your puppy has diarrhoea, vomiting, a swollen belly, pale gums, or visible worms.",
      "Contact the shelter or breeder for missing deworming records.",
    ],
    checklist: [
      "Puppy weight.",
      "Last deworming date.",
      "Product name if known.",
      "Stool quality.",
      "Flea signs.",
      "Other pets in the household.",
    ],
    prevention: [
      "Follow a vet-advised schedule.",
      "Control fleas safely.",
      "Clean sleeping areas and stools.",
      "Wash hands after handling stools or cleaning accidents.",
    ],
    faqs: [
      {
        question: "Can I deworm a puppy myself?",
        answer:
          "Use veterinary guidance because age, weight, product choice, and health status matter.",
      },
      {
        question: "Can worms make puppies sick?",
        answer:
          "Yes. Puppies can become weak, bloated, anaemic, or develop diarrhoea or vomiting. Contact a vet if signs appear.",
      },
      {
        question: "Do indoor puppies need parasite prevention?",
        answer:
          "Often yes, but the plan depends on risk, age, other pets, fleas, and vet advice.",
      },
    ],
    related: [
      { title: "Dog Worms", description: "Signs and prevention.", href: "/health/dog-worms-south-africa" },
      { title: "Ticks and Fleas", description: "Parasite prevention in South Africa.", href: "/health/ticks-and-fleas-dogs-south-africa" },
      { title: "Puppy First Vet Visit", description: "Questions for the first appointment.", href: "/puppy/puppy-first-vet-visit-south-africa" },
    ],
    sources: puppySources,
  },
  {
    slug: "puppy-first-vet-visit-south-africa",
    title: "Puppy First Vet Visit in South Africa",
    seoTitle: "Puppy First Vet Visit South Africa | What to Ask",
    description:
      "A practical guide to a puppy's first vet visit in South Africa, including records, vaccines, deworming, food, microchips, insurance, and red flags.",
    summary:
      "The first vet visit checks far more than vaccines. It is where you confirm records, health, parasite prevention, food, growth, socialisation safety, microchipping, and emergency planning.",
    context:
      "A first vet visit is especially important if your puppy came from an informal seller, a rescue environment, a shelter, a farm litter, or has incomplete paperwork. Puppies can look bright and still be incubating illness.",
    ageRows: [
      ["Before the appointment", "Collect vaccine, deworming, adoption, breeder, and microchip records."],
      ["At the appointment", "Ask about vaccines, deworming, feeding, body condition, teeth, heart, skin, and stool."],
      ["After the appointment", "Book follow-ups and write down the emergency plan."],
      ["First year", "Recheck growth, behaviour, sterilisation timing, and insurance choices."],
    ],
    doList: [
      "Bring all paperwork and a fresh stool sample if your vet asks.",
      "Ask when puppy classes and public outings are safe.",
      "Ask about ticks, fleas, worms, rabies, parvovirus, and microchipping.",
      "Discuss food amount, body condition, and expected adult size.",
    ],
    avoidList: [
      "Do not hide symptoms because you are worried about cost.",
      "Do not carry the puppy around a busy clinic floor if your vet asks you to avoid contact.",
      "Do not use the first visit only as a vaccine appointment.",
      "Do not delay if symptoms appear before the appointment.",
    ],
    contactList: [
      "Contact the vet before the appointment if the puppy vomits, has diarrhoea, coughs, is weak, or refuses food.",
      "Contact the shelter, rescue, breeder, or registry if paperwork is missing or contradictory.",
      "Contact your insurer directly if you are comparing puppy insurance waiting periods.",
    ],
    checklist: [
      "Vaccine card.",
      "Deworming dates.",
      "Food name and amount.",
      "Questions about toilet training, biting, and crying.",
      "Microchip details.",
      "Insurance or emergency fund questions.",
    ],
    prevention: [
      "Schedule follow-up vaccine appointments before leaving the clinic.",
      "Keep records photographed and stored digitally.",
      "Use a secure carrier or restraint for travel.",
      "Keep the puppy away from unknown dogs until your vet advises.",
    ],
    faqs: [
      {
        question: "How soon should a new puppy see a vet?",
        answer:
          "Soon after arrival is wise, and immediately if there are symptoms such as vomiting, diarrhoea, coughing, weakness, or not eating.",
      },
      {
        question: "What should I bring to the first vet visit?",
        answer:
          "Bring vaccine and deworming records, adoption or breeder paperwork, food details, medication history, and questions.",
      },
      {
        question: "Can the vet help with behaviour questions?",
        answer:
          "Yes. Vets can identify health concerns and may refer you to a humane puppy trainer or behaviour professional.",
      },
    ],
    related: [
      { title: "Puppy Vaccination Schedule", description: "Vet-led vaccine planning.", href: "/puppy/puppy-vaccination-schedule-south-africa" },
      { title: "Puppy Deworming", description: "Parasite prevention questions.", href: "/puppy/puppy-deworming-south-africa" },
      { title: "Pet Insurance", description: "Compare cover and waiting periods.", href: "/insurance/pet-insurance-for-dogs-south-africa" },
    ],
    sources: puppySources,
  },
  {
    slug: "puppy-food-south-africa",
    title: "Puppy Food in South Africa",
    seoTitle: "Puppy Food South Africa | Feeding and Growth Guide",
    description:
      "A practical South African puppy food guide covering growth diets, feeding amounts, food transitions, treats, unsafe foods, costs, and vet advice.",
    summary:
      "Puppies need food formulated for growth and sized to their age, breed, body condition, and health. Avoid brand hype and ask your vet if growth, stool, skin, or weight concerns appear.",
    context:
      "South African puppy owners often balance cost, bag size, availability, load-shedding storage, treats, table scraps, and advice from sellers or social media. The safest choice is a complete puppy diet that suits your puppy and is monitored with your vet.",
    ageRows: [
      ["First week home", "Keep food stable unless your vet advises a change."],
      ["8-16 weeks", "Feed growth food in measured meals and watch stool and weight."],
      ["4-12 months", "Adjust amounts as growth changes; large breeds need careful growth support."],
      ["Approaching adulthood", "Ask your vet when to transition to adult food."],
    ],
    doList: [
      "Ask what the puppy has been eating and transition slowly if changing.",
      "Use measured meals instead of free-pouring.",
      "Choose food appropriate for puppy growth and expected adult size.",
      "Keep treats small and count them as part of daily intake.",
    ],
    avoidList: [
      "Do not feed adult maintenance food to a growing puppy unless your vet specifically advises.",
      "Do not use pap, rice, eggs, or homemade meals as the main puppy diet without professional formulation.",
      "Do not feed cooked bones, biltong, boerewors, chocolate, grapes, onion, garlic, or xylitol.",
      "Do not change foods repeatedly during diarrhoea without vet advice.",
    ],
    contactList: [
      "Contact a vet if your puppy has vomiting, diarrhoea, poor growth, weight loss, severe itching, or refuses food.",
      "Contact a vet or veterinary nutrition professional before homemade or raw puppy diets.",
      "Contact the shelter or breeder for the original diet and feeding history.",
    ],
    checklist: [
      "Current food and amount.",
      "Meal times.",
      "Stool quality.",
      "Weight and body condition.",
      "Treats and chews.",
      "Unsafe foods removed.",
    ],
    prevention: [
      "Store food sealed and dry.",
      "Keep feeding routines consistent.",
      "Avoid fatty human leftovers.",
      "Track weight at vet visits.",
    ],
    faqs: [
      {
        question: "Can puppies eat adult dog food?",
        answer:
          "Puppies usually need growth nutrition. Ask your vet before using adult food for a puppy.",
      },
      {
        question: "Should I feed raw food to a puppy?",
        answer:
          "Puppies have precise nutrition needs and raw diets carry safety risks. Speak to a vet or veterinary nutrition professional first.",
      },
      {
        question: "How do I change puppy food?",
        answer:
          "Transition gradually when possible and contact your vet if vomiting, diarrhoea, or refusal to eat occurs.",
      },
    ],
    related: [
      { title: "Dog Food South Africa", description: "Feeding choices and labels.", href: "/food/dog-food-south-africa" },
      { title: "Puppy Food Guide", description: "Existing food hub puppy guide.", href: "/food/puppy-food-south-africa" },
      { title: "Foods Dogs Should Never Eat", description: "Unsafe human foods.", href: "/food/foods-dogs-should-never-eat-south-africa" },
    ],
    sources: nutritionSources,
  },
  {
    slug: "puppy-potty-training-south-africa",
    title: "Puppy Potty Training in South Africa",
    seoTitle: "Puppy Potty Training South Africa | Humane Toilet Guide",
    description:
      "A practical puppy potty training guide for South African homes, flats, townhouses, gardens, routines, accidents, and humane training.",
    summary:
      "Potty training works best with routine, supervision, rewards, and patience. Punishment usually makes puppies hide accidents instead of learning faster.",
    context:
      "South African homes vary from garden houses to flats, townhouses, complexes, farms, and homes with rainy Cape winters or hot inland summers. Choose a toilet plan your household can repeat every day.",
    ageRows: [
      ["8-10 weeks", "Very frequent toilet trips, after sleep, food, play, and excitement."],
      ["10-16 weeks", "Routine improves, but accidents are still normal."],
      ["4-6 months", "Longer holding ability, more independence, and fewer accidents with consistency."],
      ["6 months+", "Setbacks can happen during adolescence, illness, weather changes, or routine disruption."],
    ],
    doList: [
      "Take the puppy out after waking, eating, playing, and before sleep.",
      "Reward immediately in the right toilet spot.",
      "Use gates, pens, or supervision to prevent wandering accidents.",
      "Clean accidents with an enzymatic cleaner where possible.",
    ],
    avoidList: [
      "Do not rub a puppy's nose in accidents.",
      "Do not shout after the fact; the puppy will not understand the timing.",
      "Do not expect young puppies to hold for adult-dog periods.",
      "Do not use risky public grass before your vet says outings are safe.",
    ],
    contactList: [
      "Contact a vet for diarrhoea, blood, repeated accidents with pain, straining, or sudden regression.",
      "Contact a humane trainer if the household cannot maintain a routine or the puppy is anxious.",
      "Contact your body corporate or landlord if complex rules affect toilet areas.",
    ],
    checklist: [
      "Toilet spot chosen.",
      "Schedule written down.",
      "Rewards ready.",
      "Cleaner ready.",
      "Night plan set.",
      "Vaccination-safe toilet area confirmed.",
    ],
    prevention: [
      "Keep meals predictable.",
      "Supervise after water, play, and naps.",
      "Use a safe, clean toilet area.",
      "Watch for illness if accidents suddenly increase.",
    ],
    faqs: [
      {
        question: "How long does potty training take?",
        answer:
          "It varies by puppy, age, routine, health, and household consistency. Young puppies need time and many repetitions.",
      },
      {
        question: "Should I punish puppy accidents?",
        answer:
          "No. Calmly clean up and improve supervision. Rewarding the right spot teaches faster and more kindly.",
      },
      {
        question: "What if my puppy suddenly starts having accidents again?",
        answer:
          "Check for routine changes, stress, diarrhoea, urinary signs, or pain. Contact a vet if there are health signs.",
      },
    ],
    related: [
      { title: "Puppy Crying at Night", description: "Night routines and settling.", href: "/puppy/puppy-crying-at-night-south-africa" },
      { title: "Puppy Socialisation", description: "Safe early learning.", href: "/puppy/puppy-socialisation-south-africa" },
      { title: "Puppy Training", description: "Broader puppy training guide.", href: "/training/puppy-training-south-africa" },
    ],
    sources: trainingSources,
  },
  {
    slug: "puppy-biting-and-chewing-south-africa",
    title: "Puppy Biting and Chewing in South Africa",
    seoTitle: "Puppy Biting and Chewing South Africa | Humane Training Guide",
    description:
      "A humane guide to puppy biting and chewing, teething, safe chew choices, family rules, redirection, and when to contact a trainer or vet.",
    summary:
      "Puppy biting and chewing are normal, but they still need kind boundaries. Give safe outlets, manage the environment, reward calm choices, and avoid punishment-heavy methods.",
    context:
      "Puppies chew furniture, shoes, school bags, plants, irrigation pipes, remotes, and electrical cords in South African homes. Chewing can be normal teething, boredom, overtiredness, stress, or lack of supervision.",
    ageRows: [
      ["8-12 weeks", "Mouthy play and exploration are common; use redirection and naps."],
      ["3-6 months", "Teething can increase chewing; rotate safe chew items."],
      ["6-12 months", "Adolescent energy needs training, enrichment, and supervision."],
      ["Any age", "Destructive chewing with panic or self-injury needs professional help."],
    ],
    doList: [
      "Offer safe puppy chews matched to size and chewing style.",
      "Redirect to toys before biting escalates.",
      "Use short training sessions and enough sleep.",
      "Keep shoes, cords, bins, and toxic plants out of reach.",
    ],
    avoidList: [
      "Do not hit, alpha roll, pin, shout, or frighten a puppy for biting.",
      "Do not give cooked bones or hard items that can break teeth.",
      "Do not let children roughhouse until biting is under control.",
      "Do not ignore chewing that may involve toxins, batteries, or electrical cords.",
    ],
    contactList: [
      "Contact a vet if chewing seems linked to pain, broken teeth, vomiting, or swallowed objects.",
      "Contact a humane trainer if biting is intense, frightening children, or not improving.",
      "Contact emergency care if a puppy swallowed batteries, medication, poison, string, bones, or sharp objects.",
    ],
    checklist: [
      "Safe chew options.",
      "Puppy-proofed rooms.",
      "Nap schedule.",
      "Child interaction rules.",
      "Toxic items secured.",
      "Trainer plan if biting escalates.",
    ],
    prevention: [
      "Use gates and pens before trouble starts.",
      "Rotate toys and chews.",
      "Teach children to pause play when biting starts.",
      "Reward calm behaviour and appropriate chewing.",
    ],
    faqs: [
      {
        question: "Is puppy biting aggression?",
        answer:
          "Often it is normal puppy behaviour, teething, or overtired play. A qualified trainer can help if it is intense or worrying.",
      },
      {
        question: "Can I give bones for teething?",
        answer:
          "Avoid cooked bones and ask your vet about safe chew options for your puppy.",
      },
      {
        question: "What if my puppy swallowed something?",
        answer:
          "Phone a vet promptly, especially for batteries, medication, poison, bones, string, socks, or sharp objects.",
      },
    ],
    related: [
      { title: "Puppy-Proofing", description: "Protect your puppy and home.", href: "/puppy/puppy-proofing-your-home-south-africa" },
      { title: "Puppy Potty Training", description: "Routines and supervision.", href: "/puppy/puppy-potty-training-south-africa" },
      { title: "Dog Poisoning", description: "What to do after risky ingestion.", href: "/emergency/dog-poisoning-south-africa" },
    ],
    sources: trainingSources,
  },
  {
    slug: "puppy-crying-at-night-south-africa",
    title: "Puppy Crying at Night in South Africa",
    seoTitle: "Puppy Crying at Night South Africa | Settling Guide",
    description:
      "A calm guide to puppy crying at night, first-week routines, toilet breaks, safe sleeping, separation, and when to contact a vet or trainer.",
    summary:
      "Night crying is common in new puppies. The goal is not to ignore distress forever, but to build a safe, predictable sleep routine with toilet breaks, comfort, and gradual confidence.",
    context:
      "A puppy may arrive after leaving littermates, a shelter kennel, a foster home, or a breeder. Loadshedding, townhouse noise, security lights, and family routines can all affect settling.",
    ageRows: [
      ["First nights", "Expect some crying; plan calm reassurance and toilet trips."],
      ["First week", "Keep sleep location consistent and reduce excitement before bed."],
      ["2-4 weeks home", "Gradually build independence and predictable sleep cues."],
      ["Ongoing distress", "Assess pain, illness, fear, and separation issues with help."],
    ],
    doList: [
      "Create a safe sleeping area close enough that the puppy does not panic.",
      "Take the puppy out for a quiet toilet break before bed.",
      "Keep night trips boring and calm.",
      "Use routine, gentle reassurance, and daytime naps.",
    ],
    avoidList: [
      "Do not punish crying.",
      "Do not leave a sick puppy to cry it out.",
      "Do not overstimulate the puppy at midnight with play.",
      "Do not ignore crying with vomiting, diarrhoea, coughing, or weakness.",
    ],
    contactList: [
      "Contact a vet if crying comes with illness signs, pain, bloating, coughing, vomiting, or diarrhoea.",
      "Contact a humane trainer if panic, separation distress, or household stress continues.",
      "Contact the shelter or breeder for background on the puppy's previous sleeping routine.",
    ],
    checklist: [
      "Toilet before bed.",
      "Safe sleep space.",
      "Comfortable temperature.",
      "No risky chews overnight.",
      "Calm bedtime routine.",
      "Vet check if crying seems painful or unusual.",
    ],
    prevention: [
      "Keep evenings calm.",
      "Avoid over-tired rough play.",
      "Make daytime alone-time practice gentle and short.",
      "Use safe bedding and avoid overheating in summer.",
    ],
    faqs: [
      {
        question: "Should I ignore a crying puppy?",
        answer:
          "Not automatically. Check toilet needs, safety, and illness signs. Then build independence gradually and calmly.",
      },
      {
        question: "Can a puppy sleep outside?",
        answer:
          "Young puppies are vulnerable to cold, heat, fear, theft, and hazards. Discuss safe sleeping with your vet and household.",
      },
      {
        question: "When is night crying a health concern?",
        answer:
          "Crying with vomiting, diarrhoea, coughing, pain, bloating, weakness, or not eating needs veterinary advice.",
      },
    ],
    related: [
      { title: "New Puppy Checklist", description: "First-week setup.", href: "/puppy/new-puppy-checklist-south-africa" },
      { title: "Puppy Potty Training", description: "Night toilet routines.", href: "/puppy/puppy-potty-training-south-africa" },
      { title: "Separation Anxiety", description: "When distress continues.", href: "/training/separation-anxiety-dogs-south-africa" },
    ],
    sources: trainingSources,
  },
  {
    slug: "puppy-socialisation-south-africa",
    title: "Puppy Socialisation in South Africa",
    seoTitle: "Puppy Socialisation South Africa | Safe Early Learning",
    description:
      "A South African puppy socialisation guide balancing confidence, parvovirus risk, vaccines, people, sounds, handling, and humane training.",
    summary:
      "Good socialisation is controlled, positive exposure to normal life, not throwing a puppy into busy dog parks. Balance learning with vaccine status and local disease risk.",
    context:
      "South African puppies need confidence around household staff, children, delivery bikes, taxis, thunder, security gates, other dogs, grooming, vets, beaches, estates, flats, and townhouses, while still avoiding risky public dog areas before vet clearance.",
    ageRows: [
      ["8-12 weeks", "Gentle exposure at home, carried outings where appropriate, visitors, sounds, handling, and vet-positive experiences."],
      ["12-16 weeks", "Vet-guided puppy classes, safe surfaces, controlled dog exposure, and calm car trips."],
      ["4-6 months", "Lead skills, polite greetings, grooming practice, and continued confidence work."],
      ["Adolescence", "Keep practising; fear periods and regression can happen."],
    ],
    doList: [
      "Ask your vet which socialisation options are safe before vaccine completion.",
      "Pair new sights and sounds with food, play, and calm distance.",
      "Choose well-run puppy classes that check vaccine status and use humane methods.",
      "Practise handling paws, ears, collar, harness, and gentle grooming.",
    ],
    avoidList: [
      "Do not take an unprotected puppy to high-traffic dog parks or unknown dog faeces.",
      "Do not force greetings with people, children, or dogs.",
      "Do not flood a scared puppy with noise or crowds.",
      "Do not use punishment for fear.",
    ],
    contactList: [
      "Contact your vet for disease-risk guidance before public outings.",
      "Contact a humane trainer for fear, panic, growling, or poor puppy class fit.",
      "Contact a groomer or trainer for gentle handling practice if grooming will be needed.",
    ],
    checklist: [
      "Vet socialisation advice.",
      "Vaccine status known.",
      "Safe puppy class checked.",
      "People and sound exposure plan.",
      "Handling practice.",
      "Escape route from overwhelming situations.",
    ],
    prevention: [
      "Keep experiences short and positive.",
      "Use distance instead of forcing contact.",
      "Avoid dog parks until ready.",
      "Continue socialisation after the first few weeks.",
    ],
    faqs: [
      {
        question: "Can socialisation start before vaccines are finished?",
        answer:
          "Often yes, but it must be safe and vet-guided. Controlled exposure is different from risky public dog areas.",
      },
      {
        question: "Is puppy class safe?",
        answer:
          "Ask about vaccine checks, cleaning, class size, trainer methods, and whether the class uses reward-based training.",
      },
      {
        question: "What if my puppy is scared?",
        answer:
          "Create distance, reduce pressure, and reward calm observation. Contact a humane trainer if fear persists.",
      },
    ],
    related: [
      { title: "Puppy Vaccination Schedule", description: "Balance vaccines and exposure.", href: "/puppy/puppy-vaccination-schedule-south-africa" },
      { title: "Puppy Training", description: "Reward-based puppy skills.", href: "/training/puppy-training-south-africa" },
      { title: "Choose a Dog Trainer", description: "Trainer red flags and questions.", href: "/training/how-to-choose-a-dog-trainer-south-africa" },
    ],
    sources: trainingSources,
  },
  {
    slug: "puppy-proofing-your-home-south-africa",
    title: "Puppy-Proofing Your Home in South Africa",
    seoTitle: "Puppy-Proofing Your Home South Africa | Safety Checklist",
    description:
      "A South African puppy-proofing checklist for homes, flats, gardens, pools, balconies, toxic foods, plants, cords, bins, and summer heat.",
    summary:
      "Puppy-proof before the puppy arrives. The safest home removes access to toxins, cords, bins, pools, balconies, plants, small objects, and risky garden products.",
    context:
      "South African puppy-proofing needs to include braai areas, pools, security gates, electric fencing, balconies, townhouse rules, hot paving, toxic plants, bait, pesticides, load-shedding candles, and garden chemicals.",
    ageRows: [
      ["Before arrival", "Secure the highest-risk rooms, garden, pool, and sleeping area."],
      ["First week", "Supervise constantly and update the plan based on what the puppy tries to chew."],
      ["Teething months", "Increase chew management and remove cords, shoes, bags, and remotes."],
      ["Adolescence", "Recheck gates, jumping risks, bins, and outdoor access."],
    ],
    doList: [
      "Use gates, pens, closed doors, and supervised zones.",
      "Lock away medicine, chocolate, xylitol products, grapes, pesticides, bait, and cleaning chemicals.",
      "Secure bins, pool access, balconies, and gaps under gates.",
      "Provide safe chew outlets and rest areas.",
    ],
    avoidList: [
      "Do not assume a puppy cannot reach tables, handbags, or bins.",
      "Do not leave cords, batteries, medication, or small toys accessible.",
      "Do not leave puppies unsupervised around pools, open balconies, or electric fencing.",
      "Do not rely on punishment instead of management.",
    ],
    contactList: [
      "Contact a vet urgently for swallowed objects, toxin exposure, vomiting, choking, collapse, or burns.",
      "Contact a trainer for destructive chewing that continues despite management.",
      "Contact your body corporate or landlord about pet safety rules in complexes.",
    ],
    checklist: [
      "Medication locked away.",
      "Bins secured.",
      "Cords hidden.",
      "Pool and balcony blocked.",
      "Toxic plants checked.",
      "Garden chemicals secured.",
      "Safe chew area ready.",
    ],
    prevention: [
      "Inspect at puppy eye level.",
      "Keep bags and lunch boxes off the floor.",
      "Check paving temperature before outdoor toilet trips.",
      "Use shade and water in summer.",
    ],
    faqs: [
      {
        question: "Which room should a puppy start in?",
        answer:
          "Choose a safe, easy-clean area near the family routine, with limited access and no cords, toxins, or small objects.",
      },
      {
        question: "Are gardens safe for puppies?",
        answer:
          "Not automatically. Check plants, bait, fertiliser, pesticides, pools, gaps, thorns, and other dogs' faeces.",
      },
      {
        question: "What if my puppy chews everything?",
        answer:
          "Increase management, provide safe chews, add naps, and contact a humane trainer if it becomes unmanageable.",
      },
    ],
    related: [
      { title: "Toxic Plants", description: "Garden and houseplant risks.", href: "/health/toxic-plants-for-dogs-south-africa" },
      { title: "Foods Dogs Should Never Eat", description: "Kitchen safety list.", href: "/food/foods-dogs-should-never-eat-south-africa" },
      { title: "Dog Poisoning", description: "Emergency toxin steps.", href: "/emergency/dog-poisoning-south-africa" },
    ],
  },
  {
    slug: "how-much-does-a-puppy-cost-south-africa",
    title: "How Much Does a Puppy Cost in South Africa?",
    seoTitle: "How Much Does a Puppy Cost South Africa | First-Year Budget",
    description:
      "A cautious South African puppy cost guide covering adoption or purchase, vaccines, deworming, food, training, grooming, gear, insurance, and emergency savings.",
    summary:
      "A puppy costs more than the adoption fee or purchase price. Plan for vet care, vaccines, deworming, food, training, gear, parasite prevention, grooming, insurance or savings, and emergencies.",
    context:
      "Costs vary by province, city, vet, dog size, breed, source, health, coat, training needs, and inflation. Do not rely on fake exact prices from online posts; request quotes from vets, shelters, groomers, trainers, insurers, and suppliers.",
    ageRows: [
      ["Before arrival", "Adoption or purchase, first supplies, transport, and vet check."],
      ["First 4 months", "Vaccines, deworming, parasite prevention, food, toilet setup, and puppy classes."],
      ["4-12 months", "Food increases, equipment upgrades, training, grooming, sterilisation discussion, and emergency savings."],
      ["After first year", "Adult food, routine vet care, insurance decisions, grooming, and replacement gear."],
    ],
    doList: [
      "Build a first-year budget before committing.",
      "Ask shelters or breeders what is included in the fee.",
      "Request quotes from local vets for routine care and sterilisation planning.",
      "Compare insurance documents carefully if considering cover.",
    ],
    avoidList: [
      "Do not choose a puppy based only on the cheapest upfront cost.",
      "Do not skip vaccines, parasite prevention, or vet care to save money.",
      "Do not accept vague promises about included care without records.",
      "Do not buy from suspicious sellers because the price feels urgent.",
    ],
    contactList: [
      "Contact vets for local vaccine, microchip, sterilisation, and emergency cost ranges.",
      "Contact shelters directly about adoption fees and included veterinary care.",
      "Contact insurers directly about waiting periods, exclusions, excesses, and annual limits.",
    ],
    checklist: [
      "Adoption or purchase fee.",
      "Vet check and vaccines.",
      "Deworming and parasite prevention.",
      "Food and treats.",
      "Training.",
      "Gear and replacement items.",
      "Grooming if coat needs it.",
      "Emergency fund or insurance.",
    ],
    prevention: [
      "Choose a dog size and coat type you can afford for life.",
      "Avoid puppy scams and pressure payments.",
      "Budget monthly, not only upfront.",
      "Keep a separate emergency amount where possible.",
    ],
    faqs: [
      {
        question: "Is adoption cheaper than buying a puppy?",
        answer:
          "Often the upfront cost can be lower and may include some care, but monthly food, vet care, training, and emergencies still remain.",
      },
      {
        question: "Should I get puppy insurance?",
        answer:
          "It can be worth comparing, but read waiting periods, exclusions, excesses, and annual limits carefully. DogHaven does not recommend a specific insurer.",
      },
      {
        question: "Why are large puppies more expensive?",
        answer:
          "Food, medication doses, beds, gear, transport, and some procedures often cost more as adult size increases.",
      },
    ],
    related: [
      { title: "Puppy First-Year Cost", description: "Detailed first-year budget guide.", href: "/costs/puppy-first-year-cost-south-africa" },
      { title: "Pet Insurance", description: "Understand cover and exclusions.", href: "/insurance/pet-insurance-for-dogs-south-africa" },
      { title: "Puppy Scam Checklist", description: "Avoid risky sellers.", href: "/adoption/puppy-scam-checklist-south-africa" },
    ],
    sources: puppySources,
  },
];

function toGuide(guide: PuppyGuide): GuideContent {
  return {
    slug: guide.slug,
    path: `/puppy/${guide.slug}`,
    hubTitle: "Puppy Care",
    hubPath: "/puppy",
    title: guide.title,
    seoTitle: guide.seoTitle,
    description: guide.description,
    intro: `${guide.summary} This guide is educational and does not replace a veterinarian, qualified trainer, shelter, or breeder registry.`,
    updated: reviewed,
    isHealthGuide: true,
    quickFacts: [
      `Short answer: ${guide.summary}`,
      "Urgent puppy symptoms should be discussed with a veterinarian quickly, especially vomiting, diarrhoea, weakness, coughing, not eating, collapse, or suspected poisoning.",
      "South African puppy planning should account for parvovirus risk, rabies vaccination, ticks and fleas, heat, garden hazards, and safe socialisation.",
      "Use humane, reward-based training and avoid punishment-heavy methods.",
    ],
    sections: [
      {
        heading: "South African context",
        body: [guide.context],
      },
      {
        heading: "Age-based guidance",
        body: [
          "Puppies change quickly in the first year. Use these ranges as planning prompts and follow your vet's individual guidance.",
        ],
        table: {
          headers: ["Stage", "What to focus on"],
          rows: guide.ageRows,
        },
      },
      {
        heading: "What owners should do",
        body: [
          "Keep the plan simple enough that every person in the home can follow it consistently.",
        ],
        checklist: guide.doList,
      },
      {
        heading: "What owners should avoid",
        body: [
          "Most puppy mistakes come from rushing, guessing, or using punishment when management and professional advice would be safer.",
        ],
        bullets: guide.avoidList,
      },
      {
        heading: "When to contact a vet, trainer, shelter, or breeder registry",
        body: [
          "Use professional help early. Puppies can deteriorate quickly, and early behaviour support can prevent habits becoming harder.",
        ],
        checklist: guide.contactList,
      },
      {
        heading: "Practical checklist",
        body: [
          "Use this checklist as a quick planning tool before the next vet visit or puppy milestone.",
        ],
        checklist: guide.checklist,
      },
      {
        heading: "Prevention tips",
        body: [
          "Good puppy care is mostly prevention: safe spaces, records, routines, and fast action when symptoms appear.",
        ],
        bullets: guide.prevention,
      },
    ],
    faqs: guide.faqs,
    related: [...guide.related, ...puppyRelated],
    sources: guide.sources ?? puppySources,
  };
}

export const phase11GuidePages: GuideContent[] = guides.map(toGuide);

export const puppyHub: HubContent = {
  slug: "puppy",
  path: "/puppy",
  title: "Puppy Care in South Africa",
  seoTitle: "Puppy Care South Africa | First-Year Puppy Guides",
  description:
    "Practical South African puppy care guides covering first-year setup, vaccines, deworming, food, potty training, biting, crying, socialisation, costs, and puppy-proofing.",
  kicker: "Puppy hub",
  intro:
    "Bringing home a puppy is joyful, messy, expensive, and full of tiny decisions. DogHaven's puppy hub helps South African owners plan the first year with calm, practical guidance on health, food, training, costs, safety, and when to ask a vet or trainer for help.",
  notice:
    "Puppy content on DogHaven is educational. Puppies with vomiting, diarrhoea, weakness, coughing, not eating, collapse, breathing trouble, or suspected poisoning need urgent veterinary advice.",
  cards: phase11GuidePages.map((guide) => ({
    title: guide.title,
    description: guide.description,
    href: guide.path,
  })),
  related: [
    { title: "Adoption", description: "Shelters, puppy scams, and adoption safety.", href: "/adoption" },
    { title: "Puppy Scam Checklist", description: "Avoid unsafe sellers and pressure payments.", href: "/adoption/puppy-scam-checklist-south-africa" },
    { title: "Vaccination Schedule", description: "Core vaccines and rabies planning.", href: "/health/vaccination-schedule-south-africa" },
    { title: "Dog Food", description: "Feeding choices and unsafe foods.", href: "/food" },
    { title: "Training", description: "Reward-based puppy and dog training.", href: "/training" },
    { title: "Costs", description: "Plan first-year and monthly dog budgets.", href: "/costs" },
    { title: "Insurance", description: "Understand cover and waiting periods.", href: "/insurance" },
    { title: "Emergency", description: "Urgent symptoms and preparation.", href: "/emergency" },
    { title: "Breed Guides", description: "Choose a dog that fits your home.", href: "/breeds" },
  ],
  faqs: [
    {
      question: "Where should a new puppy owner start?",
      answer:
        "Start with the new puppy checklist, first vet visit, vaccination schedule, puppy food, toilet training, and puppy-proofing guides.",
    },
    {
      question: "Can DogHaven replace my puppy's vet?",
      answer:
        "No. DogHaven is educational. Puppies with urgent symptoms need a veterinarian, and your vet should set vaccination, deworming, and health plans.",
    },
    {
      question: "Can my puppy socialise before all vaccines are finished?",
      answer:
        "Ask your vet. Safe controlled exposure may be possible, but high-risk public dog areas should be avoided until your vet says they are appropriate.",
    },
  ],
};

export const phase11AdoptionCards: CardLink[] = [
  {
    title: "Puppy Care Hub",
    description: "First-year puppy planning for South African homes.",
    href: "/puppy",
  },
  {
    title: "New Puppy Checklist",
    description: "Records, supplies, safety, and first-week setup.",
    href: "/puppy/new-puppy-checklist-south-africa",
  },
];

export const phase11TrainingCards: CardLink[] = [
  {
    title: "Puppy Potty Training",
    description: "Humane toilet routines for houses, flats, and townhouses.",
    href: "/puppy/puppy-potty-training-south-africa",
  },
  {
    title: "Puppy Biting and Chewing",
    description: "Kind boundaries, safe chews, and redirection.",
    href: "/puppy/puppy-biting-and-chewing-south-africa",
  },
  {
    title: "Puppy Crying at Night",
    description: "First-week settling, night routines, and when to seek help.",
    href: "/puppy/puppy-crying-at-night-south-africa",
  },
  {
    title: "Puppy Socialisation",
    description: "Safe confidence-building without risky public exposure.",
    href: "/puppy/puppy-socialisation-south-africa",
  },
];

export const phase11FoodCards: CardLink[] = [
  {
    title: "Puppy Food",
    description: "Growth feeding, safe transitions, treats, and unsafe foods.",
    href: "/puppy/puppy-food-south-africa",
  },
];

export const phase11CostCards: CardLink[] = [
  {
    title: "How Much Does a Puppy Cost?",
    description: "First-year puppy budget planning without fake exact prices.",
    href: "/puppy/how-much-does-a-puppy-cost-south-africa",
  },
];

export const phase11HealthCards: CardLink[] = [
  {
    title: "Puppy Vaccination Schedule",
    description: "Core vaccines, rabies, parvovirus risk, and vet timing.",
    href: "/puppy/puppy-vaccination-schedule-south-africa",
  },
  {
    title: "Puppy Deworming",
    description: "Parasite prevention, records, stool signs, and vet guidance.",
    href: "/puppy/puppy-deworming-south-africa",
  },
  {
    title: "Puppy First Vet Visit",
    description: "What to ask about vaccines, food, records, and growth.",
    href: "/puppy/puppy-first-vet-visit-south-africa",
  },
];

export function getPhase11Guide(slug: string) {
  return phase11GuidePages.find((guide) => guide.slug === slug);
}
