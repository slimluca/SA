import type { Metadata } from "next";
import { HubPage } from "@/components/HubPage";
import { getHub } from "@/lib/content";
import { createMetadata } from "@/lib/seo";

const hub = getHub("grooming");

export const metadata: Metadata = createMetadata({
  title: hub.seoTitle,
  description: hub.description,
  path: hub.path,
});

export default function GroomingPage() {
  return <HubPage hub={hub} />;
}
