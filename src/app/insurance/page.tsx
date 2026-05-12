import type { Metadata } from "next";
import { HubPage } from "@/components/HubPage";
import { getHub } from "@/lib/content";
import { createMetadata } from "@/lib/seo";

const hub = getHub("insurance");

export const metadata: Metadata = createMetadata({
  title: hub.seoTitle,
  description: hub.description,
  path: hub.path,
});

export default function InsurancePage() {
  return <HubPage hub={hub} />;
}
