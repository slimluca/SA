import type { CardLink, GuideContent, Source } from "@/lib/content";

type SymptomGuide = {
  slug: string;
  title: string;
  seoTitle: string;
  description: string;
  symptom: string;
  urgentSummary: string;
  context: string;
  causes: string[];
  redFlags: string[];
  ownerSteps: string[];
  avoid: string[];
  callNow: string[];
  checklist: string[];
  prevention: string[];
  faqs: GuideContent["faqs"];
  related: CardLink[];
  sources?: Source[];
};

const reviewed = "2026-05-15";

const coreSymptomSources: Source[] = [
  {
    label: "South African Veterinary Council",
    href: "https://savc.org.za/",
    note: "South African veterinary professional regulation and context for registered veterinary care.",
  },
  {
    label: "South African Veterinary Association",
    href: "https://www.sava.co.za/",
    note: "South African veterinary profession and public resources.",
  },
  {
    label: "VCA Animal Hospitals common emergencies in dogs",
    href: "https://vcahospitals.com/premier/know-your-pet/common-emergencies-in-dogs",
    note: "Veterinary emergency guidance covering serious signs such as repeated vomiting, diarrhoea, coughing, breathing difficulty, and collapse.",
  },
  {
    label: "Merck Veterinary Manual digestive disorders in dogs",
    href: "https://www.merckvetmanual.com/dog-owners/digestive-disorders-of-dogs/introduction-to-digestive-disorders-of-dogs",
    note: "Pet-owner veterinary reference on digestive signs, dehydration, diagnostics, and veterinary assessment.",
  },
];

const nutritionSources: Source[] = [
  {
    label: "WSAVA Global Nutrition Guidelines",
    href: "https://wsava.org/global-guidelines/global-nutrition-guidelines/",
    note: "Veterinary nutrition tools including body condition, diet history, and weight monitoring.",
  },
  ...coreSymptomSources,
];

const parasiteSources: Source[] = [
  {
    label: "MSD Animal Health South Africa biliary in dogs",
    href: "https://www.msd-animal-health.co.za/informative-articles/biliary-in-dogs/",
    note: "South Africa-specific context for biliary and tick-related dog illness.",
  },
  {
    label: "CDC preventing ticks on pets",
    href: "https://www.cdc.gov/ticks/prevention/preventing-ticks-on-pets.html",
    note: "Tick checks and prevention guidance for pets.",
  },
  ...coreSymptomSources,
];

const eyeEarSkinSources: Source[] = [
  {
    label: "Cornell flea and tick prevention",
    href: "https://www.vet.cornell.edu/departments-centers-and-institutes/riney-canine-health-center/canine-health-topics/flea-and-tick-prevention",
    note: "Veterinary overview of flea and tick exposure, prevention, and skin-related concerns.",
  },
  ...coreSymptomSources,
];

const commonRelated: CardLink[] = [
  {
    title: "When to Take Your Dog to the Vet",
    description: "A broader symptom triage guide for South African owners.",
    href: "/health/when-to-take-your-dog-to-the-vet-south-africa",
  },
  {
    title: "Dog Emergency Help",
    description: "Urgent signs and preparation for emergency vet calls.",
    href: "/emergency",
  },
  {
    title: "Dog Health",
    description: "Prevention, symptoms, and practical health guides.",
    href: "/health",
  },
];

