import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { GuideArticle } from "@/components/GuideArticle";
import { getPhase5Guide, getPhase5GuidesByHub } from "@/lib/phase5-guides";
import { getPhase14Guide, getPhase14GuidesByHub } from "@/lib/phase14-guides";
import { getPhase20Guide, getPhase20GuidesByHub } from "@/lib/phase20-recovery-guides";
import { createMetadata } from "@/lib/seo";

type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return [...getPhase5GuidesByHub("/insurance"), ...getPhase14GuidesByHub("/insurance"), ...getPhase20GuidesByHub("/insurance")]
    .map((guide) => guide.slug)
    .filter((slug, index, slugs) => slugs.indexOf(slug) === index)
    .map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const guide = getPhase20Guide(slug) ?? getPhase5Guide(slug) ?? getPhase14Guide(slug);

  if (!guide || guide.hubPath !== "/insurance") {
    return {};
  }

  return createMetadata({
    title: guide.seoTitle,
    description: guide.description,
    path: guide.path,
  });
}

export default async function InsuranceGuidePage({ params }: PageProps) {
  const { slug } = await params;
  const guide = getPhase20Guide(slug) ?? getPhase5Guide(slug) ?? getPhase14Guide(slug);

  if (!guide || guide.hubPath !== "/insurance") {
    notFound();
  }

  return <GuideArticle guide={guide} />;
}
