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
    note: "South African veterinary context for responsible dog health, prevention, and long-term care.",
  },
  {
    label: "WSAVA Global Nutrition Guidelines",
    href: "https://wsava.org/global-guidelines/global-nutrition-guidelines/",
    note: "International veterinary nutrition guidance for body condition, feeding discussions, and vet-led weight planning.",
  },
  {
    label: "MSD Veterinary Manual",
    href: "https://www.msdvetmanual.com/",
    note: "Veterinary reference for general dog dental, skin, ear, joint, senior, and chronic-health context.",
  },
  {
    label: "NSPCA",
    href: "https://nspca.co.za/",
    note: "South African animal welfare context for responsible care and timely veterinary attention.",
  },
];

const commonRelated: CardLink[] = [
  { title: "Dog Health Hub", description: "Prevention, symptoms, and vet decision guidance.", href: "/health" },
  { title: "Find a Vet", description: "How to choose veterinary care without fake directories.", href: "/health/find-a-vet-south-africa" },
  { title: "Vet Visit Checklist", description: "Prepare better notes before a consultation.", href: "/tools/vet-visit-checklist" },
  { title: "Senior Dog Care Checklist", description: "Free planning tool for routine senior care conversations.", href: "/tools/senior-dog-care-checklist" },
  { title: "Vet Consultation Costs", description: "Understand routine consult cost factors.", href: "/costs/vet-consultation-costs-south-africa" },
  { title: "Emergency Help", description: "Urgent warning signs and first steps.", href: "/emergency" },
];

const disclaimer = [
  "This guide is educational and does not diagnose your dog or replace veterinary advice.",
  "Contact a veterinarian promptly if symptoms are severe, painful, spreading, recurring, or getting worse.",
  "Do not give human medication, antibiotics, painkillers, steroids, supplements, or ear or skin products unless your vet specifically advises it for your dog.",
];

const urgentWarnings = [
  "Collapse, breathing difficulty, pale gums, seizures, severe weakness, uncontrolled pain, heavy bleeding, repeated vomiting, or fast-worsening symptoms need urgent veterinary care.",
  "Puppies, senior dogs, pregnant dogs, and dogs with chronic conditions should be checked sooner because they can deteriorate faster.",
];

type Topic = {
  slug: string;
  title: string;
  seoTitle: string;
  description: string;
  intro: string;
  quickFacts: string[];
  context: string[];
  checklist: string[];
  vetQuestions: string[];
  warnings: string[];
  prevention: string[];
  tableRows: string[][];
  faqs: { question: string; answer: string }[];
  related: CardLink[];
};

