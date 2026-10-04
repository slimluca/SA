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

type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return [
    ...getPhase5GuidesByHub("/insurance"),
    ...getPhase14GuidesByHub("/insurance"),
    ...getPhase20GuidesByHub("/insurance"),
    ...getPhase30GuidesByHub("/insurance"),
  ]
    .map((guide) => guide.slug)
    .filter((slug, index, slugs) => slugs.indexOf(slug) === index)
    .map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const guide = resolveGuideForHub(
    "/insurance",
    getFlagshipGuide(slug, "/insurance"),
    getPhase30Guide(slug, "/insurance"),
    getPhase20Guide(slug, "/insurance"),
    getPhase5Guide(slug, "/insurance"),
    getPhase14Guide(slug, "/insurance"),
  );

  if (!guide || guide.hubPath !== "/insurance") {
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

export default async function InsuranceGuidePage({ params }: PageProps) {
  const { slug } = await params;
  const guide = resolveGuideForHub(
    "/insurance",
    getFlagshipGuide(slug, "/insurance"),
    getPhase30Guide(slug, "/insurance"),
    getPhase20Guide(slug, "/insurance"),
    getPhase5Guide(slug, "/insurance"),
    getPhase14Guide(slug, "/insurance"),
  );

  if (!guide || guide.hubPath !== "/insurance") {
    notFound();
  }

  return <GuideArticle guide={guide} />;
}
