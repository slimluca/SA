import type { CardLink, GuideContent, Source } from "@/lib/content";

const reviewed = "2026-05-22";

const sources: Source[] = [
  {
    label: "South African Veterinary Council",
    href: "https://savc.org.za/",
    note: "South African veterinary professional context and a useful starting point for checking veterinary care.",
  },
  {
    label: "South African Veterinary Association",
    href: "https://www.sava.co.za/",
    note: "South African veterinary context for responsible dog health and prevention.",
  },
  {
    label: "NSPCA",
    href: "https://nspca.co.za/",
    note: "South African animal welfare context for responsible ownership, sterilisation, and unwanted-litter prevention.",
  },
  {
    label: "SPCA resources",
    href: "https://nspca.co.za/spcas-in-sa/",
    note: "Starting point for finding local SPCA branches and welfare context.",
  },
];

const commonRelated: CardLink[] = [
  { title: "Dog Health Hub", description: "Prevention, symptoms, and vet decision guidance.", href: "/health" },
  { title: "Find a Vet", description: "How to choose veterinary care without fake directories.", href: "/health/find-a-vet-south-africa" },
  { title: "Vet Consultation Costs", description: "Understand routine consult cost factors.", href: "/costs/vet-consultation-costs-south-africa" },
  { title: "Emergency Help", description: "Urgent symptoms and first steps.", href: "/emergency" },
  { title: "Sterilisation Planner", description: "Free planning checklist for vet questions, microchips, ID tags, and surgery discussions.", href: "/tools/dog-sterilisation-planner" },
];

const puppyRelated: CardLink[] = [
  { title: "Puppy Care", description: "First-year puppy care for South African homes.", href: "/puppy" },
  { title: "Puppy First Vet Visit", description: "Questions for your puppy's first check.", href: "/puppy/puppy-first-vet-visit-south-africa" },
  { title: "New Puppy Checklist", description: "Records, safety, food, and first-week planning.", href: "/puppy/new-puppy-checklist-south-africa" },
];

type Topic = {
  slug: string;
  title: string;
  seoTitle: string;
  description: string;
  intro: string;
  quickFacts: string[];
  context: string[];
  planning: string[];
  vetQuestions: string[];
  warnings: string[];
  prevention: string[];
  faqs: { question: string; answer: string }[];
  related: CardLink[];
};

const welfareNote =
  "This guide is educational and does not replace veterinary advice. Ask your vet for guidance based on your dog's age, breed, size, health, temperament, pregnancy status, and records.";

const urgentSurgeryWarning =
  "After any surgery or suspected reproductive emergency, contact a vet urgently for collapse, breathing trouble, severe weakness, pale gums, repeated vomiting, heavy bleeding, a swollen painful belly, wound opening, uncontrolled pain, or fast-worsening symptoms.";

