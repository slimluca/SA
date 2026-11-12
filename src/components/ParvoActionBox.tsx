import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function ParvoActionBox() {
  return (
    <section className="my-8 rounded-2xl border border-red-200 bg-red-50 p-6">
      <p className="text-sm font-black uppercase tracking-wide text-red-800">What to do right now</p>
      <h2 className="mt-2 text-2xl font-black text-navy">Puppy or dog with possible parvo</h2>
      <ol className="mt-4 space-y-3 text-sm leading-6 text-bark">
        <li className="flex gap-3"><span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-red-700 text-xs font-black text-white">1</span><span>Phone a veterinarian immediately. Parvo can worsen rapidly, especially in puppies.</span></li>
        <li className="flex gap-3"><span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-red-700 text-xs font-black text-white">2</span><span>Isolate the dog from other dogs. Do not visit dog parks, clinics waiting rooms, or other homes until the vet advises.</span></li>
        <li className="flex gap-3"><span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-red-700 text-xs font-black text-white">3</span><span>Do not give human medicines or home treatments. Do not wait for more symptoms in a puppy.</span></li>
        <li className="flex gap-3"><span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-red-700 text-xs font-black text-white">4</span><span>Note vaccination history, recent exposure to other dogs, and when vomiting or diarrhoea started.</span></li>
        <li className="flex gap-3"><span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-red-700 text-xs font-black text-white">5</span><span>Call ahead before transporting so the clinic can prepare and advise on isolation.</span></li>
      </ol>
      <div className="mt-5 flex flex-wrap gap-3">
        <Link href="/puppy" className="inline-flex items-center gap-2 rounded-full bg-red-700 px-4 py-2 text-sm font-black text-white hover:bg-red-800">Puppy care guides <ArrowRight className="h-4 w-4" /></Link>
        <Link href="/health/when-to-take-your-dog-to-the-vet-south-africa" className="inline-flex items-center gap-2 rounded-full border border-red-300 px-4 py-2 text-sm font-black text-red-900 hover:bg-red-100">When to see a vet <ArrowRight className="h-4 w-4" /></Link>
      </div>
      <p className="mt-4 text-xs text-red-800">Parvovirus is serious and contagious. This is educational only and does not replace urgent veterinary care.</p>
    </section>
  );
}
