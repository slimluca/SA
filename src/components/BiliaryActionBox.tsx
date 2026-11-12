import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function BiliaryActionBox() {
  return (
    <section className="my-8 rounded-2xl border border-amber-200 bg-amber-50 p-6">
      <p className="text-sm font-black uppercase tracking-wide text-amber-800">What to do right now</p>
      <h2 className="mt-2 text-2xl font-black text-navy">Dog unwell after possible tick exposure</h2>
      <ol className="mt-4 space-y-3 text-sm leading-6 text-bark">
        <li className="flex gap-3"><span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-amber-700 text-xs font-black text-white">1</span><span>Phone a veterinarian promptly. Describe weakness, appetite, gum colour, urine, and any ticks found.</span></li>
        <li className="flex gap-3"><span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-amber-700 text-xs font-black text-white">2</span><span>Do not wait for dark urine or more symptoms. Pale gums, collapse, or rapid worsening need urgent care.</span></li>
        <li className="flex gap-3"><span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-amber-700 text-xs font-black text-white">3</span><span>Do not give human medicines, leftover treatment, or a previous dog’s medication.</span></li>
        <li className="flex gap-3"><span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-amber-700 text-xs font-black text-white">4</span><span>Note when signs started, tick exposure locations, and the last tick-prevention product used.</span></li>
        <li className="flex gap-3"><span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-amber-700 text-xs font-black text-white">5</span><span>Transport as advised. Bring records and photos of any ticks or abnormal urine if the clinic requests them.</span></li>
      </ol>
      <div className="mt-5 flex flex-wrap gap-3">
        <Link href="/health/ticks-and-fleas-dogs-south-africa" className="inline-flex items-center gap-2 rounded-full bg-amber-700 px-4 py-2 text-sm font-black text-white hover:bg-amber-800">Tick checks & prevention <ArrowRight className="h-4 w-4" /></Link>
        <Link href="/tools/vet-visit-checklist" className="inline-flex items-center gap-2 rounded-full border border-amber-300 px-4 py-2 text-sm font-black text-amber-900 hover:bg-amber-100">Vet visit checklist <ArrowRight className="h-4 w-4" /></Link>
      </div>
      <p className="mt-4 text-xs text-amber-800">Biliary (canine babesiosis) needs veterinary assessment. This is educational only and does not replace examination or testing.</p>
    </section>
  );
}
