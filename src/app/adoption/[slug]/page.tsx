import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { GuideArticle } from "@/components/GuideArticle";
import { getPhase4Guide, getPhase4GuidesByHub } from "@/lib/phase4-guides";
import { createMetadata } from "@/lib/seo";

type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return getPhase4GuidesByHub("/adoption").map((guide) => ({
    slug: guide.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const guide = getPhase4Guide(slug);

  if (!guide || guide.hubPath !== "/adoption") {
    return {};
  }

  return createMetadata({
    title: guide.seoTitle,
    description: guide.description,
    path: guide.path,
  });
}

export default async function AdoptionGuidePage({ params }: PageProps) {
  const { slug } = await params;
  const guide = getPhase4Guide(slug);

  if (!guide || guide.hubPath !== "/adoption") {
    notFound();
  }

  return <GuideArticle guide={guide} />;
}
