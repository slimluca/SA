import type { CardLink, GuideContent, HubContent } from "@/lib/content";

const reviewed = "2026-05-23";
const nameSources = [
  {
    label: "DogHaven editorial policy",
    href: "/editorial-policy",
    note: "DogHaven's public standards for original, useful, South Africa-focused dog-owner content.",
  },
];

type NameTopic = {
  slug: string;
  title: string;
  seoTitle: string;
  description: string;
  intro: string;
  context: string[];
  groups: {
    label: string;
    names: string[];
    note: string;
  }[];
  related: CardLink[];
  faqs: GuideContent["faqs"];
};

const commonRelated: CardLink[] = [
  { title: "Dog Name Generator", description: "Generate cute, strong and South African-inspired ideas.", href: "/tools/dog-name-generator" },
  { title: "Puppy Name Shortlist", description: "Build a short local shortlist in your browser.", href: "/tools/puppy-name-shortlist" },
  { title: "Choosing the Right Dog Breed", description: "Pick a dog by lifestyle fit before naming the puppy.", href: "/breeds/choosing-the-right-dog-breed-south-africa" },
  { title: "New Puppy Checklist", description: "Prepare food, records, vet care and safe transport.", href: "/tools/new-puppy-home-checklist" },
  { title: "Adoption Safety", description: "Avoid pressure payments and suspicious adverts.", href: "/adoption/puppy-scam-checklist-south-africa" },
];

const namingChecklist = [
  "Say the name out loud in a happy voice and a calm recall voice.",
  "Choose something easy for the whole household to pronounce.",
  "Avoid names that sound too close to everyday cues such as sit, stay, no, down, come or heel.",
  "Check that the name still feels kind when calling your dog in public.",
  "Try the name for a few days before printing tags or personalising gear.",
];

const avoidConfusion = [
  "Keep the name short or easy to shorten for training.",
  "Avoid joke names that may embarrass the dog owner at the vet, park, groomer or training class.",
  "If you adopt an adult dog, consider keeping the existing name if the dog responds happily to it.",
  "Use the name warmly before cues, rather than repeating it when frustrated.",
];

