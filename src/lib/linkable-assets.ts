import type { CardLink, GuideContent } from "@/lib/content";

export const emergencyChecklistPath = "/emergency/dog-emergency-checklist-south-africa";

export const linkableAssetEmergencyCards: CardLink[] = [
  {
    title: "Printable Dog Emergency Checklist",
    description: "Record your dog's details, veterinary contacts, transport plan, warning signs and sitter handover information.",
    href: emergencyChecklistPath,
  },
];

export const linkableAssetGuides: GuideContent[] = [
  {
    slug: "dog-emergency-checklist-south-africa",
    path: emergencyChecklistPath,
    hubTitle: "Emergency Help",
    hubPath: "/emergency",
    title: "Dog Emergency Checklist for South African Owners",
    seoTitle: "Dog Emergency Checklist South Africa | Free Printable PDF",
    description:
      "Prepare for a dog emergency with a free South African checklist covering veterinary contacts, medical details, transport, urgent warning signs and pet-sitter handover.",
    intro:
      "The hardest time to search for a clinic number, remember a medicine name or work out how to move a large dog is after something has already gone wrong. Complete this checklist while your dog is well. Keep the printed copy where family members or a pet sitter can find it, save the details offline, and review them whenever your dog's health, medication or veterinary arrangements change.",
    updated: "2026-08-10",
    primaryImage: {
      src: "/images/guides/dog-emergency-checklist-south-africa.png",
      alt: "Dog Haven South Africa printable dog emergency checklist",
      width: 1200,
      height: 630,
    },
    downloadAsset: {
      href: "/downloads/dog-emergency-checklist-south-africa.pdf",
      label: "Download the printable dog emergency checklist",
      description:
        "Print it, fill in your dog's details and keep one copy at home and another where a pet sitter or family member can find it.",
      fileType: "PDF, five A4 pages",
    },
    originalResource: {
      label: "Printable resource",
      summary:
        "A Dog Haven South Africa preparation sheet for recording veterinary contacts, medical details, transport information and sitter instructions. It supports faster communication but does not diagnose an emergency or replace veterinary care.",
      shareLabel: "Copy checklist link",
    },
    isHealthGuide: true,
    quickFacts: [
      "This resource supports preparation and communication; it does not diagnose an emergency or replace veterinary care.",
      "Confirm your nearest suitable after-hours option directly because access and opening hours differ between areas.",
      "Do not delay urgent travel to complete the form or collect every item. Phone ahead when possible and follow the clinic's instructions.",
      "Pain, fear, breathing difficulty and confusion can change how a normally gentle dog behaves. Protect people as well as the dog.",
    ],
    sections: [
      {
        heading: "Emergency details every owner should record",
        body: [
          "Start with information that identifies the dog and changes how a veterinary team may assess risk: age, current weight, medical conditions, known reactions, regular medicine and microchip number. Use the medicine name and strength shown on the label rather than relying on colour or shape. Update the sheet after every prescription change.",
          "Record your regular clinic and at least one alternative veterinary option you have confirmed yourself. South Africa does not have a single veterinary emergency number, and not every town has a 24-hour practice. Save the numbers and directions on more than one phone and keep a printed copy available during loadshedding, travel or poor connectivity.",
        ],
        table: {
          headers: ["Dog details", "Information to complete"],
          rows: [
            ["Identity", "Name, breed or type, date of birth or age, sex and distinguishing features."],
            ["Clinical details", "Current weight, medical conditions, allergies or known reactions, and regular medicines."],
            ["Identification", "Microchip number, registration details where relevant, and a current photograph."],
            ["Regular care", "Veterinary clinic, clinic phone number, usual diet and vaccination-record location."],
            ["Financial records", "Insurance provider and policy number where applicable, claim contact and accessible payment plan."],
          ],
        },
      },
      {
        heading: "Information to have ready for the vet",
        body: [
          "The first call helps the clinic assess urgency, give safe transport directions and prepare for arrival. Describe what you can observe without trying to name the condition. Lead with collapse, breathing trouble, uncontrolled bleeding, seizures, severe pain or rapid deterioration.",
          "Do not postpone departure to build a perfect history. Take a safe photograph or video only when it does not place anyone at risk or slow urgent care. If a product or substance may be involved, keep the original package or label available when it can be handled safely.",
        ],
        checklist: [
          "What happened or what you suspect may have happened.",
          "When the event occurred or when the first change was noticed.",
          "Symptoms seen and whether they are stable, improving or getting worse.",
          "Possible food, medicine, poison, chemical, plant, snake, tick, heat or trauma exposure.",
          "The product, packaging or label where relevant and safe to bring.",
          "An approximate amount only when it is genuinely known.",
          "Current medicines, existing conditions, allergies or previous reactions.",
          "Recent food, exercise, travel, boarding or unusual activity.",
          "A safe photo or video if it already exists and may add useful context.",
          "The location of an outdoor or environmental exposure where that may matter.",
        ],
      },
      {
        heading: "Emergency transport checklist",
        body: [
          "Ask the clinic how to move the dog when injury, severe pain, breathing difficulty or possible spinal trauma is involved. There is no single handling method that suits every emergency. A carrier may be safest for one dog, while a blanket or firm support and two adults may be needed for another.",
          "Approach calmly and avoid placing your face near the dog's mouth. Pain and fear can cause defensive behaviour in a familiar dog. A muzzle may be useful only when it is appropriate for that dog and situation; never let it obstruct breathing, and do not use it on a vomiting dog, a dog with breathing difficulty, facial injury or another condition the veterinary team says makes it unsafe.",
        ],
        checklist: [
          "A secure lead and well-fitted harness, or a suitable carrier for the individual dog.",
          "A clean blanket or towel that may help with support, warmth or vehicle protection.",
          "Medical and vaccination records, medicine list and emergency contact sheet.",
          "Suspected product or packaging when it is relevant and safe to transport.",
          "Insurance, payment and claim information without delaying treatment.",
          "The confirmed route, entrance and parking instructions for the receiving clinic.",
          "A second adult to assist and monitor when one is available; the driver must focus on the road.",
          "A charged phone, charging cable and an offline copy of essential numbers and directions.",
        ],
        callout: "important",
      },
      {
        heading: "Basic home emergency-preparation supplies",
        body: [
          "A small preparation kit is for safer communication and transport, not for diagnosing or treating a serious problem at home. Store it in a labelled container that adults can reach quickly and check it several times a year. Ask your regular veterinarian whether your dog's health or location changes what belongs in the kit.",
        ],
        table: {
          headers: ["Item", "Preparation purpose", "Important caution"],
          rows: [
            ["Clean towels and disposable gloves", "Handling mess, protecting hands and helping with transport preparation.", "Do not use handling or cleaning to delay urgent care."],
            ["Spare lead and suitable carrier", "Secure movement from the home or vehicle.", "Choose equipment for the dog's size and condition; do not force an injured dog into an unsafe position."],
            ["Flashlight", "Checking the area, reading labels and preparing transport during a power interruption.", "Avoid shining it directly into a distressed dog's eyes."],
            ["Sterile saline", "A general cleaning supply only when a veterinarian advises its use.", "It is not an antidote and does not replace examination or treatment."],
            ["Basket or soft muzzle", "Protection from a defensive bite in limited suitable situations.", "Do not use with breathing difficulty, vomiting, facial injury or when it restricts airflow."],
            ["Records and contact sheet", "Fast access to health history, medicine names, clinic numbers and directions.", "Review after every health or contact change."],
          ],
        },
      },
      {
        heading: "Warning signs that need urgent veterinary attention",
        body: [
          "The table is a preparation prompt, not a complete triage system. Phone a veterinarian or emergency animal clinic immediately when a dog shows a severe or rapidly worsening sign. If you are uncertain, describe exactly what you see and let the veterinary team advise on urgency and transport.",
        ],
        table: {
          headers: ["Sign", "Why it matters", "Action"],
          rows: [
            ["Collapse, unresponsiveness or inability to stand", "Circulation, breathing, neurological disease, toxin exposure, trauma or another critical problem may be involved.", "Contact a veterinary clinic immediately and follow transport instructions."],
            ["Trouble breathing or pale, blue or grey gums", "The airway, lungs, oxygen delivery or circulation may be compromised.", "Treat as an emergency; minimise stress and do not obstruct the mouth or chest."],
            ["Repeated seizures or a seizure that is not resolving", "Ongoing or clustered seizures can cause injury and need rapid assessment.", "Keep the area safe, do not put hands in the mouth, time the event and phone urgently."],
            ["Severe or uncontrolled bleeding", "Significant blood loss can become life-threatening.", "Seek immediate veterinary guidance and avoid improvised tourniquets."],
            ["Suspected poisoning", "Effects can progress before obvious symptoms appear, and treatment depends on the substance.", "Phone a vet immediately; keep the package if safe and do not induce vomiting unless specifically directed."],
            ["Severe heat illness", "Extreme panting, distress, weakness, vomiting, confusion, seizures or collapse may indicate a critical heat emergency.", "Phone a vet immediately and follow current professional cooling and transport instructions."],
            ["Suspected snake bite", "Venom effects may involve swelling, breathing, nerves, bleeding or rapid deterioration.", "Keep the dog calm, limit movement and reach capable veterinary care urgently."],
            ["Swollen abdomen with distress or repeated unproductive retching", "A rapidly progressive gastric emergency may be possible.", "Do not wait for it to settle; phone and leave for emergency care."],
            ["Repeated vomiting with weakness or serious trauma", "Dehydration, obstruction, bleeding, shock or internal injury may be possible.", "Contact a vet urgently and follow handling and transport advice."],
          ],
        },
        links: [
          { title: "Know when symptoms cannot wait", description: "Use the broader veterinary decision page for urgent and same-day signs.", href: "/health/when-to-take-your-dog-to-the-vet-south-africa" },
        ],
      },
      {
        heading: "What not to do in a dog emergency",
        body: [
          "Online advice cannot account for the substance, injury, airway, age, existing disease or medicine already in the dog's body. Use the phone call to obtain situation-specific veterinary direction while preparing to travel.",
        ],
        checklist: [
          "Do not give human medicine, leftover prescriptions or a guessed dose unless a veterinarian directs it for this dog.",
          "Do not induce vomiting unless a veterinary professional specifically instructs you after assessing the exposure.",
          "Do not delay urgent care while searching online, completing the worksheet or collecting every item.",
          "Do not force food, water or oral products into a distressed, weak, vomiting or poorly responsive dog.",
          "Do not cut a snake-bite wound, suck venom, apply ice, use a home antidote or apply a tourniquet.",
          "Do not attempt restraint that puts a person at risk or interferes with the dog's breathing.",
          "Do not assume temporary improvement means a serious event has passed; update the veterinary team.",
        ],
        callout: "caution",
      },
      {
        heading: "South African outdoor and seasonal preparation",
        body: [
          "Heat exposure, ticks, snake encounters and household or garden toxins vary with region, habitat, weather and the dog's routine. Keep water, shade, secure control and a sensible route plan in mind before walks or travel. After outdoor activity, check the dog and note any unusual weakness, pain, breathing change, vomiting, swelling, ticks or abnormal gum colour.",
          "Biliary and other tick-borne illnesses need veterinary diagnosis; a tick or one symptom cannot confirm the cause. A suspected snake bite, poisoning or severe heat illness needs urgent veterinary contact. For long drives or rural stays, identify veterinary options and travel time in advance rather than assuming a nearby practice offers after-hours care.",
        ],
        links: [
          { title: "Prepare for snake encounters", description: "Review safe control, urgent signs and dangerous first-aid myths.", href: "/emergency/snake-bites-in-dogs-south-africa" },
          { title: "Recognise heatstroke", description: "Know the signs that need an immediate veterinary call.", href: "/emergency/heatstroke-in-dogs-south-africa" },
          { title: "Understand biliary risk", description: "Connect tick exposure with symptoms that need veterinary assessment.", href: "/health/biliary-tick-bite-fever-dogs-south-africa" },
          { title: "Check food hazards", description: "Reduce kitchen, bin, braai and holiday-food exposure.", href: "/health/toxic-foods-for-dogs-south-africa" },
        ],
      },
      {
        heading: "Travelling, boarding and pet-sitter handover",
        body: [
          "Give the person caring for your dog written permission and enough information to act. Explain the dog's normal behaviour, medication routine, feeding needs, handling sensitivities and signs that should trigger a call. Confirm which veterinary clinic should be used and how treatment decisions and payment will be handled if you cannot be reached.",
          "For travel, carry records and medicine in their labelled containers, keep essential numbers offline and check veterinary access along the route and at the destination. Loadshedding or weak reception can make an online-only plan difficult to retrieve, so keep a paper copy in the travel bag or vehicle.",
        ],
        checklist: [
          "Primary owner, backup contact and veterinary clinic details.",
          "Written care and medication instructions using the current labels.",
          "Insurance or payment arrangements and the limits of the sitter's authority.",
          "Carrier, lead, harness and vehicle instructions for the individual dog.",
          "Known fears, bite risk, escape risk and safe handling boundaries.",
          "Where records, medicine, the emergency kit and the printed checklist are stored.",
          "An agreed update plan if the dog is seen by a veterinarian.",
        ],
      },
      {
        heading: "Make the checklist specific to your dog",
        body: [
          "Ask your veterinarian which conditions, past reactions or transport needs deserve special notes. A brachycephalic dog, giant dog, puppy, senior, diabetic dog or dog with seizures may need a different preparation plan. Keep instructions from the treating practice with the general checklist rather than adding treatment directions from an unverified source.",
          "Review the completed sheet at least twice a year and before a holiday, boarding stay or change of sitter. Replace expired documents, confirm phone numbers and routes, update weight and medicine, and print a fresh copy when handwriting becomes difficult to read.",
        ],
        links: [
          { title: "Prepare for poisoning", description: "Record product details and avoid unsafe home treatment.", href: "/emergency/dog-poisoning-south-africa" },
          { title: "Keep rabies records current", description: "Understand vaccination, exposure and public-health responsibilities.", href: "/emergency/rabies-south-africa" },
          { title: "Review vaccination planning", description: "Keep current records ready for routine care, travel and emergencies.", href: "/health/vaccination-schedule-south-africa" },
          { title: "Plan emergency costs", description: "Prepare for consultation, diagnostics, hospitalisation and follow-up.", href: "/costs/emergency-vet-costs-south-africa" },
          { title: "Compare insurance wording", description: "Check claims, limits, waiting periods and exclusions before an emergency.", href: "/insurance/compare-dog-insurance-south-africa" },
          { title: "Build the monthly budget", description: "Include emergency savings and eligible insurance costs in the wider care plan.", href: "/costs/monthly-cost-of-owning-a-dog-south-africa" },
        ],
      },
    ],
    faqs: [
      {
        question: "Does this checklist replace a pet first-aid course or veterinarian?",
        answer:
          "No. It organises details, contacts and transport preparation. It does not diagnose a problem or teach treatment. Contact a veterinarian for emergency instructions and use recognised training if you want to learn practical first aid or CPR.",
      },
      {
        question: "How often should I update the emergency sheet?",
        answer:
          "Check it at least twice a year and after any change to medicine, weight, medical history, clinic, insurance, address, sitter or travel plan. Confirm after-hours availability directly with the clinic.",
      },
      {
        question: "Should every household keep a muzzle in the kit?",
        answer:
          "A familiar, correctly fitted muzzle may be useful for some dogs in limited situations, but it is unsafe when it obstructs airflow and should not be used for breathing difficulty, vomiting, facial injury or when veterinary staff advise against it. Handling safety should be discussed with your vet before an emergency.",
      },
      {
        question: "What if I cannot reach my regular veterinarian?",
        answer:
          "Use the confirmed alternative clinic or after-hours option recorded on the sheet. Availability differs by area, which is why owners should verify options and travel routes before an emergency rather than relying on a national number.",
      },
    ],
    related: [
      { title: "Dog Emergency Help", description: "Find urgent warning signs and condition-specific emergency resources.", href: "/emergency" },
      { title: "When to Take Your Dog to the Vet", description: "Review urgent, same-day and monitored symptoms.", href: "/health/when-to-take-your-dog-to-the-vet-south-africa" },
      { title: "Dog Poisoning", description: "Prepare substance details and avoid unsafe home remedies.", href: "/emergency/dog-poisoning-south-africa" },
      { title: "Snake Bites in Dogs", description: "Know urgent steps and dangerous first-aid myths.", href: "/emergency/snake-bites-in-dogs-south-africa" },
      { title: "Heatstroke in Dogs", description: "Recognise severe heat illness and phone ahead.", href: "/emergency/heatstroke-in-dogs-south-africa" },
    ],
    sources: [
      {
        label: "University of Pretoria: first aid for pets",
        href: "https://www.up.ac.za/faculty-of-veterinary-science/node/28488",
        note: "South African veterinary guidance on owner safety, poisoning, snakebite and urgent professional care.",
      },
      {
        label: "University of Pretoria: heatstroke in dogs",
        href: "https://www.up.ac.za/faculty-of-veterinary-science/node/28465",
        note: "South African veterinary guidance on heat risk, warning signs and rapid veterinary contact.",
      },
      {
        label: "MSD Veterinary Manual: dog and cat emergencies",
        href: "https://www.msdvetmanual.com/special-pet-topics/emergencies/what-to-do-in-a-dog-or-cat-emergency",
        note: "Veterinary reference for urgent warning signs, owner safety, phone preparation and transport.",
      },
      {
        label: "MSD Veterinary Manual: first aid and transport",
        href: "https://www.msdvetmanual.com/emergency-medicine-and-critical-care/emergency-medicine-introduction/first-aid-and-transport-of-small-animals",
        note: "Veterinary reference for emergency history, toxin packaging, handling and transport cautions.",
      },
      {
        label: "South African Veterinary Council",
        href: "https://savc.org.za/",
        note: "Official professional context for veterinary services in South Africa.",
      },
    ],
  },
];

export function getLinkableAssetGuide(slug: string) {
  return linkableAssetGuides.find((guide) => guide.slug === slug);
}
