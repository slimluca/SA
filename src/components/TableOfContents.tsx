type TableOfContentsItem = {
  id: string;
  title: string;
};

export function toHeadingId(heading: string) {
  return heading
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

export function TableOfContents({ items }: { items: readonly TableOfContentsItem[] }) {
  if (items.length < 3) {
    return null;
  }

  return (
    <nav className="mt-8 rounded-2xl border border-oat bg-white p-5 shadow-sm" aria-label="Guide contents">
      <h2 className="text-xl font-black text-cocoa">On this page</h2>
      <ol className="mt-4 grid gap-2 sm:grid-cols-2">
        {items.map((item) => (
          <li key={item.id}>
            <a href={`#${item.id}`} className="text-sm font-semibold leading-6 text-moss hover:underline">
              {item.title}
            </a>
          </li>
        ))}
      </ol>
    </nav>
  );
}
