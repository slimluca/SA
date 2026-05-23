import type { CardLink, GuideContent, Source } from "@/lib/content";

const reviewed = "2026-05-23";

const sources: Source[] = [
  {
    label: "Kennel Union of Southern Africa",
    href: "https://www.kusa.co.za/",
    note: "South African breed registry and responsible puppy-buying context.",
  },
  {
    label: "NSPCA",
    href: "https://nspca.co.za/",
    note: "South African animal welfare context for adoption, responsible ownership, and choosing dogs carefully.",
  },
  {
    label: "South African Veterinary Council",
    href: "https://savc.org.za/",
    note: "South African veterinary professional context for health and welfare questions.",
  },
  {
    label: "WSAVA Global Nutrition Guidelines",
    href: "https://wsava.org/global-guidelines/global-nutrition-guidelines/",
    note: "Veterinary nutrition guidance for body condition, life stage, and feeding discussions.",
  },
];

type BreedLifestyleTopic = {
  slug: string;
  title: string;
  seoTitle: string;
  description: string;
  intro: string;
  summary: string;
  context: string[];
  examples: string[][];
  beforeChoosing: string[];
  costCare: string[];
  trainingGrooming: string[];
  healthInsurance: string[];
  adoptionCautions: string[];
  faqs: GuideContent["faqs"];
  related: CardLink[];
};

const commonRelated: CardLink[] = [
  { title: "Breed Guides", description: "Individual breed profiles for South African homes.", href: "/breeds" },
  { title: "Breed Match Quiz", description: "Explore broad breed categories responsibly.", href: "/tools/dog-breed-match-quiz" },
  { title: "Breed Comparison Checklist", description: "Compare size, coat, training, heat, cost, and sourcing questions.", href: "/tools/dog-breed-comparison-checklist" },
  { title: "Puppy Scam Checklist", description: "Avoid pressure payments and suspicious adverts.", href: "/adoption/puppy-scam-checklist-south-africa" },
  { title: "Cost of Owning a Dog", description: "Budget for food, grooming, vet care, training, and emergencies.", href: "/costs/cost-of-owning-a-dog-south-africa" },
  { title: "Dog Training", description: "Humane training foundations for everyday life.", href: "/training/dog-training-south-africa" },
];

const generalChecklist = [
  "Meet adult dogs of the type where possible, not only puppies.",
  "Ask how the dog fits your home, heat, garden, rental rules, neighbours, children, work routine, and budget.",
  "Budget for food, parasite prevention, grooming, training, routine vet care, insurance or savings, and emergencies.",
  "Check adoption options and breed rescue before buying.",
  "If buying, verify records, health screening, breeder transparency, written agreements, and the puppy's environment.",
];

const generalCautions = [
  "Avoid impulse buying from a cute photo, pressure payment, delivery-only advert, or seller who avoids records and questions.",
  "Do not choose a dog only for looks, status, protection, or social media appeal.",
  "Individual dogs vary. Breed tendencies do not predict every puppy, rescue dog, or adult dog.",
  "Ask a veterinarian, humane trainer, shelter, rescue, or breed club for guidance when you are unsure.",
];