const topics: Topic[] = [
  {
    slug: "dog-dental-care-south-africa",
    title: "Dog Dental Care in South Africa",
    seoTitle: "Dog Dental Care South Africa | Teeth, Breath and Vet Checks",
    description:
      "A practical South African guide to dog dental care, bad breath, plaque, gum warning signs, chewing habits, vet checks, and teeth-cleaning questions.",
    intro:
      "Dog dental care is easy to underestimate until bad breath, painful chewing, loose teeth, or gum problems appear. South African owners should plan regular mouth checks and ask a vet how dental care fits their dog's age, breed, diet, and health.",
    quickFacts: [
      ...disclaimer,
      "Bad breath is common, but strong or worsening breath can be a sign that a vet check is needed.",
      "Small breeds, senior dogs, and dogs with crowded teeth may need closer dental monitoring.",
    ],
    context: [
      "Many South African dogs eat a mix of kibble, wet food, treats, chews, table scraps, and training rewards. Chewing habits can affect teeth, but chew toys and treats are not a substitute for veterinary dental checks.",
      "Heat, dust, seasonal allergies, and chronic illness can make owners focus on skin or parasite care, while mouth discomfort quietly builds. A quick mouth check during routine vet visits helps catch problems earlier.",
    ],
    checklist: [
      "Look for breath changes, red gums, tartar, drooling, pawing at the mouth, bleeding, or chewing on one side.",
      "Ask your vet how often your dog should have a dental check.",
      "Use only dog-safe dental routines recommended by your vet.",
      "Avoid hard objects that could crack teeth.",
      "Keep a note of appetite, chewing, and behaviour changes before the appointment.",
    ],
    vetQuestions: [
      "Do my dog's gums, teeth, and breath look normal for their age?",
      "Is a professional dental assessment or cleaning needed?",
      "What home dental routine is safe for my dog?",
      "Could pain, infection, diet, or another illness be contributing to breath or chewing changes?",
      "What warning signs should make me book sooner?",
    ],
    warnings: [
      ...urgentWarnings,
      "Book a vet check for bleeding gums, loose teeth, facial swelling, difficulty eating, drooling with pain, or sudden refusal of food.",
    ],
    prevention: [
      "Build mouth checks into grooming or cuddle time without forcing a painful mouth open.",
      "Ask your vet before using dental products, especially for puppies, seniors, and dogs with medical conditions.",
      "Keep treats and chews appropriate to size and chewing style.",
      "Budget for dental care as part of routine health planning rather than waiting for pain.",
    ],
    tableRows: [
      ["Bad breath", "Dental disease, diet, stomach issues, kidney or other illness can all play a role."],
      ["Chewing on one side", "Possible mouth pain, broken tooth, gum problem, or foreign material."],
      ["Drooling or pawing", "Pain, nausea, oral injury, or dental disease can be involved."],
      ["Red or bleeding gums", "Inflammation or infection risk that should be checked."],
    ],
    faqs: [
      {
        question: "Is dog bad breath normal?",
        answer:
          "Mild dog breath is common, but strong, rotten, sudden, or worsening breath should be discussed with a vet.",
      },
      {
        question: "Can chews clean my dog's teeth?",
        answer:
          "Some chews may help some dogs, but they do not replace vet checks. Ask your vet what is safe for your dog's teeth and chewing style.",
      },
      {
        question: "Should senior dogs still have dental checks?",
        answer:
          "Yes. Senior dogs often need closer monitoring because mouth pain can affect eating, comfort, and quality of life.",
      },
    ],
    related: [
      { title: "Dog Teeth Cleaning", description: "What to ask before a vet dental cleaning.", href: "/health/dog-teeth-cleaning-south-africa" },
      { title: "Bad Breath Causes", description: "When breath changes need a vet check.", href: "/health/dog-bad-breath-causes-south-africa" },
      { title: "Chronic Health Costs", description: "Plan for recurring dental and long-term care expenses.", href: "/health/chronic-dog-health-costs-south-africa" },
      ...commonRelated,
    ],
  },
  {
    slug: "dog-teeth-cleaning-south-africa",
    title: "Dog Teeth Cleaning in South Africa",
    seoTitle: "Dog Teeth Cleaning South Africa | Vet Dental Cleaning Guide",
    description:
      "A South African guide to dog teeth cleaning, vet dental assessments, what to ask, cost factors, warning signs, and safe dental-care planning.",
    intro:
      "Dog teeth cleaning can mean home dental care or a professional veterinary dental procedure. The safest plan depends on your dog's mouth, age, health, temperament, and what your vet finds during an exam.",
    quickFacts: [
      ...disclaimer,
      "Do not scrape, scale, or use dental tools at home unless a vet has trained you and says it is appropriate.",
      "Professional dental costs vary by clinic, dog size, anaesthetic needs, extractions, diagnostics, and aftercare.",
    ],
    context: [
      "South African vet clinics may structure dental estimates differently. Some quotes may include pre-checks, anaesthetic monitoring, dental charting, polishing, medication, follow-up, or extractions, while others separate items.",
      "Owners should ask what is included instead of comparing only the headline number. A cheap dental plan that misses safety checks may not be a good comparison.",
    ],
    checklist: [
      "Book a vet assessment before assuming your dog only needs a simple clean.",
      "Ask what the estimate includes and what could change after the mouth is examined.",
      "Tell the vet about coughing, heart concerns, seizures, chronic illness, medication, or previous anaesthetic issues.",
      "Take photos of visible gum or tooth changes if your dog allows it safely.",
      "Plan follow-up and home care questions before the procedure day.",
    ],
    vetQuestions: [
      "Does my dog need a dental cleaning, dental X-rays, extractions, or follow-up?",
      "What anaesthetic and monitoring steps are used?",
      "What costs could be added if a damaged tooth is found?",
      "What home care should I use after the mouth has healed?",
      "How soon should my dog be rechecked?",
    ],
    warnings: [
      ...urgentWarnings,
      "Facial swelling, severe mouth pain, bleeding, refusal to eat, or a broken tooth should be checked promptly.",
    ],
    prevention: [
      "Ask about safe brushing, dental diets, chews, and check intervals for your dog.",
      "Do not wait until your dog cannot eat before discussing dental care.",
      "Keep dental care in your monthly and annual dog budget.",
      "Use the senior checklist for older dogs with mouth, appetite, or comfort changes.",
    ],
    tableRows: [
      ["Clinic quote", "Ask what is included and which items may cost extra."],
      ["Dog size and age", "Can affect anaesthetic planning, time, and monitoring."],
      ["Mouth condition", "Extractions or severe gum disease can change the plan."],
      ["Chronic illness", "May require additional assessment before dental work."],
    ],
    faqs: [
      {
        question: "How much does dog teeth cleaning cost in South Africa?",
        answer:
          "Costs vary by clinic, city, dog size, mouth condition, anaesthetic needs, diagnostics, and extractions. Ask your vet for a written estimate.",
      },
      {
        question: "Can a groomer clean my dog's teeth instead?",
        answer:
          "Groomers may offer basic hygiene services, but painful mouths, gum disease, loose teeth, and professional dental procedures need veterinary care.",
      },
      {
        question: "Is anaesthetic-free cleaning enough?",
        answer:
          "Ask your vet. Surface cleaning may miss painful disease under the gumline and does not replace a veterinary dental assessment.",
      },
    ],
    related: [
      { title: "Dog Dental Care", description: "Everyday mouth checks and warning signs.", href: "/health/dog-dental-care-south-africa" },
      { title: "Vet Consultation Costs", description: "Questions to ask about estimates.", href: "/costs/vet-consultation-costs-south-africa" },
      { title: "Senior Vet Checkups", description: "Dental care in senior routine checks.", href: "/health/senior-dog-vet-checkups-south-africa" },
      ...commonRelated,
    ],
  },
  {
    slug: "dog-bad-breath-causes-south-africa",
    title: "Dog Bad Breath Causes in South Africa",
    seoTitle: "Dog Bad Breath Causes South Africa | When to Call a Vet",
    description:
      "A South African dog owner guide to bad breath causes, dental warning signs, diet links, chronic illness concerns, and when a vet check is needed.",
    intro:
      "Bad breath is often blamed on food, but strong or changing breath can come from dental disease, mouth pain, diet, stomach upset, kidney concerns, diabetes concerns, or other health problems. A vet check is the safest way to avoid guessing.",
    quickFacts: [
      ...disclaimer,
      "Sudden, severe, sweet, chemical, rotten, or worsening breath should not be dismissed.",
      "Breath changes with appetite, drinking, weight loss, vomiting, or weakness need a vet check.",
    ],
    context: [
      "South African dogs may eat biltong scraps, fatty braai leftovers, bones, chews, and mixed diets. Diet can affect breath, but it does not explain every mouth smell.",
      "Ticks, heat stress, parasites, chronic disease, and dental pain can overlap with appetite and energy changes, so owners should look at the whole dog, not only the mouth.",
    ],
    checklist: [
      "Note when the smell started and whether it is getting worse.",
      "Check for eating changes, drooling, pawing at the mouth, vomiting, thirst, weight loss, or lethargy.",
      "Look for visible tartar, red gums, broken teeth, or swelling if your dog allows it safely.",
      "Stop giving risky scraps or hard chews while you arrange advice.",
      "Book a vet check if breath is strong, sudden, painful, or paired with other symptoms.",
    ],
    vetQuestions: [
      "Could this smell be dental disease or something else?",
      "Does my dog need blood tests, dental checks, or diet review?",
      "What home dental routine is safe after examination?",
      "Which signs mean I should return urgently?",
      "Could treats, bones, or scraps be making the problem worse?",
    ],
    warnings: [
      ...urgentWarnings,
      "Bad breath with vomiting, weight loss, drinking lots of water, poor appetite, mouth pain, or facial swelling should be checked promptly.",
    ],
    prevention: [
      "Keep dental checks part of routine vet care.",
      "Avoid fatty, salty, spicy, or bone-heavy leftovers.",
      "Ask about safe dental care for your dog's size and mouth.",
      "Track appetite, thirst, and weight in older dogs.",
    ],
    tableRows: [
      ["Rotten smell", "Dental disease, infection, mouth injury, or trapped material may be involved."],
      ["Sweet or unusual smell", "Can be linked to systemic illness and should be checked."],
      ["Breath plus thirst", "Discuss kidney, diabetes, and other possibilities with a vet."],
      ["Breath plus drooling", "Mouth pain, nausea, toxin exposure, or injury can be involved."],
    ],
    faqs: [
      {
        question: "Can changing food fix bad breath?",
        answer:
          "Sometimes diet affects breath, but persistent or strong bad breath needs a vet check before assuming food is the cause.",
      },
      {
        question: "Is bad breath urgent?",
        answer:
          "It can be urgent when paired with pain, swelling, refusal to eat, vomiting, weakness, weight loss, or unusual thirst.",
      },
      {
        question: "Can puppies have bad breath?",
        answer:
          "Puppies can have breath changes during teething, but strong smell, pain, swelling, vomiting, or poor appetite should be checked.",
      },
    ],
    related: [
      { title: "Dog Bad Breath Symptom Guide", description: "Symptom-led breath and vet-decision help.", href: "/health/dog-bad-breath-south-africa" },
      { title: "Dog Dental Care", description: "Mouth checks and prevention basics.", href: "/health/dog-dental-care-south-africa" },
      { title: "Can Dogs Eat Biltong?", description: "Why salty treats can be risky.", href: "/food/can-dogs-eat-biltong" },
      ...commonRelated,
    ],
  },
  {
    slug: "dog-skin-allergies-south-africa",
    title: "Dog Skin Allergies in South Africa",
    seoTitle: "Dog Skin Allergies South Africa | Itchy Skin and Vet Guide",
    description:
      "A practical South African guide to dog skin allergies, itchy skin, grass, dust, fleas, food sensitivities, grooming, warning signs, and vet questions.",
    intro:
      "Itchy skin in South African dogs can be linked to fleas, ticks, grass, dust, pollen, heat, infections, grooming issues, food sensitivities, or other disease. A vet needs to examine the dog before owners assume it is an allergy.",
    quickFacts: [
      ...disclaimer,
      "Itchy skin can have several causes, and more than one can be present at the same time.",
      "Do not use human creams, essential oils, leftover antibiotics, or steroid products without vet guidance.",
    ],
    context: [
      "South African gardens, sandy coastal areas, dusty inland yards, long grass, warm weather, ticks, fleas, and seasonal pollen can all affect sensitive dogs.",
      "Food may be discussed when itching is ongoing, but diet changes should be planned carefully with a vet so the dog still gets complete nutrition.",
    ],
    checklist: [
      "Check for fleas, flea dirt, ticks, red skin, hair loss, scabs, sores, licking, or ear smell.",
      "Note whether itching is seasonal, after walks, after grooming, or after food changes.",
      "Wash bedding and keep parasite prevention current with vet advice.",
      "Do not apply random home remedies to broken or inflamed skin.",
      "Book a vet check for ongoing, severe, infected, painful, or recurring itching.",
    ],
    vetQuestions: [
      "Could fleas, mites, infection, allergy, food sensitivity, or another condition be involved?",
      "What tests or treatment plan do you recommend?",
      "Should we review parasite prevention?",
      "Is a diet trial appropriate, and how should it be done safely?",
      "Which skin changes mean urgent care?",
    ],
    warnings: [
      ...urgentWarnings,
      "Open sores, hot spots, swelling, pus, severe redness, strong smell, constant scratching, or a dog that cannot sleep should be checked promptly.",
    ],
    prevention: [
      "Keep parasite prevention routine up to date.",
      "Rinse or wipe dogs after dusty, grassy, or beach outings if your vet recommends it.",
      "Use gentle grooming and dry skin folds and ears properly after water exposure.",
      "Track patterns so your vet can see whether itching is seasonal, food-related, or contact-related.",
    ],
    tableRows: [
      ["Flea allergy possibility", "Even a few bites can trigger intense itching in sensitive dogs."],
      ["Grass or dust exposure", "Often affects paws, belly, armpits, ears, or face."],
      ["Food sensitivity", "Needs structured vet guidance; random food switching can confuse the picture."],
      ["Skin infection", "Redness, smell, discharge, scabs, or pain need vet care."],
    ],
    faqs: [
      {
        question: "Are dog skin allergies common in South Africa?",
        answer:
          "Itchy skin is common, but allergies are only one possible cause. Fleas, ticks, infections, grass, dust, and food issues can overlap.",
      },
      {
        question: "Should I change my dog's food for itchy skin?",
        answer:
          "Ask your vet first. Proper diet trials need planning and should not leave the dog with an unbalanced diet.",
      },
      {
        question: "Can grooming help itchy skin?",
        answer:
          "Gentle grooming can help some dogs, but painful, infected, or recurring skin problems need veterinary assessment.",
      },
    ],
    related: [
      { title: "Dog Itchy Skin Symptoms", description: "When scratching needs a vet.", href: "/health/dog-scratching-and-itchy-skin-south-africa" },
      { title: "Fleas on Dogs", description: "Flea signs and prevention planning.", href: "/health/fleas-on-dogs-south-africa" },
      { title: "Dog Food for Skin Allergies", description: "Food discussions without diagnosis.", href: "/food/dog-food-for-skin-allergies-south-africa" },
      ...commonRelated,
    ],
  },
  {
    slug: "dog-hot-spots-south-africa",
    title: "Dog Hot Spots in South Africa",
    seoTitle: "Dog Hot Spots South Africa | Warning Signs and Vet Care",
    description:
      "A South African dog owner guide to hot spots, fast-worsening skin sores, licking, fleas, heat, grooming, warning signs, and when to contact a vet.",
    intro:
      "Hot spots are sore, inflamed skin areas that can worsen quickly when a dog licks, scratches, or chews. Warm South African weather, fleas, wet coats, allergies, and grooming issues can all contribute, but a vet should assess painful or spreading sores.",
    quickFacts: [
      ...disclaimer,
      "Hot spots can become painful and infected quickly.",
      "Do not cover a hot spot with random creams, oils, powders, or human medication.",
    ],
    context: [
      "Dogs that swim, visit beaches, lie in damp coats, scratch after flea bites, or develop seasonal itching may be more prone to irritated skin.",
      "Thick-coated dogs and senior dogs may hide sores under fur until the area smells, oozes, or becomes painful.",
    ],
    checklist: [
      "Look for sudden wet-looking, red, painful, smelly, or oozing skin.",
      "Stop the dog from worsening the area while arranging vet advice, using only safe methods your vet approves.",
      "Check for fleas, ticks, wet coat areas, matting, and recent grooming or swimming.",
      "Do not shave, scrub, or medicate the sore without vet guidance.",
      "Book promptly if the area is spreading, painful, infected, or the dog seems unwell.",
    ],
    vetQuestions: [
      "Is this a hot spot, infection, allergy issue, bite wound, or something else?",
      "What caused it and how do we prevent recurrence?",
      "How should I safely stop licking or scratching?",
      "Does parasite prevention need changing?",
      "What signs mean the skin is not improving?",
    ],
    warnings: [
      ...urgentWarnings,
      "Rapid spreading, pus, strong smell, fever, severe pain, swelling, or a dog that is dull or not eating needs urgent veterinary attention.",
    ],
    prevention: [
      "Dry dogs properly after swimming or bathing.",
      "Keep mats and heavy undercoat under control.",
      "Manage fleas and ticks with vet-guided prevention.",
      "Investigate repeated itching instead of treating each sore as a one-off problem.",
    ],
    tableRows: [
      ["Wet, red sore", "Can spread quickly from licking or chewing."],
      ["Strong smell or pus", "Infection may be present and needs vet care."],
      ["Repeated hot spots", "Underlying allergy, parasite, ear, or grooming issue may need investigation."],
      ["Thick coat", "Sores can hide under fur until advanced."],
    ],
    faqs: [
      {
        question: "Can I treat a hot spot at home?",
        answer:
          "Do not guess. Hot spots can be painful and infected. Phone your vet for guidance, especially if the sore is spreading or your dog is distressed.",
      },
      {
        question: "Are hot spots more common in summer?",
        answer:
          "Warm, humid, wet, or itchy conditions can contribute, but hot spots can happen any time.",
      },
      {
        question: "Can fleas cause hot spots?",
        answer:
          "Flea irritation can trigger intense scratching and licking in some dogs. Ask your vet about parasite control and skin treatment.",
      },
    ],
    related: [
      { title: "Dog Skin Allergies", description: "Itch patterns, grass, dust, fleas, and food sensitivity discussions.", href: "/health/dog-skin-allergies-south-africa" },
      { title: "Dog Grooming", description: "Coat care and matting prevention.", href: "/grooming/dog-grooming-south-africa" },
      { title: "Tick and Flea Treatment", description: "Prevention routines for South African dogs.", href: "/health/tick-and-flea-treatment-for-dogs-south-africa" },
      ...commonRelated,
    ],
  },
  {
    slug: "dog-ear-infections-south-africa",
    title: "Dog Ear Infections in South Africa",
    seoTitle: "Dog Ear Infections South Africa | Signs, Causes and Vet Care",
    description:
      "A practical South African guide to dog ear infection signs, floppy ears, swimming, allergies, cleaning mistakes, warning signs, and vet questions.",
    intro:
      "Ear problems can be painful, smelly, and frustrating for dogs. Shaking, scratching, redness, discharge, or a bad smell can have several causes, including infection, allergies, grass seeds, mites, water exposure, or foreign material.",
    quickFacts: [
      ...disclaimer,
      "Do not pour random cleaners, oils, peroxide, alcohol, or leftover ear drops into a dog's ear.",
      "A vet needs to check the ear canal and eardrum before the right treatment can be chosen.",
    ],
    context: [
      "South African dogs may develop ear problems after swimming, beach trips, grass seeds, humid weather, dust, allergies, or repeated scratching from skin irritation.",
      "Floppy-eared breeds, dogs with narrow ear canals, and dogs with chronic allergies may need extra monitoring.",
    ],
    checklist: [
      "Watch for head shaking, scratching, rubbing, redness, smell, discharge, swelling, or pain.",
      "Note swimming, grooming, grass walks, dust exposure, food changes, or allergy flare-ups.",
      "Avoid pushing cotton buds into the ear canal.",
      "Do not use leftover ear medication from another episode or another pet.",
      "Book a vet check if signs are painful, smelly, recurring, or not improving.",
    ],
    vetQuestions: [
      "What is causing the ear signs?",
      "Is the eardrum safe and intact?",
      "Should skin allergies, food sensitivity, parasites, or grass seeds be investigated?",
      "How should I clean the ears safely, if at all?",
      "What signs mean I should return sooner?",
    ],
    warnings: [
      ...urgentWarnings,
      "Severe pain, head tilt, loss of balance, swelling, bleeding, sudden deafness, or facial changes need prompt veterinary care.",
    ],
    prevention: [
      "Dry ears gently after water exposure if your vet recommends it.",
      "Ask your groomer not to over-clean or irritate ears.",
      "Investigate repeated ear infections instead of relying on leftover drops.",
      "Keep parasite and allergy discussions current with your vet.",
    ],
    tableRows: [
      ["Head shaking", "Ear pain, water, foreign material, infection, or allergy may be involved."],
      ["Bad smell", "Often needs a vet check rather than home cleaning."],
      ["Dark or yellow discharge", "Can point to infection, yeast, mites, or inflammation."],
      ["Recurring ear problems", "Underlying allergy or anatomy may need long-term planning."],
    ],
    faqs: [
      {
        question: "Can I use human ear drops on my dog?",
        answer:
          "No. Dog ears need veterinary assessment, and the wrong product can worsen pain or damage.",
      },
      {
        question: "Do floppy-eared dogs get more ear problems?",
        answer:
          "Some floppy-eared dogs are more prone to moisture and irritation, but any dog with ear signs should be assessed.",
      },
      {
        question: "Can swimming cause ear infections?",
        answer:
          "Water exposure may contribute in some dogs, especially if allergies or ear shape already make ears sensitive.",
      },
    ],
    related: [
      { title: "Ear Infection Signs", description: "Symptom-led ear warning guide.", href: "/health/dog-ear-infection-signs-south-africa" },
      { title: "Skin Allergies", description: "Allergy links with recurring ear issues.", href: "/health/dog-skin-allergies-south-africa" },
      { title: "Grooming", description: "Safe coat and ear-care questions for groomers.", href: "/grooming" },
      ...commonRelated,
    ],
  },
  {
    slug: "dog-arthritis-south-africa",
    title: "Dog Arthritis in South Africa",
    seoTitle: "Dog Arthritis South Africa | Mobility Signs and Vet Care",
    description:
      "A South African guide to dog arthritis signs, stiffness, weight management, flooring, gentle exercise, vet assessment, long-term care, and cost planning.",
    intro:
      "Arthritis is a common long-term mobility concern, especially in older dogs, large breeds, overweight dogs, and dogs with previous injuries. Owners should not assume stiffness is just age; a vet can assess pain and help plan safer comfort care.",
    quickFacts: [
      ...disclaimer,
      "Do not give human painkillers to dogs. Some are dangerous or fatal.",
      "Mobility changes are worth discussing even if the dog still eats and wags their tail.",
    ],
    context: [
      "South African homes often include tiled floors, stairs, steep driveways, gardens, bakkie trips, beach walks, and hot pavements. These can affect dogs with sore joints.",
      "Weight control, gentle movement, traction, bedding, and vet-led pain management planning often matter more than one dramatic change.",
    ],
    checklist: [
      "Note stiffness after rest, reluctance to jump, slipping, lagging on walks, licking joints, or grumpiness when touched.",
      "Use non-slip mats where your dog struggles.",
      "Keep exercise gentle and consistent until your vet advises otherwise.",
      "Track weight and body condition.",
      "Book a vet check before starting supplements, medication, or intense exercise changes.",
    ],
    vetQuestions: [
      "Could pain, arthritis, injury, hip disease, or another condition be causing the signs?",
      "What tests or examination findings are needed?",
      "What weight goal is safe?",
      "Which exercise is appropriate for my dog's age and condition?",
      "What long-term costs should I plan for?",
    ],
    warnings: [
      ...urgentWarnings,
      "Sudden lameness, severe pain, dragging limbs, inability to stand, swollen joints, or limping after trauma needs prompt vet care.",
    ],
    prevention: [
      "Keep nails trimmed so footing is easier.",
      "Use ramps or steps only if they are safe and your dog accepts them.",
      "Avoid weekend over-exercise after a sedentary week.",
      "Manage weight early because extra weight can make sore joints work harder.",
    ],
    tableRows: [
      ["Stiff after sleeping", "Can suggest joint discomfort, but a vet should assess cause."],
      ["Slipping on tiles", "May need traction changes and pain assessment."],
      ["Less interest in walks", "Pain, heart, heat, weight, or other illness can be involved."],
      ["Grumpy when touched", "Pain should be considered, not dismissed as bad behaviour."],
    ],
    faqs: [
      {
        question: "Is stiffness normal in old dogs?",
        answer:
          "Stiffness is common, but it should still be discussed with a vet because pain relief and comfort planning may help.",
      },
      {
        question: "Can I give my dog human pain tablets?",
        answer:
          "No. Human pain medication can be dangerous for dogs. Ask your vet for safe options.",
      },
      {
        question: "Should arthritic dogs still exercise?",
        answer:
          "Often yes, but the type and amount should be guided by your vet based on your dog's condition.",
      },
    ],
    related: [
      { title: "Senior Dog Care", description: "Routine comfort and mobility planning.", href: "/health/senior-dog-care-south-africa" },
      { title: "Overweight Dog", description: "Weight and joint comfort planning.", href: "/health/overweight-dog-south-africa" },
      { title: "Chronic Health Costs", description: "Budget for long-term vet care.", href: "/health/chronic-dog-health-costs-south-africa" },
      ...commonRelated,
    ],
  },
  {
    slug: "dog-hip-dysplasia-south-africa",
    title: "Dog Hip Dysplasia in South Africa",
    seoTitle: "Dog Hip Dysplasia South Africa | Signs, Vet Checks and Care",
    description:
      "A South African guide to dog hip dysplasia concerns, mobility signs, large-breed planning, vet assessment, weight management, exercise, costs, and owner questions.",
    intro:
      "Hip dysplasia is a joint-development concern that owners often worry about in large and active breeds. Only a vet can assess the dog properly, but owners can watch for mobility changes and plan early care questions.",
    quickFacts: [
      ...disclaimer,
      "Do not diagnose hip dysplasia from gait videos, breed type, or online descriptions alone.",
      "Large breeds, fast growth, weight, exercise, genetics, and injury history can all matter.",
    ],
    context: [
      "South African homes may have slippery tiles, stairs, high beds, bakkie loading, uneven gardens, and long weekend hikes that can expose mobility problems.",
      "Responsible breeders should be willing to discuss health screening, but DogHaven does not list or verify breeders.",
    ],
    checklist: [
      "Watch for bunny-hopping, difficulty rising, reluctance to jump, swaying hindquarters, pain, or reduced exercise tolerance.",
      "Keep puppies lean and avoid extreme forced exercise while growing.",
      "Ask about safe exercise for large-breed puppies and adults.",
      "Use non-slip surfaces if your dog struggles on tiles.",
      "Book a vet check if signs are persistent, painful, or worsening.",
    ],
    vetQuestions: [
      "Could the signs be hip dysplasia, arthritis, injury, spine pain, or another issue?",
      "Are X-rays or referral needed?",
      "What weight, exercise, and home changes should we make?",
      "What long-term options might be discussed if signs progress?",
      "Which costs should I plan for over time?",
    ],
    warnings: [
      ...urgentWarnings,
      "Sudden inability to use the back legs, severe pain, dragging, trauma, or collapse needs urgent veterinary care.",
    ],
    prevention: [
      "Choose puppies responsibly and ask about health screening without accepting vague promises.",
      "Keep growing dogs lean with vet-guided nutrition.",
      "Avoid repetitive high-impact activity for growing puppies.",
      "Plan insurance and emergency savings before chronic problems appear.",
    ],
    tableRows: [
      ["Large-breed puppy", "Discuss growth, nutrition, weight, and safe exercise with a vet."],
      ["Adult with hind-end weakness", "Vet assessment can separate hip, knee, spine, arthritis, and nerve concerns."],
      ["Slipping or stairs", "Home setup can affect comfort but does not replace diagnosis."],
      ["Insurance planning", "Pre-existing exclusions may matter once signs are recorded."],
    ],
    faqs: [
      {
        question: "Can hip dysplasia be confirmed without X-rays?",
        answer:
          "A vet needs to examine the dog and decide what diagnostics are appropriate. Online signs are not enough.",
      },
      {
        question: "Which breeds get hip dysplasia?",
        answer:
          "Large and giant breeds are often discussed, but any dog with mobility signs should be checked rather than judged by breed alone.",
      },
      {
        question: "Does weight matter?",
        answer:
          "Yes. Keeping a dog lean can reduce stress on joints, but weight plans should be safe and vet-guided.",
      },
    ],
    related: [
      { title: "Large Breed Food", description: "Growth and feeding questions for large dogs.", href: "/food/dog-food-for-large-breeds-south-africa" },
      { title: "Breed Guides", description: "Choose dogs with health and cost realities in mind.", href: "/breeds" },
      { title: "Dog Insurance", description: "Understand exclusions and pre-existing conditions.", href: "/insurance/pre-existing-conditions-pet-insurance-south-africa" },
      ...commonRelated,
    ],
  },
  {
    slug: "overweight-dog-south-africa",
    title: "Overweight Dog in South Africa",
    seoTitle: "Overweight Dog South Africa | Weight, Food and Vet Guidance",
    description:
      "A practical South African guide to overweight dogs, body condition, treats, portions, exercise, joint strain, vet questions, and safer weight planning.",
    intro:
      "An overweight dog may still look happy, but extra weight can affect joints, breathing, heat tolerance, skin folds, diabetes risk discussions, and long-term comfort. Weight loss should be planned gently with a vet, not rushed.",
    quickFacts: [
      ...disclaimer,
      "Do not crash diet a dog or cut food drastically without veterinary advice.",
      "Treats, braai scraps, biltong bits, boerewors, table food, and large portions can quietly add up.",
    ],
    context: [
      "South African owners often manage heat, small gardens, busy workdays, security concerns around walking, and generous family treat-giving. These can all affect weight.",
      "Small dogs can gain noticeable weight from tiny extras, while large dogs may become expensive to feed and harder to exercise when overweight.",
    ],
    checklist: [
      "Ask your vet to assess body condition and target weight.",
      "Measure meals rather than free-pouring food.",
      "Count treats, chews, training rewards, and table scraps.",
      "Increase activity gradually if your vet says exercise is safe.",
      "Track weight changes without expecting overnight results.",
    ],
    vetQuestions: [
      "Is my dog overweight, and what body condition score should we aim for?",
      "Could thyroid, joint pain, medication, neutering status, or other health issues affect weight?",
      "How many calories or portions are appropriate for this food?",
      "What treats are suitable, and how many?",
      "What exercise is safe for my dog's age, heat tolerance, and joints?",
    ],
    warnings: [
      ...urgentWarnings,
      "Breathing difficulty, collapse in heat, sudden weakness, painful movement, or refusal to exercise needs vet attention.",
    ],
    prevention: [
      "Use a measuring cup or kitchen scale for food.",
      "Keep training treats tiny and subtract them from daily food where your vet advises.",
      "Avoid fatty, salty braai leftovers and processed meats.",
      "Make weight checks part of routine vet care and grooming visits.",
    ],
    tableRows: [
      ["No waist visible", "Could suggest excess weight, but body condition should be assessed properly."],
      ["Heavy panting on short walks", "Heat, weight, heart, airway, or fitness issues may be involved."],
      ["Begging after meals", "May be habit, boredom, or portion mismatch; do not assume hunger."],
      ["Joint stiffness", "Extra weight can worsen discomfort and should be discussed with a vet."],
    ],
    faqs: [
      {
        question: "How do I know if my dog is overweight?",
        answer:
          "Ask your vet to assess body condition. Photos and breed averages can be misleading.",
      },
      {
        question: "Should I switch to diet food?",
        answer:
          "Discuss diet changes with your vet, especially for puppies, seniors, pregnant dogs, and dogs with health issues.",
      },
      {
        question: "Can treats still be used for training?",
        answer:
          "Yes, but use small rewards and count them as part of the daily intake.",
      },
    ],
    related: [
      { title: "Dog Feeding Calculator", description: "Estimate a starting point for food portions.", href: "/tools/dog-feeding-calculator" },
      { title: "How Much Should I Feed My Dog?", description: "Portions, body condition, and labels.", href: "/food/how-much-should-i-feed-my-dog" },
      { title: "Dog Arthritis", description: "Joint comfort and weight planning.", href: "/health/dog-arthritis-south-africa" },
      ...commonRelated,
    ],
  },
  {
    slug: "senior-dog-care-south-africa",
    title: "Senior Dog Care in South Africa",
    seoTitle: "Senior Dog Care South Africa | Comfort, Vet Checks and Planning",
    description:
      "A South African senior dog care guide covering mobility, dental care, weight, lumps, appetite, drinking, behaviour changes, comfort, costs, and vet checkups.",
    intro:
      "Senior dogs need practical, gentle care that notices change early. Older dogs may slow down, but pain, dental disease, weight change, thirst, lumps, coughing, confusion, or appetite changes should not be dismissed as age alone.",
    quickFacts: [
      ...disclaimer,
      "Senior care is about comfort, prevention, early vet checks, and quality of life.",
      "Changes in appetite, drinking, mobility, breathing, weight, toileting, or behaviour should be discussed with a vet.",
    ],
    context: [
      "South African senior dogs may struggle with slippery tiles, summer heat, stairs, long car trips, beach sand, uneven gardens, and younger dogs in busy households.",
      "Routine vet checks, dental planning, parasite prevention, grooming, and budgeting become more important as dogs age.",
    ],
    checklist: [
      "Track weight, appetite, thirst, toileting, mobility, breathing, lumps, skin, coat, and behaviour.",
      "Use non-slip mats, comfortable bedding, shade, water, and easier access to favourite spaces.",
      "Keep nails trimmed and grooming gentle.",
      "Ask your vet how often senior checkups are appropriate.",
      "Use the senior checklist tool before routine visits.",
    ],
    vetQuestions: [
      "Is my dog's stiffness, appetite change, or behaviour change expected ageing or something treatable?",
      "Should we check teeth, blood, urine, lumps, heart, joints, or weight?",
      "What comfort changes should I make at home?",
      "What warning signs mean urgent care?",
      "How should I plan long-term costs?",
    ],
    warnings: [
      ...urgentWarnings,
      "Senior dogs should be checked promptly for sudden collapse, breathing trouble, severe pain, repeated vomiting, inability to stand, seizures, or fast weight loss.",
    ],
    prevention: [
      "Keep routine checkups even when your dog seems stable.",
      "Adjust walks for heat, joints, and energy.",
      "Monitor lumps and changes instead of waiting months.",
      "Plan insurance, savings, and transport before urgent care is needed.",
    ],
    tableRows: [
      ["More sleeping", "Can be ageing, pain, heart disease, endocrine disease, or other illness."],
      ["Drinking more water", "Needs a vet discussion, especially with urination or weight changes."],
      ["Difficulty rising", "Joint pain, weakness, nails, flooring, or neurological issues may be involved."],
      ["New lumps", "Ask a vet whether they should be measured, sampled, or monitored."],
    ],
    faqs: [
      {
        question: "When is a dog considered senior?",
        answer:
          "It depends on size, breed, and health. Large dogs often age earlier than small dogs. Ask your vet when to start senior screening.",
      },
      {
        question: "Should senior dogs exercise?",
        answer:
          "Most still need gentle movement, but exercise should match health, heat, joints, and vet advice.",
      },
      {
        question: "Are behaviour changes normal in old dogs?",
        answer:
          "Some changes happen with age, but confusion, anxiety, house soiling, aggression, or sleep changes should be discussed with a vet.",
      },
    ],
    related: [
      { title: "Senior Dog Care Checklist", description: "Plan checks for mobility, teeth, weight, appetite, skin, and behaviour.", href: "/tools/senior-dog-care-checklist" },
      { title: "Senior Dog Food", description: "Food considerations for older dogs.", href: "/food/senior-dog-food-south-africa" },
      { title: "Senior Vet Checkups", description: "What to ask during routine visits.", href: "/health/senior-dog-vet-checkups-south-africa" },
      ...commonRelated,
    ],
  },
  {
    slug: "senior-dog-vet-checkups-south-africa",
    title: "Senior Dog Vet Checkups in South Africa",
    seoTitle: "Senior Dog Vet Checkups South Africa | What to Ask Your Vet",
    description:
      "A South African guide to senior dog vet checkups, dental checks, blood and urine questions, lumps, mobility, weight, chronic care, and cost planning.",
    intro:
      "Senior dog checkups help owners catch changes earlier and ask better questions. The right schedule depends on your dog's age, size, breed, medical history, medication, and current symptoms.",
    quickFacts: [
      ...disclaimer,
      "A senior checkup is not only for obviously sick dogs.",
      "Ask your vet which screening tests are useful for your dog rather than copying another owner's plan.",
    ],
    context: [
      "Access to vets, transport, budget, and emergency clinics can differ across South African cities, suburbs, rural areas, and holiday destinations. Planning routine care reduces last-minute panic.",
      "Insurance exclusions, pre-existing conditions, chronic medication reviews, and repeat tests can affect budgeting for older dogs.",
    ],
    checklist: [
      "Bring notes on appetite, water intake, urination, stool, vomiting, coughing, mobility, sleep, behaviour, and weight.",
      "Bring medication, supplement, parasite prevention, and vaccination details.",
      "Ask about dental, lump, joint, heart, blood, urine, and body-condition checks.",
      "Discuss heat tolerance and safe exercise.",
      "Ask what changes should trigger an earlier visit.",
    ],
    vetQuestions: [
      "How often should my senior dog have checkups?",
      "Do you recommend blood tests, urine tests, dental assessment, or lump checks?",
      "Is my dog's weight and muscle condition healthy?",
      "Should we review pain, arthritis, dental care, or diet?",
      "What costs should I plan for over the next year?",
    ],
    warnings: [
      ...urgentWarnings,
      "Fast weight loss, severe lethargy, collapse, repeated vomiting, breathing trouble, seizures, sudden blindness, or inability to stand should not wait for a routine appointment.",
    ],
    prevention: [
      "Keep a simple monthly senior health note.",
      "Photograph and measure lumps only if safe, then show the vet.",
      "Check medication instructions and recheck dates.",
      "Plan transport for larger senior dogs before they are unable to walk.",
    ],
    tableRows: [
      ["Dental check", "Mouth pain can hide behind normal eating."],
      ["Blood or urine discussion", "May help monitor chronic disease or medication safety when a vet recommends it."],
      ["Mobility review", "Pain, weight, nails, floors, and exercise all matter."],
      ["Cost planning", "Routine checks may prevent some urgent surprises, but not every illness is preventable."],
    ],
    faqs: [
      {
        question: "How often should senior dogs see a vet?",
        answer:
          "Ask your vet. Some senior dogs need more frequent checks than healthy young adults, especially with chronic conditions.",
      },
      {
        question: "Should I wait until my senior dog seems sick?",
        answer:
          "No. Routine checks can help catch dental, weight, lump, joint, and chronic-health changes earlier.",
      },
      {
        question: "What should I bring to a senior checkup?",
        answer:
          "Bring symptom notes, medication details, food information, vaccine records, parasite prevention details, and questions about costs or follow-up.",
      },
    ],
    related: [
      { title: "Senior Dog Care", description: "Comfort and daily care planning.", href: "/health/senior-dog-care-south-africa" },
      { title: "Chronic Health Costs", description: "Budgeting for long-term care.", href: "/health/chronic-dog-health-costs-south-africa" },
      { title: "Dog Health Calendar", description: "Plan routine prevention reminders.", href: "/tools/dog-health-calendar" },
      ...commonRelated,
    ],
  },
  {
    slug: "chronic-dog-health-costs-south-africa",
    title: "Chronic Dog Health Costs in South Africa",
    seoTitle: "Chronic Dog Health Costs South Africa | Budget and Insurance Guide",
    description:
      "A neutral South African guide to chronic dog health costs, ongoing vet visits, diagnostics, medication reviews, insurance exclusions, pre-existing conditions, and budgeting.",
    intro:
      "Chronic health costs can build slowly through repeat consultations, monitoring tests, dental care, mobility support, diet changes, medication reviews, transport, and emergencies. Planning helps owners ask clearer questions without delaying needed care.",
    quickFacts: [
      ...disclaimer,
      "This page is educational and is not financial advice.",
      "Insurance wording, exclusions, excesses, limits, waiting periods, and pre-existing-condition rules can change. Read policy documents and ask the insurer directly.",
    ],
    context: [
      "Costs can vary widely by city, clinic, dog size, condition, diagnostics, medication, transport, after-hours care, and inflation. DogHaven does not invent exact clinic prices.",
      "South African owners should plan for routine care and urgent care separately, especially for senior dogs and breeds with known health concerns.",
    ],
    checklist: [
      "Ask your vet what recurring visits, tests, medication reviews, dental checks, or monitoring may be needed.",
      "Request written estimates where possible.",
      "Check whether insurance covers new illness, chronic illness, dental care, medication, diagnostics, and follow-up.",
      "Build an emergency fund even if you have insurance.",
      "Keep records, invoices, lab results, and policy documents organised.",
    ],
    vetQuestions: [
      "What are the likely ongoing care needs for this condition?",
      "How often should we recheck?",
      "Which symptoms mean urgent care?",
      "Are there welfare-focused options if my budget is limited?",
      "What can be monitored at home without replacing vet visits?",
    ],
    warnings: [
      ...urgentWarnings,
      "Do not stop medication, skip rechecks, or change doses because of cost without speaking to your vet first.",
    ],
    prevention: [
      "Compare insurance before symptoms become pre-existing.",
      "Use routine checkups to catch dental, weight, skin, ear, and mobility issues earlier.",
      "Discuss realistic care plans openly with your vet.",
      "Use DogHaven cost tools for planning, not quotes.",
    ],
    tableRows: [
      ["Recurring consults", "Follow-ups, medication checks, and monitoring visits may be needed."],
      ["Diagnostics", "Blood, urine, imaging, dental, or skin tests may be recommended by a vet."],
      ["Insurance limits", "Annual limits, exclusions, excesses, waiting periods, and pre-existing rules matter."],
      ["Emergency care", "After-hours visits can affect budgets and should not be delayed when symptoms are serious."],
    ],
    faqs: [
      {
        question: "Can pet insurance cover chronic dog conditions?",
        answer:
          "It depends on the policy, timing, exclusions, limits, and whether the condition is pre-existing. Read the wording and ask the insurer directly.",
      },
      {
        question: "How can I reduce chronic care costs safely?",
        answer:
          "Ask your vet for welfare-safe options, written estimates, recheck priorities, prevention plans, and whether any costs can be planned over time.",
      },
      {
        question: "Should I delay vet care while comparing costs?",
        answer:
          "No if symptoms are urgent, painful, or worsening. Contact a vet first, then discuss cost options honestly.",
      },
    ],
    related: [
      { title: "Compare Dog Insurance", description: "Neutral policy comparison questions.", href: "/insurance/compare-dog-insurance-south-africa" },
      { title: "Pre-Existing Conditions", description: "Understand insurance wording before relying on cover.", href: "/insurance/pre-existing-conditions-pet-insurance-south-africa" },
      { title: "Dog Cost Calculator", description: "Estimate monthly planning categories.", href: "/tools/dog-cost-calculator" },
      ...commonRelated,
    ],
  },
];

