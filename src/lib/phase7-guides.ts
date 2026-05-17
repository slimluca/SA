import type { CardLink, FAQ, GuideContent, HubContent, Source } from "@/lib/content";

type LocalSource = {
  label: string;
  href: string;
  note: string;
};

type ProvinceGuide = {
  name: string;
  slug: string;
  intro: string;
  overview: string[];
  climate: string[];
  risks: string[];
  outing: string[];
  cities: string[];
  sources: LocalSource[];
};

type CityGuide = {
  name: string;
  slug: string;
  province: string;
  intro: string;
  lifestyle: string[];
  careNotes: string[];
  outingNotes: string[];
  emergencyNotes: string[];
  sources: LocalSource[];
};

const reviewed = "2026-05-14";

const coreSources: Source[] = [
  {
    label: "South African Veterinary Council",
    href: "https://savc.org.za/",
    note: "Professional veterinary regulation and context for finding registered veterinary care.",
  },
  {
    label: "NSPCA",
    href: "https://nspca.co.za/",
    note: "South African animal welfare context, responsible ownership guidance, and SPCA network starting point.",
  },
  {
    label: "South African Government provinces information",
    href: "https://www.gov.za/about-sa/south-africas-provinces",
    note: "Official national overview of South Africa's provinces for geographic context.",
  },
];

const cityOfficialSources: Record<string, Source> = {
  "cape-town": {
    label: "City of Cape Town",
    href: "https://www.capetown.gov.za/",
    note: "Official municipal starting point for checking current dog walking, beach, park, by-law, and public-space rules.",
  },
  johannesburg: {
    label: "City of Johannesburg",
    href: "https://www.joburg.org.za/",
    note: "Official municipal starting point for checking current park, public-space, waste, and by-law information.",
  },
  pretoria: {
    label: "City of Tshwane",
    href: "https://www.tshwane.gov.za/",
    note: "Official municipal starting point for Pretoria public-space, park, and local by-law information.",
  },
  durban: {
    label: "eThekwini Municipality",
    href: "https://www.durban.gov.za/",
    note: "Official municipal starting point for Durban beach, park, public-space, and by-law information.",
  },
  gqeberha: {
    label: "Nelson Mandela Bay Municipality",
    href: "https://www.nelsonmandelabay.gov.za/",
    note: "Official municipal starting point for local public-space, beach, and by-law information.",
  },
  bloemfontein: {
    label: "Mangaung Metropolitan Municipality",
    href: "https://www.mangaung.co.za/",
    note: "Official municipal starting point for Bloemfontein public-space and local by-law information.",
  },
  "east-london": {
    label: "Buffalo City Metropolitan Municipality",
    href: "https://www.buffalocity.gov.za/",
    note: "Official municipal starting point for East London public-space, beach, and local by-law information.",
  },
  george: {
    label: "George Municipality",
    href: "https://www.george.gov.za/",
    note: "Official municipal starting point for local public-space, beach, trail, and by-law information.",
  },
  stellenbosch: {
    label: "Stellenbosch Municipality",
    href: "https://stellenbosch.gov.za/",
    note: "Official municipal starting point for Stellenbosch public-space and local by-law information.",
  },
  sandton: {
    label: "City of Johannesburg",
    href: "https://www.joburg.org.za/",
    note: "Official municipal starting point for Sandton public-space, park, and by-law information.",
  },
  centurion: {
    label: "City of Tshwane",
    href: "https://www.tshwane.gov.za/",
    note: "Official municipal starting point for Centurion public-space, park, and by-law information.",
  },
  ballito: {
    label: "KwaDukuza Municipality",
    href: "https://www.kwadukuza.gov.za/",
    note: "Official municipal starting point for Ballito public-space, beach, and local by-law information.",
  },
};

const provinceSources: Record<string, Source> = {
  "western-cape": {
    label: "Western Cape Government",
    href: "https://www.westerncape.gov.za/",
    note: "Official provincial starting point for public health, local government, and travel context.",
  },
  gauteng: {
    label: "Gauteng Provincial Government",
    href: "https://www.gauteng.gov.za/",
    note: "Official provincial starting point for Gauteng public information and local government context.",
  },
  "kwazulu-natal": {
    label: "KwaZulu-Natal Provincial Government",
    href: "https://www.kznonline.gov.za/",
    note: "Official provincial starting point for KwaZulu-Natal public information and local government context.",
  },
  "eastern-cape": {
    label: "Eastern Cape Provincial Government",
    href: "https://www.ecprov.gov.za/",
    note: "Official provincial starting point for Eastern Cape public information and local government context.",
  },
  "free-state": {
    label: "Free State Provincial Government",
    href: "https://www.freestateonline.fs.gov.za/",
    note: "Official provincial starting point for Free State public information and local government context.",
  },
  limpopo: {
    label: "Limpopo Provincial Government",
    href: "https://www.limpopo.gov.za/",
    note: "Official provincial starting point for Limpopo public information and local government context.",
  },
  mpumalanga: {
    label: "Mpumalanga Provincial Government",
    href: "https://www.mpumalanga.gov.za/",
    note: "Official provincial starting point for Mpumalanga public information and local government context.",
  },
  "north-west": {
    label: "North West Provincial Government",
    href: "https://www.nwpg.gov.za/",
    note: "Official provincial starting point for North West public information and local government context.",
  },
  "northern-cape": {
    label: "Northern Cape Provincial Government",
    href: "https://www.northern-cape.gov.za/",
    note: "Official provincial starting point for Northern Cape public information and local government context.",
  },
};

