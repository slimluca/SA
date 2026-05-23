import type { CardLink, GuideContent, HubContent } from "@/lib/content";

const reviewed = "2026-05-23";

const commonFunRelated: CardLink[] = [
  { title: "Fun Hub", description: "Quizzes, planners, checklists and activity ideas.", href: "/fun" },
  { title: "Tools", description: "Free DogHaven calculators, quizzes and checklists.", href: "/tools" },
  { title: "Dog-Friendly Places", description: "Plan outings with rules, heat and etiquette in mind.", href: "/dog-friendly" },
  { title: "Dog Training", description: "Humane games, manners and routine-building.", href: "/training" },
  { title: "Dog Names", description: "Name ideas and naming tools for South African dogs.", href: "/dog-names" },
];

type FunGuideTopic = {
  slug: string;
  title: string;
  seoTitle: string;
  description: string;
  intro: string;
  context: string[];
  ideas: string[][];
  safety: string[];
  related: CardLink[];
  faqs: GuideContent["faqs"];
};

const topics: FunGuideTopic[] = [
  {
    slug: "things-to-do-with-your-dog-south-africa",
    title: "Things to Do With Your Dog in South Africa",
    seoTitle: "Things to Do With Your Dog South Africa | Safe Fun Ideas",
    description:
      "Practical, safe things to do with your dog in South Africa, including walks, training games, enrichment, outings, rainy-day ideas and rest days.",
    intro:
      "Dog fun does not need to be expensive or complicated. The best activities fit your dog's age, health, temperament, heat tolerance and training level.",
    context: [
      "South African dog activities should account for hot days, ticks, leash rules, beach and park restrictions, traffic, water access and dog-friendly venue rules.",
      "A calm sniff walk, ten minutes of training or a food puzzle can be just as useful as a big outing.",
    ],
    ideas: [
      ["Sniff walk", "Let your dog investigate safe pavements, verges or quiet trails on lead."],
      ["Training picnic", "Practise settle, recall and calm greetings in a low-distraction outdoor space."],
      ["Garden treasure hunt", "Hide a few treats or toys in safe shaded spots."],
      ["Dog-friendly outing", "Check venue, park or beach rules before leaving home."],
      ["Rest-and-groom afternoon", "Brush, check paws, look for ticks and reward calm handling."],
    ],
    safety: [
      "Avoid midday heat, hot tar and hot sand.",
      "Use a lead where rules require it or where recall is not reliable.",
      "Carry water and leave if your dog looks stressed, sore, overheated or overwhelmed.",
    ],
    related: [
      { title: "Dog Walk Planner", description: "Plan heat, water, route and rules before walking.", href: "/tools/dog-walk-planner" },
      { title: "Dog-Friendly Trip Checklist", description: "Pack for parks, beaches, cafes and road trips.", href: "/tools/dog-friendly-trip-checklist" },
      ...commonFunRelated,
    ],
    faqs: [
      { question: "What can I do with my dog on a hot day?", answer: "Choose early morning or evening activities, shaded sniffing, indoor enrichment and plenty of water." },
      { question: "Do all dogs enjoy dog parks?", answer: "No. Some dogs find dog parks stressful. Choose activities that suit your dog's temperament." },
      { question: "Can puppies join outings?", answer: "Only after vet-guided vaccination and safe socialisation advice. Avoid risky public dog areas too early." },
    ],
  },
  {
    slug: "rainy-day-dog-activities-south-africa",
    title: "Rainy Day Dog Activities in South Africa",
    seoTitle: "Rainy Day Dog Activities South Africa | Indoor Ideas",
    description:
      "Safe rainy-day dog activities for South African homes, flats and townhouses, including enrichment, training, scent games and calm routines.",
    intro:
      "Rainy days can still be useful dog days. Short indoor games, scent work, grooming and calm training can prevent boredom without creating chaos.",
    context: [
      "Rain can mean muddy gardens, slippery tiles, thunder, traffic delays and skipped walks in many South African homes.",
      "Some dogs need quiet comfort during storms; others need a safe job for their brain.",
    ],
    ideas: [
      ["Towel sniff game", "Hide treats in folds of a towel and supervise closely."],
      ["Name game", "Say your dog's name once, reward eye contact, then release."],
      ["Find the toy", "Hide a favourite toy in an easy room and let your dog search."],
      ["Gentle grooming", "Brush, dry paws and check ears if your dog is comfortable."],
      ["Calm mat time", "Reward settling on a bed while the household moves around."],
    ],
    safety: [
      "Avoid slippery high-speed games on tiles.",
      "Do not force storm-fearful dogs to perform.",
      "Keep games short so puppies and seniors do not become overtired.",
    ],
    related: [
      { title: "Dog Care Routine Builder", description: "Build a balanced indoor and outdoor routine.", href: "/tools/dog-care-routine-builder" },
      { title: "Weekly Dog Care Planner", description: "Plan walks, grooming, training and enrichment.", href: "/tools/weekly-dog-care-planner" },
      ...commonFunRelated,
    ],
    faqs: [
      { question: "Can indoor games replace walks?", answer: "Sometimes for a day, especially in bad weather, but most dogs still need regular movement and sniffing." },
      { question: "What if my dog is scared of thunder?", answer: "Keep them safe, calm and sheltered. Ask a vet or qualified behaviour professional if fear is severe." },
      { question: "Are food games safe?", answer: "Use appropriate treats, supervise chewing and count food games as part of the day's intake." },
    ],
  },
  {
    slug: "dog-enrichment-ideas-south-africa",
    title: "Dog Enrichment Ideas in South Africa",
    seoTitle: "Dog Enrichment Ideas South Africa | Easy Home Activities",
    description:
      "Dog enrichment ideas for South African homes, including sniffing, food puzzles, training games, safe chewing, grooming and calm routines.",
    intro:
      "Enrichment gives dogs healthy ways to sniff, chew, think, move, rest and connect with people. It should calm your dog, not overstimulate them.",
    context: [
      "Good enrichment works in flats, townhouses, gardens and rural homes when it matches the dog's age, breed type, health and confidence.",
      "In hot weather, enrichment can shift energy indoors when walking is unsafe.",
    ],
    ideas: [
      ["Scatter feeding", "Scatter part of a meal on clean grass or a snuffle mat."],
      ["Cardboard search", "Hide treats in safe cardboard pieces and supervise."],
      ["Training trick", "Teach touch, spin, settle or find it with rewards."],
      ["Scent walk", "Walk slower and let your dog sniff safe areas."],
      ["Calm chew time", "Use vet-appropriate chews and supervise."],
    ],
    safety: [
      "Avoid toys or chews your dog can swallow or break teeth on.",
      "Stop if your dog becomes frantic, guarding, frustrated or exhausted.",
      "Ask a vet about enrichment for dogs with pain, dental issues or medical conditions.",
    ],
    related: [
      { title: "Dog Personality Quiz", description: "Fun care links based on your dog's vibe.", href: "/tools/dog-personality-quiz" },
      { title: "Dog Care Routine Builder", description: "Balance enrichment with rest and routine care.", href: "/tools/dog-care-routine-builder" },
      ...commonFunRelated,
    ],
    faqs: [
      { question: "How much enrichment does a dog need?", answer: "It depends on age, health, breed type and temperament. Short daily activities often work better than rare intense sessions." },
      { question: "Can enrichment help barking?", answer: "It may help boredom-related barking, but fear, pain, separation distress and nuisance triggers need proper support." },
      { question: "Is food enrichment okay for overweight dogs?", answer: "Use measured meal portions rather than extra treats, and ask your vet about weight plans." },
    ],
  },
  {
    slug: "indoor-games-for-dogs-south-africa",
    title: "Indoor Games for Dogs in South Africa",
    seoTitle: "Indoor Games for Dogs South Africa | Safe Flat and Home Ideas",
    description:
      "Indoor games for dogs in South African homes, flats and townhouses, with safety notes for puppies, seniors, tiles, stairs and hot weather.",
    intro:
      "Indoor dog games are useful when it is too hot, wet, dark or busy outside. Keep them safe, short and matched to your floor space.",
    context: [
      "Many South African homes have tiles, stairs, small gardens or complex rules, so indoor games need low-impact planning.",
      "Indoor play should not turn into wild chasing if your dog slips, jumps on children or becomes overexcited.",
    ],
    ideas: [
      ["Find it", "Toss one treat a short distance and cue your dog to search calmly."],
      ["Toy names", "Teach one toy name at a time and reward the correct choice."],
      ["Hallway recall", "Practise short recalls between two family members on non-slip flooring."],
      ["Box sniffing", "Let your dog investigate safe open boxes with treats hidden inside."],
      ["Settle game", "Reward your dog for relaxing on a mat during normal household movement."],
    ],
    safety: [
      "Use non-slip surfaces and avoid stairs for fast games.",
      "Keep children calm and supervised.",
      "Avoid jumping games for puppies, seniors and dogs with joint concerns.",
    ],
    related: [
      { title: "Fun Training Games", description: "Use games to build manners and confidence.", href: "/fun/fun-training-games-for-dogs-south-africa" },
      { title: "Weekly Dog Care Planner", description: "Add indoor games to the weekly routine.", href: "/tools/weekly-dog-care-planner" },
      ...commonFunRelated,
    ],
    faqs: [
      { question: "Are indoor games enough for active dogs?", answer: "They help, but active dogs usually still need safe outdoor exercise and training." },
      { question: "Can puppies play indoor games?", answer: "Yes, if games are short, gentle and safe for growing bodies." },
      { question: "What if my dog gets too excited indoors?", answer: "Switch to sniffing, chewing, mat work or a quiet break." },
    ],
  },
  {
    slug: "weekend-dog-activities-south-africa",
    title: "Weekend Dog Activities in South Africa",
    seoTitle: "Weekend Dog Activities South Africa | Safe Outing and Home Ideas",
    description:
      "Weekend dog activity ideas for South African owners, including safe outings, training, enrichment, grooming checks and rest days.",
    intro:
      "Weekends are great for dog adventures, but your dog does not need a packed schedule. A balanced weekend includes movement, sniffing, training, rest and care checks.",
    context: [
      "Weekend plans should consider heat, ticks, traffic, beach and park rules, dog-friendly venue policies and your dog's social comfort.",
      "Dogs who are reactive, elderly, young or anxious may prefer quieter activities over crowded outings.",
    ],
    ideas: [
      ["Early sniff walk", "Use cooler hours and let your dog explore calmly."],
      ["Rule-checked outing", "Phone or check official rules before beaches, parks, cafes or accommodation."],
      ["Training refresh", "Practise recall, loose lead and settle for ten minutes."],
      ["Grooming check", "Brush, check paws, ears, nails and ticks."],
      ["Rest day", "Plan calm enrichment after a busy week."],
    ],
    safety: [
      "Do not leave dogs in hot cars.",
      "Carry water and shade plans.",
      "Leave if your dog is overwhelmed, limping or overheating.",
    ],
    related: [
      { title: "Dog-Friendly Trip Checklist", description: "Plan outings and road trips.", href: "/tools/dog-friendly-trip-checklist" },
      { title: "Dog Walk Planner", description: "Check heat, route, water and rules.", href: "/tools/dog-walk-planner" },
      ...commonFunRelated,
    ],
    faqs: [
      { question: "What is a good weekend dog activity?", answer: "A safe activity that fits your dog's age, health, training and temperament." },
      { question: "Should I take my dog everywhere?", answer: "No. Some dogs prefer home routines or quiet walks to busy venues." },
      { question: "How do I check dog-friendly rules?", answer: "Check official municipality, park, beach, accommodation or venue rules before going." },
    ],
  },
  {
    slug: "dog-birthday-ideas-south-africa",
    title: "Dog Birthday Ideas in South Africa",
    seoTitle: "Dog Birthday Ideas South Africa | Safe and Cute Celebration Tips",
    description:
      "Dog birthday ideas for South African homes, including safe treats, photos, walks, enrichment, donation ideas and low-stress celebrations.",
    intro:
      "A dog birthday can be sweet without being stressful. Keep it safe, simple and suited to your dog's temperament.",
    context: [
      "Dogs do not need crowds, rich foods or noisy parties to feel loved. Many prefer a sniff walk, a new toy, calm attention or a donation to a welfare group.",
      "Avoid unsafe foods and check with your vet if your dog has allergies, pancreatitis risk, weight concerns or a special diet.",
    ],
    ideas: [
      ["Birthday sniff walk", "Choose a cool, quiet route with lots of safe sniffing."],
      ["Photo moment", "Use natural light, treats and no forced costumes."],
      ["Enrichment box", "Use safe toys, paper and supervised treat searching."],
      ["Dog-safe treat", "Choose simple, appropriate treats and avoid chocolate, grapes, onions and rich foods."],
      ["Give-back idea", "Donate blankets, food or supplies to a reputable local welfare organisation."],
    ],
    safety: [
      "Avoid candles, balloons, skewers, chocolate, cooked bones and fatty party food.",
      "Do not force costumes or crowded greetings.",
      "Keep dogs separated if food or toys may cause guarding.",
    ],
    related: [
      { title: "Can My Dog Eat This?", description: "Check common food safety questions.", href: "/tools/can-my-dog-eat-this" },
      { title: "Dog Photo Ideas", description: "Take calmer, safer photos.", href: "/fun/dog-photo-ideas-south-africa" },
      ...commonFunRelated,
    ],
    faqs: [
      { question: "Can dogs eat birthday cake?", answer: "Human cake is often too rich and may contain unsafe ingredients. Choose dog-appropriate treats and ask a vet if unsure." },
      { question: "Are dog parties a good idea?", answer: "Only for dogs who genuinely enjoy other dogs and busy settings. Many dogs prefer calm celebrations." },
      { question: "Can I dress my dog up?", answer: "Only if your dog is comfortable, safe and supervised. Never force it." },
    ],
  },
  {
    slug: "dog-photo-ideas-south-africa",
    title: "Dog Photo Ideas in South Africa",
    seoTitle: "Dog Photo Ideas South Africa | Cute, Safe and Natural Photo Tips",
    description:
      "Dog photo ideas for South African homes and outings, with safety tips for heat, beaches, parks, puppies, senior dogs and reactive dogs.",
    intro:
      "Good dog photos are usually calm, safe and natural. The best picture is not worth stress, heat risk or unsafe off-leash behaviour.",
    context: [
      "South Africa offers beautiful light, beaches, gardens, mountains and city scenes, but rules, heat, wildlife and traffic still matter.",
      "Use a lead, helper or enclosed safe area when recall is not reliable.",
    ],
    ideas: [
      ["Golden-hour portrait", "Use cooler early morning or late afternoon light."],
      ["Home cuddle photo", "Use a bed, blanket or favourite toy in a calm room."],
      ["Paw detail", "Photograph paws, collar tag or sleepy ears without disturbing the dog."],
      ["Training action", "Capture sit, touch, recall or settle during a reward-based session."],
      ["Seasonal scene", "Use safe flowers, fynbos backgrounds or beach towels without risky props."],
    ],
    safety: [
      "Do not remove leads in unsafe public spaces.",
      "Avoid hot surfaces and long photo sessions.",
      "Skip flash or props that frighten your dog.",
    ],
    related: [
      { title: "Dog-Friendly Trip Checklist", description: "Plan safe outings before photo adventures.", href: "/tools/dog-friendly-trip-checklist" },
      { title: "Dog Names", description: "Find a name for captions, tags and new puppies.", href: "/dog-names" },
      ...commonFunRelated,
    ],
    faqs: [
      { question: "How do I get my dog to look at the camera?", answer: "Use a soft sound, treat or toy once, then reward. Do not nag or frustrate the dog." },
      { question: "Are beach photos safe?", answer: "They can be, if rules allow dogs and you manage heat, salt water, tides, leads and other dogs." },
      { question: "Can puppies do photo shoots?", answer: "Keep them short, gentle and away from risky public dog areas until your vet advises." },
    ],
  },
  {
    slug: "fun-training-games-for-dogs-south-africa",
    title: "Fun Training Games for Dogs in South Africa",
    seoTitle: "Fun Training Games for Dogs South Africa | Kind Everyday Games",
    description:
      "Fun reward-based training games for South African dog owners, including recall, name games, loose lead, settle, confidence and enrichment ideas.",
    intro:
      "Training games make manners feel less like homework. Keep sessions short, reward-based and suited to your dog's age, health and confidence.",
    context: [
      "Fun training helps dogs cope with visitors, gates, walks, vet visits, groomers, dog-friendly outings and local rules.",
      "Avoid punishment-heavy games or anything that scares, frustrates or physically overwhelms your dog.",
    ],
    ideas: [
      ["Name and check-in", "Say the name once, reward eye contact, then release."],
      ["Find it", "Drop a treat nearby to encourage sniffing and decompression."],
      ["Touch", "Teach nose-to-hand contact for gentle focus and movement."],
      ["Recall ping-pong", "Two people call the dog between them in a safe space."],
      ["Settle on mat", "Reward calm lying down while life happens around the dog."],
    ],
    safety: [
      "Stop before your dog is tired or frustrated.",
      "Use safe treats and count them in daily food intake.",
      "Ask a qualified trainer if fear, aggression, guarding or separation distress is present.",
    ],
    related: [
      { title: "Dog Training", description: "Humane training foundations.", href: "/training/dog-training-south-africa" },
      { title: "Puppy Readiness Quiz", description: "Check time, budget and training readiness.", href: "/tools/puppy-readiness-quiz" },
      ...commonFunRelated,
    ],
    faqs: [
      { question: "How long should training games be?", answer: "Many dogs do well with short sessions of a few minutes, repeated calmly." },
      { question: "Can older dogs play training games?", answer: "Yes, if games are gentle and adjusted for comfort, hearing, vision and mobility." },
      { question: "Should I use punishment in training games?", answer: "No. Games should build trust, confidence and clear communication." },
    ],
  },
];

