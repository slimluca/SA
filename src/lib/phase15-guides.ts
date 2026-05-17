import type { CardLink, GuideContent, Source } from "@/lib/content";

type FoodGuide = {
  slug: string;
  title: string;
  seoTitle: string;
  description: string;
  summary: string;
  context: string;
  rows: string[][];
  questions: string[];
  avoid: string[];
  checklist: string[];
  faqs: GuideContent["faqs"];
  related: CardLink[];
  sources?: Source[];
};

const reviewed = "2026-05-15";

const nutritionSources: Source[] = [
  {
    label: "WSAVA Global Nutrition Guidelines",
    href: "https://wsava.org/global-guidelines/global-nutrition-guidelines/",
    note: "Veterinary nutrition tools for assessing diet, labels, body condition, and feeding conversations.",
  },
  {
    label: "MSD Veterinary Manual dog and cat foods",
    href: "https://www.msdvetmanual.com/management-and-nutrition/nutrition-small-animals/dog-and-cat-foods",
    note: "Veterinary reference on commercial pet food, complete diets, labels, and feeding considerations.",
  },
  {
    label: "South African Veterinary Council",
    href: "https://savc.org.za/",
    note: "South African veterinary professional regulation and context for registered veterinary advice.",
  },
  {
    label: "South African Veterinary Association",
    href: "https://www.sava.co.za/",
    note: "South African veterinary profession and pet-owner health context.",
  },
];

const allergySources: Source[] = [
  ...nutritionSources,
  {
    label: "MSD Veterinary Manual food allergy in animals",
    href: "https://www.msdvetmanual.com/integumentary-system/food-allergy/cutaneous-food-allergy-in-animals",
    note: "Veterinary reference on food allergy complexity and why diagnosis should involve a veterinarian.",
  },
];

const foodRelated: CardLink[] = [
  { title: "Dog Food South Africa", description: "Life stage, size, budget, and feeding basics.", href: "/food/dog-food-south-africa" },
  { title: "Dog Feeding Calculator", description: "Estimate daily feeding as a starting point.", href: "/tools/dog-feeding-calculator" },
  { title: "Dog Food Cost", description: "Plan monthly food spend without fake prices.", href: "/costs/dog-food-cost-south-africa" },
  { title: "Can My Dog Eat This?", description: "Quick safety lookup for common foods.", href: "/tools/can-my-dog-eat-this" },
];