export const phase23ChronicHealthGuidePages: GuideContent[] = topics.map((topic) => ({
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
      table: {
        headers: ["What owners may notice", "Why it matters"],
        rows: topic.tableRows,
      },
    },
    {
      heading: "Practical checklist",
      body: ["Use this checklist to prepare for a calm, useful vet conversation."],
      checklist: topic.checklist,
    },
    {
      heading: "Questions to ask your vet",
      body: ["Write down questions before the appointment so symptoms, costs, prevention, and next steps are clearer."],
      checklist: topic.vetQuestions,
    },
    {
      heading: "Warning signs that need vet attention",
      body: topic.warnings,
    },
    {
      heading: "Prevention and management tips",
      body: ["Small routine habits can make chronic and senior care easier, but they do not replace veterinary diagnosis or treatment."],
      checklist: topic.prevention,
    },
  ],
  faqs: topic.faqs,
  related: topic.related,
  sources,
}));

export function getPhase23Guide(slug: string) {
  return phase23ChronicHealthGuidePages.find((guide) => guide.slug === slug);
}

export function getPhase23GuidesByHub(hubPath: string) {
  return phase23ChronicHealthGuidePages.filter((guide) => guide.hubPath === hubPath);
}

export const phase23HealthCards: CardLink[] = [
  { title: "Senior Dog Care Checklist", description: "Free planning tool for mobility, teeth, weight, appetite, skin, lumps, behaviour, and comfort.", href: "/tools/senior-dog-care-checklist" },
  ...phase23ChronicHealthGuidePages.map((guide) => ({
    title: guide.title,
    description: guide.description,
    href: guide.path,
  })),
];

