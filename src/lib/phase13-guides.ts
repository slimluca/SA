import type { CardLink, GuideContent, HubContent, Source } from "@/lib/content";

type LawGuide = {
  slug: string;
  title: string;
  seoTitle: string;
  description: string;
  summary: string;
  context: string;
  checkItems: string[];
  avoidItems: string[];
  checklist: string[];
  contactItems: string[];
  tableRows: string[][];
  faqs: GuideContent["faqs"];
  related: CardLink[];
  sources: Source[];
};

const reviewed = "2026-05-15";

const officialSources = {
  governmentRabies: {
    label: "South African Government rabies information",
    href: "https://www.gov.za/issues/rabies",
    note: "Official public information on rabies prevention and why suspected exposure needs urgent action.",
  },
  savc: {
    label: "South African Veterinary Council",
    href: "https://savc.org.za/",
    note: "South African veterinary professional regulation and public context for registered veterinary care.",
  },
  sava: {
    label: "South African Veterinary Association",
    href: "https://www.sava.co.za/",
    note: "Veterinary profession context and animal health information for South African owners.",
  },
  nspca: {
    label: "NSPCA",
    href: "https://nspca.co.za/",
    note: "South African animal welfare guidance and responsible ownership context.",
  },
  csos: {
    label: "Community Schemes Ombud Service",
    href: "https://www.csos.org.za/",
    note: "Official starting point for community scheme information and dispute resolution context.",
  },
  govServices: {
    label: "South African Government services",
    href: "https://www.gov.za/services",
    note: "Official government starting point for public services and local authority information.",
  },
};

const lawRelated: CardLink[] = [
  { title: "Rabies Emergency Guide", description: "Bite and rabies exposure guidance.", href: "/emergency/rabies-south-africa" },
  { title: "Dog-Friendly Places", description: "Plan public outings and rule checks.", href: "/dog-friendly" },
  { title: "Training", description: "Leash manners, barking, and public behaviour.", href: "/training" },
];