const guides: FoodGuide[] = [
  {
    slug: "best-dog-food-south-africa",
    title: "Best Dog Food in South Africa: How to Choose for Your Dog",
    seoTitle: "Best Dog Food South Africa | Choose by Age, Size and Budget",
    description:
      "Choose dog food in South Africa by life stage, size, calories, digestion, budget and vet advice. No brand rankings or affiliate recommendations.",
    summary:
      "The best dog food is the food that suits your dog's life stage, size, body condition, health, digestion, activity, budget, and your vet's guidance. DogHaven does not crown one brand as best.",
    context:
      "South African owners balance supermarket availability, vet-shop foods, online delivery, township and rural access, high summer heat, puppy growth, senior care, allergies, and budget pressure. A practical choice should be sustainable and safe, not just fashionable.",
    rows: [
      ["Life stage", "Puppies, adults, seniors, pregnant dogs, and large-breed puppies need different planning."],
      ["Dog size", "Small, large, and giant dogs differ in kibble size, calories, and growth concerns."],
      ["Calories", "Feeding too much can cause weight gain even when the food is high quality."],
      ["Complete and balanced claim", "Check whether the food is intended as a complete daily diet."],
      ["Digestibility", "Stool quality, vomiting, gas, and body condition matter more than marketing promises."],
      ["Budget and access", "The food must be affordable and reliably available where you live."],
    ],
    questions: [
      "Is this food complete for my dog's life stage?",
      "How many calories are in the daily portion?",
      "Who formulates the food and what quality controls are used?",
      "Is there a puppy, senior, small-breed, or large-breed formula if needed?",
      "What should I do if my dog vomits, has diarrhoea, or becomes itchy?",
    ],
    avoid: [
      "Do not choose only by packaging claims or social media hype.",
      "Do not switch suddenly unless your vet advises it.",
      "Do not assume expensive automatically means suitable.",
      "Do not ignore weight gain, chronic itching, vomiting, or diarrhoea.",
    ],
    checklist: [
      "Match life stage first.",
      "Check daily calories and feeding guide.",
      "Assess body condition monthly.",
      "Transition gradually.",
      "Ask a vet for puppies, seniors, overweight dogs, and dogs with symptoms.",
    ],
    faqs: [
      {
        question: "Does DogHaven recommend a best dog food brand?",
        answer:
          "No. DogHaven explains how to compare foods neutrally. Your dog's needs and your vet's guidance matter more than a universal brand ranking.",
      },
      {
        question: "Is premium food always better?",
        answer:
          "Not always. Suitability, digestibility, complete nutrition, calorie control, and affordability all matter.",
      },
      {
        question: "When should I ask a vet about food?",
        answer:
          "Ask a vet for puppies, seniors, pregnant dogs, overweight dogs, chronic symptoms, medical conditions, or suspected allergies.",
      },
    ],
    related: foodRelated,
  },
  {
    slug: "how-to-choose-dog-food-south-africa",
    title: "How to Choose Dog Food in South Africa",
    seoTitle: "How to Choose Dog Food South Africa | Practical Guide",
    description:
      "A practical South African guide to choosing dog food by life stage, dog size, calories, ingredients, body condition, budget, and veterinary advice.",
    summary:
      "Start with life stage and body condition, then compare calories, complete-diet claims, digestibility, budget, and availability. If your dog has ongoing symptoms, involve a vet before experimenting.",
    context:
      "Food choices in South Africa are shaped by local availability, delivery reliability, climate, breed size, budget, parasite control, vet access, and whether the dog is a puppy, senior, rescue dog, or working farm companion.",
    rows: [
      ["Step 1", "Choose food made for the correct life stage."],
      ["Step 2", "Check body condition, weight, activity, and sterilisation status."],
      ["Step 3", "Read calories and feeding guide instead of guessing portions."],
      ["Step 4", "Choose a food you can buy consistently."],
      ["Step 5", "Transition gradually and watch stool, appetite, coat, and weight."],
      ["Step 6", "Ask your vet if symptoms continue."],
    ],
    questions: [
      "Is my dog's current body condition ideal?",
      "Does this formula match puppy, adult, senior, or large-breed needs?",
      "How much does a month of this food cost for my dog's size?",
      "Can I buy it reliably in my area?",
      "What signs mean the food is not agreeing with my dog?",
    ],
    avoid: [
      "Do not change food every few days because of online opinions.",
      "Do not feed adult food to large-breed puppies without vet guidance.",
      "Do not ignore portion size.",
      "Do not use treats and table scraps as a large part of daily calories.",
    ],
    checklist: [
      "Weigh your dog or estimate weight with your vet.",
      "Choose life-stage-appropriate food.",
      "Calculate daily amount from the bag as a starting point.",
      "Track stool and appetite after switching.",
      "Adjust with vet advice if weight changes.",
    ],
    faqs: [
      {
        question: "Should I rotate dog foods often?",
        answer:
          "Frequent switching can upset some dogs. If you rotate, do it gradually and keep the base diet complete and appropriate.",
      },
      {
        question: "Can rescue dogs change food immediately?",
        answer:
          "If possible, transition gradually from the previous food. Ask a vet if the dog is underweight, sick, vomiting, or has diarrhoea.",
      },
      {
        question: "Is local availability important?",
        answer:
          "Yes. A food that disappears from shelves or costs too much to maintain can create repeated diet changes.",
      },
    ],
    related: foodRelated,
  },
  {
    slug: "dog-food-comparison-south-africa",
    title: "Dog Food Comparison in South Africa",
    seoTitle: "Dog Food Comparison South Africa | Kibble, Wet, Raw and More",
    description:
      "A neutral comparison guide for South African dog food choices, covering kibble, wet food, raw diets, mixed feeding, labels, calories, cost, and vet questions.",
    summary:
      "Compare dog foods by suitability, not popularity: life stage, calories, complete nutrition, digestibility, safety, cost per day, storage, and your dog's response.",
    context:
      "South African homes may have load-shedding concerns, hot storage areas, limited freezer space, rural supply issues, or tight monthly budgets. Practical feeding has to work in real life.",
    rows: [
      ["Kibble", "Convenient, shelf-stable, and easy to portion, but calorie density matters."],
      ["Wet food", "Can help palatability and hydration, but storage and cost may differ."],
      ["Raw diets", "Need careful safety and veterinary nutrition guidance."],
      ["Mixed feeding", "Can work if total calories stay controlled."],
      ["Home-prepared", "Should be formulated with veterinary nutrition help."],
      ["Treats", "Useful for training, but should stay a small part of daily intake."],
    ],
    questions: [
      "Is this food complete or only complementary?",
      "How many calories will my dog eat daily?",
      "How will I store it safely during hot weather or power interruptions?",
      "Does the cost work per day, not just per bag or tin?",
      "Does my dog maintain healthy stool and body condition?",
    ],
    avoid: [
      "Do not compare only price per kilogram; compare calories and daily amount.",
      "Do not feed raw food casually without understanding hygiene risk.",
      "Do not assume wet food or fresh food is automatically healthier.",
      "Do not forget treats when calculating calories.",
    ],
    checklist: [
      "Compare life stage.",
      "Compare calories per serving.",
      "Compare storage needs.",
      "Compare monthly cost.",
      "Compare your dog's digestion and body condition.",
    ],
    faqs: [
      {
        question: "Is kibble worse than wet food?",
        answer:
          "Not automatically. A suitable complete kibble can be a good daily diet. Wet food may suit some dogs better for palatability or texture.",
      },
      {
        question: "Is raw feeding safer if ingredients are fresh?",
        answer:
          "Freshness does not remove all food safety and nutritional balance concerns. Speak to a vet or veterinary nutrition professional.",
      },
      {
        question: "How do I compare food costs fairly?",
        answer:
          "Estimate cost per day based on feeding amount and calories, not only bag size.",
      },
    ],
    related: [
      { title: "Kibble vs Wet vs Raw", description: "Compare feeding types in more detail.", href: "/food/kibble-vs-wet-food-vs-raw-dog-food-south-africa" },
      ...foodRelated,
    ],
  },
  {
    slug: "kibble-vs-wet-food-vs-raw-dog-food-south-africa",
    title: "Kibble vs Wet Food vs Raw Dog Food in South Africa",
    seoTitle: "Kibble vs Wet vs Raw Dog Food South Africa | Comparison",
    description:
      "A neutral South African comparison of kibble, wet food, and raw dog food, including cost, safety, storage, convenience, calories, and veterinary guidance.",
    summary:
      "Kibble, wet food, and raw diets each have tradeoffs. The safest choice is complete, appropriate, practical, digestible, and affordable for your dog, with vet guidance when health concerns exist.",
    context:
      "Load-shedding, hot kitchens, freezer space, travel, multi-dog homes, and budget can make a feeding style easier or harder in South Africa.",
    rows: [
      ["Kibble", "Easy to store and portion; watch calories and water intake."],
      ["Wet food", "Often palatable; can be more expensive per day and needs refrigeration after opening."],
      ["Raw food", "Requires strict hygiene, balance, storage, and vet-informed planning."],
      ["Mixed diet", "May improve acceptance but can lead to overfeeding if portions are not adjusted."],
      ["Puppies", "Need growth-appropriate nutrition; large-breed puppies need extra care."],
      ["Medical issues", "Diet changes should go through a vet."],
    ],
    questions: [
      "Is the food complete and balanced for daily feeding?",
      "Can I store it safely in summer and during power cuts?",
      "Does it suit my dog's teeth, stomach, weight, and life stage?",
      "What does it cost per day?",
      "What hygiene steps are needed?",
    ],
    avoid: [
      "Do not choose raw food because it sounds natural without checking safety.",
      "Do not leave wet food out in heat.",
      "Do not mix foods without reducing portions.",
      "Do not feed puppy diets casually to adult dogs or adult diets to puppies.",
    ],
    checklist: [
      "Check complete-diet claim.",
      "Check storage instructions.",
      "Estimate daily cost.",
      "Transition gradually.",
      "Ask a vet before raw, home-prepared, or medical diets.",
    ],
    faqs: [
      {
        question: "Which food type is best?",
        answer:
          "There is no universal best type. Suitability depends on the dog, diet quality, safety, storage, budget, and veterinary advice.",
      },
      {
        question: "Can I mix kibble and wet food?",
        answer:
          "Yes, but adjust portions so the dog is not overfed.",
      },
      {
        question: "Should puppies eat raw food?",
        answer:
          "Puppies have growth and safety needs. Speak to a vet before raw or home-prepared feeding.",
      },
    ],
    related: [
      { title: "Raw Food Diet", description: "Safety concerns and vet-guided planning.", href: "/food/raw-food-diet-for-dogs-south-africa" },
      ...foodRelated,
    ],
  },
  {
    slug: "dog-food-for-sensitive-stomach-south-africa",
    title: "Dog Food for Sensitive Stomachs in South Africa",
    seoTitle: "Dog Food for Sensitive Stomach South Africa | Owner Guide",
    description:
      "A practical guide to feeding dogs with sensitive stomachs in South Africa, including vet red flags, gradual transitions, ingredients, stool tracking, and food questions.",
    summary:
      "A sensitive stomach is a description, not a diagnosis. If vomiting, diarrhoea, weight loss, blood, pain, or repeated episodes occur, speak to a vet before trying multiple foods.",
    context:
      "South African dogs may have tummy upsets from sudden food changes, table scraps, parasites, heat stress, parvovirus risk in puppies, spoiled food, treats, or medical problems. Food choice is only part of the investigation.",
    rows: [
      ["Sudden vomiting", "Can be urgent, especially with puppies, weakness, or repeated episodes."],
      ["Loose stool", "Track timing, food changes, treats, parasites, and water access."],
      ["Gradual transition", "Often gentler than changing overnight."],
      ["Limited ingredients", "May help some dogs, but not every tummy issue is food-related."],
      ["Vet diet", "Use when your vet recommends it for a specific concern."],
      ["Food diary", "Helps identify patterns without guessing."],
    ],
    questions: [
      "Could parasites, infection, toxins, heat, or stress be involved?",
      "How long should I trial one food before changing again?",
      "Should my dog have a stool test?",
      "Is this safe for puppies or seniors?",
      "What symptoms mean same-day vet care?",
    ],
    avoid: [
      "Do not keep switching foods every few days.",
      "Do not give human medicine for vomiting or diarrhoea.",
      "Do not ignore blood, lethargy, dehydration, or puppy illness.",
      "Do not assume grain is the cause without vet input.",
    ],
    checklist: [
      "Record food, treats, stool, vomiting, and appetite.",
      "Remove rich scraps and risky treats.",
      "Transition gradually if the dog is otherwise well.",
      "Phone a vet for red flags.",
      "Ask about parasites and medical causes.",
    ],
    faqs: [
      {
        question: "What is the best food for a sensitive stomach?",
        answer:
          "It depends on the cause. A vet can help decide whether a digestible diet, parasite check, medical treatment, or diet trial is needed.",
      },
      {
        question: "Can puppies have sensitive stomachs?",
        answer:
          "Puppies can have stomach upsets, but vomiting and diarrhoea can become urgent quickly. Contact a vet sooner with puppies.",
      },
      {
        question: "Should I stop treats?",
        answer:
          "Temporarily simplifying the diet can help you see patterns, but ask a vet if symptoms persist or are severe.",
      },
    ],
    related: [
      { title: "Dog Vomiting", description: "Know urgent vomiting signs.", href: "/health/dog-vomiting-south-africa" },
      { title: "Dog Diarrhea", description: "When loose stool needs a vet.", href: "/health/dog-diarrhea-south-africa" },
      ...foodRelated,
    ],
    sources: allergySources,
  },
  {
    slug: "dog-food-for-skin-allergies-south-africa",
    title: "Dog Food for Skin Allergies in South Africa",
    seoTitle: "Dog Food for Skin Allergies South Africa | Vet-Aware Guide",
    description:
      "A cautious guide to food and itchy skin in South African dogs, covering vet diagnosis, flea allergy, elimination diets, skin infections, and diet questions.",
    summary:
      "Itchy skin is not automatically a food allergy. Fleas, ticks, grass, environmental allergies, infections, mites, and other problems are common, so ongoing itching should be checked by a vet.",
    context:
      "South African dogs can be itchy because of fleas, ticks, grass seeds, seasonal allergies, coastal humidity, dust, grooming products, or skin infections. Diet trials should be structured rather than random.",
    rows: [
      ["Food allergy", "Possible, but needs vet-guided investigation."],
      ["Flea allergy", "Common and can flare even with a few bites."],
      ["Skin infection", "May need veterinary treatment."],
      ["Elimination diet", "Should be strict and guided for a set period."],
      ["Treats", "Can ruin a food trial if not controlled."],
      ["Supplements", "Ask a vet before adding products for skin disease."],
    ],
    questions: [
      "Could fleas, mites, infection, or grass exposure be involved?",
      "Does my dog need a skin exam or tests?",
      "Is a vet diet or elimination trial appropriate?",
      "Which treats are allowed during a trial?",
      "When should I return if itching continues?",
    ],
    avoid: [
      "Do not diagnose food allergy from itching alone.",
      "Do not keep changing proteins without a plan.",
      "Do not stop parasite control.",
      "Do not use medicated products without vet guidance for sore skin.",
    ],
    checklist: [
      "Check parasite prevention.",
      "Book a vet exam for persistent itching.",
      "Follow diet trials strictly if recommended.",
      "Track flare-ups, food, treats, season, and grooming.",
      "Protect broken skin from licking and scratching while waiting for care.",
    ],
    faqs: [
      {
        question: "Is chicken the usual cause of itchy skin?",
        answer:
          "Not always. Itchy skin has many causes, and food allergy needs careful diagnosis.",
      },
      {
        question: "Can grain-free food fix allergies?",
        answer:
          "Not reliably. Speak to a vet before choosing grain-free food for skin symptoms.",
      },
      {
        question: "How long does a food trial take?",
        answer:
          "Your vet will set the plan. Trials usually need strict feeding rules and enough time to assess response.",
      },
    ],
    related: [
      { title: "Itchy Skin", description: "Symptoms and vet decision guide.", href: "/health/dog-scratching-and-itchy-skin-south-africa" },
      { title: "Ticks and Fleas", description: "Parasite prevention context.", href: "/health/ticks-and-fleas-dogs-south-africa" },
      ...foodRelated,
    ],
    sources: allergySources,
  },
  {
    slug: "dog-food-for-large-breeds-south-africa",
    title: "Dog Food for Large Breeds in South Africa",
    seoTitle: "Dog Food for Large Breeds South Africa | Feeding Guide",
    description:
      "A South African feeding guide for large breed dogs, covering calories, joint load, kibble size, weight control, costs, and large-breed puppy caution.",
    summary:
      "Large breed dogs need careful calorie control, steady body condition, practical food budgeting, and vet guidance for growth, joints, and weight. Large-breed puppies need special attention.",
    context:
      "Large South African dogs such as Boerboels, Labradors, German Shepherds, Rottweilers, and mixed breeds can be expensive to feed. Heat, exercise, joint strain, and sterilisation can all affect weight.",
    rows: [
      ["Calories", "Large dogs can gain weight quickly if portions are guessed."],
      ["Kibble size", "Larger kibble may suit chewing and portion control for some dogs."],
      ["Joint load", "Healthy weight reduces strain."],
      ["Medication cost", "Weight can affect parasite control and treatment cost."],
      ["Puppy growth", "Large-breed puppies need controlled growth nutrition."],
      ["Monthly budget", "Calculate cost per day before choosing a food."],
    ],
    questions: [
      "Is this food designed for large adult dogs or large-breed puppies?",
      "How many grams per day does my dog need?",
      "Is my dog's body condition ideal?",
      "Could treats be adding too many calories?",
      "What does my vet recommend for joints and weight?",
    ],
    avoid: [
      "Do not overfeed a large puppy to make it grow faster.",
      "Do not ignore weight gain because the dog is naturally large.",
      "Do not choose food only by bag price.",
      "Do not use intense exercise to compensate for overfeeding in young dogs.",
    ],
    checklist: [
      "Use a measuring cup or scale.",
      "Track body condition monthly.",
      "Use large-breed puppy food when appropriate.",
      "Budget food per day.",
      "Ask a vet about growth, joints, and weight.",
    ],
    faqs: [
      {
        question: "Do large dogs need large-breed food?",
        answer:
          "Many large dogs benefit from formulas designed for their size, but suitability depends on life stage and the individual dog.",
      },
      {
        question: "Why is large-breed puppy food different?",
        answer:
          "Growth rate and mineral balance matter for large-breed puppies. Ask your vet which food is appropriate.",
      },
      {
        question: "How can I reduce large-dog food costs safely?",
        answer:
          "Measure portions, avoid overfeeding, compare cost per day, and choose a complete food you can maintain.",
      },
    ],
    related: [
      { title: "Large Breed Puppy Food", description: "Growth-specific feeding guidance.", href: "/food/large-breed-puppy-food-south-africa" },
      { title: "Breed Insurance Costs", description: "Size and cost planning.", href: "/insurance/dog-breeds-and-pet-insurance-costs-south-africa" },
      ...foodRelated,
    ],
  },
  {
    slug: "dog-food-for-small-breeds-south-africa",
    title: "Dog Food for Small Breeds in South Africa",
    seoTitle: "Dog Food for Small Breeds South Africa | Feeding Guide",
    description:
      "A practical feeding guide for small breed dogs in South Africa, covering calories, dental care, kibble size, picky eating, treats, and body condition.",
    summary:
      "Small dogs need small portions, calorie awareness, dental care, and careful treat control. A few extra bites can matter more than owners expect.",
    context:
      "Small South African dogs often live in flats, townhouses, and family homes where treats, table scraps, and indoor lifestyles can lead to weight gain.",
    rows: [
      ["Kibble size", "Small mouths may cope better with suitable kibble size."],
      ["Calories", "Tiny portions can still be calorie-dense."],
      ["Dental care", "Small breeds can need extra dental attention."],
      ["Picky eating", "Avoid training dogs to hold out for richer foods."],
      ["Treats", "Small treats still count toward daily intake."],
      ["Body condition", "Check waist and ribs regularly."],
    ],
    questions: [
      "How many calories are in the daily portion?",
      "Are treats more than a small part of intake?",
      "Is dental care part of the plan?",
      "Is picky eating a habit or a health sign?",
      "Should my dog lose or gain weight?",
    ],
    avoid: [
      "Do not free-feed calorie-dense food if weight is creeping up.",
      "Do not add rich toppings every time the dog refuses food.",
      "Do not ignore bad breath or loose teeth.",
      "Do not let children over-treat small dogs.",
    ],
    checklist: [
      "Measure meals carefully.",
      "Use tiny training treats.",
      "Schedule dental checks.",
      "Track weight and body condition.",
      "Ask a vet about appetite changes.",
    ],
    faqs: [
      {
        question: "Do small dogs need small-breed food?",
        answer:
          "It can help with kibble size and calorie planning, but the food still needs to suit the individual dog.",
      },
      {
        question: "Why does my small dog gain weight so fast?",
        answer:
          "Small dogs need fewer calories, so treats and table scraps can quickly exceed daily needs.",
      },
      {
        question: "Should I worry about picky eating?",
        answer:
          "Sudden appetite changes need a vet. Long-term pickiness can be managed with routine and careful feeding habits.",
      },
    ],
    related: foodRelated,
  },
  {
    slug: "senior-dog-food-south-africa",
    title: "Senior Dog Food in South Africa",
    seoTitle: "Senior Dog Food South Africa | Older Dog Feeding Guide",
    description:
      "A practical guide to feeding senior dogs in South Africa, covering body condition, dental health, protein questions, calories, vet checks, and chronic disease caution.",
    summary:
      "Senior dogs do not all need the same food. Body condition, muscle, teeth, appetite, kidney or heart concerns, medication, and vet advice should shape feeding decisions.",
    context:
      "Older South African dogs may face dental disease, arthritis, weight changes, heat sensitivity, chronic illness, and reduced activity. Food should support comfort without masking symptoms.",
    rows: [
      ["Body condition", "Some seniors gain weight; others lose muscle or appetite."],
      ["Dental health", "Painful teeth can change eating."],
      ["Protein", "Needs vary with health; ask a vet before restricting."],
      ["Calories", "Lower activity can reduce needs."],
      ["Medical diets", "Use for diagnosed conditions under vet guidance."],
      ["Hydration", "Wet food may help some dogs but is not a cure for disease."],
    ],
    questions: [
      "Is my dog losing muscle or gaining fat?",
      "Could dental pain affect eating?",
      "Does my dog need blood tests before diet changes?",
      "Is a senior formula suitable or is a medical diet needed?",
      "How often should weight be checked?",
    ],
    avoid: [
      "Do not assume all seniors need low-protein food.",
      "Do not ignore weight loss, thirst, vomiting, diarrhoea, or bad breath.",
      "Do not use diet changes instead of vet checks.",
      "Do not overfeed because an older dog seems hungry.",
    ],
    checklist: [
      "Book routine senior vet checks.",
      "Monitor weight monthly.",
      "Check teeth and breath.",
      "Adjust portions with activity.",
      "Ask before using medical diets.",
    ],
    faqs: [
      {
        question: "When is a dog senior?",
        answer:
          "It depends on size and breed. Giant dogs age faster than many small dogs, so ask your vet about life-stage planning.",
      },
      {
        question: "Should senior dogs eat wet food?",
        answer:
          "Wet food may help some dogs, especially with appetite or chewing, but ask a vet if appetite changes suddenly.",
      },
      {
        question: "Can food help arthritis?",
        answer:
          "Weight control helps joint comfort, but arthritis should be managed with veterinary guidance.",
      },
    ],
    related: [
      { title: "Older Dog Insurance", description: "Insurance questions for senior dogs.", href: "/insurance/dog-insurance-for-older-dogs-south-africa" },
      { title: "Dog Not Eating", description: "When appetite changes need care.", href: "/health/dog-not-eating-south-africa" },
      ...foodRelated,
    ],
  },
  {
    slug: "large-breed-puppy-food-south-africa",
    title: "Large Breed Puppy Food in South Africa",
    seoTitle: "Large Breed Puppy Food South Africa | Growth Guide",
    description:
      "A South African guide to large breed puppy food, covering controlled growth, calcium balance, body condition, feeding amounts, and vet guidance.",
    summary:
      "Large-breed puppies need controlled growth, not fast growth. Choose growth-appropriate food and ask your vet about body condition, portion size, and safe exercise.",
    context:
      "Boerboel, Labrador, German Shepherd, Rottweiler, Golden Retriever, Husky, and large mixed-breed puppies can grow quickly. Overfeeding can create long-term problems.",
    rows: [
      ["Growth formula", "Choose food suitable for large-breed puppies when appropriate."],
      ["Calcium balance", "Do not add supplements unless your vet recommends them."],
      ["Body condition", "Lean steady growth is usually safer than rapid weight gain."],
      ["Exercise", "Avoid forcing intense exercise on growing joints."],
      ["Treats", "Training treats should be tiny and counted."],
      ["Vet checks", "Track growth and vaccine visits together."],
    ],
    questions: [
      "Is my puppy expected to become large or giant?",
      "Is this food labelled for large-breed puppies?",
      "How often should weight and body condition be checked?",
      "Should I avoid supplements?",
      "When should I change to adult food?",
    ],
    avoid: [
      "Do not feed extra calcium without vet advice.",
      "Do not overfeed to make the puppy bigger.",
      "Do not use adult maintenance food without veterinary guidance.",
      "Do not skip puppy vet checks.",
    ],
    checklist: [
      "Confirm expected adult size.",
      "Choose appropriate growth food.",
      "Measure meals.",
      "Track weight.",
      "Ask your vet before supplements or diet changes.",
    ],
    faqs: [
      {
        question: "Why is large-breed puppy food important?",
        answer:
          "Large-breed puppies need careful growth nutrition. Your vet can help choose a suitable option.",
      },
      {
        question: "Can my large puppy eat adult dog food?",
        answer:
          "Do not switch without vet advice. Growth-stage nutrition matters.",
      },
      {
        question: "Should I add supplements for joints?",
        answer:
          "Ask your vet. Unneeded supplements can unbalance the diet or waste money.",
      },
    ],
    related: [
      { title: "Puppy Food", description: "General puppy feeding basics.", href: "/puppy/puppy-food-south-africa" },
      { title: "Puppy Care", description: "First-year puppy planning.", href: "/puppy/puppy-care-south-africa" },
      ...foodRelated,
    ],
  },
  {
    slug: "how-much-should-i-feed-my-dog",
    title: "How Much Should I Feed My Dog?",
    seoTitle: "How Much Should I Feed My Dog? | South Africa Guide",
    description:
      "A practical guide to dog feeding amounts, including calories, weight, life stage, activity, body condition, treats, and food label guidance.",
    summary:
      "Start with the feeding guide on the food package, then adjust for body condition, activity, treats, age, sterilisation, and vet advice. Feeding amounts are estimates, not fixed rules.",
    context:
      "South African owners often feed by scoops, handfuls, or shared scraps. Measuring accurately helps prevent slow weight gain and makes food budgeting easier.",
    rows: [
      ["Weight", "Most labels start with body weight or expected adult weight."],
      ["Life stage", "Puppies, adults, seniors, and pregnant dogs differ."],
      ["Activity", "Busy farm dogs and couch-loving flat dogs may need different amounts."],
      ["Body condition", "Adjust if the dog is too thin or overweight."],
      ["Treats", "Treat calories count."],
      ["Food type", "Kibble, wet, and mixed feeding need different portions."],
    ],
    questions: [
      "What is my dog's current weight?",
      "What is my dog's body condition?",
      "How many calories are in the food?",
      "How many treats are given daily?",
      "When should I recheck weight?",
    ],
    avoid: [
      "Do not guess with a large mug or random scoop.",
      "Do not follow the bag blindly if body condition changes.",
      "Do not let every family member add extra food.",
      "Do not crash-diet an overweight dog without vet guidance.",
    ],
    checklist: [
      "Read feeding guide.",
      "Measure meals.",
      "Count treats.",
      "Check body condition monthly.",
      "Adjust gradually with vet advice.",
    ],
    faqs: [
      {
        question: "Should I feed once or twice daily?",
        answer:
          "Many adult dogs do well with two meals, but puppies and some medical situations need different routines. Ask your vet.",
      },
      {
        question: "Can I use the feeding calculator only?",
        answer:
          "Use calculators as a starting point, then check the food label and your dog's body condition.",
      },
      {
        question: "Why is my dog hungry after meals?",
        answer:
          "Hunger can be habit, boredom, food type, medical issues, or underfeeding. Check body condition and ask a vet if appetite changes.",
      },
    ],
    related: foodRelated,
  },
  {
    slug: "dog-feeding-calculator-south-africa",
    title: "Dog Feeding Calculator South Africa",
    seoTitle: "Dog Feeding Calculator South Africa | Daily Feeding Estimate",
    description:
      "A South African dog feeding calculator guide explaining feeding estimates, weight, age stage, activity, body condition, food type, and vet guidance.",
    summary:
      "Use the DogHaven feeding calculator as an educational starting point. Always check the food packaging and ask a vet for puppies, seniors, overweight dogs, pregnant dogs, and dogs with health issues.",
    context:
      "Feeding calculators can help owners stop guessing, but they cannot know your dog's health history, exact food calories, body condition, or medical needs.",
    rows: [
      ["Weight", "The calculator uses weight as a starting point."],
      ["Age stage", "Puppies, adults, and seniors need different planning."],
      ["Activity", "More activity can increase needs, but overfeeding is common."],
      ["Body condition", "Underweight and overweight dogs need vet-aware adjustments."],
      ["Food type", "Kibble, wet, and mixed feeding have different calorie density."],
      ["Packaging", "The food label is still essential."],
    ],
    questions: [
      "Do I know my dog's current weight?",
      "Is my dog's body condition ideal?",
      "What calories does my exact food provide?",
      "Are treats included in the daily amount?",
      "Should my vet set a weight plan?",
    ],
    avoid: [
      "Do not treat the estimate as a medical feeding plan.",
      "Do not use it for sick, pregnant, or rapidly growing puppies without vet guidance.",
      "Do not ignore weight gain or weight loss.",
      "Do not forget food package instructions.",
    ],
    checklist: [
      "Use the calculator.",
      "Check the package feeding guide.",
      "Measure portions.",
      "Track weight monthly.",
      "Ask a vet if body condition is not ideal.",
    ],
    faqs: [
      {
        question: "Is the feeding calculator exact?",
        answer:
          "No. It is a general estimate. Real feeding depends on calories, activity, health, body condition, and veterinary advice.",
      },
      {
        question: "Can I use it for puppies?",
        answer:
          "You can use it as a starting point, but puppies need vet-guided growth monitoring and food made for their life stage.",
      },
      {
        question: "Where is the calculator?",
        answer:
          "Use the free interactive calculator at /tools/dog-feeding-calculator.",
      },
    ],
    related: [
      { title: "Use the Feeding Calculator", description: "Interactive daily feeding estimate.", href: "/tools/dog-feeding-calculator" },
      ...foodRelated,
    ],
  },
  {
    slug: "cheap-dog-food-vs-premium-dog-food-south-africa",
    title: "Cheap Dog Food vs Premium Dog Food in South Africa",
    seoTitle: "Cheap vs Premium Dog Food South Africa | Neutral Guide",
    description:
      "A neutral guide to cheap versus premium dog food in South Africa, covering cost per day, digestibility, ingredients, calories, budget, and welfare-safe tradeoffs.",
    summary:
      "Budget matters, but the cheapest bag is not always cheapest per day. Compare feeding amount, calories, digestibility, stool quality, body condition, and whether the food is complete.",
    context:
      "Many South African owners are cost-conscious. DogHaven does not shame budget decisions; the goal is to choose the safest food you can maintain consistently.",
    rows: [
      ["Bag price", "Easy to compare, but incomplete."],
      ["Cost per day", "More useful than price per bag."],
      ["Digestibility", "Poor digestion can increase stool volume and waste."],
      ["Calories", "Higher calorie foods may need smaller portions."],
      ["Complete diet", "Check whether the food is suitable as a daily diet."],
      ["Vet costs", "Poor body condition or ongoing symptoms can become expensive."],
    ],
    questions: [
      "What does this food cost per day?",
      "How much must I feed for my dog's size?",
      "Is stool quality good?",
      "Is my dog maintaining healthy weight?",
      "Would a moderate food plus better portion control work?",
    ],
    avoid: [
      "Do not assume premium always means better for your dog.",
      "Do not buy food your dog cannot tolerate because it is cheap.",
      "Do not stretch food with unsafe scraps.",
      "Do not skip vet care for chronic digestive or skin signs.",
    ],
    checklist: [
      "Calculate monthly cost.",
      "Track stool and coat.",
      "Measure portions.",
      "Avoid unsafe table scraps.",
      "Ask a vet if symptoms persist.",
    ],
    faqs: [
      {
        question: "Is cheap dog food harmful?",
        answer:
          "Not automatically. It depends on whether it is complete, suitable, digestible, and fed in the right amount.",
      },
      {
        question: "Is premium dog food worth it?",
        answer:
          "It may be for some dogs, but suitability matters more than price tier.",
      },
      {
        question: "How do I save safely?",
        answer:
          "Measure portions, avoid overfeeding, compare cost per day, and avoid unsafe fillers or scraps.",
      },
    ],
    related: foodRelated,
  },
  {
    slug: "grain-free-dog-food-south-africa",
    title: "Grain-Free Dog Food in South Africa",
    seoTitle: "Grain-Free Dog Food South Africa | Cautious Owner Guide",
    description:
      "A cautious guide to grain-free dog food in South Africa, covering allergy assumptions, label checks, vet guidance, diet history, and when grain-free may or may not make sense.",
    summary:
      "Grain-free is not automatically healthier and is not the default answer for itching or stomach upset. Discuss ongoing symptoms and diet choices with a vet.",
    context:
      "Grain-free marketing can sound convincing, but South African owners should focus on complete nutrition, the individual dog, and veterinary guidance rather than fear-based claims.",
    rows: [
      ["Allergies", "Grain is not automatically the cause of itching."],
      ["Sensitive stomach", "Many causes are not grain-related."],
      ["Calories", "Grain-free foods can still be calorie-dense."],
      ["Ingredients", "Alternative starches still provide carbohydrates."],
      ["Vet guidance", "Important for symptoms or breed risk."],
      ["Diet history", "Keep records before changing food repeatedly."],
    ],
    questions: [
      "Why am I considering grain-free?",
      "Has a vet assessed the symptoms?",
      "Is this food complete for my dog's life stage?",
      "What replaces the grain?",
      "How will I monitor body condition and symptoms?",
    ],
    avoid: [
      "Do not choose grain-free because of fear-based marketing alone.",
      "Do not diagnose allergy without a vet.",
      "Do not switch repeatedly without a food diary.",
      "Do not ignore heart, weight, skin, or digestive symptoms.",
    ],
    checklist: [
      "Write down the reason for switching.",
      "Ask your vet if symptoms are involved.",
      "Check complete nutrition.",
      "Transition gradually.",
      "Monitor weight, stool, coat, and energy.",
    ],
    faqs: [
      {
        question: "Is grain-free dog food better?",
        answer:
          "Not automatically. It depends on the dog and the food formulation.",
      },
      {
        question: "Do grains cause most dog allergies?",
        answer:
          "No. Food allergy is complex, and itching has many non-food causes.",
      },
      {
        question: "Should I ask a vet before grain-free food?",
        answer:
          "Yes, especially if symptoms, breed risks, weight issues, or medical conditions are involved.",
      },
    ],
    related: foodRelated,
    sources: allergySources,
  },
  {
    slug: "dog-treats-south-africa",
    title: "Dog Treats in South Africa: Safer Choices and Training Snacks",
    seoTitle: "Dog Treats South Africa | Safer Training and Snack Guide",
    description:
      "A practical guide to dog treats in South Africa, covering training treats, calories, biltong and boerewors caution, dental treats, puppies, and safer snack habits.",
    summary:
      "Treats are useful for training and bonding, but they should stay a small part of daily calories. Avoid salty, fatty, spiced, cooked-bone, xylitol, onion, and garlic risks.",
    context:
      "South African homes often share braai leftovers, biltong, boerewors, bread, cheese, and table snacks. Many are too salty, fatty, spicy, or risky for dogs.",
    rows: [
      ["Training treats", "Tiny, soft pieces often work better than large snacks."],
      ["Calories", "Treats can quietly cause weight gain."],
      ["Local foods", "Biltong and boerewors are risky because of salt, fat, spices, and ingredients."],
      ["Dental treats", "Can help some dogs but do not replace vet dental care."],
      ["Puppies", "Use small safe treats and avoid upsetting digestion."],
      ["Food safety", "Check xylitol, onion, garlic, bones, chocolate, and grapes."],
    ],
    questions: [
      "How many treats does my dog get daily?",
      "Are treats causing loose stool or weight gain?",
      "Are any ingredients unsafe?",
      "Can I use part of the daily food allowance for training?",
      "Does my dog need dental care rather than dental treats only?",
    ],
    avoid: [
      "Do not use biltong, boerewors, cooked bones, chocolate, grapes, onion, garlic, or xylitol foods as treats.",
      "Do not overfeed treats during training.",
      "Do not give hard treats that crack teeth.",
      "Do not ignore vomiting, choking, or pancreatitis warning signs after rich food.",
    ],
    checklist: [
      "Keep treats small.",
      "Count treats in daily food.",
      "Choose plain safer options.",
      "Check labels for xylitol or birch sugar.",
      "Use the food safety lookup when unsure.",
    ],
    faqs: [
      {
        question: "Can dogs eat biltong as a treat?",
        answer:
          "It is better avoided because it can be salty, fatty, spicy, and too rich for dogs.",
      },
      {
        question: "What treats are useful for training?",
        answer:
          "Small, soft, safe pieces work well. Use tiny portions so training does not become overfeeding.",
      },
      {
        question: "Are dental treats enough for teeth?",
        answer:
          "Not always. Bad breath, tartar, pain, or loose teeth need a vet check.",
      },
    ],
    related: [
      { title: "Can Dogs Eat Biltong?", description: "Why biltong is risky for dogs.", href: "/food/can-dogs-eat-biltong" },
      { title: "Can Dogs Eat Boerewors?", description: "Fat, spices, and ingredient risks.", href: "/food/can-dogs-eat-boerewors" },
      ...foodRelated,
    ],
  },
];

