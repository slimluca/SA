import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { GuideArticle } from "@/components/GuideArticle";
import { getPhase26DogNameGuide, phase26DogNameGuidePages } from "@/lib/phase26-dog-name-guides";
import { createMetadata } from "@/lib/seo";

type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return phase26DogNameGuidePages.map((guide) => ({ slug: guide.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const guide = getPhase26DogNameGuide(slug);

  if (!guide) {
    return {};
  }

  return createMetadata({
    title: guide.seoTitle,
    description: guide.description,
    path: guide.path,
  });
}

export default async function DogNameGuidePage({ params }: PageProps) {
  const { slug } = await params;
  const guide = getPhase26DogNameGuide(slug);

  if (!guide) {
    notFound();
  }

  return <GuideArticle guide={guide} />;
}