const topics: BreedLifestyleTopic[] = [
  {
    slug: "best-dogs-for-families-south-africa",
    title: "Best Dogs for Families in South Africa",
    seoTitle: "Best Dogs for Families South Africa | Responsible Breed Guide",
    description:
      "A South African guide to family dog breed choice, covering children, space, heat, training, grooming, costs, adoption, and responsible breeder checks.",
    intro:
      "A good family dog is not a breed label. It is a dog whose temperament, size, energy, training needs, grooming, health, and cost fit the actual household.",
    summary:
      "Breeds often considered for families may include Labradors, Golden Retrievers, Beagles, mixed-breed shelter dogs, Staffies, Poodles, Cocker Spaniels, and calm adult rescue dogs, but the individual dog matters more than the category.",
    context: [
      "South African families may juggle gardens, estates, townhouses, domestic workers, visiting children, school runs, swimming pools, heat, ticks, and holiday travel.",
      "A family dog should be chosen for temperament, supervision, training, and lifestyle fit rather than as a toy for children or a yard guard.",
    ],
    examples: [
      ["Labrador Retriever", "Often social and active, but needs exercise, weight control, training, and space planning."],
      ["Golden Retriever", "Often friendly, but sheds, needs grooming, and can be costly if poorly bred."],
      ["Staffordshire Bull Terrier", "Can be affectionate with families, but needs socialisation, secure management, and responsible public handling."],
      ["Mixed-breed adult dog", "A shelter or rescue may help match known temperament to the household."],
    ],
    beforeChoosing: [
      "Will adults supervise children and dog interactions every time?",
      "Can the household afford training, vet care, grooming, parasite prevention, and insurance or savings?",
      "Does the dog fit the youngest child, oldest adult, and busiest day of the week?",
      "Will the dog receive exercise and enrichment beyond garden time?",
      ...generalChecklist,
    ],
    costCare: [
      "Large family dogs usually cost more to feed, transport, medicate, insure, and groom than small dogs.",
      "Budget for chewed items, training classes, parasite prevention, school-holiday care, and emergency savings.",
      "A low purchase price can become expensive if health records, vaccines, deworming, and sterilisation are missing.",
    ],
    trainingGrooming: [
      "Children should learn calm handling, no teasing, no climbing on dogs, and no disturbing dogs while eating or sleeping.",
      "Family dogs need lead manners, visitor routines, recall foundations, and calm behaviour around children and other pets.",
      "Choose a coat the family can realistically brush, dry, and maintain through shedding seasons.",
    ],
    healthInsurance: [
      "Ask about hip, elbow, skin, ear, dental, breathing, and weight concerns depending on the breed or type.",
      "Insurance may treat pre-existing conditions, hereditary concerns, waiting periods, and exclusions differently.",
      "Speak to a vet before choosing a breed with known health or heat-sensitivity concerns.",
    ],
    adoptionCautions: [
      "Ask shelters or rescues about child history, bite history, resource guarding, separation distress, and how the dog handles visitors.",
      "If buying a puppy, meet the mother where possible and verify vaccination, deworming, microchip, and breeder records.",
      ...generalCautions,
    ],
    faqs: [
      { question: "What is the best family dog in South Africa?", answer: "There is no single best family dog. The right choice depends on children, space, time, training, budget, heat, grooming, and the individual dog's temperament." },
      { question: "Are small dogs always better for children?", answer: "No. Small dogs can be fragile and may dislike rough handling. Supervision and temperament matter more than size alone." },
      { question: "Should families adopt an adult dog?", answer: "Often it can be a good option because adult temperament may be clearer, but the shelter or rescue should help with careful matching." },
    ],
    related: [
      { title: "Labrador Retriever", description: "Lifestyle, cost, training, and family suitability.", href: "/breeds/labrador-retriever-south-africa" },
      { title: "Golden Retriever", description: "Family fit, grooming, exercise, and health questions.", href: "/breeds/golden-retriever-south-africa" },
      { title: "Mixed Breed Dogs", description: "Choose by temperament and fit, not label.", href: "/breeds/mixed-breed-dogs-south-africa" },
      ...commonRelated,
    ],
  },
  {
    slug: "best-dogs-for-kids-south-africa",
    title: "Best Dogs for Kids in South Africa",
    seoTitle: "Best Dogs for Kids South Africa | Child-Safe Breed Planning",
    description:
      "A practical South African guide to choosing dogs for homes with children, covering supervision, temperament, training, size, fragility, costs, and adoption checks.",
    intro:
      "A dog for kids still belongs to adults. Children can be wonderful companions for dogs, but adults must choose, train, supervise, and pay for the dog responsibly.",
    summary:
      "Dogs often considered for child-friendly homes include well-matched adult rescue dogs, Labradors, Golden Retrievers, Beagles, Poodles, Staffies, and some small companion breeds, but child safety depends on the individual dog and adult supervision.",
    context: [
      "South African homes may include extended family visits, domestic workers, pool areas, school friends, and busy holidays, so a child-friendly dog needs calm routines and safe boundaries.",
      "The safest child-and-dog homes teach children to respect sleeping, eating, pain, toys, and personal space.",
    ],
    examples: [
      ["Adult rescue dog with child history", "Temperament may be clearer than a very young puppy."],
      ["Labrador or Golden Retriever", "Often sociable, but energetic and strong as adolescents."],
      ["Poodle or Maltese Poodle type", "May suit some homes but needs grooming and gentle handling."],
      ["Beagle", "Often cheerful but can be noisy, food-driven, and scent-focused."],
    ],
    beforeChoosing: [
      "Are adults prepared to supervise every interaction?",
      "Can children follow rules about sleeping dogs, food bowls, toys, and hugs?",
      "Is the dog comfortable with children's movement and noise?",
      "Will the household pay for training rather than expecting children to train the dog?",
      ...generalChecklist,
    ],
    costCare: [
      "Puppies can add costs for vaccines, deworming, puppy classes, chewing damage, sterilisation discussions, and safe socialisation.",
      "Small dogs may cost less to feed but can have grooming, dental, and fragility concerns.",
      "Large dogs may cost more in food, parasite prevention, medication by weight, training equipment, and transport.",
    ],
    trainingGrooming: [
      "Teach calm greetings, no chasing, no pulling ears or tails, and no disturbing dogs with food or toys.",
      "Train adults first so the dog receives consistent rules from the whole household.",
      "Choose grooming needs the household can maintain when school terms, sports, and holidays get busy.",
    ],
    healthInsurance: [
      "Ask about breed-related joint, skin, ear, dental, breathing, and heat concerns.",
      "Budget for routine vet care and emergency care because child homes can be busy and accidents can happen.",
      "Insurance wording should be checked before relying on cover for hereditary or pre-existing concerns.",
    ],
    adoptionCautions: [
      "Ask shelters about child exposure, handling tolerance, guarding, fear, bite history, and introductions.",
      "Avoid sellers who promise a puppy will be child-safe without evidence, records, and proper socialisation.",
      ...generalCautions,
    ],
    faqs: [
      { question: "What dog breed is safest with children?", answer: "No breed is automatically safe with children. Temperament, health, training, supervision, and child behaviour matter." },
      { question: "Should kids help train the dog?", answer: "Children can help gently, but adults must lead training and supervision." },
      { question: "Is a puppy better than an adult dog for kids?", answer: "Not always. Puppies bite, jump, chew, and need intense supervision. A carefully matched adult dog can be easier for some families." },
    ],
    related: [
      { title: "Best Family Dogs", description: "Family fit, supervision, costs, and care.", href: "/breeds/best-dogs-for-families-south-africa" },
      { title: "Puppy Socialisation", description: "Safe early experiences with vet guidance.", href: "/puppy/puppy-socialisation-south-africa" },
      { title: "Questions Before Adopting", description: "Ask matching questions before bringing a dog home.", href: "/adoption/questions-to-ask-before-adopting-a-dog" },
      ...commonRelated,
    ],
  },
  {
    slug: "best-small-dogs-south-africa",
    title: "Best Small Dogs in South Africa",
    seoTitle: "Best Small Dogs South Africa | Flats, Families, Costs and Care",
    description:
      "A South African small dog chooser guide covering flats, townhouses, children, barking, grooming, dental care, costs, heat, adoption, and responsible sourcing.",
    intro:
      "Small dogs can suit flats, townhouses, seniors, and busy cities, but they are not automatically low-effort. Barking, grooming, dental care, fragility, and training still matter.",
    summary:
      "Small dogs often considered in South Africa include Dachshunds, Yorkies, Maltese Poodle types, Pomeranians, Chihuahuas, Shih Tzus, Miniature Poodles, and small mixed-breed rescue dogs.",
    context: [
      "Small dogs are popular in complexes and apartments, but body corporate rules, barking, visitors, lifts, stairs, and safe toileting routines need planning.",
      "Hot pavements, large dogs in public spaces, and rough child handling can be bigger risks for small dogs than owners expect.",
    ],
    examples: [
      ["Dachshund", "Big personality and small size, but back care and barking matter."],
      ["Yorkshire Terrier", "Portable and alert, but grooming and dental care need planning."],
      ["Maltese Poodle type", "Often considered for low shedding, but coat care is not low effort."],
      ["Small mixed-breed dog", "Can be a good fit when temperament and adult size are understood."],
    ],
    beforeChoosing: [
      "Will neighbours tolerate alert barking?",
      "Can you afford grooming or dental care if needed?",
      "Can children handle a small dog gently?",
      "Is the dog safe around stairs, balconies, pools, and larger dogs?",
      ...generalChecklist,
    ],
    costCare: [
      "Food may cost less than for large dogs, but grooming, dental care, jackets, safe harnesses, and vet care still add up.",
      "Small dogs can be injured by falls, rough handling, or unsuitable play with larger dogs.",
      "Insurance can still matter because dental, knee, back, and chronic issues may be costly.",
    ],
    trainingGrooming: [
      "Small dogs need training just as much as large dogs: lead manners, recall, calm greetings, and alone-time skills.",
      "Long or curly coats need brushing and professional grooming schedules.",
      "Barking should be managed with enrichment, training, and routine, not punishment.",
    ],
    healthInsurance: [
      "Dental disease, kneecap issues, airway concerns, back problems, and weight gain may be relevant depending on type.",
      "Ask your vet about body condition, teeth, safe exercise, and parasite prevention by weight.",
      "Read insurance wording carefully for hereditary and pre-existing condition exclusions.",
    ],
    adoptionCautions: [
      "Ask rescues about barking, house training, child exposure, separation distress, and handling tolerance.",
      "Avoid tiny puppies sold with pressure tactics or missing records.",
      ...generalCautions,
    ],
    faqs: [
      { question: "Are small dogs cheaper to own?", answer: "They can cost less to feed, but grooming, dental care, training, insurance, and vet costs still matter." },
      { question: "Are small dogs good for apartments?", answer: "Some are, if barking, exercise, landlord approval, toileting, and enrichment are managed." },
      { question: "Do small dogs need training?", answer: "Yes. Small dogs still need polite manners, confidence, and safe public behaviour." },
    ],
    related: [
      { title: "Dachshund", description: "Small dog with back-care and barking considerations.", href: "/breeds/dachshund-south-africa" },
      { title: "Maltese Poodle", description: "Small companion dog planning for South Africa.", href: "/breeds/maltese-poodle-south-africa" },
      { title: "Best Apartment Dogs", description: "Flat and complex living considerations.", href: "/breeds/best-apartment-dogs-south-africa" },
      ...commonRelated,
    ],
  },
  {
    slug: "best-large-dogs-south-africa",
    title: "Best Large Dogs in South Africa",
    seoTitle: "Best Large Dogs South Africa | Space, Costs, Training and Health",
    description:
      "A South African guide to large dog breed choice, covering space, exercise, training, security expectations, food costs, insurance, heat, joints, and responsible sourcing.",
    intro:
      "Large dogs can be wonderful companions, but size increases responsibility. Food, training, transport, fencing, parasite products, medication by weight, and joint care all need planning.",
    summary:
      "Large dogs often considered in South Africa include Labradors, Golden Retrievers, German Shepherds, Boerboels, Rottweilers, Dobermans, Boxers, Africanis types, and large mixed-breed dogs.",
    context: [
      "South African owners often choose large dogs for gardens, farms, estates, and security comfort, but a large dog still needs companionship, training, exercise, and safe public manners.",
      "Heat, ticks, snakes, road travel, and emergency transport become more important when a dog is difficult to lift or move.",
    ],
    examples: [
      ["Labrador Retriever", "Often sociable and active, but weight and exercise matter."],
      ["German Shepherd", "Trainable and alert, but needs serious daily work."],
      ["Boerboel", "Powerful South African breed requiring experienced, responsible ownership."],
      ["Large mixed-breed dog", "Can be a good fit when size, temperament, and health are understood."],
    ],
    beforeChoosing: [
      "Can every adult safely handle the dog on lead?",
      "Can your car transport the dog in an emergency?",
      "Can you afford large-dog food, vet care, parasite products, and training?",
      "Is your fencing secure enough for a strong dog?",
      ...generalChecklist,
    ],
    costCare: [
      "Large dogs usually cost more for food, beds, parasite prevention, medication by weight, insurance, and emergency care.",
      "Training equipment, secure fencing, transport, and boarding can be more expensive.",
      "Joint, hip, elbow, and weight management should be budgeted from the beginning.",
    ],
    trainingGrooming: [
      "Lead manners, recall, impulse control, visitor routines, and calm greetings are essential.",
      "Even short coats shed and need tick checks, nail care, bathing, and skin monitoring.",
      "Large adolescents can be physically difficult if training starts late.",
    ],
    healthInsurance: [
      "Ask about hip, elbow, cruciate, bloat, heart, skin, ear, and weight concerns depending on breed or type.",
      "Consider insurance before symptoms become pre-existing.",
      "Discuss growth, exercise, and body condition with your vet, especially for puppies.",
    ],
    adoptionCautions: [
      "Ask shelters about strength on lead, dog reactivity, child exposure, livestock exposure, and escape history.",
      "If buying, verify health screening and avoid status-driven or protection-only selling.",
      ...generalCautions,
    ],
    faqs: [
      { question: "Are large dogs good for security?", answer: "A large dog may be a deterrent, but choosing only for security can create welfare and safety problems. Training, fencing, and responsible handling matter." },
      { question: "Do large dogs need big gardens?", answer: "A garden helps but does not replace walks, training, enrichment, and human interaction." },
      { question: "Are large dogs expensive?", answer: "Often yes. Food, vet care, parasite prevention, insurance, transport, and training can cost more." },
    ],
    related: [
      { title: "Boerboel", description: "South African large-breed ownership considerations.", href: "/breeds/boerboel-dog-breed-south-africa" },
      { title: "German Shepherd", description: "Training, exercise, and responsible ownership.", href: "/breeds/german-shepherd-south-africa" },
      { title: "Dog Insurance Costs", description: "Breed and size questions for cover.", href: "/insurance/dog-breeds-and-pet-insurance-costs-south-africa" },
      ...commonRelated,
    ],
  },
  {
    slug: "best-guard-dogs-south-africa",
    title: "Best Guard Dogs in South Africa",
    seoTitle: "Guard Dogs South Africa | Responsible Breed and Safety Guide",
    description:
      "A responsible South African guard dog guide covering breed tendencies, security expectations, fencing, training, socialisation, laws, neighbours, costs, and welfare.",
    intro:
      "Many South Africans search for guard dogs, but a dog is not a security product. Any alert or protective dog needs responsible ownership, humane training, secure management, and respect for neighbours and the law.",
    summary:
      "Breeds often discussed for guarding include German Shepherds, Boerboels, Rottweilers, Dobermans, Belgian Malinois, Bullmastiffs, and some Africanis or mixed-breed dogs, but suitability depends on the individual dog and owner skill.",
    context: [
      "Security concerns are real, but choosing a dog for intimidation can create bite risk, welfare problems, barking complaints, insurance issues, and legal trouble.",
      "A well-managed alert dog should still be safe around family, visitors, vets, groomers, and public spaces.",
    ],
    examples: [
      ["German Shepherd", "Trainable and alert, but needs work and socialisation."],
      ["Boerboel", "Powerful and locally recognised, but not for casual owners."],
      ["Rottweiler", "Strong and confident, requiring experienced handling."],
      ["Doberman", "Athletic and alert, with training and companionship needs."],
    ],
    beforeChoosing: [
      "Are you prepared for professional humane training and public safety responsibilities?",
      "Is your fencing secure enough to prevent escape and boundary incidents?",
      "Will the dog live as a companion, not isolated as an alarm?",
      "Have you checked landlord, estate, body corporate, insurance, and municipal rules?",
      ...generalChecklist,
    ],
    costCare: [
      "Budget for training, secure fencing, strong equipment, vet care, insurance or savings, and safe transport.",
      "Powerful dogs may cost more for food, boarding, behaviour support, and liability planning.",
      "Cheap puppies from suspicious sellers can lead to health and temperament problems.",
    ],
    trainingGrooming: [
      "Use humane, reward-based training focused on control, recall, calm greetings, and safe visitor routines.",
      "Avoid punishment-heavy methods that increase fear, frustration, or unpredictable behaviour.",
      "Socialisation should teach calm neutrality, not uncontrolled guarding.",
    ],
    healthInsurance: [
      "Large guarding breeds may have joint, heart, skin, cruciate, or breed-related concerns.",
      "Check insurance exclusions, breed wording, liability rules, and pre-existing condition clauses.",
      "Ask your vet and trainer for realistic risk and management advice.",
    ],
    adoptionCautions: [
      "Ask rescues about bite history, guarding behaviour, reactivity, escape attempts, and handling by strangers.",
      "Avoid sellers marketing aggression, intimidation, or status.",
      ...generalCautions,
    ],
    faqs: [
      { question: "What is the best guard dog for South Africa?", answer: "There is no universally best guard dog. Responsible ownership, secure fencing, training, temperament, and legal responsibility matter more than breed labels." },
      { question: "Should I train a dog to be aggressive?", answer: "No. Encouraging aggression is unsafe and unfair to the dog. Seek humane professional guidance for control and safety." },
      { question: "Can a guard dog be a family dog?", answer: "Some alert dogs can be family companions, but only with responsible management, socialisation, supervision, and training." },
    ],
    related: [
      { title: "Dog Laws", description: "Rules, bites, barking, public spaces, and responsibility.", href: "/laws" },
      { title: "Nuisance Barking", description: "Neighbour complaints and humane management.", href: "/laws/nuisance-barking-south-africa" },
      { title: "German Shepherd", description: "Responsible alert breed ownership.", href: "/breeds/german-shepherd-south-africa" },
      ...commonRelated,
    ],
  },
  {
    slug: "best-apartment-dogs-south-africa",
    title: "Best Apartment Dogs in South Africa",
    seoTitle: "Best Apartment Dogs South Africa | Flats, Rentals and Barking Guide",
    description:
      "A South African apartment dog guide covering flats, rentals, complexes, barking, exercise, toilet routines, landlord approval, enrichment, grooming, and breed fit.",
    intro:
      "Apartment dogs need more than small size. The best fit is usually a dog that can settle, cope with neighbours, toilet routines, lifts, stairs, visitors, and daily walks.",
    summary:
      "Dogs often considered for apartments include small mixed-breed adults, Maltese Poodle types, Shih Tzus, Chihuahuas, Yorkies, Dachshunds, Miniature Poodles, and some calm adult medium dogs.",
    context: [
      "South African flats and complexes often involve body corporate rules, landlord approval, stairs, lifts, balconies, shared gardens, security gates, and close neighbours.",
      "Barking, separation distress, toilet accidents, and bored chewing can become bigger issues than size.",
    ],
    examples: [
      ["Adult rescue dog with known settling behaviour", "Can be easier than an unknown puppy for some flats."],
      ["Maltese Poodle type", "Often considered for small homes, but grooming is ongoing."],
      ["Shih Tzu", "Companion-focused, but heat and grooming need care."],
      ["Dachshund", "Small but can be vocal and needs back-care planning."],
    ],
    beforeChoosing: [
      "Do you have written permission for a dog?",
      "Can the dog toilet safely and frequently?",
      "Will barking disturb neighbours?",
      "Can you provide daily walks and enrichment without a garden?",
      ...generalChecklist,
    ],
    costCare: [
      "Budget for dog walkers, daycare, pet sitters, cleaning supplies, training, grooming, and transport if apartment routines are tight.",
      "Small dogs can still have dental, grooming, and insurance costs.",
      "Landlord deposits, cleaning rules, and body corporate permissions should be clarified in writing.",
    ],
    trainingGrooming: [
      "Focus on quiet settling, alone-time skills, lead manners in shared spaces, lift manners, and visitor routines.",
      "Keep nails short to reduce slipping and noise on hard floors.",
      "Choose a coat you can maintain without leaving hair or odour to become a neighbour issue.",
    ],
    healthInsurance: [
      "Ask about heat sensitivity, dental care, back issues, airway concerns, and weight management depending on breed.",
      "Plan safe balcony access and avoid falls.",
      "Insurance and emergency savings still matter for apartment dogs.",
    ],
    adoptionCautions: [
      "Ask shelters whether the dog has lived in flats, copes alone, barks, or reacts to hallway noise.",
      "Avoid buying a puppy before permission, house-training plan, and neighbour realities are clear.",
      ...generalCautions,
    ],
    faqs: [
      { question: "Are small dogs always good apartment dogs?", answer: "No. Some small dogs bark heavily, dislike being alone, or need high grooming. Temperament and routine matter." },
      { question: "Can a medium dog live in a flat?", answer: "Some calm adult medium dogs can if exercise, rules, toileting, and barking are managed." },
      { question: "Do apartment dogs need walks?", answer: "Yes. Shared gardens or balconies do not replace sniffing, exercise, training, and enrichment." },
    ],
    related: [
      { title: "Dogs in Complexes", description: "Sectional title and conduct rule checks.", href: "/laws/dogs-in-complexes-and-sectional-title-south-africa" },
      { title: "Pet-Friendly Rentals", description: "Lease terms and written permission.", href: "/laws/pet-friendly-rentals-south-africa" },
      { title: "Quiet Dog Breeds", description: "Barking, neighbours, and realistic expectations.", href: "/breeds/quiet-dog-breeds-south-africa" },
      ...commonRelated,
    ],
  },
  {
    slug: "low-maintenance-dogs-south-africa",
    title: "Low-Maintenance Dogs in South Africa",
    seoTitle: "Low-Maintenance Dogs South Africa | Realistic Care Guide",
    description:
      "A realistic South African guide to low-maintenance dog choices, covering grooming, shedding, exercise, training, health, heat, costs, adoption, and why no dog is no-maintenance.",
    intro:
      "Low-maintenance should mean realistic and manageable, not neglected. Every dog needs food, vet care, parasite prevention, training, exercise, attention, and emergency planning.",
    summary:
      "Dogs often considered lower-maintenance may include short-coated mixed-breed adults, Africanis types, some Chihuahuas, Beagles, Staffies, and short-coated medium dogs, but individual needs vary.",
    context: [
      "South African owners may want a dog that fits work schedules, heat, gardens, rentals, and budget. The easiest dog is often a well-matched adult dog, not necessarily a particular breed.",
      "A low-maintenance coat can still come with high exercise, barking, digging, health, or training needs.",
    ],
    examples: [
      ["Short-coated mixed-breed adult", "May have clearer temperament and simpler coat care."],
      ["Africanis type", "Often hardy, but still needs training, health care, and secure management."],
      ["Staffordshire Bull Terrier", "Short coat, but needs exercise, socialisation, and responsible handling."],
      ["Beagle", "Short coat, but scent drive and barking can be demanding."],
    ],
    beforeChoosing: [
      "Which kind of maintenance are you trying to reduce: grooming, exercise, barking, cost, or training?",
      "Can you still provide daily attention and vet care?",
      "Would an adult rescue dog be easier than a puppy?",
      "Does your home suit the dog's actual energy and behaviour?",
      ...generalChecklist,
    ],
    costCare: [
      "Short coats can reduce grooming costs, but food, vet care, parasite prevention, insurance, and emergencies remain.",
      "A dog with fewer grooming needs may still need training support or more exercise.",
      "Puppies are rarely low-maintenance in the first year.",
    ],
    trainingGrooming: [
      "Low-maintenance dogs still need house manners, lead skills, recall, alone-time training, and enrichment.",
      "Short coats still need brushing, bathing when needed, nail care, ear checks, and tick checks.",
      "Choose a dog whose exercise needs match your normal weekday, not only weekends.",
    ],
    healthInsurance: [
      "Ask about dental care, weight, skin, ears, joints, parasites, and heat sensitivity.",
      "Routine prevention often keeps a manageable dog from becoming expensive later.",
      "Insurance wording and exclusions should be checked early.",
    ],
    adoptionCautions: [
      "Tell shelters honestly if you need lower grooming, moderate exercise, or quiet behaviour.",
      "Avoid sellers using low-maintenance claims to rush a purchase.",
      ...generalCautions,
    ],
    faqs: [
      { question: "What is the lowest-maintenance dog?", answer: "No dog is no-maintenance. A calm, well-matched adult dog with a simple coat may be easier for some homes than a puppy." },
      { question: "Are short-haired dogs low-maintenance?", answer: "They may need less coat work, but they still shed, need training, exercise, parasite prevention, and vet care." },
      { question: "Are puppies low-maintenance?", answer: "No. Puppies need intensive supervision, toilet training, socialisation, chewing management, vaccines, and training." },
    ],
    related: [
      { title: "Africanis", description: "South African context for an adaptable landrace type.", href: "/breeds/africanis-dog-breed-south-africa" },
      { title: "Mixed Breed Dogs", description: "Choose by fit and temperament.", href: "/breeds/mixed-breed-dogs-south-africa" },
      { title: "Dog Cost Calculator", description: "Estimate routine ownership categories.", href: "/tools/dog-cost-calculator" },
      ...commonRelated,
    ],
  },
  {
    slug: "hypoallergenic-dogs-south-africa",
    title: "Hypoallergenic Dogs in South Africa",
    seoTitle: "Hypoallergenic Dogs South Africa | Allergy-Aware Breed Guide",
    description:
      "A cautious South African guide to hypoallergenic and allergy-aware dog choices, explaining that no dog is allergy-proof and covering grooming, costs, health, and adoption questions.",
    intro:
      "No dog is truly allergy-proof. Some low-shedding or curly-coated dogs may suit some allergy-sensitive homes better, but reactions vary by person, dog, coat, saliva, dander, grooming, and cleaning routine.",
    summary:
      "Dogs often discussed for allergy-aware homes include Poodles, Maltese Poodle types, Yorkshire Terriers, Shih Tzus, Schnauzer-type dogs, and some low-shedding mixed breeds, but no breed can promise no reaction.",
    context: [
      "South African homes with dust, pollen, grass, fleas, heat, and indoor living may confuse human allergies and dog skin issues. Owners should separate human allergy concerns from the dog's own itching or coat problems.",
      "Low-shedding coats often require professional grooming, which affects monthly cost.",
    ],
    examples: [
      ["Poodle", "Low-shedding coat, but grooming is essential."],
      ["Maltese Poodle type", "Often marketed as allergy-friendly, but coat and genetics vary."],
      ["Yorkshire Terrier", "Low-shedding for some homes, but dental and grooming care matter."],
      ["Shih Tzu", "Companion coat needs ongoing maintenance and heat awareness."],
    ],
    beforeChoosing: [
      "Spend time with adult dogs of the type before committing.",
      "Can you afford professional grooming every few weeks if needed?",
      "Is the allergy concern about people, or is the dog itchy and needing a vet?",
      "Can you manage cleaning, bedding, vacuuming, and parasite prevention?",
      ...generalChecklist,
    ],
    costCare: [
      "Low-shedding dogs can cost more in grooming than higher-shedding short-coated dogs.",
      "Skin, ear, dental, and grooming costs should be included in the budget.",
      "Avoid paying inflated prices for allergy promises that cannot be proven.",
    ],
    trainingGrooming: [
      "Coats that do not shed much can mat if not brushed and clipped regularly.",
      "Grooming tolerance should be trained kindly from puppyhood or after adoption.",
      "Apartment suitability still depends on barking, exercise, and alone-time skills.",
    ],
    healthInsurance: [
      "Ask vets about skin, ear, dental, eye, and breathing concerns depending on the breed.",
      "Human allergies should be discussed with a human healthcare professional; dog health symptoms need a vet.",
      "Insurance may exclude pre-existing skin or ear conditions.",
    ],
    adoptionCautions: [
      "Ask rescues about coat care and whether the adult coat is known.",
      "Be cautious of sellers promising allergy-proof puppies.",
      ...generalCautions,
    ],
    faqs: [
      { question: "Is any dog hypoallergenic?", answer: "No dog is completely allergy-proof. Some dogs may trigger fewer reactions for some people, but there is no promise." },
      { question: "Do low-shedding dogs need grooming?", answer: "Yes. Many low-shedding coats need regular brushing and professional grooming." },
      { question: "Should I choose a dog only for allergies?", answer: "No. Also consider temperament, cost, exercise, barking, heat, grooming, and long-term health." },
    ],
    related: [
      { title: "Poodle", description: "Coat, grooming, training, and South African care needs.", href: "/breeds/poodle-south-africa" },
      { title: "Maltese Poodle", description: "Small companion dog care and grooming.", href: "/breeds/maltese-poodle-south-africa" },
      { title: "Dogs That Do Not Shed Much", description: "Low-shedding expectations and coat care.", href: "/breeds/dogs-that-dont-shed-much-south-africa" },
      ...commonRelated,
    ],
  },
  {
    slug: "best-dogs-for-first-time-owners-south-africa",
    title: "Best Dogs for First-Time Owners in South Africa",
    seoTitle: "Best Dogs for First-Time Owners South Africa | Beginner Breed Guide",
    description:
      "A South African first-time dog owner breed guide covering temperament, training, grooming, costs, adoption, puppy scams, heat, rentals, and responsible choices.",
    intro:
      "First-time owners should choose a dog that fits their real routine, not the most impressive breed. The easier first dog is often moderate in energy, manageable in size, social, and supported by good adoption or breeder records.",
    summary:
      "Dogs often considered for prepared first-time owners include adult mixed-breed dogs, Labradors, smaller Poodles, Maltese Poodle types, Cavalier-type companions where responsibly sourced, Beagles for active homes, and some calm rescue dogs.",
    context: [
      "South African first-time owners need to plan for vet access, vaccines, parasite prevention, rentals, complexes, grooming, training classes, and emergency costs.",
      "A first puppy from a poor source can become much harder than a carefully matched adult rescue dog.",
    ],
    examples: [
      ["Adult mixed-breed rescue", "Known temperament can help first-time matching."],
      ["Labrador Retriever", "Often friendly but active and food-driven."],
      ["Maltese Poodle type", "Small home potential, but grooming required."],
      ["Miniature Poodle", "Trainable and lower-shedding, but needs grooming and stimulation."],
    ],
    beforeChoosing: [
      "Can you afford puppy classes or basic training help?",
      "Do you understand vaccines, parasite prevention, sterilisation, and emergency costs?",
      "Will your rental, complex, or estate allow the dog?",
      "Would an adult dog be a better first match than a puppy?",
      ...generalChecklist,
    ],
    costCare: [
      "First-time owners should budget for setup supplies, vet visits, training, grooming, food, insurance or savings, and mistakes.",
      "A manageable dog is not always the cheapest dog.",
      "Avoid choosing large, high-drive, protection-focused breeds as a first dog unless you have serious support and experience.",
    ],
    trainingGrooming: [
      "Start with house training, lead manners, recall, calm greetings, alone-time skills, and handling tolerance.",
      "Choose grooming needs that fit your schedule and budget.",
      "Avoid punishment-heavy training that can create fear and confusion.",
    ],
    healthInsurance: [
      "Ask a vet about breed-specific health, heat sensitivity, dental care, joint concerns, and weight management.",
      "Insurance can be useful, but read waiting periods, exclusions, excesses, and pre-existing condition rules.",
      "Keep records from day one.",
    ],
    adoptionCautions: [
      "Tell shelters you are new and need honest matching.",
      "Avoid sellers who rush payment or hide the puppy's mother, records, or living conditions.",
      ...generalCautions,
    ],
    faqs: [
      { question: "Should a first-time owner get a puppy?", answer: "Only if prepared for time, mess, training, vet visits, and supervision. Some first-time homes do better with a matched adult dog." },
      { question: "Are guard breeds good for beginners?", answer: "Usually they need experienced handling and strong support. Do not choose a powerful breed for status or protection alone." },
      { question: "What should first-time owners budget for?", answer: "Food, vet care, parasite prevention, training, grooming, insurance or savings, supplies, and emergency care." },
    ],
    related: [
      { title: "Start Here", description: "Find the right DogHaven guide faster.", href: "/start-here" },
      { title: "Puppy Care", description: "First-year puppy planning.", href: "/puppy/puppy-care-south-africa" },
      { title: "Dog Adoption", description: "Shelter and rescue guidance.", href: "/adoption/dog-adoption-south-africa" },
      ...commonRelated,
    ],
  },
  {
    slug: "best-dogs-for-active-owners-south-africa",
    title: "Best Dogs for Active Owners in South Africa",
    seoTitle: "Best Dogs for Active Owners South Africa | Exercise and Training Guide",
    description:
      "A South African guide to active dog breeds and types, covering exercise, heat, training, hiking, running, cost, grooming, health, and responsible ownership.",
    intro:
      "Active owners often want a dog for running, hiking, beach walks, farms, or outdoor weekends. The right dog needs suitable fitness, training, heat management, recovery time, and vet checks.",
    summary:
      "Breeds often considered for active owners include Border Collies, Labradors, German Shepherds, Africanis types, Jack Russells, Boxers, Poodles, and athletic mixed-breed dogs.",
    context: [
      "South African activity can mean hot pavements, mountain trails, beach sand, ticks, snakes, traffic, cattle grids, and long drives.",
      "High-energy dogs can become anxious, destructive, noisy, or reactive if their mental needs are ignored.",
    ],
    examples: [
      ["Border Collie", "High mental and exercise needs; not a casual weekend-only dog."],
      ["Labrador Retriever", "Active and social, but weight and heat need care."],
      ["Jack Russell Terrier", "Small but intense, clever, and busy."],
      ["Africanis type", "Often athletic and adaptable, with individual variation."],
    ],
    beforeChoosing: [
      "Are you active on weekdays, not only holidays?",
      "Can you train recall, leash control, and calm settling?",
      "Can you avoid heat-heavy exercise?",
      "Will the dog get mental work, not only distance?",
      ...generalChecklist,
    ],
    costCare: [
      "Active dogs may need training gear, secure harnesses, parasite prevention, insurance, injury care, and higher food planning.",
      "Budget for rest, recovery, and vet checks if limping or fatigue appears.",
      "Daycare, walkers, or sport classes can add costs.",
    ],
    trainingGrooming: [
      "Recall, lead manners, leave-it cues, calm car travel, and safe public behaviour are essential.",
      "Check paws, ears, coat, and ticks after hikes, beach visits, long grass, and farm trips.",
      "Teach rest so the dog can settle after activity.",
    ],
    healthInsurance: [
      "Discuss joint health, weight, heat tolerance, heart fitness, and injury risk with a vet.",
      "Insurance may matter for accident, cruciate, snakebite, and emergency care questions.",
      "Avoid intense exercise with growing puppies without vet guidance.",
    ],
    adoptionCautions: [
      "Ask rescues about energy, prey drive, recall, dog sociability, and escape history.",
      "Avoid buying a high-drive dog because it looks impressive online.",
      ...generalCautions,
    ],
    faqs: [
      { question: "What dog is best for running in South Africa?", answer: "It depends on heat tolerance, age, fitness, joints, training, and route safety. Ask your vet before running with puppies or dogs with health concerns." },
      { question: "Are Border Collies good active dogs?", answer: "They can be, but they need mental work, training, and skilled owners, not only long walks." },
      { question: "Can active dogs live in small homes?", answer: "Some can if exercise, enrichment, training, and settling skills are strong." },
    ],
    related: [
      { title: "Border Collie", description: "High-energy breed planning.", href: "/breeds/border-collie-south-africa" },
      { title: "Jack Russell Terrier", description: "Small but busy dog planning.", href: "/breeds/jack-russell-terrier-south-africa" },
      { title: "Hiking With Dogs", description: "Rules, heat, ticks, water, and safety.", href: "/dog-friendly/hiking-with-dogs-south-africa" },
      ...commonRelated,
    ],
  },
  {
    slug: "best-dogs-for-hot-weather-south-africa",
    title: "Best Dogs for Hot Weather in South Africa",
    seoTitle: "Best Dogs for Hot Weather South Africa | Heat-Safe Breed Guide",
    description:
      "A South African hot-weather dog guide covering heat tolerance, coats, breathing, exercise timing, shade, water, grooming, health, and climate-aware breed choice.",
    intro:
      "No dog is heat-proof. Some dogs cope better with warm conditions, but South African summers can be dangerous for any dog without shade, water, cool exercise times, and sensible management.",
    summary:
      "Dogs often considered more heat-manageable may include Africanis types, some short-coated mixed breeds, Beagles, Chihuahuas, and lean short-coated medium dogs, while flat-faced, heavy-coated, overweight, senior, and giant dogs need extra caution.",
    context: [
      "Hot weather risks vary between the Lowveld, Karoo, KwaZulu-Natal humidity, Gauteng heatwaves, coastal sand, and parked cars.",
      "Breed choice matters, but owner behaviour matters more: walk timing, shade, water, body condition, and no hot-car exposure.",
    ],
    examples: [
      ["Africanis type", "Often suited to local climates, but still needs shade and water."],
      ["Short-coated mixed-breed dog", "Coat may be easier in heat, depending on body condition and health."],
      ["Beagle", "Short coat, but still needs heat-aware exercise and weight control."],
      ["Chihuahua", "Small and short-coated types may cope indoors, but can dehydrate or overheat quickly."],
    ],
    beforeChoosing: [
      "Does your home have shade, ventilation, and cool resting areas?",
      "Can you walk early or late rather than in midday heat?",
      "Is the breed flat-faced, heavy-coated, overweight-prone, or heat-sensitive?",
      "Can you manage grooming without stripping protective coats incorrectly?",
      ...generalChecklist,
    ],
    costCare: [
      "Heat-sensitive dogs may need more vet care, grooming planning, cooling equipment, and careful transport.",
      "Airflow, shade, water access, and safe indoor space are part of ownership costs.",
      "Emergency savings matter because heatstroke is urgent.",
    ],
    trainingGrooming: [
      "Train calm indoor enrichment for hot days when walks must be shorter.",
      "Avoid shaving double coats casually; ask a groomer or vet.",
      "Keep nails and paw hair manageable for safe indoor footing.",
    ],
    healthInsurance: [
      "Flat-faced breeds, seniors, overweight dogs, heart patients, and puppies need extra heat caution.",
      "Insurance wording should be checked for emergency, hereditary, and breed-related conditions.",
      "Learn heatstroke signs before summer.",
    ],
    adoptionCautions: [
      "Ask shelters how the dog copes in heat and whether breathing, weight, or coat concerns are known.",
      "Avoid choosing a northern heavy-coated breed for a hot home without serious climate management.",
      ...generalCautions,
    ],
    faqs: [
      { question: "What dog breed handles South African heat best?", answer: "No breed handles heat safely without owner management. Short-coated, lean, healthy dogs may cope better, but shade, water, timing, and body condition matter." },
      { question: "Are Huskies suitable for hot areas?", answer: "They need serious heat management and are not a casual choice for hot climates." },
      { question: "Can I shave my dog for summer?", answer: "Ask a vet or groomer first. Some coats protect the dog and should not be shaved casually." },
    ],
    related: [
      { title: "Heatstroke in Dogs", description: "Hot-weather emergency warning signs.", href: "/emergency/heatstroke-in-dogs-south-africa" },
      { title: "Africanis", description: "South African local context and care.", href: "/breeds/africanis-dog-breed-south-africa" },
      { title: "Siberian Husky", description: "Heavy-coated breed realities in South Africa.", href: "/breeds/siberian-husky-south-africa" },
      ...commonRelated,
    ],
  },
  {
    slug: "best-dogs-for-small-gardens-south-africa",
    title: "Best Dogs for Small Gardens in South Africa",
    seoTitle: "Best Dogs for Small Gardens South Africa | Townhouse Breed Guide",
    description:
      "A South African guide to choosing dogs for small gardens, townhouses and estates, covering exercise, barking, enrichment, heat, rules, costs, and breed fit.",
    intro:
      "A small garden is not the same as no space, but it also does not exercise a dog by itself. The right dog for a small garden can settle, walk politely, avoid constant barking, and cope with neighbours.",
    summary:
      "Dogs often considered for small gardens include small mixed-breed adults, Maltese Poodle types, Dachshunds, Beagles, Staffies, Poodles, and some calm medium rescue dogs.",
    context: [
      "South African townhouses and estates often have boundary walls, shared noise, body corporate rules, small lawns, and limited off-lead space.",
      "The dog must match neighbour tolerance, walking routine, heat, and enrichment, not only the size of the garden.",
    ],
    examples: [
      ["Small mixed-breed adult", "Can be a strong fit when temperament and barking are known."],
      ["Dachshund", "Small but vocal and back-care aware."],
      ["Staffie", "Short coat and affectionate, but needs exercise and responsible handling."],
      ["Miniature Poodle", "Trainable and lower shedding, but grooming is ongoing."],
    ],
    beforeChoosing: [
      "Will the dog bark at walls, gates, neighbours, and passing dogs?",
      "Can you provide daily walks beyond garden time?",
      "Are estate or body corporate rules clear?",
      "Is the garden secure against escapes, pools, and gate gaps?",
      ...generalChecklist,
    ],
    costCare: [
      "Small gardens may require more walks, daycare, walkers, training, or enrichment toys.",
      "Noise complaints can lead to training costs or housing stress.",
      "Garden damage, digging, fencing, shade, and cleaning should be budgeted.",
    ],
    trainingGrooming: [
      "Focus on boundary barking, recall from the gate, calm visitor routines, and polite lead walking.",
      "Provide sniffing walks and enrichment so the garden is not the dog's only world.",
      "Choose coat care that fits the garden's dust, mud, grass, or tick exposure.",
    ],
    healthInsurance: [
      "Small gardens can still expose dogs to ticks, fleas, toxic plants, pools, heat, and injuries.",
      "Ask about safe exercise for growing puppies and senior dogs.",
      "Plan insurance or savings for emergencies and chronic care.",
    ],
    adoptionCautions: [
      "Ask rescues whether the dog has lived in a townhouse or estate and whether barking is known.",
      "Avoid high-drive dogs if weekday exercise will be minimal.",
      ...generalCautions,
    ],
    faqs: [
      { question: "Can a dog be happy with a small garden?", answer: "Yes, if walks, enrichment, training, and companionship are provided." },
      { question: "Is a garden enough exercise?", answer: "No. Most dogs need walks, sniffing, training, play, and mental work." },
      { question: "Which dogs are bad for small gardens?", answer: "Dogs with high exercise needs, constant barking, escape drive, or poor neighbour tolerance may struggle unless owners provide strong management." },
    ],
    related: [
      { title: "Apartment Dogs", description: "Flat and complex living planning.", href: "/breeds/best-apartment-dogs-south-africa" },
      { title: "Quiet Dog Breeds", description: "Barking and neighbour expectations.", href: "/breeds/quiet-dog-breeds-south-africa" },
      { title: "Dog Laws", description: "Complex, barking, and leash rule checks.", href: "/laws" },
      ...commonRelated,
    ],
  },
  {
    slug: "dogs-that-dont-shed-much-south-africa",
    title: "Dogs That Don't Shed Much in South Africa",
    seoTitle: "Dogs That Don't Shed Much South Africa | Low-Shedding Breed Guide",
    description:
      "A South African guide to dogs that do not shed much, covering low-shedding expectations, grooming costs, allergies, coat care, heat, adoption, and responsible sourcing.",
    intro:
      "Low-shedding dogs can reduce loose hair, but they are not low-care. Many coats that shed less need more brushing, clipping, professional grooming, and skin monitoring.",
    summary:
      "Dogs often considered lower-shedding include Poodles, Maltese Poodle types, Yorkshire Terriers, Shih Tzus, Schnauzer-type dogs, and some curly-coated mixed breeds.",
    context: [
      "Low-shedding is popular in South African flats, allergy-aware homes, and neat households, but coat maintenance can become expensive if ignored.",
      "Dust, pollen, fleas, humidity, beach sand, and grass can still affect skin even when the dog sheds less.",
    ],
    examples: [
      ["Poodle", "Low shedding, high grooming responsibility."],
      ["Maltese Poodle type", "Often low shedding, but coat type varies by dog."],
      ["Yorkshire Terrier", "Low-shedding coat with grooming and dental needs."],
      ["Shih Tzu", "Companion coat needing regular care and heat awareness."],
    ],
    beforeChoosing: [
      "Can you brush and pay for grooming regularly?",
      "Do you want low shedding or allergy relief? They are not the same thing.",
      "Will the dog tolerate handling, brushing, and clipping?",
      "Can you prevent matting before it becomes painful?",
      ...generalChecklist,
    ],
    costCare: [
      "Professional grooming may cost more than the vacuuming you hoped to avoid.",
      "Mats, skin infections, ear problems, and dental care can become expensive if routine care slips.",
      "Budget for brushes, combs, grooming appointments, and vet checks for skin concerns.",
    ],
    trainingGrooming: [
      "Teach grooming tolerance gently with rewards.",
      "Keep ears, paws, eyes, and coat clean without over-bathing.",
      "Do not wait until matting is severe before asking a groomer or vet for help.",
    ],
    healthInsurance: [
      "Ask about skin, ear, dental, eye, and airway concerns depending on breed.",
      "Insurance may exclude pre-existing skin or ear issues.",
      "Allergy-sensitive humans should spend time with adult dogs before committing.",
    ],
    adoptionCautions: [
      "Ask rescues about coat care, grooming tolerance, and adult coat type.",
      "Avoid sellers making allergy-proof promises.",
      ...generalCautions,
    ],
    faqs: [
      { question: "Which dogs do not shed at all?", answer: "All dogs shed some hair or dander. Some shed far less than others, but no dog is hair-free." },
      { question: "Are low-shedding dogs better for allergies?", answer: "Sometimes for some people, but no breed can promise no reaction." },
      { question: "Are low-shedding dogs low-maintenance?", answer: "Often no. Many need frequent brushing and professional grooming." },
    ],
    related: [
      { title: "Hypoallergenic Dogs", description: "Allergy-aware breed planning.", href: "/breeds/hypoallergenic-dogs-south-africa" },
      { title: "Dog Shedding", description: "Normal shedding vs skin warning signs.", href: "/grooming/dog-shedding-south-africa" },
      { title: "Dog Grooming Costs", description: "Plan coat maintenance costs.", href: "/grooming/dog-grooming-costs-south-africa" },
      ...commonRelated,
    ],
  },
  {
    slug: "best-dogs-for-security-and-family-south-africa",
    title: "Best Dogs for Security and Family in South Africa",
    seoTitle: "Dogs for Security and Family South Africa | Responsible Safety Guide",
    description:
      "A responsible South African guide to dogs for security-aware families, covering temperament, training, fencing, children, legal responsibility, costs, and welfare.",
    intro:
      "A dog expected to live with family and make owners feel safer must be stable, socialised, trained, and responsibly managed. Fear, isolation, and aggression are not a family safety plan.",
    summary:
      "Breeds often discussed for security-aware family homes include German Shepherds, Boerboels, Rottweilers, Dobermans, Boxers, Staffies, Africanis types, and mixed-breed alert dogs.",
    context: [
      "South African security concerns can make powerful breeds appealing, but the dog must still cope with children, visitors, vets, groomers, neighbours, and public spaces.",
      "Responsible ownership includes fencing, socialisation, humane training, supervision, and understanding dog bite and barking responsibilities.",
    ],
    examples: [
      ["German Shepherd", "Trainable and alert, but needs skilled daily management."],
      ["Boerboel", "Powerful South African breed for experienced owners."],
      ["Boxer", "Often family-oriented and energetic, with heat and training needs."],
      ["Mixed-breed alert dog", "Temperament and history matter more than label."],
    ],
    beforeChoosing: [
      "Can you prioritise family safety and public control over intimidation?",
      "Can you supervise children and visitors reliably?",
      "Can you afford training, secure fencing, vet care, and insurance or savings?",
      "Have you checked housing, estate, and legal responsibilities?",
      ...generalChecklist,
    ],
    costCare: [
      "Security-aware family dogs may be large, strong, and expensive to feed, train, insure, and transport.",
      "Behaviour support may be needed if barking, guarding, or reactivity becomes a problem.",
      "Fence upgrades, gates, signage, and safe visitor routines can add costs.",
    ],
    trainingGrooming: [
      "Train calm greetings, recall, lead manners, boundary control, and safe separation during deliveries or visitors.",
      "Socialisation should create confidence and neutrality, not uncontrolled suspicion.",
      "Children must not be responsible for managing a powerful dog around visitors.",
    ],
    healthInsurance: [
      "Large breeds may have joint, heart, cruciate, skin, and weight concerns.",
      "Check insurance wording and housing rules for breed-specific clauses.",
      "Keep vaccination and parasite prevention current for dogs interacting with family and service providers.",
    ],
    adoptionCautions: [
      "Ask rescues about guarding, bite history, child exposure, dog reactivity, and stranger handling.",
      "Avoid sellers advertising aggression or protection hype.",
      ...generalCautions,
    ],
    faqs: [
      { question: "Can a security dog be safe with children?", answer: "Some alert dogs can live safely with families, but only with responsible adults, supervision, training, and stable temperament." },
      { question: "Should I choose the biggest dog for family security?", answer: "No. Size without control increases risk. Fit, temperament, training, and management matter more." },
      { question: "Do family guard dogs need socialisation?", answer: "Yes. Socialisation helps dogs behave calmly and safely around normal life." },
    ],
    related: [
      { title: "Guard Dogs", description: "Responsible guard dog planning.", href: "/breeds/best-guard-dogs-south-africa" },
      { title: "Dog Bite Laws", description: "Safety and responsibility after dog bites.", href: "/laws/dog-bite-laws-south-africa" },
      { title: "Best Family Dogs", description: "Family dog planning without guard hype.", href: "/breeds/best-dogs-for-families-south-africa" },
      ...commonRelated,
    ],
  },
  {
    slug: "quiet-dog-breeds-south-africa",
    title: "Quiet Dog Breeds in South Africa",
    seoTitle: "Quiet Dog Breeds South Africa | Barking, Flats and Neighbours Guide",
    description:
      "A South African guide to quieter dog breed choices, barking realities, flats, complexes, neighbours, training, exercise, boredom, and responsible adoption.",
    intro:
      "No breed is silent. A quieter dog is usually one whose temperament, exercise, environment, training, and stress levels are managed well.",
    summary:
      "Dogs often considered quieter may include some adult rescue dogs, Greyhound-type dogs where available, Cavaliers where responsibly sourced, Shih Tzus, some Bulldogs, and calm mixed-breed dogs, but individuals vary widely.",
    context: [
      "Barking can become a serious issue in South African complexes, townhouses, estates, flats, and close suburban homes.",
      "Noise is often about boredom, fear, separation distress, gate triggers, lack of exercise, pain, or neighbourhood activity rather than breed alone.",
    ],
    examples: [
      ["Calm adult rescue dog", "Known behaviour may be more useful than breed assumptions."],
      ["Shih Tzu", "Often companion-focused, but can still alert bark."],
      ["Bulldog-type dogs", "May be less vocal but can have heat and breathing concerns."],
      ["Greyhound-type dogs", "Often calm indoors, but availability and individual needs vary."],
    ],
    beforeChoosing: [
      "Can you manage triggers at gates, windows, balconies, and shared walls?",
      "Can the dog cope alone without distress?",
      "Will exercise and enrichment happen before work or after?",
      "Are body corporate or rental noise rules clear?",
      ...generalChecklist,
    ],
    costCare: [
      "Barking problems can lead to training, behaviour support, daycare, dog walking, or housing costs.",
      "A quieter breed with serious health issues can still be costly.",
      "Apartment dogs may need enrichment toys, walkers, or training support.",
    ],
    trainingGrooming: [
      "Reward calm behaviour and manage triggers instead of punishing barking.",
      "Train alone-time skills gradually.",
      "Meet grooming and exercise needs so discomfort and boredom do not increase noise.",
    ],
    healthInsurance: [
      "Pain, itch, ear infections, senior confusion, and anxiety can increase barking.",
      "Ask a vet if barking changes suddenly or comes with other symptoms.",
      "Insurance will not solve training, but health cover can matter if barking has a medical cause.",
    ],
    adoptionCautions: [
      "Ask shelters specifically about barking, separation distress, reactivity, and night-time behaviour.",
      "Avoid sellers promising quiet puppies. Puppies change as they mature.",
      ...generalCautions,
    ],
    faqs: [
      { question: "Which dog breed barks the least?", answer: "There is no silent breed. Adult temperament and environment are often more useful than breed generalisations." },
      { question: "Can training reduce barking?", answer: "Often yes, especially with humane methods, enrichment, trigger management, and addressing fear or pain." },
      { question: "Are small dogs quiet?", answer: "Not necessarily. Many small dogs are alert and vocal, especially in flats or at gates." },
    ],
    related: [
      { title: "Nuisance Barking", description: "Neighbour complaints and humane steps.", href: "/laws/nuisance-barking-south-africa" },
      { title: "Apartment Dogs", description: "Barking, enrichment, and rental planning.", href: "/breeds/best-apartment-dogs-south-africa" },
      { title: "Separation Anxiety", description: "When alone-time distress causes noise.", href: "/training/separation-anxiety-dogs-south-africa" },
      ...commonRelated,
    ],
  },
  {
    slug: "choosing-the-right-dog-breed-south-africa",
    title: "Choosing the Right Dog Breed in South Africa",
    seoTitle: "Choosing the Right Dog Breed South Africa | Practical Breed Chooser",
    description:
      "A practical South African breed chooser guide covering lifestyle, home type, family needs, heat, grooming, training, costs, insurance, adoption, puppy scams, and responsible sourcing.",
    intro:
      "Choosing the right dog breed starts with honesty about your home, time, budget, experience, heat, grooming tolerance, neighbours, children, and long-term vet care capacity.",
    summary:
      "The right dog is not the trendiest puppy. It is the dog whose adult needs fit your real life, including ordinary weekdays, expensive months, hot weather, rules, and emergencies.",
    context: [
      "South African breed choice is shaped by heat, ticks, snakes, rentals, complexes, security concerns, grooming access, vet costs, transport, and local rules.",
      "Mixed-breed dogs, adult rescues, and breed-specific rescues should be part of the conversation, not an afterthought.",
    ],
    examples: [
      ["Small home", "Prioritise settling, barking, toileting, exercise, and rules."],
      ["Family home", "Prioritise temperament, supervision, training, and child-safe routines."],
      ["Active home", "Prioritise heat-safe exercise, recall, mental work, and injury prevention."],
      ["Security-aware home", "Prioritise control, welfare, legal responsibility, and stable temperament."],
    ],
    beforeChoosing: [
      "Write down your weekday routine, not only your ideal weekend.",
      "Choose by adult dog needs, not puppy cuteness.",
      "Compare grooming, shedding, exercise, training, barking, heat, cost, and health risks.",
      "Use the breed comparison checklist before contacting sellers.",
      ...generalChecklist,
    ],
    costCare: [
      "Compare lifetime costs, not only adoption fee or purchase price.",
      "Large dogs, heavy coats, brachycephalic breeds, chronic skin or ear issues, and high-energy dogs can raise costs.",
      "Plan for routine care plus emergency savings or insurance.",
    ],
    trainingGrooming: [
      "Match training difficulty to your experience and willingness to get help.",
      "Match coat care to your budget, climate, and access to groomers.",
      "Make barking, public manners, recall, and alone-time skills part of the decision.",
    ],
    healthInsurance: [
      "Ask a vet about breed-related health, heat sensitivity, dental care, joints, skin, ears, weight, and breathing concerns.",
      "Compare insurance before symptoms exist, because pre-existing condition wording matters.",
      "Avoid breeds whose known needs you cannot realistically fund or manage.",
    ],
    adoptionCautions: [
      "Ask rescues for honest matching based on temperament, history, size, energy, and home fit.",
      "If buying, avoid pressure, missing records, delivery-only stories, and breeders who dodge health questions.",
      ...generalCautions,
    ],
    faqs: [
      { question: "How do I choose the right dog breed?", answer: "Compare adult size, energy, grooming, barking, heat, health, training, family needs, cost, and source. Then meet real dogs and ask professionals." },
      { question: "Should I choose a purebred or mixed-breed dog?", answer: "Both can be wonderful. Choose by temperament, health, records, care needs, and responsible sourcing rather than label alone." },
      { question: "What is the biggest mistake when choosing a breed?", answer: "Choosing from looks, status, or a cute puppy photo without planning adult needs and costs." },
    ],
    related: [
      { title: "Breed Comparison Checklist", description: "Compare dog types before choosing.", href: "/tools/dog-breed-comparison-checklist" },
      { title: "Mixed Breed Dogs", description: "Responsible mixed-breed planning.", href: "/breeds/mixed-breed-dogs-south-africa" },
      { title: "Dog Adoption", description: "Adoption and rescue matching guidance.", href: "/adoption/dog-adoption-south-africa" },
      ...commonRelated,
    ],
  },
];

