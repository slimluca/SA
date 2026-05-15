import type { CardLink, GuideContent, Source } from "@/lib/content";

type MoneyGuide = {
  slug: string;
  hubPath: "/insurance" | "/costs";
  title: string;
  seoTitle: string;
  description: string;
  summary: string;
  context: string;
  tableRows: string[][];
  questions: string[];
  avoid: string[];
  checklist: string[];
  faqs: GuideContent["faqs"];
  related: CardLink[];
  sources: Source[];
};

const reviewed = "2026-05-15";

const sources = {
  fsca: {
    label: "Financial Sector Conduct Authority consumer information",
    href: "https://www.fsca.co.za/Consumers/",
    note: "Official South African financial sector consumer information and education context.",
  },
  fscaAdvice: {
    label: "FSCA consumer education on financial advice",
    href: "https://www.fscamymoney.co.za/Pages/Managing%20your%20money/Financial-advisory-and-intermediary-service.aspx",
    note: "Consumer education on financial advice and intermediaries in South Africa.",
  },
  savc: {
    label: "South African Veterinary Council",
    href: "https://savc.org.za/",
    note: "South African veterinary professional regulation and public veterinary-care context.",
  },
  sava: {
    label: "South African Veterinary Association",
    href: "https://www.sava.co.za/",
    note: "South African veterinary profession and animal health context.",
  },
  wsavaNutrition: {
    label: "WSAVA Global Nutrition Guidelines",
    href: "https://wsava.org/global-guidelines/global-nutrition-guidelines/",
    note: "Veterinary nutrition guidance for diet history, feeding decisions, and vet conversations.",
  },
};

const insuranceRelated: CardLink[] = [
  { title: "Pet Insurance Basics", description: "Plain-English cover, excess, and exclusions.", href: "/insurance/pet-insurance-for-dogs-south-africa" },
  { title: "Waiting Periods", description: "Understand timing before cover starts.", href: "/insurance/dog-insurance-waiting-periods-south-africa" },
  { title: "Emergency Vet Costs", description: "Plan for urgent bills and after-hours care.", href: "/costs/emergency-vet-costs-south-africa" },
  { title: "Dog Cost Calculator", description: "Estimate monthly planning pressure.", href: "/costs/dog-cost-calculator-south-africa" },
];

const costRelated: CardLink[] = [
  { title: "Monthly Dog Costs", description: "Plan food, vet care, prevention, and extras.", href: "/costs/monthly-cost-of-owning-a-dog-south-africa" },
  { title: "Pet Insurance", description: "Compare policy wording before choosing cover.", href: "/insurance/pet-insurance-for-dogs-south-africa" },
  { title: "Dog Food Costs", description: "Food budgeting by size and life stage.", href: "/costs/dog-food-cost-south-africa" },
  { title: "When to Take Your Dog to the Vet", description: "Know when symptoms should not wait.", href: "/health/when-to-take-your-dog-to-the-vet-south-africa" },
];

