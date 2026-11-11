import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { GuideArticle } from "@/components/GuideArticle";
import { costServices, getPhase18LocalCostGuide } from "@/lib/phase18-local-cost-guides";
import { localCities } from "@/lib/phase17-local-guides";
import { createMetadata } from "@/lib/seo";

type PageProps = {
  params: Promise<{
    city: string;
    slug: string;
  }>;
};

export function generateStaticParams() {
  return localCities.flatMap((city) =>
    costServices.map((service) => ({
      city: city.slug,
      slug: `${service.slugPrefix}-${city.slug}`,
    })),
  );
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { city, slug } = await params;
  const guide = getPhase18LocalCostGuide(city, slug);

  if (!guide) {
    return {};
  }

  // Force noindex on these templated local cost pages.
  return createMetadata({
    title: guide.seoTitle,
    description: guide.description,
    path: guide.path,
    noindex: true,
  });
}

export default async function LocalCostGuidePage({ params }: PageProps) {
  const { city, slug } = await params;
  const guide = getPhase18LocalCostGuide(city, slug);

  if (!guide) {
    notFound();
  }

  return <GuideArticle guide={guide} />;
}