const topics: Topic[] = [
  {
    slug: "spaying-a-dog-south-africa",
    title: "Spaying a Dog in South Africa",
    seoTitle: "Spaying a Dog South Africa | Benefits, Timing and Vet Questions",
    description:
      "A South African guide to spaying female dogs, covering benefits, risks, timing, recovery questions, unwanted litter prevention, cost factors, and vet guidance.",
    intro:
      "Spaying is a veterinary surgery for female dogs. In South Africa it is often discussed for health planning, preventing unwanted litters, reducing roaming and mating risk, and supporting welfare-focused ownership.",
    quickFacts: [
      welfareNote,
      "Spaying timing should be discussed with your vet, especially for puppies, large breeds, rescues, dogs in heat, or dogs with medical concerns.",
      "DogHaven does not give surgical instructions or recovery directions.",
      "Preventing unwanted litters helps reduce pressure on shelters, rescue groups, SPCAs, and animal welfare organisations.",
    ],
    context: [
      "Many South African owners manage dogs in gardens, complexes, townhouses, rural homes, and busy suburbs where accidental mating can happen quickly if a female dog is in heat.",
      "Shelters and rescue groups may include sterilisation in adoption policies or ask adopters to commit to sterilisation at the appropriate time.",
    ],
    planning: [
      "Confirm whether your dog is currently in heat, recently had puppies, or may be pregnant.",
      "Bring vaccination, deworming, tick and flea, medication, and previous vet records.",
      "Ask what the estimate includes and what extra costs could arise.",
      "Ask how to prepare your home for calm recovery without asking the internet for surgical instructions.",
      "Use the sterilisation planner to write down questions before the appointment.",
    ],
    vetQuestions: [
      "When is the safest time to spay my dog?",
      "How do breed, size, heat cycle, age, and health affect timing?",
      "What pre-surgery checks do you recommend?",
      "What should I watch for after surgery, and when should I phone urgently?",
      "What does the quote include, and what may cost extra?",
    ],
    warnings: [
      urgentSurgeryWarning,
      "If your dog may be pregnant, has discharge, seems painful, refuses food, or becomes suddenly weak, contact a vet promptly.",
    ],
    prevention: [
      "Keep intact female dogs securely away from male dogs during heat.",
      "Do not rely on fences, gates, or supervision alone if neighbourhood male dogs can reach the property.",
      "Discuss sterilisation before the first heat or after adoption if your vet recommends it.",
      "Keep microchip and ID details current in case a dog escapes.",
    ],
    faqs: [
      {
        question: "When should I spay my dog?",
        answer:
          "Timing depends on age, size, breed, heat cycle, health, and vet guidance. Ask your veterinarian for a plan for your dog.",
      },
      {
        question: "Can a dog be spayed while in heat?",
        answer:
          "This is a veterinary decision. Tell your vet if your dog is in heat or recently was, and follow their advice.",
      },
      {
        question: "Does DogHaven give post-surgery instructions?",
        answer:
          "No. Your vet must give surgery-specific recovery instructions and warning signs for your dog.",
      },
    ],
    related: [
      { title: "Sterilisation Planner", description: "Prepare questions for your vet.", href: "/tools/dog-sterilisation-planner" },
      { title: "Female Dog in Heat", description: "Signs, escape risk, and accidental mating prevention.", href: "/health/female-dog-in-heat-south-africa" },
      { title: "Sterilisation Costs", description: "Cost factors without fake clinic prices.", href: "/health/dog-sterilisation-cost-south-africa" },
      ...commonRelated,
    ],
  },
  {
    slug: "neutering-a-dog-south-africa",
    title: "Neutering a Dog in South Africa",
    seoTitle: "Neutering a Dog South Africa | Timing, Benefits and Vet Questions",
    description:
      "A South African guide to neutering male dogs, covering timing, roaming, unwanted litters, behaviour expectations, recovery questions, and vet guidance.",
    intro:
      "Neutering is a veterinary surgery for male dogs. Owners often ask about timing, roaming, mating behaviour, unwanted litters, recovery, and whether neutering will change behaviour.",
    quickFacts: [
      welfareNote,
      "Neutering may help prevent unwanted litters, but it is not a complete training plan for behaviour problems.",
      "Timing should be discussed with your vet, especially for large breeds, puppies, seniors, rescues, and dogs with health concerns.",
      "DogHaven does not provide surgical or medication instructions.",
    ],
    context: [
      "In South African suburbs, farms, estates, and townhouses, intact male dogs may try to reach female dogs in heat, which can lead to roaming, gate escapes, fights, road risk, and unwanted litters.",
      "Responsible ownership means planning containment, training, identification, and vet care rather than relying on surgery alone.",
    ],
    planning: [
      "Ask whether neutering is suitable for your dog's age, breed, size, behaviour, and health.",
      "Bring vaccination, medication, and previous vet records.",
      "Ask what the procedure quote includes.",
      "Plan calm supervision for recovery according to your vet's instructions.",
      "Update microchip and ID tag details before any period of higher escape risk.",
    ],
    vetQuestions: [
      "When should my dog be neutered?",
      "How might size, breed, growth, behaviour, and health affect timing?",
      "What should I expect before and after the procedure?",
      "Which warning signs after surgery need urgent attention?",
      "What behaviour issues still need training or behaviour support?",
    ],
    warnings: [
      urgentSurgeryWarning,
      "Sudden aggression, pain, swelling, testicular changes, urinary difficulty, or severe behaviour changes should be discussed with a vet.",
    ],
    prevention: [
      "Do not allow intact male dogs to roam.",
      "Supervise around female dogs in heat.",
      "Use secure gates, leads, and ID.",
      "Use humane training for barking, pulling, mounting, or frustration instead of expecting surgery to solve everything.",
    ],
    faqs: [
      {
        question: "Will neutering fix all behaviour problems?",
        answer:
          "No. Behaviour is shaped by health, training, environment, genetics, stress, and routine. Ask your vet or a qualified trainer for behaviour concerns.",
      },
      {
        question: "When should male dogs be neutered?",
        answer:
          "Timing depends on the individual dog. Discuss age, breed, growth, health, and lifestyle with your vet.",
      },
      {
        question: "Can neutering prevent unwanted litters?",
        answer:
          "It can prevent a male dog from fathering litters, but owners still need secure management and responsible supervision.",
      },
    ],
    related: [
      { title: "Sterilisation Planner", description: "Prepare questions for your vet.", href: "/tools/dog-sterilisation-planner" },
      { title: "Dog Training", description: "Humane behaviour support and everyday manners.", href: "/training" },
      { title: "Preventing Unwanted Puppies", description: "Practical welfare-focused planning.", href: "/health/preventing-unwanted-puppies-south-africa" },
      ...commonRelated,
    ],
  },
  {
    slug: "dog-sterilisation-south-africa",
    title: "Dog Sterilisation in South Africa",
    seoTitle: "Dog Sterilisation South Africa | Spay, Neuter and Welfare Guide",
    description:
      "A practical South African guide to dog sterilisation, covering spaying, neutering, unwanted litter prevention, welfare, timing, risks, costs, and vet questions.",
    intro:
      "Dog sterilisation usually refers to spaying female dogs or neutering male dogs. In South Africa, it is a key responsible-ownership discussion because unwanted litters place pressure on shelters, SPCAs, rescue groups, and communities.",
    quickFacts: [
      welfareNote,
      "Sterilisation timing and suitability should be decided with a veterinarian.",
      "Sterilisation is not a shortcut for training, secure fencing, ID, or responsible supervision.",
      "Cost, recovery, timing, and risk can vary by dog and clinic.",
    ],
    context: [
      "South African dog owners may face different realities: rural roaming dogs, urban complexes, rescue adoption agreements, holiday travel, and neighbourhood dogs getting through gates or fences.",
      "Sterilisation is one part of a wider plan that includes identification, vaccination, parasite control, training, safe containment, and emergency planning.",
    ],
    planning: [
      "Decide whether you are asking about spaying, neutering, or a rescue/adoption sterilisation agreement.",
      "Bring health records and ask whether a pre-surgery check is needed.",
      "Ask about timing in relation to heat cycles, growth, illness, vaccination, and pregnancy risk.",
      "Ask what the estimate includes and what follow-up may cost.",
      "Prepare your questions with the free planner.",
    ],
    vetQuestions: [
      "Is sterilisation recommended for my dog?",
      "What timing is safest for my dog's breed, size, age, and health?",
      "What are the benefits and risks for this individual dog?",
      "What should I do before and after the appointment?",
      "Which symptoms after the procedure mean I should contact you urgently?",
    ],
    warnings: [
      urgentSurgeryWarning,
      "Dogs that are pregnant, unwell, in heat, bleeding abnormally, or showing discharge should be checked by a vet before assumptions are made.",
    ],
    prevention: [
      "Secure gates and fences.",
      "Do not allow dogs to roam.",
      "Separate intact dogs carefully.",
      "Keep ID tags and microchip details current.",
      "Support adoption and welfare organisations rather than casual breeding.",
    ],
    faqs: [
      {
        question: "Is sterilisation the same as spaying?",
        answer:
          "Sterilisation is the broader term. Spaying usually refers to female dogs, while neutering often refers to male dogs.",
      },
      {
        question: "Is sterilisation required for adoption?",
        answer:
          "Many shelters and rescues have sterilisation policies or agreements. Ask the organisation directly and keep records.",
      },
      {
        question: "Can DogHaven tell me whether to sterilise my dog?",
        answer:
          "No. DogHaven provides education. Your vet should guide the decision for your dog.",
      },
    ],
    related: [
      { title: "Spaying a Dog", description: "Female dog sterilisation questions.", href: "/health/spaying-a-dog-south-africa" },
      { title: "Neutering a Dog", description: "Male dog sterilisation questions.", href: "/health/neutering-a-dog-south-africa" },
      { title: "Sterilisation Costs", description: "Cost factors and quote questions.", href: "/health/dog-sterilisation-cost-south-africa" },
      ...commonRelated,
    ],
  },
  {
    slug: "dog-sterilisation-cost-south-africa",
    title: "Dog Sterilisation Cost in South Africa",
    seoTitle: "Dog Sterilisation Cost South Africa | Cost Factors and Vet Questions",
    description:
      "A South African guide to dog sterilisation cost factors, covering spay and neuter quotes, dog size, sex, age, health, pre-checks, medication, recovery, and clinic variation.",
    intro:
      "Dog sterilisation costs in South Africa vary by clinic, city, dog size, sex, age, health, procedure complexity, and what is included. DogHaven does not invent exact clinic prices.",
    quickFacts: [
      "Ask clinics for current written estimates.",
      "A quote may include or exclude consultation, blood tests, medication, recovery items, follow-up checks, or complications.",
      "Female spays and male neuters are different procedures and may be priced differently.",
      "Cost worries should be discussed with a vet, shelter, SPCA, or welfare organisation before an unwanted litter happens.",
    ],
    context: [
      "Costs can differ between private clinics, welfare organisations, SPCA-linked services, towns, metros, and rural areas. Availability and eligibility for lower-cost welfare support can also vary.",
      "Responsible budgeting includes the surgery, routine vet care, microchipping or ID, vaccination, parasite control, and emergency savings.",
    ],
    planning: [
      "Ask for a written estimate.",
      "Ask what is included and excluded.",
      "Ask whether your dog needs a pre-surgery check or blood tests.",
      "Ask what follow-up costs could apply.",
      "Use the DogHaven cost calculator and sterilisation planner.",
    ],
    vetQuestions: [
      "What is included in the estimate?",
      "Are consultation, medication, collar or recovery items, and follow-up included?",
      "Could heat, pregnancy, retained testicles, weight, age, or health change the cost?",
      "What payment options are accepted?",
      "Are there welfare or SPCA options if I cannot afford private care?",
    ],
    warnings: [
      urgentSurgeryWarning,
      "Do not delay urgent reproductive symptoms because you are comparing prices online.",
    ],
    prevention: [
      "Plan before the first heat if your vet recommends it.",
      "Budget early after adoption.",
      "Ask shelters or rescues what sterilisation policies apply.",
      "Prevent accidental mating while saving or arranging care.",
    ],
    faqs: [
      {
        question: "How much does dog sterilisation cost in South Africa?",
        answer:
          "Costs vary too much for DogHaven to publish fake exact prices. Ask clinics or welfare organisations for current written quotes.",
      },
      {
        question: "Why can spaying cost more than neutering?",
        answer:
          "They are different procedures, and cost can vary by dog size, sex, health, timing, and clinic setup.",
      },
      {
        question: "Can shelters help with sterilisation?",
        answer:
          "Some shelters, SPCAs, or welfare groups may have programmes or guidance. Contact legitimate organisations directly.",
      },
    ],
    related: [
      { title: "Dog Cost Calculator", description: "Plan routine and one-off dog costs.", href: "/tools/dog-cost-calculator" },
      { title: "Dog Sterilisation", description: "Spay and neuter planning overview.", href: "/health/dog-sterilisation-south-africa" },
      { title: "Monthly Dog Costs", description: "Build a broader dog budget.", href: "/costs/monthly-cost-of-owning-a-dog-south-africa" },
      ...commonRelated,
    ],
  },
  {
    slug: "when-to-spay-or-neuter-a-dog-south-africa",
    title: "When to Spay or Neuter a Dog in South Africa",
    seoTitle: "When to Spay or Neuter a Dog South Africa | Vet Timing Guide",
    description:
      "A cautious South African guide to spay and neuter timing, covering puppies, large breeds, rescues, heat cycles, health, behaviour, and vet questions.",
    intro:
      "There is no single perfect spay or neuter age for every dog. Timing should be discussed with your vet using your dog's age, breed, size, growth, health, sex, heat cycle, lifestyle, and unwanted-litter risk.",
    quickFacts: [
      welfareNote,
      "Large breeds, small breeds, rescues, puppies, seniors, and dogs with medical concerns may need different timing discussions.",
      "Female dogs in heat, possible pregnancy, or recent illness should be discussed with a vet before booking.",
      "Responsible timing also includes secure management before surgery.",
    ],
    context: [
      "South African owners may need to balance puppy vaccination schedules, rescue adoption terms, body corporate or rental rules, neighbourhood dogs, and access to veterinary appointments.",
      "Waiting for the right vet-guided timing does not mean allowing roaming, accidental mating, or unmanaged heat cycles.",
    ],
    planning: [
      "Ask your vet before your puppy reaches sexual maturity.",
      "Ask how breed size and growth affect timing.",
      "Discuss rescue or shelter sterilisation requirements.",
      "Plan secure separation during heat cycles.",
      "Use the planner to compare timing, records, ID, and cost questions.",
    ],
    vetQuestions: [
      "What timing do you recommend for this dog?",
      "How do breed, size, growth, sex, and health affect the decision?",
      "Should timing change after a heat cycle or suspected pregnancy?",
      "What are the benefits and risks of doing it earlier or later?",
      "What should I do to prevent accidental mating before then?",
    ],
    warnings: [
      urgentSurgeryWarning,
      "If a female dog may be pregnant, has abnormal discharge, seems painful, or is unwell, contact a vet.",
    ],
    prevention: [
      "Keep intact dogs controlled and supervised.",
      "Do not rely on a child or neighbour to prevent mating.",
      "Secure fences, gates, and doors.",
      "Keep microchip and ID details updated in case of escape.",
    ],
    faqs: [
      {
        question: "What is the best age to spay or neuter a dog?",
        answer:
          "It depends on the dog. Ask your vet to weigh age, breed, size, sex, health, and lifestyle.",
      },
      {
        question: "Should rescue dogs be sterilised?",
        answer:
          "Many rescue organisations require or strongly encourage sterilisation. Ask the organisation and your vet about timing and records.",
      },
      {
        question: "Can I wait until after the first heat?",
        answer:
          "This is a vet discussion. If waiting, you must prevent accidental mating and escape.",
      },
    ],
    related: [
      { title: "Spaying a Dog", description: "Female dog timing and questions.", href: "/health/spaying-a-dog-south-africa" },
      { title: "Neutering a Dog", description: "Male dog timing and questions.", href: "/health/neutering-a-dog-south-africa" },
      { title: "Female Dog in Heat", description: "Signs and accidental mating prevention.", href: "/health/female-dog-in-heat-south-africa" },
      ...commonRelated,
    ],
  },
  {
    slug: "female-dog-in-heat-south-africa",
    title: "Female Dog in Heat in South Africa",
    seoTitle: "Female Dog in Heat South Africa | Signs, Safety and Mating Prevention",
    description:
      "A practical South African guide to female dogs in heat, covering signs, behaviour changes, hygiene, escape risk, male dog attention, and accidental mating prevention.",
    intro:
      "A female dog in heat can attract male dogs, try to roam, behave differently, and become pregnant if mating occurs. Owners need practical supervision, hygiene, and escape-prevention plans.",
    quickFacts: [
      welfareNote,
      "Do not allow a dog in heat to roam or mix freely with intact male dogs.",
      "Male dogs may travel, dig, jump, or push through gates when they smell a female in heat.",
      "If accidental mating may have happened, contact your vet promptly for advice.",
    ],
    context: [
      "South African homes with gardens, shared driveways, estates, farms, complexes, and busy gates can all have accidental escape risks.",
      "Neighbourhood male dogs may appear unexpectedly, so prevention is more than keeping an eye out during walks.",
    ],
    planning: [
      "Keep your dog on lead outside secure areas.",
      "Avoid dog parks, daycare, group training, and dog social events while in heat.",
      "Check gates, fences, and doors.",
      "Tell household members the dog must not be left unsupervised with male dogs.",
      "Ask your vet about sterilisation timing after the heat cycle if appropriate.",
    ],
    vetQuestions: [
      "Are these signs normal heat signs or should my dog be checked?",
      "What should I do if mating may have happened?",
      "When can we discuss spaying?",
      "What discharge, pain, appetite change, or behaviour should worry me?",
      "How long should I keep her away from male dogs?",
    ],
    warnings: [
      "Contact a vet if discharge smells bad, bleeding seems excessive, your dog is weak, painful, feverish, not eating, vomiting, or acting very unwell.",
      "Contact your vet quickly if accidental mating may have happened.",
    ],
    prevention: [
      "Use secure separation from male dogs.",
      "Walk at quiet times on lead.",
      "Do not leave her in a garden where male dogs can reach the fence.",
      "Discuss spaying with your vet if you do not plan responsible, vet-guided breeding.",
    ],
    faqs: [
      {
        question: "How do I know if my dog is in heat?",
        answer:
          "Signs can include vulva swelling, bleeding or discharge, behaviour changes, more attention from male dogs, and increased licking. Ask a vet if you are unsure.",
      },
      {
        question: "Can my dog get pregnant on one mating?",
        answer:
          "Yes, pregnancy can happen. Contact your vet promptly if accidental mating may have occurred.",
      },
      {
        question: "Can I take a dog in heat to daycare?",
        answer:
          "No, most responsible daycare, boarding, and training environments should not accept dogs in heat. Check provider rules.",
      },
    ],
    related: [
      { title: "Preventing Unwanted Puppies", description: "Practical steps to avoid accidental litters.", href: "/health/preventing-unwanted-puppies-south-africa" },
      { title: "Dog Pregnancy Signs", description: "Possible signs and why diagnosis needs a vet.", href: "/health/dog-pregnancy-signs-south-africa" },
      { title: "Spaying a Dog", description: "Spay timing and vet questions.", href: "/health/spaying-a-dog-south-africa" },
      ...commonRelated,
    ],
  },
  {
    slug: "dog-pregnancy-signs-south-africa",
    title: "Dog Pregnancy Signs in South Africa",
    seoTitle: "Dog Pregnancy Signs South Africa | What to Watch and When to See a Vet",
    description:
      "A cautious South African guide to possible dog pregnancy signs, accidental mating, vet diagnosis, welfare planning, costs, and responsible ownership.",
    intro:
      "Possible dog pregnancy should be confirmed by a veterinarian. Some signs can overlap with illness, false pregnancy, weight change, or normal cycle changes, so owners should not diagnose at home.",
    quickFacts: [
      "Only a veterinarian can confirm pregnancy and advise next steps.",
      "If accidental mating occurred, contact your vet promptly rather than waiting for signs.",
      "Pregnancy and birth can involve health risks and significant costs.",
      "Casual breeding adds to unwanted-litter pressure and should not be encouraged.",
    ],
    context: [
      "South African shelters, rescues, SPCAs, and welfare groups already deal with unwanted puppies. Owners have a responsibility to prevent accidental litters and plan veterinary care if pregnancy is possible.",
      "Pregnancy planning includes nutrition, parasite control, emergency plans, potential complications, safe homes for puppies, and ethical responsibility.",
    ],
    planning: [
      "Write down the date mating may have occurred.",
      "Book a vet appointment for confirmation and guidance.",
      "Do not start supplements, medication, or diet changes without vet advice.",
      "Ask about costs, risks, emergency signs, and responsible next steps.",
      "Keep the dog away from further mating risk.",
    ],
    vetQuestions: [
      "How can pregnancy be confirmed safely?",
      "What timing should I know?",
      "What symptoms would be urgent?",
      "What nutrition, parasite, and vaccine decisions are safe?",
      "What are the welfare and cost responsibilities if puppies are born?",
    ],
    warnings: [
      "Contact a vet urgently for weakness, collapse, severe pain, heavy bleeding, green or foul discharge, repeated vomiting, fever, or straining without progress.",
      "Do not give medication or supplements unless your vet advises.",
    ],
    prevention: [
      "Prevent accidental mating during heat.",
      "Discuss sterilisation timing with your vet.",
      "Do not breed casually or for quick income.",
      "Contact reputable welfare organisations if you are overwhelmed.",
    ],
    faqs: [
      {
        question: "What are signs a dog might be pregnant?",
        answer:
          "Possible signs can include appetite changes, nipple changes, weight gain, nesting, or behaviour changes, but these are not diagnostic. See a vet.",
      },
      {
        question: "Can a vet confirm pregnancy early?",
        answer:
          "Your vet can advise the safest timing and method for confirmation.",
      },
      {
        question: "What if the pregnancy was accidental?",
        answer:
          "Contact your vet promptly. They can explain options, timing, welfare responsibilities, and health risks.",
      },
    ],
    related: [
      { title: "Female Dog in Heat", description: "Signs and accidental mating prevention.", href: "/health/female-dog-in-heat-south-africa" },
      { title: "False Pregnancy", description: "Signs that can look like pregnancy.", href: "/health/false-pregnancy-in-dogs-south-africa" },
      { title: "Responsible Breeding", description: "Why casual breeding is risky.", href: "/health/responsible-dog-breeding-south-africa" },
      ...commonRelated,
    ],
  },
  {
    slug: "false-pregnancy-in-dogs-south-africa",
    title: "False Pregnancy in Dogs in South Africa",
    seoTitle: "False Pregnancy in Dogs South Africa | Signs and Vet Guidance",
    description:
      "A cautious guide to false pregnancy in dogs, covering possible signs, why diagnosis needs a vet, when symptoms need care, and preventing future uncertainty.",
    intro:
      "False pregnancy can make a dog show pregnancy-like signs even when she is not pregnant. Because signs can overlap with true pregnancy or illness, a veterinarian should guide diagnosis and care.",
    quickFacts: [
      welfareNote,
      "Do not assume pregnancy-like signs are harmless.",
      "Severe, prolonged, painful, or worrying symptoms should be checked by a vet.",
      "Discuss sterilisation timing if false pregnancy repeats or causes distress.",
    ],
    context: [
      "Owners may notice nesting, mothering toys, mammary changes, clinginess, appetite changes, or behaviour changes after a heat cycle. These signs can be confusing and should be interpreted with vet help.",
    ],
    planning: [
      "Note when the last heat cycle happened.",
      "Write down behaviour, appetite, discharge, mammary changes, and energy level.",
      "Do not give medication or home remedies without a vet.",
      "Ask your vet whether pregnancy needs to be ruled out.",
      "Discuss future prevention and sterilisation timing.",
    ],
    vetQuestions: [
      "Could this be false pregnancy, true pregnancy, or another health issue?",
      "What signs mean I should come in urgently?",
      "Should we confirm pregnancy status?",
      "What should I avoid doing at home?",
      "Should sterilisation be discussed later?",
    ],
    warnings: [
      "Contact a vet for fever, pain, foul discharge, severe lethargy, refusal to eat, vomiting, swollen painful mammary glands, aggression, or prolonged distress.",
    ],
    prevention: [
      "Track heat cycles.",
      "Prevent accidental mating.",
      "Discuss sterilisation if false pregnancy is repeated or distressing.",
      "Keep vet records and notes for future cycles.",
    ],
    faqs: [
      {
        question: "Is false pregnancy dangerous?",
        answer:
          "It can be mild, but signs can overlap with other issues. Severe, prolonged, or painful symptoms need veterinary care.",
      },
      {
        question: "Can I tell false pregnancy from real pregnancy at home?",
        answer:
          "No. A vet should help confirm what is happening.",
      },
      {
        question: "Will sterilisation prevent false pregnancy?",
        answer:
          "Ask your vet. Timing matters, especially around heat cycles and current symptoms.",
      },
    ],
    related: [
      { title: "Dog Pregnancy Signs", description: "Why possible pregnancy needs vet confirmation.", href: "/health/dog-pregnancy-signs-south-africa" },
      { title: "Female Dog in Heat", description: "Cycle signs and owner planning.", href: "/health/female-dog-in-heat-south-africa" },
      { title: "When to Spay or Neuter", description: "Timing questions for your vet.", href: "/health/when-to-spay-or-neuter-a-dog-south-africa" },
      ...commonRelated,
    ],
  },
  {
    slug: "microchipping-dogs-south-africa",
    title: "Microchipping Dogs in South Africa",
    seoTitle: "Microchipping Dogs South Africa | ID, Lost Dogs and Vet Questions",
    description:
      "A South African guide to microchipping dogs, covering why chips help lost dogs, keeping details updated, adoption records, ID tags, and questions to ask your vet.",
    intro:
      "Microchipping helps identify a lost dog, but it only works well when the chip is registered and contact details stay current. It should be paired with an easy-to-read ID tag.",
    quickFacts: [
      "A microchip is not a GPS tracker.",
      "Contact details must be kept updated.",
      "Ask your vet or shelter how the chip is registered and how to update it.",
      "Use an ID tag as a visible first step for neighbours or finders.",
    ],
    context: [
      "South African dogs can escape through gates, during storms, fireworks, heat cycles, moving house, holiday travel, or after accidents. Microchips and ID tags help more people get lost dogs home faster.",
      "Adopted dogs may already have a microchip, but ownership details still need checking.",
    ],
    planning: [
      "Ask your vet to scan for an existing chip.",
      "Confirm the chip number and database or registration process.",
      "Update details after adoption, moving house, or changing phone numbers.",
      "Keep a photo of the chip record.",
      "Use a collar ID tag with current contact details.",
    ],
    vetQuestions: [
      "Can you scan my dog for a microchip?",
      "How do I register or update the details?",
      "What proof should I keep?",
      "Should my puppy be microchipped at a specific visit?",
      "What should I do if my dog is lost?",
    ],
    warnings: [
      "If a dog is injured, frightened, or lost, contact local vets, welfare groups, shelters, and community channels promptly.",
      "Do not assume a microchip is updated just because a dog was chipped years ago.",
    ],
    prevention: [
      "Check details annually.",
      "Update details before travel or moving.",
      "Use a tag and microchip together.",
      "Keep clear recent photos of your dog.",
    ],
    faqs: [
      {
        question: "Is a microchip a GPS tracker?",
        answer:
          "No. A microchip stores an ID number that can be scanned and linked to registered contact details.",
      },
      {
        question: "Should my dog also wear an ID tag?",
        answer:
          "Yes. A tag is visible immediately, while a microchip usually needs a scanner.",
      },
      {
        question: "What if I adopted a dog with a chip?",
        answer:
          "Ask the shelter, rescue, previous owner, or vet how to update the registered details.",
      },
    ],
    related: [
      { title: "Dog ID Tags", description: "What to put on a visible tag.", href: "/health/dog-id-tags-south-africa" },
      { title: "Adoption Safety", description: "Records and post-adoption planning.", href: "/adoption" },
      { title: "Puppy First Vet Visit", description: "Ask about ID and microchipping.", href: "/puppy/puppy-first-vet-visit-south-africa" },
      ...commonRelated,
    ],
  },
  {
    slug: "dog-id-tags-south-africa",
    title: "Dog ID Tags in South Africa",
    seoTitle: "Dog ID Tags South Africa | What to Put on a Dog Tag",
    description:
      "A practical South African guide to dog ID tags, covering visible contact details, microchips, lost dog prevention, travel, storms, heat cycles, and safety.",
    intro:
      "A dog ID tag is a simple, visible way to help a neighbour, passer-by, vet, or welfare group contact you quickly if your dog gets out. It works best alongside a microchip.",
    quickFacts: [
      "An ID tag is visible immediately; a microchip needs a scanner.",
      "Keep the phone number current.",
      "Use a tag that is readable, durable, and comfortable for the dog.",
      "Check collars and tags before travel, storms, holidays, and heat cycles.",
    ],
    context: [
      "Dogs can escape through open gates, during thunderstorms, fireworks, house moves, holidays, walks, or when a female dog is in heat. A visible tag can save time.",
      "Some owners prefer not to put a full address on a tag. The safest details depend on your comfort and local situation.",
    ],
    planning: [
      "Use at least one current phone number.",
      "Consider your dog's name, your surname, or a simple 'I am microchipped' note.",
      "Check that the tag is readable and not worn smooth.",
      "Use a secure collar or harness fit.",
      "Keep a microchip updated as a backup.",
    ],
    vetQuestions: [
      "Can you scan my dog for a microchip?",
      "What ID details do you recommend?",
      "Should my puppy wear a collar now?",
      "What collar fit is safe for my dog's age and size?",
    ],
    warnings: [
      "If your dog is missing, contact local vets, shelters, welfare groups, community channels, and microchip database support promptly.",
      "Do not rely on an old phone number, damaged tag, or outdated chip details.",
    ],
    prevention: [
      "Update tags after phone number changes.",
      "Check tags before travel.",
      "Use a microchip too.",
      "Keep photos of your dog from both sides and the face.",
    ],
    faqs: [
      {
        question: "What should I put on my dog's ID tag?",
        answer:
          "At minimum, a current phone number. Some owners add the dog's name, a second number, or a microchip note.",
      },
      {
        question: "Is a tag enough without a microchip?",
        answer:
          "A tag helps quickly, but tags and collars can fall off. A microchip is a stronger backup.",
      },
      {
        question: "Should puppies wear ID tags?",
        answer:
          "Ask your vet about safe collar fit and timing. Puppies can slip out quickly, so identification planning matters.",
      },
    ],
    related: [
      { title: "Microchipping Dogs", description: "Registration and lost-dog backup.", href: "/health/microchipping-dogs-south-africa" },
      { title: "Dog-Friendly Travel Checklist", description: "Travel ID and safety reminders.", href: "/tools/dog-friendly-travel-checklist" },
      { title: "New Puppy Checklist", description: "ID and first-week setup.", href: "/tools/puppy-checklist" },
      ...commonRelated,
    ],
  },
  {
    slug: "preventing-unwanted-puppies-south-africa",
    title: "Preventing Unwanted Puppies in South Africa",
    seoTitle: "Preventing Unwanted Puppies South Africa | Responsible Dog Ownership",
    description:
      "A welfare-focused South African guide to preventing unwanted puppies, covering sterilisation, heat cycles, secure containment, microchips, SPCA context, and responsible ownership.",
    intro:
      "Preventing unwanted puppies is a core part of responsible dog ownership in South Africa. Accidental litters place pressure on shelters, rescues, SPCAs, communities, and owners who may not be prepared for the cost and welfare responsibilities.",
    quickFacts: [
      welfareNote,
      "Do not allow intact dogs to roam.",
      "A female dog in heat can attract determined male dogs and escape attempts.",
      "Sterilisation, secure management, ID, and education all work together.",
    ],
    context: [
      "Unwanted litters can happen in suburbs, rural areas, townships, complexes, farms, estates, and homes where gates are opened often.",
      "Puppies require vet care, vaccines, deworming, food, safe homes, socialisation, and lifelong responsibility.",
    ],
    planning: [
      "Discuss spay or neuter timing with your vet.",
      "Keep intact dogs securely separated.",
      "Check fences, gates, and doors.",
      "Use leads outside secure property.",
      "Update microchip and ID tag details.",
      "Contact reputable welfare organisations if you need help.",
    ],
    vetQuestions: [
      "What sterilisation timing do you recommend?",
      "What should I do if accidental mating happened?",
      "Could my dog be pregnant?",
      "What costs and risks come with pregnancy and puppies?",
      "Which welfare or SPCA resources may be available locally?",
    ],
    warnings: [
      "Contact a vet promptly after accidental mating, suspected pregnancy, abnormal discharge, severe lethargy, pain, or signs of labour problems.",
    ],
    prevention: [
      "Plan before heat cycles.",
      "Do not breed casually for profit, status, or because puppies seem cute.",
      "Support adoption and responsible welfare work.",
      "Teach everyone in the household how to prevent escapes.",
    ],
    faqs: [
      {
        question: "What should I do if my dog mated accidentally?",
        answer:
          "Contact your vet promptly. Timing matters, and a vet can explain options and next steps.",
      },
      {
        question: "Can one accidental mating cause pregnancy?",
        answer:
          "Yes. Pregnancy can happen from one mating.",
      },
      {
        question: "Why does DogHaven discourage casual breeding?",
        answer:
          "Breeding carries health, welfare, cost, emergency, and lifelong puppy-placement responsibilities. South Africa already has many dogs needing homes.",
      },
    ],
    related: [
      { title: "Dog Sterilisation", description: "Spay and neuter planning overview.", href: "/health/dog-sterilisation-south-africa" },
      { title: "Female Dog in Heat", description: "Signs and escape-risk planning.", href: "/health/female-dog-in-heat-south-africa" },
      { title: "Responsible Breeding", description: "Why breeding should never be casual.", href: "/health/responsible-dog-breeding-south-africa" },
      ...commonRelated,
    ],
  },
  {
    slug: "responsible-dog-breeding-south-africa",
    title: "Responsible Dog Breeding in South Africa",
    seoTitle: "Responsible Dog Breeding South Africa | Welfare, Costs and Questions",
    description:
      "A welfare-focused South African guide to responsible dog breeding, covering health screening, breed knowledge, costs, emergencies, puppy homes, shelters, and why casual breeding is risky.",
    intro:
      "Responsible dog breeding is not simply putting two dogs together. It involves veterinary care, health screening, breed knowledge, emergency planning, ethical puppy placement, legal and welfare responsibilities, and a willingness to take lifelong responsibility for outcomes.",
    quickFacts: [
      "DogHaven strongly discourages casual breeding, breeding for quick profit, and breeding for status.",
      "Pregnancy, birth, and puppy raising can be expensive and risky.",
      "Health screening, temperament, breed knowledge, contracts, records, and owner support matter.",
      "South African shelters, rescues, and SPCAs already carry heavy unwanted-litter pressure.",
    ],
    context: [
      "Responsible breeding in South Africa should consider welfare, veterinary access, breed-specific health risks, safe puppy raising, home checks, records, vaccination, deworming, microchipping, and what happens if buyers cannot keep puppies.",
      "Choosing not to breed and supporting adoption can be the most responsible decision for many owners.",
    ],
    planning: [
      "Speak to a vet before considering breeding.",
      "Research breed health, temperament, working needs, and welfare concerns.",
      "Understand pregnancy, birth, emergency, vaccination, deworming, food, microchip, and puppy placement costs.",
      "Prepare to keep puppies if suitable homes are not found.",
      "Do not breed dogs with serious health, temperament, or welfare concerns.",
    ],
    vetQuestions: [
      "Is my dog healthy and suitable to breed from?",
      "What health screening is appropriate for this breed or type?",
      "What pregnancy and birth emergencies should I budget for?",
      "What vaccine, deworming, microchip, and record responsibilities apply to puppies?",
      "What are the welfare risks of breeding this dog?",
    ],
    warnings: [
      "Pregnancy and birth can become emergencies. Contact a vet for distress, weakness, heavy bleeding, green or foul discharge, straining without progress, severe pain, collapse, or unwell puppies.",
      "Do not breed dogs with known serious health problems, unsafe temperament, or poor welfare conditions.",
    ],
    prevention: [
      "Choose sterilisation when breeding is not carefully planned and welfare-focused.",
      "Consider adoption rather than creating more puppies.",
      "Avoid online pressure, status trends, and casual mating arrangements.",
      "Ask welfare organisations for guidance if an accidental litter has already happened.",
    ],
    faqs: [
      {
        question: "Is breeding a dog a good way to make money?",
        answer:
          "DogHaven does not encourage breeding for profit. Responsible breeding is expensive, risky, and welfare-heavy.",
      },
      {
        question: "What makes breeding responsible?",
        answer:
          "Veterinary guidance, health screening, temperament care, breed knowledge, safe puppy raising, records, ethical homes, and lifelong responsibility.",
      },
      {
        question: "Should I breed my dog because friends want puppies?",
        answer:
          "No, not without serious welfare planning and veterinary guidance. Casual demand is not a responsible reason to breed.",
      },
    ],
    related: [
      { title: "Preventing Unwanted Puppies", description: "Welfare-focused prevention planning.", href: "/health/preventing-unwanted-puppies-south-africa" },
      { title: "Dog Adoption", description: "Adoption guidance and shelter context.", href: "/adoption/dog-adoption-south-africa" },
      { title: "Dog Pregnancy Signs", description: "Possible signs and vet confirmation.", href: "/health/dog-pregnancy-signs-south-africa" },
      ...commonRelated,
    ],
  },
];

