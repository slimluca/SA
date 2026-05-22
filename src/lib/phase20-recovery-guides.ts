import type { CardLink, GuideContent, Source } from "@/lib/content";

const reviewed = "2026-05-21";

const vetSources: Source[] = [
  {
    label: "South African Veterinary Council",
    href: "https://savc.org.za/",
    note: "Useful for checking veterinary professional registration and veterinary-service context.",
  },
  {
    label: "South African Veterinary Association",
    href: "https://www.sava.co.za/",
    note: "South African veterinary context for responsible dog care and owner education.",
  },
  {
    label: "NSPCA",
    href: "https://nspca.co.za/",
    note: "South African animal welfare context for responsible ownership and welfare concerns.",
  },
];

const moneySources: Source[] = [
  ...vetSources,
  {
    label: "Financial Sector Conduct Authority",
    href: "https://www.fsca.co.za/",
    note: "South African financial-services context for checking providers and understanding that insurance decisions need careful policy review.",
  },
];

const foodSources: Source[] = [
  {
    label: "WSAVA Global Nutrition Committee",
    href: "https://wsava.org/global-guidelines/global-nutrition-guidelines/",
    note: "Veterinary nutrition guidance that helps owners ask better questions about food quality and suitability.",
  },
  {
    label: "MSD Veterinary Manual",
    href: "https://www.msdvetmanual.com/",
    note: "Veterinary reference for general dog health and nutrition context.",
  },
  ...vetSources,
];

const cityCostLinks: CardLink[] = [
  { title: "Local Cost Guides", description: "City guides for grooming, training, emergency vet, and monthly dog costs.", href: "/local-costs" },
  { title: "Dog Cost Calculator", description: "Estimate monthly ownership costs without sharing personal information.", href: "/tools/dog-cost-calculator" },
  { title: "Cape Town Grooming Prices", description: "A city example of grooming quote factors.", href: "/local-costs/cape-town/dog-grooming-prices-cape-town" },
  { title: "Johannesburg Training Costs", description: "A city example of training quote factors.", href: "/local-costs/johannesburg/dog-training-costs-johannesburg" },
];

