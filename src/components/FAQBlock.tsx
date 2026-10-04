type FAQ = {
  question: string;
  answer: string;
};

type FAQBlockProps = {
  items: readonly FAQ[];
};

export function FAQBlock({ items }: FAQBlockProps) {
  return (
    <div className="space-y-3">
      {items.map((item) => (
        <details key={item.question} className="group overflow-hidden rounded-2xl border border-oat bg-white shadow-sm open:border-sage/40 open:shadow-panel">
          <summary className="flex min-h-14 cursor-pointer list-none items-center justify-between gap-4 px-5 py-4 text-base font-black text-navy outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-moss">{item.question}<span className="text-xl text-sage transition group-open:rotate-45">+</span></summary>
          <p className="border-t border-oat bg-cream/45 px-5 py-4 text-sm leading-6 text-bark">{item.answer}</p>
        </details>
      ))}
    </div>
  );
}
