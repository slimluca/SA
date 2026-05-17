import type { Metadata } from "next";
import { HubPage } from "@/components/HubPage";
import { localHub } from "@/lib/phase17-local-guides";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: localHub.seoTitle,
  description: localHub.description,
  path: localHub.path,
});

export default function LocalHubPage() {
  return <HubPage hub={localHub} />;
}
