import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";
import { JsonLd, breadcrumbSchema } from "@/lib/schema";

type Crumb = {
  name: string;
  href: string;
};

export function Breadcrumbs({ items }: { items: Crumb[] }) {
  const allItems = [{ name: "Home", href: "/" }, ...items];

  return (
    <>
      <JsonLd data={breadcrumbSchema(allItems)} />
      <nav aria-label="Breadcrumb" className="mb-6 flex flex-wrap items-center gap-2 text-sm font-semibold text-bark">
        {allItems.map((item, index) => {
          const isLast = index === allItems.length - 1;
          return (
            <span key={item.href} className="flex items-center gap-2">
              {index > 0 && <ChevronRight className="h-4 w-4 text-sage" aria-hidden="true" />}
              {isLast ? (
                <span className="text-cocoa">{item.name}</span>
              ) : (
                <Link href={item.href} className="inline-flex items-center gap-1 hover:text-moss">
                  {index === 0 && <Home className="h-4 w-4" aria-hidden="true" />}
                  {item.name}
                </Link>
              )}
            </span>
          );
        })}
      </nav>
    </>
  );
}