export const funHub: HubContent = {
  slug: "fun",
  path: "/fun",
  title: "Fun Dog Tools and Ideas",
  seoTitle: "Fun Dog Tools and Ideas South Africa | DogHaven",
  description:
    "Fun, practical DogHaven tools and guides for South African dog owners, including quizzes, planners, checklists, names, enrichment, outings and training games.",
  kicker: "Fun and useful",
  intro:
    "DogHaven's fun section is built for real dog owners: playful quizzes, printable-style planners, dog name tools and activity ideas that still respect heat, safety, training, health and local rules.",
  cards: [
    { title: "Dog Personality Quiz", description: "A light quiz with practical care links by result.", href: "/tools/dog-personality-quiz" },
    { title: "Puppy Readiness Quiz", description: "Check time, budget, training and vet-care readiness.", href: "/tools/puppy-readiness-quiz" },
    { title: "Dog Care Routine Builder", description: "Build a general routine by age, size, coat and energy.", href: "/tools/dog-care-routine-builder" },
    { title: "Weekly Dog Care Planner", description: "Printable-style weekly care checklist.", href: "/tools/weekly-dog-care-planner" },
    { title: "Dog Walk Planner", description: "Plan heat, route, water, lead and local rules.", href: "/tools/dog-walk-planner" },
    { title: "Dog-Friendly Trip Checklist", description: "Prepare for cafes, beaches, parks, accommodation and road trips.", href: "/tools/dog-friendly-trip-checklist" },
    { title: "Dog Name Generator", description: "Generate cute, strong and South African-inspired name ideas.", href: "/tools/dog-name-generator" },
    { title: "Dog Names", description: "Browse dog name ideas and naming tips.", href: "/dog-names" },
    ...topics.map((topic) => ({ title: topic.title, description: topic.description, href: `/fun/${topic.slug}` })),
  ],
  related: [
    { title: "Tools", description: "All free DogHaven tools.", href: "/tools" },
    { title: "Dog Names", description: "Name guides and naming tools.", href: "/dog-names" },
    { title: "Breeds", description: "Breed chooser guides and comparison tools.", href: "/breeds" },
    { title: "Puppy", description: "First-year puppy care and checklists.", href: "/puppy" },
    { title: "Start Here", description: "Find the right DogHaven guide faster.", href: "/start-here" },
  ],
  faqs: [
    {
      question: "Are DogHaven fun tools professional advice?",
      answer:
        "No. They are educational and playful planning aids. Health, behaviour, insurance and legal decisions need the right professional or provider.",
    },
    {
      question: "Do the fun tools collect personal information?",
      answer:
        "No. They run in your browser and do not ask for names, emails, accounts or personal details.",
    },
    {
      question: "Are the activity guides safe for every dog?",
      answer:
        "No activity suits every dog. Adjust for age, health, temperament, heat, local rules and veterinary advice.",
    },
  ],
};

