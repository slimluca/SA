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
  sections?: HubSection[];
  notice?: string;
};

export type HubSection = {
  title: string;
  body: string[];
  links?: CardLink[];
};

export type ArticleSection = {
  heading: string;
  body: string[];
  bullets?: string[];
  checklist?: string[];
  callout?: "important" | "caution";
  links?: CardLink[];
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
  primaryImage?: {
    src: string;
    alt: string;
    width: number;
    height: number;
  };
  downloadAsset?: {
    href: string;
    label: string;
    description: string;
    fileType: string;
  };
  dataAsset?: {
    href: string;
    label: string;
    description: string;
    fileType: string;
  };
  dataset?: {
    name: string;
    description: string;
    distributionPath: string;
    recordCount: number;
    dateChecked: string;
  };
  originalResource?: {
    label: "Research resource" | "Printable resource";
    summary: string;
    citation?: string;
    shareLabel: string;
  };
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
      "Dog health advice should help you act sooner, ask better questions, and avoid guesswork. Dog Haven health guides focus on prevention, early warning signs, South African disease context, and when a veterinarian is the right next step.",
    notice:
      "Health content on Dog Haven is educational. If your dog is very young, elderly, pregnant, injured, in pain, collapsing, struggling to breathe, or getting worse quickly, contact a veterinarian urgently.",
    cards: [
      {
        title: "Vaccination Schedule South Africa",
        description:
          "Core puppy and adult dog vaccines, rabies timing, boosters, and questions to ask your vet.",
        href: "/health/vaccination-schedule-south-africa",
      },
      {
        title: "Tick Bite Fever Basics",
        description:
          "How South African owners can think about tick prevention, warning signs, and when a vet visit should not wait.",
        href: "/health/biliary-tick-bite-fever-dogs-south-africa",
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
        question: "Can Dog Haven diagnose my dog?",
        answer:
          "No. Dog Haven explains general signs, prevention, and preparation. A veterinarian needs to examine your dog to diagnose or treat a medical problem.",
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
    title: "Dog Emergency Signs and Urgent Help",
    seoTitle: "Dog Emergency Signs South Africa | Urgent Vet Guidance",
    description:
      "Recognise dog emergency signs, prepare for an urgent vet call, and find South African guidance for poisoning, heatstroke, rabies, injuries, and severe illness.",
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
        href: "/health/when-to-take-your-dog-to-the-vet-south-africa",
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
    seoTitle: "Dog Breeds South Africa | Choose for Home and Lifestyle",
    description:
      "South African dog breed guides for choosing by home size, climate, children, activity level, grooming, training, vet costs, and long-term fit.",
    kicker: "Breed hub",
    intro:
      "Choosing a breed in South Africa is about more than size or looks. Heat, garden space, estate or flat rules, children, activity level, grooming, training time, food costs, and vet risks all shape whether a dog will fit your real household.",
    cards: [
      {
        title: "Best Dog Breeds for South African Homes",
        description:
          "A practical way to compare breeds by heat, space, energy, shedding, family life, and owner experience.",
        href: "/breeds/best-dog-breeds-for-south-african-homes",
      },
      {
        title: "Apartment and Flat-Friendly Dogs",
        description:
          "Compare barking, toilet routines, enrichment, lift access, neighbours, and daily walks before choosing a flat-friendly dog.",
        href: "/breeds/best-dogs-for-small-homes-south-africa",
      },
      {
        title: "Family Dog Planning",
        description:
          "Think through children, supervision, space, handling, grooming, costs, and temperament before choosing a family dog.",
        href: "/breeds/best-family-dogs-south-africa",
      },
    ],
    related: [
      { title: "Labrador Retriever", description: "Family fit, exercise, food, and health planning.", href: "/breeds/labrador-retriever-south-africa" },
      { title: "Golden Retriever", description: "Coat care, exercise, family routines, and sourcing questions.", href: "/breeds/golden-retriever-south-africa" },
      { title: "Border Collie", description: "High-energy working breed planning.", href: "/breeds/border-collie-south-africa" },
      { title: "Rottweiler", description: "Training, handling, security myths, and responsible ownership.", href: "/breeds/rottweiler-south-africa" },
      { title: "Yorkshire Terrier", description: "Small dog care, grooming, dental, and apartment considerations.", href: "/breeds/yorkshire-terrier-south-africa" },
      { title: "Maltese Poodle", description: "Small companion dog planning for South African homes.", href: "/breeds/maltese-poodle-south-africa" },
    ],
    sections: [
      {
        title: "Choose for the home you actually have",
        body: [
          "A townhouse with strict conduct rules, a hot inland suburb, a busy family home, and a small coastal flat all ask different things of a dog. Start with your ordinary weekday: work hours, walking time, fencing, noise tolerance, children, visitors, and how much grooming or training support you can realistically afford.",
          "Breed labels can help you ask better questions, but they are not guarantees. Individual temperament, early handling, health, and daily routine matter as much as breed reputation.",
        ],
        links: [
          { title: "Best Dogs for Small Homes", description: "Flat, rental, noise, and enrichment planning.", href: "/breeds/best-dogs-for-small-homes-south-africa" },
          { title: "Best Family Dogs", description: "Child supervision, routines, and realistic family fit.", href: "/breeds/best-family-dogs-south-africa" },
        ],
      },
      {
        title: "Plan costs, grooming, training, and heat",
        body: [
          "Large dogs usually cost more to feed and may cost more for weight-based medication. Long, curly, double, or wire coats can make grooming a regular commitment. Active and working breeds need structure, exercise, and owner training rather than only a bigger garden.",
          "South African summers also matter. Flat-faced, heavy-coated, elderly, overweight, and very active dogs may need extra heat planning, shade, water, and careful outing times.",
        ],
        links: [
          { title: "Dog Costs", description: "Budget for food, vet care, grooming, training, and emergencies.", href: "/costs" },
          { title: "Dog Training", description: "Plan for manners, recall, visitors, and public behaviour.", href: "/training" },
        ],
      },
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
      {
        question: "Should I choose a breed before checking costs?",
        answer:
          "No. Food, grooming, training, insurance, transport, and vet care can change a lot by size, coat, age, and health risk. Budget before committing.",
      },
    ],
  },
  {
    slug: "adoption",
    path: "/adoption",
    title: "Dog Adoption Safety in South Africa",
    seoTitle: "Dog Adoption South Africa | Shelter Questions, Costs and Safety",
    description:
      "South African dog adoption guidance covering shelter questions, puppy scams, home preparation, vet records, microchipping, first-week planning, and costs.",
    kicker: "Adoption hub",
    intro:
      "Adopting, rescuing, rehoming, or buying a puppy should feel careful, not rushed. This hub helps South African owners verify records, prepare the home, avoid payment pressure, plan first-week routines, and understand the costs and health checks that come after the handover.",
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
        href: "/adoption/dog-adoption-south-africa",
      },
      {
        title: "Preparing Your Home",
        description:
          "Supplies, safety checks, food transition, sleeping areas, children, other pets, and first-week routines.",
        href: "/puppy/new-puppy-checklist-south-africa",
      },
    ],
    related: [
      { title: "New Puppy Checklist", description: "Records, supplies, safety, and first-week setup.", href: "/puppy/new-puppy-checklist-south-africa" },
      { title: "Microchipping Dogs", description: "ID, registration, lost-dog planning, and vet questions.", href: "/health/microchipping-dogs-south-africa" },
      { title: "Vet Costs", description: "Budget for routine, sick, and emergency vet care.", href: "/costs/vet-costs-for-dogs-south-africa" },
      { title: "Dog Cost Calculator", description: "Estimate monthly care before committing.", href: "/tools/dog-cost-calculator" },
      { title: "Breeds", description: "Match size, energy, grooming, and cost to your home.", href: "/breeds" },
      { title: "Start Here", description: "Find the right Dog Haven guide faster.", href: "/start-here" },
    ],
    sections: [
      {
        title: "Slow the decision down",
        body: [
          "A responsible adoption process should make the dog's welfare clearer, not more confusing. Ask about age, temperament, history with children or other pets, vaccinations, deworming, sterilisation, microchipping, diet, and what support is available after adoption.",
          "Dog Haven does not publish unverified shelter or breeder listings. Use these guides to prepare better questions and then verify details directly with the organisation, foster home, rescue group, SPCA, breeder, or current owner.",
        ],
        links: [
          { title: "Dog Adoption South Africa", description: "Shelter, rescue, rehoming, and record checks.", href: "/adoption/dog-adoption-south-africa" },
          { title: "Puppy Scam Checklist", description: "Spot pressure payments, stolen photos, and unsafe handovers.", href: "/adoption/puppy-scam-checklist-south-africa" },
        ],
      },
      {
        title: "Prepare for the whole first month",
        body: [
          "The first few weeks are where food changes, toilet routines, sleep, boundaries, vet checks, ID, and introductions can either settle calmly or become stressful. Prepare a quiet setup, keep records accessible, and budget for the first vet visit before the dog arrives.",
          "If the dog is a puppy, senior, nervous, underweight, recently ill, or moving between homes, give the transition more structure and fewer surprises.",
        ],
        links: [
          { title: "New Puppy Checklist", description: "Supplies, records, safety, and first-week setup.", href: "/puppy/new-puppy-checklist-south-africa" },
          { title: "Dog Cost Calculator", description: "Estimate routine costs before adoption.", href: "/tools/dog-cost-calculator" },
        ],
      },
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
      {
        question: "Does Dog Haven list shelters or breeders?",
        answer:
          "Dog Haven does not currently verify shelter or breeder listings. The adoption guides help owners know what to ask and what records to confirm directly.",
      },
    ],
  },
  {
    slug: "food",
    path: "/food",
    title: "Dog Food Guides for South African Owners",
    seoTitle: "Dog Food South Africa | Feeding, Labels, Raw Diets and Budget",
    description:
      "Practical South African dog food and feeding guides covering labels, life stages, raw diets, safe foods, feeding calculators, costs, and vet-guided choices.",
    kicker: "Food hub",
    intro:
      "Dog food choices can feel noisy because every bag, advert, and social post promises something. Dog Haven focuses on practical South African feeding decisions: life stage, body condition, label reading, daily portions, raw diet safety, budget, allergies, safe transitions, and when a vet diet is worth discussing.",
    cards: [
      {
        title: "Best Dog Food South Africa",
        description:
          "How to choose for your individual dog without fake brand rankings or universal claims.",
        href: "/food/best-dog-food-south-africa",
      },
      {
        title: "How to Read Dog Food Labels",
        description:
          "Understand life-stage claims, feeding guides, complete diets, ingredients, treats, and marketing language.",
        href: "/food/how-to-read-dog-food-labels-south-africa",
      },
      {
        title: "Raw Food Diet Safety",
        description:
          "Raw feeding questions, hygiene, balance, puppies, health risks, and when to ask a vet first.",
        href: "/food/raw-food-diet-for-dogs-south-africa",
      },
    ],
    related: [
      { title: "Dog Feeding Calculator", description: "Estimate an initial daily portion for your dog.", href: "/tools/dog-feeding-calculator" },
      { title: "Dog Cost Calculator", description: "Plan food as part of the monthly dog budget.", href: "/tools/dog-cost-calculator" },
      { title: "Dog Food Comparison", description: "Compare kibble, wet food, raw diets, and mixed feeding.", href: "/food/dog-food-comparison-south-africa" },
      { title: "Foods Dogs Should Never Eat", description: "Know dangerous foods and when to call a vet.", href: "/food/foods-dogs-should-never-eat-south-africa" },
      { title: "Ticks and Fleas", description: "Parasite prevention can affect skin and coat comfort.", href: "/health/ticks-and-fleas-dogs-south-africa" },
      { title: "Vet Care", description: "When appetite, vomiting, diarrhoea, or weight changes need professional advice.", href: "/health/when-to-take-your-dog-to-the-vet-south-africa" },
    ],
    sections: [
      {
        title: "Choose food by fit, not hype",
        body: [
          "There is no honest universal best food for every South African dog. A suitable diet depends on life stage, expected adult size, activity, body condition, stool quality, skin signs, medical history, budget, and what your vet recommends for special cases.",
          "Use labels and feeding guides as a starting point, then watch your dog's body condition and symptoms. Puppies, seniors, overweight dogs, allergic dogs, and dogs with chronic illness deserve extra caution before big food changes.",
        ],
        links: [
          { title: "Best Dog Food South Africa", description: "Choose without fake rankings or brand hype.", href: "/food/best-dog-food-south-africa" },
          { title: "Read Dog Food Labels", description: "Understand claims, portions, and life-stage wording.", href: "/food/how-to-read-dog-food-labels-south-africa" },
        ],
      },
      {
        title: "Plan portions and monthly cost",
        body: [
          "Food is often the most visible monthly dog cost, especially for large breeds. Compare daily feeding amount, not only bag price. Treats, toppers, leftovers, and unsafe local snacks can quietly affect both nutrition and budget.",
          "If you are considering raw feeding, home-prepared meals, or a major diet switch, check hygiene, balance, storage, and veterinary guidance before relying on online opinions.",
        ],
        links: [
          { title: "Dog Feeding Calculator", description: "Estimate portions before adjusting for body condition.", href: "/tools/dog-feeding-calculator" },
          { title: "Dog Cost Calculator", description: "Include food in the full monthly dog budget.", href: "/tools/dog-cost-calculator" },
        ],
      },
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
      {
        question: "Does Dog Haven rank dog food brands?",
        answer:
          "No. Dog Haven avoids fake rankings. The guides help owners compare suitability, labels, safety, portions, and questions to ask a vet where needed.",
      },
    ],
  },
  {
    slug: "training",
    path: "/training",
    title: "Dog Training Guides for Everyday South African Life",
    seoTitle: "Dog Training South Africa | Puppy Schools, Obedience and Behaviour",
    description:
      "South African dog training guides covering puppy schools, obedience, reactivity, recall, lead manners, trainer fit, home routines, parks, gates, visitors, and walks.",
    kicker: "Training hub",
    intro:
      "Good training makes daily life kinder, safer, and easier in real South African homes: gates opening onto streets, visitors arriving, children playing, dogs passing on walks, estate rules, parks, beaches, and busy suburbs. Dog Haven focuses on humane foundations, realistic routines, puppy school questions, trainer fit, and when behaviour needs qualified help.",
    cards: [
      {
        title: "Dog Training South Africa",
        description:
          "Humane everyday foundations for recall, lead manners, visitors, settling, and safer public behaviour.",
        href: "/training/dog-training-south-africa",
      },
      {
        title: "Puppy Schools South Africa",
        description:
          "Class timing, vaccination caution, safe socialisation, owner coaching, and questions before joining.",
        href: "/training/puppy-schools-south-africa",
      },
      {
        title: "Dog Obedience Classes",
        description:
          "Group vs private lessons, lead manners, recall, realistic expectations, and humane methods.",
        href: "/training/dog-obedience-classes-south-africa",
      },
    ],
    related: [
      { title: "Behaviour Problems", description: "Understand barking, fear, chewing, reactivity, and when to get help.", href: "/training/dog-behaviour-problems-south-africa" },
      { title: "Dog Services", description: "Plan daycare, walkers, sitters, and holiday care questions.", href: "/dog-services" },
      { title: "Durban Dog Training", description: "Local trainer-selection questions for Durban owners.", href: "/local/durban/dog-training-durban" },
      { title: "Dog-Friendly Places", description: "Public manners, lead control, and outing planning.", href: "/dog-friendly" },
      { title: "Breed Guides", description: "Energy, temperament, and training needs before choosing a dog.", href: "/breeds" },
      { title: "Dog Walk Planner", description: "Plan safer walks around heat, routes, water, and routine.", href: "/tools/dog-walk-planner" },
    ],
    sections: [
      {
        title: "Train for ordinary South African routines",
        body: [
          "Useful training goes beyond sit and stay. It builds safer gate habits, calmer greetings, lead manners near traffic, recall where legal and appropriate, and the ability to settle around visitors, suburbs, complexes, parks, beaches, and vet visits.",
          "Puppies can start learning gentle routines at home immediately, but public exposure should follow your vet's vaccine guidance. Adult and rescue dogs can also learn, especially when expectations are realistic and the household is consistent.",
        ],
        links: [
          { title: "Dog Training South Africa", description: "Everyday foundations for real homes and walks.", href: "/training/dog-training-south-africa" },
          { title: "Puppy Schools", description: "Vaccines, hygiene, class setup, and safe socialisation.", href: "/training/puppy-schools-south-africa" },
        ],
      },
      {
        title: "Choose help carefully",
        body: [
          "A good trainer should explain methods, class size, homework, handling of fear or reactivity, and when private or behaviour support is safer than a busy group class. Avoid punishment-heavy promises or anyone who dismisses pain, fear, or safety concerns.",
          "Dog Haven does not invent trainer listings. Use local guides and service planning pages to know what to ask before booking.",
        ],
        links: [
          { title: "Dog Behaviour Problems", description: "Barking, fear, reactivity, chewing, and when to seek help.", href: "/training/dog-behaviour-problems-south-africa" },
          { title: "Dog Services", description: "Questions for training, walking, daycare, and care support.", href: "/dog-services" },
        ],
      },
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
      {
        question: "How do I choose a dog trainer?",
        answer:
          "Ask about humane methods, class size, vaccination rules for puppies, homework, handling of fearful or reactive dogs, and what happens if your dog is not ready for a group class.",
      },
    ],
  },
  {
    slug: "grooming",
    path: "/grooming",
    title: "Dog Grooming Guides for South African Owners",
    seoTitle: "Dog Grooming South Africa | Coat Care, Groomers, Heat and Ticks",
    description:
      "South African dog grooming guides covering coat type, matting, mobile groomers, groomer questions, nails, ears, ticks and fleas, heat, shedding, and grooming costs.",
    kicker: "Grooming hub",
    intro:
      "Grooming keeps a dog comfortable and gives owners a chance to find ticks and fleas, grass seeds, sore ears, overgrown nails, matting, heat discomfort, skin changes, and coat problems early.",
    cards: [
      {
        title: "Dog Grooming South Africa",
        description:
          "Coat, nails, ears, paws, ticks, bathing, brushing, and routine grooming choices.",
        href: "/grooming/dog-grooming-south-africa",
      },
      {
        title: "How to Choose a Dog Groomer",
        description:
          "Questions about handling, drying, anxious dogs, matting, senior dogs, hygiene, and vaccination rules.",
        href: "/grooming/how-to-choose-a-dog-groomer-south-africa",
      },
      {
        title: "Mobile Dog Grooming",
        description:
          "Pros, cons, setup needs, hygiene questions, coat limits, and nervous-dog considerations.",
        href: "/grooming/mobile-dog-grooming-south-africa",
      },
    ],
    related: [
      { title: "Durban Dog Grooming", description: "Local grooming questions and safety checks.", href: "/local/durban/dog-grooming-durban" },
      { title: "Dog Services", description: "Plan grooming, boarding, daycare, sitters, walkers, and holiday care.", href: "/dog-services" },
      { title: "Dog Grooming Costs", description: "Budget by coat type, size, matting, and appointment frequency.", href: "/costs/dog-grooming-costs-south-africa" },
      { title: "Ticks and Fleas", description: "Parasite checks during grooming.", href: "/health/ticks-and-fleas-dogs-south-africa" },
      { title: "Dog Shedding", description: "Manage shedding and skin warning signs.", href: "/grooming/dog-shedding-south-africa" },
      { title: "Breed Guides", description: "Understand coat care before choosing a dog.", href: "/breeds" },
    ],
    sections: [
      {
        title: "Match grooming to coat and lifestyle",
        body: [
          "Short coats, curly coats, double coats, wire coats, and long coats need different routines. A dog that swims, hikes, lives near grass, or spends time in hot weather may need different checks from a mostly indoor companion.",
          "Regular brushing is also a health check. Look for ticks, fleas, mats, sore ears, cracked paws, sudden hair loss, itchy skin, and nails that are changing the dog's posture.",
        ],
        links: [
          { title: "Dog Grooming South Africa", description: "Coat, nails, ears, paws, bathing, and ticks.", href: "/grooming/dog-grooming-south-africa" },
          { title: "Ticks and Fleas", description: "Parasite prevention and checks for South African dogs.", href: "/health/ticks-and-fleas-dogs-south-africa" },
        ],
      },
      {
        title: "Choose and verify a groomer",
        body: [
          "Dog Haven does not invent groomer listings. Before booking, ask how the groomer handles anxious, senior, matted, reactive, or large dogs; how equipment is cleaned; what drying methods are used; and what happens if a skin, ear, or parasite problem appears.",
          "Mobile grooming can be convenient, but it still needs clear setup, hygiene, handling, parking, water, electricity, and stop-if-unsafe rules.",
        ],
        links: [
          { title: "Choose a Dog Groomer", description: "Safety questions before booking.", href: "/grooming/how-to-choose-a-dog-groomer-south-africa" },
          { title: "Mobile Dog Grooming", description: "Convenience, setup, and handling questions.", href: "/grooming/mobile-dog-grooming-south-africa" },
        ],
      },
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
      {
        question: "Should heat affect grooming decisions?",
        answer:
          "Yes, but shaving is not always the answer. Coat type, sun exposure, matting, cooling, shade, water, and vet or groomer advice all matter.",
      },
    ],
  },
  {
    slug: "insurance",
    path: "/insurance",
    title: "Dog Insurance Guides for South African Owners",
    seoTitle: "Dog Insurance South Africa | Cover, Claims, Exclusions and Costs",
    description:
      "Plain-English South African dog insurance guides covering cover, exclusions, waiting periods, pre-existing conditions, emergency claims, claim process, and vet costs.",
    kicker: "Insurance hub",
    intro:
      "Pet insurance policies differ, and the wording matters more than the sales page. Before signing up, compare exclusions, waiting periods, pre-existing conditions, emergency cover, the claims process, annual limits, chronic care, and what happens as your dog ages.",
    cards: [
      {
        title: "Pet Insurance for Dogs",
        description:
          "Plain-English cover basics, premiums, excesses, limits, exclusions, waiting periods, and claims.",
        href: "/insurance/pet-insurance-for-dogs-south-africa",
      },
      {
        title: "Is Pet Insurance Worth It?",
        description:
          "Compare insurance, savings, emergency risk, age, breed, exclusions, and budget reality.",
        href: "/insurance/is-pet-insurance-worth-it-south-africa",
      },
      {
        title: "Emergency Dog Insurance",
        description:
          "Questions about emergency vet care, deposits, reimbursement, exclusions, and claim documents.",
        href: "/insurance/dog-insurance-for-emergencies-south-africa",
      },
    ],
    related: [
      { title: "Pre-Existing Conditions", description: "How past symptoms, records, and timing can affect cover.", href: "/insurance/pre-existing-conditions-pet-insurance-south-africa" },
      { title: "Claims Checklist", description: "Step-by-step claims, documents, invoices, records, and follow-up.", href: "/insurance/pet-insurance-claims-checklist-south-africa" },
      { title: "What Insurance Does Not Cover", description: "Exclusions, limits, routine care, and wording checks.", href: "/insurance/what-dog-insurance-does-not-cover-south-africa" },
      { title: "Waiting Periods", description: "When cover starts and what may still be excluded.", href: "/insurance/dog-insurance-waiting-periods-south-africa" },
      { title: "Vet Costs", description: "Understand routine, diagnostic, and treatment cost factors.", href: "/costs/vet-costs-for-dogs-south-africa" },
      { title: "Emergency Vet Costs", description: "Plan for after-hours care and urgent estimates.", href: "/costs/emergency-vet-costs-south-africa" },
    ],
    sections: [
      {
        title: "Compare policy wording, not slogans",
        body: [
          "A lower monthly premium can still leave you exposed if the limit is low, the excess is high, dental or hereditary conditions are excluded, or claims must be paid upfront. A more expensive plan can also exclude the thing you assumed was covered.",
          "Read current policy documents before buying. Ask insurers direct questions in writing about waiting periods, pre-existing conditions, age rules, breed rules, routine-care add-ons, emergency treatment, and claim documents.",
        ],
        links: [
          { title: "Pet Insurance for Dogs", description: "Cover basics and policy questions.", href: "/insurance/pet-insurance-for-dogs-south-africa" },
          { title: "What Dog Insurance Does Not Cover", description: "Exclusions, limits, and wording checks.", href: "/insurance/what-dog-insurance-does-not-cover-south-africa" },
        ],
      },
      {
        title: "Plan for claims before a vet emergency",
        body: [
          "Emergency care can involve after-hours fees, tests, treatment, hospitalisation, surgery, or referral. Even insured owners may need an excess, upfront payment, records, invoices, and patience while a claim is assessed.",
          "Keep your policy number, vaccination records, vet history, and emergency clinic details easy to find. Insurance works best alongside some savings for excesses, exclusions, waiting periods, and costs above limits.",
        ],
        links: [
          { title: "Pet Insurance Claims Checklist", description: "Claim steps, documents, invoices, records, and follow-up.", href: "/insurance/pet-insurance-claims-checklist-south-africa" },
          { title: "Emergency Vet Costs", description: "After-hours care and urgent cost planning.", href: "/costs/emergency-vet-costs-south-africa" },
        ],
      },
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
      {
        question: "Does Dog Haven recommend a specific insurer?",
        answer:
          "No. Dog Haven does not rank insurers. Compare current policy documents, direct quotes, exclusions, limits, and claims rules before choosing.",
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
      "A dog is a long-term financial commitment, not a once-off adoption fee or puppy price. Dog Haven cost guides help owners plan for routine care, surprise vet bills, grooming, food, training, insurance, and a safer emergency buffer.",
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
    seoTitle: "Dog-Friendly South Africa | Beaches, Parks, Travel and Stays",
    description:
      "Dog-friendly South Africa guides for parks, beaches, cafes, accommodation, road trips, heat safety, leash rules, travel checks, and outing planning.",
    kicker: "Dog-friendly hub",
    intro:
      "Dog-friendly does not always mean suitable for every dog, every season, or every venue. This hub helps South African owners plan safer outings by checking rules, heat, water, shade, lead control, crowds, transport, accommodation terms, and whether the outing will actually be comfortable for the dog.",
    cards: [
      {
        title: "Dog-Friendly Places South Africa",
        description:
          "How to check parks, beaches, cafes, markets, hikes, accommodation, and public-space rules before visiting.",
        href: "/dog-friendly/dog-friendly-places-south-africa",
      },
      {
        title: "Pet-Friendly Accommodation",
        description:
          "Booking questions for stays, rules, records, cleaning fees, heat, fencing, and dog comfort.",
        href: "/dog-friendly/pet-friendly-accommodation-south-africa",
      },
      {
        title: "Travelling With Dogs",
        description:
          "Road trips, restraint, water, heat, stops, records, anxious travellers, and destination checks.",
        href: "/dog-friendly/travelling-with-dogs-south-africa",
      },
    ],
    related: [
      { title: "Heatstroke in Dogs", description: "Hot-weather emergency signs and urgent next steps.", href: "/emergency/heatstroke-in-dogs-south-africa" },
      { title: "Dog-Friendly Trip Checklist", description: "Pack for cafes, beaches, parks, stays, and road trips.", href: "/tools/dog-friendly-trip-checklist" },
      { title: "Dog Parks", description: "Etiquette, safety, dog interactions, and when to leave.", href: "/dog-friendly/dog-parks-south-africa" },
      { title: "Dog-Friendly Beaches", description: "Beach rules, heat, tides, salt water, and leash checks.", href: "/dog-friendly/dog-friendly-beaches-south-africa" },
      { title: "City Guides", description: "Local rules and dog-owner context by city.", href: "/city" },
      { title: "Province Guides", description: "Climate, travel, and local-risk context.", href: "/province" },
      { title: "Ticks and Fleas", description: "Outdoor parasite prevention.", href: "/health/ticks-and-fleas-dogs-south-africa" },
    ],
    sections: [
      {
        title: "Check the rules before you go",
        body: [
          "Venue rules change. A place may allow dogs on a patio but not indoors, on a beach in one season but not another, or in accommodation only under specific size, breed, linen, cleaning, or supervision rules.",
          "Before leaving home, check current rules directly, pack water and waste bags, plan shade and rest, and decide whether your dog will cope with crowds, children, other dogs, cyclists, wildlife, restaurant noise, or a long car trip.",
        ],
        links: [
          { title: "Dog-Friendly Places", description: "Parks, cafes, beaches, hikes, and rule checks.", href: "/dog-friendly/dog-friendly-places-south-africa" },
          { title: "Dog-Friendly Trip Checklist", description: "Packing and safety checks for outings.", href: "/tools/dog-friendly-trip-checklist" },
        ],
      },
      {
        title: "Plan for heat, travel, and public manners",
        body: [
          "South African outings often involve heat, hot paving, long drives, busy beaches, outdoor restaurants, estates, and changing municipal rules. Avoid midday heat where possible, never leave a dog in a hot car, and plan water, shade, restraint, and emergency vet access.",
          "Good training matters in public spaces. Lead manners, recall where legal, calm greetings, and the ability to leave when your dog is overwhelmed make dog-friendly outings safer for everyone.",
        ],
        links: [
          { title: "Travelling With Dogs", description: "Road trips, records, heat, stops, and stays.", href: "/dog-friendly/travelling-with-dogs-south-africa" },
          { title: "Heatstroke in Dogs", description: "Know emergency signs before hot outings.", href: "/emergency/heatstroke-in-dogs-south-africa" },
        ],
      },
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
      {
        question: "Does Dog Haven list dog-friendly venues?",
        answer:
          "Not as verified listings. Dog Haven helps owners know what to check directly before relying on a venue, beach, park, or accommodation rule.",
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
      "Rabies is fatal after symptoms begin but preventable through lifelong vaccination of dogs and cats and urgent medical care after a possible human exposure. This guide separates what a dog owner should do for an animal incident from what an exposed person must do immediately in South Africa.",
    updated: "2026-08-08",
    isHealthGuide: true,
    quickFacts: [
      "Rabies is almost always fatal once symptoms appear, so prevention and rapid exposure response matter.",
      "South African law requires dogs and cats to be correctly vaccinated against rabies throughout their lives; keep the vaccination record available.",
      "After a possible human exposure, wash or flush the area immediately with soap and running water for at least 15 minutes, then go to a clinic or hospital as soon as possible for a rabies risk assessment.",
      "If your dog bites someone or is bitten by an unknown animal, contact your vet and follow local health or state veterinary guidance.",
    ],
    sections: [
      {
        heading: "Current South African risk context",
        body: [
          "Rabies is a viral disease of mammals. The NICD says most animal cases in South Africa involve domestic dogs, and most South African human cases are associated with domestic-dog exposure. Government guidance identifies dog-rabies risk as especially important in KwaZulu-Natal, Eastern Cape, and Limpopo, while cases can occur in every province.",
          "A vaccinated dog is far less likely to become part of a tragic chain of exposure. That matters for households, neighbours, domestic workers, children, visitors, vets, groomers, shelter staff, and anyone who handles animals.",
          "Government guidance also warns that rabies is established in Cape fur seals and may occur along the Northern Cape, Western Cape, and Eastern Cape coast as far as Algoa Bay. Keep dogs controlled and away from seals, including pups; do not approach, touch, feed, or attempt to capture a seal that appears ill, weak, unusually tame, or aggressive.",
        ],
      },
      {
        heading: "Vaccination responsibilities",
        body: [
          "Rabies vaccination is a lifelong legal and public-health responsibility in South Africa. Current national guidance describes a first vaccine from 12 weeks of age, a booster within the following one to 12 months, and subsequent boosters according to the legal schedule, vaccine instructions, and local risk; annual boosters may be advised in high-risk areas. Your state or private veterinarian should confirm the schedule for your dog.",
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
        heading: "Dog owner actions after an animal incident",
        body: [
          "If your dog bites a person or is bitten, scratched, or licked on broken skin by an unknown or suspect animal, separate animals and people without handling saliva, then phone a veterinarian immediately. Give the dog's vaccination dates, the location and time, the species involved, observed behaviour, and details of any wounds.",
          "Do not chase, restrain, transport, or kill a suspect animal yourself. Report a suspected rabid animal to the local state veterinary office, animal health technician, welfare authority, or police, and follow their instructions. Keep people and other animals away from the scene.",
        ],
        table: {
          headers: ["Situation", "Practical next step"],
          rows: [
            ["A person is bitten, scratched, or exposed to saliva", "Begin washing immediately and go to a clinic or hospital as soon as possible."],
            ["Your dog is bitten by an unknown animal", "Phone your vet and share vaccination status and location."],
            ["You see unusual behaviour in a stray or wild animal", "Do not handle it; contact local animal health or municipal channels."],
            ["Your dog's rabies vaccine is overdue", "Book a vet appointment and ask what catch-up timing is appropriate."],
          ],
        },
      },
      {
        heading: "Human exposure actions: wash, then seek care now",
        body: [
          "A possible human exposure includes a bite or scratch, or suspect saliva contacting broken skin or the eyes, nose, or mouth. Immediately wash and flush wounds or scratches with soap and running water for at least 15 minutes. If saliva reached an eye or other mucous membrane, rinse it thoroughly with water.",
          "Then go to the nearest clinic or hospital as soon as possible and explain that rabies exposure is possible. Do not wait for the animal to become ill, for test results, or for symptoms in the person. A healthcare professional must assess the exposure category and decide on post-exposure prophylaxis, which may include rabies vaccine and rabies immunoglobulin. Previous vaccination does not remove the need for professional assessment.",
        ],
        checklist: [
          "Note the time, place, animal species, behaviour, owner details, and vaccination information if safely available.",
          "Tell the healthcare facility where on the body the exposure occurred and whether skin was broken or saliva reached eyes, mouth, nose, or an existing wound.",
          "Continue the full treatment plan exactly as the healthcare team instructs.",
          "Contact veterinary or public-health authorities about the animal; do not attempt capture yourself.",
        ],
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
        label: "NICD rabies updates and human exposure guidance",
        href: "https://www.nicd.ac.za/rabies-updates/",
        note: "Current South African public-health guidance on wound washing, urgent post-exposure care, and reporting a suspect animal.",
      },
      {
        label: "South African Government rabies risk guidance",
        href: "https://www.gov.za/news/media-statements/agriculture-warns-public-and-travellers-bout-rabies-dogs-cape-fur-seals-and",
        note: "November 2025 national guidance on dog-rabies risk, lifelong pet vaccination, human exposure response, and Cape fur seals.",
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
      "Canine parvovirus can progress quickly, especially in young, unvaccinated, or partly vaccinated dogs. Learn the red flags, contact a vet promptly, and do not try to treat this dangerous illness at home.",
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
      "The real cost of a dog goes well beyond the adoption fee or puppy price. Monthly care, annual prevention, worn equipment and unexpected emergencies all belong in a realistic South African dog budget.",
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
      "Choose a dog for a South African home by considering climate, space, exercise, grooming, children, costs, and adoption fit.",
    intro:
      "There is no single best dog breed for South Africa. Ask which individual dog fits your home, climate, daily rhythm, budget, experience, and long-term ability to provide care.",
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
      { title: "Labrador Retriever", description: "See how family fit, exercise, heat, food, and health needs come together for one popular breed.", href: "/breeds/labrador-retriever-south-africa" },
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
