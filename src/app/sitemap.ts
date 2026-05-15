import type { MetadataRoute } from "next";
import { guidePages, hubPages } from "@/lib/content";
import { phase3GuidePages } from "@/lib/phase3-guides";
import { phase4GuidePages } from "@/lib/phase4-guides";
import { phase5GuidePages } from "@/lib/phase5-guides";
import { phase6GuidePages } from "@/lib/phase6-guides";
import { cityHub, phase7GuidePages, provinceHub } from "@/lib/phase7-guides";
import { phase9GuidePages } from "@/lib/phase9-guides";
import { phase10GuidePages } from "@/lib/phase10-guides";
import { absoluteUrl } from "@/lib/site";

const staticRoutes = [
  "/",
  "/start-here",
  "/about",
  "/contact",
  "/editorial-policy",
  "/privacy-policy",
  "/terms",
];

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
  ];

  return routes.map((route) => ({
    url: absoluteUrl(route),
    lastModified: now,
    changeFrequency: route === "/" ? "weekly" : "monthly",
    priority: route === "/" ? 1 : 0.7,
  }));
}