const guides: LawGuide[] = [
  {
    slug: "dog-laws-south-africa",
    title: "Dog Laws in South Africa: Practical Owner Guide",
    seoTitle: "Dog Laws South Africa | Practical Rules for Dog Owners",
    description:
      "A cautious, practical guide to South African dog ownership rules, including rabies, public spaces, barking, rentals, complexes, bites, and local by-laws.",
    summary:
      "South African dog rules are not one single simple list. National animal health duties, municipal by-laws, body corporate rules, rental agreements, venue rules, and welfare responsibilities can all matter.",
    context:
      "Dog owners in South Africa may deal with city by-laws, estate or complex conduct rules, lease clauses, beach and park signs, vaccination responsibilities, and animal welfare concerns. The safest approach is to treat DogHaven as a starting point, then check the official rule that applies to your exact address or outing.",
    checkItems: [
      "Your municipality's current dog, nuisance, leash, pound, beach, and public space rules.",
      "Rabies vaccination requirements and your dog's vaccination record.",
      "Body corporate, estate, HOA, or landlord rules before bringing a dog home.",
      "Public space signage before removing a lead or entering with a dog.",
      "Whether your dog is identified with a tag, microchip discussion, or current contact details.",
    ],
    avoidItems: [
      "Do not assume a rule in one municipality applies in another.",
      "Do not rely on social media comments as legal guidance.",
      "Do not ignore neighbours' safety, noise, waste, or access concerns.",
      "Do not choose a dog only for protection without planning training, control, welfare, and liability risks.",
    ],
    checklist: [
      "Save your municipality's website and animal management contact path.",
      "Keep vaccination records easy to find.",
      "Check lease, conduct rules, or estate rules in writing.",
      "Use a lead in unfamiliar public spaces until you have checked the rules.",
      "Clean up waste and manage barking before complaints escalate.",
      "Ask a legal professional for advice if a dispute becomes formal.",
    ],
    contactItems: [
      "Contact your municipality for local by-laws, public space rules, nuisance complaints, and pound procedures.",
      "Contact your vet for rabies vaccination, bite exposure, and health record questions.",
      "Contact a body corporate, managing agent, HOA, or landlord before relying on permission.",
      "Contact the SPCA or an animal welfare group if a dog is neglected, abused, or unsafe.",
      "Contact a legal professional for advice about liability, eviction, disputes, or formal notices.",
    ],
    tableRows: [
      ["National context", "Rabies and animal disease control, animal welfare, and general public safety duties may be relevant."],
      ["Municipality", "Local by-laws can cover nuisance, dogs in public spaces, waste, impounding, and leash requirements."],
      ["Body corporate or estate", "Conduct rules, written permission, size limits, nuisance rules, and dispute procedures may apply."],
      ["Landlord or lease", "A lease or written pet clause can affect whether a dog is allowed in a rental home."],
      ["Venue or public space", "Parks, beaches, trails, accommodation, and restaurants can set their own access rules."],
    ],
    faqs: [
      {
        question: "Are dog laws the same across South Africa?",
        answer:
          "No. Some responsibilities are national or provincial, but many practical rules depend on the municipality, body corporate, estate, landlord, venue, park, or beach.",
      },
      {
        question: "Can DogHaven tell me what rule applies to my address?",
        answer:
          "No. DogHaven gives general educational guidance. Check your municipality, lease, conduct rules, and official local sources for your situation.",
      },
      {
        question: "What is the safest first step if I am unsure?",
        answer:
          "Get the rule in writing from the relevant authority or contract source, and ask a vet, municipality, managing agent, landlord, SPCA, or legal professional where appropriate.",
      },
    ],
    related: [
      { title: "Responsible Dog Ownership", description: "Daily habits that prevent many rule problems.", href: "/laws/responsible-dog-ownership-south-africa" },
      { title: "Leash Laws", description: "How to check lead and control rules.", href: "/laws/dog-leash-laws-south-africa" },
      { title: "Province Guides", description: "Local dog ownership context by province.", href: "/province" },
      ...lawRelated,
    ],
    sources: [officialSources.governmentRabies, officialSources.nspca, officialSources.govServices, officialSources.savc],
  },
  {
    slug: "rabies-vaccination-law-south-africa",
    title: "Rabies Vaccination Law in South Africa",
    seoTitle: "Rabies Vaccination Law South Africa | Dog Owner Guide",
    description:
      "A practical guide to rabies vaccination responsibilities for South African dog owners, including records, bites, travel, and when to speak to a vet.",
    summary:
      "Rabies vaccination is a serious public health responsibility for South African dog owners. Keep your dog's rabies record current and ask your vet or provincial veterinary services what schedule applies to your dog.",
    context:
      "Rabies is present in South Africa and is almost always fatal once symptoms develop. Dogs may need proof of vaccination for vet records, travel, kennels, adoption paperwork, bite investigations, and some accommodation or community rules.",
    checkItems: [
      "Your dog's current rabies certificate and next due date.",
      "Whether puppies, newly adopted dogs, or dogs with unknown records need a vet appointment.",
      "Provincial or state veterinary notices during rabies campaigns or outbreaks.",
      "Travel, kennel, accommodation, or border requirements before a trip.",
      "What to do after any bite, scratch, or possible rabies exposure.",
    ],
    avoidItems: [
      "Do not assume an old verbal history is enough proof of vaccination.",
      "Do not delay medical advice after a bite or possible rabies exposure.",
      "Do not handle stray, wild, or strangely behaving animals without help.",
      "Do not miss boosters because your dog mostly stays at home.",
    ],
    checklist: [
      "Ask your vet to confirm rabies status at every annual health check.",
      "Keep a digital photo of the rabies certificate.",
      "Store the paper record with adoption and microchip details.",
      "Check travel rules before crossing provincial or national borders.",
      "Report suspected rabies exposure through a vet, doctor, or relevant authority promptly.",
    ],
    contactItems: [
      "Contact a veterinarian if your dog's rabies record is missing, expired, or unclear.",
      "Contact a medical doctor immediately after a person is bitten, scratched, or exposed to saliva from a suspect animal.",
      "Contact provincial veterinary services or your municipality if you suspect rabies in an animal.",
      "Contact a shelter or rescue if an adopted dog's records were promised but not supplied.",
    ],
    tableRows: [
      ["Puppy or new dog", "Ask a vet to set the rabies schedule and record it clearly."],
      ["Adult dog", "Check booster timing and keep proof available."],
      ["Bite or exposure", "Do not wait for symptoms; seek medical and veterinary guidance immediately."],
      ["Travel", "Check official animal movement, accommodation, and destination requirements before departure."],
      ["Unknown record", "Treat the record as unconfirmed until a vet advises what to do."],
    ],
    faqs: [
      {
        question: "Is rabies vaccination legally important in South Africa?",
        answer:
          "Yes. Rabies vaccination is part of South Africa's animal disease control and public health responsibilities. Ask your vet or provincial veterinary services for the schedule that applies to your dog.",
      },
      {
        question: "What if I cannot find my dog's rabies certificate?",
        answer:
          "Phone your vet or the organisation that vaccinated the dog. If the record cannot be confirmed, ask a veterinarian what the safest next step is.",
      },
      {
        question: "Should I wait after a bite to see if the animal gets sick?",
        answer:
          "No. People should get medical advice urgently after possible rabies exposure, and the dog or animal involved should be handled through the correct veterinary or authority channels.",
      },
    ],
    related: [
      { title: "Rabies Emergency Guide", description: "What to do after bites and possible exposure.", href: "/emergency/rabies-south-africa" },
      { title: "Vaccination Schedule", description: "Core vaccine planning with your vet.", href: "/health/vaccination-schedule-south-africa" },
      { title: "Puppy Vaccinations", description: "Plan puppy vaccines safely.", href: "/puppy/puppy-vaccination-schedule-south-africa" },
      ...lawRelated,
    ],
    sources: [officialSources.governmentRabies, officialSources.savc, officialSources.sava],
  },
  {
    slug: "dog-bite-laws-south-africa",
    title: "Dog Bite Rules in South Africa: What Owners Should Know",
    seoTitle: "Dog Bite Laws South Africa | Safety Steps for Owners",
    description:
      "A calm South African guide to dog bite responsibilities, immediate safety steps, rabies concerns, records, reporting, and when to get professional help.",
    summary:
      "After a dog bite, safety comes first: separate animals and people, get medical care for the person, contact a vet about the dog and rabies records, and seek legal or authority advice if the matter is serious or disputed.",
    context:
      "Dog bite situations can involve medical care, rabies prevention, animal control, insurance, neighbour relationships, landlord or complex rules, and legal liability. DogHaven cannot give legal advice, but it can help you gather the right information quickly.",
    checkItems: [
      "Whether anyone needs urgent medical care.",
      "Whether rabies exposure is possible or the dog's vaccination record is unclear.",
      "Names, contact details, date, time, location, and a factual description of what happened.",
      "Whether children, public spaces, other dogs, or repeated incidents are involved.",
      "Which municipality, body corporate, landlord, insurer, or legal professional should be contacted.",
    ],
    avoidItems: [
      "Do not hide the dog or refuse to share vaccination information.",
      "Do not argue at the scene while someone needs medical care.",
      "Do not punish the dog harshly after the event; it can make behaviour worse and obscure what happened.",
      "Do not keep repeating the same risky setup without trainer, vet, or behaviour help.",
    ],
    checklist: [
      "Move the dog away safely and prevent another bite.",
      "Encourage the injured person to seek medical advice, especially for punctures or rabies concern.",
      "Find the dog's rabies vaccination certificate.",
      "Write down facts while they are fresh.",
      "Contact your vet for health and rabies guidance.",
      "Contact your insurer, body corporate, landlord, municipality, or legal professional if the matter may escalate.",
    ],
    contactItems: [
      "Contact a medical doctor or emergency service for human injuries.",
      "Contact a veterinarian about the dog's rabies record, behaviour risk, and next steps.",
      "Contact the municipality if local animal control or reporting rules apply.",
      "Contact a qualified behaviour professional if the dog has bitten, threatened, or is unsafe around people or animals.",
      "Contact a legal professional for liability, claims, or formal disputes.",
    ],
    tableRows: [
      ["Immediate danger", "Separate safely, get medical help, and prevent another incident."],
      ["Rabies concern", "Treat as urgent and seek medical and veterinary guidance."],
      ["Neighbour dispute", "Keep records factual and check municipal or community rules."],
      ["Repeat behaviour", "Use management, muzzling guidance from a professional, and behaviour support."],
      ["Formal claim", "Speak to your insurer or a legal professional."],
    ],
    faqs: [
      {
        question: "Can DogHaven tell me who is legally liable after a dog bite?",
        answer:
          "No. Liability depends on facts and law. DogHaven can help you think through records and safety steps, but legal advice should come from a qualified professional.",
      },
      {
        question: "Should a dog be trained after a bite?",
        answer:
          "Yes, but choose qualified, humane help. Do not use intimidation or punishment-heavy methods, especially after a serious incident.",
      },
      {
        question: "Why is the rabies certificate important after a bite?",
        answer:
          "Rabies is a serious public health risk. Medical and veterinary professionals may need accurate vaccination information after possible exposure.",
      },
    ],
    related: [
      { title: "Rabies Vaccination Law", description: "Understand rabies records and responsibilities.", href: "/laws/rabies-vaccination-law-south-africa" },
      { title: "Dog Behaviour Problems", description: "Know when behaviour needs professional help.", href: "/training/dog-behaviour-problems-south-africa" },
      { title: "Leash Training", description: "Safer public control on walks.", href: "/training/leash-training-dogs-south-africa" },
      ...lawRelated,
    ],
    sources: [officialSources.governmentRabies, officialSources.nspca, officialSources.savc],
  },
  {
    slug: "nuisance-barking-south-africa",
    title: "Nuisance Barking in South Africa: Practical Steps",
    seoTitle: "Nuisance Barking South Africa | Dog Owner Guide",
    description:
      "A practical South African guide to barking complaints, neighbour communication, welfare checks, training, municipal rules, and when to get help.",
    summary:
      "Barking complaints are usually easier to solve early. Check welfare causes, speak calmly with neighbours, keep records, improve routine and enrichment, and check your municipal or complex nuisance rules.",
    context:
      "Barking can become a neighbour, body corporate, estate, landlord, or municipal issue. It can also be a welfare signal: boredom, fear, separation anxiety, pain, lack of exercise, or environmental triggers.",
    checkItems: [
      "When the barking happens, how long it lasts, and what triggers it.",
      "Whether the dog is alone, anxious, bored, in pain, under-exercised, or exposed to constant triggers.",
      "Municipal nuisance rules and any complex, estate, or rental conduct rules.",
      "Whether neighbours can share dates and times rather than general frustration.",
      "Whether a trainer, vet, or behaviour professional is needed.",
    ],
    avoidItems: [
      "Do not use shock collars, fear, or intimidation as a quick fix.",
      "Do not ignore repeated complaints until they become formal.",
      "Do not leave a distressed dog outside for long periods.",
      "Do not assume the dog is being naughty; investigate welfare and environment first.",
    ],
    checklist: [
      "Keep a barking diary for two weeks.",
      "Check exercise, enrichment, shade, water, and sleeping arrangements.",
      "Block visual triggers where safe and practical.",
      "Use reward-based quiet and settle training.",
      "Ask a vet about pain, hearing, anxiety, or cognitive changes if barking is new.",
      "Get qualified behaviour help for panic, aggression, or separation anxiety.",
    ],
    contactItems: [
      "Contact a vet if barking starts suddenly or may be linked to pain, illness, or age-related changes.",
      "Contact a qualified humane trainer or behaviour professional for ongoing barking patterns.",
      "Contact a body corporate, HOA, landlord, or municipality to confirm the actual complaint process.",
      "Contact a legal professional if formal notices or disputes continue.",
    ],
    tableRows: [
      ["Daytime boredom", "More sniff walks, enrichment, rest, and predictable routine may help."],
      ["Boundary barking", "Manage visual triggers and teach calm alternatives."],
      ["Separation distress", "Needs careful behaviour support, not punishment."],
      ["Night barking", "Check noises, security lights, pain, toilet needs, and sleeping setup."],
      ["Complex complaint", "Ask for exact times and check conduct rules before responding defensively."],
    ],
    faqs: [
      {
        question: "Can a municipality act on barking complaints?",
        answer:
          "Municipalities may have nuisance rules and complaint processes, but details vary. Check your local municipality's current by-laws and procedures.",
      },
      {
        question: "Is barking always a training problem?",
        answer:
          "No. Barking can be linked to fear, pain, boredom, separation distress, ageing, territorial triggers, or insufficient exercise.",
      },
      {
        question: "What should I do if a neighbour complains?",
        answer:
          "Stay calm, ask for specific times, check your dog's welfare, start a log, and get professional help if the pattern continues.",
      },
    ],
    related: [
      { title: "Separation Anxiety", description: "Understand distress-related barking.", href: "/training/separation-anxiety-dogs-south-africa" },
      { title: "Behaviour Problems", description: "Barking, fear, reactivity, and routines.", href: "/training/dog-behaviour-problems-south-africa" },
      { title: "Dogs in Complexes", description: "Conduct rules and neighbour issues.", href: "/laws/dogs-in-complexes-and-sectional-title-south-africa" },
      ...lawRelated,
    ],
    sources: [officialSources.nspca, officialSources.csos, officialSources.govServices],
  },
  {
    slug: "dogs-in-complexes-and-sectional-title-south-africa",
    title: "Dogs in Complexes and Sectional Title in South Africa",
    seoTitle: "Dogs in Complexes South Africa | Sectional Title Pet Rules",
    description:
      "A practical guide to dogs in South African complexes, sectional title schemes, estates, body corporate rules, written permission, nuisance concerns, and disputes.",
    summary:
      "Before keeping a dog in a complex, read the conduct rules and get permission in writing where required. Pet disputes often involve noise, size, number of pets, common areas, waste, safety, and fair process.",
    context:
      "Complex living can work well for dogs, but shared walls, lifts, gardens, parking areas, children, cleaners, other dogs, and common property make clear rules important. Sectional title and estate rules can differ, so general advice is not enough.",
    checkItems: [
      "The current conduct rules, management rules, HOA rules, or estate rules.",
      "Whether written approval is required before the dog moves in.",
      "Any rules about number of pets, size, common property, lifts, waste, noise, and leads.",
      "Whether approval attaches to the specific dog rather than all future pets.",
      "The dispute process through trustees, managing agents, CSOS, or legal channels.",
    ],
    avoidItems: [
      "Do not move a dog in based only on a casual conversation.",
      "Do not assume a previous owner or neighbour's permission applies to you.",
      "Do not let your dog roam common property or toilet in shared areas.",
      "Do not ignore written complaints from trustees, managing agents, or neighbours.",
    ],
    checklist: [
      "Request the latest rules before adopting or buying.",
      "Ask for pet approval in writing where needed.",
      "Explain breed, size, age, sterilisation status, routine, and control plan honestly.",
      "Plan toilet breaks, lifts, stairs, visitors, and barking prevention.",
      "Keep vaccination and identification records current.",
      "Document communication if a dispute starts.",
    ],
    contactItems: [
      "Contact trustees, the managing agent, HOA, or landlord for written rules and permissions.",
      "Contact CSOS for community scheme dispute information where relevant.",
      "Contact a trainer or behaviour professional for barking, reactivity, or lift/common-area stress.",
      "Contact a legal professional for advice about enforcement, refusal, or formal disputes.",
    ],
    tableRows: [
      ["Written permission", "Ask before the dog arrives and keep the approval record."],
      ["Common property", "Use a lead, clean up waste, and avoid uncontrolled interactions."],
      ["Noise", "Address barking early with welfare checks and training."],
      ["Safety", "Manage children, lifts, gates, visitors, and other dogs calmly."],
      ["Disputes", "Use documented facts and the correct scheme process."],
    ],
    faqs: [
      {
        question: "Can a complex refuse pets?",
        answer:
          "Rules and decisions depend on the scheme documents and facts. Check the current rules and get legal or CSOS guidance if there is a dispute.",
      },
      {
        question: "Should I get permission before adopting?",
        answer:
          "Yes. Get the relevant written approval before bringing a dog into a complex, estate, or sectional title home.",
      },
      {
        question: "What makes dogs in complexes easier?",
        answer:
          "Leash control, quiet routines, toilet planning, enrichment, socialisation, waste cleanup, and respectful communication with neighbours.",
      },
    ],
    related: [
      { title: "Pet-Friendly Rentals", description: "Lease clauses and written permission.", href: "/laws/pet-friendly-rentals-south-africa" },
      { title: "Nuisance Barking", description: "Manage barking before disputes grow.", href: "/laws/nuisance-barking-south-africa" },
      { title: "Best Dogs for Small Homes", description: "Choose for space, noise, and routine.", href: "/breeds/best-dogs-for-small-homes-south-africa" },
      ...lawRelated,
    ],
    sources: [officialSources.csos, officialSources.nspca],
  },
  {
    slug: "pet-friendly-rentals-south-africa",
    title: "Pet-Friendly Rentals in South Africa: Dog Owner Guide",
    seoTitle: "Pet-Friendly Rentals South Africa | Dog Owner Checklist",
    description:
      "A practical guide to renting with dogs in South Africa, including lease clauses, written permission, deposits, inspections, complexes, and responsible ownership.",
    summary:
      "Do not rely on a verbal 'pets are fine' when renting with a dog. Ask for written permission, read the lease and complex rules, clarify deposits and inspections, and keep your dog's records ready.",
    context:
      "Rental dog rules can depend on the landlord, lease, estate, body corporate, insurance, garden size, neighbour concerns, and the individual dog's behaviour. A pet-friendly advert still needs careful questions.",
    checkItems: [
      "Whether the lease clearly allows your specific dog.",
      "Whether the property is also subject to complex, HOA, or body corporate rules.",
      "Any pet deposit, cleaning, garden, damage, inspection, or noise clauses.",
      "Whether there are limits on size, number of dogs, breed, or indoor/outdoor access.",
      "What happens if neighbours complain or the dog damages property.",
    ],
    avoidItems: [
      "Do not hide a dog from a landlord or managing agent.",
      "Do not sign before understanding pet clauses.",
      "Do not assume an online listing overrides the lease.",
      "Do not bring a puppy into a rental without planning chewing, toilet training, and noise.",
    ],
    checklist: [
      "Ask for pet permission in writing.",
      "Keep vaccination, sterilisation if applicable, microchip, and training records ready.",
      "Photograph property condition at move-in with permission and normal rental documentation.",
      "Plan floor protection, cleaning, garden care, and waste removal.",
      "Set a routine that prevents barking, digging, and damage.",
      "Clarify exit cleaning and damage responsibilities before signing.",
    ],
    contactItems: [
      "Contact the landlord or managing agent for written pet permission.",
      "Contact the body corporate or HOA if the property is in a complex or estate.",
      "Contact a trainer for barking, chewing, separation anxiety, or toilet issues.",
      "Contact a legal professional or housing advice source before acting on a serious rental dispute.",
    ],
    tableRows: [
      ["Lease wording", "Ask whether your exact dog is allowed and under what conditions."],
      ["Deposit", "Clarify pet-related deposits, damage, cleaning, and refund conditions."],
      ["Complex rules", "Check body corporate or HOA rules separately from the lease."],
      ["Puppies", "Plan chewing, toilet routines, noise, and vaccination-limited outings."],
      ["Moving out", "Keep records, repair damage properly, and follow the inspection process."],
    ],
    faqs: [
      {
        question: "Is a pet-friendly listing enough proof?",
        answer:
          "No. Treat the advert as a starting point. Confirm the lease, written permission, and any complex or estate rules.",
      },
      {
        question: "Can a landlord charge a pet deposit?",
        answer:
          "Rental terms vary. Ask what the lease says and get advice from a legal professional if you are unsure whether a clause is fair or enforceable.",
      },
      {
        question: "What helps landlords feel more comfortable with dogs?",
        answer:
          "Clear records, written routines, training, references if available, damage prevention, waste management, and honest communication.",
      },
    ],
    related: [
      { title: "Dogs in Complexes", description: "Rules for complexes and sectional title homes.", href: "/laws/dogs-in-complexes-and-sectional-title-south-africa" },
      { title: "Puppy Proofing", description: "Protect a home before damage happens.", href: "/puppy/puppy-proofing-your-home-south-africa" },
      { title: "Dog Costs", description: "Budget for deposits, damage, and routine care.", href: "/costs" },
      ...lawRelated,
    ],
    sources: [officialSources.csos, officialSources.govServices, officialSources.nspca],
  },
  {
    slug: "dog-leash-laws-south-africa",
    title: "Dog Leash Laws in South Africa: What to Check",
    seoTitle: "Dog Leash Laws South Africa | Public Space Rule Guide",
    description:
      "A practical guide to checking dog leash rules in South African public spaces, parks, complexes, beaches, trails, suburbs, and dog-friendly venues.",
    summary:
      "Leash rules can change by municipality, park, beach, estate, trail, and venue. If you are not sure, keep your dog on lead, check signs, and verify the official local rule before visiting.",
    context:
      "South African owners walk dogs in suburbs, estates, beaches, farms, parks, mountain paths, promenades, and busy city streets. Safe control matters even where off-lead areas exist, because children, cyclists, wildlife, livestock, other dogs, and traffic may be nearby.",
    checkItems: [
      "Municipal by-laws for dogs in public spaces.",
      "Signs at parks, beaches, trails, estates, and promenades.",
      "Whether an area is truly off-lead or only dog-friendly on lead.",
      "Recall reliability around dogs, people, wildlife, livestock, and traffic.",
      "Whether your dog is vaccinated, identified, and comfortable in public.",
    ],
    avoidItems: [
      "Do not remove the lead because other people are doing it.",
      "Do not let your dog rush children, joggers, cyclists, dogs, wildlife, or livestock.",
      "Do not use retractable leads in crowded areas where they can tangle or injure.",
      "Do not take a reactive dog into busy off-lead spaces as training practice.",
    ],
    checklist: [
      "Check the official rule before going.",
      "Carry a fixed lead, waste bags, water, and ID.",
      "Use a long line only where safe and permitted.",
      "Leave if the space is too crowded or your dog is overwhelmed.",
      "Train recall and calm passing before testing freedom.",
      "Respect owners who do not want dog-to-dog greetings.",
    ],
    contactItems: [
      "Contact your municipality for public space by-laws and leash rules.",
      "Contact park, trail, estate, or venue management for site-specific rules.",
      "Contact a trainer for leash reactivity, pulling, recall, or unsafe greetings.",
      "Contact a vet if your dog is not well enough for public exercise.",
    ],
    tableRows: [
      ["Suburban pavements", "Use a lead and keep control near gates, traffic, and pedestrians."],
      ["Dog parks", "Check entry rules, vaccination expectations, size areas, and behaviour before entering."],
      ["Beaches", "Rules can change by beach, season, time, and municipality."],
      ["Trails and farms", "Watch livestock, wildlife, heat, ticks, and official access rules."],
      ["Complexes", "Common property often has stricter control expectations."],
    ],
    faqs: [
      {
        question: "Are dogs allowed off lead in South Africa?",
        answer:
          "Only where the local rule and setting allow it, and only if the dog is safely under control. Check official rules and signs before assuming.",
      },
      {
        question: "What if my dog is friendly?",
        answer:
          "Friendly dogs still need control. Other dogs, children, wildlife, cyclists, and nervous people may not want contact.",
      },
      {
        question: "Can a trainer help with leash problems?",
        answer:
          "Yes. Choose humane, reward-based help for pulling, reactivity, recall, and public manners.",
      },
    ],
    related: [
      { title: "Leash Training", description: "Build safer walking habits.", href: "/training/leash-training-dogs-south-africa" },
      { title: "Dog Parks", description: "Park etiquette and safety.", href: "/dog-friendly/dog-parks-south-africa" },
      { title: "City Guides", description: "Local walking and rule-check context.", href: "/city" },
      ...lawRelated,
    ],
    sources: [officialSources.govServices, officialSources.nspca],
  },
  {
    slug: "dog-friendly-beach-rules-south-africa",
    title: "Dog-Friendly Beach Rules in South Africa",
    seoTitle: "Dog-Friendly Beach Rules South Africa | Owner Checklist",
    description:
      "A practical guide to checking dog-friendly beach rules in South Africa, including leads, seasons, times, waste, heat, tides, wildlife, and local by-laws.",
    summary:
      "Dog beach rules are local and can change by municipality, beach, season, time of day, conservation area, and signage. Check official rules before you go and keep your dog under control.",
    context:
      "South Africa has busy urban beaches, quieter coastal towns, tidal pools, conservation areas, holiday beaches, and seasonal visitor pressure. A beach that feels informal may still have rules about dogs, leads, waste, times, or protected wildlife.",
    checkItems: [
      "The municipality or official beach rule page for the specific beach.",
      "Seasonal restrictions, holiday rules, time windows, and signs at entrances.",
      "Whether dogs must be on lead or are excluded from sensitive areas.",
      "Tide, heat, drinking water, shade, and paw safety.",
      "Wildlife, nesting birds, seals, livestock nearby, and conservation restrictions.",
    ],
    avoidItems: [
      "Do not rely on old blog posts or social media comments for beach rules.",
      "Do not let dogs chase birds, seals, livestock, wildlife, children, or other dogs.",
      "Do not leave waste or bags behind.",
      "Do not take heat-sensitive dogs to hot sand or midday beaches.",
    ],
    checklist: [
      "Check the official beach rule before leaving home.",
      "Pack lead, water, bowl, waste bags, towel, and ID.",
      "Avoid hot sand and peak heat.",
      "Leave if your dog is chasing wildlife or overwhelming people.",
      "Rinse salt and sand from paws and coat after beach visits.",
      "Watch for vomiting, diarrhoea, limping, eye irritation, or heat stress after the outing.",
    ],
    contactItems: [
      "Contact the municipality, park authority, or beach management for current rules.",
      "Contact a vet for heat stress, saltwater ingestion, injuries, eye irritation, or suspected poisoning.",
      "Contact a trainer if your dog cannot recall, settle, or ignore wildlife and other dogs.",
    ],
    tableRows: [
      ["Urban beach", "Expect stricter signage, crowds, leads, and waste enforcement."],
      ["Holiday season", "Rules may become tighter when beaches are crowded."],
      ["Conservation area", "Wildlife and access rules may be stricter than ordinary beaches."],
      ["Hot day", "Heatstroke and paw burns can become the bigger risk."],
      ["Off-lead area", "Recall and polite behaviour still matter."],
    ],
    faqs: [
      {
        question: "Can DogHaven list every dog-friendly beach rule?",
        answer:
          "No. Rules change and vary locally. DogHaven explains what to check, but owners should verify official local rules before visiting.",
      },
      {
        question: "Are dog-friendly beaches always off lead?",
        answer:
          "No. A beach may allow dogs only on lead, only at certain times, or only in certain areas.",
      },
      {
        question: "What is the biggest safety risk at beaches?",
        answer:
          "Heat, saltwater ingestion, sharp objects, strong waves, wildlife, and uncontrolled dog interactions can all matter depending on the beach.",
      },
    ],
    related: [
      { title: "Dog-Friendly Beaches", description: "Beach outing safety and planning.", href: "/dog-friendly/dog-friendly-beaches-south-africa" },
      { title: "Heatstroke", description: "Hot-weather emergency signs.", href: "/emergency/heatstroke-in-dogs-south-africa" },
      { title: "Coastal City Guides", description: "Cape Town, Durban, Gqeberha, East London, and Ballito context.", href: "/city" },
      ...lawRelated,
    ],
    sources: [officialSources.govServices, officialSources.nspca],
  },
  {
    slug: "travelling-with-dogs-south-africa-rules",
    title: "Travelling With Dogs in South Africa: Rules to Check",
    seoTitle: "Travelling With Dogs South Africa Rules | Practical Checklist",
    description:
      "A practical guide to dog travel rules in South Africa, including rabies records, accommodation, road trips, public spaces, province travel, and border checks.",
    summary:
      "Before travelling with a dog, check rabies records, accommodation pet rules, municipal public space rules, heat risk, vehicle safety, and any border or destination requirements.",
    context:
      "South African dog travel can mean road trips between provinces, holiday homes, game-farm areas, beaches, hikes, accommodation, kennels, and border crossings. Rules and health risks change by destination.",
    checkItems: [
      "Rabies certificate and vaccination record.",
      "Accommodation rules in writing before booking.",
      "Municipal, beach, park, estate, or trail rules at the destination.",
      "Ticks, heat, snake risk, livestock, wildlife, and water access.",
      "Border or airline requirements if leaving South Africa or flying.",
    ],
    avoidItems: [
      "Do not assume pet-friendly means your dog can go everywhere on the property.",
      "Do not leave dogs in hot cars.",
      "Do not travel without ID and vaccination records.",
      "Do not rely on old rule screenshots for beaches, parks, or accommodation.",
    ],
    checklist: [
      "Book pet permission in writing.",
      "Pack vaccination records, medication, food, water, lead, waste bags, bedding, and ID.",
      "Plan cool travel times and safe stops.",
      "Check destination vet and emergency options before departure.",
      "Keep dogs restrained safely in the vehicle.",
      "Verify public space rules before each outing.",
    ],
    contactItems: [
      "Contact your vet before travel if your dog is elderly, brachycephalic, anxious, pregnant, unwell, or on medication.",
      "Contact accommodation directly for dog rules.",
      "Contact the municipality, park, beach, or venue for public access rules.",
      "Contact official veterinary or border authorities before cross-border travel.",
    ],
    tableRows: [
      ["Road trip", "Plan heat, restraint, stops, water, and emergency vet access."],
      ["Accommodation", "Confirm rules, fees, garden safety, and dog-alone policies."],
      ["Beach or park", "Check local signs and official pages before visiting."],
      ["Rural stay", "Plan ticks, snakes, livestock, fencing, and recall."],
      ["Cross-border", "Use official veterinary and destination requirements, not general advice."],
    ],
    faqs: [
      {
        question: "Do dogs need records for local travel?",
        answer:
          "It is sensible to carry vaccination records, especially rabies proof, because vets, kennels, accommodation providers, and authorities may ask for them.",
      },
      {
        question: "Can my dog stay alone in pet-friendly accommodation?",
        answer:
          "Only if the accommodation rules allow it and your dog can cope safely. Many places have specific policies, so ask before booking.",
      },
      {
        question: "Should I check vets before travelling?",
        answer:
          "Yes. Knowing where to find help is useful if your dog gets heat stress, vomiting, injuries, tick-borne signs, or snakebite symptoms away from home.",
      },
    ],
    related: [
      { title: "Travelling With Dogs", description: "Road trip safety and planning.", href: "/dog-friendly/travelling-with-dogs-south-africa" },
      { title: "Rabies Vaccination Law", description: "Keep records current before travel.", href: "/laws/rabies-vaccination-law-south-africa" },
      { title: "Province Guides", description: "Climate and local risk context.", href: "/province" },
      ...lawRelated,
    ],
    sources: [officialSources.governmentRabies, officialSources.savc, officialSources.govServices],
  },
  {
    slug: "responsible-dog-ownership-south-africa",
    title: "Responsible Dog Ownership in South Africa",
    seoTitle: "Responsible Dog Ownership South Africa | Practical Guide",
    description:
      "A practical South African responsible dog ownership guide covering welfare, training, identification, health, public manners, neighbours, costs, and local rules.",
    summary:
      "Responsible ownership means meeting your dog's needs while protecting people, animals, neighbours, and public spaces. It includes vet care, safe control, training, identification, waste cleanup, and rule checks.",
    context:
      "South African owners manage dogs in flats, farms, townhouses, suburbs, estates, beaches, parks, rural roads, and busy cities. Good ownership is practical: prevent problems before they become welfare, safety, or legal disputes.",
    checkItems: [
      "Whether your dog has food, water, shelter, exercise, enrichment, and humane handling.",
      "Vaccination, parasite prevention, sterilisation discussion, and veterinary care.",
      "Secure fencing, identification, recall, lead manners, and visitor safety.",
      "Neighbour impact: barking, waste, roaming, damage, and fear.",
      "Local rules for public spaces, rentals, complexes, and travel.",
    ],
    avoidItems: [
      "Do not let dogs roam unsupervised.",
      "Do not ignore pain, fear, heat stress, parasites, or chronic illness.",
      "Do not use punishment-heavy training to suppress behaviour without solving the cause.",
      "Do not choose a dog for security without welfare, training, and safe management.",
    ],
    checklist: [
      "Book routine vet checks and keep vaccines current.",
      "Use humane training and safe management.",
      "Provide daily exercise, sniffing, rest, and enrichment.",
      "Keep the property secure and the dog identified.",
      "Pick up waste and control barking.",
      "Budget for food, grooming, prevention, training, and emergencies.",
    ],
    contactItems: [
      "Contact a vet for health, pain, vaccines, parasites, and behaviour-linked medical concerns.",
      "Contact a trainer for manners, recall, reactivity, barking, or family safety.",
      "Contact the SPCA or animal welfare group if a dog is neglected, abused, or abandoned.",
      "Contact the municipality, landlord, body corporate, or legal professional for rule disputes.",
    ],
    tableRows: [
      ["Health", "Vaccines, parasite prevention, weight, dental care, and vet visits."],
      ["Safety", "Lead control, secure fencing, identification, and bite prevention."],
      ["Welfare", "Food, water, shelter, social contact, exercise, rest, and kind handling."],
      ["Community", "Noise, waste, public manners, and respect for nervous people or dogs."],
      ["Planning", "Costs, emergencies, travel, old age, and life changes."],
    ],
    faqs: [
      {
        question: "What is the simplest responsible ownership habit?",
        answer:
          "Keep your dog under safe control, meet daily welfare needs, and ask for professional help before small problems become serious.",
      },
      {
        question: "Does responsible ownership mean my dog must be perfect?",
        answer:
          "No. It means you manage risk, train kindly, respect others, and get help when your dog is struggling.",
      },
      {
        question: "Why include rules in responsible ownership?",
        answer:
          "Rules protect dogs, people, wildlife, neighbours, and public spaces. Checking them is part of planning safe dog life.",
      },
    ],
    related: [
      { title: "Start Here", description: "Find the right DogHaven guide faster.", href: "/start-here" },
      { title: "Dog Costs", description: "Budget for routine and emergency care.", href: "/costs" },
      { title: "Adoption Safety", description: "Choose dogs responsibly.", href: "/adoption" },
      ...lawRelated,
    ],
    sources: [officialSources.nspca, officialSources.savc, officialSources.sava],
  },
];

