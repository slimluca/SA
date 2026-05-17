import type { CardLink, GuideContent, Source } from "@/lib/content";

type SafetyLabel = NonNullable<GuideContent["safetyRating"]>["label"];

type FoodSafetyItem = {
  slug: string;
  name: string;
  title: string;
  seoTitle: string;
  description: string;
  rating: SafetyLabel;
  shortAnswer: string;
  context: string;
  why: string[];
  symptoms: string[];
  doNow: string[];
  avoid: string[];
  vetNow: string[];
  safer: string[];
  checklist: string[];
  faqs: GuideContent["faqs"];
  extraSources?: Source[];
};

const reviewed = "2026-05-15";

const coreFoodSafetySources: Source[] = [
  {
    label: "MSD Veterinary Manual food hazards",
    href: "https://www.msdvetmanual.com/en/special-pet-topics/poisoning/food-hazards",
    note: "Veterinary reference on food hazards including chocolate, grapes, raisins, xylitol, and other risky foods.",
  },
  {
    label: "ASPCA Animal Poison Control: people foods to avoid",
    href: "https://www.aspca.org/pet-care/animal-poison-control/people-foods-avoid-feeding-your-pets",
    note: "Animal poison control guidance on common foods that should not be fed to pets.",
  },
  {
    label: "Pet Poison Helpline poisons library",
    href: "https://www.petpoisonhelpline.com/poisons/",
    note: "Veterinary toxicology information on common household and food-related pet poison risks.",
  },
  {
    label: "South African Veterinary Council",
    href: "https://savc.org.za/",
    note: "South African veterinary professional regulation and context for seeking registered veterinary care.",
  },
];

const nutritionSources: Source[] = [
  {
    label: "WSAVA Global Nutrition Guidelines",
    href: "https://wsava.org/global-guidelines/global-nutrition-guidelines/",
    note: "Veterinary nutrition tools covering diet history, body condition, and nutrition conversations with vets.",
  },
  ...coreFoodSafetySources,
];

const chocolateSources: Source[] = [
  {
    label: "VCA Hospitals: chocolate poisoning in dogs",
    href: "https://vcahospitals.com/know-your-pet/chocolate-poisoning-in-dogs",
    note: "Veterinary hospital guidance explaining chocolate toxicity, signs, and why amount and dog size matter.",
  },
  ...coreFoodSafetySources,
];

const xylitolSources: Source[] = [
  {
    label: "VCA Hospitals: xylitol toxicity in dogs",
    href: "https://vcahospitals.com/know-your-pet/xylitol-toxicity-in-dogs",
    note: "Veterinary hospital guidance on xylitol, also labelled birch sugar, and why it can be dangerous for dogs.",
  },
  ...coreFoodSafetySources,
];

const boneSources: Source[] = [
  {
    label: "FDA: no bones about it",
    href: "https://www.fda.gov/animal-veterinary/animal-health-literacy/no-bones-about-it-reason-not-give-your-dog-bones",
    note: "Food and veterinary safety guidance on injuries and illness linked to giving dogs bones.",
  },
  ...coreFoodSafetySources,
];

const commonRelated: CardLink[] = [
  {
    title: "Dog Poisoning",
    description: "What to do when a dog may have eaten something dangerous.",
    href: "/emergency/dog-poisoning-south-africa",
  },
  {
    title: "Toxic Foods",
    description: "A South African overview of foods that can harm dogs.",
    href: "/health/toxic-foods-for-dogs-south-africa",
  },
  {
    title: "When to Take Your Dog to the Vet",
    description: "Know when symptoms should not wait.",
    href: "/health/when-to-take-your-dog-to-the-vet-south-africa",
  },
];

const safeFoodRelated: CardLink[] = [
  {
    title: "Dog Food South Africa",
    description: "Build a balanced everyday feeding plan.",
    href: "/food/dog-food-south-africa",
  },
  {
    title: "How to Read Dog Food Labels",
    description: "Understand food labels before changing diets.",
    href: "/food/how-to-read-dog-food-labels-south-africa",
  },
  {
    title: "Foods Dogs Should Never Eat",
    description: "A quick safety list for risky foods.",
    href: "/food/foods-dogs-should-never-eat-south-africa",
  },
];

const severityCopy: Record<SafetyLabel, string> = {
  "Safe in small amounts":
    "Plain, prepared carefully, and fed occasionally, this food is usually low risk for many healthy dogs. It should still be a small treat, not a balanced meal replacement.",
  Risky:
    "This food can be harmless in one form and unsafe in another. Ingredients, portion size, preparation, dog size, and health history matter.",
  Dangerous:
    "This food or ingredient can cause serious harm. Contact a vet for advice if your dog ate it, especially if the amount is unknown or symptoms appear.",
  Emergency:
    "Treat exposure as urgent. Phone a vet or emergency animal clinic quickly, even if your dog still looks normal.",
};

