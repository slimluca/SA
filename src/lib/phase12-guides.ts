import type { CardLink, GuideContent, Source } from "@/lib/content";

type BreedSpec = {
  slug: string;
  name: string;
  seoName: string;
  summary: string;
  context: string;
  bestFor: string[];
  notIdealFor: string[];
  size: string;
  exercise: string;
  grooming: string;
  shedding: string;
  barking: string;
  training: string;
  family: string;
  space: string;
  climate: string;
  health: string[];
  cost: string;
  adoption: string;
  questions: string[];
  checklist: string[];
  faqs: GuideContent["faqs"];
};

const reviewed = "2026-05-15";

const breedSources: Source[] = [
  {
    label: "Kennel Union of Southern Africa breed standards",
    href: "https://www.kusa.co.za/index.php/documents/breed-standards/10-kusa-breeds/kusa-breed-standards",
    note: "South African breed registry context for researching recognised breed standards and responsible dog choice.",
  },
  {
    label: "KUSA buying a puppy guidance",
    href: "https://www.kusa.co.za/index.php/150-buying-a-puppy",
    note: "South African guidance on breeder verification, written agreements, and avoiding unsafe puppy-buying decisions.",
  },
  {
    label: "NSPCA choosing a dog",
    href: "https://nspca.co.za/choosing-a-dog/",
    note: "South African welfare guidance on choosing a dog responsibly and considering adoption.",
  },
  {
    label: "South African Veterinary Council",
    href: "https://savc.org.za/",
    note: "Professional veterinary context for health, welfare, and registered veterinary care in South Africa.",
  },
  {
    label: "WSAVA Global Nutrition Guidelines",
    href: "https://wsava.org/global-guidelines/global-nutrition-guidelines/",
    note: "Veterinary nutrition guidance for body condition, diet history, and feeding conversations with vets.",
  },
];

const commonRelated: CardLink[] = [
  {
    title: "Dog Adoption South Africa",
    description: "Shelter, rescue, and adoption decision guidance.",
    href: "/adoption/dog-adoption-south-africa",
  },
  {
    title: "Puppy Scam Checklist",
    description: "Verify records, sellers, and pressure-payment red flags.",
    href: "/adoption/puppy-scam-checklist-south-africa",
  },
  {
    title: "Cost of Owning a Dog",
    description: "Plan food, vet care, grooming, training, insurance, and emergencies.",
    href: "/costs/cost-of-owning-a-dog-south-africa",
  },
  {
    title: "Dog Training",
    description: "Humane training foundations for everyday life.",
    href: "/training/dog-training-south-africa",
  },
];

