import type { Metadata } from "next";
import { GuideArticle } from "@/components/GuideArticle";
import { getFlagshipGuide } from "@/lib/flagship-guides";
import { createMetadata } from "@/lib/seo";

const guide = getFlagshipGuide("cost-of-owning-a-dog-south-africa")!;

export const metadata: Metadata = createMetadata({
  title: guide.seoTitle,
  description: guide.description,
  path: guide.path,
  image: guide.primaryImage?.src,
  imageAlt: guide.primaryImage?.alt,
  imageWidth: guide.primaryImage?.width,
  imageHeight: guide.primaryImage?.height,
});

export default function CostOfOwningDogSouthAfricaPage() {
  return <GuideArticle guide={guide} />;
}