export const phase22SterilisationGuidePages: GuideContent[] = topics.map((topic) => ({
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
      heading: "South African context",
      body: topic.context,
    },
    {
      heading: "Practical planning checklist",
      body: ["Use this checklist to prepare for a sensible conversation with your vet or a reputable welfare organisation."],
      checklist: topic.planning,
    },
    {
      heading: "Questions to ask your vet",
      body: ["Write questions down before the appointment so cost, timing, risks, records, and warning signs are clear."],
      checklist: topic.vetQuestions,
    },
    {
      heading: "Warning signs that need vet attention",
      body: topic.warnings,
    },
    {
      heading: "Prevention and responsible ownership tips",
      body: ["Responsible ownership means planning before a crisis, escape, unwanted mating, or missing-dog incident happens."],
      checklist: topic.prevention,
    },
  ],
  faqs: topic.faqs,
  related: [...topic.related, ...puppyRelated],
  sources,
}));

export function getPhase22Guide(slug: string) {
  return phase22SterilisationGuidePages.find((guide) => guide.slug === slug);
}

export function getPhase22GuidesByHub(hubPath: string) {
  return phase22SterilisationGuidePages.filter((guide) => guide.hubPath === hubPath);
}

export const phase22HealthCards: CardLink[] = phase22SterilisationGuidePages.map((guide) => ({
  title: guide.title,
  description: guide.description,
  href: guide.path,
}));