const insuranceGuides: MoneyGuide[] = [
  {
    slug: "compare-dog-insurance-south-africa",
    hubPath: "/insurance",
    title: "Compare Dog Insurance in South Africa",
    seoTitle: "Compare Dog Insurance South Africa | Neutral Policy Checklist",
    description:
      "A neutral South African dog insurance comparison hub explaining premiums, excesses, limits, exclusions, waiting periods, claims, and policy questions.",
    summary:
      "Compare dog insurance by reading the policy wording, not just the monthly premium. The cheapest premium can still be expensive if excesses, limits, exclusions, waiting periods, or claim rules do not suit your dog.",
    context:
      "South African pet insurance products can differ in accident cover, illness cover, routine care add-ons, exclusions, claim processes, and how they treat age, breed, dental issues, hereditary conditions, and pre-existing conditions. DogHaven does not rank insurers or provide financial advice.",
    tableRows: [
      ["Monthly premium", "What you pay regularly, but it is only one part of the comparison."],
      ["Excess", "The amount or percentage you pay when claiming, sometimes per claim or condition."],
      ["Annual limit", "The maximum the policy may pay in a year."],
      ["Per-condition limit", "A separate cap for one illness, injury, or treatment category."],
      ["Waiting periods", "Time before certain cover starts; accident and illness timing can differ."],
      ["Exclusions", "Items the policy will not cover, often including pre-existing conditions."],
    ],
    questions: [
      "Is this accident-only, illness, comprehensive, or routine-care cover?",
      "What excess applies and when is it charged?",
      "Are there annual, per-condition, dental, hereditary, or breed-related limits?",
      "How are pre-existing conditions assessed?",
      "What documents are needed for claims?",
      "Can premiums or terms change at renewal?",
    ],
    avoid: [
      "Do not choose on premium alone.",
      "Do not assume routine care, dental care, or hereditary conditions are included.",
      "Do not rely on old screenshots or adverts without reading current documents.",
      "Do not cancel an existing policy before understanding waiting periods on a new one.",
    ],
    checklist: [
      "Download current policy wording.",
      "Read the benefit schedule and exclusions.",
      "Ask the insurer direct questions in writing.",
      "Compare excesses and limits side by side.",
      "Check claim process and payout timing.",
      "Keep vet records complete before claiming.",
    ],
    faqs: [
      {
        question: "Does DogHaven recommend one dog insurer?",
        answer:
          "No. DogHaven explains comparison factors only. Owners should read current policy documents and contact insurers directly.",
      },
      {
        question: "Is the cheapest policy the best option?",
        answer:
          "Not necessarily. A lower premium may come with tighter limits, higher excesses, narrower cover, or exclusions that matter for your dog.",
      },
      {
        question: "Can policy wording change?",
        answer:
          "Yes. Benefits, premiums, exclusions, and rules can change. Always check the latest insurer documents before deciding.",
      },
    ],
    related: insuranceRelated,
    sources: [sources.fsca, sources.fscaAdvice],
  },
  {
    slug: "dog-insurance-comparison-south-africa",
    hubPath: "/insurance",
    title: "Dog Insurance Comparison in South Africa",
    seoTitle: "Dog Insurance Comparison South Africa | What to Compare",
    description:
      "A South African dog insurance comparison guide covering cover types, excesses, limits, waiting periods, exclusions, claims, breed factors, and vet records.",
    summary:
      "A useful dog insurance comparison is a line-by-line policy check: what is covered, what is excluded, when cover starts, what you pay at claim time, and what documents the insurer needs.",
    context:
      "Many South African owners compare insurance only when a puppy arrives, a dog becomes older, or a vet bill feels scary. The better time is before an emergency, while you can calmly compare documents.",
    tableRows: [
      ["Accident cover", "May focus on injuries and sudden events; check exclusions and limits."],
      ["Illness cover", "May cover disease treatment, subject to waiting periods and exclusions."],
      ["Routine care", "Often an add-on; check vaccines, sterilisation, dental, and prevention rules."],
      ["Dental", "May be excluded, limited, or require specific records."],
      ["Breed-related conditions", "Some policies may limit or exclude certain risks; ask directly."],
      ["Claims", "Check reimbursement process, forms, invoices, vet notes, and timing."],
    ],
    questions: [
      "What exact events and treatments are included?",
      "What is excluded for my dog's breed, age, or medical history?",
      "Are chronic conditions covered after diagnosis?",
      "Is there a per-condition limit as well as an annual limit?",
      "What happens if I change vets?",
      "How are claim disputes handled?",
    ],
    avoid: [
      "Do not compare only marketing summaries.",
      "Do not assume cover starts on the day you pay.",
      "Do not hide previous symptoms or vet visits.",
      "Do not ignore dental, hereditary, or chronic-care wording.",
    ],
    checklist: [
      "Create a comparison table with premium, excess, limits, waiting periods, and exclusions.",
      "Ask each insurer the same questions.",
      "Save written answers.",
      "Check whether direct vet payment is available or whether you pay first.",
      "Review the policy every year.",
    ],
    faqs: [
      {
        question: "How many insurers should I compare?",
        answer:
          "Compare enough policies to understand the market, but focus on policy wording quality rather than collecting endless quotes.",
      },
      {
        question: "Should I compare before my dog is sick?",
        answer:
          "Yes. Waiting until symptoms appear can create pre-existing condition issues and waiting-period problems.",
      },
      {
        question: "Can a vet tell me which policy to buy?",
        answer:
          "A vet can explain likely medical needs and records, but insurance choice should be based on current policy documents and your own financial situation.",
      },
    ],
    related: insuranceRelated,
    sources: [sources.fsca, sources.savc],
  },
  {
    slug: "cheap-pet-insurance-for-dogs-south-africa",
    hubPath: "/insurance",
    title: "Cheap Pet Insurance for Dogs in South Africa",
    seoTitle: "Cheap Pet Insurance for Dogs South Africa | What to Check",
    description:
      "A neutral guide to cheaper dog insurance in South Africa, explaining tradeoffs around premiums, excesses, limits, exclusions, routine care, and claims.",
    summary:
      "Cheap dog insurance is only useful if the policy still covers the risks you care about. Look at the premium together with excesses, annual limits, per-condition caps, waiting periods, and exclusions.",
    context:
      "South African households are budget-conscious, but dog care can become expensive when illness, injury, dental problems, or after-hours emergencies happen. The goal is not the lowest premium at all costs; it is a policy or savings plan you understand.",
    tableRows: [
      ["Lower premium", "May help monthly cash flow but can mean narrower cover."],
      ["Higher excess", "May reduce premium but increases claim-time cost."],
      ["Lower annual limit", "May be fine for small claims but less helpful for major treatment."],
      ["Accident-only cover", "May cost less but often excludes illness."],
      ["No routine add-on", "May save premium if you prefer budgeting routine care yourself."],
      ["Emergency fund", "Useful even with insurance because exclusions and upfront payments can happen."],
    ],
    questions: [
      "What am I giving up for the lower premium?",
      "Could I afford the excess during an emergency?",
      "Is illness cover included or only accidents?",
      "What is the maximum annual payout?",
      "Are dental, chronic, hereditary, or breed issues excluded?",
    ],
    avoid: [
      "Do not buy the cheapest option without reading exclusions.",
      "Do not assume a low premium protects against large surgery bills.",
      "Do not skip routine vet care to save money.",
      "Do not use insurance instead of an emergency fund.",
    ],
    checklist: [
      "Compare at least premium, excess, annual limit, exclusions, and waiting periods.",
      "Budget for routine care separately.",
      "Keep a small emergency fund even if insured.",
      "Ask the insurer what happens as the dog ages.",
      "Review policy documents before renewal.",
    ],
    faqs: [
      {
        question: "Is cheap dog insurance bad?",
        answer:
          "Not automatically. It depends on whether the cover, limits, excesses, and exclusions match your needs and budget.",
      },
      {
        question: "Can I rely only on savings instead of insurance?",
        answer:
          "Some owners do, but savings can be exhausted by one emergency. This is a personal financial decision, not something DogHaven can decide for you.",
      },
      {
        question: "What is the biggest cheap-policy risk?",
        answer:
          "Buying a policy that feels affordable but excludes the type of treatment you expected it to cover.",
      },
    ],
    related: insuranceRelated,
    sources: [sources.fsca],
  },
  {
    slug: "best-pet-insurance-questions-to-ask-south-africa",
    hubPath: "/insurance",
    title: "Pet Insurance Questions to Ask in South Africa",
    seoTitle: "Pet Insurance Questions South Africa | Neutral Checklist",
    description:
      "A practical checklist of questions South African dog owners should ask insurers before choosing pet insurance, without rankings or affiliate recommendations.",
    summary:
      "The best insurance question is specific: 'Where in the policy wording does it say that?' Ask about cover, limits, excesses, waiting periods, exclusions, claims, renewal changes, and your dog's medical history.",
    context:
      "Insurer call centres and sales pages can be helpful, but written policy documents matter most. Keep written answers so you can compare policies without relying on memory.",
    tableRows: [
      ["Cover", "What accidents, illnesses, diagnostics, surgery, medicine, and hospital care are included?"],
      ["Limits", "What annual, lifetime, per-condition, or category caps apply?"],
      ["Excess", "Is it a fixed amount, percentage, or both?"],
      ["Waiting period", "When does accident, illness, cruciate, dental, or routine cover start?"],
      ["Exclusions", "What is not covered for age, breed, dental, hereditary, or pre-existing issues?"],
      ["Claims", "Do I pay first, what forms are needed, and how long can reimbursement take?"],
    ],
    questions: [
      "Can you point me to the exact clause?",
      "Does this answer change at renewal?",
      "How do you define a pre-existing condition?",
      "Are symptoms before policy start treated differently from diagnosis?",
      "What happens if my dog develops a chronic condition?",
      "How do I complain or appeal a claim decision?",
    ],
    avoid: [
      "Do not accept vague answers for important exclusions.",
      "Do not confuse a quote with final acceptance of cover.",
      "Do not assume all vets, specialists, or procedures are handled the same way.",
      "Do not ignore cancellation terms.",
    ],
    checklist: [
      "Ask questions in writing where possible.",
      "Save the policy wording and benefit schedule.",
      "Check your dog's vet history before applying.",
      "Ask your vet for complete invoices and clinical notes when claiming.",
      "Review the same questions each renewal.",
    ],
    faqs: [
      {
        question: "Why avoid the phrase best pet insurance?",
        answer:
          "Because the right policy depends on your dog's age, health, breed, budget, and risk tolerance. DogHaven does not rank insurers.",
      },
      {
        question: "Should I ask about exclusions before price?",
        answer:
          "Yes. A low premium is less useful if key exclusions remove the cover you wanted.",
      },
      {
        question: "Can insurers answer breed-specific questions?",
        answer:
          "They should be able to explain how their policy treats breed-related conditions, but always check the written document.",
      },
    ],
    related: insuranceRelated,
    sources: [sources.fsca, sources.fscaAdvice],
  },
  {
    slug: "dog-insurance-for-puppies-south-africa",
    hubPath: "/insurance",
    title: "Dog Insurance for Puppies in South Africa",
    seoTitle: "Dog Insurance for Puppies South Africa | What to Compare",
    description:
      "A neutral guide to puppy insurance in South Africa, covering waiting periods, vaccines, congenital issues, routine care, claims, and first-year budgeting.",
    summary:
      "Puppy insurance is worth comparing before symptoms appear, because waiting periods and pre-existing condition wording can matter. Also budget separately for vaccines, food, training, sterilisation discussions, and parasite prevention.",
    context:
      "The first puppy year in South Africa can include parvovirus risk, rabies vaccination, deworming, tick and flea prevention, puppy classes, chewing damage, and vet visits. Insurance may help with unexpected illness or injury, but it does not replace routine budgeting.",
    tableRows: [
      ["Minimum age", "Check when a puppy can be insured."],
      ["Waiting periods", "Illness and certain conditions may not be covered immediately."],
      ["Vaccination records", "Insurers may ask for routine vet records when claiming."],
      ["Congenital or hereditary wording", "Important for pedigree and breed-risk puppies."],
      ["Routine care add-ons", "May or may not help with vaccines and prevention."],
      ["First-year costs", "Insurance is only one line in the puppy budget."],
    ],
    questions: [
      "When can cover start for my puppy?",
      "Are congenital or hereditary conditions handled separately?",
      "What puppy vaccine or routine care records are needed?",
      "Are parvovirus, accidents, and swallowed objects covered after waiting periods?",
      "Does cover change after the first year?",
    ],
    avoid: [
      "Do not wait until a puppy has symptoms before comparing cover.",
      "Do not assume vaccines, deworming, and sterilisation are automatically covered.",
      "Do not take unvaccinated puppies to risky public places to 'use' a policy.",
      "Do not hide adoption or breeder health information.",
    ],
    checklist: [
      "Compare before the puppy arrives or soon after vet check.",
      "Keep vaccination and deworming records.",
      "Ask about waiting periods and pre-existing symptoms.",
      "Budget for routine puppy care separately.",
      "Save emergency vet and insurer claim details.",
    ],
    faqs: [
      {
        question: "Should I insure a puppy immediately?",
        answer:
          "Many owners compare early because waiting periods and pre-existing condition wording can matter. DogHaven cannot say whether it is right for your finances.",
      },
      {
        question: "Does puppy insurance cover vaccines?",
        answer:
          "Only if the policy or add-on says so. Read the current benefit schedule and ask the insurer directly.",
      },
      {
        question: "What puppy records should I keep?",
        answer:
          "Keep vet invoices, vaccination cards, deworming records, microchip details, adoption or breeder paperwork, and any insurer correspondence.",
      },
    ],
    related: [
      { title: "Puppy Care", description: "First-year care planning.", href: "/puppy/puppy-care-south-africa" },
      { title: "Puppy First-Year Cost", description: "Budget beyond insurance.", href: "/costs/puppy-first-year-cost-south-africa" },
      ...insuranceRelated,
    ],
    sources: [sources.fsca, sources.savc],
  },
  {
    slug: "dog-insurance-for-older-dogs-south-africa",
    hubPath: "/insurance",
    title: "Dog Insurance for Older Dogs in South Africa",
    seoTitle: "Dog Insurance for Older Dogs South Africa | What to Check",
    description:
      "A neutral guide to pet insurance for older dogs in South Africa, covering age limits, pre-existing conditions, chronic care, dental issues, excesses, and vet records.",
    summary:
      "Older dogs can be harder to insure because age limits, pre-existing conditions, chronic conditions, dental exclusions, and premium changes may matter. Compare documents carefully before switching or cancelling cover.",
    context:
      "Senior dogs may need more vet visits, diagnostics, dental care, chronic medication, mobility support, and monitoring. Insurance can be useful for some owners, but existing medical history matters.",
    tableRows: [
      ["Entry age", "Some policies may limit new enrolment by age."],
      ["Existing history", "Symptoms and diagnoses before cover can affect claims."],
      ["Chronic care", "Check annual limits and ongoing medication wording."],
      ["Dental", "Older dogs often need dental attention; wording varies."],
      ["Premium changes", "Ask how age affects pricing and renewal."],
      ["Switching", "A new policy can create new waiting periods and exclusions."],
    ],
    questions: [
      "Can my dog's age be accepted for new cover?",
      "How do you assess previous vet notes?",
      "Are chronic conditions covered after diagnosis?",
      "What dental exclusions apply?",
      "What happens at renewal as my dog ages?",
    ],
    avoid: [
      "Do not cancel existing cover before understanding replacement exclusions.",
      "Do not hide past symptoms or vet visits.",
      "Do not assume age-related care is automatically covered.",
      "Do not delay vet care because of claim uncertainty.",
    ],
    checklist: [
      "Request your dog's vet history.",
      "Compare senior age rules.",
      "Ask about dental and chronic conditions.",
      "Budget for exclusions and excesses.",
      "Review quality of life and routine care with your vet.",
    ],
    faqs: [
      {
        question: "Can older dogs get pet insurance?",
        answer:
          "It depends on the insurer and policy. Check entry age, exclusions, waiting periods, and medical history rules directly.",
      },
      {
        question: "Is it safe to switch an older dog's policy?",
        answer:
          "Switching can create new waiting periods or exclusions. Compare carefully before cancelling existing cover.",
      },
      {
        question: "What costs should senior dog owners plan for?",
        answer:
          "Diagnostics, dental care, arthritis support, chronic medication, more frequent checkups, and emergency care can become more likely.",
      },
    ],
    related: insuranceRelated,
    sources: [sources.fsca, sources.savc],
  },
  {
    slug: "pre-existing-conditions-pet-insurance-south-africa",
    hubPath: "/insurance",
    title: "Pre-Existing Conditions and Pet Insurance in South Africa",
    seoTitle: "Pre-Existing Conditions Pet Insurance South Africa | Guide",
    description:
      "A neutral South African guide to pre-existing conditions in pet insurance, including symptoms, vet records, waiting periods, exclusions, and claim preparation.",
    summary:
      "A pre-existing condition is usually linked to signs, symptoms, diagnosis, or treatment before cover starts, but definitions differ. Read the policy wording and ask the insurer how they assess vet records.",
    context:
      "Owners often discover pre-existing condition wording only during a claim. It is better to understand it before buying, switching, or delaying vet care.",
    tableRows: [
      ["Symptom before cover", "May be considered even if diagnosis came later."],
      ["Previous treatment", "Vet notes, medicine, or follow-ups may affect claims."],
      ["Waiting period", "Symptoms during this period may be treated differently."],
      ["Related condition", "Some policies may link recurring or bilateral issues."],
      ["Medical history", "Insurers may request vet records before approving claims."],
      ["Disclosure", "Clear answers reduce claim surprises."],
    ],
    questions: [
      "How do you define pre-existing condition?",
      "Do symptoms count even without diagnosis?",
      "How far back do you review vet records?",
      "Can a condition ever be reviewed or excluded permanently?",
      "What records should I submit before claiming?",
    ],
    avoid: [
      "Do not delay a vet visit to protect future insurance.",
      "Do not omit symptoms on applications.",
      "Do not assume a new policy covers old problems.",
      "Do not switch policies without checking whether conditions reset as pre-existing.",
    ],
    checklist: [
      "Ask for the definition in writing.",
      "Keep complete vet notes and invoices.",
      "Disclose symptoms honestly.",
      "Compare waiting periods and exclusions.",
      "Budget for conditions that may not be covered.",
    ],
    faqs: [
      {
        question: "Does pre-existing always mean diagnosed?",
        answer:
          "Not always. Some wording may consider signs or symptoms before cover starts. Check the policy definition.",
      },
      {
        question: "Can I insure a dog with a pre-existing condition?",
        answer:
          "You may be able to insure other risks, but that condition may be excluded or limited. Ask the insurer directly.",
      },
      {
        question: "Should I hide symptoms?",
        answer:
          "No. Incomplete disclosure can create claim problems and does not help your dog get proper care.",
      },
    ],
    related: insuranceRelated,
    sources: [sources.fsca, sources.savc],
  },
  {
    slug: "accident-only-vs-comprehensive-pet-insurance-south-africa",
    hubPath: "/insurance",
    title: "Accident-Only vs Comprehensive Pet Insurance in South Africa",
    seoTitle: "Accident Only vs Comprehensive Pet Insurance South Africa",
    description:
      "A neutral comparison of accident-only and comprehensive pet insurance for South African dog owners, including illness cover, exclusions, premiums, and limits.",
    summary:
      "Accident-only cover may help with injuries but can leave illness costs outside the policy. Comprehensive cover may be broader, but owners still need to check limits, excesses, exclusions, and waiting periods.",
    context:
      "South African dogs can face accidents, tick-borne disease, parvovirus, dental issues, chronic illness, heat stress, and swallowed objects. Not every policy treats those risks the same way.",
    tableRows: [
      ["Accident-only", "Usually narrower; check what counts as an accident."],
      ["Comprehensive", "May include illness, but still has limits and exclusions."],
      ["Routine care", "Often separate or excluded; check vaccines and prevention."],
      ["Premium", "Broader cover often costs more, but price varies."],
      ["Waiting periods", "Illness waiting periods may differ from accident cover."],
      ["Emergency planning", "Both options may still require upfront payment or excess."],
    ],
    questions: [
      "What exactly is an accident under this policy?",
      "Are illnesses, tick-borne diseases, parvo, and chronic conditions included?",
      "Are diagnostics, hospitalisation, and medicine covered?",
      "What is excluded even under comprehensive cover?",
      "Could I afford uncovered illness costs?",
    ],
    avoid: [
      "Do not assume accident-only covers poisoning, illness, or infections.",
      "Do not assume comprehensive means unlimited.",
      "Do not skip reading exclusions because the product name sounds broad.",
      "Do not forget excesses and annual limits.",
    ],
    checklist: [
      "List your top risks.",
      "Compare cover categories.",
      "Check limits and excesses.",
      "Ask about illness examples relevant to South Africa.",
      "Keep an emergency fund either way.",
    ],
    faqs: [
      {
        question: "Is accident-only enough?",
        answer:
          "It depends on your budget and risk tolerance. It may not help with illness, so compare the wording carefully.",
      },
      {
        question: "Does comprehensive cover everything?",
        answer:
          "No. Comprehensive policies still have exclusions, limits, waiting periods, and claim rules.",
      },
      {
        question: "Which option is better for puppies?",
        answer:
          "That depends on policy wording, waiting periods, puppy risk, and your finances. DogHaven does not provide personalised advice.",
      },
    ],
    related: insuranceRelated,
    sources: [sources.fsca, sources.savc],
  },
  {
    slug: "pet-insurance-excesses-and-limits-south-africa",
    hubPath: "/insurance",
    title: "Pet Insurance Excesses and Limits in South Africa",
    seoTitle: "Pet Insurance Excesses and Limits South Africa | Guide",
    description:
      "A plain-English guide to pet insurance excesses, annual limits, per-condition limits, sub-limits, co-payments, and claim-time costs in South Africa.",
    summary:
      "Excesses and limits decide how much insurance actually helps at claim time. A policy can look generous until you compare annual caps, per-condition limits, sub-limits, and your share of the bill.",
    context:
      "South African vet bills can involve consults, blood tests, X-rays, hospitalisation, surgery, medicine, and follow-ups. Different limits may apply to each part of a claim.",
    tableRows: [
      ["Fixed excess", "A set amount you pay per claim or event."],
      ["Percentage excess", "A percentage of the claim you pay yourself."],
      ["Annual limit", "Maximum payable across the policy year."],
      ["Per-condition limit", "Maximum payable for one illness or injury."],
      ["Sub-limit", "A cap for categories such as dental, diagnostics, or medicine."],
      ["Co-payment", "Your share of costs after insurer calculations."],
    ],
    questions: [
      "Is the excess fixed, percentage-based, or both?",
      "Does the excess apply per claim, per condition, or per year?",
      "Are there sub-limits for diagnostics, dental, medication, or hospital care?",
      "What happens when a claim exceeds the annual limit?",
      "Can limits change at renewal?",
    ],
    avoid: [
      "Do not compare only total annual limit.",
      "Do not ignore percentage excesses on large bills.",
      "Do not assume all parts of a vet invoice fall under the same limit.",
      "Do not forget VAT, admin, or non-covered items if the policy excludes them.",
    ],
    checklist: [
      "Highlight every limit in the benefit schedule.",
      "Calculate your share on a large hypothetical bill.",
      "Ask how multiple visits for one condition are handled.",
      "Check dental and chronic-care sub-limits.",
      "Review limits before renewal.",
    ],
    faqs: [
      {
        question: "Is a high annual limit always better?",
        answer:
          "It may help, but per-condition limits, exclusions, and excesses can matter just as much.",
      },
      {
        question: "What is more important: premium or excess?",
        answer:
          "Both matter. A low premium with a high excess may be difficult during a large emergency.",
      },
      {
        question: "Can excesses change?",
        answer:
          "Policy terms can change. Check current documents and renewal notices directly.",
      },
    ],
    related: insuranceRelated,
    sources: [sources.fsca],
  },
  {
    slug: "pet-insurance-claims-checklist-south-africa",
    hubPath: "/insurance",
    title: "Pet Insurance Claims Checklist for South African Dog Owners",
    seoTitle: "Pet Insurance Claims Checklist South Africa | Dog Owners",
    description:
      "A practical claims checklist for South African dog owners, covering vet invoices, clinical notes, claim forms, policy numbers, waiting periods, and follow-ups.",
    summary:
      "A smoother pet insurance claim usually starts before the emergency: know the claim process, keep vet records, save invoices, and ask the insurer what documents they need.",
    context:
      "During a vet emergency, owners may be stressed and short on time. A simple claims folder can reduce admin pressure after treatment.",
    tableRows: [
      ["Policy number", "Keep it with emergency contacts."],
      ["Vet invoice", "Usually needed for reimbursement."],
      ["Clinical notes", "May be requested to assess condition history."],
      ["Claim form", "Check whether owner and vet sections are needed."],
      ["Proof of payment", "May be needed if you paid the clinic upfront."],
      ["Follow-up invoices", "Submit according to insurer timing rules."],
    ],
    questions: [
      "Do I need pre-authorisation for planned treatment?",
      "Can the insurer pay the vet directly or must I pay first?",
      "What is the claim deadline?",
      "What documents are needed for emergency claims?",
      "How do I appeal or query a rejected claim?",
    ],
    avoid: [
      "Do not delay urgent vet care while searching for policy wording.",
      "Do not submit incomplete forms if the insurer requires specific fields.",
      "Do not discard invoices or medication labels.",
      "Do not assume a claim is approved until confirmed.",
    ],
    checklist: [
      "Save insurer contact and policy number.",
      "Ask the vet for itemised invoices.",
      "Request clinical notes if needed.",
      "Submit within the claim deadline.",
      "Keep copies of all correspondence.",
      "Track claim reference numbers.",
    ],
    faqs: [
      {
        question: "Should I phone the insurer before treatment?",
        answer:
          "For planned treatment, ask about pre-authorisation. For emergencies, prioritise veterinary care and contact the insurer as soon as practical.",
      },
      {
        question: "Why do insurers ask for vet history?",
        answer:
          "They may need to assess waiting periods, pre-existing conditions, and whether the claim falls within policy wording.",
      },
      {
        question: "What if a claim is rejected?",
        answer:
          "Ask for the reason in writing, compare it with the policy wording, provide missing documents if relevant, and use the insurer's complaint process if needed.",
      },
    ],
    related: insuranceRelated,
    sources: [sources.fsca, sources.savc],
  },
  {
    slug: "dog-breeds-and-pet-insurance-costs-south-africa",
    hubPath: "/insurance",
    title: "Dog Breeds and Pet Insurance Costs in South Africa",
    seoTitle: "Dog Breeds and Pet Insurance Costs South Africa | Guide",
    description:
      "A neutral guide to how breed, size, age, hereditary risks, heat sensitivity, and vet-cost factors can affect pet insurance questions in South Africa.",
    summary:
      "Breed can affect insurance questions because size, hereditary risks, heat sensitivity, dental issues, joint problems, and treatment costs can differ. Do not choose a breed without budgeting for health and insurance tradeoffs.",
    context:
      "South African owners often compare breeds by appearance or security expectations, but insurance and vet-cost planning should be part of breed choice too.",
    tableRows: [
      ["Large breeds", "Food, medication, surgery, and imaging can cost more because size matters."],
      ["Flat-faced breeds", "Heat and breathing concerns may affect vet planning and policy questions."],
      ["Small breeds", "Dental care, fragility, and luxating patella questions may matter."],
      ["Working breeds", "Activity, injury risk, and behaviour support may affect costs."],
      ["Pedigree dogs", "Ask about hereditary conditions and health testing."],
      ["Mixed breeds", "Still budget by size, age, activity, and individual health."],
    ],
    questions: [
      "Does the policy treat breed-related or hereditary conditions differently?",
      "Are bilateral conditions handled as one condition?",
      "Are cruciate, hip, elbow, dental, or airway issues limited?",
      "Will premiums or excesses change with age or breed?",
      "What health questions should I ask a breeder, shelter, or vet?",
    ],
    avoid: [
      "Do not choose a breed only for status or protection.",
      "Do not assume mixed-breed dogs have no health costs.",
      "Do not ignore heat sensitivity in South African summers.",
      "Do not skip breeder verification and health questions.",
    ],
    checklist: [
      "Read breed guide before committing.",
      "Ask insurers breed-specific questions.",
      "Discuss common health concerns with a vet.",
      "Budget for grooming, food, training, and emergency care.",
      "Keep adoption or breeder paperwork and vet records.",
    ],
    faqs: [
      {
        question: "Do insurers charge more for some breeds?",
        answer:
          "Pricing rules differ by insurer and can change. Ask each insurer directly how breed, age, and health history affect premiums and exclusions.",
      },
      {
        question: "Are mixed-breed dogs cheaper to insure?",
        answer:
          "Not always. Size, age, health, and policy wording still matter.",
      },
      {
        question: "Should breed choice include insurance planning?",
        answer:
          "Yes. Breed affects size, grooming, training, health questions, and possible vet costs.",
      },
    ],
    related: [
      { title: "Breed Guides", description: "Choose by fit, not hype.", href: "/breeds" },
      { title: "Best Breeds for South African Homes", description: "Compare climate, space, exercise, and costs.", href: "/breeds/best-dog-breeds-for-south-african-homes" },
      ...insuranceRelated,
    ],
    sources: [sources.fsca, sources.savc],
  },
];

