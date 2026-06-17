import type { CardLink, GuideContent, Source } from "@/lib/content";

type SymptomTopic = {
  slug: string;
  title: string;
  seoTitle: string;
  description: string;
  intro: string;
  quickFacts: string[];
  overview: string[];
  causes: string[];
  southAfrica: string[];
  callNow: string[];
  checkBeforeCall: string[];
  avoid: string[];
  vetQuestions: string[];
  faqs: GuideContent["faqs"];
  related: CardLink[];
  sources?: Source[];
};

const reviewed = "2026-06-17";

const coreSources: Source[] = [
  {
    label: "South African Veterinary Council",
    href: "https://savc.org.za/",
    note: "South African veterinary professional context for registered veterinary care.",
  },
  {
    label: "South African Veterinary Association",
    href: "https://www.sava.co.za/",
    note: "South African veterinary context for responsible pet health and timely veterinary care.",
  },
  {
    label: "VCA Animal Hospitals - Common emergencies in dogs",
    href: "https://vcahospitals.com/know-your-pet/common-emergencies-in-dogs",
    note: "Veterinary guidance on warning signs such as repeated vomiting, diarrhoea, breathing difficulty, weakness, and collapse.",
  },
  {
    label: "Merck Veterinary Manual - Stomach and intestine disorders in dogs",
    href: "https://www.merckvetmanual.com/dog-owners/digestive-disorders-of-dogs/disorders-of-the-stomach-and-intestines-in-dogs",
    note: "Veterinary reference for digestive warning signs, dehydration, obstruction concerns, and veterinary assessment.",
  },
  {
    label: "Merck Veterinary Manual - Canine parvovirus",
    href: "https://www.merckvetmanual.com/digestive-system/infectious-diseases-of-the-gastrointestinal-tract-in-small-animals/canine-parvovirus-infection-parvoviral-enteritis-in-dogs",
    note: "Veterinary reference for parvovirus signs such as lethargy, appetite loss, vomiting, and diarrhoea.",
  },
];

const seizureSources: Source[] = [
  {
    label: "VCA Animal Hospitals - Seizures in dogs",
    href: "https://vcahospitals.com/know-your-pet/seizures-general-for-dogs",
    note: "Veterinary overview of seizures, post-seizure behaviour, and why veterinary assessment matters.",
  },
  {
    label: "VCA Animal Hospitals - Seizures and syncope",
    href: "https://vcahospitals.com/know-your-pet/seizures-and-syncope",
    note: "Veterinary context for seizure-like episodes and fainting-like events.",
  },
  ...coreSources,
];

const commonRelated: CardLink[] = [
  { title: "Find a Vet", description: "How to choose veterinary help without fake clinic listings.", href: "/health/find-a-vet-south-africa" },
  { title: "Emergency Hub", description: "Urgent warning signs and emergency planning.", href: "/emergency" },
  { title: "Vet Visit Checklist", description: "Free checklist for symptoms, questions, records, and next steps.", href: "/tools/vet-visit-checklist" },
  { title: "Vet Costs", description: "Understand vet cost factors without fake prices.", href: "/costs/vet-costs-for-dogs-south-africa" },
  { title: "Pet Insurance", description: "Neutral guidance on cover, waiting periods, exclusions, and claims.", href: "/insurance" },
];

const educationalFacts = [
  "This guide is educational and not a diagnosis. Your vet can confirm the cause.",
  "Do not delay emergency care for severe, repeated, painful, or fast-worsening symptoms.",
  "Do not give human medication, old prescriptions, antibiotics, painkillers, or home remedies unless your vet specifically tells you to.",
];

