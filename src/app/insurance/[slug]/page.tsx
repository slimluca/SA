import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { GuideArticle } from "@/components/GuideArticle";
import { getPhase5Guide, getPhase5GuidesByHub } from "@/lib/phase5-guides";
import { getPhase14Guide, getPhase14GuidesByHub } from "@/lib/phase14-guides";
import { createMetadata } from "@/lib/seo";

type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return [...getPhase5GuidesByHub("/insurance"), ...getPhase14GuidesByHub("/insurance")].map((guide) => ({
    slug: guide.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const guide = getPhase5Guide(slug) ?? getPhase14Guide(slug);

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
  const guide = getPhase5Guide(slug) ?? getPhase14Guide(slug);

  if (!guide || guide.hubPath !== "/insurance") {
    notFound();
  }

  return <GuideArticle guide={guide} />;
}
