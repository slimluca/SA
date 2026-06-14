export type LocalProviderServiceType =
  | "dog-training"
  | "dog-grooming"
  | "emergency-vet"
  | "dog-friendly"
  | "dog-boarding"
  | "dog-daycare"
  | "dog-walker"
  | "pet-sitter";

export type LocalProviderLinkType = "editorial" | "sponsored" | "ugc";

export type LocalProvider = {
  name: string;
  city: string;
  province: string;
  serviceTypes: LocalProviderServiceType[];
  website?: string;
  phone?: string;
  email?: string;
  areaServed?: string;
  address?: string;
  sourceUrl: string;
  sourceLabel: string;
  lastChecked: string;
  notes: string;
  verificationStatus: "verified-direct" | "verified-source";
  linkType?: LocalProviderLinkType;
};

export const localProviders: LocalProvider[] = [
  {
    name: "DTA Dog Training Academy",
    city: "durban",
    province: "KwaZulu-Natal",
    serviceTypes: ["dog-training"],
    website: "https://www.dtacademy.co.za/",
    phone: "+27 83 640 7247",
    areaServed: "Durban",
    sourceUrl: "https://www.dtacademy.co.za/",
    sourceLabel: "Official DTA Dog Training Academy website",
    lastChecked: "2026-06-14",
    notes:
      "Durban dog training provider with puppy, obedience, behaviour consultation, and contact details listed on its official website.",
    verificationStatus: "verified-direct",
  },
  {
    name: "Dog Training Durban",
    city: "durban",
    province: "KwaZulu-Natal",
    serviceTypes: ["dog-training"],
    website: "https://www.dogtrainingdurban.co.za/",
    phone: "031 100 1962",
    email: "info@dogtrainingdurban.co.za",
    areaServed: "Durban",
    sourceUrl: "https://www.dogtrainingdurban.co.za/contact/",
    sourceLabel: "Official Dog Training Durban contact page",
    lastChecked: "2026-06-14",
    notes:
      "Durban dog and puppy training provider with phone, email, and contact form listed on its official website.",
    verificationStatus: "verified-direct",
  },
  {
    name: "The Smart Dog",
    city: "durban",
    province: "KwaZulu-Natal",
    serviceTypes: ["dog-training"],
    website: "http://www.thesmartdog.co.za",
    phone: "081 270 4672",
    email: "info@thesmartdog.co.za",
    areaServed: "Durban and surrounding areas",
    sourceUrl:
      "https://www.pethealthcare.co.za/pet-services/animal-training-service/kwazulu-natal/smart-dog-0",
    sourceLabel: "Pet Health Care South Africa listing",
    lastChecked: "2026-06-14",
    notes:
      "Durban-area dog training option with phone, email, and website details listed by Pet Health Care South Africa. Confirm current classes and availability before booking.",
    verificationStatus: "verified-source",
  },
  {
    name: "Durban Dog School",
    city: "durban",
    province: "KwaZulu-Natal",
    serviceTypes: ["dog-training"],
    website: "http://www.mk9.co.za",
    phone: "082 321 3648",
    areaServed: "Durban",
    sourceUrl:
      "https://www.pethealthcare.co.za/pet-services/animal-training-service/kwazulu-natal/durban-dog-school",
    sourceLabel: "Pet Health Care South Africa listing",
    lastChecked: "2026-06-14",
    notes:
      "Durban dog training option with phone and website details listed by Pet Health Care South Africa. Ask about class format, vaccination requirements, and training methods.",
    verificationStatus: "verified-source",
  },
  {
    name: "Dog Training at Your Home",
    city: "sandton",
    province: "Gauteng",
    serviceTypes: ["dog-training"],
    website: "https://www.dogtrainingatyourhome.co.za/",
    phone: "084 332 0400",
    email: "cliff@dogtrainingatyourhome.co.za",
    areaServed: "Sandton, Bryanston, Fourways, Midrand, Johannesburg, and nearby areas",
    sourceUrl: "https://www.dogtrainingatyourhome.co.za/",
    sourceLabel: "Official Dog Training at Your Home website",
    lastChecked: "2026-06-14",
    notes:
      "Home dog training provider listing Sandton and nearby Gauteng areas on its official website. Confirm service area and behaviour support fit before booking.",
    verificationStatus: "verified-direct",
  },
  {
    name: "4 Paws K9 Services",
    city: "sandton",
    province: "Gauteng",
    serviceTypes: ["dog-training"],
    website: "https://4pawsk9services.co.za/",
    phone: "079 495 1825",
    email: "4pawsk9sa@gmail.com",
    areaServed: "Sandton and nearby Gauteng areas",
    sourceUrl: "https://4pawsk9services.co.za/",
    sourceLabel: "Official 4 Paws K9 Services website",
    lastChecked: "2026-06-14",
    notes:
      "Dog training service with phone, email, and WhatsApp details listed on its official website. Ask about humane methods, owner involvement, and session structure.",
    verificationStatus: "verified-direct",
  },
  {
    name: "Smart Puppy School Sunninghill Vet",
    city: "sandton",
    province: "Gauteng",
    serviceTypes: ["dog-training"],
    website: "https://puppyschool.co.za/hills-puppy-school/smart-puppy-school-sunninghill-vet/",
    phone: "083 306 4599",
    email: "smartpuppyschool@gmail.com",
    address: "4 Edison Cres, Sunninghill, Sandton, 2157",
    areaServed: "Sunninghill and Sandton",
    sourceUrl: "https://puppyschool.co.za/hills-puppy-school/smart-puppy-school-sunninghill-vet/",
    sourceLabel: "Smart Puppy School Sunninghill Vet listing",
    lastChecked: "2026-06-14",
    notes:
      "Puppy school listing for Sunninghill Vet with address, phone, and email. Check class age ranges, vaccination requirements, and safe socialisation rules.",
    verificationStatus: "verified-source",
  },
  {
    name: "Dog Training Lonehill",
    city: "sandton",
    province: "Gauteng",
    serviceTypes: ["dog-training"],
    website: "https://dogtraininglonehill.co.za/",
    address: "21B Pine Road, Broadacres AH, Sandton",
    areaServed: "Lonehill, Broadacres, Fourways, and Sandton",
    sourceUrl: "https://dogtraininglonehill.co.za/",
    sourceLabel: "Official Dog Training Lonehill website",
    lastChecked: "2026-06-14",
    notes:
      "Sandton-area dog training venue with its Broadacres address listed on the official website. Confirm current class times and training approach before attending.",
    verificationStatus: "verified-direct",
  },
  {
    name: "Maestro Grooming",
    city: "centurion",
    province: "Gauteng",
    serviceTypes: ["dog-grooming"],
    website: "https://www.maestrogrooming.co.za/",
    phone: "012 661 0183",
    email: "info@maestrogrooming.co.za",
    address: "73 Panorama Road, Rooihuiskraal, Centurion",
    areaServed: "Centurion",
    sourceUrl: "https://www.maestrogrooming.co.za/",
    sourceLabel: "Official Maestro Grooming website",
    lastChecked: "2026-06-14",
    notes:
      "Centurion grooming parlour with address, phone, mobile grooming contact, and email details listed on its official website.",
    verificationStatus: "verified-direct",
  },
  {
    name: "Dapper Paws Mobile Pet Grooming",
    city: "centurion",
    province: "Gauteng",
    serviceTypes: ["dog-grooming"],
    website: "https://dapperpaws.co.za/mobile-pet-grooming-services-centurion/",
    phone: "+27 71 746 7949",
    email: "info@dapperpaws.co.za",
    areaServed: "Centurion",
    sourceUrl: "https://dapperpaws.co.za/mobile-pet-grooming-services-centurion/",
    sourceLabel: "Official Dapper Paws Centurion page",
    lastChecked: "2026-06-14",
    notes:
      "Mobile pet grooming provider with Centurion service page, phone, and email listed on its official website. Confirm water, electricity, and access needs before booking.",
    verificationStatus: "verified-direct",
  },
  {
    name: "Royal R Us Mobile Pet Grooming Centurion",
    city: "centurion",
    province: "Gauteng",
    serviceTypes: ["dog-grooming"],
    website: "https://royalrus.co.za/centurion",
    phone: "081 745 2338",
    email: "admin@royalrusmobilepetgrooming.co.za",
    areaServed: "Centurion",
    sourceUrl: "https://royalrus.co.za/centurion",
    sourceLabel: "Official Royal R Us Centurion page",
    lastChecked: "2026-06-14",
    notes:
      "Mobile grooming service with Centurion page, phone, and email listed on the official Royal R Us website. Confirm current coverage and appointment terms.",
    verificationStatus: "verified-direct",
  },
  {
    name: "Mera Grooming Parlour",
    city: "centurion",
    province: "Gauteng",
    serviceTypes: ["dog-grooming"],
    website: "https://meraparlour.co.za/Contact.html",
    phone: "012 756 1291",
    email: "shop@meraparlour.co.za",
    address: "Hennopsview, Centurion",
    areaServed: "Centurion",
    sourceUrl: "https://meraparlour.co.za/Contact.html",
    sourceLabel: "Official Mera Grooming Parlour contact page",
    lastChecked: "2026-06-14",
    notes:
      "Centurion grooming parlour with contact page listing Hennopsview location, phone numbers, and email. Confirm handling for nervous dogs and matted coats.",
    verificationStatus: "verified-direct",
  },
  {
    name: "Woof & Meow Pet Grooming",
    city: "centurion",
    province: "Gauteng",
    serviceTypes: ["dog-grooming"],
    website: "https://petgrooming.co.za/contact-us/",
    phone: "+27 64 844 4145",
    areaServed: "Centurion",
    sourceUrl: "https://petgrooming.co.za/contact-us/",
    sourceLabel: "Official Woof & Meow contact page",
    lastChecked: "2026-06-14",
    notes:
      "Centurion pet grooming contact page with phone details listed. Ask about coat-type experience, hygiene, tick and flea policy, and collection times.",
    verificationStatus: "verified-direct",
  },
  {
    name: "West Acres Animal Hospital",
    city: "nelspruit",
    province: "Mpumalanga",
    serviceTypes: ["emergency-vet"],
    website: "https://westacresvet.co.za/",
    phone: "082 455 4595",
    areaServed: "Nelspruit / Mbombela",
    sourceUrl: "https://westacresvet.co.za/",
    sourceLabel: "Official West Acres Animal Hospital website",
    lastChecked: "2026-06-14",
    notes:
      "Nelspruit veterinary hospital with emergency contact details listed on its official website. Phone ahead in urgent cases so the team can prepare.",
    verificationStatus: "verified-direct",
  },
  {
    name: "Van Wijk Street Vet",
    city: "nelspruit",
    province: "Mpumalanga",
    serviceTypes: ["emergency-vet"],
    website: "https://vanwijkstreetvet.co.za/",
    phone: "+27 82 441 7084",
    email: "info@vwsvet.co.za",
    address: "6 Van Wijk Street, Nelspruit, 1201",
    areaServed: "Nelspruit / Mbombela",
    sourceUrl: "https://vanwijkstreetvet.co.za/",
    sourceLabel: "Official Van Wijk Street Vet website",
    lastChecked: "2026-06-14",
    notes:
      "Nelspruit veterinary practice with address, email, daytime number, and emergency number listed on its official website.",
    verificationStatus: "verified-direct",
  },
  {
    name: "Nelspruit Animal Hospital",
    city: "nelspruit",
    province: "Mpumalanga",
    serviceTypes: ["emergency-vet"],
    website: "https://www.nelvet.co.za/contact-us/",
    phone: "013 752 8271",
    email: "mail@nelvet.co.za",
    areaServed: "Nelspruit / Mbombela",
    sourceUrl: "https://www.nelvet.co.za/contact-us/",
    sourceLabel: "Official Nelspruit Animal Hospital contact page",
    lastChecked: "2026-06-14",
    notes:
      "Nelspruit animal hospital contact page listing phone, email, and after-hours contact instructions. Call ahead for emergency guidance.",
    verificationStatus: "verified-direct",
  },
  {
    name: "The Vets 66",
    city: "nelspruit",
    province: "Mpumalanga",
    serviceTypes: ["emergency-vet"],
    website: "https://thevets.co.za/",
    areaServed: "Nelspruit / Mbombela",
    sourceUrl: "https://thevets.co.za/",
    sourceLabel: "Official The Vets 66 website",
    lastChecked: "2026-06-14",
    notes:
      "Nelspruit veterinary practice whose official website mentions after-hours emergencies. Confirm current emergency access and contact route before relying on it.",
    verificationStatus: "verified-direct",
  },
  {
    name: "Paws & Boots Country Dog Park",
    city: "midrand",
    province: "Gauteng",
    serviceTypes: ["dog-friendly"],
    website: "https://www.pawlife.co.za/pet-carers/midrand/paws-and-boots-country-dog-park",
    areaServed: "Midrand and nearby Gauteng areas",
    sourceUrl: "https://www.pawlife.co.za/pet-carers/midrand/paws-and-boots-country-dog-park",
    sourceLabel: "PawLife listing",
    lastChecked: "2026-06-14",
    notes:
      "Midrand dog-park listing found on PawLife. The listing should be checked directly before visiting because dog-friendly access and operating status can change.",
    verificationStatus: "verified-source",
  },
];

