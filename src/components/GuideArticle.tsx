import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ContentLinkCard } from "@/components/ContentLinkCard";
import { CostReportCharts } from "@/components/CostReportCharts";
import { DogCostEstimator } from "@/components/DogCostEstimator";
import { EmergencyNotice } from "@/components/EmergencyNotice";
import { FAQBlock } from "@/components/FAQBlock";
import { HelpfulNextSteps } from "@/components/HelpfulNextSteps";
import { OriginalResourcePanel } from "@/components/OriginalResourcePanel";
import { SourceList } from "@/components/SourceList";
import { TableOfContents, toHeadingId } from "@/components/TableOfContents";
import { VerifiedLocalOptions } from "@/components/VerifiedLocalOptions";
import type { GuideContent } from "@/lib/content";
import { getProvidersForPath, isLocalServicePath } from "@/lib/local-provider-directory";
import { getArticlePromos } from "@/lib/promo-links";
import { JsonLd, articleSchema, datasetSchema, faqSchema } from "@/lib/schema";
import Link from "next/link";
import Image from "next/image";
import { Download, FileSpreadsheet } from "lucide-react";
import { flagshipSlugs } from "@/lib/flagship-guides";

export function GuideArticle({ guide }: { guide: GuideContent }) {
  const isFlagship = (flagshipSlugs as readonly string[]).includes(guide.slug);
  const articlePromos = getArticlePromos(guide.hubPath, guide.path);
  const localProviders = getProvidersForPath(guide.path);
  const showProviderSection = isLocalServicePath(guide.path);
  const safetyStyles = {
    "Safe in small amounts": "border-sage/35 bg-sage/10 text-moss",
    Risky: "border-honey/55 bg-honey/15 text-cocoa",
    Dangerous: "border-orange-200 bg-orange-50 text-orange-900",
    Emergency: "border-red-200 bg-red-50 text-red-900",
  } as const;
  const tableOfContents = guide.sections.map((section) => ({
    id: toHeadingId(section.heading),
    title: section.heading,
  }));
  const needsEducationalNote =
    guide.isHealthGuide ||
    guide.hubPath === "/emergency" ||
    guide.hubPath === "/insurance" ||
    guide.hubPath === "/costs" ||
    guide.hubPath === "/food";
  const primaryImage = guide.primaryImage ? (
    <figure className="mt-6 max-w-4xl overflow-hidden rounded-xl border border-oat bg-white">
      <Image
        src={guide.primaryImage.src}
        alt={guide.primaryImage.alt}
        width={guide.primaryImage.width}
        height={guide.primaryImage.height}
        sizes="(min-width: 1024px) 832px, (min-width: 640px) calc(100vw - 3rem), calc(100vw - 2rem)"
        className="h-auto w-full object-cover"
        priority
      />
    </figure>
  ) : null;

  return (
    <>
      <JsonLd
        data={articleSchema({
          title: guide.title,
          description: guide.description,
          path: guide.path,
          dateModified: guide.updated,
          image: guide.primaryImage?.src,
        })}
      />
      {guide.dataset ? (
        <JsonLd
          data={datasetSchema({
            ...guide.dataset,
            path: guide.path,
          })}
        />
      ) : null}
      {guide.faqs.length > 0 ? <JsonLd data={faqSchema(guide.faqs)} /> : null}
      <article className="section-shell">
        <Breadcrumbs
          items={[
            { name: guide.hubTitle, href: guide.hubPath },
            { name: guide.title, href: guide.path },
          ]}
        />
        <p className="section-kicker">{guide.hubTitle}</p>
        <h1 className="section-title">{guide.title}</h1>
        <p className="section-copy">{guide.intro}</p>
        <p className="mt-4 max-w-3xl text-sm leading-6 text-bark">
          Prepared by the{" "}
          <Link className="font-bold text-moss underline-offset-4 hover:underline" href="/about">
            Dog Haven Editorial Team
          </Link>{" "}
          using South African, veterinary, and official sources. Learn how we{" "}
          <Link className="font-bold text-moss underline-offset-4 hover:underline" href="/editorial-policy">
            research and correct our guides
          </Link>
          .
        </p>

        {!guide.isHealthGuide ? primaryImage : null}

        {needsEducationalNote ? (
          <div className="mt-5 rounded-xl border border-honey/45 bg-honey/12 p-5 text-sm leading-6 text-bark">
            <p className="font-black text-cocoa">Educational guide</p>
            <p className="mt-1">
              This page is for general South African dog-owner education. It does not replace a
              veterinarian, qualified behaviour professional, insurer, or other relevant
              professional. For urgent symptoms or fast-worsening problems, contact a vet
              immediately.
            </p>
          </div>
        ) : null}

        {guide.isHealthGuide ? (
          <div className="mt-6">
            <EmergencyNotice />
          </div>
        ) : null}

        {guide.isHealthGuide ? primaryImage : null}

        {guide.originalResource ? (
          <OriginalResourcePanel
            {...guide.originalResource}
            url={`https://www.doghaven.co.za${guide.path}`}
          />
        ) : null}

        {guide.downloadAsset ? (
          <section className="mt-7 max-w-4xl rounded-2xl border-2 border-sage/40 bg-sage/5 p-5 shadow-sm sm:p-6" aria-labelledby="download-resource-heading">
            <p className="text-xs font-black uppercase tracking-[0.16em] text-moss">Free printable resource</p>
            <h2 id="download-resource-heading" className="mt-2 text-2xl font-black leading-tight text-cocoa">{guide.downloadAsset.label}</h2>
            <p className="mt-3 max-w-2xl leading-7 text-bark">{guide.downloadAsset.description}</p>
            <a
              href={guide.downloadAsset.href}
              download
              className="mt-5 inline-flex min-h-12 items-center gap-2 rounded-full bg-moss px-5 py-3 text-sm font-black text-white outline-none transition hover:bg-sage focus-visible:ring-2 focus-visible:ring-moss focus-visible:ring-offset-2"
            >
              <Download className="h-4 w-4" aria-hidden="true" />
              Download {guide.downloadAsset.fileType}
            </a>
          </section>
        ) : null}

        {guide.dataAsset ? (
          <section className="mt-4 max-w-4xl rounded-2xl border border-oat bg-white p-5 shadow-sm sm:p-6" aria-labelledby="download-data-heading">
            <p className="text-xs font-black uppercase tracking-[0.16em] text-moss">Open research data</p>
            <h2 id="download-data-heading" className="mt-2 text-xl font-black leading-tight text-cocoa">{guide.dataAsset.label}</h2>
            <p className="mt-3 max-w-2xl leading-7 text-bark">{guide.dataAsset.description}</p>
            <a
              href={guide.dataAsset.href}
              download
              className="mt-5 inline-flex min-h-12 items-center gap-2 rounded-full border-2 border-moss px-5 py-3 text-sm font-black text-moss outline-none transition hover:bg-sage/10 focus-visible:ring-2 focus-visible:ring-moss focus-visible:ring-offset-2"
            >
              <FileSpreadsheet className="h-4 w-4" aria-hidden="true" />
              Download {guide.dataAsset.fileType}
            </a>
          </section>
        ) : null}

        {isFlagship ? <TableOfContents items={tableOfContents} /> : null}

        {guide.safetyRating ? (
          <section
            className={`mt-6 rounded-xl border p-5 shadow-sm ${safetyStyles[guide.safetyRating.label]}`}
            aria-label="Food safety rating"
          >
            <p className="text-xs font-black uppercase tracking-wide">Food safety rating</p>
            <h2 className="mt-2 text-2xl font-black leading-tight">{guide.safetyRating.label}</h2>
            <p className="mt-2 text-sm font-semibold leading-6">{guide.safetyRating.summary}</p>
          </section>
        ) : null}

        <section className="mt-6 rounded-xl border border-oat bg-white p-5 shadow-panel">
          <h2 className="text-2xl font-black text-cocoa">Quick takeaways</h2>
          <ul className="mt-4 space-y-3">
            {guide.quickFacts.map((fact) => (
              <li key={fact} className="flex gap-3 text-sm leading-6 text-bark">
                <span className="mt-2 h-2 w-2 flex-none rounded-full bg-honey" />
                <span>{fact}</span>
              </li>
            ))}
          </ul>
        </section>

        <VerifiedLocalOptions providers={localProviders} showNotice={showProviderSection} />

        {guide.slug === "south-africa-dog-ownership-cost-report" ? <CostReportCharts /> : null}

        {guide.slug === "dog-cost-calculator-south-africa" ? <DogCostEstimator /> : null}

        {!isFlagship ? <TableOfContents items={tableOfContents} /> : null}

        <div className="mt-8 max-w-4xl space-y-6">
            {guide.sections.map((section) => (
              <section
                key={section.heading}
                id={toHeadingId(section.heading)}
                className={
                  isFlagship
                    ? `scroll-mt-28 border-t-2 px-0 py-7 first:border-t-0 first:pt-1 ${
                        section.callout === "important"
                          ? "border-l-4 border-l-sage border-t-oat bg-sage/5 pl-5 pr-4 sm:pr-5"
                          : section.callout === "caution"
                            ? "border-l-4 border-l-honey border-t-oat bg-honey/10 pl-5 pr-4 sm:pr-5"
                            : "border-oat"
                      }`
                    : "scroll-mt-28 rounded-xl border border-oat bg-white p-5 shadow-panel"
                }
              >
                <h2 className="text-2xl font-black leading-tight text-cocoa">{section.heading}</h2>
                <div className="mt-4 space-y-4">
                  {section.body.map((paragraph) => (
                    <p key={paragraph} className="leading-7 text-bark">
                      {paragraph}
                    </p>
                  ))}
                </div>

                {section.bullets ? (
                  <ul className="mt-5 space-y-3">
                    {section.bullets.map((item) => (
                      <li key={item} className="flex gap-3 text-sm leading-6 text-bark">
                        <span className="mt-2 h-2 w-2 flex-none rounded-full bg-sage" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                ) : null}

                {section.checklist ? (
                  <ul className={isFlagship ? "mt-5 grid gap-3 rounded-xl bg-cream p-4" : "mt-5 grid gap-3"}>
                    {section.checklist.map((item) => (
                      <li key={item} className={isFlagship ? "flex gap-3 text-sm font-semibold leading-6 text-cocoa" : "rounded-xl bg-cream px-4 py-3 text-sm font-semibold leading-6 text-cocoa"}>
                        {isFlagship ? <span className="mt-1.5 h-4 w-4 flex-none rounded border-2 border-sage bg-white" aria-hidden="true" /> : null}
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                ) : null}

                {section.table ? (
                  <div className="mt-5 overflow-hidden rounded-2xl border border-oat">
                    <div className="overflow-x-auto">
                      <table className="min-w-full divide-y divide-oat text-left text-sm">
                        <thead className="bg-cream text-cocoa">
                          <tr>
                            {section.table.headers.map((header) => (
                              <th key={header} scope="col" className="px-4 py-3 font-black">
                                {header}
                              </th>
                            ))}
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-oat bg-white text-bark">
                          {section.table.rows.map((row) => (
                            <tr key={row.join("-")}>
                              {row.map((cell) => (
                                <td key={cell} className="px-4 py-3 align-top leading-6">
                                  {cell}
                                </td>
                              ))}
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                ) : null}

                {section.links?.length ? (
                  <div className="mt-6 border-l-2 border-sage pl-4">
                    <h3 className="text-base font-black text-cocoa">Related reading</h3>
                    <ul className="mt-2 space-y-2">
                      {section.links.map((link) => (
                        <li key={link.href} className="text-sm leading-6 text-bark">
                          <Link className="font-bold text-moss underline-offset-4 hover:underline" href={link.href}>
                            {link.title}
                          </Link>{" "}
                          <span>{link.description}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ) : null}
              </section>
            ))}

            <section>
              <h2 className="text-2xl font-black text-cocoa">Frequently asked questions</h2>
              <div className="mt-5">
                <FAQBlock items={guide.faqs} />
              </div>
            </section>
        </div>

        <aside aria-label="Further guidance and sources" className="mt-10 grid items-start gap-6 md:grid-cols-2 xl:grid-cols-3">
            <HelpfulNextSteps links={articlePromos} />
            <section className="rounded-2xl border border-oat bg-white p-5 shadow-sm">
              <h2 className="text-xl font-black text-cocoa">Related guides</h2>
              <div className="mt-4 space-y-3">
                {guide.related.map((card) => (
                  <ContentLinkCard key={`${guide.slug}-${card.title}`} {...card} />
                ))}
              </div>
            </section>
            <SourceList sources={guide.sources} />
        </aside>
      </article>
    </>
  );
}