const costGuides: MoneyGuide[] = [
  {
    slug: "dog-vaccination-costs-south-africa",
    hubPath: "/costs",
    title: "Dog Vaccination Costs in South Africa",
    seoTitle: "Dog Vaccination Costs South Africa | Budget Guide",
    description:
      "A cautious South African guide to budgeting for dog vaccination costs, puppy vaccine visits, rabies, boosters, vet consults, and records.",
    summary:
      "Vaccination costs vary by vet, city, vaccine type, puppy schedule, and whether a consult or health check is included. Ask your vet for a current quote and keep records safe.",
    context:
      "Vaccines are prevention costs, not optional extras. Puppies usually need several visits, while adults need boosters according to vet guidance and rabies responsibilities.",
    tableRows: [
      ["Puppy series", "Several visits may be needed; ask what each visit includes."],
      ["Rabies", "A legal and public health responsibility; keep proof available."],
      ["Adult boosters", "Timing depends on vaccine, risk, and vet advice."],
      ["Consult fee", "Some clinics include or separate health checks and vaccine fees."],
      ["Records", "Useful for boarding, grooming, travel, adoption, and bite incidents."],
      ["Travel", "Extra paperwork may be needed for certain trips or borders."],
    ],
    questions: [
      "What vaccines are recommended for my dog?",
      "Is the consult included in the quote?",
      "When is the next booster due?",
      "What side effects should prompt a call?",
      "Do I need proof for travel, boarding, grooming, or adoption paperwork?",
    ],
    avoid: [
      "Do not skip rabies or core vaccine planning to save money.",
      "Do not assume one puppy injection completes the schedule.",
      "Do not lose the vaccine card.",
      "Do not take incompletely vaccinated puppies into risky public areas without vet guidance.",
    ],
    checklist: [
      "Request a current quote from your vet.",
      "Ask for the full puppy schedule.",
      "Set booster reminders.",
      "Photograph vaccine records.",
      "Budget for parasite prevention at the same visits.",
    ],
    faqs: [
      {
        question: "Can DogHaven tell me current vaccine prices?",
        answer:
          "No. Prices vary by clinic and change over time. Ask your vet for a current quote.",
      },
      {
        question: "Are puppy vaccines more expensive than adult boosters?",
        answer:
          "The first year can cost more because puppies often need multiple visits and checks.",
      },
      {
        question: "Is rabies vaccination optional?",
        answer:
          "No. Rabies vaccination is a serious legal and public health responsibility in South Africa.",
      },
    ],
    related: [
      { title: "Vaccination Schedule", description: "Plan vaccine timing with your vet.", href: "/health/vaccination-schedule-south-africa" },
      { title: "Rabies Law", description: "Rabies records and responsibilities.", href: "/laws/rabies-vaccination-law-south-africa" },
      ...costRelated,
    ],
    sources: [sources.savc, sources.sava],
  },
  {
    slug: "dog-sterilisation-cost-south-africa",
    hubPath: "/costs",
    title: "Dog Sterilisation Cost in South Africa",
    seoTitle: "Dog Sterilisation Cost South Africa | Budget Questions",
    description:
      "A cautious guide to dog sterilisation cost factors in South Africa, including dog size, sex, age, clinic type, blood tests, pain relief, and aftercare.",
    summary:
      "Sterilisation costs vary by dog size, sex, age, health, clinic, anaesthetic needs, blood tests, pain relief, and aftercare. Ask your vet what is included before comparing quotes.",
    context:
      "Shelters and rescues may have sterilisation policies, while private vets quote according to their clinical protocols. The lowest quote is not always the safest comparison if inclusions differ.",
    tableRows: [
      ["Dog size", "Larger dogs may need more anaesthetic time, medicine, and surgical resources."],
      ["Sex", "Spay and neuter procedures differ."],
      ["Age and health", "Older or unwell dogs may need extra checks."],
      ["Blood tests", "May be recommended before anaesthesia."],
      ["Pain relief", "Ask what medication and follow-up are included."],
      ["Aftercare", "Cone, wound checks, and complication plans can affect total cost."],
    ],
    questions: [
      "What exactly is included in the quote?",
      "Is pre-anaesthetic blood work recommended?",
      "What pain relief is included?",
      "What follow-up or wound check is included?",
      "What should I do if swelling, bleeding, or lethargy occurs?",
    ],
    avoid: [
      "Do not compare quotes without comparing inclusions.",
      "Do not delay urgent vet advice after surgery complications.",
      "Do not let the dog lick or chew the wound.",
      "Do not ignore rescue or adoption sterilisation terms.",
    ],
    checklist: [
      "Ask for an itemised quote.",
      "Discuss timing with your vet.",
      "Prepare a quiet recovery space.",
      "Budget for aftercare and transport.",
      "Follow post-op instructions carefully.",
    ],
    faqs: [
      {
        question: "Why do sterilisation quotes vary?",
        answer:
          "Procedure type, dog size, clinic protocols, medicine, blood work, and aftercare can all differ.",
      },
      {
        question: "Should I choose the cheapest sterilisation quote?",
        answer:
          "Not without understanding what is included and whether the clinic's veterinary care standards are appropriate.",
      },
      {
        question: "When should a dog be sterilised?",
        answer:
          "Timing depends on the dog. Discuss age, breed, health, behaviour, and risk factors with your vet.",
      },
    ],
    related: costRelated,
    sources: [sources.savc, sources.sava],
  },
  {
    slug: "dog-dental-cleaning-cost-south-africa",
    hubPath: "/costs",
    title: "Dog Dental Cleaning Cost in South Africa",
    seoTitle: "Dog Dental Cleaning Cost South Africa | Vet Budget Guide",
    description:
      "A cautious South African guide to dog dental cleaning cost factors, anaesthesia, extractions, dental X-rays, aftercare, prevention, and insurance questions.",
    summary:
      "Dog dental costs depend on the severity of dental disease, anaesthesia, extractions, dental X-rays, medicine, and follow-up care. A quick quote may change after a vet examines the mouth.",
    context:
      "Small breeds, older dogs, and dogs with bad breath, loose teeth, pain, or tartar may need dental care. Dental exclusions are also common insurance questions.",
    tableRows: [
      ["Scale and polish", "May be routine or part of a larger dental procedure."],
      ["Anaesthesia", "Usually needed for proper veterinary dental work."],
      ["Extractions", "Can change cost significantly."],
      ["Dental X-rays", "May be recommended to assess roots and hidden disease."],
      ["Medication", "Pain relief or antibiotics may be prescribed when appropriate."],
      ["Prevention", "Brushing and vet checks can reduce severe disease risk."],
    ],
    questions: [
      "Does the quote include anaesthesia and monitoring?",
      "Could extractions change the estimate?",
      "Are dental X-rays available or recommended?",
      "What home care is safe for my dog?",
      "Does my insurance policy cover dental treatment?",
    ],
    avoid: [
      "Do not ignore bad breath, loose teeth, swelling, or eating pain.",
      "Do not use human toothpaste.",
      "Do not assume anaesthesia-free cleaning solves disease under the gumline.",
      "Do not wait until the dog stops eating.",
    ],
    checklist: [
      "Book a dental assessment.",
      "Ask for estimate ranges and possible add-ons.",
      "Discuss anaesthesia risk.",
      "Check insurance dental wording.",
      "Start vet-approved home care early.",
    ],
    faqs: [
      {
        question: "Why can dental estimates change?",
        answer:
          "The vet may only see the full extent of disease once the dog is under anaesthesia and the mouth is examined properly.",
      },
      {
        question: "Is bad breath normal in dogs?",
        answer:
          "Persistent bad breath can indicate dental disease or other health concerns. Ask a vet.",
      },
      {
        question: "Does insurance cover dental cleaning?",
        answer:
          "It depends on policy wording, exclusions, routine-care add-ons, and dental conditions. Ask the insurer directly.",
      },
    ],
    related: [
      { title: "Dog Bad Breath", description: "When mouth odour needs a vet check.", href: "/health/dog-bad-breath-south-africa" },
      ...costRelated,
    ],
    sources: [sources.savc, sources.sava],
  },
  {
    slug: "dog-xray-surgery-and-hospital-costs-south-africa",
    hubPath: "/costs",
    title: "Dog X-Ray, Surgery, and Hospital Costs in South Africa",
    seoTitle: "Dog X-Ray Surgery Hospital Costs South Africa | Budget Guide",
    description:
      "A cautious guide to South African dog diagnostic, surgery, and hospital cost factors, including X-rays, blood tests, anaesthesia, referral, and insurance.",
    summary:
      "X-rays, surgery, and hospital care can become expensive because they combine staff time, equipment, anaesthesia, medication, monitoring, and follow-up. Ask for an estimate range and what could change it.",
    context:
      "Costs can vary widely between routine daytime care, after-hours emergency care, specialist referral, and hospitalisation. Dog size, injury severity, and complications also matter.",
    tableRows: [
      ["X-rays", "May include sedation, positioning, multiple views, and interpretation."],
      ["Blood tests", "Often used before anaesthesia or to assess illness."],
      ["Surgery", "Cost depends on procedure, time, equipment, and risk."],
      ["Hospitalisation", "Monitoring, fluids, medicine, and nursing time add cost."],
      ["Referral", "Specialists and advanced imaging can cost more."],
      ["Follow-up", "Rechecks, bandage changes, medication, and rehab may continue after discharge."],
    ],
    questions: [
      "What is included in the estimate?",
      "What could make the cost higher?",
      "Is this urgent or can I consider options?",
      "Is referral recommended?",
      "How does my insurance handle pre-authorisation or claims?",
    ],
    avoid: [
      "Do not delay emergency care while waiting for exact certainty.",
      "Do not compare surgery quotes without comparing clinical risk and inclusions.",
      "Do not skip follow-up care after discharge.",
      "Do not assume insurance pays the vet directly.",
    ],
    checklist: [
      "Ask for an estimate range.",
      "Ask what decisions may be needed during treatment.",
      "Contact insurer early if insured.",
      "Keep invoices and clinical notes.",
      "Plan transport and aftercare.",
    ],
    faqs: [
      {
        question: "Why are surgery and hospital costs hard to predict?",
        answer:
          "The final cost can depend on findings during diagnostics or surgery, complications, length of stay, medicine, and follow-up needs.",
      },
      {
        question: "Should I get a second opinion?",
        answer:
          "For non-urgent decisions, you can ask about referral or second opinions. For emergencies, stabilising the dog may come first.",
      },
      {
        question: "What should insured owners do?",
        answer:
          "Check pre-authorisation, claim documents, excesses, limits, and whether you pay the vet upfront.",
      },
    ],
    related: costRelated,
    sources: [sources.savc],
  },
  {
    slug: "how-to-budget-for-emergency-vet-bills-south-africa",
    hubPath: "/costs",
    title: "How to Budget for Emergency Vet Bills in South Africa",
    seoTitle: "Emergency Vet Bills South Africa | Dog Budget Guide",
    description:
      "A practical guide to budgeting for emergency vet bills in South Africa, including savings buffers, insurance, after-hours care, quotes, and welfare-safe decisions.",
    summary:
      "Emergency vet bills are stressful because they happen quickly. Build a buffer, understand your insurance if you have it, save emergency contacts, and know how to ask vets clear cost questions without delaying urgent care.",
    context:
      "Poisoning, heatstroke, snakebite, parvovirus, car accidents, bite wounds, bloat, and sudden collapse can all need urgent care. After-hours treatment may involve different fees and faster decisions.",
    tableRows: [
      ["Emergency fund", "Dedicated savings for excesses, exclusions, or uninsured care."],
      ["Insurance", "Can help, but check waiting periods, limits, and claim process."],
      ["After-hours clinic", "May cost more than routine daytime care."],
      ["Stabilisation", "Initial care may be needed before a full estimate is possible."],
      ["Payment process", "Ask whether payment is upfront, staged, or claim-based."],
      ["Follow-up", "Recovery costs can continue after discharge."],
    ],
    questions: [
      "What is urgent right now?",
      "What is the estimate range for stabilisation?",
      "What could change the estimate?",
      "Can you explain essential versus optional steps?",
      "What documents do I need for insurance?",
    ],
    avoid: [
      "Do not wait with severe symptoms because of cost uncertainty.",
      "Do not give human medication to reduce vet costs.",
      "Do not assume one emergency ends at the first visit.",
      "Do not rely only on insurance without savings for excesses or exclusions.",
    ],
    checklist: [
      "Save regular and emergency vet contacts.",
      "Keep vaccination and insurance records accessible.",
      "Build a monthly emergency buffer.",
      "Know your policy limits and excess.",
      "Ask for written estimates when practical.",
      "Keep all invoices and notes.",
    ],
    faqs: [
      {
        question: "How much should I save for emergency vet care?",
        answer:
          "There is no single number. Build what you can, review your dog's risk, and ask local vets about typical emergency estimate ranges.",
      },
      {
        question: "Can I ask a vet about cost during an emergency?",
        answer:
          "Yes. Ask calmly what is urgent, what the estimate range is, and what could change, while still prioritising the dog's welfare.",
      },
      {
        question: "Does insurance remove the need for savings?",
        answer:
          "No. You may still need to pay excesses, exclusions, upfront costs, or amounts over limits.",
      },
    ],
    related: [
      { title: "Dog Poisoning", description: "Urgent toxin guidance.", href: "/emergency/dog-poisoning-south-africa" },
      { title: "Compare Insurance", description: "Check cover before emergencies.", href: "/insurance/compare-dog-insurance-south-africa" },
      ...costRelated,
    ],
    sources: [sources.savc, sources.fsca],
  },
  {
    slug: "dog-cost-calculator-south-africa",
    hubPath: "/costs",
    title: "Dog Cost Calculator for South Africa",
    seoTitle: "Dog Cost Calculator South Africa | Monthly Budget Estimator",
    description:
      "A simple South African dog cost calculator guide to estimate monthly planning costs for food, grooming, insurance, vet care, parasite control, and training.",
    summary:
      "Use this calculator as a planning estimate, not a quote. Real monthly dog costs vary by dog size, health, city, food choice, vet practice, grooming needs, insurance, and inflation.",
    context:
      "A good dog budget separates routine monthly costs from annual prevention and emergency care. The calculator below does not collect personal information or use third-party scripts.",
    tableRows: [
      ["Dog size", "Affects food, medicine, equipment, transport, and some surgery costs."],
      ["Food level", "Choose a realistic budget that still suits life stage and health."],
      ["Grooming", "Coat type and temperament affect frequency and cost."],
      ["Insurance", "Premiums vary; also budget for excesses and exclusions."],
      ["Routine vet buffer", "Vaccines, checkups, parasite control, and small illnesses still need planning."],
      ["Training and extras", "Classes, enrichment, daycare, walkers, toys, and replacements can add up."],
    ],
    questions: [
      "What does my local vet charge for routine care?",
      "How much does my chosen food cost per month for my dog's size?",
      "Will this coat need professional grooming?",
      "Will I insure, save, or do both?",
      "What emergency buffer can I build monthly?",
    ],
    avoid: [
      "Do not treat the calculator as a guaranteed quote.",
      "Do not budget only for food.",
      "Do not skip parasite prevention, vaccines, or vet checks to make the number lower.",
      "Do not ignore first-year puppy costs.",
    ],
    checklist: [
      "Enter a realistic size and care level.",
      "Compare the estimate with local quotes.",
      "Add annual costs to your monthly budget.",
      "Keep a separate emergency buffer.",
      "Review the budget when your dog ages or develops health needs.",
    ],
    faqs: [
      {
        question: "Is the calculator a quote?",
        answer:
          "No. It is an illustrative planning tool. Ask vets, groomers, trainers, insurers, and suppliers for current quotes.",
      },
      {
        question: "Why use ranges?",
        answer:
          "Dog costs vary widely by area, dog size, health, lifestyle, and provider. Ranges are safer than pretending one price fits everyone.",
      },
      {
        question: "Does the calculator collect my information?",
        answer:
          "No. It runs in the browser and does not ask for your name, email, or personal details.",
      },
    ],
    related: costRelated,
    sources: [sources.savc, sources.fsca],
  },
];

