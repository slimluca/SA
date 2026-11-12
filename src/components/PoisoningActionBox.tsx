import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function PoisoningActionBox() {
  return (
    <section className="my-8 rounded-2xl border border-orange-200 bg-orange-50 p-6">
      <p className="text-sm font-black uppercase tracking-wide text-orange-800">What to do right now</p>
      <h2 className="mt-2 text-2xl font-black text-navy">Suspected poisoning: act immediately</h2>
      <ol className="mt-4 space-y-3 text-sm leading-6 text-bark">
        <li className="flex gap-3"><span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-orange-700 text-xs font-black text-white">1</span><span>Remove the dog from the area. Keep other animals and children away.</span></li>
        <li className="flex gap-3"><span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-orange-700 text-xs font-black text-white">2</span><span>Phone a veterinarian or emergency clinic immediately. Have the product packaging ready if safe to collect.</span></li>
        <li className="flex gap-3"><span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-orange-700 text-xs font-black text-white">3</span><span>Do not induce vomiting or give milk, oil, salt, or charcoal unless the vet specifically instructs you.</span></li>
        <li className="flex gap-3"><span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-orange-700 text-xs font-black text-white">4</span><span>Note the time, estimated amount, dog’s weight, and any symptoms (vomiting, weakness, tremors, breathing changes).</span></li>
        <li className="flex gap-3"><span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-orange-700 text-xs font-black text-white">5</span><span>Follow the vet’s advice on transport. Bring the packaging and any photos of the product or plant.</span></li>
      </ol>
      <div className="mt-5 flex flex-wrap gap-3">
        <Link href="/health/toxic-foods-for-dogs-south-africa" className="inline-flex items-center gap-2 rounded-full bg-orange-700 px-4 py-2 text-sm font-black text-white hover:bg-orange-800">Toxic foods guide <ArrowRight className="h-4 w-4" /></Link>
        <Link href="/tools/vet-visit-checklist" className="inline-flex items-center gap-2 rounded-full border border-orange-300 px-4 py-2 text-sm font-black text-orange-900 hover:bg-orange-100">Vet visit checklist <ArrowRight className="h-4 w-4" /></Link>
      </div>
      <p className="mt-4 text-xs text-orange-800">This is educational guidance only. It does not replace veterinary assessment. Contact a vet even if the dog looks normal after a known exposure.</p>
    </section>
  );
}
