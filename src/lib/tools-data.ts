import type { CardLink, FAQ } from "@/lib/content";

export type ToolSlug =
  | "dog-feeding-calculator"
  | "dog-cost-calculator"
  | "puppy-checklist"
  | "dog-age-calculator"
  | "dog-breed-match-quiz"
  | "dog-name-generator"
  | "new-dog-shopping-list"
  | "vet-visit-checklist"
  | "dog-friendly-travel-checklist"
  | "can-my-dog-eat-this";

export type ToolContent = {
  slug: ToolSlug;
  path: string;
  title: string;
  seoTitle: string;
  description: string;
  intro: string;
  note: string;
  related: CardLink[];
  faqs: FAQ[];
};

const commonRelated: CardLink[] = [
  { title: "Start Here", description: "Find the right DogHaven guide faster.", href: "/start-here" },
  { title: "Dog Food", description: "Feeding guides for South African homes.", href: "/food" },
  { title: "Dog Costs", description: "Budget for everyday and emergency care.", href: "/costs" },
];

export const tools: ToolContent[] = [
  {
    slug: "dog-feeding-calculator",
    path: "/tools/dog-feeding-calculator",
    title: "Dog Feeding Calculator",
    seoTitle: "Dog Feeding Calculator South Africa | Daily Food Estimate",
    description:
      "Free South African dog feeding calculator for daily food estimates by weight, age stage, activity, body condition and food type.",
    intro:
      "Estimate a general daily feeding starting point, then compare it with your food packaging and your dog's body condition.",
    note:
      "This is an educational estimate only. Ask a vet for puppies, seniors, pregnant dogs, overweight dogs, underweight dogs, and dogs with health issues.",
    related: [
      { title: "How Much Should I Feed My Dog?", description: "Understand portions, labels, treats, and body condition.", href: "/food/how-much-should-i-feed-my-dog" },
      { title: "Dog Food Comparison", description: "Compare kibble, wet food, mixed feeding, and raw diets.", href: "/food/dog-food-comparison-south-africa" },
      ...commonRelated,
    ],
    faqs: [
      {
        question: "Is the feeding calculator exact?",
        answer:
          "No. It gives a general estimate. Food calories, health, body condition, and activity can change the right amount.",
      },
      {
        question: "Can I use it for puppies?",
        answer:
          "Use it only as a starting point. Puppies need growth monitoring and vet-guided feeding.",
      },
    ],
  },
  {
    slug: "dog-cost-calculator",
    path: "/tools/dog-cost-calculator",
    title: "Dog Cost Calculator",
    seoTitle: "Dog Cost Calculator South Africa | Monthly Cost Estimate",
    description:
      "Free South African dog cost calculator for monthly food, grooming, insurance, vet care, parasite control, training and extras.",
    intro:
      "Estimate a monthly planning range for dog ownership costs without entering any personal information.",
    note:
      "This is a planning tool, not a quote. Ask vets, groomers, trainers, insurers, shelters, and suppliers for current prices.",
    related: [
      { title: "Dog Cost Calculator Guide", description: "How to think about the estimate.", href: "/costs/dog-cost-calculator-south-africa" },
      { title: "Monthly Dog Costs", description: "Build a realistic South African dog budget.", href: "/costs/monthly-cost-of-owning-a-dog-south-africa" },
      ...commonRelated,
    ],
    faqs: [
      {
        question: "Does this collect my data?",
        answer:
          "No. The calculator runs in your browser and does not ask for your name, email, or account.",
      },
      {
        question: "Why are the results a range?",
        answer:
          "Dog costs vary by city, provider, dog size, health, lifestyle, and inflation.",
      },
    ],
  },
  {
    slug: "puppy-checklist",
    path: "/tools/puppy-checklist",
    title: "New Puppy Checklist",
    seoTitle: "New Puppy Checklist South Africa | Free Tool",
    description:
      "A free interactive puppy checklist for South African owners covering vet visits, vaccines, food, puppy-proofing, socialisation, ID, and scam checks.",
    intro:
      "Tick off the practical steps that make the first week with a South African puppy calmer and safer.",
    note:
      "This checklist is educational. Puppies with vomiting, diarrhoea, weakness, coughing, or poor appetite need a veterinarian.",
    related: [
      { title: "New Puppy Checklist Guide", description: "Records, supplies, and first-week setup.", href: "/puppy/new-puppy-checklist-south-africa" },
      { title: "Puppy Scam Checklist", description: "Avoid pressure payments and unsafe sellers.", href: "/adoption/puppy-scam-checklist-south-africa" },
      ...commonRelated,
    ],
    faqs: [
      {
        question: "Should I complete everything before the puppy arrives?",
        answer:
          "Do the safety and vet-planning items first. Some training and socialisation steps continue for weeks.",
      },
      {
        question: "Can this replace a vet visit?",
        answer:
          "No. Book a vet check soon after arrival, especially if records are missing.",
      },
    ],
  },
  {
    slug: "dog-age-calculator",
    path: "/tools/dog-age-calculator",
    title: "Dog Age Calculator",
    seoTitle: "Dog Age Calculator | South African Dog Life Stage Tool",
    description:
      "A free dog age calculator that gives a general life-stage estimate by dog age and size, with care reminders and DogHaven links.",
    intro:
      "Estimate your dog's broad life stage and get practical care reminders for puppies, adults, mature dogs, and seniors.",
    note:
      "Dog age conversion is not exact. Breed, size, health, weight, and lifestyle all affect ageing.",
    related: [
      { title: "Puppy Care", description: "First-year puppy guidance.", href: "/puppy" },
      { title: "Senior Dog Food", description: "Feeding older dogs thoughtfully.", href: "/food/senior-dog-food-south-africa" },
      ...commonRelated,
    ],
    faqs: [
      {
        question: "Is one dog year always seven human years?",
        answer:
          "No. Dogs age differently by size and life stage. This tool gives a broad estimate only.",
      },
      {
        question: "When should older dogs see a vet?",
        answer:
          "Ask your vet about senior checkups, especially if appetite, weight, thirst, movement, or behaviour changes.",
      },
    ],
  },
  {
    slug: "dog-breed-match-quiz",
    path: "/tools/dog-breed-match-quiz",
    title: "Dog Breed Match Quiz",
    seoTitle: "Dog Breed Match Quiz South Africa | Responsible Match Tool",
    description:
      "A fun responsible breed match quiz for South African homes, suggesting broad breed categories, adoption options, and breed guide links.",
    intro:
      "Answer a few lifestyle questions and get broad dog categories to research, without guard-dog hype or status-buying pressure.",
    note:
      "This quiz is for exploration only. Individual temperament, adoption matching, training, health, and budget matter more than breed stereotypes.",
    related: [
      { title: "Breed Guides", description: "Choose by lifestyle fit and tradeoffs.", href: "/breeds" },
      { title: "Mixed Breed Dogs", description: "Responsible mixed-breed planning.", href: "/breeds/mixed-breed-dogs-south-africa" },
      ...commonRelated,
    ],
    faqs: [
      {
        question: "Will the quiz name one perfect breed?",
        answer:
          "No. It suggests broad categories and research paths. No breed is perfect for every home.",
      },
      {
        question: "Should I consider adoption?",
        answer:
          "Yes. Shelters and rescues can help match individual adult dogs and puppies to real homes.",
      },
    ],
  },
  {
    slug: "dog-name-generator",
    path: "/tools/dog-name-generator",
    title: "Dog Name Generator",
    seoTitle: "Dog Name Generator South Africa | Cute Dog Names",
    description:
      "A fun, respectful South African-inspired dog name generator with cute, strong, food, nature, Afrikaans-inspired, beach, and safari-inspired ideas.",
    intro:
      "Generate family-friendly dog name ideas with a gentle South African flavour, then save your favourites elsewhere if you like them.",
    note:
      "Names are generated in your browser. DogHaven does not collect or save your choices.",
    related: [
      { title: "New Dog Shopping List", description: "Prepare the basics before arrival.", href: "/tools/new-dog-shopping-list" },
      { title: "Adoption Safety", description: "Choose and bring home a dog carefully.", href: "/adoption" },
      ...commonRelated,
    ],
    faqs: [
      {
        question: "Are the names meant to stereotype South Africa?",
        answer:
          "No. The list is light, respectful, family-friendly inspiration only.",
      },
      {
        question: "Does DogHaven save the generated names?",
        answer:
          "No. The tool runs in your browser and does not save personal information.",
      },
    ],
  },
  {
    slug: "new-dog-shopping-list",
    path: "/tools/new-dog-shopping-list",
    title: "New Dog Shopping List",
    seoTitle: "New Dog Shopping List South Africa | Free Checklist",
    description:
      "A free interactive shopping checklist for new South African dog owners covering food, bowls, lead, bed, grooming, cleaning, toys, vet paperwork, and travel safety.",
    intro:
      "Use this checklist to buy sensible basics without being pulled into unnecessary extras on day one.",
    note:
      "Choose safe, size-appropriate items and ask a vet, trainer, groomer, shelter, or breeder when you are unsure.",
    related: [
      { title: "New Puppy Checklist", description: "Puppy-specific first-week setup.", href: "/tools/puppy-checklist" },
      { title: "Cost of Owning a Dog", description: "Budget before expenses surprise you.", href: "/costs/cost-of-owning-a-dog-south-africa" },
      ...commonRelated,
    ],
    faqs: [
      {
        question: "Do I need everything before adoption day?",
        answer:
          "Get safety, food, lead, ID, sleeping, cleaning, and vet basics ready first. Extras can wait.",
      },
      {
        question: "Should puppies get different supplies?",
        answer:
          "Yes. Puppies often need safer chew options, cleaning supplies, barriers, and growth-aware food planning.",
      },
    ],
  },
  {
    slug: "vet-visit-checklist",
    path: "/tools/vet-visit-checklist",
    title: "Vet Visit Checklist",
    seoTitle: "Vet Visit Checklist South Africa | Dog Owner Tool",
    description:
      "A free vet visit checklist for dog owners, covering symptoms, eating, drinking, vomiting, diarrhoea, medication, vaccines, questions, and emergency signs.",
    intro:
      "Prepare clearer notes before a vet appointment so you can explain what changed and ask better questions.",
    note:
      "This tool does not replace veterinary care. Urgent symptoms need a vet immediately.",
    related: [
      { title: "When to Take Your Dog to the Vet", description: "Symptom-led vet decision guide.", href: "/health/when-to-take-your-dog-to-the-vet-south-africa" },
      { title: "Emergency Help", description: "Know urgent warning signs.", href: "/emergency" },
      ...commonRelated,
    ],
    faqs: [
      {
        question: "Should I wait for a checklist if symptoms are severe?",
        answer:
          "No. If your dog is collapsing, struggling to breathe, repeatedly vomiting, bleeding, or very weak, contact a vet urgently.",
      },
      {
        question: "What notes help a vet most?",
        answer:
          "Timing, appetite, drinking, toilet changes, vomiting or stool details, medications, diet changes, toxin exposure, and vaccine status are useful.",
      },
    ],
  },
  {
    slug: "dog-friendly-travel-checklist",
    path: "/tools/dog-friendly-travel-checklist",
    title: "Dog-Friendly Travel Checklist",
    seoTitle: "Dog-Friendly Travel Checklist South Africa | Free Tool",
    description:
      "A free South African dog travel checklist covering water, lead, vaccination record, parasite prevention, heat, accommodation rules, beach rules, and emergency vets.",
    intro:
      "Plan dog-friendly trips with fewer forgotten basics and more rule checks before you leave home.",
    note:
      "Rules change by accommodation, municipality, beach, park, venue, and province. Check official rules before going.",
    related: [
      { title: "Travelling With Dogs", description: "Road trip and destination planning.", href: "/dog-friendly/travelling-with-dogs-south-africa" },
      { title: "Travel Rules", description: "Records, accommodation, and public-space checks.", href: "/laws/travelling-with-dogs-south-africa-rules" },
      ...commonRelated,
    ],
    faqs: [
      {
        question: "Should I check rules every time?",
        answer:
          "Yes. Beach, park, accommodation, and venue rules can change by season and location.",
      },
      {
        question: "What is the biggest travel risk in summer?",
        answer:
          "Heat can become dangerous quickly, especially in cars, on hot sand, or during long walks.",
      },
    ],
  },
  {
    slug: "can-my-dog-eat-this",
    path: "/tools/can-my-dog-eat-this",
    title: "Can My Dog Eat This?",
    seoTitle: "Can My Dog Eat This? | Dog Food Safety Lookup",
    description:
      "A free dog food safety lookup for common foods covered by DogHaven, with safety category, short note, and links to full food guides.",
    intro:
      "Choose a common food and get a quick safety category plus a link to the full DogHaven guide.",
    note:
      "This is not emergency advice. For dangerous foods, large amounts, symptoms, or uncertainty, contact a vet immediately. Do not induce vomiting unless a vet tells you to.",
    related: [
      { title: "Foods Dogs Should Never Eat", description: "Dangerous food overview.", href: "/food/foods-dogs-should-never-eat-south-africa" },
      { title: "Dog Poisoning", description: "What to do if poisoning is possible.", href: "/emergency/dog-poisoning-south-africa" },
      ...commonRelated,
    ],
    faqs: [
      {
        question: "Can this tool replace a vet?",
        answer:
          "No. It is a quick educational lookup. Dangerous foods, symptoms, or uncertainty need veterinary guidance.",
      },
      {
        question: "Should I induce vomiting?",
        answer:
          "No, not unless a veterinarian tells you to. Some situations become more dangerous if handled incorrectly.",
      },
    ],
  },
];

