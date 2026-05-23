import type { Metadata } from "next";
import { HubPage } from "@/components/HubPage";
import { dogNamesHub } from "@/lib/phase26-dog-name-guides";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: dogNamesHub.seoTitle,
  description: dogNamesHub.description,
  path: dogNamesHub.path,
});

export default function DogNamesPage() {
  return <HubPage hub={dogNamesHub} />;
}
