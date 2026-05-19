import type { Metadata } from "next";
import { HubPage } from "@/components/HubPage";
import { localHub } from "@/lib/phase17-local-guides";
import { localCostHub } from "@/lib/phase18-local-cost-guides";
import { phase19LocalCards } from "@/lib/phase19-dog-services-guides";
import { createMetadata } from "@/lib/seo";

const hub = {
  ...localHub,
  cards: [
    {
      title: "Local Dog Cost Guides",
      description:
        "City cost guides for grooming prices, training costs, emergency vet budgets, and monthly dog ownership planning.",
      href: localCostHub.path,
    },
    ...phase19LocalCards,
    ...localHub.cards,
  ],
  related: [
    {
      title: "Dog Services",
      description:
        "Plan boarding, daycare, pet sitting, dog walking, and holiday dog care by city.",
      href: "/dog-services",
    },
    {
      title: "Local Dog Cost Guides",
      description:
        "Plan grooming, training, emergency vet care, and monthly budgets by city.",
      href: localCostHub.path,
    },
    ...localHub.related,
  ],
};

export const metadata: Metadata = createMetadata({
  title: hub.seoTitle,
  description: hub.description,
  path: hub.path,
});

export default function LocalHubPage() {
  return <HubPage hub={hub} />;
}
