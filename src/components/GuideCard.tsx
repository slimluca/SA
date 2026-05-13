import Link from "next/link";

type GuideCardProps = {
  title: string;
  description: string;
  label: string;
  href?: string;
};

export function GuideCard({ title, description, label, href }: GuideCardProps) {
  const content = (
    <article className="flex h-full min-h-[230px] flex-col rounded-2xl border border-oat bg-white p-5 shadow-sm">
      <p className="mb-4 inline-flex w-fit rounded-full bg-sky px-3 py-1 text-xs font-black uppercase tracking-wide text-cocoa">
        {label}
      </p>
      <h3 className="text-xl font-black leading-snug text-cocoa">{title}</h3>
      <p className="mt-3 text-sm leading-6 text-bark">{description}</p>
    </article>
  );

  if (!href) {
    return content;
  }

  return (
    <Link href={href} className="block h-full transition hover:-translate-y-1 hover:shadow-soft">
      {content}
    </Link>
  );
}