export const phase7ProvinceGuides: ProvinceGuide[] = [
  {
    name: "Western Cape",
    slug: "western-cape",
    intro:
      "Western Cape dog ownership often mixes coastal walks, mountain weather, wine-country weekends, windy suburbs, summer heat, winter rain, and busy urban living. This guide helps owners plan practical care without relying on unverified listings.",
    overview: [
      "Many Western Cape owners need to balance beaches, apartments, estates, farms, holiday towns, and traffic-heavy metro routines.",
      "Cape Town and nearby towns can offer many dog-friendly possibilities, but rules vary by beach, trail, municipality, estate, and venue.",
      "Owners should keep vet records, ID tags, microchip details, tick prevention, and a heat plan ready for summer outings.",
    ],
    climate: [
      "Hot, dry summer days can make pavements, cars, exposed beaches, and hikes risky for heat-sensitive dogs.",
      "Winter rain can worsen muddy coats, ear issues after wet walks, and slippery paws in older dogs.",
      "Windy coastal conditions can dehydrate dogs quickly, so carry water even on cooler walks.",
    ],
    risks: [
      "Ticks after mountain, farm, long-grass, or kennel exposure.",
      "Beach hazards such as salt water, fishing hooks, tides, hot sand, and changing access rules.",
      "Snake encounters on farms, mountains, greenbelts, and warm-season hikes.",
      "Urban traffic, apartment rules, and body corporate restrictions in denser areas.",
    ],
    outing: [
      "Verify official beach and trail rules before every outing because access can differ by area and season.",
      "Use a lead where required and avoid letting dogs chase wildlife, livestock, cyclists, runners, or children.",
      "Plan cool-hour walks in summer and rinse or brush out sand after beach trips.",
    ],
    cities: ["cape-town", "george", "stellenbosch"],
    sources: [provinceSources["western-cape"], cityOfficialSources["cape-town"]],
  },
  {
    name: "Gauteng",
    slug: "gauteng",
    intro:
      "Gauteng dog care is shaped by dense suburbs, estates, townhouses, traffic, summer thunderstorms, winter cold fronts, and busy work routines. Good planning makes urban dog ownership calmer.",
    overview: [
      "Many Gauteng dogs live around high walls, security gates, small gardens, complexes, and close neighbours, so barking, leash manners, and visitor routines matter.",
      "Dog owners should plan for daily enrichment because a garden alone rarely meets a dog's exercise and sniffing needs.",
      "Emergency preparation is important because traffic can slow urgent trips to a vet or after-hours clinic.",
    ],
    climate: [
      "Highveld summer heat and thunderstorms can affect walk timing, noise fears, and separation distress.",
      "Winter mornings can be cold and dry, especially for short-coated, senior, or thin dogs.",
      "Hot paving and enclosed cars remain major risks during summer errands.",
    ],
    risks: [
      "Thunderstorm fear and noise sensitivity.",
      "Traffic exposure around school runs, busy roads, and estate gates.",
      "Tick and flea pressure in parks, kennels, long grass, and multi-dog environments.",
      "Behaviour issues from under-exercise, boundary barking, and limited safe off-lead spaces.",
    ],
    outing: [
      "Check municipal and estate rules before using parks or public open spaces.",
      "Keep dogs under control around runners, cyclists, children, and other dogs.",
      "Avoid hot midday pavement and carry water on longer suburban walks.",
    ],
    cities: ["johannesburg", "pretoria", "sandton", "centurion"],
    sources: [provinceSources.gauteng, cityOfficialSources.johannesburg, cityOfficialSources.pretoria],
  },
  {
    name: "KwaZulu-Natal",
    slug: "kwazulu-natal",
    intro:
      "KwaZulu-Natal dog ownership can involve humid coastal heat, inland storms, beaches, estates, farms, ticks, snakes, and holiday travel. Owners need flexible routines and careful outing checks.",
    overview: [
      "Coastal dogs often need heat, humidity, ear, skin, tick, and beach-safety planning.",
      "Inland and rural homes may need extra attention to snakes, ticks, fencing, livestock, and travel distance to emergency care.",
      "Holiday towns can become busy during peak seasons, so dogs who struggle with crowds may need quieter plans.",
    ],
    climate: [
      "Humidity can make heat harder for flat-faced, overweight, senior, or dark-coated dogs.",
      "Warm wet conditions can worsen skin irritation, fleas, ticks, and ear problems.",
      "Storms can trigger fear, escape attempts, and noise-related distress.",
    ],
    risks: [
      "Heat stress during coastal walks, beach visits, and car stops.",
      "Ticks and fleas in warm humid environments.",
      "Snake encounters around gardens, farms, and warm-season bushy areas.",
      "Changing beach and public-space rules in holiday areas.",
    ],
    outing: [
      "Check current eThekwini or local municipality beach rules before taking a dog to the coast.",
      "Carry fresh water because dogs should not drink seawater.",
      "Avoid crowded peak-season spaces if your dog is nervous, reactive, or poor on lead.",
    ],
    cities: ["durban", "ballito"],
    sources: [provinceSources["kwazulu-natal"], cityOfficialSources.durban, cityOfficialSources.ballito],
  },
  {
    name: "Eastern Cape",
    slug: "eastern-cape",
    intro:
      "Eastern Cape dog care ranges from coastal city life and beaches to rural roads, farms, windy weather, and long travel distances. Owners should prepare for both local routine and emergency access.",
    overview: [
      "Gqeberha and East London owners may need beach-rule checks, wind-aware outings, and tick prevention after coastal grass or farm visits.",
      "Rural owners should plan secure fencing, livestock etiquette, snake awareness, and transport options for vet care.",
      "Dogs travelling between towns need water, shade, ID, and vaccination records kept handy.",
    ],
    climate: [
      "Coastal wind can dry dogs out during long walks, even when temperatures feel mild.",
      "Hot inland conditions can make midday walks and car waits unsafe.",
      "Wet spells and beach outings can increase ear and skin care needs.",
    ],
    risks: [
      "Ticks in coastal grass, rural land, farms, and kennel environments.",
      "Beach hazards and changing municipal access rules.",
      "Long distances to after-hours veterinary care in some rural areas.",
      "Road safety around unfenced properties and rural routes.",
    ],
    outing: [
      "Check municipal rules for beaches and public spaces before going.",
      "Use recall and leash control around livestock, wildlife, anglers, and children.",
      "Carry water and a towel for beach or river trips.",
    ],
    cities: ["gqeberha", "east-london"],
    sources: [provinceSources["eastern-cape"], cityOfficialSources.gqeberha, cityOfficialSources["east-london"]],
  },
  {
    name: "Free State",
    slug: "free-state",
    intro:
      "Free State dog ownership is shaped by open space, dry conditions, cold winters, hot summers, farming areas, and long drives between towns. Reliable routines matter more than trendy dog-care ideas.",
    overview: [
      "Many dogs live in larger yards, but they still need walks, enrichment, training, grooming checks, and human interaction.",
      "Owners should plan for seasonal extremes: hot afternoons, icy mornings, dust, thorns, and storm anxiety.",
      "Emergency planning matters where after-hours care may require a longer drive.",
    ],
    climate: [
      "Hot dry summers can cause dehydration and heat stress during midday exercise.",
      "Cold winter mornings can be hard on short-coated, elderly, or thin dogs.",
      "Dust and dry grass can irritate paws, eyes, and coats.",
    ],
    risks: [
      "Ticks after farms, kennels, parks, or long-grass walks.",
      "Snake encounters in warm months.",
      "Escape risk from large properties with weak gates or fencing.",
      "Longer travel time for specialist or after-hours veterinary care.",
    ],
    outing: [
      "Check local municipal rules for parks and public spaces.",
      "Carry water on longer walks and avoid hot tar or dusty midday routes.",
      "Use a lead around livestock, children, sport fields, and roads.",
    ],
    cities: ["bloemfontein"],
    sources: [provinceSources["free-state"], cityOfficialSources.bloemfontein],
  },
  {
    name: "Limpopo",
    slug: "limpopo",
    intro:
      "Limpopo dog care often means heat planning, tick prevention, snake awareness, rural travel, secure fencing, and practical emergency preparation. Shade and water are daily essentials.",
    overview: [
      "Hot conditions can make exercise timing, car safety, and water access central parts of dog ownership.",
      "Rural, small-town, and wildlife-adjacent areas require careful control around livestock, wildlife, roads, and snakes.",
      "Owners should keep vet records and transport plans ready because specialist or emergency care may not be nearby.",
    ],
    climate: [
      "High temperatures make early morning and evening walks safer for many dogs.",
      "Dogs need reliable shade, clean water, and cool resting areas.",
      "Heat-sensitive breeds, senior dogs, and overweight dogs need extra caution.",
    ],
    risks: [
      "Heatstroke during walks, yard time, or car travel.",
      "Ticks and fleas in warm environments.",
      "Snake and wildlife encounters.",
      "Long travel distances to emergency veterinary care in some areas.",
    ],
    outing: [
      "Verify reserve, lodge, farm-stay, and accommodation pet rules before travelling.",
      "Keep dogs on lead around wildlife, livestock, roads, and unfamiliar properties.",
      "Avoid midday outings in summer heat.",
    ],
    cities: [],
    sources: [provinceSources.limpopo],
  },
  {
    name: "Mpumalanga",
    slug: "mpumalanga",
    intro:
      "Mpumalanga dog ownership can include hot Lowveld conditions, cooler highland towns, farms, estates, travel routes, wildlife areas, ticks, and snakes. Owners need local-risk thinking.",
    overview: [
      "Dogs near wildlife, farms, plantations, or rural roads need secure fencing, recall, and careful lead control.",
      "Travel and holiday accommodation rules should be checked directly before bringing a dog.",
      "Tick prevention and heat planning are especially important in warmer areas.",
    ],
    climate: [
      "Lowveld heat can make midday exercise dangerous.",
      "Highland areas can be cooler, with mist, rain, and muddy coats.",
      "Summer storms can trigger fear and escape attempts.",
    ],
    risks: [
      "Ticks and fleas in warm, grassy, rural, or kennel environments.",
      "Snake encounters around gardens, farms, and bushy areas.",
      "Wildlife and livestock conflict if dogs roam.",
      "Travel distance to emergency or specialist care.",
    ],
    outing: [
      "Check protected-area and accommodation rules because many conservation spaces restrict pets.",
      "Keep dogs controlled near wildlife, cyclists, hikers, and livestock.",
      "Carry water and avoid heat-heavy activities.",
    ],
    cities: [],
    sources: [provinceSources.mpumalanga],
  },
  {
    name: "North West",
    slug: "north-west",
    intro:
      "North West dog care often combines hot conditions, mining towns, farms, estates, rural roads, and weekend travel. Practical ownership starts with heat, fencing, ticks, and emergency planning.",
    overview: [
      "Dogs in larger yards still need structured walks, enrichment, training, grooming, and safe visitor routines.",
      "Owners should prepare for hot afternoons, ticks, snakes, and long drives to some veterinary services.",
      "Holiday and resort rules should be checked directly before travelling with dogs.",
    ],
    climate: [
      "Hot dry periods can create dehydration and paw-burn risks.",
      "Storms can increase noise fear and escape behaviour.",
      "Dust and dry grass can irritate paws and coats.",
    ],
    risks: [
      "Heat stress during yard time, walks, and car travel.",
      "Ticks in grass, farms, kennels, and bushy areas.",
      "Snake encounters and road safety on rural properties.",
      "Emergency vet access depending on town and time of day.",
    ],
    outing: [
      "Check resort, park, estate, and municipal rules before visiting.",
      "Use a lead where required and keep dogs away from wildlife or livestock.",
      "Plan water stops during road trips.",
    ],
    cities: [],
    sources: [provinceSources["north-west"]],
  },
  {
    name: "Northern Cape",
    slug: "northern-cape",
    intro:
      "Northern Cape dog ownership is shaped by distance, heat, dry landscapes, rural towns, dust, thorns, road trips, and emergency planning. Preparation matters because help may be far away.",
    overview: [
      "Dogs need shade, water, tick checks, paw checks, and transport planning, especially in remote areas.",
      "Owners should think carefully before taking dogs on long hot drives or outdoor adventures.",
      "Local rules for parks, accommodation, and conservation areas should be checked before travel.",
    ],
    climate: [
      "Extreme heat can make midday exercise unsafe.",
      "Cold desert nights and winter mornings can affect short-coated or senior dogs.",
      "Dry dust, thorns, and rough ground can affect paws and coats.",
    ],
    risks: [
      "Heatstroke and dehydration.",
      "Long distances to veterinary help.",
      "Ticks, snakes, thorns, and rural road hazards.",
      "Accommodation or conservation-area pet restrictions.",
    ],
    outing: [
      "Carry more water than you think your dog will need.",
      "Avoid off-lead roaming in unfamiliar rural or conservation areas.",
      "Check official rules before visiting parks, reserves, or accommodation with dogs.",
    ],
    cities: [],
    sources: [provinceSources["northern-cape"]],
  },
];

