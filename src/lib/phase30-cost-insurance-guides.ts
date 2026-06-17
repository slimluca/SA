import type { CardLink, GuideContent, Source } from "@/lib/content";

type MoneyGuide = {
  slug: string;
  hubPath: "/costs" | "/insurance";
  title: string;
  seoTitle: string;
  description: string;
  intro: string;
  quickFacts: string[];
  context: string[];
  factors: string[][];
  questions: string[];
  warnings: string[];
  checklist: string[];
  faqs: GuideContent["faqs"];
  related: CardLink[];
  sources?: Source[];
};

const reviewed = "2026-06-17";

const costSources: Source[] = [
  {
    label: "South African Veterinary Council",
    href: "https://savc.org.za/",
    note: "South African veterinary professional context for registered veterinary care.",
  },
  {
    label: "South African Veterinary Association",
    href: "https://www.sava.co.za/",
    note: "South African veterinary profession and animal health context.",
  },
  {
    label: "MSD Veterinary Manual",
    href: "https://www.msdvetmanual.com/",
    note: "Veterinary reference for diagnostics, surgery, symptoms, and treatment-planning context.",
  },
];

const insuranceSources: Source[] = [
  {
    label: "Financial Sector Conduct Authority",
    href: "https://www.fsca.co.za/",
    note: "Official South African financial-sector conduct regulator context.",
  },
  {
    label: "South African Veterinary Council",
    href: "https://savc.org.za/",
    note: "South African veterinary professional context for care records, vet visits, and veterinary treatment planning.",
  },
  {
    label: "South African Veterinary Association",
    href: "https://www.sava.co.za/",
    note: "South African veterinary profession and animal health context.",
  },
];

const costRelated: CardLink[] = [
  { title: "Dog Cost Calculator", description: "Estimate monthly dog ownership categories without sharing personal data.", href: "/tools/dog-cost-calculator" },
  { title: "Vet Costs for Dogs", description: "Understand routine and diagnostic vet cost factors.", href: "/costs/vet-costs-for-dogs-south-africa" },
  { title: "Cost of Owning a Dog", description: "Plan monthly and annual dog ownership costs.", href: "/costs/cost-of-owning-a-dog-south-africa" },
  { title: "Find a Vet", description: "How to choose veterinary care without fake clinic listings.", href: "/health/find-a-vet-south-africa" },
  { title: "Emergency Hub", description: "Urgent symptoms and emergency planning.", href: "/emergency" },
];

const insuranceRelated: CardLink[] = [
  { title: "Pet Insurance for Dogs", description: "Plain-English insurance basics for South African owners.", href: "/insurance/pet-insurance-for-dogs-south-africa" },
  { title: "Dog Insurance Waiting Periods", description: "Understand when cover may start.", href: "/insurance/dog-insurance-waiting-periods-south-africa" },
  { title: "Is Pet Insurance Worth It?", description: "Neutral budgeting questions without insurer rankings.", href: "/insurance/is-pet-insurance-worth-it-south-africa" },
  { title: "Emergency Vet Costs", description: "Cost factors for urgent care and after-hours treatment.", href: "/costs/emergency-vet-costs-south-africa" },
  { title: "Dog Cost Calculator", description: "Estimate broad monthly budget categories.", href: "/tools/dog-cost-calculator" },
];

const costSafety = [
  "Costs can vary widely by clinic, city, urgency, the dog's condition, diagnostics, medication, and hospitalisation.",
  "Ask for an estimate before non-emergency treatment. In an emergency, stabilising the dog comes first; request a written estimate as soon as practical.",
  "This guide does not publish unsupported prices or national averages. Use it to ask clearer questions and plan better.",
];

const insuranceSafety = [
  "This guide is educational and is not financial advice.",
  "Policy wording matters more than marketing wording. Read the schedule, limits, exclusions, waiting periods, and claim rules.",
  "DogHaven compares policy concepts without placing insurers in an order or promoting one above another.",
];