const phase20Guides: GuideContent[] = [
  {
    slug: "dog-grooming-costs-south-africa",
    path: "/costs/dog-grooming-costs-south-africa",
    hubTitle: "Dog Costs",
    hubPath: "/costs",
    title: "Dog Grooming Costs in South Africa",
    seoTitle: "Dog Grooming Costs South Africa | Price Factors and Questions",
    description:
      "A practical South African dog grooming cost guide covering coat type, dog size, matting, mobile vs parlour grooming, ticks, fleas, seasonal grooming, and city price variation.",
    intro:
      "Dog grooming costs in South Africa vary widely by dog, coat, city, provider, travel, and what is included. This guide helps you compare quotes without relying on fake exact prices or unverified local listings.",
    updated: reviewed,
    quickFacts: [
      "DogHaven does not publish fake exact grooming prices or rank groomers.",
      "Dog size, coat type, matting, behaviour, and mobile travel can all change the quote.",
      "Skin, ear, wound, severe matting, pain, ticks, or flea problems may need veterinary advice.",
      "Ask for a written quote that explains what is included before you book.",
    ],
    sections: [
      {
        heading: "Why grooming costs vary",
        body: [
          "A short-coated small dog needing a basic bath is not the same job as a large double-coated dog, a curly coat, a matted coat, or a nervous senior dog. The safest way to compare providers is to ask what the groom includes, how long it may take, and what happens if the groomer finds a health concern.",
        ],
        table: {
          headers: ["Cost factor", "Why it matters"],
          rows: [
            ["Dog size", "Large dogs need more time, shampoo, drying, equipment, and handling."],
            ["Coat type", "Long, curly, wire, double, and high-shedding coats often need more work than short coats."],
            ["Matting", "Matting can be painful and may require slow handling, clipping, or a vet check if skin is affected."],
            ["Mobile vs parlour", "Mobile grooming may include travel convenience; parlours may have different equipment and staffing."],
            ["Season", "Summer heat, winter mud, beach sand, dust, and shedding seasons can change grooming needs."],
            ["Ticks and fleas", "Parasites may require separate vet or parasite-control planning rather than a routine groom only."],
          ],
        },
      },
      {
        heading: "Questions to ask groomers",
        body: ["Clear answers help you understand whether a quote is fair for your dog and your area."],
        checklist: [
          "What exactly is included in the groom?",
          "Are nails, ears, de-shedding, sanitary trimming, or tick checks included?",
          "How do you price large dogs, puppies, seniors, anxious dogs, or matted coats?",
          "Do you charge separately for mobile travel, parking, difficult coats, or late collection?",
          "What do you do if you find sore skin, ear discharge, wounds, pain, ticks, or fleas?",
          "Can you pause and contact me if the groom becomes stressful or unsafe?",
        ],
      },
      {
        heading: "Warning signs to avoid",
        body: ["The cheapest quote is not always the safest choice."],
        bullets: [
          "No explanation of what is included.",
          "Pressure to book before health or coat questions are answered.",
          "Rough handling, rushed dematting, or dismissal of pain signals.",
          "Treating medical skin, ear, or parasite problems as routine grooming only.",
          "No hygiene explanation between dogs.",
        ],
      },
      {
        heading: "Budget checklist",
        body: ["Build grooming into your monthly budget if your dog has a coat that needs regular maintenance."],
        checklist: [
          "Ask for a current written quote.",
          "Budget extra for long coats, curly coats, de-shedding, matting, or mobile travel.",
          "Use local cost guides for city-specific quote factors.",
          "Use the DogHaven cost calculator to estimate grooming alongside food, vet care, and insurance.",
        ],
      },
    ],
    faqs: [
      {
        question: "What is the average dog grooming cost in South Africa?",
        answer:
          "DogHaven avoids unsourced averages because costs vary by city, provider, dog size, coat, condition, and service. Ask providers for current written quotes.",
      },
      {
        question: "Is mobile grooming more expensive?",
        answer:
          "It can be, depending on travel, setup, and convenience. Compare what is included rather than only the headline price.",
      },
      {
        question: "Can grooming fix itchy skin?",
        answer:
          "Grooming may help with coat care, but ongoing itching, redness, smell, hair loss, or ear problems should be discussed with a vet.",
      },
    ],
    related: [
      { title: "Grooming Hub", description: "Coat, nails, shedding, and groomer choice.", href: "/grooming" },
      { title: "Mobile Dog Grooming", description: "Pros, cons, setup questions, and safety checks.", href: "/grooming/mobile-dog-grooming-south-africa" },
      { title: "Skin Allergy Food Guide", description: "Feeding context for itchy dogs, with vet guidance.", href: "/food/dog-food-for-skin-allergies-south-africa" },
      ...cityCostLinks,
    ],
    sources: vetSources,
  },
  {
    slug: "dog-training-costs-south-africa",
    path: "/costs/dog-training-costs-south-africa",
    hubTitle: "Dog Costs",
    hubPath: "/costs",
    title: "Dog Training Costs in South Africa",
    seoTitle: "Dog Training Costs South Africa | Classes, Private Lessons and Questions",
    description:
      "A South African dog training cost guide covering puppy classes, private sessions, group lessons, behaviour support, humane methods, city variation, and quote questions.",
    intro:
      "Dog training costs in South Africa depend on the format, trainer experience, dog behaviour, travel, class size, and support included. This page helps you compare options without fake prices or trainer rankings.",
    updated: reviewed,
    quickFacts: [
      "DogHaven does not rank trainers or publish fake exact training prices.",
      "Puppy classes, group lessons, private sessions, and behaviour support are different services.",
      "Humane, reward-based methods should involve the owner and avoid fear or intimidation.",
      "Sudden behaviour changes, aggression, pain, or severe anxiety may need veterinary or qualified behaviour support.",
    ],
    sections: [
      {
        heading: "What affects training costs",
        body: [
          "A puppy class that teaches social confidence and basics is not the same as a private home session for barking, leash reactivity, or separation anxiety. Compare the goal, method, duration, follow-up support, and owner involvement.",
        ],
        table: {
          headers: ["Training format", "Cost factors to ask about"],
          rows: [
            ["Puppy classes", "Class size, vaccination rules, socialisation setup, number of sessions, and home practice support."],
            ["Group classes", "Skill level, venue, trainer-to-dog ratio, and whether individual questions are included."],
            ["Private lessons", "Travel, behaviour complexity, home visit time, and written plans."],
            ["Behaviour support", "Assessment depth, follow-up, vet collaboration, and whether the case needs specialist help."],
          ],
        },
      },
      {
        heading: "Questions to ask before paying",
        body: ["Good trainers should welcome questions about methods, safety, and realistic expectations."],
        checklist: [
          "Which methods do you use, and how do you handle fear, barking, pulling, or over-excitement?",
          "Will I be coached to practise at home?",
          "How many dogs are in each class?",
          "What vaccination or health checks are required for puppies?",
          "Do you offer written notes or follow-up support?",
          "What happens if my dog is too stressed for the class format?",
        ],
      },
      {
        heading: "Warning signs to avoid",
        body: ["Training should build trust and practical skills, not suppress behaviour through fear."],
        bullets: [
          "Guarantees that sound too certain.",
          "Punishment-heavy methods, intimidation, or tools used without careful welfare discussion.",
          "No owner involvement.",
          "No questions about health, fear, triggers, or home routine.",
          "Blaming the dog instead of explaining a training plan.",
        ],
      },
      {
        heading: "Budget checklist",
        body: ["Training is often cheaper when you start early and practise consistently."],
        checklist: [
          "Budget for puppy foundations before problem behaviour becomes ingrained.",
          "Ask whether group or private training best suits your dog.",
          "Compare city cost factors in DogHaven local cost guides.",
          "Use the breed match quiz before choosing a high-energy or specialist breed.",
        ],
      },
    ],
    faqs: [
      {
        question: "Are private lessons worth it?",
        answer:
          "They can be useful when the issue is specific to your home, walks, visitors, barking, reactivity, or anxiety. Ask what plan and follow-up are included.",
      },
      {
        question: "Can puppy school start before all vaccinations?",
        answer:
          "Ask your vet and the puppy school about vaccination timing, hygiene, and safety. Avoid risky public exposure before your vet says it is appropriate.",
      },
      {
        question: "Should I choose the cheapest trainer?",
        answer:
          "Not automatically. Look for humane methods, clear communication, realistic goals, and owner coaching.",
      },
    ],
    related: [
      { title: "Training Hub", description: "Humane training guides for South African homes.", href: "/training" },
      { title: "Puppy Schools", description: "Timing, safety, and class questions.", href: "/training/puppy-schools-south-africa" },
      { title: "Dog Obedience Classes", description: "Leash manners, recall, and group vs private classes.", href: "/training/dog-obedience-classes-south-africa" },
      { title: "Barking Rules", description: "Neighbour complaints, welfare, and local rule checks.", href: "/laws/nuisance-barking-south-africa" },
      { title: "Breed Match Quiz", description: "Think about energy, space, grooming, and budget.", href: "/tools/dog-breed-match-quiz" },
      ...cityCostLinks,
    ],
    sources: vetSources,
  },
  {
    slug: "emergency-vet-costs-south-africa",
    path: "/costs/emergency-vet-costs-south-africa",
    hubTitle: "Dog Costs",
    hubPath: "/costs",
    title: "Emergency Vet Costs in South Africa",
    seoTitle: "Emergency Vet Costs South Africa | Budget and Insurance Guide",
    description:
      "A South African emergency vet cost guide covering after-hours care, diagnostics, hospitalisation, transport planning, quotes, insurance, and emergency savings.",
    intro:
      "Emergency vet care can cost more because urgent cases may need after-hours staff, rapid triage, diagnostics, treatment, monitoring, or referral. If your dog has serious symptoms, contact a vet immediately and do not delay care to research prices online.",
    updated: reviewed,
    isHealthGuide: true,
    quickFacts: [
      "Urgent symptoms should not wait for online cost research.",
      "Emergency bills vary by clinic, city, time of day, diagnostics, treatment, hospitalisation, and referral needs.",
      "Ask what immediate stabilisation, estimates, deposits, and update processes apply.",
      "Insurance may help with covered emergencies, but waiting periods, excesses, exclusions, and limits matter.",
    ],
    sections: [
      {
        heading: "Why emergency care can cost more",
        body: [
          "Emergency clinics often need to make fast decisions with limited information. The bill may include consultation, triage, pain relief, oxygen, fluids, blood tests, imaging, medication, hospitalisation, surgery, monitoring, or referral. The exact care depends on the dog, not a fixed online price.",
        ],
        table: {
          headers: ["Cost factor", "Why it matters"],
          rows: [
            ["After-hours access", "Night, weekend, and public holiday staffing can affect fees."],
            ["Diagnostics", "Blood tests, x-rays, ultrasound, or other tests may be needed quickly."],
            ["Hospitalisation", "Monitoring, fluids, medication, oxygen, or nursing care may continue for hours or days."],
            ["Severity", "Poisoning, trauma, bloat concern, breathing trouble, seizures, or collapse can escalate quickly."],
            ["Referral", "Some cases may need specialist or 24-hour hospital support."],
          ],
        },
      },
      {
        heading: "What to ask during an emergency call",
        body: ["Keep questions short and practical because speed matters."],
        checklist: [
          "Should we come in immediately?",
          "What should we bring with us?",
          "Do you need photos, packaging, medication names, or vaccination records?",
          "How should we transport the dog safely?",
          "What deposit or payment process should we expect?",
          "Will you provide an estimate once the dog is assessed?",
        ],
      },
      {
        heading: "What not to do",
        body: ["Well-meant delays and home treatments can make emergencies worse."],
        bullets: [
          "Do not give human medication unless a vet specifically tells you to.",
          "Do not induce vomiting unless a vet tells you to.",
          "Do not wait through collapse, breathing trouble, seizures, repeated vomiting, severe pain, poisoning concern, or heavy bleeding.",
          "Do not drive long distances past closer emergency help if your vet advises immediate care.",
        ],
      },
      {
        heading: "Budget planning",
        body: ["Plan before a crisis: emergency savings, insurance, transport, and a written vet-call checklist all reduce panic."],
        checklist: [
          "Save your regular vet and after-hours options.",
          "Keep a transport plan for large or injured dogs.",
          "Compare insurance wording before your dog is sick or injured.",
          "Use a vet visit checklist for medication, symptoms, and timeline notes.",
          "Build an emergency buffer in your monthly dog budget.",
        ],
      },
    ],
    faqs: [
      {
        question: "Should I phone before going to an emergency vet?",
        answer:
          "If it is safe to do so, phone ahead so the clinic can triage and prepare. Do not delay if your dog is in immediate danger.",
      },
      {
        question: "Can insurance cover emergency vet costs?",
        answer:
          "It may help with covered emergencies, but policies differ. Check waiting periods, excesses, exclusions, annual limits, and claim rules directly with the insurer.",
      },
      {
        question: "Why can the estimate change?",
        answer:
          "The vet may discover new information after examination or diagnostics. Ask for updates as the treatment plan changes.",
      },
    ],
    related: [
      { title: "Emergency Hub", description: "Urgent symptoms and first steps.", href: "/emergency" },
      { title: "Compare Dog Insurance", description: "Neutral policy comparison questions.", href: "/insurance/compare-dog-insurance-south-africa" },
      { title: "Vet Visit Checklist", description: "Prepare symptoms, records, and questions.", href: "/tools/vet-visit-checklist" },
      { title: "Local Emergency Vet Costs", description: "City emergency budget factors.", href: "/local-costs" },
    ],
    sources: moneySources,
  },
  {
    slug: "vet-consultation-costs-south-africa",
    path: "/costs/vet-consultation-costs-south-africa",
    hubTitle: "Dog Costs",
    hubPath: "/costs",
    title: "Vet Consultation Costs in South Africa",
    seoTitle: "Vet Consultation Costs South Africa | What to Ask Before Booking",
    description:
      "A practical South African guide to vet consultation cost factors, routine consults, vaccinations, follow-ups, diagnostics, city variation, and questions to ask clinics.",
    intro:
      "Vet consultation costs in South Africa vary by clinic, city, appointment type, time, diagnostics, and what is included. This guide helps you ask clearer questions without inventing exact clinic prices.",
    updated: reviewed,
    isHealthGuide: true,
    quickFacts: [
      "DogHaven does not publish fake clinic prices or fake vet listings.",
      "A consultation fee may not include vaccines, tests, medication, imaging, procedures, or follow-up care.",
      "Puppies, seniors, chronic conditions, and urgent symptoms may need more than a routine consult.",
      "Ask the clinic what is included before the appointment if cost planning is important.",
    ],
    sections: [
      {
        heading: "What a vet consult may include",
        body: [
          "A routine consult usually gives the vet time to examine your dog, ask questions, discuss findings, and recommend next steps. Additional services may be charged separately depending on the clinic and your dog's needs.",
        ],
        table: {
          headers: ["Visit type", "What to clarify"],
          rows: [
            ["Routine check", "Consult fee, examination, health discussion, and whether follow-up is included."],
            ["Vaccination visit", "Consult fee, vaccine cost, certificate or record update, and booster timing."],
            ["Sick visit", "Potential tests, medication, rechecks, or referral costs."],
            ["Follow-up", "Whether the clinic charges a separate follow-up fee and what it covers."],
          ],
        },
      },
      {
        heading: "Questions to ask clinics",
        body: ["Most clinics can explain their fee structure if you ask politely before booking."],
        checklist: [
          "What is included in the consultation fee?",
          "Are vaccines, medication, blood tests, x-rays, or procedures separate?",
          "Do you provide an estimate before diagnostics or treatment?",
          "What payment options are accepted?",
          "How are follow-ups charged?",
          "What should I bring for a puppy, rescue dog, or previous medical history?",
        ],
      },
      {
        heading: "Warning signs that need faster care",
        body: ["A routine appointment is not enough for serious symptoms."],
        bullets: [
          "Collapse, breathing trouble, seizures, severe pain, heavy bleeding, poisoning concern, repeated vomiting, or inability to stand should be treated as urgent.",
          "Puppies with vomiting, diarrhoea, weakness, or poor appetite need quick veterinary advice.",
          "Do not delay urgent care to compare routine consultation fees.",
        ],
      },
    ],
    faqs: [
      {
        question: "Why does DogHaven not list vet consultation prices?",
        answer:
          "Prices change and vary by clinic, city, appointment type, and what is included. DogHaven avoids fake price lists and encourages owners to ask clinics directly.",
      },
      {
        question: "Is a vaccination visit the same as a consult?",
        answer:
          "Not always. Ask your clinic what is included in the appointment and what is billed separately.",
      },
      {
        question: "Should cost worries delay urgent care?",
        answer:
          "No. If symptoms are serious, contact a vet or emergency animal clinic immediately and ask about estimates while care is being arranged.",
      },
    ],
    related: [
      { title: "Health Hub", description: "Prevention, symptoms, and vet decisions.", href: "/health" },
      { title: "Puppy First Vet Visit", description: "What to ask at a puppy appointment.", href: "/puppy/puppy-first-vet-visit-south-africa" },
      { title: "Dog Cost Calculator", description: "Plan routine and emergency care.", href: "/tools/dog-cost-calculator" },
      { title: "Find a Vet", description: "How to choose and verify veterinary care.", href: "/health/find-a-vet-south-africa" },
    ],
    sources: vetSources,
  },
  {
    slug: "find-a-vet-south-africa",
    path: "/health/find-a-vet-south-africa",
    hubTitle: "Dog Health",
    hubPath: "/health",
    title: "How to Find a Vet in South Africa",
    seoTitle: "Find a Vet South Africa | Dog Owner Checklist",
    description:
      "A practical South African guide to choosing a vet, checking registration context, asking questions, planning emergencies, and using local city and province guidance without fake directories.",
    intro:
      "DogHaven does not publish fake vet listings or phone numbers. This guide explains how South African dog owners can choose a vet more carefully, what to ask, and how to prepare for routine and emergency care.",
    updated: reviewed,
    isHealthGuide: true,
    quickFacts: [
      "This is not a vet directory and does not replace veterinary care.",
      "Use the SAVC as a starting point for understanding veterinary professional registration context.",
      "Choose a vet before an emergency, especially if you have a puppy, senior dog, chronic condition, or large dog.",
      "Keep after-hours options and transport plans ready.",
    ],
    sections: [
      {
        heading: "What to check when choosing a vet",
        body: [
          "A good fit is not only about distance. Think about communication, after-hours arrangements, puppy and senior care, payment clarity, referral relationships, and whether the clinic explains options in a way you understand.",
        ],
        checklist: [
          "Clinic location and travel time in normal and peak traffic.",
          "Opening hours and after-hours plan.",
          "How estimates, deposits, and follow-up fees are explained.",
          "Whether the clinic handles puppies, seniors, chronic conditions, dental care, and routine prevention.",
          "How referrals or emergency transfers are handled.",
          "Whether staff explain vaccination, parasite prevention, sterilisation, and nutrition clearly.",
        ],
      },
      {
        heading: "Questions to ask",
        body: ["Ask before you urgently need help."],
        checklist: [
          "What should I do if my dog has an emergency after hours?",
          "What records should I bring for a new puppy, rescue dog, or transfer from another clinic?",
          "How do you provide estimates before diagnostics or procedures?",
          "Do you send reminders for vaccinations, parasite prevention, or chronic medication reviews?",
          "How do you handle nervous, reactive, senior, or painful dogs?",
        ],
      },
      {
        heading: "Warning signs to avoid",
        body: ["Trust matters when your dog is sick."],
        bullets: [
          "No clear after-hours guidance.",
          "Unwillingness to explain estimates or treatment options.",
          "Dismissal of urgent symptoms.",
          "Pressure without space for reasonable questions.",
          "Confusing records or unclear vaccination documentation.",
        ],
      },
    ],
    faqs: [
      {
        question: "Does DogHaven list vets near me?",
        answer:
          "No. DogHaven is not a verified vet directory. Use this guide to know what to check directly with clinics and official sources.",
      },
      {
        question: "Should I choose the closest vet?",
        answer:
          "Distance matters, especially in emergencies, but also consider communication, hours, services, records, and after-hours planning.",
      },
      {
        question: "When should I use an emergency clinic?",
        answer:
          "Use urgent veterinary help for collapse, breathing trouble, seizures, poisoning concern, severe pain, heavy bleeding, repeated vomiting, or fast-worsening symptoms.",
      },
    ],
    related: [
      { title: "Emergency Hub", description: "Urgent symptoms and first steps.", href: "/emergency" },
      { title: "Vet Consultation Costs", description: "What to ask about fees and estimates.", href: "/costs/vet-consultation-costs-south-africa" },
      { title: "Local Guides", description: "City dog-owner guidance and local planning.", href: "/local" },
      { title: "Province Guides", description: "Province-level dog care context.", href: "/province" },
      { title: "Vet Visit Checklist", description: "Prepare symptoms, records, and questions.", href: "/tools/vet-visit-checklist" },
    ],
    sources: vetSources,
  },
  {
    slug: "mobile-dog-grooming-south-africa",
    path: "/grooming/mobile-dog-grooming-south-africa",
    hubTitle: "Grooming",
    hubPath: "/grooming",
    title: "Mobile Dog Grooming in South Africa",
    seoTitle: "Mobile Dog Grooming South Africa | Pros, Cons and Questions",
    description:
      "A practical South African mobile dog grooming guide covering convenience, nervous dogs, water and electricity access, hygiene, coat needs, costs, and questions to ask.",
    intro:
      "Mobile dog grooming can be convenient for South African owners, especially with busy schedules, nervous dogs, seniors, or homes far from a parlour. It still needs the same safety, hygiene, coat, and handling questions as any grooming service.",
    updated: reviewed,
    quickFacts: [
      "DogHaven does not list or verify mobile groomers yet.",
      "Mobile grooming may reduce travel stress, but it is not automatically the right fit for every dog.",
      "Ask about water, electricity, parking, hygiene, handling, coat limits, and what happens if medical concerns are found.",
      "Severe matting, wounds, painful ears, skin infection, or parasites may need a vet plan.",
    ],
    sections: [
      {
        heading: "Pros and cons of mobile grooming",
        body: ["The best choice depends on your dog's temperament, coat, home setup, and the groomer's equipment."],
        table: {
          headers: ["Potential benefit", "Question to ask"],
          rows: [
            ["Less travel", "Will my dog be calmer at home, or more protective and stressed near the property?"],
            ["Convenience", "What parking, water, electricity, and access do you need?"],
            ["One-on-one handling", "How do you manage anxious, senior, large, or reactive dogs?"],
            ["Quieter environment", "What noise, drying, and restraint methods are used?"],
          ],
        },
      },
      {
        heading: "Questions to ask",
        body: ["A mobile groomer should explain both grooming and setup requirements clearly."],
        checklist: [
          "Do you bring your own water and power, or need access at the home?",
          "How is equipment cleaned between dogs?",
          "What happens if the dog is matted, anxious, painful, or has parasites?",
          "What is included in the quote and what costs extra?",
          "Can you stop and contact me if the groom becomes unsafe?",
        ],
      },
      {
        heading: "Warning signs to avoid",
        body: ["Convenience should not replace safety."],
        bullets: [
          "No hygiene explanation.",
          "No questions about coat, behaviour, medical issues, or size.",
          "Rushed dematting or rough handling.",
          "Treating painful skin, ears, wounds, or parasites as a routine grooming issue.",
        ],
      },
    ],
    faqs: [
      {
        question: "Is mobile dog grooming better than a parlour?",
        answer:
          "Not always. It may suit some dogs and homes, while others do better in a parlour with more space, equipment, or staff support.",
      },
      {
        question: "Does mobile grooming cost more?",
        answer:
          "It can, depending on travel, setup, dog size, coat, and what is included. Ask for a written quote.",
      },
      {
        question: "Can mobile grooming help nervous dogs?",
        answer:
          "Sometimes, but some dogs are more stressed around vans, dryers, or strangers at home. Ask about gentle handling and trial approaches.",
      },
    ],
    related: [
      { title: "Dog Grooming Costs", description: "Cost factors and quote questions.", href: "/costs/dog-grooming-costs-south-africa" },
      { title: "Grooming Hub", description: "Coat, nails, ears, paws, and shedding.", href: "/grooming" },
      { title: "Local Grooming Guides", description: "City grooming safety questions.", href: "/local" },
      { title: "Dog Cost Calculator", description: "Plan grooming in the monthly budget.", href: "/tools/dog-cost-calculator" },
    ],
    sources: vetSources,
  },
  {
    slug: "puppy-schools-south-africa",
    path: "/training/puppy-schools-south-africa",
    hubTitle: "Training",
    hubPath: "/training",
    title: "Puppy Schools in South Africa",
    seoTitle: "Puppy Schools South Africa | Safety, Socialisation and Questions",
    description:
      "A South African puppy school guide covering class timing, vaccination caution, safe socialisation, humane methods, trainer questions, and unsafe environments to avoid.",
    intro:
      "Puppy school can help puppies learn confidence, handling, focus, and calm social exposure, but the class must be safe for the puppy's age and vaccination stage. Always follow your vet's guidance on public exposure.",
    updated: reviewed,
    isHealthGuide: true,
    quickFacts: [
      "Do not take unvaccinated puppies into risky public environments.",
      "Ask your vet when puppy class is appropriate for your puppy.",
      "Good puppy schools focus on calm confidence, owner coaching, gentle handling, and safe exposure.",
      "Avoid classes that rely on fear, flooding, rough play, or punishment-heavy methods.",
    ],
    sections: [
      {
        heading: "What puppy school should teach",
        body: ["Puppy school is not only playtime. It should help owners understand body language, safe socialisation, basic cues, handling, and how to prevent common behaviour problems."],
        checklist: [
          "Name response, calm attention, and reward timing.",
          "Gentle handling for vets, grooming, paws, ears, and mouth checks.",
          "Safe exposure to sounds, surfaces, people, and other puppies.",
          "Toilet training, biting, chewing, and settling foundations.",
          "Owner coaching for home practice.",
        ],
      },
      {
        heading: "Questions to ask before joining",
        body: ["Puppies are vulnerable, so class setup matters."],
        checklist: [
          "What vaccination records are required?",
          "How are puppies grouped by age, size, confidence, and play style?",
          "How do you prevent rough play or bullying?",
          "Which training methods do you use?",
          "How is the venue cleaned?",
          "What happens if a puppy is scared, coughing, vomiting, or has diarrhoea?",
        ],
      },
      {
        heading: "Warning signs to avoid",
        body: ["Unsafe socialisation can create fear instead of confidence."],
        bullets: [
          "No vaccination or illness policy.",
          "Rough play described as something puppies must simply tolerate.",
          "No rest breaks.",
          "Punishment-heavy handling.",
          "Pressure to expose puppies to risky public places before vet guidance.",
        ],
      },
    ],
    faqs: [
      {
        question: "When can my puppy start puppy school?",
        answer:
          "Ask your vet. Timing depends on the puppy's age, vaccination stage, local risk, class hygiene, and your vet's advice.",
      },
      {
        question: "Is puppy school only for socialising?",
        answer:
          "No. A good class also teaches owners how to handle biting, toilet training, calm behaviour, confidence, and basic cues.",
      },
      {
        question: "Can puppy school prevent behaviour problems?",
        answer:
          "It can help, but it is not a guarantee. Consistent home practice, humane training, health care, and good routines still matter.",
      },
    ],
    related: [
      { title: "Puppy Hub", description: "First-year puppy care guides.", href: "/puppy" },
      { title: "Puppy Socialisation", description: "Safer exposure for South African puppies.", href: "/puppy/puppy-socialisation-south-africa" },
      { title: "Dog Training Costs", description: "Compare puppy class and trainer quote factors.", href: "/costs/dog-training-costs-south-africa" },
      { title: "Training Hub", description: "Humane dog training guides.", href: "/training" },
    ],
    sources: vetSources,
  },
  {
    slug: "dog-obedience-classes-south-africa",
    path: "/training/dog-obedience-classes-south-africa",
    hubTitle: "Training",
    hubPath: "/training",
    title: "Dog Obedience Classes in South Africa",
    seoTitle: "Dog Obedience Classes South Africa | What to Expect",
    description:
      "A practical guide to dog obedience classes in South Africa, covering leash manners, recall, group vs private training, positive methods, realistic expectations, and questions to ask.",
    intro:
      "Dog obedience classes can help with everyday manners, recall, leash walking, settling, and safer public behaviour. The goal should be a calmer partnership, not robotic obedience or punishment-heavy control.",
    updated: reviewed,
    quickFacts: [
      "Choose humane, reward-based training that involves the owner.",
      "Group classes suit some dogs; private sessions may be better for fear, reactivity, or specific home problems.",
      "No class can replace daily practice at home and on walks.",
      "Pain, sudden behaviour change, or serious aggression concerns may need veterinary or specialist support.",
    ],
    sections: [
      {
        heading: "What classes often cover",
        body: ["Class content varies, but practical obedience should help real South African homes, streets, parks, visitors, and vet visits."],
        checklist: [
          "Lead walking without constant pulling.",
          "Recall foundations and safe management.",
          "Sit, down, stay, settle, and focus around distractions.",
          "Polite greetings and reduced jumping.",
          "Handling for grooming and vet care.",
          "Owner timing, rewards, and home practice.",
        ],
      },
      {
        heading: "Group vs private classes",
        body: ["The cheaper or busier option is not always the best fit."],
        table: {
          headers: ["Format", "Good for"],
          rows: [
            ["Group classes", "Dogs who can learn around other dogs without becoming overwhelmed, reactive, or unsafe."],
            ["Private lessons", "Specific home problems, leash reactivity, fear, barking, or owner coaching in context."],
            ["Behaviour support", "More complex fear, aggression, separation distress, or cases needing vet collaboration."],
          ],
        },
      },
      {
        heading: "Questions to ask trainers",
        body: ["Ask how they teach and what happens when a dog struggles."],
        checklist: [
          "What methods do you use?",
          "How do you handle barking, pulling, fear, or over-excitement?",
          "How many dogs are in a class?",
          "Will I receive homework or written notes?",
          "What do you recommend if my dog is not ready for a group class?",
        ],
      },
    ],
    faqs: [
      {
        question: "Are obedience classes suitable for adult dogs?",
        answer:
          "Yes, many adult dogs can learn well. Choose a class that suits their temperament, experience, and stress level.",
      },
      {
        question: "Will one course fix leash pulling?",
        answer:
          "A course can teach the foundations, but daily practice and consistent handling are usually needed.",
      },
      {
        question: "Should reactive dogs join group classes?",
        answer:
          "Not always. A private assessment or behaviour-focused support may be safer before a group environment.",
      },
    ],
    related: [
      { title: "Dog Training South Africa", description: "Humane everyday training foundations.", href: "/training/dog-training-south-africa" },
      { title: "Leash Training", description: "Build calmer walks.", href: "/training/leash-training-dogs-south-africa" },
      { title: "Dog Training Costs", description: "Understand class and private session cost factors.", href: "/costs/dog-training-costs-south-africa" },
      { title: "Local Training Guides", description: "City trainer questions and safety checks.", href: "/local" },
    ],
    sources: vetSources,
  },
  {
    slug: "dog-food-prices-south-africa",
    path: "/food/dog-food-prices-south-africa",
    hubTitle: "Dog Food",
    hubPath: "/food",
    title: "Dog Food Prices in South Africa",
    seoTitle: "Dog Food Prices South Africa | Monthly Budget Factors",
    description:
      "A neutral South African dog food price guide covering monthly food budget factors, dog size, life stage, food type, budget vs premium tradeoffs, and feeding calculator links.",
    intro:
      "Dog food prices in South Africa change by brand, bag size, retailer, ingredients, life stage, dog size, calories, and availability. DogHaven does not publish fake current prices; this guide helps you understand the budget factors that matter.",
    updated: reviewed,
    isHealthGuide: true,
    quickFacts: [
      "DogHaven does not rank dog food brands or publish fake current prices.",
      "Monthly cost depends on calories fed, dog size, age, activity, body condition, and food type.",
      "A cheaper bag is not always cheaper per day if feeding amounts are higher.",
      "Ask a vet for puppies, seniors, overweight dogs, allergies, chronic illness, or special diets.",
    ],
    sections: [
      {
        heading: "What affects monthly food cost",
        body: ["Compare food by suitability and feeding amount, not only the price on the shelf."],
        table: {
          headers: ["Factor", "Why it matters"],
          rows: [
            ["Dog size", "Large dogs eat more calories than small dogs."],
            ["Life stage", "Puppies, adults, seniors, pregnant dogs, and working dogs may need different nutrition."],
            ["Food type", "Kibble, wet food, raw, cooked, and mixed feeding have different storage, safety, and cost patterns."],
            ["Calorie density", "Some foods require smaller daily portions than others."],
            ["Health needs", "Allergies, sensitive stomachs, obesity, dental issues, or chronic disease need vet guidance."],
          ],
        },
      },
      {
        heading: "Questions to ask before switching food",
        body: ["Switching for price alone can upset digestion or miss health needs."],
        checklist: [
          "Is the food suitable for my dog's life stage and expected adult size?",
          "How much would my dog eat per day?",
          "Does the label clearly explain feeding guidance and complete diet status?",
          "Will treats, toppers, and table scraps change the budget or nutrition balance?",
          "Should I ask my vet before changing because of symptoms, allergies, weight, or age?",
        ],
      },
      {
        heading: "Budget vs premium tradeoffs",
        body: [
          "Budget-conscious owners should not feel shamed. The goal is to choose the safest suitable food you can consistently afford, then watch body condition, stool, skin, energy, and vet advice.",
        ],
        bullets: [
          "Check daily feeding amount, not only bag price.",
          "Avoid sudden diet changes unless a vet advises it.",
          "Do not use unsafe leftovers, biltong, boerewors, cooked bones, onions, garlic, grapes, or chocolate to stretch meals.",
          "Keep a small buffer for food price increases where possible.",
        ],
      },
    ],
    faqs: [
      {
        question: "What is the cheapest dog food in South Africa?",
        answer:
          "DogHaven does not rank or recommend the cheapest brand. Compare suitability, daily feeding amount, safety, and your dog's health needs.",
      },
      {
        question: "Is premium dog food always better?",
        answer:
          "Not always for every dog. The best choice depends on the individual dog, label clarity, digestibility, budget, and vet guidance where needed.",
      },
      {
        question: "How can I estimate monthly food cost?",
        answer:
          "Use feeding guidance on the food packaging, your dog's body condition, and DogHaven's feeding and cost calculators as planning tools.",
      },
    ],
    related: [
      { title: "Dog Food Hub", description: "Feeding guides and food safety.", href: "/food" },
      { title: "Dog Feeding Calculator", description: "Estimate daily food as a starting point.", href: "/tools/dog-feeding-calculator" },
      { title: "Dog Food Cost", description: "Food budget planning for South African owners.", href: "/costs/dog-food-cost-south-africa" },
      { title: "Cheap vs Premium Dog Food", description: "Understand tradeoffs without brand hype.", href: "/food/cheap-dog-food-vs-premium-dog-food-south-africa" },
    ],
    sources: foodSources,
  },
  {
    slug: "is-pet-insurance-worth-it-south-africa",
    path: "/insurance/is-pet-insurance-worth-it-south-africa",
    hubTitle: "Insurance",
    hubPath: "/insurance",
    title: "Is Pet Insurance Worth It in South Africa?",
    seoTitle: "Is Pet Insurance Worth It South Africa? | Neutral Dog Owner Guide",
    description:
      "A neutral South African guide to whether pet insurance is worth it for dogs, covering emergency risk, exclusions, excesses, waiting periods, pre-existing conditions, age, breed, and budgeting.",
    intro:
      "Pet insurance may be worth considering if a large unexpected vet bill would be hard to pay from savings. It is not automatically right for every owner, every dog, or every policy. This guide is educational only and is not personalised financial advice.",
    updated: reviewed,
    quickFacts: [
      "DogHaven does not recommend or rank insurers.",
      "This page is educational and is not personalised financial advice.",
      "Policy wording, premiums, excesses, waiting periods, exclusions, and limits can change.",
      "Read insurer documents directly and ask questions before buying cover.",
    ],
    sections: [
      {
        heading: "When insurance may help",
        body: [
          "Insurance is mainly a way to transfer some risk for covered accidents or illnesses. It may reduce panic when a covered emergency, surgery, hospitalisation, or serious illness happens, but it does not remove all costs.",
        ],
        checklist: [
          "You would struggle to pay a large unexpected vet bill.",
          "You want help planning for accident or illness risk.",
          "You can afford premiums plus excesses.",
          "Your dog is young or healthy enough that fewer pre-existing exclusions may apply.",
        ],
      },
      {
        heading: "When savings may make more sense",
        body: [
          "Some owners prefer a dedicated emergency fund. That can work if you can build it quickly and keep it ring-fenced, but a serious emergency may happen before the fund is large enough.",
        ],
        table: {
          headers: ["Option", "Possible strength", "Possible weakness"],
          rows: [
            ["Insurance", "May help with large covered bills.", "Premiums, excesses, exclusions, waiting periods, and limits apply."],
            ["Savings", "Flexible and not subject to claim approval.", "May be too small when a big emergency happens."],
            ["Both", "Insurance for major risk plus savings for gaps.", "Requires more monthly budget discipline."],
          ],
        },
      },
      {
        heading: "Questions to ask insurers",
        body: ["Do not rely on advertising summaries only."],
        checklist: [
          "What waiting periods apply?",
          "How are pre-existing conditions defined?",
          "What excesses, annual limits, and per-condition limits apply?",
          "Are hereditary, breed-related, dental, routine care, or chronic conditions excluded or limited?",
          "How are claims submitted and paid?",
          "Can premiums or cover change as my dog ages?",
        ],
      },
      {
        heading: "Breed, age and emergency risk",
        body: [
          "Large dogs, active dogs, senior dogs, puppies, and breeds with known health considerations may have different cost and cover questions. That does not mean every dog of a breed will be expensive, but it does mean owners should read policy wording carefully.",
        ],
      },
    ],
    faqs: [
      {
        question: "Is pet insurance worth it for every dog?",
        answer:
          "No. It depends on your dog, budget, emergency savings, risk tolerance, and the policy wording.",
      },
      {
        question: "Can insurance replace savings?",
        answer:
          "Not completely. You may still need money for excesses, exclusions, upfront payments, waiting periods, or costs above limits.",
      },
      {
        question: "Does DogHaven recommend an insurer?",
        answer:
          "No. DogHaven does not rank insurers or provide personalised financial advice. Compare policy documents directly.",
      },
    ],
    related: [
      { title: "Compare Dog Insurance", description: "Neutral comparison checklist.", href: "/insurance/compare-dog-insurance-south-africa" },
      { title: "Pet Insurance for Dogs", description: "Plain-English policy basics.", href: "/insurance/pet-insurance-for-dogs-south-africa" },
      { title: "Emergency Vet Costs", description: "Plan for urgent veterinary bills.", href: "/costs/emergency-vet-costs-south-africa" },
      { title: "Local Cost Guides", description: "City cost factors for emergency care and monthly budgets.", href: "/local-costs" },
    ],
    sources: moneySources,
  },
];