export const phase22PuppyCards: CardLink[] = [
  { title: "Sterilisation Planner", description: "Prepare vet questions about timing, ID, microchips, and recovery.", href: "/tools/dog-sterilisation-planner" },
  { title: "Microchipping Dogs", description: "Why microchips and updated details help lost dogs get home.", href: "/health/microchipping-dogs-south-africa" },
  { title: "Dog ID Tags", description: "Visible ID basics for puppies and adult dogs.", href: "/health/dog-id-tags-south-africa" },
  { title: "Preventing Unwanted Puppies", description: "Heat cycles, secure management, and welfare-focused planning.", href: "/health/preventing-unwanted-puppies-south-africa" },
];

export const phase22AdoptionCards: CardLink[] = [
  { title: "Dog Sterilisation", description: "Spay and neuter planning after adoption.", href: "/health/dog-sterilisation-south-africa" },
  { title: "Microchipping Dogs", description: "Check and update chip details after adoption.", href: "/health/microchipping-dogs-south-africa" },
  { title: "Responsible Ownership", description: "Prevent unwanted puppies and support welfare-focused decisions.", href: "/health/preventing-unwanted-puppies-south-africa" },
];

export const phase22CostCards: CardLink[] = [
  { title: "Sterilisation Cost", description: "Spay and neuter cost factors without fake clinic prices.", href: "/health/dog-sterilisation-cost-south-africa" },
  { title: "Microchipping Dogs", description: "ID planning and vet questions.", href: "/health/microchipping-dogs-south-africa" },
];