export const phase27FunGuidePages: GuideContent[] = topics.map((topic) => ({
  slug: topic.slug,
  path: `/fun/${topic.slug}`,
  hubTitle: "Fun",
  hubPath: "/fun",
  title: topic.title,
  seoTitle: topic.seoTitle,
  description: topic.description,
  intro: topic.intro,
  updated: reviewed,
  quickFacts: [
    "Keep fun safe, short and suited to your dog's age, health, confidence and training.",
    "South African heat, water, shade, ticks, leash rules and venue rules can change the plan.",
    "Stop activities that make your dog stressed, sore, overheated or overwhelmed.",
  ],
  sections: [
    { heading: "South African context", body: topic.context },
    {
      heading: "Practical activity ideas",
      body: ["Use these as flexible starting points. The right choice is the one your dog can enjoy safely."],
      table: {
        headers: ["Idea", "How to try it safely"],
        rows: topic.ideas,
      },
    },
    {
      heading: "Safety notes",
      body: ["A fun activity should make life calmer and kinder, not riskier."],
      checklist: topic.safety,
    },
    {
      heading: "Useful DogHaven next steps",
      body: [
        "Use the related tools and guides to plan routes, routines, names, training games and dog-friendly outings more thoughtfully.",
      ],
    },
  ],
  faqs: topic.faqs,
  related: topic.related,
  sources: [
    {
      label: "DogHaven editorial policy",
      href: "/editorial-policy",
      note: "DogHaven's public standards for practical, original, South Africa-focused dog-owner guidance.",
    },
  ],
}));

