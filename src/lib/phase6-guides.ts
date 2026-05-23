import type { CardLink, GuideContent, Source } from "@/lib/content";

export const phase6TrainingCards: CardLink[] = [
  {
    title: "Dog Training in South Africa",
    description:
      "A practical foundation for humane training, recall, barking, jumping, leash manners, rescue dogs, and public behaviour.",
    href: "/training/dog-training-south-africa",
  },
  {
    title: "Puppy Training",
    description:
      "Build toilet habits, bite inhibition, settling, safe socialisation, handling, and first cues without overwhelming your puppy.",
    href: "/training/puppy-training-south-africa",
  },
  {
    title: "Dog Behaviour Problems",
    description:
      "A calm guide to barking, jumping, reactivity, guarding, fear, digging, chewing, and when to get qualified help.",
    href: "/training/dog-behaviour-problems-south-africa",
  },
  {
    title: "Leash Training",
    description:
      "Practical lead manners for pavements, estates, parks, vet visits, beaches, and dog-friendly public spaces.",
    href: "/training/leash-training-dogs-south-africa",
  },
  {
    title: "Separation Anxiety",
    description:
      "Understand separation distress, safe management, gradual alone-time work, and when to speak to a vet or behaviour professional.",
    href: "/training/separation-anxiety-dogs-south-africa",
  },
  {
    title: "Choose a Dog Trainer",
    description:
      "Questions to ask before choosing a trainer, including methods, qualifications, owner involvement, safety, and red flags.",
    href: "/training/how-to-choose-a-dog-trainer-south-africa",
  },
];

export const phase6GroomingCards: CardLink[] = [
  {
    title: "Dog Grooming in South Africa",
    description:
      "Coat, skin, ears, paws, ticks, grass seeds, beaches, dust, heat, puppies, seniors, and when grooming becomes a vet issue.",
    href: "/grooming/dog-grooming-south-africa",
  },
  {
    title: "Dog Grooming Costs",
    description:
      "Understand cautious grooming cost ranges, coat type, matting, dog size, behaviour, add-ons, and when to request quotes.",
    href: "/grooming/dog-grooming-costs-south-africa",
  },
  {
    title: "How Often to Groom",
    description:
      "A practical schedule by coat type, lifestyle, shedding, beaches, dust, ticks, matting, and seasonal changes.",
    href: "/grooming/how-often-should-you-groom-a-dog",
  },
  {
    title: "Dog Nail Clipping",
    description:
      "How to think about nail length, paw handling, groomer or vet help, bleeding risk, and anxious dogs.",
    href: "/grooming/dog-nail-clipping-south-africa",
  },
  {
    title: "Dog Shedding",
    description:
      "Manage shedding, brushing, coat changes, skin warning signs, fleas, ticks, allergies, and when hair loss needs a vet.",
    href: "/grooming/dog-shedding-south-africa",
  },
  {
    title: "Choose a Dog Groomer",
    description:
      "Safety questions for groomers, including handling, drying, matting, anxious dogs, senior dogs, vaccination policies, and records.",
    href: "/grooming/how-to-choose-a-dog-groomer-south-africa",
  },
];

export const phase6DogFriendlyCards: CardLink[] = [
  {
    title: "Dog-Friendly Places",
    description:
      "How to verify rules, plan safer outings, and avoid stressful public situations with your dog.",
    href: "/dog-friendly/dog-friendly-places-south-africa",
  },
  {
    title: "Dog Parks",
    description:
      "Dog park etiquette, vaccination, recall, heat, small-dog safety, conflict prevention, and when to leave.",
    href: "/dog-friendly/dog-parks-south-africa",
  },
  {
    title: "Dog-Friendly Beaches",
    description:
      "Beach-rule verification, heat, tides, salt water, leashes, waste bags, other dogs, and safe swimming.",
    href: "/dog-friendly/dog-friendly-beaches-south-africa",
  },
  {
    title: "Pet-Friendly Accommodation",
    description:
      "How to check pet policies, deposits, size limits, fencing, cleaning rules, heat, ticks, travel distance, and dog behaviour.",
    href: "/dog-friendly/pet-friendly-accommodation-south-africa",
  },
  {
    title: "Travelling With Dogs",
    description:
      "Road-trip planning, car safety, water, heat, vet records, stops, accommodation checks, and anxious travellers.",
    href: "/dog-friendly/travelling-with-dogs-south-africa",
  },
  {
    title: "Hiking With Dogs",
    description:
      "Trail-rule checks, leashes, fitness, heat, ticks, snakes, water, waste, wildlife, and when a hike is too much.",
    href: "/dog-friendly/hiking-with-dogs-south-africa",
  },
];

const welfareSources: Source[] = [
  {
    label: "NSPCA animal welfare guidance",
    href: "https://nspca.co.za/",
    note: "South African animal welfare context and public education resources.",
  },
  {
    label: "Cape of Good Hope SPCA education resources",
    href: "https://capespca.co.za/",
    note: "SPCA welfare and responsible pet ownership context.",
  },
  {
    label: "South African Veterinary Council",
    href: "https://savc.org.za/",
    note: "Professional veterinary regulation and public context for registered veterinary care.",
  },
];

const trainingSources: Source[] = [
  {
    label: "AVSAB position statements",
    href: "https://avsab.org/resources/position-statements/",
    note: "Veterinary behaviour position statements supporting humane, evidence-informed training and behaviour care.",
  },
  {
    label: "RSPCA dog training guidance",
    href: "https://www.rspca.org.uk/adviceandwelfare/pets/dogs/training",
    note: "Animal welfare guidance on reward-based training and avoiding fear-based methods.",
  },
  ...welfareSources,
];

const groomingSources: Source[] = [
  {
    label: "MSD Veterinary Manual skin and coat health",
    href: "https://www.msdvetmanual.com/dog-owners/skin-disorders-of-dogs",
    note: "Veterinary reference for skin, hair, itching, infection, and when veterinary care matters.",
  },
  {
    label: "MSD Veterinary Manual ear disorders",
    href: "https://www.msdvetmanual.com/dog-owners/ear-disorders-of-dogs",
    note: "Veterinary reference for ear signs that should not be treated as simple grooming issues.",
  },
  ...welfareSources,
];

const dogFriendlySources: Source[] = [
  {
    label: "City of Cape Town dog walking and beaches",
    href: "https://www.capetown.gov.za/Family%20and%20home/see-all-city-facilities/our-recreational-facilities/Beaches-and-swimming-pools/Dog-walking",
    note: "Example of official municipal dog walking and beach rule information. Owners should verify local rules before visiting.",
  },
  {
    label: "SANParks park rules",
    href: "https://www.sanparks.org/parks/table-mountain/what-to-do/activities/dog-walking",
    note: "Example of official protected-area dog activity rules and permit requirements.",
  },
  {
    label: "CapeNature pets in reserves",
    href: "https://www.capenature.co.za/",
    note: "Official conservation authority starting point for checking reserve-specific pet rules before hiking or travel.",
  },
  ...welfareSources,
];

const publicRulesNotice =
  "Rules for parks, beaches, trails, estates, restaurants, and accommodation can change. Always check the latest official municipal, venue, body corporate, conservation, or accommodation rules before you go.";

