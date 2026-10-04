import type { Metadata } from "next";
import { HubPage } from "@/components/HubPage";
import { localCities } from "@/lib/phase17-local-guides";
import { dogServicesHub, phase19DogServiceGuidePages } from "@/lib/phase19-dog-services-guides";
import { phase21DogServicesCards } from "@/lib/phase21-prevention-guides";
import { phase22DogServicesCards } from "@/lib/phase22-sterilisation-guides";
import { phase23DogServicesCards } from "@/lib/phase23-chronic-health-guides";
import { shouldNoindexLocalGuide } from "@/lib/local-provider-directory";
import { createMetadata } from "@/lib/seo";

const hub = {
  ...dogServicesHub,
  related: [...dogServicesHub.related, ...phase21DogServicesCards, ...phase22DogServicesCards, ...phase23DogServicesCards],
};

const cardGroups = localCities.map((city) => ({
  title: `${city.name} dog services`,
  description: `Compare existing boarding, daycare, pet-sitting, dog-walking and holiday-care guidance for ${city.name}.`,
  cards: phase19DogServiceGuidePages
    .filter(
      (guide) =>
        guide.path.startsWith(`/dog-services/${city.slug}/`) && !shouldNoindexLocalGuide(guide.path),
    )
    .map((guide) => ({
      title: guide.title,
      description: guide.description,
      href: guide.path,
    })),
}));

export const metadata: Metadata = createMetadata({
  title: hub.seoTitle,
  description: hub.description,
  path: hub.path,
});

export default function DogServicesHubPage() {
  return <HubPage hub={hub} cardGroups={cardGroups} />;
}
