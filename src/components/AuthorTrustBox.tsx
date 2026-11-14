import Link from "next/link";

export function AuthorTrustBox({ updated }: { updated?: string }) {
  const formattedUpdated = updated && /^\d{4}-\d{2}-\d{2}$/.test(updated)
    ? new Intl.DateTimeFormat("en-ZA", { day: "numeric", month: "long", year: "numeric", timeZone: "UTC" }).format(new Date(`${updated}T00:00:00Z`))
    : updated;

  return (
    <aside className="mt-8 max-w-4xl rounded-2xl border border-sage/30 bg-sage/5 p-5 sm:p-6" aria-label="About this guide">
      <p className="text-xs font-black uppercase tracking-[0.14em] text-moss">About this guide</p>
      <h2 className="mt-2 text-xl font-black text-cocoa">How we maintain this guide</h2>
      <p className="mt-2 max-w-3xl text-sm leading-6 text-bark">
        Our editorial team reviews reported errors and updates information when a meaningful change can be confirmed. The sources for this guide are listed above.
      </p>
      {updated ? (
        <p className="mt-3 text-sm text-bark">
          <span className="font-bold text-cocoa">Last reviewed:</span> {formattedUpdated}
        </p>
      ) : null}
      <div className="mt-4 flex flex-wrap gap-3 text-sm">
        <Link
          href="/about"
          className="inline-flex min-h-10 items-center rounded-full border border-moss px-4 py-2 font-bold text-moss transition hover:bg-white"
        >
          About Dog Haven
        </Link>
        <Link
          href="/editorial-policy"
          className="inline-flex min-h-10 items-center rounded-full border border-moss px-4 py-2 font-bold text-moss transition hover:bg-white"
        >
          Editorial policy
        </Link>
        <Link
          href="/contact"
          className="inline-flex min-h-10 items-center rounded-full border border-moss px-4 py-2 font-bold text-moss transition hover:bg-white"
        >
          Report an error
        </Link>
      </div>
    </aside>
  );
}
