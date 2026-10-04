import type { MetadataRoute } from "next";
import type { GuideContent } from "@/lib/content";
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
import { phase20RecoveryGuidePages } from "@/lib/phase20-recovery-guides";
import { phase21PreventionGuidePages } from "@/lib/phase21-prevention-guides";
import { phase22SterilisationGuidePages } from "@/lib/phase22-sterilisation-guides";
import { phase23ChronicHealthGuidePages } from "@/lib/phase23-chronic-health-guides";
import { phase25BreedLifestyleGuidePages } from "@/lib/phase25-breed-lifestyle-guides";
import { dogNamesHub, phase26DogNameGuidePages } from "@/lib/phase26-dog-name-guides";
import { funHub, phase27FunGuidePages } from "@/lib/phase27-fun-guides";
import { phase28LocalCityHubs, phase28LocalGuidePages } from "@/lib/phase28-local-expansion-guides";
import { phase29HealthSymptomGuidePages } from "@/lib/phase29-health-symptom-guides";
import { phase30CostInsuranceGuidePages } from "@/lib/phase30-cost-insurance-guides";
import { shouldNoindexLocalGuide } from "@/lib/local-provider-directory";
import { absoluteUrl } from "@/lib/site";
import { tools, toolsHub } from "@/lib/tools-data";
import { flagshipGuides } from "@/lib/flagship-guides";
import { linkableAssetGuides } from "@/lib/linkable-assets";
import { costReportGuide } from "@/lib/cost-report";

const staticRoutes = [
  "/",
  "/start-here",
  "/about",
  "/contact",
  "/editorial-policy",
  "/privacy-policy",
  "/terms",
];

const retiredSitemapPaths = new Set(["/grooming/dog-grooming-costs-south-africa"]);

const hubs = [
  ...hubPages,
  provinceHub,
  cityHub,
  puppyHub,
  lawsHub,
  toolsHub,
  localHub,
  ...localCityHubs,
  ...phase28LocalCityHubs,
  localCostHub,
  dogServicesHub,
  dogNamesHub,
  funHub,
];

const guides: GuideContent[] = [
  ...guidePages,
  ...phase3GuidePages,
  ...phase4GuidePages,
  ...phase5GuidePages,
  ...phase6GuidePages,
  ...phase7GuidePages,
  ...phase9GuidePages,
  ...phase10GuidePages,
  ...phase11GuidePages,
  ...phase12GuidePages,
  ...phase13GuidePages,
  ...phase14GuidePages,
  ...phase15GuidePages,
  ...phase17LocalGuidePages,
  ...phase18LocalCostGuidePages,
  ...phase19DogServiceGuidePages,
  ...phase20RecoveryGuidePages,
  ...phase21PreventionGuidePages,
  ...phase22SterilisationGuidePages,
  ...phase23ChronicHealthGuidePages,
  ...phase25BreedLifestyleGuidePages,
  ...phase26DogNameGuidePages,
  ...phase27FunGuidePages,
  ...phase28LocalGuidePages,
  ...phase29HealthSymptomGuidePages,
  ...phase30CostInsuranceGuidePages,
  ...flagshipGuides,
  ...linkableAssetGuides,
  costReportGuide,
];

export default function sitemap(): MetadataRoute.Sitemap {
  const entries = new Map<string, MetadataRoute.Sitemap[number]>();

  for (const route of [...staticRoutes, ...hubs.map((hub) => hub.path), ...tools.map((tool) => tool.path)]) {
    entries.set(route, { url: absoluteUrl(route) });
  }

  for (const guide of guides) {
    if (retiredSitemapPaths.has(guide.path) || shouldNoindexLocalGuide(guide.path)) continue;

    entries.set(guide.path, {
      url: absoluteUrl(guide.path),
      lastModified: new Date(`${guide.updated}T00:00:00.000Z`),
    });
  }

  return [...entries.values()];
}