function hubTitle(hubPath: MoneyGuide["hubPath"]) {
  return hubPath === "/insurance" ? "Dog Insurance" : "Dog Costs";
}

function toGuide(guide: MoneyGuide): GuideContent {
  const isInsurance = guide.hubPath === "/insurance";

  return {
    slug: guide.slug,
    path: `${guide.hubPath}/${guide.slug}`,
    hubTitle: hubTitle(guide.hubPath),
    hubPath: guide.hubPath,
    title: guide.title,
    seoTitle: guide.seoTitle,
    description: guide.description,
    intro: guide.summary,
    updated: reviewed,
    quickFacts: [
      isInsurance
        ? "DogHaven does not provide financial advice, broker services, insurer rankings, or personalised recommendations."
        : "DogHaven cost guides are educational planning tools, not clinic quotes or current price lists.",
      "Policy wording, premiums, exclusions, waiting periods, vet fees, and provider prices can change.",
      guide.summary,
      "Check current documents and request quotes directly before making a money decision.",
    ],
    sections: [
      {
        heading: "South African context",
        body: [
          guide.context,
          isInsurance
            ? "Use this guide to prepare better questions for insurers and vets. Your final decision should be based on current policy wording, your dog's records, and your own financial situation."
            : "Use this guide to plan conversations with vets, groomers, trainers, insurers, shelters, and suppliers. Real costs vary by city, clinic, dog size, health, procedure, and inflation.",
        ],
      },
      {
        heading: isInsurance ? "Comparison table" : "Budget table",
        body: [
          "Tables are a starting point for comparison, not a substitute for current quotes or policy documents.",
        ],
        table: {
          headers: [isInsurance ? "Policy factor" : "Cost factor", "Why it matters"],
          rows: guide.tableRows,
        },
      },
      {
        heading: "Questions to ask",
        body: [
          isInsurance
            ? "Ask insurers direct questions and keep written answers with the policy wording."
            : "Ask providers for itemised estimates so you can compare what is actually included.",
        ],
        checklist: guide.questions,
      },
      {
        heading: "What owners should avoid",
        body: [
          "Money decisions become riskier when owners rely on assumptions, old adverts, vague answers, or incomplete records.",
        ],
        bullets: guide.avoid,
      },
      {
        heading: "Practical checklist",
        body: [
          "Use this checklist before choosing a policy, planning a procedure, or deciding how much to save monthly.",
        ],
        checklist: guide.checklist,
      },
      {
        heading: "Helpful internal next steps",
        body: [
          "Insurance and cost planning connects to everyday care: prevention, food, breed choice, puppy planning, and emergency preparation all affect the budget.",
        ],
        bullets: guide.related.map((item) => `${item.title}: ${item.description}`),
      },
    ],
    faqs: guide.faqs,
    related: guide.related,
    sources: guide.sources,
  };
}