export const phase6GuidePages: GuideContent[] = [
  {
    slug: "dog-training-south-africa",
    path: "/training/dog-training-south-africa",
    hubTitle: "Training",
    hubPath: "/training",
    title: "Dog Training in South Africa: A Practical Owner Guide",
    seoTitle: "Dog Training South Africa | Humane Practical Owner Guide",
    description:
      "A practical South African dog training guide covering puppies, rescue dogs, leash manners, recall, barking, jumping, socialisation, and choosing humane methods.",
    intro:
      "Dog training should make everyday life safer, calmer, and kinder. In South Africa, that means a dog who can handle pavements, gates, visitors, vet visits, parks, beaches, children, other dogs, and busy family routines without fear or chaos.",
    updated: "2026-05-13",
    quickFacts: [
      "Use humane, reward-based, consistent training. Avoid methods that rely on fear, intimidation, pain, or flooding.",
      "Good training teaches skills before problems become habits: recall, leash manners, settling, polite greetings, handling, and safe public behaviour.",
      "Puppies, rescue dogs, adult dogs, and senior dogs can all learn, but the plan should match the individual dog.",
      "If behaviour involves aggression, panic, guarding, or serious distress, get help from a qualified trainer, veterinary behaviour professional, or vet.",
    ],
    sections: [
      {
        heading: "What practical training should cover",
        body: [
          "Training is not only sit and paw. The most useful skills are the ones that make daily South African life safer: coming when called, walking on lead, settling when visitors arrive, tolerating gentle handling, waiting at gates, and coping with normal household sounds.",
          "A clear routine is often more powerful than long sessions. Short, kind, consistent practice works better than waiting for a problem and then reacting harshly.",
        ],
        table: {
          headers: ["Skill", "Why it matters"],
          rows: [
            ["Recall", "Helps prevent road, beach, park, and gate accidents."],
            ["Leash manners", "Makes suburban walks, vet visits, estates, and public outings safer."],
            ["Settle", "Helps dogs cope with visitors, restaurants, accommodation, and family life."],
            ["Handling", "Supports grooming, nail care, vet exams, tick checks, and ear checks."],
            ["Leave it", "Useful around food scraps, braai leftovers, wildlife, rubbish, and dangerous objects."],
          ],
        },
      },
      {
        heading: "South African training realities",
        body: [
          "Many dogs need to cope with gates, delivery drivers, domestic workers, children, other dogs behind fences, taxis, cyclists, heat, thunderstorms, and busy neighbourhood sounds. Training should prepare dogs for your real environment, not an ideal training hall only.",
          "Socialisation does not mean throwing a dog into overwhelming situations. It means careful, positive exposure at a level the dog can handle.",
        ],
        checklist: [
          "Practise calm gate and door routines.",
          "Train walks during cooler parts of hot days.",
          "Use distance around dogs, people, scooters, and traffic while skills are still developing.",
          "Teach children not to chase, hug, climb on, or tease the dog.",
          "Reward calm choices before the dog becomes overexcited.",
        ],
      },
      {
        heading: "What to avoid",
        body: [
          "Avoid training that frightens the dog, causes pain, suppresses warning signs, or promises instant control. A dog who stops reacting because they are scared is not the same as a dog who feels safe and understands what to do.",
        ],
        checklist: [
          "Do not alpha roll, kick, hit, choke, or pin a dog.",
          "Do not punish growling without finding the cause.",
          "Do not flood fearful dogs by forcing them close to triggers.",
          "Do not use tools you do not understand or cannot use safely.",
          "Do not trust promised instant behaviour fixes for complex problems.",
        ],
      },
      {
        heading: "When to get help",
        body: [
          "Get help early if your dog is biting, growling, lunging, panicking when alone, guarding food, chasing cars, fighting with other pets, or becoming harder to manage. A good professional should involve you, explain their methods, and keep welfare central.",
        ],
      },
    ],
    faqs: [
      {
        question: "Can older dogs still be trained?",
        answer:
          "Yes. Older dogs can learn new routines with patience, rewards, clear management, and realistic expectations.",
      },
      {
        question: "Should training use punishment?",
        answer:
          "DogHaven recommends humane, reward-based training and avoiding fear, pain, intimidation, or harsh correction.",
      },
      {
        question: "How long should training sessions be?",
        answer:
          "Short sessions are usually best. A few minutes of focused practice several times a day often beats one long frustrating session.",
      },
    ],
    related: [
      { title: "Puppy Training", description: "Build early habits gently.", href: "/training/puppy-training-south-africa" },
      { title: "Leash Training", description: "Make walks safer.", href: "/training/leash-training-dogs-south-africa" },
      { title: "Choose a Trainer", description: "Ask the right questions.", href: "/training/how-to-choose-a-dog-trainer-south-africa" },
    ],
    sources: trainingSources,
  },
  {
    slug: "puppy-training-south-africa",
    path: "/training/puppy-training-south-africa",
    hubTitle: "Training",
    hubPath: "/training",
    title: "Puppy Training in South Africa",
    seoTitle: "Puppy Training South Africa | Toilet, Biting and Socialisation",
    description:
      "A South African puppy training guide covering toilet training, biting, sleeping, safe socialisation, handling, leash foundations, and first cues.",
    intro:
      "Puppy training starts the day your puppy comes home. The goal is not a perfect tiny adult dog. It is a puppy who feels safe, learns routines, and practises small skills that will matter later.",
    updated: "2026-05-13",
    quickFacts: [
      "Puppies need routine, supervision, sleep, toilet breaks, safe chewing, and gentle handling before advanced obedience.",
      "Ask your vet how to balance safe socialisation with vaccine protection.",
      "Do not punish normal puppy biting, accidents, or chewing. Manage the environment and teach alternatives.",
      "Call a vet quickly if a puppy is weak, vomiting, has diarrhoea, will not eat, or seems painful.",
    ],
    sections: [
      {
        heading: "First-week priorities",
        body: [
          "Keep the first week simple. Your puppy needs to learn where to sleep, where to toilet, what to chew, how to settle, and that people handle them gently.",
        ],
        checklist: [
          "Take toilet breaks after waking, eating, playing, and before sleep.",
          "Reward outdoor toileting immediately.",
          "Use baby gates, pens, or closed doors to prevent mistakes.",
          "Provide safe chew options before the puppy finds shoes or cables.",
          "Keep visitors calm and brief.",
          "Let the puppy sleep. Overtired puppies bite and fuss more.",
        ],
      },
      {
        heading: "Socialisation without flooding",
        body: [
          "Socialisation is not forcing your puppy to meet every dog and person. It is gradual, positive exposure to sights, sounds, handling, surfaces, vehicles, people, and safe dogs while the puppy still feels secure.",
          "In South Africa, ask your vet about safe exposure before vaccines are complete, especially around parvovirus risk.",
        ],
        table: {
          headers: ["Exposure", "Safe approach"],
          rows: [
            ["Traffic and neighbourhood sounds", "Watch from a safe distance and reward calm behaviour."],
            ["Children", "Supervise closely and keep interactions gentle."],
            ["Handling", "Pair ear, paw, collar, and mouth checks with treats."],
            ["Other dogs", "Use vaccinated, friendly dogs and controlled introductions."],
            ["Vet and grooming", "Practise short happy visits and gentle handling where possible."],
          ],
        },
      },
      {
        heading: "Puppy biting and chewing",
        body: [
          "Puppy biting is normal but still needs guidance. Redirect to toys, interrupt rough play calmly, and give the puppy enough sleep. Avoid shouting, tapping the nose, or rough wrestling that teaches harder biting.",
        ],
        bullets: [
          "Keep chew toys in every room the puppy uses.",
          "Stop play briefly if teeth touch skin hard.",
          "Reward calm mouthing and toy choices.",
          "Manage children so they do not squeal, run, or flap hands in the puppy's face.",
        ],
      },
      {
        heading: "First cues to teach",
        body: [
          "Start with name response, come, sit, down, leave it, drop, settle, and walking beside you indoors. Keep sessions short and happy.",
        ],
      },
    ],
    faqs: [
      {
        question: "When should puppy training start?",
        answer:
          "Start at home immediately with gentle routines, handling, toilet training, and short reward-based games.",
      },
      {
        question: "Can my puppy go to puppy class before all vaccines are done?",
        answer:
          "Ask your vet and choose classes that manage health risk carefully. Safe socialisation matters, but disease prevention matters too.",
      },
      {
        question: "How do I stop toilet accidents?",
        answer:
          "Supervise, confine safely when you cannot watch, take frequent outdoor breaks, reward success, and clean accidents without punishment.",
      },
    ],
    related: [
      { title: "Adopting a Puppy", description: "Prepare for the first weeks.", href: "/adoption/adopting-a-puppy-south-africa" },
      { title: "Puppy Food", description: "Support healthy growth.", href: "/food/puppy-food-south-africa" },
      { title: "Vaccination Schedule", description: "Ask your vet about vaccine timing.", href: "/health/vaccination-schedule-south-africa" },
    ],
    sources: trainingSources,
  },
  {
    slug: "dog-behaviour-problems-south-africa",
    path: "/training/dog-behaviour-problems-south-africa",
    hubTitle: "Training",
    hubPath: "/training",
    title: "Dog Behaviour Problems in South Africa",
    seoTitle: "Dog Behaviour Problems South Africa | Practical Help Guide",
    description:
      "A practical guide to dog behaviour problems in South Africa, including barking, jumping, chewing, digging, reactivity, guarding, fear, and when to get help.",
    intro:
      "Behaviour problems are rarely solved by being louder than the dog. Barking, jumping, chewing, digging, guarding, fear, and reactivity usually have causes: stress, lack of outlets, pain, confusion, fear, poor socialisation, or habits that were accidentally rewarded.",
    updated: "2026-05-13",
    quickFacts: [
      "Behaviour is information. Look for the trigger, need, emotion, and environment before choosing a training plan.",
      "Pain and medical issues can change behaviour, so sudden behaviour changes should be discussed with a vet.",
      "Avoid punishment-heavy fixes that suppress warning signs without solving fear or stress.",
      "Get qualified help for aggression, bites, panic, guarding, severe reactivity, or unsafe public behaviour.",
    ],
    sections: [
      {
        heading: "Common problems and first questions",
        body: [
          "Before correcting a behaviour, ask what the dog is getting from it or what they are trying to avoid. A barking dog may be bored, alerting, scared, frustrated, or overexposed to triggers behind a fence.",
        ],
        table: {
          headers: ["Problem", "Useful first question"],
          rows: [
            ["Barking", "Is it boredom, alerting, fear, barrier frustration, or separation distress?"],
            ["Jumping", "Is the dog seeking attention or never taught an alternative greeting?"],
            ["Chewing", "Is the dog teething, bored, anxious, or lacking safe chew options?"],
            ["Digging", "Is it heat, boredom, escape, prey drive, or habit?"],
            ["Reactivity", "Is the dog scared, frustrated, overexcited, or too close to the trigger?"],
            ["Guarding", "Is the dog worried about losing food, toys, space, or people?"],
          ],
        },
      },
      {
        heading: "What helps most behaviour plans",
        body: [
          "Most behaviour plans need management, exercise, enrichment, clear cues, and rewards for the behaviour you want. Management prevents rehearsal while training builds new habits.",
        ],
        checklist: [
          "Reduce access to triggers while you train.",
          "Reward calm choices before the dog escalates.",
          "Meet exercise and sniffing needs in safe ways.",
          "Use food puzzles, chews, scent games, and training games.",
          "Teach an alternative behaviour, such as go to mat or look at me.",
          "Keep sessions short and stop before frustration builds.",
        ],
      },
      {
        heading: "When it may be medical",
        body: [
          "A dog who suddenly growls, avoids touch, snaps, stops climbing stairs, soils indoors, becomes clingy, or reacts differently on walks may be sore or ill. Rule out pain before treating the issue as stubbornness.",
        ],
        bullets: [
          "Sudden aggression or handling sensitivity.",
          "Sleep changes, appetite changes, or house-soiling.",
          "Limping, stiffness, or reluctance to jump.",
          "Ear, skin, dental, or tummy problems.",
        ],
      },
      {
        heading: "Red flags for urgent help",
        body: [
          "Get professional help if behaviour puts people, dogs, cats, livestock, wildlife, or your dog at risk. This includes bites, repeated fights, chasing cars, panic escapes, severe separation distress, and guarding that frightens family members.",
        ],
      },
    ],
    faqs: [
      {
        question: "Can bad behaviour be fixed quickly?",
        answer:
          "Some simple habits improve quickly. Fear, aggression, guarding, and anxiety usually need careful management and professional support.",
      },
      {
        question: "Should I punish growling?",
        answer:
          "No. Growling is a warning. Punishing it can remove the warning without changing the dog's discomfort.",
      },
      {
        question: "Can a rescue dog with problems improve?",
        answer:
          "Often, yes, with patience, routine, suitable training, and realistic expectations. Some dogs need specialist behaviour support.",
      },
    ],
    related: [
      { title: "Separation Anxiety", description: "Understand alone-time distress.", href: "/training/separation-anxiety-dogs-south-africa" },
      { title: "Choose a Dog Trainer", description: "Find humane support.", href: "/training/how-to-choose-a-dog-trainer-south-africa" },
      { title: "When to Take Your Dog to the Vet", description: "Check health red flags.", href: "/health/when-to-take-your-dog-to-the-vet-south-africa" },
    ],
    sources: trainingSources,
  },
  {
    slug: "leash-training-dogs-south-africa",
    path: "/training/leash-training-dogs-south-africa",
    hubTitle: "Training",
    hubPath: "/training",
    title: "Leash Training Dogs in South Africa",
    seoTitle: "Leash Training Dogs South Africa | Practical Walking Guide",
    description:
      "A practical South African leash training guide for safer pavement walks, estates, parks, beaches, vet visits, and dog-friendly public places.",
    intro:
      "Good leash manners make daily life safer. They help your dog pass gates, children, other dogs, cyclists, traffic, cafes, parks, beaches, and vet waiting rooms without pulling you into trouble.",
    updated: "2026-05-13",
    quickFacts: [
      "Leash training is a skill, not a battle of strength.",
      "Reward the position and pace you want before pulling starts.",
      "Use distance around triggers while your dog is still learning.",
      "Avoid yanking, choking, or punishing dogs for reacting when they are too close to something difficult.",
    ],
    sections: [
      {
        heading: "Equipment basics",
        body: [
          "Choose equipment that fits safely and allows control without causing pain. A sturdy lead, comfortable harness or collar, ID tag, and treats are enough for many dogs. Strong or reactive dogs may need professional fitting and training help.",
        ],
        checklist: [
          "Lead in good condition, not frayed.",
          "Harness or collar fitted so the dog cannot slip out.",
          "ID tag and microchip details updated.",
          "Treat pouch for rewarding good choices.",
          "Water for warm walks.",
          "Waste bags for every outing.",
        ],
      },
      {
        heading: "Teach loose-lead walking",
        body: [
          "Start in a low-distraction area. Reward your dog for being near you, checking in, and moving with a loose lead. If the lead tightens, stop, change direction, or create space instead of dragging.",
        ],
        table: {
          headers: ["Step", "What to do"],
          rows: [
            ["Start easy", "Practise in the garden, driveway, or quiet pavement."],
            ["Reward position", "Treat beside your leg before pulling starts."],
            ["Add distractions", "Increase difficulty slowly."],
            ["Use distance", "Move away from dogs, gates, or traffic if your dog struggles."],
            ["Finish well", "End before your dog is exhausted or frustrated."],
          ],
        },
      },
      {
        heading: "Public walking manners",
        body: [
          "South African public spaces can include loose dogs, cyclists, children, runners, wildlife, livestock, and heat. Keep your dog under control and respect other people's space.",
        ],
        bullets: [
          "Ask before allowing greetings with people or dogs.",
          "Do not let your dog rush gates, prams, picnic blankets, or restaurant tables.",
          "Walk during cooler hours in hot weather.",
          "Avoid hot tar and paving.",
          "Leave if your dog is overwhelmed or overexcited.",
        ],
      },
      {
        heading: "When to get help",
        body: [
          "Get qualified help if your dog lunges, barks intensely, redirects onto the lead, slips equipment, drags you dangerously, or cannot recover after seeing another dog.",
        ],
      },
    ],
    faqs: [
      {
        question: "Should I use a retractable lead?",
        answer:
          "Retractable leads can be risky in busy areas because control is poor and the cord can injure people or dogs. A fixed lead is usually safer for training.",
      },
      {
        question: "Why does my dog pull harder when I pull back?",
        answer:
          "Dogs often pull against pressure. Teach loose-lead movement with rewards, direction changes, and better distance from triggers.",
      },
      {
        question: "Can leash-reactive dogs improve?",
        answer:
          "Many can improve with distance, reward-based behaviour work, management, and qualified support when needed.",
      },
    ],
    related: [
      { title: "Dog Parks", description: "Know public dog etiquette.", href: "/dog-friendly/dog-parks-south-africa" },
      { title: "Dog Training", description: "Build everyday skills.", href: "/training/dog-training-south-africa" },
      { title: "Choose a Trainer", description: "Get help safely.", href: "/training/how-to-choose-a-dog-trainer-south-africa" },
    ],
    sources: trainingSources,
  },
  {
    slug: "separation-anxiety-dogs-south-africa",
    path: "/training/separation-anxiety-dogs-south-africa",
    hubTitle: "Training",
    hubPath: "/training",
    title: "Separation Anxiety in Dogs in South Africa",
    seoTitle: "Separation Anxiety Dogs South Africa | Practical Help Guide",
    description:
      "A practical guide to separation anxiety in South African dogs, covering signs, safe management, gradual alone-time training, vet help, and what not to do.",
    intro:
      "Separation anxiety is not spite. A distressed dog may bark, howl, destroy doors, drool, pace, escape, or soil indoors because being alone feels unsafe. The fix is usually careful, gradual work, not punishment.",
    updated: "2026-05-13",
    isHealthGuide: true,
    quickFacts: [
      "Separation distress should be handled calmly and gradually. Punishment can make fear worse.",
      "Record your dog when alone if you are unsure what is happening.",
      "Build alone time below the panic point and increase slowly.",
      "Severe cases may need help from a vet, qualified trainer, or veterinary behaviour professional.",
    ],
    sections: [
      {
        heading: "Signs to look for",
        body: [
          "Some dogs are bored when alone. Others are panicking. Video can help you tell the difference because many dogs show distress soon after the owner leaves.",
        ],
        table: {
          headers: ["Possible sign", "What it can mean"],
          rows: [
            ["Howling or barking for long periods", "Distress, frustration, or environmental triggers."],
            ["Door or window destruction", "Attempt to escape or follow the owner."],
            ["Drooling, pacing, trembling", "Anxiety or panic signs."],
            ["House-soiling", "Distress or a medical issue that needs ruling out."],
            ["Quiet destruction after hours", "May be boredom, access problem, or anxiety."],
          ],
        },
      },
      {
        heading: "What not to do",
        body: [
          "Do not punish the dog when you come home. The dog will not connect punishment with earlier panic in a useful way, and it can make arrivals more stressful.",
        ],
        checklist: [
          "Do not shout at, hit, or crate a panicking dog without a proper plan.",
          "Do not leave a dog to cry it out if they are in true panic.",
          "Do not use shock collars or fear-based tools.",
          "Do not assume another dog will automatically fix the problem.",
          "Do not ignore sudden changes that may be medical.",
        ],
      },
      {
        heading: "A safer training approach",
        body: [
          "Work below the point where panic starts. That may mean opening the door and returning, then stepping outside for seconds, then gradually increasing time. Progress is based on the dog staying calm, not on a fixed calendar.",
        ],
        bullets: [
          "Use cameras or audio to monitor real behaviour.",
          "Practise departure cues separately, such as picking up keys.",
          "Keep greetings and departures calm.",
          "Use enrichment for mild cases, but do not rely on a food toy to cure panic.",
          "Arrange dog sitters, family help, daycare, or flexible routines while training if needed.",
        ],
      },
      {
        heading: "When to involve a vet",
        body: [
          "Speak to a vet if your dog is injuring themselves, panicking severely, soiling indoors suddenly, not eating, showing sudden behaviour change, or unable to progress. Medical pain, cognitive changes, and anxiety disorders may need professional care.",
        ],
      },
    ],
    faqs: [
      {
        question: "Will getting another dog fix separation anxiety?",
        answer:
          "Not reliably. Some dogs are distressed by separation from people specifically. Another dog can even add stress if the match is poor.",
      },
      {
        question: "Should I crate a dog with separation anxiety?",
        answer:
          "Only if the dog is truly comfortable in the crate. A panicking dog may injure themselves trying to escape.",
      },
      {
        question: "How long does separation anxiety take to improve?",
        answer:
          "It varies. Mild cases may improve with routine and training, while severe cases can take months and professional support.",
      },
    ],
    related: [
      { title: "Behaviour Problems", description: "Understand behaviour causes.", href: "/training/dog-behaviour-problems-south-africa" },
      { title: "Choose a Trainer", description: "Find qualified support.", href: "/training/how-to-choose-a-dog-trainer-south-africa" },
      { title: "When to Take Your Dog to the Vet", description: "Check medical signs.", href: "/health/when-to-take-your-dog-to-the-vet-south-africa" },
    ],
    sources: trainingSources,
  },
  {
    slug: "how-to-choose-a-dog-trainer-south-africa",
    path: "/training/how-to-choose-a-dog-trainer-south-africa",
    hubTitle: "Training",
    hubPath: "/training",
    title: "How to Choose a Dog Trainer in South Africa",
    seoTitle: "How to Choose a Dog Trainer South Africa | Safety Checklist",
    description:
      "A practical South African checklist for choosing a humane dog trainer, including methods, owner involvement, qualifications, class safety, and red flags.",
    intro:
      "DogHaven does not list or rank trainers. Instead, this guide helps you ask better questions so you can choose someone who treats dogs and people fairly, explains their methods, and keeps safety central.",
    updated: "2026-05-13",
    quickFacts: [
      "Choose trainers who use humane, reward-based, welfare-focused methods.",
      "Avoid guarantees, intimidation, fear-based methods, and trainers who do not want owners involved.",
      "Ask how they handle fearful, reactive, aggressive, elderly, or puppy clients.",
      "For serious behaviour problems, ask whether they work with vets or veterinary behaviour professionals.",
    ],
    sections: [
      {
        heading: "Questions to ask",
        body: [
          "A good trainer should be comfortable explaining what they do and why. Vague answers are not helpful when your dog's welfare and safety are involved.",
        ],
        checklist: [
          "What training methods do you use?",
          "How do you handle fear, reactivity, growling, or guarding?",
          "Will I be involved in the training sessions?",
          "What qualifications, experience, or continuing education do you have?",
          "How many dogs are in a class?",
          "What equipment do you allow or prohibit?",
          "Do you refer to vets or behaviour professionals when needed?",
        ],
      },
      {
        heading: "Red flags",
        body: [
          "Be cautious if the trainer's confidence sounds like a sales trick rather than a welfare plan. Dogs are individuals, and serious behaviour work cannot be promised like a quick service.",
        ],
        table: {
          headers: ["Red flag", "Why it matters"],
          rows: [
            ["Promised instant fixes", "Complex behaviour depends on emotion, history, health, and environment."],
            ["No owner involvement", "Owners need to learn the skills for daily life."],
            ["Alpha or dominance claims for every issue", "Oversimplifies behaviour and can lead to harsh handling."],
            ["Fear, intimidation, or pain", "Can worsen anxiety and damage trust."],
            ["No safety plan", "Reactive or aggressive dogs need careful distance and management."],
          ],
        },
      },
      {
        heading: "Class and puppy-school safety",
        body: [
          "Ask about vaccination requirements, cleaning, class size, puppy age, off-lead play rules, shy puppies, rough puppies, and whether dogs can opt out of overwhelming activities.",
        ],
        bullets: [
          "Puppy socialisation should be controlled and positive.",
          "Reactive dogs should not be forced into crowded classes.",
          "Children attending should be supervised.",
          "Heat, shade, water, and flooring matter in outdoor training spaces.",
        ],
      },
      {
        heading: "When to involve a vet",
        body: [
          "If behaviour changes suddenly, if the dog seems painful, or if anxiety or aggression is severe, a vet check is important. Good trainers should respect medical input.",
        ],
      },
    ],
    faqs: [
      {
        question: "Can DogHaven recommend a trainer near me?",
        answer:
          "Not yet. DogHaven does not publish unverified listings. Use this checklist to vet trainers directly.",
      },
      {
        question: "Is board-and-train a good idea?",
        answer:
          "It depends. Be cautious if you cannot observe methods, if harsh tools are used, or if you are not taught how to continue training at home.",
      },
      {
        question: "What if a trainer says my dog is dominant?",
        answer:
          "Ask for a clear explanation of the behaviour, triggers, emotions, and training plan. Avoid methods based mainly on intimidation or force.",
      },
    ],
    related: [
      { title: "Dog Training", description: "Know humane foundations.", href: "/training/dog-training-south-africa" },
      { title: "Behaviour Problems", description: "Understand problem behaviours.", href: "/training/dog-behaviour-problems-south-africa" },
      { title: "Leash Training", description: "Build safer walks.", href: "/training/leash-training-dogs-south-africa" },
    ],
    sources: trainingSources,
  },
  {
    slug: "dog-grooming-south-africa",
    path: "/grooming/dog-grooming-south-africa",
    hubTitle: "Grooming",
    hubPath: "/grooming",
    title: "Dog Grooming in South Africa",
    seoTitle: "Dog Grooming South Africa | Coat, Nails, Ears and Ticks",
    description:
      "A practical South African dog grooming guide covering coat types, bathing, brushing, nails, ears, paws, ticks, beaches, heat, puppies, seniors, and vet warning signs.",
    intro:
      "Dog grooming is not only about looking neat. In South Africa it also helps owners notice ticks, grass seeds, matting, hot spots, sore ears, cracked paws, beach sand, dust, shedding, and skin changes before they become bigger problems.",
    updated: "2026-05-13",
    isHealthGuide: true,
    quickFacts: [
      "Grooming needs depend on coat type, lifestyle, season, health, age, and whether your dog swims, hikes, digs, or rolls in dust.",
      "Check skin, ears, paws, nails, and coat during grooming, not only after problems smell bad.",
      "Painful ears, open sores, severe itching, sudden hair loss, bleeding nails, or infected skin smell should be checked by a vet.",
      "Do not shave double-coated dogs automatically for heat. Ask a groomer or vet about coat type first.",
    ],
    sections: [
      {
        heading: "What grooming should include",
        body: [
          "A useful grooming routine covers brushing, bathing, nails, ears, paws, tick checks, coat condition, and gentle handling. The frequency depends heavily on the dog.",
        ],
        table: {
          headers: ["Area", "What to check"],
          rows: [
            ["Coat", "Matting, shedding, burrs, grass seeds, ticks, fleas, and skin redness."],
            ["Skin", "Itching, sores, scabs, smell, hot spots, lumps, or hair loss."],
            ["Ears", "Redness, pain, bad smell, discharge, head shaking, or scratching."],
            ["Paws", "Cracked pads, grass seeds, thorns, tar, sand, or long hair between pads."],
            ["Nails", "Clicking, curling, splitting, or discomfort when walking."],
          ],
        },
      },
      {
        heading: "South African grooming realities",
        body: [
          "Hot summers, dusty gardens, beaches, veld walks, ticks, fleas, grass seeds, and seasonal shedding all shape grooming. A short-coated dog still needs checks, especially after outdoor activity.",
        ],
        checklist: [
          "Check for ticks after walks, hikes, kennels, farms, or grassy areas.",
          "Rinse or brush out beach sand and salt where needed.",
          "Dry ears and skin folds carefully after swimming or bathing.",
          "Brush long or curly coats before mats become painful.",
          "Use dog-safe shampoo and avoid over-bathing itchy skin without vet advice.",
        ],
      },
      {
        heading: "Puppies and senior dogs",
        body: [
          "Puppies need gentle handling practice long before their first big groom. Senior dogs may need shorter sessions, non-slip surfaces, pain awareness, and more patience.",
        ],
        bullets: [
          "Touch paws, ears, collar, mouth, and tail gently with rewards.",
          "Keep puppy grooming short and positive.",
          "Tell groomers about arthritis, heart disease, seizures, anxiety, or medication.",
          "Ask for rest breaks for older or anxious dogs.",
        ],
      },
      {
        heading: "When grooming becomes a vet issue",
        body: [
          "A groomer can clean and maintain, but they cannot diagnose or treat medical conditions. Contact a vet for painful ears, severe itching, open wounds, infected smell, sudden bald patches, skin bleeding, maggots, repeated head shaking, or a dog who becomes suddenly touch-sensitive.",
        ],
      },
    ],
    faqs: [
      {
        question: "How often should my dog be groomed?",
        answer:
          "It depends on coat type, shedding, lifestyle, health, and season. Curly, long, and double coats usually need more planned care than short coats.",
      },
      {
        question: "Can I use human shampoo on my dog?",
        answer:
          "Use dog-safe products. Ask a vet if your dog is itchy, has sores, or needs medicated bathing.",
      },
      {
        question: "Should I shave my dog in summer?",
        answer:
          "Not automatically. Some coats help protect the dog. Ask a qualified groomer or vet before shaving a coat type you are unsure about.",
      },
    ],
    related: [
      { title: "Grooming Costs", description: "Plan grooming budgets.", href: "/grooming/dog-grooming-costs-south-africa" },
      { title: "Ticks and Fleas", description: "Check parasite risks.", href: "/health/ticks-and-fleas-dogs-south-africa" },
      { title: "Choose a Groomer", description: "Ask safety questions.", href: "/grooming/how-to-choose-a-dog-groomer-south-africa" },
    ],
    sources: groomingSources,
  },
  {
    slug: "dog-grooming-costs-south-africa",
    path: "/grooming/dog-grooming-costs-south-africa",
    hubTitle: "Grooming",
    hubPath: "/grooming",
    title: "Dog Grooming Costs in South Africa",
    seoTitle: "Dog Grooming Costs South Africa | Practical Budget Guide",
    description:
      "A practical South African dog grooming cost guide covering coat type, size, matting, behaviour, nails, add-ons, and how to request quotes.",
    intro:
      "Dog grooming costs vary widely. A short-coated small dog, a matted doodle-type coat, a nervous senior, and a giant double-coated dog do not take the same time, tools, or handling skill. Treat any price range as planning guidance, not a promise.",
    updated: "2026-05-13",
    quickFacts: [
      "Grooming prices vary by city, dog size, coat type, matting, behaviour, service, groomer experience, and travel if mobile grooming is used.",
      "Always request a direct quote and explain coat condition honestly.",
      "Matted coats can cost more because they take longer and may be painful to handle.",
      "A cheap groom is not a bargain if safety, drying, handling, or hygiene is poor.",
    ],
    sections: [
      {
        heading: "Cautious cost planning",
        body: [
          "These ranges are broad South African planning bands only. Current prices can differ significantly by area and salon. Ask your groomer what is included before booking.",
        ],
        table: {
          headers: ["Groom type", "Planning band", "What affects it"],
          rows: [
            ["Basic bath and brush", "Often a few hundred rand and up", "Dog size, coat, drying time, and products."],
            ["Full groom or clip", "Often higher and highly variable", "Coat type, style, matting, dog behaviour, and time."],
            ["Nail trim only", "Usually lower but varies", "Dog cooperation, equipment, and whether vet help is needed."],
            ["Matted or difficult groom", "Can be significantly higher", "Pain, time, safety, coat condition, and handling support."],
          ],
        },
      },
      {
        heading: "What increases grooming cost",
        body: [
          "Grooming is time and skill. Long gaps between appointments often create more work and stress than regular maintenance.",
        ],
        checklist: [
          "Large dog size.",
          "Long, curly, double, or high-maintenance coat.",
          "Matting, knots, burrs, or grass seeds.",
          "Nervous, elderly, reactive, or painful dogs.",
          "Heavy shedding or compacted undercoat.",
          "Flea infestation or dirty coat.",
          "Special handling, extra drying time, or mobile service travel.",
        ],
      },
      {
        heading: "Quote questions",
        body: [
          "A clear quote prevents awkward surprises. Send recent photos if booking remotely and be honest about matting, behaviour, fleas, age, and health issues.",
        ],
        bullets: [
          "What is included in the groom?",
          "Is nail clipping included?",
          "How do you handle matting?",
          "Are there extra charges for fleas, dematting, difficult handling, or late pickup?",
          "How long will the dog be there?",
          "Do you stop and refer to a vet if skin or ear issues look painful?",
        ],
      },
      {
        heading: "Budgeting without neglect",
        body: [
          "If professional grooming is too expensive for a high-maintenance coat, choose a lower-maintenance dog before adopting or buying. Regular brushing at home can reduce costs, but some coats still need professional care.",
        ],
      },
    ],
    faqs: [
      {
        question: "Why does my dog cost more than my friend's dog?",
        answer:
          "Size, coat type, matting, behaviour, drying time, and service type can make two grooms completely different jobs.",
      },
      {
        question: "Can I save money by grooming at home?",
        answer:
          "Sometimes, especially brushing and basic maintenance. Be careful with scissors, clippers, ears, and nails if you are inexperienced.",
      },
      {
        question: "Should a groomer charge extra for matting?",
        answer:
          "Often yes. Matting takes time and can be painful or risky to remove safely.",
      },
    ],
    related: [
      { title: "Dog Grooming", description: "Understand coat maintenance.", href: "/grooming/dog-grooming-south-africa" },
      { title: "Monthly Dog Costs", description: "Add grooming to your budget.", href: "/costs/monthly-cost-of-owning-a-dog-south-africa" },
      { title: "Choose a Groomer", description: "Ask safety questions.", href: "/grooming/how-to-choose-a-dog-groomer-south-africa" },
    ],
    sources: groomingSources,
  },
  {
    slug: "how-often-should-you-groom-a-dog",
    path: "/grooming/how-often-should-you-groom-a-dog",
    hubTitle: "Grooming",
    hubPath: "/grooming",
    title: "How Often Should You Groom a Dog?",
    seoTitle: "How Often Should You Groom a Dog? | South Africa Guide",
    description:
      "A practical grooming frequency guide for South African dogs by coat type, shedding, beaches, dust, ticks, matting, lifestyle, puppies, and seniors.",
    intro:
      "There is no one grooming schedule for every dog. A short-coated Africanis-type dog, a double-coated Husky, a curly-coated Poodle mix, and a beach-loving Labrador all need different maintenance.",
    updated: "2026-05-13",
    quickFacts: [
      "Coat type, lifestyle, season, swimming, dust, ticks, health, and age all affect grooming frequency.",
      "Brush before mats form. Waiting until a coat is felted can make grooming painful.",
      "Check paws, ears, and ticks after outdoor activity even if your dog does not need a full groom.",
      "Ask a vet about itching, hair loss, bad smell, painful ears, or skin wounds.",
    ],
    sections: [
      {
        heading: "Frequency by coat type",
        body: [
          "Use this as a starting point and adjust for your individual dog. Dogs who swim, hike, shed heavily, or have allergies may need more frequent checks.",
        ],
        table: {
          headers: ["Coat type", "Typical maintenance"],
          rows: [
            ["Short coat", "Weekly brushing or wipe-down, plus regular skin and tick checks."],
            ["Double coat", "Regular brushing, especially during seasonal shedding. Avoid automatic shaving."],
            ["Curly coat", "Frequent brushing and planned professional grooming to prevent mats."],
            ["Long coat", "Several brushing sessions per week and regular trimming where needed."],
            ["Wire or rough coat", "Ask a groomer about the correct coat maintenance method."],
          ],
        },
      },
      {
        heading: "Lifestyle changes the schedule",
        body: [
          "A dog who spends time at the beach, on dusty farms, in long grass, or on hiking trails needs more checks than an indoor dog with short pavement walks.",
        ],
        checklist: [
          "Check paws after beach sand, tar, thorns, or hot paving.",
          "Check ears after swimming.",
          "Check ticks after grass, farms, kennels, and hikes.",
          "Brush burrs and grass seeds out before they work into the coat.",
          "Dry damp coats properly to reduce skin irritation.",
        ],
      },
      {
        heading: "Bathing frequency",
        body: [
          "Bathing too often can irritate some dogs' skin, while too little care can allow dirt, smell, and skin problems to build up. Use dog-safe shampoo and ask a vet if your dog is itchy, flaky, red, or smelly.",
        ],
      },
      {
        heading: "Signs grooming is overdue",
        body: [
          "Mats, clicking nails, smell, greasy coat, visible fleas, ear odour, compacted shedding, paw licking, or grass seeds are all signs the routine needs attention.",
        ],
      },
    ],
    faqs: [
      {
        question: "Do short-haired dogs need grooming?",
        answer:
          "Yes. They still need brushing, nail care, tick checks, ear checks, and skin monitoring.",
      },
      {
        question: "How often should I bath my dog?",
        answer:
          "It depends on coat, skin, smell, lifestyle, and vet advice. Use dog-safe shampoo and avoid over-bathing itchy dogs without guidance.",
      },
      {
        question: "Why does my dog shed more in some seasons?",
        answer:
          "Seasonal coat changes are common, especially in double-coated dogs. Sudden bald patches, itching, or skin redness need a vet check.",
      },
    ],
    related: [
      { title: "Dog Shedding", description: "Manage loose hair and skin signs.", href: "/grooming/dog-shedding-south-africa" },
      { title: "Dog Nail Clipping", description: "Keep paws comfortable.", href: "/grooming/dog-nail-clipping-south-africa" },
      { title: "Dog Grooming", description: "Build a full routine.", href: "/grooming/dog-grooming-south-africa" },
    ],
    sources: groomingSources,
  },
  {
    slug: "dog-nail-clipping-south-africa",
    path: "/grooming/dog-nail-clipping-south-africa",
    hubTitle: "Grooming",
    hubPath: "/grooming",
    title: "Dog Nail Clipping in South Africa",
    seoTitle: "Dog Nail Clipping South Africa | Safe Paw Care Guide",
    description:
      "A practical South African guide to dog nail clipping, long nails, paw handling, anxious dogs, groomer or vet help, bleeding risk, and when to seek care.",
    intro:
      "Long nails can affect comfort, posture, and grip. Nail clipping can also be stressful if a dog is scared or has had the quick cut before. The goal is steady, gentle maintenance, not a wrestling match.",
    updated: "2026-05-13",
    isHealthGuide: true,
    quickFacts: [
      "If you are unsure where the quick is, ask a groomer or vet to show you.",
      "Do not force a panicking dog through nail clipping. Build handling gradually or get professional help.",
      "Broken, bleeding, infected, or painful nails should be checked by a vet.",
      "Dogs who walk mostly on grass may not wear nails down as much as dogs on pavement.",
    ],
    sections: [
      {
        heading: "Signs nails may be too long",
        body: [
          "Every dog is different, but nails that click constantly, curl, snag, splay toes, or change how the dog stands need attention.",
        ],
        checklist: [
          "Nails clicking loudly on floors.",
          "Nails curling toward the pad.",
          "Dog slipping on tiles.",
          "Dog resisting paw handling suddenly.",
          "Split, broken, or bleeding nail.",
          "Dewclaws growing into the skin.",
        ],
      },
      {
        heading: "Safer nail-care approach",
        body: [
          "If clipping at home, use proper dog nail tools and take tiny amounts. Reward paw handling separately from clipping so the dog learns that touch is safe.",
        ],
        table: {
          headers: ["Step", "Plan"],
          rows: [
            ["Handling", "Touch paw, reward, release. Keep it short."],
            ["Tool introduction", "Let the dog sniff clippers or grinder and reward calm behaviour."],
            ["Tiny trims", "Take small tips instead of trying to shorten everything at once."],
            ["Breaks", "Stop before the dog panics."],
            ["Professional help", "Use a groomer or vet if nails are black, overgrown, or the dog is fearful."],
          ],
        },
      },
      {
        heading: "When to use a groomer or vet",
        body: [
          "Use professional help if your dog bites, panics, has very overgrown nails, black nails you cannot read, dewclaw problems, arthritis, previous bleeding trauma, or a painful broken nail.",
        ],
      },
      {
        heading: "When it is medical",
        body: [
          "A nail issue is not just grooming if there is pain, swelling, pus, bad smell, repeated licking, bleeding that will not stop, a torn nail, or a nail growing into the pad. Contact a vet.",
        ],
      },
    ],
    faqs: [
      {
        question: "How often should dog nails be clipped?",
        answer:
          "It varies by growth rate, surface walked on, age, and conformation. Check nails every few weeks and ask your groomer or vet for a schedule.",
      },
      {
        question: "What if I cut the quick?",
        answer:
          "Stay calm, apply appropriate first-aid pressure, and contact a vet if bleeding is heavy, does not stop, or the dog is in pain.",
      },
      {
        question: "Is grinding better than clipping?",
        answer:
          "Some dogs prefer grinding, others dislike the sound. Introduce either method gently and use professional help if your dog is fearful.",
      },
    ],
    related: [
      { title: "Dog Grooming", description: "Build a grooming routine.", href: "/grooming/dog-grooming-south-africa" },
      { title: "Choose a Groomer", description: "Ask handling questions.", href: "/grooming/how-to-choose-a-dog-groomer-south-africa" },
      { title: "Dog Behaviour Problems", description: "Understand fear and handling.", href: "/training/dog-behaviour-problems-south-africa" },
    ],
    sources: groomingSources,
  },
  {
    slug: "dog-shedding-south-africa",
    path: "/grooming/dog-shedding-south-africa",
    hubTitle: "Grooming",
    hubPath: "/grooming",
    title: "Dog Shedding in South Africa",
    seoTitle: "Dog Shedding South Africa | Brushing, Coat Care and Skin Warning Signs",
    description:
      "A practical guide to dog shedding in South Africa, covering seasonal coat changes, brushing, ticks, fleas, allergies, nutrition, and when hair loss needs a vet.",
    intro:
      "Some shedding is normal. Sudden bald patches, itching, redness, scabs, fleas, bad smell, or painful skin are not just a housekeeping problem. This guide helps you separate normal loose hair from signs that need care.",
    updated: "2026-05-13",
    isHealthGuide: true,
    quickFacts: [
      "Normal shedding varies by breed, coat type, season, health, nutrition, and indoor living.",
      "Double-coated dogs can shed heavily during seasonal coat changes.",
      "Fleas, ticks, allergies, infection, stress, hormones, and poor nutrition can contribute to abnormal hair loss.",
      "See a vet for itching, sores, redness, bald patches, skin smell, pain, or sudden coat change.",
    ],
    sections: [
      {
        heading: "Normal shedding vs warning signs",
        body: [
          "Normal shedding usually means loose hair across the coat while skin looks healthy. Problem shedding often comes with skin changes or discomfort.",
        ],
        table: {
          headers: ["Likely normal", "Vet-check warning sign"],
          rows: [
            ["Loose hair during brushing", "Bald patches or symmetrical hair loss."],
            ["Seasonal undercoat blow", "Red, scabby, painful, or smelly skin."],
            ["More hair after bathing", "Constant scratching, chewing, or licking."],
            ["Breed-typical shedding", "Fleas, ticks, sores, or ear problems."],
          ],
        },
      },
      {
        heading: "South African triggers",
        body: [
          "Ticks, fleas, heat, dust, swimming, grass seeds, and allergies can all affect skin and coat. Dogs who hike, visit farms, play in long grass, or sleep outdoors need regular parasite checks.",
        ],
        checklist: [
          "Use vet-recommended tick and flea prevention.",
          "Brush more during seasonal shedding.",
          "Check skin after beach trips and hikes.",
          "Wash bedding regularly.",
          "Keep nutrition consistent and appropriate for life stage.",
          "Avoid repeated shampoo changes on itchy skin without vet advice.",
        ],
      },
      {
        heading: "Why this shedding guide is useful",
        body: [
          "Shedding searches often start with hair on the couch, but the useful question is whether the skin underneath looks healthy. This page helps South African owners connect coat changes with heat, dust, fleas, ticks, allergies, food, grooming routines, and vet warning signs.",
          "It is especially useful before booking a groomer, changing food, buying a de-shedding tool, or assuming bald patches are normal seasonal shedding.",
        ],
        table: {
          headers: ["Owner concern", "Useful next step"],
          rows: [
            ["Loose hair everywhere", "Match brushing tools to coat type and increase brushing during seasonal coat changes."],
            ["Itchy shedding dog", "Check fleas, ticks, skin redness, ears, and allergy patterns before changing food."],
            ["Bald patches or sores", "Book a vet check rather than treating it as normal shedding."],
            ["Heavy coat in summer", "Ask a groomer or vet before shaving double-coated breeds casually."],
          ],
        },
      },
      {
        heading: "Brushing by coat type",
        body: [
          "The right brush depends on the coat. A slicker brush, comb, deshedding tool, rubber curry brush, or undercoat rake can help different coats, but wrong tools can irritate skin.",
        ],
      },
      {
        heading: "When to call a vet",
        body: [
          "Call a vet if shedding is sudden, patchy, itchy, painful, smelly, linked to weight change, or accompanied by lethargy, appetite change, ear infections, or skin wounds.",
        ],
      },
    ],
    faqs: [
      {
        question: "Can food reduce shedding?",
        answer:
          "Good nutrition supports skin and coat, but food will not stop normal breed or seasonal shedding. Ask a vet about itchy or abnormal hair loss.",
      },
      {
        question: "Should I shave a shedding dog?",
        answer:
          "Not automatically. Some double coats should not be shaved casually. Ask a groomer or vet about your dog's coat.",
      },
      {
        question: "Do indoor dogs shed all year?",
        answer:
          "Many do, because indoor light and temperature can affect coat cycles.",
      },
    ],
    related: [
      { title: "Ticks and Fleas", description: "Prevent parasite problems.", href: "/health/ticks-and-fleas-dogs-south-africa" },
      { title: "Dog Skin Allergies", description: "Understand itch, grass, dust, fleas, and food sensitivity questions.", href: "/health/dog-skin-allergies-south-africa" },
      { title: "Dog Hot Spots", description: "Know when skin sores need prompt vet care.", href: "/health/dog-hot-spots-south-africa" },
      { title: "How Often to Groom", description: "Set a brushing schedule.", href: "/grooming/how-often-should-you-groom-a-dog" },
      { title: "Dog Grooming Prices", description: "Plan grooming cost factors without fake prices.", href: "/costs/dog-grooming-costs-south-africa" },
      { title: "Dog Food", description: "Support coat health with suitable food.", href: "/food/dog-food-south-africa" },
      { title: "Dog Feeding Calculator", description: "Estimate portions before overfeeding treats or toppers.", href: "/tools/dog-feeding-calculator" },
    ],
    sources: groomingSources,
  },
  {
    slug: "how-to-choose-a-dog-groomer-south-africa",
    path: "/grooming/how-to-choose-a-dog-groomer-south-africa",
    hubTitle: "Grooming",
    hubPath: "/grooming",
    title: "How to Choose a Dog Groomer in South Africa",
    seoTitle: "How to Choose a Dog Groomer South Africa | Safety Checklist",
    description:
      "A practical checklist for choosing a South African dog groomer, covering handling, drying, matting, anxious dogs, senior dogs, vaccination policies, and safety questions.",
    intro:
      "DogHaven does not publish unverified groomer listings. This guide helps you choose a groomer by asking safety and welfare questions before handing over your dog.",
    updated: "2026-05-13",
    quickFacts: [
      "A good groomer should answer questions about handling, drying, matting, health concerns, and emergency procedures.",
      "Tell the groomer about anxiety, bites, seizures, heart disease, arthritis, skin problems, medication, or previous grooming trauma.",
      "Matting can be painful. Humane groomers should explain realistic options rather than promising a perfect style at any cost.",
      "Painful skin, infected ears, bleeding nails, or severe itching should be referred to a vet.",
    ],
    sections: [
      {
        heading: "Questions to ask before booking",
        body: [
          "A grooming appointment involves handling, bathing, drying, clipping, nails, and sometimes hours away from home. Ask how the groomer keeps dogs safe and comfortable.",
        ],
        checklist: [
          "How do you handle anxious or senior dogs?",
          "What is your policy for matted coats?",
          "Are dogs supervised while waiting and drying?",
          "How do you prevent overheating during drying?",
          "Do you require vaccination records?",
          "What happens if you find a wound, ear infection, ticks, or severe skin issue?",
          "How long will my dog be at the salon or in the mobile van?",
        ],
      },
      {
        heading: "Safety red flags",
        body: [
          "A low price is not worth poor handling. Walk away if the groomer dismisses safety questions or treats fear as disobedience.",
        ],
        table: {
          headers: ["Red flag", "Why it matters"],
          rows: [
            ["No questions about health or behaviour", "The groomer may miss important handling risks."],
            ["Harsh handling or intimidation", "Can worsen fear and cause injury."],
            ["No plan for matting", "Dematting can be painful and needs welfare-focused decisions."],
            ["Dogs left unattended in heat", "Drying and waiting areas need supervision."],
            ["Medical promises", "Groomers should not diagnose or treat veterinary conditions."],
          ],
        },
      },
      {
        heading: "What to tell the groomer",
        body: [
          "Do not hide behaviour or health issues because you worry about being refused. Honest information helps the groomer plan safely.",
        ],
        bullets: [
          "Bite history or touch sensitivity.",
          "Arthritis, pain, heart disease, seizures, breathing issues, or senior frailty.",
          "Skin allergies, ear infections, wounds, or medication.",
          "Fear of dryers, clippers, nails, crates, or other dogs.",
          "Previous bad grooming experiences.",
        ],
      },
      {
        heading: "After the groom",
        body: [
          "Check your dog calmly after grooming. Look for skin redness, irritation, sore ears, limping, stress signs, or cuts. Contact the groomer with questions and call a vet if your dog seems painful or unwell.",
        ],
      },
    ],
    faqs: [
      {
        question: "Should groomers require vaccination records?",
        answer:
          "Many do, especially where dogs share spaces. Ask each groomer about their policy and speak to your vet about your dog's vaccine schedule.",
      },
      {
        question: "Can a groomer remove severe mats without shaving?",
        answer:
          "Sometimes, but severe mats can be painful and unsafe to brush out. A humane groomer should explain welfare-focused options.",
      },
      {
        question: "What if my dog is terrified of grooming?",
        answer:
          "Use gradual handling work, short appointments, a patient groomer, and vet or behaviour support if fear is severe.",
      },
    ],
    related: [
      { title: "Dog Grooming", description: "Know routine care.", href: "/grooming/dog-grooming-south-africa" },
      { title: "Nail Clipping", description: "Handle paws safely.", href: "/grooming/dog-nail-clipping-south-africa" },
      { title: "Choose a Trainer", description: "Get help for handling fear.", href: "/training/how-to-choose-a-dog-trainer-south-africa" },
    ],
    sources: groomingSources,
  },
  {
    slug: "dog-friendly-places-south-africa",
    path: "/dog-friendly/dog-friendly-places-south-africa",
    hubTitle: "Dog-Friendly Places",
    hubPath: "/dog-friendly",
    title: "Dog-Friendly Places in South Africa",
    seoTitle: "Dog-Friendly Places South Africa | Practical Outing Guide",
    description:
      "A practical guide to dog-friendly places in South Africa, including rule checks, leashes, heat, water, waste bags, behaviour, vaccination, and etiquette.",
    intro:
      "Dog-friendly does not mean every dog should go everywhere. A good outing matches your dog's health, behaviour, training, heat tolerance, and the current rules of the place you want to visit.",
    updated: "2026-05-13",
    quickFacts: [
      publicRulesNotice,
      "Check leash rules, opening hours, pet policy, vaccination expectations, waste rules, and whether dogs are allowed in all areas or only outside.",
      "Bring water, waste bags, ID, a lead, and a plan to leave if your dog is stressed.",
      "Do not take reactive, sick, unvaccinated, overheated, or overwhelmed dogs into busy public spaces.",
    ],
    sections: [
      {
        heading: "Before you go",
        body: [
          "Check directly with the venue, municipality, estate, park authority, or accommodation before leaving home. Social media posts and old blog lists can be outdated.",
        ],
        checklist: [
          "Are dogs allowed today, and in which areas?",
          "Must dogs be on lead?",
          "Are there breed, size, number, or time restrictions?",
          "Are vaccination records or permits required?",
          "Is there shade, water, and safe parking?",
          "Are there wildlife, livestock, or children-heavy areas?",
          "What is the rule if your dog barks, lunges, or disturbs guests?",
        ],
      },
      {
        heading: "Dog-friendly etiquette",
        body: [
          "Good etiquette keeps places dog-friendly. One uncontrolled dog can make venues tighten rules for everyone.",
        ],
        table: {
          headers: ["Situation", "Good owner behaviour"],
          rows: [
            ["Restaurants and cafes", "Keep your dog close, off furniture, and away from staff carrying food."],
            ["Markets", "Avoid crowding, heat, dropped food, and uncontrolled greetings."],
            ["Parks", "Use a lead unless off-lead areas are clearly allowed and your dog has recall."],
            ["Beaches", "Check time and area rules, pick up waste, and watch heat and tides."],
            ["Accommodation", "Follow house rules and prevent barking, damage, and roaming."],
          ],
        },
      },
      {
        heading: "What to pack",
        body: [
          "A small outing kit prevents many problems. Adjust for distance, heat, and your dog's health.",
        ],
        checklist: [
          "Lead and backup lead.",
          "ID tag and microchip details.",
          "Water and bowl.",
          "Waste bags.",
          "Towel for beaches or rain.",
          "Treats for calm behaviour.",
          "Vaccination records if required.",
          "Tick prevention and post-walk check plan.",
        ],
      },
      {
        heading: "When to skip the outing",
        body: [
          "Stay home or choose a quieter option if your dog is sick, very young and not vaccine-protected, reactive in crowds, in season, heat-sensitive, elderly and uncomfortable, or unable to settle around food and strangers.",
        ],
      },
    ],
    faqs: [
      {
        question: "How do I find dog-friendly places near me?",
        answer:
          "Use current official venue pages, phone ahead, and verify rules directly. DogHaven does not publish unverified listings.",
      },
      {
        question: "Can my dog go off lead if they are friendly?",
        answer:
          "Only where rules allow and your dog has reliable recall. Friendly dogs can still frighten people, children, wildlife, or other dogs.",
      },
      {
        question: "What if another dog rushes mine?",
        answer:
          "Create distance calmly, leave if needed, and avoid escalating. Choose quieter spaces if your dog is nervous or reactive.",
      },
    ],
    related: [
      { title: "Leash Training", description: "Prepare for public spaces.", href: "/training/leash-training-dogs-south-africa" },
      { title: "Dog Parks", description: "Use parks safely.", href: "/dog-friendly/dog-parks-south-africa" },
      { title: "Travelling With Dogs", description: "Plan dog-friendly trips.", href: "/dog-friendly/travelling-with-dogs-south-africa" },
    ],
    sources: dogFriendlySources,
  },
  {
    slug: "dog-parks-south-africa",
    path: "/dog-friendly/dog-parks-south-africa",
    hubTitle: "Dog-Friendly Places",
    hubPath: "/dog-friendly",
    title: "Dog Parks in South Africa",
    seoTitle: "Dog Parks South Africa | Safety, Etiquette and Rules",
    description:
      "A practical South African dog park guide covering rule checks, vaccination, recall, small-dog safety, heat, waste bags, conflict prevention, and when to leave.",
    intro:
      "Dog parks can be fun for some dogs and stressful for others. A good owner checks the rules, reads body language, manages greetings, and leaves before excitement becomes conflict.",
    updated: "2026-05-13",
    quickFacts: [
      publicRulesNotice,
      "Dog parks are not suitable for every dog, especially fearful, reactive, sick, injured, or incompletely vaccinated dogs.",
      "Off-lead freedom requires recall, social skills, and owner attention.",
      "Leave if your dog is bullying, being bullied, guarding toys, mounting repeatedly, or cannot disengage.",
    ],
    sections: [
      {
        heading: "Before entering",
        body: [
          "Pause before opening the gate. Look at the dogs already inside, the energy level, small and large dog areas, shade, water, exits, and whether owners are paying attention.",
        ],
        checklist: [
          "Check current park rules and opening times.",
          "Confirm whether off-lead is allowed and where.",
          "Avoid crowded peak times with nervous or young dogs.",
          "Make sure vaccines and parasite prevention are current.",
          "Remove high-value toys or food if they may cause guarding.",
          "Do not enter if dogs inside look out of control.",
        ],
      },
      {
        heading: "Good dog park etiquette",
        body: [
          "Dog parks work best when owners keep moving, watch their dogs, and interrupt trouble early.",
        ],
        table: {
          headers: ["Do", "Avoid"],
          rows: [
            ["Watch your dog actively.", "Standing on your phone while problems build."],
            ["Pick up waste immediately.", "Assuming someone else will do it."],
            ["Call your dog away from tense play.", "Letting chasing or wrestling escalate."],
            ["Respect small-dog and large-dog areas.", "Letting size mismatches become risky."],
            ["Leave if your dog is overwhelmed.", "Forcing social time because you made the trip."],
          ],
        },
      },
      {
        heading: "Body language warning signs",
        body: [
          "Leave or create space if you see repeated pinning, chasing one dog, stiff bodies, hard staring, tucked tails, hiding, snapping, guarding, or dogs unable to take breaks.",
        ],
      },
      {
        heading: "Heat and health",
        body: [
          "South African summers can make dog parks risky during hot hours. Bring water, avoid hot pavement, watch flat-faced and overweight dogs carefully, and leave if your dog pants heavily, slows down, drools excessively, or seems weak.",
        ],
      },
    ],
    faqs: [
      {
        question: "Should puppies go to dog parks?",
        answer:
          "Ask your vet first. Puppies may not be fully protected by vaccines and can be overwhelmed or injured by rough play.",
      },
      {
        question: "What if my dog only wants to sit near me?",
        answer:
          "That is fine. Do not force interaction. Some dogs prefer walks, sniffing, or quiet outings to dog parks.",
      },
      {
        question: "Can I take treats into a dog park?",
        answer:
          "Be careful. Food can trigger crowding or guarding. Use treats discreetly or outside the park if needed.",
      },
    ],
    related: [
      { title: "Leash Training", description: "Build safer public control.", href: "/training/leash-training-dogs-south-africa" },
      { title: "Behaviour Problems", description: "Understand dog conflict signs.", href: "/training/dog-behaviour-problems-south-africa" },
      { title: "Heatstroke", description: "Know hot-weather emergencies.", href: "/emergency/heatstroke-in-dogs-south-africa" },
    ],
    sources: dogFriendlySources,
  },
  {
    slug: "dog-friendly-beaches-south-africa",
    path: "/dog-friendly/dog-friendly-beaches-south-africa",
    hubTitle: "Dog-Friendly Places",
    hubPath: "/dog-friendly",
    title: "Dog-Friendly Beaches in South Africa",
    seoTitle: "Dog-Friendly Beaches South Africa | Rules and Safety Guide",
    description:
      "A practical guide to dog-friendly beaches in South Africa, covering rule checks, leashes, heat, tides, salt water, waste bags, other dogs, and safe swimming.",
    intro:
      "A beach can be paradise for one dog and chaos for another. Before you go, check the latest official beach rules, time restrictions, leash requirements, water safety, heat, and whether your dog can cope around people and other dogs.",
    updated: "2026-05-13",
    quickFacts: [
      publicRulesNotice,
      "Beach access rules can vary by municipality, beach section, season, time of day, and protected area.",
      "Bring water, shade plan, waste bags, lead, towel, ID, and a recall plan.",
      "Watch heat, tides, rough surf, salt-water drinking, fishing hooks, bluebottles, and conflicts with other dogs.",
    ],
    sections: [
      {
        heading: "Rule checks before you go",
        body: [
          "Do not rely on old lists. Check official municipal or park authority pages and signage. Some beaches allow dogs only on specific sections, during certain times, or on lead.",
        ],
        checklist: [
          "Are dogs allowed on this beach today?",
          "Are there seasonal or time restrictions?",
          "Is a lead required?",
          "Are there protected wildlife or nesting areas?",
          "Are there fines for non-compliance?",
          "Is the beach suitable for your dog's fitness and recall?",
        ],
      },
      {
        heading: "Beach safety",
        body: [
          "Beach hazards include heat, salt water, strong currents, rocks, fishing hooks, dead marine life, crowds, and dogs running too hard on soft sand.",
        ],
        table: {
          headers: ["Hazard", "Safer plan"],
          rows: [
            ["Heat", "Go early or late, provide water, and avoid hot sand."],
            ["Salt water", "Bring fresh water and discourage drinking seawater."],
            ["Surf", "Do not force swimming and avoid rough water."],
            ["Other dogs", "Use distance and leash control if greetings are uncertain."],
            ["Wildlife", "Respect protected areas and prevent chasing."],
          ],
        },
      },
      {
        heading: "After the beach",
        body: [
          "Rinse or brush out sand and salt if needed. Check paws, ears, eyes, skin folds, ticks, and any limping. Dry ears carefully, especially in dogs prone to ear problems.",
        ],
      },
      {
        heading: "When to skip the beach",
        body: [
          "Skip busy beach trips if your dog has poor recall, is reactive, overheats easily, is too young for public exposure, is recovering from illness or surgery, or becomes frantic around other dogs and children.",
        ],
      },
    ],
    faqs: [
      {
        question: "Are dogs allowed on all South African beaches?",
        answer:
          "No. Rules vary widely and can change. Check official municipal or protected-area rules before going.",
      },
      {
        question: "Can my dog drink seawater?",
        answer:
          "No. Discourage it and bring fresh water. Drinking seawater can cause vomiting, diarrhoea, and worse problems if large amounts are consumed.",
      },
      {
        question: "Should my dog be on lead at the beach?",
        answer:
          "Follow the local rule. Even where off-lead is allowed, only allow it if your dog has reliable recall and does not rush people, wildlife, or dogs.",
      },
    ],
    related: [
      { title: "Leash Training", description: "Prepare for beach control.", href: "/training/leash-training-dogs-south-africa" },
      { title: "Heatstroke", description: "Know heat danger signs.", href: "/emergency/heatstroke-in-dogs-south-africa" },
      { title: "Dog Grooming", description: "Check coat and ears after swimming.", href: "/grooming/dog-grooming-south-africa" },
    ],
    sources: dogFriendlySources,
  },
  {
    slug: "pet-friendly-accommodation-south-africa",
    path: "/dog-friendly/pet-friendly-accommodation-south-africa",
    hubTitle: "Dog-Friendly Places",
    hubPath: "/dog-friendly",
    title: "Pet-Friendly Accommodation in South Africa",
    seoTitle: "Pet-Friendly Accommodation South Africa | Dog Travel Checklist",
    description:
      "A practical guide to pet-friendly accommodation in South Africa, covering pet policies, deposits, size limits, fencing, cleaning rules, heat, ticks, and dog behaviour.",
    intro:
      "Pet-friendly accommodation is not one standard promise. Each property can set its own rules for dog size, number, breed, sleeping areas, furniture, deposits, cleaning, fencing, noise, and where dogs may go.",
    updated: "2026-05-13",
    quickFacts: [
      publicRulesNotice,
      "Always confirm pet rules directly with the accommodation before booking and again before arrival.",
      "Ask about fencing, other animals, stairs, wildlife, nearby roads, heat, ticks, and emergency vet access.",
      "Do not assume pet-friendly means suitable for reactive, noisy, escape-prone, or anxious dogs.",
    ],
    sections: [
      {
        heading: "Questions before booking",
        body: [
          "Send a message or phone the property with your dog's size, age, breed type, number of dogs, behaviour, and sleeping routine. Get important rules in writing.",
        ],
        checklist: [
          "Are dogs allowed inside or only outside?",
          "Are there size, breed, or number limits?",
          "Is the property securely fenced?",
          "Are dogs allowed on furniture or beds?",
          "Is there a cleaning fee, deposit, or damage policy?",
          "Can dogs be left alone in the unit?",
          "Are there resident dogs, cats, livestock, wildlife, or children nearby?",
          "Where is the nearest vet or emergency clinic?",
        ],
      },
      {
        heading: "Packing checklist",
        body: [
          "A familiar setup helps dogs settle and protects the accommodation from mess or damage.",
        ],
        table: {
          headers: ["Pack", "Why"],
          rows: [
            ["Bed or blanket", "Familiar smell and a clear resting place."],
            ["Food and bowls", "Avoid sudden diet changes while travelling."],
            ["Lead and backup lead", "Useful for property rules and safe stops."],
            ["Waste bags", "Respect the property and other guests."],
            ["Towels", "Useful after rain, beaches, or muddy walks."],
            ["Vaccination and medication records", "Helpful if a vet visit is needed."],
          ],
        },
      },
      {
        heading: "Behaviour and noise",
        body: [
          "A dog who barks at every sound in a complex or guesthouse may not be ready for that accommodation style. Practise settling before travel and choose quieter properties if your dog is noise-sensitive.",
        ],
      },
      {
        heading: "When accommodation is not the right plan",
        body: [
          "Use a trusted pet sitter, boarding facility, or family help if your dog panics when alone, escapes, guards space, fights with other dogs, or becomes overwhelmed by travel.",
        ],
      },
    ],
    faqs: [
      {
        question: "Can I leave my dog alone in pet-friendly accommodation?",
        answer:
          "Only if the property allows it and your dog can cope calmly. Many places do not allow unattended dogs because of noise or damage risk.",
      },
      {
        question: "Should I tell the property my dog's breed?",
        answer:
          "Yes. Be honest about size, breed type, behaviour, and number of dogs so there are no surprises at arrival.",
      },
      {
        question: "What if rules change after booking?",
        answer:
          "Keep written confirmation and check again before travel. If rules are unclear, do not assume access.",
      },
    ],
    related: [
      { title: "Travelling With Dogs", description: "Plan the road trip.", href: "/dog-friendly/travelling-with-dogs-south-africa" },
      { title: "Separation Anxiety", description: "Understand alone-time distress.", href: "/training/separation-anxiety-dogs-south-africa" },
      { title: "Dog-Friendly Places", description: "Verify outing rules.", href: "/dog-friendly/dog-friendly-places-south-africa" },
    ],
    sources: dogFriendlySources,
  },
  {
    slug: "travelling-with-dogs-south-africa",
    path: "/dog-friendly/travelling-with-dogs-south-africa",
    hubTitle: "Dog-Friendly Places",
    hubPath: "/dog-friendly",
    title: "Travelling With Dogs in South Africa",
    seoTitle: "Travelling With Dogs South Africa | Road Trip Safety Guide",
    description:
      "A practical South African guide to travelling with dogs, covering car safety, heat, stops, water, vet records, accommodation checks, anxiety, and road trips.",
    intro:
      "Travelling with a dog in South Africa takes more than loading the car. Heat, long distances, toll stops, accommodation rules, ticks, car sickness, restraint, and emergency vet access all need planning.",
    updated: "2026-05-13",
    isHealthGuide: true,
    quickFacts: [
      "Never leave a dog alone in a hot car, even briefly.",
      "Use safe restraint, regular stops, water, shade, ID, and current vet records.",
      "Check accommodation and destination rules before you travel.",
      "Speak to a vet before travel if your dog gets carsick, panics, is elderly, has breathing problems, or has chronic illness.",
    ],
    sections: [
      {
        heading: "Road trip checklist",
        body: [
          "Plan for your dog as carefully as you plan fuel and accommodation. Long South African drives can be hot, dusty, and far from your regular vet.",
        ],
        checklist: [
          "Secure restraint, crate, or barrier suitable for your dog.",
          "Water, bowl, food, medication, and waste bags.",
          "Lead, collar or harness, ID tag, and microchip details.",
          "Vaccination records and medication instructions.",
          "Shade plan for stops.",
          "Towel, bedding, cleaning supplies, and spare lead.",
          "Nearest vet details at your destination.",
        ],
      },
      {
        heading: "Car safety and heat",
        body: [
          "Cars heat up quickly. A short errand can become dangerous. Plan stops where someone can stay with the dog or where the dog can safely accompany you.",
        ],
        table: {
          headers: ["Risk", "Safer plan"],
          rows: [
            ["Hot car", "Do not leave the dog unattended in heat."],
            ["Loose dog in car", "Use restraint to reduce injury and distraction."],
            ["Car sickness", "Ask a vet before using any medication."],
            ["Escape at stops", "Clip the lead before opening doors."],
            ["Long gaps between breaks", "Plan toilet, water, and sniffing stops."],
          ],
        },
      },
      {
        heading: "Anxious travellers",
        body: [
          "Do not start with a long trip if your dog is terrified of the car. Build short positive trips and speak to a vet or trainer if panic, drooling, vomiting, or escape attempts are severe.",
        ],
      },
      {
        heading: "Destination checks",
        body: [
          "Check pet policies, fencing, local leash rules, beach rules, park rules, tick risk, wildlife, and emergency vet access before arrival.",
        ],
      },
    ],
    faqs: [
      {
        question: "Can my dog ride loose in the car?",
        answer:
          "It is safer to use suitable restraint, a crate, or a barrier so the dog cannot distract the driver or be thrown during sudden braking.",
      },
      {
        question: "Can I give my dog human travel sickness tablets?",
        answer:
          "No. Ask a vet before giving any medication.",
      },
      {
        question: "How often should we stop?",
        answer:
          "It depends on the dog, heat, age, and health. Plan regular water, toilet, and stretch breaks before your dog becomes distressed.",
      },
    ],
    related: [
      { title: "Pet-Friendly Accommodation", description: "Check booking rules.", href: "/dog-friendly/pet-friendly-accommodation-south-africa" },
      { title: "Heatstroke", description: "Know hot-car and heat risks.", href: "/emergency/heatstroke-in-dogs-south-africa" },
      { title: "Dog Parks", description: "Use public stops carefully.", href: "/dog-friendly/dog-parks-south-africa" },
    ],
    sources: dogFriendlySources,
  },
  {
    slug: "hiking-with-dogs-south-africa",
    path: "/dog-friendly/hiking-with-dogs-south-africa",
    hubTitle: "Dog-Friendly Places",
    hubPath: "/dog-friendly",
    title: "Hiking With Dogs in South Africa",
    seoTitle: "Hiking With Dogs South Africa | Trail Safety and Rules",
    description:
      "A practical South African guide to hiking with dogs, including trail rules, leashes, permits, heat, ticks, snakes, water, fitness, waste, wildlife, and first aid planning.",
    intro:
      "Hiking with dogs can be wonderful, but trails are not casual dog parks. South African hikes can involve heat, snakes, ticks, cliffs, wildlife, cyclists, livestock, permits, and protected-area rules.",
    updated: "2026-05-13",
    isHealthGuide: true,
    quickFacts: [
      publicRulesNotice,
      "Check official trail, municipal, reserve, or park rules before taking a dog. Some areas ban dogs or require permits and leashes.",
      "Plan water, heat, fitness, ticks, snakes, paw protection, waste bags, and emergency exit routes.",
      "Do not hike with puppies, elderly dogs, flat-faced dogs, injured dogs, or unfit dogs in conditions they cannot handle.",
    ],
    sections: [
      {
        heading: "Before choosing a trail",
        body: [
          "Choose the route for your dog, not for your Instagram plan. Distance, elevation, shade, water access, terrain, wildlife, and exit options all matter.",
        ],
        checklist: [
          "Are dogs allowed on this trail today?",
          "Is a permit required?",
          "Must dogs be on lead?",
          "Is the route suitable for your dog's fitness and paws?",
          "Is there shade and enough water?",
          "What is the weather forecast?",
          "Where is the nearest vet if something goes wrong?",
        ],
      },
      {
        heading: "Trail safety risks",
        body: [
          "South African trails can include snakes, ticks, heat, thorns, grass seeds, cliffs, river crossings, wildlife, livestock, and other hikers. A lead protects your dog and the environment.",
        ],
        table: {
          headers: ["Risk", "Safer plan"],
          rows: [
            ["Heat", "Start early, carry water, and turn back before distress."],
            ["Ticks", "Use prevention and check the dog after the hike."],
            ["Snakes", "Keep dogs close and do not let them investigate wildlife."],
            ["Paws", "Check pads for cuts, thorns, hot rock, or grass seeds."],
            ["Wildlife", "Prevent chasing and follow conservation rules."],
          ],
        },
      },
      {
        heading: "What to pack",
        body: [
          "Your dog's pack list should match the route. Short city walks and mountain trails are not the same.",
        ],
        checklist: [
          "Lead and backup lead.",
          "Harness or collar that cannot slip.",
          "Water and collapsible bowl.",
          "Waste bags.",
          "Tick remover and basic first-aid supplies.",
          "Vet records or emergency contact details.",
          "Snacks for longer routes if appropriate.",
          "Towel and paw-check plan for after the hike.",
        ],
      },
      {
        heading: "When to turn back",
        body: [
          "Turn back if your dog is slowing, limping, panting heavily, refusing water, seeking shade, vomiting, anxious, or struggling with terrain. A hike is not worth heatstroke, injury, or a rescue situation.",
        ],
      },
    ],
    faqs: [
      {
        question: "Are dogs allowed on all hiking trails in South Africa?",
        answer:
          "No. Many trails, reserves, and protected areas restrict or ban dogs. Check official rules before going.",
      },
      {
        question: "Should my dog hike off lead?",
        answer:
          "Only where rules allow and where recall is excellent. In many areas, a lead is safer for wildlife, other hikers, and your dog.",
      },
      {
        question: "What if my dog is bitten by a snake on a hike?",
        answer:
          "Keep the dog calm and get veterinary help urgently. Do not cut, suck, ice, tourniquet, or use home remedies.",
      },
    ],
    related: [
      { title: "Snake Bites", description: "Know urgent snakebite steps.", href: "/emergency/snake-bites-in-dogs-south-africa" },
      { title: "Ticks and Fleas", description: "Prevent trail parasite issues.", href: "/health/ticks-and-fleas-dogs-south-africa" },
      { title: "Travelling With Dogs", description: "Plan road trips and stops.", href: "/dog-friendly/travelling-with-dogs-south-africa" },
    ],
    sources: dogFriendlySources,
  },
];

export function getPhase6Guide(slug: string) {
  return phase6GuidePages.find((guide) => guide.slug === slug);
}

export function getPhase6GuidesByHub(hubPath: string) {
  return phase6GuidePages.filter((guide) => guide.hubPath === hubPath);
}