const costGuides: MoneyGuide[] = [
  {
    slug: "dog-surgery-costs-south-africa",
    hubPath: "/costs",
    title: "Dog Surgery Costs in South Africa",
    seoTitle: "Dog Surgery Costs South Africa | Vet Bill Factors and Questions",
    description:
      "Understand dog surgery cost factors in South Africa, including anaesthetic, diagnostics, hospitalisation, medication, follow-ups, urgency, and insurance questions.",
    intro:
      "Dog surgery costs can feel overwhelming because the final bill depends on far more than the operation name. This guide helps South African owners understand what affects a surgical estimate and what to ask before non-emergency treatment.",
    quickFacts: [
      ...costSafety,
      "Emergency surgery, specialist referral, complications, large dogs, and overnight care can change the estimate significantly.",
    ],
    context: [
      "Surgery costs are influenced by the clinic, city or town, whether the procedure is routine or urgent, the dog's size and health, and whether extra diagnostics are needed before anaesthetic.",
      "For planned surgery, ask for an itemised estimate. For emergency surgery, ask the vet what must happen immediately, what can be estimated now, and what may change during treatment.",
    ],
    factors: [
      ["Consult and assessment", "The vet may need to examine the dog, assess pain, and decide whether the case is routine, urgent, or referral-level."],
      ["Diagnostics", "Blood tests, x-rays, ultrasound, or other tests may be needed before surgery or anaesthetic."],
      ["Anaesthetic and monitoring", "Older dogs, sick dogs, brachycephalic breeds, and complicated cases may need closer monitoring."],
      ["Procedure complexity", "A straightforward wound repair differs from abdominal surgery, fracture repair, or foreign-body surgery."],
      ["Hospitalisation", "Overnight care, fluids, nursing, and repeat checks can change the bill."],
      ["Medication and follow-ups", "Pain relief, antibiotics where appropriate, wound checks, bandage changes, and rechecks may be separate items."],
    ],
    questions: [
      "What is included in the estimate and what may be billed separately?",
      "Is blood work or imaging recommended before anaesthetic?",
      "Is this procedure routine, urgent, or referral-level?",
      "How will pain control, monitoring, and recovery be handled?",
      "What complications or extra costs are possible?",
      "What aftercare visits should I budget for?",
    ],
    warnings: [
      "Do not delay urgent surgery for bloat signs, severe trauma, internal bleeding concern, obstruction concern, or uncontrolled pain.",
      "Do not choose only by the lowest quote if monitoring, pain control, or follow-up care is unclear.",
      "Do not give human painkillers before surgery unless your vet specifically instructs you.",
    ],
    checklist: [
      "Ask for an itemised estimate for planned procedures.",
      "Check whether emergency or after-hours fees apply.",
      "Ask whether a specialist referral may be needed.",
      "Keep insurance policy details and claim forms ready if insured.",
      "Prepare transport, recovery space, and follow-up appointment time.",
    ],
    faqs: [
      {
        question: "Why can dog surgery costs vary so much?",
        answer:
          "Costs vary because surgery can involve different diagnostics, anaesthetic time, monitoring, procedure complexity, hospitalisation, medication, and follow-up care.",
      },
      {
        question: "Should I ask for a written estimate?",
        answer:
          "Yes for non-emergency treatment. In an emergency, ask for an estimate as soon as practical while the vet focuses on stabilising your dog.",
      },
      {
        question: "Can insurance cover dog surgery?",
        answer:
          "It depends on the policy wording, waiting periods, exclusions, limits, excesses, and whether the condition is pre-existing.",
      },
    ],
    related: [
      { title: "Bloat in Dogs", description: "Emergency surgery may be needed if bloat is suspected.", href: "/emergency/bloat-in-dogs-south-africa" },
      { title: "Dog Insurance for Emergencies", description: "Questions to ask before relying on cover.", href: "/insurance/dog-insurance-for-emergencies-south-africa" },
      { title: "After-Hours Vet Costs", description: "Why timing and urgency can change vet bills.", href: "/costs/after-hours-vet-costs-south-africa" },
      ...costRelated,
    ],
  },
  {
    slug: "dog-x-ray-cost-south-africa",
    hubPath: "/costs",
    title: "Dog X-Ray Costs in South Africa",
    seoTitle: "Dog X-Ray Cost South Africa | Vet Imaging Cost Factors",
    description:
      "A practical guide to dog x-ray cost factors in South Africa, including sedation, views, injury, surgery planning, emergency timing, and what to ask the vet.",
    intro:
      "A dog x-ray estimate depends on why the x-ray is needed, how many images are required, whether sedation is needed, and whether the case is routine or urgent.",
    quickFacts: [
      ...costSafety,
      "X-rays are often one part of a bigger diagnostic plan, especially after trauma, limping, breathing concerns, bloat signs, or swallowed-object concerns.",
    ],
    context: [
      "South African vets may recommend x-rays for limping, fractures, chest signs, abdominal pain, suspected obstruction, dental planning, or emergency assessment.",
      "The cost can change if sedation, repeat images, specialist interpretation, hospitalisation, or surgery follows the x-ray.",
    ],
    factors: [
      ["Reason for imaging", "A planned limb image differs from emergency chest, abdomen, or trauma imaging."],
      ["Number of views", "More views or multiple body areas can increase time and cost."],
      ["Sedation or anaesthetic", "Some dogs need sedation for positioning, pain control, or safety."],
      ["Emergency timing", "After-hours imaging may have different fee structures."],
      ["Follow-up treatment", "X-rays may lead to splints, surgery, medication, referral, or repeat imaging."],
      ["Dog size and pain level", "Large, painful, anxious, or injured dogs may need more staff and monitoring."],
    ],
    questions: [
      "What question is the x-ray trying to answer?",
      "How many views or body areas are planned?",
      "Will my dog need sedation or anaesthetic?",
      "Is this urgent or can it be scheduled?",
      "Could ultrasound, blood tests, or referral be needed too?",
      "Will I receive a report or copies for insurance or referral?",
    ],
    warnings: [
      "Do not delay care for trauma, severe pain, breathing difficulty, bloat signs, or suspected obstruction.",
      "Do not assume an x-ray quote includes sedation, medication, hospitalisation, or follow-up treatment.",
      "Do not give pain medication from home before asking the vet.",
    ],
    checklist: [
      "Describe the symptom clearly: limping, pain, cough, vomiting, swelling, trauma, or suspected object.",
      "Ask whether the estimate includes sedation and interpretation.",
      "Keep insurance details ready if insured.",
      "Ask what results would change the treatment plan.",
      "Ask whether a referral may be needed after imaging.",
    ],
    faqs: [
      {
        question: "Does every limping dog need an x-ray?",
        answer:
          "Not always. Your vet can examine the dog and decide whether imaging is needed based on pain, injury, age, swelling, and how the dog is moving.",
      },
      {
        question: "Is sedation always needed for dog x-rays?",
        answer:
          "No. Some dogs can be positioned safely without sedation, while painful, anxious, or complex cases may need sedation or anaesthetic.",
      },
      {
        question: "Will insurance pay for x-rays?",
        answer:
          "It depends on policy wording, limits, excesses, waiting periods, exclusions, and whether the condition is covered.",
      },
    ],
    related: [
      { title: "Dog Limping", description: "When limping needs same-day care.", href: "/health/dog-limping-south-africa" },
      { title: "Dog Surgery Costs", description: "How imaging can connect to surgery planning.", href: "/costs/dog-surgery-costs-south-africa" },
      { title: "Dog Insurance Claim Process", description: "What records may help with claims.", href: "/insurance/dog-insurance-claim-process-south-africa" },
      ...costRelated,
    ],
  },
  {
    slug: "dog-blood-test-cost-south-africa",
    hubPath: "/costs",
    title: "Dog Blood Test Costs in South Africa",
    seoTitle: "Dog Blood Test Cost South Africa | Vet Lab Cost Factors",
    description:
      "Understand dog blood test cost factors in South Africa, including sick visits, surgery checks, tick bite fever, chronic care, lab panels, and follow-up questions.",
    intro:
      "Blood tests can help vets assess illness, anaesthetic safety, organ function, infection markers, tick-borne concerns, and chronic disease. The cost depends on the reason and the type of panel needed.",
    quickFacts: [
      ...costSafety,
      "Blood tests may be urgent when a dog is weak, pale, not eating, vomiting, breathing fast, drinking excessively, or suspected of tick-borne illness.",
    ],
    context: [
      "In South Africa, blood tests may be discussed for biliary or other tick-borne concerns, parvo complications, poisoning, kidney or liver concerns, anaesthetic checks, and senior dog monitoring.",
      "Some tests may be run in-clinic, while others may be sent to a laboratory. Turnaround time and follow-up interpretation can affect the overall plan.",
    ],
    factors: [
      ["Reason for testing", "A pre-anaesthetic screen differs from a sick-dog workup or chronic monitoring panel."],
      ["Test type", "A simple screen, full blood count, chemistry panel, tick test, or specialised lab test can differ."],
      ["Urgency", "Emergency testing may be part of stabilisation and treatment decisions."],
      ["Repeat testing", "Some illnesses need follow-up tests to monitor response."],
      ["Clinic and lab process", "In-house and external lab testing may have different timelines and fees."],
      ["Other diagnostics", "Blood tests may be combined with urine tests, x-rays, ultrasound, or hospital care."],
    ],
    questions: [
      "Which blood tests are recommended and why?",
      "Will results be available today or sent to a lab?",
      "Could tick-borne disease, dehydration, organ disease, or infection be involved?",
      "Will follow-up blood tests be needed?",
      "How do the results change treatment or surgery planning?",
      "Can I get copies for insurance or future vet visits?",
    ],
    warnings: [
      "Do not delay urgent care for pale gums, collapse, severe lethargy, breathing trouble, seizures, poisoning, or suspected biliary.",
      "Do not assume one normal test rules out every condition.",
      "Do not stop medication or change treatment based on old blood results without vet guidance.",
    ],
    checklist: [
      "Bring medication names, supplements, and any toxin packaging.",
      "Tell the vet about ticks, appetite, water intake, vomiting, stool, urine, and energy changes.",
      "Ask what each test is checking.",
      "Ask whether repeat tests are likely.",
      "Keep records for insurance claims if insured.",
    ],
    faqs: [
      {
        question: "Why would my dog need blood tests before surgery?",
        answer:
          "A vet may recommend blood tests to assess anaesthetic risk, hydration, red blood cells, infection markers, and organ function before a procedure.",
      },
      {
        question: "Can blood tests show tick bite fever?",
        answer:
          "Blood tests can help a vet assess tick-borne concerns and related changes, but your vet will decide which tests fit the signs and local risk.",
      },
      {
        question: "Are blood tests covered by pet insurance?",
        answer:
          "It depends on the policy, reason for testing, waiting periods, exclusions, limits, and whether the condition is covered.",
      },
    ],
    related: [
      { title: "Biliary Tick Bite Fever", description: "South African tick-borne warning signs.", href: "/health/biliary-tick-bite-fever-dogs-south-africa" },
      { title: "Dog Lethargic", description: "When low energy needs a vet.", href: "/health/dog-lethargic-south-africa" },
      { title: "Tick Bite Fever Treatment Costs", description: "Budget factors for suspected tick-borne illness.", href: "/costs/tick-bite-fever-treatment-costs-south-africa" },
      ...costRelated,
    ],
  },
  {
    slug: "after-hours-vet-costs-south-africa",
    hubPath: "/costs",
    title: "After-Hours Vet Costs in South Africa",
    seoTitle: "After-Hours Vet Costs South Africa | Emergency Fee Factors",
    description:
      "Learn why after-hours vet costs can differ in South Africa, what affects emergency bills, what to ask, and why urgent care should not be delayed.",
    intro:
      "After-hours veterinary care can cost more because clinics must staff, triage, stabilise, monitor, and treat urgent cases outside normal hours. Planning ahead makes the conversation calmer when something goes wrong.",
    quickFacts: [
      ...costSafety,
      "For breathing difficulty, collapse, bloat signs, seizures, poisoning, snake bite, heatstroke, or severe pain, contact a vet urgently and discuss estimates while arranging care.",
    ],
    context: [
      "After-hours options differ between large cities, smaller towns, and rural areas. Some owners may need to phone ahead, travel further, or use an emergency partner clinic.",
      "The first bill may include consultation, triage, stabilisation, injections, fluids, oxygen, diagnostics, hospital care, or referral planning depending on the emergency.",
    ],
    factors: [
      ["Time and staffing", "Night, weekend, and public-holiday care may involve different fee structures."],
      ["Triage and stabilisation", "Emergency care often starts with stabilising breathing, circulation, pain, shock, or seizures."],
      ["Diagnostics", "Blood tests, x-rays, ultrasound, or toxin checks may be needed quickly."],
      ["Hospitalisation", "Fluids, oxygen, monitoring, nursing, and overnight care can change the bill."],
      ["Referral", "Some cases need transfer to a specialist or 24-hour facility."],
      ["Location", "Availability and travel distance differ by city, town, and province."],
    ],
    questions: [
      "Should I come in immediately or go to a partner emergency clinic?",
      "What is the initial consultation or triage fee?",
      "What stabilisation steps are likely first?",
      "When can I receive a written estimate?",
      "Could referral or overnight care be needed?",
      "What information should I bring for insurance?",
    ],
    warnings: [
      "Do not delay urgent care while shopping for prices if your dog is unstable.",
      "Do not arrive without phoning if the clinic requests after-hours triage first.",
      "Do not assume your usual vet is open after hours; save emergency contacts in advance.",
    ],
    checklist: [
      "Save your regular vet and nearest after-hours clinic details.",
      "Keep vaccination records, medication names, and insurance details easy to access.",
      "Know how you would transport your dog at night.",
      "Ask for an estimate once stabilisation has started.",
      "Keep receipts, invoices, and clinical notes for claims.",
    ],
    faqs: [
      {
        question: "Why is after-hours vet care often more expensive?",
        answer:
          "After-hours care may require emergency staffing, triage, monitoring, urgent diagnostics, and hospital resources outside normal consulting times.",
      },
      {
        question: "Should I call before going to an emergency vet?",
        answer:
          "Yes if possible, unless you have been told otherwise. Calling helps the clinic prepare and direct you to the right location.",
      },
      {
        question: "Can insurance help with after-hours care?",
        answer:
          "It depends on the policy wording, limits, excesses, waiting periods, exclusions, and whether the emergency is covered.",
      },
    ],
    related: [
      { title: "Emergency Vet Costs", description: "Broader emergency bill planning.", href: "/costs/emergency-vet-costs-south-africa" },
      { title: "Dog Breathing Fast", description: "Breathing changes that should not wait.", href: "/health/dog-breathing-fast-south-africa" },
      { title: "Dog Insurance for Emergencies", description: "How emergency cover questions work.", href: "/insurance/dog-insurance-for-emergencies-south-africa" },
      ...costRelated,
    ],
  },
  {
    slug: "tick-bite-fever-treatment-costs-south-africa",
    hubPath: "/costs",
    title: "Tick Bite Fever Treatment Costs for Dogs in South Africa",
    seoTitle: "Tick Bite Fever Treatment Costs South Africa | Dog Vet Bill Factors",
    description:
      "Understand cost factors for suspected tick bite fever in South African dogs, including consultation, blood tests, medication, hospital care, and follow-up checks.",
    intro:
      "Tick bite fever, often discussed by South African owners as biliary, can become serious. This guide explains the cost factors to ask about without guessing treatment or publishing unsupported prices.",
    quickFacts: [
      ...costSafety,
      "Pale gums, weakness, fever signs, dark urine, not eating, collapse, or fast worsening after tick exposure should prompt urgent veterinary advice.",
    ],
    context: [
      "South African dogs can be exposed to ticks in gardens, parks, farms, beaches, boarding settings, and walking areas. Suspected tick-borne illness is not something to price-shop while a dog is deteriorating.",
      "Costs depend on how sick the dog is, which tests are needed, whether hospitalisation or fluids are required, and how many follow-up visits are needed.",
    ],
    factors: [
      ["Consultation and triage", "The vet assesses gum colour, temperature, hydration, weakness, and urgency."],
      ["Blood tests", "Testing may help assess red blood cells, platelets, organ effects, and tick-borne concerns."],
      ["Medication", "The medication plan depends on the vet's diagnosis and the dog's condition."],
      ["Hospitalisation", "Weak, anaemic, dehydrated, or complicated cases may need fluids, monitoring, or hospital care."],
      ["Follow-up", "Repeat exams or blood tests may be needed to check recovery."],
      ["Prevention", "Ongoing tick prevention and household checks may be part of future budgeting."],
    ],
    questions: [
      "How urgent is my dog's condition?",
      "Which tests are needed today and why?",
      "Could hospitalisation or repeat blood tests be needed?",
      "What symptoms mean I should return immediately?",
      "How should I prevent future tick exposure?",
      "What documents should I keep for insurance?",
    ],
    warnings: [
      "Do not delay care if biliary or tick bite fever is suspected.",
      "Do not give leftover medication or human medicine.",
      "Do not assume removing a tick means the risk is over.",
      "Do not skip follow-up if your vet recommends rechecking blood values or symptoms.",
    ],
    checklist: [
      "Tell the vet when ticks were seen and when symptoms started.",
      "Note gum colour, appetite, urine colour, energy, vomiting, and breathing.",
      "Bring parasite prevention product details if available.",
      "Ask for an estimate that separates tests, treatment, and follow-up.",
      "Discuss year-round tick prevention with your vet.",
    ],
    faqs: [
      {
        question: "Can tick bite fever treatment costs be estimated online?",
        answer:
          "Only broadly. Real costs depend on the dog's condition, diagnostics, medication, hospitalisation, and follow-up care.",
      },
      {
        question: "Is tick bite fever an emergency?",
        answer:
          "It can be. Weakness, pale gums, collapse, dark urine, fever signs, not eating, or fast worsening should be discussed with a vet urgently.",
      },
      {
        question: "Will insurance cover tick bite fever treatment?",
        answer:
          "It depends on policy wording, waiting periods, exclusions, annual limits, excesses, and whether prevention or pre-existing condition rules apply.",
      },
    ],
    related: [
      { title: "Biliary Tick Bite Fever", description: "Symptoms and urgent warning signs.", href: "/health/biliary-tick-bite-fever-dogs-south-africa" },
      { title: "Tick and Flea Treatment", description: "Prevention questions for South African homes.", href: "/health/tick-and-flea-treatment-for-dogs-south-africa" },
      { title: "Dog Blood Test Costs", description: "How testing may affect the bill.", href: "/costs/dog-blood-test-cost-south-africa" },
      ...costRelated,
    ],
  },
];

