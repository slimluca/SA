import type { Metadata } from "next";
import { HubPage } from "@/components/HubPage";
import { getHub } from "@/lib/content";
import { phase4BreedCards } from "@/lib/phase4-guides";
import { createMetadata } from "@/lib/seo";

const baseHub = getHub("breeds");
const hub = {
  ...baseHub,
  cards: [...baseHub.cards, ...phase4BreedCards],
};

export const metadata: Metadata = createMetadata({
  title: hub.seoTitle,
  description: hub.description,
  path: hub.path,
});

export default function BreedsPage() {
  return <HubPage hub={hub} />;
}
