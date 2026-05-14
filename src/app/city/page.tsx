import type { Metadata } from "next";
import { HubPage } from "@/components/HubPage";
import { cityHub } from "@/lib/phase7-guides";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: cityHub.seoTitle,
  description: cityHub.description,
  path: cityHub.path,
});

export default function CityHubPage() {
  return <HubPage hub={cityHub} />;
}
