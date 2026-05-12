import type { Metadata } from "next";
import { HubPage } from "@/components/HubPage";
import { getHub } from "@/lib/content";
import { createMetadata } from "@/lib/seo";

const hub = getHub("breeds");

export const metadata: Metadata = createMetadata({
  title: hub.seoTitle,
  description: hub.description,
  path: hub.path,
});

export default function BreedsPage() {
  return <HubPage hub={hub} />;
}