export const phase23FoodCards: CardLink[] = [
  { title: "Overweight Dog", description: "Food portions, treats, body condition, and vet-guided weight planning.", href: "/health/overweight-dog-south-africa" },
  { title: "Dog Skin Allergies", description: "Food sensitivity discussions without guessing or diagnosing.", href: "/health/dog-skin-allergies-south-africa" },
  { title: "Senior Dog Care", description: "Food, weight, appetite, dental, and comfort checks for older dogs.", href: "/health/senior-dog-care-south-africa" },
  { title: "Dog Dental Care", description: "Mouth health, chewing, breath, and vet dental questions.", href: "/health/dog-dental-care-south-africa" },
];

export const phase23GroomingCards: CardLink[] = [
  { title: "Dog Skin Allergies", description: "Grass, dust, fleas, food sensitivity, and grooming questions.", href: "/health/dog-skin-allergies-south-africa" },
  { title: "Dog Hot Spots", description: "Fast-worsening skin sores and when a vet check should not wait.", href: "/health/dog-hot-spots-south-africa" },
  { title: "Dog Ear Infections", description: "Ear smell, shaking, swimming, allergies, and safe cleaning questions.", href: "/health/dog-ear-infections-south-africa" },
  { title: "Senior Dog Care", description: "Gentle grooming, nails, skin, coat, lumps, and comfort for older dogs.", href: "/health/senior-dog-care-south-africa" },
];

