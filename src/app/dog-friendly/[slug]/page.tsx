import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { GuideArticle } from "@/components/GuideArticle";
import { getPhase6Guide } from "@/lib/phase6-guides";
import { createMetadata } from "@/lib/seo";

type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const guide = getPhase6Guide(slug);

  if (!guide || guide.hubPath !== "/dog-friendly") {
    return {};
  }

  return createMetadata({
    title: guide.seoTitle,
    description: guide.description,
    path: guide.path,
  });
}

export default async function DogFriendlyGuidePage({ params }: PageProps) {
  const { slug } = await params;
  const guide = getPhase6Guide(slug);

  if (!guide || guide.hubPath !== "/dog-friendly") {
    notFound();
  }

  return <GuideArticle guide={guide} />;
}
