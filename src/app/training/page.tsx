import type { Metadata } from "next";
import { HubPage } from "@/components/HubPage";
import { getHub } from "@/lib/content";
import { phase6TrainingCards } from "@/lib/phase6-guides";
import { phase11TrainingCards } from "@/lib/phase11-guides";
import { phase12TrainingCards } from "@/lib/phase12-guides";
import { phase13TrainingCards } from "@/lib/phase13-guides";
import { phase17TrainingCards } from "@/lib/phase17-local-guides";
import { phase18TrainingCostCards } from "@/lib/phase18-local-cost-guides";
import { phase19TrainingCards } from "@/lib/phase19-dog-services-guides";
import { phase20TrainingCards } from "@/lib/phase20-recovery-guides";
import { phase25TrainingCards } from "@/lib/phase25-breed-lifestyle-guides";
import { phase27TrainingCards } from "@/lib/phase27-fun-guides";
import { createMetadata } from "@/lib/seo";

const baseHub = getHub("training");
const hub = {
  ...baseHub,
  cards: [
    ...baseHub.cards,
    ...phase6TrainingCards,
    ...phase11TrainingCards,
    ...phase12TrainingCards,
    ...phase13TrainingCards,
    ...phase17TrainingCards,
    ...phase18TrainingCostCards,
    ...phase19TrainingCards,
    ...phase20TrainingCards,
    ...phase25TrainingCards,
    ...phase27TrainingCards,
  ],
};

export const metadata: Metadata = createMetadata({
  title: hub.seoTitle,
  description: hub.description,
  path: hub.path,
});

export default function TrainingPage() {
  return <HubPage hub={hub} />;
}
