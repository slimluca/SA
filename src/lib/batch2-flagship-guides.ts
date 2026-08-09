import type { GuideContent } from "@/lib/content";

export const batch2FlagshipGuides: GuideContent[] = [
  {
    slug: "rabies-south-africa",
    path: "/emergency/rabies-south-africa",
    hubTitle: "Emergency Help",
    hubPath: "/emergency",
    title: "Rabies in South Africa: What Dog Owners Should Know",
    seoTitle: "Rabies in South Africa | Dog Exposure and Vaccination Guide",
    description: "South African rabies guidance for dog owners covering vaccination, possible exposure, bite incidents, urgent contacts, records, travel, and prevention.",
    intro: "Rabies is a viral disease of mammals that affects the nervous system and is almost always fatal after clinical signs develop. Prevention and fast professional action after a possible exposure are therefore essential. Dog owners should not try to decide at home whether an animal has rabies: separate people and animals safely, avoid saliva contact, and contact the appropriate veterinary and human-health professionals without delay.",
    updated: "2026-08-09",
    primaryImage: {
      src: "/images/guides/rabies-vaccination-dog-south-africa.webp",
      alt: "Dog owner attending a veterinary vaccination appointment",
      width: 1536,
      height: 1024,
    },
    isHealthGuide: true,
    quickFacts: [
      "Keep people and other animals away from a dog or animal suspected of rabies and phone a veterinarian or state veterinary service for instructions.",
      "A person bitten, scratched, or exposed to suspect saliva needs urgent assessment by a human healthcare professional. Dog Haven does not provide human treatment instructions.",
      "Vaccination is central to prevention. Ask a veterinarian to confirm the current schedule for your dog and keep the official record accessible.",
      "Normal appearance does not make an exposure safe, and unusual behaviour alone cannot diagnose rabies.",
    ],
    sections: [
      {
        heading: "Why rabies matters in South Africa",
        body: [
          "Rabies remains a South African public-health and animal-health concern. Dogs are an important link in many exposures, while wildlife and stray or unvaccinated animals can also be involved. Risk changes by place and time, so owners should follow current national, provincial, municipal, state-veterinary, and private-veterinary guidance rather than relying on an old social-media post.",
          "The consequences extend beyond the exposed dog. Family members, children, neighbours, visitors, animal-welfare workers, veterinary teams, and other pets may all be placed at risk if a suspect animal is handled casually. Vaccination, secure supervision, reliable records, and rapid reporting are practical protections for the whole community.",
        ],
      },
      {
        heading: "How dogs may be exposed",
        body: [
          "A dog may be exposed through a bite from an infected animal. Scratches can also matter when contaminated with saliva, as can suspect saliva contacting broken skin or mucous membranes. Encounters with stray dogs, roaming animals, wildlife, livestock, bats, or coastal wildlife should be described accurately to a veterinarian or state veterinary official.",
          "Owners may not witness the entire incident. A puncture wound, unexplained fight, dead animal in the garden, or encounter during travel can leave uncertainty. Do not examine an unfamiliar animal's mouth, handle a carcass with bare hands, or assume a small wound is irrelevant.",
        ],
      },
      {
        heading: "Urgent action after possible exposure",
        body: [
          "Move people and other animals away without creating another exposure. Confine your own dog only if this can be done safely and without contact with saliva. Phone a veterinarian or state veterinary service immediately, explain that rabies exposure is possible, and follow their instructions about transport, examination, reporting, observation, vaccination records, and contact with authorities.",
          "If a person has been bitten, scratched, or exposed to suspect saliva, they should seek urgent assessment from a human healthcare facility. Do not wait for symptoms, a veterinary appointment, or confirmation about the animal before arranging professional human medical advice.",
        ],
        callout: "important",
      },
      {
        heading: "Match the situation to the right contact",
        body: ["This table supports a phone call; it does not replace official instructions for the individual incident."],
        table: {
          headers: ["Situation", "Immediate action", "Who to contact"],
          rows: [
            ["Dog bitten or scratched by an unknown animal", "Separate animals safely, prevent further contact, and have the dog's vaccination record ready.", "Private veterinarian or state veterinary service immediately."],
            ["Dog bites or scratches a person", "Secure the dog without unsafe handling, provide vaccination and owner details, and ensure the exposed person seeks urgent human healthcare assessment.", "Human healthcare facility, veterinarian, and relevant local authority as directed."],
            ["Dog's vaccination status is uncertain", "Do not guess from memory or an incomplete card. Locate records and ask for a professional plan.", "Veterinary clinic that holds the record or another veterinarian."],
            ["Possible wildlife, stray-animal, bat, or coastal-wildlife exposure", "Keep people and pets away and do not capture or transport the suspect animal yourself.", "State veterinary service, veterinarian, or official animal-control/welfare channel."],
            ["Neurological or major behavioural change after possible exposure", "Avoid close handling and saliva contact; isolate the area from people and animals if this can be done safely.", "Veterinarian or emergency veterinary service immediately; state veterinary authorities may also be involved."],
          ],
        },
      },
      {
        heading: "Possible warning signs are not a home diagnosis",
        body: [
          "Rabies may cause behavioural or neurological changes, but the presentation is not always the dramatic aggression shown in films. Unexplained behaviour change, unusual fearfulness or restlessness, altered voice, difficulty swallowing, excessive salivation, weakness, incoordination, paralysis, seizures, or rapid neurological decline can have rabies and many other possible causes.",
          "Do not open the mouth, offer food by hand, test whether the dog can swallow, or invite people to inspect the animal. A symptom list cannot establish or exclude rabies. Give professionals the exposure history and observed changes, then follow their handling instructions.",
        ],
        callout: "caution",
      },
      {
        heading: "What information to have ready",
        body: ["Clear facts help veterinary and public-health teams assess urgency and choose the official next steps."],
        checklist: [
          "Your name, location, contact details, and the dog's identification or microchip information.",
          "The dog's rabies vaccination card, clinic details, vaccination dates, and any missing or uncertain records.",
          "When and where the incident happened and whether it involved a bite, scratch, fight, carcass, or possible saliva contact.",
          "The species, ownership, appearance, behaviour, direction of travel, and current location of the other animal, without approaching it again.",
          "Every person and animal that may have had contact and the type of contact, described without trying to assess the medical risk yourself.",
          "Wounds or new behavioural, swallowing, movement, salivation, or neurological changes noticed in your dog.",
          "Recent travel, boarding, rehoming, wildlife encounters, and relevant veterinary history.",
        ],
      },
      {
        heading: "Vaccination records and prevention",
        body: [
          "Rabies vaccination protects dogs and reduces risk to people and other animals. South African requirements and current campaign advice should be confirmed through official sources and your veterinarian. The appropriate timing may depend on the dog's age, previous records, vaccine used, travel, local risk, and current official direction, so this page does not substitute a fixed interval.",
          "Keep the original record safe and a clear digital copy available. Check it before boarding, daycare, travel, adoption, a move, or a bite incident. A missing record does not prove that a dog is unvaccinated, but uncertainty needs a veterinarian's catch-up plan rather than an owner-created schedule.",
        ],
        links: [
          { title: "Plan vaccinations with your vet", description: "Use the South African puppy and adult vaccination planning guide.", href: "/health/vaccination-schedule-south-africa" },
          { title: "Understand current rabies-law context", description: "Check official requirements and record questions.", href: "/laws/rabies-vaccination-law-south-africa" },
        ],
      },
      {
        heading: "Travel and everyday exposure prevention",
        body: [
          "Ask about rabies records and destination requirements before provincial or international travel, not at the departure gate. Keep dogs controlled around unknown animals, prevent roaming, secure gates and fencing, and supervise interactions on farms, beaches, trails, campsites, and holiday properties.",
          "Teach children not to approach unfamiliar, injured, trapped, unusually tame, or aggressive animals. Report suspected cases through official local channels. Do not collect, transport, or post online requests for volunteers to handle a suspect animal.",
        ],
      },
    ],
    faqs: [
      { question: "Can I tell whether a dog has rabies by looking at it?", answer: "No. Rabies can resemble other neurological or behavioural illnesses, and appearance cannot safely confirm or exclude it. Avoid handling and seek immediate professional guidance after a possible exposure." },
      { question: "What should I do if my dog bites a person?", answer: "Secure the dog without unsafe handling, provide accurate vaccination and owner information, contact a veterinarian, and ensure the exposed person obtains urgent assessment from a human healthcare facility." },
      { question: "What if I cannot find my dog's rabies certificate?", answer: "Contact the clinic that vaccinated your dog and ask for the record. If it cannot be confirmed, tell a veterinarian honestly and ask for the current catch-up or incident plan." },
      { question: "Does vaccination mean an exposure can be ignored?", answer: "No. Vaccination is essential protection, but a veterinarian or state veterinary official should still assess a possible exposure and the dog's documented status." },
    ],
    related: [
      { title: "Dog Vaccination Schedule", description: "Plan puppy, adult, rabies, record, and catch-up discussions.", href: "/health/vaccination-schedule-south-africa" },
      { title: "Rabies Vaccination Law", description: "Review official South African vaccination and record context.", href: "/laws/rabies-vaccination-law-south-africa" },
      { title: "Emergency Help", description: "Prepare for urgent veterinary calls and transport.", href: "/emergency" },
    ],
    sources: [
      { label: "NICD: rabies information", href: "https://www.nicd.ac.za/diseases-a-z-index/rabies/", note: "South African public-health information about rabies, exposure, prevention, and urgent assessment." },
      { label: "NICD: rabies updates", href: "https://www.nicd.ac.za/rabies-updates/", note: "South African rabies notices and public-health guidance." },
      { label: "South African Government rabies risk guidance", href: "https://www.gov.za/news/media-statements/agriculture-warns-public-and-travellers-bout-rabies-dogs-cape-fur-seals-and", note: "National guidance concerning rabies risk, pets, travellers, and Cape fur seals." },
      { label: "Western Cape Government: rabies", href: "https://www.westerncape.gov.za/general-publication/rabies", note: "Provincial rabies prevention, vaccination, and exposure information." },
    ],
  },
  {
    slug: "toxic-foods-for-dogs-south-africa",
    path: "/health/toxic-foods-for-dogs-south-africa",
    hubTitle: "Dog Health",
    hubPath: "/health",
    title: "Toxic Foods for Dogs in South African Homes",
    seoTitle: "Toxic Foods for Dogs South Africa | Urgent Household Guide",
    description: "Practical guidance on dangerous foods for dogs, kitchen and braai prevention, exposure information for the vet, and why owners should not wait for symptoms.",
    intro: "An ordinary kitchen, braai, handbag, child's snack, visitor's plate, or unsecured bin can expose a dog to food that is toxic or physically dangerous. The risk depends on the substance, amount, dog, and timing, so do not use an online dose calculation to decide that a known exposure is safe. Remove access, keep the packaging, and contact a veterinarian promptly.",
    updated: "2026-08-09",
    primaryImage: { src: "/images/guides/toxic-foods-dogs-south-africa.webp", alt: "Dog owner keeping potentially harmful foods safely out of reach", width: 1536, height: 1024 },
    isHealthGuide: true,
    quickFacts: [
      "Known exposure to chocolate, xylitol, grapes, raisins, or another dangerous substance should prompt a veterinary call even before symptoms appear.",
      "Do not induce vomiting or give salt, oil, milk, charcoal, or another home remedy unless a veterinarian specifically instructs you.",
      "Have the product, ingredients, estimated amount, exposure time, dog's weight, and current symptoms ready.",
      "Human medicines are a separate poisoning risk and should never be stored with dog treats or left within reach.",
    ],
    sections: [
      {
        heading: "Why everyday foods can be dangerous",
        body: [
          "Dogs process some substances differently from people, and individual sensitivity can vary. A food that looks like a small treat may affect the nervous system, heart, blood cells, liver, kidneys, or blood sugar. Other items, such as cooked bones, may create choking, tooth, obstruction, or internal-injury risks rather than chemical poisoning.",
          "Do not wait for vomiting or weakness after a known high-risk exposure. Some effects can be delayed, and earlier veterinary assessment may give the team more options. A calm dog immediately after eating something is not proof that no harm will follow.",
        ],
      },
      {
        heading: "Common food and household risks",
        body: ["This table is intentionally dose-free. Contact a veterinarian with the exact product and dog details rather than calculating a home threshold."],
        table: {
          headers: ["Food or substance", "Why it can be dangerous", "What to do"],
          rows: [
            ["Chocolate and cocoa", "Methylxanthines can affect the heart and nervous system; darker and concentrated products may present greater risk.", "Keep the wrapper, estimate the type and amount, and phone a vet promptly."],
            ["Xylitol or birch sugar", "This sweetener in some gum, sweets, baked goods, supplements, and nut butters can cause severe low blood sugar and liver injury in dogs.", "Treat any known exposure as urgent and contact a vet immediately."],
            ["Grapes, raisins, sultanas, currants, and fruitcake", "Kidney injury can occur unpredictably, and a safe amount cannot be assumed at home.", "Call a vet without waiting for symptoms."],
            ["Onions, garlic, leeks, and chives", "Allium foods can damage red blood cells; concentrated powders and repeated exposure also matter.", "Identify the ingredients and quantity and ask a vet for advice."],
            ["Alcohol and fermenting dough", "Alcohol can depress the nervous system and affect breathing, temperature, and blood sugar.", "Prevent further access and seek urgent veterinary advice."],
            ["Coffee, tea, energy drinks, caffeine tablets, and coffee grounds", "Caffeine can affect the heart and nervous system.", "Keep the product details and contact a vet promptly."],
            ["Macadamia nuts", "Dogs may develop weakness, tremors, vomiting, pain, or other signs.", "Phone a vet with the estimated amount and time."],
            ["Mouldy food or compost", "Mould toxins and mixed spoiled foods may cause vomiting, tremors, seizures, or other serious illness.", "Keep the dog away from the source and seek urgent veterinary advice."],
            ["Cooked bones and skewers", "They can splinter, lodge, puncture, obstruct, damage teeth, or create choking risk.", "Do not pull a deeply lodged object or induce vomiting; contact a vet."],
            ["Very rich or fatty leftovers", "They can cause severe gastrointestinal upset and may contribute to pancreatitis in susceptible dogs.", "Ask a vet about repeated vomiting, pain, marked lethargy, or a known large exposure."],
          ],
        },
      },
      {
        heading: "Braais, holidays, visitors, and children",
        body: [
          "Braai plates can combine fatty meat, cooked bones, skewers, onion or garlic seasoning, alcohol spills, chocolate desserts, raisins, and overflowing bins. Assign one closed dog-safe waste container and clear plates before guests move away from the table. Keep the dog out of the cooking area when hot grids, sharp tools, and dropped food create additional risks.",
          "Explain the household rule to children and visitors: only a named dog treat or owner-approved food may be given. Handbags, bedside tables, Christmas food, Easter chocolate, sugar-free sweets, and guest rooms are common weak points even in otherwise careful homes.",
        ],
      },
      {
        heading: "If your dog ate something dangerous",
        body: ["Act on what is known rather than waiting for symptoms or spending time searching for a reassuring answer online."],
        checklist: [
          "Remove the remaining food or substance and keep other pets and children away.",
          "Phone your veterinarian or an emergency veterinary service promptly.",
          "Take the product packaging, ingredient list, recipe, or a clear photograph.",
          "Estimate what was eaten, when it happened, and whether more than one dog had access, without delaying the call.",
          "Provide the dog's current weight if known, age, medical conditions, medicines, and recent symptoms.",
          "Report vomiting, diarrhoea, drooling, weakness, restlessness, tremors, seizures, pain, breathing changes, or collapse.",
          "Follow the veterinarian's instructions and take the packaging to the clinic if asked.",
        ],
        callout: "important",
      },
      {
        heading: "What not to do",
        body: [
          "Do not induce vomiting unless a veterinarian who understands the exposure tells you to do so. Vomiting may be unsafe with sharp objects, caustic substances, altered consciousness, breathing risk, or other circumstances. Do not give a home remedy to neutralise a toxin.",
          "Do not force food or water, and do not give human medicine. Human medicines should be reported as their own poisoning exposure with the exact name, strength, amount, and time if known.",
        ],
        callout: "caution",
      },
      {
        heading: "Kitchen and braai prevention checklist",
        body: ["Prevention works best when storage and visitor routines do not depend on remembering every dangerous ingredient."],
        checklist: [
          "Store chocolate, grapes, raisins, onions, garlic, alcohol, caffeine products, macadamias, and sugar-free products in closed cupboards or high secure storage.",
          "Check ingredient labels for xylitol or birch sugar before sharing spreads, baked goods, supplements, or dental products.",
          "Use a lidded, dog-resistant bin and remove braai bones, skewers, foil, and fatty scraps promptly.",
          "Keep handbags, shopping bags, lunchboxes, medication, and visitor snacks off floors and low furniture.",
          "Use gates or supervision for counter-surfing dogs and during cooking, parties, holidays, and children's meals.",
          "Secure compost, mouldy waste, fallen fruit, and outdoor bins.",
          "Make an owner-approved treat rule clear to children, domestic workers, visitors, and pet sitters.",
        ],
      },
      {
        heading: "When emergency care cannot wait",
        body: [
          "Go to emergency veterinary care for collapse, seizures, severe tremors, breathing difficulty, marked weakness, repeated vomiting, a painful or swollen abdomen, inability to stand, or rapidly worsening signs. Phone ahead while another person drives if possible.",
          "Known xylitol exposure and serious exposure to other recognised hazards should not wait for signs. The veterinary team needs the product information and timeline, not a home diagnosis.",
        ],
      },
      {
        heading: "Related food-safety decisions",
        body: ["Everyday diet choice and emergency toxin prevention are different tasks. Keep a complete routine diet separate from occasional treats and unsafe leftovers."],
        links: [
          { title: "Choose food without brand hype", description: "Use life stage, body condition, calories, tolerance, availability, and budget.", href: "/food/best-dog-food-south-africa" },
          { title: "Use the food-safety lookup", description: "Check common foods while remembering that known dangerous exposure needs a vet.", href: "/tools/can-my-dog-eat-this" },
        ],
      },
    ],
    faqs: [
      { question: "Should I wait for symptoms after my dog eats chocolate or raisins?", answer: "No. Contact a veterinarian promptly with the type, amount, time, dog weight, and packaging. Early assessment matters, and symptoms may be delayed." },
      { question: "Can I make my dog vomit at home?", answer: "Not unless a veterinarian specifically instructs you after assessing the exposure. Inducing vomiting can be dangerous in some situations." },
      { question: "Are braai leftovers safe for dogs?", answer: "Mixed leftovers may contain cooked bones, skewers, onion or garlic, excess fat, salt, sauces, or alcohol. Use a planned dog-safe treat instead." },
      { question: "Are human medicines covered by this food guide?", answer: "No. Human medicines are a separate poisoning hazard. Contact a veterinarian urgently with the exact medicine, strength, amount, and time if exposure may have occurred." },
    ],
    related: [
      { title: "Dog Poisoning", description: "Urgent toxin-call preparation and emergency warning signs.", href: "/emergency/dog-poisoning-south-africa" },
      { title: "Can Dogs Eat Chocolate?", description: "Chocolate-specific safety and veterinary-call information.", href: "/food/can-dogs-eat-chocolate" },
      { title: "Best Dog Food", description: "Choose a suitable complete diet without fake rankings.", href: "/food/best-dog-food-south-africa" },
    ],
    sources: [
      { label: "MSD Veterinary Manual: food hazards", href: "https://www.msdvetmanual.com/en/special-pet-topics/poisoning/food-hazards", note: "Veterinary reference on chocolate, grapes, raisins, xylitol, alliums, macadamias, alcohol, and other food hazards." },
      { label: "MSD Veterinary Manual: chocolate toxicosis", href: "https://www.msdvetmanual.com/toxicology/food-hazards/chocolate-toxicosis-in-animals", note: "Veterinary information about chocolate exposure and clinical risk." },
      { label: "MSD Veterinary Manual: grape and raisin toxicosis", href: "https://www.msdvetmanual.com/toxicology/food-hazards/grape-raisin-and-tamarind-vitis-spp-tamarindus-spp-toxicosis-in-dogs", note: "Veterinary information about grape, raisin, currant, and related exposure in dogs." },
    ],
  },
  {
    slug: "vaccination-schedule-south-africa",
    path: "/health/vaccination-schedule-south-africa",
    hubTitle: "Dog Health",
    hubPath: "/health",
    title: "Dog Vaccination Schedule in South Africa",
    seoTitle: "Dog Vaccination Schedule South Africa | Puppy and Adult Guide",
    description: "A South African dog vaccination planning guide covering puppy series, adult boosters, rabies, risk-based vaccines, missed records, boarding, travel, and vet questions.",
    intro: "Vaccination planning protects individual dogs and reduces the spread of serious infectious disease. There is no responsible one-line timetable for every dog: age, maternal antibodies, previous records, health, vaccine product, local disease risk, lifestyle, boarding, travel, and current official guidance can all affect the veterinarian's plan.",
    updated: "2026-08-09",
    primaryImage: { src: "/images/guides/dog-vaccination-vet-south-africa.webp", alt: "Dog having a routine veterinary vaccination consultation with its owner", width: 1536, height: 1024 },
    isHealthGuide: true,
    quickFacts: [
      "Puppies usually need a veterinary-planned series rather than one injection because protection develops over time and maternal antibodies can affect early responses.",
      "Core vaccines address serious widespread diseases; risk-based vaccines depend on lifestyle, location, contact, travel, and veterinary assessment.",
      "Rabies requirements and timing should be confirmed through current official guidance and your veterinarian.",
      "Deworming, parasite prevention, and microchipping are valuable but are not vaccinations.",
    ],
    sections: [
      {
        heading: "Why schedules vary",
        body: [
          "A veterinarian considers the dog's age, previous vaccines, the dates and products recorded, health, pregnancy status where relevant, immune-suppressing treatment, local outbreaks, travel, and contact with other dogs or wildlife. Two dogs in the same household can therefore need different discussions.",
          "Online charts are useful for preparing questions, not for administering or delaying vaccines. Product instructions and official requirements can change, and a certificate must accurately reflect what a registered veterinary professional has given.",
        ],
      },
      {
        heading: "Puppy vaccination planning and maternal antibodies",
        body: [
          "Young puppies may receive some temporary protection from antibodies passed by their mother. Those antibodies decline at different rates and can interfere with the response to an early vaccine. This is one reason puppy protection is planned as a series and why one injection should not be treated as a complete course.",
          "Ask the vet how to balance infection risk with safe early socialisation. Controlled exposure to known healthy, appropriately vaccinated dogs and low-risk environments may be discussed, while high-traffic dog areas can present avoidable risk before the vet considers protection adequate.",
        ],
      },
      {
        heading: "Life-stage vaccination conversations",
        body: ["The treating veterinarian should confirm the individual schedule. The table describes discussions, not universal dates."],
        table: {
          headers: ["Life stage", "Vaccination discussion", "Questions for the vet"],
          rows: [
            ["New puppy", "Start or continue the core puppy series, discuss rabies, health status, maternal antibodies, local risk, and safe socialisation.", "Which vaccines are due next, and when is each type of outing sensible?"],
            ["Adolescent or young adult", "Confirm that the puppy course and rabies record are complete and discuss the next booster plan.", "Are there gaps, and do boarding, daycare, training, shows, or travel change the plan?"],
            ["Adult dog", "Review core booster history, rabies requirements, and lifestyle-based risks at routine visits.", "Which benefits are due now, which are risk-based, and when should records be reviewed again?"],
            ["Adopted or rescued dog with uncertain history", "Use available records, examination, age estimate, and risk to create a catch-up plan without guessing.", "What should be repeated, what can be verified, and how should exposure be managed meanwhile?"],
            ["Senior dog", "Continue an individual preventive plan while considering health, medicines, immune status, lifestyle, and current exposure.", "Does age or any medical condition change timing or monitoring?"],
            ["Dog with a medical condition", "The vet weighs disease risk, current illness, treatment, previous reactions, and vaccine benefit.", "Should anything be delayed, separated, or monitored differently?"],
          ],
        },
      },
      {
        heading: "Core, rabies, and risk-based concepts",
        body: [
          "Core vaccination concepts focus on serious diseases for which broad protection is recommended. Rabies also carries legal and public-health importance in South Africa. Risk-based vaccines may be considered for dogs exposed through boarding, daycare, shows, group training, travel, wildlife, kennels, farms, or particular local disease patterns.",
          "A service provider may set entry requirements, but its checklist does not replace veterinary advice. Ask both the provider and veterinarian well before the booking so a rushed deadline does not drive a poor decision.",
        ],
        links: [
          { title: "Rabies exposure and prevention", description: "Understand urgent contacts, records, and why vaccination matters.", href: "/emergency/rabies-south-africa" },
          { title: "Plan boarding and daycare", description: "Check service rules, supervision, records, and suitability directly.", href: "/dog-services" },
        ],
      },
      {
        heading: "Missed vaccines and unknown history",
        body: [
          "If a dose or booster was missed, contact the clinic rather than restarting, repeating, or abandoning the plan yourself. The next step depends on what was given, when, the dog's age and health, product guidance, and current risk. Bring every record you have, even if incomplete.",
          "For adopted or rescued dogs, ask the organisation which records are verified and which history is only reported. A veterinarian can create a catch-up plan when records are missing. Do not alter a card or fill in an estimated date as if it were confirmed.",
        ],
      },
      {
        heading: "Keep these vaccination records",
        body: ["Good records make boarding, daycare, travel, a change of clinic, adoption, and bite incidents easier to manage."],
        checklist: [
          "The original vaccination certificate or booklet with the dog's identifying details.",
          "Vaccine names, dates administered, batch or sticker information where recorded, and the veterinary professional or clinic details.",
          "The veterinarian's next-due recommendation and any written risk-based plan.",
          "Rabies documentation and any official campaign or travel documents.",
          "Previous reactions or post-vaccination concerns discussed with the vet.",
          "A clear digital copy stored somewhere accessible during travel or emergencies.",
          "Microchip number and ownership contact details in the same folder, while remembering that microchipping is not vaccination.",
        ],
      },
      {
        heading: "Boarding, daycare, travel, and group settings",
        body: [
          "Kennels, daycare providers, training schools, groomers, dog shows, airlines, border authorities, and accommodation providers may ask for particular documentation. Requirements differ and can change. Confirm them directly, then ask the vet whether the requested timing is medically appropriate for your dog.",
          "International travel can involve official certification and longer lead times. Begin early. Do not rely on a photo of an old card or assume that a local clinic entry meets destination requirements.",
        ],
      },
      {
        heading: "Questions to ask your vet",
        body: ["Take the current record and describe the dog's real routine so the discussion is based on exposure rather than a generic label."],
        checklist: [
          "Which vaccines are considered core for this dog, and which are based on current lifestyle or location?",
          "How does the puppy series or catch-up plan work for this dog's known history?",
          "What is the current rabies plan and documentation requirement?",
          "When can this puppy or dog safely attend training, daycare, boarding, shows, parks, or travel?",
          "Do age, illness, pregnancy, previous reaction, or current medicine change the plan?",
          "What mild post-vaccination changes may occur, and which signs need an urgent call?",
        ],
        links: [
          { title: "Prepare for the appointment", description: "Use the vet visit checklist for records, medicines, symptoms, and questions.", href: "/tools/vet-visit-checklist" },
          { title: "Puppy care planning", description: "Connect vaccination with feeding, socialisation, toilet training, and first-year care.", href: "/puppy/puppy-care-south-africa" },
        ],
      },
    ],
    faqs: [
      { question: "Is there one vaccination schedule for every South African dog?", answer: "No. Core concepts are shared, but timing and risk-based choices depend on the dog's age, records, health, vaccine product, location, lifestyle, travel, and current official guidance." },
      { question: "What should I do if my dog missed a vaccination?", answer: "Contact a veterinarian with the record and dates. Do not restart or repeat a course yourself; the catch-up plan depends on the individual history and current risk." },
      { question: "Is deworming the same as vaccination?", answer: "No. Deworming and tick or flea prevention address parasites. Vaccines stimulate protection against selected infectious diseases. Both need their own appropriate plans." },
      { question: "Does a microchip show that my dog is vaccinated?", answer: "No. A microchip identifies the dog when correctly registered, but it does not provide immunity or replace a vaccination certificate." },
    ],
    related: [
      { title: "Rabies in South Africa", description: "Urgent exposure actions, vaccination records, and prevention.", href: "/emergency/rabies-south-africa" },
      { title: "Puppy Care", description: "First-year health, feeding, socialisation, and routine planning.", href: "/puppy/puppy-care-south-africa" },
      { title: "Dog Services", description: "Boarding, daycare, sitting, walking, and holiday-care checks.", href: "/dog-services" },
    ],
    sources: [
      { label: "WSAVA vaccination guidelines", href: "https://wsava.org/global-guidelines/vaccination-guidelines/", note: "Veterinary vaccination guidance covering core concepts, puppy series, boosters, records, and individual risk assessment." },
      { label: "South African Government rabies reminder", href: "https://www.gov.za/news/media-statements/agriculture-land-reform-and-rural-development-rabies-still-poses-risk-south", note: "Official South African information about rabies risk and vaccination responsibilities." },
      { label: "Western Cape Government: rabies", href: "https://www.westerncape.gov.za/general-publication/rabies", note: "Provincial rabies prevention and vaccination context." },
    ],
  },
  {
    slug: "best-dog-food-south-africa",
    path: "/food/best-dog-food-south-africa",
    hubTitle: "Dog Food",
    hubPath: "/food",
    title: "Best Dog Food in South Africa: How to Choose for Your Dog",
    seoTitle: "Best Dog Food South Africa | Neutral Food Choice Guide",
    description: "Choose dog food in South Africa by life stage, body condition, calories, digestion, storage, availability, daily cost, and veterinary guidance without brand rankings.",
    intro: "There is no universally best food, brand, format, or ingredient list for every dog. A suitable diet must fit the dog's life stage, size, body condition, activity, health, tolerance, household budget, storage conditions, and reliable South African availability. This guide provides a neutral decision process rather than a manufactured ranking.",
    updated: "2026-08-09",
    primaryImage: { src: "/images/guides/choosing-dog-food-south-africa.webp", alt: "Dog owner comparing suitable food options for a healthy dog", width: 1536, height: 1024 },
    quickFacts: [
      "Start with a food intended as complete nutrition for the dog's life stage, then assess portions, body condition, tolerance, and health.",
      "An ingredient list cannot by itself show digestibility, nutrient balance, quality control, calorie density, or whether a food suits an individual dog.",
      "Compare cost per day for the actual feeding amount, not only bag price or price per kilogram.",
      "Persistent diarrhoea, vomiting, itching, weight change, poor appetite, pain, or suspected medical disease needs veterinary review before repeated diet experiments.",
    ],
    sections: [
      {
        heading: "What best should mean",
        body: [
          "For a healthy dog, a practical food supports an appropriate body condition, steady energy, normal appetite, manageable stools, and a healthy coat while providing complete nutrition for the intended life stage. It must also be affordable and available enough to feed consistently and store safely.",
          "Price, marketing language, grain-free claims, meat-first slogans, social-media popularity, and a long ingredient list do not prove that one food is better. Ask what the food is formulated to provide and watch the dog, not only the front of the bag.",
        ],
      },
      {
        heading: "Compare the factors that change fit",
        body: ["Use the same questions for kibble, wet, mixed, fresh, refrigerated, frozen, or other feeding approaches."],
        table: {
          headers: ["Factor", "What to look at", "Why it matters"],
          rows: [
            ["Life stage", "Puppy, adult, senior, pregnancy or nursing suitability, including large-breed puppy needs.", "Growth, maintenance, and later-life needs are not interchangeable."],
            ["Size and body condition", "Current weight, ideal condition, expected adult size, sterilisation status, and portion accuracy.", "Calorie needs and growth risk differ, and overfeeding a suitable food can still cause weight gain."],
            ["Activity and calorie density", "Calories per serving and the actual daily feeding amount.", "Working, highly active, sedentary, and weight-management dogs need different energy planning."],
            ["Complete nutrition", "A clear statement that the product is intended as a complete diet for the relevant life stage.", "Treats, toppers, and complementary foods may not provide a balanced daily diet on their own."],
            ["Tolerance and digestibility", "Stool quality, vomiting, gas, appetite, coat, comfort, and stable weight over time.", "The individual dog's response matters more than ingredient-list assumptions."],
            ["Medical needs", "Veterinary diagnosis, medicine interactions, fat level, allergens under investigation, and therapeutic-diet instructions.", "Some conditions need a specific veterinary nutrition plan rather than retail trial and error."],
            ["Daily cost", "Price divided by the realistic daily amount, including waste and extras.", "A large cheap bag may not be cheaper per day, and an unaffordable plan will be difficult to sustain."],
            ["Storage and availability", "Resealing, cool dry storage, refrigeration or freezing, power interruptions, delivery reliability, and stock consistency.", "Heat, spoilage, broken cold chains, and repeated forced changes can undermine a sound choice."],
          ],
        },
      },
      {
        heading: "Puppies, adults, seniors, and dog size",
        body: [
          "Puppies need food formulated for growth, and large-breed puppies need especially careful growth and mineral planning. Adult food should maintain an appropriate body condition for the dog's activity. Senior labels vary, so an older dog's muscle, weight, dental health, appetite, mobility, and medical results should guide the discussion.",
          "Small dogs may need smaller portions and suitable kibble size, while large dogs make cost per day and calorie control especially visible. Breed size does not override the individual dog's health, neuter status, exercise, treats, and body condition.",
        ],
      },
      {
        heading: "Ingredient lists have limits",
        body: [
          "Ingredients are listed by weight before processing and do not reveal the finished food's digestibility, nutrient availability, formulation expertise, contamination controls, or feeding trial evidence. A familiar ingredient is not automatically superior, and an unfamiliar technical nutrient source is not automatically poor.",
          "If a dog may have a food allergy, random switching based on an ingredient list can confuse the investigation. A structured veterinary elimination diet and controlled reintroduction may be needed. Itching also has many non-food causes.",
        ],
      },
      {
        heading: "Portions, body condition, and monitoring",
        body: [
          "Use the package feeding guide as a starting point, then adjust with veterinary guidance according to the dog's weight trend and body condition. Measure the food consistently and count treats, chews, table food, and training rewards within the day's calories.",
          "Check body condition monthly and weigh the dog regularly where possible. A small error repeated every day can become a meaningful gain or loss over time. Multi-dog homes may need separate feeding spaces so each dog's intake is known.",
        ],
        links: [
          { title: "Estimate a starting portion", description: "Use the feeding calculator, then adjust using body condition and veterinary guidance.", href: "/tools/dog-feeding-calculator" },
          { title: "Compare feeding formats", description: "Review kibble, wet, raw, fresh, and mixed-feeding considerations neutrally.", href: "/food/dog-food-comparison-south-africa" },
        ],
      },
      {
        heading: "Before changing your dog's food",
        body: ["A deliberate transition makes the cause of any change easier to understand and reduces unnecessary disruption."],
        checklist: [
          "Confirm the dog's life stage, current weight, ideal body condition, activity, and medical history.",
          "Check that the new food is intended as a complete diet for the relevant life stage.",
          "Compare calories and realistic cost per day rather than bag price alone.",
          "Ask whether the food is reliably available and can be stored safely in your home and climate.",
          "Plan a gradual transition unless the treating veterinarian advises otherwise.",
          "Measure portions and keep treats, chews, and toppers consistent during the change.",
          "Track stool, vomiting, appetite, itching, energy, weight, and any medicine or health changes.",
          "Ask a veterinarian first for puppies with growth concerns, seniors, pregnant dogs, chronic disease, suspected allergy, pancreatitis history, or persistent symptoms.",
        ],
      },
      {
        heading: "Storage in South African conditions",
        body: [
          "Heat, humidity, pests, and long storage can affect food quality. Follow the manufacturer's opened-food instructions, keep dry food in its original bag inside a clean sealed container where practical, and avoid leaving bowls or opened food in hot sun. Do not buy more than can remain fresh and safe.",
          "Refrigerated and frozen diets need a reliable cold chain. Plan for transport, freezer space, load shedding or other power interruptions, thawing, hygiene, and safe disposal if temperature control fails. A food that cannot be stored safely is not the best option for that household.",
        ],
      },
      {
        heading: "Signs the current diet needs veterinary review",
        body: ["These signs do not diagnose a food problem. They are reasons to assess the dog rather than repeatedly switching diets."],
        bullets: [
          "Persistent or recurrent diarrhoea, vomiting, constipation, excessive gas, or abdominal discomfort.",
          "Ongoing itching, ear problems, hair loss, inflamed skin, or repeated skin infection.",
          "Unexpected weight loss, rapid weight gain, muscle loss, or inability to maintain condition.",
          "Poor appetite, difficulty chewing, swallowing changes, or pain around meals.",
          "Marked thirst or urination changes, lethargy, weakness, or a diagnosed chronic condition.",
          "A history of pancreatitis or illness after rich or fatty foods.",
        ],
        callout: "important",
      },
      {
        heading: "Budget without compromising safety",
        body: [
          "Calculate the daily and monthly amount for the individual dog, including delivery and unavoidable waste. In a multi-dog household, compare each dog's needs rather than assuming one product and portion suit everyone. Review costs when pack sizes, suppliers, or feeding amounts change.",
          "If the preferred diet becomes unaffordable or unavailable, ask the veterinarian for realistic alternatives before the last bag runs out. Sudden changes and long periods of feeding an incomplete food can create avoidable problems.",
        ],
        links: [
          { title: "Build the full ownership budget", description: "Plan food alongside prevention, veterinary care, grooming, training, and emergencies.", href: "/costs/cost-of-owning-a-dog-south-africa" },
          { title: "Keep dangerous foods separate", description: "Use the household toxic-food and braai prevention guide.", href: "/health/toxic-foods-for-dogs-south-africa" },
        ],
      },
    ],
    faqs: [
      { question: "What is the best dog food brand in South Africa?", answer: "Dog Haven does not rank brands. The best fit depends on complete nutrition, life stage, body condition, health, tolerance, calorie needs, storage, availability, budget, and veterinary guidance." },
      { question: "Is expensive dog food always better?", answer: "No. Price does not by itself establish nutritional suitability, digestibility, quality control, or fit for an individual dog. Compare the whole product and cost per day." },
      { question: "How quickly should I change dog food?", answer: "A gradual transition is usually easier to monitor and tolerate, but the exact plan may differ when a veterinarian is treating illness or prescribing a therapeutic diet." },
      { question: "Can I diagnose a food allergy by changing brands?", answer: "No. Food allergy diagnosis may require a structured veterinary elimination trial. Itching, ear disease, vomiting, and diarrhoea have many other possible causes." },
    ],
    related: [
      { title: "Dog Food Comparison", description: "Compare kibble, wet, raw, fresh, and mixed feeding.", href: "/food/dog-food-comparison-south-africa" },
      { title: "Dog Feeding Calculator", description: "Estimate a starting daily amount.", href: "/tools/dog-feeding-calculator" },
      { title: "Toxic Foods", description: "Protect dogs from common kitchen, bin, braai, and holiday hazards.", href: "/health/toxic-foods-for-dogs-south-africa" },
    ],
    sources: [
      { label: "WSAVA Global Nutrition Guidelines", href: "https://wsava.org/global-guidelines/global-nutrition-guidelines/", note: "Veterinary nutrition tools for assessing diet, labels, body condition, and feeding discussions." },
      { label: "MSD Veterinary Manual: dog and cat foods", href: "https://www.msdvetmanual.com/management-and-nutrition/nutrition-small-animals/dog-and-cat-foods", note: "Veterinary reference about complete diets, commercial foods, feeding, and label considerations." },
      { label: "MSD Veterinary Manual: food allergy in animals", href: "https://www.msdvetmanual.com/integumentary-system/food-allergy/cutaneous-food-allergy-in-animals", note: "Veterinary reference about food-allergy complexity and structured diagnosis." },
      { label: "South African Veterinary Council", href: "https://savc.org.za/", note: "Professional South African veterinary context for registered veterinary advice." },
    ],
  },
  {
    slug: "dog-adoption-south-africa",
    path: "/adoption/dog-adoption-south-africa",
    hubTitle: "Adoption Safety",
    hubPath: "/adoption",
    title: "Dog Adoption in South Africa: A Practical Owner Guide",
    seoTitle: "Dog Adoption South Africa | Shelter and Rescue Guide",
    description: "A practical South African dog adoption guide covering household fit, shelter questions, records, behaviour, fees, contracts, introductions, and the first week at home.",
    intro: "Dog adoption should match a real dog to a household that can meet that dog's welfare, health, behaviour, and daily needs. South African SPCAs, shelters, foster networks, and rescue organisations do not all use the same process, so verify the individual organisation's requirements while slowing the decision down enough to assess the long-term fit.",
    updated: "2026-08-09",
    primaryImage: { src: "/images/guides/dog-adoption-south-africa.webp", alt: "Prospective adopter calmly meeting a rescue dog before adoption", width: 1536, height: 1024 },
    quickFacts: [
      "Choose temperament, energy, health, and household fit before appearance or an emotional deadline.",
      "Ask what is verified, what is observed in the shelter or foster home, and what remains unknown.",
      "Home checks, meet-and-greets, trial periods, contracts, fees, and return policies vary by organisation.",
      "Plan a quiet first week, a veterinary follow-up where appropriate, and early contact with the rescue if the transition is not going well.",
    ],
    sections: [
      {
        heading: "Decide whether adoption fits the household",
        body: [
          "Start with housing permission, secure boundaries, daily schedule, exercise time, training capacity, transport, grooming, veterinary costs, and care during travel or illness. Check the lease, landlord approval, complex or body-corporate rules, municipal requirements, and any restrictions before applying.",
          "A garden does not replace walks, training, enrichment, or company. A small home does not automatically rule out adoption if the dog's needs are met. Consider children, older relatives, resident dogs, cats, household noise, frequent visitors, work hours, and how long the dog may be alone.",
        ],
      },
      {
        heading: "Adult dog or puppy",
        body: [
          "Puppies need toilet training, safe socialisation, repeated veterinary planning, chewing management, frequent supervision, and patient teaching. Their adult size, energy, and temperament may still be developing. An adult dog may have a clearer observed personality and physical size, but can arrive with established habits, incomplete history, or transition stress.",
          "Neither is automatically easier. Ask what the organisation has seen across different situations and whether the household can meet the likely needs for years, not only during the first exciting weeks.",
        ],
      },
      {
        heading: "Questions that reveal the real match",
        body: ["Ask for specific observations and examples. A careful rescue may say that some history is unknown rather than offering false certainty."],
        table: {
          headers: ["Question", "Why it matters", "What to ask the rescue"],
          rows: [
            ["What is the dog's typical energy and recovery after activity?", "Exercise needs affect time, housing, walking, and behaviour.", "What daily routine works now, and what happens when the dog is under-stimulated or overtired?"],
            ["How does the dog respond to adults and children?", "Friendly in one setting does not guarantee comfort with every interaction.", "Which ages and situations have been observed, and what boundaries are recommended?"],
            ["What is known about dogs, cats, and other animals?", "Introductions and prey drive can affect safety.", "Has there been a controlled meet, foster-home observation, or only an assumption?"],
            ["What behaviour history is known?", "Fear, separation distress, guarding, handling sensitivity, and reactivity need planning.", "What triggers, warning signs, management, and professional support have helped?"],
            ["What medical and preventive care is recorded?", "Vaccines, sterilisation, microchip, parasites, medicine, and chronic conditions affect immediate care and costs.", "Which records will be provided, and what follow-up remains?"],
            ["What happens if the match is unsafe or unsuitable?", "Early support can prevent abandonment or escalation.", "Who should be contacted, what return process applies, and is a trial or foster-to-adopt period offered?"],
          ],
        },
      },
      {
        heading: "Meet-and-greets and behaviour history",
        body: [
          "Meet the dog more than once where possible and let interaction develop without crowding, hugging, or forcing contact. Watch how the dog seeks space, accepts gentle handling, recovers from noise, walks on lead, and responds when attention stops. A shelter environment can suppress or amplify behaviour, so foster-home observations may add useful context.",
          "Ask directly about separation anxiety or distress, resource guarding, fear, reactivity, escape attempts, bite history, handling sensitivity, and known triggers. These questions are not accusations. Honest information helps the organisation match the dog and helps the adopter plan humane professional support.",
        ],
      },
      {
        heading: "Before adopting",
        body: ["Complete the practical work before the collection day. Requirements vary, so confirm them directly with the organisation."],
        checklist: [
          "Obtain written landlord, complex, or body-corporate approval where required and check local rules.",
          "Confirm secure fencing, gates, pool safety, sleeping space, transport restraint, and a quiet settling area.",
          "Discuss every household member, child, resident dog, cat, and regular visitor with the rescue.",
          "Ask about energy, temperament, handling, toilet habits, separation distress, guarding, fear, reactivity, and bite history.",
          "Review medical history, vaccination records, sterilisation status or plan, parasite care, medicine, allergies, and microchip transfer.",
          "Understand the adoption fee, what it covers, contract terms, home-check process, collection, transport, trial options, support, and return process.",
          "Budget for food, routine and emergency veterinary care, grooming, training, insurance or savings, and local services.",
          "Prepare the first week and arrange time for a gradual transition rather than a celebration with many visitors.",
        ],
        links: [
          { title: "Check the full ownership budget", description: "Plan routine, annual, service, and emergency costs before committing.", href: "/costs/cost-of-owning-a-dog-south-africa" },
          { title: "Avoid payment pressure and fake adverts", description: "Use the puppy and seller verification checklist for suspicious private listings.", href: "/adoption/puppy-scam-checklist-south-africa" },
        ],
      },
      {
        heading: "Contracts, fees, records, and microchips",
        body: [
          "Adoption fees may contribute to veterinary care, sterilisation, vaccination, microchipping, parasite treatment, feeding, shelter, transport, and administration, but inclusions differ. Verify the current fee and obtain a receipt. Read the contract before signing and ask about sterilisation conditions, follow-up, trial arrangements, support, and return obligations.",
          "Collect the vaccination and clinical records available, medicine instructions, known diet, sterilisation certificate or plan, microchip number and transfer process, behaviour notes, and organisation contacts. Where history is missing, ask a veterinarian for a sensible catch-up plan rather than assuming care was completed.",
        ],
      },
      {
        heading: "First 24 hours at home",
        body: [
          "Transport the dog securely and go directly to the prepared home. Begin with one quiet area, water, the familiar food and routine where known, a comfortable resting place, and calm toilet opportunities. Keep doors, gates, windows, and leads carefully managed because a newly moved dog may bolt even when friendly.",
          "Avoid baths, busy parks, off-lead freedom, visitors, forced affection, and introductions to every room or animal at once. Let the dog observe and rest. Appetite, toileting, sleep, and behaviour can be unsettled after a major transition.",
        ],
      },
      {
        heading: "First week at home",
        body: ["Decompression is not a rigid number of days. Build predictability and watch the individual dog rather than expecting an instant personality."],
        checklist: [
          "Keep meals, toilet breaks, sleep, walks, and quiet time predictable.",
          "Introduce family members calmly and teach children not to crowd, hug, wake, or disturb the dog while eating.",
          "Use barriers, leads, distance, and short controlled sessions for resident-pet introductions; do not force sharing.",
          "Feed pets separately and manage toys, beds, food, doorways, and other valued resources.",
          "Use secure identification and check microchip transfer details promptly.",
          "Book the recommended veterinary follow-up, especially when records are incomplete or symptoms appear.",
          "Record appetite, stool, urination, coughing, vomiting, scratching, pain, fear, guarding, escape attempts, and separation distress.",
          "Contact the rescue early if behaviour, safety, records, medication, or adjustment concerns emerge.",
        ],
      },
      {
        heading: "When to ask for help",
        body: [
          "Contact a veterinarian promptly for illness, pain, repeated vomiting or diarrhoea, breathing changes, collapse, injury, refusal to eat with other symptoms, medication questions, or incomplete preventive records. Do not assume every symptom is stress from adoption.",
          "Contact the rescue for missing history, contract questions, unexpected behaviour, compatibility concerns, or difficulty keeping people and animals safe. Seek a qualified force-free behaviour professional for fear, guarding, reactivity, separation distress, or aggression. Early support is more useful than waiting for a crisis.",
        ],
        links: [
          { title: "Plan training support", description: "Start with humane routines and find the right level of help.", href: "/training" },
          { title: "Understand insurance and savings", description: "Compare cover, exclusions, claims, and emergency cash needs.", href: "/insurance/pet-insurance-for-dogs-south-africa" },
          { title: "Plan local care services", description: "Prepare for boarding, daycare, sitters, walkers, and holiday care.", href: "/dog-services" },
        ],
      },
    ],
    faqs: [
      { question: "Do all South African shelters use home checks?", answer: "No. Processes vary by organisation and dog. Some use applications, home checks, meet-and-greets, trial periods, or other welfare steps. Ask the organisation directly." },
      { question: "Is an adult rescue dog easier than a puppy?", answer: "Not automatically. Adults may have a clearer observed temperament and size, while puppies need intensive teaching and supervision. The best choice depends on the individual dog and household." },
      { question: "How long does a rescue dog take to settle?", answer: "There is no fixed decompression period. Age, history, temperament, environment, health, and household routine all affect adjustment. Use calm predictable routines and ask for help early." },
      { question: "What if the adoption is not working safely?", answer: "Contact the rescue promptly and follow the contract or return process. Ask for veterinary or qualified behaviour help where relevant; do not privately pass the dog on without the organisation's guidance." },
    ],
    related: [
      { title: "Puppy Scam Checklist", description: "Verify suspicious adverts, sellers, records, and payment requests.", href: "/adoption/puppy-scam-checklist-south-africa" },
      { title: "Puppy Care", description: "Prepare for a puppy's health, feeding, socialisation, and routines.", href: "/puppy/puppy-care-south-africa" },
      { title: "Cost of Owning a Dog", description: "Build a realistic national ownership budget.", href: "/costs/cost-of-owning-a-dog-south-africa" },
    ],
    sources: [
      { label: "National Council of SPCAs", href: "https://nspca.co.za/", note: "South African animal-welfare context and official NSPCA information." },
      { label: "Cape of Good Hope SPCA: adoption", href: "https://capespca.co.za/adopt/", note: "An example of a South African SPCA adoption process; individual organisations may differ." },
      { label: "South African Veterinary Council", href: "https://savc.org.za/", note: "Professional veterinary context for health, welfare, records, and registered veterinary care." },
    ],
  },
];
