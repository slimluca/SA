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
      className="group flex flex-col rounded-xl border border-oat/80 bg-white/86 p-5 shadow-panel transition hover:border-gold/45 hover:bg-white hover:shadow-soft"
    >
      <div className="mb-4 flex h-10 w-10 flex-none items-center justify-center rounded-xl bg-honey/20 text-gold">
        <ArrowRight className="h-5 w-5 transition group-hover:translate-x-0.5" aria-hidden="true" />
      </div>
      <h3 className="text-lg font-black leading-snug text-navy">{title}</h3>
      <p className="mt-3 text-sm leading-6 text-bark">{description}</p>
    </Link>
  );
}