const insuranceGuides: MoneyGuide[] = [
  {
    slug: "dog-insurance-for-emergencies-south-africa",
    hubPath: "/insurance",
    title: "Dog Insurance for Emergencies in South Africa",
    seoTitle: "Dog Insurance for Emergencies South Africa | What to Check",
    description:
      "A neutral South African guide to dog insurance for emergencies, including accident cover, illness cover, limits, excesses, claims, and exclusions.",
    intro:
      "Emergency vet care can involve triage, stabilisation, diagnostics, surgery, hospitalisation, and follow-up. Insurance may help in some cases, but only if the policy wording, waiting periods, limits, and exclusions fit the situation.",
    quickFacts: [
      ...insuranceSafety,
      "Emergency cover may differ for accidents, illness, poisoning, snake bite, surgery, hospitalisation, and after-hours care.",
      "Ask how claims work before an emergency happens.",
    ],
    context: [
      "South African owners should compare emergency-related wording before relying on a policy. Look beyond the premium and check what happens if a dog needs after-hours care, surgery, diagnostics, referral, or hospital care.",
      "In an emergency, contact a vet first. Insurance questions matter, but stabilising the dog comes before paperwork.",
    ],
    factors: [
      ["Accident cover", "May apply to injuries, but definitions and exclusions vary."],
      ["Illness cover", "May apply to sudden illness only after waiting periods and subject to exclusions."],
      ["Annual and per-condition limits", "Limits can affect large emergency bills."],
      ["Excess", "The owner may pay a fixed amount, percentage, or both depending on wording."],
      ["Pre-authorisation", "Some insurers may request approval for certain procedures where practical."],
      ["Claim documents", "Invoices, clinical notes, history, and proof of payment may be required."],
    ],
    questions: [
      "Does the policy cover both accidents and illness emergencies?",
      "How do waiting periods apply to emergency care?",
      "Are poisoning, snake bite, bloat, surgery, and hospitalisation handled differently?",
      "What excess applies to an emergency claim?",
      "Is pre-authorisation required where practical?",
      "What documents are needed after an emergency visit?",
    ],
    warnings: [
      "Do not assume every emergency is covered.",
      "Do not delay emergency treatment while waiting for insurer answers if the dog is unstable.",
      "Do not rely on marketing wording instead of the policy schedule.",
      "Do not forget that pre-existing condition rules can affect emergency claims.",
    ],
    checklist: [
      "Save insurer claim contact details.",
      "Keep your dog's vet history and vaccination records available.",
      "Ask your vet for itemised invoices and clinical notes.",
      "Read exclusions for poisoning, inherited conditions, dental care, and elective procedures.",
      "Keep an emergency savings buffer even if insured.",
    ],
    faqs: [
      {
        question: "Does dog insurance always cover emergencies?",
        answer:
          "No. Cover depends on policy wording, waiting periods, exclusions, limits, excesses, and the reason for the emergency.",
      },
      {
        question: "Should I call the insurer before the vet?",
        answer:
          "If your dog is unstable, contact a vet first. Ask about insurance paperwork as soon as practical.",
      },
      {
        question: "Can emergency surgery be covered?",
        answer:
          "It may be covered by some policies in some circumstances, but you must check limits, exclusions, pre-existing condition rules, and claim requirements.",
      },
    ],
    related: [
      { title: "After-Hours Vet Costs", description: "Emergency timing and bill factors.", href: "/costs/after-hours-vet-costs-south-africa" },
      { title: "Dog Surgery Costs", description: "Surgery estimate factors and questions.", href: "/costs/dog-surgery-costs-south-africa" },
      { title: "Dog Breathing Fast", description: "Symptoms that should not wait.", href: "/health/dog-breathing-fast-south-africa" },
      ...insuranceRelated,
    ],
  },
  {
    slug: "pet-insurance-and-pre-existing-conditions-south-africa",
    hubPath: "/insurance",
    title: "Pet Insurance and Pre-Existing Conditions in South Africa",
    seoTitle: "Pet Insurance and Pre-Existing Conditions South Africa | Dog Cover Guide",
    description:
      "Understand how pre-existing condition rules may affect dog insurance in South Africa, what to ask insurers, and why vet records matter.",
    intro:
      "Pre-existing condition wording can be one of the most important parts of a dog insurance policy. This guide explains what to ask without assuming how any specific insurer will decide a claim.",
    quickFacts: [
      ...insuranceSafety,
      "Pre-existing condition rules can differ between policies and may depend on symptoms, diagnosis, vet records, and timing.",
      "Complete veterinary records are important when applying or claiming.",
    ],
    context: [
      "A dog may have had symptoms before cover started, even if the final diagnosis came later. Insurers may review vet notes, dates, treatment history, and policy wording.",
      "Owners should ask direct questions before switching policies or delaying cover, especially for dogs with recurring ears, skin, dental, joints, seizures, digestive signs, or chronic disease.",
    ],
    factors: [
      ["Symptoms before cover", "Some policies may consider signs before policy start, not only formal diagnoses."],
      ["Vet records", "Clinical notes, invoices, and previous treatments may be reviewed."],
      ["Waiting periods", "Illness cover may not apply immediately after policy start."],
      ["Recurring conditions", "Repeat ear, skin, gut, joint, or dental problems may need careful wording checks."],
      ["Policy switching", "Changing insurers can create new waiting periods or new pre-existing assessments."],
      ["Exclusions", "Some exclusions may be permanent, temporary, or reviewed only under specific rules."],
    ],
    questions: [
      "How does the policy define a pre-existing condition?",
      "Are symptoms before cover treated the same as a diagnosis?",
      "Can any exclusions be reviewed later?",
      "What records will be requested at claim stage?",
      "How does switching policies affect existing health history?",
      "How are recurring conditions handled?",
    ],
    warnings: [
      "Do not hide previous symptoms or vet visits when applying.",
      "Do not assume a new insurer will treat old conditions as new.",
      "Do not cancel existing cover before understanding the new policy's waiting periods and exclusions.",
      "Do not rely on verbal promises unless confirmed in writing.",
    ],
    checklist: [
      "Request your dog's full vet history.",
      "Read the pre-existing condition definition.",
      "Ask about temporary versus permanent exclusions.",
      "Ask how symptoms without diagnosis are handled.",
      "Keep written responses from the insurer.",
    ],
    faqs: [
      {
        question: "Is a pre-existing condition always excluded?",
        answer:
          "Not always in the same way. Rules differ by policy, condition, timing, and wording. Ask the insurer directly.",
      },
      {
        question: "Can symptoms count as pre-existing?",
        answer:
          "Some policies may consider signs or symptoms before cover, even if diagnosis came later. Check the wording.",
      },
      {
        question: "Should I switch insurers if my dog has a health history?",
        answer:
          "Be careful. Switching can trigger new waiting periods and pre-existing condition reviews. Compare documents before cancelling cover.",
      },
    ],
    related: [
      { title: "Pre-Existing Conditions Guide", description: "Existing DogHaven guide to policy wording.", href: "/insurance/pre-existing-conditions-pet-insurance-south-africa" },
      { title: "Chronic Dog Health Costs", description: "Budgeting for ongoing care.", href: "/health/chronic-dog-health-costs-south-africa" },
      { title: "Senior Dog Vet Checkups", description: "Why records matter for older dogs.", href: "/health/senior-dog-vet-checkups-south-africa" },
      ...insuranceRelated,
    ],
  },
  {
    slug: "dog-insurance-claim-process-south-africa",
    hubPath: "/insurance",
    title: "Dog Insurance Claim Process in South Africa",
    seoTitle: "Dog Insurance Claim Process South Africa | Documents and Steps",
    description:
      "A neutral guide to the dog insurance claim process in South Africa, including invoices, vet notes, forms, excesses, limits, and what to ask.",
    intro:
      "Dog insurance claims are easier when you know what documents to keep and what questions to ask. This guide explains the usual moving parts without promising claim outcomes.",
    quickFacts: [
      ...insuranceSafety,
      "Claim outcomes depend on policy wording, documents, limits, excesses, waiting periods, exclusions, and insurer assessment.",
      "Ask your insurer and vet what documents are needed before you need to claim.",
    ],
    context: [
      "A claim may require itemised invoices, proof of payment, clinical notes, claim forms, policy details, and sometimes a history from previous vets.",
      "Emergency claims can feel stressful, so prepare a simple document folder before anything goes wrong.",
    ],
    factors: [
      ["Vet invoice", "Itemised invoices help show what was done and what was charged."],
      ["Clinical notes", "The insurer may need diagnosis, symptoms, treatment dates, and history."],
      ["Claim form", "Some insurers require owner and vet sections."],
      ["Proof of payment", "Some claims reimburse after payment, while processes differ by insurer."],
      ["Excess and limits", "The payout may be reduced by excesses, co-payments, or limits."],
      ["Assessment", "The insurer may review waiting periods, exclusions, and pre-existing condition rules."],
    ],
    questions: [
      "Can I submit claims online or by email?",
      "Do you require vet notes with every claim?",
      "How long do claims usually take once documents are complete?",
      "What excess applies to this claim?",
      "Will you contact the vet directly if more information is needed?",
      "How will I be notified if part of a claim is declined?",
    ],
    warnings: [
      "Do not throw away invoices, receipts, or vet notes.",
      "Do not assume a claim is approved until the insurer confirms it.",
      "Do not miss submission deadlines in the policy wording.",
      "Do not alter documents or leave out relevant history.",
    ],
    checklist: [
      "Save the insurer's claim portal or email.",
      "Ask the vet for itemised invoices and notes.",
      "Keep proof of payment.",
      "Submit forms within the required timeline.",
      "Keep copies of all insurer responses.",
    ],
    faqs: [
      {
        question: "Can DogHaven tell me if my claim will be paid?",
        answer:
          "No. Only the insurer can assess a claim against the policy wording and documents.",
      },
      {
        question: "What documents should I keep after a vet visit?",
        answer:
          "Keep itemised invoices, proof of payment, clinical notes if provided, prescriptions, test results, and claim forms.",
      },
      {
        question: "Can a claim be partly paid?",
        answer:
          "Yes, depending on limits, excesses, exclusions, eligible items, and policy wording.",
      },
    ],
    related: [
      { title: "Pet Insurance Claims Checklist", description: "A checklist-style claim preparation guide.", href: "/insurance/pet-insurance-claims-checklist-south-africa" },
      { title: "Dog Blood Test Costs", description: "Testing records that may matter for claims.", href: "/costs/dog-blood-test-cost-south-africa" },
      { title: "What Dog Insurance Does Not Cover", description: "Common exclusion questions to ask.", href: "/insurance/what-dog-insurance-does-not-cover-south-africa" },
      ...insuranceRelated,
    ],
  },
  {
    slug: "what-dog-insurance-does-not-cover-south-africa",
    hubPath: "/insurance",
    title: "What Dog Insurance Does Not Cover in South Africa",
    seoTitle: "What Dog Insurance Does Not Cover South Africa | Exclusions Guide",
    description:
      "Understand common dog insurance exclusion questions in South Africa, including pre-existing conditions, waiting periods, routine care, dental, breed limits, and excesses.",
    intro:
      "Dog insurance can be useful, but every policy has limits and exclusions. This guide helps South African owners ask better questions about what may not be covered.",
    quickFacts: [
      ...insuranceSafety,
      "Do not assume routine care, dental care, behaviour support, hereditary conditions, or pre-existing conditions are covered unless the policy says so.",
      "Exclusions can differ between insurers and policy levels.",
    ],
    context: [
      "The most important insurance page is often the exclusions page. Marketing summaries can be easier to read, but the policy wording controls the detail.",
      "Owners should check exclusions before relying on cover for emergencies, chronic disease, dental work, inherited problems, behaviour support, or routine prevention.",
    ],
    factors: [
      ["Pre-existing conditions", "Often restricted or excluded depending on wording and history."],
      ["Waiting periods", "Claims during waiting periods may not be covered."],
      ["Routine care", "Vaccines, deworming, sterilisation, and checkups may need optional add-ons or may be excluded."],
      ["Dental care", "Dental illness, cleaning, or extractions may have separate limits or exclusions."],
      ["Breed or hereditary issues", "Some policies may limit or exclude certain breed-related conditions."],
      ["Elective or preventable items", "Cosmetic, breeding, or non-essential items may be excluded."],
    ],
    questions: [
      "Which exclusions apply to this policy level?",
      "Are dental, hereditary, congenital, behavioural, or routine-care items covered?",
      "How are preventable conditions handled?",
      "What happens if symptoms started before cover?",
      "Are there sub-limits for diagnostics, surgery, hospitalisation, or medication?",
      "Can exclusions change at renewal?",
    ],
    warnings: [
      "Do not assume comprehensive means everything is covered.",
      "Do not rely on a brochure if the policy wording says something narrower.",
      "Do not skip routine prevention because you think insurance will cover all illness.",
      "Do not choose a policy before reading the exclusions section.",
    ],
    checklist: [
      "Read exclusions line by line.",
      "Ask the insurer about your dog's breed, age, and health history.",
      "Check whether dental and routine care are included or optional.",
      "Compare annual limits and sub-limits.",
      "Keep written answers with your policy documents.",
    ],
    faqs: [
      {
        question: "Does dog insurance cover everything?",
        answer:
          "No. Policies have exclusions, limits, excesses, waiting periods, and claim requirements.",
      },
      {
        question: "Is dental care usually covered?",
        answer:
          "It depends on the policy. Dental cover may be limited, excluded, or available only under specific conditions.",
      },
      {
        question: "Are routine vaccines covered?",
        answer:
          "Routine care may be excluded or available as an add-on. Check the schedule and benefits.",
      },
    ],
    related: [
      { title: "Dog Dental Cleaning Costs", description: "Dental bill factors and insurance questions.", href: "/costs/dog-dental-cleaning-cost-south-africa" },
      { title: "Dog Insurance Waiting Periods", description: "When cover may start.", href: "/insurance/dog-insurance-waiting-periods-south-africa" },
      { title: "Pre-Existing Conditions", description: "How history can affect cover.", href: "/insurance/pet-insurance-and-pre-existing-conditions-south-africa" },
      ...insuranceRelated,
    ],
  },
  {
    slug: "dog-insurance-waiting-periods-explained-south-africa",
    hubPath: "/insurance",
    title: "Dog Insurance Waiting Periods Explained in South Africa",
    seoTitle: "Dog Insurance Waiting Periods Explained South Africa",
    description:
      "A plain-English South African guide to dog insurance waiting periods, accident timing, illness timing, exclusions, switching policies, and claim questions.",
    intro:
      "Waiting periods are one reason owners should not wait until a dog is already sick to understand insurance. This guide explains the questions to ask without ranking insurers.",
    quickFacts: [
      ...insuranceSafety,
      "Accident, illness, routine care, dental, cruciate, hereditary, or other waiting periods can differ by policy.",
      "Symptoms before or during a waiting period may affect future claims depending on wording.",
    ],
    context: [
      "A waiting period is a time after policy start when some benefits may not yet apply. The details can differ across cover types and insurers.",
      "Switching policies can restart waiting periods or create new pre-existing condition reviews, so compare carefully before cancelling existing cover.",
    ],
    factors: [
      ["Accident waiting period", "Some policies treat accident cover differently from illness cover."],
      ["Illness waiting period", "Illness claims may only be eligible after a stated period."],
      ["Specific condition waiting periods", "Some conditions or treatment categories may have longer waits."],
      ["Routine care timing", "Wellness add-ons may have their own rules."],
      ["Symptoms during waiting period", "A symptom that appears before cover starts may affect later claims."],
      ["Policy switching", "New policies can mean new waiting periods."],
    ],
    questions: [
      "What waiting periods apply to accidents, illness, dental, hereditary, and routine care?",
      "How are symptoms during the waiting period treated?",
      "Does switching from another insurer change waiting periods?",
      "Are there longer waits for specific procedures or conditions?",
      "When is the policy start date for waiting-period purposes?",
      "Can you confirm the waiting periods in writing?",
    ],
    warnings: [
      "Do not assume cover starts immediately for every condition.",
      "Do not cancel one policy before checking waiting periods on the next.",
      "Do not ignore symptoms during the waiting period; get veterinary care when needed.",
      "Do not rely on verbal summaries without checking policy documents.",
    ],
    checklist: [
      "Mark policy start date and waiting-period end dates.",
      "Save the waiting-period clause.",
      "Ask how emergency claims are handled during waiting periods.",
      "Keep vet records from before and after policy start.",
      "Review waiting periods before adding a puppy or older dog.",
    ],
    faqs: [
      {
        question: "Can I claim during a waiting period?",
        answer:
          "It depends on the policy and claim type. Some benefits may not apply until the waiting period has passed.",
      },
      {
        question: "Do waiting periods apply to accidents?",
        answer:
          "Some policies may treat accident cover differently from illness cover. Check the policy wording.",
      },
      {
        question: "Can waiting periods restart when I switch insurers?",
        answer:
          "They can. A new policy may have new waiting periods and pre-existing condition assessments.",
      },
    ],
    related: [
      { title: "Dog Insurance Waiting Periods", description: "Existing DogHaven waiting-period guide.", href: "/insurance/dog-insurance-waiting-periods-south-africa" },
      { title: "Puppy Insurance", description: "Waiting-period questions for young dogs.", href: "/insurance/dog-insurance-for-puppies-south-africa" },
      { title: "Insurance for Emergencies", description: "How emergencies and timing interact.", href: "/insurance/dog-insurance-for-emergencies-south-africa" },
      ...insuranceRelated,
    ],
  },
];

