import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Bone, Calculator, GraduationCap, HeartPulse, MapPin, PawPrint, ShieldPlus, Stethoscope } from "lucide-react";
import { FAQBlock } from "@/components/FAQBlock";
import { SearchBox } from "@/components/SearchBox";
import { homeFaqs } from "@/lib/data";
import { createMetadata } from "@/lib/seo";
import { JsonLd, faqSchema } from "@/lib/schema";

export const metadata: Metadata = createMetadata({
  title: "Dog Care South Africa | Practical Guides & Free Tools | Dog Haven",
  description: "Practical South African dog care guides, free dog tools, puppy help, food safety, symptoms, insurance, dog costs, breeds, adoption and dog-friendly planning.",
  path: "/",
  image: "/images/home/dog-haven-south-africa-hero.webp",
  imageAlt: "Dog and owner walking along a quiet South African coastal path",
  imageWidth: 1536,
  imageHeight: 1024,
});

const topics = [
  { title: "Health & wellbeing", copy: "Prevention, symptoms and clearer vet conversations.", href: "/health", image: "/images/home/south-africa-dog-health-care.webp", icon: HeartPulse },
  { title: "Find your breed", copy: "Compare the life you offer with a dog's real needs.", href: "/breeds", image: "/images/hubs/dog-breeds-south-africa.webp", icon: PawPrint },
  { title: "Food & nutrition", copy: "Make thoughtful feeding and food-safety decisions.", href: "/food", image: "/images/guides/choosing-dog-food-south-africa.webp", icon: Bone },
  { title: "Adoption & puppy care", copy: "Prepare for responsible, unrushed beginnings.", href: "/adoption", image: "/images/home/south-africa-dog-family-adoption.webp", icon: ShieldPlus },
] as const;

const careLinks = [
  { title: "Health guides", href: "/health", icon: HeartPulse },
  { title: "Emergency help", href: "/emergency", icon: ShieldPlus },
  { title: "Routine care", href: "/tools/dog-health-calendar", icon: Stethoscope },
] as const;

