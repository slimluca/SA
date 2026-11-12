import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function ToxicFoodActionBox() {
  return (
    <section className="my-8 rounded-2xl border border-red-200 bg-red-50 p-6">
      <p className="text-sm font-black uppercase tracking-wide text-red-800">What to do right now</p>
      <h2 className="mt-2 text-2xl font-black text-navy">Dog ate something dangerous</h2>
      <ol className="mt-4 space-y-3 text-sm leading-6 text-bark">
        <li className="flex gap-3"><span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-red-700 text-xs font-black text-white">1</span><span>Remove any remaining food or packaging. Do not give more.</span></li>
        <li className="flex gap-3"><span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-red-700 text-xs font-black text-white">2</span><span>Phone a veterinarian or emergency clinic immediately. Have the product, ingredients, estimated amount, and time ready.</span></li>
        <li className="flex gap-3"><span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-red-700 text-xs font-black text-white">3</span><span>Do not induce vomiting or give salt, oil, milk, or charcoal unless the vet specifically instructs you.</span></li>
        <li className="flex gap-3"><span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-red-700 text-xs font-black text-white">4</span><span>Note the dog’s weight, age, and any symptoms (vomiting, weakness, tremors, breathing changes).</span></li>
        <li className="flex gap-3"><span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-red-700 text-xs font-black text-white">5</span><span>Follow the vet’s advice on transport. Bring the packaging if safe to do so.</span></li>
      </ol>
      <div className="mt-5 flex flex-wrap gap-3">
        <Link href="/tools/can-my-dog-eat-this" className="inline-flex items-center gap-2 rounded-full bg-red-700 px-4 py-2 text-sm font-black text-white hover:bg-red-800">Check a food <ArrowRight className="h-4 w-4" /></Link>
        <Link href="/emergency/dog-poisoning-south-africa" className="inline-flex items-center gap-2 rounded-full border border-red-300 px-4 py-2 text-sm font-black text-red-900 hover:bg-red-100">Poisoning guide <ArrowRight className="h-4 w-4" /></Link>
      </div>
      <p className="mt-4 text-xs text-red-800">Chocolate, xylitol, grapes, raisins, onions, and garlic are common risks. This is educational only and does not replace veterinary advice. Contact a vet even if the dog looks normal.</p>
    </section>
  );
}