export const phase7CityGuides: CityGuide[] = [
  {
    name: "Cape Town",
    slug: "cape-town",
    province: "Western Cape",
    intro:
      "Cape Town dog ownership can be brilliant and complicated: beaches, mountains, apartments, traffic, wind, summer heat, winter rain, and changing local rules all matter.",
    lifestyle: [
      "Many Cape Town dogs share space with cyclists, runners, children, tourists, other dogs, and wildlife-sensitive areas.",
      "Apartment and complex living makes barking, lift manners, toileting routines, and leash control important.",
      "Beach and mountain outings should be planned around current official rules, heat, wind, ticks, and recall ability.",
    ],
    careNotes: [
      "Keep paws safe from hot promenade paving and summer tar.",
      "Brush or rinse after beach sand, salt water, or mountain dust.",
      "Plan tick checks after greenbelts, mountain edges, kennels, and long grass.",
    ],
    outingNotes: [
      "Use the City of Cape Town as the official starting point for current dog walking and beach rules.",
      "Do not assume an old dog-friendly beach list is still accurate.",
      "Keep dogs away from wildlife and protected areas unless rules clearly allow access.",
    ],
    emergencyNotes: [
      "Traffic can slow urgent vet trips, so save your regular vet and nearest after-hours options before you need them.",
      "Know the quickest route from home, work, and favourite walking areas.",
    ],
    sources: [cityOfficialSources["cape-town"], provinceSources["western-cape"]],
  },
  {
    name: "Johannesburg",
    slug: "johannesburg",
    province: "Gauteng",
    intro:
      "Johannesburg dogs often live with high walls, busy roads, security gates, townhouses, thunderstorms, and owner workdays shaped by traffic. Training and routine matter.",
    lifestyle: [
      "Boundary barking is common where dogs watch gates, pavements, guards, delivery drivers, and passing dogs.",
      "Small gardens and complexes need enrichment, walks, and quiet routines rather than expecting the yard to do all the work.",
      "Thunderstorms can trigger panic, hiding, barking, and escape attempts.",
    ],
    careNotes: [
      "Walk early or late during hot spells and watch hot pavement.",
      "Use tick and flea prevention after parks, kennels, and long grass.",
      "Build safe gate routines so dogs do not rush into traffic.",
    ],
    outingNotes: [
      "Check City of Johannesburg or park authority information before assuming off-lead access.",
      "Keep dogs controlled around runners, children, cyclists, and picnic areas.",
      "Choose quieter walking times for reactive or nervous dogs.",
    ],
    emergencyNotes: [
      "Traffic can be a serious delay, so identify after-hours options in advance and keep records accessible.",
      "Have a transport plan if your dog is too large to lift alone.",
    ],
    sources: [cityOfficialSources.johannesburg, provinceSources.gauteng],
  },
  {
    name: "Pretoria",
    slug: "pretoria",
    province: "Gauteng",
    intro:
      "Pretoria dog ownership mixes jacaranda-lined suburbs, estates, flats, hot summers, thunderstorms, government precincts, and busy commuter routes.",
    lifestyle: [
      "Many dogs need calm behaviour around gates, domestic workers, gardeners, visitors, and school traffic.",
      "Suburban walks can include other dogs behind fences, cyclists, runners, and traffic-heavy roads.",
      "Estates and complexes may have strict pet, noise, leash, and waste rules.",
    ],
    careNotes: [
      "Plan heat-safe walk times in summer.",
      "Keep thunderstorm and noise plans ready for fearful dogs.",
      "Use regular tick prevention after parks, kennels, and grassy areas.",
    ],
    outingNotes: [
      "Check City of Tshwane rules before using parks or assuming dog access.",
      "Respect leash rules and estate requirements.",
      "Avoid letting dogs rush wildlife, children, or other dogs in open spaces.",
    ],
    emergencyNotes: [
      "Save your regular vet and after-hours clinic options, especially if you commute across the metro.",
      "Keep vaccination and medication records on your phone.",
    ],
    sources: [cityOfficialSources.pretoria, provinceSources.gauteng],
  },
  {
    name: "Durban",
    slug: "durban",
    province: "KwaZulu-Natal",
    intro:
      "Durban dog care is shaped by humidity, beaches, warm weather, holiday crowds, skin issues, ticks, fleas, and public-space rules that owners should check before outings.",
    lifestyle: [
      "Coastal humidity can make heat harder for flat-faced, overweight, senior, or dark-coated dogs.",
      "Beach access and promenade etiquette require current rule checks and good leash manners.",
      "Holiday seasons can make public spaces too crowded for nervous or reactive dogs.",
    ],
    careNotes: [
      "Dry ears and skin folds after swimming or bathing.",
      "Watch for fleas, ticks, hot spots, and itchy skin in warm humid conditions.",
      "Avoid midday walks in humid heat.",
    ],
    outingNotes: [
      "Use eThekwini municipal information as the official starting point for beach and public-space rules.",
      "Bring fresh water so dogs do not drink seawater.",
      "Pick up waste and leave if your dog is overwhelmed.",
    ],
    emergencyNotes: [
      "Heatstroke, snake bites, poisoning, and beach injuries need fast vet advice.",
      "Know which after-hours option is reachable from your suburb and common outing spots.",
    ],
    sources: [cityOfficialSources.durban, provinceSources["kwazulu-natal"]],
  },
  {
    name: "Gqeberha",
    slug: "gqeberha",
    province: "Eastern Cape",
    intro:
      "Gqeberha dog ownership often includes wind, beaches, suburban homes, traffic corridors, coastal grass, and active outdoor lifestyles.",
    lifestyle: [
      "Windy coastal walks can still dehydrate dogs, so carry water even when it feels cool.",
      "Beach and public-space access should be checked through official municipal information.",
      "Some dogs need extra confidence work around wind, waves, cyclists, runners, and busy roads.",
    ],
    careNotes: [
      "Check paws and ears after beach trips.",
      "Use tick prevention after grassy coastal areas or kennels.",
      "Watch heat and wind exposure on long walks.",
    ],
    outingNotes: [
      "Verify Nelson Mandela Bay rules before assuming beach or park access.",
      "Use a lead around wildlife-sensitive areas, children, and other dogs.",
      "Avoid forcing nervous dogs into crowded beachfront spaces.",
    ],
    emergencyNotes: [
      "Save nearby vet and after-hours details before beach or travel days.",
      "Keep a towel, water, and lead in the car for outing mishaps.",
    ],
    sources: [cityOfficialSources.gqeberha, provinceSources["eastern-cape"]],
  },
  {
    name: "Bloemfontein",
    slug: "bloemfontein",
    province: "Free State",
    intro:
      "Bloemfontein dog care is practical and seasonal: hot summers, cold winters, dry dust, suburban yards, sport fields, and longer regional travel all affect routines.",
    lifestyle: [
      "Large yards do not replace walks, enrichment, training, and social contact.",
      "Dogs may need cold-weather comfort in winter and heat-safe routines in summer.",
      "Public parks and fields need leash control, waste bags, and current municipal rule checks.",
    ],
    careNotes: [
      "Watch paw comfort on hot tar and dusty ground.",
      "Brush dust and dry grass from coats after outdoor activity.",
      "Use tick prevention after long grass, kennels, and farm visits.",
    ],
    outingNotes: [
      "Check Mangaung municipal information before assuming public-space access.",
      "Keep dogs controlled around sports fields, children, and roads.",
      "Carry water during warm dry walks.",
    ],
    emergencyNotes: [
      "Keep a transport plan for urgent care, especially after hours or outside central areas.",
      "Save vet records and vaccination history on your phone.",
    ],
    sources: [cityOfficialSources.bloemfontein, provinceSources["free-state"]],
  },
  {
    name: "East London",
    slug: "east-london",
    province: "Eastern Cape",
    intro:
      "East London dog care often involves beaches, river areas, humid spells, windy walks, suburban yards, and travel between coastal and inland areas.",
    lifestyle: [
      "Beach and river outings need rule checks, fresh water, recall control, and post-walk grooming.",
      "Warm humid conditions can worsen ear, skin, tick, and flea issues.",
      "Dogs who chase birds, livestock, or wildlife need lead management.",
    ],
    careNotes: [
      "Dry ears after swimming and watch for head shaking.",
      "Check for ticks after grassy or rural outings.",
      "Avoid hot, humid exercise for heat-sensitive dogs.",
    ],
    outingNotes: [
      "Use Buffalo City municipal information as a starting point for current rules.",
      "Do not rely on old beach access claims.",
      "Carry waste bags and leave if the space is too crowded for your dog.",
    ],
    emergencyNotes: [
      "Beach injuries, heat stress, snake encounters, and poisoning concerns should be discussed with a vet quickly.",
      "Know after-hours access before weekend outings.",
    ],
    sources: [cityOfficialSources["east-london"], provinceSources["eastern-cape"]],
  },
  {
    name: "George",
    slug: "george",
    province: "Western Cape",
    intro:
      "George dog ownership sits between mountains, forests, beaches, rain, tourism, estates, and Garden Route travel. Outdoor access is wonderful when rules and safety are respected.",
    lifestyle: [
      "Dogs may encounter cyclists, hikers, livestock, wildlife, tourists, and other dogs on popular routes.",
      "Wet weather and forest walks can increase grooming, paw, tick, and ear checks.",
      "Holiday accommodation rules should be checked directly before travel.",
    ],
    careNotes: [
      "Check ticks after forest, farm, and long-grass outings.",
      "Dry coats and ears after rain or water activity.",
      "Watch for grass seeds, thorns, and muddy paws.",
    ],
    outingNotes: [
      "Check George municipal, conservation, beach, and trail rules before taking dogs.",
      "Use a lead around wildlife, cyclists, and other trail users.",
      "Carry water even on cooler forest walks.",
    ],
    emergencyNotes: [
      "Have vet contacts ready when travelling along the Garden Route.",
      "Keep a first-aid kit and tick remover in your outing bag.",
    ],
    sources: [cityOfficialSources.george, provinceSources["western-cape"]],
  },
  {
    name: "Stellenbosch",
    slug: "stellenbosch",
    province: "Western Cape",
    intro:
      "Stellenbosch dog care blends student-town energy, wine farms, estates, traffic, heat, mountain edges, and visitor-heavy public spaces.",
    lifestyle: [
      "Dogs in flats, digs, and estates need clear noise, toileting, visitor, and leash routines.",
      "Wine farm or accommodation pet policies must be checked directly because rules differ widely.",
      "Hot summer afternoons can make vineyard, pavement, and mountain-edge walks risky.",
    ],
    careNotes: [
      "Use tick prevention after farms, long grass, and mountain areas.",
      "Plan cool-hour walks in summer.",
      "Train calm behaviour around visitors, cyclists, students, and outdoor dining spaces.",
    ],
    outingNotes: [
      "Check Stellenbosch municipal and venue rules before outings.",
      "Do not assume a wine farm is dog-friendly because another one is.",
      "Keep dogs on lead around livestock, wildlife, and children.",
    ],
    emergencyNotes: [
      "Know the closest vet options for both home and weekend outing areas.",
      "Keep records handy if your dog travels between towns.",
    ],
    sources: [cityOfficialSources.stellenbosch, provinceSources["western-cape"]],
  },
  {
    name: "Sandton",
    slug: "sandton",
    province: "Gauteng",
    intro:
      "Sandton dog ownership is urban, busy, and often apartment or estate-based. Dogs need calm routines for lifts, traffic, security gates, visitors, and close neighbours.",
    lifestyle: [
      "Many dogs live near construction, traffic, delivery drivers, generators, and high-density complexes.",
      "Barking, separation distress, and leash reactivity can become neighbour problems quickly.",
      "Dog-friendly restaurants, parks, and accommodation rules should be verified directly before visits.",
    ],
    careNotes: [
      "Practise lift, lobby, parking basement, and pavement manners.",
      "Plan enrichment for workdays when owners commute or work long hours.",
      "Avoid hot paving during summer lunch walks.",
    ],
    outingNotes: [
      "Use City of Johannesburg information as the official municipal starting point.",
      "Ask venues directly whether dogs are allowed and under what conditions.",
      "Keep dogs close around outdoor dining and busy pavements.",
    ],
    emergencyNotes: [
      "Traffic can slow urgent vet travel, so know the nearest reachable after-hours option.",
      "Keep pet insurance or emergency fund information easy to access.",
    ],
    sources: [cityOfficialSources.sandton, provinceSources.gauteng],
  },
  {
    name: "Centurion",
    slug: "centurion",
    province: "Gauteng",
    intro:
      "Centurion dog ownership often mixes estates, townhouses, busy roads, family suburbs, parks, summer storms, and commuter routines between Johannesburg and Pretoria.",
    lifestyle: [
      "Estate and complex rules may shape dog size, barking, fencing, waste, and leash expectations.",
      "Dogs need safe gate routines because many homes are close to busy roads.",
      "Thunderstorm fear and workday boredom can contribute to barking, chewing, or escape attempts.",
    ],
    careNotes: [
      "Walk during cooler times in summer.",
      "Use regular tick prevention after parks, kennels, and long-grass areas.",
      "Train calm behaviour around gates, security staff, visitors, and children.",
    ],
    outingNotes: [
      "Check City of Tshwane and estate rules before assuming public-space access.",
      "Keep dogs on lead near roads, cyclists, and shared paths.",
      "Avoid busy public areas if your dog is reactive or overwhelmed.",
    ],
    emergencyNotes: [
      "Save vet and after-hours options for both Centurion and commute routes.",
      "Plan how to transport a large dog if you are alone.",
    ],
    sources: [cityOfficialSources.centurion, provinceSources.gauteng],
  },
  {
    name: "Ballito",
    slug: "ballito",
    province: "KwaZulu-Natal",
    intro:
      "Ballito dog care is shaped by coastal humidity, beaches, holiday crowds, estates, ticks, skin issues, and accommodation or beach rules that can vary.",
    lifestyle: [
      "Coastal dogs need heat, humidity, ear, skin, and tick planning.",
      "Holiday periods can make beaches, promenades, restaurants, and accommodation too crowded for nervous dogs.",
      "Estate and body corporate rules may be strict around leashes, barking, and waste.",
    ],
    careNotes: [
      "Dry ears after swimming and watch for itching or hot spots.",
      "Use parasite prevention consistently in warm humid weather.",
      "Avoid hot beach sand and midday coastal walks.",
    ],
    outingNotes: [
      "Check KwaDukuza municipal and venue rules before beach or public-space outings.",
      "Carry fresh water and do not let dogs drink seawater.",
      "Keep dogs controlled around children, anglers, wildlife, and other dogs.",
    ],
    emergencyNotes: [
      "Know the nearest vet and after-hours option before peak-season trips.",
      "Take heat stress, poisoning, snake bites, and beach injuries seriously.",
    ],
    sources: [cityOfficialSources.ballito, provinceSources["kwazulu-natal"]],
  },
];