export function getPhase27FunGuide(slug: string) {
  return phase27FunGuidePages.find((guide) => guide.slug === slug);
}

export const phase27ToolCards: CardLink[] = [
  { title: "Fun Dog Tools", description: "Quizzes, planners, checklists and activity ideas.", href: "/fun" },
  { title: "Dog Personality Quiz", description: "A light quiz with practical care links.", href: "/tools/dog-personality-quiz" },
  { title: "Puppy Readiness Quiz", description: "Check time, budget, training and puppy-proofing.", href: "/tools/puppy-readiness-quiz" },
  { title: "Dog Care Routine Builder", description: "Build a general care routine.", href: "/tools/dog-care-routine-builder" },
  { title: "Dog Walk Planner", description: "Plan heat, route, water, lead and rules.", href: "/tools/dog-walk-planner" },
  { title: "Dog-Friendly Trip Checklist", description: "Prepare for dog-friendly outings and trips.", href: "/tools/dog-friendly-trip-checklist" },
];

export const phase27BreedCards: CardLink[] = [
  { title: "Dog Personality Quiz", description: "Explore your dog's vibe with practical next links.", href: "/tools/dog-personality-quiz" },
];

export const phase27PuppyCards: CardLink[] = [
  { title: "Puppy Readiness Quiz", description: "Check time, budget, vet care and training readiness.", href: "/tools/puppy-readiness-quiz" },
];

export const phase27TrainingCards: CardLink[] = [
  { title: "Fun Training Games", description: "Reward-based games for recall, settle and focus.", href: "/fun/fun-training-games-for-dogs-south-africa" },
  { title: "Dog Care Routine Builder", description: "Build a balanced routine with training and rest.", href: "/tools/dog-care-routine-builder" },
];

export const phase27DogFriendlyCards: CardLink[] = [
  { title: "Dog-Friendly Trip Checklist", description: "Prepare for cafes, beaches, parks, accommodation and road trips.", href: "/tools/dog-friendly-trip-checklist" },
  { title: "Dog Walk Planner", description: "Plan heat, route, water, lead and local rules.", href: "/tools/dog-walk-planner" },
];

export const phase27StartHereCards: CardLink[] = [
  { title: "Fun Dog Tools", description: "Quizzes, planners, checklists and activity ideas.", href: "/fun" },
  { title: "Dog Personality Quiz", description: "A light quiz that links to useful care guides.", href: "/tools/dog-personality-quiz" },
  { title: "Puppy Readiness Quiz", description: "Check whether the household is ready for puppy life.", href: "/tools/puppy-readiness-quiz" },
];