const breeds: BreedSpec[] = [
  {
    slug: "german-shepherd-south-africa",
    name: "German Shepherd",
    seoName: "German Shepherd South Africa",
    summary:
      "German Shepherds can be loyal, trainable working dogs, but they need structured training, daily exercise, socialisation, and owners who do not choose them only for security.",
    context:
      "In South Africa, German Shepherds are often associated with security, estates, farms, and active family homes. That expectation can become unfair if the dog is isolated in a yard without training, enrichment, and calm public manners.",
    bestFor: ["Experienced or committed owners", "Active homes with time for training", "Owners who want a companion and training project, not a yard alarm"],
    notIdealFor: ["Owners away all day with little enrichment", "Tiny homes with no walking plan", "Families wanting a dog to raise itself as protection"],
    size: "Large; plan for strong equipment, transport, food, and vet costs.",
    exercise: "High daily exercise and mental work, including training, scent games, and controlled walks.",
    grooming: "Regular brushing, especially during shedding seasons.",
    shedding: "Moderate to heavy.",
    barking: "Can bark at boundaries or triggers if under-socialised or bored.",
    training: "Highly trainable but needs humane consistency, impulse control, and early socialisation.",
    family: "Can suit families with supervision, child education, and clear routines.",
    space: "Better with space plus daily walks; townhouse living requires serious exercise planning.",
    climate: "Can manage many climates with shade, water, and heat-aware exercise timing.",
    health: ["Hip and elbow concerns can be relevant.", "Digestive sensitivity, skin issues, and degenerative conditions may occur.", "Ask vets about weight control and joint protection."],
    cost: "Large-dog food, training, parasite products, insurance, and orthopaedic care can make ownership costly.",
    adoption: "Check breed-specific rescues and shelters where appropriate. If buying, verify health testing, temperament, records, and KUSA context directly.",
    questions: ["Can I provide daily training for years?", "Am I choosing this dog for companionship, not intimidation?", "Can I manage a large, strong dog safely in public?"],
    checklist: ["Secure fencing.", "Training budget.", "Joint-health questions.", "Daily enrichment plan.", "Public manners plan."],
    faqs: [
      { question: "Are German Shepherds good guard dogs?", answer: "They can be alert, but choosing a dog only for protection is risky. Responsible ownership focuses on training, welfare, safety, and companionship." },
      { question: "Can German Shepherds live in townhouses?", answer: "Some can if exercise, training, barking management, and body corporate rules are handled carefully." },
      { question: "Do German Shepherds shed a lot?", answer: "Yes, many shed noticeably and need regular brushing." },
    ],
  },
  {
    slug: "golden-retriever-south-africa",
    name: "Golden Retriever",
    seoName: "Golden Retriever South Africa",
    summary:
      "Golden Retrievers are often friendly, social family dogs, but they still need exercise, grooming, training, weight control, and careful breeder verification.",
    context:
      "Golden Retrievers can fit active South African family homes, beach outings, and garden living, but their popularity can attract careless breeding. Do not assume every Golden puppy is automatically healthy or easy.",
    bestFor: ["Active families", "Owners who want a social companion", "Homes willing to brush, train, and manage weight"],
    notIdealFor: ["Owners wanting a low-shedding dog", "Homes with no time for exercise", "People who dislike muddy paws and wet coats"],
    size: "Medium-large; food, grooming, and vet costs are meaningful.",
    exercise: "Moderate to high; walks, retrieving, swimming where safe, and training games help.",
    grooming: "Regular brushing and drying after swimming.",
    shedding: "Moderate to heavy.",
    barking: "Usually manageable but can bark from excitement, boredom, or boundary triggers.",
    training: "Generally responsive to reward-based training; early manners matter because adults are strong.",
    family: "Often family-friendly with supervision and respectful children.",
    space: "Can manage townhouse living with enough exercise; gardens help but do not replace walks.",
    climate: "Watch heat, humidity, and hot cars; exercise cooler parts of the day in summer.",
    health: ["Hip and elbow concerns can be relevant.", "Skin, ear, and weight problems are worth discussing with a vet.", "Ask about health screening when buying."],
    cost: "Budget for quality food, grooming tools, ear care, parasite prevention, insurance, and possible joint-related care.",
    adoption: "Golden-type dogs may appear in rescue. If buying, verify breeder transparency, health screening, and written records.",
    questions: ["Can I manage shedding and grooming?", "Will I keep this dog lean?", "Can I provide social training and safe outings?"],
    checklist: ["Brush routine.", "Weight monitoring.", "Ear checks.", "Exercise schedule.", "Health screening questions."],
    faqs: [
      { question: "Are Golden Retrievers easy first dogs?", answer: "They can be suitable for prepared first-time owners, but they still need training, grooming, exercise, and vet planning." },
      { question: "Do Goldens cope with South African heat?", answer: "They can, with shade, water, cool exercise times, and no hot-car exposure." },
      { question: "Are Goldens good with children?", answer: "Many are, but child supervision and training are still essential." },
    ],
  },
  {
    slug: "rottweiler-south-africa",
    name: "Rottweiler",
    seoName: "Rottweiler South Africa",
    summary:
      "Rottweilers are powerful, intelligent dogs that need responsible owners, early socialisation, safe handling, and clear training. They should not be chosen for status or intimidation.",
    context:
      "In South Africa, Rottweilers are often chosen for security expectations. A poorly managed powerful dog creates welfare and public-safety problems, so ownership must be serious, humane, and lawful.",
    bestFor: ["Experienced owners", "Homes committed to training and supervision", "Owners who can manage a strong dog calmly"],
    notIdealFor: ["Status-driven ownership", "Homes with no training budget", "Owners unable to manage public behaviour"],
    size: "Large and powerful; equipment, transport, and vet handling must be planned.",
    exercise: "Moderate to high, with controlled strength-building and mental work.",
    grooming: "Low-maintenance coat with routine brushing.",
    shedding: "Moderate.",
    barking: "Can be alert and territorial if poorly managed.",
    training: "Needs early reward-based training, impulse control, and calm socialisation.",
    family: "Can be family dogs in responsible homes, but supervision and boundaries matter.",
    space: "A secure garden helps; complex living needs careful rule and exercise planning.",
    climate: "Heat-aware exercise matters because large dark-coated dogs can overheat.",
    health: ["Hip, elbow, cruciate, heart, and weight concerns can be relevant.", "Keep growth and weight controlled.", "Ask about health screening."],
    cost: "Large-dog food, training, insurance, secure fencing, and orthopaedic risks can raise costs.",
    adoption: "Consider rescue carefully with behaviour history. If buying, verify health testing, temperament, records, and breeder ethics.",
    questions: ["Can I safely manage this dog in public?", "Am I prepared for training, not just fencing?", "Will my insurance, rental, or body corporate allow this breed?"],
    checklist: ["Secure fencing.", "Trainer budget.", "Public handling plan.", "Insurance/rules checked.", "Health screening questions."],
    faqs: [
      { question: "Are Rottweilers aggressive?", answer: "Breed alone does not determine behaviour. Genetics, health, training, socialisation, management, and owner responsibility all matter." },
      { question: "Are Rottweilers good family dogs?", answer: "They can be in the right home, but they need supervision, training, and responsible handling." },
      { question: "Should I get a Rottweiler for protection?", answer: "Do not choose any dog only for protection. Focus on welfare, safety, training, and legal responsibility." },
    ],
  },
  {
    slug: "dachshund-south-africa",
    name: "Dachshund",
    seoName: "Dachshund South Africa",
    summary:
      "Dachshunds are small, bold dogs with big personalities, but their long backs, barking, digging, and stubborn streak need realistic planning.",
    context:
      "Dachshunds are popular in South African flats, townhouses, and family homes. Their size is convenient, but stairs, jumping from furniture, rough handling, and weight gain can be serious concerns.",
    bestFor: ["Small homes with careful management", "Owners who enjoy character and training puzzles", "Homes willing to protect backs and manage barking"],
    notIdealFor: ["Homes with many stairs and no management", "Families with rough handling from young children", "Owners wanting a silent low-effort dog"],
    size: "Small; easy to house but not fragile in attitude.",
    exercise: "Moderate; short walks and sniffing are important.",
    grooming: "Varies by coat type; smooth is easiest, long and wire coats need more care.",
    shedding: "Low to moderate depending on coat.",
    barking: "Can be vocal and alert.",
    training: "Clever but independent; reward-based consistency helps.",
    family: "Can suit families with gentle handling and back protection.",
    space: "Good for flats or townhouses if barking and stairs are managed.",
    climate: "Short legs are close to hot paving; avoid midday summer walks.",
    health: ["Back problems are a key consideration.", "Dental care and weight control matter.", "Ask about safe handling and jumping prevention."],
    cost: "Small-dog food costs are lower, but spinal care and dental care can be expensive.",
    adoption: "Dachshunds appear in rescue. If buying, verify health, temperament, records, and avoid exaggerated body-shape breeding.",
    questions: ["Can I prevent jumping and stair overuse?", "Can I manage barking in a complex?", "Will children handle the dog gently?"],
    checklist: ["Ramp plan.", "Weight control.", "Dental care.", "Barking plan.", "Gentle handling rules."],
    faqs: [
      { question: "Are Dachshunds good apartment dogs?", answer: "They can be, but barking, stairs, and daily walks need management." },
      { question: "Why are Dachshund backs a concern?", answer: "Their long body shape can make back protection, weight control, and careful handling important." },
      { question: "Do Dachshunds need training?", answer: "Yes. Small dogs still need recall, lead manners, toilet routines, and calm handling." },
    ],
  },
  {
    slug: "yorkshire-terrier-south-africa",
    name: "Yorkshire Terrier",
    seoName: "Yorkshire Terrier South Africa",
    summary:
      "Yorkshire Terriers are tiny, confident companion dogs that can suit small homes, but they need grooming, dental care, barking management, and protection from rough handling.",
    context:
      "Yorkies are popular in South African flats, complexes, and older-owner homes. Their size can make them convenient, but tiny dogs still need training, safe socialisation, and serious vet care.",
    bestFor: ["Small homes", "Owners who enjoy grooming or regular groomer visits", "Adults or families with gentle children"],
    notIdealFor: ["Rough young children without supervision", "Owners wanting no grooming", "Homes where barking will cause conflict"],
    size: "Toy; fragile around falls, big dogs, and rough handling.",
    exercise: "Low to moderate; short daily walks and play.",
    grooming: "High if kept long; regular brushing or professional grooming.",
    shedding: "Low, but coat care is not low effort.",
    barking: "Can be vocal and alert.",
    training: "Needs consistent toilet training and confidence-building.",
    family: "Best with gentle handling; supervise with children and larger dogs.",
    space: "Often suitable for flats and townhouses if barking is managed.",
    climate: "Small bodies can feel cold; avoid heat and hot paving too.",
    health: ["Dental disease, kneecap issues, fragile injuries, and airway concerns can matter.", "Regular dental care is important."],
    cost: "Food costs are low, but grooming, dental care, and small-dog vet care can add up.",
    adoption: "Small-breed rescue is possible. If buying, avoid extreme tiny-size marketing and verify health records.",
    questions: ["Can I afford grooming and dental care?", "Will children handle gently?", "Can I manage barking in a complex?"],
    checklist: ["Grooming plan.", "Dental plan.", "Harness and safe handling.", "Barking routine.", "Cold/heat protection."],
    faqs: [
      { question: "Are Yorkies low maintenance?", answer: "No. They are small, but grooming, dental care, barking, and toilet training need effort." },
      { question: "Can Yorkies live in flats?", answer: "Often yes, if barking, toilet routines, and daily enrichment are handled." },
      { question: "Are Yorkies good with children?", answer: "They can be, but tiny dogs need gentle, supervised handling." },
    ],
  },
  {
    slug: "maltese-poodle-south-africa",
    name: "Maltese Poodle",
    seoName: "Maltese Poodle South Africa",
    summary:
      "Maltese Poodles can be affectionate companion dogs for small homes, but their coats, dental care, separation needs, and barking require real planning.",
    context:
      "Maltese Poodles are common in South African complexes, retirement homes, and family houses. They are often marketed as easy or hypoallergenic, but no dog is maintenance-free.",
    bestFor: ["Companion-focused homes", "Owners prepared for grooming", "Small homes with daily attention"],
    notIdealFor: ["Owners away all day", "People wanting no grooming costs", "Homes with rough handling"],
    size: "Small; easier to transport but physically delicate.",
    exercise: "Low to moderate; daily walks and play still matter.",
    grooming: "High; regular brushing and clipping are usually needed.",
    shedding: "Often low, but matting can become painful.",
    barking: "Can become vocal if anxious or under-stimulated.",
    training: "Reward-based toilet training and alone-time practice are important.",
    family: "Can suit gentle families and older owners.",
    space: "Often good for flats or townhouses with a routine.",
    climate: "Clip style should protect comfort without exposing skin harshly to sun.",
    health: ["Dental care, kneecap concerns, skin issues, and tear staining may be relevant.", "Matting can hide skin problems."],
    cost: "Grooming and dental care may outweigh food savings.",
    adoption: "Many small crossbreeds need homes. If buying, verify health, parent dogs, and avoid vague designer-dog claims.",
    questions: ["Can I maintain the coat?", "Can I teach calm alone time?", "Do I understand this is not a guaranteed hypoallergenic dog?"],
    checklist: ["Grooming schedule.", "Dental plan.", "Alone-time training.", "Mat prevention.", "Vet records."],
    faqs: [
      { question: "Are Maltese Poodles hypoallergenic?", answer: "No dog is guaranteed hypoallergenic. Spend time with similar dogs and discuss allergies realistically." },
      { question: "How often do they need grooming?", answer: "Many need frequent brushing and regular professional clipping, depending on coat." },
      { question: "Are they good apartment dogs?", answer: "Often, but barking, toilet training, and separation comfort still need work." },
    ],
  },
  {
    slug: "border-collie-south-africa",
    name: "Border Collie",
    seoName: "Border Collie South Africa",
    summary:
      "Border Collies are brilliant, intense working dogs. They need daily mental work, exercise, training, and owners who genuinely enjoy active dog life.",
    context:
      "Border Collies can thrive on farms, sport homes, and active households, but they often struggle when bought for looks and left in a suburban yard. In South Africa, heat and working-drive outlets need planning.",
    bestFor: ["Active owners", "Dog sport or training-focused homes", "Rural or suburban homes with daily enrichment"],
    notIdealFor: ["Low-activity homes", "Owners wanting a calm couch-only dog", "Homes with no time for mental work"],
    size: "Medium; athletic and agile.",
    exercise: "Very high physical and mental exercise needs.",
    grooming: "Moderate brushing.",
    shedding: "Moderate.",
    barking: "Can bark, chase, or herd when frustrated.",
    training: "Highly trainable but can become obsessive without balance.",
    family: "Can suit active families; may herd children if unmanaged.",
    space: "Needs activity more than just a garden; flat living is hard without serious commitment.",
    climate: "Avoid intense exercise in heat; use cool morning or evening sessions.",
    health: ["Eye, hip, epilepsy, and medication sensitivity discussions may be relevant.", "Ask about health screening."],
    cost: "Training, sport, enrichment, and potential behaviour help should be budgeted.",
    adoption: "Working-type dogs may need experienced homes. If buying, verify temperament and health, not just intelligence claims.",
    questions: ["Do I enjoy training daily?", "Can I provide off-switch skills?", "Will I prevent chasing cars, bikes, children, or livestock?"],
    checklist: ["Mental enrichment plan.", "Recall training.", "Heat-safe exercise.", "Herding management.", "Health screening questions."],
    faqs: [
      { question: "Are Border Collies good family pets?", answer: "They can be for active training-focused families, but their intensity can overwhelm low-activity homes." },
      { question: "Can a Border Collie live in a flat?", answer: "It is possible only with exceptional exercise, training, and enrichment commitment." },
      { question: "Do Border Collies need a job?", answer: "They need structured mental work, not necessarily livestock, but they do need purpose." },
    ],
  },
  {
    slug: "siberian-husky-south-africa",
    name: "Siberian Husky",
    seoName: "Siberian Husky South Africa",
    summary:
      "Siberian Huskies are beautiful, energetic, heavy-coated dogs that need heat-aware owners, secure fencing, exercise, and realistic expectations about recall and shedding.",
    context:
      "Huskies attract attention in South Africa, but hot summers, small gardens, escape risk, and high exercise needs make them unsuitable for many homes. Looks should never outweigh welfare.",
    bestFor: ["Active owners with secure property", "Cooler-climate or heat-aware homes", "People who accept shedding and independence"],
    notIdealFor: ["Hot yards with little shade", "Owners wanting off-lead reliability", "Homes with weak fencing or small pets"],
    size: "Medium; athletic and strong.",
    exercise: "High, but must be heat-safe.",
    grooming: "Regular brushing; heavy coat blow periods.",
    shedding: "Heavy.",
    barking: "Often vocal with howling rather than classic barking.",
    training: "Independent; reward-based training and secure management are vital.",
    family: "Can be social, but supervise around small pets and children.",
    space: "Needs secure fencing; townhouse living is challenging.",
    climate: "Heat sensitivity is a major South African concern. Avoid midday exercise and provide shade, water, and cool rest.",
    health: ["Eye and hip concerns can be relevant.", "Heat stress risk deserves serious planning."],
    cost: "Grooming tools, secure fencing, training, and cooling management add costs.",
    adoption: "Huskies often appear in rescue when owners underestimate needs. Consider adoption and ask detailed behaviour history.",
    questions: ["Can I keep this dog cool?", "Is my fencing genuinely secure?", "Can I manage shedding and independent behaviour?"],
    checklist: ["Shade and cooling plan.", "Secure fencing.", "Lead exercise plan.", "Grooming tools.", "Small-pet management."],
    faqs: [
      { question: "Are Huskies suitable for South Africa?", answer: "Only for owners who take heat, exercise, grooming, and secure containment very seriously." },
      { question: "Can Huskies be off lead?", answer: "Many have poor recall reliability. Safe enclosed areas and leads are usually important." },
      { question: "Do Huskies shed a lot?", answer: "Yes, they can shed heavily and need regular coat care." },
    ],
  },
  {
    slug: "pit-bull-type-dogs-south-africa",
    name: "Pit Bull Type Dogs",
    seoName: "Pit Bull Type Dogs South Africa",
    summary:
      "Pit Bull type dogs need responsible, informed owners who prioritise safety, welfare, training, legal awareness, and honest assessment over image or protection expectations.",
    context:
      "Pit Bull type dogs are a sensitive topic in South Africa. DogHaven does not promote hype, fear, or status ownership. Any powerful dog requires careful management, humane training, secure containment, and respect for public safety.",
    bestFor: ["Experienced, responsible owners", "Homes committed to management and training", "Owners willing to check rules, insurance, and community safety"],
    notIdealFor: ["Status ownership", "Homes with poor fencing", "Owners wanting a dog for intimidation or fighting culture"],
    size: "Medium and powerful; strength matters more than height.",
    exercise: "Moderate to high, with controlled outlets and calm skills.",
    grooming: "Low coat maintenance.",
    shedding: "Low to moderate.",
    barking: "Varies; arousal and boundary behaviour need management.",
    training: "Requires reward-based training, impulse control, secure handling, and careful dog-dog management.",
    family: "Some are affectionate family dogs, but supervision, management, and honest behaviour history matter.",
    space: "Secure fencing and safe separation systems are important.",
    climate: "Short coats can sunburn or overheat; provide shade and avoid hot exercise.",
    health: ["Skin issues, allergies, cruciate injuries, and weight management can be relevant.", "Behaviour and welfare history matter in rescue."],
    cost: "Budget for training, secure fencing, insurance/rental restrictions, and potential behaviour support.",
    adoption: "Work only with transparent shelters or rescues that assess behaviour honestly. Avoid any source promoting fighting, intimidation, or irresponsible breeding.",
    questions: ["Can I manage a powerful dog safely every day?", "Are local rules, rental terms, and insurance clear?", "Do I have trainer support if behaviour concerns appear?"],
    checklist: ["Secure containment.", "Public safety plan.", "Trainer support.", "Rules checked.", "No status/protection motive."],
    faqs: [
      { question: "Are Pit Bull type dogs safe family pets?", answer: "Individual behaviour varies. Responsible ownership, honest assessment, secure management, and supervision are essential." },
      { question: "Should I get one for protection?", answer: "No. Do not choose a dog for intimidation. Focus on welfare, safety, and companionship." },
      { question: "Can they live with other dogs?", answer: "Some can, some cannot. Careful assessment, management, and professional guidance matter." },
    ],
  },
  {
    slug: "staffordshire-bull-terrier-south-africa",
    name: "Staffordshire Bull Terrier",
    seoName: "Staffordshire Bull Terrier South Africa",
    summary:
      "Staffordshire Bull Terriers are strong, people-focused dogs that need training, exercise, supervision, and responsible handling without macho stereotypes.",
    context:
      "Staffies can be affectionate companions in South African homes, but their strength, enthusiasm, and public perception require calm, responsible ownership and good manners.",
    bestFor: ["Active companion homes", "Owners who enjoy training", "Families with supervision and structure"],
    notIdealFor: ["Owners wanting a low-energy lap dog only", "Homes with no training plan", "People choosing for image"],
    size: "Small-medium but muscular and strong.",
    exercise: "Moderate to high; daily walks and play.",
    grooming: "Low coat maintenance.",
    shedding: "Low to moderate.",
    barking: "Usually manageable but excitement can be noisy.",
    training: "Needs impulse control, lead manners, and polite greetings.",
    family: "Can be affectionate with families; supervise children and dog interactions.",
    space: "Can suit townhouses if exercised and managed.",
    climate: "Short coat needs sun and heat awareness.",
    health: ["Skin issues, allergies, knees, and weight can matter.", "Ask about health screening."],
    cost: "Budget for training, secure equipment, insurance, and skin or orthopaedic care if needed.",
    adoption: "Staffie-type dogs may appear in rescue. Ask for honest dog-dog, child, and handling history.",
    questions: ["Can I manage strength and excitement?", "Will I train polite public behaviour?", "Do I understand local rules and perceptions?"],
    checklist: ["Lead manners.", "Socialisation plan.", "Secure harness.", "Skin checks.", "No image-driven motive."],
    faqs: [
      { question: "Are Staffies good with children?", answer: "Some are, but all dog-child interactions need supervision and respectful handling." },
      { question: "Do Staffies need much exercise?", answer: "Yes, they need daily activity and mental engagement." },
      { question: "Are Staffies aggressive?", answer: "Breed alone does not decide behaviour. Training, genetics, health, socialisation, and management matter." },
    ],
  },
  {
    slug: "chihuahua-south-africa",
    name: "Chihuahua",
    seoName: "Chihuahua South Africa",
    summary:
      "Chihuahuas are tiny, alert companion dogs that can suit small homes, but they need gentle handling, dental care, warmth, and proper training.",
    context:
      "Chihuahuas are convenient for flats and older owners in South Africa, but their tiny size can lead people to skip training or allow unsafe handling. Small does not mean simple.",
    bestFor: ["Small homes", "Gentle adult households", "Owners wanting a portable companion"],
    notIdealFor: ["Rough play", "Very young children without close supervision", "Owners who ignore barking or dental care"],
    size: "Toy; physically fragile.",
    exercise: "Low to moderate, with short walks and play.",
    grooming: "Low for smooth coats; moderate for long coats.",
    shedding: "Low to moderate.",
    barking: "Can be alert and vocal.",
    training: "Needs toilet training, confidence building, and calm socialisation.",
    family: "Best with gentle handling and supervision.",
    space: "Often suitable for flats and townhouses.",
    climate: "Can feel cold and also overheat; protect from extremes.",
    health: ["Dental disease, kneecaps, tracheal issues, and injury risk can matter.", "Use harnesses carefully and avoid rough handling."],
    cost: "Food costs are small, but dental care, injury care, and small-dog vet needs can be significant.",
    adoption: "Small dogs appear in rescue. If buying, avoid extreme tiny-size marketing and verify health records.",
    questions: ["Can everyone handle gently?", "Can I manage barking?", "Will I budget for dental care?"],
    checklist: ["Harness fit.", "Dental care.", "Warm safe bed.", "Child rules.", "Barking plan."],
    faqs: [
      { question: "Are Chihuahuas good apartment dogs?", answer: "Often yes, if barking, toilet routines, and confidence are managed." },
      { question: "Are Chihuahuas good with children?", answer: "They can be fragile, so gentle supervised handling is essential." },
      { question: "Do Chihuahuas need walks?", answer: "Yes. Small dogs still need safe movement, sniffing, and enrichment." },
    ],
  },
  {
    slug: "pomeranian-south-africa",
    name: "Pomeranian",
    seoName: "Pomeranian South Africa",
    summary:
      "Pomeranians are bright, fluffy companion dogs that need coat care, barking management, dental care, and heat-aware handling in South Africa.",
    context:
      "Pomeranians can suit small homes, but their coat, confidence, and tiny structure need more work than many owners expect. Summer grooming choices should protect comfort without exposing skin harshly.",
    bestFor: ["Small homes with grooming commitment", "Owners who enjoy lively companion dogs", "Gentle households"],
    notIdealFor: ["Rough young children", "Owners wanting no grooming", "Hot outdoor-only living"],
    size: "Toy; delicate but energetic.",
    exercise: "Low to moderate; short walks and play.",
    grooming: "High; regular brushing and coat maintenance.",
    shedding: "Moderate to heavy for size.",
    barking: "Can be vocal and alert.",
    training: "Needs confidence, toilet training, and barking boundaries.",
    family: "Good in gentle homes; supervise with children and big dogs.",
    space: "Often suitable for flats if barking is managed.",
    climate: "Heat sensitivity matters because of coat and size; avoid hot walks and poor ventilation.",
    health: ["Dental disease, kneecaps, tracheal issues, coat and skin problems can matter.", "Weight and grooming are important."],
    cost: "Grooming, dental care, and small-dog vet care can add up.",
    adoption: "Rescue is possible. If buying, avoid extreme tiny-size claims and verify records.",
    questions: ["Can I brush regularly?", "Can I prevent heat stress?", "Will I train barking kindly?"],
    checklist: ["Grooming plan.", "Heat plan.", "Dental plan.", "Harness safety.", "Barking routine."],
    faqs: [
      { question: "Should Pomeranians be shaved in summer?", answer: "Ask a groomer and vet. Coat management should protect comfort without creating sunburn or coat problems." },
      { question: "Do Pomeranians bark a lot?", answer: "They can be vocal. Early training and enrichment help." },
      { question: "Are Pomeranians fragile?", answer: "They are small and can be injured by falls, rough play, or larger dogs." },
    ],
  },
  {
    slug: "shih-tzu-south-africa",
    name: "Shih Tzu",
    seoName: "Shih Tzu South Africa",
    summary:
      "Shih Tzus are companion dogs suited to many small homes, but their face, coat, eyes, heat sensitivity, and grooming needs require commitment.",
    context:
      "Shih Tzus are popular in South African flats and family homes. Their short faces and long coats mean owners must take heat, breathing, eye care, and grooming seriously.",
    bestFor: ["Companion homes", "Owners prepared for grooming", "Small homes with indoor living"],
    notIdealFor: ["Outdoor-only homes", "Owners wanting no grooming", "Very hot environments without cooling"],
    size: "Small and sturdy.",
    exercise: "Low to moderate; short walks in cool times.",
    grooming: "High; clipping or daily coat care is common.",
    shedding: "Low to moderate but matting risk is high.",
    barking: "Usually moderate but varies.",
    training: "Needs patient toilet training and handling practice.",
    family: "Can suit gentle families and older owners.",
    space: "Often good for flats and townhouses.",
    climate: "Heat sensitivity is important because of face and coat; avoid hot exercise.",
    health: ["Eye problems, breathing concerns, dental disease, skin folds, and ears can matter.", "Regular grooming and vet checks help."],
    cost: "Grooming, eye/ear care, dental care, and insurance should be budgeted.",
    adoption: "Small companion dogs appear in rescue. If buying, avoid exaggerated flat-face breeding and verify health.",
    questions: ["Can I afford grooming?", "Can I keep the dog cool?", "Am I ready for eye and face care?"],
    checklist: ["Grooming schedule.", "Heat plan.", "Eye checks.", "Dental care.", "Indoor sleep."],
    faqs: [
      { question: "Do Shih Tzus cope with heat?", answer: "They can be heat sensitive. Use cool exercise times, shade, water, and avoid hot cars." },
      { question: "Are Shih Tzus low shedding?", answer: "Many shed less visibly, but coat maintenance is still high." },
      { question: "Are Shih Tzus good apartment dogs?", answer: "Often yes, with grooming, toilet routine, and heat management." },
    ],
  },
  {
    slug: "beagle-south-africa",
    name: "Beagle",
    seoName: "Beagle South Africa",
    summary:
      "Beagles are cheerful scent hounds that need secure fencing, lead walking, food control, and patient training. Their nose often leads their decisions.",
    context:
      "Beagles can suit active South African families, but open gates, braai leftovers, bins, and unfenced rural spaces can create escape and scavenging risks.",
    bestFor: ["Active families", "Owners who enjoy scent games", "Secure homes with patient training"],
    notIdealFor: ["Off-lead expectations", "Weak fencing", "Homes with food left accessible"],
    size: "Small-medium and sturdy.",
    exercise: "Moderate to high; sniffing walks are valuable.",
    grooming: "Low coat care.",
    shedding: "Moderate.",
    barking: "Can bay or vocalise.",
    training: "Food-motivated but independent; recall can be challenging.",
    family: "Often social with families, with supervision.",
    space: "Can manage townhouses if exercise and noise are managed.",
    climate: "Generally adaptable, but avoid heat and watch hot paving.",
    health: ["Weight gain, ears, joints, and back concerns can matter.", "Food control is important."],
    cost: "Food theft, weight management, secure fencing, and ear care can add costs.",
    adoption: "Beagles and mixes may need rehoming. If buying, verify records and avoid impulse puppy choices.",
    questions: ["Can I keep food and bins secure?", "Is my fence scent-hound safe?", "Can I train recall realistically?"],
    checklist: ["Secure fence.", "Lead walks.", "Food control.", "Ear checks.", "Recall management."],
    faqs: [
      { question: "Can Beagles be off lead?", answer: "Many follow scent strongly. Safe enclosed areas and long-line training are often more realistic." },
      { question: "Do Beagles bark a lot?", answer: "They can be vocal, including baying. Consider neighbours and training." },
      { question: "Are Beagles good family dogs?", answer: "Often, with exercise, food management, and supervision." },
    ],
  },
  {
    slug: "boxer-south-africa",
    name: "Boxer",
    seoName: "Boxer South Africa",
    summary:
      "Boxers are playful, strong, people-focused dogs that need training, exercise, heat caution, and owners ready for enthusiastic behaviour.",
    context:
      "Boxers can fit active South African family homes, but their short faces, energy, and strength mean hot weather, jumping, and public manners need planning.",
    bestFor: ["Active families", "Owners who enjoy playful dogs", "Homes with training routines"],
    notIdealFor: ["Heat-heavy outdoor-only living", "Owners wanting a calm low-energy dog", "Homes with no training consistency"],
    size: "Medium-large and strong.",
    exercise: "Moderate to high, with heat limits.",
    grooming: "Low coat care.",
    shedding: "Moderate.",
    barking: "Moderate; excitement and alerting vary.",
    training: "Needs impulse control, polite greetings, and lead manners.",
    family: "Often family-oriented but can be bouncy around small children.",
    space: "Garden helps, but training and walks matter more.",
    climate: "Heat sensitivity can be important; avoid hot exercise and cars.",
    health: ["Heart, cancer, airway, skin, and joint concerns can be relevant.", "Discuss screening and insurance."],
    cost: "Food, training, insurance, and potential specialist vet care should be planned.",
    adoption: "Boxer rescue may be possible. If buying, ask about health screening and temperament.",
    questions: ["Can I manage jumping and excitement?", "Can I protect from heat?", "Can I budget for insurance?"],
    checklist: ["Heat plan.", "Training plan.", "Jumping rules.", "Health screening questions.", "Insurance review."],
    faqs: [
      { question: "Are Boxers good with children?", answer: "Many are affectionate, but their strength and bounce require supervision and training." },
      { question: "Do Boxers overheat easily?", answer: "They can be heat sensitive, especially during hard exercise or hot weather." },
      { question: "Are Boxers easy to train?", answer: "They can learn well with reward-based consistency, but enthusiasm needs channeling." },
    ],
  },
  {
    slug: "english-bulldog-south-africa",
    name: "English Bulldog",
    seoName: "English Bulldog South Africa",
    summary:
      "English Bulldogs need owners who take heat, breathing, skin folds, weight, vet costs, and ethical breeding concerns very seriously.",
    context:
      "Bulldogs can struggle in South African heat, especially in cars, on hot paving, or during summer exercise. Their appearance should never be prioritised over breathing, mobility, and welfare.",
    bestFor: ["Indoor homes with cooling", "Owners prepared for vet and skin care", "Low-exercise companion homes"],
    notIdealFor: ["Outdoor-only living", "Hot active lifestyles", "Owners seeking a cheap low-care dog"],
    size: "Medium but heavy and compact.",
    exercise: "Low to moderate, heat-limited and gentle.",
    grooming: "Coat is easy, but skin folds need care.",
    shedding: "Moderate.",
    barking: "Usually not excessive but can snore and snuffle.",
    training: "Needs patient basics and weight control.",
    family: "Can be affectionate, but supervise and protect from heat stress.",
    space: "Can suit flats if cooling and vet care are planned.",
    climate: "Heat sensitivity is a major concern. Avoid midday activity and hot cars completely.",
    health: ["Breathing, skin folds, eyes, joints, spine, and weight are major considerations.", "Ask vets about brachycephalic welfare and insurance."],
    cost: "Potentially high vet, insurance, skin, airway, and specialist costs.",
    adoption: "Consider rescue and health needs honestly. If buying, be extremely careful about breeder ethics and health-focused selection.",
    questions: ["Can I afford significant vet costs?", "Can I keep this dog cool?", "Am I choosing welfare over exaggerated appearance?"],
    checklist: ["Cooling plan.", "Vet budget.", "Insurance review.", "Skin-fold care.", "Ethical breeder questions."],
    faqs: [
      { question: "Are Bulldogs suitable for South African heat?", answer: "Only with serious heat management. Many are heat sensitive and must avoid hot exercise and cars." },
      { question: "Are Bulldogs expensive to own?", answer: "They can be, because health, skin, airway, and specialist care may be significant." },
      { question: "Should I choose the flattest-faced puppy?", answer: "No. Prioritise health, breathing, movement, and welfare over extreme appearance." },
    ],
  },
  {
    slug: "cocker-spaniel-south-africa",
    name: "Cocker Spaniel",
    seoName: "Cocker Spaniel South Africa",
    summary:
      "Cocker Spaniels are affectionate, active dogs that need grooming, ear care, exercise, training, and weight management.",
    context:
      "Cocker Spaniels can suit South African families and active homes, but beach swims, grassy walks, and long ears mean owners should plan grooming and ear checks.",
    bestFor: ["Active companion homes", "Owners prepared for grooming", "Families wanting a medium affectionate dog"],
    notIdealFor: ["No grooming budget", "Homes with no exercise routine", "Owners who ignore ear care"],
    size: "Medium-small.",
    exercise: "Moderate; walks, sniffing, and play.",
    grooming: "Moderate to high, especially ears, feathering, and feet.",
    shedding: "Moderate.",
    barking: "Varies; can bark when bored or excited.",
    training: "Responsive to kind training and food rewards.",
    family: "Often affectionate with families, with respectful handling.",
    space: "Can suit townhouses if walked and groomed.",
    climate: "Heat-aware walks and drying after swimming help.",
    health: ["Ear infections, skin issues, eyes, weight, and joint concerns can matter.", "Regular ear checks are important."],
    cost: "Grooming and ear care can add to routine costs.",
    adoption: "Spaniels may appear in rescue. If buying, verify temperament, health screening, and coat-care expectations.",
    questions: ["Can I maintain ears and coat?", "Will I manage weight?", "Can I offer daily activity?"],
    checklist: ["Ear checks.", "Grooming schedule.", "Weight control.", "Beach drying plan.", "Training routine."],
    faqs: [
      { question: "Do Cocker Spaniels need grooming?", answer: "Yes, many need regular brushing, trimming, and ear care." },
      { question: "Are Cockers good family dogs?", answer: "Many are, with exercise, grooming, and respectful children." },
      { question: "Why are ears a concern?", answer: "Long ears can trap moisture and debris, especially after swimming or grassy walks." },
    ],
  },
  {
    slug: "doberman-south-africa",
    name: "Doberman",
    seoName: "Doberman South Africa",
    summary:
      "Dobermans are athletic, sensitive, intelligent dogs that need responsible training, companionship, health screening, and owners who avoid protection-dog hype.",
    context:
      "Dobermans are sometimes chosen in South Africa for security image, but they need close human involvement, training, and careful health planning. Isolation in a yard is poor ownership.",
    bestFor: ["Experienced active owners", "Training-focused homes", "Owners wanting a companion first"],
    notIdealFor: ["Outdoor-only security expectations", "Owners away all day", "Homes with no health or training budget"],
    size: "Large, athletic, and strong.",
    exercise: "High; daily exercise and mental work.",
    grooming: "Low coat care.",
    shedding: "Low to moderate.",
    barking: "Can be alert; management matters.",
    training: "Highly trainable, sensitive, and needs humane consistency.",
    family: "Can bond closely with families; supervise and socialise well.",
    space: "Needs space or serious daily exercise; townhouse living is demanding.",
    climate: "Short coat needs sun, cold, and heat awareness.",
    health: ["Heart disease screening, hips, neck/spine, and bleeding disorders can be relevant.", "Discuss insurance and screening with a vet."],
    cost: "Training, food, insurance, and cardiac or specialist care can be significant.",
    adoption: "Rescue may be possible. If buying, verify health screening, temperament, records, and breeder ethics.",
    questions: ["Can I provide companionship and training?", "Can I afford health screening and insurance?", "Am I avoiding security-image motives?"],
    checklist: ["Training plan.", "Health screening questions.", "Insurance review.", "Exercise routine.", "Secure fencing."],
    faqs: [
      { question: "Are Dobermans good guard dogs?", answer: "Do not choose a dog only for guarding. Dobermans need companionship, training, welfare, and safe handling." },
      { question: "Can Dobermans live outside?", answer: "They are people-focused and short-coated. Outdoor-only living is not a good plan." },
      { question: "Are Dobermans expensive?", answer: "They can be, especially when training, food, insurance, and health screening are included." },
    ],
  },
  {
    slug: "poodle-south-africa",
    name: "Poodle",
    seoName: "Poodle South Africa",
    summary:
      "Poodles are intelligent, active dogs with low-shedding coats, but they need grooming, training, enrichment, and careful size-specific planning.",
    context:
      "Poodles in South Africa range from toy to standard sizes, so ownership can look very different. Do not choose only for coat type; grooming and mental stimulation are non-negotiable.",
    bestFor: ["Owners wanting a trainable companion", "Homes prepared for grooming", "Families choosing size carefully"],
    notIdealFor: ["No grooming budget", "Owners wanting a low-effort decorative dog", "Homes that ignore mental exercise"],
    size: "Toy, miniature, and standard sizes vary widely.",
    exercise: "Moderate to high depending on size and temperament.",
    grooming: "High; regular clipping and brushing are required.",
    shedding: "Low visible shedding, but matting risk is high.",
    barking: "Can be vocal if bored or anxious.",
    training: "Very trainable and benefits from mental work.",
    family: "Can suit many homes if size, handling, and training fit.",
    space: "Toy and miniature sizes suit smaller homes; standards need more space and exercise.",
    climate: "Clip and coat care should balance heat comfort and skin protection.",
    health: ["Dental, skin, eye, joint, and size-specific concerns can matter.", "Ask about health screening for the size variety."],
    cost: "Grooming is a major recurring cost; standard Poodles also add large-dog food and vet costs.",
    adoption: "Poodles and Poodle crosses appear in rescue. If buying, verify health, temperament, and grooming expectations.",
    questions: ["Which size truly suits my home?", "Can I afford grooming every year?", "Will I provide mental enrichment?"],
    checklist: ["Grooming budget.", "Size choice.", "Training games.", "Dental care.", "Health screening questions."],
    faqs: [
      { question: "Are Poodles hypoallergenic?", answer: "No dog is guaranteed hypoallergenic, though some people react less to low-shedding coats." },
      { question: "Do Poodles need much grooming?", answer: "Yes, coat care is a major responsibility." },
      { question: "Are Poodles smart?", answer: "Yes, and that intelligence needs training, enrichment, and routine." },
    ],
  },
  {
    slug: "mixed-breed-dogs-south-africa",
    name: "Mixed Breed Dogs",
    seoName: "Mixed Breed Dogs South Africa",
    summary:
      "Mixed breed dogs can make wonderful companions, but owners should still assess size, temperament, health, energy, grooming, and lifestyle fit instead of assuming mixed always means easy.",
    context:
      "South African shelters and rescues care for many mixed breed dogs and puppies. A mixed breed can be a brilliant adoption choice when the match is based on behaviour, adult size estimate, energy, household fit, and honest questions.",
    bestFor: ["Adoption-minded owners", "Families focused on individual temperament", "People open to unique dogs"],
    notIdealFor: ["Owners needing guaranteed adult size or coat", "People unwilling to assess behaviour", "Impulse adoption without planning"],
    size: "Varies from tiny to giant; estimate adult size carefully for puppies.",
    exercise: "Varies by build, age, and temperament.",
    grooming: "Depends on coat type.",
    shedding: "Varies.",
    barking: "Varies with genetics, learning, environment, and management.",
    training: "All mixed breeds need humane training and socialisation.",
    family: "Can be excellent family dogs if the individual dog fits the home.",
    space: "Choose by expected size and energy, not label.",
    climate: "Coat, nose length, age, and health determine heat tolerance.",
    health: ["Mixed breeds can still have inherited or acquired health issues.", "Vet checks, vaccines, parasite prevention, and sterilisation planning matter."],
    cost: "Costs depend on adult size, coat, health, food, training, and insurance.",
    adoption: "Shelters and rescues are often the best starting point. Ask for behaviour notes, health records, sterilisation policy, and meet-and-greets.",
    questions: ["What adult size is likely?", "What behaviour has been observed?", "Does this dog fit my children, pets, home, and budget?"],
    checklist: ["Meet the dog.", "Ask behaviour history.", "Check health records.", "Estimate adult size.", "Plan training and costs."],
    faqs: [
      { question: "Are mixed breed dogs healthier?", answer: "Not automatically. They can still have health issues, so vet care and records matter." },
      { question: "Are mixed breed puppies easier?", answer: "No puppy is automatically easy. Adult size, energy, training, and socialisation still matter." },
      { question: "Should I adopt a mixed breed?", answer: "Adoption can be a wonderful choice if the individual dog suits your home and you verify records and support." },
    ],
  },
];