export const provinceCards: CardLink[] = phase7ProvinceGuides.map((province) => ({
  title: province.name,
  description: `Practical dog ownership notes for ${province.name}: climate, local risks, adoption, grooming, training, outings, and emergency planning.`,
  href: `/province/${province.slug}`,
}));

export const cityCards: CardLink[] = phase7CityGuides.map((city) => ({
  title: city.name,
  description: `Local dog-owner guidance for ${city.name}: daily care, outings, rules to verify, adoption, costs, and emergency preparation.`,
  href: `/city/${city.slug}`,
}));

export const provinceHub: HubContent = {
  slug: "province",
  path: "/province",
  title: "Dog Owner Guides by South African Province",
  seoTitle: "Dog Owner Guides by Province | DogHaven South Africa",
  description:
    "South Africa-specific dog owner guides by province, covering climate, local risks, adoption, grooming, training, dog-friendly outings, and emergency planning.",
  kicker: "Province guides",
  intro:
    "Dog care changes by province: heat, rain, ticks, snakes, beaches, rural distance, city density, rental rules, and emergency access all shape practical ownership. These guides are not directories. They help you know what to check locally.",
  cards: provinceCards,
  related: [
    { title: "Local Service Guides", description: "City guides for grooming, training, emergency vet preparation, and dog-friendly checks.", href: "/local" },
    { title: "City Guides", description: "Practical dog owner notes for major South African cities.", href: "/city" },
    { title: "Dog-Friendly Places", description: "How to verify dog-friendly rules before outings.", href: "/dog-friendly" },
    { title: "Emergency Help", description: "Prepare before urgent symptoms happen.", href: "/emergency" },
    { title: "Dog Laws", description: "Check rule sources before outings, rentals, complexes, and travel.", href: "/laws" },
  ],
  faqs: [
    {
      question: "Are these province pages dog business directories?",
      answer:
        "No. DogHaven does not publish unverified local listings. These pages help owners understand local care context and what to verify directly.",
    },
    {
      question: "Why does province matter for dog care?",
      answer:
        "Climate, ticks, snakes, beaches, rural travel, city density, local rules, and emergency access can change practical dog-care decisions.",
    },
    {
      question: "Will DogHaven add verified local listings later?",
      answer:
        "Possibly, but only after manual verification. DogHaven will not publish fake listings, fake reviews, or invented phone numbers.",
    },
  ],
};

