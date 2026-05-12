export const siteConfig = {
  name: "DogHaven",
  domain: "https://www.doghaven.co.za",
  description:
    "DogHaven is South Africa's practical dog care guide for health, emergency guidance, breeds, adoption, training, grooming, food, insurance, costs, and dog-friendly places.",
  email: "hello@doghaven.co.za",
  locale: "en_ZA",
};

export const navigation = [
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