function toGuide(guide: LawGuide): GuideContent {
  return {
    slug: guide.slug,
    path: `/laws/${guide.slug}`,
    hubTitle: "Dog Laws and Rules",
    hubPath: "/laws",
    title: guide.title,
    seoTitle: guide.seoTitle,
    description: guide.description,
    intro: guide.summary,
    updated: reviewed,
    quickFacts: [
      "This guide is general South African dog-owner information, not personalised legal advice.",
      "Rules can vary by municipality, estate, body corporate, landlord, park, beach, venue, and province.",
      guide.summary,
      "Check official local rules or a qualified professional before relying on a rule in a dispute.",
    ],
    sections: [
      {
        heading: "Plain-English explanation",
        body: [
          guide.summary,
          guide.context,
          "The practical question is usually not 'what does everyone online say?' but 'which written rule applies to this dog, this place, and this situation?' Keep records, ask for written confirmation, and use official channels when a decision matters.",
        ],
      },
      {
        heading: "What owners should check",
        body: [
          "Use this list before adopting, moving, travelling, visiting a public space, or responding to a complaint. It helps you separate useful checks from guesswork.",
        ],
        checklist: guide.checkItems,
      },
      {
        heading: "Common South African situations",
        body: [
          "Dog rules often overlap. A rental flat in a complex, a beach holiday with a puppy, or a barking complaint in an estate can involve more than one source of rules.",
        ],
        table: {
          headers: ["Situation", "What to think about"],
          rows: guide.tableRows,
        },
      },
      {
        heading: "What owners should avoid",
        body: [
          "Most problems become harder when owners delay, guess, or become defensive. A calm written record and early professional advice usually make the next step clearer.",
        ],
        bullets: guide.avoidItems,
      },
      {
        heading: "Practical checklist",
        body: [
          "Keep this checklist simple and repeatable. Responsible ownership is easier when important records and contacts are ready before a complaint, bite, trip, or emergency.",
        ],
        checklist: guide.checklist,
      },
      {
        heading: "When to contact someone official or professional",
        body: [
          "Use DogHaven for education, then involve the right person when the decision affects safety, health, housing, a formal complaint, or possible legal liability.",
        ],
        bullets: guide.contactItems,
      },
    ],
    faqs: guide.faqs,
    related: guide.related,
    sources: guide.sources,
  };
}

