import type { Metadata } from "next";
import { HubPage } from "@/components/HubPage";
import { lawsHub } from "@/lib/phase13-guides";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: lawsHub.seoTitle,
  description: lawsHub.description,
  path: lawsHub.path,
});

export default function LawsPage() {
  return <HubPage hub={lawsHub} />;
}
