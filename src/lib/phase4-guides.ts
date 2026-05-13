import type { CardLink, GuideContent } from "@/lib/content";

export const phase4AdoptionCards: CardLink[] = [
  {
    title: "Dog Adoption in South Africa",
    description:
      "A practical overview of shelters, SPCAs, rescue groups, home checks, adoption fees, documents, and first steps.",
    href: "/adoption/dog-adoption-south-africa",
  },
  {
    title: "Adopting a Puppy",
    description:
      "What to ask before adopting a puppy, including vaccines, sterilisation policies, socialisation, costs, and scam risks.",
    href: "/adoption/adopting-a-puppy-south-africa",
  },
  {
    title: "Adopting an Adult Dog",
    description:
      "How adult dog adoption works, what history to ask for, and how to plan a calm first month at home.",
    href: "/adoption/adopting-an-adult-dog-south-africa",
  },
  {
    title: "Dog Shelter Checklist",
    description:
      "A South African shelter visit checklist covering documents, questions, meet-and-greets, health records, and home checks.",
    href: "/adoption/dog-shelter-checklist-south-africa",
  },
  {
    title: "Questions Before Adopting",
    description:
      "The key questions to ask yourself, a shelter, rescue, breeder, or private rehoming family before you commit.",
    href: "/adoption/questions-to-ask-before-adopting-a-dog",
  },
  {
    title: "Rescue Dog First Week Home",
    description:
      "A calm first-week plan for sleep, feeding, toilet breaks, children, other pets, visitors, and adjustment.",
    href: "/adoption/rescue-dog-first-week-home-south-africa",
  },
];

export const phase4BreedCards: CardLink[] = [
  {
    title: "Boerboel Breed Guide",
    description:
      "South Africa-specific Boerboel ownership guidance covering space, training, family life, safety, health, and responsibility.",
    href: "/breeds/boerboel-dog-breed-south-africa",
  },
  {
    title: "AfriCanis Breed Guide",
    description:
      "A practical guide to the AfriCanis as a Southern African landrace, including temperament, space, health, and adoption fit.",
    href: "/breeds/africanis-dog-breed-south-africa",
  },
  {
    title: "Labrador Retriever Guide",
    description:
      "How Labradors fit South African homes, families, beaches, exercise routines, food budgets, shedding, and training.",
    href: "/breeds/labrador-retriever-south-africa",
  },
  {
    title: "Jack Russell Terrier Guide",
    description:
      "A realistic South African guide to Jack Russells, including energy, barking, prey drive, small homes, training, and grooming.",
    href: "/breeds/jack-russell-terrier-south-africa",
  },
  {
    title: "Best Family Dogs",
    description:
      "How to choose a family dog for South African homes by temperament, children, space, exercise, cost, and supervision.",
    href: "/breeds/best-family-dogs-south-africa",
  },
  {
    title: "Best Dogs for Small Homes",
    description:
      "Breed and temperament planning for flats, townhouses, complexes, smaller gardens, noise rules, and daily walks.",
    href: "/breeds/best-dogs-for-small-homes-south-africa",
  },
];

const adoptionSources = [
  {
    label: "NSPCA choosing a dog",
    href: "https://nspca.co.za/choosing-a-dog/",
    note: "South African welfare guidance on adoption, sterilisation, reputable routes, and careful dog choice.",
  },
  {
    label: "Cape of Good Hope SPCA adoptions",
    href: "https://capespca.co.za/adopt/",
    note: "Example of SPCA adoption assessment, pre-home inspection, meet-and-greet, and welfare criteria.",
  },
  {
    label: "SPCA Tshwane adoption process",
    href: "https://spcapta.co.za/adopt/",
    note: "South African SPCA example covering home checks, documents, meet-and-greet, sterilisation, vaccination, and microchipping.",
  },
  {
    label: "KUSA buying a puppy",
    href: "https://www.kusa.co.za/index.php/150-buying-a-puppy",
    note: "South African puppy-buying and scam-avoidance guidance, including breeder verification and written agreements.",
  },
];

const breedSources = [
  {
    label: "KUSA breed standards",
    href: "https://www.kusa.co.za/index.php/documents/breed-standards/10-kusa-breeds/kusa-breed-standards",
    note: "South African kennel union context for breed standards and responsible breed research.",
  },
  {
    label: "KUSA puppy buying guidance",
    href: "https://www.kusa.co.za/index.php/150-buying-a-puppy",
    note: "South African guidance on breeder questions, scam avoidance, health testing, and written agreements.",
  },
  {
    label: "South African Veterinary Council",
    href: "https://savc.org.za/",
    note: "Professional veterinary context for health, welfare, and registered veterinary care.",
  },
];

