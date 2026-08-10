"use client";

import { Check, Copy, Link as LinkIcon } from "lucide-react";
import { useState } from "react";

type CopyTarget = "citation" | "link";

export function OriginalResourcePanel({
  label,
  summary,
  citation,
  shareLabel,
  url,
}: {
  label: "Research resource" | "Printable resource";
  summary: string;
  citation?: string;
  shareLabel: string;
  url: string;
}) {
  const [copied, setCopied] = useState<CopyTarget | null>(null);

  async function copyText(value: string, target: CopyTarget) {
    try {
      await navigator.clipboard.writeText(value);
      setCopied(target);
      window.setTimeout(() => setCopied(null), 2000);
    } catch {
      setCopied(null);
    }
  }

  return (
    <aside className="mt-6 max-w-4xl rounded-xl border border-sage/40 bg-sage/5 p-5" aria-label={label}>
      <p className="text-xs font-black uppercase tracking-[0.16em] text-moss">Dog Haven original</p>
      <h2 className="mt-2 text-xl font-black text-cocoa">{label}</h2>
      <p className="mt-2 max-w-3xl text-sm leading-6 text-bark">{summary}</p>

      {citation ? (
        <div className="mt-4 border-t border-sage/30 pt-4">
          <p className="text-sm font-black text-cocoa">Suggested citation</p>
          <p className="mt-1 text-sm leading-6 text-bark">{citation}</p>
          <button
            type="button"
            onClick={() => copyText(citation, "citation")}
            className="mt-3 inline-flex min-h-10 items-center gap-2 rounded-full border border-moss px-4 py-2 text-sm font-bold text-moss outline-none transition hover:bg-white focus-visible:ring-2 focus-visible:ring-moss focus-visible:ring-offset-2"
          >
            {copied === "citation" ? <Check className="h-4 w-4" aria-hidden="true" /> : <Copy className="h-4 w-4" aria-hidden="true" />}
            {copied === "citation" ? "Citation copied" : "Copy citation"}
          </button>
        </div>
      ) : null}

      <div className="mt-4 border-t border-sage/30 pt-4">
        <p className="text-sm font-black text-cocoa">Share this resource</p>
        <a className="mt-1 block break-all text-sm leading-6 text-moss underline-offset-4 hover:underline" href={url}>
          {url}
        </a>
        <button
          type="button"
          onClick={() => copyText(url, "link")}
          className="mt-3 inline-flex min-h-10 items-center gap-2 rounded-full border border-moss px-4 py-2 text-sm font-bold text-moss outline-none transition hover:bg-white focus-visible:ring-2 focus-visible:ring-moss focus-visible:ring-offset-2"
        >
          {copied === "link" ? <Check className="h-4 w-4" aria-hidden="true" /> : <LinkIcon className="h-4 w-4" aria-hidden="true" />}
          {copied === "link" ? "Link copied" : shareLabel}
        </button>
        <span className="sr-only" aria-live="polite">{copied ? `${copied} copied` : ""}</span>
      </div>
    </aside>
  );
}
