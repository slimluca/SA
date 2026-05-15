import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { GuideArticle } from "@/components/GuideArticle";
import { getPhase11Guide, phase11GuidePages } from "@/lib/phase11-guides";
import { createMetadata } from "@/lib/seo";

type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return phase11GuidePages.map((guide) => ({
    slug: guide.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const guide = getPhase11Guide(slug);

  if (!guide) {
    return {};
  }

  return createMetadata({
    title: guide.seoTitle,
    description: guide.description,
    path: guide.path,
  });
}

export default async function PuppyGuidePage({ params }: PageProps) {
  const { slug } = await params;
  const guide = getPhase11Guide(slug);

  if (!guide) {
    notFound();
  }

  return <GuideArticle guide={guide} />;
}
