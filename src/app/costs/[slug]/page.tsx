import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { GuideArticle } from "@/components/GuideArticle";
import { resolveGuideForHub } from "@/lib/guide-resolver";
import { getPhase5Guide, getPhase5GuidesByHub } from "@/lib/phase5-guides";
import { getPhase14Guide, getPhase14GuidesByHub } from "@/lib/phase14-guides";
import { getPhase20Guide, getPhase20GuidesByHub } from "@/lib/phase20-recovery-guides";
import { getPhase30Guide, getPhase30GuidesByHub } from "@/lib/phase30-cost-insurance-guides";
import { createMetadata } from "@/lib/seo";
import { getFlagshipGuide } from "@/lib/flagship-guides";
import { costReportGuide, getCostReportGuide } from "@/lib/cost-report";

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
    costReportGuide,
  ]
    .map((guide) => guide.slug)
    .filter((slug, index, slugs) => slugs.indexOf(slug) === index)
    .map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const guide = resolveGuideForHub(
    "/costs",
    getCostReportGuide(slug),
    getFlagshipGuide(slug, "/costs"),
    getPhase30Guide(slug, "/costs"),
    getPhase20Guide(slug, "/costs"),
    getPhase5Guide(slug, "/costs"),
    getPhase14Guide(slug, "/costs"),
  );

  if (!guide || guide.hubPath !== "/costs") {
    return {};
  }

  return createMetadata({
    title: guide.seoTitle,
    description: guide.description,
    path: guide.path,
    image: guide.primaryImage?.src,
    imageAlt: guide.primaryImage?.alt,
    imageWidth: guide.primaryImage?.width,
    imageHeight: guide.primaryImage?.height,
  });
}

export default async function CostGuidePage({ params }: PageProps) {
  const { slug } = await params;
  const guide = resolveGuideForHub(
    "/costs",
    getCostReportGuide(slug),
    getFlagshipGuide(slug, "/costs"),
    getPhase30Guide(slug, "/costs"),
    getPhase20Guide(slug, "/costs"),
    getPhase5Guide(slug, "/costs"),
    getPhase14Guide(slug, "/costs"),
  );

  if (!guide || guide.hubPath !== "/costs") {
    notFound();
  }

  return <GuideArticle guide={guide} />;
}
