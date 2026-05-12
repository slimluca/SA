import { MapPin } from "lucide-react";

type ProvinceGridProps = {
  provinces: readonly string[];
};

export function ProvinceGrid({ provinces }: ProvinceGridProps) {
  return (
    <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
      {provinces.map((province) => (
        <article
          key={province}
          className="flex items-center gap-3 rounded-2xl border border-oat bg-white p-4 shadow-sm"
        >
          <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-sage/12 text-moss">
            <MapPin className="h-5 w-5" aria-hidden="true" />
          </span>
          <div>
            <h3 className="font-black text-cocoa">{province}</h3>
            <p className="text-sm text-bark">Local context for climate, travel, access, and dog care planning.</p>
          </div>
        </article>
      ))}
    </div>
  );
}
