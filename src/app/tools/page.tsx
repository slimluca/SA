import type { Metadata } from "next";
import { HubPage } from "@/components/HubPage";
import { toolsHub } from "@/lib/tools-data";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: toolsHub.seoTitle,
  description: toolsHub.description,
  path: toolsHub.path,
});

export default function ToolsPage() {
  return <HubPage hub={toolsHub} />;
}