const topics: SymptomTopic[] = [
  {
    slug: "dog-diarrhoea-south-africa",
    title: "Dog Diarrhoea in South Africa: When to Call a Vet",
    seoTitle: "Dog Diarrhoea South Africa | Vet Warning Signs and What to Check",
    description:
      "A South African guide to dog diarrhoea, including blood, puppies, dehydration, parvo risk, parasites, diet changes, and when to call a vet urgently.",
    intro:
      "Dog diarrhoea can be mild, but it can also become serious quickly, especially in puppies, small dogs, senior dogs, and dogs that are vomiting too. This guide helps South African owners decide what to observe, what to tell the vet, and when not to wait.",
    quickFacts: [
      ...educationalFacts,
      "Blood, repeated watery diarrhoea, vomiting, weakness, pale gums, severe pain, or a young puppy with diarrhoea should be treated as urgent.",
      "Possible causes can include diet change, parasites, infection, parvovirus, toxins, stress, foreign material, or underlying disease.",
    ],
    overview: [
      "Diarrhoea means loose, watery, unusually frequent, or abnormal stools. The colour, amount, smell, blood, mucus, and your dog's energy level all matter.",
      "A single loose stool in an otherwise bright adult dog is different from repeated diarrhoea with vomiting, collapse, pain, or puppy parvo risk. When in doubt, phone a vet and describe exactly what you are seeing.",
    ],
    causes: [
      "Sudden food change, rich scraps, spoiled food, or scavenging.",
      "Worms, other parasites, or flea-related tapeworm exposure.",
      "Viral or bacterial infections, including parvovirus in unvaccinated or partly vaccinated puppies.",
      "Toxins, medication exposure, foreign material, or gut obstruction.",
      "Stress, travel, boarding, daycare, or a change in routine.",
      "Longer-term gut, liver, pancreas, immune, or metabolic problems that need veterinary testing.",
    ],
    southAfrica: [
      "Parvovirus remains an important risk for puppies and dogs with incomplete vaccination records. Bloody diarrhoea, vomiting, lethargy, or refusal to eat needs urgent advice.",
      "Ticks, fleas, worms, hot weather, unsafe scraps, and garden toxins can all complicate stomach signs in South African homes.",
      "If you live far from after-hours care, phone early rather than waiting until your dog is weak or dehydrated.",
    ],
    callNow: [
      "Your puppy has diarrhoea, especially with vomiting, weakness, or not eating.",
      "There is blood, black stool, severe watery diarrhoea, repeated diarrhoea, or signs of dehydration.",
      "Your dog is vomiting too, has a swollen or painful belly, collapses, has pale gums, or seems very weak.",
      "Poisoning, bones, rubbish, medication, or foreign objects may be involved.",
      "Your dog is senior, pregnant, tiny, brachycephalic, or has another medical condition.",
    ],
    checkBeforeCall: [
      "When the diarrhoea started and how many times it happened.",
      "Colour, blood, mucus, smell, and whether the stool is watery or just soft.",
      "Whether your dog is vomiting, drinking, urinating, eating, or acting weak.",
      "Recent food changes, treats, bones, bin access, boarding, daycare, travel, or deworming.",
      "Vaccination status, especially for puppies or newly adopted dogs.",
    ],
    avoid: [
      "Do not give human anti-diarrhoea medicine unless your vet specifically instructs you.",
      "Do not wait at home if a puppy, weak dog, or dog with blood in the stool is getting worse.",
      "Do not assume it is only food if there is vomiting, pain, fever, dehydration, or parvo risk.",
      "Do not visit dog parks, puppy classes, daycare, or grooming while infectious disease is possible.",
    ],
    vetQuestions: [
      "Should my dog be seen today based on age, symptoms, and vaccination status?",
      "Do you need a fresh stool sample or photos of the stool?",
      "Could parvo, parasites, poison, or obstruction be a concern?",
      "What signs mean I should go straight to emergency care?",
      "How should I clean the home or yard if infection is possible?",
    ],
    faqs: [
      {
        question: "Is dog diarrhoea always an emergency?",
        answer:
          "No, but diarrhoea can become urgent with puppies, blood, repeated watery stools, vomiting, weakness, pale gums, pain, dehydration, or suspected poisoning.",
      },
      {
        question: "Can I give my dog human diarrhoea medicine?",
        answer:
          "Do not give human medication unless your vet specifically tells you to. Some products can be unsafe or can hide a serious problem.",
      },
      {
        question: "Should I worry about parvo?",
        answer:
          "Yes if the dog is a puppy, unvaccinated, partly vaccinated, newly adopted, vomiting, weak, not eating, or has bloody diarrhoea. Call a vet urgently.",
      },
    ],
    related: [
      { title: "Parvovirus in Dogs", description: "South African parvo warning signs and urgent next steps.", href: "/emergency/parvovirus-in-dogs-south-africa" },
      { title: "Dog Vomiting", description: "When vomiting and diarrhoea together become urgent.", href: "/health/dog-vomiting-south-africa" },
      { title: "Dog Poisoning", description: "What to do when toxins, bait, or household products may be involved.", href: "/emergency/dog-poisoning-south-africa" },
      ...commonRelated,
    ],
  },
  {
    slug: "dog-ear-infection-south-africa",
    title: "Dog Ear Infection Signs in South Africa",
    seoTitle: "Dog Ear Infection South Africa | Signs, Vet Care and What Not to Do",
    description:
      "Learn the signs of possible dog ear infection in South Africa, including shaking, smell, discharge, pain, allergies, swimming, grass seeds, and when to call a vet.",
    intro:
      "Ear discomfort can make a dog miserable. Shaking, scratching, smell, redness, discharge, pain, or a head tilt should not be guessed at, because the right next step depends on what your vet finds inside the ear.",
    quickFacts: [
      ...educationalFacts,
      "Possible ear problems can involve infection, allergies, mites, grass seeds, wax, swimming irritation, or injury.",
      "A painful ear, head tilt, swelling, blood, severe smell, repeated shaking, or loss of balance needs prompt veterinary advice.",
    ],
    overview: [
      "Dog ear problems often start with head shaking, scratching, rubbing the head, a bad smell, redness, waxy discharge, or touch sensitivity.",
      "The ear canal is delicate. A product that seems harmless can hurt if the eardrum is damaged or if the cause is not what you think it is.",
    ],
    causes: [
      "Allergies, including environmental triggers, fleas, or food sensitivity discussions.",
      "Yeast or bacterial overgrowth that needs veterinary confirmation.",
      "Grass seeds, sand, dust, water after swimming, or grooming-related irritation.",
      "Ear mites, especially in young dogs or multi-pet homes.",
      "Heavy or floppy ears, narrow ear canals, or chronic skin disease.",
    ],
    southAfrica: [
      "Grass seeds, dust, beach trips, swimming pools, and humid coastal weather can all irritate ears or make early signs easier to miss.",
      "Dogs with itchy skin, flea exposure, or repeat ear issues should be assessed as a whole dog, not just treated ear-by-ear.",
      "If you are far from your usual vet, phone before putting anything into the ear.",
    ],
    callNow: [
      "Your dog cries, snaps, or pulls away when the ear is touched.",
      "There is a head tilt, loss of balance, facial droop, bleeding, swelling, or severe pain.",
      "The ear smells bad, has pus-like discharge, or the dog is repeatedly shaking and scratching.",
      "A grass seed, bite, injury, or foreign object may be involved.",
      "The problem is recurring or not improving after previous vet care.",
    ],
    checkBeforeCall: [
      "Which ear is affected, or whether both ears look abnormal.",
      "Whether there is smell, redness, swelling, discharge, blood, or wax.",
      "Recent swimming, grooming, grass walks, allergies, fleas, or skin flare-ups.",
      "Whether there is a head tilt, balance problems, or pain.",
      "Any previous ear medication or cleaning product used.",
    ],
    avoid: [
      "Do not put random ear drops, oils, vinegar, peroxide, or leftover medication into the ear.",
      "Do not push cotton buds deep into the ear canal.",
      "Do not delay care if your dog is painful, off-balance, or repeatedly shaking the head.",
      "Do not assume all ear smell is the same cause; your vet may need to examine the ear.",
    ],
    vetQuestions: [
      "Does the ear need an examination or ear swab before treatment?",
      "Could allergies, fleas, skin disease, or swimming be contributing?",
      "Is the eardrum safe for cleaning or drops?",
      "How should I clean the ear safely, if cleaning is appropriate?",
      "What signs mean the ear needs urgent recheck?",
    ],
    faqs: [
      {
        question: "Can I clean my dog's sore ear at home?",
        answer:
          "Ask a vet first if the ear is painful, smelly, swollen, bleeding, or there is a head tilt. Cleaning the wrong way can worsen pain or injury.",
      },
      {
        question: "Why do dog ear problems keep coming back?",
        answer:
          "Possible reasons include allergies, fleas, ear shape, swimming, incomplete treatment, foreign material, or chronic skin disease. A vet can investigate.",
      },
      {
        question: "Is an ear infection urgent?",
        answer:
          "It can be, especially with pain, head tilt, balance problems, swelling, blood, severe smell, or repeated shaking. Call your vet promptly.",
      },
    ],
    related: [
      { title: "Dog Ear Infection Signs", description: "Related warning signs and routine care questions.", href: "/health/dog-ear-infection-signs-south-africa" },
      { title: "Dog Skin Allergies", description: "Allergy and skin context for recurring ear problems.", href: "/health/dog-skin-allergies-south-africa" },
      { title: "Ticks and Fleas", description: "Parasite prevention and skin irritation context.", href: "/health/ticks-and-fleas-dogs-south-africa" },
      ...commonRelated,
    ],
  },
  {
    slug: "dog-eye-problems-south-africa",
    title: "Dog Eye Problems in South Africa: Warning Signs",
    seoTitle: "Dog Eye Problems South Africa | Redness, Discharge and Vet Warning Signs",
    description:
      "A practical South African guide to dog eye problems, including redness, discharge, squinting, injury, grass seeds, pain, and when to call a vet urgently.",
    intro:
      "Eye problems can worsen quickly. Redness, squinting, pawing, cloudiness, discharge, swelling, or a visible injury should be taken seriously because eyes are painful and delicate.",
    quickFacts: [
      ...educationalFacts,
      "A closed eye, severe squinting, cloudiness, injury, swelling, sudden vision change, or chemical exposure needs urgent veterinary advice.",
      "Possible causes can include irritation, infection, dry eye, allergies, grass seeds, scratches, ulcers, trauma, or pressure problems.",
    ],
    overview: [
      "Dog eye signs include tearing, yellow or green discharge, redness, swelling, blinking, rubbing, light sensitivity, cloudiness, or one eye looking different from the other.",
      "The goal is not to identify the exact condition at home. The goal is to notice urgency and avoid doing anything that could damage the eye further.",
    ],
    causes: [
      "Dust, wind, sand, grass seeds, pollen, or smoke irritation.",
      "Scratches, ulcers, bites, or blunt trauma.",
      "Infection, dry eye, eyelid problems, allergies, or tear duct issues.",
      "Breed-related eye exposure in some flat-faced dogs.",
      "Less common but serious pressure, nerve, or internal eye disease.",
    ],
    southAfrica: [
      "Beach sand, dry inland dust, grass seeds, garden plants, and brachycephalic breed eye exposure are common practical considerations.",
      "Dogs travelling in bakkies or leaning into wind from car windows can be exposed to debris; secure travel is safer.",
      "If after-hours care is far away, phone early when an eye is closed, blue, cloudy, or obviously painful.",
    ],
    callNow: [
      "The eye is closed, very painful, cloudy, blue, bleeding, swollen, or bulging.",
      "Your dog is pawing at the eye or cannot stop rubbing it.",
      "There was trauma, a cat scratch, a bite, a thorn, chemical exposure, or grass seed concern.",
      "Vision seems suddenly reduced or your dog bumps into things.",
      "A puppy, senior dog, or flat-faced breed has fast-worsening eye signs.",
    ],
    checkBeforeCall: [
      "Which eye is affected and when you first noticed it.",
      "Whether there is discharge, cloudiness, swelling, squinting, or rubbing.",
      "Any recent beach, grass, dust, grooming, play fight, fall, or car travel exposure.",
      "Whether your dog seems able to see normally.",
      "Photos taken in good light, without forcing the eye open.",
    ],
    avoid: [
      "Do not use human eye drops unless your vet specifically advises it.",
      "Do not use old eye medication from another pet or previous problem.",
      "Do not force the eyelids open if your dog is painful.",
      "Do not wait to see if a closed, cloudy, injured, or very painful eye improves by itself.",
    ],
    vetQuestions: [
      "Should the eye be examined today?",
      "Could a scratch, ulcer, foreign body, or pressure problem be involved?",
      "Is an Elizabethan collar needed to stop rubbing before the appointment?",
      "What should I do if the eye worsens while travelling?",
      "How should I protect the eye without applying medication?",
    ],
    faqs: [
      {
        question: "Is dog eye discharge always serious?",
        answer:
          "Not always, but yellow or green discharge, pain, redness, swelling, cloudiness, injury, or a closed eye needs veterinary advice.",
      },
      {
        question: "Can I use human eye drops for my dog?",
        answer:
          "Do not use human eye drops unless your vet specifically tells you to. The wrong product can be unsafe or delay urgent treatment.",
      },
      {
        question: "Why is my dog squinting one eye?",
        answer:
          "Possible causes include irritation, scratch, ulcer, foreign material, infection, pressure problems, or trauma. A vet should assess painful squinting.",
      },
    ],
    related: [
      { title: "Dog Eye Discharge", description: "More detail on discharge, colour, and warning signs.", href: "/health/dog-eye-discharge-south-africa" },
      { title: "Dog Scratching and Itchy Skin", description: "Allergy and irritation context.", href: "/health/dog-scratching-and-itchy-skin-south-africa" },
      { title: "Find a Vet", description: "How to choose a veterinary practice in your area.", href: "/health/find-a-vet-south-africa" },
      ...commonRelated,
    ],
  },
  {
    slug: "dog-drinking-a-lot-of-water-south-africa",
    title: "Dog Drinking a Lot of Water in South Africa",
    seoTitle: "Dog Drinking a Lot of Water South Africa | Causes and Vet Warning Signs",
    description:
      "Understand why a dog may drink more water, what to observe, South African heat considerations, and when increased thirst needs a vet.",
    intro:
      "A dog may drink more after heat, exercise, salty food, or a routine change, but ongoing increased thirst can also be a sign that a vet should investigate. This guide helps you record useful details without guessing the diagnosis.",
    quickFacts: [
      ...educationalFacts,
      "Do not restrict water from a thirsty dog unless a vet gives a specific instruction.",
      "Increased thirst with vomiting, weakness, weight loss, frequent urination, collapse, or fast breathing needs prompt veterinary advice.",
    ],
    overview: [
      "Increased drinking means your dog is returning to the bowl more often, emptying bowls faster, waking to drink, or urinating more than usual.",
      "Your vet may need history, urine testing, blood tests, medication history, and a physical exam to understand the cause.",
    ],
    causes: [
      "Hot weather, exercise, salty treats, dry food change, or less shade.",
      "Medication side effects that your vet should review.",
      "Urinary tract, kidney, liver, hormone, diabetes, or other internal health concerns.",
      "Fever, pain, dehydration, vomiting, diarrhoea, or infection.",
      "Behavioural changes or stress, though medical causes should be considered first when thirst changes.",
    ],
    southAfrica: [
      "Summer heat, hot paving, outdoor kennels, beach days, hikes, and load-shedding disruptions to fans or shade can increase water needs.",
      "Tick-borne disease, infections, and other illnesses may also change energy, appetite, gums, temperature, or urine patterns.",
      "If increased thirst continues beyond an obvious hot day or is paired with other symptoms, book a vet check.",
    ],
    callNow: [
      "Your dog is drinking a lot and vomiting, collapsing, breathing fast, weak, confused, or not eating.",
      "There is straining to urinate, blood in urine, no urine, or repeated accidents.",
      "Your dog has weight loss, a swollen belly, pale gums, fever signs, or severe lethargy.",
      "A puppy, senior dog, pregnant dog, or dog with known disease is affected.",
      "Heatstroke or poisoning could be involved.",
    ],
    checkBeforeCall: [
      "How much water your dog drinks in a day, if you can measure it safely.",
      "Whether urination has increased, accidents started, or urine colour changed.",
      "Appetite, weight, vomiting, diarrhoea, energy, breathing, and gum colour.",
      "Weather, exercise, diet, salty foods, medication, supplements, or recent vet treatments.",
      "Whether other pets share the bowl, making intake hard to judge.",
    ],
    avoid: [
      "Do not take water away from a thirsty dog without veterinary instruction.",
      "Do not assume heat is the only cause if thirst continues or other symptoms appear.",
      "Do not stop prescribed medication without speaking to the prescribing vet.",
      "Do not delay a vet call if your dog cannot urinate, is weak, or seems very unwell.",
    ],
    vetQuestions: [
      "Should I measure daily water intake before the appointment?",
      "Should I bring a urine sample, and how fresh should it be?",
      "Could medication, diet, heat, or internal disease be contributing?",
      "What signs mean this becomes urgent before the appointment?",
      "What routine tests may help identify the cause?",
    ],
    faqs: [
      {
        question: "Is drinking more water normal in hot South African weather?",
        answer:
          "It can be normal after heat or exercise, but ongoing increased thirst, more urination, vomiting, weight loss, weakness, or appetite change should be discussed with a vet.",
      },
      {
        question: "Should I limit my dog's water?",
        answer:
          "No, not unless your vet gives a specific instruction. Restricting water can be dangerous.",
      },
      {
        question: "Can thirst be linked to diabetes or kidney disease?",
        answer:
          "Possible causes can include diabetes, kidney disease, hormone problems, medication effects, infection, and many other issues. Your vet can test for the cause.",
      },
    ],
    related: [
      { title: "Dog Drinking Lots of Water", description: "Related guide on thirst, urine changes, and vet timing.", href: "/health/dog-drinking-lots-of-water-south-africa" },
      { title: "Heatstroke in Dogs", description: "Hot-weather emergency signs and planning.", href: "/emergency/heatstroke-in-dogs-south-africa" },
      { title: "Routine Vet Checkups", description: "Planning routine care and early health checks.", href: "/health/routine-vet-checkup-for-dogs-south-africa" },
      ...commonRelated,
    ],
  },
  {
    slug: "dog-lethargic-south-africa",
    title: "Dog Lethargic in South Africa: When It Needs a Vet",
    seoTitle: "Dog Lethargic South Africa | Warning Signs and Vet Decision Guide",
    description:
      "A practical South African guide to dog lethargy, possible causes, emergency warning signs, ticks, heat, parvo, poisoning, and what to tell the vet.",
    intro:
      "A tired dog after a busy day is one thing. A lethargic dog who is unusually quiet, weak, withdrawn, wobbly, not eating, breathing oddly, or getting worse needs closer attention.",
    quickFacts: [
      ...educationalFacts,
      "Lethargy is a symptom, not a diagnosis. Possible causes can include pain, fever, infection, tick-borne illness, heat stress, poisoning, parvo, heart or breathing problems, and many other conditions.",
      "Collapse, pale gums, breathing difficulty, repeated vomiting, seizures, severe pain, bloat signs, or suspected poisoning are emergencies.",
    ],
    overview: [
      "Lethargy can look like unusual sleepiness, weakness, reluctance to move, poor interest in food, hiding, slow response, or not greeting normally.",
      "The key question is whether this is mild tiredness with a clear reason or a change that is unusual for your dog, especially with other symptoms.",
    ],
    causes: [
      "Heat, dehydration, overexertion, pain, injury, or stress.",
      "Tick-borne disease such as biliary, especially with pale gums, fever signs, weakness, or dark urine.",
      "Parvovirus, kennel cough complications, infections, parasites, or fever.",
      "Poisoning, snake bite, medication exposure, or garden toxin exposure.",
      "Heart, breathing, hormone, kidney, liver, or other internal disease.",
    ],
    southAfrica: [
      "Biliary and other tick-borne concerns matter in many parts of South Africa, especially when lethargy appears with pale gums, fever, weakness, or appetite loss.",
      "High summer temperatures can turn mild tiredness into heat stress, especially for flat-faced breeds, overweight dogs, puppies, and seniors.",
      "Two-step poisoning, snake bites, and parvo are not everyday causes of lethargy, but they are important not to miss when other warning signs fit.",
    ],
    callNow: [
      "Your dog collapses, cannot stand, has pale or blue gums, or is struggling to breathe.",
      "There is repeated vomiting, bloody diarrhoea, seizures, severe pain, swelling, or bloat-like retching.",
      "Poisoning, snake bite, heatstroke, or tick-borne disease could be involved.",
      "A puppy is lethargic, not eating, vomiting, or has diarrhoea.",
      "Lethargy is worsening quickly or feels very unusual for your dog.",
    ],
    checkBeforeCall: [
      "When your dog last seemed normal and what changed.",
      "Eating, drinking, vomiting, stool, urine, breathing, gum colour, and temperature if safely known.",
      "Recent ticks, heat exposure, strenuous activity, new medication, toxins, food changes, or injuries.",
      "Whether your dog can stand, walk, respond, and settle normally.",
      "Vaccination status and age, especially for puppies or rescue dogs.",
    ],
    avoid: [
      "Do not force exercise to see if your dog perks up.",
      "Do not give human painkillers, fever medicine, or old antibiotics.",
      "Do not wait at home if lethargy comes with pale gums, breathing trouble, vomiting, diarrhoea, collapse, seizures, or severe pain.",
      "Do not assume lethargy is just age in a senior dog; sudden changes deserve a vet call.",
    ],
    vetQuestions: [
      "Does this sound like an emergency based on the other symptoms?",
      "Could ticks, heat, poisoning, parvo, or pain be involved?",
      "Should I check gums, breathing rate, or temperature before travelling?",
      "Should I bring vaccine records, medication labels, or photos of possible toxins?",
      "What should I watch for on the way to the clinic?",
    ],
    faqs: [
      {
        question: "When is lethargy in a dog urgent?",
        answer:
          "It is urgent with collapse, breathing difficulty, pale gums, repeated vomiting, diarrhoea, seizures, severe pain, poisoning concern, heatstroke signs, or fast worsening.",
      },
      {
        question: "Can ticks make a dog lethargic?",
        answer:
          "Yes, tick-borne illness is one possible cause. Lethargy with pale gums, fever signs, weakness, appetite loss, or dark urine should be discussed with a vet promptly.",
      },
      {
        question: "Should I let my lethargic dog sleep it off?",
        answer:
          "Not if the lethargy is severe, unusual, worsening, or paired with other symptoms. Phone a vet for triage instead of guessing.",
      },
    ],
    related: [
      { title: "Biliary Tick Bite Fever", description: "South African tick-borne warning signs.", href: "/health/biliary-tick-bite-fever-dogs-south-africa" },
      { title: "Heatstroke in Dogs", description: "Urgent hot-weather symptoms and prevention.", href: "/emergency/heatstroke-in-dogs-south-africa" },
      { title: "Parvovirus in Dogs", description: "Puppy lethargy, vomiting, diarrhoea, and emergency care.", href: "/emergency/parvovirus-in-dogs-south-africa" },
      ...commonRelated,
    ],
  },
  {
    slug: "dog-breathing-fast-south-africa",
    title: "Dog Breathing Fast in South Africa: Emergency Signs",
    seoTitle: "Dog Breathing Fast South Africa | Emergency Warning Signs",
    description:
      "A South African dog-owner guide to fast breathing, panting, heat, pain, bloat, poisoning, flat-faced breeds, and when to contact a vet urgently.",
    intro:
      "Fast breathing can happen after exercise or heat, but it can also signal pain, heatstroke, breathing disease, heart problems, poisoning, bloat, or shock. Breathing trouble is one symptom where it is safer to call early.",
    quickFacts: [
      ...educationalFacts,
      "Breathing difficulty, blue or pale gums, collapse, noisy breathing, severe distress, or fast breathing at rest should be treated as urgent.",
      "Flat-faced breeds, puppies, seniors, overweight dogs, and dogs in high heat can deteriorate quickly.",
    ],
    overview: [
      "Fast breathing may look like rapid chest movement, heavy panting, open-mouth breathing, noisy breathing, belly effort, restlessness, or inability to settle.",
      "Panting after a walk is not the same as fast breathing at rest, but owners should not delay when breathing looks strained or abnormal.",
    ],
    causes: [
      "Heat, exercise, anxiety, pain, fever, or dehydration.",
      "Heatstroke, poisoning, snake bite, bloat, shock, or trauma.",
      "Airway disease, kennel cough complications, pneumonia, heart disease, or fluid around the lungs.",
      "Brachycephalic airway problems in flat-faced breeds.",
      "Anaemia or tick-borne disease where the body struggles to deliver oxygen.",
    ],
    southAfrica: [
      "Hot cars, hot paving, humid coastal days, inland heatwaves, and load-shedding disruptions to cooling can make panting more dangerous.",
      "Flat-faced breeds such as Bulldogs, Pugs, and some Boxers need extra caution in heat and stress.",
      "Snake bite, poisoning, biliary, and heatstroke can all include weakness or breathing changes; phone a vet urgently if suspected.",
    ],
    callNow: [
      "Your dog is breathing fast at rest and cannot settle.",
      "Gums are blue, grey, very pale, or brick red, or your dog collapses.",
      "There is noisy breathing, choking, severe coughing, belly effort, or open-mouth breathing that seems abnormal.",
      "Heatstroke, snake bite, poisoning, trauma, bloat, or severe pain could be involved.",
      "A flat-faced breed, puppy, senior, or overweight dog is struggling in heat.",
    ],
    checkBeforeCall: [
      "Whether breathing is fast at rest or only after exercise.",
      "Gum colour, collapse, weakness, cough, vomiting, belly swelling, or retching.",
      "Recent heat exposure, car travel, exertion, toxins, snake encounter, or injury.",
      "Breed, age, weight, and any known heart, airway, or tick-borne history.",
      "If safe, count breaths for 30 seconds while resting and double it.",
    ],
    avoid: [
      "Do not force your dog to lie down if breathing is difficult.",
      "Do not put your hands in the mouth unless you can clearly and safely remove a visible object.",
      "Do not use ice baths or extreme cooling for suspected heatstroke; phone a vet for safe cooling advice while travelling.",
      "Do not wait overnight with laboured breathing.",
    ],
    vetQuestions: [
      "Should I come in immediately based on the breathing pattern?",
      "How should I keep my dog cool and calm while travelling?",
      "Could heatstroke, bloat, poisoning, snake bite, or heart disease be involved?",
      "What gum colour or breathing changes mean emergency care right now?",
      "Should I send a short video before travelling, if the clinic allows it?",
    ],
    faqs: [
      {
        question: "Is fast breathing after exercise normal?",
        answer:
          "Panting after exercise can be normal, but fast breathing at rest, distress, blue or pale gums, collapse, heatstroke signs, or noisy breathing needs urgent veterinary advice.",
      },
      {
        question: "Are flat-faced dogs at higher risk?",
        answer:
          "Some flat-faced dogs can struggle more with heat, stress, and airway effort. Breathing changes in these dogs should be taken seriously.",
      },
      {
        question: "Should I cool my dog if heatstroke is possible?",
        answer:
          "Move to shade, offer small amounts of water if alert, and phone a vet urgently for safe cooling and transport advice. Do not delay emergency care.",
      },
    ],
    related: [
      { title: "Heatstroke in Dogs", description: "Emergency heat signs and safe next steps.", href: "/emergency/heatstroke-in-dogs-south-africa" },
      { title: "Bloat in Dogs", description: "Retching, swollen belly, distress, and emergency action.", href: "/emergency/bloat-in-dogs-south-africa" },
      { title: "Snake Bites", description: "Urgent snake bite warning signs and what not to do.", href: "/emergency/snake-bites-in-dogs-south-africa" },
      ...commonRelated,
    ],
  },
  {
    slug: "dog-seizures-south-africa",
    title: "Dog Seizures in South Africa: What to Do and When It Is Urgent",
    seoTitle: "Dog Seizures South Africa | Emergency Signs and Vet Questions",
    description:
      "A calm South African guide to dog seizures, what to observe, what not to do, poisoning and heat concerns, and when to seek urgent veterinary help.",
    intro:
      "Seeing a dog have a seizure is frightening. The safest goal is to keep your dog away from hazards, avoid putting anything in the mouth, time the episode, and contact a vet urgently when warning signs appear.",
    quickFacts: [
      ...educationalFacts,
      "A first seizure, repeated seizures, a seizure lasting several minutes, collapse, heatstroke signs, toxin exposure, or poor recovery needs urgent veterinary advice.",
      "Possible causes can include epilepsy, toxins, heatstroke, infections, low blood sugar, liver disease, brain disease, trauma, or other internal problems.",
    ],
    overview: [
      "A seizure may involve collapse, paddling, stiffening, twitching, drooling, urination, confusion, staring, or unusual behaviour before or after the episode.",
      "Some fainting or collapse events can look like seizures. A short video, if safe to take, can help your vet understand what happened.",
    ],
    causes: [
      "Epilepsy or seizure disorders that need veterinary diagnosis.",
      "Poisoning, including household toxins, garden toxins, bait, medication, or human food hazards.",
      "Heatstroke, low blood sugar, liver problems, kidney problems, or severe electrolyte changes.",
      "Infections, inflammation, trauma, brain disease, or complications after severe illness.",
      "Canine distemper or other preventable disease in unvaccinated dogs in some contexts.",
    ],
    southAfrica: [
      "Two-step poisoning concern, heat exposure, snake encounters, and garden or household toxins make context important when a dog seizures suddenly.",
      "Puppies, toy breeds, seniors, and dogs with known disease need fast triage because causes and risks differ.",
      "If your nearest emergency vet is far away, phone while arranging safe transport.",
    ],
    callNow: [
      "This is your dog's first seizure.",
      "The seizure lasts several minutes, repeats, or your dog does not recover normally.",
      "Poisoning, heatstroke, head trauma, snake bite, or medication exposure is possible.",
      "Your dog is a puppy, senior, pregnant, diabetic, very small, or already ill.",
      "Your dog has trouble breathing, pale or blue gums, severe weakness, or collapse after the seizure.",
    ],
    checkBeforeCall: [
      "Start and end time of the episode.",
      "What your dog did before, during, and after the episode.",
      "Any possible toxin, bait, medication, food, heat, trauma, or snake exposure.",
      "Vaccination status, age, known conditions, and current medications.",
      "A short video if safe, without getting close to the mouth.",
    ],
    avoid: [
      "Do not put your hand, fingers, spoon, or any object in your dog's mouth.",
      "Do not try to hold the tongue.",
      "Do not restrain your dog tightly during the seizure.",
      "Do not give medication or home remedies unless a vet specifically instructs you.",
      "Do not delay care after repeated, prolonged, first-time, or toxin-related seizures.",
    ],
    vetQuestions: [
      "Does this seizure pattern require emergency care now?",
      "Should I send a video or bring packaging from possible toxins?",
      "What should I do if another seizure happens while travelling?",
      "Could heat, poison, low blood sugar, infection, or vaccination gaps be relevant?",
      "What tests may help identify the cause?",
    ],
    faqs: [
      {
        question: "Should I put something in my dog's mouth during a seizure?",
        answer:
          "No. Do not put your hands or objects in the mouth. Move hazards away, keep the area safe, time the seizure, and contact a vet.",
      },
      {
        question: "Is one seizure always an emergency?",
        answer:
          "A first seizure should be discussed with a vet urgently. Repeated seizures, prolonged seizures, toxin exposure, heatstroke signs, or poor recovery are emergencies.",
      },
      {
        question: "Can poisoning cause seizures?",
        answer:
          "Yes, some toxins can cause seizures. If poisoning is possible, contact a vet or emergency clinic immediately and keep packaging or evidence for the vet.",
      },
    ],
    related: [
      { title: "Dog Poisoning", description: "Urgent poisoning guidance and what not to do.", href: "/emergency/dog-poisoning-south-africa" },
      { title: "Heatstroke in Dogs", description: "Heat-related emergency signs.", href: "/emergency/heatstroke-in-dogs-south-africa" },
      { title: "Rabies in South Africa", description: "Vaccination, exposure concerns, and emergency context.", href: "/emergency/rabies-south-africa" },
      ...commonRelated,
    ],
    sources: seizureSources,
  },
];

