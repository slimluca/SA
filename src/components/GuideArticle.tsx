import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ContentLinkCard } from "@/components/ContentLinkCard";
import { EmergencyNotice } from "@/components/EmergencyNotice";
import { FAQBlock } from "@/components/FAQBlock";
import { SourceList } from "@/components/SourceList";
import { TableOfContents, toHeadingId } from "@/components/TableOfContents";
import type { GuideContent } from "@/lib/content";
import { JsonLd, articleSchema, faqSchema } from "@/lib/schema";

export function GuideArticle({ guide }: { guide: GuideContent }) {
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

  return (
    <>
      <JsonLd
        data={articleSchema({
          title: guide.title,
          description: guide.description,
          path: guide.path,
          dateModified: guide.updated,
        })}
      />
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
        <p className="mt-4 text-sm font-semibold text-bark">Last reviewed: {guide.updated}</p>

        {needsEducationalNote ? (
          <div className="mt-6 rounded-2xl border border-honey/45 bg-honey/12 p-5 text-sm leading-6 text-bark">
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
          <div className="mt-8">
            <EmergencyNotice />
          </div>
        ) : null}

        {guide.safetyRating ? (
          <section
            className={`mt-8 rounded-2xl border p-5 shadow-sm ${safetyStyles[guide.safetyRating.label]}`}
            aria-label="Food safety rating"
          >
            <p className="text-xs font-black uppercase tracking-wide">Food safety rating</p>
            <h2 className="mt-2 text-2xl font-black leading-tight">{guide.safetyRating.label}</h2>
            <p className="mt-2 text-sm font-semibold leading-6">{guide.safetyRating.summary}</p>
          </section>
        ) : null}

        <section className="mt-8 rounded-2xl border border-oat bg-white p-6 shadow-sm">
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

        <TableOfContents items={tableOfContents} />

        <div className="mt-10 grid gap-8 lg:grid-cols-[minmax(0,1fr)_320px]">
          <div className="space-y-8">
            {guide.sections.map((section) => (
              <section
                key={section.heading}
                id={toHeadingId(section.heading)}
                className="scroll-mt-28 rounded-2xl border border-oat bg-white p-6 shadow-sm"
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
                  <ul className="mt-5 grid gap-3">
                    {section.checklist.map((item) => (
                      <li key={item} className="rounded-xl bg-cream px-4 py-3 text-sm font-semibold leading-6 text-cocoa">
                        {item}
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
              </section>
            ))}

            <section>
              <h2 className="text-2xl font-black text-cocoa">Frequently asked questions</h2>
              <div className="mt-5">
                <FAQBlock items={guide.faqs} />
              </div>
            </section>
          </div>

          <aside className="space-y-5 lg:sticky lg:top-24 lg:self-start">
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
        </div>
      </article>
    </>
  );
}