export const phase4GuidePages: GuideContent[] = [
  {
    slug: "dog-adoption-south-africa",
    path: "/adoption/dog-adoption-south-africa",
    hubTitle: "Adoption Safety",
    hubPath: "/adoption",
    title: "Dog Adoption in South Africa: A Practical Owner Guide",
    seoTitle: "Dog Adoption South Africa | Shelter, SPCA and Rescue Guide",
    description:
      "A practical South African dog adoption guide covering shelters, SPCAs, rescue groups, home checks, adoption fees, records, red flags, and first-week planning.",
    intro:
      "Dog adoption in South Africa can be deeply rewarding, but it should never be rushed. Good adoption protects the dog, your household, your neighbours, and any pets you already have. This guide explains what a careful process often looks like and how to ask useful questions without inventing certainty where every shelter or rescue works differently.",
    updated: "2026-05-13",
    quickFacts: [
      "Adoption usually involves an application, questions about your home, and often a home check or pre-home inspection.",
      "Adoption fees commonly help cover welfare costs such as sterilisation, first vaccinations, deworming, microchipping, or veterinary checks, but details vary by organisation.",
      "Responsible shelters and rescues should be willing to discuss the individual dog's behaviour, health records, age, and known history.",
      "Avoid rushed online handovers, pressure payments, missing paperwork, and anyone who refuses sensible verification.",
    ],
    sections: [
      {
        heading: "How adoption usually works",
        body: [
          "A South African adoption process is usually more than choosing a photo online. Many SPCAs and shelters ask you to visit, complete an application, provide proof of residence, explain your household, and arrange a meet-and-greet if you have other dogs or children.",
          "A home check is not an insult. It helps the organisation understand fencing, shelter, road access, other pets, landlord or body corporate rules, and whether the dog is likely to be safe in your care.",
        ],
        table: {
          headers: ["Step", "What it helps confirm"],
          rows: [
            ["Application", "Your household, routine, experience, property rules, and expectations."],
            ["Meet the dog", "Temperament, energy, handling, and whether the match feels realistic."],
            ["Meet-and-greet", "Compatibility with resident dogs or family members where relevant."],
            ["Home check", "Fencing, shelter, security, space, and obvious safety risks."],
            ["Adoption contract", "Responsibilities, sterilisation conditions, return policies, and record keeping."],
          ],
        },
      },
      {
        heading: "Documents and records to ask for",
        body: [
          "Ask what paperwork is available before you take the dog home. Some dogs have full records, while others arrive at shelters with little history. The important thing is that the organisation is transparent about what is known and what still needs follow-up.",
          "Keep copies in one folder or phone album so your vet can understand the dog's recent care quickly.",
        ],
        checklist: [
          "Vaccination booklet or clinic record.",
          "Deworming and parasite prevention record if available.",
          "Sterilisation certificate or written sterilisation plan if the dog is too young or not yet medically ready.",
          "Microchip number if microchipped.",
          "Adoption contract and receipt.",
          "Known diet, medication, allergies, injuries, behaviour notes, and previous home history where available.",
        ],
      },
      {
        heading: "Adoption fee reality",
        body: [
          "An adoption fee is not the same as buying a dog from a seller. In many welfare organisations it helps cover part of the cost of veterinary care, sterilisation, vaccination, deworming, microchipping, feeding, sheltering, and admin.",
          "Fees differ by organisation and can change. Verify the current fee directly with the shelter or SPCA rather than relying on social media screenshots or old adverts.",
        ],
      },
      {
        heading: "Red flags to slow down for",
        body: [
          "Not every private rehoming advert is a scam, and not every messy admin process is malicious. But caution protects you and the dog. A responsible person or organisation should tolerate careful questions.",
        ],
        checklist: [
          "The dog must be delivered, but you cannot meet the dog or verify the environment.",
          "Payment is demanded before you receive meaningful information.",
          "The story changes when you ask about vaccines, age, sterilisation, or ownership.",
          "The person refuses a live call, in-person handover, or basic written agreement.",
          "The advert uses emotional pressure, urgency, or suspiciously low pricing.",
          "You are told not to contact the SPCA, a vet, breed club, or previous records.",
        ],
      },
      {
        heading: "Before you say yes",
        body: [
          "Adoption is a long-term commitment, not a rescue moment. Think through food, vet care, grooming, training, property rules, heat, transport, exercise, noise, and what happens if your work routine changes.",
          "If you are unsure, ask the organisation whether fostering, a second visit, or a trainer's opinion would help. A careful pause is kinder than a rushed return.",
        ],
        bullets: [
          "Check your lease, complex rules, or body corporate permissions in writing.",
          "Budget for routine and emergency veterinary care.",
          "Plan a quiet first week with fewer visitors and fewer big outings.",
          "Book a vet check soon after adoption if the organisation recommends it or if records are incomplete.",
        ],
      },
    ],
    faqs: [
      {
        question: "Is it better to adopt from an SPCA or a rescue group?",
        answer:
          "Both can be good routes when the organisation is transparent, welfare-focused, and willing to answer practical questions. Verify the organisation directly and avoid rushed payment-only arrangements.",
      },
      {
        question: "Why do shelters ask for a home check?",
        answer:
          "A home check helps assess safety, fencing, shelter, other animals, landlord or complex rules, and whether the dog is likely to fit the environment.",
      },
      {
        question: "Should I adopt if I work full-time?",
        answer:
          "Possibly, but choose carefully. Ask about the dog's independence, exercise needs, toilet routine, separation distress, and whether your schedule allows training, walks, and adjustment time.",
      },
    ],
    related: [
      { title: "Dog Shelter Checklist", description: "Questions to take to a shelter visit.", href: "/adoption/dog-shelter-checklist-south-africa" },
      { title: "Puppy Scam Checklist", description: "Avoid pressure payments and fake adverts.", href: "/adoption/puppy-scam-checklist-south-africa" },
      { title: "Cost of Owning a Dog", description: "Budget before bringing a dog home.", href: "/costs/cost-of-owning-a-dog-south-africa" },
    ],
    sources: adoptionSources,
  },
  {
    slug: "adopting-a-puppy-south-africa",
    path: "/adoption/adopting-a-puppy-south-africa",
    hubTitle: "Adoption Safety",
    hubPath: "/adoption",
    title: "Adopting a Puppy in South Africa: Safety, Costs and First Questions",
    seoTitle: "Adopting a Puppy in South Africa | Practical Safety Checklist",
    description:
      "A South African puppy adoption guide covering shelter questions, vaccine records, sterilisation policies, socialisation, costs, scams, and first-week planning.",
    intro:
      "Puppies are charming, busy, expensive, and vulnerable. Before adopting one in South Africa, make sure the process is welfare-focused, the records are clear, and your household is ready for toilet training, chewing, safe socialisation, and repeated vet visits.",
    updated: "2026-05-13",
    quickFacts: [
      "A puppy should not be treated as fully protected after one vaccine. Ask a vet how to manage socialisation safely while vaccines are still being completed.",
      "Ask about age, deworming, vaccinations, sterilisation policy, diet, littermates, and known health concerns.",
      "Puppy scams often use urgency, stolen photos, delivery stories, and payment before verification.",
      "Puppy adoption is a time commitment: toilet training, night settling, chewing, handling, socialisation, and vet visits all need planning.",
    ],
    sections: [
      {
        heading: "What to ask before adopting a puppy",
        body: [
          "A good adoption conversation should cover more than cuteness. Ask what is known about the puppy's age, size estimate, health, mother dog if known, litter history, temperament, food, and the organisation's support if things become difficult.",
          "If a puppy is very young, ask why it is available and what veterinary advice has been followed. Puppies need careful health and behaviour support in the early weeks.",
        ],
        checklist: [
          "How old is the puppy, and how was the age estimated?",
          "What vaccinations and deworming have already been done?",
          "Is there a sterilisation contract or included sterilisation plan?",
          "What food is the puppy eating now, and how often?",
          "Has the puppy had diarrhoea, vomiting, coughing, or appetite problems?",
          "What is known about the mother dog, littermates, and expected adult size?",
          "What support is available after adoption?",
        ],
      },
      {
        heading: "Puppy health and vaccine planning",
        body: [
          "Puppies are at higher risk from infectious disease than healthy vaccinated adult dogs. Parvovirus is a serious concern in South Africa, especially for unvaccinated or incompletely vaccinated puppies.",
          "Book a vet visit promptly after adoption unless the shelter has given you a clear different plan. Take every record you receive so your vet can advise on boosters, parasite prevention, nutrition, and safe socialisation.",
        ],
        table: {
          headers: ["Topic", "Why it matters"],
          rows: [
            ["Vaccines", "Your vet needs to know which vaccines were given and when boosters are due."],
            ["Deworming", "Puppies commonly need a schedule, not a once-off assumption."],
            ["Parasite prevention", "Ticks, fleas, and worms are practical South African risks."],
            ["Sterilisation", "Ask whether it is included, required later, or already completed if medically appropriate."],
            ["Diet", "Sudden food changes can upset young stomachs."],
          ],
        },
      },
      {
        heading: "Scam and unsafe seller warnings",
        body: [
          "Online puppy adverts can look convincing. Be especially careful when the puppy is supposedly far away, payment is urgent, collection is impossible, or paperwork is promised only after transfer.",
          "Never feel embarrassed about asking to verify an organisation, breeder, or rehoming situation. A legitimate process should survive careful questions.",
        ],
        checklist: [
          "The same puppy photo appears in multiple places.",
          "The seller pushes delivery but avoids visits or live video.",
          "The bank account name does not match the person or organisation.",
          "There are extra courier, crate, insurance, or vaccination fees after the first payment.",
          "The puppy is advertised as rare, tiny, imported, or designer with no credible records.",
          "The person cannot explain vaccines, age, mother dog, or vet involvement.",
        ],
      },
      {
        heading: "The first week with a puppy",
        body: [
          "Keep the first week small and predictable. Big family visits, dog parks, beaches, pet shops, and long outings can overwhelm a puppy and may be unsafe before your vet confirms vaccine protection.",
          "Set up a sleeping area, toilet routine, safe chew options, food schedule, and gentle handling habits from day one.",
        ],
        bullets: [
          "Use short toilet trips after waking, eating, playing, and before sleep.",
          "Supervise children closely and teach calm handling.",
          "Prevent chewing by managing access, not by waiting for mistakes.",
          "Introduce resident pets slowly and safely.",
          "Keep all vet and adoption records easy to find.",
        ],
      },
    ],
    faqs: [
      {
        question: "Can I take my new puppy to a park immediately?",
        answer:
          "Ask your vet first. Puppies may not be fully protected until their vaccine series is complete, and high-traffic dog areas can carry disease risks.",
      },
      {
        question: "What if the puppy has diarrhoea after adoption?",
        answer:
          "Contact a vet, especially if the puppy is small, quiet, vomiting, not eating, has blood in the stool, or seems weak. Puppies can deteriorate quickly.",
      },
      {
        question: "Is a cheap puppy advert safer than adoption?",
        answer:
          "Not necessarily. Cheap online puppies can involve scams, poor welfare, missing vaccines, or puppy farming. Verify carefully before paying anyone.",
      },
    ],
    related: [
      { title: "Puppy Scam Checklist", description: "Spot suspicious online adverts.", href: "/adoption/puppy-scam-checklist-south-africa" },
      { title: "Parvovirus in Dogs", description: "Know puppy emergency warning signs.", href: "/emergency/parvovirus-in-dogs-south-africa" },
      { title: "Vaccination Schedule", description: "Plan puppy vaccines with your vet.", href: "/health/vaccination-schedule-south-africa" },
    ],
    sources: adoptionSources,
  },
  {
    slug: "adopting-an-adult-dog-south-africa",
    path: "/adoption/adopting-an-adult-dog-south-africa",
    hubTitle: "Adoption Safety",
    hubPath: "/adoption",
    title: "Adopting an Adult Dog in South Africa",
    seoTitle: "Adopting an Adult Dog South Africa | Practical Rescue Guide",
    description:
      "A practical South African guide to adopting an adult dog, including temperament questions, health records, shelter checks, first-month planning, and adjustment.",
    intro:
      "Adult dogs are often overlooked because puppies get attention first, but a well-matched adult dog can be a wonderful choice. You may have a clearer idea of size, coat, energy, and temperament, while still needing patience for the dog to decompress and learn your home.",
    updated: "2026-05-13",
    quickFacts: [
      "Adult dogs may offer more predictable size, coat, energy level, and basic temperament than young puppies.",
      "Ask about the dog's known history with children, cats, other dogs, visitors, vehicles, being alone, and handling.",
      "A quiet decompression period helps many newly adopted adult dogs settle.",
      "Behaviour in a kennel is useful information, but it may not show exactly how the dog will behave at home.",
    ],
    sections: [
      {
        heading: "Why adult dogs can be a strong choice",
        body: [
          "An adult dog may already be past the intense puppy stage of chewing, night waking, and constant toilet training. That does not mean no work is needed, but it can be easier to assess the dog you are actually bringing home.",
          "For busy South African households, adult adoption can be practical when the organisation understands the dog's needs and helps you match honestly.",
        ],
        bullets: [
          "Size and coat are usually clearer.",
          "Energy level may be easier to observe.",
          "Some adult dogs already know home routines.",
          "You can discuss known behaviour around other animals and people.",
        ],
      },
      {
        heading: "Questions to ask the shelter or rescue",
        body: [
          "History may be incomplete, especially for strays or surrendered dogs. Ask what is known, what is uncertain, and what staff have observed since the dog arrived.",
        ],
        checklist: [
          "How does the dog respond to handling, leads, kennels, food, and visitors?",
          "Has the dog met children, cats, or other dogs safely?",
          "Does the dog show fear, guarding, reactivity, or escape behaviour?",
          "What exercise and enrichment does the dog seem to need?",
          "What health checks, vaccines, sterilisation, and parasite treatments are recorded?",
          "Is there any known bite history, injury, medication, or chronic condition?",
        ],
      },
      {
        heading: "First month adjustment",
        body: [
          "Many adult rescue dogs need time before their real personality is visible. A dog may be shut down, overexcited, clingy, restless, or confused at first. Keep routines predictable while the dog learns that the new home is safe.",
          "Avoid testing everything in the first weekend. Dog parks, busy braais, off-lead beach walks, and big visitor groups can wait until you know the dog better.",
        ],
        table: {
          headers: ["First month focus", "Practical plan"],
          rows: [
            ["Sleep", "Give the dog a quiet, consistent resting area."],
            ["Food", "Keep diet stable at first and transition slowly if changing food."],
            ["Walks", "Use secure equipment and choose quieter routes while you learn reactions."],
            ["Visitors", "Introduce calmly and avoid crowding the dog."],
            ["Training", "Reward simple routines and contact a qualified trainer if behaviour worries you."],
          ],
        },
      },
      {
        heading: "When to get extra help",
        body: [
          "Ask for help early if the dog is growling, lunging, panicking when left alone, fighting with resident dogs, guarding food, escaping, or frightening family members. Support from a qualified trainer, behaviour professional, shelter behaviour team, or vet can prevent problems from escalating.",
          "Do not punish fear or force the dog into overwhelming situations. Safety and slow progress matter more than proving the adoption is perfect immediately.",
        ],
      },
    ],
    faqs: [
      {
        question: "Will an adult rescue dog bond with my family?",
        answer:
          "Many adult dogs bond deeply with new families. Give the dog time, predictable routines, gentle handling, and fair training.",
      },
      {
        question: "Is an adult dog better for children than a puppy?",
        answer:
          "It depends on the individual dog and the children. Ask about known child experience, supervise carefully, and teach children calm, respectful interaction.",
      },
      {
        question: "What if the dog behaves differently after adoption?",
        answer:
          "That can happen as stress drops and confidence grows. Contact the shelter, rescue, vet, or a qualified trainer early if behaviour concerns appear.",
      },
    ],
    related: [
      { title: "Rescue Dog First Week", description: "Set up a calm start.", href: "/adoption/rescue-dog-first-week-home-south-africa" },
      { title: "Questions Before Adopting", description: "Ask better matching questions.", href: "/adoption/questions-to-ask-before-adopting-a-dog" },
      { title: "Training", description: "Plan routines and behaviour support.", href: "/training" },
    ],
    sources: adoptionSources,
  },
  {
    slug: "dog-shelter-checklist-south-africa",
    path: "/adoption/dog-shelter-checklist-south-africa",
    hubTitle: "Adoption Safety",
    hubPath: "/adoption",
    title: "Dog Shelter Checklist for South African Adopters",
    seoTitle: "Dog Shelter Checklist South Africa | Adoption Questions",
    description:
      "A practical dog shelter checklist for South African adopters covering visits, documents, health records, behaviour questions, home checks, and adoption red flags.",
    intro:
      "A shelter visit can be emotional. This checklist helps you stay warm-hearted and clear-headed, so you can ask the questions that protect the dog and your household before you sign.",
    updated: "2026-05-13",
    quickFacts: [
      "Take proof of ID, proof of residence, and property permission documents if your shelter asks for them.",
      "Ask about health records, sterilisation, microchip status, vaccines, behaviour, diet, and known history.",
      "Meet resident dogs at the shelter if the organisation requires or recommends it.",
      "A careful adoption process is a good sign, not an obstacle.",
    ],
    sections: [
      {
        heading: "Before you visit",
        body: [
          "Check the shelter's current adoption process directly. Requirements differ by organisation and can change. Some ask for appointments, some require specific documents, and many need all household decision-makers to be involved.",
          "If you rent or live in a complex, confirm pet permission before you fall in love with a dog.",
        ],
        checklist: [
          "Copy of ID if requested.",
          "Proof of residence if requested.",
          "Landlord or body corporate permission where relevant.",
          "Photos or notes about fencing, gates, sleeping area, and yard access.",
          "Resident dog vaccination records if a meet-and-greet is required.",
          "A realistic monthly budget for food, vet care, parasite prevention, grooming, and emergencies.",
        ],
      },
      {
        heading: "Questions to ask at the shelter",
        body: [
          "Do not worry about asking too many sensible questions. The aim is not to interrogate staff, but to understand the dog as a real individual.",
        ],
        table: {
          headers: ["Question", "Why it matters"],
          rows: [
            ["What is known about the dog's history?", "Surrender, stray, foster, or previous home context can shape expectations."],
            ["How is the dog with other dogs?", "Important for resident dogs, walks, dog parks, and visitors."],
            ["How is the dog with children?", "Useful for family homes, but supervision is still essential."],
            ["What health care has been done?", "Vaccines, sterilisation, microchip, deworming, and vet checks affect planning."],
            ["What food is the dog eating?", "A slow transition can reduce stomach upset."],
            ["What support is available after adoption?", "Good organisations want the placement to succeed."],
          ],
        },
      },
      {
        heading: "Behaviour notes to observe",
        body: [
          "Shelters are stressful places, so do not judge a dog only by one moment. Still, observation helps. Notice how the dog recovers from excitement, accepts handling, responds to people, reacts near other dogs, and explores a calmer space if one is available.",
        ],
        bullets: [
          "Is the dog curious, shut down, frantic, fearful, pushy, or relaxed?",
          "Can staff handle the dog safely?",
          "Does the dog take treats gently or guard food?",
          "Does the dog pull hard, freeze, panic, or bark intensely on lead?",
          "What does staff say they have seen repeatedly, not just today?",
        ],
      },
      {
        heading: "Red flags at adoption stage",
        body: [
          "A busy shelter may not have perfect admin, but transparency matters. Step back if answers become evasive or the process starts feeling like a rushed sale.",
        ],
        checklist: [
          "You are discouraged from asking about health or behaviour.",
          "There is no clear adoption agreement or receipt.",
          "The dog is handed over without any discussion of records or follow-up.",
          "You are pressured to take a dog that clearly does not fit your home.",
          "The organisation refuses reasonable verification of its identity.",
        ],
      },
    ],
    faqs: [
      {
        question: "Should I take my children to meet a shelter dog?",
        answer:
          "If the shelter agrees, yes, but keep the meeting calm and supervised. Children should not crowd, hug, chase, or overwhelm the dog.",
      },
      {
        question: "Can I adopt if I live in a townhouse or complex?",
        answer:
          "Often yes, if the dog fits the environment and your rules allow it. Bring written permission and discuss barking, exercise, stairs, toileting, and neighbours.",
      },
      {
        question: "What if I feel pressured to decide immediately?",
        answer:
          "Pause. A responsible adoption decision should allow enough time for questions, household agreement, and practical planning.",
      },
    ],
    related: [
      { title: "Dog Adoption South Africa", description: "Understand the full process.", href: "/adoption/dog-adoption-south-africa" },
      { title: "Questions Before Adopting", description: "Decide if now is the right time.", href: "/adoption/questions-to-ask-before-adopting-a-dog" },
      { title: "Rescue Dog First Week", description: "Plan the first days at home.", href: "/adoption/rescue-dog-first-week-home-south-africa" },
    ],
    sources: adoptionSources,
  },
  {
    slug: "questions-to-ask-before-adopting-a-dog",
    path: "/adoption/questions-to-ask-before-adopting-a-dog",
    hubTitle: "Adoption Safety",
    hubPath: "/adoption",
    title: "Questions to Ask Before Adopting a Dog",
    seoTitle: "Questions to Ask Before Adopting a Dog | South Africa Checklist",
    description:
      "A South African checklist of questions to ask yourself, shelters, rescues, breeders, or private rehoming families before adopting a dog.",
    intro:
      "The best adoption questions are practical, not suspicious. They help you understand whether your home can meet this dog's needs on a normal weekday, during hot weather, when money is tight, and when the dog needs training or veterinary care.",
    updated: "2026-05-13",
    quickFacts: [
      "Ask questions about the individual dog, not only the breed or age.",
      "Be honest about work hours, children, resident pets, fencing, budget, heat, and noise rules.",
      "A responsible shelter, rescue, breeder, or rehoming family should welcome careful matching questions.",
      "If answers are vague or rushed, slow down before paying or signing.",
    ],
    sections: [
      {
        heading: "Questions for yourself",
        body: [
          "Before asking anyone else, ask whether your current life can support a dog. Good intentions do not walk the dog, pay the vet, manage separation distress, or fix weak fencing.",
        ],
        checklist: [
          "Who will feed, walk, train, groom, and transport the dog?",
          "Can we afford routine care and an emergency buffer?",
          "Do our lease, complex, or body corporate rules allow this dog?",
          "What happens during holidays, load-shedding disruptions, work travel, or illness?",
          "Can we manage barking, shedding, digging, chewing, and toilet accidents?",
          "Are children ready to follow calm handling rules?",
          "Do resident pets have the temperament and health for a new dog?",
        ],
      },
      {
        heading: "Questions about the dog",
        body: [
          "Ask for what is known and what is uncertain. A truthful 'we do not know yet' is better than confident promises with no basis.",
        ],
        table: {
          headers: ["Topic", "Ask"],
          rows: [
            ["Health", "What vaccines, deworming, parasite prevention, sterilisation, and vet checks are recorded?"],
            ["Behaviour", "How does the dog behave with handling, food, other dogs, children, visitors, and being alone?"],
            ["Routine", "What food, sleep, toilet, walk, and enrichment routine is the dog used to?"],
            ["History", "Was the dog surrendered, found, fostered, or born into care?"],
            ["Support", "Who should I contact if the dog struggles to settle?"],
          ],
        },
      },
      {
        heading: "Questions for breeders or puppy sellers",
        body: [
          "If you are not adopting from a welfare organisation and are considering a puppy from a breeder, take extra care. Responsible breeders should be transparent about registration where relevant, parent dogs, health testing, contracts, socialisation, and why they bred the litter.",
          "Do not support puppy farms, sellers with many breeds always available, or people who avoid visits and verification.",
        ],
        checklist: [
          "Can I visit the premises where the puppy was raised?",
          "Can I see the mother dog where appropriate?",
          "What health tests are relevant to this breed, and can I see the results?",
          "Will there be a written purchase agreement?",
          "What vaccinations, deworming, microchip, and vet records will I receive?",
          "Are the parents registered where registration is claimed?",
          "What support do you offer after the puppy goes home?",
        ],
      },
      {
        heading: "Decision warning signs",
        body: [
          "Walk away from pressure. There will always be another dog, but there may not be another chance to undo a rushed decision without stress for everyone involved.",
        ],
        bullets: [
          "You are choosing mainly from guilt, panic, or a cute photo.",
          "The household is divided but one person is pushing ahead.",
          "The dog's needs exceed your time, space, budget, or experience.",
          "The seller or organisation gets angry when you ask reasonable questions.",
          "You cannot verify records, identity, or property permission.",
        ],
      },
    ],
    faqs: [
      {
        question: "How many questions are too many?",
        answer:
          "Sensible welfare questions are not too many. Keep them polite, organised, and focused on whether the dog will be safe and well cared for.",
      },
      {
        question: "Should I adopt if I feel sorry for the dog?",
        answer:
          "Compassion matters, but pity alone is not enough. Adopt when you can meet the dog's needs, not only because the situation feels sad.",
      },
      {
        question: "What if the shelter does not know the dog's history?",
        answer:
          "That can happen. Ask what staff have observed, what health checks were done, and what support is available if new information appears after adoption.",
      },
    ],
    related: [
      { title: "Dog Adoption South Africa", description: "Understand adoption steps.", href: "/adoption/dog-adoption-south-africa" },
      { title: "Best Dog Breeds", description: "Match dog needs to your home.", href: "/breeds/best-dog-breeds-for-south-african-homes" },
      { title: "Dog Costs", description: "Check the real budget.", href: "/costs/cost-of-owning-a-dog-south-africa" },
    ],
    sources: adoptionSources,
  },
  {
    slug: "rescue-dog-first-week-home-south-africa",
    path: "/adoption/rescue-dog-first-week-home-south-africa",
    hubTitle: "Adoption Safety",
    hubPath: "/adoption",
    title: "Rescue Dog First Week Home in South Africa",
    seoTitle: "Rescue Dog First Week Home South Africa | Calm Setup Guide",
    description:
      "A calm South African first-week guide for rescue dogs covering sleep, feeding, toilet breaks, children, resident pets, visitors, vet checks, and routines.",
    intro:
      "The first week is not about showing your new dog the whole world. It is about helping them feel safe, learn the routine, and start trusting your household. Keep things gentle, predictable, and boring in the best possible way.",
    updated: "2026-05-13",
    quickFacts: [
      "Give your new dog a quiet resting space, predictable meals, short lead walks, and limited visitors.",
      "Do not rush dog parks, beach outings, off-lead walks, or big family gatherings.",
      "Introduce resident dogs carefully and supervise children closely.",
      "Book a vet check if records are incomplete, your shelter recommends it, or you notice illness signs.",
    ],
    sections: [
      {
        heading: "Set up before collection",
        body: [
          "Prepare the basics before the dog arrives so you are not scrambling while the dog is confused. Secure gates, remove poisons, lift electrical cords, put away shoes and children's toys, and decide where the dog will sleep.",
          "Ask the shelter what food the dog is eating and keep that stable at first if possible.",
        ],
        checklist: [
          "Lead, collar or harness, and ID tag.",
          "Quiet sleeping area away from busy doors.",
          "Food and water bowls.",
          "The same or similar food for the first few days.",
          "Cleaning supplies for accidents.",
          "Safe chew items and simple enrichment.",
          "Vet, shelter, and emergency clinic details saved.",
        ],
      },
      {
        heading: "First 48 hours",
        body: [
          "Expect uncertainty. Some dogs sleep a lot. Some pace, whine, bark, cling, hide, or seem overexcited. Keep your voice calm and your rules consistent.",
          "Avoid crowding the dog. Let them explore slowly, keep doors and gates secure, and use a lead outside until you know their recall and reactions.",
        ],
        table: {
          headers: ["Need", "What to do"],
          rows: [
            ["Sleep", "Let the dog rest without constant touching or visitors."],
            ["Toilet", "Take frequent calm toilet breaks and praise outdoor success."],
            ["Food", "Feed simple meals and avoid rich treats at first."],
            ["Walks", "Use short, quiet walks instead of busy routes."],
            ["Children", "Supervise and teach children to give the dog space."],
          ],
        },
      },
      {
        heading: "Resident pets and visitors",
        body: [
          "Resident dogs should meet calmly, ideally as advised by the shelter or trainer. Do not leave new and resident pets unsupervised until you have seen stable behaviour over time.",
          "Visitors can wait. A new dog does not need to meet the whole family, neighbours, and friends in the first weekend.",
        ],
        bullets: [
          "Feed dogs separately at first.",
          "Pick up high-value toys if there is tension.",
          "Use barriers or leashes for controlled introductions.",
          "Give cats escape routes and high resting spaces.",
          "Interrupt rough play early and calmly.",
        ],
      },
      {
        heading: "When to ask for help",
        body: [
          "Contact the shelter, rescue, vet, or a qualified trainer early if the dog is not coping. Early guidance is kinder than waiting until everyone is stressed.",
        ],
        checklist: [
          "The dog is not eating, drinking, urinating, or passing stool normally.",
          "There is vomiting, diarrhoea, coughing, weakness, pain, or collapse.",
          "The dog growls, snaps, guards food, or scares family members.",
          "Resident pets are fighting or one animal is constantly hiding.",
          "The dog panics when left alone or tries to escape repeatedly.",
        ],
      },
    ],
    faqs: [
      {
        question: "How long does it take a rescue dog to settle?",
        answer:
          "It varies. Some dogs relax quickly, while others need weeks or months. Routine, patience, and low pressure help.",
      },
      {
        question: "Should my rescue dog sleep in my bedroom?",
        answer:
          "Choose what fits your long-term routine. A nearby quiet space can help some dogs settle, but avoid starting habits you will resent later.",
      },
      {
        question: "Can I take my new dog to the beach or dog park?",
        answer:
          "Wait until you know the dog's recall, confidence, health status, and reactions to other dogs. Start with calm, controlled walks.",
      },
    ],
    related: [
      { title: "Adopting an Adult Dog", description: "Understand adult dog adjustment.", href: "/adoption/adopting-an-adult-dog-south-africa" },
      { title: "When to Take Your Dog to the Vet", description: "Know symptom urgency.", href: "/health/when-to-take-your-dog-to-the-vet-south-africa" },
      { title: "Training", description: "Build calm daily routines.", href: "/training" },
    ],
    sources: adoptionSources,
  },
  {
    slug: "boerboel-dog-breed-south-africa",
    path: "/breeds/boerboel-dog-breed-south-africa",
    hubTitle: "Breed Guides",
    hubPath: "/breeds",
    title: "Boerboel Dog Breed Guide for South African Homes",
    seoTitle: "Boerboel Dog Breed South Africa | Responsible Ownership Guide",
    description:
      "A South Africa-specific Boerboel guide covering temperament, space, training, family suitability, heat, health, costs, and responsible ownership.",
    intro:
      "The Boerboel is strongly associated with South Africa and is often admired for confidence, size, and presence. That does not make the breed a shortcut to security or a casual first dog. Boerboels need experienced, responsible ownership, structure, training, safe management, and serious long-term budgeting.",
    updated: "2026-05-13",
    quickFacts: [
      "A Boerboel should never be chosen only as a guard dog or intimidation tool.",
      "This is a large, powerful breed that needs secure property, calm handling, socialisation, and responsible training.",
      "Size affects food, transport, veterinary costs, parasite prevention, equipment, and insurance planning.",
      "Use reputable adoption routes or responsible breeders who welcome questions about health, temperament, registration, and parent dogs.",
    ],
    sections: [
      {
        heading: "South African context",
        body: [
          "Boerboels are part of the South African dog landscape, especially in homes where people want a large family companion with a confident temperament. But popularity can also attract poor breeding, exaggerated claims, and unsuitable placements.",
          "A well-managed Boerboel is not created by size alone. Owners need time for socialisation, lead manners, visitor routines, safe boundaries, and clear household rules.",
        ],
      },
      {
        heading: "Home fit checklist",
        body: [
          "Before choosing a Boerboel, be brutally honest about your property, physical handling ability, budget, and experience with large dogs.",
        ],
        checklist: [
          "Secure fencing, gates, and visitor management.",
          "Enough indoor and outdoor space for a large dog to rest safely.",
          "Budget for large-breed food, vet care, equipment, transport, and training.",
          "Commitment to early, reward-based training and socialisation.",
          "A plan for children, guests, service providers, and other pets.",
          "Owner strength and confidence without using harsh handling.",
        ],
      },
      {
        heading: "Training and safety",
        body: [
          "Responsible Boerboel ownership means teaching calm behaviour, not encouraging suspicion or uncontrolled guarding. A powerful dog must be manageable on lead, comfortable with routine handling, and safely contained.",
          "Avoid trainers who promote intimidation, harsh punishment, or aggression. If behaviour concerns appear, seek qualified help early.",
        ],
        table: {
          headers: ["Area", "Practical focus"],
          rows: [
            ["Visitors", "Teach calm greetings, use barriers when needed, and do not force contact."],
            ["Lead walks", "Build loose-lead skills before the dog is too strong to manage."],
            ["Children", "Supervise always; do not allow climbing, teasing, or rough handling."],
            ["Other dogs", "Socialise thoughtfully and avoid uncontrolled confrontations."],
            ["Property", "Maintain fences, gates, locks, and signage responsibly."],
          ],
        },
      },
      {
        heading: "Health and costs",
        body: [
          "Large breeds can be expensive to feed, medicate, transport, and treat. Ask a vet about healthy growth, body condition, joints, parasite prevention, sterilisation timing, and emergency planning.",
          "If buying from a breeder, ask about health testing relevant to the breed, parent temperament, registration where claimed, and a written agreement. Do not support breeders who always have puppies available, avoid visits, or make extreme protection promises.",
        ],
        bullets: [
          "Keep weight controlled to reduce strain on joints.",
          "Plan for strong equipment: lead, harness, collar, bed, crate or barriers where suitable.",
          "Avoid high-impact exercise for growing puppies unless your vet advises otherwise.",
          "Discuss insurance or emergency savings before the dog needs urgent care.",
        ],
      },
    ],
    faqs: [
      {
        question: "Is a Boerboel a good family dog?",
        answer:
          "A well-bred, well-socialised, well-managed Boerboel may fit some experienced families, but the breed is large and powerful. Supervision, training, and responsible handling are essential.",
      },
      {
        question: "Can a Boerboel live in a small property?",
        answer:
          "Usually this is challenging. Space, secure fencing, visitor management, exercise, and safe handling all matter. A small property is rarely ideal for an inexperienced owner.",
      },
      {
        question: "Should I get a Boerboel for protection?",
        answer:
          "Do not choose any dog only for protection. A dog is a living companion with welfare, training, socialisation, health, and legal responsibilities.",
      },
    ],
    related: [
      { title: "Best Dog Breeds", description: "Compare breed fit carefully.", href: "/breeds/best-dog-breeds-for-south-african-homes" },
      { title: "Responsible Breeder Questions", description: "Ask before paying.", href: "/adoption/questions-to-ask-before-adopting-a-dog" },
      { title: "Dog Costs", description: "Budget for large dogs.", href: "/costs/cost-of-owning-a-dog-south-africa" },
    ],
    sources: [
      {
        label: "KUSA Boerboel breed assessment regulations",
        href: "https://www.kusa.co.za/index.php/19-kusa-documents/kusa-constitution-schedules/300-schedule-05f-regulation-9-1-10-regulations-for-boerboel-character-and-breed-assessments",
        note: "South African Boerboel breed and character assessment context.",
      },
      ...breedSources,
    ],
  },
  {
    slug: "africanis-dog-breed-south-africa",
    path: "/breeds/africanis-dog-breed-south-africa",
    hubTitle: "Breed Guides",
    hubPath: "/breeds",
    title: "AfriCanis Dog Guide for South African Homes",
    seoTitle: "AfriCanis Dog South Africa | Practical Landrace Guide",
    description:
      "A South Africa-specific AfriCanis guide covering landrace context, temperament, space, training, health, adoption, and responsible ownership.",
    intro:
      "The AfriCanis is not simply a trendy label for any mixed-breed dog. It is widely described as a Southern African aboriginal landrace shaped by rural life, function, and environment. For modern homes, the practical question is whether the individual dog fits your routine, space, training ability, and expectations.",
    updated: "2026-05-13",
    quickFacts: [
      "AfriCanis refers to Southern African indigenous landrace dogs, not a designer breed label.",
      "Individual dogs can vary in size, coat, confidence, prey drive, and social behaviour.",
      "Many may be hardy and athletic, but they still need veterinary care, parasite prevention, training, and humane management.",
      "Adoption fit should be based on the individual dog, not assumptions about being naturally easy or low-maintenance.",
    ],
    sections: [
      {
        heading: "South African context",
        body: [
          "The AfriCanis Society describes AfriCanis dogs as aboriginal dogs of Southern Africa, shaped by Africa and rural living rather than modern show-ring selection. That history is part of the appeal, but it should not become a marketing shortcut.",
          "If you meet a dog described as AfriCanis or AfriCanis-type, ask practical questions about the individual animal's behaviour, health, background, and needs.",
        ],
      },
      {
        heading: "What kind of home may suit",
        body: [
          "Many AfriCanis-type dogs are athletic, alert, and environmentally aware. Some may settle well into family homes with exercise and structure; others may be more independent, chase-prone, or wary depending on upbringing and socialisation.",
        ],
        checklist: [
          "Daily walks and mental enrichment.",
          "Secure fencing and careful introductions to small animals.",
          "Patient, reward-based training.",
          "Respect for a dog that may be more independent than clingy.",
          "Access to shade, water, parasite prevention, and routine vet care.",
          "A household willing to assess the dog as an individual.",
        ],
      },
      {
        heading: "Training, family life and outings",
        body: [
          "Do not assume an AfriCanis-type dog will automatically understand suburban life, complexes, pavement walks, cars, schools, beaches, or busy parks. Build confidence slowly and keep lead safety in place until recall is reliable.",
          "Children should be supervised as with any dog. A hardy-looking dog still deserves gentle handling, rest, and predictable boundaries.",
        ],
        table: {
          headers: ["Situation", "Owner plan"],
          rows: [
            ["Garden life", "Secure fencing and enrichment to prevent roaming or boredom."],
            ["Walks", "Use a lead while building recall and traffic confidence."],
            ["Cats and small pets", "Assess prey drive carefully and manage introductions."],
            ["Heat", "Provide shade, water, and avoid hot midday exercise."],
            ["Training", "Keep sessions short, fair, and reward-based."],
          ],
        },
      },
      {
        heading: "Adoption and breeder considerations",
        body: [
          "If adopting, ask the shelter or rescue what they have observed rather than relying on a label. If buying from someone claiming AfriCanis breeding, verify their ethics, welfare standards, registration claims where relevant, and willingness to answer questions.",
          "Avoid anyone using indigenous identity as a sales hook while providing poor care, no records, or pressure to pay quickly.",
        ],
      },
    ],
    faqs: [
      {
        question: "Is an AfriCanis the same as any township dog?",
        answer:
          "Not exactly. AfriCanis is used for Southern African aboriginal landrace dogs, but labels can be used loosely. Assess the individual dog and verify claims carefully.",
      },
      {
        question: "Are AfriCanis dogs good family dogs?",
        answer:
          "Some are excellent family companions when well matched, trained, and managed. Suitability depends on the individual dog's temperament, history, and your household.",
      },
      {
        question: "Do AfriCanis dogs need vet care if they are hardy?",
        answer:
          "Yes. Hardiness does not replace vaccinations, parasite prevention, sterilisation discussions, dental care, injury treatment, or emergency veterinary care.",
      },
    ],
    related: [
      { title: "Dog Adoption South Africa", description: "Adopt with careful questions.", href: "/adoption/dog-adoption-south-africa" },
      { title: "Ticks and Fleas", description: "Plan parasite prevention.", href: "/health/ticks-and-fleas-dogs-south-africa" },
      { title: "Best Family Dogs", description: "Choose for temperament and routine.", href: "/breeds/best-family-dogs-south-africa" },
    ],
    sources: [
      {
        label: "AfriCanis Society of Southern Africa",
        href: "https://africanis.co.za/the-africanis-society/",
        note: "South African source explaining the AfriCanis as a heterogeneous landrace and its conservation context.",
      },
      {
        label: "What is in the name AfriCanis?",
        href: "https://africanis.co.za/what-is-in-the-name-africanis/",
        note: "Background on the AfriCanis name and indigenous Southern African dog context.",
      },
      ...breedSources,
    ],
  },
  {
    slug: "labrador-retriever-south-africa",
    path: "/breeds/labrador-retriever-south-africa",
    hubTitle: "Breed Guides",
    hubPath: "/breeds",
    title: "Labrador Retriever Guide for South African Homes",
    seoTitle: "Labrador Retriever South Africa | Family Dog Breed Guide",
    description:
      "A practical South African Labrador Retriever guide covering family fit, exercise, heat, beaches, grooming, shedding, food, health, training, and responsible sourcing.",
    intro:
      "Labradors are popular for good reason, but they are not low-effort furniture. A Labrador needs daily exercise, food discipline, training, grooming, and family involvement. In South Africa, heat, beaches, estates, secure gardens, and food costs all shape whether a Lab is a good fit.",
    updated: "2026-05-13",
    quickFacts: [
      "Labradors often suit active families, but they need training, exercise, and weight control.",
      "They can shed more than new owners expect, including in warm South African homes.",
      "Food motivation is useful for training but can become obesity risk if unmanaged.",
      "Ask breeders or rescues about hip, elbow, eye, weight, and temperament considerations.",
    ],
    sections: [
      {
        heading: "South African lifestyle fit",
        body: [
          "Many Labradors enjoy active homes, garden play, training games, swimming, and family routines. They can fit suburban life well when owners provide exercise and structure.",
          "A bored Labrador may chew, dig, jump up, raid bins, or pull hard on lead. The breed's friendly reputation should not replace training.",
        ],
        table: {
          headers: ["Home factor", "Labrador reality"],
          rows: [
            ["Children", "Often good with families, but large excitable dogs still need supervision."],
            ["Exercise", "Daily walks, games, training, and enrichment are important."],
            ["Heat", "Avoid hot midday exercise and provide shade and water."],
            ["Water", "Many enjoy swimming, but beach and pool safety still matter."],
            ["Food", "Strong appetite means weight control is a long-term job."],
          ],
        },
      },
      {
        heading: "Training and manners",
        body: [
          "Start lead manners, recall, leave-it, settle, and polite greetings early. Labradors can be strong, social, and enthusiastic, which is delightful when guided and difficult when unmanaged.",
          "Reward-based training works well for many Labradors because food and play can be strong motivators.",
        ],
        checklist: [
          "Teach calm greetings before the dog becomes too strong.",
          "Practise recall in safe enclosed spaces before off-lead outings.",
          "Use puzzle feeding or training games to slow eating and add enrichment.",
          "Build polite behaviour around braais, picnics, bins, and children's snacks.",
          "Keep swimming supervised and prevent heat exhaustion after energetic play.",
        ],
      },
      {
        heading: "Grooming, shedding and health",
        body: [
          "Labradors have short coats but still shed. Regular brushing helps manage loose hair and gives you a chance to check skin, ears, ticks, lumps, and sore feet.",
          "Ask your vet about body condition, joint health, ear care after swimming, and age-appropriate exercise. If buying a puppy, ask the breeder about relevant health testing and parent temperament.",
        ],
      },
      {
        heading: "Adoption or responsible breeder route",
        body: [
          "Labradors and Labrador crosses appear in rescue and adoption channels. If choosing a breeder, avoid sellers who always have puppies available, will not let you verify conditions, or cannot answer health and paperwork questions.",
          "Do not choose only by colour. Black, yellow, and chocolate Labradors all need the same thoughtful ownership.",
        ],
      },
    ],
    faqs: [
      {
        question: "Are Labradors good with children?",
        answer:
          "Many are, but supervision and training are still essential. A young Labrador can knock children over by accident if greetings and play are not managed.",
      },
      {
        question: "Can a Labrador live in a townhouse?",
        answer:
          "Possibly, if exercise, noise, stairs, toilet access, and neighbour rules are managed. A bored Labrador in a small space can become destructive.",
      },
      {
        question: "Do Labradors cope with South African heat?",
        answer:
          "They can cope with sensible management, but avoid hot midday exercise, provide shade and water, and watch for heat stress during active play.",
      },
    ],
    related: [
      { title: "Best Family Dogs", description: "Compare family fit carefully.", href: "/breeds/best-family-dogs-south-africa" },
      { title: "Heatstroke in Dogs", description: "Know hot-weather danger signs.", href: "/emergency/heatstroke-in-dogs-south-africa" },
      { title: "Dog Food", description: "Plan feeding and body condition.", href: "/food" },
    ],
    sources: [
      {
        label: "KUSA Labrador Retriever breed standard",
        href: "https://kusa.co.za/images/BREED%20STANDARDS%20EFFECTIVE%2001%20JULY%202025/Retriever%20%28Labrador%29%20-%20KC%20%5B07-2025%5D.pdf",
        note: "Breed standard context for Labrador Retriever characteristics and recognised colours.",
      },
      ...breedSources,
    ],
  },
  {
    slug: "jack-russell-terrier-south-africa",
    path: "/breeds/jack-russell-terrier-south-africa",
    hubTitle: "Breed Guides",
    hubPath: "/breeds",
    title: "Jack Russell Terrier Guide for South African Homes",
    seoTitle: "Jack Russell Terrier South Africa | Practical Breed Guide",
    description:
      "A practical South African Jack Russell Terrier guide covering energy, barking, small homes, prey drive, children, exercise, grooming, training, and responsible ownership.",
    intro:
      "Jack Russells are small dogs with big opinions, sharp brains, and serious energy. They can be brilliant companions for active owners, but they are often underestimated because of size. A bored Jack Russell can bark, dig, chase, escape, and run the household.",
    updated: "2026-05-13",
    quickFacts: [
      "Small size does not mean low energy or low training needs.",
      "Jack Russells often need daily exercise, games, scent work, boundaries, and recall training.",
      "Prey drive can affect cats, small pets, wildlife, chickens, and off-lead walks.",
      "They can suit smaller homes if noise, enrichment, walks, and garden security are handled well.",
    ],
    sections: [
      {
        heading: "South African home fit",
        body: [
          "Jack Russells are common in South African suburbs, farms, townhouses, and family homes. Their size can make them practical, but their energy and determination need daily outlets.",
          "Do not expect a Jack Russell to exercise itself in a small garden. Without training and enrichment, the dog may create its own entertainment.",
        ],
        table: {
          headers: ["Factor", "What to plan"],
          rows: [
            ["Exercise", "Daily walks, sniffing, play, and training games."],
            ["Barking", "Manage triggers, boredom, windows, boundary fences, and complex rules."],
            ["Prey drive", "Care around cats, rabbits, birds, chickens, and wildlife."],
            ["Children", "Supervise handling; small dogs can still be hurt or overwhelmed."],
            ["Heat", "Avoid hot pavement and intense midday play."],
          ],
        },
      },
      {
        heading: "Training priorities",
        body: [
          "Teach recall, leave-it, settle, polite lead walking, handling, and quiet routines early. Terriers often love problem-solving, so use that brain constructively.",
          "Harsh correction can create conflict without solving the need for outlets. Use clear rules, rewards, management, and appropriate enrichment.",
        ],
        checklist: [
          "Practise recall before off-lead freedom.",
          "Use food puzzles, scent games, and short training sessions.",
          "Secure gates and fence gaps.",
          "Teach calm behaviour when visitors arrive.",
          "Provide legal digging or sniffing outlets if the dog loves working.",
        ],
      },
      {
        heading: "Grooming and health",
        body: [
          "Jack Russells may have smooth, rough, or broken coats. Grooming needs vary, but all need nail care, ear checks, dental care, parasite prevention, and weight management.",
          "Ask a vet about kneecaps, dental health, skin allergies, age-appropriate exercise, and any breed-related concerns if you are choosing a puppy.",
        ],
      },
      {
        heading: "Adoption and responsible sourcing",
        body: [
          "Many Jack Russells and Jack Russell crosses need homes. Ask shelters about energy level, dog compatibility, cats, children, escape behaviour, and barking.",
          "If buying a puppy, avoid sellers who cannot show health records, parent temperament, or the environment where puppies were raised.",
        ],
      },
    ],
    faqs: [
      {
        question: "Are Jack Russells good flat or townhouse dogs?",
        answer:
          "They can be if exercise, barking, enrichment, toilet access, and neighbour rules are managed. They are not automatically easy because they are small.",
      },
      {
        question: "Can Jack Russells live with cats?",
        answer:
          "Some can, but prey drive varies. Ask about the individual dog, introduce carefully, and give cats safe escape routes.",
      },
      {
        question: "Do Jack Russells need professional grooming?",
        answer:
          "Some rough or broken coats may benefit from professional advice, but even smooth coats need brushing, nail care, ear checks, and parasite prevention.",
      },
    ],
    related: [
      { title: "Best Dogs for Small Homes", description: "Plan for smaller living spaces.", href: "/breeds/best-dogs-for-small-homes-south-africa" },
      { title: "Training", description: "Build recall and routines.", href: "/training" },
      { title: "Dog-Friendly Places", description: "Plan safer outings.", href: "/dog-friendly" },
    ],
    sources: [
      {
        label: "KUSA Jack Russell Terrier breed standard",
        href: "https://www.kusa.co.za/images/Gallery/Jack%20Russell%20Terrier%20amend%2019%20Sept%202018.pdf",
        note: "Breed standard context for Jack Russell Terrier characteristics and temperament.",
      },
      ...breedSources,
    ],
  },
  {
    slug: "best-family-dogs-south-africa",
    path: "/breeds/best-family-dogs-south-africa",
    hubTitle: "Breed Guides",
    hubPath: "/breeds",
    title: "Best Family Dogs for South African Homes",
    seoTitle: "Best Family Dogs South Africa | Practical Breed and Adoption Guide",
    description:
      "A practical South African guide to choosing a family dog by temperament, children, space, heat, grooming, costs, training, adoption, and responsible breeding.",
    intro:
      "The best family dog is not a breed list with a winner. It is a dog whose temperament, size, energy, handling tolerance, health, and daily needs fit your real household. Children, visitors, work hours, heat, costs, and resident pets matter as much as breed reputation.",
    updated: "2026-05-13",
    quickFacts: [
      "No breed is automatically safe with children. Supervision and respectful handling are always required.",
      "Adult rescue dogs can be excellent family pets when the match is careful and the history is honestly discussed.",
      "Choose temperament and routine fit before appearance or popularity.",
      "Avoid breeders or sellers who make guarantees about perfect family behaviour without evidence or careful questions.",
    ],
    sections: [
      {
        heading: "What family-friendly should mean",
        body: [
          "Family-friendly means steady around normal household life, not tolerant of anything. A good match depends on children learning boundaries and adults managing the dog responsibly.",
          "Think about the dog on a weekday morning, during homework, with visitors at the gate, in hot weather, during school holidays, and when everyone is tired.",
        ],
        table: {
          headers: ["Family factor", "Why it matters"],
          rows: [
            ["Children's ages", "Toddlers, teenagers, and visiting children create different needs."],
            ["Energy", "High-energy dogs need outlets before they can settle well."],
            ["Size", "Large dogs can knock small children over accidentally."],
            ["Grooming", "Coat care becomes a recurring family responsibility."],
            ["Noise", "Complexes and close neighbours make barking more important."],
            ["Budget", "Food, vet care, training, grooming, and emergencies must be realistic."],
          ],
        },
      },
      {
        heading: "Types of dogs to consider",
        body: [
          "Some Labradors, Golden Retrievers, Spaniels, Poodles, mixed-breed dogs, AfriCanis-type dogs, and calm adult shelter dogs may suit families well. But breed name is only the start. The individual dog's temperament and your household routine decide the fit.",
        ],
        bullets: [
          "Puppies need intensive supervision and training.",
          "Adult dogs may have clearer temperament and energy levels.",
          "Small dogs can be fragile around rough handling.",
          "Large dogs need space, training, and budget.",
          "High-energy dogs need daily activity, not weekend-only attention.",
        ],
      },
      {
        heading: "Questions for shelters or breeders",
        body: [
          "Ask practical questions about the individual dog. If someone promises that a puppy will be perfect with children but cannot explain parent temperament, socialisation, health, or support, be cautious.",
        ],
        checklist: [
          "Has the dog lived with children or met children safely?",
          "How does the dog react to noise, running, handling, and visitors?",
          "Does the dog guard food, toys, resting spaces, or people?",
          "What exercise and training does the dog need every day?",
          "What health or grooming costs should we expect?",
          "What support is available after adoption or purchase?",
        ],
      },
      {
        heading: "Family safety rules",
        body: [
          "Good family dogs still need rules. Children should not climb on dogs, hug sleeping dogs, take food, grab ears, or disturb a dog in a bed or crate. Adults should supervise and step in early.",
        ],
        checklist: [
          "Give the dog a child-free resting space.",
          "Supervise all dog-child interaction.",
          "Teach children to call the dog instead of chasing the dog.",
          "Feed dogs away from children and other pets.",
          "Use professional help for growling, snapping, fear, or guarding.",
        ],
      },
    ],
    faqs: [
      {
        question: "What is the best dog breed for children in South Africa?",
        answer:
          "There is no single best breed. A suitable individual dog, careful matching, supervision, training, and respectful children matter more than a breed label.",
      },
      {
        question: "Is a puppy better than an adult dog for a family?",
        answer:
          "Not always. Puppies are a lot of work. Adult dogs may have clearer temperament and energy, which can help families choose more realistically.",
      },
      {
        question: "Should we get a dog to teach children responsibility?",
        answer:
          "Children can help, but adults remain responsible for the dog's welfare, training, vet care, exercise, and safety.",
      },
    ],
    related: [
      { title: "Labrador Retriever Guide", description: "Understand a popular family breed.", href: "/breeds/labrador-retriever-south-africa" },
      { title: "Dog Adoption South Africa", description: "Adopt with a realistic process.", href: "/adoption/dog-adoption-south-africa" },
      { title: "Questions Before Adopting", description: "Check family readiness.", href: "/adoption/questions-to-ask-before-adopting-a-dog" },
    ],
    sources: [
      {
        label: "NSPCA choosing a dog",
        href: "https://nspca.co.za/choosing-a-dog/",
        note: "South African welfare guidance on choosing a dog and adoption responsibilities.",
      },
      ...breedSources,
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
      "A practical South African guide to choosing dogs for flats, townhouses, complexes, and smaller gardens, with advice on barking, exercise, heat, rules, and adoption.",
    intro:
      "A small home does not automatically mean you need the smallest dog. The better question is which dog can live calmly with your space, neighbours, routine, exercise plan, body corporate rules, and budget.",
    updated: "2026-05-13",
    quickFacts: [
      "Energy level, barking, toilet access, separation distress, and exercise matter more than size alone.",
      "Some small dogs are noisy and intense; some medium adult dogs are calm and easier to live with.",
      "Check rental, complex, estate, or body corporate rules before adoption or purchase.",
      "Daily walks and enrichment are essential even with a small garden or balcony.",
    ],
    sections: [
      {
        heading: "What makes a dog suitable for a small home",
        body: [
          "Small-home suitability is about behaviour, routine, and management. A dog that can settle indoors, toilet reliably, handle neighbour noise, and exercise on lead may do better than a high-energy dog with a tiny garden and no walks.",
        ],
        table: {
          headers: ["Factor", "Why it matters"],
          rows: [
            ["Barking", "Close neighbours and complex rules make noise a major issue."],
            ["Exercise", "Dogs still need walks, sniffing, training, and enrichment."],
            ["Toilet access", "Flats and upstairs units need a practical routine."],
            ["Heat", "Balconies, paving, and cars can become dangerously hot."],
            ["Separation", "A distressed dog may bark, damage doors, or panic when alone."],
            ["Stairs", "Puppies, seniors, and some body types may struggle with frequent stairs."],
          ],
        },
      },
      {
        heading: "Dog types that may work",
        body: [
          "Many companion breeds, mature small-to-medium mixed breeds, some terriers with committed exercise, and calm adult shelter dogs can work in smaller homes. The individual dog matters more than a neat internet list.",
        ],
        bullets: [
          "Adult dogs can be easier to assess for barking and energy.",
          "Small companion dogs may suit flats but still need dental care and grooming.",
          "Terriers can work if enrichment and barking are managed.",
          "Large calm dogs may sometimes cope if rules allow and exercise is consistent.",
          "High-drive working breeds are often difficult in small homes without serious daily outlets.",
        ],
      },
      {
        heading: "Questions before choosing",
        body: [
          "Ask the shelter, rescue, breeder, or rehoming family about the dog's real behaviour in confined spaces. A dog that copes in a kennel may still need time to learn apartment life.",
        ],
        checklist: [
          "How much does the dog bark at noises, people, gates, or other dogs?",
          "Can the dog be left alone calmly?",
          "How much exercise does the dog need on a normal weekday?",
          "Is the dog toilet trained, and what routine is it used to?",
          "Does the dog cope with stairs, lifts, tiled floors, or balconies?",
          "Are there grooming, shedding, or allergy considerations?",
          "Do the property rules allow this size, number, or breed type?",
        ],
      },
      {
        heading: "Small-home setup tips",
        body: [
          "Good setup prevents many problems. Give the dog a clear resting spot, safe chew options, predictable walks, and a plan for noise triggers. Avoid leaving a bored dog staring through a front window or gate all day.",
        ],
        checklist: [
          "Create a quiet resting area away from the busiest door or window.",
          "Use puzzle feeders and sniffing walks for enrichment.",
          "Plan toilet breaks before work, after work, and before bed.",
          "Close curtains or manage balcony access if outside triggers cause barking.",
          "Keep the dog cool in hot weather and avoid hot paving.",
          "Build alone-time gradually rather than leaving a new dog for a full day immediately.",
        ],
      },
    ],
    faqs: [
      {
        question: "What is the best small dog for a flat in South Africa?",
        answer:
          "There is no single best dog. Look for a dog with manageable barking, suitable energy, good settling ability, and needs you can meet every day.",
      },
      {
        question: "Can a medium or large dog live in a small home?",
        answer:
          "Sometimes, if rules allow and the dog is calm, exercised, and managed well. Size matters less than energy, noise, training, and routine.",
      },
      {
        question: "Are Jack Russells good for small homes?",
        answer:
          "They can be, but only with enough exercise, enrichment, barking management, and secure handling. Small does not mean low-energy.",
      },
    ],
    related: [
      { title: "Jack Russell Terrier Guide", description: "Understand a common small breed.", href: "/breeds/jack-russell-terrier-south-africa" },
      { title: "Dog Shelter Checklist", description: "Ask about small-home fit.", href: "/adoption/dog-shelter-checklist-south-africa" },
      { title: "Dog-Friendly Places", description: "Plan daily outings safely.", href: "/dog-friendly" },
    ],
    sources: [
      {
        label: "NSPCA choosing a dog",
        href: "https://nspca.co.za/choosing-a-dog/",
        note: "South African welfare guidance on matching a dog to space, time, and lifestyle.",
      },
      ...breedSources,
    ],
  },
];

export function getPhase4Guide(slug: string) {
  return phase4GuidePages.find((guide) => guide.slug === slug);
}

export function getPhase4GuidesByHub(hubPath: string) {
  return phase4GuidePages.filter((guide) => guide.hubPath === hubPath);
}