export const phase23CostCards: CardLink[] = [
  { title: "Dog Teeth Cleaning", description: "Dental cleaning quote questions and cost factors.", href: "/health/dog-teeth-cleaning-south-africa" },
  { title: "Chronic Dog Health Costs", description: "Budgeting for repeat visits, diagnostics, medication reviews, and insurance limits.", href: "/health/chronic-dog-health-costs-south-africa" },
  { title: "Senior Dog Vet Checkups", description: "Routine senior screening and planning questions.", href: "/health/senior-dog-vet-checkups-south-africa" },
  { title: "Dog Arthritis", description: "Mobility, weight, home setup, and long-term care costs.", href: "/health/dog-arthritis-south-africa" },
];

export const phase23InsuranceCards: CardLink[] = [
  { title: "Chronic Dog Health Costs", description: "Ongoing care, exclusions, limits, and pre-existing condition planning.", href: "/health/chronic-dog-health-costs-south-africa" },
  { title: "Senior Dog Care", description: "Older-dog health checks and cost planning.", href: "/health/senior-dog-care-south-africa" },
  { title: "Dog Arthritis", description: "Long-term mobility care and insurance questions.", href: "/health/dog-arthritis-south-africa" },
  { title: "Dog Dental Care", description: "Dental checks, teeth cleaning, and policy wording questions.", href: "/health/dog-dental-care-south-africa" },
];

