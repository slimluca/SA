import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { GuideArticle } from "@/components/GuideArticle";
import { getFlagshipGuide } from "@/lib/flagship-guides";
import { getPhase3Guide, getPhase3GuidesByHub } from "@/lib/phase3-guides";
import { createMetadata } from "@/lib/seo";
import { getLinkableAssetGuide, linkableAssetGuides } from "@/lib/linkable-assets";

type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return [...getPhase3GuidesByHub("/emergency"), ...linkableAssetGuides].map((guide) => ({
    slug: guide.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const guide = getLinkableAssetGuide(slug) ?? getFlagshipGuide(slug) ?? getPhase3Guide(slug);

  if (!guide || guide.hubPath !== "/emergency") {
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

export default async function EmergencyGuidePage({ params }: PageProps) {
  const { slug } = await params;
  const guide = getLinkableAssetGuide(slug) ?? getFlagshipGuide(slug) ?? getPhase3Guide(slug);

  if (!guide || guide.hubPath !== "/emergency") {
    notFound();
  }

  return <GuideArticle guide={guide} />;
}