export default function HomePage() {
  return (
    <>
      <JsonLd data={faqSchema(homeFaqs)} />
      <section className="relative isolate min-h-[620px] overflow-hidden bg-emerald-deep text-white lg:min-h-[690px]">
        <Image src="/images/home/dog-haven-south-africa-hero.webp" alt="Dog and owner walking along a South African coastal path" fill priority sizes="100vw" className="object-cover object-[62%_center]" />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(3,55,45,.96)_0%,rgba(3,55,45,.78)_35%,rgba(3,55,45,.12)_72%,rgba(3,55,45,.03)_100%)]" />
        <div className="section-shell relative flex min-h-[620px] items-center py-16 lg:min-h-[690px]">
          <div className="max-w-[610px] py-10">
            <p className="light-kicker">Dog Haven South Africa</p>
            <h1 className="mt-5 max-w-xl text-5xl font-black leading-[.98] tracking-[-.035em] text-white sm:text-6xl lg:text-7xl">A better life<br />with your dog.</h1>
            <p className="mt-6 max-w-lg text-lg leading-8 text-white/90">Practical local guidance for healthier dogs, happier homes and everyday South African adventures.</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="#explore" className="primary-light-button">Explore Dog Haven <ArrowRight className="h-4 w-4" /></Link>
              <Link href="/start-here" className="secondary-light-button">Start here</Link>
            </div>
          </div>
        </div>
      </section>

      <div className="relative z-20 -mt-16 px-4 sm:px-6">
        <div className="mx-auto max-w-5xl rounded-[1.6rem] border border-white/80 bg-[#fffaf0]/95 p-4 shadow-[0_24px_65px_rgba(20,45,35,.2)] backdrop-blur sm:p-5">
          <SearchBox />
          <div className="mt-4 grid grid-cols-2 divide-x divide-oat text-center sm:grid-cols-4">
            {[{ label: "Health", href: "/health", icon: HeartPulse }, { label: "Breeds", href: "/breeds", icon: PawPrint }, { label: "Food", href: "/food", icon: Bone }, { label: "Training", href: "/training", icon: GraduationCap }].map(({ label, href, icon: Icon }) => (
              <Link key={href} href={href} className="inline-flex min-h-11 items-center justify-center gap-2 px-2 text-sm font-black text-moss hover:text-sage"><Icon className="h-4 w-4" />{label}</Link>
            ))}
          </div>
        </div>
      </div>

      <section id="explore" className="section-shell scroll-mt-24 pt-20 sm:pt-24">
        <p className="section-kicker">Welcome to Dog Haven South Africa</p>
        <h2 className="section-title max-w-4xl">Good guidance. <span className="text-moss">Real South African life.</span></h2>
        <p className="section-copy max-w-4xl">Dog Haven is a practical, locally focused resource for dog owners. From health and emergencies to breeds, food, adoption and everyday care, we help you make informed decisions so you and your dog can enjoy a healthier, happier life together.</p>
        <div className="mt-9 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {topics.map(({ title, copy, href, image, icon: Icon }) => (
            <Link key={href} href={href} className="group overflow-hidden rounded-[1.35rem] border border-oat bg-emerald-deep text-white shadow-panel transition hover:-translate-y-1 hover:shadow-soft">
              <div className="relative aspect-[5/4] overflow-hidden"><Image src={image} alt="" fill sizes="(min-width:1024px) 25vw, 50vw" className="object-cover transition duration-500 group-hover:scale-105" /></div>
              <div className="p-5"><div className="flex items-center gap-2"><Icon className="h-5 w-5 text-gold" /><h3 className="font-black text-white">{title}</h3></div><p className="mt-2 text-sm leading-6 text-white/75">{copy}</p><span className="mt-4 inline-flex items-center gap-2 text-sm font-black text-[#f3c76d]">Explore <ArrowRight className="h-4 w-4" /></span></div>
            </Link>
          ))}
        </div>
      </section>

      <section className="mt-8 bg-emerald-deep text-white">
        <div className="grid min-h-[550px] lg:grid-cols-2">
          <div className="relative min-h-[380px]"><Image src="/images/home/south-africa-dog-everyday-care.webp" alt="South African dog owner spending calm time outdoors with a dog" fill sizes="(min-width:1024px) 50vw, 100vw" className="object-cover" /></div>
          <div className="flex items-center px-5 py-14 sm:px-10 lg:px-14 xl:px-20">
            <div className="max-w-xl"><p className="light-kicker">Everyday care</p><h2 className="mt-4 text-4xl font-black leading-tight text-white sm:text-5xl">Everyday care starts with knowing your dog.</h2><p className="mt-5 leading-7 text-white/80">The more you understand your dog, the easier it is to keep them healthy, safe and happy. Explore practical guidance created for South African owners.</p>
              <div className="mt-8 space-y-3">{careLinks.map(({ title, href, icon: Icon }) => <Link key={href} href={href} className="group flex min-h-13 items-center justify-between rounded-full border border-white/30 px-5 py-3 text-sm font-black text-white hover:bg-white/10"><span className="flex items-center gap-3"><Icon className="h-5 w-5 text-[#f3c76d]" />{title}</span><ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" /></Link>)}</div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-shell py-14 sm:py-20">
        <p className="section-kicker">Practical tools</p><h2 className="section-title">Practical tools. <span className="text-moss">Clearer decisions.</span></h2><p className="section-copy">Use real Dog Haven tools to plan, make informed choices and care for your dog with more confidence.</p>
        <div className="mt-8 grid gap-5 lg:grid-cols-2">
          <Link href="/tools/dog-cost-calculator" className="group grid overflow-hidden rounded-[1.5rem] border border-[#b9d8c7] bg-[#edf7f0] shadow-panel sm:grid-cols-[190px_1fr]"><div className="flex min-h-44 items-center justify-center bg-[radial-gradient(circle,#d1eee0,transparent_68%)]"><Calculator className="h-20 w-20 text-sage" /></div><div className="p-6"><h3 className="text-xl font-black text-navy">Dog cost calculator</h3><p className="mt-2 text-sm leading-6 text-bark">Build a monthly planning range from your own care choices.</p><span className="mt-5 inline-flex items-center gap-2 text-sm font-black text-moss">Open calculator <ArrowRight className="h-4 w-4" /></span></div></Link>
          <Link href="/tools/can-my-dog-eat-this" className="group grid overflow-hidden rounded-[1.5rem] border border-oat bg-white shadow-panel sm:grid-cols-[190px_1fr]"><div className="relative min-h-44"><Image src="/images/guides/toxic-foods-dogs-south-africa.webp" alt="Food safety planning for dogs" fill loading="eager" sizes="190px" className="object-cover" /></div><div className="p-6"><h3 className="text-xl font-black text-navy">Can my dog eat this?</h3><p className="mt-2 text-sm leading-6 text-bark">Check common foods and open the full safety guide.</p><span className="mt-5 inline-flex items-center gap-2 text-sm font-black text-moss">Check a food <ArrowRight className="h-4 w-4" /></span></div></Link>
        </div>
      </section>

      <section className="relative isolate overflow-hidden py-20 text-white">
        <Image src="/images/home/south-africa-dog-outdoors-hero.webp" alt="Dog and owner enjoying a South African coastal adventure" fill loading="eager" sizes="100vw" className="object-cover" />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(3,55,45,.93),rgba(3,55,45,.56),rgba(3,55,45,.12))]" />
        <div className="section-shell relative"><p className="light-kicker">Explore South Africa</p><h2 className="mt-4 max-w-2xl text-4xl font-black leading-tight text-white sm:text-5xl">More South African adventures. Together.</h2><p className="mt-4 max-w-xl leading-7 text-white/85">From mountain trails to coastal walks, plan outings around weather, access, wildlife, water and your individual dog.</p><div className="mt-7 flex flex-wrap gap-3">{["Cape Town", "Johannesburg", "Durban"].map((city) => <Link key={city} href={`/local/${city.toLowerCase().replace(" ", "-")}`} className="inline-flex items-center gap-2 rounded-full border border-white/35 px-4 py-2 text-sm font-bold text-white hover:bg-white/10"><MapPin className="h-4 w-4 text-[#f3c76d]" />{city}</Link>)}</div></div>
      </section>

      <section className="section-shell py-14 sm:py-20"><div className="grid items-center gap-8 lg:grid-cols-[1.05fr_.95fr]"><div className="relative aspect-[16/10] overflow-hidden rounded-[1.5rem]"><Image src="/images/home/south-africa-dog-lifestyle.webp" alt="Dog looking across a South African landscape" fill loading="eager" sizes="(min-width:1024px) 52vw, 100vw" className="object-cover" /></div><div><p className="section-kicker">Our purpose</p><h2 className="section-title">Made for life with dogs in South Africa.</h2><p className="section-copy">We’re here to support a better life for every dog and owner—with trustworthy, easy-to-follow information created for real-world life, from busy cities to small towns and everyday adventures in between.</p><Link href="/about" className="primary-button mt-7">Explore Dog Haven <ArrowRight className="h-4 w-4" /></Link></div></div></section>

      <section className="border-t border-oat bg-white/60"><div className="section-shell py-14"><div className="max-w-4xl"><p className="section-kicker">Useful lower-page guidance</p><h2 className="section-title">Clear information, responsible boundaries.</h2><p className="section-copy">Dog Haven combines South African context with transparent sourcing and correction standards. Medical information is educational and never replaces veterinary examination, diagnosis or treatment.</p><div className="mt-7"><FAQBlock items={homeFaqs} /></div></div></div></section>
    </>
  );
}