function toGuide(breed: BreedSpec): GuideContent {
  return {
    slug: breed.slug,
    path: `/breeds/${breed.slug}`,
    hubTitle: "Breed Guides",
    hubPath: "/breeds",
    title: `${breed.name} in South Africa`,
    seoTitle: `${breed.seoName} | Practical Breed Guide`,
    description: `A South Africa-specific ${breed.name} guide covering temperament, exercise, grooming, training, family fit, health, costs, adoption, and responsible breeder questions.`,
    intro: `${breed.summary} This guide helps South African owners think beyond looks, status, and trends before choosing a dog.`,
    updated: reviewed,
    quickFacts: [
      `Short summary: ${breed.summary}`,
      "Breed can shape likely needs, but individual temperament, health, training, socialisation, and environment matter.",
      "Do not choose any dog only for protection, status, fashion, or online popularity.",
      "Adoption and responsible breeder verification should both involve records, questions, and careful matching.",
    ],
    sections: [
      {
        heading: "South African context",
        body: [
          breed.context,
          "Think about your actual home: apartment, townhouse, estate, suburban garden, farm, children, other pets, work hours, walking areas, heat, ticks, grooming access, training options, and vet budget.",
        ],
      },
      {
        heading: "Best suited for and not ideal for",
        body: [
          "No breed is perfect for every household. Suitability depends on matching needs to daily reality.",
        ],
        table: {
          headers: ["Best suited for", "Not ideal for"],
          rows: breed.bestFor.map((item, index) => [item, breed.notIdealFor[index] ?? "Homes that cannot meet the breed's daily needs."]),
        },
      },
      {
        heading: "Care profile",
        body: [
          "Use this profile as a practical starting point. Individual dogs can sit outside the average, especially rescues, seniors, and dogs from poor breeding or early socialisation.",
        ],
        table: {
          headers: ["Area", "What South African owners should plan for"],
          rows: [
            ["Size", breed.size],
            ["Exercise", breed.exercise],
            ["Grooming", breed.grooming],
            ["Shedding", breed.shedding],
            ["Barking", breed.barking],
            ["Training", breed.training],
            ["Family suitability", breed.family],
            ["Space needs", breed.space],
            ["Climate considerations", breed.climate],
          ],
        },
      },
      {
        heading: "Health, cost, and insurance considerations",
        body: [
          "This section is educational and does not diagnose dogs. Ask a veterinarian about health risks, screening, body condition, vaccination, parasite prevention, and insurance decisions.",
          breed.cost,
        ],
        bullets: breed.health,
      },
      {
        heading: "Adoption and responsible breeder guidance",
        body: [
          breed.adoption,
          "DogHaven does not publish fake breeder listings or verified badges. Verify organisations and breeders directly, ask for written records, meet dogs safely where possible, and walk away from pressure selling.",
        ],
        checklist: [
          "Ask for vaccination, deworming, microchip, and veterinary records.",
          "Ask about temperament, socialisation, parent dogs, and health screening where relevant.",
          "Avoid sellers who refuse questions, rush payment, or offer delivery without proper verification.",
          "Consider adult rescue dogs if a puppy's needs, cost, or uncertainty does not suit your home.",
        ],
      },
      {
        heading: "Questions to ask before choosing this breed",
        body: [
          "Answer these honestly before you bring a dog home. The right match protects both the dog and your household.",
        ],
        checklist: breed.questions,
      },
      {
        heading: "Practical readiness checklist",
        body: [
          "Use this checklist before adopting, buying, or joining a waiting list.",
        ],
        checklist: breed.checklist,
      },
    ],
    faqs: breed.faqs,
    related: [
      ...commonRelated,
      { title: "Puppy Care", description: "First-year puppy setup and safety.", href: "/puppy" },
      { title: "Dog Grooming", description: "Coat, nails, ears, and grooming choices.", href: "/grooming/dog-grooming-south-africa" },
      { title: "Pet Insurance", description: "Understand cover, exclusions, and waiting periods.", href: "/insurance/pet-insurance-for-dogs-south-africa" },
      { title: "Dog-Friendly Places", description: "Plan safe public outings.", href: "/dog-friendly/dog-friendly-places-south-africa" },
    ],
    sources: breedSources,
  };
}

