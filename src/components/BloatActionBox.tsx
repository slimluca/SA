import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function BloatActionBox() {
  return (
    <section className="my-8 rounded-2xl border border-purple-200 bg-purple-50 p-6">
      <p className="text-sm font-black uppercase tracking-wide text-purple-800">What to do right now</p>
      <h2 className="mt-2 text-2xl font-black text-navy">Suspected bloat: emergency steps</h2>
      <ol className="mt-4 space-y-3 text-sm leading-6 text-bark">
        <li className="flex gap-3"><span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-purple-700 text-xs font-black text-white">1</span><span>Phone an emergency veterinary clinic immediately. Bloat can become life-threatening within minutes.</span></li>
        <li className="flex gap-3"><span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-purple-700 text-xs font-black text-white">2</span><span>Do not try to walk the dog, give water, or attempt home treatment while waiting.</span></li>
        <li className="flex gap-3"><span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-purple-700 text-xs font-black text-white">3</span><span>Note when signs started: distended abdomen, unproductive retching, restlessness, or collapse.</span></li>
        <li className="flex gap-3"><span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-purple-700 text-xs font-black text-white">4</span><span>Transport as directed. Call ahead so the clinic can prepare.</span></li>
        <li className="flex gap-3"><span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-purple-700 text-xs font-black text-white">5</span><span>Large, deep-chested dogs and dogs that have eaten a large meal then exercised are higher risk.</span></li>
      </ol>
      <div className="mt-5 flex flex-wrap gap-3">
        <Link href="/emergency" className="inline-flex items-center gap-2 rounded-full bg-purple-700 px-4 py-2 text-sm font-black text-white hover:bg-purple-800">Emergency hub <ArrowRight className="h-4 w-4" /></Link>
        <Link href="/costs/how-to-budget-for-emergency-vet-bills-south-africa" className="inline-flex items-center gap-2 rounded-full border border-purple-300 px-4 py-2 text-sm font-black text-purple-900 hover:bg-purple-100">Emergency cost planning <ArrowRight className="h-4 w-4" /></Link>
      </div>
      <p className="mt-4 text-xs text-purple-800">Bloat is a veterinary emergency. This is educational guidance only and does not replace immediate professional care.</p>
    </section>
  );
}
