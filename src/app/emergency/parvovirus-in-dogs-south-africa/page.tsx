import type { Metadata } from "next";
import { GuideArticle } from "@/components/GuideArticle";
import { getGuide } from "@/lib/content";
import { createMetadata } from "@/lib/seo";

const guide = getGuide("parvovirus-in-dogs-south-africa");

export const metadata: Metadata = createMetadata({
  title: guide.seoTitle,
  description: guide.description,
  path: guide.path,
});

export default function ParvovirusSouthAfricaPage() {
  return <GuideArticle guide={guide} />;
}
