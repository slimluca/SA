import type { CardLink, GuideContent, Source } from "@/lib/content";

const reviewed = "2026-05-22";

const vetSources: Source[] = [
  {
    label: "South African Veterinary Council",
    href: "https://savc.org.za/",
    note: "South African veterinary professional context and a useful starting point for checking veterinary care.",
  },
  {
    label: "South African Veterinary Association",
    href: "https://www.sava.co.za/",
    note: "South African veterinary context for responsible dog health and prevention.",
  },
  {
    label: "WSAVA Vaccination Guidelines",
    href: "https://wsava.org/global-guidelines/vaccination-guidelines/",
    note: "International veterinary vaccination guidance that owners can discuss with their South African vet.",
  },
  {
    label: "MSD Veterinary Manual",
    href: "https://www.msdvetmanual.com/",
    note: "Veterinary reference for general parasite, vaccination, and dog health context.",
  },
  {
    label: "South African Government",
    href: "https://www.gov.za/",
    note: "Official starting point for South African public information, including rabies-related notices and animal health context.",
  },
];

const coreRelated: CardLink[] = [
  { title: "Dog Health Hub", description: "Prevention, symptoms, and vet decision guidance.", href: "/health" },
  { title: "Dog Health Calendar", description: "Free planning tool for vaccines, parasites, grooming, and checkups.", href: "/tools/dog-health-calendar" },
  { title: "Find a Vet", description: "How to choose veterinary care without fake directories.", href: "/health/find-a-vet-south-africa" },
  { title: "Vet Consultation Costs", description: "Understand routine consult cost factors.", href: "/costs/vet-consultation-costs-south-africa" },
  { title: "Emergency Help", description: "Urgent symptoms and first steps.", href: "/emergency" },
];

const puppyRelated: CardLink[] = [
  { title: "Puppy Care", description: "First-year care for South African puppies.", href: "/puppy/puppy-care-south-africa" },
  { title: "Puppy First Vet Visit", description: "Questions to ask at the first check.", href: "/puppy/puppy-first-vet-visit-south-africa" },
  { title: "Puppy Vaccinations", description: "Vet-guided vaccine planning for puppies.", href: "/puppy/puppy-vaccination-schedule-south-africa" },
  { title: "New Puppy Checklist", description: "Records, safety, food, and first-week planning.", href: "/tools/puppy-checklist" },
];

function standardDisclaimer() {
  return [
    "This guide is educational and does not replace veterinary advice.",
    "Ask your vet for a schedule that suits your dog's age, health, pregnancy status, lifestyle, travel, parasite risk, and local disease risk.",
    "Do not use dog medicines, parasite products, vaccines, or dewormers in ways not directed by a veterinarian or product instructions.",
  ];
}

function warningSigns(extra: string[] = []) {
  return [
    "Weakness, collapse, pale gums, breathing trouble, repeated vomiting, seizures, severe pain, heavy bleeding, or fast-worsening symptoms need urgent veterinary care.",
    "Puppies, elderly dogs, pregnant dogs, sick dogs, and dogs with chronic conditions should be checked sooner.",
    ...extra,
  ];
}

