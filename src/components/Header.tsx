"use client";

import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { mobileNavigation, navigation } from "@/lib/site";

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-[9998] border-b border-oat/80 bg-cream/95 backdrop-blur">
      <div className="site-header-inner mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-2 text-cocoa" aria-label="DogHaven home">
          <span className="flex h-11 w-11 items-center justify-center overflow-hidden rounded-full bg-white shadow-soft">
            <Image
              src="/brand/doghaven-logo.png"
              alt=""
              width={44}
              height={44}
              className="h-full w-full object-contain"
              priority
            />
          </span>
          <span className="leading-tight">
            <span className="block text-lg font-extrabold tracking-normal">DogHaven</span>
            <span className="hidden text-xs font-semibold text-bark sm:block">
              Practical dog care in South Africa
            </span>
          </span>
        </Link>

        <nav aria-label="Main navigation" className="hidden items-center gap-5 text-sm font-semibold text-bark md:flex">
          {navigation.map((item) => (
            <Link key={item.href} href={item.href} className="transition hover:text-moss">
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Link
            href="/contact"
            className="hidden rounded-full bg-honey px-4 py-2 text-sm font-bold text-cocoa shadow-soft transition hover:bg-sage md:inline-flex"
          >
            Contact
          </Link>
          <button
            type="button"
            className="inline-flex items-center gap-2 rounded-full border border-oat bg-white px-4 py-2 text-sm font-black text-cocoa shadow-sm transition hover:border-sage hover:text-moss md:hidden"
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            onClick={() => setMenuOpen((current) => !current)}
          >
            {menuOpen ? <X className="h-4 w-4" aria-hidden="true" /> : <Menu className="h-4 w-4" aria-hidden="true" />}
            <span>Menu</span>
          </button>
        </div>
      </div>

      <div
        id="mobile-menu"
        role="navigation"
        aria-label="Mobile navigation"
        aria-hidden={!menuOpen}
        className="fixed inset-x-0 top-[68px] z-[9999] border-b border-oat bg-cream/98 px-4 pb-4 pt-3 shadow-soft backdrop-blur md:hidden"
        style={{ display: menuOpen ? "block" : "none" }}
      >
        <div className="mx-auto max-w-6xl">
          <div className="grid max-h-[calc(100dvh-88px)] grid-cols-2 gap-2 overflow-y-auto rounded-2xl border border-oat bg-white p-3 shadow-sm sm:grid-cols-3">
            {mobileNavigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="flex min-h-[48px] items-center rounded-xl border border-oat bg-cream px-3 py-3 text-sm font-black leading-snug text-cocoa transition hover:border-sage hover:text-moss"
                onClick={() => setMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
}
