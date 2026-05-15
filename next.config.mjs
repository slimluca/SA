/** @type {import('next').NextConfig} */
const redirect = (source, destination) => ({
  source,
  destination,
  statusCode: 301,
});

const legacyRedirects = [
  // Retired public trust pages
  ["/adsense-readiness", "/editorial-policy"],
  ["/adsense-readiness/", "/editorial-policy"],

  // General legacy WordPress routes
  ["/dog-advice", "/start-here"],
  ["/dog-advice/", "/start-here"],
  ["/contact-us", "/contact"],
  ["/contact-us/", "/contact"],

  // Emergency and health
  ["/24-hour-emergency-vets-south-africa", "/emergency"],
  ["/24-hour-emergency-vets-south-africa/", "/emergency"],
  ["/two-step-poisoning-survival-guide", "/emergency/dog-poisoning-south-africa"],
  ["/two-step-poisoning-survival-guide/", "/emergency/dog-poisoning-south-africa"],
  ["/two-step-aldicarb-poisoning-guide-south-africa", "/emergency/dog-poisoning-south-africa"],
  ["/two-step-aldicarb-poisoning-guide-south-africa/", "/emergency/dog-poisoning-south-africa"],
  ["/dog-first-aid-cpr-emergency-guide-south-africa", "/emergency"],
  ["/dog-first-aid-cpr-emergency-guide-south-africa/", "/emergency"],
  ["/parvovirus-survival-guide", "/emergency/parvovirus-in-dogs-south-africa"],
  ["/parvovirus-survival-guide/", "/emergency/parvovirus-in-dogs-south-africa"],
  ["/rabies-symptoms-vaccination-south-africa", "/emergency/rabies-south-africa"],
  ["/rabies-symptoms-vaccination-south-africa/", "/emergency/rabies-south-africa"],
  ["/garden-plants-toxic-to-dogs-south-africa", "/health/toxic-plants-for-dogs-south-africa"],
  ["/garden-plants-toxic-to-dogs-south-africa/", "/health/toxic-plants-for-dogs-south-africa"],
  ["/veterinary-clinics-south-africa", "/health/when-to-take-your-dog-to-the-vet-south-africa"],
  ["/veterinary-clinics-south-africa/", "/health/when-to-take-your-dog-to-the-vet-south-africa"],
  ["/veterinary-clinics-south-africa-price-guide-2026-directory", "/costs/vet-costs-for-dogs-south-africa"],
  ["/veterinary-clinics-south-africa-price-guide-2026-directory/", "/costs/vet-costs-for-dogs-south-africa"],

  // Food
  ["/can-dogs-eat-biltong", "/food/can-dogs-eat-biltong"],
  ["/can-dogs-eat-biltong/", "/food/can-dogs-eat-biltong"],
  ["/can-dogs-eat-this-south-africa-food-guide", "/health/toxic-foods-for-dogs-south-africa"],
  ["/can-dogs-eat-this-south-africa-food-guide/", "/health/toxic-foods-for-dogs-south-africa"],
  ["/the-great-dog-food-debate", "/food/dog-food-south-africa"],
  ["/the-great-dog-food-debate/", "/food/dog-food-south-africa"],
  ["/homemade-dog-food-treat-recipes-south-africa", "/food/dog-food-south-africa"],
  ["/homemade-dog-food-treat-recipes-south-africa/", "/food/dog-food-south-africa"],
  ["/dog-food-south-africa", "/food/dog-food-south-africa"],
  ["/dog-food-south-africa/", "/food/dog-food-south-africa"],

  // Breeds
  ["/dog-breeds-south-africa", "/breeds"],
  ["/dog-breeds-south-africa/", "/breeds"],
  ["/dog-breed-guide-south-africa", "/breeds/best-dog-breeds-for-south-african-homes"],
  ["/dog-breed-guide-south-africa/", "/breeds/best-dog-breeds-for-south-african-homes"],
  ["/dog-breed-clubs-south-africa", "/breeds"],
  ["/dog-breed-clubs-south-africa/", "/breeds"],
  ["/french-bulldog-clubs-south-africa", "/breeds"],
  ["/french-bulldog-clubs-south-africa/", "/breeds"],
  ["/jack-russell-terrier-breed-guide-south-africa", "/breeds/jack-russell-terrier-south-africa"],
  ["/jack-russell-terrier-breed-guide-south-africa/", "/breeds/jack-russell-terrier-south-africa"],

  // Adoption
  ["/puppy-scams-adoption-safety-guide-south-africa", "/adoption/puppy-scam-checklist-south-africa"],
  ["/puppy-scams-adoption-safety-guide-south-africa/", "/adoption/puppy-scam-checklist-south-africa"],
  ["/puppy-scams-south-africa", "/adoption/puppy-scam-checklist-south-africa"],
  ["/puppy-scams-south-africa/", "/adoption/puppy-scam-checklist-south-africa"],
  ["/dog-adoption-south-africa", "/adoption/dog-adoption-south-africa"],
  ["/dog-adoption-south-africa/", "/adoption/dog-adoption-south-africa"],

  // Grooming
  ["/dog-grooming-south-africa", "/grooming/dog-grooming-south-africa"],
  ["/dog-grooming-south-africa/", "/grooming/dog-grooming-south-africa"],
  ["/dog-grooming-south-africa-2026-mobile-vs-parlour-prices", "/grooming/dog-grooming-costs-south-africa"],
  ["/dog-grooming-south-africa-2026-mobile-vs-parlour-prices/", "/grooming/dog-grooming-costs-south-africa"],

  // Training
  ["/dog-training-puppy-schools-south-africa", "/training/dog-training-south-africa"],
  ["/dog-training-puppy-schools-south-africa/", "/training/dog-training-south-africa"],
  ["/dog-training-south-africa", "/training/dog-training-south-africa"],
  ["/dog-training-south-africa/", "/training/dog-training-south-africa"],

  // Insurance
  ["/pet-insurance-showdown", "/insurance/pet-insurance-for-dogs-south-africa"],
  ["/pet-insurance-showdown/", "/insurance/pet-insurance-for-dogs-south-africa"],
  ["/pet-insurance-south-africa", "/insurance/pet-insurance-for-dogs-south-africa"],
  ["/pet-insurance-south-africa/", "/insurance/pet-insurance-for-dogs-south-africa"],

  // Costs
  ["/cost-of-owning-a-dog-south-africa", "/costs/cost-of-owning-a-dog-south-africa"],
  ["/cost-of-owning-a-dog-south-africa/", "/costs/cost-of-owning-a-dog-south-africa"],
  ["/cost-of-ownership-2026", "/costs/cost-of-owning-a-dog-south-africa"],
  ["/cost-of-ownership-2026/", "/costs/cost-of-owning-a-dog-south-africa"],

  // Dog-friendly and lifestyle
  ["/dog-friendly-beaches-tidal-pools-south-africa", "/dog-friendly/dog-friendly-beaches-south-africa"],
  ["/dog-friendly-beaches-tidal-pools-south-africa/", "/dog-friendly/dog-friendly-beaches-south-africa"],
  ["/pet-friendly-stays-south-africa", "/dog-friendly/pet-friendly-accommodation-south-africa"],
  ["/pet-friendly-stays-south-africa/", "/dog-friendly/pet-friendly-accommodation-south-africa"],
  ["/dog-friendly-accommodation-south-africa", "/dog-friendly/pet-friendly-accommodation-south-africa"],
  ["/dog-friendly-accommodation-south-africa/", "/dog-friendly/pet-friendly-accommodation-south-africa"],
  ["/south-african-pet-laws-bylaws-guide", "/start-here"],
  ["/south-african-pet-laws-bylaws-guide/", "/start-here"],
];

const nextConfig = {
  reactStrictMode: true,
  skipTrailingSlashRedirect: true,
  async redirects() {
    return legacyRedirects.map(([source, destination]) => redirect(source, destination));
  },
};

export default nextConfig;
