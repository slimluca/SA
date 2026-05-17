import type { Metadata } from "next";
import { HubPage } from "@/components/HubPage";
import { getHub } from "@/lib/content";
import { phase3EmergencyCards } from "@/lib/phase3-guides";
import { phase10EmergencyCards } from "@/lib/phase10-guides";
import { phase14EmergencyCards } from "@/lib/phase14-guides";
import { phase17EmergencyCards } from "@/lib/phase17-local-guides";
import { createMetadata } from "@/lib/seo";

const baseHub = getHub("emergency");
const hub = {
  ...baseHub,
  cards: [...baseHub.cards, ...phase3EmergencyCards, ...phase10EmergencyCards, ...phase14EmergencyCards, ...phase17EmergencyCards],
};

export const metadata: Metadata = createMetadata({
  title: hub.seoTitle,
  description: hub.description,
  path: hub.path,
});

export default function EmergencyPage() {
  return <HubPage hub={hub} />;
}