const items: FoodSafetyItem[] = [
  {
    slug: "can-dogs-eat-chocolate",
    name: "chocolate",
    title: "Can Dogs Eat Chocolate?",
    seoTitle: "Can Dogs Eat Chocolate? | South Africa Vet Safety Guide",
    description:
      "Dogs should not eat chocolate. Learn South African vet safety steps, symptoms to watch for, and when to call a vet urgently.",
    rating: "Emergency",
    shortAnswer:
      "No. Dogs should not eat chocolate. Cocoa and chocolate can be toxic, and risk depends on the type of chocolate, amount eaten, dog size, and timing.",
    context:
      "Chocolate exposure is common around Easter, school lunch boxes, birthdays, Christmas baking, and snack cupboards. Dark chocolate, cocoa powder, and baking chocolate are especially concerning because they can contain more methylxanthines than many milk chocolates.",
    why: [
      "Chocolate contains theobromine and caffeine-like compounds that dogs process poorly.",
      "Small dogs can be at higher risk from amounts that look minor to a person.",
      "Dark chocolate, cocoa powder, and baking chocolate are usually more dangerous than a small amount of milk chocolate.",
    ],
    symptoms: ["Vomiting or diarrhoea.", "Restlessness, panting, or a racing heart.", "Tremors, wobbliness, seizures, or collapse.", "Increased thirst or urination.", "Abdominal discomfort."],
    doNow: [
      "Remove the chocolate and keep the wrapper.",
      "Estimate the amount eaten and the chocolate type.",
      "Phone your vet or an emergency animal clinic promptly.",
      "Tell the vet your dog's weight, age, health conditions, and when it happened.",
    ],
    avoid: ["Do not induce vomiting unless a vet instructs you.", "Do not give milk, oil, salt, charcoal, or home remedies.", "Do not wait for symptoms if dark chocolate, cocoa, or a large amount was eaten."],
    vetNow: ["Your dog ate dark chocolate, cocoa powder, baking chocolate, or an unknown amount.", "Your dog is small, young, elderly, pregnant, or has heart disease.", "Any tremors, seizures, collapse, fast breathing, or repeated vomiting occur."],
    safer: ["Use dog-safe treats for training.", "Store chocolate high up, not on coffee tables or bedside tables.", "Ask visitors and children not to share sweets with dogs."],
    checklist: ["Wrapper saved.", "Amount estimated.", "Dog weight ready.", "Vet phoned.", "Dog kept calm and supervised."],
    faqs: [
      {
        question: "Is white chocolate safe for dogs?",
        answer:
          "White chocolate is usually lower in cocoa compounds but can still be fatty and sugary. Phone a vet if a lot was eaten or your dog is unwell.",
      },
      {
        question: "How long after chocolate will symptoms show?",
        answer:
          "Signs can start within hours and may last. Do not wait for symptoms before phoning a vet after a concerning exposure.",
      },
      {
        question: "Is dark chocolate worse than milk chocolate?",
        answer:
          "Usually yes. Dark chocolate, baking chocolate, and cocoa powder often carry greater risk because they contain more toxic compounds.",
      },
    ],
    extraSources: chocolateSources,
  },
  {
    slug: "can-dogs-eat-grapes",
    name: "grapes",
    title: "Can Dogs Eat Grapes?",
    seoTitle: "Can Dogs Eat Grapes? | Dog Safety South Africa",
    description:
      "A cautious guide to grapes, raisins, sultanas, fruitcake, kidney risk, symptoms, and urgent vet advice for South African dog owners.",
    rating: "Emergency",
    shortAnswer:
      "No. Dogs should not eat grapes, raisins, sultanas, currants, or fruitcake. The risk can be unpredictable, and some dogs develop serious kidney injury.",
    context:
      "Grape and raisin exposure can happen from school lunch boxes, picnic fruit, hot cross buns, fruitcake, rusks, trail mix, and holiday baking. South African homes often keep these foods within easy reach during family gatherings.",
    why: [
      "The exact risk can be unpredictable, and serious illness has been reported after grape or raisin exposure.",
      "Dried grapes such as raisins and sultanas may be concentrated and easy for a dog to eat quickly.",
      "Early veterinary advice matters because kidney signs may not be obvious immediately.",
    ],
    symptoms: ["Vomiting or diarrhoea.", "Loss of appetite or tiredness.", "Abdominal pain.", "Increased thirst or changes in urination.", "Weakness, dehydration, or collapse."],
    doNow: ["Remove the food.", "Check whether raisins, sultanas, currants, fruitcake, or baked goods were involved.", "Phone a vet immediately with your dog's weight and the amount eaten.", "Keep packaging or a photo of ingredients."],
    avoid: ["Do not assume one grape is safe for every dog.", "Do not wait for kidney symptoms.", "Do not give home treatments or try to induce vomiting unless a vet tells you to."],
    vetNow: ["Any grape, raisin, sultana, currant, or fruitcake exposure occurred.", "The amount is unknown.", "Vomiting, weakness, appetite loss, or urination changes appear."],
    safer: ["Use apple slices without seeds, carrot pieces, or dog-safe treats instead.", "Keep lunch boxes and snack bowls away from dogs.", "Warn children not to share grapes with pets."],
    checklist: ["Food type identified.", "Amount estimated.", "Time eaten noted.", "Vet contacted.", "Dog monitored for appetite, vomiting, and urination."],
    faqs: [
      {
        question: "Are raisins worse than grapes?",
        answer:
          "Raisins and sultanas are dried grapes and can be risky. Contact a vet after exposure rather than comparing them at home.",
      },
      {
        question: "Can a dog eat seedless grapes?",
        answer:
          "No. Seedless grapes are still grapes and should be avoided.",
      },
      {
        question: "Should I wait to see if my dog vomits?",
        answer:
          "No. Phone a vet quickly because early advice is important and signs may be delayed.",
      },
    ],
  },
  {
    slug: "can-dogs-eat-onions",
    name: "onions",
    title: "Can Dogs Eat Onions?",
    seoTitle: "Can Dogs Eat Onions? | Dog Food Safety South Africa",
    description:
      "A practical guide to onion risk in dogs, including cooked onions, powders, stews, symptoms, and when to contact a vet.",
    rating: "Dangerous",
    shortAnswer:
      "No. Dogs should not eat onions, including cooked onion, onion powder, onion gravy, and onion-heavy leftovers.",
    context:
      "Onion turns up in many South African foods: bredies, stews, mince, gravy, boerewors recipes, braai relishes, curry, soup, and takeaways. The risk is easy to miss because onion may be hidden in sauces or seasoning.",
    why: [
      "Onion and related allium foods can damage dogs' red blood cells.",
      "Cooked, raw, dried, powdered, and sauce forms can all matter.",
      "Repeated smaller exposures can also be a concern, especially in small dogs.",
    ],
    symptoms: ["Vomiting, diarrhoea, or drooling.", "Weakness, tiredness, or reduced appetite.", "Pale gums.", "Fast breathing or fast heart rate.", "Dark urine or collapse in serious cases."],
    doNow: ["Stop access to the food.", "Check ingredients for onion, leek, chives, or garlic.", "Phone your vet if a meaningful amount was eaten or the dog is small.", "Watch for delayed weakness or pale gums."],
    avoid: ["Do not feed leftover stews or gravies without checking ingredients.", "Do not assume cooked onion is safe.", "Do not give human iron tablets or home remedies."],
    vetNow: ["Your dog ate onion-heavy food.", "Your dog is small or ate an unknown amount.", "Pale gums, weakness, dark urine, collapse, or breathing changes appear."],
    safer: ["Use plain cooked lean meat only if appropriate and unseasoned.", "Keep onion-heavy leftovers in sealed containers.", "Teach guests not to feed table scraps."],
    checklist: ["Ingredient list checked.", "Amount estimated.", "Dog size considered.", "Vet called if exposure was meaningful.", "Symptoms monitored for several days if advised."],
    faqs: [
      {
        question: "Is cooked onion safe for dogs?",
        answer:
          "No. Cooking does not make onion safe for dogs.",
      },
      {
        question: "Is onion powder risky?",
        answer:
          "Yes. Onion powder can be concentrated and may be hidden in sauces, soups, gravies, and seasoning mixes.",
      },
      {
        question: "What if my dog ate a little gravy?",
        answer:
          "Check how onion-heavy it was and phone your vet if you are unsure, especially for a small dog or repeated exposure.",
      },
    ],
  },
  {
    slug: "can-dogs-eat-garlic",
    name: "garlic",
    title: "Can Dogs Eat Garlic?",
    seoTitle: "Can Dogs Eat Garlic? | Dog Safety South Africa",
    description:
      "A cautious guide to garlic and dogs, including garlic powder, sauces, leftovers, red blood cell risk, symptoms, and vet advice.",
    rating: "Dangerous",
    shortAnswer:
      "No. Dogs should not be fed garlic, garlic powder, garlic butter, garlic sauce, or garlic-heavy leftovers.",
    context:
      "Garlic is common in marinades, braai bread, sauces, stews, takeaways, spice mixes, and home remedies. DogHaven does not recommend using garlic as a flea remedy or health supplement for dogs.",
    why: [
      "Garlic is part of the allium family and can damage red blood cells.",
      "Powdered or concentrated garlic can be especially concerning.",
      "The risk depends on amount, dog size, health, and whether exposure is repeated.",
    ],
    symptoms: ["Vomiting or diarrhoea.", "Weakness or unusual tiredness.", "Pale gums.", "Fast breathing.", "Dark urine or collapse in severe cases."],
    doNow: ["Remove the food.", "Check whether garlic powder, garlic butter, sauces, or onion were also present.", "Phone a vet if a meaningful amount was eaten.", "Monitor for delayed signs if your vet advises home observation."],
    avoid: ["Do not use garlic as flea prevention.", "Do not feed garlic bread or garlic butter scraps.", "Do not wait if your dog becomes weak, pale, or collapses."],
    vetNow: ["Your dog ate garlic-heavy food or concentrated garlic.", "Your dog is small, anaemic, pregnant, or already ill.", "Weakness, pale gums, breathing changes, dark urine, or collapse occur."],
    safer: ["Use vet-recommended flea products instead of garlic.", "Choose plain unseasoned dog-safe treats.", "Store spice mixes and sauces out of reach."],
    checklist: ["Garlic form identified.", "Amount estimated.", "Vet contacted if meaningful exposure.", "No home flea remedies used.", "Symptoms watched carefully."],
    faqs: [
      {
        question: "Can garlic prevent fleas in dogs?",
        answer:
          "DogHaven does not recommend garlic for flea prevention. Ask your vet for safe tick and flea products.",
      },
      {
        question: "Is garlic powder worse than fresh garlic?",
        answer:
          "Powder can be concentrated and hidden in seasonings. Treat garlic powder exposure seriously.",
      },
      {
        question: "What if garlic was only a small ingredient?",
        answer:
          "Risk depends on amount, dog size, and repeated exposure. Phone a vet if you are unsure.",
      },
    ],
  },
  {
    slug: "can-dogs-eat-avocado",
    name: "avocado",
    title: "Can Dogs Eat Avocado?",
    seoTitle: "Can Dogs Eat Avocado? | Dog Food Safety South Africa",
    description:
      "A South African guide to avocado and dogs, covering fat, stomach upset, choking risk, the pip, skin, and safer treat choices.",
    rating: "Risky",
    shortAnswer:
      "Avocado is not a good treat choice for dogs. A tiny bit of plain flesh may not cause trouble for some dogs, but the pip, skin, high fat content, and stomach upset risk make it best avoided.",
    context:
      "Avocados are common in South African kitchens, salads, toast, and braai sides. The biggest household risks are dropped pips, dogs stealing skins, fatty portions, and mixed foods containing onion, garlic, chilli, or salt.",
    why: [
      "The large pip can be a choking or obstruction risk.",
      "The fat content can upset some dogs' stomachs and may be unsuitable for dogs prone to pancreatitis.",
      "Avocado dishes often include unsafe ingredients such as onion, garlic, chilli, salt, or lemon-heavy seasoning.",
    ],
    symptoms: ["Vomiting or diarrhoea.", "Abdominal discomfort.", "Gagging, choking, or retching if the pip was involved.", "Loss of appetite.", "Lethargy."],
    doNow: ["Remove skins and pips.", "Check whether the dog swallowed the pip or ate guacamole-style food.", "Phone a vet if the pip is missing, the dog is small, or symptoms appear.", "Monitor for vomiting, pain, or difficulty passing stool."],
    avoid: ["Do not feed avocado pips or skins.", "Do not offer guacamole or seasoned avocado.", "Do not ignore choking, retching, repeated vomiting, or belly pain."],
    vetNow: ["A pip may have been swallowed.", "Your dog has repeated vomiting, retching, choking, pain, or bloating.", "Your dog has pancreatitis history or ate a fatty amount."],
    safer: ["Offer small plain carrot, apple without seeds, or pumpkin instead.", "Dispose of pips securely.", "Keep avocado dishes away from counter-surfing dogs."],
    checklist: ["Pip accounted for.", "Seasonings checked.", "Amount estimated.", "Symptoms monitored.", "Vet phoned if obstruction or pancreatitis risk exists."],
    faqs: [
      {
        question: "Is avocado flesh toxic to dogs?",
        answer:
          "A tiny amount of plain flesh may not harm every dog, but it is still not a recommended treat because of fat and household risks.",
      },
      {
        question: "What if my dog swallowed an avocado pip?",
        answer:
          "Phone a vet promptly. The pip can be a choking or obstruction risk.",
      },
      {
        question: "Can dogs eat guacamole?",
        answer:
          "No. Guacamole may contain onion, garlic, chilli, salt, and other ingredients that are not suitable for dogs.",
      },
    ],
  },
  {
    slug: "can-dogs-eat-chicken-bones",
    name: "chicken bones",
    title: "Can Dogs Eat Chicken Bones?",
    seoTitle: "Can Dogs Eat Chicken Bones? | Dog Safety South Africa",
    description:
      "A practical guide to chicken bones and dogs, including cooked bone risks, choking, obstruction, symptoms, and when to call a vet.",
    rating: "Dangerous",
    shortAnswer:
      "No. Dogs should not be given chicken bones, especially cooked chicken bones. They can splinter, choke, obstruct, or injure the gut.",
    context:
      "Chicken bones are common after Sunday lunch, takeaways, braais, lunch boxes, and bins. Dogs may steal bones quickly, so prevention matters as much as knowing what to do afterwards.",
    why: [
      "Cooked chicken bones can splinter into sharp pieces.",
      "Bones can lodge in the mouth, throat, stomach, or intestines.",
      "Fatty skin, seasoning, and sauces around chicken can add pancreatitis or toxin risk.",
    ],
    symptoms: ["Choking, gagging, coughing, or pawing at the mouth.", "Repeated vomiting or retching.", "Abdominal pain, bloating, or restlessness.", "Constipation, straining, bloody stool, or black stool.", "Lethargy or collapse."],
    doNow: ["Remove remaining bones.", "Check whether your dog is breathing normally.", "Phone your vet for advice, especially if bones were cooked.", "Watch stools and behaviour if your vet advises monitoring."],
    avoid: ["Do not pull a lodged bone from the throat if it is not easy and safe.", "Do not feed bread, cotton wool, or home remedies without vet advice.", "Do not wait if choking, retching, pain, or vomiting occurs."],
    vetNow: ["Your dog is choking, gagging, or struggling to breathe.", "Repeated vomiting, belly pain, bloating, bloody stool, or weakness occurs.", "A small dog ate cooked bones or the amount is unknown."],
    safer: ["Use dog-safe chews chosen for your dog's size and chewing style.", "Put bones directly into a sealed bin.", "Keep takeaway containers out of reach."],
    checklist: ["Breathing checked.", "Remaining bones removed.", "Vet phoned.", "No home remedies given.", "Stool and behaviour monitored as advised."],
    faqs: [
      {
        question: "Are raw chicken bones safer?",
        answer:
          "Raw bones still carry choking, obstruction, dental, and food-safety risks. Ask your vet before offering any bones.",
      },
      {
        question: "What if my dog seems fine after eating a chicken bone?",
        answer:
          "Phone your vet for advice. Some problems appear later, especially obstruction or gut injury.",
      },
      {
        question: "Should I feed bread after a bone?",
        answer:
          "Do not use home tricks unless your vet tells you to. Phone for advice based on your dog and the bone eaten.",
      },
    ],
    extraSources: boneSources,
  },
  {
    slug: "can-dogs-eat-cooked-bones",
    name: "cooked bones",
    title: "Can Dogs Eat Cooked Bones?",
    seoTitle: "Can Dogs Eat Cooked Bones? | Dog Safety South Africa",
    description:
      "A South African guide to cooked bones and dogs, covering braai bones, roast bones, choking, splintering, obstruction, and emergency signs.",
    rating: "Dangerous",
    shortAnswer:
      "No. Dogs should not eat cooked bones. Cooking can make bones brittle, and bones can splinter, obstruct, choke, or injure the gut.",
    context:
      "Cooked bones are a common South African risk after braais, roasts, takeaways, potjies, and family gatherings. Visitors may think giving a bone is kind, so set the rule before food is served.",
    why: [
      "Cooked bones may splinter into sharp fragments.",
      "Bones can fracture teeth, lodge in the throat, or block the intestines.",
      "Sauces, fat, onion, garlic, and salt around leftovers can add extra risk.",
    ],
    symptoms: ["Choking, coughing, or gagging.", "Repeated vomiting or retching.", "Belly pain, bloating, or restlessness.", "Constipation, straining, or blood in stool.", "Refusing food or becoming weak."],
    doNow: ["Remove access to bones and bins.", "Check breathing and comfort.", "Phone your vet and describe the bone type and amount.", "Follow vet instructions for monitoring or coming in."],
    avoid: ["Do not induce vomiting unless a vet instructs you.", "Do not give laxatives, oil, bread, or cotton wool without vet advice.", "Do not ignore pain, retching, or bloating."],
    vetNow: ["Breathing, choking, or gagging signs appear.", "Repeated vomiting, bloating, pain, bloody stool, or weakness occurs.", "Your dog ate many bones or sharp pieces."],
    safer: ["Use dog-safe chew toys or vet-approved dental products.", "Keep braai and roast scraps in a sealed bin.", "Tell guests that DogHaven's house rule is no cooked bones."],
    checklist: ["Bone type identified.", "Breathing checked.", "Vet contacted.", "No home remedies given.", "Bins secured."],
    faqs: [
      {
        question: "Are big cooked bones safe for large dogs?",
        answer:
          "No. Size does not remove the risks of splintering, tooth fracture, obstruction, or gut injury.",
      },
      {
        question: "Are braai bones safe?",
        answer:
          "No. Braai bones are cooked bones and may also carry fat, salt, sauces, and spices.",
      },
      {
        question: "When do symptoms appear after cooked bones?",
        answer:
          "Choking can be immediate, while obstruction or gut irritation may appear later. Phone your vet for advice.",
      },
    ],
    extraSources: boneSources,
  },
  {
    slug: "can-dogs-eat-mielie-pap",
    name: "mielie pap",
    title: "Can Dogs Eat Mielie Pap?",
    seoTitle: "Can Dogs Eat Mielie Pap? | South African Dog Food Guide",
    description:
      "A practical South African guide to dogs and mielie pap, including plain preparation, moderation, weight gain, allergies, and balanced diets.",
    rating: "Safe in small amounts",
    shortAnswer:
      "Plain mielie pap is usually not toxic to dogs in small amounts, but it should not replace a balanced dog food and should not be served with salt, butter, gravy, onion, or spicy relish.",
    context:
      "Mielie pap is common at South African tables and braais. The plain pap is usually less concerning than what is added to it: chakalaka, gravy, onion, fat, salt, sauces, or leftover meat bones.",
    why: [
      "Plain maize meal is mainly carbohydrate and is not a complete dog diet.",
      "Large portions can add calories and weight gain without enough protein, minerals, or essential nutrients.",
      "Toppings and leftovers can turn a simple food into a risky meal.",
    ],
    symptoms: ["Vomiting or diarrhoea after a large portion.", "Gas or soft stool.", "Itchy skin or chronic stomach signs if a dog does not tolerate maize well.", "Weight gain if fed often."],
    doNow: ["If your dog ate plain pap and seems well, monitor normally.", "Check whether onion, gravy, bones, chilli, or fat were included.", "Phone a vet if symptoms appear or risky toppings were eaten."],
    avoid: ["Do not feed pap as the main diet.", "Do not add salt, butter, gravy, onion, garlic, bones, or spicy relish.", "Do not use pap to avoid needed veterinary diets."],
    vetNow: ["Repeated vomiting or diarrhoea occurs.", "Your dog ate pap with onion, garlic, bones, or very fatty gravy.", "Your dog has diabetes, pancreatitis, obesity, allergies, or a veterinary diet."],
    safer: ["Use a small spoon of plain cooled pap only as an occasional extra.", "Keep the main diet complete and balanced.", "Ask your vet before feeding extras to dogs with medical conditions."],
    checklist: ["Plain and cooled.", "No toppings.", "Small portion.", "Not a meal replacement.", "Medical dogs checked with a vet."],
    faqs: [
      {
        question: "Can puppies eat mielie pap?",
        answer:
          "Puppies need balanced growth nutrition. Do not use pap as a puppy diet unless your vet gives specific guidance.",
      },
      {
        question: "Can pap help a dog with diarrhoea?",
        answer:
          "Do not treat ongoing diarrhoea at home with pap. Phone a vet, especially for puppies, blood, weakness, or repeated vomiting.",
      },
      {
        question: "Can dogs eat pap and gravy?",
        answer:
          "It is better avoided. Gravy often contains salt, fat, onion, garlic, or spices.",
      },
    ],
    extraSources: nutritionSources,
  },
  {
    slug: "can-dogs-eat-rice",
    name: "rice",
    title: "Can Dogs Eat Rice?",
    seoTitle: "Can Dogs Eat Rice? | Dog Food Safety South Africa",
    description:
      "A practical guide to rice for dogs, including plain preparation, upset stomach myths, moderation, and when to call a vet.",
    rating: "Safe in small amounts",
    shortAnswer:
      "Plain cooked rice can be safe for many dogs in small amounts, but it should not replace balanced dog food or veterinary care for diarrhoea.",
    context:
      "Rice is often used in South African homes when a dog has an upset stomach. It can be gentle for some dogs, but repeated vomiting, diarrhoea, blood, weakness, or puppy illness needs a vet rather than a kitchen fix.",
    why: [
      "Plain cooked rice is bland and low in fat.",
      "It is mostly carbohydrate and not a complete diet.",
      "Rice with curry, onion, garlic, salt, sauce, or bones is not the same as plain rice.",
    ],
    symptoms: ["Soft stool after too much rice.", "Weight gain if used often.", "Vomiting or diarrhoea if mixed with rich leftovers.", "Worsening signs if a real illness is delayed."],
    doNow: ["Check whether the rice was plain.", "Monitor if a small amount was eaten and your dog is well.", "Phone a vet for ongoing diarrhoea, vomiting, blood, or weakness."],
    avoid: ["Do not feed rice with curry, gravy, onion, garlic, or bones.", "Do not keep treating diarrhoea at home if symptoms continue.", "Do not use rice as a long-term diet."],
    vetNow: ["A puppy has diarrhoea or vomiting.", "Blood, weakness, repeated vomiting, dehydration, or pain occurs.", "Your dog has diabetes, pancreatitis, kidney disease, or needs a veterinary diet."],
    safer: ["Use your dog's normal balanced food as the main diet.", "Ask your vet about bland diets when illness is involved.", "Keep portions small if using plain rice as an occasional extra."],
    checklist: ["Plain rice only.", "Small portion.", "No sauces.", "Symptoms monitored.", "Vet contacted for ongoing illness."],
    faqs: [
      {
        question: "Is brown rice better than white rice for dogs?",
        answer:
          "It depends on the dog and reason for feeding it. Ask your vet for medical diets or stomach problems.",
      },
      {
        question: "Can rice stop diarrhoea?",
        answer:
          "It may be part of a vet-advised bland plan, but diarrhoea can have serious causes. Phone a vet if signs persist or your dog is young or weak.",
      },
      {
        question: "Can dogs eat fried rice?",
        answer:
          "No. Fried rice often contains oil, salt, onion, garlic, sauces, and other ingredients that may not suit dogs.",
      },
    ],
    extraSources: nutritionSources,
  },
  {
    slug: "can-dogs-eat-eggs",
    name: "eggs",
    title: "Can Dogs Eat Eggs?",
    seoTitle: "Can Dogs Eat Eggs? | Dog Food Safety South Africa",
    description:
      "A practical guide to eggs for dogs, covering cooked eggs, raw egg risks, moderation, allergies, pancreatitis, and balanced diets.",
    rating: "Safe in small amounts",
    shortAnswer:
      "Many dogs can eat a small amount of plain cooked egg. Avoid raw eggs, salty seasoning, butter, oil, and feeding eggs as a major part of the diet.",
    context:
      "Eggs are affordable and common in South African kitchens, which makes them tempting as toppers. The safest version is plain cooked egg in a small amount, not fried breakfast leftovers.",
    why: [
      "Cooked egg can provide protein, but too much adds calories and may upset the stomach.",
      "Raw eggs carry food-safety concerns and can be risky for people handling bowls too.",
      "Eggs cooked with butter, oil, bacon fat, onion, or spices are not suitable treats.",
    ],
    symptoms: ["Vomiting or diarrhoea after too much.", "Itching or recurring stomach signs in dogs that do not tolerate egg.", "Pancreatitis signs in dogs sensitive to rich food.", "Weight gain if fed too often."],
    doNow: ["If a small plain cooked amount was eaten, monitor normally.", "Check whether oil, butter, onion, garlic, or bacon was involved.", "Phone a vet if symptoms appear or your dog has pancreatitis history."],
    avoid: ["Do not feed raw eggs.", "Do not add salt, butter, oil, or spices.", "Do not replace balanced puppy food with eggs."],
    vetNow: ["Repeated vomiting, diarrhoea, pain, or weakness occurs.", "Your dog has pancreatitis, allergies, or a veterinary diet.", "A puppy, senior, or immune-compromised dog ate raw eggs and becomes unwell."],
    safer: ["Serve a tiny amount of plain boiled or scrambled egg without fat.", "Count it as a treat, not a meal.", "Ask your vet before adding eggs to medical diets."],
    checklist: ["Cooked fully.", "Plain only.", "Small amount.", "No fatty breakfast scraps.", "Vet checked for medical dogs."],
    faqs: [
      {
        question: "Can dogs eat raw eggs?",
        answer:
          "Raw eggs are not recommended because of food-safety and nutrition concerns. Use plain cooked egg if your dog tolerates it.",
      },
      {
        question: "Can puppies eat eggs?",
        answer:
          "Puppies need balanced growth food. Ask your vet before adding extras regularly.",
      },
      {
        question: "How much egg can a dog eat?",
        answer:
          "Keep it small and occasional. The right amount depends on dog size, weight, health, and the rest of the diet.",
      },
    ],
    extraSources: nutritionSources,
  },
  {
    slug: "can-dogs-eat-cheese",
    name: "cheese",
    title: "Can Dogs Eat Cheese?",
    seoTitle: "Can Dogs Eat Cheese? | Dog Food Safety South Africa",
    description:
      "A practical guide to cheese for dogs, including lactose, fat, salt, portion size, pancreatitis risk, and safer treat choices.",
    rating: "Risky",
    shortAnswer:
      "Some dogs tolerate a tiny piece of plain cheese, but it is fatty, salty, calorie-dense, and can upset the stomach. Avoid it for dogs with pancreatitis, obesity, or dairy sensitivity.",
    context:
      "Cheese often appears in school lunches, toasted sandwiches, braai snacks, and training treats. The problem is usually not one crumb, but regular portions, rich cheeses, and dogs with sensitive stomachs.",
    why: [
      "Many dogs do not digest dairy well.",
      "Cheese can be high in fat and salt.",
      "Mouldy cheese, onion-flavoured cheese, garlic spreads, and rich leftovers add extra risk.",
    ],
    symptoms: ["Gas, soft stool, vomiting, or diarrhoea.", "Itchy skin or ear flare-ups in sensitive dogs.", "Belly pain or pancreatitis signs after fatty foods.", "Weight gain if used often."],
    doNow: ["If a tiny plain piece was eaten and your dog is well, monitor.", "Check whether onion, garlic, mould, or rich spreads were involved.", "Phone your vet if symptoms appear or your dog has pancreatitis history."],
    avoid: ["Do not feed blue cheese or mouldy cheese.", "Do not use cheese heavily for daily training.", "Do not feed cheese spreads with onion, garlic, or herbs."],
    vetNow: ["Repeated vomiting, diarrhoea, pain, weakness, or bloating occurs.", "Your dog has pancreatitis, obesity, kidney or heart disease, or a veterinary diet.", "Mouldy cheese or garlic/onion cheese was eaten."],
    safer: ["Use part of your dog's measured kibble for training.", "Choose lower-fat dog-safe treats.", "Ask your vet for treat ideas if your dog is on a medical diet."],
    checklist: ["Plain cheese only.", "Tiny amount.", "No mould or flavouring.", "Not for pancreatitis-prone dogs.", "Calories counted."],
    faqs: [
      {
        question: "Can cheese help give tablets?",
        answer:
          "Ask your vet. A tiny piece may be acceptable for some dogs, but dogs with medical diets or pancreatitis may need another option.",
      },
      {
        question: "Is cottage cheese safe for dogs?",
        answer:
          "Plain cottage cheese may suit some dogs in small amounts, but it is still dairy and should not replace balanced food.",
      },
      {
        question: "Can cheese cause diarrhoea?",
        answer:
          "Yes. Dairy and fat can upset some dogs' stomachs.",
      },
    ],
    extraSources: nutritionSources,
  },
  {
    slug: "can-dogs-eat-bread",
    name: "bread",
    title: "Can Dogs Eat Bread?",
    seoTitle: "Can Dogs Eat Bread? | Dog Food Safety South Africa",
    description:
      "A practical guide to bread and dogs, including plain bread, raw dough, raisins, xylitol, spreads, weight gain, and vet warning signs.",
    rating: "Risky",
    shortAnswer:
      "Plain baked bread is usually not toxic in a small amount, but it is not very useful for dogs. Raw dough, raisin bread, xylitol products, garlic bread, and rich spreads can be dangerous.",
    context:
      "Bread is everywhere in South African homes: lunch boxes, toast, braai broodjies, vetkoek, sandwiches, and rusks. The risk depends heavily on what is in or on the bread.",
    why: [
      "Plain bread adds calories without much nutrition for dogs.",
      "Raw yeast dough can expand and produce alcohol in the stomach.",
      "Raisins, garlic, onion, chocolate spreads, xylitol, and fatty toppings can make bread unsafe.",
    ],
    symptoms: ["Vomiting or diarrhoea.", "Bloating, retching, or pain after raw dough.", "Weakness, wobbliness, or collapse after alcohol-producing dough.", "Signs linked to raisins, garlic, or xylitol if present."],
    doNow: ["Check what type of bread was eaten.", "Look for raisins, garlic, onion, xylitol, chocolate, or raw dough.", "Phone a vet if any risky ingredient or raw dough was involved."],
    avoid: ["Do not feed raw bread dough.", "Do not give raisin bread, garlic bread, or sweetened diet breads.", "Do not use bread to solve stomach problems without vet advice."],
    vetNow: ["Raw dough was eaten.", "Raisin bread, garlic bread, onion filling, xylitol, or chocolate spread was involved.", "Bloating, retching, weakness, repeated vomiting, or collapse occurs."],
    safer: ["Use dog-safe treats instead of bread crusts.", "Keep lunch boxes closed.", "Store raw dough out of reach while rising."],
    checklist: ["Bread type checked.", "Toppings checked.", "No raw dough.", "Risky ingredients ruled out.", "Vet contacted if uncertain."],
    faqs: [
      {
        question: "Can dogs eat toast?",
        answer:
          "A small piece of plain toast is usually low risk for many dogs, but it is not needed and toppings can be unsafe.",
      },
      {
        question: "Can dogs eat bread with peanut butter?",
        answer:
          "Only if the peanut butter is xylitol-free and plain, and the portion is tiny. Many dogs do not need this snack.",
      },
      {
        question: "Is raw dough an emergency?",
        answer:
          "Yes, it can be. Phone a vet promptly if your dog ate raw yeast dough.",
      },
    ],
    extraSources: nutritionSources,
  },
  {
    slug: "can-dogs-eat-peanut-butter",
    name: "peanut butter",
    title: "Can Dogs Eat Peanut Butter?",
    seoTitle: "Can Dogs Eat Peanut Butter? | Xylitol Dog Safety South Africa",
    description:
      "A South African guide to peanut butter for dogs, including xylitol or birch sugar risk, fat, salt, moderation, allergies, and vet advice.",
    rating: "Risky",
    shortAnswer:
      "Some dogs can have a tiny amount of plain peanut butter, but only if it contains no xylitol or birch sugar. Check the label every time.",
    context:
      "Peanut butter is popular for lick mats and tablets, but recipes can change. In South Africa, always read the label for sweeteners, salt, sugar, oils, chocolate, or flavourings before giving any to a dog.",
    why: [
      "Xylitol, sometimes labelled birch sugar, can be highly dangerous to dogs.",
      "Peanut butter is high in fat and calories.",
      "Salt, sugar, chocolate flavours, and large portions can cause problems.",
    ],
    symptoms: ["Vomiting or diarrhoea.", "Weakness, wobbliness, tremors, seizures, or collapse if xylitol is involved.", "Belly pain after rich fatty portions.", "Itching or stomach signs in sensitive dogs."],
    doNow: ["Read the ingredient label immediately.", "If xylitol or birch sugar appears, phone a vet urgently.", "If it is plain and a tiny amount, monitor and keep portions small.", "Keep the jar for the vet if needed."],
    avoid: ["Do not assume all peanut butter is safe.", "Do not use large spoonfuls daily.", "Do not give chocolate, sweetened, or flavoured peanut butter."],
    vetNow: ["Xylitol or birch sugar is listed.", "The label is missing and a large amount was eaten.", "Weakness, wobbliness, tremors, seizures, collapse, or repeated vomiting occurs."],
    safer: ["Use xylitol-free products only, in tiny amounts.", "Try wet dog food or soaked kibble on enrichment toys.", "Ask your vet for low-fat options if your dog has pancreatitis or obesity."],
    checklist: ["Label checked.", "No xylitol or birch sugar.", "Tiny portion.", "Calories counted.", "Vet called if label is concerning."],
    faqs: [
      {
        question: "What is birch sugar?",
        answer:
          "Birch sugar is another name used for xylitol. If it appears on a peanut butter label, do not give it to your dog.",
      },
      {
        question: "Can peanut butter cause pancreatitis?",
        answer:
          "Rich fatty foods can be a problem for some dogs. Dogs with pancreatitis history should avoid peanut butter unless a vet says otherwise.",
      },
      {
        question: "Can I use peanut butter for tablets?",
        answer:
          "Ask your vet first, especially if your dog is on a medical diet. If used, it must be xylitol-free and tiny.",
      },
    ],
    extraSources: xylitolSources,
  },
  {
    slug: "can-dogs-eat-apples",
    name: "apples",
    title: "Can Dogs Eat Apples?",
    seoTitle: "Can Dogs Eat Apples? | Dog Food Safety South Africa",
    description:
      "A practical guide to apples for dogs, including seeds, cores, choking risk, sugar, moderation, and safer serving ideas.",
    rating: "Safe in small amounts",
    shortAnswer:
      "Yes, many dogs can eat small pieces of plain apple flesh. Remove the core and seeds, cut into bite-size pieces, and keep portions moderate.",
    context:
      "Apples are common in lunch boxes and fruit bowls. They can be a useful occasional treat, but whole apples, cores, and dropped school snacks can create choking or stomach-upset risks.",
    why: ["Apple flesh can be a low-fat treat.", "Seeds and cores should be removed.", "Too much fruit can upset the stomach or add unnecessary sugar."],
    symptoms: ["Vomiting or diarrhoea after too much.", "Choking or gagging if large chunks are swallowed.", "Stomach discomfort.", "Weight gain if fruit treats become frequent."],
    doNow: ["If your dog ate a few plain pieces, monitor normally.", "Remove cores and seeds from reach.", "Phone a vet if choking, repeated vomiting, or a large amount was eaten."],
    avoid: ["Do not feed whole apples to gulpers.", "Do not feed apple pie, sugary desserts, or raisin-containing baked goods.", "Do not rely on fruit as a balanced diet."],
    vetNow: ["Choking, gagging, or breathing trouble occurs.", "Repeated vomiting, diarrhoea, weakness, or pain appears.", "Your dog ate apple dessert with raisins, xylitol, or alcohol."],
    safer: ["Cut apple into small pieces.", "Use it as an occasional treat.", "Choose carrots or pumpkin if your dog does not tolerate fruit well."],
    checklist: ["Core removed.", "Seeds removed.", "Small pieces.", "Small portion.", "No dessert ingredients."],
    faqs: [
      {
        question: "Can dogs eat apple skin?",
        answer:
          "Many dogs can eat small pieces with skin, but peel it if your dog has a sensitive stomach or struggles with texture.",
      },
      {
        question: "Can puppies eat apple?",
        answer:
          "Only tiny pieces, and puppy food should remain the main diet. Ask your vet if your puppy has stomach issues.",
      },
      {
        question: "Can dogs eat apple pie?",
        answer:
          "No. Apple pie can contain sugar, fat, spices, raisins, or xylitol-containing ingredients.",
      },
    ],
    extraSources: nutritionSources,
  },
  {
    slug: "can-dogs-eat-bananas",
    name: "bananas",
    title: "Can Dogs Eat Bananas?",
    seoTitle: "Can Dogs Eat Bananas? | Dog Food Safety South Africa",
    description:
      "A practical guide to bananas for dogs, including moderation, sugar, portion size, stomach upset, and when bananas may not suit a dog.",
    rating: "Safe in small amounts",
    shortAnswer:
      "Yes, many dogs can eat a small piece of plain banana. It should be occasional and portion-controlled because banana is sugary and not a balanced meal.",
    context:
      "Bananas are a common South African household fruit and easy for children to share. A few slices may be fine for many dogs, but large pieces and frequent snacks can add calories quickly.",
    why: ["Banana is not toxic in small amounts for many dogs.", "It contains natural sugar and calories.", "Too much can cause soft stool or weight gain."],
    symptoms: ["Soft stool or diarrhoea.", "Vomiting after a large amount.", "Weight gain if fed often.", "Worsening control in dogs with diabetes or weight problems."],
    doNow: ["If a small piece was eaten, monitor normally.", "Remove the peel if your dog is chewing it.", "Phone a vet if a large amount or peel causes vomiting, pain, or constipation."],
    avoid: ["Do not feed banana peel intentionally.", "Do not give banana desserts, ice cream, or sweetened banana bread.", "Do not use bananas heavily for overweight dogs."],
    vetNow: ["Repeated vomiting, diarrhoea, pain, or constipation occurs.", "A small dog ate a large peel.", "Your dog has diabetes, obesity, pancreatitis, or a veterinary diet."],
    safer: ["Use tiny slices as occasional treats.", "Freeze a small slice for enrichment in hot weather.", "Use lower-calorie vegetables such as carrot if weight is a concern."],
    checklist: ["Peel removed.", "Small slice.", "Occasional only.", "No desserts.", "Medical dogs checked with a vet."],
    faqs: [
      {
        question: "Can dogs eat banana peel?",
        answer:
          "Banana peel is hard to digest and can cause stomach upset or blockage concerns. Do not feed it.",
      },
      {
        question: "Can bananas help diarrhoea?",
        answer:
          "Do not rely on bananas to treat illness. Phone a vet for ongoing diarrhoea, puppies, blood, weakness, or repeated vomiting.",
      },
      {
        question: "Can puppies eat banana?",
        answer:
          "A tiny piece may be tolerated by some puppies, but balanced puppy food should be the priority.",
      },
    ],
    extraSources: nutritionSources,
  },
  {
    slug: "can-dogs-eat-carrots",
    name: "carrots",
    title: "Can Dogs Eat Carrots?",
    seoTitle: "Can Dogs Eat Carrots? | Dog Food Safety South Africa",
    description:
      "A practical guide to carrots for dogs, including raw and cooked carrots, choking risk, portion size, puppies, and safer treat use.",
    rating: "Safe in small amounts",
    shortAnswer:
      "Yes, many dogs can eat small pieces of plain carrot. Cut them safely, avoid seasoning, and use them as treats rather than a diet replacement.",
    context:
      "Carrots are a practical low-fat treat in many South African homes. They can work well for training or enrichment, but large hard chunks can be a choking risk for gulpers.",
    why: ["Plain carrot is generally low fat.", "Raw carrot can be hard and should be cut for your dog's size.", "Cooked carrot should be plain, without butter, salt, onion, or gravy."],
    symptoms: ["Choking or gagging from large pieces.", "Soft stool after too much fibre.", "Vomiting if a dog gulps chunks.", "Stomach upset from seasoned leftovers."],
    doNow: ["If small plain pieces were eaten, monitor normally.", "Remove large chunks if your dog gulps.", "Phone a vet for choking, repeated vomiting, or pain."],
    avoid: ["Do not feed carrot cooked with onion, garlic, butter, or gravy.", "Do not give large hard chunks to gulpers.", "Do not assume vegetables balance an incomplete diet."],
    vetNow: ["Choking, gagging, or breathing trouble occurs.", "Repeated vomiting, pain, bloating, or diarrhoea appears.", "Your dog is on a veterinary diet and you want to add treats regularly."],
    safer: ["Cut raw carrot into thin sticks or small pieces.", "Use plain cooked carrot for dogs that chew poorly.", "Count treats as part of daily calories."],
    checklist: ["Plain carrot.", "Cut safely.", "Small portion.", "No seasoning.", "Chewing supervised."],
    faqs: [
      {
        question: "Can puppies eat carrots?",
        answer:
          "Tiny soft pieces may suit some puppies, but avoid choking risks and keep puppy food as the main diet.",
      },
      {
        question: "Are raw or cooked carrots better?",
        answer:
          "Either can work if plain and safely sized. Cooked may be easier for some dogs to chew.",
      },
      {
        question: "Can carrots clean dogs' teeth?",
        answer:
          "They are not a substitute for dental care. Ask your vet about dental checks and safe dental products.",
      },
    ],
    extraSources: nutritionSources,
  },
  {
    slug: "can-dogs-eat-pumpkin",
    name: "pumpkin",
    title: "Can Dogs Eat Pumpkin?",
    seoTitle: "Can Dogs Eat Pumpkin? | Dog Food Safety South Africa",
    description:
      "A South African guide to pumpkin for dogs, including plain cooked pumpkin, portions, stomach issues, spices, and vet advice.",
    rating: "Safe in small amounts",
    shortAnswer:
      "Plain cooked pumpkin can be safe for many dogs in small amounts. Avoid sugar, spices, butter, salt, onion, garlic, and using pumpkin to delay vet care.",
    context:
      "Pumpkin and butternut are common in South African meals. The safe version for dogs is plain and cooked; the risky version is mixed into rich, salty, buttery, or onion-containing dishes.",
    why: ["Plain pumpkin can add fibre.", "Too much fibre can worsen stomach upset.", "Pumpkin dishes may contain butter, sugar, salt, onion, garlic, or spices."],
    symptoms: ["Soft stool or diarrhoea after too much.", "Vomiting if a dog eats a large amount.", "Worsening signs if illness is treated at home too long.", "Stomach upset from seasoned dishes."],
    doNow: ["If a small plain amount was eaten, monitor normally.", "Check whether seasoning, onion, garlic, or butter was included.", "Phone a vet if symptoms persist or your dog is young, weak, or vomiting."],
    avoid: ["Do not use pumpkin as a cure for serious diarrhoea.", "Do not feed sweet pumpkin pie-style dishes.", "Do not add pumpkin regularly to a medical diet without vet advice."],
    vetNow: ["Diarrhoea lasts, contains blood, or affects a puppy.", "Repeated vomiting, weakness, pain, or dehydration occurs.", "Your dog has diabetes, pancreatitis, kidney disease, or a veterinary diet."],
    safer: ["Use plain cooked pumpkin in tiny amounts.", "Keep the main diet complete and balanced.", "Ask your vet for a bland feeding plan during illness."],
    checklist: ["Plain cooked pumpkin.", "No seasoning.", "Small amount.", "Not a treatment delay.", "Vet called for ongoing symptoms."],
    faqs: [
      {
        question: "Can pumpkin help diarrhoea?",
        answer:
          "It may help some dogs as part of a vet-advised plan, but ongoing or serious diarrhoea needs veterinary advice.",
      },
      {
        question: "Can dogs eat raw pumpkin?",
        answer:
          "Cooked plain pumpkin is usually easier to digest. Avoid hard chunks and seeds unless your vet advises otherwise.",
      },
      {
        question: "Can puppies eat pumpkin?",
        answer:
          "Ask your vet before using pumpkin for puppy stomach issues. Puppies can dehydrate quickly.",
      },
    ],
    extraSources: nutritionSources,
  },
];