function toGuide(guide: FoodGuide): GuideContent {
  return {
    slug: guide.slug,
    path: `/food/${guide.slug}`,
    hubTitle: "Dog Food",
    hubPath: "/food",
    title: guide.title,
    seoTitle: guide.seoTitle,
    description: guide.description,
    intro: guide.summary,
    updated: reviewed,
    quickFacts: [
      "DogHaven food pages are educational and do not replace veterinary nutrition advice.",
      "Needs vary by age, breed, weight, activity, health, body condition, budget, and vet guidance.",
      guide.summary,
      "For puppies, seniors, pregnant dogs, overweight dogs, diagnosed conditions, or ongoing symptoms, ask a veterinarian.",
    ],
    sections: [
      {
        heading: "South African feeding context",
        body: [
          guide.context,
          "Use local availability, storage conditions, budget, vet access, and your dog's real body condition as practical decision filters. Avoid choosing food only because a label or social post sounds persuasive.",
        ],
      },
      {
        heading: "Comparison table",
        body: [
          "Use this table to compare options without relying on brand rankings or invented prices.",
        ],
        table: {
          headers: ["Factor", "Why it matters"],
          rows: guide.rows,
        },
      },
      {
        heading: "Questions to ask your vet or food supplier",
        body: [
          "Good food decisions become easier when you ask specific questions and keep notes about your dog's response.",
        ],
        checklist: guide.questions,
      },
      {
        heading: "What owners should avoid",
        body: [
          "Food changes can affect health, weight, digestion, and monthly budget. These are the common traps to sidestep.",
        ],
        bullets: guide.avoid,
      },
      {
        heading: "Practical feeding checklist",
        body: [
          "Use this checklist before switching foods, changing portions, or comparing food types.",
        ],
        checklist: guide.checklist,
      },
      {
        heading: "Useful DogHaven tools",
        body: [
          "Free tools can help you estimate, organise, and check common decisions. They are educational only and do not collect personal information.",
        ],
        bullets: [
          "Dog feeding calculator: estimate daily feeding as a starting point.",
          "Dog cost calculator: estimate monthly ownership costs.",
          "Can my dog eat this: check common food safety pages quickly.",
        ],
      },
    ],
    faqs: guide.faqs,
    related: guide.related,
    sources: guide.sources ?? nutritionSources,
  };
}

