import type { Metadata } from "next";
import { HubPage } from "@/components/HubPage";
import { getHub } from "@/lib/content";
import { phase5FoodCards } from "@/lib/phase5-guides";
import { createMetadata } from "@/lib/seo";

const baseHub = getHub("food");
const hub = {
  ...baseHub,
  cards: [...baseHub.cards, ...phase5FoodCards],
};

export const metadata: Metadata = createMetadata({
  title: hub.seoTitle,
  description: hub.description,
  path: hub.path,
});

export default function FoodPage() {
  return <HubPage hub={hub} />;
}