function guideFor(item: FoodSafetyItem): GuideContent {
  const isLowRisk = item.rating === "Safe in small amounts";

  return {
    slug: item.slug,
    path: `/food/${item.slug}`,
    hubTitle: "Dog Food",
    hubPath: "/food",
    title: item.title,
    seoTitle: item.seoTitle,
    description: item.description,
    intro: `${item.shortAnswer} This DogHaven guide explains the practical South African context, warning signs, safer choices, and when to phone a vet.`,
    updated: reviewed,
    isHealthGuide: !isLowRisk,
    safetyRating: {
      label: item.rating,
      summary: severityCopy[item.rating],
    },
    quickFacts: [
      `Short answer: ${item.shortAnswer}`,
      "Risk depends on dog size, amount eaten, ingredients, health history, and how long ago it happened.",
      "Do not induce vomiting or give home remedies unless a veterinarian tells you to.",
      "If your dog is weak, collapsing, seizuring, bloated, struggling to breathe, or repeatedly vomiting, contact a vet immediately.",
    ],
    sections: [
      {
        heading: "Short answer",
        body: [item.shortAnswer, item.context],
      },
      {
        heading: `Why ${item.name} may be safe or risky`,
        body: [
          "A food can be low risk in one form and dangerous in another. Plain, tiny portions are very different from seasoned leftovers, sweetened products, bones, sauces, or large amounts eaten quickly.",
        ],
        bullets: item.why,
      },
      {
        heading: "Symptoms to watch for",
        body: [
          "Symptoms can appear quickly or be delayed. If you already know your dog ate a dangerous food, phone a vet before waiting for signs.",
        ],
        bullets: item.symptoms,
      },
      {
        heading: "What to do if your dog ate it",
        body: [
          "Stay calm, remove the food, and gather practical details. A vet can give better advice when you know the food, amount, time eaten, dog weight, and current symptoms.",
        ],
        checklist: item.doNow,
      },
      {
        heading: "What not to do",
        body: [
          "Avoid internet home treatment. The wrong action can make poisoning, obstruction, choking, or stomach irritation worse.",
        ],
        bullets: item.avoid,
      },
      {
        heading: "When to call a vet immediately",
        body: [
          "Phone a vet or emergency animal clinic immediately if the exposure is dangerous, the amount is unknown, your dog is high-risk, or symptoms are serious.",
        ],
        checklist: item.vetNow,
      },
      {
        heading: "Safer alternatives and prevention",
        body: [
          "Most food accidents are preventable with storage, clear family rules, and safer treat habits. Dogs do not need human snacks to feel loved.",
        ],
        bullets: item.safer,
      },
      {
        heading: "Practical owner checklist",
        body: [
          "Use this quick checklist before deciding whether the situation is truly low risk.",
        ],
        checklist: item.checklist,
      },
    ],
    faqs: item.faqs,
    related: [...(isLowRisk ? safeFoodRelated : commonRelated)],
    sources: item.extraSources ?? coreFoodSafetySources,
  };
}

