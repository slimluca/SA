import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { GuideArticle } from "@/components/GuideArticle";
import { resolveGuideForHub } from "@/lib/guide-resolver";
import { getPhase4Guide, getPhase4GuidesByHub } from "@/lib/phase4-guides";
import { createMetadata } from "@/lib/seo";
import { getFlagshipGuide } from "@/lib/flagship-guides";

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
  const guide = resolveGuideForHub(
    "/adoption",
    getFlagshipGuide(slug, "/adoption"),
    getPhase4Guide(slug, "/adoption"),
  );

  if (!guide || guide.hubPath !== "/adoption") {
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

export default async function AdoptionGuidePage({ params }: PageProps) {
  const { slug } = await params;
  const guide = resolveGuideForHub(
    "/adoption",
    getFlagshipGuide(slug, "/adoption"),
    getPhase4Guide(slug, "/adoption"),
  );

  if (!guide || guide.hubPath !== "/adoption") {
    notFound();
  }

  return <GuideArticle guide={guide} />;
}
