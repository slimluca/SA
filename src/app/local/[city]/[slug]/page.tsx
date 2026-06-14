import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { GuideArticle } from "@/components/GuideArticle";
import { getPhase17LocalGuide, localCities, localServices } from "@/lib/phase17-local-guides";
import { getPhase28LocalGuide, phase28LocalGuidePages } from "@/lib/phase28-local-expansion-guides";
import { createMetadata } from "@/lib/seo";

type PageProps = {
  params: Promise<{
    city: string;
    slug: string;
  }>;
};

export function generateStaticParams() {
  return [
    ...localCities.flatMap((city) =>
      localServices.map((service) => ({
        city: city.slug,
        slug: `${service.slugPrefix}-${city.slug}`,
      })),
    ),
    ...phase28LocalGuidePages.map((guide) => {
      const [, , city, slug] = guide.path.split("/");
      return { city, slug };
    }),
  ];
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { city, slug } = await params;
  const guide = getPhase17LocalGuide(city, slug) ?? getPhase28LocalGuide(city, slug);

  if (!guide) {
    return {};
  }

  return createMetadata({
    title: guide.seoTitle,
    description: guide.description,
    path: guide.path,
  });
}

export default async function LocalGuidePage({ params }: PageProps) {
  const { city, slug } = await params;
  const guide = getPhase17LocalGuide(city, slug) ?? getPhase28LocalGuide(city, slug);

  if (!guide) {
    notFound();
  }

  return <GuideArticle guide={guide} />;
}
