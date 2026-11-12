import type { CardLink, FAQ } from "@/lib/content";

export type ToolSlug =
  | "dog-feeding-calculator"
  | "dog-cost-calculator"
  | "puppy-checklist"
  | "dog-age-calculator"
  | "dog-breed-match-quiz"
  | "dog-name-generator"
  | "puppy-name-shortlist"
  | "new-puppy-home-checklist"
  | "dog-care-printable-checklist"
  | "dog-personality-quiz"
  | "puppy-readiness-quiz"
  | "dog-care-routine-builder"
  | "weekly-dog-care-planner"
  | "dog-walk-planner"
  | "dog-friendly-trip-checklist"
  | "new-dog-shopping-list"
  | "vet-visit-checklist"
  | "dog-friendly-travel-checklist"
  | "can-my-dog-eat-this"
  | "dog-health-calendar"
  | "dog-sterilisation-planner"
  | "senior-dog-care-checklist"
  | "dog-breed-comparison-checklist";

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
  { title: "Start Here", description: "Browse Dog Haven by the question you need answered.", href: "/start-here" },
  { title: "Dog Food", description: "Feeding guides for South African homes.", href: "/food" },
  { title: "Dog Costs", description: "Budget for everyday and emergency care.", href: "/costs" },
];

export const tools: ToolContent[] = [
  {
    slug: "dog-feeding-calculator",
    path: "/tools/dog-feeding-calculator",
    title: "Dog Feeding Calculator",
    seoTitle: "Free Dog Feeding Calculator South Africa | Daily Portion by Weight & Age | Dog Haven",
    description:
      "Free dog feeding calculator for South Africa. Estimate daily food by weight, age, activity and food type. Compare with labels and body condition. No login required.",
    intro:
      "Estimate an initial daily amount, then compare it with the food packaging and your dog's body condition.",
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
          "Use it only as an initial estimate. Puppies need growth monitoring and vet-guided feeding.",
      },
    ],
  },
  {
    slug: "dog-cost-calculator",
    path: "/tools/dog-cost-calculator",
    title: "Dog Cost Calculator",
    seoTitle: "Free Dog Cost Calculator South Africa | Monthly Ownership Budget | Dog Haven",
    description:
      "Free dog cost calculator for South Africa. Estimate monthly food, vet, grooming, insurance and parasite costs. Planning range, not a quote. No personal data.",
    intro:
      "Estimate a monthly planning range for dog ownership costs without entering any personal information.",
    note:
      "This is a planning tool, not a quote. Ask vets, groomers, trainers, insurers, shelters, and suppliers for current prices.",
    related: [
      { title: "Dog Ownership Cost Report", description: "Check the calculator against 46 dated public-price examples and download the source-linked dataset.", href: "/costs/south-africa-dog-ownership-cost-report" },
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
    seoTitle: "Free New Puppy Checklist South Africa | Vaccines, Supplies & Safety | Dog Haven",
    description:
      "Free interactive new puppy checklist for South Africa. Vet visits, vaccines, food, puppy-proofing, socialisation, ID and scam checks. No login.",
    intro:
      "Work through the health, safety and household tasks for a puppy's first week in a South African home.",
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
    seoTitle: "Free Dog Age Calculator | Life Stage by Size | Dog Haven",
    description:
      "Free dog age calculator. Estimate life stage by age and size with care reminders for puppies, adults and seniors. No login required.",
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
    seoTitle: "Free Dog Breed Match Quiz South Africa | Responsible Matching | Dog Haven",
    description:
      "Free dog breed match quiz for South African homes. Answer lifestyle questions and get responsible breed categories to research. No login.",
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
    seoTitle: "Free Dog Name Generator South Africa | Cute, Strong & Puppy Names | Dog Haven",
    description:
      "Free South African dog name generator. Cute, strong, puppy, small dog, big dog and local-inspired ideas. Test names out loud. No login.",
    intro:
      "Generate family-friendly dog name ideas by style and name feel, then test favourites out loud before choosing.",
    note:
      "Names are generated in your browser. Dog Haven does not collect or save your choices. For language-inspired names, choose respectfully and check meaning or context when unsure.",
    related: [
      { title: "Dog Names", description: "South African dog name guides and naming tips.", href: "/dog-names" },
      { title: "Puppy Name Shortlist", description: "Create a small local shortlist without saving data.", href: "/tools/puppy-name-shortlist" },
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
        question: "Does Dog Haven save the generated names?",
        answer:
          "No. The tool runs in your browser and does not save personal information.",
      },
    ],
  },
  {
    slug: "puppy-name-shortlist",
    path: "/tools/puppy-name-shortlist",
    title: "Puppy Name Shortlist",
    seoTitle: "Free Puppy Name Shortlist Tool South Africa | Dog Haven",
    description:
      "Free puppy name shortlist tool for South Africa. Test favourite names out loud in your browser. No data saved.",
    intro:
      "Add a few favourite names, test them out loud, and choose one that still feels clear during training, vet visits and recall practice.",
    note:
      "This tool uses browser state only. It does not save your list, ask for login details or collect personal information.",
    related: [
      { title: "Puppy Names", description: "Cute and practical puppy name ideas.", href: "/dog-names/puppy-names-south-africa" },
      { title: "Dog Names South Africa", description: "Broader local name ideas and tips.", href: "/dog-names/dog-names-south-africa" },
      { title: "New Puppy Home Checklist", description: "Prepare the home before arrival.", href: "/tools/new-puppy-home-checklist" },
      ...commonRelated,
    ],
    faqs: [
      {
        question: "Does the shortlist save my names?",
        answer:
          "No. It uses browser state only and does not store names in a database or account.",
      },
      {
        question: "How many names should I shortlist?",
        answer:
          "Two to five names is usually enough. Test each name in a happy voice, a recall voice and a calm public setting.",
      },
    ],
  },
  {
    slug: "new-puppy-home-checklist",
    path: "/tools/new-puppy-home-checklist",
    title: "New Puppy Home Checklist",
    seoTitle: "Free New Puppy Home Checklist South Africa | Printable | Dog Haven",
    description:
      "Free printable new puppy home checklist for South Africa. Food, bowls, bed, ID, vet care, puppy-proofing and training. No login.",
    intro:
      "Use this printable-style checklist before your puppy arrives so the basics are ready without overbuying.",
    note:
      "This is a planning checklist only. Follow your veterinarian's schedule and the records from the shelter, rescue or responsible breeder.",
    related: [
      { title: "New Puppy Checklist Guide", description: "Records, supplies and first-week setup.", href: "/puppy/new-puppy-checklist-south-africa" },
      { title: "Puppy Names", description: "Choose a clear, kind puppy name.", href: "/dog-names/puppy-names-south-africa" },
      { title: "Puppy Scam Checklist", description: "Avoid pressure payments and suspicious adverts.", href: "/adoption/puppy-scam-checklist-south-africa" },
      ...commonRelated,
    ],
    faqs: [
      {
        question: "Can I print the checklist?",
        answer:
          "Yes. Use the print button on the tool page or your browser's print option.",
      },
      {
        question: "Does it replace a vet visit?",
        answer:
          "No. Puppies need vet-guided vaccination, deworming, parasite prevention and health checks.",
      },
    ],
  },
  {
    slug: "dog-care-printable-checklist",
    path: "/tools/dog-care-printable-checklist",
    title: "Dog Care Printable Checklist",
    seoTitle: "Free Dog Care Printable Checklist South Africa | Dog Haven",
    description:
      "Free printable dog care checklist for South Africa. Feeding, exercise, grooming, parasite prevention, vet care and emergency contacts.",
    intro:
      "Use this everyday checklist to keep routine care, prevention and emergency preparation organised.",
    note:
      "This is a general planning checklist. It does not replace veterinary care, provider quotes, insurance documents or local rules.",
    related: [
      { title: "Dog Health Calendar", description: "Plan routine health reminders.", href: "/tools/dog-health-calendar" },
      { title: "Dog Cost Calculator", description: "Estimate monthly care costs.", href: "/tools/dog-cost-calculator" },
      { title: "Vet Visit Checklist", description: "Prepare notes before appointments.", href: "/tools/vet-visit-checklist" },
      ...commonRelated,
    ],
    faqs: [
      {
        question: "Is this checklist for puppies too?",
        answer:
          "It can help, but puppies also need puppy-specific vaccine, deworming, socialisation and home setup planning.",
      },
      {
        question: "Does Dog Haven save checked items?",
        answer:
          "No. The checklist runs in your browser and does not collect personal information.",
      },
    ],
  },
  {
    slug: "dog-personality-quiz",
    path: "/tools/dog-personality-quiz",
    title: "Dog Personality Quiz",
    seoTitle: "Free Dog Personality Quiz South Africa | Fun Tool | Dog Haven",
    description:
      "Free fun dog personality quiz for South African owners. Light results with practical care links. No login or data collection.",
    intro:
      "Answer a few playful questions and get a fun result with helpful Dog Haven next steps.",
    note:
      "This is for fun only. It is not a behavioural assessment, diagnosis or training plan.",
    related: [
      { title: "Dog Enrichment Ideas", description: "Safe enrichment for different dog personalities.", href: "/fun/dog-enrichment-ideas-south-africa" },
      { title: "Dog Care Routine Builder", description: "Turn the result into a practical routine.", href: "/tools/dog-care-routine-builder" },
      { title: "Dog Training", description: "Humane training foundations.", href: "/training" },
      ...commonRelated,
    ],
    faqs: [
      { question: "Is the dog personality quiz serious?", answer: "No. It is a light engagement tool that points to practical care ideas." },
      { question: "Does it collect my data?", answer: "No. It runs in your browser and does not ask for personal information." },
    ],
  },
  {
    slug: "puppy-readiness-quiz",
    path: "/tools/puppy-readiness-quiz",
    title: "Puppy Readiness Quiz",
    seoTitle: "Free Puppy Readiness Quiz South Africa | Planning Tool | Dog Haven",
    description:
      "Free puppy readiness quiz for South African homes. Check time, budget, training, vet care and puppy-proofing before bringing a puppy home.",
    intro:
      "Check whether your home has the basics ready before bringing home a puppy.",
    note:
      "This is a planning prompt only. Ask a vet, shelter, rescue or responsible breeder for case-specific guidance.",
    related: [
      { title: "Puppy Care", description: "First-year puppy care in South Africa.", href: "/puppy/puppy-care-south-africa" },
      { title: "New Puppy Home Checklist", description: "Prepare supplies and safety basics.", href: "/tools/new-puppy-home-checklist" },
      { title: "Puppy Scam Checklist", description: "Avoid suspicious adverts and pressure payments.", href: "/adoption/puppy-scam-checklist-south-africa" },
      ...commonRelated,
    ],
    faqs: [
      { question: "Can this quiz tell me if I should get a puppy?", answer: "No. It highlights planning areas to think through before deciding." },
      { question: "What matters most before getting a puppy?", answer: "Time, budget, safe housing, vet care, training patience, adoption safety and emergency planning all matter." },
    ],
  },
  {
    slug: "dog-care-routine-builder",
    path: "/tools/dog-care-routine-builder",
    title: "Dog Care Routine Builder",
    seoTitle: "Free Dog Care Routine Builder South Africa | Dog Haven",
    description:
      "Free dog care routine builder for South Africa. Build a simple routine for feeding, exercise, grooming, parasite prevention and vet care by age and size.",
    intro:
      "Choose age stage, size, coat type and energy level to build a simple general care routine.",
    note:
      "This is a general routine guide. Adjust for your dog's health, vet advice, weather and temperament.",
    related: [
      { title: "Dog Health Calendar", description: "Plan routine health reminders.", href: "/tools/dog-health-calendar" },
      { title: "Dog Cost Calculator", description: "Estimate monthly care costs.", href: "/tools/dog-cost-calculator" },
      ...commonRelated,
    ],
    faqs: [
      { question: "Is the routine personalised?", answer: "It is a general starting point based on the options you select. Adjust for your individual dog." },
      { question: "Does it replace a vet?", answer: "No. Follow your veterinarian for medical decisions and schedules." },
    ],
  },
];
