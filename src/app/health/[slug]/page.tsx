import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { GuideArticle } from "@/components/GuideArticle";
import { getPhase3Guide, getPhase3GuidesByHub } from "@/lib/phase3-guides";
import { createMetadata } from "@/lib/seo";

type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return getPhase3GuidesByHub("/health").map((guide) => ({
    slug: guide.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const guide = getPhase3Guide(slug);

  if (!guide || guide.hubPath !== "/health") {
    return {};
  }

  return createMetadata({
    title: guide.seoTitle,
    description: guide.description,
    path: guide.path,
  });
}

export default async function HealthGuidePage({ params }: PageProps) {
  const { slug } = await params;
  const guide = getPhase3Guide(slug);

  if (!guide || guide.hubPath !== "/health") {
    notFound();
  }

  return <GuideArticle guide={guide} />;
}
