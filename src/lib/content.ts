export type CardLink = {
  title: string;
  description: string;
  href: string;
};

export type FAQ = {
  question: string;
  answer: string;
};

export type Source = {
  label: string;
  href: string;
  note: string;
};

export type HubContent = {
  slug: string;
  path: string;
  title: string;
  seoTitle: string;
  description: string;
  kicker: string;
  intro: string;
  cards: CardLink[];
  related: CardLink[];
  faqs: FAQ[];
  notice?: string;
};

export type ArticleSection = {
  heading: string;
  body: string[];
  bullets?: string[];
  checklist?: string[];
  table?: {
    headers: string[];
    rows: string[][];
  };
};

export type GuideContent = {
  slug: string;
  path: string;
  hubTitle: string;
  hubPath: string;
  title: string;
  seoTitle: string;
  description: string;
  intro: string;
  updated: string;
  isHealthGuide?: boolean;
  safetyRating?: {
    label: "Safe in small amounts" | "Risky" | "Dangerous" | "Emergency";
    summary: string;
  };
  quickFacts: string[];
  sections: ArticleSection[];
  faqs: FAQ[];
  related: CardLink[];
  sources: Source[];
};

export const hubPages: HubContent[] = [
  {
    slug: "health",
    path: "/health",
    title: "Dog Health in South Africa",
    seoTitle: "Dog Health in South Africa | Practical Care Guides",
    description:
      "Practical South African dog health guides covering prevention, vaccination, ticks, symptoms, vet visits, and owner decision-making.",
    kicker: "Health hub",
    intro:
      "Dog health advice should help you act sooner, ask better questions, and avoid guesswork. DogHaven health guides focus on prevention, early warning signs, South African disease context, and when a veterinarian is the right next step.",
    notice:
      "Health content on DogHaven is educational. If your dog is very young, elderly, pregnant, injured, in pain, collapsing, struggling to breathe, or getting worse quickly, contact a veterinarian urgently.",
    cards: [
      {
        title: "Vaccination Schedule South Africa",
        description:
          "A practical guide to core puppy and adult dog vaccines, rabies timing, boosters, and questions to ask your vet.",
        href: "/health/vaccination-schedule-south-africa",
      },
      {
        title: "Tick Bite Fever Basics",
        description:
          "How South African owners can think about tick prevention, warning signs, and when a vet visit should not wait.",
        href: "/health",
      },
      {
        title: "When to Phone the Vet",
        description:
          "A symptom-led checklist for deciding when to call your vet, book an appointment, or seek emergency care.",
        href: "/emergency",
      },
    ],
    related: [
      { title: "Emergency Help", description: "Urgent symptoms and first steps.", href: "/emergency" },
      { title: "Dog Food", description: "Feeding decisions that affect wellbeing.", href: "/food" },
      { title: "Dog Costs", description: "Budgeting for prevention and vet care.", href: "/costs" },
      { title: "Adoption Safety", description: "Health questions before bringing a dog home.", href: "/adoption" },
      {
        title: "When to Take Your Dog to the Vet",
        description: "A practical symptom-led vet decision guide.",
        href: "/health/when-to-take-your-dog-to-the-vet-south-africa",
      },
    ],
    faqs: [
      {
        question: "Can DogHaven diagnose my dog?",
        answer:
          "No. DogHaven explains general signs, prevention, and preparation. A veterinarian needs to examine your dog to diagnose or treat a medical problem.",
      },
      {
        question: "Why does South African context matter for dog health?",
        answer:
          "Local risks such as rabies exposure, ticks, climate, access to emergency care, and vaccination requirements shape practical dog care decisions.",
      },
      {
        question: "What information should I give a vet when I call?",
        answer:
          "Share your dog's age, breed or size, symptoms, when they started, vaccination status, medications, possible toxin exposure, and whether your dog is eating, drinking, breathing normally, and passing urine or stool.",
      },
    ],
  },
  {
    slug: "emergency",
    path: "/emergency",
    title: "Dog Emergency Help",
    seoTitle: "Dog Emergency Help in South Africa | DogHaven",
    description:
      "South Africa-focused dog emergency guidance for rabies exposure, parvovirus signs, poisoning, heat stress, injuries, and urgent vet decisions.",
    kicker: "Emergency hub",
    intro:
      "Emergencies are easier to handle when you know what information matters. This hub helps South African dog owners recognise urgent situations, prepare for vet calls, and avoid delays when symptoms are serious.",
    notice:
      "If your dog is collapsing, struggling to breathe, bleeding heavily, having seizures, unable to stand, repeatedly vomiting, or may have been poisoned, contact a veterinarian or emergency animal clinic immediately.",
    cards: [
      {
        title: "Rabies in South Africa",
        description:
          "What owners should know about rabies risk, vaccination, bite response, and why urgent medical advice matters.",
        href: "/emergency/rabies-south-africa",
      },
      {
        title: "Parvovirus in Dogs South Africa",
        description:
          "How to recognise parvo red flags in puppies and unvaccinated dogs, and why rapid vet care is critical.",
        href: "/emergency/parvovirus-in-dogs-south-africa",
      },
      {
        title: "Emergency Vet Call Checklist",
        description:
          "What to say when phoning a vet so they can help you triage quickly and prepare for arrival.",
        href: "/emergency",
      },
    ],
    related: [
      { title: "Dog Health", description: "Prevention and symptom context.", href: "/health" },
      { title: "Insurance", description: "Planning for emergency claims.", href: "/insurance" },
      { title: "Dog Costs", description: "Emergency fund planning.", href: "/costs" },
      {
        title: "When to Take Your Dog to the Vet",
        description: "Know which symptoms should not wait.",
        href: "/health/when-to-take-your-dog-to-the-vet-south-africa",
      },
    ],
    faqs: [
      {
        question: "Should I wait to see if emergency symptoms improve?",
        answer:
          "Not when symptoms are severe or fast-moving. Phone a vet or emergency clinic and describe what you are seeing. They can advise whether to come in immediately.",
      },
      {
        question: "Can I use home remedies during an emergency?",
        answer:
          "Avoid giving medicine or home treatments unless a vet tells you to. Some human medicines and well-meant remedies can be dangerous for dogs.",
      },
      {
        question: "What should I keep ready for emergencies?",
        answer:
          "Keep your vet's number, nearby emergency clinic details, vaccination records, insurance policy details if you have cover, and a carrier or lead accessible.",
      },
    ],
  },
  {
    slug: "breeds",
    path: "/breeds",
    title: "Dog Breed Guides for South African Homes",
    seoTitle: "Best Dog Breed Guides for South African Homes | DogHaven",
    description:
      "Breed planning guides for South African homes, climate, family routines, space, exercise, grooming, shedding, and adoption decisions.",
    kicker: "Breed hub",
    intro:
      "The best dog for a home is not just the cutest puppy in the photo. Breed decisions should match your space, heat, exercise time, budget, grooming tolerance, neighbours, children, other pets, and long-term care capacity.",
    cards: [
      {
        title: "Best Dog Breeds for South African Homes",
        description:
          "A practical way to compare breeds by heat, space, energy, shedding, family life, and owner experience.",
        href: "/breeds/best-dog-breeds-for-south-african-homes",
      },
      {
        title: "Small Dogs for Flats",
        description:
          "What to consider before choosing a smaller breed for apartment or townhouse living.",
        href: "/breeds",
      },
      {
        title: "High-Energy Dogs",
        description:
          "How to plan for breeds that need more training, enrichment, exercise, and daily structure.",
        href: "/training",
      },
    ],
    related: [
      { title: "Adoption Safety", description: "Questions before bringing a dog home.", href: "/adoption" },
      { title: "Grooming", description: "Coat care and shedding planning.", href: "/grooming" },
      { title: "Dog Costs", description: "Budget by size and care needs.", href: "/costs" },
      { title: "Training", description: "Plan for energy, manners, and public behaviour.", href: "/training" },
      { title: "Insurance", description: "Understand cover before choosing a higher-risk breed.", href: "/insurance" },
    ],
    faqs: [
      {
        question: "Is there one best dog breed for South Africa?",
        answer:
          "No single breed suits every South African home. Climate, space, daily routine, budget, training time, and the individual dog's temperament all matter.",
      },
      {
        question: "Should I choose a puppy or adult dog?",
        answer:
          "Puppies need intensive training and supervision. Adult dogs may have clearer size, temperament, and grooming needs. A shelter, rescue, or responsible breeder should help you understand the individual dog.",
      },
      {
        question: "Do mixed-breed dogs make good family pets?",
        answer:
          "Many mixed-breed dogs make wonderful pets. Focus on temperament, health checks, size, energy level, and whether your household can meet the dog's needs.",
      },
    ],
  },
  {
    slug: "adoption",
    path: "/adoption",
    title: "Dog Adoption Safety in South Africa",
    seoTitle: "Dog Adoption Safety in South Africa | Checklists and Scam Advice",
    description:
      "Practical South African adoption safety guidance covering shelters, SPCA questions, rehoming, puppy scams, documents, and red flags.",
    kicker: "Adoption hub",
    intro:
      "Adopting or buying a dog should feel careful, not rushed. This hub helps South African owners ask better questions, prepare their homes, avoid pressure tactics, and understand what responsible rehoming can look like.",
    cards: [
      {
        title: "Puppy Scam Checklist South Africa",
        description:
          "A step-by-step checklist for spotting suspicious puppy adverts, payment pressure, stolen photos, and unsafe handovers.",
        href: "/adoption/puppy-scam-checklist-south-africa",
      },
      {
        title: "Dog Adoption Checklist",
        description:
          "Questions to ask shelters, rescues, foster homes, and private rehomers before you commit.",
        href: "/adoption",
      },
      {
        title: "Preparing Your Home",
        description:
          "Practical setup for sleeping areas, boundaries, food changes, children, other pets, and the first week.",
        href: "/training",
      },
    ],
    related: [
      { title: "Breeds", description: "Match the dog to your home.", href: "/breeds" },
      { title: "Dog Costs", description: "Budget before you adopt.", href: "/costs" },
      { title: "Training", description: "First-week routines and behaviour support.", href: "/training" },
      { title: "Dog Food", description: "Plan feeding before the dog arrives.", href: "/food" },
      { title: "Dog Health", description: "Vaccines, vet checks, and prevention.", href: "/health" },
    ],
    faqs: [
      {
        question: "How can I avoid puppy scams in South Africa?",
        answer:
          "Be cautious with urgent payment demands, delivery-only offers, poor documentation, stolen-looking photos, refusal to video call, and sellers who will not answer practical health or parent-dog questions.",
      },
      {
        question: "Should a rescue or shelter ask questions about my home?",
        answer:
          "Yes. Responsible adoption organisations usually want to understand your home, experience, other pets, children, fencing, and ability to care for the dog.",
      },
      {
        question: "What should I ask before adopting?",
        answer:
          "Ask about age, health checks, vaccinations, sterilisation, behaviour, history with children or pets, diet, training needs, and the support available after adoption.",
      },
    ],
  },
  {
    slug: "food",
    path: "/food",
    title: "Dog Food Guides for South African Owners",
    seoTitle: "Dog Food Guides South Africa | Feeding, Labels, Life Stages",
    description:
      "Practical dog food guidance for South African owners covering labels, life stages, budget, allergies, transitions, and vet diets.",
    kicker: "Food hub",
    intro:
      "Dog food choices can feel noisy because every bag promises something. DogHaven focuses on practical feeding decisions: life stage, body condition, budget, allergies, safe transitions, and when a vet diet is worth discussing.",
    cards: [
      {
        title: "How to Compare Dog Food Labels",
        description:
          "What to look for on a food bag before being swayed by marketing language.",
        href: "/food",
      },
      {
        title: "Puppy Food Basics",
        description:
          "How puppy feeding differs from adult feeding, and why growth stage matters.",
        href: "/health/vaccination-schedule-south-africa",
      },
      {
        title: "Food Changes Without Upset",
        description:
          "A gentle transition approach and when vomiting or diarrhoea needs a vet call.",
        href: "/health",
      },
    ],
    related: [
      { title: "Dog Health", description: "Body condition and symptoms.", href: "/health" },
      { title: "Dog Costs", description: "Monthly food budgeting.", href: "/costs" },
      { title: "Breeds", description: "Size and activity influence feeding.", href: "/breeds" },
      { title: "Toxic Foods", description: "Know which foods can be dangerous.", href: "/health/toxic-foods-for-dogs-south-africa" },
      { title: "Vet Care", description: "When diet symptoms need professional advice.", href: "/health/when-to-take-your-dog-to-the-vet-south-africa" },
    ],
    faqs: [
      {
        question: "Is the most expensive dog food always best?",
        answer:
          "No. Suitability depends on life stage, health, body condition, digestibility, budget, and your vet's advice for any medical concerns.",
      },
      {
        question: "Can I change my dog's food suddenly?",
        answer:
          "A gradual transition is usually gentler unless your vet advises otherwise. Sudden changes can upset some dogs' stomachs.",
      },
      {
        question: "When should I ask a vet about diet?",
        answer:
          "Ask a vet if your dog has persistent vomiting, diarrhoea, itchy skin, weight loss, obesity, urinary issues, chronic disease, or suspected food allergies.",
      },
    ],
  },
  {
    slug: "training",
    path: "/training",
    title: "Dog Training Guides for Everyday South African Life",
    seoTitle: "Dog Training Guides South Africa | Puppies, Recall, Lead Manners",
    description:
      "Friendly dog training guidance for South African owners covering puppies, recall, lead manners, routines, enrichment, and trainer questions.",
    kicker: "Training hub",
    intro:
      "Good training makes daily life kinder and safer. DogHaven training guides focus on realistic routines, clear boundaries, reward-based habits, and when to get help from a qualified trainer or behaviour professional.",
    cards: [
      {
        title: "First Week With a New Dog",
        description:
          "A calm routine for sleep, feeding, toilet breaks, boundaries, visitors, children, and other pets.",
        href: "/adoption",
      },
      {
        title: "Lead Manners",
        description:
          "Practical ideas for safer walks in suburbs, parks, estates, and dog-friendly public spaces.",
        href: "/dog-friendly",
      },
      {
        title: "Choosing a Trainer",
        description:
          "Questions to ask about methods, class size, puppy socialisation, and behaviour support.",
        href: "/training",
      },
    ],
    related: [
      { title: "Adoption Safety", description: "Set up before the dog arrives.", href: "/adoption" },
      { title: "Dog-Friendly Places", description: "Public manners and outing planning.", href: "/dog-friendly" },
      { title: "Breeds", description: "Energy and temperament planning.", href: "/breeds" },
      { title: "Behaviour Problems", description: "Understand barking, fear, and reactivity.", href: "/training/dog-behaviour-problems-south-africa" },
    ],
    faqs: [
      {
        question: "When should puppy training start?",
        answer:
          "Training can start at home immediately with gentle routines, name response, toilet habits, handling, and short reward-based sessions. Ask your vet about safe socialisation while vaccines are still being completed.",
      },
      {
        question: "What if my dog is reactive or aggressive?",
        answer:
          "Avoid punishment or risky exposure. Contact a qualified trainer or veterinary behaviour professional for a plan that keeps people and animals safe.",
      },
      {
        question: "Do older dogs still learn?",
        answer:
          "Yes. Older dogs can learn new routines with patience, consistency, appropriate rewards, and realistic expectations.",
      },
    ],
  },
  {
    slug: "grooming",
    path: "/grooming",
    title: "Dog Grooming Guides for South African Owners",
    seoTitle: "Dog Grooming South Africa | Coat Care, Nails, Bathing, Heat",
    description:
      "Practical grooming guidance for South African dog owners covering coat care, shedding, nails, bathing, heat, ticks, ears, and groomer questions.",
    kicker: "Grooming hub",
    intro:
      "Grooming is not only about looking tidy. It helps owners notice skin changes, ticks, sore ears, overgrown nails, matting, and heat discomfort before they become bigger problems.",
    cards: [
      {
        title: "Coat Care by Dog Type",
        description:
          "How short, double, curly, wire, and long coats need different brushing and grooming routines.",
        href: "/grooming",
      },
      {
        title: "Bathing Without Skin Trouble",
        description:
          "How to think about shampoo, frequency, drying, and when itchy skin needs a vet.",
        href: "/health",
      },
      {
        title: "Choosing a Groomer",
        description:
          "Questions to ask about handling, drying, senior dogs, anxious dogs, matting, and vaccination policies.",
        href: "/grooming",
      },
    ],
    related: [
      { title: "Dog Health", description: "Skin, ears, ticks, and warning signs.", href: "/health" },
      { title: "Breeds", description: "Grooming needs before choosing a dog.", href: "/breeds" },
      { title: "Dog Costs", description: "Budget for grooming by coat type.", href: "/costs" },
      { title: "Ticks and Fleas", description: "Parasite checks during grooming.", href: "/health/ticks-and-fleas-dogs-south-africa" },
      { title: "Dog Shedding", description: "Manage shedding and skin warning signs.", href: "/grooming/dog-shedding-south-africa" },
    ],
    faqs: [
      {
        question: "How often should my dog be groomed?",
        answer:
          "It depends on coat type, shedding, skin health, lifestyle, and season. Curly or long coats often need more frequent brushing and professional grooming than short coats.",
      },
      {
        question: "Can shaving help a dog cope with heat?",
        answer:
          "Not always. Some double coats protect against sun and heat when maintained properly. Ask a groomer or vet before shaving a coat type you are unsure about.",
      },
      {
        question: "When is grooming a vet issue?",
        answer:
          "See a vet for painful ears, open sores, severe itching, sudden hair loss, infected skin smell, bleeding nails, or ticks with illness signs.",
      },
    ],
  },
  {
    slug: "insurance",
    path: "/insurance",
    title: "Dog Insurance Guides for South African Owners",
    seoTitle: "Dog Insurance South Africa | Policy Questions and Claims Planning",
    description:
      "Plain-English guidance on dog insurance in South Africa, including waiting periods, exclusions, claims, emergencies, and policy questions.",
    kicker: "Insurance hub",
    intro:
      "Pet insurance is not one-size-fits-all. DogHaven helps owners compare the questions that matter before signing up: exclusions, waiting periods, claim processes, annual limits, chronic cover, emergencies, and what happens as a dog ages.",
    cards: [
      {
        title: "Questions Before You Buy Pet Insurance",
        description:
          "A practical list to ask an insurer before you choose a policy or rely on cover.",
        href: "/insurance",
      },
      {
        title: "Emergency Claims Planning",
        description:
          "What to keep ready so an emergency vet visit does not become an admin scramble.",
        href: "/emergency",
      },
      {
        title: "Insurance vs Emergency Fund",
        description:
          "How to think about monthly premiums, exclusions, savings, and likely vet costs.",
        href: "/costs",
      },
    ],
    related: [
      { title: "Emergency Help", description: "Urgent care planning.", href: "/emergency" },
      { title: "Dog Costs", description: "Budgeting beyond premiums.", href: "/costs" },
      { title: "Dog Health", description: "Prevention and vet visits.", href: "/health" },
    ],
    faqs: [
      {
        question: "Does pet insurance cover everything?",
        answer:
          "Usually not. Policies may have waiting periods, exclusions, sub-limits, excess payments, pre-existing condition rules, and claim requirements. Read the wording carefully.",
      },
      {
        question: "Should I still keep emergency savings?",
        answer:
          "Yes if possible. Even insured owners may need to pay upfront, cover an excess, or pay for items outside the policy.",
      },
      {
        question: "What should I ask an insurer?",
        answer:
          "Ask about annual limits, accident cover, illness cover, pre-existing conditions, dental cover, routine care, waiting periods, claim turnaround, and whether your chosen vet can submit directly.",
      },
    ],
  },
  {
    slug: "costs",
    path: "/costs",
    title: "Cost of Owning a Dog in South Africa",
    seoTitle: "Dog Costs South Africa | Monthly and First-Year Ownership Budget",
    description:
      "Budget guides for South African dog owners covering food, vet care, vaccines, grooming, training, insurance, emergency savings, and first-year costs.",
    kicker: "Costs hub",
    intro:
      "A dog is a long-term financial commitment, not a once-off adoption fee or puppy price. DogHaven cost guides help owners plan for routine care, surprise vet bills, grooming, food, training, insurance, and a safer emergency buffer.",
    cards: [
      {
        title: "Cost of Owning a Dog in South Africa",
        description:
          "A practical budget guide for monthly costs, once-off setup, first-year planning, and emergency savings.",
        href: "/costs/cost-of-owning-a-dog-south-africa",
      },
      {
        title: "Puppy First-Year Costs",
        description:
          "Vaccines, sterilisation discussions, parasite prevention, food, equipment, training, and vet visits.",
        href: "/health/vaccination-schedule-south-africa",
      },
      {
        title: "Big Dog vs Small Dog Costs",
        description:
          "Why size can affect food, medication, grooming, bedding, transport, and insurance decisions.",
        href: "/breeds",
      },
    ],
    related: [
      { title: "Food", description: "Monthly feeding choices.", href: "/food" },
      { title: "Insurance", description: "Policy planning and claims.", href: "/insurance" },
      { title: "Adoption", description: "Prepare before bringing a dog home.", href: "/adoption" },
      { title: "Vet Costs", description: "Understand routine and emergency vet bills.", href: "/costs/vet-costs-for-dogs-south-africa" },
      { title: "Puppy First-Year Cost", description: "Plan the expensive first year.", href: "/costs/puppy-first-year-cost-south-africa" },
    ],
    faqs: [
      {
        question: "What is the biggest ongoing dog cost?",
        answer:
          "For many owners it is food, routine vet care, parasite prevention, grooming, or insurance. The answer changes by dog size, coat, health, and lifestyle.",
      },
      {
        question: "How much emergency savings should I keep?",
        answer:
          "There is no perfect number, but keeping a dedicated emergency buffer helps with urgent consults, tests, medication, after-hours fees, or the upfront portion of an insurance claim.",
      },
      {
        question: "Are rescue dogs cheaper than puppies?",
        answer:
          "A rescue dog may have a lower upfront adoption fee than buying a puppy, but all dogs still need food, vet care, prevention, equipment, training, and emergency planning.",
      },
    ],
  },
  {
    slug: "dog-friendly",
    path: "/dog-friendly",
    title: "Dog-Friendly Places and Outings in South Africa",
    seoTitle: "Dog-Friendly South Africa | Safe Outings, Etiquette and Planning",
    description:
      "Dog-friendly planning guidance for South African owners covering parks, beaches, cafes, travel, heat, leads, etiquette, and access checks.",
    kicker: "Dog-friendly hub",
    intro:
      "Dog-friendly does not always mean suitable for every dog. This hub helps owners plan safer outings by checking rules, heat, water, shade, lead control, crowds, transport, and whether the outing will actually be comfortable for the dog.",
    cards: [
      {
        title: "Dog-Friendly Outing Checklist",
        description:
          "What to check before taking your dog to a cafe, park, beach, market, hike, or weekend trip.",
        href: "/dog-friendly",
      },
      {
        title: "Lead Etiquette",
        description:
          "How to keep public outings calmer when other dogs, children, cyclists, and wildlife are nearby.",
        href: "/training",
      },
      {
        title: "Heat and Travel Planning",
        description:
          "A South African weather-aware approach to shade, water, hot cars, pavement heat, and rest stops.",
        href: "/emergency",
      },
    ],
    related: [
      { title: "Training", description: "Recall, lead manners, and public behaviour.", href: "/training" },
      { title: "Emergency Help", description: "Heat stress and urgent symptoms.", href: "/emergency" },
      { title: "Breeds", description: "Match outings to energy and heat tolerance.", href: "/breeds" },
      { title: "City Guides", description: "Local rules and dog-owner context by city.", href: "/city" },
      { title: "Province Guides", description: "Climate, travel, and local-risk context.", href: "/province" },
      { title: "Ticks and Fleas", description: "Outdoor parasite prevention.", href: "/health/ticks-and-fleas-dogs-south-africa" },
    ],
    faqs: [
      {
        question: "Should I assume a place allows dogs?",
        answer:
          "No. Check the current rules before you go. Access can change by venue, season, beach by-law, park rule, event, or accommodation policy.",
      },
      {
        question: "What should I bring on a dog-friendly outing?",
        answer:
          "Bring a lead, water, bowl, waste bags, vaccination or ID details where needed, shade planning, and a way to leave quickly if your dog is stressed.",
      },
      {
        question: "Is every friendly dog suited to busy outings?",
        answer:
          "No. Some dogs are sociable at home but overwhelmed by crowds, heat, noise, children, or unfamiliar dogs. Choose outings that match your dog's comfort.",
      },
    ],
  },
];

