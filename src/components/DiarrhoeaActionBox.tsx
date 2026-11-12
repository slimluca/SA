import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function DiarrhoeaActionBox() {
  return (
    <section className="my-8 rounded-2xl border border-blue-200 bg-blue-50 p-6">
      <p className="text-sm font-black uppercase tracking-wide text-blue-800">What to do right now</p>
      <h2 className="mt-2 text-2xl font-black text-navy">Dog has diarrhoea: when to act</h2>
      <ol className="mt-4 space-y-3 text-sm leading-6 text-bark">
        <li className="flex gap-3"><span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-blue-700 text-xs font-black text-white">1</span><span>Note frequency, colour, blood, mucus, and whether the dog is still eating and drinking.</span></li>
        <li className="flex gap-3"><span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-blue-700 text-xs font-black text-white">2</span><span>Phone a vet the same day for puppies, seniors, blood, repeated vomiting, weakness, or if diarrhoea lasts more than 24 hours.</span></li>
        <li className="flex gap-3"><span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-blue-700 text-xs font-black text-white">3</span><span>Offer fresh water. Do not withhold water from a puppy or a dog that may be dehydrated.</span></li>
        <li className="flex gap-3"><span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-blue-700 text-xs font-black text-white">4</span><span>Do not give human medicines or leftover antibiotics. Do not force food into a vomiting or weak dog.</span></li>
        <li className="flex gap-3"><span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-blue-700 text-xs font-black text-white">5</span><span>Record recent food changes, scavenging, ticks, or possible toxin exposure for the vet.</span></li>
      </ol>
      <div className="mt-5 flex flex-wrap gap-3">
        <Link href="/health/when-to-take-your-dog-to-the-vet-south-africa" className="inline-flex items-center gap-2 rounded-full bg-blue-700 px-4 py-2 text-sm font-black text-white hover:bg-blue-800">When to see a vet <ArrowRight className="h-4 w-4" /></Link>
        <Link href="/puppy" className="inline-flex items-center gap-2 rounded-full border border-blue-300 px-4 py-2 text-sm font-black text-blue-900 hover:bg-blue-100">Puppy care guides <ArrowRight className="h-4 w-4" /></Link>
      </div>
      <p className="mt-4 text-xs text-blue-800">Bloody diarrhoea, puppy diarrhoea, or a dog that is weak or not drinking needs same-day veterinary advice. This is educational only.</p>
    </section>
  );
}