export const cityHub: HubContent = {
  slug: "city",
  path: "/city",
  title: "Dog Owner Guides by South African City",
  seoTitle: "Dog Owner Guides by City | DogHaven South Africa",
  description:
    "Local dog owner guides for major South African cities, covering vets, adoption, training, grooming, dog-friendly rules, heat, traffic, costs, and emergency preparation.",
  kicker: "City guides",
  intro:
    "City dog ownership is shaped by traffic, housing, parks, beaches, public rules, vet access, heat, ticks, and daily routines. These city guides focus on how to choose and what to check, without inventing local listings.",
  cards: cityCards,
  related: [
    { title: "Local Service Guides", description: "Grooming, training, emergency vet, and dog-friendly service-intent guides by city.", href: "/local" },
    { title: "Province Guides", description: "Wider provincial dog-care context.", href: "/province" },
    { title: "Training", description: "Prepare dogs for public spaces and city routines.", href: "/training" },
    { title: "Grooming", description: "Coat, skin, tick, paw, and beach-care planning.", href: "/grooming" },
    { title: "Dog Laws", description: "Leash, barking, rental, complex, and public-space rule checks.", href: "/laws" },
  ],
  faqs: [
    {
      question: "Does DogHaven recommend specific local businesses?",
      answer:
        "No. These pages do not list or rank vets, groomers, trainers, shelters, parks, hotels, or restaurants. Owners should verify providers and rules directly.",
    },
    {
      question: "How should I find a vet in my city?",
      answer:
        "Start with registered veterinary practices, ask your regular vet for after-hours guidance, check reviews carefully, and keep records ready. For urgent symptoms, phone a vet immediately.",
    },
    {
      question: "Can dog-friendly rules change?",
      answer:
        "Yes. Always check official municipal, venue, accommodation, park, beach, or conservation rules before visiting.",
    },
  ],
};

