import Link from "next/link";

type GuideCardProps = {
  title: string;
  description: string;
  label: string;
  href?: string;
};

export function GuideCard({ title, description, label, href }: GuideCardProps) {
  const content = (
    <article className="flex h-full min-h-[180px] flex-col rounded-xl border border-oat/80 bg-white/88 p-5 shadow-panel">
      <p className="mb-4 inline-flex w-fit rounded-full bg-sky px-3 py-1 text-xs font-black uppercase tracking-wide text-navy">
        {label}
      </p>
      <h3 className="text-xl font-black leading-snug text-navy">{title}</h3>
      <p className="mt-3 text-sm leading-6 text-bark">{description}</p>
    </article>
  );

  if (!href) {
    return content;
  }

  return (
    <Link href={href} className="block h-full transition hover:shadow-soft">
      {content}
    </Link>
  );
}
