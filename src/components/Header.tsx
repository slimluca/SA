import Image from "next/image";
import Link from "next/link";
import { navigation } from "@/lib/site";

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-oat/80 bg-cream/92 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-2 text-cocoa" aria-label="DogHaven home">
          <span className="flex h-11 w-11 items-center justify-center overflow-hidden rounded-full bg-cream shadow-soft">
            <Image
              src="/brand/doghaven-logo-mark.png"
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

        <Link
          href="/contact"
          className="rounded-full bg-cocoa px-4 py-2 text-sm font-bold text-cream shadow-soft transition hover:bg-moss"
        >
          Contact
        </Link>
      </div>
    </header>
  );
}
