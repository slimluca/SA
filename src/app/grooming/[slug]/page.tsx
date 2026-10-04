import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { GuideArticle } from "@/components/GuideArticle";
import { resolveGuideForHub } from "@/lib/guide-resolver";
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
    "/grooming",
    getPhase20Guide(slug, "/grooming"),
    getPhase6Guide(slug, "/grooming"),
  );

  if (!guide || guide.hubPath !== "/grooming") {
    return {};
  }

  return createMetadata({
    title: guide.seoTitle,
    description: guide.description,
    path: guide.path,
  });
}

export default async function GroomingGuidePage({ params }: PageProps) {
  const { slug } = await params;
  const guide = resolveGuideForHub(
    "/grooming",
    getPhase20Guide(slug, "/grooming"),
    getPhase6Guide(slug, "/grooming"),
  );

  if (!guide || guide.hubPath !== "/grooming") {
    notFound();
  }

  return <GuideArticle guide={guide} />;
}
