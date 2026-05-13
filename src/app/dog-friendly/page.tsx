import type { Metadata } from "next";
import { HubPage } from "@/components/HubPage";
import { getHub } from "@/lib/content";
import { phase6DogFriendlyCards } from "@/lib/phase6-guides";
import { createMetadata } from "@/lib/seo";

const baseHub = getHub("dog-friendly");
const hub = {
  ...baseHub,
  cards: [...baseHub.cards, ...phase6DogFriendlyCards],
};

export const metadata: Metadata = createMetadata({
  title: hub.seoTitle,
  description: hub.description,
  path: hub.path,
});

export default function DogFriendlyPage() {
  return <HubPage hub={hub} />;
}
