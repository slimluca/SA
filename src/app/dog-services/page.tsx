import type { Metadata } from "next";
import { HubPage } from "@/components/HubPage";
import { dogServicesHub } from "@/lib/phase19-dog-services-guides";
import { phase21DogServicesCards } from "@/lib/phase21-prevention-guides";
import { phase22DogServicesCards } from "@/lib/phase22-sterilisation-guides";
import { phase23DogServicesCards } from "@/lib/phase23-chronic-health-guides";
import { createMetadata } from "@/lib/seo";

const hub = {
  ...dogServicesHub,
  related: [...dogServicesHub.related, ...phase21DogServicesCards, ...phase22DogServicesCards, ...phase23DogServicesCards],
};

export const metadata: Metadata = createMetadata({
  title: hub.seoTitle,
  description: hub.description,
  path: hub.path,
});

export default function DogServicesHubPage() {
  return <HubPage hub={hub} />;
}
