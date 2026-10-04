import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { GuideArticle } from "@/components/GuideArticle";
import { resolveGuideForHub } from "@/lib/guide-resolver";
import { getFlagshipGuide } from "@/lib/flagship-guides";
import { getPhase6Guide } from "@/lib/phase6-guides";
import { getPhase20Guide } from "@/lib/phase20-recovery-guides";
import { createMetadata } from "@/lib/seo";

type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const guide = resolveGuideForHub(
    "/training",
    getFlagshipGuide(slug, "/training"),
    getPhase20Guide(slug, "/training"),
    getPhase6Guide(slug, "/training"),
  );

  if (!guide || guide.hubPath !== "/training") {
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

export default async function TrainingGuidePage({ params }: PageProps) {
  const { slug } = await params;
  const guide = resolveGuideForHub(
    "/training",
    getFlagshipGuide(slug, "/training"),
    getPhase20Guide(slug, "/training"),
    getPhase6Guide(slug, "/training"),
  );

  if (!guide || guide.hubPath !== "/training") {
    notFound();
  }

  return <GuideArticle guide={guide} />;
}
