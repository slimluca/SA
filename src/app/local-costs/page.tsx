import type { Metadata } from "next";
import { HubPage } from "@/components/HubPage";
import { localCostHub } from "@/lib/phase18-local-cost-guides";
import { phase19LocalCostCards } from "@/lib/phase19-dog-services-guides";
import { phase20LocalCostCards } from "@/lib/phase20-recovery-guides";
import { phase21LocalCostCards } from "@/lib/phase21-prevention-guides";
import { createMetadata } from "@/lib/seo";

const hub = {
  ...localCostHub,
  cards: [...localCostHub.cards, ...phase19LocalCostCards, ...phase20LocalCostCards, ...phase21LocalCostCards],
  related: [...localCostHub.related, ...phase19LocalCostCards, ...phase20LocalCostCards, ...phase21LocalCostCards],
};

export const metadata: Metadata = createMetadata({
  title: hub.seoTitle,
  description: hub.description,
  path: hub.path,
});

export default function LocalCostsHubPage() {
  return <HubPage hub={hub} />;
}