function cityLinksForProvince(province: ProvinceGuide): CardLink[] {
  return province.cities
    .map((slug) => phase7CityGuides.find((city) => city.slug === slug))
    .filter((city): city is CityGuide => Boolean(city))
    .map((city) => ({
      title: city.name,
      description: `City-specific notes for dog owners in ${city.name}.`,
      href: `/city/${city.slug}`,
    }));
}

function commonRelated(extra: CardLink[] = []): CardLink[] {
  return [
    ...extra,
    { title: "Dog Health", description: "Prevention, symptoms, and vet guidance.", href: "/health" },
    { title: "Emergency Help", description: "Urgent symptoms and preparation.", href: "/emergency" },
    { title: "Adoption Safety", description: "Shelter, rescue, and scam guidance.", href: "/adoption" },
    { title: "Training", description: "Humane everyday behaviour support.", href: "/training" },
    { title: "Grooming", description: "Coat, nails, ears, ticks, and skin care.", href: "/grooming" },
    { title: "Dog-Friendly Places", description: "Verify rules before public outings.", href: "/dog-friendly" },
  ];
}

function localFaqs(place: string, isCity: boolean): FAQ[] {
  return [
    {
      question: `Does DogHaven list vets, groomers, trainers, or shelters in ${place}?`,
      answer:
        "No. DogHaven does not publish unverified local listings. Use these guides to know what to ask and verify providers directly.",
    },
    {
      question: `How should I find emergency vet help in ${place}?`,
      answer:
        "Save your regular vet's number, ask them which after-hours option they recommend, keep vaccination and medication records ready, and phone a vet immediately for urgent symptoms.",
    },
    {
      question: isCity ? `Are dog-friendly places in ${place} always open to dogs?` : `Are dog-friendly rules the same across ${place}?`,
      answer:
        "No. Rules can change by municipality, venue, beach, park, estate, accommodation, season, and time of day. Check official or venue rules before you go.",
    },
  ];
}