export const phase12BreedCards: CardLink[] = breeds.map((breed) => ({
  title: `${breed.name} Guide`,
  description: `South Africa-specific guidance for ${breed.name} owners covering fit, care, training, health, costs, and responsible choice.`,
  href: `/breeds/${breed.slug}`,
}));

export const phase12GuidePages: GuideContent[] = breeds.map(toGuide);

export const phase12AdoptionCards: CardLink[] = [
  {
    title: "Mixed Breed Dogs",
    description: "How to choose mixed breed dogs by temperament, size, energy, and home fit.",
    href: "/breeds/mixed-breed-dogs-south-africa",
  },
  {
    title: "Breed Guides",
    description: "Compare breed needs before adopting or buying.",
    href: "/breeds",
  },
];

export const phase12TrainingCards: CardLink[] = [
  {
    title: "German Shepherd Training Fit",
    description: "Training, exercise, and responsible handling for a large working breed.",
    href: "/breeds/german-shepherd-south-africa",
  },
  {
    title: "Border Collie Activity Needs",
    description: "Mental work, exercise, and off-switch planning for high-energy dogs.",
    href: "/breeds/border-collie-south-africa",
  },
  {
    title: "Pit Bull Type Dog Responsibility",
    description: "Safety, management, and humane training considerations.",
    href: "/breeds/pit-bull-type-dogs-south-africa",
  },
];

export const phase12CostCards: CardLink[] = [
  {
    title: "Large Breed Cost Planning",
    description: "Use breed guides to plan food, training, grooming, insurance, and vet costs.",
    href: "/breeds/german-shepherd-south-africa",
  },
  {
    title: "Small Breed Cost Planning",
    description: "Dental care, grooming, barking, and fragility considerations for small dogs.",
    href: "/breeds/yorkshire-terrier-south-africa",
  },
];

export const phase12PuppyCards: CardLink[] = [
  {
    title: "Mixed Breed Puppies",
    description: "Think about adult size, temperament, energy, and adoption records.",
    href: "/breeds/mixed-breed-dogs-south-africa",
  },
  {
    title: "Best Breeds for South African Homes",
    description: "Choose by fit, care needs, climate, cost, and training reality.",
    href: "/breeds/best-dog-breeds-for-south-african-homes",
  },
];

export function getPhase12Guide(slug: string) {
  return phase12GuidePages.find((guide) => guide.slug === slug);
}

export function getPhase12GuidesByHub(hubPath: string) {
  return phase12GuidePages.filter((guide) => guide.hubPath === hubPath);
}
