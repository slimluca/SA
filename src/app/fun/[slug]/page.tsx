import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { GuideArticle } from "@/components/GuideArticle";
import { getPhase27FunGuide, phase27FunGuidePages } from "@/lib/phase27-fun-guides";
import { createMetadata } from "@/lib/seo";

type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return phase27FunGuidePages.map((guide) => ({ slug: guide.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const guide = getPhase27FunGuide(slug);

  if (!guide) {
    return {};
  }

  return createMetadata({
    title: guide.seoTitle,
    description: guide.description,
    path: guide.path,
  });
}

export default async function FunGuidePage({ params }: PageProps) {
  const { slug } = await params;
  const guide = getPhase27FunGuide(slug);

  if (!guide) {
    notFound();
  }

  return <GuideArticle guide={guide} />;
}