const topics: NameTopic[] = [
  {
    slug: "dog-names-south-africa",
    title: "Dog Names in South Africa",
    seoTitle: "Dog Names South Africa | Cute, Strong and Local Ideas",
    description:
      "South African dog name ideas with cute, strong, food, nature, beach, safari and local-inspired categories, plus practical naming tips.",
    intro:
      "A good dog name should be easy to call, kind to use, distinct from cues and comfortable at the vet, groomer, beach, park or training class.",
    context: [
      "South African dog owners often choose names inspired by food, weather, beaches, rugby energy, fynbos, family humour and local languages.",
      "This guide is inspiration only. For language-inspired names, choose respectfully and avoid using words you do not understand in a way that could feel insensitive.",
    ],
    groups: [
      { label: "Cute everyday names", names: ["Milo", "Lulu", "Bean", "Nunu", "Biscuit", "Pip", "Teddy", "Mochi"], note: "Easy, warm names that suit puppies and adult rescues." },
      { label: "South African-inspired names", names: ["Rooibos", "Fynbos", "Kudu", "Karoo", "Dune", "Aloe", "Mielie", "Chutney"], note: "Local flavour without needing a complicated explanation." },
      { label: "Strong but friendly names", names: ["Ranger", "Nova", "Storm", "Atlas", "Zara", "Koda", "Diesel", "Sable"], note: "Good for confident dogs, but still easy to call kindly." },
    ],
    related: commonRelated,
    faqs: [
      { question: "What makes a good dog name?", answer: "A good dog name is short, clear, easy to say warmly, and different from common training cues." },
      { question: "Should I rename an adopted dog?", answer: "You can, but if the dog already responds happily to a name, keeping it may make the move easier." },
      { question: "Are South African-inspired dog names okay?", answer: "Yes, when chosen respectfully and without mocking languages, people, places or cultures." },
    ],
  },
  {
    slug: "female-dog-names-south-africa",
    title: "Female Dog Names in South Africa",
    seoTitle: "Female Dog Names South Africa | Pretty, Cute and Strong Ideas",
    description:
      "Female dog name ideas for South African puppies and rescue dogs, with cute, elegant, strong and local-inspired groups plus naming advice.",
    intro:
      "Female dog names can be sweet, bold, playful or elegant. The practical test is whether you can call it clearly during training and everyday life.",
    context: [
      "Think about the adult dog, not only the puppy stage. A name should still suit her at the vet, on walks, at daycare and during training.",
      "Short two-syllable names often feel easy to call, but any name can work if the household uses it consistently.",
    ],
    groups: [
      { label: "Sweet names", names: ["Luna", "Lulu", "Bella", "Nala", "Mila", "Rosie", "Poppy", "Cleo"], note: "Gentle names that are easy for families to say." },
      { label: "Strong names", names: ["Zara", "Nova", "Storm", "Sable", "Roxy", "Skye", "Kira", "Echo"], note: "Bold without sounding harsh in public." },
      { label: "Local-inspired names", names: ["Aloe", "Karoo", "Daisy", "Fynbos", "Marula", "Sunny", "Dune", "Rooibos"], note: "Friendly South African flavour for dogs with big personality." },
    ],
    related: [
      { title: "Puppy Names", description: "Short, cute names for new puppies.", href: "/dog-names/puppy-names-south-africa" },
      { title: "Cute Dog Names", description: "Soft, cheerful names for gentle dogs.", href: "/dog-names/cute-dog-names" },
      ...commonRelated,
    ],
    faqs: [
      { question: "Are female dog names only soft names?", answer: "No. Choose a name that suits the dog and your voice, whether it is sweet, strong, playful or calm." },
      { question: "Can I use a human name for my dog?", answer: "Yes, as long as it feels respectful and is easy to use consistently." },
      { question: "Should a rescue dog's name be changed immediately?", answer: "Give her time. If the old name is comforting, keep it or transition gently." },
    ],
  },
  {
    slug: "male-dog-names-south-africa",
    title: "Male Dog Names in South Africa",
    seoTitle: "Male Dog Names South Africa | Strong, Cute and Local Ideas",
    description:
      "Male dog name ideas for South African puppies and adopted dogs, grouped by friendly, strong, outdoor and local-inspired styles.",
    intro:
      "A male dog name should be easy to say with warmth. Avoid choosing a name only because it sounds tough; your dog will hear it every day.",
    context: [
      "South African homes may need names that work at the gate, in training class, at the beach, in a complex and at the vet.",
      "If the dog is large or security-aware, choose a name that still encourages calm, responsible handling.",
    ],
    groups: [
      { label: "Friendly names", names: ["Milo", "Buddy", "Finn", "Ollie", "Toby", "Max", "Benji", "Archie"], note: "Simple names that suit many family dogs." },
      { label: "Strong names", names: ["Atlas", "Ranger", "Diesel", "Koda", "Storm", "Boulder", "Rex", "Hunter"], note: "Use kindly; a strong name does not replace training." },
      { label: "Outdoor names", names: ["Dune", "River", "Kudu", "Karoo", "Scout", "Rooibos", "Thorn", "Sable"], note: "Good for hiking, beach and farm-loving families." },
    ],
    related: [
      { title: "Strong Dog Names", description: "Bold names with responsible naming notes.", href: "/dog-names/strong-dog-names" },
      { title: "Big Dog Names", description: "Names for large dogs without guard-dog hype.", href: "/dog-names/big-dog-names" },
      ...commonRelated,
    ],
    faqs: [
      { question: "Should a male dog's name sound tough?", answer: "It does not need to. Calm, clear names are often better for everyday handling and training." },
      { question: "Can a small male dog have a big name?", answer: "Absolutely. Humour is fine when the name is kind and easy to call." },
      { question: "What names should I avoid?", answer: "Avoid names that sound like cues, insults, or words you would feel awkward shouting in public." },
    ],
  },
  {
    slug: "puppy-names-south-africa",
    title: "Puppy Names in South Africa",
    seoTitle: "Puppy Names South Africa | Cute Names and Naming Tips",
    description:
      "Puppy name ideas for South African homes, with cute, tiny, playful and training-friendly options plus a practical naming checklist.",
    intro:
      "Puppies grow fast, so choose a name that works for the adult dog too. Cute is lovely, but clear and kind matters more.",
    context: [
      "A puppy name becomes part of toilet training, recall, vet visits, puppy classes and safe socialisation.",
      "If you are still deciding between names, test them out loud during happy moments rather than when the puppy is overtired or biting.",
    ],
    groups: [
      { label: "Tiny puppy names", names: ["Pip", "Bean", "Peanut", "Nunu", "Mochi", "Bibi", "Buttons", "Sprout"], note: "Cute names that are easy for children to say." },
      { label: "Playful names", names: ["Zoomie", "Biscuit", "Teddy", "Milo", "Lulu", "Waffles", "Pickle", "Sunny"], note: "Fun without being difficult at training class." },
      { label: "Names that can mature", names: ["Nova", "Skye", "Finn", "Zara", "Koda", "Cleo", "Scout", "River"], note: "Names that can suit both puppy and adult dog." },
    ],
    related: [
      { title: "Puppy Name Shortlist", description: "Build a small shortlist locally in your browser.", href: "/tools/puppy-name-shortlist" },
      { title: "Puppy Care", description: "First-year guidance for South African puppy owners.", href: "/puppy/puppy-care-south-africa" },
      ...commonRelated,
    ],
    faqs: [
      { question: "When should I name my puppy?", answer: "You can name your puppy before arrival or after a few days of observing personality, as long as the household becomes consistent." },
      { question: "Can I change a puppy's name?", answer: "Yes. Puppies usually adapt when the new name is paired with warmth, food rewards and play." },
      { question: "What is a training-friendly puppy name?", answer: "A short, clear name that sounds different from common cues and is easy to say happily." },
    ],
  },
  {
    slug: "afrikaans-dog-names",
    title: "Afrikaans Dog Names",
    seoTitle: "Afrikaans Dog Names | South African-Inspired Name Ideas",
    description:
      "Afrikaans-inspired dog name ideas with respectful naming notes, cute options, bold options, food-inspired ideas and practical training tips.",
    intro:
      "Afrikaans-inspired dog names can feel warm, funny, familiar or proudly local. Choose respectfully and avoid using words you do not understand casually.",
    context: [
      "This page is name inspiration, not a language lesson or cultural authority.",
      "If a word has personal, family or cultural meaning to someone close to you, ask before using it for a pet.",
    ],
    groups: [
      { label: "Cute and familiar", names: ["Liefie", "Bokkie", "Blits", "Ster", "Klein", "Mooi", "Koffie", "Vlooi"], note: "Check the feel of the word with Afrikaans-speaking friends or family if unsure." },
      { label: "Food-inspired", names: ["Beskuit", "Koeksister", "Melktert", "Rooibos", "Mielie", "Chutney", "Pepper", "Kaneel"], note: "Food names are playful and usually easy to explain." },
      { label: "Nature-inspired", names: ["Karoo", "Fynbos", "Doring", "Reen", "Dune", "Aloe", "Klip", "Somer"], note: "Local landscape names can suit outdoorsy dogs." },
    ],
    related: [
      { title: "Dog Names South Africa", description: "More local-inspired naming ideas.", href: "/dog-names/dog-names-south-africa" },
      { title: "Cute Dog Names", description: "Soft and cheerful ideas.", href: "/dog-names/cute-dog-names" },
      ...commonRelated,
    ],
    faqs: [
      { question: "Is it okay to use Afrikaans words as dog names?", answer: "Yes, when chosen respectfully and with a basic understanding of the word and context." },
      { question: "Should I use a word if I am unsure of the meaning?", answer: "Rather choose a different name or ask someone who knows the language well." },
      { question: "Are food-inspired Afrikaans names popular?", answer: "They are familiar and fun for many South African households, but choose what fits your dog and family." },
    ],
  },
  {
    slug: "zulu-dog-names",
    title: "Zulu Dog Names",
    seoTitle: "Zulu Dog Names | Respectful South African Name Inspiration",
    description:
      "Zulu-inspired dog name ideas with respectful guidance, short call-friendly options and practical naming tips for South African dog owners.",
    intro:
      "Zulu-inspired names should be chosen with care. This page offers gentle inspiration and encourages owners to check meaning, pronunciation and context before using a name.",
    context: [
      "DogHaven is not claiming cultural authority. If you want a name with meaning, ask a fluent speaker or choose a name already meaningful in your family.",
      "Avoid turning sacred, sensitive or deeply personal words into casual pet names.",
    ],
    groups: [
      { label: "Short sound inspiration", names: ["Langa", "Zola", "Nandi", "Buhle", "Sibu", "Khaya", "Themba", "Thandi"], note: "Use respectfully and check pronunciation and context before choosing." },
      { label: "Soft call names", names: ["Lulu", "Bibi", "Zizi", "Nala", "Kiki", "Mimi", "Lebo", "Sasa"], note: "Short, friendly sounds can be easier for training." },
      { label: "Nature-style pairings", names: ["Langa", "Dune", "River", "Aloe", "Sunny", "Skye", "Marula", "Fynbos"], note: "Mix local inspiration with names that are easy to call kindly." },
    ],
    related: [
      { title: "Xhosa Dog Names", description: "More respectful local-language inspiration.", href: "/dog-names/xhosa-dog-names" },
      { title: "Dog Name Generator", description: "Generate respectful name ideas.", href: "/tools/dog-name-generator" },
      ...commonRelated,
    ],
    faqs: [
      { question: "Should I check the meaning first?", answer: "Yes. If meaning matters, ask a fluent speaker and avoid sensitive words." },
      { question: "Can I choose a name just because it sounds nice?", answer: "You can, but it is kinder to understand pronunciation and context first." },
      { question: "Are these official Zulu name meanings?", answer: "No. This page is respectful inspiration, not an official language reference." },
    ],
  },
  {
    slug: "xhosa-dog-names",
    title: "Xhosa Dog Names",
    seoTitle: "Xhosa Dog Names | Respectful South African Name Inspiration",
    description:
      "Xhosa-inspired dog name ideas with respectful guidance, easy-call options and naming tips for South African puppies and adopted dogs.",
    intro:
      "Xhosa-inspired names can be beautiful, but they should be chosen respectfully. Check meaning and pronunciation if you want a name with cultural depth.",
    context: [
      "This guide is inspiration for dog owners, not a cultural authority or translation source.",
      "If a name may carry family, spiritual, historical or personal meaning, ask someone knowledgeable before using it casually.",
    ],
    groups: [
      { label: "Short sound inspiration", names: ["Litha", "Zola", "Lulu", "Buhle", "Lebo", "Sibu", "Nandi", "Khaya"], note: "Keep pronunciation clear and respectful." },
      { label: "Gentle puppy names", names: ["Mimi", "Kiki", "Bibi", "Nunu", "Pip", "Lala", "Zizi", "Tula"], note: "Soft sounds can work well for puppies and nervous rescue dogs." },
      { label: "Local nature pairings", names: ["Aloe", "Dune", "River", "Fynbos", "Sunny", "Karoo", "Skye", "Marula"], note: "Nature names are easy to use across languages." },
    ],
    related: [
      { title: "Zulu Dog Names", description: "More respectful local-language inspiration.", href: "/dog-names/zulu-dog-names" },
      { title: "Dog Names South Africa", description: "Broader South African name ideas.", href: "/dog-names/dog-names-south-africa" },
      ...commonRelated,
    ],
    faqs: [
      { question: "Can DogHaven confirm Xhosa meanings?", answer: "No. Ask a fluent speaker or reliable language source if meaning matters." },
      { question: "What should I avoid?", answer: "Avoid words you do not understand, sensitive terms, jokes about language, or names that mock people or cultures." },
      { question: "What makes a good call name?", answer: "A name that is short, clear, kind, and distinct from cues." },
    ],
  },
  {
    slug: "cute-dog-names",
    title: "Cute Dog Names",
    seoTitle: "Cute Dog Names South Africa | Sweet Puppy and Dog Name Ideas",
    description:
      "Cute dog name ideas for South African puppies and rescue dogs, with food, tiny, soft and cheerful groups plus practical naming advice.",
    intro:
      "Cute names work best when they are still clear, kind and easy to use during training, vet visits and recall practice.",
    context: [
      "A cute puppy name should not become awkward when the dog is adult, muddy, barking at the gate or visiting the vet.",
      "Try saying the name in a normal household voice before deciding.",
    ],
    groups: [
      { label: "Sweet names", names: ["Lulu", "Milo", "Bean", "Biscuit", "Poppy", "Teddy", "Mochi", "Nunu"], note: "Simple, cheerful and easy to call." },
      { label: "Food names", names: ["Pumpkin", "Peanut", "Waffles", "Rooibos", "Cookie", "Mielie", "Chutney", "Pepper"], note: "Friendly names for dogs with snack-loving energy." },
      { label: "Tiny names", names: ["Pip", "Bibi", "Button", "Pixie", "Sprout", "Dot", "Pebble", "Kiki"], note: "Especially sweet for small dogs, but big dogs can wear them too." },
    ],
    related: [
      { title: "Puppy Names", description: "Names that can grow with a puppy.", href: "/dog-names/puppy-names-south-africa" },
      { title: "Small Dog Names", description: "Tiny, neat and apartment-friendly ideas.", href: "/dog-names/small-dog-names" },
      ...commonRelated,
    ],
    faqs: [
      { question: "Can a big dog have a cute name?", answer: "Yes. A gentle or funny contrast can be lovely if the name is still kind." },
      { question: "Are cute names bad for training?", answer: "No, as long as the name is clear and not too similar to cues." },
      { question: "Should children choose the name?", answer: "Children can help, but adults should check that the name is respectful and practical." },
    ],
  },
  {
    slug: "strong-dog-names",
    title: "Strong Dog Names",
    seoTitle: "Strong Dog Names South Africa | Bold Names Without Guard-Dog Hype",
    description:
      "Strong dog name ideas for South African dogs, with bold, outdoor and protector-style groups plus responsible naming and training advice.",
    intro:
      "A strong name can sound confident without encouraging rough handling, aggression or status-buying. Your dog's behaviour still comes from care, training and temperament.",
    context: [
      "In South Africa, some owners choose strong names for large breeds or security-aware homes. Keep the name calm and kind enough for everyday use.",
      "Avoid names that make visitors, children, vets or groomers feel uneasy before they even meet the dog.",
    ],
    groups: [
      { label: "Bold names", names: ["Atlas", "Ranger", "Storm", "Nova", "Diesel", "Koda", "Zara", "Sable"], note: "Strong but still friendly to call." },
      { label: "Outdoor names", names: ["Thorn", "Dune", "River", "Scout", "Kudu", "Karoo", "Boulder", "Skye"], note: "Good for active dogs and outdoor families." },
      { label: "Large-breed names", names: ["Titan", "Rex", "Major", "Bruno", "Echo", "Roxy", "Hunter", "Nala"], note: "Choose a name that encourages calm control, not intimidation." },
    ],
    related: [
      { title: "Guard Dogs", description: "Responsible guard dog planning.", href: "/breeds/best-guard-dogs-south-africa" },
      { title: "Big Dog Names", description: "Large dog naming ideas and care notes.", href: "/dog-names/big-dog-names" },
      ...commonRelated,
    ],
    faqs: [
      { question: "Do strong names make dogs more protective?", answer: "No. A name does not create reliable protection. Training, temperament, welfare and management matter." },
      { question: "Should I avoid scary names?", answer: "Usually yes. Choose a name you can use calmly around neighbours, vets, groomers and children." },
      { question: "Can small dogs have strong names?", answer: "Of course. The name should fit your dog's personality and your household." },
    ],
  },
  {
    slug: "small-dog-names",
    title: "Small Dog Names",
    seoTitle: "Small Dog Names South Africa | Cute, Tiny and Bold Ideas",
    description:
      "Small dog name ideas for Yorkies, Dachshunds, Maltese Poodles, Chihuahuas, Shih Tzus and small mixed-breed dogs in South Africa.",
    intro:
      "Small dog names can be tiny, elegant, funny or bold. Choose a name that is easy to call without making the dog sound like a toy.",
    context: [
      "Small dogs in flats, townhouses and family homes still need training, dental care, grooming and safe handling.",
      "Avoid names that encourage children to treat a fragile small dog roughly.",
    ],
    groups: [
      { label: "Tiny names", names: ["Pip", "Bean", "Pixie", "Dot", "Pebble", "Buttons", "Nunu", "Bibi"], note: "Sweet names for small dogs and puppies." },
      { label: "Elegant names", names: ["Coco", "Bella", "Luna", "Mila", "Cleo", "Ruby", "Zara", "Skye"], note: "Simple names that work at the groomer and vet." },
      { label: "Funny big-energy names", names: ["Tank", "Moose", "Boss", "Ranger", "Major", "Storm", "Rocket", "Diesel"], note: "Fun if used kindly and not as an excuse for pushy behaviour." },
    ],
    related: [
      { title: "Best Small Dogs", description: "Small breed planning for South African homes.", href: "/breeds/best-small-dogs-south-africa" },
      { title: "Maltese Poodle", description: "Small companion dog care notes.", href: "/breeds/maltese-poodle-south-africa" },
      ...commonRelated,
    ],
    faqs: [
      { question: "Should small dogs have short names?", answer: "Short names can help, but clarity and consistency matter most." },
      { question: "Can I give a tiny dog a tough name?", answer: "Yes, if it feels fun and kind rather than encouraging rough handling." },
      { question: "Do small dogs need training-friendly names?", answer: "Yes. Small dogs still need recall, lead manners and polite greetings." },
    ],
  },
  {
    slug: "big-dog-names",
    title: "Big Dog Names",
    seoTitle: "Big Dog Names South Africa | Large Breed Name Ideas",
    description:
      "Big dog name ideas for South African large breeds and mixed-breed dogs, with strong, calm, outdoor and family-friendly groups.",
    intro:
      "A big dog name should feel confident but manageable. Choose something you can say calmly when a large dog is excited, muddy or greeting visitors.",
    context: [
      "Large dogs often need extra focus on lead manners, visitor routines, transport, vet care, food costs and heat-safe exercise.",
      "A powerful name should not become a substitute for training or responsible handling.",
    ],
    groups: [
      { label: "Calm strong names", names: ["Atlas", "Bruno", "Nala", "Koda", "Zara", "Ranger", "Sable", "Nova"], note: "Strong without sounding aggressive." },
      { label: "Outdoor names", names: ["Kudu", "Karoo", "Thorn", "River", "Dune", "Scout", "Boulder", "Marula"], note: "Good for hiking, farm and adventure-loving homes." },
      { label: "Family-friendly names", names: ["Buddy", "Max", "Milo", "Rosie", "Luna", "Teddy", "Cleo", "Finn"], note: "Easy for children and visitors to say." },
    ],
    related: [
      { title: "Best Large Dogs", description: "Large breed cost, training and health considerations.", href: "/breeds/best-large-dogs-south-africa" },
      { title: "Boerboel Names", description: "Responsible naming for a powerful South African breed.", href: "/dog-names/boerboel-names" },
      ...commonRelated,
    ],
    faqs: [
      { question: "Should big dogs have intimidating names?", answer: "No. Calm, clear names are usually better for public handling and family life." },
      { question: "Can a big dog have a cute name?", answer: "Yes. A warm name can make handling feel calmer and friendlier." },
      { question: "What should I consider before naming a large dog?", answer: "Think about training, public reactions, children, vet visits, grooming and emergency handling." },
    ],
  },
  {
    slug: "boerboel-names",
    title: "Boerboel Names",
    seoTitle: "Boerboel Names South Africa | Strong, Calm and Local Ideas",
    description:
      "Boerboel name ideas with South African context, responsible ownership notes, strong name groups and links to Boerboel breed guidance.",
    intro:
      "A Boerboel name should match a powerful dog with calm, responsible ownership. Choose a name you can use confidently without encouraging intimidation.",
    context: [
      "Boerboels are closely associated with South Africa, but naming should still support calm handling, socialisation and family safety.",
      "Avoid names that make a powerful dog sound like a threat before people meet the individual dog.",
    ],
    groups: [
      { label: "Calm power names", names: ["Atlas", "Sable", "Koda", "Nala", "Ranger", "Nova", "Bruno", "Zara"], note: "Strong but still warm for family life." },
      { label: "South African-inspired names", names: ["Karoo", "Kudu", "Marula", "Rooibos", "Fynbos", "Aloe", "Thorn", "Dune"], note: "Local flavour that does not hype aggression." },
      { label: "Farm and garden names", names: ["Scout", "River", "Boulder", "Skye", "Storm", "Major", "Echo", "Tula"], note: "Good for dogs with space, training and steady routines." },
    ],
    related: [
      { title: "Boerboel Breed Guide", description: "Responsible Boerboel ownership in South Africa.", href: "/breeds/boerboel-dog-breed-south-africa" },
      { title: "Security and Family Dogs", description: "Safety-focused breed planning.", href: "/breeds/best-dogs-for-security-and-family-south-africa" },
      ...commonRelated,
    ],
    faqs: [
      { question: "Should Boerboel names sound aggressive?", answer: "No. A calm, clear name supports responsible handling better than intimidation." },
      { question: "What makes a good Boerboel name?", answer: "A name that is easy to call, respectful in public and suited to a large dog with serious ownership needs." },
      { question: "Should I choose a Boerboel only for security?", answer: "No. Boerboels need family integration, training, socialisation, secure management and experienced ownership." },
    ],
  },
  {
    slug: "rhodesian-ridgeback-names",
    title: "Rhodesian Ridgeback Names",
    seoTitle: "Rhodesian Ridgeback Names | Athletic Dog Name Ideas",
    description:
      "Rhodesian Ridgeback name ideas with athletic, outdoor and calm-strong categories plus responsible naming and breed-choice links.",
    intro:
      "Rhodesian Ridgeback-inspired names often suit athletic, dignified dogs, but the name should still be easy to call during recall and lead training.",
    context: [
      "Ridgebacks are often associated with Southern African heritage and active homes, so outdoor and warm-climate names can feel natural.",
      "This page is naming inspiration and not a substitute for breed research, training or health planning.",
    ],
    groups: [
      { label: "Athletic names", names: ["Scout", "Ranger", "Dash", "River", "Skye", "Echo", "Storm", "Koda"], note: "Good for active dogs with recall and lead training plans." },
      { label: "Southern African-inspired names", names: ["Kudu", "Sable", "Marula", "Karoo", "Dune", "Aloe", "Fynbos", "Thorn"], note: "Local landscape and wildlife inspiration." },
      { label: "Calm strong names", names: ["Atlas", "Nova", "Zara", "Bruno", "Nala", "Roxy", "Finn", "Cleo"], note: "Names that still feel friendly in public." },
    ],
    related: [
      { title: "Active Owner Dogs", description: "Breed planning for active South African homes.", href: "/breeds/best-dogs-for-active-owners-south-africa" },
      { title: "Hot Weather Dogs", description: "Climate and heat planning for breed choice.", href: "/breeds/best-dogs-for-hot-weather-south-africa" },
      ...commonRelated,
    ],
    faqs: [
      { question: "Are Ridgeback names only for purebred dogs?", answer: "No. Any athletic or Ridgeback-type dog can inspire a similar name." },
      { question: "Should the name reflect speed?", answer: "It can, but recall training matters more than a fast-sounding name." },
      { question: "Can I use wildlife-inspired names?", answer: "Yes, as long as they are respectful and easy to call." },
    ],
  },
  {
    slug: "jack-russell-names",
    title: "Jack Russell Names",
    seoTitle: "Jack Russell Names South Africa | Lively Small Dog Ideas",
    description:
      "Jack Russell name ideas for lively South African terriers, with energetic, funny, small-dog and outdoor categories plus training-friendly tips.",
    intro:
      "Jack Russell names can be cheerful and energetic, but choose something clear enough for recall, lead work and busy family life.",
    context: [
      "Jack Russells are often small dogs with big energy, so names that sound fun can fit well if training and enrichment are part of the plan.",
      "Avoid choosing a name that encourages the household to excuse barking, chasing or jumping as just personality.",
    ],
    groups: [
      { label: "Energetic names", names: ["Rocket", "Dash", "Zoomie", "Scout", "Pip", "Bolt", "Jax", "Roxy"], note: "Fun names for dogs with busy brains." },
      { label: "Small but bold", names: ["Tank", "Boss", "Bean", "Pixie", "Storm", "Major", "Kiki", "Pebble"], note: "A playful contrast can work well." },
      { label: "Outdoor names", names: ["Dune", "River", "Thorn", "Kudu", "Fynbos", "Sunny", "Skye", "Aloe"], note: "Good for active walking and adventure homes." },
    ],
    related: [
      { title: "Jack Russell Breed Guide", description: "Exercise, training, barking and family fit.", href: "/breeds/jack-russell-terrier-south-africa" },
      { title: "Active Owner Dogs", description: "High-energy breed planning.", href: "/breeds/best-dogs-for-active-owners-south-africa" },
      ...commonRelated,
    ],
    faqs: [
      { question: "What names suit Jack Russells?", answer: "Clear, lively names often fit well, but training and enrichment matter more than matching the energy." },
      { question: "Should I choose a very short name?", answer: "Short names can help during recall and fast training moments." },
      { question: "Can a Jack Russell have a calm name?", answer: "Yes. A calm name can be a nice balance for a high-energy dog." },
    ],
  },
  {
    slug: "border-collie-names",
    title: "Border Collie Names",
    seoTitle: "Border Collie Names South Africa | Smart and Active Dog Ideas",
    description:
      "Border Collie name ideas for smart, active South African dogs, with work, nature, agility and calm categories plus training-friendly advice.",
    intro:
      "Border Collie names often reflect intelligence and energy, but the best name is still short, clear and easy to use during training.",
    context: [
      "Border Collies need mental work, exercise and calm routines, so a clever name should come with a real training plan.",
      "Avoid names that sound too similar to cues used in agility, recall, herding-style games or obedience work.",
    ],
    groups: [
      { label: "Smart names", names: ["Pixel", "Echo", "Nova", "Scout", "Finn", "Skye", "Koda", "Zara"], note: "Crisp names for training-focused homes." },
      { label: "Active names", names: ["Dash", "Rocket", "River", "Storm", "Bolt", "Ranger", "Chase", "Fly"], note: "Good for sporty dogs, but avoid names too close to cues." },
      { label: "Nature names", names: ["Fynbos", "Dune", "Aloe", "Marula", "Karoo", "Sunny", "Pebble", "Thorn"], note: "Outdoor inspiration for active South African families." },
    ],
    related: [
      { title: "Border Collie Breed Guide", description: "Exercise, mental work and training needs.", href: "/breeds/border-collie-south-africa" },
      { title: "Dog Training", description: "Humane training foundations.", href: "/training/dog-training-south-africa" },
      ...commonRelated,
    ],
    faqs: [
      { question: "Should Border Collie names be short?", answer: "Short, crisp names are useful because training often involves quick timing." },
      { question: "Can I use a cue-like name?", answer: "Avoid names that sound like common cues or sport cues you plan to use." },
      { question: "Do smart dogs need clever names?", answer: "Not really. They need clear communication, enrichment and kind training." },
    ],
  },
  {
    slug: "dog-name-ideas-by-personality",
    title: "Dog Name Ideas by Personality",
    seoTitle: "Dog Name Ideas by Personality | Calm, Funny, Active and Cute",
    description:
      "Dog name ideas by personality for South African puppies and rescue dogs, with calm, funny, active, cuddly, bold and gentle groups.",
    intro:
      "Sometimes the best name appears after a few days of watching your dog. Personality-based naming can work well for rescue dogs and puppies.",
    context: [
      "Give nervous adopted dogs time before deciding. A name should help the dog feel safe, not label them by a temporary stress response.",
      "For puppies, choose a name that can grow with changing energy, confidence and training.",
    ],
    groups: [
      { label: "Calm dogs", names: ["Tula", "River", "Skye", "Mila", "Cleo", "Breeze", "Sunny", "Pebble"], note: "Soft names for gentle dogs." },
      { label: "Funny dogs", names: ["Pickle", "Waffles", "Bean", "Zoomie", "Biscuit", "Moose", "Noodle", "Buttons"], note: "Keep humour kind and family-friendly." },
      { label: "Active dogs", names: ["Dash", "Rocket", "Scout", "Ranger", "Bolt", "Storm", "Echo", "Koda"], note: "Good for dogs that love movement and training games." },
      { label: "Bold dogs", names: ["Zara", "Nova", "Atlas", "Sable", "Bruno", "Roxy", "Diesel", "Nala"], note: "Bold can still be warm and manageable." },
    ],
    related: [
      { title: "Puppy Name Shortlist", description: "Try a few names before choosing.", href: "/tools/puppy-name-shortlist" },
      { title: "Breed Match Quiz", description: "Explore dog fit by lifestyle.", href: "/tools/dog-breed-match-quiz" },
      ...commonRelated,
    ],
    faqs: [
      { question: "Should I wait to see personality before naming?", answer: "It can help, especially for rescue dogs or puppies whose confidence changes after settling in." },
      { question: "Can a name label a dog unfairly?", answer: "Yes. Avoid names that turn fear, nervousness or stress into a joke." },
      { question: "What if two names fit?", answer: "Test both out loud, then pick the one the household can use most consistently." },
    ],
  },
];

