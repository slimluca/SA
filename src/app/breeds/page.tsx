import type { Metadata } from "next";
import { HubPage } from "@/components/HubPage";
import { getHub } from "@/lib/content";
import { phase4BreedCards } from "@/lib/phase4-guides";
import { phase12BreedCards } from "@/lib/phase12-guides";
import { phase14BreedCards } from "@/lib/phase14-guides";
import { phase15BreedCards } from "@/lib/phase15-guides";
import { createMetadata } from "@/lib/seo";

const baseHub = getHub("breeds");
const hub = {
  ...baseHub,
  cards: [...baseHub.cards, ...phase4BreedCards, ...phase12BreedCards, ...phase14BreedCards, ...phase15BreedCards],
};

export const metadata: Metadata = createMetadata({
  title: hub.seoTitle,
  description: hub.description,
  path: hub.path,
});

export default function BreedsPage() {
  return <HubPage hub={hub} />;
}
