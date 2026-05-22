import type { CardLink, GuideContent } from "@/lib/content";

export const phase3EmergencyCards: CardLink[] = [
  {
    title: "Dog Poisoning in South Africa",
    description:
      "What to do if your dog may have eaten poison, medication, bait, chemicals, toxic food, or a dangerous plant.",
    href: "/emergency/dog-poisoning-south-africa",
  },
  {
    title: "Snake Bites in Dogs",
    description:
      "South Africa-specific snakebite warning signs, what to do, what to avoid, and why fast veterinary care matters.",
    href: "/emergency/snake-bites-in-dogs-south-africa",
  },
  {
    title: "Heatstroke in Dogs",
    description:
      "A practical emergency guide for hot summers, cars, walks, beaches, brachycephalic breeds, and collapse risk.",
    href: "/emergency/heatstroke-in-dogs-south-africa",
  },
  {
    title: "Bloat in Dogs",
    description:
      "Emergency guidance for suspected bloat or gastric torsion, including warning signs and why vet care cannot wait.",
    href: "/emergency/bloat-in-dogs-south-africa",
  },
];

export const phase3HealthCards: CardLink[] = [
  {
    title: "Biliary Tick Bite Fever",
    description:
      "South African tick-borne illness guidance covering warning signs, vet care, prevention, and urgent symptoms.",
    href: "/health/biliary-tick-bite-fever-dogs-south-africa",
  },
  {
    title: "Ticks and Fleas",
    description:
      "Year-round tick and flea prevention, checks after walks, product safety, and when skin problems need a vet.",
    href: "/health/ticks-and-fleas-dogs-south-africa",
  },
  {
    title: "Toxic Foods",
    description:
      "Common household foods that can be dangerous for dogs, including chocolate, xylitol, grapes, onions, and alcohol.",
    href: "/health/toxic-foods-for-dogs-south-africa",
  },
  {
    title: "Toxic Plants",
    description:
      "Garden and houseplant risks for South African homes, with practical prevention and vet-call guidance.",
    href: "/health/toxic-plants-for-dogs-south-africa",
  },
  {
    title: "When to Take Your Dog to the Vet",
    description:
      "A calm decision guide for symptoms that can wait, symptoms to call about, and signs that need urgent care.",
    href: "/health/when-to-take-your-dog-to-the-vet-south-africa",
  },
];