const phase21Guides: GuideContent[] = [
  {
    slug: "tick-and-flea-treatment-for-dogs-south-africa",
    path: "/health/tick-and-flea-treatment-for-dogs-south-africa",
    hubTitle: "Dog Health",
    hubPath: "/health",
    title: "Tick and Flea Treatment for Dogs in South Africa",
    seoTitle: "Tick and Flea Treatment for Dogs South Africa | Prevention Guide",
    description:
      "A practical South African guide to tick and flea treatment for dogs, covering climate, gardens, walks, multi-pet homes, prevention routines, vet questions, and warning signs.",
    intro:
      "Ticks and fleas are a year-round concern in many South African homes, with risk often increasing in warm, wet, grassy, coastal, garden, and high-contact environments. The safest treatment plan is the one your vet recommends for your dog and your local risk.",
    updated: reviewed,
    isHealthGuide: true,
    quickFacts: [
      ...standardDisclaimer(),
      "DogHaven does not recommend a specific tick or flea product brand.",
    ],
    sections: [
      {
        heading: "South African tick and flea context",
        body: [
          "Dogs may pick up ticks or fleas from gardens, parks, kennels, daycare, grooming visits, hiking paths, beaches, farms, and other pets. Warm weather can increase parasite pressure, but many homes need prevention throughout the year.",
        ],
        table: {
          headers: ["Risk situation", "What to discuss with your vet"],
          rows: [
            ["Garden and suburban dogs", "Ongoing prevention, regular coat checks, and environmental control."],
            ["Dogs that hike or visit long grass", "Higher tick exposure and what warning signs to watch after outings."],
            ["Multi-pet homes", "Coordinated treatment for all pets and safe product use by species."],
            ["Puppies or small dogs", "Age, weight, and product suitability."],
            ["Dogs with illness or medication", "Whether a product is safe for that dog."],
          ],
        },
      },
      {
        heading: "Practical prevention checklist",
        body: ["Use a routine rather than waiting until you see parasites."],
        checklist: [
          "Ask your vet which prevention schedule suits your dog.",
          "Check ears, neck, armpits, between toes, under the collar, and around the tail after high-risk outings.",
          "Treat all pets in the home only with species-appropriate products.",
          "Wash bedding and clean sleeping areas regularly.",
          "Set reminders in the DogHaven health calendar.",
        ],
      },
      {
        heading: "Questions to ask your vet",
        body: ["Your vet can help match prevention to risk without guessing."],
        checklist: [
          "Which tick and flea options are suitable for my dog's age, weight, and health?",
          "How often should this product be used?",
          "What should I do if I miss a dose or see ticks between treatments?",
          "Is this safe around cats, puppies, pregnant dogs, or children?",
          "Which symptoms after a tick bite need urgent care?",
        ],
      },
      {
        heading: "Warning signs needing vet attention",
        body: warningSigns([
          "Fever, lethargy, loss of appetite, pale gums, weakness, dark urine, or sudden illness after tick exposure should be discussed with a vet urgently.",
          "Severe itching, sores, hair loss, flea dirt, or skin infection signs should not be ignored.",
        ]),
      },
    ],
    faqs: [
      {
        question: "What is the best tick and flea treatment for dogs in South Africa?",
        answer:
          "There is no single best product for every dog. Your vet should help choose based on age, weight, health, lifestyle, local risk, and other pets in the home.",
      },
      {
        question: "Do dogs need tick and flea prevention in winter?",
        answer:
          "Some areas and homes still have risk in cooler months. Ask your vet whether year-round prevention is appropriate for your dog.",
      },
      {
        question: "Can I use a cat flea product on my dog or a dog product on my cat?",
        answer:
          "Do not swap products between species unless a vet specifically says it is safe. Some products can be dangerous if used incorrectly.",
      },
    ],
    related: [
      { title: "Ticks and Fleas", description: "Broader parasite guidance for South African dogs.", href: "/health/ticks-and-fleas-dogs-south-africa" },
      { title: "Tick Bite Fever", description: "Warning signs and vet-care guidance.", href: "/health/tick-bite-fever-in-dogs-south-africa" },
      ...coreRelated,
    ],
    sources: vetSources,
  },
  {
    slug: "tick-bite-fever-in-dogs-south-africa",
    path: "/health/tick-bite-fever-in-dogs-south-africa",
    hubTitle: "Dog Health",
    hubPath: "/health",
    title: "Tick Bite Fever in Dogs in South Africa",
    seoTitle: "Tick Bite Fever in Dogs South Africa | Warning Signs and Vet Care",
    description:
      "A cautious South African guide to tick bite fever in dogs, covering warning signs, tick exposure, prevention, what not to do, and when to contact a vet urgently.",
    intro:
      "Tick bite fever is a serious concern for South African dog owners because ticks are common in many gardens, parks, farms, coastal areas, and walking routes. This page helps owners recognise possible warning signs without pretending to diagnose.",
    updated: reviewed,
    isHealthGuide: true,
    quickFacts: [
      "Only a veterinarian can diagnose and treat tick bite fever.",
      "Do not wait if your dog becomes weak, pale, feverish, refuses food, or seems suddenly ill after possible tick exposure.",
      "Prevention and regular coat checks matter because ticks can be easy to miss.",
      "This guide is educational and does not replace urgent veterinary care.",
    ],
    sections: [
      {
        heading: "Possible warning signs",
        body: [
          "Tick-borne illness can look like many other problems, so symptoms should not be treated as a home diagnosis. Phone a vet if your dog has possible tick exposure and becomes unwell.",
        ],
        checklist: [
          "Lethargy or weakness.",
          "Loss of appetite.",
          "Fever or feeling unusually hot.",
          "Pale gums.",
          "Dark urine.",
          "Vomiting, fast breathing, collapse, or severe weakness.",
        ],
      },
      {
        heading: "What owners should do",
        body: ["Act early and give your vet useful information."],
        checklist: [
          "Phone your vet and describe symptoms, timing, and tick exposure.",
          "Check your dog's coat for ticks, but do not delay the vet call.",
          "Tell the vet about tick prevention products used and when they were last given.",
          "Take photos of ticks or urine changes if useful and safe.",
          "Keep your dog quiet and comfortable while arranging care.",
        ],
      },
      {
        heading: "What not to do",
        body: ["Unsafe home treatment can cost precious time."],
        bullets: [
          "Do not give human medication.",
          "Do not assume a tick removed from the skin means the danger is over.",
          "Do not wait several days to see if serious symptoms improve.",
          "Do not use antibiotics, painkillers, or supplements without veterinary instruction.",
        ],
      },
      {
        heading: "Prevention tips",
        body: ["Prevention cannot remove all risk, but it lowers the odds and helps owners act sooner."],
        checklist: [
          "Use a vet-guided tick prevention routine.",
          "Check dogs after long grass, parks, farms, hikes, kennels, and daycare.",
          "Keep garden grass and sleeping areas managed.",
          "Use the health calendar to remember prevention and coat checks.",
        ],
      },
    ],
    faqs: [
      {
        question: "Can I diagnose tick bite fever at home?",
        answer:
          "No. Symptoms can overlap with other serious conditions. A vet needs to examine your dog and decide whether tests or treatment are needed.",
      },
      {
        question: "Is tick bite fever an emergency?",
        answer:
          "It can become urgent. Weakness, pale gums, collapse, dark urine, repeated vomiting, or fast worsening should be treated as urgent.",
      },
      {
        question: "Can prevention fail?",
        answer:
          "No prevention plan is perfect. Keep checking your dog and ask your vet if ticks appear despite prevention.",
      },
    ],
    related: [
      { title: "Biliary Tick Bite Fever", description: "Existing DogHaven guide to biliary concerns.", href: "/health/biliary-tick-bite-fever-dogs-south-africa" },
      { title: "Tick and Flea Treatment", description: "Prevention routines and vet questions.", href: "/health/tick-and-flea-treatment-for-dogs-south-africa" },
      ...coreRelated,
    ],
    sources: vetSources,
  },
  {
    slug: "fleas-on-dogs-south-africa",
    path: "/health/fleas-on-dogs-south-africa",
    hubTitle: "Dog Health",
    hubPath: "/health",
    title: "Fleas on Dogs in South Africa",
    seoTitle: "Fleas on Dogs South Africa | Signs, Prevention and Vet Questions",
    description:
      "A practical South African guide to fleas on dogs, covering signs, multi-pet homes, bedding, gardens, itching, prevention, and when skin problems need a vet.",
    intro:
      "Fleas can spread quickly through a South African home, especially in warm weather, multi-pet households, bedding, carpets, and garden areas. The right plan usually combines pet-safe prevention, home cleaning, and vet advice when skin is affected.",
    updated: reviewed,
    isHealthGuide: true,
    quickFacts: [
      ...standardDisclaimer(),
      "Treating one pet may not be enough if other pets or bedding are part of the flea cycle.",
    ],
    sections: [
      {
        heading: "Signs your dog may have fleas",
        body: ["Flea signs can be subtle at first, especially in thick coats."],
        checklist: [
          "Scratching, biting, licking, or restlessness.",
          "Flea dirt that looks like dark specks in the coat.",
          "Red bumps, scabs, hair loss, or hot spots.",
          "Fleas seen around the tail base, belly, neck, or armpits.",
          "Other pets scratching too.",
        ],
      },
      {
        heading: "What owners should do",
        body: ["Ask your vet for a safe plan that covers the dog and the environment."],
        checklist: [
          "Use only species-appropriate flea products as directed.",
          "Treat all pets in the home with vet-appropriate products.",
          "Wash bedding and vacuum sleeping areas.",
          "Check for skin infection, sores, or allergy signs.",
          "Use the health calendar for prevention reminders.",
        ],
      },
      {
        heading: "Warning signs needing a vet",
        body: warningSigns([
          "Severe itching, raw skin, scabs, hair loss, bad smell, ear problems, or repeated skin flare-ups should be checked.",
          "Young puppies, elderly dogs, and medically fragile dogs should be assessed sooner.",
        ]),
      },
      {
        heading: "Questions to ask your vet",
        body: ["A good flea plan should be safe for your household."],
        checklist: [
          "Which product is suitable for my dog's age, weight, and health?",
          "How should I handle a multi-pet home?",
          "Could my dog have flea allergy dermatitis or a skin infection?",
          "How should bedding and sleeping areas be cleaned?",
          "When should I come back if itching continues?",
        ],
      },
    ],
    faqs: [
      {
        question: "Can fleas live in the home?",
        answer:
          "Yes. Flea eggs and immature stages can be in bedding, carpets, cracks, and sleeping areas, so environmental cleaning matters.",
      },
      {
        question: "Why is my dog still itchy after fleas are treated?",
        answer:
          "Itching can continue because of irritation, allergy, infection, or other skin problems. Ask your vet if symptoms persist.",
      },
      {
        question: "Can I use home remedies for fleas?",
        answer:
          "Avoid unproven or harsh remedies. Some oils, chemicals, and human products can harm pets. Ask your vet for safe options.",
      },
    ],
    related: [
      { title: "Tick and Flea Treatment", description: "Prevention routines and vet questions.", href: "/health/tick-and-flea-treatment-for-dogs-south-africa" },
      { title: "Itchy Skin", description: "When scratching needs veterinary attention.", href: "/health/dog-scratching-and-itchy-skin-south-africa" },
      ...coreRelated,
    ],
    sources: vetSources,
  },
  {
    slug: "how-often-to-deworm-a-dog-south-africa",
    path: "/health/how-often-to-deworm-a-dog-south-africa",
    hubTitle: "Dog Health",
    hubPath: "/health",
    title: "How Often Should You Deworm a Dog in South Africa?",
    seoTitle: "How Often to Deworm a Dog South Africa | Vet-Guided Schedule",
    description:
      "A South African dog deworming guide covering age, risk, lifestyle, product instructions, vet guidance, puppies, households, and warning signs.",
    intro:
      "Deworming schedules are not one-size-fits-all. South African dogs may need different routines depending on age, health, parasite exposure, household risk, hunting or scavenging, travel, and the product your vet recommends.",
    updated: reviewed,
    isHealthGuide: true,
    quickFacts: [
      ...standardDisclaimer(),
      "Puppies usually need more frequent vet-guided deworming than healthy adult dogs.",
    ],
    sections: [
      {
        heading: "Why schedules vary",
        body: [
          "A couch-loving adult dog, a puppy, a farm dog, a dog that scavenges, and a dog living with small children may all have different risk profiles. Your vet can help set a realistic plan.",
        ],
        table: {
          headers: ["Dog or household factor", "Why it matters"],
          rows: [
            ["Puppy", "Young dogs need age-appropriate parasite planning and vet checks."],
            ["Scavenging or hunting", "Eating unknown material can increase parasite exposure."],
            ["Multi-pet household", "All pets may need coordinated prevention."],
            ["Children or vulnerable people", "Hygiene and parasite control are especially important."],
            ["Travel or rural exposure", "Risk can change by environment."],
          ],
        },
      },
      {
        heading: "Questions to ask your vet",
        body: ["Take product labels and your dog's history into the conversation."],
        checklist: [
          "How often should my dog be dewormed?",
          "Which worms are a concern in our area and lifestyle?",
          "Should stool testing be considered?",
          "Is this product safe for my dog's age, weight, pregnancy status, or medical condition?",
          "Should other pets be treated at the same time?",
        ],
      },
      {
        heading: "Warning signs needing a vet",
        body: warningSigns([
          "Visible worms, a swollen belly in puppies, weight loss, vomiting, diarrhoea, poor coat, weakness, or blood in stool should be discussed with a vet.",
        ]),
      },
      {
        heading: "Prevention checklist",
        body: ["Deworming works best as part of broader hygiene and prevention."],
        checklist: [
          "Pick up faeces promptly.",
          "Prevent scavenging where possible.",
          "Keep puppies on a vet-guided schedule.",
          "Use the health calendar for reminders.",
          "Keep product names and dates in your dog records.",
        ],
      },
    ],
    faqs: [
      {
        question: "How often should adult dogs be dewormed?",
        answer:
          "It depends on risk and vet guidance. Ask your vet for a schedule based on your dog's age, lifestyle, and household.",
      },
      {
        question: "Can I deworm without weighing my dog?",
        answer:
          "Product safety often depends on correct weight and instructions. Ask your vet if you are unsure.",
      },
      {
        question: "Do indoor dogs need deworming?",
        answer:
          "Indoor dogs may still have risk through other pets, gardens, fleas, food, or accidental exposure. Ask your vet.",
      },
    ],
    related: [
      { title: "Dog Worms", description: "Signs and vet questions.", href: "/health/dog-worms-south-africa" },
      { title: "Puppy Deworming", description: "Puppy-specific prevention planning.", href: "/health/deworming-puppies-south-africa" },
      ...coreRelated,
    ],
    sources: vetSources,
  },
  {
    slug: "deworming-puppies-south-africa",
    path: "/health/deworming-puppies-south-africa",
    hubTitle: "Dog Health",
    hubPath: "/health",
    title: "Deworming Puppies in South Africa",
    seoTitle: "Deworming Puppies South Africa | Vet-Guided Puppy Schedule",
    description:
      "A South African puppy deworming guide covering first vet visits, records, age-based planning, product safety, warning signs, and questions to ask your vet.",
    intro:
      "Puppies need careful parasite prevention because they are small, growing, and more vulnerable when unwell. Deworming should be planned with your vet using age, weight, records, and product instructions.",
    updated: reviewed,
    isHealthGuide: true,
    quickFacts: [
      "Do not guess puppy dewormer doses.",
      "Ask your vet to check the puppy's weight, records, belly, stool, coat, gums, and overall condition.",
      "Missing or unclear records are common with some adoptions and online puppy sales, so a vet check matters.",
      "Vomiting, diarrhoea, weakness, poor appetite, pale gums, or a swollen belly in a puppy should be taken seriously.",
    ],
    sections: [
      {
        heading: "What to discuss at the first vet visit",
        body: ["Bring every record you received, even if it looks incomplete."],
        checklist: [
          "What deworming has already been given and when?",
          "What should the next dose or check be?",
          "Is the puppy's weight appropriate for product instructions?",
          "Are there signs of worms, fleas, anaemia, diarrhoea, or poor condition?",
          "How does deworming fit with vaccines, rabies, tick and flea prevention, and safe socialisation?",
        ],
      },
      {
        heading: "Puppy risk factors",
        body: [
          "Shelter puppies, rescue puppies, puppies from uncertain sellers, and puppies with missing records may need careful vet review. Good breeders and shelters should still provide records and encourage vet checks.",
        ],
        bullets: [
          "Young age and low body weight make safe dosing important.",
          "Fleas can be linked with some tapeworm risk.",
          "Diarrhoea in puppies can become serious quickly and may not be caused by worms only.",
        ],
      },
      {
        heading: "Warning signs needing a vet",
        body: warningSigns([
          "Puppy vomiting, diarrhoea, weakness, pale gums, dehydration, swollen belly, worms in stool, or refusal to eat should be discussed with a vet promptly.",
        ]),
      },
      {
        heading: "Puppy prevention checklist",
        body: ["Keep a written record from day one."],
        checklist: [
          "Book a first vet check soon after arrival.",
          "Record deworming dates and product names.",
          "Do not take unvaccinated puppies to risky public dog areas.",
          "Ask about tick, flea, vaccination, and rabies timing.",
          "Use the health calendar for reminders.",
        ],
      },
    ],
    faqs: [
      {
        question: "Can I deworm a puppy at home?",
        answer:
          "Only use products according to veterinary advice and label instructions. Puppies are small and vulnerable, so guessing is unsafe.",
      },
      {
        question: "What if my puppy has no records?",
        answer:
          "Book a vet check and explain what you know. Your vet can help rebuild a safe prevention plan.",
      },
      {
        question: "Can worms cause diarrhoea in puppies?",
        answer:
          "They can be one possible cause, but puppy diarrhoea can also be caused by serious infections, diet changes, stress, or other problems. Contact a vet.",
      },
    ],
    related: [
      ...puppyRelated,
      { title: "How Often to Deworm a Dog", description: "Adult and household risk context.", href: "/health/how-often-to-deworm-a-dog-south-africa" },
      ...coreRelated,
    ],
    sources: vetSources,
  },
  {
    slug: "dog-vaccination-costs-and-schedule-south-africa",
    path: "/health/dog-vaccination-costs-and-schedule-south-africa",
    hubTitle: "Dog Health",
    hubPath: "/health",
    title: "Dog Vaccination Costs and Schedule in South Africa",
    seoTitle: "Dog Vaccination Costs and Schedule South Africa | Vet Questions",
    description:
      "A South African dog vaccination guide covering schedules, rabies, puppy vaccines, booster planning, cost factors, clinic questions, and vet guidance without fake prices.",
    intro:
      "Vaccination schedules and costs vary by dog, clinic, vaccine type, records, life stage, travel, and local risk. Use this guide to ask better questions, not as a replacement for your vet's schedule.",
    updated: reviewed,
    isHealthGuide: true,
    quickFacts: [
      "Follow your veterinarian's vaccination schedule.",
      "DogHaven does not publish fake clinic prices or exact vaccine costs.",
      "Rabies vaccination is a serious South African public-health responsibility.",
      "Puppy vaccination planning should include safe socialisation advice.",
    ],
    sections: [
      {
        heading: "What affects vaccination costs",
        body: ["A vaccination appointment may include more than the vaccine itself. Ask what is included before booking if budget planning matters."],
        table: {
          headers: ["Cost factor", "What to ask"],
          rows: [
            ["Consultation", "Is a health check included or billed separately?"],
            ["Vaccine type", "Which vaccines are core or lifestyle-based for my dog?"],
            ["Puppy series", "How many visits are expected and when?"],
            ["Rabies record", "How will proof of rabies vaccination be recorded?"],
            ["Other prevention", "Should parasite prevention, deworming, or microchip questions be handled at the same visit?"],
          ],
        },
      },
      {
        heading: "Questions to ask your vet",
        body: ["Vaccination advice should match the individual dog."],
        checklist: [
          "Which vaccines are recommended for my dog's age and lifestyle?",
          "When is the next booster due?",
          "What rabies schedule should I follow?",
          "When can my puppy safely visit public areas, classes, parks, or groomers?",
          "What side effects should I watch for after vaccination?",
          "What does this appointment cost include?",
        ],
      },
      {
        heading: "Warning signs after vaccination",
        body: warningSigns([
          "Mild tiredness can happen after some vaccines, but facial swelling, breathing trouble, collapse, repeated vomiting, severe weakness, or fast worsening needs urgent veterinary attention.",
        ]),
      },
      {
        heading: "Record-keeping checklist",
        body: ["Keep vaccine records accessible for vets, travel, boarding, daycare, grooming, and training classes."],
        checklist: [
          "Keep the vaccine card safe.",
          "Take a photo backup.",
          "Set reminders for boosters.",
          "Bring records to new vets, kennels, daycare, and puppy schools when requested.",
        ],
      },
    ],
    faqs: [
      {
        question: "How much do dog vaccinations cost in South Africa?",
        answer:
          "Costs vary by clinic, city, vaccine type, appointment structure, and what is included. Ask your vet for a current quote.",
      },
      {
        question: "Can I delay puppy vaccines?",
        answer:
          "Delays can increase disease risk. Ask your vet if you missed a date so they can adjust the schedule safely.",
      },
      {
        question: "Is rabies vaccination important?",
        answer:
          "Yes. Rabies is fatal and important for public health. Follow your vet's rabies schedule and keep proof of vaccination.",
      },
    ],
    related: [
      { title: "Vaccination Schedule", description: "Core vaccine planning for dogs.", href: "/health/vaccination-schedule-south-africa" },
      { title: "Rabies Booster", description: "Rabies booster records and questions.", href: "/health/rabies-booster-for-dogs-south-africa" },
      { title: "Parvovirus", description: "Why puppy protection matters.", href: "/emergency/parvovirus-in-dogs-south-africa" },
      ...puppyRelated,
      ...coreRelated,
    ],
    sources: vetSources,
  },
  {
    slug: "rabies-booster-for-dogs-south-africa",
    path: "/health/rabies-booster-for-dogs-south-africa",
    hubTitle: "Dog Health",
    hubPath: "/health",
    title: "Rabies Booster for Dogs in South Africa",
    seoTitle: "Rabies Booster for Dogs South Africa | Records and Vet Guidance",
    description:
      "A South African guide to rabies boosters for dogs, covering records, timing questions, travel, bites, public health, and when to ask your vet.",
    intro:
      "Rabies vaccination is a serious responsibility in South Africa. Booster timing should be confirmed with your vet using your dog's vaccine history, age, local requirements, travel plans, and official guidance.",
    updated: reviewed,
    isHealthGuide: true,
    quickFacts: [
      "Rabies is fatal and needs serious public-health attention.",
      "Keep proof of rabies vaccination safe and backed up.",
      "Ask your vet what booster timing applies to your dog.",
      "Bites or suspected rabies exposure need urgent professional advice.",
    ],
    sections: [
      {
        heading: "Why rabies boosters matter",
        body: [
          "Rabies affects animals and people. Vaccination records help protect your dog, your household, and the wider community. Rules and campaigns may differ by area, so your vet and official local guidance matter.",
        ],
      },
      {
        heading: "Questions to ask your vet",
        body: ["Do not guess booster timing from memory."],
        checklist: [
          "When is my dog's rabies booster due?",
          "What proof of vaccination should I keep?",
          "What should I do if the booster is overdue?",
          "What should I do after a bite, scratch, or contact with a suspicious animal?",
          "Do travel, boarding, daycare, or grooming plans require updated records?",
        ],
      },
      {
        heading: "Warning situations",
        body: warningSigns([
          "Any bite or possible rabies exposure should be taken seriously. Contact a veterinarian, doctor, or relevant authority for urgent advice.",
          "Do not handle wild, stray, or unusually behaving animals.",
        ]),
      },
      {
        heading: "Record checklist",
        body: ["Good records prevent confusion during travel, emergencies, or service bookings."],
        checklist: [
          "Keep the vaccine card.",
          "Take a clear photo of the rabies record.",
          "Save the due date in a calendar.",
          "Bring records to your vet if changing clinics.",
          "Check requirements before boarding, daycare, travel, or puppy school.",
        ],
      },
    ],
    faqs: [
      {
        question: "How often do dogs need rabies boosters in South Africa?",
        answer:
          "Ask your vet for the schedule that applies to your dog and area. Keep proof of vaccination and follow official guidance.",
      },
      {
        question: "What if my dog's rabies booster is late?",
        answer:
          "Contact your vet promptly. They can advise the safest next step based on records and local requirements.",
      },
      {
        question: "What should I do after a dog bite?",
        answer:
          "Seek medical and veterinary advice urgently. Rabies exposure is not something to manage casually at home.",
      },
    ],
    related: [
      { title: "Rabies Emergency Guide", description: "Rabies risk, bites, and urgent steps.", href: "/emergency/rabies-south-africa" },
      { title: "Rabies Law", description: "Rule-check guidance for South African dog owners.", href: "/laws/rabies-vaccination-law-south-africa" },
      { title: "Vaccination Costs and Schedule", description: "Cost factors and record questions.", href: "/health/dog-vaccination-costs-and-schedule-south-africa" },
      ...coreRelated,
    ],
    sources: vetSources,
  },
  {
    slug: "kennel-cough-vaccine-south-africa",
    path: "/health/kennel-cough-vaccine-south-africa",
    hubTitle: "Dog Health",
    hubPath: "/health",
    title: "Kennel Cough Vaccine in South Africa",
    seoTitle: "Kennel Cough Vaccine South Africa | Boarding, Daycare and Vet Questions",
    description:
      "A South African kennel cough vaccine guide covering boarding, daycare, grooming, puppy school, training classes, high-contact environments, and vet questions.",
    intro:
      "Kennel cough vaccination may be discussed for dogs that board, attend daycare, visit groomers, join puppy school, train in groups, or spend time around many dogs. Ask your vet whether it is appropriate for your dog's risk.",
    updated: reviewed,
    isHealthGuide: true,
    quickFacts: [
      "Kennel cough decisions depend on exposure risk and vet guidance.",
      "Boarding, daycare, grooming, puppy school, and group training providers may ask for vaccination records.",
      "Coughing dogs should not attend high-contact dog environments.",
      "Breathing difficulty, severe coughing, weakness, fever, or poor appetite needs vet advice.",
    ],
    sections: [
      {
        heading: "When to ask about it",
        body: ["High-contact dog environments are the main reason owners ask about kennel cough vaccination."],
        checklist: [
          "Boarding kennels or holiday care.",
          "Dog daycare.",
          "Grooming parlours or mobile grooming with high dog contact.",
          "Puppy school or group training.",
          "Dog shows, events, or frequent social settings.",
        ],
      },
      {
        heading: "Questions to ask your vet and provider",
        body: ["The provider's rules and your vet's medical advice both matter."],
        checklist: [
          "Is kennel cough vaccination recommended for my dog's lifestyle?",
          "How long before boarding or daycare should records be updated?",
          "What symptoms mean my dog should stay home?",
          "Are puppies, seniors, or dogs with airway issues handled differently?",
          "What records does the service provider require?",
        ],
      },
      {
        heading: "Warning signs needing a vet",
        body: warningSigns([
          "Coughing with lethargy, fever, breathing difficulty, repeated gagging, poor appetite, or worsening symptoms should be discussed with a vet.",
        ]),
      },
      {
        heading: "Prevention checklist for high-contact dogs",
        body: ["Good prevention is more than one vaccine question."],
        checklist: [
          "Keep vaccination records updated.",
          "Keep sick dogs away from classes, daycare, grooming, parks, and kennels.",
          "Ask providers about cleaning, ventilation, illness policies, and record checks.",
          "Use the health calendar for record reminders.",
        ],
      },
    ],
    faqs: [
      {
        question: "Does every dog need a kennel cough vaccine?",
        answer:
          "Not necessarily. Ask your vet based on your dog's exposure risk, health, age, and service-provider requirements.",
      },
      {
        question: "Can a vaccinated dog still cough?",
        answer:
          "Vaccines reduce certain risks but cannot prevent every cough. A coughing dog should be assessed and kept away from other dogs until your vet advises.",
      },
      {
        question: "Do kennels require kennel cough vaccination?",
        answer:
          "Some providers may require it. Check directly with the kennel, daycare, groomer, or training school before booking.",
      },
    ],
    related: [
      { title: "Dog Services", description: "Boarding, daycare, sitters, walkers, and holiday care checks.", href: "/dog-services" },
      { title: "Puppy Schools", description: "Class timing, vaccines, and safe socialisation.", href: "/training/puppy-schools-south-africa" },
      { title: "Dog Coughing", description: "Cough warning signs and vet decisions.", href: "/health/dog-coughing-south-africa" },
      ...coreRelated,
    ],
    sources: vetSources,
  },
  {
    slug: "dog-parasite-prevention-south-africa",
    path: "/health/dog-parasite-prevention-south-africa",
    hubTitle: "Dog Health",
    hubPath: "/health",
    title: "Dog Parasite Prevention in South Africa",
    seoTitle: "Dog Parasite Prevention South Africa | Ticks, Fleas, Worms and Mites",
    description:
      "A practical South African parasite prevention guide for dogs covering ticks, fleas, worms, mites, puppies, multi-pet homes, vet questions, and routine reminders.",
    intro:
      "Parasite prevention in South Africa needs a practical routine because dogs can be exposed through gardens, parks, beaches, farms, kennels, daycare, grooming, other pets, and travel. Your vet can help match prevention to your dog's real risk.",
    updated: reviewed,
    isHealthGuide: true,
    quickFacts: [
      ...standardDisclaimer(),
      "DogHaven does not recommend specific parasite product brands.",
    ],
    sections: [
      {
        heading: "Parasites to discuss with your vet",
        body: ["Different parasites need different prevention strategies."],
        table: {
          headers: ["Parasite concern", "Owner planning question"],
          rows: [
            ["Ticks", "What prevention and post-walk checks suit local tick risk?"],
            ["Fleas", "How should pets, bedding, and the home be managed together?"],
            ["Worms", "What deworming schedule suits age, lifestyle, and household risk?"],
            ["Mites", "What signs of ear or skin mites need an examination?"],
            ["Puppy parasites", "What is safe for this puppy's age and weight?"],
          ],
        },
      },
      {
        heading: "Practical prevention checklist",
        body: ["Consistency is usually more useful than panic treatment after a problem grows."],
        checklist: [
          "Ask your vet for a written prevention schedule.",
          "Record product names and dates used.",
          "Check coats after high-risk outings.",
          "Clean bedding and sleeping areas.",
          "Coordinate prevention across all pets in the home.",
          "Use the DogHaven health calendar for reminders.",
        ],
      },
      {
        heading: "Questions to ask your vet",
        body: ["Parasite prevention should fit the dog and household."],
        checklist: [
          "Which parasites are most relevant in our area?",
          "What product type suits my dog's age, weight, and health?",
          "How should I handle missed doses?",
          "Is this safe around cats, puppies, pregnant dogs, or children?",
          "What symptoms should trigger a vet visit?",
        ],
      },
      {
        heading: "Warning signs needing a vet",
        body: warningSigns([
          "Severe itching, raw skin, ear discharge, visible worms, weight loss, pale gums, weakness, dark urine, or sudden illness after ticks should be checked.",
        ]),
      },
    ],
    faqs: [
      {
        question: "Can one product prevent every parasite?",
        answer:
          "Not always. Products differ. Ask your vet what is covered and what still needs separate planning.",
      },
      {
        question: "Do puppies need parasite prevention?",
        answer:
          "Yes, but puppy prevention must be age- and weight-appropriate. Ask your vet before using products.",
      },
      {
        question: "Should all pets be treated together?",
        answer:
          "Often, coordinated prevention is important, but products must be safe for each species. Ask your vet.",
      },
    ],
    related: [
      { title: "Tick and Flea Treatment", description: "Tick and flea routine planning.", href: "/health/tick-and-flea-treatment-for-dogs-south-africa" },
      { title: "How Often to Deworm", description: "Vet-guided worm prevention schedules.", href: "/health/how-often-to-deworm-a-dog-south-africa" },
      { title: "Puppy Parasite Checklist", description: "Puppy-specific ticks, fleas, and worms planning.", href: "/health/ticks-fleas-and-worms-puppy-checklist-south-africa" },
      ...coreRelated,
    ],
    sources: vetSources,
  },
  {
    slug: "ticks-fleas-and-worms-puppy-checklist-south-africa",
    path: "/health/ticks-fleas-and-worms-puppy-checklist-south-africa",
    hubTitle: "Dog Health",
    hubPath: "/health",
    title: "Ticks, Fleas and Worms Puppy Checklist in South Africa",
    seoTitle: "Ticks, Fleas and Worms Puppy Checklist South Africa | DogHaven",
    description:
      "A South African puppy parasite checklist covering first vet visits, deworming records, tick and flea prevention, safe products, warning signs, and home routines.",
    intro:
      "Puppies need parasite planning that is safe for their age and weight. This checklist helps South African owners ask better vet questions about ticks, fleas, worms, records, and early warning signs.",
    updated: reviewed,
    isHealthGuide: true,
    quickFacts: [
      "Never guess parasite product doses for puppies.",
      "Bring adoption, breeder, shelter, vaccine, and deworming records to your vet.",
      "Puppies with vomiting, diarrhoea, weakness, poor appetite, pale gums, or a swollen belly need prompt vet advice.",
      "Safe socialisation and parasite prevention should be planned together.",
    ],
    sections: [
      {
        heading: "First vet visit checklist",
        body: ["Use the first vet visit to build a prevention plan."],
        checklist: [
          "Confirm current weight.",
          "Review deworming dates and product names.",
          "Ask which tick and flea products are safe for this puppy.",
          "Discuss vaccination and rabies timing.",
          "Ask when public outings, puppy school, grooming, or daycare are appropriate.",
          "Set reminder dates.",
        ],
      },
      {
        heading: "Home prevention checklist",
        body: ["Small habits prevent confusion."],
        checklist: [
          "Keep bedding washable.",
          "Clean toilet areas quickly.",
          "Check the coat after garden play.",
          "Avoid high-risk public dog areas until your vet advises.",
          "Prevent scavenging and unsafe food access.",
          "Use the health calendar to track dates.",
        ],
      },
      {
        heading: "Warning signs needing a vet",
        body: warningSigns([
          "Puppies can worsen quickly. Diarrhoea, vomiting, weakness, bloated belly, pale gums, visible worms, heavy flea burden, or refusal to eat should be discussed with a vet.",
        ]),
      },
      {
        heading: "Questions to ask",
        body: ["Ask simple, direct questions and write the answers down."],
        checklist: [
          "What is the next deworming date?",
          "What tick and flea prevention is safe now?",
          "When should the next vaccine happen?",
          "What symptoms should be urgent?",
          "What records should I keep for puppy school, boarding, or grooming?",
        ],
      },
    ],
    faqs: [
      {
        question: "Can puppies get ticks and fleas?",
        answer:
          "Yes. Puppies can be exposed through homes, gardens, other pets, and outings. Use only vet-approved, age-appropriate products.",
      },
      {
        question: "Should I deworm before the first vet visit?",
        answer:
          "If records are unclear, contact a vet for advice. Guessing products or doses can be unsafe.",
      },
      {
        question: "Can a puppy go to the park before vaccines are complete?",
        answer:
          "Ask your vet. Avoid risky public dog areas until your vet says outings are appropriate.",
      },
    ],
    related: [
      ...puppyRelated,
      { title: "Puppy Deworming", description: "Vet-guided puppy deworming.", href: "/health/deworming-puppies-south-africa" },
      { title: "Dog Parasite Prevention", description: "Ticks, fleas, worms, and mites.", href: "/health/dog-parasite-prevention-south-africa" },
      ...coreRelated,
    ],
    sources: vetSources,
  },
  {
    slug: "routine-vet-checkup-for-dogs-south-africa",
    path: "/health/routine-vet-checkup-for-dogs-south-africa",
    hubTitle: "Dog Health",
    hubPath: "/health",
    title: "Routine Vet Checkup for Dogs in South Africa",
    seoTitle: "Routine Vet Checkup for Dogs South Africa | What to Ask",
    description:
      "A South African routine vet checkup guide covering vaccines, parasite prevention, dental checks, weight, senior care, cost questions, and when routine care becomes urgent.",
    intro:
      "Routine vet checkups help South African dog owners stay ahead of vaccines, parasite prevention, dental health, weight, lumps, mobility, and age-related changes. Your vet can adjust the timing to your dog's real risk.",
    updated: reviewed,
    isHealthGuide: true,
    quickFacts: [
      "Routine care does not replace urgent care when symptoms are serious.",
      "Checkup frequency depends on age, health, medication, pregnancy, chronic disease, and vet guidance.",
      "Ask what the consult includes and whether vaccines, tests, or medication are separate.",
      "Keep records of vaccines, deworming, parasite prevention, weight, and medications.",
    ],
    sections: [
      {
        heading: "What a routine check may cover",
        body: ["A routine check is a chance to discuss prevention before problems become urgent."],
        checklist: [
          "Weight and body condition.",
          "Teeth, gums, breath, ears, eyes, skin, and coat.",
          "Heart, breathing, movement, lumps, and pain signs.",
          "Vaccination and rabies booster schedule.",
          "Deworming, tick and flea prevention.",
          "Diet, stool, thirst, urination, and behaviour changes.",
        ],
      },
      {
        heading: "Questions to ask your vet",
        body: ["Bring a written list so you do not forget small changes."],
        checklist: [
          "Is my dog's weight healthy?",
          "When are vaccines and rabies boosters due?",
          "What parasite prevention schedule should we follow?",
          "Does my dog need dental attention?",
          "What signs should make me book sooner?",
          "What will today's visit cost include?",
        ],
      },
      {
        heading: "When a routine issue becomes urgent",
        body: warningSigns([
          "Sudden weight loss, drinking lots of water, repeated vomiting or diarrhoea, coughing, limping, eye pain, collapse, seizures, or breathing trouble should not wait for a routine check.",
        ]),
      },
      {
        heading: "Preparation checklist",
        body: ["Better notes help the vet see patterns."],
        checklist: [
          "Bring vaccine and medication records.",
          "Write down diet, treats, parasite products, and dates.",
          "Note any changes in appetite, stool, thirst, urination, weight, or behaviour.",
          "Bring photos of lumps, stool changes, skin flare-ups, or coughing episodes if useful.",
          "Use the DogHaven health calendar to plan reminders.",
        ],
      },
    ],
    faqs: [
      {
        question: "How often should dogs have routine vet checkups?",
        answer:
          "Ask your vet. Healthy adult dogs, puppies, seniors, and dogs with medical conditions may need different schedules.",
      },
      {
        question: "Are vaccines included in a routine checkup?",
        answer:
          "Not always. Ask your clinic what is included and what is billed separately.",
      },
      {
        question: "Should senior dogs go more often?",
        answer:
          "Many senior dogs benefit from closer monitoring. Ask your vet about age, breed, dental care, mobility, weight, and chronic disease screening.",
      },
    ],
    related: [
      { title: "Vet Consultation Costs", description: "What to ask about fees and estimates.", href: "/costs/vet-consultation-costs-south-africa" },
      { title: "Dog Health Calendar", description: "Plan prevention reminders.", href: "/tools/dog-health-calendar" },
      { title: "Vet Visit Checklist", description: "Prepare notes before an appointment.", href: "/tools/vet-visit-checklist" },
      ...coreRelated,
    ],
    sources: vetSources,
  },
  {
    slug: "dog-health-calendar-south-africa",
    path: "/health/dog-health-calendar-south-africa",
    hubTitle: "Dog Health",
    hubPath: "/health",
    title: "Dog Health Calendar in South Africa",
    seoTitle: "Dog Health Calendar South Africa | Vaccines, Deworming and Checkups",
    description:
      "A practical South African dog health calendar guide for planning vaccines, rabies boosters, deworming, tick and flea prevention, checkups, grooming, and dental care.",
    intro:
      "A dog health calendar helps owners remember prevention tasks before they become stressful. Use this guide and the free DogHaven tool as general planning support, then follow your vet's schedule.",
    updated: reviewed,
    isHealthGuide: true,
    quickFacts: [
      "A calendar is a reminder system, not a medical schedule.",
      "Vet guidance and product instructions come first.",
      "Puppies, seniors, pregnant dogs, sick dogs, and dogs with chronic conditions need personalised vet planning.",
      "Keep records for boarding, daycare, grooming, puppy school, travel, and emergencies.",
    ],
    sections: [
      {
        heading: "What to track",
        body: ["Track the items that affect prevention, records, and routine care."],
        checklist: [
          "Vaccination dates and next boosters.",
          "Rabies proof and booster reminders.",
          "Deworming dates.",
          "Tick and flea prevention dates.",
          "Routine vet checkups.",
          "Grooming and nail checks.",
          "Dental checks and bad-breath concerns.",
        ],
      },
      {
        heading: "How to use reminders safely",
        body: ["Reminders should prompt a vet question, not replace one."],
        bullets: [
          "Do not repeat products more often than directed.",
          "Do not delay vaccines because a calendar date was missed.",
          "Do not use old medication or products without checking suitability.",
          "Ask your vet how to catch up after missed prevention.",
        ],
      },
      {
        heading: "Questions to ask your vet",
        body: ["Build your calendar from your vet's recommendations."],
        checklist: [
          "What are the next three dates I should record?",
          "Which reminders should be monthly, seasonal, or annual for my dog?",
          "What should change when my puppy becomes an adult or my dog becomes senior?",
          "Which records should I keep for boarding, daycare, grooming, or travel?",
        ],
      },
      {
        heading: "When to ignore the calendar and call now",
        body: warningSigns([
          "If your dog is unwell, do not wait for the next planned check. Contact a vet for concerning symptoms.",
        ]),
      },
    ],
    faqs: [
      {
        question: "Can DogHaven create exact reminders for my dog?",
        answer:
          "No. DogHaven provides general planning prompts only. Your vet's schedule is the one to follow.",
      },
      {
        question: "What records should I keep?",
        answer:
          "Keep vaccine cards, rabies proof, medication notes, parasite prevention dates, microchip details, and vet visit summaries.",
      },
      {
        question: "Does the health calendar store my data?",
        answer:
          "No. The DogHaven tool does not collect personal information or store data.",
      },
    ],
    related: [
      { title: "Dog Health Calendar Tool", description: "Use the free planning tool.", href: "/tools/dog-health-calendar" },
      { title: "Routine Vet Checkup", description: "What to ask during routine care.", href: "/health/routine-vet-checkup-for-dogs-south-africa" },
      { title: "Vaccination Costs and Schedule", description: "Vaccine planning and cost questions.", href: "/health/dog-vaccination-costs-and-schedule-south-africa" },
      ...coreRelated,
    ],
    sources: vetSources,
  },
];

