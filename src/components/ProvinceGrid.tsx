import { MapPin } from "lucide-react";
import Link from "next/link";

type ProvinceGridProps = {
  provinces: readonly (string | { name: string; href: string })[];
};

export function ProvinceGrid({ provinces }: ProvinceGridProps) {
  return (
    <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
      {provinces.map((province) => {
        const item = typeof province === "string" ? { name: province, href: "" } : province;
        const content = (
          <>
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-sage/12 text-moss">
              <MapPin className="h-5 w-5" aria-hidden="true" />
            </span>
            <div>
              <h3 className="font-black text-cocoa">{item.name}</h3>
              <p className="text-sm text-bark">Local context for climate, travel, access, and dog care planning.</p>
            </div>
          </>
        );

        return item.href ? (
          <Link
            key={item.name}
            href={item.href}
            className="flex h-full items-center gap-3 rounded-2xl border border-oat bg-white p-4 shadow-sm transition hover:-translate-y-0.5 hover:border-sage/45 hover:shadow-md"
          >
            {content}
          </Link>
        ) : (
          <article key={item.name} className="flex items-center gap-3 rounded-2xl border border-oat bg-white p-4 shadow-sm">
            {content}
          </article>
        );
      })}
    </div>
  );
}
