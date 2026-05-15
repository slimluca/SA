import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { GuideArticle } from "@/components/GuideArticle";
import { getPhase5Guide, getPhase5GuidesByHub } from "@/lib/phase5-guides";
import { getPhase9Guide, getPhase9GuidesByHub } from "@/lib/phase9-guides";
import { getPhase15Guide, getPhase15GuidesByHub } from "@/lib/phase15-guides";
import { createMetadata } from "@/lib/seo";

type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return [...getPhase5GuidesByHub("/food"), ...getPhase9GuidesByHub("/food"), ...getPhase15GuidesByHub("/food")].map((guide) => ({
    slug: guide.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const guide = getPhase5Guide(slug) ?? getPhase9Guide(slug) ?? getPhase15Guide(slug);

  if (!guide || guide.hubPath !== "/food") {
    return {};
  }

  return createMetadata({
    title: guide.seoTitle,
    description: guide.description,
    path: guide.path,
  });
}

export default async function FoodGuidePage({ params }: PageProps) {
  const { slug } = await params;
  const guide = getPhase5Guide(slug) ?? getPhase9Guide(slug) ?? getPhase15Guide(slug);

  if (!guide || guide.hubPath !== "/food") {
    notFound();
  }

  return <GuideArticle guide={guide} />;
}