export const phase21PreventionGuidePages = phase21Guides;

export function getPhase21Guide(slug: string) {
  return phase21Guides.find((guide) => guide.slug === slug);
}

export function getPhase21GuidesByHub(hubPath: string) {
  return phase21Guides.filter((guide) => guide.hubPath === hubPath);
}

export const phase21HealthCards: CardLink[] = phase21Guides.map((guide) => ({
  title: guide.title,
  description: guide.description,
  href: guide.path,
}));

export const phase21PuppyCards: CardLink[] = [
  { title: "Puppy Deworming", description: "Vet-guided deworming for puppies.", href: "/health/deworming-puppies-south-africa" },
  { title: "Puppy Parasite Checklist", description: "Ticks, fleas, worms, records, and safe product questions.", href: "/health/ticks-fleas-and-worms-puppy-checklist-south-africa" },
  { title: "Dog Health Calendar", description: "Plan puppy prevention reminders with vet guidance.", href: "/tools/dog-health-calendar" },
];

export const phase21CostCards: CardLink[] = [
  { title: "Vaccination Costs and Schedule", description: "Vaccine cost factors and vet questions.", href: "/health/dog-vaccination-costs-and-schedule-south-africa" },
  { title: "Routine Vet Checkup", description: "Routine care, records, and consult questions.", href: "/health/routine-vet-checkup-for-dogs-south-africa" },
  { title: "Dog Health Calendar", description: "Plan reminders for vaccines, parasites, grooming, and dental checks.", href: "/tools/dog-health-calendar" },
];