export function providerRelFor(linkType: LocalProviderLinkType = "editorial") {
  if (linkType === "sponsored") return "sponsored nofollow noopener noreferrer";
  if (linkType === "ugc") return "ugc nofollow noopener noreferrer";
  return "nofollow noopener noreferrer";
}

export function serviceTypeFromPath(path: string): LocalProviderServiceType | null {
  if (path.includes("/dog-training-")) return "dog-training";
  if (path.includes("/dog-grooming-")) return "dog-grooming";
  if (path.includes("/emergency-vets-") || path.includes("/emergency-vet-")) return "emergency-vet";
  if (path.includes("/dog-friendly-")) return "dog-friendly";
  if (path.includes("/dog-boarding-kennels-")) return "dog-boarding";
  if (path.includes("/dog-daycare-")) return "dog-daycare";
  if (path.includes("/dog-walkers-")) return "dog-walker";
  if (path.includes("/pet-sitters-")) return "pet-sitter";
  return null;
}

export function cityFromLocalPath(path: string) {
  const parts = path.split("/").filter(Boolean);
  if (parts[0] === "local" || parts[0] === "dog-services" || parts[0] === "local-costs") {
    return parts[1] ?? null;
  }
  return null;
}

export function isLocalServicePath(path: string) {
  return (
    path.startsWith("/local/") ||
    path.startsWith("/dog-services/") ||
    path.startsWith("/local-costs/") ||
    path === "/health/find-a-vet-south-africa"
  );
}

export function getProvidersForPath(path: string) {
  const city = cityFromLocalPath(path);
  const serviceType = serviceTypeFromPath(path);

  if (!city || !serviceType) return [];

  return localProviders.filter(
    (provider) => provider.city === city && provider.serviceTypes.includes(serviceType),
  );
}
