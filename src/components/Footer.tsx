import Image from "next/image";
import Link from "next/link";
import { footerNavigationSections } from "@/lib/site";

export function Footer() {
  return (
    <footer className="border-t border-oat bg-cocoa text-cream">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-10 sm:px-6 lg:grid-cols-[1.35fr_2fr] lg:px-8">
        <div className="max-w-md">
          <div className="mb-3 flex items-center gap-2">
            <span className="flex h-11 w-11 items-center justify-center overflow-hidden rounded-full border-2 border-honey bg-cream shadow-sm">
              <Image
                src="/brand/doghaven-dog-logo.png"
                alt=""
                width={44}
                height={44}
                className="h-full w-full object-cover"
              />
            </span>
            <span className="text-xl font-extrabold">DogHaven</span>
          </div>
          <p className="text-sm leading-6 text-cream/82">
            DogHaven is South Africa&apos;s practical dog care guide for owners who want calm,
            useful, locally aware advice before they make decisions for their dogs.
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-5">
          {footerNavigationSections.map((section) => (
            <nav key={section.title} aria-label={`${section.title} footer links`}>
              <h2 className="text-sm font-bold uppercase tracking-wide text-honey">{section.title}</h2>
              <ul className="mt-3 space-y-2 text-sm text-cream/82">
                {section.links.map((item) => (
                  <li key={item.href}>
                    <Link href={item.href} className="transition hover:text-honey">
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>
      </div>
      <div className="border-t border-cream/10 px-4 py-4 text-center text-xs text-cream/70">
        &copy; {new Date().getFullYear()} DogHaven.co.za. Information is educational and does not
        replace veterinary care.
      </div>
    </footer>
  );
}