export const phase25BreedLifestyleGuidePages: GuideContent[] = topics.map((topic) => ({
  slug: topic.slug,
  path: `/breeds/${topic.slug}`,
  hubTitle: "Breed Guides",
  hubPath: "/breeds",
  title: topic.title,
  seoTitle: topic.seoTitle,
  description: topic.description,
  intro: topic.intro,
  updated: reviewed,
  quickFacts: [
    topic.summary,
    "This guide is not a ranking and does not claim any breed is perfect for every home.",
    "Individual dogs vary by genetics, health, early experiences, training, age, and environment.",
    "Consider adoption, rescue matching, and responsible breeder verification before making a decision.",
  ],
  sections: [
    {
      heading: "South African context",
      body: topic.context,
    },
    {
      heading: "Breeds often considered",
      body: [
        "These examples are starting points for research, not an absolute ranking. Meet real adult dogs and ask rescues, vets, trainers, and ethical breeders practical questions.",
      ],
      table: {
        headers: ["Breed or type", "Why owners consider it"],
        rows: topic.examples,
      },
    },
    {
      heading: "Before choosing a breed",
      body: ["Use this checklist before contacting a seller, rescue, shelter, or breeder."],
      checklist: topic.beforeChoosing,
    },
    {
      heading: "Cost and care factors",
      body: topic.costCare,
    },
    {
      heading: "Training and grooming considerations",
      body: topic.trainingGrooming,
    },
    {
      heading: "Health and insurance considerations",
      body: topic.healthInsurance,
    },
    {
      heading: "Adoption and responsible breeder cautions",
      body: topic.adoptionCautions,
    },
  ],
  faqs: topic.faqs,
  related: topic.related,
  sources,
}));

