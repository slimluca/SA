import type { Metadata } from "next";
import { HubPage } from "@/components/HubPage";
import { dogServicesHub } from "@/lib/phase19-dog-services-guides";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: dogServicesHub.seoTitle,
  description: dogServicesHub.description,
  path: dogServicesHub.path,
});

export default function DogServicesHubPage() {
  return <HubPage hub={dogServicesHub} />;
}
