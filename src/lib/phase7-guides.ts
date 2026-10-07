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
  description?: string;
  updated?: string;
  intro: string;
  lifestyle: string[];
  careNotes: string[];
  outingNotes: string[];
  emergencyNotes: string[];
  distinctiveSections?: GuideContent["sections"];
  related?: CardLink[];
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
      "Western Cape dog ownership often mixes coastal walks, mountain weather, wine-country weekends, windy suburbs, summer heat, winter rain, and busy urban living. Plan around current local rules and conditions rather than relying on unverified listings.",
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
      "Mpumalanga dog ownership can include hot Lowveld conditions, cooler highland towns, farms, estates, plantations, travel routes, wildlife areas, ticks, and snakes. Owners need local-risk thinking because routines can change sharply between Mbombela, highland towns, rural properties, holiday routes, and bushveld edges.",
    overview: [
      "Dogs near wildlife, farms, plantations, lodges, or rural roads need secure fencing, visible ID, reliable lead control, and careful supervision.",
      "Travel and holiday accommodation rules should be checked directly before bringing a dog, especially near wildlife areas where pets may be restricted.",
      "Tick prevention, heat planning, snake awareness, and transport planning are especially important in warmer areas and on rural routes.",
      "Owners should keep vet records, rabies proof, microchip details, and emergency contacts available before weekends away or long drives.",
    ],
    climate: [
      "Lowveld heat can make midday exercise dangerous, especially for puppies, seniors, overweight dogs, brachycephalic breeds, and dark-coated dogs.",
      "Highland areas can be cooler, with mist, rain, muddy coats, slippery ground, and extra grooming needs after wet walks.",
      "Summer storms can trigger fear and escape attempts, so ID tags, microchip details, and secure gates matter.",
      "Warm, grassy, and rural environments can keep parasite prevention relevant beyond obvious summer outings.",
    ],
    risks: [
      "Ticks and fleas in warm, grassy, rural, or kennel environments.",
      "Snake encounters around gardens, farms, and bushy areas.",
      "Wildlife and livestock conflict if dogs roam.",
      "Travel distance to emergency or specialist care.",
      "Heat stress during road trips, lodge stays, farm visits, and long outdoor days.",
      "Fence gaps, open gates, and unfamiliar properties during holiday travel.",
    ],
    outing: [
      "Check protected-area and accommodation rules because many conservation spaces restrict pets.",
      "Keep dogs controlled near wildlife, cyclists, hikers, and livestock.",
      "Carry water and avoid heat-heavy activities.",
      "Plan rest stops and shade before long drives, and never leave dogs in hot vehicles.",
      "Use parasite checks after farms, long grass, kennels, hikes, and bushveld stays.",
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
    description:
      "Pretoria dog owner guide for hot Highveld summers, thunderstorms, estate and suburban routines, leash-controlled nature walks, traffic, and daily care planning.",
    updated: "2026-10-07",
    intro:
      "Pretoria dog ownership mixes hot Highveld summers, severe thunderstorms, dry winter veld, estates, flats, suburban gardens, and commuter routes that can make the same walk or vet journey very different by time of day.",
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
    distinctiveSections: [
      {
        heading: "Plan Pretoria routines around heat, storms, and dry winter veld",
        body: [
          "Tshwane identifies severe thunderstorms with strong winds, hail, lightning, and heavy rain as a city-wide hazard, while dry winter veld increases fire exposure on the metro's open and peri-urban edges. For dog owners, that makes a seasonal routine more useful than one fixed walking schedule.",
          "On hot summer days, move exercise away from exposed afternoon paving. Before forecast storms, bring outdoor dogs in early, secure gates, and prepare a quiet indoor space for dogs that panic at thunder. In dry winter conditions, avoid smoke or active burn areas and check paws and coats after veld-edge walks.",
        ],
        table: {
          headers: ["Pretoria condition", "Practical owner decision"],
          rows: [
            ["Hot summer afternoon", "Use a shaded early or later route and test paving before a longer walk."],
            ["Thunderstorm building", "Exercise earlier, close escape points, update ID details, and keep the dog indoors before thunder starts."],
            ["Dry winter veld", "Avoid fire-affected paths and check for dry grass, seeds, and irritated paws after walks."],
            ["Estate or complex living", "Confirm pet, noise, waste, visitor, and shared-space rules before choosing a routine."],
          ],
        },
      },
      {
        heading: "Choose Tshwane walks by rule and terrain, not by an old list",
        body: [
          "The City of Tshwane lists several pet-friendly walks, but its public-amenities rule requires dogs to be leashed in public areas. Individual reserves can add conditions: Faerie Glen, for example, requires a dog permit, while other listed nature areas allow leashed dogs on specified trails.",
          "Check the current municipal page or entrance notice before leaving home. Match rocky or longer trails to the dog's age and fitness, carry water, and turn back if heat, wildlife, cyclists, or crowding makes control difficult.",
        ],
      },
    ],
    related: [
      { title: "Pretoria Local Dog Guides", description: "Separate provider and service planning for grooming, training, vets, and outings.", href: "/local/pretoria" },
      { title: "Pretoria Monthly Dog Costs", description: "Plan food, routine care, services, transport, and emergency savings.", href: "/local-costs/pretoria/monthly-dog-costs-pretoria" },
      { title: "Gauteng Dog Owner Guide", description: "Wider Highveld climate, housing, traffic, and seasonal context.", href: "/province/gauteng" },
      { title: "Dog-Friendly Travel Checklist", description: "Prepare water, records, lead control, heat plans, and emergency contacts.", href: "/tools/dog-friendly-travel-checklist" },
    ],
    sources: [
      cityOfficialSources.pretoria,
      {
        label: "City of Tshwane nature conservation",
        href: "https://www.tshwane.gov.za/?page_id=1201",
        note: "Official list of pet-friendly walks and the municipal leash requirement for public areas.",
      },
      {
        label: "City of Tshwane 2026/27 draft IDP",
        href: "https://www.tshwane.gov.za/wp-content/uploads/2026/03/18.-Tabling-of-CoT-Draft-2026-2027-IDP-1.pdf",
        note: "Official hazard assessment covering severe thunderstorms and dry-winter veld fires across Tshwane.",
      },
      provinceSources.gauteng,
    ],
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
    description:
      "Gqeberha dog owner guide for windy coastal routines, beach-by-beach access checks, sand and salt care, suburban life, and Eastern Cape travel planning.",
    updated: "2026-10-07",
    intro:
      "Gqeberha's official planning material describes Nelson Mandela Bay as a windy city with a mild climate, and its published dog-control schedule shows why owners cannot treat every beach as one shared dog-friendly space.",
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
    distinctiveSections: [
      {
        heading: "Use Gqeberha's wind as a route-planning factor",
        body: [
          "A cool-feeling beachfront day can still mean a long exposed walk through wind, salt spray, and blowing sand. Choose a shorter or more sheltered route when conditions are strong, carry fresh water, and keep leads secure around traffic, cyclists, waves, and wildlife-sensitive areas.",
          "After a coastal outing, rinse salt and sand from paws where needed, check between toes, brush the coat, and dry the ears rather than leaving a wet or sandy dog in the car for the drive home.",
        ],
        checklist: [
          "Check wind and heat before choosing an exposed beachfront route.",
          "Pack fresh water so seawater is never the drinking option.",
          "Use secure identification and a lead that remains controllable in gusts.",
          "Inspect paws, ears, and coat before leaving the beach area.",
        ],
      },
      {
        heading: "Beach access changes by location within Nelson Mandela Bay",
        body: [
          "The municipality's beach-control schedule distinguishes bathing areas, walkways, grassed areas, dunes, and nature reserves. It allows dogs on lead in some defined areas, excludes them from others, and requires owners to have a way to remove faeces where dogs are permitted.",
          "That means an old claim that a whole named beach is dog-friendly is not enough. Check the exact section and current signage before each visit, keep out of bathing or conservation areas where dogs are excluded, and have a backup neighbourhood walk if access is unclear.",
        ],
      },
    ],
    related: [
      { title: "Gqeberha Local Dog Guides", description: "Provider and service guidance kept separate from everyday city ownership.", href: "/local/gqeberha" },
      { title: "Gqeberha Dog-Friendly Places", description: "Detailed checks for beaches, public spaces, venues, and coastal outings.", href: "/local/gqeberha/dog-friendly-places-gqeberha" },
      { title: "Eastern Cape Dog Owner Guide", description: "Coastal, rural-travel, tick, and emergency-access context.", href: "/province/eastern-cape" },
      { title: "Dog-Friendly Travel Checklist", description: "Prepare water, records, rules, and emergency steps for coastal trips.", href: "/tools/dog-friendly-travel-checklist" },
    ],
    sources: [
      cityOfficialSources.gqeberha,
      {
        label: "Nelson Mandela Bay adopted IDP 2023/24",
        href: "https://www.nelsonmandelabay.gov.za/DataRepository/Documents/2023-24-idp-adopted_29cG1.pdf",
        note: "Official municipal context describing Nelson Mandela Bay's mild, windy coastal setting and beaches.",
      },
      {
        label: "Nelson Mandela Bay dog control on beaches",
        href: "https://www.nelsonmandelabay.gov.za/DataRepository/Documents/7tfQZ_Dog%20controll%20on%20beaches.pdf",
        note: "Official beach-by-beach schedule identifying dog-permitted and restricted areas and leash and waste requirements.",
      },
      provinceSources["eastern-cape"],
    ],
  },
  {
    name: "Bloemfontein",
    slug: "bloemfontein",
    province: "Free State",
    description:
      "Bloemfontein dog owner guide for semi-arid summers, winter frost, dry suburban routines, open-space rules, paw care, and Free State travel planning.",
    updated: "2026-10-07",
    intro:
      "Bloemfontein sits in a semi-arid summer-rainfall setting where warm summers, cold dry winters, frost, open ground, and evaporation make genuinely seasonal dog routines more useful than a year-round template.",
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
    distinctiveSections: [
      {
        heading: "Build a Bloemfontein routine for summer rain and winter frost",
        body: [
          "Mangaung's environmental planning describes Bloemfontein as semi-arid, with most rain falling in summer and frost occurring through the colder part of the year. Owners therefore need two distinct routines: heat- and storm-aware exercise in summer, then warmer starts and paw comfort checks on frosty winter mornings.",
          "Dry air, dust, and exposed ground also make route choice important. A shaded suburban loop may be more suitable than an open field on a hot afternoon, while short-coated, thin, senior, or arthritic dogs may need a later start and warm resting place after a cold outing.",
        ],
        table: {
          headers: ["Bloemfontein season", "Daily adjustment"],
          rows: [
            ["Hot summer afternoon", "Shift the walk, choose shade, and avoid exposed tar or open fields."],
            ["Summer storm period", "Exercise before the storm and secure gates for dogs that bolt at thunder."],
            ["Frosty winter morning", "Delay the outing or shorten it for cold-sensitive dogs and check stiff seniors after rest."],
            ["Dry, dusty spell", "Inspect eyes and paws, brush out dry grass, and choose less exposed routes when practical."],
          ],
        },
      },
      {
        heading: "Treat yards and open space as managed environments",
        body: [
          "A larger Bloemfontein garden can help with toileting and short activity, but it does not replace sniffing walks, training, or contact with the household. Inspect boundary fencing and gates before storm season and after building or garden work, especially where a frightened dog could reach a road.",
          "For municipal parks and enclosed public amenities, Mangaung's open-space policy includes leash control. Carry waste bags, avoid organised sport areas when busy, and check the exact site's current rules instead of assuming every field has the same access conditions.",
        ],
      },
    ],
    related: [
      { title: "Bloemfontein Local Dog Guides", description: "Separate grooming, training, vet, and service planning for the city.", href: "/local/bloemfontein" },
      { title: "Free State Dog Owner Guide", description: "Province context for seasonal extremes, travel, farms, and local risks.", href: "/province/free-state" },
      { title: "Dog Health Calendar", description: "Plan routine prevention and care across Bloemfontein's seasons.", href: "/tools/dog-health-calendar" },
      { title: "Vet Visit Checklist", description: "Keep symptoms, medicines, records, and transport notes ready.", href: "/tools/vet-visit-checklist" },
    ],
    sources: [
      cityOfficialSources.bloemfontein,
      {
        label: "Mangaung Environmental Implementation and Management Plan",
        href: "https://www.mangaung.co.za/wp-content/uploads/2022/05/EIMP.pdf",
        note: "Official municipal climate, frost, temperature, topography, and environmental context for Mangaung and Bloemfontein.",
      },
      {
        label: "Mangaung Urban Open Space Policy",
        href: "https://www.mangaung.co.za/wp-content/uploads/2018/05/Urban-Open-Space-Policy-DRAFT-29-May-2018.pdf",
        note: "Municipal open-space policy containing leash controls for animals in public amenities.",
      },
      provinceSources["free-state"],
    ],
  },
  {
    name: "East London",
    slug: "east-london",
    province: "Eastern Cape",
    description:
      "East London dog owner guide for humid coastal weather, year-round rain, beach and estuary outings, wet-coat care, holiday crowds, and cross-city travel planning.",
    updated: "2026-10-07",
    intro:
      "East London combines a humid coast, rainfall in every season, beaches and estuaries, suburban routes, and N2, N6, and R72 travel connections, so wet-weather care and realistic journey planning both shape everyday dog ownership.",
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
    distinctiveSections: [
      {
        heading: "Plan for East London's rain and summer humidity",
        body: [
          "Buffalo City's air-quality plan records moderate to high rainfall through the year in East London and higher humidity across the metro in summer. A practical local routine therefore needs a wet-weather fallback rather than assuming rain is only a short summer issue.",
          "After rain, swimming, or an estuary outing, dry ears and dense coats, rinse dirty or salty paws where needed, and do not leave damp bedding in an enclosed room or vehicle. On humid summer days, shorten exposed exercise for heat-sensitive dogs even when cloud cover makes the temperature feel manageable.",
        ],
        checklist: [
          "Keep a towel and dry lead in the car during coastal or rainy months.",
          "Use a shorter paved or sheltered route when trails and verges are saturated.",
          "Check ears, skin folds, paws, and coat after swimming or repeated wet walks.",
          "Move vigorous exercise out of humid midday conditions.",
        ],
      },
      {
        heading: "Match coastal outings to access, crowds, and the drive home",
        body: [
          "Buffalo City manages beaches, coastal conservation areas, sports fields, and nature reserves, including walking trails at Nahoon Point and Nahoon Estuary. These are shared or environmentally sensitive spaces, not automatic off-lead dog areas, so check current signs and municipal rules before taking a dog in.",
          "Weekend and holiday traffic can be heavy at popular coastal sites. Choose a quieter alternative for dogs that struggle with crowds, keep an exit route in mind, and save a reachable vet option before travelling from a beach, Gonubie, Beacon Bay, or an inland route.",
        ],
      },
    ],
    related: [
      { title: "East London Local Dog Guides", description: "Separate provider, grooming, training, vet, and outing guidance.", href: "/local/east-london" },
      { title: "East London Emergency Vet Planning", description: "Prepare records, transport, after-hours questions, and urgent calls.", href: "/local/east-london/emergency-vets-east-london" },
      { title: "Eastern Cape Dog Owner Guide", description: "Coastal and rural travel context, ticks, outings, and vet access.", href: "/province/eastern-cape" },
      { title: "Dog-Friendly Travel Checklist", description: "Plan water, towels, records, rules, and emergency contacts.", href: "/tools/dog-friendly-travel-checklist" },
    ],
    sources: [
      cityOfficialSources["east-london"],
      {
        label: "Buffalo City Air Quality Management Plan",
        href: "https://www.buffalocity.gov.za/CM/uploads/documents/6746368268971.pdf",
        note: "Official local temperature, rainfall, and humidity context, including East London's year-round rainfall pattern.",
      },
      {
        label: "Buffalo City amenities",
        href: "https://www.buffalocity.gov.za/amenities.php",
        note: "Official municipal information on coastal amenities and walking trails at Nahoon Point and Nahoon Estuary.",
      },
      provinceSources["eastern-cape"],
    ],
  },
  {
    name: "George",
    slug: "george",
    province: "Western Cape",
    description:
      "George dog owner guide for Garden Route rain, wet-weather routines, forests and trails, municipal beach restrictions, tourism traffic, and regional travel.",
    updated: "2026-10-07",
    intro:
      "George dog ownership sits between the Outeniqua foothills, forest and dam routes, municipal beaches, wet-weather days, tourism traffic, and Garden Route travel where access rules can change within a short drive.",
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
    distinctiveSections: [
      {
        heading: "Separate a George trail plan from a dog-access plan",
        body: [
          "George's official tourism material highlights an extensive network of forest, dam, mountain, and coastal routes, but a route being promoted for walking does not mean dogs are permitted. Municipal, SANParks, plantation, reserve, and private-land rules can differ along the same Garden Route day trip.",
          "Check the land manager and dog rule for the exact route before leaving. On permitted walks, account for wet roots, mud, river crossings, cyclists, wildlife, and sudden weather changes; use a lead where required and carry enough water for the return leg rather than relying on streams.",
        ],
        table: {
          headers: ["George outing", "Check before taking the dog"],
          rows: [
            ["Forest or mountain route", "Land manager, dog access, lead rule, trail condition, wildlife, and turnaround time."],
            ["Garden Route Dam area", "Current access signage, shared-path users, water conditions, and muddy ground after rain."],
            ["Beachfront", "Whether the exact sand area permits dogs and which paved areas remain accessible on lead."],
            ["Holiday stay", "Written pet policy, fencing, shared spaces, nearby walks, and an emergency contact."],
          ],
        },
      },
      {
        heading: "George has specific beach, leash, and waste rules",
        body: [
          "George Municipality states that dogs are not allowed on municipal beach sand except in specifically designated areas. In public streets and public spaces, dogs must be leashed and controlled unless an area is formally designated for free running, and handlers must carry bags and remove faeces.",
          "Do not generalise a rule from Wilderness to Victoria Bay, Herold's Bay, Gwaing, or SANParks-managed land. Read current signs or the municipal map for the exact access point, and use a non-beach route when the permitted area is unclear.",
        ],
      },
      {
        heading: "Use wet-weather and peak-season backups",
        body: [
          "Rain can leave coats, ears, paws, bedding, and vehicle interiors damp after routine outings. Keep a towel near the door, dry the dog before settling, inspect paws after muddy or stony trails, and substitute indoor scent work or a shorter paved route when conditions are unsafe.",
          "During holiday periods, busier roads, trails, beaches, and accommodation increase the value of early walks, secure identification, confirmed pet rules, and a vet contact saved before leaving home.",
        ],
      },
    ],
    related: [
      { title: "Western Cape Dog Owner Guide", description: "Province context for winter rain, summer heat, coast, mountains, and travel.", href: "/province/western-cape" },
      { title: "Dog-Friendly Travel Checklist", description: "Prepare for Garden Route drives, accommodation, rules, and emergencies.", href: "/tools/dog-friendly-travel-checklist" },
      { title: "Dog Leash Laws", description: "Understand how to verify municipal and place-specific control rules.", href: "/laws/dog-leash-laws-south-africa" },
      { title: "Vet Visit Checklist", description: "Keep records and symptom notes ready during regional travel.", href: "/tools/vet-visit-checklist" },
    ],
    sources: [
      cityOfficialSources.george,
      {
        label: "George Municipality parks and recreation",
        href: "https://www.george.gov.za/community-services-2/parks-recreation/",
        note: "Official beach, leash, waste, public-space, and designated dog-area guidance.",
      },
      {
        label: "George, Wilderness and Uniondale tourism trail guide",
        href: "https://www.george.gov.za/wp-content/uploads/2024/04/George-Wilderness-Uniondale-Tourism-Digital-Brochure.pdf",
        note: "Official municipal tourism context for the area's forest, dam, mountain, and coastal trail network.",
      },
      provinceSources["western-cape"],
    ],
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
  title: "South African Dog Owner Guides by Province",
  seoTitle: "Dog Owner Guides by Province | South Africa",
  description:
    "Choose a South African province for practical dog-care guidance on climate, ticks, snakes, travel, local rules, services, costs, outings, and emergency planning.",
  kicker: "Province guides",
  intro:
    "Dog care changes by province: heat, rain, ticks, snakes, beaches, rural distance, city density, rental rules, and emergency access all shape practical ownership. These guides are not directories. They help you know what to check locally.",
  sections: [
    {
      title: "Climate and seasonal risks",
      body: [
        "Heat, rainfall, humidity, veld conditions, ticks, snakes, beaches, and water access differ across South Africa. Use the province guide as context, then ask your veterinarian about risks for your dog's exact area and routine.",
      ],
    },
    {
      title: "Distance, services and travel",
      body: [
        "Urban access and rural travel times can change how owners plan veterinary care, boarding, grooming, training, transport, and emergency contacts. Check current providers and opening hours directly.",
      ],
    },
    {
      title: "Rules and public spaces",
      body: [
        "Municipal by-laws, estate or complex rules, beaches, parks, conservation areas, and accommodation policies can vary within the same province. Verify the rule for the exact place before visiting.",
      ],
    },
    {
      title: "Local ownership costs",
      body: [
        "Food availability, travel, professional services, housing, and veterinary access can affect a household budget. Use current local quotes rather than treating a national estimate as a fixed price.",
      ],
    },
  ],
  cards: provinceCards,
  related: [
    { title: "Local Service Guides", description: "City guides for grooming, training, emergency vet preparation, and dog-friendly checks.", href: "/local" },
    { title: "City Guides", description: "Practical dog owner notes for major South African cities.", href: "/city" },
    { title: "Dog-Friendly Places", description: "How to verify dog-friendly rules before outings.", href: "/dog-friendly" },
    { title: "Emergency Help", description: "Prepare before urgent symptoms happen.", href: "/emergency" },
    { title: "Dog Laws", description: "Check rule sources before outings, rentals, complexes, and travel.", href: "/laws" },
    { title: "Mpumalanga Dog Owner Guide", description: "Heat, ticks, snakes, rural travel, wildlife-area rules, and emergency planning.", href: "/province/mpumalanga" },
    { title: "Local Dog Cost Guides", description: "City cost guides for grooming, training, emergency vet preparation, and monthly budgets.", href: "/local-costs" },
    { title: "Free Dog Tools", description: "Use calculators and checklists for food, costs, travel, vet visits, and routine health.", href: "/tools" },
  ],
  faqs: [
    {
      question: "Are these province pages dog business directories?",
      answer:
        "Province pages are planning guides. Selected linked local and service pages may include manually researched provider options, which readers must verify directly.",
    },
    {
      question: "Why does province matter for dog care?",
      answer:
        "Climate, ticks, snakes, beaches, rural travel, city density, local rules, and emergency access can change practical dog-care decisions.",
    },
    {
      question: "How does Dog Haven handle verified local listings?",
      answer:
        "Dog Haven publishes provider details on selected local and service pages after manual research. They are starting points, not rankings or endorsements, and current details must be confirmed directly.",
    },
  ],
};

