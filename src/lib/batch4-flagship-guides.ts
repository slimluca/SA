import type { GuideContent } from "@/lib/content";

export const batch4FlagshipGuides: GuideContent[] = [
  {
    slug: "snake-bites-in-dogs-south-africa",
    path: "/emergency/snake-bites-in-dogs-south-africa",
    hubTitle: "Emergency Help",
    hubPath: "/emergency",
    title: "Snake Bites in Dogs in South Africa",
    seoTitle: "Snake Bites in Dogs South Africa | Urgent Vet Steps",
    description:
      "What South African dog owners should do after a suspected snake bite, urgent warning signs, safe transport, dangerous first-aid myths, and prevention.",
    intro:
      "A suspected snake bite is a veterinary emergency even when no puncture marks are visible and nobody saw the encounter. Dogs investigate movement, scent, holes, long grass and stored materials at close range, so an encounter can happen in a suburban yard as easily as on a farm or trail. Move away from the snake without endangering yourself, keep the dog calm and as still as practical, phone a veterinary clinic immediately, and start arranging transport.",
    updated: "2026-08-10",
    primaryImage: {
      src: "/images/guides/dog-snake-safety-south-africa.webp",
      alt: "Dog walking safely on lead with its owner on a South African trail",
      width: 1536,
      height: 1024,
    },
    isHealthGuide: true,
    quickFacts: [
      "Phone a vet or emergency animal clinic immediately after a seen or suspected bite; symptoms and swelling can change quickly.",
      "Keep the dog calm, restrict walking, and carry a small dog only when you can do so safely.",
      "Do not cut or squeeze the area, suck venom, use ice, apply a tourniquet, give home remedies, or delay for snake identification.",
      "A safe-distance photo can be useful, but never approach, corner, catch, or kill a snake for identification.",
    ],
    sections: [
      {
        heading: "Why dogs and snakes meet",
        body: [
          "Snakes use places that offer shelter, suitable temperatures, water or prey. Dense planting, long grass, rock gaps, stacked timber, building materials, compost areas and rodent activity can bring them closer to gardens, yards and farm buildings. On walks, a dog may put its nose into vegetation or a hole before the owner sees what is there.",
          "Risk is local and changes with habitat, weather and animal activity; there is no responsible single season or national statistic that tells every household when encounters will occur. Stay alert during warmer outdoor activity and whenever local snake activity is reported, while keeping the same sensible controls throughout the year.",
        ],
        links: [
          { title: "Prepare an emergency checklist", description: "Record clinic contacts, transport details and the information a vet may need.", href: "/emergency/dog-emergency-checklist-south-africa" },
          { title: "Plan for outdoor emergencies", description: "Use the emergency hub before a problem happens.", href: "/emergency" },
          { title: "Hike with better control", description: "Prepare for terrain, heat, wildlife and the route home.", href: "/dog-friendly/hiking-with-dogs-south-africa" },
        ],
      },
      {
        heading: "Signs that need urgent veterinary attention",
        body: [
          "A dog may yelp, jump back or show sudden pain, but some return from a yard or walk with only swelling, weakness or unusual quietness. Fang marks can be hidden by fur or difficult to see. Do not wait for a textbook pair of punctures, and do not use the pattern of signs to identify a snake yourself.",
        ],
        table: {
          headers: ["Situation", "What you may notice", "What to do"],
          rows: [
            ["A bite was seen or strongly suspected", "A yelp, sudden retreat, pain, small wounds or no visible mark at all.", "Move away safely, limit movement, phone a vet immediately and arrange transport."],
            ["Swelling or local pain", "Rapid or spreading swelling of the face, muzzle, neck, paw or leg; limping or tenderness.", "Treat it as urgent, remove a collar if neck or facial swelling makes that necessary and safe, and leave the area alone."],
            ["Nervous-system or breathing signs", "Drooling, weakness, wobbliness, unusual pupils, paralysis, shallow breathing or breathing difficulty.", "Tell the clinic these signs first and travel to emergency-capable veterinary care without delay."],
            ["Bleeding or circulation signs", "Bleeding from a wound, nose or gums; bruising, blood in urine or stool, pale gums, collapse or severe lethargy.", "Seek emergency care immediately and keep the dog quiet during transport."],
            ["The dog initially seems normal", "No obvious wound or symptom after a possible close encounter.", "Still phone a vet. Give the time and circumstances, then follow the clinic's monitoring or examination advice."],
          ],
        },
      },
      {
        heading: "What to tell the veterinary clinic",
        body: [
          "Phone before leaving if possible. The clinic can tell you whether it has the facilities and treatment resources for a suspected snake bite or whether another emergency practice is more suitable. Lead with breathing difficulty, collapse, severe swelling or bleeding rather than starting with background detail.",
        ],
        checklist: [
          "Where the encounter happened and whether it was in a yard, on a farm, beside water or on a trail.",
          "The approximate time of the encounter or the first change you noticed.",
          "The current signs, where swelling or pain began, and whether they are changing.",
          "Your dog's age, approximate weight, breed or type, health conditions and regular medication.",
          "A safe-distance photograph if one already exists; do not delay or return for it.",
          "Your travel time and whether you need help moving a large, weak or painful dog from the vehicle.",
        ],
      },
      {
        heading: "Prepare for safe transport",
        body: [
          "Reduce exertion and excitement. Carry a small dog if that does not put you at risk; for a larger dog, use the shortest controlled route to the vehicle and ask another adult to help. A blanket can support a weak dog, but avoid pressure on a painful or swollen area. Keep the airway and chest unrestricted.",
          "Call again if the dog's condition changes on the way. Drive safely, keep the cabin calm and have someone monitor the dog when another adult is available. Do not trade urgent travel time for repeated wound checks or online identification.",
        ],
        callout: "important",
      },
      {
        heading: "What not to do after a suspected snake bite",
        body: [
          "First-aid myths can damage tissue, increase stress or waste the time needed to reach a clinic. Veterinary treatment depends on the dog's examination and clinical signs, not a home procedure.",
        ],
        checklist: [
          "Do not cut, puncture, squeeze or massage the suspected bite area.",
          "Do not suck venom or use a suction device.",
          "Do not apply ice, heat, chemicals, herbs, electric shock or a home antidote.",
          "Do not apply a tight band, compression wrap or tourniquet.",
          "Do not give human medicine, leftover veterinary medicine or an improvised dose.",
          "Do not let the dog run, continue the walk or confront the snake again.",
          "Do not approach, catch or kill the snake. Human safety remains essential.",
        ],
        callout: "caution",
      },
      {
        heading: "Reduce encounters in gardens and outdoor areas",
        body: [
          "Make hiding places and prey less available near the home. Keep grass and dense growth managed around frequently used areas, store timber and materials tidily, address rodent activity without creating a poisoning risk, and use a qualified snake remover when a snake must be relocated. A snake that appears dead can still be dangerous to a curious dog.",
          "On farms, trails and bush or fynbos walks, use reliable physical control. Keep the dog close enough to stop investigation of holes, rocks, dense cover, water edges, livestock feed and wildlife. Recall training is valuable, but a lead is the safer choice where visibility or local risk is poor.",
        ],
        links: [
          { title: "Check for ticks after outings", description: "Build a calm coat and skin check into the return home.", href: "/health/ticks-and-fleas-dogs-south-africa" },
          { title: "Prevent dog poisoning", description: "Manage garden, bait, food and household hazards together.", href: "/emergency/dog-poisoning-south-africa" },
          { title: "Protect active dogs", description: "Match exercise and outdoor preparation to the individual dog.", href: "/breeds/best-dogs-for-active-owners-south-africa" },
          { title: "Recognise heatstroke", description: "Know another fast-moving risk on South African outings.", href: "/emergency/heatstroke-in-dogs-south-africa" },
        ],
      },
    ],
    faqs: [
      { question: "Should I wait for swelling before calling a vet?", answer: "No. Phone immediately after a seen or credible suspected bite. Some serious effects are not led by obvious swelling, and a normal-looking bite site does not make waiting safe." },
      { question: "Does the vet need the snake to be identified?", answer: "Do not delay care or endanger anyone to identify it. Share a safe-distance photo only if one was obtained without approaching the snake. The veterinarian will also assess the circumstances and the dog's clinical signs." },
      { question: "Can I give an antihistamine or pain medicine on the way?", answer: "Do not give medication unless the treating veterinarian specifically instructs you for this dog. Home medicine cannot replace urgent assessment and may complicate care or waste time." },
      { question: "What if my dog seems better after the first few minutes?", answer: "Still speak to a veterinarian. Signs can evolve, and the clinic should decide whether immediate examination or specific observation is appropriate." },
    ],
    related: [
      { title: "Dog Emergency Help", description: "Recognise urgent signs and prepare transport and clinic details.", href: "/emergency" },
      { title: "Heatstroke in Dogs", description: "Act quickly when an outdoor dog overheats.", href: "/emergency/heatstroke-in-dogs-south-africa" },
      { title: "Dog Poisoning", description: "Safe first steps after a suspected toxic exposure.", href: "/emergency/dog-poisoning-south-africa" },
    ],
    sources: [
      { label: "University of Pretoria: first aid for pets", href: "https://www.up.ac.za/faculty-of-veterinary-science/news/first-aid-pets-dos-and-donts", note: "Veterinary first-aid guidance on immediate care and unsafe snakebite interventions." },
      { label: "University of Pretoria: dog and snake encounters", href: "https://www.up.ac.za/news/durban-veterinarian-warns-dog-owners-about-trend-of-filming-during-snake-vs-dog-standoffs", note: "South African veterinary guidance on removing dogs from encounters and reaching capable care." },
      { label: "Journal of the South African Veterinary Association", href: "https://journals.jsava.aosis.co.za/index.php/jsava/article/view/441/0", note: "Southern African veterinary review of snake envenomation diagnosis and treatment in dogs." },
    ],
  },
  {
    slug: "dog-diarrhoea-south-africa",
    path: "/health/dog-diarrhoea-south-africa",
    hubTitle: "Dog Health",
    hubPath: "/health",
    title: "Dog Diarrhoea in South Africa: When to Call a Vet",
    seoTitle: "Dog Diarrhoea South Africa | Warning Signs and Vet Advice",
    description:
      "Possible causes of dog diarrhoea, dehydration and puppy risks, urgent warning signs, what to record, and when to contact a South African vet.",
    intro:
      "Diarrhoea describes a change in stool, not a diagnosis. One soft stool in an otherwise bright adult dog is a different situation from repeated watery diarrhoea in a puppy or diarrhoea accompanied by vomiting, blood, pain or weakness. Look at the whole dog, record what is happening, and contact a veterinarian sooner when the dog is young, elderly, medically vulnerable or deteriorating.",
    updated: "2026-08-10",
    primaryImage: {
      src: "/images/guides/dog-digestive-health-south-africa.webp",
      alt: "Dog owner monitoring a dog's general condition at home",
      width: 1536,
      height: 1024,
    },
    isHealthGuide: true,
    quickFacts: [
      "Blood, black or tarry stool, repeated vomiting, marked weakness, collapse, severe pain or a swollen abdomen needs urgent veterinary advice.",
      "Puppies, small dogs, seniors and dogs with other illness can lose fluid or decline faster.",
      "Possible causes include food changes, scavenging, stress, parasites, infection, toxins, foreign material and underlying disease; symptoms alone cannot confirm which one.",
      "Do not give human medication or impose a universal fasting routine. Ask the vet what is suitable for this dog's age, health and symptoms.",
    ],
    sections: [
      {
        heading: "What can cause diarrhoea",
        body: [
          "A sudden food change, rich leftovers, spoiled food, scavenging or eating an unfamiliar item may be part of the history. Stress from travel, boarding, a household change or a new environment can also coincide with loose stool. These common possibilities should not be used to dismiss a dog that looks ill.",
          "Parasites and infections are also possible, particularly where vaccination, deworming or exposure history is incomplete. Toxins, medication, swallowed objects and disorders affecting the gut or other organs can produce similar signs. Recurrent or persistent diarrhoea needs veterinary investigation rather than repeated diet experiments.",
        ],
        links: [
          { title: "Check toxic food exposure", description: "Review common food hazards without guessing at treatment.", href: "/health/toxic-foods-for-dogs-south-africa" },
          { title: "Read the dog food hub", description: "Make feeding changes with life stage and health in mind.", href: "/food" },
        ],
      },
      {
        heading: "Judge the stool and the whole dog",
        body: [
          "Frequency and consistency matter, but behaviour, hydration, appetite, vomiting, pain and progression often matter more. Fresh red blood and black, tarry stool can point to different sources of bleeding; both deserve veterinary attention. A photo taken safely is often more useful than a colour description from memory.",
        ],
        table: {
          headers: ["What you notice", "Why it matters", "When veterinary advice is sensible"],
          rows: [
            ["One soft stool; dog remains bright", "A short-lived change may follow food, treats, stress or scavenging, but the cause is not proven.", "Phone if it repeats, the dog is vulnerable, another symptom appears or you are unsure."],
            ["Repeated or very watery diarrhoea", "Ongoing fluid loss raises dehydration and electrolyte concerns.", "Seek prompt advice, sooner for puppies, small dogs, seniors or dogs with medical conditions."],
            ["Fresh blood or black, tarry stool", "Bleeding may be present and cannot be safely assessed from colour alone.", "Contact a vet urgently and describe the colour, amount and the dog's general condition."],
            ["Vomiting as well as diarrhoea", "Fluid loss is greater and obstruction, infection, toxin exposure or other serious disease may be possible.", "Call promptly; repeated vomiting, weakness, pain or inability to keep water down increases urgency."],
            ["Weakness, pale gums, pain, bloating or collapse", "These are whole-body warning signs, not a simple stool problem.", "Use emergency veterinary care immediately."],
            ["Diarrhoea that returns or continues", "Parasites, diet-responsive illness or other disease may need examination and testing.", "Arrange a veterinary assessment rather than cycling through home remedies."],
          ],
        },
      },
      {
        heading: "Dehydration and vulnerable dogs",
        body: [
          "Diarrhoea removes water and electrolytes. Repeated vomiting, hot weather, refusal to drink or illness can add to the loss. Owners may notice dry or tacky gums, reduced urination, sunken-looking eyes, unusual tiredness or weakness, but home checks cannot reliably grade dehydration or show what caused it.",
          "Puppies have less reserve and infectious disease such as parvovirus must be considered when vaccination is incomplete or unknown. Senior dogs, pregnant dogs, very small dogs and those with kidney, endocrine, gut or other chronic conditions also warrant an earlier call. Tell the clinic about age and medical history at the start of the conversation.",
        ],
        callout: "important",
      },
      {
        heading: "Information worth noting before calling the vet",
        body: [
          "Do not delay an urgent call to complete the list. Record what you can while another adult arranges transport, or take the information with you.",
        ],
        checklist: [
          "When the diarrhoea began, how often it occurred and whether the amount or frequency is changing.",
          "Stool consistency and colour, including fresh blood, black or tarry material, mucus or anything unusual.",
          "Vomiting, appetite, drinking, urination, energy, pain, bloating, gum colour and any collapse.",
          "Food changes, new treats, bones, rubbish, compost, dead animals, plants, chemicals or medication access.",
          "Recent travel, boarding, daycare, dog-park exposure, contact with sick dogs or household stress.",
          "Age, weight, vaccination and deworming history, current medicines and existing medical conditions.",
          "A clear photo and a fresh stool sample only if the clinic says it would be useful and collecting it is safe.",
        ],
      },
      {
        heading: "What to do while arranging advice",
        body: [
          "Keep clean water available unless a veterinarian tells you otherwise, limit strenuous activity and prevent access to rubbish, scraps, bones and unfamiliar foods. Separate a dog with possible infectious illness from puppy classes, parks, daycare and shared communal areas, and clean up stool carefully with good hand hygiene.",
          "Feeding and fluid advice depends on age, size, health, vomiting and the likely cause. Do not apply an arbitrary fasting period to every dog, and do not force food or water into a weak, vomiting or distressed animal. The clinic can give interim instructions after hearing the specific history.",
        ],
      },
      {
        heading: "Unsafe shortcuts to avoid",
        body: [
          "Human anti-diarrhoeal drugs, painkillers, antibiotics, leftover prescriptions and unmeasured home mixtures may be harmful, mask progression or be wrong for the cause. Do not assume that a bland-looking diet is safe for every puppy or medically vulnerable dog, and do not keep changing foods when diarrhoea is recurring.",
          "Do not wait for every red flag to appear. A dog with blood, black stool, repeated vomiting, pain, weakness, collapse, suspected poison or foreign-object exposure needs professional assessment. Phone ahead if parvovirus or another contagious infection could be involved so the clinic can manage arrival safely.",
        ],
        links: [
          { title: "Dog not eating", description: "Assess appetite change alongside energy, pain and other symptoms.", href: "/health/dog-not-eating-south-africa" },
          { title: "Blood in dog stool", description: "Understand why red blood needs veterinary context.", href: "/health/dog-blood-in-stool-south-africa" },
          { title: "Black or tarry stool", description: "Recognise a potentially serious change in stool colour.", href: "/health/dog-black-tarry-stool-south-africa" },
          { title: "When to take a dog to the vet", description: "Review urgent and same-day warning signs.", href: "/health/when-to-take-your-dog-to-the-vet-south-africa" },
        ],
      },
    ],
    faqs: [
      { question: "Is dog diarrhoea always an emergency?", answer: "No. A single mild change in a bright adult dog is different from repeated watery diarrhoea or illness in a puppy. Blood, black stool, repeated vomiting, severe pain, weakness, collapse, suspected poison or rapid deterioration needs urgent advice." },
      { question: "Should I fast my dog after diarrhoea?", answer: "Do not apply a fixed fasting rule to every dog. Puppies and dogs with some health conditions may be harmed by inappropriate fasting. Ask a veterinarian what feeding plan fits this dog's age, health and symptoms." },
      { question: "Can stress cause loose stool?", answer: "Stress can be associated with diarrhoea, but it does not prove the cause. Infection, parasites, diet, toxins, foreign material and disease can look similar, so take other symptoms and progression seriously." },
      { question: "Should I take a stool sample to the vet?", answer: "Ask the clinic. A recent sample may help in some cases, but a photo may be sufficient initially and an urgent visit should never be delayed to collect one." },
    ],
    related: [
      { title: "When to Take Your Dog to the Vet", description: "Match symptoms and progression to the right level of care.", href: "/health/when-to-take-your-dog-to-the-vet-south-africa" },
      { title: "Parvovirus in Dogs", description: "Know the urgent puppy signs and protect other dogs.", href: "/emergency/parvovirus-in-dogs-south-africa" },
      { title: "Toxic Foods for Dogs", description: "Check common kitchen and household food risks.", href: "/health/toxic-foods-for-dogs-south-africa" },
    ],
    sources: [
      { label: "MSD Veterinary Manual: digestive disorders in dogs", href: "https://www.msdvetmanual.com/dog-owners/digestive-disorders-of-dogs/introduction-to-digestive-disorders-of-dogs", note: "Veterinary reference for digestive signs, dehydration, diagnostic history and stool samples." },
      { label: "MSD Veterinary Manual: when to see a veterinarian", href: "https://www.msdvetmanual.com/multimedia/table/when-to-see-a-veterinarian", note: "Veterinary triage reference for bloody diarrhoea, black stool, pain, weakness and other urgent signs." },
      { label: "WSAVA vaccination guidelines", href: "https://wsava.org/global-guidelines/vaccination-guidelines/", note: "Veterinary vaccination guidance relevant to puppy infectious-disease risk and prevention." },
    ],
  },
  {
    slug: "compare-dog-insurance-south-africa",
    path: "/insurance/compare-dog-insurance-south-africa",
    hubTitle: "Pet Insurance",
    hubPath: "/insurance",
    title: "Compare Dog Insurance in South Africa",
    seoTitle: "Compare Dog Insurance South Africa | Policy Worksheet",
    description:
      "Compare South African dog insurance policy wording, limits, sub-limits, excesses, waiting periods, exclusions, claims, age rules and renewal terms.",
    intro:
      "A useful insurance comparison starts with the full policy wording, schedule and current quote, not a headline premium or a plan name. Put the same questions to every insurer and write the answers in one worksheet. The result should show what the policy may pay, what remains your responsibility, when cover starts and which events or conditions fall outside it.",
    updated: "2026-08-10",
    primaryImage: {
      src: "/images/guides/compare-dog-insurance-south-africa.webp",
      alt: "Dog owner comparing pet insurance documents and veterinary costs",
      width: 1536,
      height: 1024,
    },
    quickFacts: [
      "Dog Haven does not rank providers or label one policy best; needs and contract terms differ.",
      "Compare the policy wording, benefit schedule, exclusions, quote and any endorsements that apply to your dog.",
      "An annual limit can hide smaller sub-limits, per-condition caps, co-payments or category restrictions.",
      "Keep an accessible way to pay excesses, excluded costs, amounts above limits and any bill that must be paid before reimbursement.",
    ],
    sections: [
      {
        heading: "Start with the documents that govern cover",
        body: [
          "Marketing pages are useful for finding products, but the contract documents decide claims. Download the current policy wording and benefit schedule, then keep the quote, disclosure record and written answers supplied for your dog. Check the insurer and intermediary details and read which document takes precedence if summaries conflict.",
          "Compare like with like. Accident-only cover is not directly comparable with broader accident-and-illness cover, and routine-care benefits may be an add-on or a capped allowance rather than insurance against major veterinary costs. Product labels do not replace definitions.",
        ],
        links: [
          { title: "Understand pet insurance first", description: "Review the basic relationship between cover and emergency savings.", href: "/insurance/pet-insurance-for-dogs-south-africa" },
          { title: "Check waiting periods", description: "See why start dates and condition-specific periods matter.", href: "/insurance/dog-insurance-waiting-periods-south-africa" },
        ],
      },
      {
        heading: "Policy comparison worksheet",
        body: [
          "Complete one column per policy using its current contract documents. If a question cannot be answered from the wording, ask the provider in writing and save the response with the quote.",
        ],
        table: {
          headers: ["Policy feature", "Questions to ask", "Why it matters"],
          rows: [
            ["Cover type", "Is cover accident-only, accident and illness, hospital-focused, or broader? Is routine care separate?", "Similar plan names can protect against very different events."],
            ["Annual limit", "What is the total maximum per policy year, and does it reset on a fixed date or anniversary?", "A large claim or several unrelated claims can use the year's allowance."],
            ["Sub-limits and per-condition caps", "Are consultations, diagnostics, dentistry, medicine, hospitalisation or specific conditions capped separately?", "A headline annual limit may not be available to every treatment category."],
            ["Excess and co-payment", "Is it a fixed amount, percentage or both? Does it apply per claim, event, condition, invoice or year?", "Your share can change materially with the number and size of claims."],
            ["Waiting periods", "Which periods apply to accidents, illness, hereditary conditions, specified conditions and add-ons?", "An event or first symptom during a waiting period may not be claimable."],
            ["Pre-existing conditions", "How is a prior symptom, consultation, test or related condition defined and assessed?", "The definition may extend beyond a condition already diagnosed by name."],
            ["Chronic care", "If an eligible condition becomes chronic, are ongoing visits, tests, medicines and therapeutic diets covered and for how long?", "Long-term treatment can meet annual, category or renewal restrictions."],
            ["Hereditary and congenital wording", "Are these covered, excluded, delayed or limited, and does breed-specific wording apply?", "Policies do not treat inherited or present-from-birth conditions uniformly."],
            ["Claims and payment", "Which forms, vet notes and invoices are required? What is the deadline? Do you pay first, and when is direct payment available?", "Cash-flow needs and administrative steps can differ even when treatment is eligible."],
            ["Age and multi-pet rules", "Are there entry ages, cover changes as a dog ages, household limits or genuine multi-pet discounts?", "Eligibility, benefits and the total household premium can change over time."],
            ["Renewal and cancellation", "When may premiums, terms, limits or exclusions change? What notice applies if either party cancels?", "Future cover is shaped by renewal wording, not today's quote alone."],
            ["Emergency treatment", "Does the policy treat after-hours consultations, referral care, hospitalisation, snake bite, poisoning or travel differently?", "Emergency care can involve several providers and rapid authorisation decisions."],
          ],
        },
      },
      {
        heading: "Calculate what you would pay in a claim",
        body: [
          "Work through several hypothetical bills without inventing the chance that they will occur. Apply the relevant category limit, sub-limit, excess, percentage co-payment and exclusions in the order described by the policy. Repeat the exercise for two claims in the same year and for follow-up treatment of one condition.",
          "Ask who pays the veterinary practice. Reimbursement usually means the owner settles the bill and submits a claim. Some products or circumstances may allow direct payment, a payment card or prior arrangement, but availability can depend on the claim and provider. Obtain the current process in writing and keep another payment plan for gaps or delays.",
        ],
        links: [
          { title: "Prepare a claims file", description: "Keep invoices, records and required details ready.", href: "/insurance/pet-insurance-claims-checklist-south-africa" },
          { title: "Plan emergency veterinary costs", description: "Understand the layers that can appear in an urgent bill.", href: "/costs/emergency-vet-costs-south-africa" },
        ],
      },
      {
        heading: "Read exclusions and definitions together",
        body: [
          "An exclusion may depend on definitions elsewhere in the wording. Read the definitions of accident, illness, pre-existing condition, clinical sign, hereditary condition, congenital condition, dental treatment, routine care and policy year before interpreting the benefit table. Check endorsements or exclusions added specifically after the insurer reviews your dog's history.",
          "Disclose previous symptoms, examinations, tests and treatment accurately. A condition may be treated as pre-existing based on earlier clinical signs even if the final diagnosis came later. If the answer is unclear, ask how a concrete entry in the veterinary record would be handled rather than relying on a general sales summary.",
        ],
        links: [
          { title: "Pre-existing conditions", description: "Read definitions, disclosure questions and switching risks carefully.", href: "/insurance/pre-existing-conditions-pet-insurance-south-africa" },
        ],
      },
      {
        heading: "Routine care, chronic conditions and life stage",
        body: [
          "Vaccination, sterilisation, parasite prevention, wellness checks and dental cleaning may sit outside core accident-and-illness cover or appear in a separate routine-care allowance. Compare the added premium with the exact eligible services, limits, waiting period and claim rules. Do not infer broad medical cover from a wellness benefit.",
          "For a puppy, ask about congenital and hereditary wording, growth-related conditions, vaccination requirements and entry age. For an adult or senior dog, examine new-entry limits, renewal terms, chronic medicine, repeat diagnostics, dentistry and whether benefits change with age. For several dogs, compare the full household cost and separate limits per pet rather than focusing on a discount percentage.",
        ],
      },
      {
        heading: "Questions to resolve before switching or cancelling",
        body: [
          "Moving to a new policy can introduce new waiting periods and a fresh assessment of medical history. Do not cancel existing cover until you understand the new inception date, exclusions, waiting periods and any gap between policies. Ask how ongoing or previously investigated signs would be treated.",
          "At renewal, read the new schedule and wording instead of checking only the debit amount. Save notice of changes to premiums, limits, benefits, excesses and exclusions. If something important differs from the quote or your understanding, use the provider's complaints process and retain every document and response.",
        ],
        checklist: [
          "Policy wording and schedule downloaded and dated.",
          "Dog-specific quote, endorsements and exclusions saved.",
          "Annual limits, sub-limits, excesses and co-payments entered in the worksheet.",
          "Waiting periods and pre-existing-condition definition checked against the veterinary history.",
          "Claim deadline, required documents and payment route confirmed.",
          "Renewal, cancellation and switching implications understood.",
          "Emergency cash-flow plan retained for uncovered or upfront costs.",
        ],
        callout: "important",
      },
      {
        heading: "Fit insurance into the wider dog budget",
        body: [
          "Insurance transfers only the risks described in the contract. Food, routine care, prevention, grooming and many exclusions still need ordinary household funding. Add the premium to the monthly budget, then hold accessible funds for excesses, upfront payment, exclusions and amounts above limits.",
        ],
        links: [
          { title: "Build a monthly dog budget", description: "Separate essential, periodic, optional and unexpected costs.", href: "/costs/monthly-cost-of-owning-a-dog-south-africa" },
          { title: "Use the dog cost calculator", description: "Enter your own local figures rather than a national average.", href: "/tools/dog-cost-calculator" },
        ],
      },
    ],
    faqs: [
      { question: "Which dog insurance is best in South Africa?", answer: "There is no universal best policy. Compare current contract wording against your dog's history, age and likely care needs, then assess limits, exclusions, excesses, claim process and household cash flow." },
      { question: "Is accident-only cover enough?", answer: "It covers a narrower category than accident-and-illness products. Its suitability depends on the exact events covered, exclusions, limits and the costs you can fund yourself. Read the definition of an accident in the policy." },
      { question: "Does pet insurance pay the vet directly?", answer: "Processes differ. Some claims are reimbursed after the owner pays, while direct payment or another mechanism may be available under specific products or circumstances. Confirm the current process in writing." },
      { question: "Can I switch policies without a gap?", answer: "Dates may overlap cleanly, but new waiting periods and a new assessment of prior symptoms can still change practical cover. Compare both policies and obtain written answers before cancelling." },
    ],
    related: [
      { title: "Dog Ownership Cost Report", description: "Review the dated public starting-premium sample and its limits.", href: "/costs/south-africa-dog-ownership-cost-report" },
      { title: "Pet Insurance for Dogs", description: "Understand cover, exclusions and emergency savings together.", href: "/insurance/pet-insurance-for-dogs-south-africa" },
      { title: "Insurance Waiting Periods", description: "Check when each category of cover starts.", href: "/insurance/dog-insurance-waiting-periods-south-africa" },
      { title: "Claims Checklist", description: "Prepare records and documents before a claim is urgent.", href: "/insurance/pet-insurance-claims-checklist-south-africa" },
    ],
    sources: [
      { label: "Financial Sector Conduct Authority: consumers", href: "https://www.fsca.co.za/Consumers/", note: "Official South African financial-sector consumer information and complaint context." },
      { label: "OUTsurance pet policy wording", href: "https://www.outsurance.co.za/globalassets/documents/outsurance-sa/pet/pet_policy_wording.pdf", note: "Current provider policy wording checked as an example of definitions, benefits, exclusions and claims terms; no provider is endorsed." },
      { label: "MediPet policy and terms", href: "https://medipet.co.za/terms-and-conditions-2024/", note: "Current provider terms checked as an example of disclosure, renewal, cancellation and policy-document precedence; no provider is endorsed." },
    ],
  },
  {
    slug: "puppy-training-south-africa",
    path: "/training/puppy-training-south-africa",
    hubTitle: "Training",
    hubPath: "/training",
    title: "Puppy Training in South Africa",
    seoTitle: "Puppy Training South Africa | First Weeks and Core Skills",
    description:
      "Reward-based puppy training for South African homes: settling in, toilet routine, recall, lead skills, handling, mouthing, calm behaviour and socialisation.",
    intro:
      "Training begins with safety, sleep, predictable routines and short moments of learning. A puppy does not need a packed timetable or harsh correction. They need household members to reward the same useful behaviours, prevent rehearsals of unwanted behaviour and introduce new people, animals, places and sounds at a pace the puppy can handle.",
    updated: "2026-08-10",
    primaryImage: {
      src: "/images/guides/puppy-training-south-africa.webp",
      alt: "Owner practising gentle reward-based training with a puppy at home",
      width: 1536,
      height: 1024,
    },
    quickFacts: [
      "Use food, play, access and praise to reward behaviour you want repeated.",
      "Keep sessions short enough that the puppy remains engaged, then stop before either of you becomes frustrated.",
      "Socialisation means safe, positive exposure with choice and distance; it does not mean greeting every dog or person.",
      "Sudden behaviour change, touch sensitivity, limping, persistent distress or difficulty eating deserves veterinary attention.",
    ],
    sections: [
      {
        heading: "First two weeks of puppy training",
        body: [
          "The first fortnight is mainly about making daily life understandable. Keep the sleeping area quiet, learn the puppy's waking and toileting pattern, supervise closely when they are loose, and use gates or a pen to prevent access to hazards. Introduce household rules without expecting long concentration.",
        ],
        checklist: [
          "Book a veterinary check and confirm vaccination, parasite prevention, feeding and safe-exposure advice.",
          "Agree on the same cue words, toilet area, sleeping routine and household boundaries.",
          "Reward the puppy for looking at their name, approaching people, toileting in the chosen place and settling quietly.",
          "Provide safe chewing options and remove cables, medicines, toxic foods, plants and small swallowable objects.",
          "Practise brief, gentle handling of paws, ears, mouth, collar or harness, stopping if the puppy becomes worried.",
          "Introduce a lead and harness indoors or in a secure area before expecting a full walk.",
          "Plan calm exposure to everyday sounds, surfaces, people and safe dogs without forcing contact.",
          "Protect sleep. An overtired puppy often mouths, zooms, vocalises and struggles to learn.",
        ],
        links: [
          { title: "Use the new puppy checklist", description: "Set up records, food, sleep, transport and home safety.", href: "/puppy/new-puppy-checklist-south-africa" },
          { title: "Plan puppy vaccination", description: "Ask your vet how to combine protection with safe early exposure.", href: "/puppy/puppy-vaccination-schedule-south-africa" },
        ],
      },
      {
        heading: "Core skills to practise",
        body: [
          "Practise in an easy setting before adding distance, visitors or outdoor distraction. Say a cue once, help the puppy succeed and reward promptly. If the puppy cannot respond, reduce the difficulty instead of repeating the word or applying pressure.",
        ],
        table: {
          headers: ["Skill", "What to practise", "Common mistake"],
          rows: [
            ["Name response", "Say the name once and reward the puppy for turning towards you.", "Repeating the name when the puppy is distracted or using it before something unpleasant."],
            ["Toilet routine", "Offer frequent trips after sleep, food, play and excitement; reward in the chosen place.", "Punishing accidents or giving unsupervised freedom too soon."],
            ["Recall foundations", "Reward movement towards you over very short distances in a secure space.", "Calling for something the puppy dislikes or testing recall around unsafe distractions."],
            ["Lead introduction", "Reward wearing comfortable equipment and following a loose lead for a few steps.", "Dragging the puppy, keeping constant tension or starting in a busy street."],
            ["Handling", "Pair brief touch of paws, ears, mouth and body with rewards and release.", "Holding the puppy down or continuing after avoidance and tension appear."],
            ["Mouthing", "Redirect to a toy, pause play when teeth become too hard and provide rest.", "Shouting, hitting the muzzle or exciting an already overtired puppy."],
            ["Calm behaviour", "Quietly reward resting on a mat and watching household activity without joining it.", "Giving attention only when the puppy jumps, barks or grabs clothing."],
          ],
        },
      },
      {
        heading: "Toilet learning without punishment",
        body: [
          "Take the puppy to the same suitable area after waking, eating, drinking, vigorous play and any signs of sniffing or circling. Stay boring until toileting happens, then reward immediately. Keep a simple log for several days so the household can anticipate the pattern rather than reacting to accidents.",
          "Clean accidents without scolding. Punishment after the event cannot teach the location and may teach the puppy to hide toileting from people. A sudden regression, very frequent urination, straining, diarrhoea, blood, pain or unusual thirst needs veterinary advice.",
        ],
      },
      {
        heading: "Recall, lead and safe outdoor control",
        body: [
          "Build recall indoors, in the garden and on a long line in a safe area before expecting it near traffic, dogs or wildlife. Reward generously for returning and release the puppy back to safe activity at times so recall does not always end the fun. A lead remains essential where the environment is not secure.",
          "Let the puppy investigate a well-fitted harness or flat collar, then reward calm wearing and a few steps beside you. Loose-lead walking grows from many short successes. Check equipment fit often during growth and do not use a retractable lead to teach early position and pressure skills.",
        ],
      },
      {
        heading: "Mouthing, chewing and bite inhibition",
        body: [
          "Mouthing is normal puppy behaviour, especially during play, teething and tired periods. Keep toys within reach, redirect early and pause interaction calmly if biting becomes too hard. Then check whether the puppy needs sleep, a toilet break, food, safer play or relief from an over-stimulating situation.",
          "Avoid physical punishment, muzzle grabbing and intimidation. These can add fear without teaching what to bite instead. Persistent intense biting, guarding, pain around the mouth, difficulty eating or behaviour that is worsening despite careful management should be discussed with a vet and a qualified reward-based professional.",
        ],
      },
      {
        heading: "Socialisation without forced greetings",
        body: [
          "Useful exposure lets the puppy notice people, vaccinated stable dogs, traffic, household sounds, surfaces, grooming tools, vehicles and new places while still able to eat, play, move away and recover. Distance is valuable. Watching a calm dog from across a space can teach more than being pulled into a greeting.",
          "Ask your vet how to manage infectious-disease risk in your area while supporting early development. Choose clean, well-run environments and avoid high-traffic dog areas with unknown health status until your veterinarian advises they are appropriate. Never flood a frightened puppy by trapping them close to the trigger.",
        ],
        links: [
          { title: "Visit the puppy hub", description: "Connect training with feeding, health, sleep and safe development.", href: "/puppy" },
          { title: "Feed a growing puppy", description: "Match rewards and daily food to the puppy's nutrition plan.", href: "/food/puppy-feeding-guide-south-africa" },
        ],
      },
      {
        heading: "Keep the household consistent",
        body: [
          "Write down the cues and rules that matter. Decide where the puppy sleeps, which doors require a pause, how greetings work and what earns access to furniture or the garden. Consistency means making the same behaviour worthwhile; it does not require rigid schedules or suppressing normal puppy needs.",
          "Children need close adult supervision and simple roles such as tossing a treat for four paws on the floor. Give the puppy a protected resting place and the freedom to move away. Adults should handle lead training, high-value chews and any early guarding concern.",
        ],
      },
      {
        heading: "Choose a class or trainer",
        body: [
          "Ask to observe a class without your puppy. Look for small groups, clean surfaces, controlled spacing, reward-based teaching and instructors who allow puppies to opt out. A good professional explains the exact methods and equipment used, adapts for fear or health, and refers medical or complex behaviour cases appropriately.",
          "Avoid anyone who relies on dominance, alpha language, intimidation, hitting, leash corrections, shock collars, choke chains, prong collars or forced exposure. Guarantees to fix every dog are another warning sign. Pain, sudden aggression, marked fear, inability to settle or a sharp change in behaviour should begin with veterinary assessment.",
        ],
        links: [
          { title: "Understand behaviour problems", description: "Separate training gaps from fear, stress and possible medical causes.", href: "/training/dog-behaviour-problems-south-africa" },
          { title: "Plan training costs", description: "Compare classes, private help and behaviour support.", href: "/costs/dog-training-costs-south-africa" },
          { title: "Prepare for adoption", description: "Build routines and support around the individual dog.", href: "/adoption/dog-adoption-south-africa" },
          { title: "Budget for puppy care", description: "Include food, veterinary care, equipment and training.", href: "/costs/monthly-cost-of-owning-a-dog-south-africa" },
        ],
      },
    ],
    faqs: [
      { question: "When should puppy training start?", answer: "Start with simple routines on the day the puppy arrives. Name response, toileting, safe chewing, handling and settling can be practised in very short sessions suited to the puppy's energy and confidence." },
      { question: "Should my puppy meet every dog for socialisation?", answer: "No. Calm observation and selected safe interactions are more useful than compulsory greetings. Protect the puppy from overwhelming encounters and ask your vet about local disease risk." },
      { question: "What should I do when my puppy bites?", answer: "Redirect to a suitable toy, pause play calmly if teeth are too hard and check for tiredness or over-stimulation. Seek professional help if biting is intense, worsening, associated with guarding or possibly linked to pain." },
      { question: "How long should a training session be?", answer: "End while the puppy is still succeeding. Several brief repetitions folded into normal life are usually more productive than a long formal session. The right duration varies by puppy and environment." },
    ],
    related: [
      { title: "New Puppy Checklist", description: "Prepare the home, records and first days.", href: "/puppy/new-puppy-checklist-south-africa" },
      { title: "Puppy Vaccination Schedule", description: "Discuss protection and safe exposure with your vet.", href: "/puppy/puppy-vaccination-schedule-south-africa" },
      { title: "Dog Behaviour Problems", description: "Know when fear, pain or complex behaviour needs more help.", href: "/training/dog-behaviour-problems-south-africa" },
    ],
    sources: [
      { label: "American Veterinary Society of Animal Behavior: humane training", href: "https://avsab.org/resources/position-statements/", note: "Veterinary behaviour guidance supporting reward-based training and avoidance of aversive methods." },
      { label: "AVSAB puppy socialisation statement", href: "https://www.avsab.org/wp-content/uploads/2019/01/Puppy-Socialization-Position-Statement-FINAL.pdf", note: "Veterinary behaviour guidance on early, safe socialisation and positive training." },
      { label: "WSAVA vaccination guidelines", href: "https://wsava.org/global-guidelines/vaccination-guidelines/", note: "Veterinary guidance for discussing vaccination and exposure risk with a veterinarian." },
    ],
  },
  {
    slug: "monthly-cost-of-owning-a-dog-south-africa",
    path: "/costs/monthly-cost-of-owning-a-dog-south-africa",
    hubTitle: "Dog Costs",
    hubPath: "/costs",
    title: "Monthly Dog Costs in South Africa",
    seoTitle: "Monthly Dog Costs South Africa | Build Your Own Budget",
    description:
      "Build a monthly South African dog budget from essential, periodic, optional and unexpected costs without relying on a misleading national average.",
    intro:
      "There is no credible single monthly amount for every South African dog. Food needs change with size and activity; veterinary, medication and grooming needs change with health, age and coat; services and prices change by location and lifestyle. The reliable number is the one built from current local prices for your dog, with irregular costs converted into monthly set-asides.",
    updated: "2026-08-10",
    primaryImage: {
      src: "/images/guides/monthly-dog-cost-planning-south-africa.webp",
      alt: "Dog owner planning monthly household costs for caring for a dog",
      width: 1536,
      height: 1024,
    },
    quickFacts: [
      "Separate essential monthly spending, periodic care, optional lifestyle services and unexpected costs.",
      "Use the actual daily feeding amount, local service quotes and your dog's health plan rather than a generic national average.",
      "Divide predictable annual or occasional costs by twelve and save that amount each month.",
      "Insurance and emergency savings address different gaps; either choice still needs a plan for immediate payment and exclusions.",
    ],
    sections: [
      {
        heading: "Why monthly dog costs vary",
        body: [
          "Size affects food volume, some weight-based prevention and medication, beds, crates and transport. It does not predict the whole budget: a small dog may need frequent professional grooming, dental treatment or specialist care, while a healthy large short-coated dog may have a simpler service routine.",
          "Age and health can reshape the budget. Puppies concentrate vaccination, equipment, training and growth-related costs; adults may be steadier; seniors may need more examinations, tests, medication or adapted equipment. Location affects clinic fees, travel, boarding and service choices, while work patterns can add daycare, walking or pet-sitting.",
        ],
      },
      {
        heading: "Build the budget in four groups",
        body: [
          "Enter your own current amount or quote for each relevant row. Mark a category as not applicable only after considering how the need is met; home grooming still has equipment and replacement costs, for example. Avoid converting optional luxuries into welfare essentials or treating annual veterinary care as an unexpected surprise.",
        ],
        table: {
          headers: ["Budget group", "Typical items", "How to enter a monthly amount"],
          rows: [
            ["Essential monthly", "Suitable food, routine parasite prevention where advised, chronic medicine, waste and cleaning supplies.", "Use consumption, pack size, dosage schedule and current local prices for this dog."],
            ["Periodic", "Veterinary examinations, vaccination where due, dental planning, equipment replacement, grooming and training blocks.", "Estimate the annual or known interval total and divide it across the months before it is due."],
            ["Optional or lifestyle", "Daycare, dog walking, boarding, pet sitting, professional grooming choices, activities and travel.", "Use actual frequency and quotes; keep these separate so the core welfare budget remains visible."],
            ["Unexpected", "Injury, illness, diagnostics, after-hours treatment, surgery, urgent transport and recovery support.", "Set an emergency savings contribution and record insurance premiums, excesses and uncovered exposure separately."],
          ],
        },
      },
      {
        heading: "Essential monthly costs",
        body: [
          "Calculate food from the dog's daily feeding amount and the usable quantity in the pack. Include treats or training food without double-counting food taken from the daily ration. A veterinary diet, allergies, appetite changes or chronic disease can alter both the product and amount, so review the figure after any clinical change.",
          "Add parasite prevention based on veterinary advice for the dog's weight, health, area and lifestyle. Include regular medicine and repeat-prescription costs where applicable. Basic cleaning, waste bags and frequently replaced chews or enrichment items may be small individually but should appear if they recur reliably.",
        ],
        links: [
          { title: "Plan dog food costs", description: "Work from feeding needs, pack use and current prices.", href: "/costs/dog-food-cost-south-africa" },
          { title: "Read the dog food hub", description: "Connect budget choices with life stage and health.", href: "/food" },
        ],
      },
      {
        heading: "Periodic costs belong in the monthly plan",
        body: [
          "List veterinary examinations, vaccination when due, dental assessment, equipment replacement, coat care, nail care, training and known travel or boarding. Record when each item is likely to occur and divide its estimate by the number of months available. Transfer the set-aside into a separate dog-care account or budget category.",
          "Grooming varies with coat, size, matting risk, handling and how much work is safely done at home. Training may be concentrated around puppyhood or a new behaviour concern, but refresher sessions and equipment also recur. Obtain direct quotes instead of importing a price from another city or an old article.",
        ],
        links: [
          { title: "Estimate grooming costs", description: "Compare coat, frequency, condition and service factors.", href: "/costs/dog-grooming-costs-south-africa" },
          { title: "Estimate training costs", description: "Plan for puppy classes, private sessions and behaviour support.", href: "/costs/dog-training-costs-south-africa" },
        ],
      },
      {
        heading: "Optional and lifestyle spending",
        body: [
          "Boarding, daycare, dog walking, pet sitting and holiday transport can be essential for one household and unnecessary for another. Base the monthly entry on work schedules, travel, the number of dogs, medication needs and peak-season use. Trial visits or suitability assessments may add an initial cost.",
          "Premium beds, subscriptions, clothing, frequent toy replacement and paid activities can improve convenience or enjoyment, but keep them separate from food, veterinary care and safe equipment. Clear separation makes it easier to reduce discretionary spending without accidentally cutting welfare needs.",
        ],
      },
      {
        heading: "Unexpected care, savings and insurance",
        body: [
          "Emergency bills may combine an after-hours consultation, diagnostics, hospitalisation, surgery, medicine, referral and follow-up. Decide how you would authorise care and access funds at short notice. The target will depend on your available credit, savings, dog's risks, travel distance and the level of veterinary care you want to be able to approve.",
          "Pet insurance may cover eligible future events under the policy wording, but waiting periods, pre-existing conditions, exclusions, annual limits, sub-limits and excesses remain relevant. Savings can cover immediate payment and excluded costs but may take time to build. Many households use a combination; neither removes the need to read the terms and keep accessible funds.",
        ],
        links: [
          { title: "Compare dog insurance", description: "Use the same worksheet for policy wording, limits and claim rules.", href: "/insurance/compare-dog-insurance-south-africa" },
          { title: "Understand emergency vet costs", description: "See what can shape an urgent-care estimate.", href: "/costs/emergency-vet-costs-south-africa" },
        ],
        callout: "important",
      },
      {
        heading: "Calculate your own monthly estimate",
        body: [
          "First total the items paid every month. Next list predictable annual and occasional items, add them together and divide by twelve. Then add the chosen monthly contribution to emergency savings and any insurance premium. Keep optional services in a separate subtotal so you can see the minimum care budget and the lifestyle budget independently.",
          "Use receipts for two or three ordinary months to replace estimates with actual spending. Review local quotes at least yearly and after a change in weight, food, health, age, coat condition, work pattern, housing or travel. Do not use one unusually cheap month as the baseline when annual care has simply not fallen due.",
        ],
        checklist: [
          "Record the dog's current weight, life stage, health needs, coat and activity pattern.",
          "Price the actual food amount, prevention and medication used each month.",
          "Collect local quotes for veterinary, grooming, training, boarding and walking needs.",
          "Convert annual and periodic costs into a monthly set-aside.",
          "Add an accessible emergency contribution and record insurance costs separately.",
          "Keep essential and optional subtotals visible.",
          "Compare the estimate with receipts and update it when the dog's needs or local prices change.",
        ],
        links: [
          { title: "Use the dog cost calculator", description: "Enter your own figures and see the monthly planning total.", href: "/tools/dog-cost-calculator" },
          { title: "Plan adoption costs", description: "Check setup and ongoing care before bringing a dog home.", href: "/adoption/dog-adoption-south-africa" },
          { title: "Plan puppy training", description: "Build early classes and support into first-year costs.", href: "/training/puppy-training-south-africa" },
        ],
      },
    ],
    faqs: [
      { question: "What is the average monthly cost of a dog in South Africa?", answer: "No defensible single figure fits every dog and household. Build an estimate from the dog's actual food, prevention, health, grooming, training, service and emergency needs using current local prices." },
      { question: "Is a small dog always cheaper each month?", answer: "No. Food and some weight-based products may cost less, but grooming, dental care, behaviour support, chronic illness and specialist treatment can outweigh that difference." },
      { question: "Should annual vet care be counted monthly?", answer: "Yes for planning. Estimate predictable annual care and divide it into monthly set-asides so the cost is funded before it is due." },
      { question: "Do I need emergency savings if I have insurance?", answer: "Usually some accessible funds are still useful for excesses, exclusions, amounts above limits, upfront payment and non-covered care. Check the specific claim process and policy wording." },
    ],
    related: [
      { title: "Dog Cost Calculator", description: "Build an estimate from your own household figures.", href: "/tools/dog-cost-calculator" },
      { title: "Compare Dog Insurance", description: "Compare contract terms without provider rankings.", href: "/insurance/compare-dog-insurance-south-africa" },
      { title: "Dog Food Costs", description: "Calculate a recurring food line from actual use.", href: "/costs/dog-food-cost-south-africa" },
    ],
    sources: [
      { label: "South African Veterinary Council", href: "https://savc.org.za/", note: "Official professional context for veterinary care in South Africa." },
      { label: "Financial Sector Conduct Authority: consumers", href: "https://www.fsca.co.za/Consumers/", note: "Official consumer context for evaluating regulated financial products and providers." },
    ],
  },
];