export const phase13GuidePages: GuideContent[] = guides.map(toGuide);

export const lawsHub: HubContent = {
  slug: "laws",
  path: "/laws",
  title: "Dog Laws, Rules, and Responsible Ownership in South Africa",
  seoTitle: "Dog Laws South Africa | Rules and Responsible Ownership",
  description:
    "Practical South African dog laws and rules guidance for rabies vaccination, dog bites, barking complaints, complexes, rentals, leads, beaches, travel, and responsible ownership.",
  kicker: "Laws and rules hub",
  intro:
    "Dog ownership rules in South Africa can be local, contractual, health-related, welfare-related, or venue-specific. DogHaven keeps this hub practical and cautious so owners know what to check, who to contact, and how to avoid preventable disputes.",
  cards: phase13GuidePages.map((guide) => ({
    title: guide.title,
    description: guide.description,
    href: guide.path,
  })),
  related: [
    { title: "Emergency Help", description: "Rabies, bites, poisoning, heat, and urgent vet decisions.", href: "/emergency" },
    { title: "Rabies Guide", description: "Bite response and rabies prevention.", href: "/emergency/rabies-south-africa" },
    { title: "Adoption Safety", description: "Choose dogs responsibly and avoid pressure decisions.", href: "/adoption" },
    { title: "Training", description: "Leash manners, barking, and safer public behaviour.", href: "/training" },
    { title: "Dog-Friendly Places", description: "Verify rules before outings.", href: "/dog-friendly" },
    { title: "City Guides", description: "Local dog owner guidance by city.", href: "/city" },
    { title: "Province Guides", description: "Province-level dog care context.", href: "/province" },
  ],
  faqs: [
    {
      question: "Does DogHaven give legal advice?",
      answer:
        "No. DogHaven provides general educational guidance for South African dog owners. For disputes, liability, eviction, formal notices, or legal decisions, speak to a qualified legal professional or the relevant authority.",
    },
    {
      question: "Why do rules vary so much?",
      answer:
        "Dog ownership can involve national animal health rules, municipal by-laws, body corporate rules, estate rules, leases, public space signs, and venue policies.",
    },
    {
      question: "What should I do before visiting a dog-friendly place?",
      answer:
        "Check the official rule for that place, carry a lead and waste bags, keep your dog's vaccinations current, and leave if your dog is overwhelmed or unsafe.",
    },
  ],
};

