type Source = {
  label: string;
  href: string;
  note: string;
};

export function SourceList({ sources }: { sources: readonly Source[] }) {
  return (
    <section className="rounded-2xl border border-oat bg-white p-5 shadow-sm">
      <h2 className="text-xl font-black text-cocoa">Sources and further reading</h2>
      <p className="mt-2 text-sm leading-6 text-bark">
        These references support factual, safety, legal, veterinary, or local context in this
        guide. For time-sensitive requirements, alerts, and services, check the current official
        source before acting.
      </p>
      <ul className="mt-4 space-y-3">
        {sources.map((source) => (
          <li key={source.href}>
            <a
              href={source.href}
              target="_blank"
              rel="noopener noreferrer"
              className="font-bold text-moss underline-offset-4 hover:underline"
            >
              {source.label}
            </a>
            <p className="mt-1 text-sm leading-6 text-bark">{source.note}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