export const phase20RecoveryGuidePages = phase20Guides;

export function getPhase20Guide(slug: string) {
  return phase20Guides.find((guide) => guide.slug === slug);
}

export function getPhase20GuidesByHub(hubPath: string) {
  return phase20Guides.filter((guide) => guide.hubPath === hubPath);
}

export const phase20CostCards: CardLink[] = getPhase20GuidesByHub("/costs").map((guide) => ({
  title: guide.title,
  description: guide.description,
  href: guide.path,
}));

export const phase20HealthCards: CardLink[] = getPhase20GuidesByHub("/health").map((guide) => ({
  title: guide.title,
  description: guide.description,
  href: guide.path,
}));

export const phase20GroomingCards: CardLink[] = getPhase20GuidesByHub("/grooming").map((guide) => ({
  title: guide.title,
  description: guide.description,
  href: guide.path,
}));

export const phase20TrainingCards: CardLink[] = getPhase20GuidesByHub("/training").map((guide) => ({
  title: guide.title,
  description: guide.description,
  href: guide.path,
}));

export const phase20FoodCards: CardLink[] = getPhase20GuidesByHub("/food").map((guide) => ({
  title: guide.title,
  description: guide.description,
  href: guide.path,
}));

export const phase20InsuranceCards: CardLink[] = [
  ...getPhase20GuidesByHub("/insurance").map((guide) => ({
    title: guide.title,
    description: guide.description,
    href: guide.path,
  })),
  {
    title: "Emergency Vet Costs",
    description: "Understand urgent-care budget factors and insurance questions.",
    href: "/costs/emergency-vet-costs-south-africa",
  },
];

