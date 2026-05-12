type Source = {
  label: string;
  href: string;
  note: string;
};

export function SourceList({ sources }: { sources: readonly Source[] }) {
  return (
    <section className="rounded-2xl border border-oat bg-white p-5 shadow-sm">
      <h2 className="text-xl font-black text-cocoa">Useful source starting points</h2>
      <p className="mt-2 text-sm leading-6 text-bark">
        DogHaven cites primary, veterinary, public health, and official sources where they are
        relevant to a guide. These links are starting points for the editorial foundation.
      </p>
      <ul className="mt-4 space-y-3">
        {sources.map((source) => (
          <li key={source.href}>
            <a href={source.href} className="font-bold text-moss underline-offset-4 hover:underline">
              {source.label}
            </a>
            <p className="mt-1 text-sm leading-6 text-bark">{source.note}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
