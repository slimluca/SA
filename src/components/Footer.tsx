import Link from "next/link";
import { Mail, PawPrint } from "lucide-react";
import { companyNavigation, hubNavigation, legalNavigation, siteConfig } from "@/lib/site";

export function Footer() {
  return (
    <footer className="border-t border-oat bg-cocoa text-cream">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-10 sm:px-6 md:grid-cols-[1.4fr_1fr_1fr_1fr] lg:px-8">
        <div>
          <div className="mb-3 flex items-center gap-2">
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-honey text-cocoa">
              <PawPrint className="h-5 w-5" aria-hidden="true" />
            </span>
            <span className="text-xl font-extrabold">DogHaven</span>
          </div>
          <p className="max-w-md text-sm leading-6 text-cream/82">
            DogHaven is South Africa&apos;s practical dog care guide for owners who want calm,
            useful, locally aware advice before they make decisions for their dogs.
          </p>
          <a
            href={`mailto:${siteConfig.email}`}
            className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-cream hover:text-honey"
          >
            <Mail className="h-4 w-4" aria-hidden="true" />
            {siteConfig.email}
          </a>
        </div>

        <div>
          <h2 className="text-sm font-bold uppercase tracking-wide text-honey">Site</h2>
          <ul className="mt-3 space-y-2 text-sm text-cream/82">
            {hubNavigation.slice(0, 6).map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="hover:text-honey">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-sm font-bold uppercase tracking-wide text-honey">More</h2>
          <ul className="mt-3 space-y-2 text-sm text-cream/82">
            {hubNavigation.slice(6).map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="hover:text-honey">
                  {item.label}
                </Link>
              </li>
            ))}
            {companyNavigation.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="hover:text-honey">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-sm font-bold uppercase tracking-wide text-honey">Legal</h2>
          <ul className="mt-3 space-y-2 text-sm text-cream/82">
            {legalNavigation.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="hover:text-honey">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="border-t border-cream/10 px-4 py-4 text-center text-xs text-cream/70">
        &copy; {new Date().getFullYear()} DogHaven.co.za. Information is educational and does not
        replace veterinary care.
      </div>
    </footer>
  );
}