export const phase20EmergencyCards: CardLink[] = [
  {
    title: "Emergency Vet Costs",
    description: "Budget planning for urgent care without delaying treatment.",
    href: "/costs/emergency-vet-costs-south-africa",
  },
  {
    title: "Find a Vet",
    description: "How to choose a vet and prepare after-hours options.",
    href: "/health/find-a-vet-south-africa",
  },
];

export const phase20StartHereCards: CardLink[] = [
  { title: "Dog Grooming Costs", description: "Coat, size, mobile grooming, and quote factors.", href: "/costs/dog-grooming-costs-south-africa" },
  { title: "Dog Training Costs", description: "Puppy classes, private lessons, and humane trainer questions.", href: "/costs/dog-training-costs-south-africa" },
  { title: "Find a Vet", description: "Choose a vet and plan emergency options.", href: "/health/find-a-vet-south-africa" },
  { title: "Dog Food Prices", description: "Monthly food budget factors without fake price lists.", href: "/food/dog-food-prices-south-africa" },
];

export const phase20ToolsCards: CardLink[] = [
  { title: "Dog Grooming Costs", description: "Use with the cost calculator for grooming budget planning.", href: "/costs/dog-grooming-costs-south-africa" },
  { title: "Emergency Vet Costs", description: "Use with the vet visit checklist before urgent decisions.", href: "/costs/emergency-vet-costs-south-africa" },
  { title: "Dog Food Prices", description: "Use with the feeding calculator for monthly food planning.", href: "/food/dog-food-prices-south-africa" },
];

export const phase20LocalCostCards: CardLink[] = [
  { title: "Dog Grooming Costs", description: "National grooming cost factors that pair with city grooming pages.", href: "/costs/dog-grooming-costs-south-africa" },
  { title: "Dog Training Costs", description: "Training cost factors that pair with city training pages.", href: "/costs/dog-training-costs-south-africa" },
  { title: "Emergency Vet Costs", description: "Urgent-care cost factors that pair with city emergency budget pages.", href: "/costs/emergency-vet-costs-south-africa" },
];