export const phase21DogServicesCards: CardLink[] = [
  { title: "Kennel Cough Vaccine", description: "Vaccination questions for boarding, daycare, grooming, and classes.", href: "/health/kennel-cough-vaccine-south-africa" },
  { title: "Vaccination Costs and Schedule", description: "Records and schedule questions before high-contact services.", href: "/health/dog-vaccination-costs-and-schedule-south-africa" },
];

export const phase21LocalCostCards: CardLink[] = [
  { title: "Routine Vet Checkup", description: "Plan routine consults alongside city dog budgets.", href: "/health/routine-vet-checkup-for-dogs-south-africa" },
  { title: "Vaccination Costs and Schedule", description: "Understand vaccine appointment cost factors.", href: "/health/dog-vaccination-costs-and-schedule-south-africa" },
];

export const phase21EmergencyCards: CardLink[] = [
  { title: "Tick Bite Fever", description: "Possible warning signs after tick exposure and when to phone a vet.", href: "/health/tick-bite-fever-in-dogs-south-africa" },
];

export const phase21InsuranceCards: CardLink[] = [
  { title: "Routine Vet Checkup", description: "Prevention and routine care questions to plan before claims are needed.", href: "/health/routine-vet-checkup-for-dogs-south-africa" },
  { title: "Dog Health Calendar", description: "Track prevention reminders and vet records.", href: "/tools/dog-health-calendar" },
];