export const dogNamesHub: HubContent = {
  slug: "dog-names",
  path: "/dog-names",
  title: "Dog Names South Africa",
  seoTitle: "Dog Names South Africa | Puppy Names, Breed Names and Free Tools",
  description:
    "DogHaven dog name ideas for South African puppies and adopted dogs, including cute names, strong names, Afrikaans, Zulu, Xhosa, breed-inspired names and free naming tools.",
  kicker: "Dog names",
  intro:
    "Find warm, practical and South African-inspired dog name ideas without turning the page into a giant list. Each guide includes name groups, training-friendly tips and links to puppy, adoption and breed planning resources.",
  cards: topics.map((topic) => ({
    title: topic.title,
    description: topic.description,
    href: `/dog-names/${topic.slug}`,
  })),
  related: [
    { title: "Fun Dog Tools", description: "Quizzes, planners, checklists and activity ideas.", href: "/fun" },
    { title: "Dog Name Generator", description: "Generate name ideas by style, size and gender.", href: "/tools/dog-name-generator" },
    { title: "Puppy Name Shortlist", description: "Make a local shortlist and test names out loud.", href: "/tools/puppy-name-shortlist" },
    { title: "Puppy Care", description: "First-year puppy guides for South African homes.", href: "/puppy" },
    { title: "Breed Guides", description: "Choose a dog by lifestyle fit and care needs.", href: "/breeds" },
  ],
  faqs: [
    {
      question: "What is the best dog name?",
      answer:
        "The best name is easy to call, kind, distinct from cues, comfortable in public and suited to the dog as an adult.",
    },
    {
      question: "Can I use South African-inspired names?",
      answer:
        "Yes, when chosen respectfully. For language-inspired names, check meaning and context if you are unsure.",
    },
    {
      question: "Do dog names affect training?",
      answer:
        "They can. Training is easier when the name is clear, consistent and not too similar to everyday cues.",
    },
  ],
};