export const phase14GuidePages: GuideContent[] = [...insuranceGuides, ...costGuides].map(toGuide);

export const phase14InsuranceCards: CardLink[] = insuranceGuides.map((guide) => ({
  title: guide.title,
  description: guide.description,
  href: `/insurance/${guide.slug}`,
}));

export const phase14CostCards: CardLink[] = costGuides.map((guide) => ({
  title: guide.title,
  description: guide.description,
  href: `/costs/${guide.slug}`,
}));

export const phase14BreedCards: CardLink[] = [
  {
    title: "Breed and Insurance Costs",
    description: "How size, age, health, and breed-risk questions can affect insurance planning.",
    href: "/insurance/dog-breeds-and-pet-insurance-costs-south-africa",
  },
  {
    title: "X-Ray, Surgery, and Hospital Costs",
    description: "Why large dogs and complex treatment can change vet-cost planning.",
    href: "/costs/dog-xray-surgery-and-hospital-costs-south-africa",
  },
];

export const phase14PuppyCards: CardLink[] = [
  {
    title: "Puppy Insurance",
    description: "Compare waiting periods, records, and first-year policy questions.",
    href: "/insurance/dog-insurance-for-puppies-south-africa",
  },
  {
    title: "Puppy First-Year Costs",
    description: "Plan vaccines, food, training, gear, and emergency buffers.",
    href: "/costs/puppy-first-year-cost-south-africa",
  },
];

export const phase14HealthCards: CardLink[] = [
  {
    title: "Vet Cost Planning",
    description: "Budget for diagnostics, dental care, vaccines, and hospital visits.",
    href: "/costs/dog-xray-surgery-and-hospital-costs-south-africa",
  },
  {
    title: "Dental Cleaning Costs",
    description: "Understand dental estimates, anaesthesia, and exclusions.",
    href: "/costs/dog-dental-cleaning-cost-south-africa",
  },
];

export const phase14EmergencyCards: CardLink[] = [
  {
    title: "Emergency Vet Bill Budget",
    description: "Plan savings, insurance records, and after-hours cost questions.",
    href: "/costs/how-to-budget-for-emergency-vet-bills-south-africa",
  },
  {
    title: "Claims Checklist",
    description: "Keep documents ready for urgent insurance claims.",
    href: "/insurance/pet-insurance-claims-checklist-south-africa",
  },
];

export function getPhase14Guide(slug: string) {
  return phase14GuidePages.find((guide) => guide.slug === slug);
}

export function getPhase14GuidesByHub(hubPath: "/insurance" | "/costs") {
  return phase14GuidePages.filter((guide) => guide.hubPath === hubPath);
}