const neverEatGuide: GuideContent = {
  slug: "foods-dogs-should-never-eat-south-africa",
  path: "/food/foods-dogs-should-never-eat-south-africa",
  hubTitle: "Dog Food",
  hubPath: "/food",
  title: "Foods Dogs Should Never Eat in South Africa",
  seoTitle: "Foods Dogs Should Never Eat South Africa | Safety List",
  description:
    "South African dog food safety list covering chocolate, grapes, raisins, onions, garlic, xylitol, alcohol, cooked bones and risky leftovers.",
  intro:
    "Some foods are not worth testing with a dog. This guide gives South African owners a quick, practical safety list for kitchens, lunch boxes, braais, holidays, and visitors.",
  updated: reviewed,
  isHealthGuide: true,
  safetyRating: {
    label: "Emergency",
    summary:
      "If your dog ate a dangerous food, phone a veterinarian or emergency animal clinic for advice. Do not wait for symptoms or try home treatment.",
  },
  quickFacts: [
    "Highest concern foods include chocolate, grapes, raisins, sultanas, xylitol or birch sugar, onion, garlic, alcohol, raw dough, and cooked bones.",
    "Risk depends on the food, amount eaten, dog size, ingredients, health, and timing.",
    "Keep packaging, ingredient labels, and the time eaten ready when you phone the vet.",
    "Do not induce vomiting unless a veterinarian specifically tells you to.",
  ],
  sections: [
    {
      heading: "Quick safety table",
      body: [
        "This table is a practical starting point, not a diagnosis tool. If your dog ate something risky, phone a vet with the details.",
      ],
      table: {
        headers: ["Food", "Safety rating", "Why it matters"],
        rows: [
          ["Chocolate or cocoa", "Emergency", "Can affect the heart and nervous system."],
          ["Grapes, raisins, sultanas, currants", "Emergency", "Can be linked to kidney injury in some dogs."],
          ["Xylitol or birch sugar", "Emergency", "Can cause sudden low blood sugar and liver injury."],
          ["Onion, garlic, leeks, chives", "Dangerous", "Can damage red blood cells, including cooked or powdered forms."],
          ["Cooked bones and chicken bones", "Dangerous", "Can splinter, choke, obstruct, or injure the gut."],
          ["Alcohol or raw yeast dough", "Emergency", "Can cause poisoning, bloating, weakness, and neurological signs."],
          ["Fatty braai leftovers", "Risky", "Can trigger stomach upset and pancreatitis risk in some dogs."],
        ],
      },
    },
    {
      heading: "Common South African situations",
      body: [
        "Many food emergencies happen during normal life: braais, school lunches, holiday baking, road trips, loadshedding snacks, visitors, and bins left open after gatherings.",
        "The highest-risk foods are often hidden inside mixed dishes, such as onion in gravy, raisins in fruitcake, garlic in sauces, xylitol in sugar-free products, and cooked bones in leftovers.",
      ],
      checklist: [
        "Check braai plates for bones, boerewors scraps, onion relish, and fatty offcuts.",
        "Keep fruitcake, hot cross buns, raisins, and trail mix away from dogs.",
        "Read peanut butter labels for xylitol or birch sugar.",
        "Store chocolate and sweets high up and behind closed doors.",
        "Use sealed bins after family meals and takeaways.",
      ],
    },
    {
      heading: "What to do after a risky food exposure",
      body: [
        "Remove the food, separate pets, and phone a vet. Useful details include your dog's weight, age, health problems, the food, estimated amount, time eaten, and current symptoms.",
      ],
      checklist: [
        "Keep the packet, wrapper, or ingredient list.",
        "Estimate the amount without delaying the call.",
        "Do not induce vomiting unless a vet instructs you.",
        "Do not give salt, oil, milk, charcoal, or human medicine.",
        "Go to emergency care if your dog is collapsing, seizuring, bloated, or struggling to breathe.",
      ],
    },
    {
      heading: "Foods that may be safe only in small amounts",
      body: [
        "Some foods are not toxic in plain small portions but still need moderation. Plain rice, plain cooked pumpkin, small carrot pieces, apple without seeds, and tiny banana slices may suit many healthy dogs, but they are treats, not balanced meals.",
      ],
      bullets: [
        "Keep extras under control so weight does not creep up.",
        "Avoid seasoning, sauces, butter, salt, onion, garlic, and bones.",
        "Ask your vet before adding extras to a puppy diet or medical diet.",
        "Stop feeding any food that causes vomiting, diarrhoea, itching, or discomfort.",
      ],
    },
    {
      heading: "Prevention checklist",
      body: [
        "A dog-safe kitchen is mostly habit. Put the rules where family members, guests, and children can follow them.",
      ],
      checklist: [
        "No chocolate, grapes, raisins, onion, garlic, alcohol, xylitol, or cooked bones for dogs.",
        "No feeding from braai plates or takeaway containers.",
        "No human snacks from children without adult checking.",
        "No open bins after meals.",
        "Vet number and nearest emergency clinic plan saved before a crisis.",
      ],
    },
  ],
  faqs: [
    {
      question: "What is the most dangerous food for dogs?",
      answer:
        "There is no single answer because risk depends on dog size and amount eaten, but chocolate, grapes, raisins, xylitol, onion, garlic, alcohol, raw dough, and cooked bones should be treated very seriously.",
    },
    {
      question: "Can I wait to see if symptoms appear?",
      answer:
        "For dangerous foods, no. Phone a vet early because some serious problems can be delayed.",
    },
    {
      question: "Are South African braai leftovers safe for dogs?",
      answer:
        "Usually not. Bones, fat, salt, sauces, onion, garlic, spices, and skewers can all create risk.",
    },
  ],
  related: [
    { title: "Dog Poisoning", description: "Emergency steps after toxin exposure.", href: "/emergency/dog-poisoning-south-africa" },
    { title: "Can Dogs Eat Chocolate?", description: "Chocolate safety and emergency guidance.", href: "/food/can-dogs-eat-chocolate" },
    { title: "Can Dogs Eat Grapes?", description: "Grape and raisin safety guidance.", href: "/food/can-dogs-eat-grapes" },
  ],
  sources: [...coreFoodSafetySources, ...boneSources.slice(0, 1), ...xylitolSources.slice(0, 1)],
};

export const phase9FoodCards: CardLink[] = [
  ...items.map((item) => ({
    title: item.title.replace("Can Dogs Eat ", "").replace("?", ""),
    description: item.description,
    href: `/food/${item.slug}`,
  })),
  {
    title: "Foods Dogs Should Never Eat",
    description:
      "A quick South African safety list for chocolate, grapes, xylitol, onions, garlic, cooked bones, alcohol, and braai leftovers.",
    href: "/food/foods-dogs-should-never-eat-south-africa",
  },
];

export const phase9GuidePages: GuideContent[] = [...items.map(guideFor), neverEatGuide];

export function getPhase9Guide(slug: string) {
  return phase9GuidePages.find((guide) => guide.slug === slug);
}

export function getPhase9GuidesByHub(hubPath: string) {
  return phase9GuidePages.filter((guide) => guide.hubPath === hubPath);
}