export const phase26DogNameGuidePages: GuideContent[] = topics.map((topic) => ({
  slug: topic.slug,
  path: `/dog-names/${topic.slug}`,
  hubTitle: "Dog Names",
  hubPath: "/dog-names",
  title: topic.title,
  seoTitle: topic.seoTitle,
  description: topic.description,
  intro: topic.intro,
  updated: reviewed,
  quickFacts: [
    "Choose a name that is short, clear, kind and easy to call in ordinary South African dog-owner moments.",
    "Training is easier when the name sounds different from common cues and is used warmly.",
    "These name ideas are inspiration, not rankings or cultural authority.",
  ],
  sections: [
    {
      heading: "South African naming context",
      body: topic.context,
    },
    {
      heading: "Name ideas by category",
      body: [
        "Use these groups as starting points, then test the names out loud with your household before deciding.",
      ],
      table: {
        headers: ["Category", "Name ideas", "How to use them"],
        rows: topic.groups.map((group) => [group.label, group.names.join(", "), group.note]),
      },
    },
    {
      heading: "How to choose a practical dog name",
      body: [
        "A practical name should feel good when you are calling your dog away from a gate, greeting a vet, checking in at a groomer or practising recall at home.",
      ],
      checklist: namingChecklist,
    },
    {
      heading: "Avoid confusion during training",
      body: [
        "Dogs learn names through consistency and positive association. The name should predict attention, connection and guidance, not frustration.",
      ],
      bullets: avoidConfusion,
    },
    {
      heading: "Helpful next steps",
      body: [
        "Once you have a shortlist, check whether the name fits your dog's adult size, breed or mix, personality, family language, public settings and training plan.",
        "If you are still choosing a dog, use DogHaven's breed chooser, adoption and puppy guides before falling in love with a name.",
      ],
    },
  ],
  faqs: topic.faqs,
  related: topic.related,
  sources: nameSources,
}));