function sourceList(local: LocalSource[]): Source[] {
  return [...local, ...coreSources];
}

export const phase7ProvincePages: GuideContent[] = phase7ProvinceGuides.map((province) => {
  const cityCardsForProvince = cityLinksForProvince(province);

  return {
    slug: province.slug,
    path: `/province/${province.slug}`,
    hubTitle: "Province Guides",
    hubPath: "/province",
    title: `${province.name} Dog Owner Guide`,
    seoTitle: `${province.name} Dog Owner Guide | DogHaven South Africa`,
    description: `Practical ${province.name} dog owner guidance covering climate, local risks, adoption, grooming, training, dog-friendly outings, and emergency preparation without fake listings.`,
    intro: province.intro,
    updated: reviewed,
    quickFacts: [
      "DogHaven does not publish unverified local business listings, fake phone numbers, fake reviews, or fake verified badges.",
      "Use this page as a practical local planning guide, then verify vets, shelters, groomers, trainers, venues, parks, beaches, and accommodation directly.",
      "Rules for parks, beaches, trails, estates, and venues can change. Check official local rules before visiting.",
      "For urgent symptoms, phone a veterinarian or emergency animal clinic immediately rather than searching for general advice.",
    ],
    sections: [
      {
        heading: `Dog ownership in ${province.name}`,
        body: province.overview,
      },
      {
        heading: "Climate and seasonal care",
        body: [
          `${province.name} owners should plan dog care around local weather rather than a generic national routine.`,
          "Adjust exercise, grooming, parasite prevention, and travel plans as seasons change.",
        ],
        bullets: province.climate,
      },
      {
        heading: "Common local risks to plan for",
        body: [
          "Local risks do not mean every dog will face every problem. They are prompts for better preparation, especially before travel, adoption, or outdoor activities.",
        ],
        checklist: province.risks,
      },
      {
        heading: "Adoption, rescue, training, and grooming",
        body: [
          "Do not choose a shelter, rescue, breeder, trainer, or groomer from a social media post alone. Verify the organisation or business directly, ask for records where relevant, and avoid pressure tactics.",
          "For adoption, ask about health records, sterilisation policy, vaccination status, behaviour, home checks, and post-adoption support. For trainers and groomers, ask about methods, safety, handling, and what happens if the dog is anxious or unwell.",
        ],
        table: {
          headers: ["Need", "What to check"],
          rows: [
            ["Adoption", "SPCA or rescue process, records, home checks, fees, sterilisation, and support."],
            ["Training", "Humane methods, owner involvement, behaviour experience, and no fear-based guarantees."],
            ["Grooming", "Handling, drying, matting policy, senior dogs, anxious dogs, and vet referral for medical signs."],
            ["Food and costs", "Dog size, life stage, local supplier pricing, vet diets, and emergency savings."],
          ],
        },
      },
      {
        heading: "Dog-friendly outings",
        body: province.outing,
        checklist: [
          "Check official rules before going.",
          "Carry water, waste bags, a lead, and ID.",
          "Avoid heat-heavy outings and hot surfaces.",
          "Leave if your dog is overwhelmed, reactive, sick, or unable to settle.",
        ],
      },
      {
        heading: "Emergency preparation",
        body: [
          "Emergency planning should happen before your dog is sick. Save your regular vet, ask about after-hours options, and keep records accessible.",
          "Do not rely on DogHaven for emergency listings yet. Phone a real veterinary practice or emergency animal clinic for urgent symptoms.",
        ],
        checklist: [
          "Regular vet details saved.",
          "After-hours option confirmed directly with your vet.",
          "Vaccination, medication, microchip, and insurance details stored on your phone.",
          "Transport plan for a large or injured dog.",
          "Nearest emergency route known from home and common outing areas.",
        ],
      },
      {
        heading: "Relevant city guides",
        body:
          cityCardsForProvince.length > 0
            ? ["These city guides add more local detail for major DogHaven reader areas in this province."]
            : ["DogHaven will add more city-level guides over time. For now, use the province guide and verify local rules directly with your municipality or venue."],
        bullets:
          cityCardsForProvince.length > 0
            ? cityCardsForProvince.map((city) => `${city.title}: ${city.href}`)
            : ["No city guide is published for this province yet."],
      },
    ],
    faqs: localFaqs(province.name, false),
    related: commonRelated([
      ...cityCardsForProvince,
      { title: "City Guides", description: "Dog owner notes for major South African cities.", href: "/city" },
      { title: "Dog Costs", description: "Budget for food, vet care, grooming, and emergencies.", href: "/costs" },
      { title: "Insurance", description: "Understand cover, exclusions, and waiting periods.", href: "/insurance" },
    ]),
    sources: sourceList(province.sources),
  };
});

