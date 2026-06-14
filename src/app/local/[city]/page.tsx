import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { HubPage } from "@/components/HubPage";
import { getLocalCityHub, localCities } from "@/lib/phase17-local-guides";
import { getPhase28LocalCityHub, phase28LocalCityHubs } from "@/lib/phase28-local-expansion-guides";
import { createMetadata } from "@/lib/seo";

type PageProps = {
  params: Promise<{
    city: string;
  }>;
};

export function generateStaticParams() {
  return [
    ...localCities.map((city) => ({
      city: city.slug,
    })),
    ...phase28LocalCityHubs.map((hub) => ({
      city: hub.path.replace("/local/", ""),
    })),
  ];
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { city } = await params;
  const hub = getLocalCityHub(city) ?? getPhase28LocalCityHub(city);

  if (!hub) {
    return {};
  }

  return createMetadata({
    title: hub.seoTitle,
    description: hub.description,
    path: hub.path,
  });
}

export default async function LocalCityHubPage({ params }: PageProps) {
  const { city } = await params;
  const hub = getLocalCityHub(city) ?? getPhase28LocalCityHub(city);

  if (!hub) {
    notFound();
  }

  return <HubPage hub={hub} />;
}
