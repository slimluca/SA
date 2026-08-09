import type { Metadata } from "next";
import { HubPage } from "@/components/HubPage";
import { getHub } from "@/lib/content";
import { phase4AdoptionCards } from "@/lib/phase4-guides";
import { phase11AdoptionCards } from "@/lib/phase11-guides";
import { phase12AdoptionCards } from "@/lib/phase12-guides";
import { phase22AdoptionCards } from "@/lib/phase22-sterilisation-guides";
import { phase25AdoptionCards } from "@/lib/phase25-breed-lifestyle-guides";
import { phase26AdoptionCards } from "@/lib/phase26-dog-name-guides";
import { getPremiumHubConfig } from "@/lib/premium-hubs";
import { createMetadata } from "@/lib/seo";

const baseHub = getHub("adoption");
const hubVisual = getPremiumHubConfig("adoption")!;
const hub = {
  ...baseHub,
  cards: [
    ...baseHub.cards,
    ...phase4AdoptionCards,
    ...phase11AdoptionCards,
    ...phase12AdoptionCards,
    ...phase22AdoptionCards,
    ...phase25AdoptionCards,
    ...phase26AdoptionCards,
  ],
};

export const metadata: Metadata = createMetadata({
  title: hub.seoTitle,
  description: hub.description,
  path: hub.path,
  image: hubVisual.image.src,
  imageAlt: hubVisual.image.alt,
  imageWidth: hubVisual.image.width,
  imageHeight: hubVisual.image.height,
});

export default function AdoptionPage() {
  return <HubPage hub={hub} />;
}
