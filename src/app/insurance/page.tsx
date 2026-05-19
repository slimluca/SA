import type { Metadata } from "next";
import { HubPage } from "@/components/HubPage";
import { getHub } from "@/lib/content";
import { phase5InsuranceCards } from "@/lib/phase5-guides";
import { phase14InsuranceCards } from "@/lib/phase14-guides";
import { phase18InsuranceCards } from "@/lib/phase18-local-cost-guides";
import { createMetadata } from "@/lib/seo";

const baseHub = getHub("insurance");
const hub = {
  ...baseHub,
  cards: [...baseHub.cards, ...phase5InsuranceCards, ...phase14InsuranceCards, ...phase18InsuranceCards],
};

export const metadata: Metadata = createMetadata({
  title: hub.seoTitle,
  description: hub.description,
  path: hub.path,
});

export default function InsurancePage() {
  return <HubPage hub={hub} />;
}