export const toolsHub = {
  slug: "tools",
  path: "/tools",
  title: "Free Dog Owner Tools",
  seoTitle: "Free Dog Owner Tools South Africa | DogHaven",
  description:
    "Free DogHaven tools for South African dog owners, including feeding, cost, age, breed match, checklists, name ideas, travel planning, and food safety lookup.",
  kicker: "Free tools",
  intro:
    "DogHaven tools are built to make practical dog ownership easier: quick estimates, checklists, gentle reminders, and fun ideas without logins, personal data collection, or third-party scripts.",
  cards: tools.map((tool) => ({
    title: tool.title,
    description: tool.description,
    href: tool.path,
  })),
  related: [
    { title: "Start Here", description: "Find the right guide faster.", href: "/start-here" },
    { title: "Dog Food", description: "Feeding and food safety guides.", href: "/food" },
    { title: "Dog Costs", description: "Budgeting and insurance planning.", href: "/costs" },
    { title: "Puppy", description: "First-year puppy care.", href: "/puppy" },
    { title: "Local Guides", description: "City guides for grooming, training, emergency vet preparation, and dog-friendly checks.", href: "/local" },
    { title: "Local Cost Guides", description: "City cost guides for grooming, training, emergency vets, and monthly dog budgets.", href: "/local-costs" },
    { title: "Cape Town Grooming Prices", description: "Understand city grooming quote factors before booking.", href: "/local-costs/cape-town/dog-grooming-prices-cape-town" },
    { title: "Johannesburg Training Costs", description: "Plan puppy classes, private lessons, and behaviour support questions.", href: "/local-costs/johannesburg/dog-training-costs-johannesburg" },
    { title: "Dog Services", description: "Plan boarding, daycare, sitters, walkers, and holiday dog care safely.", href: "/dog-services" },
    { title: "Holiday Dog Care", description: "Prepare food, records, emergency contacts, travel rules, and care notes.", href: "/dog-services/cape-town/holiday-dog-care-cape-town" },
    { title: "Emergency Vet Costs", description: "Use with the vet visit checklist for urgent-care budget planning.", href: "/costs/emergency-vet-costs-south-africa" },
    { title: "Dog Food Prices", description: "Use with the feeding calculator for monthly food planning.", href: "/food/dog-food-prices-south-africa" },
    { title: "Dog Grooming Costs", description: "Use with the cost calculator for grooming budget planning.", href: "/costs/dog-grooming-costs-south-africa" },
  ],
  faqs: [
    {
      question: "Do DogHaven tools collect personal information?",
      answer:
        "No. These tools do not ask for names, emails, accounts, or personal details.",
    },
    {
      question: "Are the calculators professional advice?",
      answer:
        "No. They are educational estimates and planning aids. Vet, nutrition, insurance, legal, or financial decisions need the relevant professional or provider.",
    },
    {
      question: "Do the tools use third-party scripts?",
      answer:
        "No. DogHaven tools are simple first-party website features.",
    },
  ],
};

export function getTool(slug: string) {
  return tools.find((tool) => tool.slug === slug);
}
