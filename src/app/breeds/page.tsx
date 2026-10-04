import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Clock3, Home, PawPrint, Scissors, Trophy } from "lucide-react";
import { DogBreedComparisonChecklist } from "@/components/tools/DogBreedComparisonChecklist";
import { FAQBlock } from "@/components/FAQBlock";
import { GuideLibrary } from "@/components/GuideLibrary";
import { getHub } from "@/lib/content";
import { phase4BreedCards } from "@/lib/phase4-guides";
import { phase12BreedCards } from "@/lib/phase12-guides";
import { phase14BreedCards } from "@/lib/phase14-guides";
import { phase15BreedCards } from "@/lib/phase15-guides";
import { phase25BreedCards } from "@/lib/phase25-breed-lifestyle-guides";
import { phase26BreedCards } from "@/lib/phase26-dog-name-guides";
import { phase27BreedCards } from "@/lib/phase27-fun-guides";
import { getPremiumHubConfig } from "@/lib/premium-hubs";
import { createMetadata } from "@/lib/seo";
import { JsonLd, collectionPageSchema, faqSchema } from "@/lib/schema";

const baseHub = getHub("breeds");
const hubVisual = getPremiumHubConfig("breeds")!;
const hub = {
  ...baseHub,
  cards: [
    ...baseHub.cards,
    ...phase4BreedCards,
    ...phase12BreedCards,
    ...phase14BreedCards,
    ...phase15BreedCards,
    ...phase25BreedCards,
    ...phase26BreedCards,
    ...phase27BreedCards,
  ],
};

export const metadata: Metadata = createMetadata({
  title: hub.seoTitle,
  description: hub.description,
  path: hub.path,
  image: hubVisual.image.src,
  imageAlt: hubVisual.image.alt,
  imageWidth: hubVisual.image.width,
  imageHeight: hubVisual.image.height,
});

