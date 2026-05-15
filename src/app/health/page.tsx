import type { Metadata } from "next";
import { HubPage } from "@/components/HubPage";
import { getHub } from "@/lib/content";
import { phase3HealthCards } from "@/lib/phase3-guides";
import { phase10HealthCards } from "@/lib/phase10-guides";
import { phase11HealthCards } from "@/lib/phase11-guides";
import { phase14HealthCards } from "@/lib/phase14-guides";
import { phase15HealthCards } from "@/lib/phase15-guides";
import { createMetadata } from "@/lib/seo";

const baseHub = getHub("health");
const hub = {
  ...baseHub,
  cards: [
    ...baseHub.cards,
    ...phase3HealthCards,
    ...phase10HealthCards,
    ...phase11HealthCards,
    ...phase14HealthCards,
    ...phase15HealthCards,
  ],
};

export const metadata: Metadata = createMetadata({
  title: hub.seoTitle,
  description: hub.description,
  path: hub.path,
});

export default function HealthPage() {
  return <HubPage hub={hub} />;
}
