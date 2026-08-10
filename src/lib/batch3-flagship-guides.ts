import type { GuideContent } from "@/lib/content";

export const batch3FlagshipGuides: GuideContent[] = [
  {
    slug: "dog-poisoning-south-africa",
    path: "/emergency/dog-poisoning-south-africa",
    hubTitle: "Emergency Help",
    hubPath: "/emergency",
    title: "Dog Poisoning in South Africa: What Owners Should Do First",
    seoTitle: "Dog Poisoning South Africa | Symptoms and Emergency Steps",
    description:
      "Urgent South African dog-poisoning guidance covering household toxins, warning signs, veterinary call preparation, safe transport, and what owners should not do.",
    intro:
      "Suspected poisoning is an emergency even when a dog still looks normal. A product may cause rapid illness, delayed organ damage, abnormal bleeding, or neurological signs, and different formulations require different veterinary decisions. Remove access without putting yourself at risk, keep other animals away, identify what may be involved, and phone a veterinarian or emergency animal clinic immediately.",
    updated: "2026-08-09",
    primaryImage: {
      src: "/images/guides/dog-poisoning-prevention-south-africa.webp",
      alt: "Dog owner safely storing household products away from a dog",
      width: 1536,
      height: 1024,
    },
    isHealthGuide: true,
    quickFacts: [
      "Phone a veterinarian promptly after a known or suspected dangerous exposure. Do not wait for symptoms to decide whether help is necessary.",
      "Keep the original packaging, ingredient list, medicine container, plant sample, bait station, receipt, or clear photographs when it is safe to collect them.",
      "Do not induce vomiting or give milk, oil, salt, charcoal, food, or another home remedy unless the veterinarian managing the case specifically instructs you.",
      "Tell the clinic what happened, when it may have happened, how much may be missing, the dog's approximate weight, current signs, and any existing conditions or medicines.",
    ],
    sections: [
      {
        heading: "Why suspected poisoning needs urgent veterinary advice",
        body: [
          "The first few minutes are for identifying the possible exposure and contacting professional help, not testing internet remedies. A dog may initially seem comfortable while a substance is being absorbed or while damage to the liver, kidneys, blood, nervous system, lungs, or digestive tract develops. Early veterinary advice also matters because the safe response depends on the exact product, formulation, route of exposure, timing, and dog's condition.",
          "Never assume that a small amount, one vomit, or the absence of symptoms makes an exposure safe. Concentrated garden products, baits, medicines, sweeteners, chemicals, and cannabis products vary greatly. A veterinarian can use the label and case details to decide how urgently the dog must be examined and what preparation the clinic needs before arrival.",
        ],
        callout: "caution",
      },
      {
        heading: "Common poisoning situations in South African homes",
        body: [
          "Ordinary storage and household routines create many exposures. Rat bait may be moved by rodents or left behind appliances. Snail or slug products, pesticides, fertilisers, pool chemicals, cleaning concentrates, antifreeze, fuel, solvents, and other garage products may be accessible after gardening, maintenance, moving house, or loadshedding. Human medication can fall from a bedside table or remain in a handbag that a dog can open.",
          "Food-related risks include chocolate, xylitol-containing products, grapes, raisins, alcohol, caffeine, and rich leftovers. Cannabis flower, oils, baked products, and discarded material should also be kept inaccessible. Gardens may contain toxic plants or treated compost. Farms and smallholdings can add livestock medicines, dips, rodenticides, pesticides, treated seed, workshop chemicals, and unidentified substances in reused containers.",
        ],
        bullets: [
          "Pest products: rat or mouse bait, insecticide, snail or slug products, and concentrated garden treatments.",
          "Medicines and recreational substances: human prescriptions, pain medicines, supplements, nicotine products, and cannabis products.",
          "Household and garage chemicals: cleaning products, disinfectants, drain or oven cleaners, antifreeze, fuel, solvents, and pool chemicals.",
          "Food and plant risks: chocolate, xylitol, grapes, raisins, mouldy food, toxic plants, bulbs, seeds, and mushrooms.",
          "Rural risks: livestock treatments, agricultural chemicals, dips, fertilisers, bait, treated seed, and poorly labelled stored products.",
        ],
      },
      {
        heading: "Possible exposure, information to collect, and next action",
        body: [
          "Collect information only when doing so is safe and does not delay the call. Do not smell, taste, open, or handle an unknown chemical unnecessarily. Keep children and other animals away from the area.",
        ],
        table: {
          headers: ["Possible exposure", "Information to collect", "Best next action"],
          rows: [
            ["Rat bait, pesticide, or snail product", "Packet, active ingredient, colour or form, amount missing, and time found.", "Block access and phone a veterinarian immediately, even if the dog appears normal."],
            ["Human medication", "Medicine name, strength, number possibly missing, prescription container, and dog's weight.", "Contact a veterinarian urgently and take the container. Do not give another medicine to counter it."],
            ["Cleaning or garage chemical", "Product label, ingredient or safety panel, route of contact, and whether coat, eyes, mouth, or paws are affected.", "Move away from fumes or spills safely and phone the vet for product-specific handling and transport advice."],
            ["Food, xylitol, cannabis, or mouldy material", "Original packaging, ingredient list, approximate amount, timing, and any vomiting or behavioural change.", "Prevent further access and call promptly. Do not wait for signs or induce vomiting at home."],
            ["Plant, mushroom, or unknown garden material", "Clear photographs of the whole plant and leaves, a safely contained sample if advised, location, and time.", "Stop access and ask the vet how to identify and transport the material safely."],
          ],
        },
      },
      {
        heading: "Emergency warning signs",
        body: [
          "Symptoms vary and cannot identify a toxin reliably at home. A known exposure warrants a call without symptoms, while any serious or worsening sign warrants immediate veterinary transport. Tell the clinic if the dog may bite because of pain, confusion, agitation, or seizures so staff can prepare.",
        ],
        bullets: [
          "Vomiting, diarrhoea, repeated swallowing, drooling, gagging, or mouth irritation.",
          "Weakness, wobbliness, confusion, extreme lethargy, severe agitation, or unusual behaviour.",
          "Tremors, muscle twitching, seizures, collapse, or loss of consciousness.",
          "Pale, blue, very red, or otherwise abnormal gums; bruising or abnormal bleeding.",
          "Breathing difficulty, coughing, choking, or rapidly worsening distress.",
        ],
      },
      {
        heading: "What to tell the veterinarian",
        body: [
          "Phone before travelling when possible. Start with the suspected substance and the dog's current condition, then give the clearest timeline you can. It is acceptable to say that the amount or time is uncertain. An honest range is more useful than false precision.",
          "Mention the dog's approximate weight, age, breed or type, pregnancy status where relevant, existing illnesses, regular medicines, and anything already given. Explain whether the dog swallowed, inhaled, licked, or had skin or eye contact with the substance, and whether vomiting, diarrhoea, urination, bleeding, tremors, or seizures have occurred.",
        ],
      },
      {
        heading: "What to take or photograph for the vet",
        body: [
          "Keep evidence separate from the dog and people during transport. A leaking product, loose bait, vomit, or contaminated cloth should not create a second exposure in the vehicle.",
        ],
        checklist: [
          "The original packet, bottle, blister pack, bait station, medicine container, or product safety panel.",
          "Clear photographs of the front, back, active ingredients, strength, and any warning or registration information.",
          "A photograph or safe sample of the plant, mushroom, food, vomit, or chewed material only if the clinic requests it.",
          "The estimated amount missing, earliest and latest possible exposure time, and the dog's approximate weight.",
          "A list or photograph of the dog's current medicines, supplements, medical conditions, and recent treatment.",
          "A short video of tremors, wobbliness, breathing, or unusual behaviour if it can be taken without delaying care or compromising safety.",
        ],
      },
      {
        heading: "Safe preparation for transport",
        body: [
          "Follow the clinic's instructions and leave promptly. Keep the dog quiet and supervised, limit unnecessary walking, and use a secure crate, harness, or lead if this can be done safely. A second adult can monitor the dog and phone ahead while the driver concentrates on the road. Do not put hands near the mouth of a confused or painful dog, or a dog having a seizure.",
          "Ventilate the vehicle if fumes may be present, but do not transport an open or leaking chemical beside the dog. If the coat, paws, eyes, or mouth may be contaminated, ask the veterinarian what to do before handling or rinsing because the correct response depends on the substance.",
        ],
      },
      {
        heading: "What not to do",
        body: [
          "Home remedies can cause aspiration, salt poisoning, further chemical injury, or loss of valuable time. Advice that was suitable for another dog or substance may be dangerous in this case.",
        ],
        bullets: [
          "Do not induce vomiting unless the veterinarian responsible for the case explicitly directs it.",
          "Do not give milk, oil, salt, charcoal, raw egg, alcohol, herbal mixtures, food, or another substance as an antidote.",
          "Do not give human medicine, leftover veterinary medicine, or a second product to counter the first.",
          "Do not wait for symptoms after a known dangerous exposure and do not assume one episode of vomiting removed the risk.",
          "Do not handle unknown bait, chemicals, contaminated vomit, or an agitated dog without protecting yourself.",
        ],
        callout: "caution",
      },
      {
        heading: "Preventing the next exposure",
        body: [
          "Store medicines, bait, chemicals, cannabis products, garden treatments, and hazardous foods behind a closed door or in a secure high cupboard. Do not rely on a shelf that a climbing dog, child, visitor, or falling container can defeat. Keep products in their original labelled containers rather than reusing drink bottles or food tubs.",
          "During gardening, pest treatment, holidays, braais, building work, or moving, designate one adult to control dog access. Check handbags, bedside tables, bins, compost, garages, sheds, delivery parcels, and guest rooms. Ask pest-control and garden contractors what products they will use and when pets may safely return.",
        ],
        links: [
          { title: "Toxic Foods for Dogs", description: "Kitchen, braai, and food-exposure guidance.", href: "/health/toxic-foods-for-dogs-south-africa" },
          { title: "Toxic Plants for Dogs", description: "Common garden and houseplant risk planning.", href: "/health/toxic-plants-for-dogs-south-africa" },
          { title: "Vet Visit Checklist", description: "Prepare useful information for a veterinary visit.", href: "/tools/vet-visit-checklist" },
        ],
      },
    ],
    faqs: [
      { question: "Should I make my dog vomit after possible poisoning?", answer: "No, unless the veterinarian managing the exposure explicitly instructs you. Vomiting can be dangerous with caustic or petroleum products, sharp material, altered consciousness, seizures, breathing risk, and other circumstances." },
      { question: "Should I wait for symptoms if my dog seems normal?", answer: "No. Some dangerous effects are delayed. Phone a veterinarian after a known or credible exposure and give the product, timing, amount, weight, and current-condition details." },
      { question: "What if I do not know exactly what my dog ate?", answer: "Describe the location, damaged containers, missing items, possible timeframe, and current signs. Take clear photographs safely and let the veterinary team guide the next step." },
      { question: "Can I give activated charcoal at home?", answer: "Do not give charcoal unless a veterinarian specifically directs and supervises its use. It is not appropriate for every toxin and can be dangerous when aspiration is possible." },
    ],
    related: [
      { title: "Dog Emergency Checklist", description: "Prepare contacts, records and safe transport before an emergency.", href: "/emergency/dog-emergency-checklist-south-africa" },
      { title: "Toxic Foods for Dogs", description: "Food hazards and urgent exposure preparation.", href: "/health/toxic-foods-for-dogs-south-africa" },
      { title: "When to Take Your Dog to the Vet", description: "Recognise signs that should not wait.", href: "/health/when-to-take-your-dog-to-the-vet-south-africa" },
      { title: "Emergency Vet Cost Planning", description: "Prepare financially for urgent veterinary care.", href: "/costs/how-to-budget-for-emergency-vet-bills-south-africa" },
    ],
    sources: [
      { label: "MSD Veterinary Manual: veterinary toxicology", href: "https://www.msdvetmanual.com/toxicology/toxicology-introduction/overview-of-veterinary-toxicology", note: "Veterinary reference covering exposure routes, variable histories, toxic effects, and poison-management context." },
      { label: "MSD Veterinary Manual: food hazards", href: "https://www.msdvetmanual.com/en/special-pet-topics/poisoning/food-hazards", note: "Veterinary information about common food hazards including chocolate, grapes, raisins, xylitol, and macadamia nuts." },
      { label: "South African Veterinary Council", href: "https://savc.org.za/", note: "South African professional context for registered veterinary care." },
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
      "Practical South African dog heatstroke guidance covering warning signs, urgent veterinary action, cautious first steps, high-risk dogs, and hot-weather prevention.",
    intro:
      "Heatstroke is a veterinary emergency. A dog can overheat in a parked vehicle, during exercise, on a beach or trail, in a poorly ventilated room, or in a hot garden even when water is nearby. If a dog is distressed, weak, confused, vomiting, collapsing, or showing other serious heat-related signs, move out of the heat, start cautious cooling, and contact a veterinarian immediately while arranging transport.",
    updated: "2026-08-09",
    primaryImage: {
      src: "/images/guides/dog-heat-safety-south-africa.webp",
      alt: "Dog resting safely in the shade with water during warm weather",
      width: 1536,
      height: 1024,
    },
    isHealthGuide: true,
    quickFacts: [
      "A hot car is dangerous even for a short stop. Shade, an open window, or a bowl of water does not make a parked vehicle safe.",
      "Heavy panting, excessive drooling, weakness, confusion, vomiting, abnormal gum colour, collapse, or seizures can signal an emergency.",
      "Move the dog out of the heat, begin controlled cooling with cool water and airflow, and travel for veterinary care without delaying to attempt prolonged home treatment.",
      "Flat-faced, older, very young, overweight, heavy-coated, medically affected, working, and highly active dogs may need especially conservative plans.",
    ],
    sections: [
      {
        heading: "Why dogs overheat",
        body: [
          "Dogs depend mainly on panting and limited heat loss through their paws rather than sweating across the body as people do. High air temperature, humidity, direct sun, physical effort, stress, poor ventilation, warm surfaces, dehydration, and inadequate recovery can overwhelm this cooling system. A dog may continue trying to follow an owner even after safe exercise capacity has been exceeded.",
          "South African conditions vary from humid coastal weather to dry inland heat, sudden heatwaves, hot paved suburbs, beaches, farms, trails, and power interruptions that affect indoor airflow. Risk is created by the combination of the individual dog, intensity, duration, acclimatisation, surface temperature, shade, water, airflow, and the ability to stop early.",
        ],
      },
      {
        heading: "When heat becomes an emergency",
        body: [
          "Heavy panting that does not settle promptly with rest deserves attention. Excessive drooling, weakness, wobbliness, confusion, vomiting, diarrhoea, abnormal gum colour, breathing difficulty, collapse, or seizures require urgent veterinary action. Do not rely on a single temperature reading or wait for every sign to appear.",
          "Move the dog to shade or a cool, ventilated area and phone a veterinarian or emergency clinic. Tell them the dog's condition, location, estimated duration of heat or exercise, risk factors, and what cooling has started. A dog that appears better after cooling can still have internal complications and needs professional assessment when heatstroke is suspected.",
        ],
        callout: "caution",
      },
      {
        heading: "Cautious first steps while arranging veterinary care",
        body: [
          "Remove the dog from the hot environment and stop exercise. Use cool or tepid water on the body with moving air from a fan or vehicle ventilation where practical. Offer small access to drinking water only if the dog is alert and can swallow normally, but do not force water into the mouth. Begin transport as directed and continue safe cooling on the way when possible.",
          "Avoid ice baths, very cold immersion, wrapping the dog in wet towels for a prolonged period, or any method that delays the veterinary journey. Wet coverings can trap heat as they warm. A confused or collapsed dog, or a dog having a seizure, can bite or aspirate, so prioritise safe handling, airflow, and professional instructions.",
        ],
      },
      {
        heading: "Everyday situations and safer planning",
        body: [
          "Prevention depends on changing the plan before the dog is committed to the outing. Check the weather and humidity, but also judge sun exposure, surface heat, wind, shade, drinking water, transport, fitness, and escape routes back to a cool place.",
        ],
        table: {
          headers: ["Situation", "Risk", "Safer planning"],
          rows: [
            ["Parked vehicle", "Temperatures can rise rapidly and ventilation is inadequate.", "Do not leave the dog in the vehicle. Arrange a dog-safe destination, adult supervision, or leave the dog safely at home."],
            ["Midday pavement or townhouse paths", "Radiant heat and hot surfaces add to body heat and may injure paws.", "Walk early or late, choose shade and cooler surfaces, and shorten or cancel the outing when conditions are unsafe."],
            ["Beach, hike, or open garden", "Direct sun, reflected heat, limited shade, excitement, and distance from help increase exposure.", "Carry water, plan shade and turnaround points, use a lead where required, and stop well before fatigue."],
            ["Running, training, or working", "Drive and concentration can mask fatigue while effort produces more heat.", "Use brief sessions, frequent recovery, cool hours, conservative intensity, and individual veterinary guidance."],
            ["Poorly ventilated room or power interruption", "Still air, humidity, and enclosed heat reduce cooling even without direct sun.", "Provide safe cross-ventilation, cool resting areas, backup planning, supervision, and relocation if the space becomes unsafe."],
          ],
        },
      },
      {
        heading: "Dogs needing extra caution",
        body: [
          "Flat-faced dogs may have less efficient airflow and can deteriorate rapidly. Puppies, seniors, overweight dogs, heavy-coated dogs, dogs that are unfit or not acclimatised, and dogs with airway, heart, neurological, or other medical conditions also need conservative limits. A dog recovering from illness or taking medication may have additional considerations that require veterinary advice.",
          "Working and highly active dogs are not protected by fitness alone. Their enthusiasm, speed, protective equipment, terrain, and sustained effort can increase heat production. Growing puppies should not be used for forced distance exercise, while older dogs may need shorter, slower routes and easier access to shade and transport.",
        ],
      },
      {
        heading: "Before a hot-weather walk or outing",
        body: [
          "Cancel or shorten an outing when the safe plan is uncertain. Indoor sniffing, food puzzles, gentle training, and calm enrichment are valid alternatives to exercise in dangerous heat.",
        ],
        checklist: [
          "Check temperature, humidity, sun exposure, route shade, surface heat, wind, and the return journey.",
          "Choose an early or late time and identify a cool place where the dog can recover.",
          "Carry enough drinking water and a suitable bowl; do not rely on public taps or natural water sources.",
          "Assess the dog's breathing, energy, body condition, coat, health, age, fitness, and recent recovery.",
          "Use secure, comfortable walking equipment and plan a shorter turnaround point than the dog's maximum ability.",
          "Check beach, trail, estate, park, and public-control rules before leaving.",
          "Make sure transport will remain cool and that the dog will never wait in a parked vehicle.",
        ],
      },
      {
        heading: "Heat-aware routines at home",
        body: [
          "Shade moves during the day, and a paved courtyard, balcony, kennel, garage, or enclosed room can become much hotter than expected. Provide more than one water source, cool indoor rest, reliable airflow, and supervision during severe conditions. A garden with water is not automatically safe when there is no effective shade or ventilation.",
          "Keep dogs at a healthy body condition with veterinary support, maintain coats appropriately rather than shaving without advice, and build fitness gradually in cooler conditions. Review summer routines before travel, daycare, boarding, outdoor events, hikes, and holidays.",
        ],
        links: [
          { title: "Dogs for Active Owners", description: "Match activity plans to heat, fitness, training, and recovery.", href: "/breeds/best-dogs-for-active-owners-south-africa" },
          { title: "Dog Walk Planner", description: "Plan distance, water, timing, equipment, and conditions.", href: "/tools/dog-walk-planner" },
          { title: "Hiking With Dogs", description: "Prepare for South African trails and outdoor risks.", href: "/dog-friendly/hiking-with-dogs-south-africa" },
        ],
      },
    ],
    faqs: [
      { question: "Can a dog get heatstroke in the shade?", answer: "Yes. High temperature, humidity, poor airflow, exertion, stress, and individual risk can overwhelm cooling even without direct sun." },
      { question: "Should I use an ice bath for suspected heatstroke?", answer: "Do not use an ice bath or extreme cooling. Move the dog out of the heat, begin controlled cooling with cool water and airflow, contact a veterinarian, and do not delay transport." },
      { question: "Is a dog safe in a parked car with windows open?", answer: "No. An open window, shade, or water does not make a parked vehicle safe. Arrange continuous adult supervision in a genuinely cool environment or do not take the dog." },
      { question: "Does improvement after cooling mean the dog can stay home?", answer: "Not when heatstroke is suspected. Internal complications may not be obvious, so follow the veterinary team's assessment and transport instructions." },
    ],
    related: [
      { title: "Dog Emergency Checklist", description: "Prepare contacts, records and safe transport before an emergency.", href: "/emergency/dog-emergency-checklist-south-africa" },
      { title: "Dogs for Active Owners", description: "Responsible exercise and outdoor-companion planning.", href: "/breeds/best-dogs-for-active-owners-south-africa" },
      { title: "Ticks and Fleas", description: "Outdoor parasite checks and prevention planning.", href: "/health/ticks-and-fleas-dogs-south-africa" },
      { title: "Dog-Friendly Outings", description: "Plan suitable places and safer trips.", href: "/dog-friendly/dog-friendly-places-south-africa" },
    ],
    sources: [
      { label: "RSPCA: heatstroke in dogs", href: "https://www.rspca.org.uk/adviceandwelfare/pets/dogs/health/heatstroke", note: "Veterinary-reviewed welfare guidance on heatstroke signs, urgent action, cooling, and prevention." },
      { label: "Royal Veterinary College: heatstroke in dogs and cats", href: "https://www.rvc.ac.uk/small-animal-vet/teaching-and-research/fact-files/heatstroke-in-dogs-and-cats", note: "Veterinary owner guidance about heat-related illness, cooling, risk factors, and urgent care." },
      { label: "South African Veterinary Council", href: "https://savc.org.za/", note: "South African professional context for registered veterinary assessment and emergency care." },
    ],
  },
  {
    slug: "dog-behaviour-problems-south-africa",
    path: "/training/dog-behaviour-problems-south-africa",
    hubTitle: "Dog Training",
    hubPath: "/training",
    title: "Dog Behaviour Problems in South Africa: Causes and Practical Next Steps",
    seoTitle: "Dog Behaviour Problems South Africa | Practical Training Guide",
    description:
      "A practical South African guide to barking, chewing, pulling, fear, reactivity, guarding, separation-related behaviour, medical checks, management, and humane training.",
    intro:
      "Behaviour is information, not a moral failing. Barking, pulling, chewing, guarding, toileting changes, fear, or over-excitement can reflect learning history, environment, unmet needs, stress, pain, illness, or several factors together. Good problem-solving starts by making everyone safe, observing the context, arranging veterinary assessment when health may be involved, and teaching useful alternatives without fear or intimidation.",
    updated: "2026-08-09",
    primaryImage: {
      src: "/images/guides/dog-behaviour-training-south-africa.webp",
      alt: "Dog owner practising calm reward-based training with a dog at home",
      width: 1536,
      height: 1024,
    },
    quickFacts: [
      "A sudden behaviour change, new aggression, sensitivity to touch, sleep disruption, or toileting change can have a medical component and deserves veterinary assessment.",
      "Management prevents rehearsal and protects people while training builds a more useful response. Gates, distance, routines, leads, and visual barriers are legitimate tools.",
      "Reward-based training teaches the dog what to do. Hitting, alpha rolls, shock methods, choke-based corrections, intimidation, and dominance confrontations can worsen fear and risk.",
      "Choose help according to the problem: routine skills may suit a humane trainer, while serious fear, aggression, guarding, or separation distress may need coordinated veterinary and behaviour support.",
    ],
    sections: [
      {
        heading: "Behaviour always has context",
        body: [
          "The visible action is only one part of the picture. Ask what happened immediately before it, what the dog did, what happened afterwards, where it occurs, who is present, and whether the pattern is changing. Barking at a gate, barking when alone, and barking during play may look similar but have different contributors and therefore need different plans.",
          "Pain, skin or ear discomfort, digestive or urinary problems, sensory change, neurological illness, medication effects, and age-related changes can affect behaviour. Fear, anxiety, poor socialisation, adolescence, under-stimulation, over-stimulation, insufficient sleep, inconsistent routines, and repeated exposure to situations the dog cannot handle can also contribute. Breed tendencies may shape motivation, but they do not predict an individual dog's outcome or justify stereotyping.",
        ],
      },
      {
        heading: "Training, management, medical, or specialist behaviour help?",
        body: [
          "Many cases involve more than one category. Management reduces immediate risk and prevents repetition. Training teaches skills. Veterinary care investigates health and may be part of a behaviour plan. A qualified behaviour professional can assess complex emotion, triggers, safety, and progressive training.",
        ],
        bullets: [
          "Training problem: the dog has not yet learned a reliable skill for this setting or level of distraction.",
          "Management problem: the environment repeatedly allows unwanted behaviour or exposes the dog to more intensity than it can handle.",
          "Possible medical problem: behaviour changed suddenly, occurs with pain or physical signs, or appears in an older or medically affected dog.",
          "Professional behaviour case: there is aggression, serious fear, resource guarding, escape risk, separation distress, repeated bites, or a complex pattern that is worsening.",
        ],
      },
      {
        heading: "Common concerns and useful first steps",
        body: [
          "First steps should lower risk, identify patterns, and create opportunities to reward calm or useful behaviour. They are not a diagnosis or a complete individual treatment plan.",
        ],
        table: {
          headers: ["Behaviour", "Possible contributors", "Useful first steps", "When professional help matters"],
          rows: [
            ["Barking or visitor behaviour", "Alerting, fear, frustration, boredom, access to windows or gates, or learned attention.", "Reduce trigger exposure, create distance, reward quiet settling, and use a predictable visitor routine.", "Get help when barking includes panic, lunging, attempted bites, neighbour conflict, or cannot be interrupted safely."],
            ["Jumping, pulling, or over-excitement", "Insufficient skill practice, exciting greetings, excess intensity, or reinforcement from reaching people and places.", "Practise at lower distraction, reward four paws down and a loose lead, and shorten sessions.", "Seek help when the dog is difficult to control, redirects, injures someone, or cannot recover."],
            ["Chewing, digging, or destruction", "Normal exploration, teething, boredom, stress, access, separation distress, or insufficient rest and enrichment.", "Prevent access, provide safe outlets, review routine, and observe whether it happens only when alone.", "Contact a vet or behaviour professional for ingestion, self-injury, panic signs, or sudden onset."],
            ["Toileting problems", "Incomplete training, access or schedule issues, fear, marking, digestive or urinary illness, or age-related change.", "Return to close supervision and frequent appropriate opportunities without punishment.", "Veterinary assessment matters for sudden change, straining, pain, increased thirst, diarrhoea, or an older dog."],
            ["Fear, reactivity, or resource guarding", "Threat perception, pain, past learning, insufficient distance, competition, or repeated forced interaction.", "Increase distance, prevent confrontation, separate resources safely, and stop rehearsing the trigger.", "Use qualified help early when there is growling, snapping, biting, escalating fear, or risk to children or animals."],
            ["Recall problems", "Distraction is stronger than training history, rewards are weak, or freedom was introduced too quickly.", "Use a long line in safe areas, reward check-ins, and practise away from hazards.", "Get coaching when escape, livestock, wildlife, roads, or dog conflict create serious risk."],
          ],
        },
      },
      {
        heading: "Separation-related behaviour needs its own assessment",
        body: [
          "Destruction, barking, toileting, pacing, drooling, escape attempts, or refusal to eat when alone may reflect separation distress rather than disobedience. A camera can help establish when signs begin and whether the dog settles, but do not provoke a long absence simply to test severity.",
          "Avoid punishment after returning home because it does not address the emotion and can add anxiety. Use immediate management to prevent intolerable absences where possible, speak to a veterinarian when distress is significant, and seek a professional plan based on gradual, safe progress rather than forcing the dog to cry it out.",
        ],
        links: [
          { title: "Separation Anxiety in Dogs", description: "Recognise patterns and plan humane next steps.", href: "/training/separation-anxiety-dogs-south-africa" },
        ],
      },
      {
        heading: "Pain, illness, and sudden change",
        body: [
          "Book a veterinary assessment before treating a sudden or unexplained behaviour change as a training failure. New sensitivity, growling when touched, reluctance to jump, sleep disturbance, hiding, appetite change, confusion, toileting accidents, unusual vocalising, or a change in tolerance may accompany pain or illness.",
          "Give the veterinarian a timeline, videos taken safely, medical and medication history, appetite and toileting notes, mobility changes, sleep pattern, and exact trigger context. Behaviour and veterinary professionals can coordinate when both health and learning require attention.",
        ],
        callout: "important",
      },
      {
        heading: "A humane everyday behaviour plan",
        body: [
          "Meet the dog's basic needs with adequate sleep, predictable food and toilet routines, suitable exercise, sniffing, play, social contact, and safe opportunities to chew or forage. More exercise is not always the answer: an over-tired or chronically aroused dog may need calmer routines and better recovery, not relentless activity.",
          "Prevent unwanted rehearsal, teach one achievable alternative at a time, and reward it generously. Work below the point where the dog is overwhelmed. Short, frequent sessions in the real environment usually teach more than long confrontational sessions. Progress includes faster recovery and safer choices, not only perfect obedience.",
        ],
        bullets: [
          "Use distance, barriers, leads, closed doors, covered windows, and planned routines to keep situations manageable.",
          "Reward calm observation, disengagement, loose-lead movement, settling, coming when called, and moving away from resources.",
          "Let fearful dogs opt out rather than forcing greetings, handling, or proximity.",
          "Avoid punishment intended to suppress warnings such as growling, because removing the warning does not remove the underlying concern.",
        ],
      },
      {
        heading: "Before contacting a trainer or behaviour professional",
        body: [
          "A clear record helps a professional understand the pattern and recommend the right level of support. Protect privacy when recording visitors or public spaces, and never stage a dangerous incident for video.",
        ],
        checklist: [
          "Write down the behaviour, trigger, distance, location, people or animals present, and what happened immediately before and after.",
          "Note when it began, how often it happens, whether intensity is changing, and how long recovery takes.",
          "Record sleep, exercise, meals, toileting, medication, health changes, household changes, and time alone.",
          "Collect safe video from ordinary situations without provoking aggression, panic, or conflict.",
          "List previous training methods, equipment, rewards, professional advice, and what has helped or worsened the pattern.",
          "Arrange a veterinary check when pain, illness, sudden change, severe anxiety, aggression, or an older dog is involved.",
          "Ask the professional about qualifications, methods, continuing education, referral relationships, safety planning, and written follow-up.",
        ],
      },
      {
        heading: "Choosing safe professional help",
        body: [
          "Look for transparent, reward-based methods and a professional who takes a history, discusses safety, works within competence, and refers to a veterinarian or specialist when needed. Be cautious of guarantees, instant cures, pack-leader claims, deliberate flooding, or methods built around fear, pain, surprise, or intimidation.",
          "Serious aggression, bites, resource guarding, severe fear, self-injury, or separation distress may need a coordinated plan rather than a group obedience class. Keep children and vulnerable adults physically separated from risky situations until an appropriately qualified professional has assessed them.",
        ],
        links: [
          { title: "How to Choose a Dog Trainer", description: "Questions about methods, qualifications, safety, and fit.", href: "/training/how-to-choose-a-dog-trainer-south-africa" },
          { title: "Leash Training", description: "Build practical lead skills without intimidation.", href: "/training/leash-training-dogs-south-africa" },
          { title: "Puppy Training", description: "Start household and everyday skills early.", href: "/training/puppy-training-south-africa" },
        ],
      },
    ],
    faqs: [
      { question: "Is my dog being dominant?", answer: "A dominance label rarely explains what maintains a household behaviour. Look at triggers, emotion, learning history, health, environment, and consequences, then teach and manage the specific behaviour safely." },
      { question: "Should I punish my dog for growling?", answer: "No. Growling communicates discomfort or threat. Create distance and obtain appropriate help rather than punishing the warning while leaving the cause unresolved." },
      { question: "When should a vet assess a behaviour problem?", answer: "Arrange veterinary assessment for sudden change, pain or physical signs, new aggression, toileting change, sleep disruption, severe anxiety, an older dog, or any concern that health may contribute." },
      { question: "Can more exercise fix destructive behaviour?", answer: "Not by itself. Destruction may involve access, teething, boredom, unmet enrichment, over-arousal, illness, or separation distress. The plan should match the observed cause and include adequate rest." },
    ],
    related: [
      { title: "Choose a Dog Trainer", description: "Evaluate methods and professional fit.", href: "/training/how-to-choose-a-dog-trainer-south-africa" },
      { title: "Separation Anxiety", description: "Understand distress when a dog is left alone.", href: "/training/separation-anxiety-dogs-south-africa" },
      { title: "Vet Visit Checklist", description: "Prepare health and behaviour observations for the clinic.", href: "/tools/vet-visit-checklist" },
    ],
    sources: [
      { label: "AVSAB: humane dog training position statement", href: "https://avsab.org/resources/position-statements/", note: "Veterinary behaviour guidance supporting reward-based methods and avoiding aversive training." },
      { label: "RSPCA: finding a good dog trainer", href: "https://www.rspca.org.uk/adviceandwelfare/pets/dogs/training/trainer", note: "Animal-welfare guidance on humane methods and evaluating a trainer." },
      { label: "South African Veterinary Council", href: "https://savc.org.za/", note: "Professional context for veterinary assessment where health may affect behaviour." },
    ],
  },
  {
    slug: "best-dogs-for-active-owners-south-africa",
    path: "/breeds/best-dogs-for-active-owners-south-africa",
    hubTitle: "Breed Guides",
    hubPath: "/breeds",
    title: "Best Dogs for Active Owners in South Africa",
    seoTitle: "Best Dogs for Active Owners South Africa | Lifestyle Guide",
    description:
      "Choose an active companion in South Africa by matching the individual dog's age, health, drive, heat tolerance, training, recovery, and outdoor suitability to real routines.",
    intro:
      "The best dog for an active owner is not automatically the highest-energy breed. A suitable companion can cope with the household's real weekday routine, learn safe public skills, recover calmly, and participate at an intensity appropriate for age, health, fitness, structure, and South African conditions. Breed type offers clues, but the individual dog and owner plan decide the fit.",
    updated: "2026-08-09",
    primaryImage: {
      src: "/images/guides/active-dog-owner-south-africa.webp",
      alt: "Active dog owner walking with a healthy dog on a South African trail",
      width: 1536,
      height: 1024,
    },
    quickFacts: [
      "Define an active home by repeatable weekday time, training, transport, recovery, and mental enrichment, not an occasional holiday hike.",
      "High energy does not guarantee safe running, hiking, recall, sociability, heat tolerance, or the ability to settle afterwards.",
      "Puppies need age-appropriate activity and should not be pushed through repetitive high-impact distance exercise while growing.",
      "Mixed-breed and rescue dogs can be excellent active companions when health, temperament, drive, history, and outdoor behaviour are assessed carefully.",
    ],
    sections: [
      {
        heading: "What active ownership really requires",
        body: [
          "Walking, hiking, running, outdoor trips, training sports, and active family life place different demands on a dog. A reliable walking companion needs comfortable lead skills and recovery. A trail dog also needs secure control, transport tolerance, paw resilience, wildlife management, and the ability to settle around other users. Running adds repetitive impact, sustained fitness, and veterinary considerations.",
          "Count the quiet work as well as the kilometres. Active dogs need daily training, sniffing, problem-solving, sleep, calm household behaviour, grooming or body checks, and recovery days. If the plan depends on perfect weather, every weekend being free, or an adolescent dog exercising itself in a garden, it is not yet a sustainable match.",
        ],
      },
      {
        heading: "Match the lifestyle, not a ranked breed list",
        body: [
          "Representative sporting, herding, working, terrier, hound, Africanis-type, and mixed-breed dogs may suit active homes, but there is wide variation within every group. A Border Collie may need intensive mental work and skilled handling. A terrier may bring prey drive and persistence. A retriever-type dog may enjoy outdoor activity but still need weight, joint, water-safety, and recall management.",
          "An adult rescue or mixed-breed dog whose energy, sociability, recovery, and handling are already observable can be a thoughtful choice. Ask what the dog has actually done safely rather than relying on appearance. No breed label overrides an individual veterinary assessment, temperament, training history, or the rules of the intended activity.",
        ],
      },
      {
        heading: "Lifestyle matching table",
        body: [
          "Use the table to identify traits and questions, then assess individual candidates honestly. It is not a ranking and does not promise suitability.",
        ],
        table: {
          headers: ["Lifestyle", "Traits that may help", "Questions to ask yourself"],
          rows: [
            ["Daily walking", "Comfortable lead movement, moderate recovery, confidence around ordinary environments.", "Can I walk consistently on weekdays and adapt for heat, illness, work pressure, and bad weather?"],
            ["Running", "Mature healthy body, gradual conditioning, manageable pace, focus, and suitable structure.", "Has a veterinarian cleared this individual, and can I avoid heat and inappropriate repetitive impact?"],
            ["Hiking", "Endurance, secure control, recall foundations, stable feet, transport tolerance, and calm around trail users.", "Can I manage water, ticks, snakes, wildlife, terrain, trail rules, emergencies, and the return distance?"],
            ["Weekend adventures", "Adaptability, calm travel, ability to rest away from home, and recovery after novelty.", "What meaningful activity and enrichment will the dog receive during an ordinary working week?"],
            ["Training sports", "Motivation, focus, body awareness, resilience, and enjoyment of structured learning.", "Do I have access to humane coaching, safe facilities, foundations, and time for gradual progression?"],
            ["Active family home", "Predictable temperament, suitable sociability, manageable arousal, and ability to settle around household life.", "Can every family member follow the same safety, rest, child-interaction, and training routines?"],
          ],
        },
      },
      {
        heading: "Age, growth, fitness, and health",
        body: [
          "Puppies are active but not miniature endurance athletes. Free movement, play, exploration, and short age-appropriate outings differ from forced repetitive running beside a bicycle or sustained distance on hard ground. Ask a veterinarian about growth, breed or body type, joints, and when a planned activity is appropriate.",
          "Build adult fitness gradually and watch gait, enthusiasm, breathing, paw condition, recovery, appetite, and stiffness. Older dogs may remain wonderfully active with adjusted distance, surface, pace, rest, and medical support. Limping, repeated slowing, pain, unusual fatigue, breathing difficulty, collapse, or delayed recovery requires veterinary review rather than more conditioning.",
        ],
      },
      {
        heading: "South African trail and climate planning",
        body: [
          "Heat tolerance varies with body shape, airway, coat, weight, fitness, acclimatisation, health, humidity, and activity. Start early, shorten plans, carry more water than expected, build in shade and turnaround points, and cancel when safe conditions are uncertain. Never leave the dog in a parked vehicle before or after activity.",
          "Check ticks after long grass, bush, farms, trails, and coastal vegetation, and maintain veterinarian-guided parasite prevention. Learn local snake risk, keep the dog from investigating holes or wildlife, and use secure control. Inspect paws for cuts, thorns, grass seeds, hot-surface injury, worn pads, and material between the toes.",
        ],
        links: [
          { title: "Heatstroke in Dogs", description: "Recognise heat danger and plan safer exercise.", href: "/emergency/heatstroke-in-dogs-south-africa" },
          { title: "Ticks and Fleas", description: "Outdoor checks and parasite-prevention planning.", href: "/health/ticks-and-fleas-dogs-south-africa" },
          { title: "Hiking With Dogs", description: "Prepare for routes, rules, water, and emergencies.", href: "/dog-friendly/hiking-with-dogs-south-africa" },
        ],
      },
      {
        heading: "Training and public control",
        body: [
          "A safe outdoor companion can walk on a loose lead, check in, move away from wildlife or food, wait calmly, load into transport, accept body checks, and settle while people pass. Recall should be trained progressively, but it does not replace a lead where rules, roads, livestock, wildlife, cliffs, or other risks require physical control.",
          "Prey drive, fear, frustration, over-excitement, and social behaviour matter as much as stamina. Do not force greetings or assume an athletic dog enjoys crowded parks. Use reward-based training and appropriate equipment, and obtain qualified help before risky patterns become established.",
        ],
      },
      {
        heading: "Before choosing an active companion",
        body: [
          "Answer for the household you have now, including ordinary weekdays and the dog's rest of life. Consider transport, housing, work hours, budget, injury care, ageing, grooming, training access, and who takes responsibility when the main active owner is unavailable.",
        ],
        checklist: [
          "Describe the actual weekly plan: distance, pace, terrain, travel, training, rest days, and indoor enrichment.",
          "Ask about the individual dog's age, health, body condition, joints, airway, gait, previous fitness, recovery, and veterinary history.",
          "Assess prey drive, recall foundations, lead skills, dog and human sociability, fear, escape history, and ability to settle.",
          "Plan for South African heat, humidity, ticks, snakes, grass seeds, hot surfaces, water, shade, and emergency access.",
          "Confirm trail, beach, park, estate, accommodation, transport, and public-control rules.",
          "Budget for suitable equipment, training, parasite prevention, food, transport, emergency care, and possible injury rehabilitation.",
          "Consider an adult rescue or mixed-breed dog whose observed behaviour and energy match the plan.",
        ],
      },
      {
        heading: "Recovery is part of an active life",
        body: [
          "A suitable dog should be able to sleep and settle after activity. Schedule quiet days, protect uninterrupted rest, provide suitable nutrition and water, and avoid stacking long outings, heat, travel, and intense training without recovery. Persistent over-arousal is not proof that the dog needs endless exercise.",
          "Review the plan as the dog grows, gains skill, recovers from illness or injury, and ages. A relationship built around adaptable shared activity lasts longer than one built around meeting a fixed distance target.",
        ],
        links: [
          { title: "Dog Adoption in South Africa", description: "Assess lifestyle fit and ask rescues practical questions.", href: "/adoption/dog-adoption-south-africa" },
          { title: "Dog Breed Comparison Checklist", description: "Compare realistic care and lifestyle factors.", href: "/tools/dog-breed-comparison-checklist" },
          { title: "Dog Training", description: "Build practical everyday and public skills.", href: "/training" },
        ],
      },
    ],
    faqs: [
      { question: "What is the best dog breed for running in South Africa?", answer: "There is no universal best breed. The individual must be mature, healthy, structurally suitable, gradually conditioned, manageable in public, and able to exercise safely in the planned climate and terrain." },
      { question: "Does a high-energy dog automatically make a good hiking dog?", answer: "No. Hiking also requires health, paw resilience, transport tolerance, secure control, recovery, suitable social behaviour, and management around heat, wildlife, ticks, and trail users." },
      { question: "Can a rescue dog become an active companion?", answer: "Yes, when the individual dog's health, temperament, energy, history, confidence, and training are suitable. Build fitness and outdoor skills gradually after veterinary and rescue guidance." },
      { question: "How much running should a puppy do?", answer: "Avoid prescribing distance by age online. Puppies need developmentally appropriate movement, and a veterinarian should advise on repetitive impact for the individual dog's growth and intended activity." },
    ],
    related: [
      { title: "Heatstroke in Dogs", description: "Urgent signs and hot-weather prevention.", href: "/emergency/heatstroke-in-dogs-south-africa" },
      { title: "Dog-Friendly Places", description: "Find and plan appropriate outings.", href: "/dog-friendly/dog-friendly-places-south-africa" },
      { title: "Dog Adoption", description: "Match an individual dog to household life.", href: "/adoption/dog-adoption-south-africa" },
    ],
    sources: [
      { label: "WSAVA Global Pain Council resources", href: "https://wsava.org/global-guidelines/global-pain-council-guidelines/", note: "Veterinary context for recognising pain and protecting physical wellbeing during activity." },
      { label: "RSPCA: exercising your dog", href: "https://www.rspca.org.uk/adviceandwelfare/pets/dogs/health/exercise", note: "Welfare guidance about appropriate exercise, individual needs, and safe routines." },
      { label: "NSPCA: choosing a dog", href: "https://nspca.co.za/choosing-a-dog/", note: "South African welfare context for matching a dog to available time, space, and lifestyle." },
    ],
  },
  {
    slug: "best-dogs-for-small-homes-south-africa",
    path: "/breeds/best-dogs-for-small-homes-south-africa",
    hubTitle: "Breed Guides",
    hubPath: "/breeds",
    title: "Best Dogs for Small Homes in South Africa",
    seoTitle: "Best Dogs for Small Homes South Africa | Flats and Townhouses",
    description:
      "Choose a dog for a South African flat, townhouse, complex, rental, or small garden by assessing temperament, energy, barking, routine, rules, costs, and individual fit.",
    intro:
      "A small home does not automatically require a small dog, and a small dog is not automatically easy in a flat or complex. The better match is an individual dog whose energy, temperament, barking, toilet needs, exercise, alone-time tolerance, handling, and care requirements fit the household, property rules, neighbours, budget, and daily routine.",
    updated: "2026-08-09",
    primaryImage: {
      src: "/images/guides/dog-small-home-south-africa.webp",
      alt: "Dog relaxing with its owner in a comfortable small home",
      width: 1536,
      height: 1024,
    },
    quickFacts: [
      "Temperament, energy, barking, ability to settle, toilet access, and routine usually matter more than body size alone.",
      "Get written landlord and body corporate, complex, or estate approval before committing to a dog, and verify the current rules yourself.",
      "A balcony or small garden is not a substitute for walks, sniffing, training, companionship, and appropriate mental stimulation.",
      "Adult and senior dogs can be easier to assess for energy, size, barking, sociability, and small-home habits than a growing puppy.",
    ],
    sections: [
      {
        heading: "What makes a dog suitable for a small home",
        body: [
          "Small-home success depends on what happens throughout the day. A dog that rests quietly, toilets on a workable schedule, walks comfortably through shared spaces, and recovers from normal sounds may fit better than a physically smaller dog that is highly vocal, intense, fearful, or frustrated. A large calm adult may sometimes cope well where rules allow, while a small working or terrier-type dog may need substantial outlets.",
          "Assess the individual rather than buying a breed promise. Energy, temperament, age, health, previous living experience, separation response, sociability, prey drive, grooming, and training history vary within breed types and mixed-breed dogs. The owner must still provide exercise and enrichment outside the property's footprint.",
        ],
      },
      {
        heading: "Apartments, flats, townhouses, complexes, and rentals",
        body: [
          "Obtain written permission before adoption or purchase. Ask about the number of animals, adult size, breed or type restrictions, common areas, leads, lifts, gardens, balconies, visitor dogs, noise complaints, waste disposal, and any approval process. Policies differ, so do not rely on a neighbour's arrangement or an old listing.",
          "Walk the real route from the front door to the toilet area. Consider security doors, narrow passages, shared entrances, stairs, lifts, other dogs, children, delivery activity, poor weather, loadshedding, and hot paving. Puppies, seniors, short-legged dogs, and dogs with joint, back, breathing, or mobility concerns may struggle with repeated stairs.",
        ],
      },
      {
        heading: "Home situation matching table",
        body: [
          "Use these questions to assess an individual dog's likely fit. No row guarantees suitability, and rescue organisations, landlords, and complexes may use different processes or rules.",
        ],
        table: {
          headers: ["Home situation", "Important dog traits", "Questions to consider"],
          rows: [
            ["Upstairs flat with stairs", "Manageable size and mobility, reliable toileting, calm shared-space behaviour.", "Can the dog safely use the stairs several times daily, including during illness, injury, puppyhood, or old age?"],
            ["Building with a lift", "Comfort with enclosed spaces, people, sounds, doors, and close encounters.", "Can I train lift routines and avoid forced proximity to unfamiliar dogs or people?"],
            ["Townhouse or small garden", "Ability to settle without boundary barking, suitable exercise needs, and secure habits.", "Will I provide daily walks and manage gates, walls, passers-by, heat, pools, and escape points?"],
            ["Rental or complex", "Fit with written animal rules and neighbour tolerance.", "Do I have current written approval, and what happens if the lease, ownership, or rules change?"],
            ["Busy shared entrance", "Recoverable social behaviour, lead skills, focus, and safe visitor routines.", "Can I create distance, choose quieter times, and prevent door dashing or confrontations?"],
            ["Home with long workdays", "Proven alone-time tolerance and needs compatible with available care.", "Who provides toilet breaks, exercise, enrichment, and support if the dog shows separation distress?"],
          ],
        },
      },
      {
        heading: "Barking, neighbours, and shared sounds",
        body: [
          "Corridors, lifts, gates, footsteps, buzzers, delivery activity, nearby dogs, and windows overlooking communal areas can trigger repeated barking. Ask what the individual dog does around sounds and visual movement, how quickly it recovers, and whether barking occurs when alone. No breed is guaranteed silent.",
          "Choose a resting area away from the busiest window or door, use visual barriers where helpful, reward calm responses, and plan visitors rather than allowing repeated rushing at the entrance. If barking reflects fear, reactivity, or separation distress, address the underlying issue with humane professional help instead of punishment.",
        ],
        links: [
          { title: "Quiet Dog Breeds", description: "Understand barking tendencies without silence guarantees.", href: "/breeds/quiet-dog-breeds-south-africa" },
          { title: "Dog Behaviour Problems", description: "Assess barking, triggers, health, and humane next steps.", href: "/training/dog-behaviour-problems-south-africa" },
          { title: "Separation Anxiety", description: "Recognise distress that occurs when a dog is alone.", href: "/training/separation-anxiety-dogs-south-africa" },
        ],
      },
      {
        heading: "Exercise, enrichment, toilet routines, and heat",
        body: [
          "Plan predictable toilet opportunities before work, during the day where needed, after work, before bed, and during illness or bad weather. Balconies should not become an unsupervised toilet, exercise, or confinement area. Provide secure access and prevent falls, climbing, heat exposure, and conflict with neighbouring animals.",
          "Daily life should include walks, sniffing, reward-based training, play, safe chewing or foraging, companionship, and uninterrupted rest. Small indoor spaces can become hot, especially with direct sun, limited airflow, paved courtyards, or power interruptions, so provide cool resting options and never leave a dog in a hot enclosed area.",
        ],
      },
      {
        heading: "Puppies, adults, seniors, and rescue assessment",
        body: [
          "Puppies require frequent toilet trips, gradual alone-time practice, social learning, safe chewing outlets, and a plan for their adult size and energy. An adult dog may offer more observable information about barking, toileting, grooming, sociability, and ability to settle. Seniors can suit quieter homes but may need easier outdoor access, non-slip flooring, more veterinary care, and reduced stairs.",
          "Ask a rescue or rehoming family what has actually been observed in a home, foster placement, kennel, street, or previous property. Meet-and-greets and trial periods may be offered by some organisations, but processes differ. Ask about children, cats, dogs, visitors, handling, guarding, separation, escape history, medical records, grooming, and how the dog responds to noise and confinement.",
        ],
      },
      {
        heading: "Cost and daily-care reality",
        body: [
          "Smaller housing does not make ownership inexpensive. Budget for food, veterinary prevention and illness, sterilisation and identification where needed, training, grooming, walking equipment, deposits or property charges, pet sitting, daycare or walkers, transport, enrichment, cleaning, and emergency care. A dog with intensive grooming, medical, training, or separation needs may cost more than expected regardless of size.",
          "Plan who provides care during office days, travel, illness, emergencies, or housing changes. A sustainable arrangement should not depend on neighbours tolerating unresolved barking or on a dog coping alone for longer than it can manage.",
        ],
        links: [
          { title: "Cost of Owning a Dog", description: "Build a realistic South African ownership budget.", href: "/costs/cost-of-owning-a-dog-south-africa" },
          { title: "Dog Laws", description: "Check broader owner responsibilities and local rules.", href: "/laws/dog-laws-south-africa" },
        ],
      },
      {
        heading: "Before bringing a dog into a flat, townhouse, or complex",
        body: [
          "Complete the property and lifestyle checks before committing. Avoid choosing under time pressure or assuming that a young, small, or quiet-looking dog will remain easy without training and care.",
        ],
        checklist: [
          "Obtain current written landlord and body corporate, complex, or estate approval, including number, size, breed, and common-area rules.",
          "Assess the individual dog's energy, barking, settling, toileting, alone-time response, sociability, fear, grooming, health, and adult size.",
          "Walk the toilet and exercise route at busy, quiet, hot, dark, and bad-weather times.",
          "Plan stairs, lifts, shared entrances, visitors, deliveries, other dogs, children, and emergency evacuation.",
          "Create a quiet sleep area, safe enrichment, secure balcony and window access, comfortable flooring, shade, water, and ventilation.",
          "Set a realistic weekday schedule for walks, toilet breaks, companionship, training, and gradual alone-time practice.",
          "Budget for food, veterinary care, training, grooming, walking support, transport, property costs, and emergencies.",
          "Ask the rescue for observed behaviour and policies without assuming every organisation follows the same process.",
        ],
      },
    ],
    faqs: [
      { question: "Do small homes always need small dogs?", answer: "No. A calm larger adult may sometimes fit better than a small, intense, highly vocal dog when property rules allow. Energy, temperament, routine, noise, health, and care needs matter greatly." },
      { question: "Are small dogs automatically easy apartment dogs?", answer: "No. Small dogs still need exercise, training, toilet access, enrichment, healthcare, and grooming, and some are energetic, vocal, fearful, or prone to separation difficulties." },
      { question: "Can a balcony replace walks or a garden?", answer: "No. A balcony is not an exercise plan or a safe unsupervised living area. Dogs need suitable outdoor movement, sniffing, training, social contact, and toilet routines." },
      { question: "Is an adult rescue dog suitable for a flat?", answer: "It can be when the individual dog's observed energy, barking, toileting, sociability, health, and alone-time response fit the home. Ask the rescue what is known and allow time for adjustment." },
    ],
    related: [
      { title: "Best Small Dogs", description: "Compare small-dog care and temperament considerations.", href: "/breeds/best-small-dogs-south-africa" },
      { title: "Dog Adoption", description: "Assess household fit and ask rescues practical questions.", href: "/adoption/dog-adoption-south-africa" },
      { title: "Dog Behaviour Problems", description: "Understand barking, fear, reactivity, and separation concerns.", href: "/training/dog-behaviour-problems-south-africa" },
    ],
    sources: [
      { label: "NSPCA: choosing a dog", href: "https://nspca.co.za/choosing-a-dog/", note: "South African welfare guidance on matching a dog to the household, available time, and care responsibilities." },
      { label: "RSPCA: choosing the right dog", href: "https://www.rspca.org.uk/adviceandwelfare/pets/dogs/puppy/choosing", note: "Animal-welfare guidance about lifestyle, individual needs, and responsible dog choice." },
      { label: "South African Veterinary Council", href: "https://savc.org.za/", note: "Professional context for health, mobility, behaviour, and veterinary care considerations." },
    ],
  },
];