export const phase23EmergencyCards: CardLink[] = [
  { title: "Dog Hot Spots", description: "Painful skin sores can worsen quickly and may need prompt vet care.", href: "/health/dog-hot-spots-south-africa" },
  { title: "Dog Ear Infections", description: "Severe pain, head tilt, balance issues, or swelling should not wait.", href: "/health/dog-ear-infections-south-africa" },
  { title: "Dog Arthritis", description: "Sudden severe lameness or inability to stand needs urgent help.", href: "/health/dog-arthritis-south-africa" },
  { title: "Senior Dog Care", description: "Older dogs need faster action when symptoms change suddenly.", href: "/health/senior-dog-care-south-africa" },
];

export const phase23DogServicesCards: CardLink[] = [
  { title: "Senior Dog Care Checklist", description: "Prepare boarding, daycare, sitter, or walker notes for older dogs.", href: "/tools/senior-dog-care-checklist" },
  { title: "Dog Arthritis", description: "Ask services about floors, stairs, rest, transport, and gentle handling.", href: "/health/dog-arthritis-south-africa" },
  { title: "Dog Ear Infections", description: "Discuss swimming, grooming, and ear comfort before high-contact services.", href: "/health/dog-ear-infections-south-africa" },
  { title: "Dog Skin Allergies", description: "Share skin, food, parasite, and grooming notes with carers.", href: "/health/dog-skin-allergies-south-africa" },
];
