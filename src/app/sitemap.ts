import type { MetadataRoute } from "next";
import { absoluteUrl } from "@/lib/site";

const routes = ["/", "/about", "/contact", "/editorial-policy", "/privacy-policy", "/terms"];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  return routes.map((route) => ({
    url: absoluteUrl(route),
    lastModified: now,
    changeFrequency: route === "/" ? "weekly" : "monthly",
    priority: route === "/" ? 1 : 0.7,
  }));
}