export function getPhase25Guide(slug: string) {
  return phase25BreedLifestyleGuidePages.find((guide) => guide.slug === slug);
}

export function getPhase25GuidesByHub(hubPath: string) {
  return phase25BreedLifestyleGuidePages.filter((guide) => guide.hubPath === hubPath);
}

export const phase25BreedCards: CardLink[] = [
  { title: "Breed Comparison Checklist", description: "Compare size, grooming, shedding, heat, costs, training, and sourcing questions.", href: "/tools/dog-breed-comparison-checklist" },
  ...phase25BreedLifestyleGuidePages.map((guide) => ({
    title: guide.title,
    description: guide.description,
    href: guide.path,
  })),
];

export const phase25PuppyCards: CardLink[] = [
  { title: "Choosing the Right Dog Breed", description: "Choose by adult needs, not puppy cuteness.", href: "/breeds/choosing-the-right-dog-breed-south-africa" },
  { title: "First-Time Owner Dogs", description: "Beginner-friendly breed planning with realistic tradeoffs.", href: "/breeds/best-dogs-for-first-time-owners-south-africa" },
  { title: "Family Dogs", description: "Child supervision, family routines, and cost planning.", href: "/breeds/best-dogs-for-families-south-africa" },
  { title: "Small Dogs", description: "Small-home puppy planning, barking, grooming, and fragility.", href: "/breeds/best-small-dogs-south-africa" },
];

