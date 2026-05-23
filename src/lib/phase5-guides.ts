import type { CardLink, GuideContent, Source } from "@/lib/content";

export const phase5CostCards: CardLink[] = [
  {
    title: "Monthly Cost of Owning a Dog",
    description:
      "A practical South African monthly budget guide covering food, vet care, parasite control, grooming, training, insurance, and savings.",
    href: "/costs/monthly-cost-of-owning-a-dog-south-africa",
  },
  {
    title: "Puppy First-Year Cost",
    description:
      "Plan the expensive first year, including vaccines, sterilisation, microchipping, puppy food, training, and replacement gear.",
    href: "/costs/puppy-first-year-cost-south-africa",
  },
  {
    title: "Vet Costs for Dogs",
    description:
      "Understand why vet bills vary, what routine care can include, and how to budget without delaying necessary treatment.",
    href: "/costs/vet-costs-for-dogs-south-africa",
  },
  {
    title: "Dog Food Cost",
    description:
      "How dog size, food type, life stage, treats, prescription diets, and bulk buying affect monthly food budgets.",
    href: "/costs/dog-food-cost-south-africa",
  },
  {
    title: "Emergency Vet Costs",
    description:
      "How to plan for after-hours consults, diagnostics, hospitalisation, surgery, and urgent treatment without fake exact pricing.",
    href: "/costs/emergency-vet-costs-south-africa",
  },
];

export const phase5InsuranceCards: CardLink[] = [
  {
    title: "Pet Insurance for Dogs",
    description:
      "Plain-English guidance on premiums, excesses, annual limits, claims, exclusions, and routine-care add-ons.",
    href: "/insurance/pet-insurance-for-dogs-south-africa",
  },
  {
    title: "Dog Insurance Waiting Periods",
    description:
      "Understand waiting periods, pre-existing conditions, accident cover, illness cover, and what to ask before joining.",
    href: "/insurance/dog-insurance-waiting-periods-south-africa",
  },
  {
    title: "Is Pet Insurance Worth It?",
    description:
      "A balanced decision guide for South African owners comparing insurance, savings, exclusions, and emergency risk.",
    href: "/insurance/is-pet-insurance-worth-it-south-africa",
  },
];

export const phase5FoodCards: CardLink[] = [
  {
    title: "Dog Food in South Africa",
    description:
      "A practical feeding guide covering life stage, size, budget, allergies, vet diets, treats, and safe transitions.",
    href: "/food/dog-food-south-africa",
  },
  {
    title: "Puppy Food",
    description:
      "How to choose puppy food, avoid risky shortcuts, transition diets, and ask your vet about growth and body condition.",
    href: "/food/puppy-food-south-africa",
  },
  {
    title: "How to Read Dog Food Labels",
    description:
      "A plain-English label guide for ingredients, life-stage claims, feeding guides, treats, marketing terms, and vet diets.",
    href: "/food/how-to-read-dog-food-labels-south-africa",
  },
  {
    title: "Can Dogs Eat Biltong?",
    description:
      "Why biltong is usually a poor dog treat choice because of salt, spices, fat, choking risk, and pancreatitis concerns.",
    href: "/food/can-dogs-eat-biltong",
  },
  {
    title: "Can Dogs Eat Boerewors?",
    description:
      "A cautious guide to boerewors risks, including fat, salt, onion, garlic, spices, cooked bones, and safer treat options.",
    href: "/food/can-dogs-eat-boerewors",
  },
  {
    title: "Raw Food Diets",
    description:
      "Balanced South African guidance on raw diets, food-safety risks, nutrition gaps, puppies, children, and vet advice.",
    href: "/food/raw-food-diet-for-dogs-south-africa",
  },
];

const vetSources: Source[] = [
  {
    label: "South African Veterinary Council",
    href: "https://savc.org.za/",
    note: "Professional veterinary regulation and context for registered veterinary care in South Africa.",
  },
  {
    label: "South African Veterinary Association",
    href: "https://www.sava.co.za/",
    note: "South African veterinary profession and animal health context.",
  },
];

const foodSources: Source[] = [
  {
    label: "WSAVA Global Nutrition Guidelines",
    href: "https://wsava.org/global-guidelines/global-nutrition-guidelines/",
    note: "Veterinary nutrition tools covering body condition, diet history, and choosing pet food.",
  },
  {
    label: "MSD Veterinary Manual food hazards",
    href: "https://www.msdvetmanual.com/en/special-pet-topics/poisoning/food-hazards",
    note: "Veterinary reference on hazardous foods including chocolate, grapes, raisins, xylitol, and macadamia nuts.",
  },
  {
    label: "CDC pet food safety",
    href: "https://www.cdc.gov/healthy-pets/about/pet-food-safety.html",
    note: "Public-health guidance on pet food handling and raw pet food risks.",
  },
  {
    label: "FDA raw pet food safety",
    href: "https://www.fda.gov/animal-veterinary/animal-health-literacy/get-facts-raw-pet-food-diets-can-be-dangerous-you-and-your-pet",
    note: "Food-safety guidance explaining contamination risks from raw pet food.",
  },
];

const insuranceSources: Source[] = [
  {
    label: "Oneplan pet plan information",
    href: "https://www.oneplan.co.za/plans/PetPlans",
    note: "Example of South African pet insurance plan wording, benefits, and premium-from language.",
  },
  {
    label: "MediPet pet insurance information",
    href: "https://medipet.co.za/",
    note: "Example of South African pet insurance benefit limits, exclusions, and plan structures.",
  },
  ...vetSources,
];

const costDisclaimer =
  "Budget ranges on DogHaven are planning examples only. Real costs vary by province, city, clinic, dog size, health, age, inflation, product choice, and urgency. Always request direct quotes from vets, shelters, groomers, trainers, insurers, and suppliers.";