export const phase15GuidePages: GuideContent[] = guides.map(toGuide);

export const phase15FoodCards: CardLink[] = guides.map((guide) => ({
  title: guide.title,
  description: guide.description,
  href: `/food/${guide.slug}`,
}));

export const phase15CostCards: CardLink[] = [
  { title: "Dog Feeding Calculator", description: "Estimate daily feeding before planning monthly food spend.", href: "/tools/dog-feeding-calculator" },
  { title: "Cheap vs Premium Dog Food", description: "Compare food value without shame or hype.", href: "/food/cheap-dog-food-vs-premium-dog-food-south-africa" },
  { title: "Dog Food Comparison", description: "Compare food types and daily cost factors.", href: "/food/dog-food-comparison-south-africa" },
];

export const phase15PuppyCards: CardLink[] = [
  { title: "Large Breed Puppy Food", description: "Controlled growth guidance for bigger puppies.", href: "/food/large-breed-puppy-food-south-africa" },
  { title: "Puppy Checklist Tool", description: "Interactive first-week preparation list.", href: "/tools/puppy-checklist" },
  { title: "New Dog Shopping List", description: "Practical supplies for puppies and adult dogs.", href: "/tools/new-dog-shopping-list" },
];

export const phase15BreedCards: CardLink[] = [
  { title: "Breed Match Quiz", description: "Find broad breed categories that fit your lifestyle.", href: "/tools/dog-breed-match-quiz" },
  { title: "Large Breed Food", description: "Food planning for bigger dogs.", href: "/food/dog-food-for-large-breeds-south-africa" },
  { title: "Small Breed Food", description: "Portion, dental, and treat planning for small dogs.", href: "/food/dog-food-for-small-breeds-south-africa" },
];

export const phase15HealthCards: CardLink[] = [
  { title: "Sensitive Stomach Food", description: "Food questions for tummy upsets, with vet red flags.", href: "/food/dog-food-for-sensitive-stomach-south-africa" },
  { title: "Skin Allergy Food Questions", description: "Itching is not always food allergy.", href: "/food/dog-food-for-skin-allergies-south-africa" },
  { title: "Vet Visit Checklist", description: "Prepare symptoms, food notes, and questions.", href: "/tools/vet-visit-checklist" },
  { title: "Food Safety Lookup", description: "Quick checks for common risky foods.", href: "/tools/can-my-dog-eat-this" },
];

export function getPhase15Guide(slug: string) {
  return phase15GuidePages.find((guide) => guide.slug === slug);
}

export function getPhase15GuidesByHub(hubPath: "/food") {
  return phase15GuidePages.filter((guide) => guide.hubPath === hubPath);
}