export const phase13DogFriendlyCards: CardLink[] = [
  {
    title: "Dog Leash Laws",
    description: "How to check local leash, control, and public space rules before outings.",
    href: "/laws/dog-leash-laws-south-africa",
  },
  {
    title: "Beach Rules for Dogs",
    description: "Check beach, season, lead, wildlife, and municipality rules before you go.",
    href: "/laws/dog-friendly-beach-rules-south-africa",
  },
  {
    title: "Travel Rules With Dogs",
    description: "Records, accommodation rules, public spaces, and destination checks.",
    href: "/laws/travelling-with-dogs-south-africa-rules",
  },
];

export const phase13TrainingCards: CardLink[] = [
  {
    title: "Nuisance Barking",
    description: "Neighbour complaints, welfare checks, training, and municipal rule awareness.",
    href: "/laws/nuisance-barking-south-africa",
  },
  {
    title: "Leash Rules",
    description: "Public control and rule checks for safer walks.",
    href: "/laws/dog-leash-laws-south-africa",
  },
  {
    title: "Responsible Ownership",
    description: "Daily habits that reduce safety, welfare, and neighbour problems.",
    href: "/laws/responsible-dog-ownership-south-africa",
  },
];

export function getPhase13Guide(slug: string) {
  return phase13GuidePages.find((guide) => guide.slug === slug);
}