export function getPhase26DogNameGuide(slug: string) {
  return phase26DogNameGuidePages.find((guide) => guide.slug === slug);
}

export const phase26DogNameCards: CardLink[] = [
  { title: "Dog Names", description: "South African dog name ideas, naming tips and tools.", href: "/dog-names" },
  ...phase26DogNameGuidePages.map((guide) => ({
    title: guide.title,
    description: guide.description,
    href: guide.path,
  })),
];

export const phase26PuppyCards: CardLink[] = [
  { title: "Puppy Names", description: "Cute, clear names that can grow with your puppy.", href: "/dog-names/puppy-names-south-africa" },
  { title: "Puppy Name Shortlist", description: "Create a small shortlist locally in your browser.", href: "/tools/puppy-name-shortlist" },
  { title: "New Puppy Home Checklist", description: "Printable-style home setup checklist.", href: "/tools/new-puppy-home-checklist" },
];

export const phase26AdoptionCards: CardLink[] = [
  { title: "Dog Names", description: "Name ideas for adopted dogs and puppies.", href: "/dog-names" },
  { title: "Name Ideas by Personality", description: "Give rescue dogs time before choosing a name.", href: "/dog-names/dog-name-ideas-by-personality" },
  { title: "New Puppy Home Checklist", description: "Prepare records, vet care, transport and home setup.", href: "/tools/new-puppy-home-checklist" },
];

export const phase26BreedCards: CardLink[] = [
  { title: "Boerboel Names", description: "Strong, calm South African-inspired names.", href: "/dog-names/boerboel-names" },
  { title: "Jack Russell Names", description: "Lively small-dog names with training tips.", href: "/dog-names/jack-russell-names" },
  { title: "Border Collie Names", description: "Smart, active names for high-energy dogs.", href: "/dog-names/border-collie-names" },
  { title: "Dog Name Ideas by Personality", description: "Calm, funny, active, cuddly and bold name ideas.", href: "/dog-names/dog-name-ideas-by-personality" },
];

export const phase26StartHereCards: CardLink[] = [
  { title: "Dog Names", description: "South African name ideas and naming tools.", href: "/dog-names" },
  { title: "Dog Care Printable Checklist", description: "Printable-style everyday care prompts.", href: "/tools/dog-care-printable-checklist" },
];

export const phase26CostCards: CardLink[] = [
  { title: "Dog Care Printable Checklist", description: "Plan everyday care, vet reminders and budget prompts.", href: "/tools/dog-care-printable-checklist" },
];
