import type { Metadata } from "next";
import { HubPage } from "@/components/HubPage";
import { getHub } from "@/lib/content";
import { phase5FoodCards } from "@/lib/phase5-guides";
import { phase9FoodCards } from "@/lib/phase9-guides";
import { phase11FoodCards } from "@/lib/phase11-guides";
import { phase15FoodCards } from "@/lib/phase15-guides";
import { phase20FoodCards } from "@/lib/phase20-recovery-guides";
import { createMetadata } from "@/lib/seo";

const baseHub = getHub("food");
const hub = {
  ...baseHub,
  cards: [
    ...baseHub.cards,
    ...phase5FoodCards,
    ...phase9FoodCards,
    ...phase11FoodCards,
    ...phase15FoodCards,
    ...phase20FoodCards,
  ],
};

export const metadata: Metadata = createMetadata({
  title: hub.seoTitle,
  description: hub.description,
  path: hub.path,
});

export default function FoodPage() {
  return <HubPage hub={hub} />;
}
