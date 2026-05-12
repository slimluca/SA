import type { MetadataRoute } from "next";
import { guidePages, hubPages } from "@/lib/content";
import { absoluteUrl } from "@/lib/site";

const staticRoutes = ["/", "/about", "/contact", "/editorial-policy", "/privacy-policy", "/terms"];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const routes = [...staticRoutes, ...hubPages.map((hub) => hub.path), ...guidePages.map((guide) => guide.path)];

  return routes.map((route) => ({
    url: absoluteUrl(route),
    lastModified: now,
    changeFrequency: route === "/" ? "weekly" : "monthly",
    priority: route === "/" ? 1 : 0.7,
  }));
}
