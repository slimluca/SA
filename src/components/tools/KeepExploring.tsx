import Link from "next/link";

type LinkItem = {
  title: string;
  href: string;
};

export function KeepExploring({ links }: { links: LinkItem[] }) {
  return (
    <div className="mt-6 rounded-2xl border border-sage/30 bg-sage/5 p-5">
      <p className="text-sm font-black text-cocoa">Keep exploring</p>
      <div className="mt-3 flex flex-wrap gap-2">
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="inline-flex rounded-full bg-white px-4 py-2 text-sm font-bold text-moss shadow-sm hover:bg-sage/10"
          >
            {link.title}
          </Link>
        ))}
      </div>
    </div>
  );
}