const symptomGuides: SymptomGuide[] = [
  {
    slug: "dog-vomiting-south-africa",
    title: "Dog Vomiting in South Africa: When to Call a Vet",
    seoTitle: "Dog Vomiting South Africa | Vet Red Flags and Next Steps",
    description:
      "Dog vomiting guide for South African owners: red flags, possible causes, what not to do, and when same-day vet care is needed.",
    symptom: "vomiting",
    urgentSummary:
      "Call a vet urgently if vomiting is repeated, contains blood, follows possible poisoning, comes with weakness, bloating, severe pain, collapse, or affects a puppy.",
    context:
      "Vomiting can follow a sudden food change, braai scraps, parasites, parvovirus in puppies, heat stress, poisoning, obstruction, pancreatitis, tick-borne illness, or internal disease. South African owners should think about toxins, cooked bones, xylitol, chocolate, grapes, garden products, and access to after-hours vets before symptoms worsen.",
    causes: [
      "Diet change, spoiled food, rich leftovers, or eating rubbish.",
      "Toxic foods, medication, bait, cleaning products, or garden chemicals.",
      "Parvovirus risk in puppies or incompletely vaccinated dogs.",
      "Foreign objects, cooked bones, or obstruction.",
      "Heatstroke, pancreatitis, kidney or liver disease, or tick-borne illness.",
    ],
    redFlags: [
      "Repeated vomiting or inability to keep water down.",
      "Blood, coffee-ground material, or severe diarrhoea.",
      "Bloated abdomen, retching without bringing anything up, or severe distress.",
      "Weakness, collapse, pale gums, seizures, or suspected poisoning.",
      "Vomiting in a puppy, senior dog, pregnant dog, or dog with chronic illness.",
    ],
    ownerSteps: [
      "Remove access to food, rubbish, toxins, bones, or plants.",
      "Note when vomiting started, how often it happened, and what it looked like.",
      "Check vaccination status, tick exposure, recent diet changes, and possible toxins.",
      "Phone your vet for advice if vomiting repeats or any red flag is present.",
    ],
    avoid: [
      "Do not give human anti-nausea medicine, painkillers, antibiotics, or old medication.",
      "Do not force food or water into a weak or actively vomiting dog.",
      "Do not induce vomiting after suspected poisoning unless a vet instructs you.",
    ],
    callNow: [
      "Repeated vomiting, blood, collapse, bloating, severe pain, or suspected poisoning.",
      "A puppy vomits more than once or is quiet, weak, or not eating.",
      "Vomiting happens with diarrhoea, fever, pale gums, jaundice, or tick exposure.",
    ],
    checklist: [
      "Time vomiting started.",
      "Number of episodes.",
      "Food, toxin, plant, bone, or object exposure.",
      "Vaccination and tick prevention status.",
      "Energy level, gums, water intake, stool, and urination.",
    ],
    prevention: [
      "Avoid sudden diet changes and fatty braai scraps.",
      "Keep bins, medication, chocolate, grapes, xylitol, and bait secured.",
      "Keep puppies on a vet-advised vaccination schedule.",
      "Use tick and flea prevention suitable for your dog and area.",
    ],
    faqs: [
      {
        question: "Is dog vomiting always an emergency?",
        answer:
          "No, but repeated vomiting, vomiting with weakness, blood, bloating, poisoning risk, or vomiting in puppies should be treated as urgent.",
      },
      {
        question: "Can I give my dog human nausea medicine?",
        answer:
          "No. Do not give human medicine unless a veterinarian specifically prescribes it for your dog.",
      },
      {
        question: "Should I wait overnight if my dog vomits repeatedly?",
        answer:
          "No. Repeated vomiting can cause dehydration and may signal poisoning, obstruction, infection, or internal illness. Phone a vet.",
      },
    ],
    related: [
      { title: "Dog Poisoning", description: "What to do after toxin exposure.", href: "/emergency/dog-poisoning-south-africa" },
      { title: "Parvovirus", description: "Vomiting and diarrhoea risk in puppies.", href: "/emergency/parvovirus-in-dogs-south-africa" },
      { title: "Foods Dogs Should Never Eat", description: "Common food hazards.", href: "/food/foods-dogs-should-never-eat-south-africa" },
    ],
  },
  {
    slug: "dog-diarrhea-south-africa",
    title: "Dog Diarrhoea in South Africa: When It Needs a Vet",
    seoTitle: "Dog Diarrhea South Africa | When It Needs a Vet",
    description:
      "A South African guide to dog diarrhoea, possible causes, red flags, owner observations, prevention, and when to contact a vet.",
    symptom: "diarrhoea",
    urgentSummary:
      "Call a vet quickly if diarrhoea is bloody, watery and repeated, black, paired with vomiting, affects a puppy, or comes with weakness, pain, fever, or dehydration.",
    context:
      "Diarrhoea can come from diet changes, parasites, parvovirus, spoiled food, stress, toxins, tick-borne disease, or internal illness. In South Africa, puppies, shelter dogs, dogs exposed to parks, and dogs with unknown vaccination or deworming histories need extra caution.",
    causes: [
      "Sudden food changes, rich leftovers, or scavenging.",
      "Worms, giardia-like infections, or other parasites.",
      "Parvovirus in puppies and incompletely vaccinated dogs.",
      "Toxic foods, medication, or spoiled food.",
      "Stress, allergies, pancreatitis, or internal disease.",
    ],
    redFlags: [
      "Blood, black stool, severe watery diarrhoea, or repeated episodes.",
      "Vomiting as well as diarrhoea.",
      "Weakness, collapse, dehydration, fever, or painful abdomen.",
      "A puppy, senior dog, small dog, or chronically ill dog is affected.",
      "No improvement or symptoms returning repeatedly.",
    ],
    ownerSteps: [
      "Keep a note of frequency, colour, blood, mucus, and smell.",
      "Check for vomiting, energy level, appetite, thirst, and urination.",
      "Keep puppies and unvaccinated dogs away from other dogs until a vet advises.",
      "Phone your vet for same-day advice when red flags appear.",
    ],
    avoid: [
      "Do not give human diarrhoea medicine.",
      "Do not delay care for puppies or bloody diarrhoea.",
      "Do not change foods repeatedly while symptoms continue.",
    ],
    callNow: [
      "Puppy diarrhoea, especially with vomiting or low energy.",
      "Blood, black stool, repeated watery stool, or dehydration signs.",
      "Diarrhoea after possible poisoning, bones, spoiled food, or parvovirus exposure.",
    ],
    checklist: [
      "Stool photo if useful.",
      "Frequency and timing.",
      "Vomiting, appetite, thirst, and urination.",
      "Vaccination and deworming history.",
      "Recent food change, treats, parks, kennels, or shelter exposure.",
    ],
    prevention: [
      "Transition diets gradually when possible.",
      "Keep deworming and vaccines current with your vet.",
      "Avoid fatty leftovers, bones, and rubbish access.",
      "Pick up stools promptly and clean shared dog areas.",
    ],
    faqs: [
      {
        question: "Is diarrhoea dangerous for puppies?",
        answer:
          "Yes, it can become serious quickly, especially with vomiting, weakness, or parvovirus risk. Contact a vet.",
      },
      {
        question: "Can worms cause diarrhoea?",
        answer:
          "Yes, parasites can contribute to diarrhoea. Your vet can advise on testing and appropriate deworming.",
      },
      {
        question: "Should I give rice for diarrhoea?",
        answer:
          "Do not use food changes to delay veterinary care. Ask your vet, especially if symptoms are repeated, bloody, or involve a puppy.",
      },
    ],
    related: [
      { title: "Parvovirus", description: "Puppy vomiting and diarrhoea danger signs.", href: "/emergency/parvovirus-in-dogs-south-africa" },
      { title: "Dog Worms", description: "Parasite signs and prevention.", href: "/health/dog-worms-south-africa" },
      { title: "Can Dogs Eat Rice?", description: "Plain rice and stomach upset context.", href: "/food/can-dogs-eat-rice" },
    ],
    sources: parasiteSources,
  },
  {
    slug: "dog-not-eating-south-africa",
    title: "Dog Not Eating in South Africa: When to Worry",
    seoTitle: "Dog Not Eating South Africa | When to Call a Vet",
    description:
      "A practical guide to dogs not eating, possible causes, warning signs, owner checks, and when same-day vet care is needed.",
    symptom: "not eating",
    urgentSummary:
      "Call a vet the same day if your dog refuses food and is weak, vomiting, painful, breathing oddly, has pale gums, has tick exposure, or is a puppy, senior, or diabetic dog.",
    context:
      "A dog may skip food from stress, heat, dental pain, stomach upset, diet change, tick-borne illness, fever, poisoning, pain, or internal disease. In South Africa, biliary tick bite fever, hot weather, parvovirus in puppies, and access to toxins should stay on the owner's radar.",
    causes: [
      "Heat, stress, travel, new home adjustment, or food change.",
      "Dental pain, mouth injury, bad breath, or gum disease.",
      "Vomiting, diarrhoea, nausea, poisoning, or obstruction.",
      "Tick-borne illness, fever, pain, kidney or liver disease.",
      "Anxiety, recent vaccination reaction, or medication side effects.",
    ],
    redFlags: [
      "Not eating with weakness, vomiting, diarrhoea, fever, or pain.",
      "Pale gums, yellow gums, dark urine, or tick exposure.",
      "A puppy, toy breed, senior dog, diabetic dog, or pregnant dog refuses food.",
      "Drooling, pawing at the mouth, swelling, or severe bad breath.",
      "No water intake or signs of dehydration.",
    ],
    ownerSteps: [
      "Check energy, gums, breathing, water intake, stool, urine, and pain.",
      "Look for ticks, mouth pain, broken teeth, swelling, or foreign objects if safe.",
      "Note recent diet changes, heat exposure, new medications, toxins, and stress.",
      "Phone your vet if your dog is unwell or misses more than one meal with other signs.",
    ],
    avoid: [
      "Do not force-feed a weak, vomiting, painful, or confused dog.",
      "Do not give human appetite stimulants or painkillers.",
      "Do not assume a picky appetite is behavioural when your dog seems ill.",
    ],
    callNow: [
      "Not eating with weakness, vomiting, diarrhoea, pain, pale gums, or collapse.",
      "A puppy, senior, diabetic, pregnant, or very small dog refuses food.",
      "Tick exposure, dark urine, jaundice, or fever is possible.",
    ],
    checklist: [
      "Last normal meal.",
      "Water intake.",
      "Energy and gum colour.",
      "Vomiting, diarrhoea, cough, pain, ticks, or heat exposure.",
      "Recent diet, medication, stress, or possible toxin access.",
    ],
    prevention: [
      "Keep tick prevention current.",
      "Avoid sudden diet changes.",
      "Schedule dental checks when breath or chewing changes.",
      "Store toxins and human medication securely.",
    ],
    faqs: [
      {
        question: "How long can a dog go without eating?",
        answer:
          "Do not use a fixed time rule. Puppies, small dogs, diabetic dogs, and dogs with other symptoms need veterinary advice quickly.",
      },
      {
        question: "Can heat make a dog eat less?",
        answer:
          "Yes, but heat can also become dangerous. If your dog is weak, panting heavily, vomiting, or acting abnormal, contact a vet.",
      },
      {
        question: "Should I change food if my dog refuses a meal?",
        answer:
          "Not repeatedly. Check for illness signs first and ask your vet if appetite loss continues or comes with other symptoms.",
      },
    ],
    related: [
      { title: "Biliary Tick Bite Fever", description: "Tick illness warning signs.", href: "/health/biliary-tick-bite-fever-dogs-south-africa" },
      { title: "Dog Bad Breath", description: "Dental pain and mouth warning signs.", href: "/health/dog-bad-breath-south-africa" },
      { title: "Heatstroke", description: "Hot weather emergency signs.", href: "/emergency/heatstroke-in-dogs-south-africa" },
    ],
    sources: parasiteSources,
  },
  {
    slug: "dog-coughing-south-africa",
    title: "Dog Coughing in South Africa: When It Is Serious",
    seoTitle: "Dog Coughing South Africa | When to Call a Vet",
    description:
      "A practical guide to dog coughing, possible causes, red flags, kennel cough context, breathing symptoms, and when vet care is urgent.",
    symptom: "coughing",
    urgentSummary:
      "Call a vet urgently if coughing comes with breathing difficulty, blue or pale gums, collapse, severe weakness, bloated abdomen, or coughing after choking or smoke exposure.",
    context:
      "Coughing can be linked to infectious respiratory disease, heart disease, airway irritation, smoke, dust, grass seeds, collapsing trachea, kennel exposure, or foreign material. South African dogs may face dust, veld smoke, coastal humidity, kennel environments, and travel between dog parks, groomers, and boarding facilities.",
    causes: [
      "Infectious cough after kennels, grooming, parks, or dog events.",
      "Heart or lung disease, especially with exercise intolerance.",
      "Dust, smoke, grass seeds, allergies, or airway irritation.",
      "Choking, foreign material, or throat irritation.",
      "Breed-related airway issues in flat-faced or small-breed dogs.",
    ],
    redFlags: [
      "Struggling to breathe, blue gums, or collapse.",
      "Coughing with weakness, fever, not eating, or fast breathing.",
      "Coughing after choking, smoke exposure, or suspected foreign object.",
      "Night coughing, exercise intolerance, or swollen belly.",
      "Puppies, senior dogs, or dogs with heart disease coughing repeatedly.",
    ],
    ownerSteps: [
      "Keep your dog calm and avoid exercise until advised.",
      "Separate your dog from other dogs if infectious cough is possible.",
      "Note when coughing happens: night, exercise, excitement, eating, or after walks.",
      "Phone a vet if coughing is repeated, worsening, or paired with any red flag.",
    ],
    avoid: [
      "Do not give human cough medicine.",
      "Do not force exercise to test the cough.",
      "Do not ignore breathing difficulty or blue gums.",
    ],
    callNow: [
      "Breathing difficulty, blue gums, collapse, or severe weakness.",
      "Coughing after choking, smoke inhalation, or foreign object concern.",
      "Coughing with fever, not eating, fast breathing, or known heart disease.",
    ],
    checklist: [
      "Cough sound and frequency.",
      "Breathing rate and effort.",
      "Gum colour.",
      "Recent kennel, groomer, park, or travel exposure.",
      "Exercise tolerance, appetite, and energy.",
    ],
    prevention: [
      "Keep vaccines current and ask your vet about respiratory disease risk for boarding.",
      "Avoid smoky, dusty, or very hot exercise conditions.",
      "Use a harness if collars worsen coughing in your dog.",
      "Keep grass seed checks part of post-walk care.",
    ],
    faqs: [
      {
        question: "Is kennel cough always mild?",
        answer:
          "No. Many dogs recover well with veterinary guidance, but puppies, seniors, and dogs with breathing or heart problems need more caution.",
      },
      {
        question: "Can I give cough syrup to my dog?",
        answer:
          "No. Do not give human cough medicine unless a veterinarian prescribes it.",
      },
      {
        question: "When is coughing an emergency?",
        answer:
          "Breathing difficulty, blue gums, collapse, choking, or severe weakness are emergency signs.",
      },
    ],
    related: [
      { title: "When to Take Your Dog to the Vet", description: "Urgent breathing and cough signs.", href: "/health/when-to-take-your-dog-to-the-vet-south-africa" },
      { title: "Heatstroke", description: "Panting and collapse in hot weather.", href: "/emergency/heatstroke-in-dogs-south-africa" },
      { title: "Dog-Friendly Places", description: "Safer public outings with dogs.", href: "/dog-friendly/dog-friendly-places-south-africa" },
    ],
  },
  {
    slug: "dog-scratching-and-itchy-skin-south-africa",
    title: "Dog Scratching and Itchy Skin in South Africa",
    seoTitle: "Dog Scratching and Itchy Skin South Africa | Causes and Vet Signs",
    description:
      "A South African guide to itchy dogs, possible causes, fleas, ticks, allergies, infections, red flags, prevention, and when to see a vet.",
    symptom: "itchy skin",
    urgentSummary:
      "Book a vet visit if scratching is intense, skin is red, bleeding, smelly, painful, hair is falling out, ears are involved, or your dog seems unwell.",
    context:
      "Itchy skin can be linked to fleas, ticks, mites, allergies, grass exposure, humidity, dry inland weather, food reactions, infections, or grooming products. South African dogs may flare after beach trips, dusty walks, spring grasses, flea season, or missed parasite prevention.",
    causes: [
      "Fleas, ticks, mites, or insect bites.",
      "Environmental allergies from grasses, pollens, dust, or mould.",
      "Skin infection, hot spots, or yeast overgrowth.",
      "Food allergy or sensitivity, less commonly than owners assume.",
      "Contact irritation from shampoos, plants, sand, or cleaning products.",
    ],
    redFlags: [
      "Open sores, bleeding, pus, swelling, or bad smell.",
      "Severe scratching, chewing, or self-injury.",
      "Ear pain, head shaking, or discharge.",
      "Hair loss, thickened skin, or widespread redness.",
      "Lethargy, fever, appetite loss, or pain.",
    ],
    ownerSteps: [
      "Check for fleas, flea dirt, ticks, grass seeds, redness, and wounds.",
      "Review parasite prevention and recent grooming products.",
      "Prevent chewing trauma with vet advice if skin is damaged.",
      "Book a vet visit if itch is persistent, severe, or skin looks infected.",
    ],
    avoid: [
      "Do not use human creams, essential oils, or leftover antibiotics.",
      "Do not use dog shampoos repeatedly without knowing the cause.",
      "Do not assume every itch is food allergy without veterinary assessment.",
    ],
    callNow: [
      "Swelling of the face, hives, breathing trouble, or collapse after a reaction.",
      "Skin is painful, infected-looking, bleeding, or rapidly worsening.",
      "Your dog cannot settle, is self-injuring, or seems unwell.",
    ],
    checklist: [
      "Where the itch is worst.",
      "Fleas, ticks, flea dirt, or grass seeds found.",
      "Recent foods, shampoos, bedding, walks, beaches, or gardens.",
      "Ear signs, smell, redness, hair loss, or wounds.",
      "Parasite prevention date and product name.",
    ],
    prevention: [
      "Use vet-advised tick and flea prevention year-round where needed.",
      "Rinse sand or irritants after beach visits if your vet agrees.",
      "Dry ears and skin folds carefully after swimming or bathing.",
      "Keep grooming products gentle and dog-appropriate.",
    ],
    faqs: [
      {
        question: "Does scratching always mean fleas?",
        answer:
          "No. Fleas are common, but allergies, mites, infections, grass irritation, and other problems can also cause itch.",
      },
      {
        question: "Can I use human allergy medicine?",
        answer:
          "Do not give human medication unless your vet tells you to.",
      },
      {
        question: "When is itchy skin urgent?",
        answer:
          "Facial swelling, breathing trouble, severe self-injury, painful infected skin, or a dog that seems unwell needs prompt veterinary help.",
      },
    ],
    related: [
      { title: "Ticks and Fleas", description: "Parasite prevention and checks.", href: "/health/ticks-and-fleas-dogs-south-africa" },
      { title: "Dog Ear Infection Signs", description: "Ear itch and head shaking.", href: "/health/dog-ear-infection-signs-south-africa" },
      { title: "Dog Grooming", description: "Coat and skin care basics.", href: "/grooming/dog-grooming-south-africa" },
    ],
    sources: eyeEarSkinSources,
  },
  {
    slug: "dog-ear-infection-signs-south-africa",
    title: "Dog Ear Infection Signs in South Africa",
    seoTitle: "Dog Ear Infection Signs South Africa | When to See a Vet",
    description:
      "A practical guide to dog ear infection signs, head shaking, smell, discharge, pain, grass seeds, allergies, and when vet care is needed.",
    symptom: "ear signs",
    urgentSummary:
      "See a vet if your dog has ear pain, head shaking, bad smell, discharge, swelling, bleeding, balance problems, or a sudden head tilt.",
    context:
      "Ear problems can follow allergies, swimming, humidity, grass seeds, mites, wax build-up, or infection. Dogs in coastal areas, dogs with floppy ears, and dogs that swim or visit grassy parks may need extra ear checks.",
    causes: [
      "Allergies and recurring skin inflammation.",
      "Moisture after swimming, bathing, or humid weather.",
      "Grass seeds or foreign material in the ear canal.",
      "Ear mites, wax, yeast, bacteria, or injury.",
      "Underlying skin disease or ear shape that traps moisture.",
    ],
    redFlags: [
      "Pain, crying, or not allowing the ear to be touched.",
      "Bad smell, discharge, swelling, bleeding, or redness.",
      "Head tilt, wobbliness, eye flicking, or balance problems.",
      "Sudden severe head shaking after a grassy walk.",
      "Repeated ear infections or itch elsewhere on the body.",
    ],
    ownerSteps: [
      "Look at the outer ear without pushing anything into the canal.",
      "Note smell, discharge, redness, swelling, and head shaking.",
      "Book a vet visit because ears often need examination before treatment.",
      "Mention swimming, grooming, allergies, and grass exposure.",
    ],
    avoid: [
      "Do not put cotton buds down the ear canal.",
      "Do not use leftover ear drops from another dog or old infection.",
      "Do not pour home mixtures, oils, or peroxide into the ear.",
    ],
    callNow: [
      "Head tilt, balance problems, severe pain, bleeding, or swelling.",
      "A grass seed or foreign body is suspected.",
      "Your dog is lethargic, feverish, or the ear is rapidly worsening.",
    ],
    checklist: [
      "Which ear is affected.",
      "Smell, discharge colour, swelling, or redness.",
      "Head shaking, scratching, pain, or balance change.",
      "Swimming, grooming, grass, or allergy history.",
      "Previous ear medication used.",
    ],
    prevention: [
      "Check ears after grass walks and beach days.",
      "Dry visible outer ear areas gently after swimming if advised.",
      "Manage allergies with a vet rather than repeated cleaning.",
      "Ask groomers not to pluck or clean deeply without veterinary guidance.",
    ],
    faqs: [
      {
        question: "Can I clean my dog's sore ear at home?",
        answer:
          "If the ear is painful, smelly, swollen, or discharging, see a vet first. Cleaning the wrong way can hurt or worsen problems.",
      },
      {
        question: "Can grass seeds get into dog ears?",
        answer:
          "Yes. Sudden head shaking or pain after grassy walks should be checked by a vet.",
      },
      {
        question: "Are ear infections contagious?",
        answer:
          "Many are not directly contagious, but mites and shared underlying issues can occur. Your vet can identify the cause.",
      },
    ],
    related: [
      { title: "Itchy Skin", description: "Allergies, fleas, and skin signs.", href: "/health/dog-scratching-and-itchy-skin-south-africa" },
      { title: "Dog Grooming", description: "Ear and coat care basics.", href: "/grooming/dog-grooming-south-africa" },
      { title: "Choose a Groomer", description: "Safe grooming questions.", href: "/grooming/how-to-choose-a-dog-groomer-south-africa" },
    ],
    sources: eyeEarSkinSources,
  },
  {
    slug: "dog-limping-south-africa",
    title: "Dog Limping in South Africa: When to Call a Vet",
    seoTitle: "Dog Limping South Africa | Injury and Vet Warning Signs",
    description:
      "A practical guide to dog limping, possible causes, red flags, owner observations, grass seeds, tick illness, injuries, and when same-day vet care is needed.",
    symptom: "limping",
    urgentSummary:
      "Call a vet the same day if your dog cannot bear weight, is in severe pain, has swelling, a wound, fever, weakness, paralysis signs, or limping after a fall, fight, or car incident.",
    context:
      "Limping can follow torn nails, paw cuts, grass seeds, sprains, fractures, tick-borne illness, joint disease, hip or knee problems, bites, or back pain. South African dogs may injure paws on hot paving, thorns, beaches, hikes, farms, or city traffic.",
    causes: [
      "Paw pad cuts, thorns, grass seeds, broken nails, or burns from hot surfaces.",
      "Sprains, strains, ligament injuries, or fractures.",
      "Arthritis, hip or knee problems, or growth-related pain.",
      "Bites, abscesses, or tick-borne illness causing pain or weakness.",
      "Back, neck, or nerve problems.",
    ],
    redFlags: [
      "Cannot put weight on the leg.",
      "Severe pain, swelling, deformity, bleeding, or open wound.",
      "Dragging feet, wobbliness, paralysis signs, or back pain.",
      "Limping after being hit, falling, fighting, or rough play.",
      "Fever, lethargy, tick exposure, or multiple sore legs.",
    ],
    ownerSteps: [
      "Rest your dog and prevent running or jumping.",
      "Check paws for thorns, cuts, hot-pavement burns, or broken nails if safe.",
      "Phone a vet for severe, sudden, or persistent limping.",
      "Use videos to show the gait if the limp comes and goes.",
    ],
    avoid: [
      "Do not give human painkillers.",
      "Do not force your dog to walk to test the leg.",
      "Do not pull deeply embedded objects from wounds without vet advice.",
    ],
    callNow: [
      "No weight-bearing, severe pain, deformity, swelling, or open wound.",
      "Back pain, dragging feet, wobbliness, or paralysis signs.",
      "Limping with fever, tick exposure, collapse, or marked weakness.",
    ],
    checklist: [
      "Which leg and when it started.",
      "Weight-bearing or not.",
      "Paw pads, nails, swelling, wounds, or heat.",
      "Recent fall, fight, hike, beach, or hot pavement.",
      "Tick exposure, fever, appetite, and energy.",
    ],
    prevention: [
      "Avoid hot pavement in summer.",
      "Check paws after hikes, beaches, and grassy parks.",
      "Keep nails trimmed safely.",
      "Build exercise gradually instead of sudden weekend overload.",
    ],
    faqs: [
      {
        question: "Can I give my dog paracetamol or ibuprofen for limping?",
        answer:
          "No. Human painkillers can be dangerous for dogs. Ask a vet for safe pain control.",
      },
      {
        question: "Is limping after rest always arthritis?",
        answer:
          "No. Arthritis is one possibility, but injuries, paw problems, tick illness, and other causes can look similar.",
      },
      {
        question: "When is limping urgent?",
        answer:
          "No weight-bearing, severe pain, swelling, wounds, back signs, paralysis signs, or trauma should be checked urgently.",
      },
    ],
    related: [
      { title: "Biliary Tick Bite Fever", description: "Tick-related illness warning signs.", href: "/health/biliary-tick-bite-fever-dogs-south-africa" },
      { title: "Hiking With Dogs", description: "Safer trails and paw checks.", href: "/dog-friendly/hiking-with-dogs-south-africa" },
      { title: "Dog Nail Clipping", description: "Nail care and grooming safety.", href: "/grooming/dog-nail-clipping-south-africa" },
    ],
    sources: parasiteSources,
  },
  {
    slug: "dog-eye-discharge-south-africa",
    title: "Dog Eye Discharge in South Africa",
    seoTitle: "Dog Eye Discharge South Africa | Vet Warning Signs",
    description:
      "A practical guide to dog eye discharge, redness, squinting, injury, dust, allergies, grass seeds, and when eye symptoms need urgent vet care.",
    symptom: "eye discharge",
    urgentSummary:
      "Eye pain, squinting, cloudiness, injury, swelling, sudden vision change, or thick yellow-green discharge should be checked by a vet promptly.",
    context:
      "Eye discharge can follow dust, coastal wind, allergies, infection, scratches, grass seeds, dry eye, eyelid problems, or injury. Eye issues can worsen quickly, and dogs cannot tell you when vision is affected.",
    causes: [
      "Dust, wind, pollen, smoke, or mild irritation.",
      "Allergies or tear staining.",
      "Infection, dry eye, eyelid problems, or blocked tear drainage.",
      "Scratch, ulcer, grass seed, or foreign material.",
      "Trauma from play, fights, branches, or car windows.",
    ],
    redFlags: [
      "Squinting, pawing at the eye, or obvious pain.",
      "Cloudy eye, blue haze, blood, swelling, or sudden change.",
      "Thick yellow-green discharge or the eyelids stuck together.",
      "Possible scratch, grass seed, or injury.",
      "Vision changes or bumping into things.",
    ],
    ownerSteps: [
      "Prevent rubbing or scratching where possible.",
      "Note colour, thickness, one eye or both, and any injury risk.",
      "Book a vet visit promptly for pain, cloudiness, swelling, or thick discharge.",
      "Take a photo if the sign comes and goes.",
    ],
    avoid: [
      "Do not use human eye drops.",
      "Do not use old pet eye medication without a vet exam.",
      "Do not delay painful eye problems because ulcers can worsen quickly.",
    ],
    callNow: [
      "Squinting, pain, cloudiness, swelling, blood, or injury.",
      "A grass seed, thorn, scratch, or fight injury is possible.",
      "Your dog cannot open the eye or seems to have vision loss.",
    ],
    checklist: [
      "One eye or both.",
      "Discharge colour and thickness.",
      "Squinting, rubbing, swelling, or cloudiness.",
      "Recent dust, beach, grass, grooming, or injury.",
      "Vision or behaviour changes.",
    ],
    prevention: [
      "Check eyes after dusty walks, beach wind, and grassy outings.",
      "Avoid letting dogs hang heads out of moving car windows.",
      "Trim facial hair safely if it irritates eyes, using a groomer where needed.",
      "Seek early vet care for recurring eye problems.",
    ],
    faqs: [
      {
        question: "Is clear eye discharge normal?",
        answer:
          "A small amount can be normal for some dogs, but redness, pain, cloudiness, thick discharge, or sudden changes need a vet.",
      },
      {
        question: "Can I rinse my dog's eye?",
        answer:
          "Ask your vet if the eye is painful or injured. Do not use medicated drops unless prescribed.",
      },
      {
        question: "Are eye problems urgent?",
        answer:
          "Painful or injured eyes can be urgent because damage may worsen quickly. Phone a vet.",
      },
    ],
    related: [
      { title: "Dog-Friendly Beaches", description: "Wind, sand, and salt-water outing care.", href: "/dog-friendly/dog-friendly-beaches-south-africa" },
      { title: "Dog Grooming", description: "Face, coat, and eye-area care.", href: "/grooming/dog-grooming-south-africa" },
      { title: "When to Take Your Dog to the Vet", description: "Urgent symptom guide.", href: "/health/when-to-take-your-dog-to-the-vet-south-africa" },
    ],
    sources: eyeEarSkinSources,
  },
  {
    slug: "dog-worms-south-africa",
    title: "Dog Worms in South Africa: Signs and Vet Guidance",
    seoTitle: "Dog Worms South Africa | Signs, Prevention, and Vet Advice",
    description:
      "A practical South African guide to dog worms, possible signs, puppies, stool changes, prevention, owner hygiene, and when to see a vet.",
    symptom: "worms",
    urgentSummary:
      "Contact a vet promptly if a puppy has diarrhoea, vomiting, a swollen belly, weakness, pale gums, weight loss, or visible worms.",
    context:
      "Worm risks vary with age, environment, flea exposure, hunting, scavenging, parks, shelters, and deworming history. Puppies and newly adopted dogs need particular care because parasites can affect growth and hydration.",
    causes: [
      "Roundworms, hookworms, tapeworms, whipworms, or mixed parasite burdens.",
      "Flea exposure linked to some tapeworm infections.",
      "Contaminated soil, stools, parks, kennels, or shelter environments.",
      "Scavenging, hunting, or eating infected intermediate hosts.",
      "Incomplete or unknown deworming history.",
    ],
    redFlags: [
      "Puppy diarrhoea, vomiting, weakness, or swollen belly.",
      "Pale gums, weight loss, poor growth, or severe lethargy.",
      "Blood in stool or black stool.",
      "Repeated scooting, visible worms, or rice-like segments.",
      "Multiple pets affected or human hygiene concerns.",
    ],
    ownerSteps: [
      "Collect a fresh stool sample if your vet requests it.",
      "Note deworming dates, product names, and flea prevention.",
      "Clean stools promptly and wash hands after handling.",
      "Ask your vet for an age- and weight-appropriate parasite plan.",
    ],
    avoid: [
      "Do not guess deworming doses.",
      "Do not use livestock products or old products without vet advice.",
      "Do not ignore worms in puppies or dogs losing weight.",
    ],
    callNow: [
      "A puppy is weak, vomiting, bloated, or has diarrhoea.",
      "Pale gums, blood in stool, collapse, or severe weight loss occurs.",
      "You are unsure what product is safe for your dog's age or weight.",
    ],
    checklist: [
      "Dog age and weight.",
      "Visible worms or segments.",
      "Stool changes and vomiting.",
      "Deworming and flea prevention dates.",
      "Other pets or children in the household.",
    ],
    prevention: [
      "Follow a vet-advised deworming schedule.",
      "Control fleas as part of tapeworm prevention.",
      "Pick up stools quickly at home and in public spaces.",
      "Wash hands after garden, kennel, or stool contact.",
    ],
    faqs: [
      {
        question: "Can I buy any dewormer for my dog?",
        answer:
          "Ask your vet or pharmacist for guidance based on age, weight, pregnancy status, and likely parasite risk.",
      },
      {
        question: "Can worms affect people?",
        answer:
          "Some parasites can be a human hygiene concern. Pick up stools, wash hands, and ask your vet for household guidance.",
      },
      {
        question: "Why does my dog still have worms after deworming?",
        answer:
          "Wrong product, reinfection, fleas, incorrect weight, or a different parasite may be involved. Contact your vet.",
      },
    ],
    related: [
      { title: "Dog Diarrhoea", description: "When stool changes need a vet.", href: "/health/dog-diarrhea-south-africa" },
      { title: "Ticks and Fleas", description: "Parasite prevention basics.", href: "/health/ticks-and-fleas-dogs-south-africa" },
      { title: "Puppy Health", description: "Vaccines and prevention planning.", href: "/health/vaccination-schedule-south-africa" },
    ],
    sources: parasiteSources,
  },
  {
    slug: "dog-bad-breath-south-africa",
    title: "Dog Bad Breath in South Africa: Dental Warning Signs",
    seoTitle: "Dog Bad Breath South Africa | Dental Signs and Vet Advice",
    description:
      "A practical guide to bad breath in dogs, dental disease signs, mouth pain, red flags, prevention, and when to book a vet visit.",
    symptom: "bad breath",
    urgentSummary:
      "Book a vet visit if bad breath is strong, sudden, paired with drooling, bleeding, swelling, loose teeth, pain, not eating, or weight loss.",
    context:
      "Bad breath is often joked about, but it can signal dental disease, gum infection, mouth injury, foreign material, kidney or metabolic illness, or diet-related issues. Many South African dogs only get dental attention once pain affects eating.",
    causes: [
      "Plaque, tartar, gingivitis, or periodontal disease.",
      "Broken teeth, retained baby teeth, mouth wounds, or foreign material.",
      "Oral infection, masses, or ulcers.",
      "Diet, scavenging, or eating faeces.",
      "Internal illness in some cases, especially if breath changes suddenly.",
    ],
    redFlags: [
      "Drooling, pawing at the mouth, or crying when chewing.",
      "Bleeding gums, swelling, loose teeth, or facial swelling.",
      "Not eating, dropping food, chewing on one side, or weight loss.",
      "Sudden foul breath with vomiting, drinking more, or lethargy.",
      "Puppy tooth problems or retained baby teeth.",
    ],
    ownerSteps: [
      "Look at the mouth only if your dog is calm and safe to handle.",
      "Book a vet dental check for persistent bad breath.",
      "Mention appetite, chewing changes, drooling, and weight loss.",
      "Ask your vet about safe tooth brushing and dental prevention.",
    ],
    avoid: [
      "Do not use human toothpaste.",
      "Do not give hard bones to clean teeth.",
      "Do not ignore mouth pain because dogs may keep eating despite dental disease.",
    ],
    callNow: [
      "Facial swelling, bleeding, severe pain, or not eating.",
      "Bad breath with vomiting, weakness, drinking lots of water, or weight loss.",
      "A broken tooth, lodged object, or mouth injury is suspected.",
    ],
    checklist: [
      "When breath changed.",
      "Drooling, bleeding, swelling, or pain.",
      "Eating, chewing, and weight changes.",
      "Tooth brushing or dental chew history.",
      "Vomiting, thirst, urination, or lethargy.",
    ],
    prevention: [
      "Ask your vet about dental checks during annual visits.",
      "Use dog-safe tooth brushing if your dog tolerates it.",
      "Choose dental products with veterinary guidance.",
      "Avoid cooked bones and very hard chews that can break teeth.",
    ],
    faqs: [
      {
        question: "Is bad breath normal in dogs?",
        answer:
          "Mild dog breath can happen, but strong, persistent, sudden, or painful bad breath should be checked.",
      },
      {
        question: "Can bones clean my dog's teeth?",
        answer:
          "Bones can break teeth or injure the gut. Ask your vet for safer dental options.",
      },
      {
        question: "Does bad breath mean my dog needs a dental?",
        answer:
          "Possibly. A vet exam is needed to assess teeth, gums, pain, and whether cleaning or treatment is appropriate.",
      },
    ],
    related: [
      { title: "Dog Not Eating", description: "Appetite loss and mouth pain.", href: "/health/dog-not-eating-south-africa" },
      { title: "Can Dogs Eat Cooked Bones?", description: "Bone and tooth injury risks.", href: "/food/can-dogs-eat-cooked-bones" },
      { title: "Vet Costs", description: "Budgeting for veterinary care.", href: "/costs/vet-costs-for-dogs-south-africa" },
    ],
    sources: coreSymptomSources,
  },
  {
    slug: "dog-drinking-lots-of-water-south-africa",
    title: "Dog Drinking Lots of Water in South Africa",
    seoTitle: "Dog Drinking Lots of Water South Africa | Vet Warning Signs",
    description:
      "A practical guide to dogs drinking more water, heat, diet, diabetes, kidney concerns, warning signs, and when same-day vet care is needed.",
    symptom: "drinking lots of water",
    urgentSummary:
      "Call a vet the same day if increased drinking is sudden, extreme, paired with vomiting, weight loss, weakness, not eating, accidents, or changes in urination.",
    context:
      "Dogs may drink more after hot weather, exercise, salty food, dry food changes, or panting. But increased thirst can also be linked to diabetes, kidney disease, infection, medication effects, hormonal disease, fever, poisoning, or dehydration.",
    causes: [
      "Heat, exercise, panting, dry food, salty snacks, or lactation.",
      "Vomiting, diarrhoea, fever, dehydration, or infection.",
      "Diabetes, kidney disease, liver disease, or hormonal problems.",
      "Medication effects, if your dog is already under veterinary care.",
      "Toxin exposure or internal illness.",
    ],
    redFlags: [
      "Drinking much more and urinating more.",
      "Weight loss despite eating, or not eating.",
      "Vomiting, diarrhoea, weakness, collapse, or fever.",
      "House accidents, straining to urinate, or blood in urine.",
      "Sudden extreme thirst after possible toxin exposure.",
    ],
    ownerSteps: [
      "Measure water intake for 24 hours if your dog is otherwise stable.",
      "Note urination frequency, accidents, appetite, weight, and energy.",
      "Check for heat exposure, salty foods, medication changes, or vomiting.",
      "Book a vet exam and urine or blood testing if thirst is persistent or paired with red flags.",
    ],
    avoid: [
      "Do not restrict water unless a vet tells you to.",
      "Do not assume heat is the cause if thirst continues.",
      "Do not ignore weight loss or urination changes.",
    ],
    callNow: [
      "Extreme thirst with vomiting, weakness, collapse, or not eating.",
      "Straining to urinate, blood in urine, or repeated accidents.",
      "Weight loss, increased appetite, or dehydration signs.",
    ],
    checklist: [
      "Approximate water intake.",
      "Urination frequency and accidents.",
      "Appetite and weight changes.",
      "Vomiting, diarrhoea, fever, or lethargy.",
      "Heat, diet, salt, medication, or toxin exposure.",
    ],
    prevention: [
      "Provide shade and clean water in hot weather.",
      "Avoid salty snacks such as biltong and braai leftovers.",
      "Keep annual vet checks, especially for senior dogs.",
      "Track weight and body condition regularly.",
    ],
    faqs: [
      {
        question: "Can hot South African weather make dogs drink more?",
        answer:
          "Yes, but thirst that is sudden, extreme, persistent, or paired with illness signs should be checked by a vet.",
      },
      {
        question: "Should I limit water if my dog drinks too much?",
        answer:
          "No. Do not restrict water unless your vet gives specific instructions.",
      },
      {
        question: "Can increased thirst mean diabetes?",
        answer:
          "It can be one possible cause, but it is not the only one. A vet needs to examine and test your dog.",
      },
    ],
    related: [
      { title: "Dog Weight Loss", description: "Weight and thirst warning signs.", href: "/health/dog-weight-loss-south-africa" },
      { title: "Can Dogs Eat Biltong?", description: "Salt and snack risks.", href: "/food/can-dogs-eat-biltong" },
      { title: "Heatstroke", description: "Heat danger signs.", href: "/emergency/heatstroke-in-dogs-south-africa" },
    ],
    sources: nutritionSources,
  },
  {
    slug: "dog-weight-loss-south-africa",
    title: "Dog Weight Loss in South Africa: When to See a Vet",
    seoTitle: "Dog Weight Loss South Africa | Causes and Vet Warning Signs",
    description:
      "A practical guide to dog weight loss, possible causes, red flags, body condition, parasites, dental disease, and when to contact a vet.",
    symptom: "weight loss",
    urgentSummary:
      "Book a vet visit if your dog is losing weight without a planned diet, especially with increased thirst, vomiting, diarrhoea, coughing, weakness, bad breath, or appetite changes.",
    context:
      "Weight loss can be slow and easy to miss under a thick coat. Causes can include parasites, dental pain, poor diet fit, increased exercise, stress, diabetes, kidney disease, cancer, chronic infection, heart disease, or tick-borne illness.",
    causes: [
      "Not eating enough, poor diet fit, or feeding competition in multi-dog homes.",
      "Worms, fleas, chronic diarrhoea, or malabsorption.",
      "Dental disease or mouth pain.",
      "Diabetes, kidney disease, liver disease, cancer, or chronic infection.",
      "Stress, anxiety, heat, or increased activity without more calories.",
    ],
    redFlags: [
      "Weight loss with increased thirst or urination.",
      "Weight loss with vomiting, diarrhoea, coughing, or breathing changes.",
      "Weakness, pale gums, fever, tick exposure, or not eating.",
      "Bad breath, drooling, or chewing difficulty.",
      "Senior dog losing weight without a clear reason.",
    ],
    ownerSteps: [
      "Weigh your dog or take body photos every two weeks.",
      "Check food amount, appetite, stool, thirst, urination, and energy.",
      "Review deworming, flea control, dental signs, and tick exposure.",
      "Book a vet exam for unexplained or ongoing weight loss.",
    ],
    avoid: [
      "Do not simply add rich food without knowing the cause.",
      "Do not ignore weight loss because your dog still eats.",
      "Do not use supplements or human medicines instead of a vet exam.",
    ],
    callNow: [
      "Rapid weight loss, weakness, collapse, not eating, or dehydration.",
      "Weight loss with vomiting, diarrhoea, coughing, increased thirst, or pale gums.",
      "A puppy, senior dog, or chronically ill dog is losing weight.",
    ],
    checklist: [
      "Current and previous weight if available.",
      "Food type and measured daily amount.",
      "Appetite, thirst, urination, stool, vomiting, or cough.",
      "Dental signs, parasite control, and tick exposure.",
      "Stress, new dog, travel, or activity changes.",
    ],
    prevention: [
      "Use body condition checks, not just visual guesses.",
      "Measure food and treats.",
      "Keep parasite prevention and deworming current with vet advice.",
      "Book routine vet checks for seniors and chronic conditions.",
    ],
    faqs: [
      {
        question: "Can worms cause weight loss?",
        answer:
          "Yes, parasites are one possible cause. A vet can advise on testing and appropriate treatment.",
      },
      {
        question: "What if my dog is eating but losing weight?",
        answer:
          "That should be checked. Increased appetite with weight loss can happen with several medical problems.",
      },
      {
        question: "How do I know if my dog is too thin?",
        answer:
          "Use a body condition discussion with your vet. Ribs, waist, muscle, coat, and breed shape all matter.",
      },
    ],
    related: [
      { title: "Dog Worms", description: "Parasites and weight loss.", href: "/health/dog-worms-south-africa" },
      { title: "Dog Bad Breath", description: "Dental pain and appetite changes.", href: "/health/dog-bad-breath-south-africa" },
      { title: "Dog Food Labels", description: "Feeding guides and diet fit.", href: "/food/how-to-read-dog-food-labels-south-africa" },
    ],
    sources: nutritionSources,
  },
];

