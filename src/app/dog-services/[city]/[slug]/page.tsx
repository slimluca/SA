import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { GuideArticle } from "@/components/GuideArticle";
import { dogServices, getPhase19DogServiceGuide } from "@/lib/phase19-dog-services-guides";
import { localCities } from "@/lib/phase17-local-guides";
import { createMetadata } from "@/lib/seo";
import { shouldNoindexLocalGuide } from "@/lib/local-provider-directory";

type PageProps = {
  params: Promise<{
    city: string;
    slug: string;
  }>;
};

export function generateStaticParams() {
  return localCities.flatMap((city) =>
    dogServices.map((service) => ({
      city: city.slug,
      slug: `${service.slugPrefix}-${city.slug}`,
    })),
  );
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { city, slug } = await params;
  const guide = getPhase19DogServiceGuide(city, slug);

  if (!guide) {
    return {};
  }

  const metadata = createMetadata({
    title: guide.seoTitle,
    description: guide.description,
    path: guide.path,
  });

  return shouldNoindexLocalGuide(guide.path)
    ? { ...metadata, robots: { index: false, follow: true } }
    : metadata;
}

export default async function DogServiceGuidePage({ params }: PageProps) {
  const { city, slug } = await params;
  const guide = getPhase19DogServiceGuide(city, slug);

  if (!guide) {
    notFound();
  }

  return <GuideArticle guide={guide} />;
}
