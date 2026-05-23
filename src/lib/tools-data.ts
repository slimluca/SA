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
    seoTitle: "Dog Name Generator South Africa | Cute, Strong and Puppy Names",
    description:
      "A free South African dog name generator with cute, strong, puppy, small dog, big dog, active dog and local-inspired ideas.",
    intro:
      "Generate family-friendly dog name ideas by style and name feel, then test favourites out loud before choosing.",
    note:
      "Names are generated in your browser. DogHaven does not collect or save your choices. For language-inspired names, choose respectfully and check meaning or context when unsure.",
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
        question: "Does DogHaven save the generated names?",
        answer:
          "No. The tool runs in your browser and does not save personal information.",
      },
    ],
  },
  {
    slug: "puppy-name-shortlist",
    path: "/tools/puppy-name-shortlist",
    title: "Puppy Name Shortlist",
    seoTitle: "Puppy Name Shortlist Tool South Africa | DogHaven",
    description:
      "A free puppy name shortlist tool for South African dog owners to test favourite names locally in the browser.",
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
    seoTitle: "New Puppy Home Checklist South Africa | Printable Tool",
    description:
      "A free printable-style new puppy home checklist for food, bowls, bed, ID, microchip reminders, vet care, parasite prevention, puppy-proofing, training and transport.",
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
    seoTitle: "Dog Care Printable Checklist South Africa | Free Tool",
    description:
      "A free printable-style dog care checklist for feeding, water, exercise, grooming, parasite prevention, vet care, dental checks, training, emergency contacts and budget reminders.",
    intro:
      "Use this everyday dog care checklist as a calm reminder for routine care, prevention and emergency planning.",
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
        question: "Does DogHaven save checked items?",
        answer:
          "No. The checklist runs in your browser and does not collect personal information.",
      },
    ],
  },
  {
    slug: "dog-personality-quiz",
    path: "/tools/dog-personality-quiz",
    title: "Dog Personality Quiz",
    seoTitle: "Dog Personality Quiz South Africa | Fun DogHaven Tool",
    description:
      "A light, fun dog personality quiz for South African owners with practical care links for calm, playful, clever, gentle and adventurous dogs.",
    intro:
      "Answer a few playful questions and get a fun result with helpful DogHaven next steps.",
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
    seoTitle: "Puppy Readiness Quiz South Africa | Free Planning Tool",
    description:
      "A free puppy readiness quiz for South African homes covering time, budget, training, vet care, puppy-proofing, adoption safety and emergency planning.",
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
    seoTitle: "Dog Care Routine Builder South Africa | Free Planning Tool",
    description:
      "A free dog care routine builder for South African owners covering feeding, water, exercise, grooming, parasite prevention, vet care, training and rest.",
    intro:
      "Choose age stage, size, coat type and energy level to build a simple general care routine.",
    note:
      "This is a general routine guide. Adjust for your dog's health, vet advice, weather and temperament.",
    related: [
      { title: "Dog Health Calendar", description: "Plan routine health reminders.", href: "/tools/dog-health-calendar" },
      { title: "Weekly Dog Care Planner", description: "Turn routine into a weekly checklist.", href: "/tools/weekly-dog-care-planner" },
      { title: "Dog Food", description: "Feeding guidance for South African homes.", href: "/food" },
      ...commonRelated,
    ],
    faqs: [
      { question: "Is the routine exact?", answer: "No. Dogs vary by age, health, breed, weather, lifestyle and vet guidance." },
      { question: "Can puppies use the routine builder?", answer: "Yes as a broad prompt, but puppies need vet-guided vaccination, deworming and safe socialisation planning." },
    ],
  },
  {
    slug: "weekly-dog-care-planner",
    path: "/tools/weekly-dog-care-planner",
    title: "Weekly Dog Care Planner",
    seoTitle: "Weekly Dog Care Planner South Africa | Printable Checklist",
    description:
      "A free printable-style weekly dog care planner for walks, grooming, training, food checks, water bowls, parasite reminders, dental checks and enrichment.",
    intro:
      "Use a simple weekly checklist to keep everyday dog care calmer and easier to remember.",
    note:
      "This planner is a general reminder tool. Vet schedules, medication instructions and urgent symptoms come first.",
    related: [
      { title: "Dog Care Routine Builder", description: "Build a routine before planning the week.", href: "/tools/dog-care-routine-builder" },
      { title: "Dog Care Printable Checklist", description: "Everyday care prompts.", href: "/tools/dog-care-printable-checklist" },
      { title: "Dog Enrichment Ideas", description: "Add safe enrichment to the week.", href: "/fun/dog-enrichment-ideas-south-africa" },
      ...commonRelated,
    ],
    faqs: [
      { question: "Can I print the weekly dog care planner?", answer: "Yes. Use your browser's print function if you want a paper copy." },
      { question: "Does the planner save my ticks?", answer: "No. It runs in browser state and does not store personal information." },
    ],
  },
  {
    slug: "dog-walk-planner",
    path: "/tools/dog-walk-planner",
    title: "Dog Walk Planner",
    seoTitle: "Dog Walk Planner South Africa | Heat, Route and Safety Tool",
    description:
      "A free dog walk planner for South African owners covering heat, route, water, leash, waste bags, traffic, other dogs and local rules.",
    intro:
      "Use this quick planner before walks, especially in hot weather, busy suburbs, parks, beaches or unfamiliar areas.",
    note:
      "This is a safety planning prompt. Follow local rules and avoid walks when heat, illness, injury or behaviour risk makes them unsafe.",
    related: [
      { title: "Dog-Friendly Places", description: "Plan outings and verify rules.", href: "/dog-friendly" },
      { title: "Leash Laws", description: "Check public-space and local rule context.", href: "/laws/dog-leash-laws-south-africa" },
      { title: "Local Guides", description: "City and province dog-owner context.", href: "/local" },
      ...commonRelated,
    ],
    faqs: [
      { question: "What should I check before a dog walk in summer?", answer: "Check heat, tar or sand temperature, water, shade, your dog's fitness and route safety." },
      { question: "Should every dog go to dog parks?", answer: "No. Some dogs are safer and happier on quiet lead walks." },
    ],
  },
  {
    slug: "dog-friendly-trip-checklist",
    path: "/tools/dog-friendly-trip-checklist",
    title: "Dog-Friendly Trip Checklist",
    seoTitle: "Dog-Friendly Trip Checklist South Africa | Free Travel Tool",
    description:
      "A free dog-friendly trip checklist for South African cafes, beaches, parks, accommodation and road trips covering water, leads, records, shade, rules and emergency vets.",
    intro:
      "Prepare for dog-friendly outings with a simple checklist for packing, rule checks and safety.",
    note:
      "Rules can change by municipality, venue, beach, park and accommodation provider. Check official or venue rules before going.",
    related: [
      { title: "Travelling With Dogs", description: "Road trips, records, heat and stops.", href: "/dog-friendly/travelling-with-dogs-south-africa" },
      { title: "Dog-Friendly Beaches", description: "Beach rules, heat and safety.", href: "/dog-friendly/dog-friendly-beaches-south-africa" },
      { title: "Province Guides", description: "Local climate, travel and outing context.", href: "/province" },
      ...commonRelated,
    ],
    faqs: [
      { question: "Should I check dog-friendly rules every time?", answer: "Yes. Venue, beach, park and accommodation rules can change." },
      { question: "What is the most important thing to pack?", answer: "Water, a secure lead or harness, waste bags and any required records are a sensible start." },
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
  {
    slug: "dog-health-calendar",
    path: "/tools/dog-health-calendar",
    title: "Dog Health Calendar",
    seoTitle: "Dog Health Calendar South Africa | Free Prevention Planner",
    description:
      "Free South African dog health calendar tool for planning vaccination, rabies, deworming, tick and flea prevention, routine vet checks, grooming and dental reminders.",
    intro:
      "Use this simple planning tool to see which health reminders belong on your dog-care calendar, then follow your veterinarian's schedule.",
    note:
      "This is a general planning guide only. It does not collect or store personal information, and it does not replace your vet's vaccination, parasite prevention, or routine care schedule.",
    related: [
      { title: "Dog Health Calendar Guide", description: "How to use reminders safely.", href: "/health/dog-health-calendar-south-africa" },
      { title: "Routine Vet Checkup", description: "What to ask during prevention visits.", href: "/health/routine-vet-checkup-for-dogs-south-africa" },
      { title: "Vaccination Costs and Schedule", description: "Plan records, boosters, and cost questions.", href: "/health/dog-vaccination-costs-and-schedule-south-africa" },
      { title: "Dog Parasite Prevention", description: "Ticks, fleas, worms, mites, and vet questions.", href: "/health/dog-parasite-prevention-south-africa" },
      { title: "Puppy Care", description: "First-year puppy prevention planning.", href: "/puppy" },
      { title: "Emergency Help", description: "Know warning signs that should not wait.", href: "/emergency" },
    ],
    faqs: [
      {
        question: "Does the dog health calendar store my data?",
        answer:
          "No. It runs in your browser as a general planning prompt and does not ask for your name, email, or account.",
      },
      {
        question: "Can it replace my vet's schedule?",
        answer:
          "No. Your vet's advice, vaccine records, and product instructions come first.",
      },
      {
        question: "Can I use it for puppies?",
        answer:
          "Yes, as a reminder prompt only. Puppies need vet-guided vaccination, deworming, parasite prevention, and safe socialisation planning.",
      },
    ],
  },
  {
    slug: "dog-sterilisation-planner",
    path: "/tools/dog-sterilisation-planner",
    title: "Dog Sterilisation Planner",
    seoTitle: "Dog Sterilisation Planner South Africa | Free Vet Question Checklist",
    description:
      "Free South African dog sterilisation and ID planning checklist for spay, neuter, microchip, ID tag, records, surgery questions and warning signs.",
    intro:
      "Prepare clearer questions before a spay, neuter, microchip or ID discussion with your vet.",
    note:
      "This is a planning checklist only. It does not collect or store personal information, and it does not replace your veterinarian's advice or surgery instructions.",
    related: [
      { title: "Dog Sterilisation", description: "Spay and neuter planning overview.", href: "/health/dog-sterilisation-south-africa" },
      { title: "Sterilisation Cost", description: "Cost factors and quote questions.", href: "/health/dog-sterilisation-cost-south-africa" },
      { title: "Microchipping Dogs", description: "Registration, lost-dog planning and records.", href: "/health/microchipping-dogs-south-africa" },
      { title: "Preventing Unwanted Puppies", description: "Welfare-focused prevention guidance.", href: "/health/preventing-unwanted-puppies-south-africa" },
      { title: "Puppy Care", description: "First-year puppy planning.", href: "/puppy" },
      { title: "Emergency Help", description: "Know warning signs that should not wait.", href: "/emergency" },
    ],
    faqs: [
      {
        question: "Does this tool tell me when to sterilise my dog?",
        answer:
          "No. It helps you prepare questions. Your vet should advise timing based on your dog's age, sex, breed, size, health and records.",
      },
      {
        question: "Does the planner store my answers?",
        answer:
          "No. The planner runs in your browser and does not collect or store personal information.",
      },
      {
        question: "Can it replace post-surgery instructions?",
        answer:
          "No. Follow your vet's written recovery instructions and contact them urgently for concerning symptoms.",
      },
    ],
  },
  {
    slug: "senior-dog-care-checklist",
    path: "/tools/senior-dog-care-checklist",
    title: "Senior Dog Care Checklist",
    seoTitle: "Senior Dog Care Checklist South Africa | Free Planning Tool",
    description:
      "Free South African senior dog care checklist for mobility, dental checks, weight, appetite, skin, lumps, behaviour, hearing, vision, medication questions and comfort planning.",
    intro:
      "Use this checklist before routine senior vet visits or when you notice small changes in an older dog.",
    note:
      "This is a planning checklist only. It does not collect or store personal information, and it does not replace your veterinarian's advice.",
    related: [
      { title: "Senior Dog Care", description: "Comfort, mobility, dental, appetite, behaviour, and routine care planning.", href: "/health/senior-dog-care-south-africa" },
      { title: "Senior Vet Checkups", description: "What to ask during routine senior appointments.", href: "/health/senior-dog-vet-checkups-south-africa" },
      { title: "Dog Arthritis", description: "Mobility signs, flooring, weight, and vet questions.", href: "/health/dog-arthritis-south-africa" },
      { title: "Dog Dental Care", description: "Breath, teeth, gums, chewing changes, and vet dental questions.", href: "/health/dog-dental-care-south-africa" },
      { title: "Chronic Health Costs", description: "Plan for repeat visits, diagnostics, medication reviews, and insurance wording.", href: "/health/chronic-dog-health-costs-south-africa" },
      { title: "Emergency Help", description: "Know warning signs that should not wait.", href: "/emergency" },
    ],
    faqs: [
      {
        question: "Does the senior dog care checklist store my answers?",
        answer:
          "No. It runs in your browser and does not ask for your name, email, or account.",
      },
      {
        question: "Can this checklist diagnose my senior dog?",
        answer:
          "No. It helps you organise observations for a vet visit. A veterinarian needs to examine your dog to diagnose or treat a problem.",
      },
      {
        question: "When should senior symptoms be urgent?",
        answer:
          "Contact a vet urgently for collapse, trouble breathing, severe pain, repeated vomiting, seizures, inability to stand, heavy bleeding, or fast-worsening symptoms.",
      },
    ],
  },
  {
    slug: "dog-breed-comparison-checklist",
    path: "/tools/dog-breed-comparison-checklist",
    title: "Dog Breed Comparison Checklist",
    seoTitle: "Dog Breed Comparison Checklist South Africa | Free Breed Chooser Tool",
    description:
      "Free South African dog breed comparison checklist for size, grooming, shedding, exercise, training, children, apartment fit, heat, costs, insurance, adoption and breeder questions.",
    intro:
      "Compare dog types before you commit, with practical prompts for South African homes, budgets, climate, rentals, children, training, grooming and responsible sourcing.",
    note:
      "This is a planning checklist, not a promise about any breed or individual dog. Individual dogs vary. Consider adoption and responsible sourcing, and ask a vet, trainer, shelter, rescue or breed club when you are unsure.",
    related: [
      { title: "Choosing the Right Dog Breed", description: "A practical South African breed chooser before adoption or buying.", href: "/breeds/choosing-the-right-dog-breed-south-africa" },
      { title: "Dog Breed Match Quiz", description: "Explore broad breed categories by lifestyle.", href: "/tools/dog-breed-match-quiz" },
      { title: "Breed Guides", description: "Individual breed profiles and lifestyle guides.", href: "/breeds" },
      { title: "Puppy Scam Checklist", description: "Avoid pressure payments and suspicious adverts.", href: "/adoption/puppy-scam-checklist-south-africa" },
      { title: "Dog Costs", description: "Budget for food, vet care, grooming, training and emergencies.", href: "/costs" },
      { title: "Pet Insurance", description: "Understand waiting periods, exclusions, excesses and limits.", href: "/insurance" },
    ],
    faqs: [
      {
        question: "Does the breed comparison checklist choose a breed for me?",
        answer:
          "No. It helps you compare practical care needs so you can research, ask better questions, and avoid impulse decisions.",
      },
      {
        question: "Can the checklist predict temperament?",
        answer:
          "No. Breed tendencies are only part of the picture. Age, health, genetics, early experiences, training, handling and home life all matter.",
      },
      {
        question: "Should I still consider adoption?",
        answer:
          "Yes. A shelter or rescue may help match an individual dog to your home, especially when adult temperament and size are clearer.",
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
    { title: "Cape Town Monthly Dog Costs", description: "Use with the dog cost calculator for realistic city budget planning.", href: "/local-costs/cape-town/monthly-dog-costs-cape-town" },
    { title: "Johannesburg Training Costs", description: "Plan puppy classes, private lessons, and behaviour support questions.", href: "/local-costs/johannesburg/dog-training-costs-johannesburg" },
    { title: "Johannesburg Emergency Vet Costs", description: "Prepare records, transport, insurance questions, and emergency savings before urgent care.", href: "/local-costs/johannesburg/emergency-vet-costs-johannesburg" },
    { title: "Dog Services", description: "Plan boarding, daycare, sitters, walkers, and holiday dog care safely.", href: "/dog-services" },
    { title: "Holiday Dog Care", description: "Prepare food, records, emergency contacts, travel rules, and care notes.", href: "/dog-services/cape-town/holiday-dog-care-cape-town" },
    { title: "Gqeberha Dog-Friendly Places", description: "Use with the travel checklist for coastal outings, rule checks, and emergency planning.", href: "/local/gqeberha/dog-friendly-places-gqeberha" },
    { title: "Mpumalanga Province Guide", description: "Use with health and travel tools for heat, ticks, snakes, and rural planning.", href: "/province/mpumalanga" },
    { title: "Emergency Vet Costs", description: "Use with the vet visit checklist for urgent-care budget planning.", href: "/costs/emergency-vet-costs-south-africa" },
    { title: "Dog Food Prices", description: "Use with the feeding calculator for monthly food planning.", href: "/food/dog-food-prices-south-africa" },
    { title: "Dog Grooming Costs", description: "Use with the cost calculator for grooming budget planning.", href: "/costs/dog-grooming-costs-south-africa" },
    { title: "Dog Health Calendar", description: "Plan vaccines, rabies, deworming, parasite prevention, checkups, grooming, and dental reminders.", href: "/tools/dog-health-calendar" },
    { title: "Dog Sterilisation Planner", description: "Prepare vet questions about spay, neuter, microchips, ID tags, and recovery warning signs.", href: "/tools/dog-sterilisation-planner" },
    { title: "Senior Dog Care Checklist", description: "Plan mobility, teeth, weight, appetite, skin, lumps, behaviour, hearing, vision, medicine questions, and comfort checks.", href: "/tools/senior-dog-care-checklist" },
    { title: "Breed Comparison Checklist", description: "Compare size, grooming, exercise, heat, cost, insurance, adoption and breeder questions before choosing.", href: "/tools/dog-breed-comparison-checklist" },
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
