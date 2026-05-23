import type { Metadata } from "next";
import { HubPage } from "@/components/HubPage";
import { funHub } from "@/lib/phase27-fun-guides";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: funHub.seoTitle,
  description: funHub.description,
  path: funHub.path,
});

export default function FunPage() {
  return <HubPage hub={funHub} />;
}
