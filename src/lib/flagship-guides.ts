import type { GuideContent } from "@/lib/content";
import { batch2FlagshipGuides } from "@/lib/batch2-flagship-guides";
import { batch3FlagshipGuides } from "@/lib/batch3-flagship-guides";

export const flagshipSlugs = [
  "biliary-tick-bite-fever-dogs-south-africa",
  "ticks-and-fleas-dogs-south-africa",
  "pet-insurance-for-dogs-south-africa",
  "puppy-scam-checklist-south-africa",
  "cost-of-owning-a-dog-south-africa",
  "rabies-south-africa",
  "toxic-foods-for-dogs-south-africa",
  "vaccination-schedule-south-africa",
  "best-dog-food-south-africa",
  "dog-adoption-south-africa",
  "dog-poisoning-south-africa",
  "heatstroke-in-dogs-south-africa",
  "dog-behaviour-problems-south-africa",
  "best-dogs-for-active-owners-south-africa",
  "best-dogs-for-small-homes-south-africa",
] as const;

export const flagshipGuides: GuideContent[] = [
  {
    slug: "biliary-tick-bite-fever-dogs-south-africa",
    path: "/health/biliary-tick-bite-fever-dogs-south-africa",
    hubTitle: "Dog Health",
    hubPath: "/health",
    title: "Biliary Tick Bite Fever in Dogs in South Africa",
    seoTitle: "Biliary in Dogs South Africa | Signs and Urgent Vet Care",
    description:
      "Understand canine biliary in South Africa, possible warning signs, urgent veterinary care, testing, tick exposure, prevention, and recovery questions.",
    intro:
      "In South Africa, “biliary” or “tick bite fever” commonly refers to canine babesiosis, a tick-borne disease that can damage red blood cells and become serious quickly. Its signs overlap with many other illnesses, so a tick or one symptom cannot confirm it. A dog that is weak, unusually quiet, off food, pale at the gums, passing abnormal urine, collapsing, or getting worse rapidly needs prompt veterinary assessment.",
    updated: "2026-08-09",
    primaryImage: {
      src: "/images/guides/biliary-tick-check-dog-south-africa.webp",
      alt: "Owner checking a dog's coat for ticks after an outdoor walk",
      width: 1536,
      height: 1024,
    },
    isHealthGuide: true,
    quickFacts: [
      "Pale gums, collapse, breathing difficulty, marked weakness, dark or red-brown urine, or rapid deterioration are reasons to contact a vet urgently.",
      "Finding a tick shows exposure, not a diagnosis. Not finding a tick does not rule out tick-borne illness.",
      "Symptoms vary, and a veterinarian may need an examination, blood-cell assessment, a blood smear, or other tests to identify the cause and severity.",
      "Do not give human medicines, leftover treatment, or a previous dog's medication while waiting for care.",
    ],
    sections: [
      {
        heading: "What biliary means",
        body: [
          "Biliary is the familiar South African term for canine babesiosis. The disease is caused by Babesia parasites that infect red blood cells, and South African veterinary research identifies Babesia rossi as an important cause of severe clinical disease locally. Owners may also say tick bite fever or bosluiskoors, but several illnesses can follow tick exposure and share similar early signs.",
          "A name used in conversation is not a diagnosis. Anaemia, immune-mediated disease, poisoning, other infections, liver or kidney problems, and many unrelated conditions can also make a dog weak, pale, feverish, or unwilling to eat. The safe response is to describe what you can see and let a veterinarian investigate the cause.",
        ],
      },
      {
        heading: "How infection happens and why ticks matter",
        body: [
          "Babesia is transmitted at a high level through infected ticks feeding on a dog. Exposure may happen in a garden, long grass, a park, on a farm, at boarding facilities, while travelling, or on an ordinary neighbourhood walk. Owners do not always see the tick: it may be small, hidden in the coat, removed during grooming, or already detached.",
          "Removing an attached tick is useful, but it cannot show whether infection occurred or reverse an infection already transmitted. Protection products reduce risk when correctly chosen and used, but no routine should make an owner dismiss new illness after possible exposure.",
        ],
      },
      {
        heading: "Possible symptoms and why they vary",
        body: [
          "Early illness can look frustratingly vague. A dog may simply seem quieter, tire more easily, refuse a meal, feel feverish, or lag behind on a walk. As red blood cells are affected, owners may notice pale gums or inner eyelids, weakness, faster breathing, yellow discolouration, or urine that looks unusually dark, orange, red-brown, or otherwise abnormal.",
          "Dogs do not all show the same combination or severity. Age, underlying health, immune response, time since infection, parasite factors, anaemia, dehydration, and organ complications can change the picture. Some dogs deteriorate rapidly. Others have subtler signs that still warrant examination. No single symptom proves biliary, and apparently normal urine or gums do not rule it out.",
        ],
        table: {
          headers: ["Warning sign", "Why it matters", "What the owner should do"],
          rows: [
            ["Pale, white, grey, or yellow-tinged gums", "May reflect anaemia, poor circulation, red-cell breakdown, or another serious problem.", "Contact a vet promptly. If the dog is weak, breathing hard, or worsening, treat it as urgent."],
            ["Marked weakness, severe lethargy, or loss of appetite", "These signs are nonspecific but can accompany significant illness and may worsen quickly.", "Phone the clinic, describe the timeline and tick exposure, and follow its urgency advice."],
            ["Dark, orange, or red-brown urine", "Abnormal urine can occur with red-cell damage or other urinary, liver, muscle, and systemic problems.", "Arrange urgent veterinary assessment and, if practical, take a photo or fresh sample only if the clinic requests it."],
            ["Collapse, breathing difficulty, confusion, seizures, or inability to stand", "These can indicate a life-threatening complication or a different emergency.", "Go to an emergency veterinary service immediately and phone ahead while someone else drives."],
            ["Rapid deterioration after possible tick exposure", "A dog can become critically ill even when the first signs seemed mild.", "Do not wait for another symptom or for the next routine appointment."],
          ],
        },
      },
      {
        heading: "When urgent care cannot wait",
        body: [
          "Seek emergency veterinary help for collapse, difficulty breathing, inability to stand, seizures, severe weakness, very pale or grey gums, significant bleeding, repeated vomiting with weakness, or fast deterioration. Tell the clinic that tick exposure or biliary is a concern, but stay open to other diagnoses so the team can triage safely.",
          "If you are travelling, identify the nearest open veterinary facility before setting off. Keep the dog quiet, minimise exertion, and transport them securely. Do not delay to search for a tick, wait for appetite to return, or try a home remedy.",
        ],
        callout: "important",
      },
      {
        heading: "Why a vet examination and testing are needed",
        body: [
          "The vet will assess the whole dog, not only the suspected tick bite. Gum colour, temperature, hydration, heart and breathing rates, abdominal findings, neurological status, and evidence of anaemia or complications can guide the next steps. Testing may include a blood count or packed cell volume, examination of a blood smear, and other laboratory work selected for that dog.",
          "Test choice and interpretation depend on timing and clinical findings. A result is considered alongside the examination and history, and further monitoring may be needed if the dog is seriously ill or the first answer does not explain the symptoms. This is why online photographs and symptom checkers cannot safely confirm or exclude biliary.",
        ],
        links: [
          { title: "Preparing for a vet visit", description: "Use a concise checklist to organise symptoms, medicines, records, and questions.", href: "/tools/vet-visit-checklist" },
        ],
      },
      {
        heading: "What to tell your vet",
        body: [
          "A clear timeline is more useful than trying to supply a diagnosis. Note when your dog was last normal, when each change began, whether signs are stable or worsening, and anything that could have affected the dog. If another person saw the first symptoms, ask them for the details before you call.",
        ],
        checklist: [
          "When the weakness, appetite change, feverish behaviour, gum change, vomiting, or urine change began.",
          "Any ticks found recently, where they were attached, and likely exposure from walks, gardens, farms, boarding, travel, or other dogs.",
          "The tick-prevention product, weight band, last application or dose date, and whether any doses were late or missed.",
          "Your dog's age, current weight if known, medical conditions, previous biliary episodes, and all medicines or supplements.",
          "Changes in drinking, urination, stool, breathing, movement, alertness, and gum or eye colour.",
          "Relevant photos or short videos, vaccine and medical records, product packaging, and insurance details if these are easy to take.",
        ],
      },
      {
        heading: "What not to do",
        body: [
          "Biliary is not a condition to diagnose or treat from a leftover prescription. Treatment and supportive care depend on the dog's diagnosis, weight, severity, other illnesses, and test results. The wrong medicine or a delay can add risk and can make assessment harder.",
        ],
        bullets: [
          "Do not give human painkillers, anti-inflammatories, antibiotics, supplements, or herbal mixtures unless the treating vet specifically directs you.",
          "Do not reuse medicine from a previous biliary case or from another animal.",
          "Do not force food or large amounts of water into a weak, vomiting, confused, or poorly responsive dog.",
          "Do not assume removing a tick, using prevention, or seeing temporary improvement means veterinary care is unnecessary.",
          "Do not make the dog exercise to test whether the weakness is real.",
        ],
        callout: "caution",
      },
      {
        heading: "Tick checks and prevention planning",
        body: [
          "Build tick checking into the return from walks, parks, farms, kennels, bush routes, and travel stops. Run your hands slowly against the coat and inspect the ears, eyelids, head, under the collar, neck, armpits, groin, between the toes, tail base, and skin folds. Long-coated dogs and dark coats need patient, close inspection.",
          "Dogs with frequent outdoor access, farm or bush exposure, boarding stays, travel, hunting or hiking routines, or contact with tick-prone environments may need especially careful planning. Ask your vet which labelled product and schedule fit your dog's exact age, weight, health, lifestyle, swimming habits, and other animals in the home. Never assume a dog product is safe for cats.",
        ],
        links: [
          { title: "Build a parasite-prevention routine", description: "See the full South African tick-and-flea check and household-control guide.", href: "/health/ticks-and-fleas-dogs-south-africa" },
        ],
      },
      {
        heading: "Recovery and follow-up questions",
        body: [
          "Recovery is individual. Before leaving the clinic, make sure you understand each medicine, feeding and activity advice, what changes are expected, and which signs mean the dog must return sooner. Ask whether repeat examination or blood testing is needed and how quickly energy, appetite, gum colour, and urine should change.",
          "Keep follow-up appointments even if the dog looks brighter. Ask when normal walks, training, travel, boarding, or parasite prevention can resume, and whether any underlying complication changes the longer-term plan. Contact the clinic if recovery stalls, a new symptom appears, or you cannot give the prescribed care as directed.",
        ],
        checklist: [
          "What exactly was diagnosed, and were any complications found?",
          "Which changes should happen first, and over what general timeframe?",
          "Which warning signs require an immediate return?",
          "When are repeat blood tests or examinations needed?",
          "How should food, water, rest, exercise, and tick prevention be managed during recovery?",
        ],
      },
    ],
    faqs: [
      { question: "Does finding a tick mean my dog has biliary?", answer: "No. A tick confirms exposure, not infection. If your dog becomes unwell after possible exposure, a veterinarian should assess the symptoms and decide whether testing is needed." },
      { question: "Can a dog have biliary without dark urine?", answer: "Yes. Symptoms vary, and dark urine is not present in every case. Weakness, appetite loss, feverish behaviour, pale gums, or other changes after tick exposure still deserve veterinary advice." },
      { question: "Can biliary be fatal?", answer: "Severe or complicated canine babesiosis can be life-threatening. Prompt assessment matters, particularly when a dog is pale, weak, collapsing, breathing abnormally, or deteriorating quickly." },
      { question: "Can my dog get biliary despite tick prevention?", answer: "No prevention method removes every risk. Correct product selection, on-time use, physical tick checks, and prompt veterinary care for illness signs work together." },
      { question: "How long does recovery take?", answer: "It depends on severity, complications, treatment response, and the individual dog. Follow the treating vet's recheck plan and ask what improvement and warning signs to expect." },
    ],
    related: [
      { title: "Ticks and Fleas", description: "Physical checks, household control, product safety, and prevention routines.", href: "/health/ticks-and-fleas-dogs-south-africa" },
      { title: "Pale Gums in Dogs", description: "Understand why abnormal gum colour needs prompt attention.", href: "/health/dog-pale-gums-south-africa" },
      { title: "When to Take Your Dog to the Vet", description: "Match symptom severity to the right next step.", href: "/health/when-to-take-your-dog-to-the-vet-south-africa" },
    ],
    sources: [
      { label: "MSD Animal Health South Africa: biliary in dogs", href: "https://www.msd-animal-health.co.za/informative-articles/biliary-in-dogs/", note: "South Africa-specific information on canine biliary, ticks, signs, diagnosis, and veterinary care." },
      { label: "University of Pretoria: canine babesiosis", href: "https://repository.up.ac.za/handle/2263/11021?show=full", note: "Onderstepoort review of canine babesiosis, including clinical findings, diagnosis, complications, and Babesia rossi context." },
      { label: "University of Pretoria: Babesia rossi in South African dogs", href: "https://repository.up.ac.za/items/767f3052-11ae-4dd3-a3de-6aa00af8dd22", note: "South African research involving dogs presented at Onderstepoort Veterinary Academic Hospital." },
      { label: "South African Veterinary Council", href: "https://savc.org.za/", note: "Professional veterinary context and public information for South Africa." },
      { label: "CDC: preventing ticks on pets", href: "https://www.cdc.gov/ticks/prevention/preventing-ticks-on-pets.html", note: "General guidance on prevention and checking pets for ticks." },
    ],
  },
  {
    slug: "ticks-and-fleas-dogs-south-africa",
    path: "/health/ticks-and-fleas-dogs-south-africa",
    hubTitle: "Dog Health",
    hubPath: "/health",
    title: "Ticks and Fleas on Dogs in South Africa",
    seoTitle: "Ticks and Fleas on Dogs South Africa | Checks and Prevention",
    description: "A practical South African guide to checking dogs for ticks and fleas, household control, product safety, prevention routines, and veterinary warning signs.",
    intro: "Ticks and fleas are not only a summer or bush-walk problem. South African dogs can encounter them in gardens, parks, long grass, farms, boarding facilities, holiday accommodation, and ordinary travel stops. A reliable routine combines the right species-specific product, hands-on checks, household control where needed, and fast veterinary advice when skin or illness signs appear.",
    updated: "2026-08-09",
    primaryImage: {
      src: "/images/guides/ticks-fleas-dog-check-south-africa.webp",
      alt: "Owner checking a dog's coat and skin for ticks and fleas",
      width: 1536,
      height: 1024,
    },
    isHealthGuide: true,
    quickFacts: [
      "Check dogs after outdoor activity even when they use prevention, paying attention to hidden warm areas and skin folds.",
      "One visible flea can be the sign of a larger household life cycle involving bedding, carpets, furniture edges, resting places, and other pets.",
      "Products must suit the dog's species, exact weight band, age, health, and household. Dog and cat products are not automatically interchangeable.",
      "Weakness, pale gums, feverish behaviour, dark urine, collapse, or severe lethargy after tick exposure needs urgent veterinary advice.",
    ],
    sections: [
      {
        heading: "Year-round risk with seasonal changes",
        body: [
          "Parasite pressure changes with temperature, rainfall, humidity, geography, wildlife, and the places a dog visits. Warmer or wetter periods can increase activity in some areas, but sheltered garden edges, kennels, indoor resting places, and local microclimates can support exposure beyond a simple summer season. Many South African owners therefore need a year-round plan tailored with their vet.",
          "Lifestyle changes risk too. Farm visits, long grass, hiking, dog parks, boarding, grooming, holiday travel, contact with other pets, and dogs that spend substantial time outdoors can all create new exposure. Reassess the plan before travel or boarding instead of assuming the home routine covers every setting.",
        ],
      },
      {
        heading: "How to check a dog for ticks",
        body: [
          "Check in good light when your dog is calm. Move slowly from nose to tail, parting the hair and running fingertips against the direction of the coat to feel small bumps. Compare both sides of the body and look closely at anything that feels new. A tick can be confused with a scab, skin tag, or nipple, so do not pull blindly.",
          "After walks, inspect before the dog settles onto furniture or bedding. Long coats, dense undercoats, dark pigmentation, and wriggly puppies make checks harder, so use short positive sessions and ask a vet or groomer to demonstrate safe handling if needed.",
        ],
      },
      {
        heading: "A complete tick-check checklist",
        body: ["Owners often check the back and miss the sheltered areas where parasites can hide. Work through the same order each time so gaps are less likely."],
        checklist: [
          "Around and inside the outer ear flap, behind the ears, and along the head and jaw.",
          "Around the eyelids and muzzle without poking or squeezing sensitive tissue.",
          "Under the collar or harness, across the neck, and along the shoulders.",
          "Inside both armpits and along the chest.",
          "The belly, groin, inner thighs, and genital area.",
          "Between every toe, around the nail beds, and between the paw pads.",
          "The tail base, under the tail, and around the rear legs.",
          "Skin folds, lips, dense feathering, and any warm area hidden by long hair.",
        ],
      },
      {
        heading: "If you find a tick",
        body: [
          "Use a purpose-made tick tool or fine-tipped tweezers if you know how to remove it safely. Grip close to the skin without crushing the tick's body, pull steadily, and clean the area and your hands. If the tick is close to the eye, deep in the ear, difficult to grasp, or your dog will not stay safely still, ask a veterinary team for help.",
          "Note the date and watch your dog rather than relying on the bite site. Removing a tick does not prove disease transmission and does not make later weakness, pale gums, appetite loss, feverish behaviour, or abnormal urine safe to ignore.",
        ],
        callout: "caution",
        links: [
          { title: "Biliary warning signs", description: "Know when possible tick-borne illness needs prompt or emergency veterinary care.", href: "/health/biliary-tick-bite-fever-dogs-south-africa" },
        ],
      },
      {
        heading: "How to recognise possible fleas",
        body: [
          "Fleas move quickly and may be difficult to see. Look for repeated scratching or chewing, especially around the rump and tail base, small scabs, hair loss, irritated skin, or dark specks known as flea dirt. A fine flea comb over a pale surface can help reveal adult fleas or debris. Flea dirt may produce a reddish-brown smear when moistened because it contains digested blood, but skin debris still needs sensible interpretation.",
          "Some dogs react intensely to a small number of bites, while others show few signs despite carrying fleas. Ongoing itch can lead to damaged skin, hot spots, and secondary infection. Puppies, very small dogs, seniors, or medically vulnerable animals can be affected more seriously by a heavy infestation and should be assessed promptly.",
        ],
      },
      {
        heading: "Why one flea can mean a household problem",
        body: [
          "Adult fleas on the dog are only one stage of the life cycle. Eggs and developing stages can be distributed through bedding, carpets, upholstered furniture, floor edges, shaded outdoor resting areas, vehicle upholstery, and places used by other animals. Treating only the visible flea or only one pet can leave the wider cycle intact.",
          "Ask your vet for an all-pet and environmental plan. Wash washable bedding as the fabric allows, vacuum thoroughly and repeatedly, empty or dispose of vacuum contents safely, and focus on places where pets rest. Use only household or environmental products labelled for the intended setting, follow every safety direction, and keep animals and children away for the stated period.",
        ],
      },
      {
        heading: "Choosing and using products safely",
        body: [
          "A collar, spot-on, spray, shampoo, dip, or oral product can differ in active ingredient, duration, parasites covered, water resistance, minimum age, weight range, and medical cautions. The dog's current weight matters, particularly for puppies and growing dogs. Tell the vet about seizures, skin disease, pregnancy or nursing, chronic illness, medicines, frequent swimming, and every other parasite product in use.",
          "Mixed-pet homes need special care. A product labelled for dogs may be dangerous to cats, and an apparently similar cat product may not provide appropriate dog protection. Do not split packs, estimate weight bands, combine products, use agricultural chemicals, or improvise a home pesticide mixture.",
        ],
        callout: "important",
      },
      {
        heading: "Match the situation to the next step",
        body: ["The parasite you see and the dog's overall condition both matter. Use this as a triage prompt, not a diagnosis."],
        table: {
          headers: ["Situation", "What the owner may notice", "Best next step"],
          rows: [
            ["Tick found", "An attached tick or a small inflamed bite area, with the dog otherwise well.", "Remove safely or ask a vet for help, note the date, review prevention, and monitor for illness."],
            ["Fleas suspected", "Fleas, flea dirt, scratching, chewing, or several pets becoming itchy.", "Ask for species-appropriate treatment for every pet and start a safe household-control routine."],
            ["Skin irritation", "Redness, hair loss, scabs, bad smell, pain, wet sores, or persistent itch.", "Book a veterinary assessment because allergy, infection, mites, or another cause may need treatment."],
            ["Possible tick-borne illness", "Weakness, pale gums, feverish behaviour, appetite loss, dark urine, collapse, or rapid decline.", "Contact a vet urgently. Collapse, breathing difficulty, inability to stand, or rapid worsening is an emergency."],
          ],
        },
      },
      {
        heading: "Build a prevention routine that lasts",
        body: [
          "Put prevention dates into a shared calendar and keep packaging or prescription details so household members know exactly what was used. Check supplies before weekends, boarding, and travel. Reweigh growing puppies and dogs whose body condition has changed, and ask the clinic before the next scheduled treatment if the old weight band may no longer fit.",
          "Pair product use with regular coat checks, garden maintenance, bedding care, and observation of appetite, energy, gum colour, urine, and skin. A routine is strongest when it catches both parasites and the early signs that need professional help.",
        ],
      },
    ],
    faqs: [
      { question: "Do South African dogs need tick and flea prevention all year?", answer: "Many do, but parasite pressure and suitable products vary by area and lifestyle. Ask your vet for a plan that covers local conditions, travel, boarding, and your dog's individual health." },
      { question: "Can I use my dog's flea treatment on my cat?", answer: "Do not assume so. Some dog products can seriously harm cats. Use only a product specifically labelled or prescribed for that species and animal." },
      { question: "Why are fleas still visible after treatment?", answer: "Developing flea stages may remain in the environment, or the treatment plan may have gaps. Check that every pet and the household environment are being managed safely and consistently, and ask your vet if the problem continues." },
      { question: "Should a dog see a vet after every tick?", answer: "An otherwise well dog does not always need an appointment for one safely removed tick, but difficulty removing it, a troublesome bite site, uncertain product safety, or any illness signs justify veterinary advice." },
    ],
    related: [
      { title: "Biliary Tick Bite Fever", description: "Possible symptoms, urgent warning signs, testing, and recovery questions.", href: "/health/biliary-tick-bite-fever-dogs-south-africa" },
      { title: "Tick and Flea Treatment", description: "Compare prevention formats and questions without unsafe combinations.", href: "/health/tick-and-flea-treatment-for-dogs-south-africa" },
      { title: "Dog Scratching and Itchy Skin", description: "Know when persistent itch or damaged skin needs a vet.", href: "/health/dog-scratching-and-itchy-skin-south-africa" },
    ],
    sources: [
      { label: "CDC: preventing ticks on pets", href: "https://www.cdc.gov/ticks/prevention/preventing-ticks-on-pets.html", note: "Guidance on checking pets, tick exposure, and prevention." },
      { label: "Cornell University: flea and tick prevention", href: "https://www.vet.cornell.edu/departments-centers-and-institutes/riney-canine-health-center/canine-health-topics/flea-and-tick-prevention", note: "Veterinary overview of flea and tick risks, prevention options, and product considerations." },
      { label: "MSD Veterinary Manual: fleas of dogs", href: "https://www.msdvetmanual.com/dog-owners/skin-disorders-of-dogs/fleas-of-dogs", note: "Veterinary reference on flea signs, life cycle, and control principles." },
      { label: "MSD Animal Health South Africa: biliary in dogs", href: "https://www.msd-animal-health.co.za/informative-articles/biliary-in-dogs/", note: "South Africa-specific context on ticks, canine biliary, and illness signs." },
    ],
  },
  {
    slug: "pet-insurance-for-dogs-south-africa",
    path: "/insurance/pet-insurance-for-dogs-south-africa",
    hubTitle: "Insurance",
    hubPath: "/insurance",
    title: "Pet Insurance for Dogs in South Africa",
    seoTitle: "Pet Insurance for Dogs South Africa | Neutral Cover Guide",
    description: "A provider-neutral South African guide to dog insurance and dog medical aid, including cover, limits, excesses, waiting periods, exclusions, claims, and savings.",
    intro: "Pet insurance, dog insurance, and dog medical aid are phrases South African owners often use for plans that help with eligible veterinary costs. Product names are not reliable shortcuts: the policy wording determines what is covered, what remains your responsibility, when benefits start, and whether you pay the vet before claiming reimbursement.",
    updated: "2026-08-09",
    primaryImage: {
      src: "/images/guides/pet-insurance-dog-planning-south-africa.webp",
      alt: "Dog owner reviewing veterinary costs and pet insurance information at home",
      width: 1536,
      height: 1024,
    },
    quickFacts: [
      "Compare current policy documents and benefit schedules, not marketing labels or premium alone.",
      "Annual limits, sub-limits, excesses, co-payments, waiting periods, and exclusions can materially change the value of cover.",
      "Earlier symptoms and veterinary history can affect how pre-existing conditions are assessed, even without a previous formal diagnosis.",
      "Emergency savings can still matter for deposits, upfront payment, excluded care, and costs above limits.",
    ],
    sections: [
      {
        heading: "What pet insurance generally does",
        body: [
          "Pet insurance generally transfers part of the financial risk of eligible future veterinary events to an insurer in exchange for a premium. Depending on the plan, eligible costs may include accidents, new illnesses, consultations, diagnostics, hospitalisation, surgery, medicines, or specialist treatment. Every item remains subject to the policy's definitions, limits, exclusions, and claims rules.",
          "Routine or wellness benefits are different. Vaccinations, parasite prevention, sterilisation, dental cleaning, and check-ups may be included, available as an add-on, limited by a benefit schedule, or excluded entirely. A plan described as dog medical aid may combine benefits differently, so compare substance rather than terminology.",
        ],
      },
      {
        heading: "Insurance versus emergency savings",
        body: [
          "Insurance can help with a large eligible event, while savings remain flexible and immediately available. Savings alone do not cap a very large bill, and insurance does not pay every cost. Many owners use both: cover for selected risks and a cash buffer for excesses, co-payments, exclusions, deposits, or the time before reimbursement.",
          "If you self-fund, set a deliberate monthly and annual target rather than treating whatever is left in the current account as the emergency fund. If you insure, ask how much cash you may still need at admission and at claim time.",
        ],
      },
      {
        heading: "Compare cover types and benefits",
        body: [
          "Accident-only cover is generally narrower and focuses on eligible unexpected injuries. Accident-and-illness plans may add eligible new diseases, diagnostics, hospital care, surgery, and treatment. Broader cover is not automatically better if the limits or exclusions do not match the risks you want to manage.",
          "Consider chronic illness wording carefully. A condition may require repeat consultations, tests, and medicine across several policy years. Check whether ongoing care is renewable, capped by a condition sub-limit, or affected by a later benefit change.",
        ],
        table: {
          headers: ["Feature", "What to ask", "Why it matters"],
          rows: [
            ["Accident and illness cover", "Which events, diagnostics, hospitalisation, surgery, and medicines qualify?", "The product name alone does not define eligible care."],
            ["Annual limit and sub-limits", "Is there one total limit plus smaller limits per condition, test, procedure, or benefit?", "A generous headline limit may still contain restrictive category caps."],
            ["Excess and co-payment", "Is the owner share fixed, percentage-based, or both, and when is it applied?", "Your share can differ substantially between otherwise similar claims."],
            ["Waiting periods", "When do accident, illness, orthopaedic, dental, and wellness benefits begin?", "Symptoms arising before cover starts may not be eligible."],
            ["Pre-existing conditions", "How are earlier symptoms, treatment, diagnoses, and vet records assessed?", "Definitions can reach beyond conditions already formally diagnosed."],
            ["Age and breed rules", "Are there entry ages, later-life changes, hereditary restrictions, or breed-specific exclusions?", "Eligibility, price, benefits, or owner contributions may change over time."],
            ["Claim payment", "Must I pay upfront and claim back, or is direct settlement sometimes available?", "The answer affects the cash needed during an emergency."],
          ],
        },
      },
      {
        heading: "Read limits, exclusions, and age rules together",
        body: [
          "An annual maximum is only the starting point. Look for per-claim, per-condition, procedure, diagnostic, medicine, hospital, dental, hereditary, or chronic-care sub-limits. Ask whether unused limits carry over, whether limits reset at renewal, and whether a recurring condition shares one cap.",
          "Check entry-age limits, continued renewability, senior-dog co-payments, and any reduction in benefits as the dog ages. Ask how congenital, hereditary, breed-related, behavioural, dental, and bilateral conditions are treated. Do not infer cover from a sales summary if the full policy document says something narrower.",
        ],
        links: [
          { title: "Compare policies consistently", description: "Use Dog Haven's neutral insurance comparison framework.", href: "/insurance/compare-dog-insurance-south-africa" },
          { title: "Understand pre-existing conditions", description: "See how history, symptoms, and records can affect cover.", href: "/insurance/pre-existing-conditions-pet-insurance-south-africa" },
        ],
      },
      {
        heading: "Waiting periods and changing providers",
        body: [
          "Different benefits may start on different dates. Accident cover, illness cover, orthopaedic conditions, dental benefits, and routine care can each have their own waiting rules. Ask what happens if symptoms appear during a waiting period and whether later treatment of the same problem can be excluded.",
          "Changing providers can create a new assessment of history and new waiting periods. Do not cancel existing cover until you understand the new policy's start date, exclusions, and treatment of conditions or symptoms that arose under the previous plan.",
        ],
        links: [
          { title: "Waiting periods explained", description: "Check timing questions before relying on new cover.", href: "/insurance/dog-insurance-waiting-periods-south-africa" },
        ],
      },
      {
        heading: "How claims and payment may work",
        body: [
          "Many arrangements require the owner to pay the veterinary practice and then submit a claim for reimbursement. Some providers or circumstances may allow pre-authorisation or direct settlement, but availability should never be assumed. Confirm the process with both the provider and veterinary practice before treatment where time allows.",
          "Claims may require an itemised invoice, proof of payment, clinical notes, medical history, a completed form, the treating vet's details, and submission within a stated period. Keep complete records from the day cover starts, including the policy schedule and any written answers from the insurer.",
        ],
        links: [
          { title: "Prepare a clean claim", description: "Follow the pet insurance claims and documents checklist.", href: "/insurance/pet-insurance-claims-checklist-south-africa" },
        ],
      },
      {
        heading: "Before choosing a policy",
        body: ["Get answers in writing and compare the same questions across shortlisted policies. Current documents from the provider should take priority over an old quote, social-media comment, or general guide."],
        checklist: [
          "Download the current policy wording, benefit schedule, exclusions, and claims guide.",
          "List the annual limit and every relevant sub-limit.",
          "Calculate the excess, co-payment, reimbursement percentage, and possible owner share using sample claims.",
          "Check all waiting periods and the definition of a pre-existing condition.",
          "Ask about entry age, renewability, senior-dog changes, and breed or hereditary wording.",
          "Check chronic illness, diagnostics, hospitalisation, surgery, medicine, dental, and routine-care rules.",
          "Confirm claim deadlines, required records, pre-authorisation, reimbursement timing, and any direct-settlement process.",
          "Disclose the dog's veterinary history honestly and keep the provider's written response.",
          "Budget for premiums, future increases, excesses, exclusions, and an emergency cash buffer.",
        ],
      },
      {
        heading: "Questions to ask before buying",
        body: [
          "Use realistic scenarios: a weekend accident requiring X-rays and hospitalisation, a new chronic condition needing repeat tests, or surgery followed by medicine and rehabilitation. Ask which parts might be eligible, which limits apply, what you pay, and what records are required. The aim is not a promise that a hypothetical claim will be paid, but a clearer understanding of the rules.",
          "Also ask how complaints, appeals, cancellations, premium changes, and policy amendments work. Save the answer, the document version, and the date. Policy terms can change, so review the renewal documents each year.",
        ],
        callout: "important",
      },
    ],
    faqs: [
      { question: "Is dog medical aid the same as pet insurance?", answer: "The terms are often used loosely in South Africa. Providers may structure products differently, so compare the legal product type, policy or benefit wording, limits, exclusions, and payment process rather than relying on the label." },
      { question: "Does pet insurance pay the vet directly?", answer: "Some providers or situations may allow direct settlement or pre-authorisation, while many claims work by reimbursement after the owner pays. Confirm the current process with the provider and veterinary practice." },
      { question: "Will a pre-existing condition be covered?", answer: "Often it is excluded or handled under specific rules. Ask how the provider treats earlier symptoms, consultations, treatment, and diagnoses, and disclose the dog's history honestly." },
      { question: "Does pet insurance include vaccinations and parasite prevention?", answer: "Only some policies include or offer routine or wellness benefits, often with separate caps. Check the current benefit schedule rather than assuming routine care is included." },
      { question: "Do I still need emergency savings if my dog is insured?", answer: "A cash buffer remains useful for deposits, excesses, co-payments, exclusions, costs above limits, and any delay before reimbursement." },
    ],
    related: [
      { title: "Compare Dog Insurance", description: "A provider-neutral framework for comparing the same policy features.", href: "/insurance/compare-dog-insurance-south-africa" },
      { title: "Claims Checklist", description: "Prepare invoices, clinical notes, forms, and proof of payment.", href: "/insurance/pet-insurance-claims-checklist-south-africa" },
      { title: "Waiting Periods", description: "Understand when different benefits may start.", href: "/insurance/dog-insurance-waiting-periods-south-africa" },
      { title: "Pre-Existing Conditions", description: "Understand how health history and earlier symptoms may affect cover.", href: "/insurance/pre-existing-conditions-pet-insurance-south-africa" },
    ],
    sources: [
      { label: "Financial Sector Conduct Authority", href: "https://www.fsca.co.za/", note: "Official South African financial-sector regulator and consumer information source." },
      { label: "National Financial Ombud Scheme South Africa", href: "https://nfosa.co.za/", note: "Official information about eligible financial complaints and the ombud process." },
      { label: "South African Veterinary Council", href: "https://savc.org.za/", note: "Professional veterinary context relevant to clinical records and veterinary care." },
    ],
  },
  {
    slug: "puppy-scam-checklist-south-africa",
    path: "/adoption/puppy-scam-checklist-south-africa",
    hubTitle: "Adoption Safety",
    hubPath: "/adoption",
    title: "Puppy Scam Checklist for South Africa",
    seoTitle: "Puppy Scam Checklist South Africa | Safer Adoption and Buying",
    description: "A practical South African puppy scam checklist covering deposits, seller checks, stolen photos, video calls, records, safe viewing, payment, evidence, and reporting.",
    intro: "Puppy scams exploit excitement, sympathy, and the fear that somebody else will take the dog. A polished advert, vaccination claim, registration logo, or convincing transport story is not proof. Slow the process down and verify the seller, the puppy, the records, the location, and the payment terms before money changes hands.",
    updated: "2026-08-09",
    primaryImage: {
      src: "/images/guides/puppy-scam-verification-south-africa.webp",
      alt: "Prospective puppy owner checking information before making a payment",
      width: 1536,
      height: 1024,
    },
    quickFacts: [
      "Pressure to pay a deposit immediately is a reason to pause, not proof that demand is genuine.",
      "A live video call helps, but safe physical viewing and independent record checks provide stronger verification where practical.",
      "Stolen photographs, changing courier fees, multiple breeds always available, and seller details that do not match are important red flags.",
      "If fraud is suspected, stop paying and preserve the advert, messages, account details, receipts, and profile information.",
    ],
    sections: [
      {
        heading: "Recognise the pressure pattern",
        body: [
          "Scammers try to move a buyer from emotion to payment before verification catches up. Common tactics include saying another family is waiting, the puppy must travel today, a deposit is refundable, or a sudden family emergency makes the price unusually low. Once the first payment is made, extra courier, crate, insurance, permit, vaccination, or release fees may follow.",
          "A legitimate seller or organisation should tolerate careful questions and a reasonable verification process. If a person becomes hostile, changes the story, refuses basic checks, or says every safety step will cause you to lose the puppy, walk away.",
        ],
      },
      {
        heading: "Common puppy advert red flags",
        body: [
          "One warning sign does not always prove fraud, but several inconsistencies should stop the transaction. Look at the whole pattern: identity, location, availability, images, welfare information, records, payment destination, and willingness to meet.",
        ],
        table: {
          headers: ["Red flag", "Why it matters", "Safer response"],
          rows: [
            ["Urgent deposit pressure", "It prevents meaningful verification and creates sunk-cost pressure.", "Pause. Do not pay until identity, puppy, records, and written terms are checked."],
            ["Seller refuses a live video call", "Stolen images cannot answer a real-time request to show the puppy and surroundings.", "Request a specific live action, then continue with independent checks and safe viewing."],
            ["Many breeds or litters always available", "Unrealistic stock can indicate copied adverts, brokering, or poor welfare practices.", "Ask where each dog is housed and verify the claimed breeder, shelter, or organisation."],
            ["Collection is impossible but transport is urgent", "Fake transport stories often create repeated extra fees.", "Verify the physical location and courier independently. Never use contact details supplied only in a message."],
            ["Vaccination or registration claim without verifiable records", "Logos, cards, and certificates can be copied or altered.", "Check the issuing clinic, microchip details, registry, or organisation through independently sourced contact information."],
            ["Account holder and seller identity differ", "A mismatch makes accountability and tracing harder.", "Ask for a clear explanation and proof. Do not pay while details remain inconsistent."],
          ],
        },
      },
      {
        heading: "Check the seller and the advert",
        body: [
          "Search the seller's name, phone number, email address, business name, and distinctive advert wording. Review the history of the social-media profile: a recently created account, renamed page, limited local interaction, disabled comments, or unrelated older content can add concern. A long-lived profile is not proof because accounts can be compromised.",
          "Use a reverse image search on the puppy photographs and crop individual images if necessary. Results showing the same puppy in another country, an older advert, several provinces, or under different seller names are strong reasons to stop. Ask for a new photograph or live video showing a specific harmless detail that was not in the advert.",
        ],
      },
      {
        heading: "Meet the puppy safely where practical",
        body: [
          "A physical viewing lets you see whether the puppy exists, where the dog is being raised, how the puppy behaves, and whether the story is consistent. Meet in daylight, tell someone where you are going, take another adult, and avoid carrying large amounts of cash. Do not enter an unsafe property or continue if you feel threatened.",
          "Where appropriate, ask to see the mother with the litter and observe their condition and interaction. There can be legitimate reasons a mother is not present, especially with rescues or rehoming, but the explanation and records should make sense. Do not accept a handover in a car park merely because it is convenient if the seller is using it to prevent all welfare and location checks.",
        ],
        callout: "important",
      },
      {
        heading: "Verify health, vaccination, registration, and microchip claims",
        body: [
          "Ask for the puppy's date of birth, veterinary history, vaccination and deworming record, health concerns, food, and any treatment. A vaccination card should identify the puppy and clinic clearly enough to verify. Contact the veterinary practice through a number you find independently, understanding that privacy rules may limit what staff can disclose.",
          "A registration claim is not the same as proof of parentage, health, or responsible breeding. For pedigree claims, verify the issuing body and records through its official channels. Ask whether the puppy is microchipped, which database holds the record, and how ownership details will be transferred. Check that numbers match across the puppy, documents, and written agreement.",
        ],
      },
      {
        heading: "Before paying a deposit",
        body: ["A deposit should follow verification, not replace it. If any important answer remains inconsistent, keep your money and continue looking."],
        checklist: [
          "Confirm the seller's full identity, physical location, phone number, and relationship to the puppy.",
          "Complete a live video call and arrange a safe physical viewing where practical.",
          "Reverse-search the photographs and search the phone number, email address, account name, and advert wording.",
          "Ask to meet the puppy and, where appropriate, see the mother and litter environment.",
          "Verify vaccination, health, registration, and microchip claims through independent official contact details.",
          "Read a written agreement covering the identified puppy, total price, deposit terms, collection, records, and responsibilities.",
          "Check that the bank-account holder matches the verified person or organisation and question any mismatch.",
          "Refuse unexplained courier, crate, permit, insurance, or release fees added after the first payment.",
          "Keep copies of the advert, messages, documents, seller profile, and payment terms before anything disappears.",
        ],
      },
      {
        heading: "Use a clear written agreement and safer payment process",
        body: [
          "The agreement should identify the parties and the specific puppy, state the full amount, explain any deposit and refund terms, list records and items included, and set out the collection or handover arrangements. Read it before paying. A document full of logos and legal-sounding text is not useful if the identity or puppy has not been verified.",
          "Use a payment method that produces a reliable record and understand what dispute protection, if any, it provides. Do not send repeated payments to recover an earlier deposit. Never share banking passwords, one-time PINs, card PINs, or remote access to your phone or computer.",
        ],
      },
      {
        heading: "What evidence to save",
        body: ["Save evidence before confronting or blocking the account, because adverts and profiles can disappear quickly. Keep original files where possible rather than only edited screenshots."],
        checklist: [
          "The full advert, URL, date, platform, seller profile, account handle, and profile history visible to you.",
          "Every message, email, voice note, and phone number, with dates and times.",
          "Puppy photographs, video files, reverse-image-search results, and any duplicated adverts.",
          "Names, identity claims, physical addresses, business details, website domains, and vehicle or courier information supplied.",
          "Bank name, account holder, account number, payment reference, proof of payment, invoice, and requested extra fees.",
          "Vaccination cards, registration certificates, microchip claims, written agreements, and other documents sent.",
          "A short timeline of what happened, what was promised, what was paid, and when the story changed.",
        ],
      },
      {
        heading: "What to do if fraud is suspected",
        body: [
          "Stop sending money and contact your bank or payment provider immediately using its official fraud channel. Ask what steps are available for the specific payment and follow its evidence instructions. Report the advert and account to the platform, and keep the report confirmation.",
          "Fraud can be reported to the South African Police Service. Take your evidence and obtain the case or reference details. If an animal-welfare concern is involved, contact the relevant local SPCA or the NSPCA through official channels. Do not publish unverified accusations, threaten the seller, or arrange a confrontation.",
        ],
        callout: "caution",
      },
    ],
    faqs: [
      { question: "Is a live video call enough to prove a puppy advert is real?", answer: "No. It is a useful check, but prerecorded or unrelated footage and compromised accounts remain possible. Combine it with identity, location, record, payment, and physical-viewing checks where practical." },
      { question: "Should I ever pay a puppy deposit?", answer: "A deposit may be part of a legitimate agreement, but only consider it after meaningful verification, clear written terms, and confidence that the identified seller and puppy are real. Never pay because you are being rushed." },
      { question: "Can a vaccination card or registration certificate be fake?", answer: "Yes, documents and logos can be copied or altered. Verify details with the issuing clinic, registry, or organisation through contact information you obtain independently." },
      { question: "Where should I report a suspected puppy scam in South Africa?", answer: "Contact your bank or payment provider promptly, report the account to the platform, and report fraud to SAPS. Contact an SPCA through official channels if animal welfare may be at risk." },
    ],
    related: [
      { title: "Dog Adoption in South Africa", description: "Questions for shelters, rescues, private rehoming, and responsible sourcing.", href: "/adoption/dog-adoption-south-africa" },
      { title: "New Puppy Checklist", description: "Prepare the home, records, food, vet care, and first week.", href: "/puppy/new-puppy-checklist-south-africa" },
      { title: "Cost of Owning a Dog", description: "Build a realistic budget before committing.", href: "/costs/cost-of-owning-a-dog-south-africa" },
    ],
    sources: [
      { label: "NSPCA: do not be a victim of a scam", href: "https://nspca.co.za/dont-be-a-victim-of-a-scam/", note: "South African animal-welfare warning about scam patterns and precautions." },
      { label: "South African Police Service", href: "https://www.saps.gov.za/", note: "Official police information and contact routes for reporting crime." },
      { label: "South African Banking Risk Information Centre", href: "https://www.sabric.co.za/", note: "Consumer information about banking fraud and safer banking practices." },
      { label: "Kennel Union of Southern Africa", href: "https://www.kusa.co.za/", note: "Official starting point for checking KUSA-related pedigree and registration claims." },
    ],
  },
  {
    slug: "cost-of-owning-a-dog-south-africa",
    path: "/costs/cost-of-owning-a-dog-south-africa",
    hubTitle: "Dog Costs",
    hubPath: "/costs",
    title: "Cost of Owning a Dog in South Africa",
    seoTitle: "Cost of Owning a Dog in South Africa | National Budget Guide",
    description: "Build a realistic South African dog budget for setup, food, veterinary care, prevention, grooming, training, insurance, services, senior care, and emergencies.",
    intro: "There is no honest national price that fits every South African dog. Size, age, health, diet, coat, behaviour, location, travel, supplier changes, and household routines all shift the total. A useful budget separates initial setup, predictable monthly care, annual or occasional costs, and emergencies so one quiet month is not mistaken for the true cost of ownership.",
    updated: "2026-08-09",
    primaryImage: {
      src: "/images/guides/dog-ownership-budget-south-africa.webp",
      alt: "Dog owner planning a household budget for ongoing dog-care costs",
      width: 1536,
      height: 1024,
    },
    quickFacts: [
      "Build monthly and annual views: some of the largest predictable costs do not arrive every month.",
      "Large dogs often cost more for food, weight-based prevention, equipment, transport, and some services, but size alone never predicts health or behaviour costs.",
      "Puppies and seniors can create different cost peaks, while chronic illness can reshape the whole budget.",
      "Review the plan for inflation, supplier changes, price increases, and changes in the dog's health or routine.",
    ],
    sections: [
      {
        heading: "Structure the budget in four layers",
        body: [
          "Start with initial setup, then list monthly essentials, annual or occasional care, and unexpected costs. This avoids hiding vaccination, boarding, training, dental care, or equipment replacement inside a vague monthly guess. Use actual local quotes and your chosen food, vet, groomer, trainer, sitter, and insurer where relevant.",
          "Keep optional conveniences separate from welfare essentials. A premium bed can wait; suitable food, veterinary care, identification, safe restraint, parasite prevention, shelter, exercise, and emergency planning cannot. The budget should still work in months when several annual items land together.",
        ],
      },
      {
        heading: "Initial setup and acquisition",
        body: [
          "Acquisition may involve an adoption fee, responsible-breeder price, private rehoming cost, or no fee at all. The amount paid for the dog says little about the first month's needs. Ask which vaccinations, deworming, microchipping, sterilisation, health checks, and supplies are already completed and obtain the records.",
          "Basic setup can include food and water bowls, the current food, a bed, collar or harness, lead, ID tag, transport restraint, grooming tools, cleaning supplies, toys, safe chews, and a crate or pen where appropriate. Secure fencing, gates, balcony safety, pool barriers, landlord permission, or repairs can become the largest setup cost in some homes.",
        ],
      },
      {
        heading: "Core cost categories",
        body: ["Treat this table as a planning map. Obtain local prices for your dog and update them when suppliers, service providers, or needs change."],
        table: {
          headers: ["Cost category", "Recurring or occasional", "What changes the cost"],
          rows: [
            ["Food", "Usually monthly", "Dog size, calorie needs, life stage, diet type, medical requirements, brand, and pack size."],
            ["Routine veterinary care", "Annual and as needed", "Consultation frequency, vaccines, dental care, screening, location, and health history."],
            ["Parasite prevention", "Regular schedule", "Weight band, local tick and flea pressure, product, lifestyle, and veterinary advice."],
            ["Grooming", "Regular or occasional", "Coat type, size, matting, handling needs, nail and ear care, and home versus professional work."],
            ["Training and behaviour support", "Front-loaded or as needed", "Puppy classes, group versus private help, complexity, travel, and follow-up."],
            ["Insurance and emergency savings", "Usually monthly", "Dog age, breed, policy terms, limits, excesses, exclusions, and savings target."],
            ["Boarding, sitting, and walking", "As needed", "Location, season, duration, number of dogs, medication, transport, and level of care."],
            ["Equipment and transport", "Occasional", "Wear, growth, chewing, vehicle setup, fuel, crates, restraints, and replacement quality."],
            ["Local permissions or rules", "Occasional or annual where applicable", "Municipal by-laws, property rules, licences where required, and travel documentation."],
          ],
        },
      },
      {
        heading: "Food, prevention, and routine veterinary care",
        body: [
          "Estimate food from the dog's expected daily amount and the usable quantity in a bag or pack, then allow for treats and price changes. Puppies, working dogs, large breeds, seniors, and dogs on veterinary diets can have very different requirements. Avoid choosing by the shelf price alone if the portion size or suitability changes the true monthly cost.",
          "Routine veterinary planning may include wellness examinations, vaccination based on the dog's schedule, parasite control, dental assessment, and monitoring recommended for age or health. Preventive care does not guarantee a cheap year, but it makes predictable needs easier to fund and can identify problems earlier.",
        ],
        links: [
          { title: "Plan dog food costs", description: "Understand feeding and price factors without relying on a fake national average.", href: "/costs/dog-food-cost-south-africa" },
          { title: "Estimate your own categories", description: "Use the Dog Haven cost calculator as a planning worksheet.", href: "/tools/dog-cost-calculator" },
        ],
      },
      {
        heading: "Grooming, training, and everyday services",
        body: [
          "Coat type matters more than appearance. Long, curly, dense, double, or easily matted coats may need professional appointments and substantial home maintenance. Short-coated dogs still need nails, ears, skin, teeth, and parasite checks. Temperament, size, matting, and handling difficulty can affect appointment time and cost.",
          "Training is easier to budget before behaviour becomes a crisis. Include puppy socialisation, foundational classes, safe equipment, and private professional help if fear, reactivity, guarding, or separation problems appear. Boarding, pet sitting, dog walking, and transport become important when work, illness, family commitments, or holidays change the normal routine.",
        ],
        links: [
          { title: "Understand grooming costs", description: "Compare coat, size, frequency, and service factors.", href: "/costs/dog-grooming-costs-south-africa" },
          { title: "Plan training costs", description: "See what changes group, private, puppy, and behaviour-support costs.", href: "/costs/dog-training-costs-south-africa" },
        ],
      },
      {
        heading: "Puppy, adult, and senior cost patterns",
        body: [
          "Puppies often concentrate costs into a short period: repeat vet visits, a vaccine series, deworming, changing prevention weight bands, microchipping, sterilisation discussions, puppy classes, toilet-cleaning supplies, chewed replacements, and larger equipment as they grow. Confirm what the shelter, breeder, or previous owner has already completed.",
          "Healthy adult dogs may have a steadier routine, but dental care, injuries, boarding, training, and unexpected illness still matter. Senior dogs may need more frequent examinations, screening tests, pain or chronic medication, adapted bedding, mobility support, diet changes, and easier transport. Review the budget before these needs become urgent.",
        ],
      },
      {
        heading: "Small and large dog cost drivers",
        body: [
          "Larger dogs usually eat more and may move into higher weight bands for parasite prevention and medicines. Beds, crates, durable leads, vehicle restraints, boarding spaces, and professional grooming can also cost more. A large dog may need a vehicle or two adults for safe transport in an emergency.",
          "Small dogs are not automatically inexpensive. Dental disease, specialist care, fragile injuries, professional grooming, behaviour support, and breed-related health problems can outweigh food savings. Estimate the individual dog's likely care rather than applying a simple size rule.",
        ],
      },
      {
        heading: "Insurance, chronic illness, and emergency care",
        body: [
          "Pet insurance may help with eligible future care, but premiums, waiting periods, pre-existing conditions, annual limits, sub-limits, excesses, and co-payments determine the practical value. An emergency fund still matters because owners may need to pay upfront or cover excluded costs and amounts above limits.",
          "Chronic illness can turn an occasional line into a monthly one through repeat consultations, blood tests, medicine, therapeutic food, and monitoring. Emergency care may add after-hours consultation, diagnostics, hospitalisation, surgery, referral, and follow-up in quick succession. Plan how you would authorise and pay for urgent care before a crisis.",
        ],
        links: [
          { title: "Pet insurance for dogs", description: "Compare cover, limits, exclusions, claims, and savings neutrally.", href: "/insurance/pet-insurance-for-dogs-south-africa" },
          { title: "Emergency veterinary costs", description: "Understand the factors that can shape an urgent-care bill.", href: "/costs/emergency-vet-costs-south-africa" },
        ],
      },
      {
        heading: "Costs people often forget",
        body: ["Small, irregular purchases can distort the budget because they do not appear every month. Give them an annual allowance rather than pretending they are surprises."],
        checklist: [
          "Dental assessment and treatment, repeat tests, prescription refills, and follow-up consultations.",
          "Replacement leads, harnesses, beds, toys, bowls, tags, crates, gates, and chewed household items.",
          "Boarding, pet sitting, dog walking, holiday surcharges, and trial stays.",
          "Training refreshers, behaviour consultations, secure equipment, and travel to appointments.",
          "Professional grooming between major appointments, nail care, coat tools, shampoo, and laundry.",
          "Fuel, parking, pet-friendly transport, vehicle restraints, travel certificates, and accommodation charges.",
          "Municipal or property requirements where applicable, landlord deposits, and secure fencing repairs.",
          "Price increases, delivery fees, discontinued products, and buying a replacement before the old supply runs out.",
          "Time away from work or extra household help during illness, surgery recovery, or a new puppy's first weeks.",
        ],
      },
      {
        heading: "Build monthly and annual budgets",
        body: [
          "For the monthly view, total food, prevention, routine grooming, insurance, savings, regular services, and a share of annual items. For the annual view, list vaccinations or check-ups, equipment replacement, training, boarding, travel, dental planning, and any known monitoring. Divide annual items by twelve and transfer that amount into a separate dog-care fund each month.",
          "Review actual spending every three months and after a life-stage, health, housing, work, or supplier change. Apply a sensible inflation allowance based on the prices you are seeing, not a made-up national percentage. If the budget is tight, speak to the vet early about welfare-safe options instead of skipping urgent care or changing treatment without advice.",
        ],
        callout: "important",
      },
    ],
    faqs: [
      { question: "What is the average monthly cost of a dog in South Africa?", answer: "There is no reliable figure that fits every dog and household. Build a total from your dog's food, prevention, veterinary plan, grooming, training, insurance or savings, services, and a monthly share of annual costs." },
      { question: "Is a small dog always cheaper to own?", answer: "No. Small dogs often eat less and use lower weight bands for some products, but dental, grooming, behaviour, specialist, and breed-related health costs can still be substantial." },
      { question: "Is the first year the most expensive?", answer: "It often has concentrated setup, vaccination, training, growth, and sterilisation-related costs, but a senior year, chronic illness, or emergency can cost more. Budget by life stage rather than assuming later years will always be cheaper." },
      { question: "Should I choose pet insurance or build savings?", answer: "The right balance depends on your cash reserves, risk tolerance, dog, and policy wording. Many owners combine insurance for eligible risks with savings for excesses, exclusions, upfront payments, and costs above limits." },
      { question: "How often should I update my dog budget?", answer: "Review it at least yearly and whenever prices, food, health, age, weight, housing, travel, or service needs change. A short quarterly check helps catch drift earlier." },
    ],
    related: [
      { title: "Dog Cost Calculator", description: "Turn your own local figures into a practical monthly estimate.", href: "/tools/dog-cost-calculator" },
      { title: "Pet Insurance for Dogs", description: "Understand cover alongside emergency savings.", href: "/insurance/pet-insurance-for-dogs-south-africa" },
      { title: "Emergency Vet Costs", description: "Prepare for urgent consultation, diagnostics, hospitalisation, and follow-up.", href: "/costs/emergency-vet-costs-south-africa" },
      { title: "Dog Food Costs", description: "Plan feeding by size, life stage, diet, and pack use.", href: "/costs/dog-food-cost-south-africa" },
      { title: "Dog Grooming Costs", description: "Budget by coat, size, condition, and frequency.", href: "/costs/dog-grooming-costs-south-africa" },
      { title: "Dog Training Costs", description: "Plan puppy classes, private help, and behaviour support.", href: "/costs/dog-training-costs-south-africa" },
    ],
    sources: [
      { label: "South African Veterinary Council", href: "https://savc.org.za/", note: "Professional veterinary context and public information for responsible veterinary care." },
    ],
  },
  ...batch2FlagshipGuides,
  ...batch3FlagshipGuides,
];

export function getFlagshipGuide(slug: string) {
  return flagshipGuides.find((guide) => guide.slug === slug);
}
