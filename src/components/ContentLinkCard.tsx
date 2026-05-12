import Link from "next/link";
import { ArrowRight } from "lucide-react";

type ContentLinkCardProps = {
  title: string;
  description: string;
  href: string;
};

export function ContentLinkCard({ title, description, href }: ContentLinkCardProps) {
  return (
    <Link
      href={href}
      className="group block rounded-2xl border border-oat bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-soft"
    >
      <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-honey/20 text-cocoa">
        <ArrowRight className="h-5 w-5 transition group-hover:translate-x-0.5" aria-hidden="true" />
      </div>
      <h3 className="text-lg font-black leading-snug text-cocoa">{title}</h3>
      <p className="mt-2 text-sm leading-6 text-bark">{description}</p>
    </Link>
  );
}