export const phase25AdoptionCards: CardLink[] = [
  { title: "Choosing the Right Dog Breed", description: "Use lifestyle fit before adopting or buying.", href: "/breeds/choosing-the-right-dog-breed-south-africa" },
  { title: "Family Dogs", description: "Match temperament, children, space, and care needs.", href: "/breeds/best-dogs-for-families-south-africa" },
  { title: "Breed Comparison Checklist", description: "Compare adoption and breeder questions before deciding.", href: "/tools/dog-breed-comparison-checklist" },
];

export const phase25TrainingCards: CardLink[] = [
  { title: "Guard Dogs", description: "Responsible training and safety without aggression hype.", href: "/breeds/best-guard-dogs-south-africa" },
  { title: "Apartment Dogs", description: "Barking, enrichment, leash manners, and neighbour planning.", href: "/breeds/best-apartment-dogs-south-africa" },
  { title: "Quiet Dog Breeds", description: "Realistic barking expectations and training support.", href: "/breeds/quiet-dog-breeds-south-africa" },
  { title: "First-Time Owner Dogs", description: "Training difficulty and beginner-friendly expectations.", href: "/breeds/best-dogs-for-first-time-owners-south-africa" },
];

export const phase25GroomingCards: CardLink[] = [
  { title: "Low-Maintenance Dogs", description: "Realistic grooming, exercise, and care expectations.", href: "/breeds/low-maintenance-dogs-south-africa" },
  { title: "Hypoallergenic Dogs", description: "No dog is allergy-proof; understand grooming and coat care.", href: "/breeds/hypoallergenic-dogs-south-africa" },
  { title: "Dogs That Do Not Shed Much", description: "Low-shedding breeds and grooming costs.", href: "/breeds/dogs-that-dont-shed-much-south-africa" },
];