function symptomGuideToPage(guide: SymptomGuide): GuideContent {
  return {
    slug: guide.slug,
    path: `/health/${guide.slug}`,
    hubTitle: "Dog Health",
    hubPath: "/health",
    title: guide.title,
    seoTitle: guide.seoTitle,
    description: guide.description,
    intro: `${guide.urgentSummary} This guide is educational and helps South African dog owners prepare better questions for a veterinarian.`,
    updated: reviewed,
    isHealthGuide: true,
    quickFacts: [
      `Urgent summary: ${guide.urgentSummary}`,
      "This page does not diagnose your dog. Similar symptoms can have many different causes.",
      "Phone a veterinarian sooner if symptoms are severe, worsening, repeated, or affect a puppy, senior dog, pregnant dog, or chronically ill dog.",
      "Do not give human medication, old pet medication, antibiotics, or painkillers unless your vet instructs you.",
    ],
    sections: [
      {
        heading: "South African context",
        body: [
          guide.context,
          "Access to emergency vets varies by province and city. Save your regular vet and nearest after-hours option before you need them, especially if you travel with your dog.",
        ],
      },
      {
        heading: "Common possible causes",
        body: [
          `There is no single cause of ${guide.symptom}. The points below are possibilities to discuss with your vet, not a diagnosis.`,
        ],
        table: {
          headers: ["Possible cause area", "Why it may matter"],
          rows: guide.causes.map((cause) => [cause, "Your vet may use history, examination, and tests to narrow this down."]),
        },
      },
      {
        heading: "Red flag symptoms",
        body: [
          "Red flags mean the situation may need urgent or same-day veterinary care. If you are unsure, phone a vet and describe exactly what you see.",
        ],
        bullets: guide.redFlags,
      },
      {
        heading: "What owners should do",
        body: [
          "Good observations help your vet triage your dog. Keep notes factual and avoid trying to treat the symptom before you understand the cause.",
        ],
        checklist: guide.ownerSteps,
      },
      {
        heading: "What owners should not do",
        body: [
          "Dogs can be harmed by well-meaning home treatment, especially human medication, old prescriptions, and internet remedies.",
        ],
        bullets: guide.avoid,
      },
      {
        heading: "When to call a vet immediately",
        body: [
          "Use these signs as a call-now list. If you live far from emergency care, phone while arranging transport.",
        ],
        checklist: guide.callNow,
      },
      {
        heading: "Practical observation checklist",
        body: [
          "Write these details down or take photos where useful. Clear information can make the vet call calmer and more accurate.",
        ],
        checklist: guide.checklist,
      },
      {
        heading: "Prevention tips",
        body: [
          "Not every symptom is preventable, but good routines reduce risk and help you notice changes earlier.",
        ],
        bullets: guide.prevention,
      },
    ],
    faqs: guide.faqs,
    related: [...guide.related, ...commonRelated],
    sources: guide.sources ?? coreSymptomSources,
  };
}

