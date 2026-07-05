"use client";

import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { mobileNavigation, navigation } from "@/lib/site";

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-[9998] border-b border-oat/80 bg-cream/96 backdrop-blur">
      <div className="site-header-inner mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-2.5 sm:px-6 lg:px-8">
        <Link href="/" className="flex min-w-0 items-center text-cocoa" aria-label="Dog Haven home">
          <span className="flex h-14 w-[184px] shrink-0 items-center overflow-hidden sm:h-16 sm:w-[230px] md:h-14 md:w-[210px] lg:h-16 lg:w-[270px] xl:w-[300px]">
            <Image
              src="/brand/dog-haven-south-africa-logo.png"
              alt="Dog Haven South Africa logo"
              width={520}
              height={173}
              className="h-full w-full object-contain"
              priority
            />
          </span>
        </Link>

        <nav aria-label="Main navigation" className="hidden items-center gap-5 text-sm font-semibold text-bark md:flex">
          {navigation.map((item) => (
            <Link key={item.href} href={item.href} className="transition hover:text-moss">
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="ml-auto flex shrink-0 items-center gap-2">
          <Link
            href="/contact"
            className="hidden rounded-full bg-sage px-4 py-2 text-sm font-bold text-white shadow-soft transition hover:bg-moss md:inline-flex"
          >
            Contact
          </Link>
          <button
            type="button"
            className="fixed right-4 top-3 z-[10000] inline-flex items-center gap-2 rounded-full border border-oat bg-white px-3 py-2 text-sm font-black text-navy shadow-sm transition hover:border-sage hover:text-moss sm:px-4 md:static md:hidden"
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            onClick={() => setMenuOpen((current) => !current)}
          >
            {menuOpen ? <X className="h-4 w-4" aria-hidden="true" /> : <Menu className="h-4 w-4" aria-hidden="true" />}
            <span className="hidden sm:inline">Menu</span>
          </button>
        </div>
      </div>

      <div
        id="mobile-menu"
        role="navigation"
        aria-label="Mobile navigation"
        aria-hidden={!menuOpen}
        className="fixed inset-x-0 top-[76px] z-[9999] border-b border-oat bg-cream/98 px-4 pb-4 pt-3 shadow-soft backdrop-blur sm:top-[84px] md:hidden"
        style={{ display: menuOpen ? "block" : "none" }}
      >
        <div className="mx-auto max-w-6xl">
          <div className="grid max-h-[calc(100dvh-104px)] grid-cols-2 gap-2 overflow-y-auto rounded-2xl border border-oat bg-white p-3 shadow-sm sm:grid-cols-3">
            {mobileNavigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="flex min-h-[48px] items-center rounded-xl border border-oat bg-cream px-3 py-3 text-sm font-black leading-snug text-navy transition hover:border-sage hover:text-moss"
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
