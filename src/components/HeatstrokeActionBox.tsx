import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function HeatstrokeActionBox() {
  return (
    <section className="my-8 rounded-2xl border border-amber-200 bg-amber-50 p-6">
      <p className="text-sm font-black uppercase tracking-wide text-amber-800">What to do right now</p>
      <h2 className="mt-2 text-2xl font-black text-navy">Suspected heatstroke: act quickly</h2>
      <ol className="mt-4 space-y-3 text-sm leading-6 text-bark">
        <li className="flex gap-3"><span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-amber-700 text-xs font-black text-white">1</span><span>Move the dog to shade or a cool, ventilated area immediately. Stop all exercise.</span></li>
        <li className="flex gap-3"><span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-amber-700 text-xs font-black text-white">2</span><span>Phone a veterinarian or emergency clinic while arranging transport. Describe the dog’s condition, how long it was in the heat, and any cooling already started.</span></li>
        <li className="flex gap-3"><span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-amber-700 text-xs font-black text-white">3</span><span>Begin controlled cooling: cool or tepid water on the body with airflow (fan or vehicle ventilation). Do not use ice baths or extreme cold.</span></li>
        <li className="flex gap-3"><span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-amber-700 text-xs font-black text-white">4</span><span>Offer small amounts of water only if the dog is alert and can swallow normally. Do not force water.</span></li>
        <li className="flex gap-3"><span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-amber-700 text-xs font-black text-white">5</span><span>Transport as directed. Continue safe cooling on the way. Even if the dog looks better, it still needs veterinary assessment.</span></li>
      </ol>
      <div className="mt-5 flex flex-wrap gap-3">
        <Link href="/tools/dog-walk-planner" className="inline-flex items-center gap-2 rounded-full bg-amber-700 px-4 py-2 text-sm font-black text-white hover:bg-amber-800">Plan cooler walks <ArrowRight className="h-4 w-4" /></Link>
        <Link href="/emergency" className="inline-flex items-center gap-2 rounded-full border border-amber-300 px-4 py-2 text-sm font-black text-amber-900 hover:bg-amber-100">More emergency guides <ArrowRight className="h-4 w-4" /></Link>
      </div>
      <p className="mt-4 text-xs text-amber-800">This is educational guidance only. It does not replace veterinary assessment. Flat-faced, overweight, very young, senior, or heavy-coated dogs need extra caution in South African heat.</p>
    </section>
  );
}