export const phase3GuidePages: GuideContent[] = [
  {
    slug: "bloat-in-dogs-south-africa",
    path: "/emergency/bloat-in-dogs-south-africa",
    hubTitle: "Emergency Help",
    hubPath: "/emergency",
    title: "Bloat in Dogs in South Africa: Emergency Warning Signs",
    seoTitle: "Bloat in Dogs South Africa | Emergency Warning Signs",
    description:
      "A cautious South African emergency guide to suspected bloat or gastric torsion in dogs, covering warning signs, what to do, what to avoid, and why urgent vet care matters.",
    intro:
      "Bloat, sometimes discussed as gastric torsion or GDV, can become life-threatening very quickly. If your dog has a swollen or tight belly, repeated unproductive retching, severe restlessness, weakness, collapse, pale gums, or signs of intense pain, contact a veterinarian or emergency animal clinic immediately.",
    updated: "2026-05-22",
    isHealthGuide: true,
    quickFacts: [
      "Urgent summary: suspected bloat is an emergency. Phone a vet or emergency animal clinic immediately and prepare to travel.",
      "Do not wait to see whether the belly goes down, especially in deep-chested, large, giant, senior, or distressed dogs.",
      "Do not give food, water, human medication, painkillers, oil, or home remedies while deciding what to do.",
      "This guide is educational and does not diagnose your dog. A veterinarian needs to examine and treat suspected bloat.",
    ],
    sections: [
      {
        heading: "Why suspected bloat cannot wait",
        body: [
          "Bloat can involve gas expansion of the stomach and, in the most dangerous cases, twisting of the stomach. Owners cannot safely confirm the difference at home. A dog may deteriorate quickly, so the safest action is to phone a vet and follow urgent instructions.",
          "In South Africa, travel time can vary widely between suburbs, rural areas, farms, and after-hours clinics. Save your nearest emergency options before you need them, especially if you own a large or deep-chested breed.",
        ],
        table: {
          headers: ["Warning sign", "Why it matters"],
          rows: [
            ["Swollen or tight belly", "Can be a serious abdominal emergency and should be assessed urgently."],
            ["Repeated retching with little or nothing coming up", "A classic red flag owners often describe with suspected bloat."],
            ["Restlessness, pacing, or distress", "Pain and shock can develop quickly."],
            ["Pale gums, weakness, collapse, or fast breathing", "These can indicate a life-threatening emergency."],
          ],
        },
      },
      {
        heading: "What owners should do",
        body: [
          "Call your vet or the nearest emergency animal clinic immediately. Say that you are worried about bloat or gastric torsion, describe the belly, retching, gum colour, breathing, pain, and how long signs have been present.",
          "Prepare transport while you call. If possible, have another adult drive so someone can observe the dog. Bring vaccination records, medication details, and insurance information if it is easy to grab without delaying departure.",
        ],
        checklist: [
          "Phone a vet immediately.",
          "Describe belly swelling, retching, pain, gums, breathing, weakness, and timing.",
          "Keep your dog calm and avoid unnecessary handling.",
          "Prepare safe transport to the clinic the vet recommends.",
          "Take records only if doing so will not delay urgent care.",
        ],
      },
      {
        heading: "What not to do",
        body: [
          "Well-meant home actions can waste critical time or make a sick dog worse. The priority is veterinary assessment.",
        ],
        bullets: [
          "Do not wait overnight or monitor at home if bloat is possible.",
          "Do not try to make your dog vomit.",
          "Do not give human medication, painkillers, antacids, oil, milk, or home remedies.",
          "Do not force walking, food, or water.",
          "Do not rely on internet videos to decide whether the belly is swollen enough.",
        ],
      },
      {
        heading: "Dogs that may need extra planning",
        body: [
          "Any dog with concerning signs needs urgent care, but owners of larger, deep-chested, senior, anxious, or previously affected dogs should be especially prepared. Breed type does not rule bloat in or out.",
        ],
        checklist: [
          "Ask your vet whether your dog's size, shape, age, history, or feeding routine affects bloat risk.",
          "Save after-hours clinic details before weekends and holidays.",
          "Know how you would transport a large dog who cannot walk.",
          "Discuss feeding, exercise, and prevention questions with your vet during routine visits.",
        ],
      },
      {
        heading: "Prevention and planning questions",
        body: [
          "Not every emergency can be prevented, but owners can ask better questions before a crisis and avoid delaying urgent care when warning signs appear.",
        ],
        checklist: [
          "Should my dog have any special feeding or exercise precautions?",
          "What signs should make me call immediately?",
          "Which emergency clinic should I use after hours?",
          "Should I consider insurance or an emergency fund for urgent surgery or hospital care?",
          "What records should I keep easy to find?",
        ],
      },
    ],
    faqs: [
      {
        question: "Is bloat always an emergency?",
        answer:
          "Suspected bloat should be treated as an emergency because owners cannot safely tell at home whether the stomach has twisted or whether shock is developing.",
      },
      {
        question: "Can I wait if my dog is still standing?",
        answer:
          "No. Dogs with suspected bloat can worsen quickly. Phone a vet immediately even if your dog is still standing or walking.",
      },
      {
        question: "Can small dogs get bloat?",
        answer:
          "Large and deep-chested dogs are often discussed, but any dog with a swollen belly, retching, severe distress, weakness, or collapse should receive urgent veterinary attention.",
      },
    ],
    related: [
      { title: "Emergency Help", description: "Urgent symptoms and first steps.", href: "/emergency" },
      { title: "Dog Vomiting", description: "Repeated vomiting, retching, and same-day vet signs.", href: "/health/dog-vomiting-south-africa" },
      { title: "Emergency Vet Costs", description: "Budget planning without delaying urgent care.", href: "/costs/emergency-vet-costs-south-africa" },
      { title: "Vet Visit Checklist", description: "Information to keep ready for a vet call.", href: "/tools/vet-visit-checklist" },
      { title: "Compare Dog Insurance", description: "Neutral questions about emergency cover.", href: "/insurance/compare-dog-insurance-south-africa" },
    ],
    sources: [
      {
        label: "South African Veterinary Council",
        href: "https://savc.org.za/",
        note: "South African veterinary professional context.",
      },
      {
        label: "MSD Veterinary Manual",
        href: "https://www.msdvetmanual.com/",
        note: "Veterinary reference for gastric dilatation-volvulus and emergency dog health context.",
      },
      {
        label: "Cornell Richard P. Riney Canine Health Center",
        href: "https://www.vet.cornell.edu/departments-centers-and-institutes/riney-canine-health-center",
        note: "Veterinary education resource for dog emergency and health owner guidance.",
      },
    ],
  },
  {
    slug: "dog-poisoning-south-africa",
    path: "/emergency/dog-poisoning-south-africa",
    hubTitle: "Emergency Help",
    hubPath: "/emergency",
    title: "Dog Poisoning in South Africa: What Owners Should Do First",
    seoTitle: "Dog Poisoning South Africa | Symptoms and Emergency Steps",
    description:
      "A South Africa-specific dog poisoning guide covering warning signs, what to do, what not to do, prevention, and when to contact a vet immediately.",
    intro:
      "Poisoning can happen in ordinary South African homes: rat bait in a garage, human medication on a bedside table, slug pellets in a garden, chocolate at a braai, cannabis edibles, antifreeze, pesticides, or toxic plants. If you think your dog has eaten something dangerous, treat it as urgent and contact a veterinarian.",
    updated: "2026-05-13",
    isHealthGuide: true,
    quickFacts: [
      "Urgent summary: if poisoning is possible, phone a vet or emergency animal clinic immediately and do not wait for symptoms.",
      "Take the product packaging, plant sample, medication name, or a clear photo with you if it is safe to do so.",
      "Do not make your dog vomit, give milk, give oil, give charcoal, or use home remedies unless a veterinarian tells you to.",
      "Small dogs, puppies, senior dogs, and dogs with existing illness can deteriorate quickly after toxic exposure.",
    ],
    sections: [
      {
        heading: "Common poisoning risks in South African homes",
        body: [
          "The most useful first question is not whether the amount looked small. The useful question is: what exactly could your dog have eaten, when, and how much might be missing? Some toxins cause fast signs, while others look quiet at first and become serious later.",
          "South African homes may have seasonal pest products, pool chemicals, garden treatments, human medicines, cannabis products, chocolate, xylitol sweeteners, grapes or raisins, and traditional or herbal products within reach. Rural properties and smallholdings can add livestock medicines, dips, fertilisers, and old containers in sheds.",
        ],
        table: {
          headers: ["Possible toxin", "Why it matters"],
          rows: [
            ["Rat bait or pesticides", "Some products can affect bleeding, nerves, or organs and need fast veterinary assessment."],
            ["Human medicine", "Pain tablets, antidepressants, heart medication, and diabetes medication can be dangerous to dogs."],
            ["Chocolate or xylitol", "Chocolate can affect the heart and nervous system; xylitol can cause sudden low blood sugar and liver injury."],
            ["Grapes, raisins, or fruitcake", "Some dogs develop kidney injury after exposure, and early care matters."],
            ["Pool, cleaning, or garage chemicals", "Caustic or petroleum products can burn tissue or be aspirated if vomiting is induced."],
          ],
        },
      },
      {
        heading: "Warning signs of poisoning",
        body: [
          "Signs depend on the toxin and may be delayed. A dog can look normal soon after exposure and still need care. If you know or suspect ingestion, phone a vet even before symptoms appear.",
        ],
        bullets: [
          "Vomiting, diarrhoea, drooling, gagging, or mouth irritation.",
          "Weakness, wobbliness, tremors, seizures, collapse, or unusual sleepiness.",
          "Pale gums, bruising, bleeding, coughing blood, or blood in stool or urine.",
          "Fast breathing, trouble breathing, agitation, abnormal heart rate, or severe restlessness.",
          "Refusing food, repeated swallowing, abdominal pain, or sudden behaviour change.",
        ],
      },
      {
        heading: "What to do now",
        body: [
          "Move your dog away from the substance and prevent other pets from reaching it. Call your vet or the nearest emergency animal clinic. Say what was eaten, when it happened, your dog's size, current symptoms, and whether the dog has vomited.",
          "If safe, collect the label, packet, plant sample, or medication container. If your dog has a chemical on the coat or paws, ask the vet whether rinsing is appropriate before transport. Keep your dog calm and travel with another adult if possible.",
        ],
        checklist: [
          "Phone a vet immediately.",
          "Identify the substance and amount if possible.",
          "Keep packaging or a photo for the vet.",
          "Keep your dog warm, calm, and supervised.",
          "Do not wait for symptoms if exposure is likely.",
        ],
      },
      {
        heading: "What not to do",
        body: [
          "Avoid home treatment unless a veterinarian gives specific instructions for your dog and that toxin. Some common internet advice can make poisoning worse.",
        ],
        bullets: [
          "Do not induce vomiting unless a vet instructs you.",
          "Do not give salt, oil, milk, raw eggs, alcohol, or herbal remedies.",
          "Do not give activated charcoal from home supplies.",
          "Do not assume a dog is safe because it vomited once.",
          "Do not drive far past a closer emergency clinic without asking where the best care is available.",
        ],
      },
      {
        heading: "Prevention checklist",
        body: [
          "Poison prevention is mostly storage and habit. Dogs are curious, and many exposures happen when visitors, children, loadshedding routines, garden work, or holiday cooking disrupt normal supervision.",
        ],
        checklist: [
          "Store medicine, bait, pesticides, and pool chemicals behind closed doors or high shelves.",
          "Use dog-safe pest control plans and ask professionals about pet risk before treatment.",
          "Keep handbags, gym bags, and lunch boxes away from dogs.",
          "Check garden products before use, especially snail bait and fertilisers.",
          "Teach family members not to feed dogs chocolate, grapes, raisins, onion-heavy leftovers, or sugar-free sweets.",
        ],
      },
    ],
    faqs: [
      {
        question: "Should I make my dog vomit after poisoning?",
        answer:
          "Not unless a veterinarian tells you to. Vomiting can be dangerous after caustic chemicals, petroleum products, seizures, weakness, breathing problems, or certain toxins.",
      },
      {
        question: "What should I take to the vet?",
        answer:
          "Take the product packaging, medication name, plant sample, bait container, or a clear photo, plus your dog's weight and the time of possible exposure.",
      },
      {
        question: "Can poisoning symptoms appear later?",
        answer:
          "Yes. Some toxins cause delayed kidney, liver, bleeding, or nervous system problems. Contact a vet when exposure is suspected, not only when symptoms are obvious.",
      },
    ],
    related: [
      { title: "Can Dogs Eat Chocolate?", description: "Chocolate exposure and urgent vet guidance.", href: "/food/can-dogs-eat-chocolate" },
      { title: "Can Dogs Eat Grapes?", description: "Grape and raisin risk guidance.", href: "/food/can-dogs-eat-grapes" },
      { title: "Foods Dogs Should Never Eat", description: "A quick South African food safety list.", href: "/food/foods-dogs-should-never-eat-south-africa" },
      { title: "Toxic Foods", description: "Foods that can harm dogs.", href: "/health/toxic-foods-for-dogs-south-africa" },
      { title: "Toxic Plants", description: "Garden and houseplant risks.", href: "/health/toxic-plants-for-dogs-south-africa" },
      { title: "When to Take Your Dog to the Vet", description: "Urgent symptom decision guide.", href: "/health/when-to-take-your-dog-to-the-vet-south-africa" },
    ],
    sources: [
      {
        label: "MSD Veterinary Manual food hazards",
        href: "https://www.msdvetmanual.com/en/special-pet-topics/poisoning/food-hazards",
        note: "Veterinary reference on common food hazards including chocolate, grapes, raisins, xylitol, and macadamia nuts.",
      },
      {
        label: "PetMD poisoning overview",
        href: "https://www.petmd.com/dog/poisoning/poisons-dogs",
        note: "Veterinarian-reviewed overview of common dog poisons and emergency signs.",
      },
      {
        label: "South African Veterinary Council",
        href: "https://savc.org.za/",
        note: "South African veterinary professional regulation and public context.",
      },
    ],
  },
  {
    slug: "snake-bites-in-dogs-south-africa",
    path: "/emergency/snake-bites-in-dogs-south-africa",
    hubTitle: "Emergency Help",
    hubPath: "/emergency",
    title: "Snake Bites in Dogs in South Africa: What to Do Quickly",
    seoTitle: "Snake Bites in Dogs South Africa | Emergency Owner Guide",
    description:
      "A practical South African guide to snake bites in dogs, including warning signs, urgent steps, what not to do, prevention, and vet care.",
    intro:
      "Snake encounters are a real risk for dogs in South Africa, from suburban gardens and farms to bush walks, coastal paths, and warm evening outings. Curious dogs often investigate movement with their nose or paws, which makes bites to the face and legs common. Treat a suspected snake bite as an emergency.",
    updated: "2026-05-13",
    isHealthGuide: true,
    quickFacts: [
      "Urgent summary: if you see or suspect a snake bite, phone a vet or emergency animal clinic immediately.",
      "Keep your dog still and calm; movement can worsen the spread of some venoms.",
      "Do not cut the wound, suck venom, apply ice, apply a tight tourniquet, or try to catch the snake.",
      "A photo from a safe distance may help, but your dog is the priority.",
    ],
    sections: [
      {
        heading: "South African snakebite context",
        body: [
          "Veterinary literature from southern Africa describes dog snakebite as a frequent emergency. Venom effects differ by snake species: some cause severe swelling and tissue damage, some affect breathing and nerves, and others affect clotting and bleeding.",
          "Owners do not need to identify the snake perfectly before seeking help. A vet will assess signs, bite location, progression, pain, swelling, breathing, gums, clotting risk, and whether antivenom or intensive support is needed.",
        ],
        table: {
          headers: ["Possible pattern", "Why it is urgent"],
          rows: [
            ["Rapid facial or limb swelling", "Can be painful and may involve tissue injury or shock."],
            ["Weakness, paralysis, drooling, or breathing difficulty", "Can occur with neurotoxic venom and needs immediate care."],
            ["Bleeding from bite site, nose, gums, urine, or stool", "Can suggest clotting problems and needs urgent treatment."],
            ["Collapse or severe pain", "Can signal shock, envenomation, or another serious emergency."],
          ],
        },
      },
      {
        heading: "Warning signs after a suspected bite",
        body: [
          "Some dogs yelp and show a clear bite site. Others come back from the garden or veld looking distressed, swollen, weak, or unusually quiet. Do not wait for two puncture marks; they are not always easy to see.",
        ],
        bullets: [
          "Sudden swelling of the face, muzzle, neck, leg, or paw.",
          "Pain, crying, limping, restlessness, or reluctance to move.",
          "Drooling, vomiting, weakness, wobbliness, paralysis, or collapse.",
          "Breathing difficulty, blue gums, pale gums, or severe lethargy.",
          "Bleeding, bruising, blood in urine or stool, or persistent oozing from a wound.",
        ],
      },
      {
        heading: "What to do",
        body: [
          "Move your dog away from the snake without putting yourself at risk. Keep your dog as still as possible, carry small dogs if safe, and phone a vet. Ask whether the clinic can manage snakebite and whether you should go directly to a different emergency facility.",
          "If you can take a photo of the snake from a safe distance, do so, but do not delay transport or try to handle it. If you saw the location of the bite, tell the vet. Remove collars only if swelling around the neck or face is developing and it is safe to do so.",
        ],
        checklist: [
          "Call the vet or emergency clinic before arrival.",
          "Keep your dog calm and limit walking.",
          "Note the time of the bite or first signs.",
          "Take a safe-distance photo only if it does not delay care.",
          "Transport your dog carefully and avoid excitement.",
        ],
      },
      {
        heading: "What not to do",
        body: [
          "Snakebite first-aid myths can waste valuable time or make injury worse. Your goal is fast, calm transport to appropriate veterinary care.",
        ],
        bullets: [
          "Do not cut the wound or try to suck out venom.",
          "Do not apply ice, chemicals, or herbal mixtures.",
          "Do not apply a tight tourniquet.",
          "Do not give pain tablets from home.",
          "Do not let the dog run around or continue the walk.",
          "Do not risk a human bite by trying to catch or kill the snake.",
        ],
      },
      {
        heading: "Prevention in gardens, farms, and walks",
        body: [
          "You cannot remove all risk, but you can reduce encounters. Snakes often seek shelter, food, warmth, or shade. Rodent control, tidy storage, and supervised dogs help.",
        ],
        checklist: [
          "Keep grass shorter near the house and clear rubble, wood piles, and unused materials.",
          "Use a lead in snake-prone bush, farm, or coastal areas.",
          "Do not let dogs investigate holes, dense shrubs, or dead-looking snakes.",
          "Bring dogs indoors at night in snake-prone areas.",
          "Use reputable snake removers rather than handling snakes yourself.",
        ],
      },
    ],
    faqs: [
      {
        question: "Should I give my dog antihistamines after a snake bite?",
        answer:
          "No home medicine should delay veterinary care. Snakebite management depends on venom effects, pain, shock, breathing, clotting, and possible antivenom or intensive support.",
      },
      {
        question: "Do all snake bites need antivenom?",
        answer:
          "No. It depends on the snake, venom type, severity, and clinical signs. A veterinarian must assess the dog and decide on treatment.",
      },
      {
        question: "Can my dog die from a snake bite before we reach a vet?",
        answer:
          "Some bites can progress quickly, especially those affecting breathing or causing shock. Phone ahead, keep the dog still, and get veterinary help urgently.",
      },
    ],
    related: [
      { title: "Dog Emergency Help", description: "Urgent care planning.", href: "/emergency" },
      { title: "Heatstroke", description: "Another fast-moving outdoor emergency.", href: "/emergency/heatstroke-in-dogs-south-africa" },
      { title: "When to Take Your Dog to the Vet", description: "Urgent symptoms explained.", href: "/health/when-to-take-your-dog-to-the-vet-south-africa" },
    ],
    sources: [
      {
        label: "Journal of the South African Veterinary Association snakebite review",
        href: "https://journals.jsava.aosis.co.za/index.php/jsava/article/view/441/0",
        note: "Southern African veterinary review of snakebite diagnosis and management in dogs.",
      },
      {
        label: "African Snakebite Institute",
        href: "https://www.africansnakebiteinstitute.com/snakebite/",
        note: "South African snakebite and antivenom background information.",
      },
      {
        label: "University of Pretoria snake and dog warning",
        href: "https://www.up.ac.za/department-of-institutional-advancement/news/post_3357350-durban-veterinarian-warns-dog-owners-about-trend-of-filming-during-snake-vs-dog-standoffs",
        note: "South African veterinary warning about dog-snake standoffs and owner behaviour.",
      },
    ],
  },
  {
    slug: "heatstroke-in-dogs-south-africa",
    path: "/emergency/heatstroke-in-dogs-south-africa",
    hubTitle: "Emergency Help",
    hubPath: "/emergency",
    title: "Heatstroke in Dogs in South Africa",
    seoTitle: "Heatstroke in Dogs South Africa | Signs and Emergency Steps",
    description:
      "South Africa-specific dog heatstroke guide covering warning signs, hot weather risks, what to do, what not to do, prevention, and urgent vet care.",
    intro:
      "South African summers can make ordinary routines risky for dogs: midday walks, beach outings, hot cars, paved suburbs, loadshedding during heat waves, and outdoor events. Heatstroke is a medical emergency. Dogs can deteriorate quickly, especially if they are flat-faced, senior, overweight, very young, thick-coated, or unfit.",
    updated: "2026-05-13",
    isHealthGuide: true,
    quickFacts: [
      "Urgent summary: if your dog is collapsing, disoriented, vomiting, seizuring, or struggling to breathe in heat, contact a vet immediately.",
      "Move your dog to shade or a cool area and start gentle cooling while arranging veterinary care.",
      "Do not use ice baths or delay care because the dog seems to improve after cooling.",
      "Prevention is the best protection: avoid hot cars, hot pavement, and strenuous exercise in heat.",
    ],
    sections: [
      {
        heading: "Why heatstroke is so dangerous",
        body: [
          "Dogs rely mainly on panting to cool down. When heat, humidity, exercise, stress, or poor airflow overwhelm that cooling system, body temperature can rise to dangerous levels and damage organs.",
          "In South Africa, heat risk is not limited to rural areas or summer holidays. Dogs can overheat in townhouse courtyards, parked cars, beach walks, estate paths, training sessions, markets, hikes, and shaded but poorly ventilated spaces.",
        ],
      },
      {
        heading: "Warning signs",
        body: [
          "Early signs can become severe quickly. A dog does not need to be in direct sun to be in trouble, and a short walk can be too much on a humid or very hot day.",
        ],
        bullets: [
          "Heavy panting that does not settle with rest.",
          "Drooling, bright red or very pale gums, weakness, or wobbliness.",
          "Vomiting, diarrhoea, confusion, glassy eyes, or collapse.",
          "Seizures, difficulty breathing, or loss of consciousness.",
          "Hot body, distress, or refusal to continue walking.",
        ],
      },
      {
        heading: "What to do immediately",
        body: [
          "Move your dog out of the heat. Phone a vet or emergency clinic and tell them heatstroke is possible. Begin gentle cooling while arranging transport, but do not delay leaving for the vet if signs are severe.",
          "Use cool tap water or wet towels, airflow, shade, and calm handling. Cooling should be controlled, and your dog still needs veterinary assessment because internal damage can continue after the outside of the dog feels cooler.",
        ],
        table: {
          headers: ["Action", "Practical note"],
          rows: [
            ["Move to shade or indoors", "Reduce heat exposure and stress immediately."],
            ["Start gentle cooling", "Use cool water and airflow, not ice baths."],
            ["Offer small amounts of water if alert", "Do not force water into a weak or confused dog."],
            ["Phone the vet", "Ask where to go and tell them symptoms and exposure history."],
          ],
        },
      },
      {
        heading: "What not to do",
        body: [
          "Heatstroke is not a wait-and-see situation. Some dogs look temporarily better after cooling but still need checks for shock, organ injury, blood clotting issues, or dehydration.",
        ],
        bullets: [
          "Do not leave your dog in a car, even briefly.",
          "Do not use ice baths or extreme cold.",
          "Do not force water into the mouth.",
          "Do not give human fever medicine.",
          "Do not continue the walk because you are close to home.",
        ],
      },
      {
        heading: "Prevention for South African routines",
        body: [
          "Plan around heat before your dog is in trouble. The safest walk is often early morning, late evening, shaded, short, and flexible. Dogs do not need to prove toughness in heat.",
        ],
        checklist: [
          "Avoid midday walks in hot weather and check pavement heat.",
          "Carry water and a bowl for outings, markets, hikes, and beaches.",
          "Choose shade and airflow during loadshedding or outdoor visits.",
          "Be extra careful with brachycephalic breeds, senior dogs, puppies, overweight dogs, and thick-coated dogs.",
          "Leave dogs at home rather than in parked cars or crowded hot events.",
        ],
      },
    ],
    faqs: [
      {
        question: "Can dogs get heatstroke on a short walk?",
        answer:
          "Yes. Heat, humidity, fitness, breed, age, health, pavement temperature, and stress all matter. Some dogs overheat quickly even on short outings.",
      },
      {
        question: "Should I cool my dog before going to the vet?",
        answer:
          "Start gentle cooling while contacting the vet, but do not delay urgent care for severe signs such as collapse, seizures, confusion, or breathing difficulty.",
      },
      {
        question: "Are flat-faced dogs at higher risk?",
        answer:
          "Yes. Brachycephalic dogs can struggle to cool themselves effectively and need extra caution in South African heat.",
      },
    ],
    related: [
      { title: "Dog-Friendly Outings", description: "Plan safer trips and walks.", href: "/dog-friendly" },
      { title: "When to Take Your Dog to the Vet", description: "Urgent symptom checklist.", href: "/health/when-to-take-your-dog-to-the-vet-south-africa" },
      { title: "Dog Emergency Help", description: "More emergency preparation.", href: "/emergency" },
    ],
    sources: [
      {
        label: "Cornell University College of Veterinary Medicine heatstroke guide",
        href: "https://www.vet.cornell.edu/departments-centers-and-institutes/riney-canine-health-center/canine-health-information/heatstroke-medical-emergency",
        note: "Veterinary information on heatstroke signs, risk factors, emergency care, and prevention.",
      },
      {
        label: "PetMD heatstroke in dogs",
        href: "https://www.petmd.com/dog/conditions/systemic/heatstroke-dogs",
        note: "Veterinarian-reviewed heatstroke overview and emergency guidance.",
      },
      {
        label: "South African Veterinary Council",
        href: "https://savc.org.za/",
        note: "South African veterinary professional context.",
      },
    ],
  },
  {
    slug: "biliary-tick-bite-fever-dogs-south-africa",
    path: "/health/biliary-tick-bite-fever-dogs-south-africa",
    hubTitle: "Dog Health",
    hubPath: "/health",
    title: "Biliary Tick Bite Fever in Dogs in South Africa",
    seoTitle: "Biliary Tick Bite Fever in Dogs South Africa | Signs and Vet Care",
    description:
      "South African guide to biliary tick bite fever in dogs, including warning signs, tick prevention, urgent symptoms, and when to contact a vet.",
    intro:
      "Biliary, often called tick bite fever by South African dog owners, is a serious tick-borne disease linked to Babesia parasites. It is not something to diagnose or treat at home. If your dog is tired, off food, pale, feverish, weak, or has dark urine after tick exposure, contact a veterinarian quickly.",
    updated: "2026-05-13",
    isHealthGuide: true,
    quickFacts: [
      "Urgent summary: suspected biliary needs veterinary assessment, especially with pale gums, weakness, jaundice, dark urine, or collapse.",
      "Ticks are common in many South African settings, including gardens, parks, farms, kennels, beaches, and walking routes.",
      "Not every tick carries disease, but tick exposure plus illness signs should be taken seriously.",
      "Prevention, daily tick checks, and prompt vet care are the safest approach.",
    ],
    sections: [
      {
        heading: "What biliary means",
        body: [
          "Biliary in dogs is commonly associated with Babesia infection transmitted by ticks. The parasite can damage red blood cells and lead to anaemia and other complications. South African veterinary information commonly links biliary with the yellow dog tick and Babesia rossi.",
          "Owners may notice vague signs first: a quiet dog, poor appetite, fever, or pale gums. Because complications can become severe, early veterinary assessment matters.",
        ],
      },
      {
        heading: "Warning signs",
        body: [
          "Signs can overlap with other illnesses, so do not assume every tired dog has biliary. The combination of tick exposure and illness signs is the reason to call a vet.",
        ],
        bullets: [
          "Lethargy, weakness, fever, or reluctance to move.",
          "Loss of appetite or sudden quietness.",
          "Pale gums, yellow gums or eyes, or dark urine.",
          "Vomiting, fast breathing, collapse, or severe weakness.",
          "Recent ticks found on the dog or known tick-heavy environment.",
        ],
      },
      {
        heading: "What owners should do",
        body: [
          "Phone your vet and explain the signs, when they started, whether ticks were found, and what tick prevention your dog uses. Your vet may need to examine your dog, run blood tests, assess anaemia, and begin appropriate treatment.",
          "Do not wait for the dog to eat normally again if the gums are pale, the urine is dark, or weakness is worsening. Puppies, senior dogs, and dogs with other illnesses may have less reserve.",
        ],
        checklist: [
          "Check gum colour in good light.",
          "Look for ticks around ears, eyelids, collar, toes, groin, armpits, and tail base.",
          "Tell the vet what prevention product is used and when it was last given.",
          "Keep the dog calm and avoid strenuous activity while arranging care.",
          "Do not give leftover medication from a previous illness.",
        ],
      },
      {
        heading: "What not to do",
        body: [
          "Biliary is not a home-treatment condition. A dog can need specific medication, monitoring, supportive care, or blood-related assessment.",
        ],
        bullets: [
          "Do not use old tick bite fever medication without a vet.",
          "Do not assume a tick collar or tablet makes biliary impossible.",
          "Do not give human painkillers or anti-inflammatories.",
          "Do not delay care if gums are pale, urine is dark, or your dog is collapsing.",
        ],
      },
      {
        heading: "Prevention in South Africa",
        body: [
          "Tick prevention should be year-round in many areas, not only during obvious tick season. Ask your vet which product is suitable for your dog's age, weight, health, swimming habits, and household pets.",
        ],
        checklist: [
          "Use vet-recommended tick prevention correctly and on schedule.",
          "Check dogs after walks, beach trips, bush routes, kennels, farms, and garden play.",
          "Keep grass and garden edges controlled where possible.",
          "Never use dog tick products on cats unless the label and vet say it is safe.",
          "Book a vet visit quickly if illness follows tick exposure.",
        ],
      },
    ],
    faqs: [
      {
        question: "Can biliary be fatal?",
        answer:
          "Yes, severe or complicated cases can be dangerous. Early veterinary care improves the chance of a good outcome.",
      },
      {
        question: "Does finding a tick mean my dog has biliary?",
        answer:
          "No. Many tick bites do not lead to biliary, but illness signs after tick exposure should be discussed with a vet.",
      },
      {
        question: "Can I prevent biliary completely?",
        answer:
          "No prevention is perfect, but correct tick control, checks, and fast vet care reduce risk.",
      },
    ],
    related: [
      { title: "Ticks and Fleas", description: "Prevention and tick checks.", href: "/health/ticks-and-fleas-dogs-south-africa" },
      { title: "When to Take Your Dog to the Vet", description: "Symptom decision guide.", href: "/health/when-to-take-your-dog-to-the-vet-south-africa" },
      { title: "Dog Costs", description: "Budget for prevention and urgent care.", href: "/costs/cost-of-owning-a-dog-south-africa" },
    ],
    sources: [
      {
        label: "MSD Animal Health South Africa biliary in dogs",
        href: "https://www.msd-animal-health.co.za/informative-articles/biliary-in-dogs/",
        note: "South Africa-specific information on biliary, ticks, and signs owners may notice.",
      },
      {
        label: "South African Veterinary Council",
        href: "https://savc.org.za/",
        note: "Professional veterinary context in South Africa.",
      },
      {
        label: "CDC preventing ticks on pets",
        href: "https://www.cdc.gov/ticks/prevention/preventing-ticks-on-pets.html",
        note: "General tick prevention and checking guidance for pets.",
      },
    ],
  },
  {
    slug: "ticks-and-fleas-dogs-south-africa",
    path: "/health/ticks-and-fleas-dogs-south-africa",
    hubTitle: "Dog Health",
    hubPath: "/health",
    title: "Ticks and Fleas on Dogs in South Africa",
    seoTitle: "Ticks and Fleas on Dogs South Africa | Prevention and Vet Advice",
    description:
      "Practical South African guide to ticks and fleas on dogs, including prevention, checks, warning signs, product safety, and when to contact a vet.",
    intro:
      "Ticks and fleas are more than an itchy nuisance. In South Africa, ticks can be linked to serious illness such as biliary, while fleas can cause skin irritation, allergy, anaemia in vulnerable animals, and tapeworm exposure. A prevention routine is part of everyday dog care.",
    updated: "2026-05-13",
    isHealthGuide: true,
    quickFacts: [
      "Urgent summary: contact a vet quickly if your dog has tick exposure plus weakness, pale gums, fever, dark urine, collapse, or severe lethargy.",
      "Use tick and flea products only as directed for your dog's species, weight, age, and health.",
      "Never use a dog-only product on a cat in the household unless your vet confirms it is safe.",
      "Daily checks after walks and garden time help find ticks before they cause bigger problems.",
    ],
    sections: [
      {
        heading: "Why prevention matters",
        body: [
          "Ticks and fleas can live in gardens, parks, kennels, bedding, carpets, shaded outdoor areas, farms, bush routes, and coastal walking spots. Dogs can bring parasites into the home, and household control may need more than treating the dog once.",
          "The best product is not the one that worked for someone else's dog. Ask your vet about your dog's size, swimming habits, skin sensitivity, age, pregnancy status, other pets, and local tick pressure.",
        ],
      },
      {
        heading: "Warning signs linked to ticks or fleas",
        body: [
          "Many dogs scratch with fleas, but serious concerns go beyond itching. Tick-borne illness signs can be vague at first.",
        ],
        bullets: [
          "Scratching, chewing, hair loss, scabs, red skin, or flea dirt.",
          "Ticks attached around ears, eyelids, toes, collar area, armpits, groin, or tail base.",
          "Lethargy, fever, pale gums, dark urine, weakness, or appetite loss after tick exposure.",
          "Puppies, small dogs, or elderly dogs becoming weak with heavy flea infestation.",
          "Hot spots, skin infection smell, or painful inflamed skin.",
        ],
      },
      {
        heading: "Practical tick and flea checklist",
        body: [
          "Consistency matters. Missing doses or using the wrong weight band can leave gaps in protection.",
        ],
        checklist: [
          "Use vet-recommended prevention on schedule.",
          "Check high-risk body areas after walks, hikes, beaches, farms, kennels, and garden play.",
          "Wash bedding and vacuum carpets if fleas are suspected.",
          "Treat all pets in the household with species-appropriate products.",
          "Ask your vet before combining collars, tablets, sprays, dips, or spot-ons.",
        ],
      },
      {
        heading: "What not to do",
        body: [
          "Incorrect parasite control can harm pets. Product labels matter, especially in mixed dog-and-cat homes.",
        ],
        bullets: [
          "Do not use dog tick products on cats unless clearly safe for cats.",
          "Do not guess a dose for puppies or tiny dogs.",
          "Do not combine multiple products without vet advice.",
          "Do not ignore illness signs because you removed a tick.",
          "Do not use old agricultural dips or home mixtures on pets.",
        ],
      },
      {
        heading: "When to contact a vet",
        body: [
          "A vet visit is sensible when parasite problems are repeated, severe, or linked to illness. Skin disease, allergies, anaemia, and tick-borne illness need proper assessment.",
        ],
        table: {
          headers: ["Situation", "Next step"],
          rows: [
            ["Tick exposure plus weakness or pale gums", "Contact a vet urgently."],
            ["Severe itching, sores, or skin smell", "Book a vet visit for skin assessment."],
            ["Flea infestation in a puppy", "Ask a vet for safe age-appropriate treatment."],
            ["Reaction after a parasite product", "Contact a vet and keep the product packaging."],
          ],
        },
      },
    ],
    faqs: [
      {
        question: "Do South African dogs need tick prevention all year?",
        answer:
          "Many dogs do, depending on area, lifestyle, and product. Ask your vet because tick pressure varies by region and season.",
      },
      {
        question: "Can I remove ticks myself?",
        answer:
          "You can remove visible ticks carefully with appropriate tools, but illness signs after tick exposure still need veterinary advice.",
      },
      {
        question: "Why do fleas keep coming back?",
        answer:
          "Flea eggs and larvae can be in bedding, carpets, furniture, shaded soil, and other pets. Household control often needs a consistent plan.",
      },
    ],
    related: [
      { title: "Biliary Tick Bite Fever", description: "Tick-borne illness warning signs.", href: "/health/biliary-tick-bite-fever-dogs-south-africa" },
      { title: "Dog Health", description: "More prevention guides.", href: "/health" },
      { title: "Dog Costs", description: "Budgeting for prevention.", href: "/costs/cost-of-owning-a-dog-south-africa" },
    ],
    sources: [
      {
        label: "CDC preventing ticks on pets",
        href: "https://www.cdc.gov/ticks/prevention/preventing-ticks-on-pets.html",
        note: "Tick checks, pet prevention, and signs to watch for after tick exposure.",
      },
      {
        label: "Cornell flea and tick prevention",
        href: "https://www.vet.cornell.edu/departments-centers-and-institutes/riney-canine-health-center/canine-health-topics/flea-and-tick-prevention",
        note: "Veterinary overview of flea and tick exposure and prevention.",
      },
      {
        label: "MSD Animal Health South Africa biliary in dogs",
        href: "https://www.msd-animal-health.co.za/informative-articles/biliary-in-dogs/",
        note: "South Africa-specific biliary and tick context.",
      },
    ],
  },
  {
    slug: "toxic-foods-for-dogs-south-africa",
    path: "/health/toxic-foods-for-dogs-south-africa",
    hubTitle: "Dog Health",
    hubPath: "/health",
    title: "Toxic Foods for Dogs in South Africa",
    seoTitle: "Toxic Foods for Dogs South Africa | What Not to Feed",
    description:
      "A practical guide to toxic foods for dogs in South African homes, including chocolate, xylitol, grapes, raisins, onions, alcohol, and when to call a vet.",
    intro:
      "Many dog food emergencies start in ordinary kitchens: chocolate, fruitcake, braai leftovers, onion-heavy stews, grapes, raisins, sugar-free sweets, and alcohol at gatherings. If your dog eats a risky food, do not wait for symptoms before asking a vet what to do.",
    updated: "2026-05-13",
    isHealthGuide: true,
    quickFacts: [
      "Urgent summary: phone a vet quickly after chocolate, xylitol, grapes, raisins, alcohol, or large onion/garlic exposure.",
      "The danger depends on the food, amount, dog size, health, and time since ingestion.",
      "Do not induce vomiting or give home treatments unless a vet instructs you.",
      "Keep packaging, ingredient lists, and the time eaten ready for the vet.",
    ],
    sections: [
      {
        heading: "Common toxic foods and kitchen risks",
        body: [
          "South African homes often include shared plates, lunch boxes, school snacks, festive baking, braai meat, sauces, and leftovers. Dogs do not understand that one plate is safe and another is not.",
          "Some foods are dangerous because of specific toxins, while others cause pancreatitis, choking, gut injury, or salt overload. When in doubt, ask a vet rather than trying to calculate risk alone.",
        ],
        table: {
          headers: ["Food or ingredient", "Why it is risky"],
          rows: [
            ["Chocolate and cocoa", "Can affect heart rhythm and the nervous system."],
            ["Xylitol", "Can cause sudden low blood sugar and liver injury."],
            ["Grapes, raisins, currants, fruitcake", "Can be linked to kidney injury in some dogs."],
            ["Onion, garlic, leeks, chives", "Can damage red blood cells, including cooked or powdered forms."],
            ["Alcohol or raw bread dough", "Can cause poisoning, bloating, weakness, and neurological signs."],
            ["Fatty leftovers and bones", "Can cause pancreatitis, choking, obstruction, or gut injury."],
          ],
        },
      },
      {
        heading: "Warning signs after eating toxic food",
        body: [
          "Signs can be fast or delayed. Xylitol signs may happen quickly, while grape or raisin problems can develop later. Chocolate signs can continue for hours.",
        ],
        bullets: [
          "Vomiting, diarrhoea, drooling, or abdominal pain.",
          "Restlessness, tremors, wobbliness, seizures, or collapse.",
          "Weakness, sleepiness, pale gums, or jaundice.",
          "Excessive thirst, reduced urination, or dark urine.",
          "Bloating, retching, or severe discomfort after fatty food or bones.",
        ],
      },
      {
        heading: "What to do",
        body: [
          "Phone your vet with the food, amount, time eaten, your dog's weight, and current symptoms. Keep the wrapper or ingredient list. If several dogs had access, separate them and check who may have eaten what.",
          "If your dog is already weak, seizuring, repeatedly vomiting, bloated, or struggling to breathe, go to emergency care immediately.",
        ],
        checklist: [
          "Keep packaging or ingredient labels.",
          "Estimate the amount eaten without delaying the call.",
          "Tell the vet your dog's weight and health conditions.",
          "Do not give salt, oil, milk, or home remedies.",
          "Keep children and guests from feeding extra treats.",
        ],
      },
      {
        heading: "Prevention habits",
        body: [
          "Prevention is easiest when everyone in the home knows the rules. Visitors and children often share food kindly without realising the risk.",
        ],
        checklist: [
          "Store chocolate, sweets, fruitcake, raisins, and medication-like supplements out of reach.",
          "Check peanut butter, gums, and sugar-free foods for xylitol or sweeteners.",
          "Clear plates after braais and keep bones out of bin access.",
          "Avoid feeding onion or garlic-heavy leftovers.",
          "Use a closed bin and secure pantry storage.",
        ],
      },
    ],
    faqs: [
      {
        question: "Is one grape dangerous for every dog?",
        answer:
          "Risk varies, but grape and raisin exposure can be serious and unpredictable. Contact a vet rather than assuming the amount is safe.",
      },
      {
        question: "Can dogs eat braai leftovers?",
        answer:
          "Many leftovers are too fatty, salty, spicy, onion-heavy, or contain bones. Plain dog-safe food is safer than mixed leftovers.",
      },
      {
        question: "What is xylitol?",
        answer:
          "Xylitol is a sweetener found in some sugar-free gum, sweets, baked goods, and nut butters. It can be highly dangerous to dogs.",
      },
    ],
    related: [
      { title: "Can Dogs Eat Chocolate?", description: "Chocolate safety and emergency steps.", href: "/food/can-dogs-eat-chocolate" },
      { title: "Can Dogs Eat Grapes?", description: "Grape, raisin, and fruitcake safety.", href: "/food/can-dogs-eat-grapes" },
      { title: "Can Dogs Eat Onions?", description: "Onion and leftover food safety.", href: "/food/can-dogs-eat-onions" },
      { title: "Can Dogs Eat Peanut Butter?", description: "Xylitol and birch sugar warning signs.", href: "/food/can-dogs-eat-peanut-butter" },
      { title: "Foods Dogs Should Never Eat", description: "Quick South African food danger list.", href: "/food/foods-dogs-should-never-eat-south-africa" },
      { title: "Dog Poisoning", description: "Emergency toxin steps.", href: "/emergency/dog-poisoning-south-africa" },
      { title: "Dog Food", description: "Feeding choices and labels.", href: "/food" },
      { title: "When to Take Your Dog to the Vet", description: "Urgent signs explained.", href: "/health/when-to-take-your-dog-to-the-vet-south-africa" },
    ],
    sources: [
      {
        label: "MSD Veterinary Manual food hazards",
        href: "https://www.msdvetmanual.com/en/special-pet-topics/poisoning/food-hazards",
        note: "Veterinary reference on chocolate, grapes, raisins, xylitol, and other food hazards.",
      },
      {
        label: "MSD Veterinary Manual chocolate toxicosis",
        href: "https://www.msdvetmanual.com/toxicology/food-hazards/chocolate-toxicosis-in-animals",
        note: "Detailed veterinary information on chocolate toxicity.",
      },
      {
        label: "MSD Veterinary Manual grape and raisin toxicosis",
        href: "https://www.msdvetmanual.com/toxicology/food-hazards/grape-raisin-and-tamarind-vitis-spp-tamarindus-spp-toxicosis-in-dogs",
        note: "Veterinary reference on grape, raisin, currant, and tamarind risks.",
      },
    ],
  },
  {
    slug: "toxic-plants-for-dogs-south-africa",
    path: "/health/toxic-plants-for-dogs-south-africa",
    hubTitle: "Dog Health",
    hubPath: "/health",
    title: "Toxic Plants for Dogs in South African Homes and Gardens",
    seoTitle: "Toxic Plants for Dogs South Africa | Garden and Houseplant Guide",
    description:
      "South African dog owner guide to toxic plants, garden risks, warning signs, prevention, and when to contact a vet.",
    intro:
      "Dogs explore gardens with their mouths. South African homes may have cycads, lilies, oleander, bulbs, succulents, compost, mushrooms, and ornamental plants in reach. Some plant exposures cause mild stomach upset, but others can affect the heart, liver, kidneys, mouth, or nervous system.",
    updated: "2026-05-13",
    isHealthGuide: true,
    quickFacts: [
      "Urgent summary: if your dog eats an unknown or known toxic plant, phone a vet and keep a sample or photo.",
      "Do not induce vomiting or give home remedies unless a veterinarian instructs you.",
      "Puppies and newly adopted dogs are often at higher risk because they chew and explore.",
      "Gardens, compost heaps, cut flowers, and indoor pots should all be checked.",
    ],
    sections: [
      {
        heading: "South African garden realities",
        body: [
          "Many South African dogs spend time in gardens, courtyards, complexes, farms, and holiday homes. Plant risk changes when a puppy arrives, a rescue dog is settling in, landscaping is updated, or storms drop branches and berries.",
          "It is not practical to memorise every toxic plant. A safer approach is to identify what is already in your home, fence off risky areas, supervise chewing dogs, and ask a vet promptly when exposure happens.",
        ],
        table: {
          headers: ["Risk area", "What to check"],
          rows: [
            ["Houseplants", "Chewed leaves, stems, bulbs, sap, soil additives, and decorative stones."],
            ["Garden beds", "Cycads, oleander, bulbs, seedlings, thorny plants, pesticides, and compost."],
            ["Cut flowers", "Lilies and mixed bouquets kept where dogs can reach water or petals."],
            ["Walks and parks", "Unknown berries, mushrooms, dumped garden waste, and treated grass."],
          ],
        },
      },
      {
        heading: "Warning signs after plant exposure",
        body: [
          "Signs depend on the plant and amount eaten. Mouth irritation can appear quickly, while liver or kidney effects may be delayed.",
        ],
        bullets: [
          "Drooling, pawing at the mouth, mouth swelling, or trouble swallowing.",
          "Vomiting, diarrhoea, abdominal pain, or refusal to eat.",
          "Weakness, tremors, wobbliness, seizures, or collapse.",
          "Yellow gums or eyes, dark urine, pale gums, or unusual bleeding.",
          "Breathing difficulty or severe lethargy.",
        ],
      },
      {
        heading: "What owners should do",
        body: [
          "Remove access to the plant and phone a vet. Take a clear photo of the plant, flower, fruit, leaves, and any label. If safe, take a small sample in a bag for identification. Tell the vet when the chewing happened and what signs you see.",
          "If your dog is collapsing, seizuring, struggling to breathe, or has severe swelling, go to emergency care immediately.",
        ],
        checklist: [
          "Take a photo of the whole plant and close-ups of leaves, flowers, fruit, or bulbs.",
          "Keep plant labels from nurseries when you buy new plants.",
          "Estimate how much is missing.",
          "Prevent other pets from reaching the plant.",
          "Do not wait for symptoms after known high-risk ingestion.",
        ],
      },
      {
        heading: "What not to do",
        body: [
          "Plant poisoning advice depends on the plant and your dog's condition. Generic home remedies can be harmful.",
        ],
        bullets: [
          "Do not induce vomiting unless a vet tells you to.",
          "Do not give milk, oil, salt, or herbal mixtures.",
          "Do not assume a plant is safe because birds or wildlife eat it.",
          "Do not wait if your puppy ate bulbs, seeds, berries, or an unknown plant.",
        ],
      },
      {
        heading: "Prevention checklist",
        body: [
          "Prevention is especially important before bringing home a puppy, shelter dog, or dog that likes to chew.",
        ],
        checklist: [
          "Identify plants in your garden and indoor pots.",
          "Fence off or remove high-risk plants where dogs spend unsupervised time.",
          "Keep compost, bulbs, seeds, fertilisers, and pesticides secured.",
          "Supervise dogs in new gardens, holiday homes, and rental properties.",
          "Teach a reliable leave-it cue and provide safe chew alternatives.",
        ],
      },
    ],
    faqs: [
      {
        question: "Are all plants dangerous to dogs?",
        answer:
          "No. Many plants are harmless or only mildly irritating, but some are serious. If you do not know what your dog ate, ask a vet.",
      },
      {
        question: "Should I take a plant sample to the vet?",
        answer:
          "Yes, if it is safe. A photo and a small sample can help identification. Do not delay urgent care to search for the perfect sample.",
      },
      {
        question: "Can plant poisoning be delayed?",
        answer:
          "Yes. Some signs appear later, especially organ-related effects. Known or suspected high-risk ingestion should be discussed with a vet promptly.",
      },
    ],
    related: [
      { title: "Dog Poisoning", description: "Emergency poisoning steps.", href: "/emergency/dog-poisoning-south-africa" },
      { title: "Toxic Foods", description: "Kitchen risks for dogs.", href: "/health/toxic-foods-for-dogs-south-africa" },
      { title: "Puppy Scam Checklist", description: "Safety before bringing a puppy home.", href: "/adoption/puppy-scam-checklist-south-africa" },
    ],
    sources: [
      {
        label: "PetMD plants poisonous to dogs",
        href: "https://www.petmd.com/dog/emergency/poisoning-toxicity/e_dg_poisonous_plants",
        note: "Veterinarian-reviewed guidance on plant toxicity signs and emergency response.",
      },
      {
        label: "MSD Veterinary Manual toxic houseplants and ornamentals",
        href: "https://www.msdvetmanual.com/pt/toxicology/plantas-venenosas/plantas-dom%C3%A9sticas-e-ornamentais-t%C3%B3xicas-para-animais",
        note: "Veterinary reference on toxic ornamental and household plants.",
      },
      {
        label: "South African Veterinary Council",
        href: "https://savc.org.za/",
        note: "South African veterinary professional context.",
      },
    ],
  },
  {
    slug: "when-to-take-your-dog-to-the-vet-south-africa",
    path: "/health/when-to-take-your-dog-to-the-vet-south-africa",
    hubTitle: "Dog Health",
    hubPath: "/health",
    title: "When to Take Your Dog to the Vet in South Africa",
    seoTitle: "When to Take Your Dog to the Vet South Africa | Symptom Guide",
    description:
      "A practical South African guide to deciding when dog symptoms need emergency care, same-day vet advice, or a routine appointment.",
    intro:
      "Dog owners often know something is wrong before they know how urgent it is. This guide helps you decide when to phone a vet, when to go immediately, and what information to prepare. It does not diagnose your dog and should not delay urgent care.",
    updated: "2026-05-13",
    isHealthGuide: true,
    quickFacts: [
      "Urgent summary: breathing difficulty, collapse, seizures, severe pain, poisoning, snakebite, heatstroke, heavy bleeding, or repeated unproductive retching need urgent veterinary help.",
      "Phone ahead when possible so the clinic can advise and prepare.",
      "Access to emergency vets varies by area, so keep local options saved before you need them.",
      "Trust your concern: if your dog is rapidly getting worse, contact a vet.",
    ],
    sections: [
      {
        heading: "Go urgently or phone an emergency vet now",
        body: [
          "These signs should not wait for a routine appointment. If you live far from an emergency clinic, phone while someone prepares transport.",
        ],
        bullets: [
          "Struggling to breathe, blue gums, collapse, or severe weakness.",
          "Seizures, repeated seizures, or not recovering normally after a seizure.",
          "Suspected poisoning, snakebite, heatstroke, or severe allergic swelling.",
          "Heavy bleeding, deep wounds, hit-by-car injuries, or severe pain.",
          "Bloated abdomen, repeated unproductive retching, or sudden distress.",
          "Pale gums, dark urine, jaundice, or suspected biliary with weakness.",
        ],
      },
      {
        heading: "Same-day vet advice is sensible",
        body: [
          "Some problems are not obvious emergencies but should still be discussed quickly. Dogs can hide pain, and early care often prevents a bigger problem.",
        ],
        table: {
          headers: ["Sign", "Why to call"],
          rows: [
            ["Repeated vomiting or diarrhoea", "Risk of dehydration, toxin exposure, infection, or obstruction."],
            ["Not eating with lethargy", "Can indicate pain, fever, tick-borne disease, or internal illness."],
            ["Limping with pain", "Could be injury, fracture, bite, or joint problem."],
            ["Ear pain, head shaking, or bad smell", "Ear infections and foreign bodies can worsen."],
            ["Coughing, fast breathing, or exercise intolerance", "Can involve heart, lungs, airway, or infection."],
          ],
        },
      },
      {
        heading: "Information to give the vet",
        body: [
          "Clear information helps the clinic triage your dog. Keep notes short and factual, especially when you are stressed.",
        ],
        checklist: [
          "Your dog's age, weight, breed or size, and sex.",
          "Main symptom and when it started.",
          "Whether your dog is eating, drinking, urinating, and passing stool.",
          "Any vomiting, diarrhoea, coughing, collapse, seizure, or pain.",
          "Vaccination status, tick prevention, medications, and possible toxin exposure.",
          "Photos of vomit, stool, swelling, plants, packaging, or wounds if useful.",
        ],
      },
      {
        heading: "What not to do while deciding",
        body: [
          "When you are unsure, phone a vet rather than trying risky treatment at home. Human medicines and internet remedies can be dangerous for dogs.",
        ],
        bullets: [
          "Do not give human painkillers.",
          "Do not wait overnight if symptoms are severe or worsening.",
          "Do not force food or water into a weak, vomiting, or confused dog.",
          "Do not rely on old medication prescribed for a different illness.",
          "Do not assume a puppy, senior dog, or small dog has the same reserve as a healthy adult dog.",
        ],
      },
      {
        heading: "Prepare before an emergency",
        body: [
          "Emergency planning is part of responsible dog care. It is much easier to make a good decision when the numbers, records, and transport plan already exist.",
        ],
        checklist: [
          "Save your regular vet and nearest after-hours emergency clinic details.",
          "Keep vaccination records and insurance details easy to find.",
          "Know how you will transport your dog if they cannot walk.",
          "Keep a basic first-aid kit for bandaging and transport support, not home diagnosis.",
          "Budget for emergency care or understand your insurance claim process.",
        ],
      },
    ],
    faqs: [
      {
        question: "Should I call before going to the vet?",
        answer:
          "Yes if you can do so without delaying urgent care. Calling ahead helps the clinic prepare and advise you where to go.",
      },
      {
        question: "What if I live far from an emergency vet?",
        answer:
          "Phone the nearest available veterinary service for triage while preparing transport. Rural owners should save after-hours options in advance.",
      },
      {
        question: "Can I monitor my dog at home if they seem a little better?",
        answer:
          "It depends on the symptom. Improvement after cooling, vomiting, or rest does not always mean the danger has passed. Ask a vet if the original sign was serious.",
      },
    ],
    related: [
      { title: "Dog Vomiting", description: "Repeated vomiting and same-day vet signs.", href: "/health/dog-vomiting-south-africa" },
      { title: "Dog Diarrhoea", description: "Bloody stool, puppy risk, and dehydration signs.", href: "/health/dog-diarrhea-south-africa" },
      { title: "Dog Not Eating", description: "Appetite loss and urgent warning signs.", href: "/health/dog-not-eating-south-africa" },
      { title: "Dog Coughing", description: "Breathing and cough warning signs.", href: "/health/dog-coughing-south-africa" },
      { title: "Dog Poisoning", description: "Toxin emergencies.", href: "/emergency/dog-poisoning-south-africa" },
      { title: "Heatstroke", description: "Hot weather emergency guide.", href: "/emergency/heatstroke-in-dogs-south-africa" },
      { title: "Biliary Tick Bite Fever", description: "Tick illness warning signs.", href: "/health/biliary-tick-bite-fever-dogs-south-africa" },
    ],
    sources: [
      {
        label: "South African Veterinary Council",
        href: "https://savc.org.za/",
        note: "South African veterinary professional context.",
      },
      {
        label: "Cornell heatstroke emergency guidance",
        href: "https://www.vet.cornell.edu/departments-centers-and-institutes/riney-canine-health-center/canine-health-information/heatstroke-medical-emergency",
        note: "Example of veterinary emergency symptom guidance.",
      },
      {
        label: "PetMD dog poisoning overview",
        href: "https://www.petmd.com/dog/poisoning/poisons-dogs",
        note: "Veterinarian-reviewed overview of poisoning emergency signs and response.",
      },
    ],
  },
];

export function getPhase3Guide(slug: string) {
  return phase3GuidePages.find((guide) => guide.slug === slug);
}

export function getPhase3GuidesByHub(hubPath: "/emergency" | "/health") {
  return phase3GuidePages.filter((guide) => guide.hubPath === hubPath);
}