export const phase25CostCards: CardLink[] = [
  { title: "Large Dogs", description: "Food, vet, insurance, training, and transport cost factors.", href: "/breeds/best-large-dogs-south-africa" },
  { title: "Small Dogs", description: "Food, grooming, dental, insurance, and apartment cost factors.", href: "/breeds/best-small-dogs-south-africa" },
  { title: "Breed Comparison Checklist", description: "Compare monthly cost factors before choosing.", href: "/tools/dog-breed-comparison-checklist" },
];

export const phase25InsuranceCards: CardLink[] = [
  { title: "Choosing the Right Breed", description: "Health, cost, and insurance questions before choosing.", href: "/breeds/choosing-the-right-dog-breed-south-africa" },
  { title: "Large Dogs", description: "Breed size, joints, medication by weight, and insurance planning.", href: "/breeds/best-large-dogs-south-africa" },
  { title: "Breed Comparison Checklist", description: "Ask insurance and vet-risk questions before committing.", href: "/tools/dog-breed-comparison-checklist" },
];

export const phase25StartHereCards: CardLink[] = [
  { title: "Choosing the Right Dog Breed", description: "A practical South African breed chooser before adoption or buying.", href: "/breeds/choosing-the-right-dog-breed-south-africa" },
  { title: "Breed Comparison Checklist", description: "Compare size, cost, grooming, training, heat, and sourcing questions.", href: "/tools/dog-breed-comparison-checklist" },
];
