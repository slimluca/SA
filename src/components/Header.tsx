"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown, Menu, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { mobileNavigation, moreNavigationGroups, navigation } from "@/lib/site";

function matchesPath(pathname: string, href: string) {
  return pathname === href || pathname.startsWith(`${href}/`);
}

export function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [moreOpen, setMoreOpen] = useState(false);
  const moreContainerRef = useRef<HTMLDivElement>(null);
  const moreButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    setMenuOpen(false);
    setMoreOpen(false);
  }, [pathname]);

  useEffect(() => {
    function handlePointerDown(event: MouseEvent) {
      if (!moreContainerRef.current?.contains(event.target as Node)) setMoreOpen(false);
    }

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key !== "Escape") return;
      if (moreOpen) moreButtonRef.current?.focus();
      setMoreOpen(false);
      setMenuOpen(false);
    }

    document.addEventListener("mousedown", handlePointerDown);
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("mousedown", handlePointerDown);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [moreOpen]);

  const moreIsActive = moreNavigationGroups.some((group) =>
    group.links.some((item) => matchesPath(pathname, item.href)),
  );

  return (
    <header className="sticky top-0 z-[9998] border-b border-oat/90 bg-cream/95 shadow-[0_4px_18px_rgba(75,54,36,0.06)] backdrop-blur-xl">
      <div className="section-shell flex items-center gap-4 !py-1.5 xl:gap-5">
        <Link
          href="/"
          className="flex shrink-0 items-center rounded-lg outline-none focus-visible:ring-2 focus-visible:ring-moss focus-visible:ring-offset-2"
          aria-label="Dog Haven home"
        >
          <Image
            src="/brand/dog-haven-south-africa-header-logo-transparent.webp"
            alt="Dog Haven South Africa"
            width={1200}
            height={527}
            priority
            sizes="(min-width: 1280px) 236px, (min-width: 640px) 210px, 190px"
            className="h-auto w-[190px] sm:w-[210px] xl:w-[236px]"
          />
        </Link>

        <nav aria-label="Main navigation" className="hidden min-w-0 flex-1 items-center justify-center gap-0.5 text-sm font-bold text-bark xl:flex 2xl:gap-1">
          {navigation.map((item) => {
            const active = matchesPath(pathname, item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={active ? "page" : undefined}
                className={`rounded-lg border-b-2 px-2.5 py-3 outline-none transition 2xl:px-3 ${
                  active
                    ? "border-honey text-moss"
                    : "border-transparent hover:border-sage/45 hover:text-moss focus-visible:border-sage focus-visible:ring-2 focus-visible:ring-moss"
                }`}
              >
                {item.label}
              </Link>
            );
          })}

          <div ref={moreContainerRef} className="relative">
            <button
              ref={moreButtonRef}
              type="button"
              aria-expanded={moreOpen}
              aria-controls="more-navigation"
              aria-haspopup="true"
              className={`inline-flex items-center gap-1 rounded-lg border-b-2 px-2.5 py-3 outline-none transition 2xl:px-3 ${
                moreOpen || moreIsActive
                  ? "border-honey text-moss"
                  : "border-transparent hover:border-sage/45 hover:text-moss focus-visible:border-sage focus-visible:ring-2 focus-visible:ring-moss"
              }`}
              onClick={() => setMoreOpen((current) => !current)}
            >
              More
              <ChevronDown className={`h-4 w-4 transition-transform ${moreOpen ? "rotate-180" : ""}`} aria-hidden="true" />
            </button>

            <div
              id="more-navigation"
              aria-hidden={!moreOpen}
              className="absolute left-1/2 top-full mt-2 w-[460px] -translate-x-1/2 overflow-hidden rounded-2xl border border-oat bg-white p-5 shadow-[0_18px_48px_rgba(35,45,39,0.18)]"
              style={{ display: moreOpen ? "block" : "none" }}
            >
              <div className="grid grid-cols-2 gap-x-7 gap-y-5">
                {moreNavigationGroups.map((group, index) => (
                  <section key={group.title} className={index === 2 ? "col-span-2 border-t border-oat pt-4" : undefined}>
                    <p className="text-xs font-black uppercase tracking-[0.12em] text-moss">{group.title}</p>
                    <div className={index === 2 ? "mt-2 grid grid-cols-2 gap-x-5" : "mt-2 space-y-1"}>
                      {group.links.map((item) => (
                        <Link
                          key={item.href}
                          href={item.href}
                          className="block rounded-lg px-2 py-2 text-sm font-bold text-bark outline-none transition hover:bg-cream hover:text-moss focus-visible:ring-2 focus-visible:ring-moss"
                        >
                          {item.label}
                        </Link>
                      ))}
                    </div>
                  </section>
                ))}
              </div>
            </div>
          </div>
        </nav>

        <div className="ml-auto flex shrink-0 items-center gap-2">
          <Link
            href="/contact"
            className="hidden min-h-11 items-center rounded-full bg-sage px-5 py-2.5 text-sm font-black text-white shadow-sm outline-none transition hover:bg-moss focus-visible:ring-2 focus-visible:ring-moss focus-visible:ring-offset-2 xl:inline-flex"
          >
            Contact
          </Link>
          <button
            type="button"
            className="inline-flex min-h-11 items-center gap-2 rounded-full border border-oat bg-white px-3 py-2 text-sm font-black text-navy shadow-sm outline-none transition hover:border-sage hover:text-moss focus-visible:ring-2 focus-visible:ring-moss focus-visible:ring-offset-2 sm:px-4 xl:hidden"
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            onClick={() => setMenuOpen((current) => !current)}
          >
            {menuOpen ? <X className="h-5 w-5" aria-hidden="true" /> : <Menu className="h-5 w-5" aria-hidden="true" />}
            <span className="hidden sm:inline">Menu</span>
          </button>
        </div>
      </div>

      <nav
        id="mobile-menu"
        aria-label="Mobile navigation"
        aria-hidden={!menuOpen}
        className="absolute inset-x-0 top-full border-b border-oat bg-cream/98 px-4 pb-4 pt-3 shadow-soft backdrop-blur-xl xl:hidden"
        style={{ display: menuOpen ? "block" : "none" }}
      >
        <div className="mx-auto max-w-4xl">
          <div className="grid max-h-[calc(100dvh-120px)] grid-cols-2 gap-2 overflow-y-auto rounded-2xl border border-oat bg-white p-3 shadow-sm sm:grid-cols-3">
            {mobileNavigation.map((item) => {
              const active = matchesPath(pathname, item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  aria-current={active ? "page" : undefined}
                  className={`flex min-h-12 items-center rounded-xl border px-3 py-3 text-sm font-black leading-snug outline-none transition focus-visible:ring-2 focus-visible:ring-moss ${
                    active
                      ? "border-honey bg-honey/15 text-moss"
                      : "border-oat bg-cream text-navy hover:border-sage hover:text-moss"
                  }`}
                  onClick={() => setMenuOpen(false)}
                >
                  {item.label}
                </Link>
              );
            })}
          </div>
        </div>
      </nav>
    </header>
  );
}
