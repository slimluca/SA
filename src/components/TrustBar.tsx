import { CheckCircle2 } from "lucide-react";

type TrustBarProps = {
  items: readonly string[];
};

export function TrustBar({ items }: TrustBarProps) {
  return (
    <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
      {items.map((item) => (
        <div key={item} className="flex items-center gap-2 rounded-2xl bg-white p-4 text-sm font-bold text-cocoa shadow-sm">
          <CheckCircle2 className="h-5 w-5 flex-none text-sage" aria-hidden="true" />
          <span>{item}</span>
        </div>
      ))}
    </div>
  );
}
