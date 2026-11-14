import Link from "next/link";
import { Calculator, FileText } from "lucide-react";

export function CostPlanningBox() {
  return (
    <section className="my-8 rounded-2xl border border-emerald-200 bg-emerald-50 p-6">
      <p className="text-sm font-black uppercase tracking-wide text-emerald-800">Plan your budget</p>
      <h2 className="mt-2 text-2xl font-black text-navy">What does a dog actually cost in South Africa?</h2>
      <p className="mt-3 text-sm leading-6 text-bark">Use the free calculator for a personalised monthly estimate, then compare it with 46 published price examples in the cost report. Costs vary with your location, dog’s size and daily needs, so treat the figures as a starting point.</p>
      <div className="mt-5 flex flex-wrap gap-3">
        <Link href="/tools/dog-cost-calculator" className="inline-flex items-center gap-2 rounded-full bg-emerald-700 px-4 py-2 text-sm font-black text-white hover:bg-emerald-800">Open cost calculator <Calculator className="h-4 w-4" /></Link>
        <Link href="/costs/south-africa-dog-ownership-cost-report" className="inline-flex items-center gap-2 rounded-full border border-emerald-300 px-4 py-2 text-sm font-black text-emerald-900 hover:bg-emerald-100">View cost report <FileText className="h-4 w-4" /></Link>
      </div>
      <ul className="mt-4 space-y-1 text-sm text-bark">
        <li>• Food, vet care, parasites, and grooming are the main monthly costs</li>
        <li>• Emergency veterinary care can be costly, so consider insurance or an emergency savings fund</li>
        <li>• Puppies and large dogs usually cost more in the first year</li>
      </ul>
    </section>
  );
}