function toGuide(guide: MoneyGuide): GuideContent {
  const isInsurance = guide.hubPath === "/insurance";

  return {
    slug: guide.slug,
    path: `${guide.hubPath}/${guide.slug}`,
    hubTitle: isInsurance ? "Dog Insurance" : "Dog Costs",
    hubPath: guide.hubPath,
    title: guide.title,
    seoTitle: guide.seoTitle,
    description: guide.description,
    intro: guide.intro,
    updated: reviewed,
    quickFacts: guide.quickFacts,
    sections: [
      {
        heading: "South African context",
        body: guide.context,
      },
      {
        heading: isInsurance ? "Policy factors to compare" : "Cost factors to understand",
        body: [
          isInsurance
            ? "Use this table to compare policy wording. It is not a ranking and does not predict claim outcomes."
            : "Use this table to understand why estimates can differ. It is not a price list or national average.",
        ],
        table: {
          headers: [isInsurance ? "Policy factor" : "Cost factor", "Why it matters"],
          rows: guide.factors,
        },
      },
      {
        heading: isInsurance ? "Questions to ask the insurer" : "Questions to ask the vet",
        body: [
          isInsurance
            ? "Ask direct questions and keep written answers with the policy wording."
            : "Ask for itemised estimates where practical and make sure you understand what is included.",
        ],
        checklist: guide.questions,
      },
      {
        heading: "Warning notes",
        body: ["These points help avoid risky assumptions, especially when a dog is sick, injured, or the owner is under pressure."],
        bullets: guide.warnings,
      },
      {
        heading: "Practical checklist",
        body: ["Use this checklist to prepare before treatment, quotes, or policy decisions."],
        checklist: guide.checklist,
      },
    ],
    faqs: guide.faqs,
    related: guide.related,
    sources: guide.sources ?? (isInsurance ? insuranceSources : costSources),
  };
}

export const phase30CostInsuranceGuidePages: GuideContent[] = [...costGuides, ...insuranceGuides].map(toGuide);

export function getPhase30Guide(slug: string) {
  return phase30CostInsuranceGuidePages.find((guide) => guide.slug === slug);
}

export function getPhase30GuidesByHub(hubPath: "/costs" | "/insurance") {
  return phase30CostInsuranceGuidePages.filter((guide) => guide.hubPath === hubPath);
}

export const phase30CostCards: CardLink[] = costGuides.map((guide) => ({
  title: guide.title,
  description: guide.description,
  href: `/costs/${guide.slug}`,
}));

export const phase30InsuranceCards: CardLink[] = insuranceGuides.map((guide) => ({
  title: guide.title,
  description: guide.description,
  href: `/insurance/${guide.slug}`,
}));
