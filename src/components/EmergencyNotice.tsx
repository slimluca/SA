import { AlertTriangle } from "lucide-react";

export function EmergencyNotice() {
  return (
    <aside className="rounded-2xl border border-honey/60 bg-honey/15 p-5 text-cocoa">
      <div className="flex gap-3">
        <AlertTriangle className="mt-1 h-6 w-6 flex-none text-honey" aria-hidden="true" />
        <div>
          <h2 className="text-lg font-black">Emergency reminder</h2>
          <p className="mt-2 text-sm leading-6 text-bark">
            If your dog is struggling to breathe, collapsing, bleeding heavily, having seizures,
            showing severe pain, or may have been poisoned, contact a veterinarian or emergency
            animal clinic immediately. Online guidance should never delay urgent care.
          </p>
        </div>
      </div>
    </aside>
  );
}
