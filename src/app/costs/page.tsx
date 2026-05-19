import type { Metadata } from "next";
import { HubPage } from "@/components/HubPage";
import { getHub } from "@/lib/content";
import { phase5CostCards } from "@/lib/phase5-guides";
import { phase11CostCards } from "@/lib/phase11-guides";
import { phase12CostCards } from "@/lib/phase12-guides";
import { phase14CostCards } from "@/lib/phase14-guides";
import { phase15CostCards } from "@/lib/phase15-guides";
import { phase18CostCards } from "@/lib/phase18-local-cost-guides";
import { phase19CostCards } from "@/lib/phase19-dog-services-guides";
import { createMetadata } from "@/lib/seo";

const baseHub = getHub("costs");
const hub = {
  ...baseHub,
  cards: [
    ...baseHub.cards,
    ...phase5CostCards,
    ...phase11CostCards,
    ...phase12CostCards,
    ...phase14CostCards,
    ...phase15CostCards,
    ...phase18CostCards,
    ...phase19CostCards,
  ],
};

export const metadata: Metadata = createMetadata({
  title: hub.seoTitle,
  description: hub.description,
  path: hub.path,
});

export default function CostsPage() {
  return <HubPage hub={hub} />;
}