export default function BreedsPage() {
  const uniqueCards = Array.from(new Map(hub.cards.filter((card) => card.href !== "/breeds").map((card) => [card.href, card])).values());
  const profiles = [
    { title: "Labrador Retriever", href: "/breeds/labrador-retriever-south-africa", image: "/images/home/south-africa-dog-family-adoption.webp" },
    { title: "Africanis", href: "/breeds/africanis-dog-breed-south-africa", image: "/images/home/south-africa-choosing-dog-hero.webp" },
    { title: "Border Collie", href: "/breeds/border-collie-south-africa", image: "/images/guides/active-dog-owner-south-africa.webp" },
    { title: "Mixed Breed Dogs", href: "/breeds/mixed-breed-dogs-south-africa", image: "/images/hubs/dog-breeds-south-africa.webp" },
  ];

  return (
    <>
      <JsonLd data={collectionPageSchema({ title: hub.title, description: hub.description, path: hub.path })} />
      <JsonLd data={faqSchema(hub.faqs)} />
      <section className="relative isolate min-h-[590px] overflow-hidden text-white">
        <Image src="/images/hubs/dog-breeds-south-africa.webp" alt="South African dog owner with dogs of different sizes" fill priority sizes="100vw" className="object-cover object-center" />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(3,55,45,.96),rgba(3,55,45,.76)_38%,rgba(3,55,45,.08)_76%)]" />
        <div className="section-shell relative flex min-h-[590px] items-center py-16"><div className="max-w-xl"><p className="light-kicker">Breed guides · South Africa</p><h1 className="mt-4 text-5xl font-black leading-[1.01] tracking-tight text-white sm:text-6xl">Find a dog that fits <span className="text-[#f3c76d]">your life.</span></h1><p className="mt-5 max-w-md text-lg leading-8 text-white/88">Compare daily needs, household fit and the time you can offer. Start with the life you share.</p><div className="mt-8 flex flex-wrap gap-3"><Link href="#breed-library" className="primary-light-button">Explore breeds <ArrowRight className="h-4 w-4" /></Link><Link href="#compare" className="secondary-light-button">Compare needs</Link></div></div></div>
      </section>

      <section className="section-shell py-14 sm:py-20"><p className="section-kicker">Popular breed guides in South Africa</p><h2 className="section-title">Meet the possibilities.</h2><p className="section-copy">These guides are starting points, not rankings. Individual health, history and temperament always matter.</p><div className="mt-8 grid gap-5 sm:grid-cols-2">{profiles.map((profile) => <Link key={profile.href} href={profile.href} className="group overflow-hidden rounded-[1.2rem] border border-oat bg-white shadow-panel"><div className="relative aspect-[16/7] overflow-hidden"><Image src={profile.image} alt="" fill sizes="(min-width:640px) 50vw, 100vw" className="object-cover transition duration-500 group-hover:scale-[1.025]" /></div><div className="flex items-center justify-between gap-3 p-5"><h3 className="text-xl font-black text-navy">{profile.title}</h3><span className="inline-flex items-center gap-2 text-sm font-black text-moss">Explore <ArrowRight className="h-4 w-4" /></span></div></Link>)}</div></section>

      <section className="relative isolate overflow-hidden bg-emerald-deep text-white"><Image src="/images/home/south-africa-dog-outdoors-hero.webp" alt="" fill sizes="100vw" className="object-cover opacity-20" /><div className="section-shell relative grid gap-10 py-14 lg:grid-cols-[.82fr_1.18fr] lg:py-20"><div><p className="light-kicker">Choose for your lifestyle</p><h2 className="mt-4 text-4xl font-black leading-tight text-white sm:text-5xl">Start with your everyday life.</h2><p className="mt-5 max-w-md leading-7 text-white/80">Space matters, but so do exercise, training, grooming and the individual dog. Look beyond appearances before choosing.</p></div><div className="grid gap-4 sm:grid-cols-2">{[
        { title: "Your activity level", copy: "Match a breed to your daily routine and energy.", href: "/breeds/best-dogs-for-active-owners-south-africa", icon: Trophy },
        { title: "Your home", copy: "Consider space, neighbours and living environment.", href: "/breeds/best-dogs-for-small-homes-south-africa", icon: Home },
        { title: "Coat care", copy: "Understand grooming needs and maintenance.", href: "/grooming", icon: Scissors },
        { title: "Time together", copy: "Be realistic about daily training and companionship.", href: "/breeds/choosing-the-right-dog-breed-south-africa", icon: Clock3 },
      ].map(({ title, copy, href, icon: Icon }) => <Link key={title} href={href} className="group rounded-[1.25rem] border border-white/35 bg-white/10 p-5 backdrop-blur hover:bg-white/15"><Icon className="h-7 w-7 text-[#f3c76d]" /><h3 className="mt-4 text-lg font-black text-white">{title}</h3><p className="mt-1 text-sm leading-6 text-white/75">{copy}</p><ArrowRight className="mt-4 h-5 w-5 text-[#f3c76d] transition group-hover:translate-x-1" /></Link>)}</div></div></section>

      <section id="compare" className="section-shell scroll-mt-24 py-14 sm:py-20"><div className="flex flex-col justify-between gap-5 lg:flex-row lg:items-end"><div><p className="section-kicker">Compare breeds</p><h2 className="section-title">Compare needs, not just looks.</h2><p className="section-copy">Use the established comparison checklist to work through the commitments that matter. It never assigns invented scores or guarantees.</p></div><Link href="/tools/dog-breed-comparison-checklist" className="secondary-button shrink-0">Open full comparison tool <ArrowRight className="h-4 w-4" /></Link></div><details className="mt-8 overflow-hidden rounded-[1.5rem] border border-oat bg-white shadow-panel"><summary className="flex min-h-14 items-center justify-between px-6 py-4 text-lg font-black text-navy">Use the comparison checklist here <span className="text-moss">+</span></summary><div className="border-t border-oat p-4 sm:p-6"><DogBreedComparisonChecklist /></div></details></section>

      <section className="relative isolate overflow-hidden py-16 text-white"><Image src="/images/guides/dog-adoption-south-africa.webp" alt="Family considering a responsible match with a dog" fill loading="eager" sizes="100vw" className="object-cover object-center" /><div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(3,55,45,.18),rgba(3,55,45,.9)_52%,rgba(3,55,45,.96))]" /><div className="section-shell relative flex justify-end"><div className="max-w-lg"><p className="light-kicker">Responsible dog ownership</p><h2 className="mt-4 text-4xl font-black leading-tight text-white">A good match is an individual match.</h2><p className="mt-4 leading-7 text-white/82">Consider your lifestyle, family and the unique personality of each dog. A well-chosen match leads to happier dogs and happier lives.</p><Link href="/adoption" className="primary-light-button mt-7">Explore responsible adoption <ArrowRight className="h-4 w-4" /></Link></div></div></section>

      <section id="breed-library" className="border-t border-oat bg-white/60"><div className="section-shell py-14 sm:py-20"><div className="flex items-center gap-3"><PawPrint className="h-7 w-7 text-sage" /><p className="section-kicker !m-0">Full breed library</p></div><h2 className="section-title">Explore every breed and lifestyle guide.</h2><p className="section-copy">Search the complete established library. Results are guides, not rankings or guarantees about an individual dog.</p><div className="mt-8"><GuideLibrary items={uniqueCards} label="Search a breed or lifestyle need" /></div></div></section>

      <section className="section-shell py-14"><div className="max-w-4xl"><p className="section-kicker">Common questions</p><h2 className="section-title">Choose thoughtfully, then meet the individual.</h2><div className="mt-7"><FAQBlock items={hub.faqs} /></div></div></section>
    </>
  );
}
