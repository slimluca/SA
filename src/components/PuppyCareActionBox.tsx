import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function PuppyCareActionBox() {
  return (
    <section className="my-8 rounded-2xl border border-emerald-200 bg-emerald-50 p-6">
      <p className="text-sm font-black uppercase tracking-wide text-emerald-800">First week checklist</p>
      <h2 className="mt-2 text-2xl font-black text-navy">New puppy: what to do in the first week</h2>
      <ol className="mt-4 space-y-3 text-sm leading-6 text-bark">
        <li className="flex gap-3"><span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-emerald-700 text-xs font-black text-white">1</span><span>Book a vet check within a few days. Bring any records of vaccines, deworming, or health checks.</span></li>
        <li className="flex gap-3"><span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-emerald-700 text-xs font-black text-white">2</span><span>Puppy-proof the home: secure bins, cords, toxic foods, plants, pools, and balconies.</span></li>
        <li className="flex gap-3"><span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-emerald-700 text-xs font-black text-white">3</span><span>Set up a quiet sleep area, plan frequent toilet trips, and start a simple routine.</span></li>
        <li className="flex gap-3"><span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-emerald-700 text-xs font-black text-white">4</span><span>Use the free puppy checklist and feeding calculator to plan the first weeks.</span></li>
        <li className="flex gap-3"><span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-emerald-700 text-xs font-black text-white">5</span><span>Watch for urgent signs: vomiting, diarrhoea, weakness, refusal to eat, or breathing changes. Contact a vet promptly.</span></li>
      </ol>
      <div className="mt-5 flex flex-wrap gap-3">
        <Link href="/tools/puppy-checklist" className="inline-flex items-center gap-2 rounded-full bg-emerald-700 px-4 py-2 text-sm font-black text-white hover:bg-emerald-800">Puppy checklist <ArrowRight className="h-4 w-4" /></Link>
        <Link href="/tools/dog-feeding-calculator" className="inline-flex items-center gap-2 rounded-full border border-emerald-300 px-4 py-2 text-sm font-black text-emerald-900 hover:bg-emerald-100">Feeding calculator <ArrowRight className="h-4 w-4" /></Link>
      </div>
      <p className="mt-4 text-xs text-emerald-800">Puppies can become unwell quickly. This is educational planning guidance and does not replace veterinary care.</p>
    </section>
  );
}
