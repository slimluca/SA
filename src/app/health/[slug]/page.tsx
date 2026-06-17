import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { GuideArticle } from "@/components/GuideArticle";
import { getPhase3Guide, getPhase3GuidesByHub } from "@/lib/phase3-guides";
import { getPhase10Guide, getPhase10GuidesByHub } from "@/lib/phase10-guides";
import { getPhase20Guide, getPhase20GuidesByHub } from "@/lib/phase20-recovery-guides";
import { getPhase21Guide, getPhase21GuidesByHub } from "@/lib/phase21-prevention-guides";
import { getPhase22Guide, getPhase22GuidesByHub } from "@/lib/phase22-sterilisation-guides";
import { getPhase23Guide, getPhase23GuidesByHub } from "@/lib/phase23-chronic-health-guides";
import { getPhase29HealthSymptomGuide, getPhase29HealthSymptomGuidesByHub } from "@/lib/phase29-health-symptom-guides";
import { createMetadata } from "@/lib/seo";

type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return [
    ...getPhase3GuidesByHub("/health"),
    ...getPhase10GuidesByHub("/health"),
    ...getPhase20GuidesByHub("/health"),
    ...getPhase21GuidesByHub("/health"),
    ...getPhase22GuidesByHub("/health"),
    ...getPhase23GuidesByHub("/health"),
    ...getPhase29HealthSymptomGuidesByHub("/health"),
  ]
    .map((guide) => guide.slug)
    .filter((slug, index, slugs) => slugs.indexOf(slug) === index)
    .map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const guide =
    getPhase23Guide(slug) ??
    getPhase29HealthSymptomGuide(slug) ??
    getPhase22Guide(slug) ??
    getPhase21Guide(slug) ??
    getPhase20Guide(slug) ??
    getPhase3Guide(slug) ??
    getPhase10Guide(slug);

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
  const guide =
    getPhase23Guide(slug) ??
    getPhase29HealthSymptomGuide(slug) ??
    getPhase22Guide(slug) ??
    getPhase21Guide(slug) ??
    getPhase20Guide(slug) ??
    getPhase3Guide(slug) ??
    getPhase10Guide(slug);

  if (!guide || guide.hubPath !== "/health") {
    notFound();
  }

  return <GuideArticle guide={guide} />;
}