export const phase7CityPages: GuideContent[] = phase7CityGuides.map((city) => {
  const province = phase7ProvinceGuides.find((item) => item.name === city.province);

  return {
    slug: city.slug,
    path: `/city/${city.slug}`,
    hubTitle: "City Guides",
    hubPath: "/city",
    title: `${city.name} Dog Owner Guide`,
    seoTitle: `${city.name} Dog Owner Guide | DogHaven South Africa`,
    description: `Practical ${city.name} dog owner guidance covering local lifestyle, vets, adoption, training, grooming, dog-friendly places, costs, and emergency preparation without fake listings.`,
    intro: city.intro,
    updated: reviewed,
    quickFacts: [
      "DogHaven does not publish unverified local listings or pretend to have verified vets, shelters, groomers, trainers, parks, beaches, hotels, or restaurants.",
      "Use this guide to plan what to ask, what to check, and how to prepare as a dog owner in the city.",
      "Check official municipal, venue, park, beach, estate, accommodation, or conservation rules before taking your dog into public spaces.",
      "For urgent medical symptoms, phone a veterinarian or emergency animal clinic immediately.",
    ],
    sections: [
      {
        heading: `Dog ownership in ${city.name}`,
        body: city.lifestyle,
      },
      {
        heading: "Local care notes",
        body: [
          `${city.name} owners should match routines to local housing, weather, traffic, public spaces, and dog behaviour rather than relying on generic advice.`,
        ],
        bullets: city.careNotes,
      },
      {
        heading: "How to find a vet without relying on fake listings",
        body: [
          "DogHaven does not list local vets yet. Start by checking registered veterinary practices, asking your current vet for after-hours guidance, and confirming services directly before you need them.",
          "For emergencies, phone a veterinary practice or emergency animal clinic. Do not wait for a web page to diagnose symptoms.",
        ],
        checklist: [
          "Confirm opening hours and after-hours instructions directly.",
          "Ask whether the practice handles emergencies or refers after hours.",
          "Keep your dog's vaccination, medication, allergy, microchip, and insurance details available.",
          "Plan transport for a large, injured, or collapsed dog.",
        ],
      },
      {
        heading: "Adoption and rescue locally",
        body: [
          "For adoption, start with welfare-focused organisations, SPCAs, reputable rescues, and careful private rehoming checks. DogHaven does not invent shelter names or publish unverified adoption listings.",
          "Ask about health records, sterilisation, vaccination, microchip status, behaviour, home checks, adoption fees, and what support is available after adoption.",
        ],
      },
      {
        heading: "Training, grooming, food, insurance, and costs",
        body: [
          "City living can make barking, leash manners, separation distress, grooming schedules, and food costs more visible. Plan these before they become urgent.",
        ],
        table: {
          headers: ["Area", "What to check in the city"],
          rows: [
            ["Training", "Humane methods, public manners, recall, leash control, and behaviour support."],
            ["Grooming", "Coat type, ticks, ears, paws, matting, heat, beaches, dust, and senior-dog handling."],
            ["Food", "Life stage, dog size, budget, vet diets, safe treats, and supplier availability."],
            ["Insurance", "Waiting periods, exclusions, excesses, annual limits, and emergency claim process."],
            ["Costs", "Food, vet care, grooming, training, transport, and emergency savings."],
          ],
        },
      },
      {
        heading: "Dog-friendly places and outings",
        body: city.outingNotes,
        checklist: [
          "Verify current official or venue rules before visiting.",
          "Carry water, waste bags, lead, ID, and vaccination records if required.",
          "Avoid hot surfaces and crowded spaces if your dog struggles.",
          "Leave if your dog barks continuously, lunges, guards, panics, or cannot settle.",
        ],
      },
      {
        heading: "Emergency preparation checklist",
        body: city.emergencyNotes,
        checklist: [
          "Regular vet and after-hours option saved.",
          "Transport route planned from home and favourite outing areas.",
          "Medical records, medication names, microchip, and insurance details stored.",
          "Poison, heatstroke, snakebite, parvo, and trauma warning signs understood.",
        ],
      },
    ],
    faqs: localFaqs(city.name, true),
    related: commonRelated([
      { title: `${city.province} Province Guide`, description: "Wider provincial dog-care context.", href: province ? `/province/${province.slug}` : "/province" },
      { title: "Dog Costs", description: "Budget for food, vet care, and emergency savings.", href: "/costs" },
      { title: "Insurance", description: "Understand pet insurance trade-offs.", href: "/insurance" },
    ]),
    sources: sourceList(city.sources),
  };
});

export const phase7GuidePages = [...phase7ProvincePages, ...phase7CityPages];

export function getPhase7Province(slug: string) {
  return phase7ProvincePages.find((guide) => guide.slug === slug);
}

export function getPhase7City(slug: string) {
  return phase7CityPages.find((guide) => guide.slug === slug);
}
