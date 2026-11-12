import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function SnakeBiteActionBox() {
  return (
    <section className="my-8 rounded-2xl border border-red-200 bg-red-50 p-6">
      <p className="text-sm font-black uppercase tracking-wide text-red-800">What to do right now</p>
      <h2 className="mt-2 text-2xl font-black text-navy">Suspected snake bite: act immediately</h2>
      <ol className="mt-4 space-y-3 text-sm leading-6 text-bark">
        <li className="flex gap-3"><span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-red-700 text-xs font-black text-white">1</span><span>Keep the dog as still and calm as possible. Limit walking and excitement.</span></li>
        <li className="flex gap-3"><span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-red-700 text-xs font-black text-white">2</span><span>Phone a veterinarian or emergency clinic immediately. Say it may be a snake bite and give your location.</span></li>
        <li className="flex gap-3"><span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-red-700 text-xs font-black text-white">3</span><span>Do not cut, suck, apply a tourniquet, or give human medicines or home remedies.</span></li>
        <li className="flex gap-3"><span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-red-700 text-xs font-black text-white">4</span><span>If safe, note the snake’s appearance or take a clear photo from a distance. Do not try to catch or kill it.</span></li>
        <li className="flex gap-3"><span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-red-700 text-xs font-black text-white">5</span><span>Transport as directed. Call ahead so the clinic can prepare antivenom or support if available.</span></li>
      </ol>
      <div className="mt-5 flex flex-wrap gap-3">
        <Link href="/emergency" className="inline-flex items-center gap-2 rounded-full bg-red-700 px-4 py-2 text-sm font-black text-white hover:bg-red-800">More emergency guides <ArrowRight className="h-4 w-4" /></Link>
        <Link href="/tools/vet-visit-checklist" className="inline-flex items-center gap-2 rounded-full border border-red-300 px-4 py-2 text-sm font-black text-red-900 hover:bg-red-100">Vet visit checklist <ArrowRight className="h-4 w-4" /></Link>
      </div>
      <p className="mt-4 text-xs text-red-800">Snake bites can be life-threatening. This is educational only and does not replace urgent veterinary care.</p>
    </section>
  );
}
