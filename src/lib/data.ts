import {
  AlertTriangle,
  BadgeHelp,
  Bone,
  Brush,
  CircleDollarSign,
  HeartHandshake,
  Home,
  MapPinned,
  ShieldCheck,
  Stethoscope,
} from "lucide-react";

export const categories = [
  {
    title: "Emergency Help",
    description:
      "Know when to call a vet, what to say, and how to stay calm during urgent dog health situations.",
    icon: AlertTriangle,
    accent: "rose",
    href: "/emergency",
  },
  {
    title: "Dog Health",
    description:
      "Plain-English guidance on common conditions, prevention, symptoms, and when professional care is needed.",
    icon: Stethoscope,
    accent: "sage",
    href: "/health",
  },
  {
    title: "Breed Guides",
    description:
      "Practical breed notes for South African homes, climates, activity levels, and family routines.",
    icon: Bone,
    accent: "honey",
    href: "/breeds",
  },
  {
    title: "Adoption Safety",
    description:
      "Checklist-led advice for safer adoption, rescue conversations, home checks, and avoiding scams.",
    icon: HeartHandshake,
    accent: "sky",
    href: "/adoption",
  },
  {
    title: "Dog Food",
    description:
      "Help comparing feeding choices, label claims, life stages, budget, allergies, and vet diet advice.",
    icon: BadgeHelp,
    accent: "sage",
    href: "/food",
  },
  {
    title: "Training",
    description:
      "Kind, practical training support for puppies, adult dogs, recall, lead manners, and daily routines.",
    icon: ShieldCheck,
    accent: "honey",
    href: "/training",
  },
  {
    title: "Grooming",
    description:
      "Coat care, bathing, nails, ears, shedding, and grooming routines that suit different dogs and seasons.",
    icon: Brush,
    accent: "rose",
    href: "/grooming",
  },
  {
    title: "Insurance",
    description:
      "Understand policy terms, waiting periods, exclusions, claims, and questions to ask before signing up.",
    icon: ShieldCheck,
    accent: "sky",
    href: "/insurance",
  },
  {
    title: "Dog Costs",
    description:
      "Budget for food, vet care, grooming, training, insurance, travel, and once-off puppy expenses.",
    icon: CircleDollarSign,
    accent: "honey",
    href: "/costs",
  },
  {
    title: "Dog-Friendly Places",
    description:
      "Plan safer outings with etiquette, access checks, heat awareness, lead rules, and comfort basics.",
    icon: MapPinned,
    accent: "sage",
    href: "/dog-friendly",
  },
] as const;

export const provinces = [
  { name: "Western Cape", href: "/province/western-cape" },
  { name: "Gauteng", href: "/province/gauteng" },
  { name: "KwaZulu-Natal", href: "/province/kwazulu-natal" },
  { name: "Eastern Cape", href: "/province/eastern-cape" },
  { name: "Free State", href: "/province/free-state" },
  { name: "Limpopo", href: "/province/limpopo" },
  { name: "Mpumalanga", href: "/province/mpumalanga" },
  { name: "North West", href: "/province/north-west" },
  { name: "Northern Cape", href: "/province/northern-cape" },
] as const;

export const featuredGuides = [
  {
    title: "Rabies in South Africa",
    description:
      "What dog owners should know about rabies risk, vaccination, bite response, and why urgent medical advice matters after exposure.",
    label: "Health and safety",
    href: "/emergency/rabies-south-africa",
  },
  {
    title: "Puppy Scam Checklist",
    description:
      "A South Africa-focused checklist for spotting pressure tactics, suspicious payments, stolen photos, and unsafe puppy buying situations.",
    label: "Adoption safety",
    href: "/adoption/puppy-scam-checklist-south-africa",
  },
  {
    title: "Cost of Owning a Dog in South Africa",
    description:
      "A realistic ownership budget covering food, vet visits, parasite prevention, grooming, training, insurance, and emergency savings.",
    label: "Budgeting",
    href: "/costs/cost-of-owning-a-dog-south-africa",
  },
  {
    title: "Best Dog Breeds for South African Homes",
    description:
      "A practical way to compare breed needs against climate, space, energy level, shedding, family life, and time available.",
    label: "Breed planning",
    href: "/breeds/best-dog-breeds-for-south-african-homes",
  },
  {
    title: "Biliary Tick Bite Fever in Dogs",
    description:
      "How tick-borne illness can affect dogs, warning signs owners should take seriously, and why prompt veterinary care is important.",
    label: "Dog health",
    href: "/health/biliary-tick-bite-fever-dogs-south-africa",
  },
  {
    title: "Dog Adoption Checklist",
    description:
      "Questions to ask, documents to expect, home preparation steps, and red flags before bringing a rescue or rehomed dog home.",
    label: "Adoption",
    href: "/adoption/dog-adoption-south-africa",
  },
] as const;

export const trustItems = [
  "South Africa-focused",
  "No fake listings",
  "Sources listed where needed",
  "Built for real dog owners",
  "Directory listings only after manual verification",
] as const;

export const homeFaqs = [
  {
    question: "Does DogHaven replace veterinary advice?",
    answer:
      "No. DogHaven helps owners understand symptoms, preparation, prevention, and next steps, but urgent or medical concerns should be discussed with a qualified veterinarian.",
  },
  {
    question: "Will DogHaven publish business listings?",
    answer:
      "Directory listings may be added later only after manual verification. DogHaven will not publish fake listings, fake reviews, unsupported badges, or invented phone numbers.",
  },
  {
    question: "Why is the site focused on South Africa?",
    answer:
      "Dog care decisions are shaped by local disease risks, climate, costs, adoption realities, travel patterns, and available services, so DogHaven is written for South African owners first.",
  },
] as const;

export const sourceLinks = [
  {
    label: "South African Veterinary Council",
    href: "https://savc.org.za/",
    note: "Professional veterinary regulation and public information.",
  },
  {
    label: "National Institute for Communicable Diseases",
    href: "https://www.nicd.ac.za/",
    note: "Public health information, including zoonotic disease context.",
  },
  {
    label: "Western Cape Government rabies information",
    href: "https://www.westerncape.gov.za/",
    note: "Provincial public health and animal disease notices.",
  },
] as const;

export const contactReasons = [
  {
    title: "Suggest a guide",
    description:
      "Send practical topics South African dog owners need help with, especially questions that are hard to answer clearly online.",
    icon: Home,
  },
  {
    title: "Share a correction",
    description:
      "If something is unclear, outdated, or missing important context, DogHaven will review it carefully before updating the page.",
    icon: ShieldCheck,
  },
  {
    title: "Ask about listings",
    description:
      "DogHaven is not accepting unverified directory listings yet. Future listings will require manual checks before publication.",
    icon: MapPinned,
  },
] as const;
