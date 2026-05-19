import type { Metadata } from "next";
import { HubPage } from "@/components/HubPage";
import { puppyHub } from "@/lib/phase11-guides";
import { phase12PuppyCards } from "@/lib/phase12-guides";
import { phase14PuppyCards } from "@/lib/phase14-guides";
import { phase15PuppyCards } from "@/lib/phase15-guides";
import { phase19PuppyCards } from "@/lib/phase19-dog-services-guides";
import { createMetadata } from "@/lib/seo";

const hub = {
  ...puppyHub,
  related: [
    ...puppyHub.related,
    ...phase12PuppyCards,
    ...phase14PuppyCards,
    ...phase15PuppyCards,
    ...phase19PuppyCards,
  ],
};

export const metadata: Metadata = createMetadata({
  title: hub.seoTitle,
  description: hub.description,
  path: hub.path,
});

export default function PuppyPage() {
  return <HubPage hub={hub} />;
}
