import type { Metadata } from "next";
import { absoluteUrl, siteConfig } from "@/lib/site";

type SeoInput = {
  title: string;
  description: string;
  path?: string;
  image?: string;
};

export function createMetadata({
  title,
  description,
  path = "/",
  image = "/opengraph-image",
}: SeoInput): Metadata {
  const canonical = absoluteUrl(path);
  const imageUrl = absoluteUrl(image);

  return {
    metadataBase: new URL(siteConfig.domain),
    title,
    description,
    alternates: {
      canonical,
    },
    openGraph: {
      title,
      description,
      url: canonical,
      siteName: siteConfig.name,
      locale: siteConfig.locale,
      type: "website",
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: `${siteConfig.name} practical dog care guide`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [imageUrl],
    },
  };
}
