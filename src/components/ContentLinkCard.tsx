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
      className="group flex min-h-52 flex-col rounded-[1.25rem] border border-oat bg-white p-5 shadow-panel outline-none transition hover:-translate-y-1 hover:border-sage/50 hover:shadow-soft focus-visible:ring-2 focus-visible:ring-moss"
    >
      <div className="mb-6 flex h-10 w-10 flex-none items-center justify-center rounded-full bg-sage/10 text-sage">
        <ArrowRight className="h-5 w-5 transition group-hover:translate-x-0.5" aria-hidden="true" />
      </div>
      <h3 className="text-lg font-black leading-snug text-navy group-hover:text-moss">{title}</h3>
      <p className="mt-3 text-sm leading-6 text-bark">{description}</p><span className="mt-auto pt-5 text-sm font-black text-moss">Explore guide</span>
    </Link>
  );
}
