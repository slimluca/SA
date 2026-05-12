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
        <details key={item.question} className="rounded-2xl border border-oat bg-white p-5 shadow-sm">
          <summary className="cursor-pointer text-base font-black text-cocoa">{item.question}</summary>
          <p className="mt-3 text-sm leading-6 text-bark">{item.answer}</p>
        </details>
      ))}
    </div>
  );
}
