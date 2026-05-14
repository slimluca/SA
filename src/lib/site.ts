export const siteConfig = {
  name: "DogHaven",
  domain: "https://www.doghaven.co.za",
  description:
    "DogHaven is South Africa's practical dog care guide for health, emergency guidance, breeds, adoption, training, grooming, food, insurance, costs, and dog-friendly places.",
  email: "hello@doghaven.co.za",
  locale: "en_ZA",
};

export const navigation = [
  { label: "Start Here", href: "/start-here" },
  { label: "Health", href: "/health" },
  { label: "Emergency", href: "/emergency" },
  { label: "Breeds", href: "/breeds" },
  { label: "Adoption", href: "/adoption" },
] as const;

export const hubNavigation = [
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
  { label: "Province Guides", href: "/province" },
  { label: "City Guides", href: "/city" },
] as const;

export const companyNavigation = [
  { label: "Start Here", href: "/start-here" },
  { label: "About", href: "/about" },
  { label: "Editorial Policy", href: "/editorial-policy" },
  { label: "AdSense Readiness", href: "/adsense-readiness" },
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
