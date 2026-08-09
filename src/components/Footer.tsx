import Link from "next/link";
import Image from "next/image";
import { footerNavigationSections } from "@/lib/site";

export function Footer() {
  return (
    <footer className="border-t border-[#dfc39f] bg-[#f2d8b9] text-navy">
      <div className="mx-auto grid max-w-7xl items-start gap-10 px-4 py-10 sm:px-6 lg:grid-cols-[minmax(260px,0.9fr)_minmax(0,2.4fr)] lg:gap-12 lg:px-8">
        <div className="max-w-sm">
          <div className="mb-4 flex items-center">
            <Image
              src="/brand/dog-haven-south-africa-logo-transparent.webp"
              alt="Dog Haven South Africa"
              width={1200}
              height={527}
              sizes="(min-width: 1024px) 300px, 280px"
              className="h-auto w-full max-w-[300px]"
            />
          </div>
          <p className="text-sm leading-6 text-bark">
            Dog Haven gives South African owners grounded information on health, everyday care and
            planning, with clear limits where a veterinarian or qualified professional is needed.
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
      <div className="border-t border-[#dfc39f] px-4 py-4 text-center text-xs text-bark">
        &copy; {new Date().getFullYear()} DogHaven.co.za. Information is educational and does not
        replace veterinary care.
      </div>
    </footer>
  );
}