export const phase5GuidePages: GuideContent[] = [
  {
    slug: "monthly-cost-of-owning-a-dog-south-africa",
    path: "/costs/monthly-cost-of-owning-a-dog-south-africa",
    hubTitle: "Dog Costs",
    hubPath: "/costs",
    title: "Monthly Cost of Owning a Dog in South Africa",
    seoTitle: "Monthly Cost of Owning a Dog in South Africa | Budget Guide",
    description:
      "A practical monthly dog budget guide for South African owners covering food, vet care, parasite control, grooming, training, insurance, and emergency savings.",
    intro:
      "The monthly cost of a dog in South Africa is not one neat number. A tiny healthy adult dog, a large active dog, a puppy, and a senior dog with medication can live in completely different budget worlds. This guide helps you build a realistic monthly plan without pretending prices are fixed across the country.",
    updated: "2026-05-13",
    quickFacts: [
      costDisclaimer,
      "Food, parasite prevention, routine vet care, grooming, training, insurance, and emergency savings should all be considered before you adopt or buy.",
      "Large dogs often cost more because food, medication, beds, transport, grooming, and some procedures scale with size.",
      "A cheap month is not the same as a safe budget. Plan for routine prevention and unexpected illness.",
    ],
    sections: [
      {
        heading: "A cautious monthly budget framework",
        body: [
          "Use these ranges as planning bands, not quotes. Your actual cost may be lower or higher depending on dog size, food choice, location, clinic, and whether your dog needs chronic care.",
        ],
        table: {
          headers: ["Dog type", "Conservative monthly planning range", "What usually drives the number"],
          rows: [
            ["Small healthy adult", "About R700-R1,800+", "Food, parasite prevention, annual vet savings, treats, and basic supplies."],
            ["Medium healthy adult", "About R1,000-R2,500+", "More food, weight-based preventives, toys, grooming, and insurance choices."],
            ["Large or giant dog", "About R1,600-R4,000+", "Food volume, larger beds, stronger equipment, higher medication doses, and emergency savings."],
            ["Puppy or senior dog", "Highly variable", "Vaccines, training, growth, chewing damage, dental care, blood tests, medication, or chronic diets."],
          ],
        },
      },
      {
        heading: "Monthly cost categories",
        body: [
          "A useful budget separates predictable costs from irregular costs. Food is monthly. Vaccines, dental care, sterilisation, training blocks, insurance excesses, and emergency vet visits may arrive as larger once-off bills.",
        ],
        checklist: [
          "Dog food and treats.",
          "Tick, flea, and worm prevention.",
          "Routine vet care and annual vaccine savings.",
          "Grooming or home grooming supplies.",
          "Training classes, behaviour support, or enrichment.",
          "Toys, chews, bedding, leads, collars, harnesses, and ID tags.",
          "Pet insurance premiums or a dedicated emergency fund.",
          "Transport, boarding, pet sitting, or dog walker costs where needed.",
        ],
      },
      {
        heading: "How to budget without cutting unsafe corners",
        body: [
          "The goal is not to spend the most money. It is to avoid false savings that cost more later, such as skipping parasite prevention in a tick-heavy area, feeding an unsuitable diet, or delaying a vet visit until a problem becomes urgent.",
          "Ask for quotes and options. Many vets, groomers, trainers, and shelters can explain what is essential now, what can be planned later, and what depends on your dog's size or health.",
        ],
        bullets: [
          "Buy food in sensible bag sizes your dog will finish while it is still fresh.",
          "Ask your vet which parasite prevention suits your area and dog size.",
          "Save a monthly amount for annual vaccines, dental care, and emergencies.",
          "Keep receipts so your first three months become your real household benchmark.",
        ],
      },
      {
        heading: "When costs should change your dog choice",
        body: [
          "If a breed, coat type, size, or health risk would make the budget fragile every month, choose differently before bringing the dog home. This is not unkind. It protects the dog from future surrender, delayed care, or stress.",
        ],
        checklist: [
          "Choose a dog size you can feed properly for life.",
          "Think carefully before choosing high-maintenance coats if grooming is unaffordable.",
          "Research breed health risks before buying a puppy.",
          "Do not rely on insurance without reading exclusions and waiting periods.",
        ],
      },
    ],
    faqs: [
      {
        question: "What is a realistic monthly dog budget in South Africa?",
        answer:
          "Many owners should plan from roughly R700 to several thousand rand per month depending on size, food, prevention, grooming, insurance, and savings. Ask local providers for quotes before committing.",
      },
      {
        question: "Is adoption cheaper than buying a puppy?",
        answer:
          "Often the upfront cost can be lower because many shelters include some veterinary care, but the monthly cost of food, prevention, training, and emergencies still remains.",
      },
      {
        question: "Should I budget for emergencies even with insurance?",
        answer:
          "Yes. You may need to pay an excess, cover exclusions, pay upfront, or handle costs above annual limits.",
      },
    ],
    related: [
      { title: "Cost of Owning a Dog", description: "Full ownership budget guide.", href: "/costs/cost-of-owning-a-dog-south-africa" },
      { title: "Pet Insurance", description: "Understand cover and exclusions.", href: "/insurance/pet-insurance-for-dogs-south-africa" },
      { title: "Dog Food Cost", description: "Plan the biggest monthly expense.", href: "/costs/dog-food-cost-south-africa" },
    ],
    sources: vetSources,
  },
  {
    slug: "puppy-first-year-cost-south-africa",
    path: "/costs/puppy-first-year-cost-south-africa",
    hubTitle: "Dog Costs",
    hubPath: "/costs",
    title: "Puppy First-Year Cost in South Africa",
    seoTitle: "Puppy First-Year Cost South Africa | Practical Budget Guide",
    description:
      "A South African puppy first-year budget guide covering vaccines, parasite control, sterilisation, microchipping, food, training, equipment, and emergency planning.",
    intro:
      "A puppy's first year is usually more expensive than a calm adult dog's routine year. Growth, vaccine visits, training, chewing, equipment changes, sterilisation decisions, and food transitions all arrive close together. This guide helps you plan before the cute photo becomes a monthly bill.",
    updated: "2026-05-13",
    quickFacts: [
      costDisclaimer,
      "Puppies need a vaccine schedule, deworming, parasite prevention, safe socialisation, and often multiple vet visits in the first year.",
      "Sterilisation, microchipping, puppy school, and replacement gear should be planned early.",
      "Do not assume a puppy is fully vaccinated, sterilised, or microchipped unless you have records.",
    ],
    sections: [
      {
        heading: "First-year cost areas",
        body: [
          "The first year combines once-off setup costs with repeated care. A shelter puppy may include some items in the adoption fee, while a puppy from a breeder may require more separate planning.",
        ],
        table: {
          headers: ["Cost area", "Planning notes"],
          rows: [
            ["Adoption or purchase", "Verify exactly what is included and get written records."],
            ["Vaccines and vet checks", "Puppies usually need a series, not one visit."],
            ["Deworming and parasite control", "Frequency depends on age, weight, product, and vet advice."],
            ["Sterilisation", "Ask if included, required later, or quoted separately."],
            ["Microchipping and ID", "Useful for recovery if the puppy escapes or is lost."],
            ["Puppy food", "Growth food can be a major monthly cost, especially for medium and large breeds."],
            ["Training", "Puppy classes or private support can prevent more expensive behaviour problems."],
          ],
        },
      },
      {
        heading: "Starter equipment checklist",
        body: [
          "You do not need luxury everything, but you do need safe basics. Buy for the puppy you have now while remembering that many items will be outgrown or chewed.",
        ],
        checklist: [
          "Collar or harness, lead, and ID tag.",
          "Food and water bowls.",
          "Bed, crate, or sleeping area if appropriate.",
          "Puppy-safe chews and toys.",
          "Cleaning supplies for toilet training.",
          "Secure gates, baby gates, or pens if needed.",
          "Car restraint or carrier.",
          "Brush, nail-care plan, and tick-check routine.",
        ],
      },
      {
        heading: "Budget examples",
        body: [
          "These are broad planning examples, not quotes. A small shelter puppy with included sterilisation may cost far less upfront than a large-breed puppy from a breeder with separate vet, food, and training costs.",
        ],
        table: {
          headers: ["Scenario", "First-year budget pressure"],
          rows: [
            ["Shelter puppy with included vet basics", "Lower upfront pressure, but still budget for boosters, food, training, and emergencies."],
            ["Large-breed puppy", "Higher food, equipment, parasite prevention, and possible training costs."],
            ["Pedigree puppy", "Purchase price may be high and does not replace future vet care or health testing questions."],
            ["Puppy with illness or diarrhoea", "Vet bills can rise quickly; do not delay care in young puppies."],
          ],
        },
      },
      {
        heading: "Do not cut these corners",
        body: [
          "Unsafe savings in puppyhood can become expensive later. Skipping vaccines, buying from a suspicious seller, ignoring diarrhoea, or avoiding training because the puppy is still small can all create bigger problems.",
        ],
        checklist: [
          "Do not buy a puppy without verifying records and the person or organisation.",
          "Do not take an incompletely vaccinated puppy to high-risk public dog areas without vet advice.",
          "Do not ignore repeated vomiting, diarrhoea, weakness, or refusal to eat.",
          "Do not choose a breed whose adult costs you cannot afford.",
        ],
      },
    ],
    faqs: [
      {
        question: "Why is the first year so expensive?",
        answer:
          "Puppies need setup gear, repeated vet care, vaccines, parasite prevention, food, training, and often sterilisation or microchipping decisions within the same year.",
      },
      {
        question: "Can I delay puppy vaccines to save money?",
        answer:
          "No. Speak to a vet about the correct schedule. Delaying vaccines can increase disease risk, especially for serious infections such as parvovirus.",
      },
      {
        question: "Should I get insurance for a puppy?",
        answer:
          "It may be worth considering early because waiting periods and pre-existing condition rules can affect cover. Compare policy documents carefully.",
      },
    ],
    related: [
      { title: "Adopting a Puppy", description: "Ask safer puppy questions.", href: "/adoption/adopting-a-puppy-south-africa" },
      { title: "Vaccination Schedule", description: "Plan vaccines with your vet.", href: "/health/vaccination-schedule-south-africa" },
      { title: "Puppy Food", description: "Feed growth safely.", href: "/food/puppy-food-south-africa" },
    ],
    sources: [...vetSources, { label: "NSPCA choosing a dog", href: "https://nspca.co.za/choosing-a-dog/", note: "South African welfare guidance on responsible dog choice and adoption." }],
  },
  {
    slug: "vet-costs-for-dogs-south-africa",
    path: "/costs/vet-costs-for-dogs-south-africa",
    hubTitle: "Dog Costs",
    hubPath: "/costs",
    title: "Vet Costs for Dogs in South Africa",
    seoTitle: "Vet Costs for Dogs South Africa | Practical Budget Guide",
    description:
      "A practical South African guide to dog vet costs, including consults, vaccines, diagnostics, medication, dental care, sterilisation, and why quotes vary.",
    intro:
      "Veterinary care in South Africa is usually private healthcare for animals. The consultation is only one part of a bill: diagnostics, medication, procedures, hospitalisation, anaesthesia, and after-hours care can all add cost. This guide helps you understand the categories before you are standing at reception in a panic.",
    updated: "2026-05-13",
    isHealthGuide: true,
    quickFacts: [
      costDisclaimer,
      "Vet bills vary because dogs vary by size, symptoms, urgency, clinic equipment, medication dose, and whether diagnostics are needed.",
      "Ask for an estimate and ask what is urgent, what is optional, and what the risks are if you wait.",
      "Do not delay urgent symptoms because of cost. Phone the vet, explain the situation, and ask what to do next.",
    ],
    sections: [
      {
        heading: "Common vet cost categories",
        body: [
          "A vet bill may include several line items. Understanding them helps you ask better questions without assuming the clinic is adding unnecessary extras.",
        ],
        table: {
          headers: ["Category", "Why it may be needed"],
          rows: [
            ["Consultation", "The vet examines your dog and decides what the signs suggest."],
            ["Vaccines", "Prevention for serious diseases, often with an exam."],
            ["Diagnostics", "Blood tests, X-rays, ultrasound, skin tests, or faecal tests can guide treatment."],
            ["Medication", "Dose often depends on weight and condition."],
            ["Procedures", "Sterilisation, wound repair, dental work, lump removal, or surgery."],
            ["Hospitalisation", "Monitoring, fluids, oxygen, pain control, or intensive care."],
            ["After-hours care", "Emergency staffing and availability can increase the fee."],
          ],
        },
      },
      {
        heading: "How to ask for a quote well",
        body: [
          "A quote is easier when the clinic knows the dog's weight, age, breed, symptoms, vaccine status, and whether it is routine or urgent. For sick dogs, the final bill can change when test results or response to treatment changes the plan.",
        ],
        checklist: [
          "Give your dog's weight, age, sex, breed or size, and sterilisation status.",
          "Describe symptoms clearly and say when they started.",
          "Ask what the estimate includes and excludes.",
          "Ask what would trigger additional costs.",
          "Ask which items are urgent today and which can be scheduled.",
          "Ask how follow-up visits or medication refills are handled.",
        ],
      },
      {
        heading: "Planning for routine care",
        body: [
          "Routine care is easier to budget for than emergencies. Build a monthly amount for annual vaccines, parasite prevention, dental care, senior checks, and minor illnesses.",
          "Senior dogs and dogs with chronic conditions may need more frequent visits, blood tests, pain control, dental care, or prescription diets.",
        ],
      },
      {
        heading: "When not to wait",
        body: [
          "Cost worry is real, but some symptoms should not be watched at home. Phone a vet or emergency clinic immediately if your dog is collapsing, struggling to breathe, repeatedly vomiting, having seizures, bleeding heavily, unable to urinate, possibly poisoned, bitten by a snake, or rapidly worsening.",
        ],
        bullets: [
          "Ask whether immediate stabilisation is needed.",
          "Ask what to bring, including packaging, medication names, or vaccine records.",
          "Do not give human medicine unless a vet tells you to.",
          "Do not use home remedies that could worsen poisoning, heatstroke, or trauma.",
        ],
      },
    ],
    faqs: [
      {
        question: "Why can two vet clinics quote different prices?",
        answer:
          "Location, equipment, staffing, after-hours availability, procedure complexity, dog size, medication choice, and included services can all differ.",
      },
      {
        question: "Can I ask a vet for a cheaper option?",
        answer:
          "Yes, ask politely what options exist and what the risks are. Do not delay urgent care without professional advice.",
      },
      {
        question: "Are welfare clinics free?",
        answer:
          "Not necessarily. Some welfare services are subsidised and may have eligibility rules. Contact the organisation directly for current requirements and fees.",
      },
    ],
    related: [
      { title: "Emergency Vet Costs", description: "Plan for urgent care.", href: "/costs/emergency-vet-costs-south-africa" },
      { title: "When to Take Your Dog to the Vet", description: "Know urgent symptoms.", href: "/health/when-to-take-your-dog-to-the-vet-south-africa" },
      { title: "Pet Insurance", description: "Understand cover before claims.", href: "/insurance/pet-insurance-for-dogs-south-africa" },
    ],
    sources: vetSources,
  },
  {
    slug: "dog-food-cost-south-africa",
    path: "/costs/dog-food-cost-south-africa",
    hubTitle: "Dog Costs",
    hubPath: "/costs",
    title: "Dog Food Cost in South Africa",
    seoTitle: "Dog Food Cost South Africa | Monthly Feeding Budget Guide",
    description:
      "A South African guide to dog food costs by size, life stage, diet type, treats, prescription diets, raw feeding, and budgeting without unsafe shortcuts.",
    intro:
      "Food is one of the biggest recurring costs of dog ownership. The right budget depends on dog size, age, activity, body condition, allergies, health, diet type, and how many treats or toppers sneak into the bowl.",
    updated: "2026-05-13",
    quickFacts: [
      costDisclaimer,
      "Larger dogs can cost several times more to feed than small dogs because portion size changes everything.",
      "Prescription diets, allergy diets, wet food, raw diets, toppers, and treats can raise the monthly total quickly.",
      "Ask your vet about body condition and life-stage feeding before making major diet changes.",
    ],
    sections: [
      {
        heading: "Monthly food budget bands",
        body: [
          "These broad bands are for planning only. Check current prices from local retailers, veterinary practices, and suppliers because bag sizes, promotions, and inflation change regularly.",
        ],
        table: {
          headers: ["Dog size or diet", "Cautious planning band", "Notes"],
          rows: [
            ["Small dog", "About R300-R900+ per month", "Depends on brand, portion, treats, and wet-food use."],
            ["Medium dog", "About R600-R1,500+ per month", "Food choice and activity level matter a lot."],
            ["Large dog", "About R1,000-R2,500+ per month", "Bulk bags may help, but freshness and storage still matter."],
            ["Prescription or special diet", "Often higher and highly variable", "Use under veterinary guidance."],
            ["Raw, fresh, or wet-heavy diet", "Can be substantially higher", "Also consider storage, hygiene, and nutritional balance."],
          ],
        },
      },
      {
        heading: "What affects food cost",
        body: [
          "The cheapest bag is not always cheapest if your dog needs more cups per day, gains weight, has stomach upsets, or wastes food. Compare daily feeding cost, not only bag price.",
        ],
        checklist: [
          "Dog weight and ideal body condition.",
          "Puppy, adult, senior, pregnant, or lactating life stage.",
          "Activity level and sterilisation status.",
          "Food calorie density and feeding guide.",
          "Treats, chews, toppers, and table scraps.",
          "Allergies, stomach sensitivity, chronic disease, or vet diets.",
          "Bag size, storage, freshness, and whether the dog finishes the food before it spoils.",
        ],
      },
      {
        heading: "Budgeting safely",
        body: [
          "If money is tight, ask your vet what matters most for your dog's health. Sudden downgrades, unbalanced homemade diets, or filling meals with unsafe scraps can create health problems.",
          "Track the cost per day for two weeks. This often gives a clearer picture than arguing about bag prices in isolation.",
        ],
        bullets: [
          "Use a measuring cup or scale to avoid overfeeding.",
          "Keep treats to a sensible part of the daily intake.",
          "Transition food gradually unless your vet advises otherwise.",
          "Store food sealed, dry, and away from heat and pests.",
        ],
      },
      {
        heading: "When to ask a vet about food",
        body: [
          "Ask a vet if your dog has persistent vomiting, diarrhoea, itchy skin, ear infections, weight loss, obesity, urinary signs, pancreatitis history, chronic disease, or suspected food allergy.",
        ],
      },
    ],
    faqs: [
      {
        question: "Is premium dog food always worth the cost?",
        answer:
          "Not automatically. Suitability depends on your dog's life stage, health, body condition, digestibility, and your vet's advice.",
      },
      {
        question: "Can I save money by feeding leftovers?",
        answer:
          "Be careful. Many leftovers are salty, fatty, spicy, or unsafe for dogs. Unbalanced feeding can also create long-term problems.",
      },
      {
        question: "Why does my large dog cost so much to feed?",
        answer:
          "Portion size, calorie needs, treats, and weight-based health costs scale with size. Food planning is one reason breed size matters before adoption.",
      },
    ],
    related: [
      { title: "Dog Food South Africa", description: "Choose food practically.", href: "/food/dog-food-south-africa" },
      { title: "Read Dog Food Labels", description: "Compare food more clearly.", href: "/food/how-to-read-dog-food-labels-south-africa" },
      { title: "Monthly Dog Costs", description: "Build the full budget.", href: "/costs/monthly-cost-of-owning-a-dog-south-africa" },
    ],
    sources: foodSources,
  },
  {
    slug: "emergency-vet-costs-south-africa",
    path: "/costs/emergency-vet-costs-south-africa",
    hubTitle: "Dog Costs",
    hubPath: "/costs",
    title: "Emergency Vet Costs in South Africa",
    seoTitle: "Emergency Vet Costs South Africa | Dog Owner Planning Guide",
    description:
      "A practical South African guide to emergency vet cost planning, including after-hours consults, diagnostics, hospitalisation, surgery, insurance, and savings.",
    intro:
      "Emergency vet care is expensive because it is urgent healthcare with staff, equipment, medication, diagnostics, and sometimes hospitalisation ready when normal planning has failed. The exact bill depends on the emergency, but the need to plan is predictable.",
    updated: "2026-05-13",
    isHealthGuide: true,
    quickFacts: [
      costDisclaimer,
      "Emergency care may include after-hours fees, stabilisation, blood tests, X-rays, ultrasound, fluids, oxygen, pain relief, surgery, or referral.",
      "Do not wait for severe symptoms to become cheaper. Phone the vet and ask what to do immediately.",
      "Insurance can help, but exclusions, excesses, annual limits, waiting periods, and upfront payment rules still matter.",
    ],
    sections: [
      {
        heading: "What can make emergency bills large",
        body: [
          "Emergency bills are not only a consult fee. A snake bite, poisoning, heatstroke, parvovirus, blocked bladder, gastric emergency, or trauma case may need several layers of care quickly.",
        ],
        table: {
          headers: ["Cost driver", "Why it matters"],
          rows: [
            ["After-hours staffing", "Clinics need trained people available outside normal hours."],
            ["Diagnostics", "Tests help the vet identify risk and choose treatment."],
            ["Medication and fluids", "Dose and duration depend on size and severity."],
            ["Hospitalisation", "Monitoring, nursing, oxygen, IV fluids, and repeat checks add cost."],
            ["Surgery or referral", "Specialist equipment or complex procedures can raise the total."],
            ["Follow-up care", "Rechecks, medication, dressings, and recovery support may continue after discharge."],
          ],
        },
      },
      {
        heading: "Planning ranges instead of fake prices",
        body: [
          "It is safer to think in emergency fund bands than exact procedure prices. A minor urgent visit might be manageable from monthly cash flow. A serious emergency can require many thousands of rand, especially after hours or with hospitalisation.",
        ],
        checklist: [
          "Keep a starter emergency fund if you can.",
          "Know whether your insurance pays the vet directly or reimburses you later.",
          "Save your policy number and vet records where you can find them quickly.",
          "Ask your regular vet which emergency clinic they recommend after hours.",
          "Review limits and exclusions before your dog is sick.",
        ],
      },
      {
        heading: "What to ask during an emergency estimate",
        body: [
          "You can ask financial questions without being difficult. The vet team may not know the final cost immediately, but they can often explain the first stabilisation step and likely next decisions.",
        ],
        bullets: [
          "What is needed right now to stabilise my dog?",
          "What is the estimate range for the first stage?",
          "What tests or treatments may be needed next?",
          "What happens if my dog needs overnight care or referral?",
          "What are the risks if I decline or delay a recommendation?",
        ],
      },
      {
        heading: "Emergency symptoms that should not wait",
        body: [
          "Phone a vet or emergency clinic immediately if your dog is collapsing, struggling to breathe, having seizures, bleeding heavily, unable to urinate, repeatedly vomiting, bloated and distressed, possibly poisoned, bitten by a snake, suffering heatstroke signs, or rapidly worsening.",
        ],
      },
    ],
    faqs: [
      {
        question: "Can I ask for a quote before going to the emergency vet?",
        answer:
          "You can ask for likely consult or stabilisation costs, but the final estimate may depend on examination and tests. Do not delay severe symptoms while collecting quotes.",
      },
      {
        question: "Does pet insurance cover emergency vet bills?",
        answer:
          "It depends on the policy, waiting periods, exclusions, excess, annual limits, and whether the condition is pre-existing. Read your documents before an emergency.",
      },
      {
        question: "What if I cannot afford emergency treatment?",
        answer:
          "Tell the vet honestly and ask what stabilisation, payment, welfare, or referral options exist. Avoid home remedies or waiting when symptoms are severe.",
      },
    ],
    related: [
      { title: "Dog Emergency Help", description: "Recognise urgent symptoms.", href: "/emergency" },
      { title: "Pet Insurance", description: "Understand cover before claims.", href: "/insurance/pet-insurance-for-dogs-south-africa" },
      { title: "Vet Costs", description: "Understand routine and diagnostic costs.", href: "/costs/vet-costs-for-dogs-south-africa" },
    ],
    sources: vetSources,
  },
  {
    slug: "pet-insurance-for-dogs-south-africa",
    path: "/insurance/pet-insurance-for-dogs-south-africa",
    hubTitle: "Insurance",
    hubPath: "/insurance",
    title: "Pet Insurance for Dogs in South Africa",
    seoTitle: "Pet Insurance for Dogs South Africa | Plain-English Guide",
    description:
      "A plain-English South African guide to dog insurance, covering premiums, excesses, annual limits, exclusions, claims, waiting periods, and routine-care add-ons.",
    intro:
      "Pet insurance can make large vet bills easier to manage, but it is not a magic card that pays for everything. South African dog owners need to compare policy documents, not slogans, and understand exactly what happens when a claim is made.",
    updated: "2026-05-13",
    quickFacts: [
      "This guide is educational only and is not personalised financial advice.",
      "Do not choose insurance by premium alone. Compare excesses, annual limits, exclusions, waiting periods, claim process, and age rules.",
      "Pre-existing conditions are often excluded or treated differently, so timing matters.",
      "Ask each insurer direct questions and keep written answers with your policy documents.",
    ],
    sections: [
      {
        heading: "What pet insurance may cover",
        body: [
          "Policies differ, but dog insurance commonly groups cover into accidents, illnesses, hospitalisation, surgery, diagnostics, medication, and sometimes optional routine-care benefits.",
          "Routine care add-ons may include items such as vaccines, check-ups, dental scale benefits, or parasite prevention, but these are policy-specific and may have limits.",
        ],
        table: {
          headers: ["Policy feature", "Question to ask"],
          rows: [
            ["Accident cover", "What counts as an accident and when does cover start?"],
            ["Illness cover", "Which illnesses are covered and what waiting period applies?"],
            ["Annual limit", "What is the maximum paid per year, per condition, or per claim?"],
            ["Excess", "How much do I pay before the insurer contributes?"],
            ["Pre-existing conditions", "How does the insurer define and handle them?"],
            ["Claims", "Do I pay upfront and claim back, or can the vet be paid directly?"],
          ],
        },
      },
      {
        heading: "Premiums and real affordability",
        body: [
          "A lower premium may come with lower limits, higher excesses, narrower cover, or more exclusions. A higher premium may still exclude important items. The best question is not 'which is cheapest?' but 'what risk am I transferring, and what risk stays with me?'",
          "Premiums can vary by pet age, species, breed, plan type, benefit level, and insurer rules. Always get a current quote from the insurer.",
        ],
      },
      {
        heading: "Checklist before joining",
        body: [
          "Read the policy wording before you need to claim. If anything is unclear, ask the insurer to explain it in writing.",
        ],
        checklist: [
          "Waiting periods for accidents, illnesses, orthopaedic conditions, and routine benefits.",
          "Pre-existing condition definition.",
          "Annual, condition, and claim limits.",
          "Excess, co-payment, and percentage reimbursement.",
          "Age limits, breed rules, and premium increases.",
          "Dental, hereditary, chronic, behavioural, prescription food, and alternative therapy rules.",
          "Claim documents, time limits, and payment process.",
        ],
      },
      {
        heading: "Insurance plus savings",
        body: [
          "Even with insurance, keep some emergency savings if possible. You may need to pay an excess, cover exclusions, wait for reimbursement, or handle costs above the annual limit.",
          "If you decide not to insure, build a deliberate savings plan instead of hoping emergencies stay small.",
        ],
      },
    ],
    faqs: [
      {
        question: "Which pet insurer is best in South Africa?",
        answer:
          "DogHaven does not rank insurers. The best fit depends on your dog, budget, risk tolerance, policy wording, exclusions, and claims process.",
      },
      {
        question: "Will insurance cover my dog's existing problem?",
        answer:
          "Often not, or only under specific conditions. Ask the insurer how they define pre-existing conditions and get the answer in writing.",
      },
      {
        question: "Is routine care included?",
        answer:
          "Sometimes only as an add-on or limited benefit. Check whether vaccines, dental care, parasite control, or wellness visits are included and capped.",
      },
    ],
    related: [
      { title: "Waiting Periods", description: "Know when cover starts.", href: "/insurance/dog-insurance-waiting-periods-south-africa" },
      { title: "Is Insurance Worth It?", description: "Compare cover and savings.", href: "/insurance/is-pet-insurance-worth-it-south-africa" },
      { title: "Emergency Vet Costs", description: "Plan for urgent bills.", href: "/costs/emergency-vet-costs-south-africa" },
    ],
    sources: insuranceSources,
  },
  {
    slug: "dog-insurance-waiting-periods-south-africa",
    path: "/insurance/dog-insurance-waiting-periods-south-africa",
    hubTitle: "Insurance",
    hubPath: "/insurance",
    title: "Dog Insurance Waiting Periods in South Africa",
    seoTitle: "Dog Insurance Waiting Periods South Africa | Plain-English Guide",
    description:
      "A plain-English guide to dog insurance waiting periods in South Africa, including accident cover, illness cover, pre-existing conditions, exclusions, and claims.",
    intro:
      "A waiting period is the time after joining a policy before certain benefits can be claimed. It exists so insurance covers unexpected future events, not problems that are already present. The exact rules differ by insurer, so always read the policy wording.",
    updated: "2026-05-13",
    quickFacts: [
      "This guide is educational only and is not personalised financial advice.",
      "Waiting periods differ between accident, illness, routine care, orthopaedic, dental, and other benefit types.",
      "A symptom that appears during a waiting period may be treated as excluded or pre-existing depending on the policy.",
      "Get written answers before relying on cover for a new puppy, senior dog, or dog with previous health issues.",
    ],
    sections: [
      {
        heading: "Waiting periods in plain English",
        body: [
          "If you take out a policy today, not every benefit necessarily starts today. Some plans may cover accidents sooner than illnesses. Some benefits may require longer waits, and some conditions may be excluded if signs existed before cover started.",
          "The wording matters more than the sales page. Download and read the policy document before paying.",
        ],
        table: {
          headers: ["Term", "What to check"],
          rows: [
            ["Accident waiting period", "When accident claims become active."],
            ["Illness waiting period", "When illness claims become active."],
            ["Routine-care waiting period", "Whether wellness benefits have their own wait."],
            ["Pre-existing condition", "How signs, symptoms, diagnosis, and vet records are interpreted."],
            ["Specific exclusions", "Dental, hereditary, orthopaedic, behavioural, or breed-related limits."],
          ],
        },
      },
      {
        heading: "Questions to ask an insurer",
        body: [
          "Ask direct questions and keep the response. If your dog has ever had symptoms, treatment, medication, or a vet note, disclose it honestly before assuming cover applies.",
        ],
        checklist: [
          "What waiting periods apply to accidents, illnesses, and routine care?",
          "How do you define a pre-existing condition?",
          "If my dog had symptoms but no diagnosis, how is that handled?",
          "Are breed-related or hereditary conditions limited?",
          "What vet records must I provide when claiming?",
          "Can waiting periods be waived after a vet check?",
          "What happens if symptoms start before the waiting period ends?",
        ],
      },
      {
        heading: "Why timing matters",
        body: [
          "Insurance is easiest to arrange while a dog is healthy. Once a dog has a limp, skin problem, ear infections, vomiting episodes, seizures, or chronic medication, future cover can become more complicated.",
          "This does not mean every older or previously sick dog cannot be insured. It means you need to compare wording carefully and ask the insurer exactly what would be excluded.",
        ],
      },
      {
        heading: "Do not confuse insurance with emergency funding",
        body: [
          "A waiting period means you may still need savings for early vet bills after joining. Keep an emergency fund if you can, especially for puppies, senior dogs, and active breeds.",
        ],
      },
    ],
    faqs: [
      {
        question: "Can I buy insurance after my dog gets sick?",
        answer:
          "You can apply, but the existing issue may be excluded or treated as pre-existing. Ask the insurer directly before relying on cover.",
      },
      {
        question: "Are accident waiting periods shorter than illness waiting periods?",
        answer:
          "Often they can be, but this is policy-specific. Check the exact wording for the insurer and plan you are considering.",
      },
      {
        question: "Do waiting periods apply when I upgrade my plan?",
        answer:
          "They may. Ask whether new benefits, higher limits, or added routine care trigger new waiting periods.",
      },
    ],
    related: [
      { title: "Pet Insurance for Dogs", description: "Understand policy structure.", href: "/insurance/pet-insurance-for-dogs-south-africa" },
      { title: "Is Pet Insurance Worth It?", description: "Make a balanced decision.", href: "/insurance/is-pet-insurance-worth-it-south-africa" },
      { title: "Vet Costs", description: "Know what bills can include.", href: "/costs/vet-costs-for-dogs-south-africa" },
    ],
    sources: insuranceSources,
  },
  {
    slug: "is-pet-insurance-worth-it-south-africa",
    path: "/insurance/is-pet-insurance-worth-it-south-africa",
    hubTitle: "Insurance",
    hubPath: "/insurance",
    title: "Is Pet Insurance Worth It in South Africa?",
    seoTitle: "Is Pet Insurance Worth It South Africa? | Dog Owner Guide",
    description:
      "A balanced South African guide to whether pet insurance is worth it for dogs, comparing premiums, savings, exclusions, emergency risk, age, breed, and claims.",
    intro:
      "Pet insurance is worth considering when a large vet bill would be difficult to pay from savings. It is not worth assuming every plan will suit every dog. The decision depends on your emergency fund, your dog's risk, the policy wording, and what financial uncertainty you can handle.",
    updated: "2026-05-13",
    quickFacts: [
      "This guide is educational only and is not personalised financial advice.",
      "Insurance may help with large unexpected bills, but exclusions, excesses, waiting periods, and annual limits still apply.",
      "Savings may work for disciplined owners, but one serious emergency can exceed a small fund quickly.",
      "Compare policy documents and direct quotes instead of relying on advertising claims.",
    ],
    sections: [
      {
        heading: "When insurance may be useful",
        body: [
          "Insurance can be useful when you want help managing low-probability, high-cost events such as accidents, surgery, hospitalisation, or serious illness. It can also make decision-making less stressful during emergencies, provided you understand the claim process.",
        ],
        checklist: [
          "You would struggle to pay a large unexpected vet bill.",
          "Your dog is young and healthy enough to avoid many pre-existing exclusions.",
          "You own an active, large, or higher-risk breed.",
          "You prefer predictable premiums over unpredictable emergency bills.",
          "You understand the excess, limits, and exclusions.",
        ],
      },
      {
        heading: "When savings may be better",
        body: [
          "Some owners prefer a dedicated savings account. This can work if you can build it quickly and keep it ring-fenced for veterinary care. The risk is that a serious emergency may happen before the fund is large enough.",
        ],
        table: {
          headers: ["Option", "Strength", "Weakness"],
          rows: [
            ["Insurance", "Can help with large covered claims.", "Premiums, exclusions, waiting periods, and limits apply."],
            ["Savings", "Flexible and not subject to insurer approval.", "May be too small when a serious emergency happens."],
            ["Both", "Insurance for big risk plus savings for excesses and exclusions.", "Requires monthly discipline and budget space."],
          ],
        },
      },
      {
        heading: "Breed, age and health considerations",
        body: [
          "Large dogs, active dogs, breeds with known health concerns, and senior dogs can be more expensive to treat. But older dogs or dogs with previous symptoms may also face more exclusions or higher premiums.",
          "Ask insurers how they handle breed-related conditions, hereditary conditions, chronic illness, dental disease, and age rules.",
        ],
      },
      {
        heading: "Decision checklist",
        body: [
          "Before deciding, compare three things: what a realistic emergency could cost, how much you can save quickly, and what the policy actually covers.",
        ],
        checklist: [
          "Can I pay the excess and any upfront amount?",
          "What is excluded because of my dog's history?",
          "What annual and condition limits apply?",
          "Will premiums remain affordable as my dog ages?",
          "Could I maintain a separate emergency fund anyway?",
        ],
      },
    ],
    faqs: [
      {
        question: "Is pet insurance always worth it?",
        answer:
          "No. It depends on your dog, policy wording, budget, emergency savings, and risk tolerance. Compare carefully before deciding.",
      },
      {
        question: "Can insurance replace an emergency fund?",
        answer:
          "Not completely. You may need money for excesses, exclusions, upfront payment, waiting periods, or costs above limits.",
      },
      {
        question: "Should I insure a rescue dog?",
        answer:
          "It can be worth considering, but ask about unknown history, pre-existing rules, age, waiting periods, and what records the insurer needs.",
      },
    ],
    related: [
      { title: "Pet Insurance for Dogs", description: "Understand policy basics.", href: "/insurance/pet-insurance-for-dogs-south-africa" },
      { title: "Waiting Periods", description: "Know when cover starts.", href: "/insurance/dog-insurance-waiting-periods-south-africa" },
      { title: "Emergency Vet Costs", description: "Plan for urgent care.", href: "/costs/emergency-vet-costs-south-africa" },
    ],
    sources: insuranceSources,
  },
  {
    slug: "dog-food-south-africa",
    path: "/food/dog-food-south-africa",
    hubTitle: "Dog Food",
    hubPath: "/food",
    title: "Dog Food in South Africa: A Practical Feeding Guide",
    seoTitle: "Dog Food South Africa | Practical Feeding, Cost and Safety Guide",
    description:
      "A practical South African dog food guide covering life stage, dog size, activity, allergies, vet diets, budget, treats, food safety, label claims, and safe food changes.",
    intro:
      "Choosing dog food in South Africa can feel noisy because every bag, tin, freezer tub, and advert sounds confident. The best choice is the food that suits your dog's life stage, health, body condition, activity, budget, and your vet's advice where needed.",
    updated: "2026-05-13",
    isHealthGuide: true,
    quickFacts: [
      "Feeding guidance is educational and does not replace veterinary advice for illness, allergies, obesity, or chronic disease.",
      "Life stage matters: puppies, adults, seniors, pregnant dogs, and dogs with medical problems may need different nutrition.",
      "Treats, biltong, boerewors, leftovers, and toppers can quietly unbalance a diet or add unsafe salt and fat.",
      "Make diet changes gradually unless your vet advises a different plan.",
    ],
    sections: [
      {
        heading: "Start with the dog in front of you",
        body: [
          "Do not choose food only by brand popularity or packaging. Ask what your actual dog needs: age, size, body condition, activity, sterilisation status, stool quality, skin, allergies, and vet history.",
        ],
        table: {
          headers: ["Dog factor", "Food question"],
          rows: [
            ["Puppy", "Is the food suitable for growth and expected adult size?"],
            ["Large breed", "Does the diet support controlled growth or healthy weight?"],
            ["Senior dog", "Are dental health, kidneys, joints, and body condition being monitored?"],
            ["Itchy dog", "Has a vet ruled out parasites, infection, and allergy patterns?"],
            ["Overweight dog", "Are portions measured and treats counted?"],
          ],
        },
      },
      {
        heading: "Food types in South African homes",
        body: [
          "Dry kibble, wet food, veterinary diets, home-cooked food, raw diets, toppers, and treats can all appear in South African homes. Each has trade-offs in cost, storage, hygiene, convenience, and nutritional balance.",
        ],
        bullets: [
          "Dry food is convenient and easier to store, but quality and suitability still vary.",
          "Wet food may help appetite but can raise monthly cost quickly.",
          "Veterinary diets should be used under vet guidance for specific health problems.",
          "Home-cooked diets need professional formulation to avoid nutrient gaps.",
          "Raw diets carry food-safety and balance concerns, especially around children, seniors, and immune-compromised people.",
        ],
      },
      {
        heading: "Why this dog food guide is useful",
        body: [
          "Dog food advice becomes much more helpful when it starts with the individual dog instead of a brand argument. This page helps South African owners compare food by life stage, body condition, stool quality, skin signs, budget, storage, treats, and veterinary guidance.",
          "Use it before switching foods, comparing cheap and premium options, adding toppers, choosing puppy or senior food, or deciding whether a symptom should be discussed with a vet rather than treated as a food problem.",
        ],
        table: {
          headers: ["Decision", "Helpful DogHaven next step"],
          rows: [
            ["Portion uncertainty", "Use the feeding calculator, then compare with the food label and body condition."],
            ["Monthly food budget", "Read the dog food cost guide and dog food prices guide before changing quality level."],
            ["Itchy skin or recurring ears", "Check fleas, ticks, allergies, and vet guidance before blaming food alone."],
            ["Senior dog appetite changes", "Discuss dental, chronic health, and senior food questions with a vet."],
            ["Unsafe table scraps", "Use the food safety lookup before sharing human food."],
          ],
        },
      },
      {
        heading: "Safe food-change checklist",
        body: [
          "A sudden diet change can trigger vomiting or diarrhoea in some dogs. Transition slowly unless your vet tells you to change immediately for medical reasons.",
        ],
        checklist: [
          "Keep the old food bag or label until the transition is complete.",
          "Introduce the new food gradually over several days.",
          "Measure portions instead of guessing.",
          "Pause rich treats during the transition.",
          "Call a vet if there is repeated vomiting, blood, weakness, or severe diarrhoea.",
        ],
      },
      {
        heading: "Treats and table scraps",
        body: [
          "South African leftovers can be risky for dogs. Braai meat, bones, fatty offcuts, biltong, boerewors, spicy sauces, onion, garlic, chocolate desserts, grapes, raisins, and xylitol-containing sweets or peanut butter can all cause problems.",
        ],
      },
    ],
    faqs: [
      {
        question: "What is the best dog food in South Africa?",
        answer:
          "There is no single best food for every dog. Choose by life stage, body condition, health, digestibility, budget, and veterinary advice where needed.",
      },
      {
        question: "Should my dog eat grain-free food?",
        answer:
          "Do not choose grain-free only because it sounds premium. Ask your vet if your dog has a specific medical reason for a special diet.",
      },
      {
        question: "Can I mix wet and dry food?",
        answer:
          "Often yes, but count the calories and cost. For dogs with medical conditions, ask your vet before mixing diets.",
      },
    ],
    related: [
      { title: "Dog Food Cost", description: "Budget feeding realistically.", href: "/costs/dog-food-cost-south-africa" },
      { title: "Best Dog Food South Africa", description: "Choose food for your individual dog without brand rankings.", href: "/food/best-dog-food-south-africa" },
      { title: "Dog Food Prices", description: "Monthly food budget factors without fake current prices.", href: "/food/dog-food-prices-south-africa" },
      { title: "Dog Feeding Calculator", description: "Estimate daily food amounts as a starting point.", href: "/tools/dog-feeding-calculator" },
      { title: "Can My Dog Eat This?", description: "Quick food safety lookup for common foods.", href: "/tools/can-my-dog-eat-this" },
      { title: "Dog Food Labels", description: "Read claims more clearly.", href: "/food/how-to-read-dog-food-labels-south-africa" },
      { title: "Overweight Dog", description: "Portions, treats, body condition, and vet-guided weight planning.", href: "/health/overweight-dog-south-africa" },
      { title: "Dog Skin Allergies", description: "Food sensitivity discussions without guessing.", href: "/health/dog-skin-allergies-south-africa" },
      { title: "Toxic Foods", description: "Know dangerous foods.", href: "/health/toxic-foods-for-dogs-south-africa" },
    ],
    sources: foodSources,
  },
  {
    slug: "puppy-food-south-africa",
    path: "/food/puppy-food-south-africa",
    hubTitle: "Dog Food",
    hubPath: "/food",
    title: "Puppy Food in South Africa",
    seoTitle: "Puppy Food South Africa | Growth and Feeding Guide",
    description:
      "A practical South African puppy food guide covering growth, large-breed puppies, feeding schedules, safe transitions, treats, budget, and vet advice.",
    intro:
      "Puppy food is not just smaller adult food. Growing dogs need nutrition that supports development without pushing unhealthy weight gain. In South Africa, puppy feeding also needs to fit budget, vaccine timing, parasite prevention, and safe socialisation.",
    updated: "2026-05-13",
    isHealthGuide: true,
    quickFacts: [
      "Puppy feeding is educational here; ask your vet about growth, body condition, and breed-size needs.",
      "Large-breed puppies may need careful growth support rather than simply more food.",
      "Avoid too many rich treats, bones, biltong, boerewors, and leftovers.",
      "Puppies with vomiting, diarrhoea, weakness, poor appetite, or weight loss need veterinary advice promptly.",
    ],
    sections: [
      {
        heading: "What to look for in puppy food",
        body: [
          "Choose food labelled for puppies or growth, and ask your vet whether your puppy's expected adult size changes the best choice. The needs of a toy-breed puppy and a large-breed puppy are not identical.",
        ],
        checklist: [
          "Life-stage suitability for growth.",
          "Clear feeding guide by weight and age.",
          "Reliable storage and expiry date.",
          "Appropriate kibble size or texture.",
          "No pressure to add supplements unless a vet recommends them.",
        ],
      },
      {
        heading: "Feeding schedule and portions",
        body: [
          "Puppies often need smaller, more frequent meals than adult dogs. The exact schedule depends on age, size, health, and vet advice. Measure meals and adjust as your puppy grows.",
        ],
        table: {
          headers: ["Puppy stage", "Practical focus"],
          rows: [
            ["Newly adopted puppy", "Keep the current food stable for a few days if possible."],
            ["Fast growth stage", "Monitor body condition and avoid overfeeding."],
            ["Large-breed puppy", "Ask your vet about growth rate and joint health."],
            ["Approaching adulthood", "Ask when to transition to adult food."],
          ],
        },
      },
      {
        heading: "Budget without risky shortcuts",
        body: [
          "Puppy food can feel expensive, especially for medium and large breeds. But using adult food too early, filling meals with scraps, or switching constantly can create digestive and nutritional problems.",
        ],
        bullets: [
          "Compare cost per day, not only bag price.",
          "Buy a bag size your puppy will finish while fresh.",
          "Use training treats from the daily food allowance where suitable.",
          "Avoid fatty braai leftovers, cooked bones, and salty snacks.",
        ],
      },
      {
        heading: "When to call a vet",
        body: [
          "Young puppies can deteriorate faster than adult dogs. Call a vet if your puppy is vomiting repeatedly, has diarrhoea with blood, seems weak, will not eat, has a swollen painful belly, coughs badly, or is not gaining weight.",
        ],
      },
    ],
    faqs: [
      {
        question: "Can puppies eat adult dog food?",
        answer:
          "Usually puppies should eat food appropriate for growth. Ask your vet when and how to transition to adult food.",
      },
      {
        question: "Should I add calcium for a large-breed puppy?",
        answer:
          "Do not add supplements without veterinary advice. Extra minerals can be harmful when growth diets are already balanced.",
      },
      {
        question: "Can I train with puppy kibble?",
        answer:
          "Often yes. Using part of the daily food allowance for training can help control calories and cost.",
      },
    ],
    related: [
      { title: "Adopting a Puppy", description: "Prepare for puppy care.", href: "/adoption/adopting-a-puppy-south-africa" },
      { title: "Puppy First-Year Cost", description: "Budget the first year.", href: "/costs/puppy-first-year-cost-south-africa" },
      { title: "Parvovirus", description: "Know puppy emergency signs.", href: "/emergency/parvovirus-in-dogs-south-africa" },
    ],
    sources: foodSources,
  },
  {
    slug: "how-to-read-dog-food-labels-south-africa",
    path: "/food/how-to-read-dog-food-labels-south-africa",
    hubTitle: "Dog Food",
    hubPath: "/food",
    title: "How to Read Dog Food Labels in South Africa",
    seoTitle: "How to Read Dog Food Labels South Africa | Practical Guide",
    description:
      "A practical guide to reading dog food labels in South Africa, including life stage, feeding guides, ingredients, analysis, claims, treats, and vet diet questions.",
    intro:
      "Dog food labels are designed to inform you, but they can also be confusing. Ingredient lists, feeding guides, life-stage claims, marketing words, and analysis tables all need context. This guide helps you read the bag with calmer eyes.",
    updated: "2026-05-13",
    quickFacts: [
      "A label is useful, but it does not tell you everything about ingredient quality, digestibility, or whether the food suits your dog.",
      "Life-stage suitability, feeding amount, calories, and your dog's body condition matter more than pretty marketing words.",
      "Ask your vet about special diets for allergies, urinary disease, kidney disease, obesity, pancreatitis, or chronic illness.",
      "Treats and toppers count as part of the diet even if they are not in the main food bag.",
    ],
    sections: [
      {
        heading: "Label areas to check",
        body: [
          "Start with the practical parts of the label before the marketing claims. You need to know whether the food suits your dog's life stage, how much to feed, and how to store it safely.",
        ],
        table: {
          headers: ["Label area", "What to ask"],
          rows: [
            ["Life stage", "Is it for puppy, adult, senior, all life stages, or a veterinary condition?"],
            ["Feeding guide", "Does the daily amount match your dog's current weight and body condition?"],
            ["Nutrition analysis", "What protein, fat, fibre, and moisture information is provided?"],
            ["Ingredients", "Are you reading the list with context rather than judging by one ingredient?"],
            ["Expiry and storage", "Can you finish the bag while it is still fresh?"],
          ],
        },
      },
      {
        heading: "Marketing words to slow down around",
        body: [
          "Words such as premium, natural, ancestral, holistic, gourmet, human-grade, and grain-free can sound reassuring, but they do not automatically mean the food is best for your dog.",
          "Ask what evidence, formulation expertise, quality control, and feeding guidance sits behind the claim.",
        ],
        checklist: [
          "Does the food state a life stage clearly?",
          "Is the feeding guide practical for your dog size?",
          "Does your dog maintain a healthy body condition on it?",
          "Does your vet have concerns about the diet for your dog's health history?",
          "Are treats and toppers pushing calories too high?",
        ],
      },
      {
        heading: "Ingredient list reality",
        body: [
          "The ingredient list can be useful, but it is not a full quality score. Ingredients are listed by weight before processing, and high-moisture ingredients can appear more prominent than they are in the final food.",
          "Do not change diets repeatedly because of one online claim. Watch your dog's body condition, stool quality, coat, energy, and veterinary advice.",
        ],
      },
      {
        heading: "Questions for special diets",
        body: [
          "For itchy skin, stomach problems, obesity, urinary signs, kidney disease, pancreatitis, or suspected allergies, labels are not enough. Ask your vet whether a diagnostic plan or veterinary diet is appropriate.",
        ],
      },
    ],
    faqs: [
      {
        question: "Is the first ingredient the most important thing?",
        answer:
          "It is useful but not enough. Look at life stage, formulation, feeding guide, analysis, digestibility, body condition, and veterinary advice.",
      },
      {
        question: "Are grain-free foods better?",
        answer:
          "Not automatically. Choose grain-free only when it suits your dog and preferably after veterinary discussion if there are health concerns.",
      },
      {
        question: "Can I trust feeding guides?",
        answer:
          "Use them as a starting point. Adjust with your vet based on body condition, activity, treats, sterilisation status, and weight changes.",
      },
    ],
    related: [
      { title: "Dog Food South Africa", description: "Choose food practically.", href: "/food/dog-food-south-africa" },
      { title: "Dog Food Cost", description: "Compare daily feeding cost.", href: "/costs/dog-food-cost-south-africa" },
      { title: "When to Take Your Dog to the Vet", description: "Know health red flags.", href: "/health/when-to-take-your-dog-to-the-vet-south-africa" },
    ],
    sources: foodSources,
  },
  {
    slug: "can-dogs-eat-biltong",
    path: "/food/can-dogs-eat-biltong",
    hubTitle: "Dog Food",
    hubPath: "/food",
    title: "Can Dogs Eat Biltong?",
    seoTitle: "Can Dogs Eat Biltong? | South African Dog Safety Guide",
    description:
      "A cautious South African guide explaining why biltong is usually a poor dog treat because of salt, spices, fat, choking risk, and pancreatitis concerns.",
    intro:
      "Biltong is a South African favourite, but that does not make it a good dog treat. Most biltong is salty, seasoned, dried, and sometimes fatty. Dogs do not need it, and safer treats are usually a better choice.",
    updated: "2026-05-13",
    isHealthGuide: true,
    quickFacts: [
      "Best answer: avoid feeding biltong as a routine dog treat.",
      "Salt, spices, fat, chilli, garlic, onion powder, hard pieces, and mould risk can all be concerns.",
      "Dogs with pancreatitis history, kidney or heart disease, high blood pressure concerns, or sensitive stomachs should not be given salty fatty snacks.",
      "If your dog ate a lot of biltong or shows vomiting, diarrhoea, weakness, tremors, bloating, or distress, contact a vet.",
    ],
    sections: [
      {
        heading: "Why biltong is risky for dogs",
        body: [
          "Plain dried meat may sound simple, but commercial and homemade biltong is usually prepared for human taste. Salt, coriander, pepper, chilli, vinegar, garlic, onion powder, fat, and hard texture can all create problems.",
        ],
        table: {
          headers: ["Risk", "Why it matters"],
          rows: [
            ["Salt", "Can worsen thirst, stomach upset, and be unsafe in some medical conditions."],
            ["Spices", "Can irritate the gut; onion and garlic ingredients are unsafe for dogs."],
            ["Fat", "Rich fatty snacks can trigger stomach upset and may contribute to pancreatitis risk."],
            ["Texture", "Hard strips or chunks can be choking risks, especially for gulpers."],
            ["Mould or storage", "Poorly stored dried meat can become unsafe."],
          ],
        },
      },
      {
        heading: "What to do if your dog ate biltong",
        body: [
          "A tiny dropped crumb may not cause a problem in a healthy dog, but a handful or bag is different. Check the ingredients and estimate how much was eaten.",
        ],
        checklist: [
          "Remove the remaining biltong.",
          "Check for onion, garlic, chilli, high fat, or mould.",
          "Watch for vomiting, diarrhoea, excessive thirst, restlessness, pain, or weakness.",
          "Phone your vet if a small dog ate a large amount or if symptoms appear.",
          "Do not give home remedies or human medicine unless a vet tells you to.",
        ],
      },
      {
        heading: "Safer South African treat habits",
        body: [
          "Use dog-safe treats or a small portion of your dog's normal food for training. If you want a meat-based treat, choose a product made for dogs and still feed it moderately.",
        ],
        bullets: [
          "Keep human snacks away during rugby, braais, road trips, and holidays.",
          "Teach children not to share salty snacks with the dog.",
          "Keep bin lids secure after parties and braais.",
          "Use measured treats so weight does not creep up.",
        ],
      },
      {
        heading: "When to call a vet urgently",
        body: [
          "Call a vet if your dog ate a large amount, is very small, has a medical condition, or shows repeated vomiting, diarrhoea, weakness, tremors, collapse, severe belly pain, or distress.",
        ],
      },
    ],
    faqs: [
      {
        question: "Can dogs eat plain biltong without spices?",
        answer:
          "It is still usually salty and dried, and dogs do not need it. Safer dog-specific treats are a better choice.",
      },
      {
        question: "Is droewors safer than biltong?",
        answer:
          "No. Droewors is often fatty, salty, spiced, and may contain ingredients that are not suitable for dogs.",
      },
      {
        question: "What treat should I use instead?",
        answer:
          "Use dog-safe treats, part of the daily kibble allowance, or vet-approved options for dogs with medical conditions.",
      },
    ],
    related: [
      { title: "Toxic Foods", description: "Know dangerous food risks.", href: "/health/toxic-foods-for-dogs-south-africa" },
      { title: "Boerewors Safety", description: "Understand another local food risk.", href: "/food/can-dogs-eat-boerewors" },
      { title: "Dog Food Guide", description: "Build a safer diet.", href: "/food/dog-food-south-africa" },
    ],
    sources: foodSources,
  },
  {
    slug: "can-dogs-eat-boerewors",
    path: "/food/can-dogs-eat-boerewors",
    hubTitle: "Dog Food",
    hubPath: "/food",
    title: "Can Dogs Eat Boerewors?",
    seoTitle: "Can Dogs Eat Boerewors? | South African Dog Food Safety",
    description:
      "A cautious guide to boerewors and dogs, covering fat, salt, spices, onion, garlic, cooked bones, pancreatitis risk, and safer treat choices.",
    intro:
      "Boerewors smells irresistible to many dogs, but it is made for people, not pets. The fat, salt, spices, possible onion or garlic, and braai leftovers around it can make it a risky treat.",
    updated: "2026-05-13",
    isHealthGuide: true,
    quickFacts: [
      "Best answer: do not feed boerewors as a dog treat.",
      "Fatty sausage can upset the stomach and may be dangerous for dogs prone to pancreatitis.",
      "Onion, garlic, spices, salty seasoning, cooked bones, and braai scraps can all create risk.",
      "If your dog ate a lot or becomes sick, contact a vet for advice.",
    ],
    sections: [
      {
        heading: "Why boerewors is not a good dog food",
        body: [
          "Boerewors recipes vary, but many include salt, spices, fat, and flavourings that are not suitable for dogs. Even if a particular piece seems plain, it is still a rich sausage.",
        ],
        table: {
          headers: ["Concern", "Why to avoid it"],
          rows: [
            ["Fat", "Can cause vomiting, diarrhoea, and pancreatitis risk in some dogs."],
            ["Salt", "Unnecessary and potentially risky, especially for dogs with medical problems."],
            ["Onion or garlic", "Can damage red blood cells and should be avoided."],
            ["Spices", "May irritate the stomach."],
            ["Cooked bones nearby", "Can splinter, obstruct, or injure the gut."],
          ],
        },
      },
      {
        heading: "What to do after a braai mishap",
        body: [
          "Dogs often steal food when everyone is distracted. First remove remaining food and check whether bones, skewers, onion, garlic, sauces, or large quantities were involved.",
        ],
        checklist: [
          "Estimate how much was eaten.",
          "Check whether the dog ate cooked bones, skewers, foil, or packaging.",
          "Watch for vomiting, diarrhoea, belly pain, bloating, weakness, or restlessness.",
          "Phone your vet if a small dog ate a lot, if bones were eaten, or if symptoms appear.",
          "Do not give human medicine for pain or stomach upset.",
        ],
      },
      {
        heading: "Safer braai rules for dogs",
        body: [
          "Create a family rule before the fire is lit: no feeding from the braai, no bones, and no unattended plates at dog height.",
        ],
        bullets: [
          "Give the dog a safe chew or measured dog treat away from the braai area.",
          "Use bins with secure lids.",
          "Teach guests not to share fatty offcuts.",
          "Keep children from feeding sausage pieces under the table.",
        ],
      },
      {
        heading: "When to call a vet urgently",
        body: [
          "Call a vet urgently if your dog ate bones, skewers, large amounts of boerewors, onion or garlic-heavy food, or shows repeated vomiting, severe diarrhoea, pain, collapse, bloating, or distress.",
        ],
      },
    ],
    faqs: [
      {
        question: "Can dogs eat a small piece of plain boerewors?",
        answer:
          "It is better not to offer it. Even small pieces can encourage begging, and ingredients vary widely.",
      },
      {
        question: "Are cooked bones from a braai safe?",
        answer:
          "No. Cooked bones can splinter or cause obstruction and should not be given to dogs.",
      },
      {
        question: "What if my dog stole one sausage?",
        answer:
          "Remove the rest, check for bones or packaging, monitor closely, and phone a vet if your dog is small, unwell, or ate a large amount.",
      },
    ],
    related: [
      { title: "Biltong Safety", description: "Avoid salty dried meat treats.", href: "/food/can-dogs-eat-biltong" },
      { title: "Toxic Foods", description: "Understand unsafe ingredients.", href: "/health/toxic-foods-for-dogs-south-africa" },
      { title: "Dog Poisoning", description: "Know emergency next steps.", href: "/emergency/dog-poisoning-south-africa" },
    ],
    sources: foodSources,
  },
  {
    slug: "raw-food-diet-for-dogs-south-africa",
    path: "/food/raw-food-diet-for-dogs-south-africa",
    hubTitle: "Dog Food",
    hubPath: "/food",
    title: "Raw Food Diet for Dogs in South Africa",
    seoTitle: "Raw Food Diet for Dogs South Africa | Safety and Vet Advice",
    description:
      "A balanced South African guide to raw food diets for dogs, including food-safety risks, nutritional balance, puppies, children, storage, costs, and veterinary advice.",
    intro:
      "Raw diets are popular in some South African dog circles, but they are not risk-free or automatically healthier. Owners need to think about bacterial contamination, nutritional balance, bones, storage, children, immune-compromised people, puppies, and cost before changing diets.",
    updated: "2026-05-13",
    isHealthGuide: true,
    quickFacts: [
      "Speak to a vet or veterinary nutrition professional before starting a raw diet, especially for puppies, seniors, pregnant dogs, or dogs with illness.",
      "Raw pet food can carry bacteria that may affect both pets and people handling the food.",
      "Freezing does not reliably make raw food risk-free.",
      "A homemade raw diet can be nutritionally unbalanced without professional formulation.",
    ],
    sections: [
      {
        heading: "Main risks to understand",
        body: [
          "Raw feeding discussions can become emotional. The practical question is not whether owners love their dogs; it is whether the diet is safe, balanced, affordable, and suitable for the household.",
        ],
        table: {
          headers: ["Risk", "Why it matters"],
          rows: [
            ["Bacteria", "Raw meat can contain Salmonella, Listeria, and other pathogens."],
            ["Human exposure", "Children, elderly people, pregnant people, and immune-compromised family members may be more vulnerable."],
            ["Nutritional imbalance", "Incorrect calcium, phosphorus, vitamins, or trace minerals can harm dogs over time."],
            ["Bones", "Bones can fracture teeth, choke, obstruct, or injure the gut."],
            ["Cost and storage", "Freezer space, safe handling, and consistent supply add complexity."],
          ],
        },
      },
      {
        heading: "South African household checklist",
        body: [
          "Raw food safety is harder in busy homes with children, shared fridges, load-shedding interruptions, small kitchens, multiple pets, or family members who do not follow hygiene rules consistently.",
        ],
        checklist: [
          "Can raw food be stored safely during power interruptions?",
          "Can bowls, surfaces, and utensils be cleaned immediately after feeding?",
          "Are children kept away from raw food and bowls?",
          "Is the diet formulated for the dog's life stage?",
          "Does your vet know what your dog is eating?",
          "Do you have a plan if vomiting, diarrhoea, or weight loss starts?",
        ],
      },
      {
        heading: "Puppies and medical dogs need extra caution",
        body: [
          "Puppies need precise nutrition for growth. Senior dogs, immune-compromised dogs, dogs with pancreatitis, kidney disease, liver disease, gastrointestinal disease, or food allergies need veterinary guidance before any major diet change.",
          "Do not use raw diets as a home treatment for medical problems without diagnosis and guidance.",
        ],
      },
      {
        heading: "If you still want to explore raw feeding",
        body: [
          "Start with professional advice, not social media recipes. Ask for a complete diet plan, food-safety rules, monitoring schedule, and what signs mean the diet is not working.",
        ],
        bullets: [
          "Consult a vet or veterinary nutrition professional.",
          "Avoid raw bones without veterinary discussion.",
          "Keep raw food separate from human food.",
          "Wash hands, bowls, counters, and utensils thoroughly.",
          "Monitor weight, stool, coat, energy, and bloodwork where your vet recommends it.",
        ],
      },
    ],
    faqs: [
      {
        question: "Is raw food healthier for dogs?",
        answer:
          "Not automatically. A raw diet can be balanced or unbalanced, safe or risky. Speak to a vet before changing, especially for puppies or dogs with health conditions.",
      },
      {
        question: "Does freezing raw food kill bacteria?",
        answer:
          "Freezing can reduce some risks but does not reliably make raw food free of harmful pathogens.",
      },
      {
        question: "Can I feed raw bones?",
        answer:
          "Bones carry choking, dental, obstruction, and injury risks. Ask your vet before offering bones and avoid cooked bones entirely.",
      },
    ],
    related: [
      { title: "Dog Food South Africa", description: "Compare feeding options.", href: "/food/dog-food-south-africa" },
      { title: "Dog Food Cost", description: "Budget raw feeding honestly.", href: "/costs/dog-food-cost-south-africa" },
      { title: "Toxic Foods", description: "Know food danger signs.", href: "/health/toxic-foods-for-dogs-south-africa" },
    ],
    sources: foodSources,
  },
];

export function getPhase5Guide(slug: string) {
  return phase5GuidePages.find((guide) => guide.slug === slug);
}

export function getPhase5GuidesByHub(hubPath: string) {
  return phase5GuidePages.filter((guide) => guide.hubPath === hubPath);
}
