import type { Metadata } from "next";
import { HubPage } from "@/components/HubPage";
import { getHub } from "@/lib/content";
import { createMetadata } from "@/lib/seo";

const hub = getHub("food");

export const metadata: Metadata = createMetadata({
  title: hub.seoTitle,
  description: hub.description,
  path: hub.path,
});

export default function FoodPage() {
  return <HubPage hub={hub} />;
}
