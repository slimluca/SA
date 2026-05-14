import type { Metadata } from "next";
import { HubPage } from "@/components/HubPage";
import { provinceHub } from "@/lib/phase7-guides";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: provinceHub.seoTitle,
  description: provinceHub.description,
  path: provinceHub.path,
});

export default function ProvinceHubPage() {
  return <HubPage hub={provinceHub} />;
}
