import type { MetadataRoute } from "next";
import { guidePages, hubPages } from "@/lib/content";
import { phase3GuidePages } from "@/lib/phase3-guides";
import { phase4GuidePages } from "@/lib/phase4-guides";
import { phase5GuidePages } from "@/lib/phase5-guides";
import { phase6GuidePages } from "@/lib/phase6-guides";
import { cityHub, phase7GuidePages, provinceHub } from "@/lib/phase7-guides";
import { phase9GuidePages } from "@/lib/phase9-guides";
import { phase10GuidePages } from "@/lib/phase10-guides";
import { phase11GuidePages, puppyHub } from "@/lib/phase11-guides";
import { phase12GuidePages } from "@/lib/phase12-guides";
import { lawsHub, phase13GuidePages } from "@/lib/phase13-guides";
import { phase14GuidePages } from "@/lib/phase14-guides";
import { phase15GuidePages } from "@/lib/phase15-guides";
import { localCityHubs, localHub, phase17LocalGuidePages } from "@/lib/phase17-local-guides";
import { localCostHub, phase18LocalCostGuidePages } from "@/lib/phase18-local-cost-guides";
import { dogServicesHub, phase19DogServiceGuidePages } from "@/lib/phase19-dog-services-guides";
import { phase28LocalCityHubs, phase28LocalGuidePages } from "@/lib/phase28-local-expansion-guides";
import { phase20RecoveryGuidePages } from "@/lib/phase20-recovery-guides";
import { phase21PreventionGuidePages } from "@/lib/phase21-prevention-guides";
import { phase22SterilisationGuidePages } from "@/lib/phase22-sterilisation-guides";
import { phase23ChronicHealthGuidePages } from "@/lib/phase23-chronic-health-guides";
import { phase29HealthSymptomGuidePages } from "@/lib/phase29-health-symptom-guides";
import { phase25BreedLifestyleGuidePages } from "@/lib/phase25-breed-lifestyle-guides";
import { dogNamesHub, phase26DogNameGuidePages } from "@/lib/phase26-dog-name-guides";
import { funHub, phase27FunGuidePages } from "@/lib/phase27-fun-guides";
import { absoluteUrl } from "@/lib/site";
import { tools, toolsHub } from "@/lib/tools-data";

const staticRoutes = [
  "/",
  "/start-here",
  "/about",
  "/contact",
  "/editorial-policy",
  "/privacy-policy",
  "/terms",
];

const highPriorityRoutes = new Set([
  "/tools",
  "/food",
  "/insurance",
  "/costs",
  "/health",
  "/puppy",
  "/breeds",
  "/local",
  "/local-costs",
  "/dog-services",
  "/local/centurion",
  "/local/sandton",
  "/local/midrand",
  "/local/east-london",
  "/local/nelspruit",
  "/local/polokwane",
  "/fun",
]);

const moneyAndToolRoutes = new Set([
  "/tools/dog-feeding-calculator",
  "/tools/dog-cost-calculator",
  "/tools/can-my-dog-eat-this",
  "/food/best-dog-food-south-africa",
  "/food/foods-dogs-should-never-eat-south-africa",
  "/insurance/compare-dog-insurance-south-africa",
  "/costs/dog-cost-calculator-south-africa",
  "/local-costs",
  "/local-costs/cape-town/dog-grooming-prices-cape-town",
  "/local-costs/cape-town/emergency-vet-costs-cape-town",
  "/local-costs/johannesburg/dog-training-costs-johannesburg",
  "/dog-services",
  "/dog-services/cape-town/dog-boarding-kennels-cape-town",
  "/dog-services/johannesburg/pet-sitters-johannesburg",
  "/costs/dog-grooming-costs-south-africa",
  "/costs/emergency-vet-costs-south-africa",
  "/food/dog-food-prices-south-africa",
  "/health/find-a-vet-south-africa",
  "/tools/dog-health-calendar",
  "/tools/dog-sterilisation-planner",
  "/tools/senior-dog-care-checklist",
  "/tools/dog-breed-comparison-checklist",
  "/tools/dog-name-generator",
  "/tools/puppy-name-shortlist",
  "/tools/new-puppy-home-checklist",
  "/tools/dog-care-printable-checklist",
  "/tools/dog-personality-quiz",
  "/tools/puppy-readiness-quiz",
  "/tools/dog-care-routine-builder",
  "/tools/weekly-dog-care-planner",
  "/tools/dog-walk-planner",
  "/tools/dog-friendly-trip-checklist",
  "/health/tick-and-flea-treatment-for-dogs-south-africa",
  "/health/dog-vaccination-costs-and-schedule-south-africa",
  "/health/dog-sterilisation-south-africa",
  "/health/microchipping-dogs-south-africa",
  "/health/dog-dental-care-south-africa",
  "/health/dog-arthritis-south-africa",
  "/health/senior-dog-care-south-africa",
  "/health/chronic-dog-health-costs-south-africa",
  "/health/dog-vomiting-south-africa",
  "/puppy/puppy-care-south-africa",
]);

function priorityForRoute(route: string) {
  if (route === "/") {
    return 1;
  }

  if (moneyAndToolRoutes.has(route)) {
    return 0.9;
  }

  if (highPriorityRoutes.has(route)) {
    return 0.85;
  }

  return 0.7;
}

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const routes = [
    ...staticRoutes,
    ...hubPages.map((hub) => hub.path),
    ...guidePages.map((guide) => guide.path),
    ...phase3GuidePages.map((guide) => guide.path),
    ...phase4GuidePages.map((guide) => guide.path),
    ...phase5GuidePages.map((guide) => guide.path),
    ...phase6GuidePages.map((guide) => guide.path),
    provinceHub.path,
    cityHub.path,
    ...phase7GuidePages.map((guide) => guide.path),
    ...phase9GuidePages.map((guide) => guide.path),
    ...phase10GuidePages.map((guide) => guide.path),
    puppyHub.path,
    ...phase11GuidePages.map((guide) => guide.path),
    ...phase12GuidePages.map((guide) => guide.path),
    lawsHub.path,
    ...phase13GuidePages.map((guide) => guide.path),
    ...phase14GuidePages.map((guide) => guide.path),
    ...phase15GuidePages.map((guide) => guide.path),
    toolsHub.path,
    ...tools.map((tool) => tool.path),
    localHub.path,
    ...localCityHubs.map((hub) => hub.path),
    ...phase17LocalGuidePages.map((guide) => guide.path),
    ...phase28LocalCityHubs.map((hub) => hub.path),
    ...phase28LocalGuidePages.map((guide) => guide.path),
    localCostHub.path,
    ...phase18LocalCostGuidePages.map((guide) => guide.path),
    dogServicesHub.path,
    ...phase19DogServiceGuidePages.map((guide) => guide.path),
    ...phase20RecoveryGuidePages.map((guide) => guide.path),
    ...phase21PreventionGuidePages.map((guide) => guide.path),
    ...phase22SterilisationGuidePages.map((guide) => guide.path),
    ...phase23ChronicHealthGuidePages.map((guide) => guide.path),
    ...phase29HealthSymptomGuidePages.map((guide) => guide.path),
    ...phase25BreedLifestyleGuidePages.map((guide) => guide.path),
    dogNamesHub.path,
    ...phase26DogNameGuidePages.map((guide) => guide.path),
    funHub.path,
    ...phase27FunGuidePages.map((guide) => guide.path),
  ];

  return Array.from(new Set(routes)).map((route) => ({
    url: absoluteUrl(route),
    lastModified: now,
    changeFrequency: route === "/" ? "weekly" : "monthly",
    priority: priorityForRoute(route),
  }));
}
