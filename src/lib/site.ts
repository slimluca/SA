export const siteConfig = {
  name: "Dog Haven",
  domain: "https://www.doghaven.co.za",
  description:
    "Dog Haven is South Africa's practical dog care guide for health, emergency guidance, breeds, adoption, training, grooming, food, insurance, costs, and dog-friendly places.",
  email: "info.doghaven@gmail.com",
  locale: "en_ZA",
};

export const navigation = [
  { label: "Start Here", href: "/start-here" },
  { label: "Health", href: "/health" },
  { label: "Emergency", href: "/emergency" },
  { label: "Breeds", href: "/breeds" },
  { label: "Food", href: "/food" },
  { label: "Tools", href: "/tools" },
] as const;

export const moreNavigationGroups = [
  {
    title: "Dog care",
    links: [
      { label: "Puppy", href: "/puppy" },
      { label: "Training", href: "/training" },
      { label: "Grooming", href: "/grooming" },
      { label: "Adoption", href: "/adoption" },
    ],
  },
  {
    title: "Planning",
    links: [
      { label: "Costs", href: "/costs" },
      { label: "Insurance", href: "/insurance" },
      { label: "Dog-Friendly", href: "/dog-friendly" },
    ],
  },
  {
    title: "More",
    links: [
      { label: "Laws", href: "/laws" },
      { label: "Fun", href: "/fun" },
      { label: "Dog Names", href: "/dog-names" },
    ],
  },
] as const;

export const mobileNavigation = [
  { label: "Start Here", href: "/start-here" },
  { label: "Health", href: "/health" },
  { label: "Emergency", href: "/emergency" },
  { label: "Breeds", href: "/breeds" },
  { label: "Food", href: "/food" },
  { label: "Tools", href: "/tools" },
  { label: "Puppy", href: "/puppy" },
  { label: "Training", href: "/training" },
  { label: "Grooming", href: "/grooming" },
  { label: "Adoption", href: "/adoption" },
  { label: "Insurance", href: "/insurance" },
  { label: "Costs", href: "/costs" },
  { label: "Dog-Friendly", href: "/dog-friendly" },
  { label: "Contact", href: "/contact" },
] as const;

export const hubNavigation = [
  { label: "Health", href: "/health" },
  { label: "Emergency", href: "/emergency" },
  { label: "Breeds", href: "/breeds" },
  { label: "Food", href: "/food" },
  { label: "Tools", href: "/tools" },
  { label: "Puppy", href: "/puppy" },
  { label: "Training", href: "/training" },
  { label: "Grooming", href: "/grooming" },
  { label: "Adoption", href: "/adoption" },
  { label: "Insurance", href: "/insurance" },
  { label: "Costs", href: "/costs" },
  { label: "Dog-Friendly", href: "/dog-friendly" },
  { label: "Laws", href: "/laws" },
] as const;

export const footerNavigationSections = [
  {
    title: "Core guides",
    links: [
      { label: "Health", href: "/health" },
      { label: "Emergency", href: "/emergency" },
      { label: "Breeds", href: "/breeds" },
      { label: "Food", href: "/food" },
      { label: "Puppy", href: "/puppy" },
      { label: "Adoption", href: "/adoption" },
    ],
  },
  {
    title: "Planning & tools",
    links: [
      { label: "Tools", href: "/tools" },
      { label: "Costs", href: "/costs" },
      { label: "Insurance", href: "/insurance" },
      { label: "Training", href: "/training" },
      { label: "Grooming", href: "/grooming" },
      { label: "Dog-Friendly", href: "/dog-friendly" },
    ],
  },
  {
    title: "More",
    links: [
      { label: "Laws", href: "/laws" },
      { label: "Fun", href: "/fun" },
      { label: "Dog Names", href: "/dog-names" },
      { label: "Start Here", href: "/start-here" },
    ],
  },
  {
    title: "Company",
    links: [
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
