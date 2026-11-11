import Link from "next/link";

export function AuthorTrustBox({ updated }: { updated?: string }) {
  return (
    <aside className="mt-8 max-w-4xl rounded-2xl border border-sage/30 bg-sage/5 p-5 sm:p-6" aria-label="About this guide">
      <p className="text-xs font-black uppercase tracking-[0.14em] text-moss">About this guide</p>
      <h2 className="mt-2 text-xl font-black text-cocoa">Prepared by the Dog Haven Editorial Team</h2>
      <p className="mt-2 max-w-3xl text-sm leading-6 text-bark">
        Dog Haven guides are written for South African owners. We prioritise local context, clear safety limits, and sources that can be checked. This page is educational and does not replace a veterinarian or other qualified professional.
      </p>
      {updated ? (
        <p className="mt-3 text-sm text-bark">
          <span className="font-bold text-cocoa">Last updated:</span> {updated}
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
