import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { GuideArticle } from "@/components/GuideArticle";
import { getPhase13Guide, phase13GuidePages } from "@/lib/phase13-guides";
import { createMetadata } from "@/lib/seo";

type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return phase13GuidePages.map((guide) => ({
    slug: guide.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const guide = getPhase13Guide(slug);

  if (!guide) {
    return {};
  }

  return createMetadata({
    title: guide.seoTitle,
    description: guide.description,
    path: guide.path,
  });
}

export default async function LawGuidePage({ params }: PageProps) {
  const { slug } = await params;
  const guide = getPhase13Guide(slug);

  if (!guide) {
    notFound();
  }

  return <GuideArticle guide={guide} />;
}
