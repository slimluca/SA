import Image from "next/image";
import Link from "next/link";
import { footerNavigationSections } from "@/lib/site";

export function Footer() {
  return (
    <footer className="border-t border-oat bg-ivory text-navy">
      <div className="mx-auto grid max-w-7xl items-start gap-10 px-4 py-10 sm:px-6 lg:grid-cols-[minmax(260px,0.9fr)_minmax(0,2.4fr)] lg:gap-12 lg:px-8">
        <div className="max-w-sm">
          <div className="mb-3 flex items-center">
            <span className="flex h-28 w-28 shrink-0 items-center justify-center overflow-hidden rounded-full bg-ivory shadow-logo ring-1 ring-gold/35 sm:h-32 sm:w-32">
              <Image
                src="/brand/dog-haven-south-africa-icon.png"
                alt="Dog Haven South Africa logo"
                width={256}
                height={256}
                className="h-full w-full object-contain"
              />
            </span>
          </div>
          <p className="text-sm leading-6 text-bark">
            Dog Haven is South Africa&apos;s practical dog care guide for owners who want calm,
            useful, locally aware advice before they make decisions for their dogs.
          </p>
          <p className="mt-6 text-sm text-bark">
            <Link href="/dog-haven-network" className="font-bold transition hover:text-sage">
              Dog Haven Network
            </Link>
          </p>
        </div>

        <div className="grid items-start gap-x-8 gap-y-8 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5">
          {footerNavigationSections.map((section) => (
            <nav key={section.title} aria-label={`${section.title} footer links`} className="min-w-0">
              <h2 className="text-sm font-bold uppercase tracking-wide text-navy">{section.title}</h2>
              <ul className="mt-3 space-y-2 text-sm text-bark">
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
      <div className="border-t border-oat px-4 py-4 text-center text-xs text-bark">
        &copy; {new Date().getFullYear()} DogHaven.co.za. Information is educational and does not
        replace veterinary care.
      </div>
    </footer>
  );
}
