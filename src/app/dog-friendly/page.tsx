import type { Metadata } from "next";
import { HubPage } from "@/components/HubPage";
import { getHub } from "@/lib/content";
import { phase6DogFriendlyCards } from "@/lib/phase6-guides";
import { cityHub, provinceHub } from "@/lib/phase7-guides";
import { phase13DogFriendlyCards } from "@/lib/phase13-guides";
import { createMetadata } from "@/lib/seo";

const baseHub = getHub("dog-friendly");
const hub = {
  ...baseHub,
  cards: [
    ...baseHub.cards,
    ...phase6DogFriendlyCards,
    ...phase13DogFriendlyCards,
    {
      title: "City Dog Owner Guides",
      description:
        "Local guidance for major South African cities, including outing rules to verify, traffic, housing, heat, and emergency planning.",
      href: cityHub.path,
    },
    {
      title: "Province Dog Owner Guides",
      description:
        "Province-level dog care context for climate, local risks, travel, adoption, grooming, and dog-friendly planning.",
      href: provinceHub.path,
    },
  ],
};

export const metadata: Metadata = createMetadata({
  title: hub.seoTitle,
  description: hub.description,
  path: hub.path,
});

export default function DogFriendlyPage() {
  return <HubPage hub={hub} />;
}