export const phase10HealthCards: CardLink[] = symptomGuides.map((guide) => ({
  title: guide.title.replace(" in South Africa", "").replace(": When to Call a Vet", "").replace(": When It Needs a Vet", ""),
  description: guide.description,
  href: `/health/${guide.slug}`,
}));

export const phase10EmergencyCards: CardLink[] = [
  {
    title: "Dog Vomiting",
    description: "Repeated vomiting, poisoning risk, bloating, weakness, and puppy warning signs.",
    href: "/health/dog-vomiting-south-africa",
  },
  {
    title: "Dog Diarrhoea",
    description: "Bloody diarrhoea, puppy risk, dehydration, and when same-day vet care is needed.",
    href: "/health/dog-diarrhea-south-africa",
  },
  {
    title: "Dog Coughing",
    description: "Breathing difficulty, blue gums, collapse, and serious cough warning signs.",
    href: "/health/dog-coughing-south-africa",
  },
  {
    title: "Dog Limping",
    description: "No weight-bearing, trauma, severe pain, swelling, and urgent mobility signs.",
    href: "/health/dog-limping-south-africa",
  },
];

export const phase10GuidePages: GuideContent[] = symptomGuides.map(symptomGuideToPage);

export function getPhase10Guide(slug: string) {
  return phase10GuidePages.find((guide) => guide.slug === slug);
}

export function getPhase10GuidesByHub(hubPath: string) {
  return phase10GuidePages.filter((guide) => guide.hubPath === hubPath);
}