export const guidePages: GuideContent[] = [
  {
    slug: "rabies-south-africa",
    path: "/emergency/rabies-south-africa",
    hubTitle: "Emergency Help",
    hubPath: "/emergency",
    title: "Rabies in South Africa: What Dog Owners Should Know",
    seoTitle: "Rabies in South Africa | Dog Bite and Vaccination Guide",
    description:
      "A practical South African rabies guide for dog owners covering vaccination, bite response, exposure risk, symptoms, prevention, and urgent care.",
    intro:
      "Rabies is rare for many urban dog owners to encounter, but it is serious enough that every bite, scratch, and vaccination gap deserves calm attention. In South Africa, rabies remains a public health concern in animals, and dogs are central to prevention because vaccination protects both pets and people.",
    updated: "2026-05-12",
    isHealthGuide: true,
    quickFacts: [
      "Rabies is almost always fatal once symptoms appear, so prevention and rapid exposure response matter.",
      "Dogs and cats in South Africa are legally required to be vaccinated against rabies.",
      "If a person is bitten, scratched, or exposed to saliva from a possibly rabid animal, they should seek urgent medical advice.",
      "If your dog bites someone or is bitten by an unknown animal, contact your vet and follow local health or state veterinary guidance.",
    ],
    sections: [
      {
        heading: "Why rabies matters for South African dog owners",
        body: [
          "Rabies is a viral disease that affects the nervous system of mammals, including dogs, cats, wildlife, livestock, and people. The risk is not evenly spread across every suburb or province, but South African owners should treat prevention as routine rather than optional.",
          "A vaccinated dog is far less likely to become part of a tragic chain of exposure. That matters for households, neighbours, domestic workers, children, visitors, vets, groomers, shelter staff, and anyone who handles animals.",
        ],
      },
      {
        heading: "Vaccination responsibilities",
        body: [
          "Rabies vaccination is a legal and public health responsibility in South Africa. Your veterinarian can confirm the correct vaccine timing for your province, your dog's age, previous vaccine record, and any outbreak instructions in your area.",
          "Keep proof of vaccination somewhere easy to access. You may need it for travel, boarding, grooming, adoption paperwork, veterinary records, or if your dog is involved in a bite incident.",
        ],
        checklist: [
          "Ask your vet when your puppy's rabies vaccine is due.",
          "Keep a digital photo of the vaccine card.",
          "Set a reminder before the next booster is due.",
          "Check requirements before travelling between provinces or across borders.",
          "Follow official instructions during local rabies vaccination campaigns.",
        ],
      },
      {
        heading: "What to do after a dog bite or possible exposure",
        body: [
          "If a person is bitten or scratched, wash the wound thoroughly with running water and soap, then seek medical care urgently. A doctor or clinic needs to assess whether rabies post-exposure treatment is required. Do not wait for symptoms.",
          "If your dog was bitten by another animal, call your vet. Try to identify the animal safely, but do not chase, handle, or provoke a strange animal. Your vet may need vaccination history, wound details, and information about the location and circumstances.",
        ],
        table: {
          headers: ["Situation", "Practical next step"],
          rows: [
            ["A person is bitten or scratched", "Wash the wound and seek urgent medical advice."],
            ["Your dog is bitten by an unknown animal", "Phone your vet and share vaccination status and location."],
            ["You see unusual behaviour in a stray or wild animal", "Do not handle it; contact local animal health or municipal channels."],
            ["Your dog's rabies vaccine is overdue", "Book a vet appointment and ask what catch-up timing is appropriate."],
          ],
        },
      },
      {
        heading: "Possible signs that need urgent attention",
        body: [
          "Rabies signs can vary and can look like other neurological or behavioural problems. Do not try to diagnose rabies yourself. Any sudden severe behaviour change, unexplained aggression, paralysis, difficulty swallowing, excessive salivation, seizures, or abnormal fearfulness after possible exposure needs urgent veterinary advice.",
          "If rabies is a possibility, protect people and animals around you. Keep distance, avoid handling saliva, and call professionals for instructions.",
        ],
      },
      {
        heading: "Prevention habits that actually help",
        body: [
          "Most prevention is ordinary and practical: vaccinate on time, supervise dogs around unfamiliar animals, keep dogs secure at home, avoid contact with wildlife, and be cautious around strays whose vaccination history is unknown.",
          "If you rescue, foster, buy, or rehome a dog, ask for vaccination records and schedule a vet check early. A missing vaccine card is not proof that a dog is unsafe, but it does mean you need a plan.",
        ],
        bullets: [
          "Do not let children approach unknown dogs without an adult and owner permission.",
          "Do not pick up sick, aggressive, or unusually tame wild animals.",
          "Report bite incidents through the appropriate local channels when required.",
          "Keep your dog's microchip or ID details updated so records and ownership are easier to confirm.",
        ],
      },
    ],
    faqs: [
      {
        question: "Is rabies still a risk in South Africa?",
        answer:
          "Yes. Risk varies by area and time, but rabies remains a public health concern in South Africa. Vaccination and urgent bite response are important.",
      },
      {
        question: "Can I tell if a dog has rabies by looking at it?",
        answer:
          "No. Behaviour and neurological signs can have many causes. Treat possible exposure seriously and contact medical or veterinary professionals.",
      },
      {
        question: "What should I do if my dog bites someone?",
        answer:
          "Make sure the person gets medical advice, provide your dog's vaccination information, and contact your vet or local authorities if instructed.",
      },
    ],
    related: [
      { title: "Rabies Vaccination Law", description: "Records, legal context, and rule checks.", href: "/laws/rabies-vaccination-law-south-africa" },
      { title: "Vaccination Schedule", description: "Core vaccine planning for puppies and adult dogs.", href: "/health/vaccination-schedule-south-africa" },
      { title: "Emergency Help", description: "Urgent symptoms and vet-call preparation.", href: "/emergency" },
      { title: "Adoption Safety", description: "Check vaccination records before rehoming.", href: "/adoption" },
    ],
    sources: [
      {
        label: "NICD rabies information",
        href: "https://www.nicd.ac.za/diseases-a-z-index/rabies/",
        note: "Public health information on rabies risk, exposure, and prevention.",
      },
      {
        label: "South African Government rabies information",
        href: "https://www.gov.za/news/media-statements/agriculture-land-reform-and-rural-development-rabies-still-poses-risk-south",
        note: "Official reminders that rabies remains a risk and that dogs and cats must be vaccinated.",
      },
      {
        label: "Western Cape Government rabies prevention",
        href: "https://www.westerncape.gov.za/general-publication/rabies",
        note: "Provincial guidance on rabies prevention and vaccination responsibilities.",
      },
    ],
  },
  {
    slug: "parvovirus-in-dogs-south-africa",
    path: "/emergency/parvovirus-in-dogs-south-africa",
    hubTitle: "Emergency Help",
    hubPath: "/emergency",
    title: "Parvovirus in Dogs in South Africa: Puppy Red Flags and Urgent Care",
    seoTitle: "Parvovirus in Dogs South Africa | Symptoms, Risk and Vet Care",
    description:
      "A practical South African guide to canine parvovirus signs, puppy risk, vaccination prevention, cleaning, and when to contact a vet urgently.",
    intro:
      "Canine parvovirus is one of the puppy illnesses South African owners should take seriously because it can move fast, especially in young, unvaccinated, or incompletely vaccinated dogs. This guide helps you recognise red flags and act quickly without trying to treat a dangerous illness at home.",
    updated: "2026-05-12",
    isHealthGuide: true,
    quickFacts: [
      "Parvovirus can cause severe vomiting, diarrhoea, dehydration, weakness, and rapid decline.",
      "Puppies and unvaccinated dogs are at higher risk.",
      "Urgent veterinary treatment can be lifesaving; do not wait for a puppy to 'sleep it off'.",
      "Vaccination, careful socialisation, hygiene, and avoiding contaminated areas reduce risk.",
    ],
    sections: [
      {
        heading: "Why parvo is treated as urgent",
        body: [
          "Parvo attacks rapidly dividing cells, especially in the gut, and affected puppies can become dehydrated and weak very quickly. The illness can spread through infected faeces and contaminated environments, which makes outbreaks particularly difficult in areas where many dogs pass through.",
          "A puppy with repeated vomiting, bloody or very foul diarrhoea, refusal to eat, severe tiredness, fever, or collapse needs veterinary care. Home care is not enough for a puppy that is deteriorating.",
        ],
      },
      {
        heading: "Signs owners should not ignore",
        body: [
          "Not every upset stomach is parvo, but the combination of age, vaccination gaps, vomiting, diarrhoea, and sudden weakness should raise concern. Phone your vet and describe the symptoms before arrival so the clinic can reduce exposure risk for other dogs.",
        ],
        checklist: [
          "Repeated vomiting or inability to keep water down.",
          "Bloody, dark, watery, or unusually foul-smelling diarrhoea.",
          "Sudden extreme tiredness, weakness, or collapse.",
          "Refusing food, especially in a young puppy.",
          "Known exposure to sick puppies or high-traffic dog areas.",
          "Incomplete or unknown vaccination history.",
        ],
      },
      {
        heading: "What to do before going to the vet",
        body: [
          "Call ahead if you can. Clinics often have protocols for suspected infectious disease, such as asking you to wait outside or enter through a specific area. This protects other puppies and unvaccinated dogs.",
          "Do not give human medication. Do not force-feed. Keep your puppy warm, limit movement, and transport them safely. If there is diarrhoea, take a photo rather than carrying contaminated material into the clinic unless the vet asks for a sample.",
        ],
        table: {
          headers: ["Before arrival", "Why it helps"],
          rows: [
            ["Phone the clinic", "They can prepare isolation and triage."],
            ["Share vaccine history", "It helps the vet assess risk quickly."],
            ["Keep other dogs away", "Parvo can spread through contaminated faeces and surfaces."],
            ["Avoid public waiting areas if instructed", "It reduces risk to other puppies."],
          ],
        },
      },
      {
        heading: "Prevention and vaccination",
        body: [
          "Vaccination is a major part of parvo prevention. Puppies need a series of vaccines because one injection is not enough to provide reliable protection for every puppy. Your vet will recommend timing based on age, health, and local risk.",
          "Until your vet says your puppy is adequately protected, be careful with dog parks, pavements with heavy dog traffic, pet shops, communal grass, training areas, and homes with unknown dog health history. Safe socialisation still matters, but it should be planned with your vet's guidance.",
        ],
      },
      {
        heading: "Cleaning after suspected parvo",
        body: [
          "Parvo can persist in the environment, so cleaning matters. Speak to your vet about appropriate disinfectants, contact time, and when it is safe to bring another puppy into the space. Ordinary quick cleaning may not be enough for contaminated areas.",
          "Wash bedding, clean bowls, remove faeces carefully, and keep affected areas away from other dogs. If you rent or share property, be considerate about communal spaces where other dogs may be exposed.",
        ],
      },
    ],
    faqs: [
      {
        question: "Can an adult dog get parvo?",
        answer:
          "Adult dogs can be affected, especially if unvaccinated or immunocompromised, but puppies are typically at higher risk of severe disease.",
      },
      {
        question: "Can I treat parvo at home?",
        answer:
          "A puppy with suspected parvo needs veterinary care. Treatment often involves fluids, monitoring, and supportive care that cannot be safely replaced by home remedies.",
      },
      {
        question: "When can my puppy go to public places?",
        answer:
          "Ask your vet. It depends on the vaccine schedule, your puppy's age, local disease risk, and the type of outing.",
      },
    ],
    related: [
      { title: "Vaccination Schedule", description: "Plan core puppy vaccines.", href: "/health/vaccination-schedule-south-africa" },
      { title: "Dog Health", description: "Prevention and symptom guidance.", href: "/health" },
      { title: "Emergency Help", description: "Prepare for urgent vet calls.", href: "/emergency" },
    ],
    sources: [
      {
        label: "South African Veterinary Association parvovirus FAQ",
        href: "https://www.sava.co.za/faq/what-is-canine-parvovirus/",
        note: "Veterinary overview of canine parvovirus signs, spread, risk, and vaccination prevention.",
      },
      {
        label: "World Small Animal Veterinary Association vaccination guidance",
        href: "https://wsava.org/global-guidelines/vaccination-guidelines/",
        note: "Global veterinary vaccination guidance used as background context; your local vet should tailor advice.",
      },
    ],
  },
  {
    slug: "vaccination-schedule-south-africa",
    path: "/health/vaccination-schedule-south-africa",
    hubTitle: "Dog Health",
    hubPath: "/health",
    title: "Dog Vaccination Schedule in South Africa: Puppy and Adult Planning",
    seoTitle: "Dog Vaccination Schedule South Africa | Puppy and Adult Guide",
    description:
      "A practical South African guide to puppy and adult dog vaccination planning, rabies requirements, core vaccines, boosters, and vet questions.",
    intro:
      "Vaccination is one of the most useful ways to protect dogs from serious infectious diseases. The exact schedule should come from your vet, because timing can depend on age, vaccine history, health, location, disease risk, travel plans, and outbreak instructions.",
    updated: "2026-05-12",
    isHealthGuide: true,
    quickFacts: [
      "Puppies need a series of vaccines; one injection is not usually the full puppy course.",
      "Rabies vaccination is legally required for dogs and cats in South Africa.",
      "Adult dogs need boosters according to vaccine type, risk, and veterinary advice.",
      "Keep vaccine proof accessible for travel, boarding, grooming, adoption, and bite incidents.",
    ],
    sections: [
      {
        heading: "Core idea: your vet sets the schedule",
        body: [
          "Online schedules are useful for planning questions, but they are not a substitute for your dog's own veterinary record. A puppy that started vaccines late, missed a dose, came from an unknown background, or may have been exposed to disease needs tailored advice.",
          "Bring any vaccine card, adoption paperwork, breeder documents, or clinic invoices to your appointment. If the history is uncertain, tell the vet honestly rather than guessing.",
        ],
      },
      {
        heading: "Typical puppy vaccination planning",
        body: [
          "Many puppies receive a series of core vaccinations from early puppyhood through about 16 weeks, with timing set by the vet. The aim is to protect against major diseases while accounting for maternal antibodies that can interfere with vaccine response in young puppies.",
          "Your vet may also discuss when it is safer to attend puppy classes, visit public places, or meet other dogs. Socialisation is important, but it should be balanced with disease risk.",
        ],
        table: {
          headers: ["Life stage", "Planning focus"],
          rows: [
            ["New puppy appointment", "Health check, vaccine history review, parasite prevention, feeding, and socialisation advice."],
            ["Puppy vaccine series", "Core vaccine timing as recommended by your vet."],
            ["Rabies vaccination", "Legal requirement with timing confirmed by your vet and local rules."],
            ["After puppy course", "Discuss safe outings, training classes, boosters, sterilisation timing, and insurance records."],
          ],
        },
      },
      {
        heading: "Adult dog boosters",
        body: [
          "Adult booster timing depends on the vaccine, your dog's risk, previous vaccination, and local guidance. Some vaccines may be boosted annually while others may follow a different interval. Your vet can explain the difference between core protection and lifestyle-based vaccines.",
          "If you adopt an adult dog without records, book a vet visit early. The vet can help decide whether to restart, catch up, or document a practical protection plan.",
        ],
      },
      {
        heading: "Questions to ask your vet",
        body: [
          "A good vaccine appointment should leave you clearer, not confused. Use the visit to understand what each vaccine is for, when the next dose is due, and how your dog's lifestyle affects risk.",
        ],
        checklist: [
          "Which vaccines are core for my dog?",
          "When is rabies due, and when is the next booster?",
          "Is my puppy safe for puppy class or public walks yet?",
          "What local disease risks should I know about?",
          "Do boarding kennels, groomers, or travel plans require proof of specific vaccines?",
          "What side effects are normal, and what should prompt a call?",
        ],
      },
      {
        heading: "After vaccination",
        body: [
          "Mild tiredness or tenderness can happen after vaccination, but serious reactions are uncommon. Ask your vet what to watch for. If your dog develops facial swelling, repeated vomiting, trouble breathing, collapse, or severe weakness after a vaccine, contact a vet urgently.",
          "Store your vaccine card safely. A clear photo in your phone can save stress when booking boarding, changing vets, travelling, or responding to an incident.",
        ],
      },
    ],
    faqs: [
      {
        question: "Is rabies vaccination compulsory in South Africa?",
        answer:
          "Yes. Dogs and cats are required to be vaccinated against rabies. Your vet can confirm timing and booster requirements for your area and records.",
      },
      {
        question: "Can my puppy socialise before all vaccines are complete?",
        answer:
          "Ask your vet for a risk-balanced plan. Controlled, safe socialisation may be possible, but high-traffic dog areas can be risky before adequate protection.",
      },
      {
        question: "What if I lost my dog's vaccine card?",
        answer:
          "Contact the clinic that vaccinated your dog. If records cannot be found, book a vet visit to discuss a safe catch-up plan.",
      },
    ],
    related: [
      { title: "Rabies Vaccination Law", description: "Rabies records, bite exposure, and rule checks.", href: "/laws/rabies-vaccination-law-south-africa" },
      { title: "Rabies in South Africa", description: "Vaccination and bite response.", href: "/emergency/rabies-south-africa" },
      { title: "Parvovirus", description: "Puppy red flags and prevention.", href: "/emergency/parvovirus-in-dogs-south-africa" },
      { title: "Dog Costs", description: "Budget for routine care.", href: "/costs/cost-of-owning-a-dog-south-africa" },
    ],
    sources: [
      {
        label: "South African Government rabies reminder",
        href: "https://www.gov.za/news/media-statements/agriculture-land-reform-and-rural-development-rabies-still-poses-risk-south",
        note: "Official public information noting rabies risk and vaccination responsibilities.",
      },
      {
        label: "Western Cape Government rabies guidance",
        href: "https://www.westerncape.gov.za/general-publication/rabies",
        note: "Provincial rabies prevention information and vaccination context.",
      },
      {
        label: "WSAVA vaccination guidelines",
        href: "https://wsava.org/global-guidelines/vaccination-guidelines/",
        note: "Veterinary vaccination guideline background; local vets tailor schedules to individual dogs.",
      },
    ],
  },
  {
    slug: "puppy-scam-checklist-south-africa",
    path: "/adoption/puppy-scam-checklist-south-africa",
    hubTitle: "Adoption Safety",
    hubPath: "/adoption",
    title: "Puppy Scam Checklist for South Africa",
    seoTitle: "Puppy Scam Checklist South Africa | Safer Adoption and Buying",
    description:
      "A practical South African puppy scam checklist covering advert red flags, payments, photos, breeder questions, handovers, and safer adoption steps.",
    intro:
      "Puppy scams hurt families and dogs. They often rely on emotion, urgency, cute photos, delivery promises, and pressure to pay before you have verified the person, puppy, and paperwork. This checklist helps you slow the process down.",
    updated: "2026-05-12",
    quickFacts: [
      "Pressure to pay quickly is a major warning sign.",
      "Stolen puppy photos and delivery-only stories are common scam patterns.",
      "Responsible breeders, shelters, and rescues should answer practical questions and provide credible records.",
      "When in doubt, pause, verify, and consider contacting the SPCA, a breed club, KUSA, or a trusted vet for guidance.",
    ],
    sections: [
      {
        heading: "First rule: slow down the decision",
        body: [
          "Scammers want you excited, worried someone else will take the puppy, and too rushed to verify details. A real adoption or purchase can usually survive careful questions. A scam often cannot.",
          "Do not let a seller turn your kindness into urgency. If the story changes, the price shifts, or every answer leads to another payment, step back.",
        ],
      },
      {
        heading: "Advert red flags",
        body: [
          "Many scam adverts look polished at first glance. The warning signs usually appear in the details: vague location, strangely low price, copied images, poor answers, and a seller who avoids video calls or in-person verification.",
        ],
        checklist: [
          "The same puppy photos appear in multiple adverts or provinces.",
          "The seller refuses a live video call showing the puppy and environment.",
          "The puppy must be delivered, but collection is never possible.",
          "Payment is requested before any meaningful verification.",
          "The seller avoids questions about vaccinations, age, parents, health, or microchip details.",
          "The advert claims rare colours or instant availability without credible background.",
          "The seller uses emotional pressure, transport excuses, or sudden extra fees.",
        ],
      },
      {
        heading: "Payment safety",
        body: [
          "Be especially careful with deposits, courier fees, crate fees, insurance fees, and 'refundable' payments. Scams often begin with one affordable payment and then add new problems that need urgent money.",
          "Avoid paying into accounts you cannot verify. Keep written records of conversations, invoices, names, and payment details. If something feels wrong, do not send another payment to rescue the first one.",
        ],
        table: {
          headers: ["Payment request", "Why to pause"],
          rows: [
            ["Urgent deposit before a call", "You have not verified the puppy or seller."],
            ["Transport fee after deposit", "Scams often add staged delivery costs."],
            ["Different account name", "The person, business, and bank details do not line up."],
            ["No written agreement", "There is no clear record of what is being promised."],
          ],
        },
      },
      {
        heading: "Questions a real seller or organisation should handle",
        body: [
          "A responsible shelter, rescue, rehoming family, or breeder may not be perfect at admin, but they should be willing to discuss the dog's welfare. Their answers should become clearer as you ask questions, not more evasive.",
        ],
        bullets: [
          "How old is the puppy, and when can the puppy leave safely?",
          "What vaccinations, deworming, and vet checks have been done?",
          "Can I see the mother dog where appropriate?",
          "What food is the puppy eating now?",
          "What support is available if there are health or adjustment problems?",
          "What contract, adoption paperwork, or registration documents are provided?",
        ],
      },
      {
        heading: "Safer routes to consider",
        body: [
          "Consider recognised shelters, SPCAs, reputable rescues, breed clubs, and breeders who are transparent about health, temperament, and paperwork. For pedigree dogs, ask about registration and breed-specific health testing where relevant.",
          "Adoption organisations may ask you many questions. That is usually a good sign. They are trying to match a real dog to a real home, not move a puppy as fast as possible.",
        ],
      },
    ],
    faqs: [
      {
        question: "Is a video call enough to prove a puppy advert is real?",
        answer:
          "It helps, but it is not the only check. Ask practical questions, verify paperwork, avoid pressure payments, and be cautious if collection or proper handover is impossible.",
      },
      {
        question: "Should I pay a deposit for a puppy?",
        answer:
          "Only consider a deposit after meaningful verification, clear written terms, and confidence in the seller or organisation. Never pay because you feel rushed.",
      },
      {
        question: "Who can I ask for help if I am unsure?",
        answer:
          "You can ask a local SPCA, reputable shelter, breed club, KUSA for pedigree context, or a trusted veterinarian what checks are sensible before you pay.",
      },
    ],
    related: [
      { title: "Adoption Safety", description: "Prepare before bringing a dog home.", href: "/adoption" },
      { title: "Best Breeds", description: "Choose a dog that suits your home.", href: "/breeds/best-dog-breeds-for-south-african-homes" },
      { title: "Dog Costs", description: "Budget before committing.", href: "/costs/cost-of-owning-a-dog-south-africa" },
    ],
    sources: [
      {
        label: "NSPCA scam warning",
        href: "https://nspca.co.za/dont-be-a-victim-of-a-scam/",
        note: "South African animal welfare warning about scam patterns and safe caution.",
      },
      {
        label: "Kennel Union of Southern Africa",
        href: "https://www.kusa.co.za/",
        note: "Breed registry and breeder-related starting point for pedigree dog verification questions.",
      },
    ],
  },
  {
    slug: "cost-of-owning-a-dog-south-africa",
    path: "/costs/cost-of-owning-a-dog-south-africa",
    hubTitle: "Dog Costs",
    hubPath: "/costs",
    title: "Cost of Owning a Dog in South Africa",
    seoTitle: "Cost of Owning a Dog in South Africa | Practical Budget Guide",
    description:
      "A practical South African dog ownership budget guide covering setup costs, monthly food, vet care, grooming, training, insurance, and emergency savings.",
    intro:
      "The real cost of a dog is not the adoption fee or puppy price. It is the monthly routine, the annual prevention, the equipment that wears out, and the emergency you hope never happens. This guide helps you build a realistic South African dog budget without pretending every household or dog is the same.",
    updated: "2026-05-12",
    quickFacts: [
      "Dog size affects food, medication, bedding, transport, grooming, and sometimes insurance costs.",
      "The first year is often more expensive because of setup, puppy care, vaccination, training, and sterilisation discussions.",
      "Routine prevention is easier to budget for than emergency care.",
      "A dedicated emergency fund is useful even if you have pet insurance.",
    ],
    sections: [
      {
        heading: "Start with the non-negotiables",
        body: [
          "Every dog needs food, clean water, parasite prevention, routine veterinary care, safe shelter, identification, exercise, enrichment, and humane handling. Costs vary by province, town, vet practice, brand choices, and the dog's size and health.",
          "The safest budget is not the cheapest possible month. It is the month that still works when food prices rise, the dog needs medication, or your routine changes.",
        ],
      },
      {
        heading: "Once-off setup costs",
        body: [
          "Before the dog arrives, plan for the items that make the first week calmer. You do not need luxury everything, but you do need safe, appropriate basics.",
        ],
        checklist: [
          "Collar or harness and lead.",
          "ID tag and microchip discussion with your vet.",
          "Food and water bowls.",
          "Bed or crate if appropriate.",
          "Starter food matched to the current diet.",
          "Cleaning supplies for accidents.",
          "Toys and safe chews.",
          "Secure fencing, gates, or indoor boundaries where needed.",
        ],
      },
      {
        heading: "Monthly and recurring costs",
        body: [
          "Food is often the most visible monthly cost, but it is not the only one. Add routine prevention, grooming, training, insurance or savings, and replacement supplies. Large dogs usually cost more to feed and may cost more for weight-based medication.",
        ],
        table: {
          headers: ["Cost area", "What affects it"],
          rows: [
            ["Food", "Dog size, life stage, activity, diet type, medical needs, and brand."],
            ["Vet care", "Routine visits, vaccines, dental health, injuries, illness, and chronic care."],
            ["Parasite prevention", "Weight, product type, tick risk, and vet recommendation."],
            ["Grooming", "Coat type, matting, size, temperament, and appointment frequency."],
            ["Training", "Puppy classes, private sessions, behaviour help, and travel distance."],
            ["Insurance or savings", "Policy choice, age, breed, exclusions, and emergency buffer goals."],
          ],
        },
      },
      {
        heading: "First-year planning",
        body: [
          "Puppies often need several vet visits, a vaccine series, deworming, parasite prevention, growth-appropriate food, puppy classes, chewing management, and equipment changes as they grow. Adult adopted dogs may need fewer puppy costs but can still need vet checks, training, dental care, or behaviour support.",
          "Ask the shelter, breeder, or rehoming family what has already been done and what still needs to be budgeted. Do not assume a puppy is fully vaccinated because it has had one injection.",
        ],
      },
      {
        heading: "Emergency fund thinking",
        body: [
          "Emergency care can involve after-hours fees, consults, hospitalisation, X-rays, blood tests, surgery, medication, or referral. Even with insurance, you may need to pay upfront or cover exclusions and excesses.",
          "Build a dedicated buffer gradually if you cannot fund it immediately. A small automatic monthly transfer is better than hoping the emergency happens in a convenient month.",
        ],
        bullets: [
          "Keep your vet and emergency clinic details saved.",
          "Keep vaccination and insurance records easy to find.",
          "Understand your policy before an emergency, not during one.",
          "Review your budget when your dog becomes senior or develops chronic illness.",
        ],
      },
    ],
    faqs: [
      {
        question: "Is a small dog always cheaper?",
        answer:
          "Not always, but small dogs often cost less for food and weight-based medication. Grooming, dental care, illness, and behaviour support can still be significant.",
      },
      {
        question: "Should I get insurance or save money myself?",
        answer:
          "Both can work, and many owners use both. Compare policy wording carefully and keep some savings for excess payments, exclusions, or upfront costs.",
      },
      {
        question: "What cost do new owners forget most often?",
        answer:
          "Emergency care, dental care, grooming for high-maintenance coats, behaviour support, and replacement items are commonly underestimated.",
      },
    ],
    related: [
      { title: "Insurance", description: "Questions before choosing cover.", href: "/insurance" },
      { title: "Food", description: "Monthly feeding choices.", href: "/food" },
      { title: "Adoption Safety", description: "Avoid rushed decisions.", href: "/adoption/puppy-scam-checklist-south-africa" },
    ],
    sources: [
      {
        label: "South African Veterinary Council",
        href: "https://savc.org.za/",
        note: "Professional veterinary context and public-facing information.",
      },
    ],
  },
  {
    slug: "best-dog-breeds-for-south-african-homes",
    path: "/breeds/best-dog-breeds-for-south-african-homes",
    hubTitle: "Breed Guides",
    hubPath: "/breeds",
    title: "Best Dog Breeds for South African Homes",
    seoTitle: "Best Dog Breeds for South African Homes | Practical Breed Guide",
    description:
      "A practical guide to choosing dog breeds for South African homes, including climate, space, exercise, grooming, children, costs, and adoption fit.",
    intro:
      "There is no single best dog breed for South Africa. The better question is: which dog fits your home, heat, daily rhythm, budget, experience, and long-term care capacity? This guide helps you choose with fewer regrets.",
    updated: "2026-05-12",
    quickFacts: [
      "Choose for lifestyle fit before appearance.",
      "Heat, space, exercise time, coat care, noise, and training needs matter in South African homes.",
      "Mixed-breed dogs can be excellent companions when temperament and needs fit the household.",
      "Speak to shelters, breed clubs, responsible breeders, trainers, groomers, and vets before deciding.",
    ],
    sections: [
      {
        heading: "What 'best' should mean",
        body: [
          "A good breed fit is not the dog that looks impressive online. It is the dog whose needs you can meet on a normal weekday. A high-energy breed may be wonderful for an active home and miserable in a bored, under-exercised routine.",
          "Before choosing a breed, write down your real day: work hours, garden access, walking time, children, other pets, visitors, heat, noise sensitivity, rental rules, grooming budget, and how much training support you can afford.",
        ],
      },
      {
        heading: "South African home factors",
        body: [
          "Climate matters. Some dogs cope poorly with heat, especially during summer, load-shedding disruptions, travel, or homes without cool resting areas. Space also matters, but exercise and enrichment matter more than garden size alone.",
        ],
        table: {
          headers: ["Factor", "Why it matters"],
          rows: [
            ["Heat", "Flat-faced, heavy-coated, elderly, and overweight dogs may struggle more in hot weather."],
            ["Space", "Townhouses and flats need careful noise, toilet, walking, and enrichment planning."],
            ["Exercise", "Working and sporting breeds often need structured activity and training."],
            ["Grooming", "Long, curly, and double coats can require regular brushing or professional grooming."],
            ["Security", "Do not choose a dog only as an alarm system; welfare, training, and safe management still matter."],
            ["Children", "Supervision, temperament, handling, and training are more important than breed stereotypes."],
          ],
        },
      },
      {
        heading: "Breed groups in practical terms",
        body: [
          "Breed groups can give clues, but individual dogs vary. Use the group as a starting point for questions, not a guarantee.",
        ],
        bullets: [
          "Companion breeds may suit smaller homes but still need training, dental care, grooming, and walks.",
          "Herding breeds often need mental work and can become frustrated without structure.",
          "Sporting breeds can be sociable and active but may need significant exercise and recall training.",
          "Guardian breeds require responsible handling, socialisation, secure property, and experienced owners.",
          "Terriers can be bold, busy, and prey-driven, which affects gardens, cats, and off-lead decisions.",
          "Mixed-breed dogs should be assessed by size, temperament, history, and energy rather than assumptions.",
        ],
      },
      {
        heading: "Questions before choosing",
        body: [
          "The right questions protect both you and the dog. Ask people who understand the breed and the individual dog, not only people trying to place or sell a puppy quickly.",
        ],
        checklist: [
          "How much daily exercise and training does this dog realistically need?",
          "How does the breed usually cope with heat?",
          "What grooming is required, and what does it cost?",
          "What health issues should I ask a vet or breeder about?",
          "Is the dog suitable for children, cats, other dogs, or visitors?",
          "How noisy is the breed likely to be in a complex or townhouse?",
          "What happens if my work schedule changes?",
        ],
      },
      {
        heading: "Where to get breed advice",
        body: [
          "For adoption, speak to shelter or rescue staff about the individual dog's behaviour, energy, and history. For pedigree puppies, contact recognised breed clubs, ask about health testing, and verify registration claims. A vet, trainer, or groomer can also help you understand the practical care load before you commit.",
          "Avoid sellers who cannot answer basic breed, health, parent-dog, vaccination, or temperament questions. If the process feels rushed, use the puppy scam checklist before paying.",
        ],
      },
    ],
    faqs: [
      {
        question: "What is the best dog for a first-time owner?",
        answer:
          "A stable, manageable dog whose energy, size, grooming, and training needs fit your home is better than choosing by breed name alone. Adult dogs from good rescues can be excellent first dogs when well matched.",
      },
      {
        question: "Are large dogs unsuitable for South African suburbs?",
        answer:
          "Not automatically. Large dogs need space, training, exercise, secure handling, and budget. Some calm large dogs may cope better than under-stimulated small high-energy dogs.",
      },
      {
        question: "Should I avoid flat-faced breeds in hot areas?",
        answer:
          "Flat-faced dogs can be more vulnerable to breathing and heat stress. Speak to a vet before choosing one, especially if you live in a hot area or travel often.",
      },
    ],
    related: [
      { title: "Puppy Scam Checklist", description: "Verify before paying.", href: "/adoption/puppy-scam-checklist-south-africa" },
      { title: "Dog Costs", description: "Budget by size and coat.", href: "/costs/cost-of-owning-a-dog-south-africa" },
      { title: "Training", description: "Plan for temperament and routines.", href: "/training" },
    ],
    sources: [
      {
        label: "Kennel Union of Southern Africa",
        href: "https://www.kusa.co.za/",
        note: "Breed registry starting point for pedigree verification and breed club research.",
      },
      {
        label: "South African Veterinary Council",
        href: "https://savc.org.za/",
        note: "Professional veterinary context for health and welfare questions.",
      },
    ],
  },
];

export function getHub(slug: string) {
  const hub = hubPages.find((item) => item.slug === slug);

  if (!hub) {
    throw new Error(`Missing hub content for ${slug}`);
  }

  return hub;
}

export function getGuide(slug: string) {
  const guide = guidePages.find((item) => item.slug === slug);

  if (!guide) {
    throw new Error(`Missing guide content for ${slug}`);
  }

  return guide;
}
