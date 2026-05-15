import type { Metadata } from "next";
import { HubPage } from "@/components/HubPage";
import { getHub } from "@/lib/content";
import { phase3HealthCards } from "@/lib/phase3-guides";
import { phase10HealthCards } from "@/lib/phase10-guides";
import { createMetadata } from "@/lib/seo";

const baseHub = getHub("health");
const hub = {
  ...baseHub,
  cards: [...baseHub.cards, ...phase3HealthCards, ...phase10HealthCards],
};

export const metadata: Metadata = createMetadata({
  title: hub.seoTitle,
  description: hub.description,
  path: hub.path,
});

export default function HealthPage() {
  return <HubPage hub={hub} />;
}
