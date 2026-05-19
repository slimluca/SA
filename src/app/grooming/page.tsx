import type { Metadata } from "next";
import { HubPage } from "@/components/HubPage";
import { getHub } from "@/lib/content";
import { phase6GroomingCards } from "@/lib/phase6-guides";
import { phase17GroomingCards } from "@/lib/phase17-local-guides";
import { phase18GroomingCostCards } from "@/lib/phase18-local-cost-guides";
import { createMetadata } from "@/lib/seo";

const baseHub = getHub("grooming");
const hub = {
  ...baseHub,
  cards: [...baseHub.cards, ...phase6GroomingCards, ...phase17GroomingCards, ...phase18GroomingCostCards],
};

export const metadata: Metadata = createMetadata({
  title: hub.seoTitle,
  description: hub.description,
  path: hub.path,
});

export default function GroomingPage() {
  return <HubPage hub={hub} />;
}
