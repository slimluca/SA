import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { GuideArticle } from "@/components/GuideArticle";
import { resolveGuideForHub } from "@/lib/guide-resolver";
import { getFlagshipGuide } from "@/lib/flagship-guides";
import { getPhase4Guide, getPhase4GuidesByHub } from "@/lib/phase4-guides";
import { getPhase12Guide, getPhase12GuidesByHub } from "@/lib/phase12-guides";
import { getPhase25Guide, getPhase25GuidesByHub } from "@/lib/phase25-breed-lifestyle-guides";
import { createMetadata } from "@/lib/seo";

type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return [
    ...getPhase4GuidesByHub("/breeds"),
    ...getPhase12GuidesByHub("/breeds"),
    ...getPhase25GuidesByHub("/breeds"),
  ].map((guide) => ({
    slug: guide.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const guide = resolveGuideForHub(
    "/breeds",
    getFlagshipGuide(slug, "/breeds"),
    getPhase4Guide(slug, "/breeds"),
    getPhase12Guide(slug),
    getPhase25Guide(slug),
  );

  if (!guide || guide.hubPath !== "/breeds") {
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

export default async function BreedGuidePage({ params }: PageProps) {
  const { slug } = await params;
  const guide = resolveGuideForHub(
    "/breeds",
    getFlagshipGuide(slug, "/breeds"),
    getPhase4Guide(slug, "/breeds"),
    getPhase12Guide(slug),
    getPhase25Guide(slug),
  );

  if (!guide || guide.hubPath !== "/breeds") {
    notFound();
  }

  return <GuideArticle guide={guide} />;
}
