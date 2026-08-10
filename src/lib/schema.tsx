import { absoluteUrl, siteConfig } from "@/lib/site";

type Question = {
  question: string;
  answer: string;
};

type BreadcrumbItem = {
  name: string;
  href: string;
};

type ArticleInput = {
  title: string;
  description: string;
  path: string;
  dateModified: string;
  image?: string;
};

export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteConfig.name,
    url: siteConfig.domain,
    description: siteConfig.description,
    inLanguage: "en-ZA",
  };
}

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteConfig.name,
    url: siteConfig.domain,
    email: siteConfig.email,
    description: siteConfig.description,
  };
}

export function breadcrumbSchema(items: BreadcrumbItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.href),
    })),
  };
}

export function faqSchema(questions: readonly Question[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: questions.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}

export function collectionPageSchema({
  title,
  description,
  path,
}: {
  title: string;
  description: string;
  path: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: title,
    description,
    url: absoluteUrl(path),
    inLanguage: "en-ZA",
    isPartOf: {
      "@type": "WebSite",
      name: siteConfig.name,
      url: siteConfig.domain,
    },
  };
}

export function articleSchema({ title, description, path, dateModified, image }: ArticleInput) {
  const canonicalUrl = absoluteUrl(path);

  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description,
    url: canonicalUrl,
    dateModified,
    image: image ? absoluteUrl(image) : undefined,
    inLanguage: "en-ZA",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": canonicalUrl,
    },
    author: {
      "@type": "Organization",
      name: "Dog Haven Editorial Team",
      url: absoluteUrl("/about"),
    },
    publisher: {
      "@type": "Organization",
      "@id": absoluteUrl("/#organization"),
      name: siteConfig.name,
      url: siteConfig.domain,
      logo: {
        "@type": "ImageObject",
        url: absoluteUrl("/brand/dog-haven-south-africa-icon.png"),
      },
    },
    isPartOf: {
      "@type": "WebSite",
      name: siteConfig.name,
      url: siteConfig.domain,
    },
  };
}

export function datasetSchema({
  name,
  description,
  path,
  distributionPath,
  recordCount,
  dateChecked,
}: {
  name: string;
  description: string;
  path: string;
  distributionPath: string;
  recordCount: number;
  dateChecked: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Dataset",
    name,
    description,
    url: absoluteUrl(path),
    inLanguage: "en-ZA",
    dateModified: dateChecked,
    temporalCoverage: dateChecked,
    spatialCoverage: {
      "@type": "Country",
      name: "South Africa",
    },
    size: `${recordCount} records`,
    creator: {
      "@type": "Organization",
      name: siteConfig.name,
      url: siteConfig.domain,
    },
    publisher: {
      "@type": "Organization",
      name: siteConfig.name,
      url: siteConfig.domain,
    },
    distribution: {
      "@type": "DataDownload",
      contentUrl: absoluteUrl(distributionPath),
      encodingFormat: "text/csv",
    },
  };
}

export function JsonLd({ data }: { data: object }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data).replace(/</g, "\\u003c"),
      }}
    />
  );
}
