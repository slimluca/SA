import Image from "next/image";
import Link from "next/link";
import { footerNavigationSections } from "@/lib/site";

export function Footer() {
  return (
    <footer className="border-t border-oat bg-white text-cocoa">
      <div className="mx-auto grid max-w-7xl items-start gap-10 px-4 py-10 sm:px-6 lg:grid-cols-[minmax(260px,0.9fr)_minmax(0,2.4fr)] lg:gap-12 lg:px-8">
        <div className="max-w-sm">
          <div className="mb-3 flex items-center gap-2">
            <span className="flex h-11 w-11 items-center justify-center overflow-hidden rounded-full bg-cream shadow-sm">
              <Image
                src="/brand/doghaven-logo.png"
                alt=""
                width={44}
                height={44}
                className="h-full w-full object-contain"
              />
            </span>
            <span className="text-xl font-extrabold">Dog Haven</span>
          </div>
          <p className="text-sm leading-6 text-cocoa">
            DogHaven is South Africa&apos;s practical dog care guide for owners who want calm,
            useful, locally aware advice before they make decisions for their dogs.
          </p>
          <div className="mt-5 rounded-2xl border border-oat bg-cream/70 p-4">
            <p className="text-xs font-black uppercase tracking-wide text-cocoa">Dog Haven network</p>
            <div className="mt-3 grid gap-2 text-sm font-bold text-cocoa">
              <Link href="https://doghaven.it" className="transition hover:text-sage">
                Dog Haven Italy
              </Link>
              <Link href="https://doghaven.us" className="transition hover:text-sage">
                Dog Haven USA
              </Link>
              <Link href="https://doghavengroup.com" className="transition hover:text-sage">
                Dog Haven Group
              </Link>
            </div>
          </div>
        </div>

        <div className="grid items-start gap-x-8 gap-y-8 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5">
          {footerNavigationSections.map((section) => (
            <nav key={section.title} aria-label={`${section.title} footer links`} className="min-w-0">
              <h2 className="text-sm font-bold uppercase tracking-wide text-cocoa">{section.title}</h2>
              <ul className="mt-3 space-y-2 text-sm text-cocoa">
                {section.links.map((item) => (
                  <li key={item.href}>
                    <Link href={item.href} className="transition hover:text-sage">
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>
      </div>
      <div className="border-t border-oat px-4 py-4 text-center text-xs text-cocoa">
        &copy; {new Date().getFullYear()} DogHaven.co.za. Information is educational and does not
        replace veterinary care.
      </div>
    </footer>
  );
}
