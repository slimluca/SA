import type { Metadata } from "next";
import { GuideArticle } from "@/components/GuideArticle";
import { getGuide } from "@/lib/content";
import { createMetadata } from "@/lib/seo";

const guide = getGuide("cost-of-owning-a-dog-south-africa");

export const metadata: Metadata = createMetadata({
  title: guide.seoTitle,
  description: guide.description,
  path: guide.path,
});

export default function CostOfOwningDogSouthAfricaPage() {
  return <GuideArticle guide={guide} />;
}
