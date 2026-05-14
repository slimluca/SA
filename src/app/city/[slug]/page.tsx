import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { GuideArticle } from "@/components/GuideArticle";
import { getPhase7City } from "@/lib/phase7-guides";
import { createMetadata } from "@/lib/seo";

type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const guide = getPhase7City(slug);

  if (!guide) {
    return {};
  }

  return createMetadata({
    title: guide.seoTitle,
    description: guide.description,
    path: guide.path,
  });
}

export default async function CityGuidePage({ params }: PageProps) {
  const { slug } = await params;
  const guide = getPhase7City(slug);

  if (!guide) {
    notFound();
  }

  return <GuideArticle guide={guide} />;
}