export const phase22InsuranceCards: CardLink[] = [
  { title: "Dog Sterilisation", description: "Routine care questions to plan with your vet.", href: "/health/dog-sterilisation-south-africa" },
  { title: "Microchipping Dogs", description: "Records and ID planning for lost-dog prevention.", href: "/health/microchipping-dogs-south-africa" },
];

export const phase22LawsCards: CardLink[] = [
  { title: "Responsible Dog Breeding", description: "Welfare, costs, health screening, and why casual breeding is risky.", href: "/health/responsible-dog-breeding-south-africa" },
  { title: "Dog ID Tags", description: "Visible identification and lost-dog planning.", href: "/health/dog-id-tags-south-africa" },
  { title: "Microchipping Dogs", description: "Registration and updating details after moves or adoption.", href: "/health/microchipping-dogs-south-africa" },
];

export const phase22DogServicesCards: CardLink[] = [
  { title: "Microchipping Dogs", description: "Keep ID details current before boarding, daycare, travel, or walking services.", href: "/health/microchipping-dogs-south-africa" },
  { title: "Dog ID Tags", description: "Visible ID for travel, services, walks, and escapes.", href: "/health/dog-id-tags-south-africa" },
  { title: "Vaccination Preparation", description: "Records to discuss before high-contact dog services.", href: "/health/dog-vaccination-costs-and-schedule-south-africa" },
];