function topicToGuide(topic: SymptomTopic): GuideContent {
  return {
    slug: topic.slug,
    path: `/health/${topic.slug}`,
    hubTitle: "Dog Health",
    hubPath: "/health",
    title: topic.title,
    seoTitle: topic.seoTitle,
    description: topic.description,
    intro: topic.intro,
    updated: reviewed,
    isHealthGuide: true,
    quickFacts: topic.quickFacts,
    sections: [
      {
        heading: "Emergency warning",
        body: [
          "If your dog is collapsing, struggling to breathe, having seizures, has pale or blue gums, is in severe pain, has repeated vomiting or diarrhoea, shows bloat signs, has suspected poisoning, snake bite, heatstroke signs, or is getting worse quickly, contact a veterinarian urgently.",
        ],
      },
      {
        heading: "Symptom overview",
        body: topic.overview,
      },
      {
        heading: "Common possible causes",
        body: [
          "Possible causes can include the points below, but your vet can confirm what is actually happening. Similar symptoms can come from very different problems.",
        ],
        bullets: topic.causes,
      },
      {
        heading: "South Africa specific risks",
        body: topic.southAfrica,
      },
      {
        heading: "When to call a vet now",
        body: ["Use this as a call-now checklist. If you are unsure, phone a vet and describe the signs clearly."],
        checklist: topic.callNow,
      },
      {
        heading: "What to check before you call",
        body: ["These details help a vet triage your dog more accurately. Do not delay an emergency call to collect every detail."],
        checklist: topic.checkBeforeCall,
      },
      {
        heading: "What not to do",
        body: ["Well-meaning home treatment can make some symptoms worse or delay care."],
        bullets: topic.avoid,
      },
      {
        heading: "Questions your vet may ask",
        body: ["Having answers ready can make the call calmer and more useful."],
        checklist: topic.vetQuestions,
      },
    ],
    faqs: topic.faqs,
    related: topic.related,
    sources: topic.sources ?? coreSources,
  };
}

export const phase29HealthSymptomGuidePages: GuideContent[] = topics.map(topicToGuide);

export function getPhase29HealthSymptomGuide(slug: string) {
  return phase29HealthSymptomGuidePages.find((guide) => guide.slug === slug);
}

export function getPhase29HealthSymptomGuidesByHub(hubPath: string) {
  return phase29HealthSymptomGuidePages.filter((guide) => guide.hubPath === hubPath);
}

export const phase29HealthSymptomCards: CardLink[] = [
  {
    title: "Symptoms and Warning Signs",
    description: "New practical guides for diarrhoea, ear signs, eye problems, thirst, lethargy, breathing changes, and seizures.",
    href: "/health",
  },
  ...phase29HealthSymptomGuidePages.map((guide) => ({
    title: guide.title.replace(" in South Africa", "").replace(": When to Call a Vet", "").replace(": What to Do and When It Is Urgent", ""),
    description: guide.description,
    href: guide.path,
  })),
];
