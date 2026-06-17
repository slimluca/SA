import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { GuideArticle } from "@/components/GuideArticle";
import { getPhase5Guide, getPhase5GuidesByHub } from "@/lib/phase5-guides";
import { getPhase14Guide, getPhase14GuidesByHub } from "@/lib/phase14-guides";
import { getPhase20Guide, getPhase20GuidesByHub } from "@/lib/phase20-recovery-guides";
import { getPhase30Guide, getPhase30GuidesByHub } from "@/lib/phase30-cost-insurance-guides";
import { createMetadata } from "@/lib/seo";

type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return [
    ...getPhase5GuidesByHub("/costs"),
    ...getPhase14GuidesByHub("/costs"),
    ...getPhase20GuidesByHub("/costs"),
    ...getPhase30GuidesByHub("/costs"),
  ]
    .map((guide) => guide.slug)
    .filter((slug, index, slugs) => slugs.indexOf(slug) === index)
    .map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const guide = getPhase30Guide(slug) ?? getPhase20Guide(slug) ?? getPhase5Guide(slug) ?? getPhase14Guide(slug);

  if (!guide || guide.hubPath !== "/costs") {
    return {};
  }

  return createMetadata({
    title: guide.seoTitle,
    description: guide.description,
    path: guide.path,
  });
}

export default async function CostGuidePage({ params }: PageProps) {
  const { slug } = await params;
  const guide = getPhase30Guide(slug) ?? getPhase20Guide(slug) ?? getPhase5Guide(slug) ?? getPhase14Guide(slug);

  if (!guide || guide.hubPath !== "/costs") {
    notFound();
  }

  return <GuideArticle guide={guide} />;
}
