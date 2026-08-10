import { costExamples } from "@/lib/cost-report";

function rand(value: number) {
  return new Intl.NumberFormat("en-ZA", {
    style: "currency",
    currency: "ZAR",
    maximumFractionDigits: 0,
  }).format(value);
}

const sizeLabels = ["small dog", "medium dog", "large dog"] as const;

const groomingRanges = sizeLabels.map((size) => {
  const values = costExamples
    .filter(
      (record) =>
        record.provider === "Pampered Paws" &&
        record.category === "Grooming" &&
        record.subcategory.includes(size),
    )
    .map((record) => record.price_zar);

  return {
    label: size.replace(" dog", ""),
    min: Math.min(...values),
    max: Math.max(...values),
  };
});

const insuranceExamples = costExamples.filter((record) => record.category === "Insurance");
const groomingScale = Math.max(...groomingRanges.map((item) => item.max));
const insuranceScale = Math.max(...insuranceExamples.map((item) => item.price_zar));

export function CostReportCharts() {
  return (
    <section className="mt-9 max-w-4xl space-y-8" aria-labelledby="cost-report-charts-heading">
      <div>
        <p className="section-kicker">Original sample charts</p>
        <h2 id="cost-report-charts-heading" className="text-2xl font-black text-cocoa">
          What the public examples show
        </h2>
        <p className="mt-3 max-w-3xl leading-7 text-bark">
          These charts use only records in the downloadable dataset. They show narrow public
          samples, not South African averages or provider rankings.
        </p>
      </div>

      <figure className="rounded-2xl border border-oat bg-white p-5 shadow-sm sm:p-6">
        <figcaption>
          <h3 className="text-xl font-black text-cocoa">Cape Town full-groom examples by size</h3>
          <p className="mt-2 text-sm leading-6 text-bark">
            Observed minimum and maximum across Pampered Paws smooth/short and silk/wool/wire/long
            coat listings. Coat condition and extras may change the quote.
          </p>
        </figcaption>
        <div className="mt-5 space-y-4" aria-hidden="true">
          {groomingRanges.map((item) => (
            <div key={item.label}>
              <div className="mb-1 flex items-center justify-between gap-4 text-sm font-bold text-cocoa">
                <span className="capitalize">{item.label}</span>
                <span>{rand(item.min)}-{rand(item.max)}</span>
              </div>
              <div className="h-4 overflow-hidden rounded-full bg-cream">
                <div
                  className="h-full rounded-full bg-sage"
                  style={{ width: `${(item.max / groomingScale) * 100}%` }}
                />
              </div>
            </div>
          ))}
        </div>
        <div className="mt-5 overflow-x-auto">
          <table className="min-w-full text-left text-sm">
            <thead className="border-b border-oat text-cocoa">
              <tr><th className="py-2 pr-4">Dog size</th><th className="py-2 pr-4">Observed minimum</th><th className="py-2">Observed maximum</th></tr>
            </thead>
            <tbody className="divide-y divide-oat text-bark">
              {groomingRanges.map((item) => (
                <tr key={`${item.label}-table`}><th className="py-2 pr-4 capitalize">{item.label}</th><td className="py-2 pr-4">{rand(item.min)}</td><td className="py-2">{rand(item.max)}</td></tr>
              ))}
            </tbody>
          </table>
        </div>
      </figure>

      <figure className="rounded-2xl border border-oat bg-white p-5 shadow-sm sm:p-6">
        <figcaption>
          <h3 className="text-xl font-black text-cocoa">Insurer-published starting premiums</h3>
          <p className="mt-2 text-sm leading-6 text-bark">
            Nine plan starting prices from two insurers, checked 10 August 2026. Plans provide
            different cover and actual premiums are personalised.
          </p>
        </figcaption>
        <div className="mt-5 grid gap-3 sm:grid-cols-2" aria-hidden="true">
          {insuranceExamples.map((item) => (
            <div key={`${item.provider}-${item.subcategory}`}>
              <div className="mb-1 flex items-center justify-between gap-3 text-xs font-bold text-cocoa">
                <span>{item.provider} {item.subcategory.replace(" starting premium", "")}</span>
                <span>{rand(item.price_zar)}</span>
              </div>
              <div className="h-3 overflow-hidden rounded-full bg-cream">
                <div className="h-full rounded-full bg-honey" style={{ width: `${(item.price_zar / insuranceScale) * 100}%` }} />
              </div>
            </div>
          ))}
        </div>
        <div className="mt-5 overflow-x-auto">
          <table className="min-w-full text-left text-sm">
            <thead className="border-b border-oat text-cocoa"><tr><th className="py-2 pr-4">Provider</th><th className="py-2 pr-4">Plan</th><th className="py-2">Published starting premium</th></tr></thead>
            <tbody className="divide-y divide-oat text-bark">
              {insuranceExamples.map((item) => (
                <tr key={`${item.provider}-${item.subcategory}-table`}><td className="py-2 pr-4">{item.provider}</td><td className="py-2 pr-4">{item.subcategory.replace(" starting premium", "")}</td><td className="py-2">{rand(item.price_zar)} per month</td></tr>
              ))}
            </tbody>
          </table>
        </div>
      </figure>
    </section>
  );
}
