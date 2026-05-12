import type { Metadata } from "next";
import { GuideArticle } from "@/components/GuideArticle";
import { getGuide } from "@/lib/content";
import { createMetadata } from "@/lib/seo";

const guide = getGuide("best-dog-breeds-for-south-african-homes");

export const metadata: Metadata = createMetadata({
  title: guide.seoTitle,
  description: guide.description,
  path: guide.path,
});

export default function BestDogBreedsForSouthAfricanHomesPage() {
  return <GuideArticle guide={guide} />;
}
