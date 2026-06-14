export const siteConfig = {
  name: "Dog Haven",
  domain: "https://www.doghaven.co.za",
  description:
    "DogHaven is South Africa's practical dog care guide for health, emergency guidance, breeds, adoption, training, grooming, food, insurance, costs, and dog-friendly places.",
  email: "info.doghaven@gmail.com",
  locale: "en_ZA",
};

export const navigation = [
  { label: "Start Here", href: "/start-here" },
  { label: "Puppy", href: "/puppy" },
  { label: "Health", href: "/health" },
  { label: "Emergency", href: "/emergency" },
  { label: "Breeds", href: "/breeds" },
  { label: "Adoption", href: "/adoption" },
] as const;

export const mobileNavigation = [
  { label: "Start Here", href: "/start-here" },
  { label: "Puppy", href: "/puppy" },
  { label: "Health", href: "/health" },
  { label: "Emergency", href: "/emergency" },
  { label: "Breeds", href: "/breeds" },
  { label: "Food", href: "/food" },
  { label: "Training", href: "/training" },
  { label: "Grooming", href: "/grooming" },
  { label: "Insurance", href: "/insurance" },
  { label: "Costs", href: "/costs" },
  { label: "Tools", href: "/tools" },
  { label: "Dog Names", href: "/dog-names" },
  { label: "Fun", href: "/fun" },
  { label: "Local", href: "/local" },
  { label: "Contact", href: "/contact" },
] as const;

export const hubNavigation = [
  { label: "Puppy", href: "/puppy" },
  { label: "Health", href: "/health" },
  { label: "Emergency", href: "/emergency" },
  { label: "Breeds", href: "/breeds" },
  { label: "Adoption", href: "/adoption" },
  { label: "Food", href: "/food" },
  { label: "Training", href: "/training" },
  { label: "Grooming", href: "/grooming" },
  { label: "Insurance", href: "/insurance" },
  { label: "Costs", href: "/costs" },
  { label: "Dog-Friendly", href: "/dog-friendly" },
  { label: "Laws", href: "/laws" },
  { label: "Tools", href: "/tools" },
  { label: "Fun", href: "/fun" },
  { label: "Dog Names", href: "/dog-names" },
  { label: "Local Guides", href: "/local" },
  { label: "Dog Services", href: "/dog-services" },
  { label: "Local Costs", href: "/local-costs" },
  { label: "Province Guides", href: "/province" },
  { label: "City Guides", href: "/city" },
] as const;

export const footerNavigationSections = [
  {
    title: "Site",
    links: [
      { label: "Puppy", href: "/puppy" },
      { label: "Health", href: "/health" },
      { label: "Emergency", href: "/emergency" },
      { label: "Breeds", href: "/breeds" },
      { label: "Adoption", href: "/adoption" },
      { label: "Food", href: "/food" },
    ],
  },
  {
    title: "Guides",
    links: [
      { label: "Training", href: "/training" },
      { label: "Grooming", href: "/grooming" },
      { label: "Insurance", href: "/insurance" },
      { label: "Costs", href: "/costs" },
      { label: "Dog-Friendly", href: "/dog-friendly" },
      { label: "Laws", href: "/laws" },
      { label: "Tools", href: "/tools" },
      { label: "Fun", href: "/fun" },
      { label: "Dog Names", href: "/dog-names" },
    ],
  },
  {
    title: "Local",
    links: [
      { label: "Local Guides", href: "/local" },
      { label: "Dog Services", href: "/dog-services" },
      { label: "Local Costs", href: "/local-costs" },
      { label: "Province Guides", href: "/province" },
      { label: "City Guides", href: "/city" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "Start Here", href: "/start-here" },
      { label: "About", href: "/about" },
      { label: "Editorial Policy", href: "/editorial-policy" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy Policy", href: "/privacy-policy" },
      { label: "Terms", href: "/terms" },
    ],
  },
] as const;

export const companyNavigation = [
  { label: "Start Here", href: "/start-here" },
  { label: "About", href: "/about" },
  { label: "Editorial Policy", href: "/editorial-policy" },
  { label: "Contact", href: "/contact" },
] as const;

export const legalNavigation = [
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Terms", href: "/terms" },
] as const;

export function absoluteUrl(path = "/") {
  const cleanPath = path.startsWith("/") ? path : `/${path}`;
  return `${siteConfig.domain}${cleanPath}`;
}
