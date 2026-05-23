import type { Metadata } from "next";
import { HubPage } from "@/components/HubPage";
import { puppyHub } from "@/lib/phase11-guides";
import { phase12PuppyCards } from "@/lib/phase12-guides";
import { phase14PuppyCards } from "@/lib/phase14-guides";
import { phase15PuppyCards } from "@/lib/phase15-guides";
import { phase19PuppyCards } from "@/lib/phase19-dog-services-guides";
import { phase21PuppyCards } from "@/lib/phase21-prevention-guides";
import { phase22PuppyCards } from "@/lib/phase22-sterilisation-guides";
import { phase25PuppyCards } from "@/lib/phase25-breed-lifestyle-guides";
import { phase26PuppyCards } from "@/lib/phase26-dog-name-guides";
import { phase27PuppyCards } from "@/lib/phase27-fun-guides";
import { createMetadata } from "@/lib/seo";

const hub = {
  ...puppyHub,
  related: [
    ...puppyHub.related,
    ...phase12PuppyCards,
    ...phase14PuppyCards,
    ...phase15PuppyCards,
    ...phase19PuppyCards,
    ...phase21PuppyCards,
    ...phase22PuppyCards,
    ...phase25PuppyCards,
    ...phase26PuppyCards,
    ...phase27PuppyCards,
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