export const cityHub: HubContent = {
  slug: "city",
  path: "/city",
  title: "City Dog Ownership Guides in South Africa",
  seoTitle: "City Dog Ownership Guides | South Africa",
  description:
    "Explore South African city dog-owner guides covering housing, heat, traffic, public-space rules, daily routines, vet access, adoption, costs, and emergency planning.",
  kicker: "City guides",
  intro:
    "These city guides focus on everyday dog ownership: housing, traffic, climate, public-space rules, travel times, vet access, costs, and routines. For groomers, trainers, sitters, boarding, and other provider choices, use the local service guides.",
  cards: cityCards,
  related: [
    { title: "Local Service Guides", description: "Grooming, training, emergency vet, and dog-friendly service-intent guides by city.", href: "/local" },
    { title: "Province Guides", description: "Wider provincial dog-care context.", href: "/province" },
    { title: "Training", description: "Prepare dogs for public spaces and city routines.", href: "/training" },
    { title: "Grooming", description: "Coat, skin, tick, paw, and beach-care planning.", href: "/grooming" },
    { title: "Dog Laws", description: "Leash, barking, rental, complex, and public-space rule checks.", href: "/laws" },
    { title: "Dog Adoption", description: "Plan shelter, rescue, and rehoming questions before choosing a dog.", href: "/adoption/dog-adoption-south-africa" },
  ],
  faqs: [
    {
      question: "Does Dog Haven recommend specific local businesses?",
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
      question: `Does Dog Haven list vets, groomers, trainers, or shelters in ${place}?`,
      answer:
        "Selected local and service pages include manually researched providers where reliable records are available. Coverage varies, so use every entry as a starting point and verify current details directly.",
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

function provinceIndexingRecoverySections(province: ProvinceGuide) {
  if (province.slug !== "mpumalanga") {
    return [];
  }

  return [
    {
      heading: "Why this Mpumalanga page is useful",
      body: [
        "Mpumalanga is not one dog-care environment. Lowveld heat, highland rain, rural routes, farms, plantations, estates, and wildlife-adjacent travel can all affect exercise, parasite prevention, vet access, and accommodation choices.",
        "Use this page as a preparation checklist before travel, adoption, boarding, long drives, or outdoor routines, then verify local rules and service details directly.",
      ],
      table: {
        headers: ["Mpumalanga situation", "What dog owners should prepare"],
        rows: [
          ["Lowveld heat", "Cool-hour walks, shade, water, no hot cars, and faster vet calls for heat stress signs."],
          ["Highland rain or mist", "Coat drying, paw checks, ear checks, and warm bedding for seniors or short-coated dogs."],
          ["Farms or plantations", "Tick checks, snake awareness, secure fencing, and lead control near livestock or equipment."],
          ["Wildlife or lodge travel", "Confirm pet rules directly and keep dogs away from wildlife, fences, and unfenced areas."],
          ["Rural distance", "Save vet and after-hours options before leaving home."],
        ],
      },
    },
    {
      heading: "Related Dog Haven tools for Mpumalanga owners",
      body: ["These tools help turn the province guidance into practical planning steps."],
      checklist: [
        "Use the dog health calendar for tick, flea, deworming, rabies, and routine vet reminders.",
        "Use the dog-friendly travel checklist before road trips or accommodation stays.",
        "Use the vet visit checklist if symptoms appear after ticks, heat, snake exposure, vomiting, diarrhoea, or injury.",
        "Use the dog cost calculator to plan routine care plus an emergency buffer.",
      ],
    },
  ];
}

export const phase7ProvincePages: GuideContent[] = phase7ProvinceGuides.map((province) => {
  const cityCardsForProvince = cityLinksForProvince(province);

  return {
    slug: province.slug,
    path: `/province/${province.slug}`,
    hubTitle: "Province Guides",
    hubPath: "/province",
    title: `${province.name} Dog Owner Guide`,
    seoTitle:
      province.slug === "mpumalanga"
        ? "Mpumalanga Dog Owner Guide | Heat, Ticks, Snakes and Travel Planning"
        : `${province.name} Dog Owner Guide | Dog Haven South Africa`,
    description:
      province.slug === "mpumalanga"
        ? "Practical Mpumalanga dog owner guide covering Lowveld heat, ticks, snakes, rural travel, wildlife-area rules, vet access, grooming, adoption, and emergency preparation."
        : `Practical ${province.name} dog owner guidance covering climate, local risks, adoption, grooming, training, dog-friendly outings, provider checks, and emergency preparation.`,
    intro: province.intro,
    updated: reviewed,
    quickFacts: [
      "Selected local and service pages show provider details only where records have been manually researched; coverage is not complete in every area.",
      "Listings are starting points, not rankings or endorsements. Verify vets, shelters, groomers, trainers, venues, parks, beaches, and accommodation directly.",
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
          "Where Dog Haven shows researched emergency-vet options, confirm current hours, services, and intake directly. For urgent symptoms, phone a veterinary practice or emergency animal clinic rather than waiting for a website response.",
        ],
        checklist: [
          "Regular vet details saved.",
          "After-hours option confirmed directly with your vet.",
          "Vaccination, medication, microchip, and insurance details stored on your phone.",
          "Transport plan for a large or injured dog.",
          "Nearest emergency route known from home and common outing areas.",
        ],
      },
      ...provinceIndexingRecoverySections(province),
      {
        heading: "Relevant city guides",
        body:
          cityCardsForProvince.length > 0
            ? ["These city guides add more local detail for major Dog Haven reader areas in this province."]
            : ["Dog Haven will add more city-level guides over time. For now, use the province guide and verify local rules directly with your municipality or venue."],
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
    seoTitle: `${city.name} Dog Owner Guide | Dog Haven South Africa`,
    description:
      city.description ??
      `Practical ${city.name} dog owner guidance covering local lifestyle, vets, adoption, training, grooming, dog-friendly places, provider checks, costs, and emergency preparation.`,
    intro: city.intro,
    updated: city.updated ?? reviewed,
    quickFacts: [
      "Selected local and service pages include manually researched provider details where reliable source records are available; coverage varies by place and service.",
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
      ...(city.distinctiveSections ?? []),
      {
        heading: "How to find and verify a local vet",
        body: [
          "Selected local pages publish manually researched veterinary options where reliable records are available. Use them as starting points, check registered practices, ask your current vet for after-hours guidance, and confirm services directly before you need them.",
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
          "For adoption, start with welfare-focused organisations, SPCAs, reputable rescues, and careful private rehoming checks. Dog Haven does not invent shelter names or publish unverified adoption listings.",
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
    related:
      city.related ??
      commonRelated([
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
