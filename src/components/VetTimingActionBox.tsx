import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function VetTimingActionBox() {
  return (
    <section className="my-8 rounded-2xl border border-emerald-200 bg-emerald-50 p-6">
      <p className="text-sm font-black uppercase tracking-wide text-emerald-800">Quick decision guide</p>
      <h2 className="mt-2 text-2xl font-black text-navy">When to call a vet in South Africa</h2>
      <ul className="mt-4 space-y-2 text-sm leading-6 text-bark">
        <li className="flex gap-2"><span className="font-black text-emerald-700">Urgent:</span> Breathing difficulty, collapse, seizures, poisoning, heatstroke, bloat, severe bleeding, or a puppy that is weak or not eating.</li>
        <li className="flex gap-2"><span className="font-black text-emerald-700">Same day:</span> Repeated vomiting or diarrhoea, blood in stool or vomit, limping, coughing, ear pain, or appetite loss lasting more than a day.</li>
        <li className="flex gap-2"><span className="font-black text-emerald-700">Plan ahead:</span> Save your nearest emergency clinic number and know how long transport takes.</li>
      </ul>
      <div className="mt-5 flex flex-wrap gap-3">
        <Link href="/emergency" className="inline-flex items-center gap-2 rounded-full bg-emerald-700 px-4 py-2 text-sm font-black text-white hover:bg-emerald-800">Emergency guides <ArrowRight className="h-4 w-4" /></Link>
        <Link href="/tools/vet-visit-checklist" className="inline-flex items-center gap-2 rounded-full border border-emerald-300 px-4 py-2 text-sm font-black text-emerald-900 hover:bg-emerald-100">Vet visit checklist <ArrowRight className="h-4 w-4" /></Link>
      </div>
      <p className="mt-4 text-xs text-emerald-800">This is educational guidance. Contact a veterinarian for any dog that is weak, in pain, or deteriorating.</p>
    </section>
  );
}
