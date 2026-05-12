import type { Metadata } from "next";
import { HubPage } from "@/components/HubPage";
import { getHub } from "@/lib/content";
import { createMetadata } from "@/lib/seo";

const hub = getHub("adoption");

export const metadata: Metadata = createMetadata({
  title: hub.seoTitle,
  description: hub.description,
  path: hub.path,
});

export default function AdoptionPage() {
  return <HubPage hub={hub} />;
}
