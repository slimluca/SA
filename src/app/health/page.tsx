import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CalendarDays, ShieldAlert, Stethoscope } from "lucide-react";
import { DogHealthCalendar } from "@/components/tools/DogHealthCalendar";
import { FAQBlock } from "@/components/FAQBlock";
import { GuideLibrary } from "@/components/GuideLibrary";
import { getHub } from "@/lib/content";
import { phase3HealthCards } from "@/lib/phase3-guides";
import { phase10HealthCards } from "@/lib/phase10-guides";
import { phase11HealthCards } from "@/lib/phase11-guides";
import { phase14HealthCards } from "@/lib/phase14-guides";
import { phase15HealthCards } from "@/lib/phase15-guides";
import { phase20HealthCards } from "@/lib/phase20-recovery-guides";
import { phase21HealthCards } from "@/lib/phase21-prevention-guides";
import { phase22HealthCards } from "@/lib/phase22-sterilisation-guides";
import { phase23HealthCards } from "@/lib/phase23-chronic-health-guides";
import { phase29HealthSymptomCards } from "@/lib/phase29-health-symptom-guides";
import { getPremiumHubConfig } from "@/lib/premium-hubs";
import { createMetadata } from "@/lib/seo";
import { JsonLd, collectionPageSchema, faqSchema } from "@/lib/schema";

const baseHub = getHub("health");
const hubVisual = getPremiumHubConfig("health")!;
const priorityHealthCards = [
  { title: "Biliary Tick Bite Fever", description: "South African canine babesiosis warning signs and urgent veterinary next steps.", href: "/health/biliary-tick-bite-fever-dogs-south-africa" },
  { title: "Ticks and Fleas", description: "Exposure checks, prevention questions, product safety, and warning signs.", href: "/health/ticks-and-fleas-dogs-south-africa" },
  { title: "Rabies in South Africa", description: "Vaccination duties and urgent dog-owner and human-exposure actions.", href: "/emergency/rabies-south-africa" },
  { title: "When to Take Your Dog to the Vet", description: "A symptom-led guide to same-day and emergency veterinary care.", href: "/health/when-to-take-your-dog-to-the-vet-south-africa" },
  { title: "Dog Vaccination Schedule", description: "Puppy and adult vaccination planning for South African owners.", href: "/health/vaccination-schedule-south-africa" },
];
const allHealthCards = [
  ...priorityHealthCards,
  ...baseHub.cards,
  ...phase3HealthCards,
  ...phase10HealthCards,
  ...phase11HealthCards,
  ...phase14HealthCards,
  ...phase15HealthCards,
  ...phase20HealthCards,
  ...phase29HealthSymptomCards,
  ...phase21HealthCards,
  ...phase22HealthCards,
  ...phase23HealthCards,
];

const uniqueHealthCards = Array.from(
  new Map(
    allHealthCards
      .filter(
        (card) =>
          card.href !== "/health" &&
          card.href !== "/health/dog-ear-infections-south-africa" &&
          card.href !== "/health/dog-drinking-a-lot-of-water-south-africa",
      )
      .map((card) => [card.href, card]),
  ).values(),
);

const groupDefinitions = [
  {
    title: "South Africa priority health guides",
    description: "Start with locally important prevention, exposure, vaccination, and urgent-care guidance.",
    matches: (href: string) => priorityHealthCards.some((card) => card.href === href),
  },
  {
    title: "Start here",
    description: "Use these first for vet decisions, routine planning, and preparing useful information before an appointment.",
    matches: (href: string) =>
      [
        "/emergency",
        "/health/vaccination-schedule-south-africa",
        "/health/when-to-take-your-dog-to-the-vet-south-africa",
        "/health/find-a-vet-south-africa",
        "/health/routine-vet-checkup-for-dogs-south-africa",
        "/health/dog-health-calendar-south-africa",
        "/tools/vet-visit-checklist",
        "/tools/can-my-dog-eat-this",
      ].includes(href),
  },
  {
    title: "Urgent symptoms",
    description: "Recognise warning signs, avoid unsafe home treatment, and know when a veterinary call should not wait.",
    matches: (href: string) =>
      /(toxic-|breathing-fast|seizures|pale-gums|swollen-belly|wont-stand|shaking|drooling|yellow-gums|lethargic|blood-in-urine|coughing)/.test(href),
  },
  {
    title: "Stomach, stool and appetite",
    description: "Sort common digestive signs from red flags and prepare the details your vet may need.",
    matches: (href: string) =>
      /(vomit|diarrh|not-eating|drinking|weight-loss|blood-in-stool|black-tarry|constipation|sensitive-stomach)/.test(href),
  },
  {
    title: "Ticks, fleas, worms and parasites",
    description: "Plan parasite prevention around South African risks and recognise signs that need veterinary care.",
    matches: (href: string) => /(tick|flea|worm|deworm|biliary|scooting|parasite)/.test(href),
  },
  {
    title: "Skin, ears and allergies",
    description: "Work through itching, ear and eye changes, lumps, hot spots, and allergy questions without guessing at a diagnosis.",
    matches: (href: string) =>
      /(scratching|ear-|eye-discharge|eye-problems|skin|hot-spots|allerg)/.test(href),
  },
  {
    title: "Vaccines and prevention",
    description: "Understand vaccine, rabies, identification, and preventive-care questions to discuss with your vet.",
    matches: (href: string) => /(vaccin|rabies|kennel-cough|microchip|id-tags)/.test(href),
  },
  {
    title: "Puppies",
    description: "Build age-appropriate routines for early vet visits, vaccination, deworming, and parasite safety.",
    matches: (href: string) =>
      href.startsWith("/puppy/") || /(deworming-puppies|puppy-checklist)/.test(href),
  },
  {
    title: "Reproductive health and sterilisation",
    description: "Prepare for sterilisation decisions, seasons, pregnancy questions, and responsible breeding boundaries.",
    matches: (href: string) =>
      /(spay|neuter|steril|in-heat|pregnan|unwanted-puppies|breeding)/.test(href),
  },
  {
    title: "Senior dogs and long-term care",
    description: "Plan checkups, daily support, and costs for ageing dogs and long-term health needs.",
    matches: (href: string) => /(senior|chronic)/.test(href),
  },
  {
    title: "Teeth, weight and mobility",
    description: "Use practical guides for dental care, body condition, limping, arthritis, hips, and mobility costs.",
    matches: (href: string) =>
      /(dental|teeth|bad-breath|limping|arthritis|hip-dysplasia|overweight|xray-surgery)/.test(href),
  },
] as const;

const groupedHrefs = new Set<string>();
const healthCardGroups = groupDefinitions.map((group) => {
  const cards = uniqueHealthCards.filter((card) => !groupedHrefs.has(card.href) && group.matches(card.href));
  cards.forEach((card) => groupedHrefs.add(card.href));
  return { title: group.title, description: group.description, cards };
});
void healthCardGroups;

const hub = {
  ...baseHub,
  cards: uniqueHealthCards,
  related: baseHub.related.filter(
    (card) => card.href !== "/emergency" && card.href !== "/health/when-to-take-your-dog-to-the-vet-south-africa",
  ),
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

export default function HealthPage() {
  return (
    <>
      <JsonLd data={collectionPageSchema({ title: hub.title, description: hub.description, path: hub.path })} />
      <JsonLd data={faqSchema(hub.faqs)} />
      <section className="bg-[#f8f4e9]">
        <div className="section-shell grid min-h-[570px] items-center gap-8 py-12 lg:grid-cols-[.78fr_1.22fr] lg:py-0">
          <div className="py-8"><p className="section-kicker">Dog health in South Africa</p><h1 className="mt-3 text-5xl font-black leading-[1.02] tracking-tight text-navy sm:text-6xl">Dog health.<br /><span className="text-[#174c9b]">South African guidance.</span></h1><p className="mt-5 max-w-lg text-lg leading-8 text-bark">Understand everyday care, prepare better questions and know when professional help matters.</p><div className="mt-7 flex flex-wrap gap-3"><Link href="#health-guides" className="primary-button">Explore health guides <ArrowRight className="h-4 w-4" /></Link><Link href="/emergency" className="secondary-button">Emergency guidance <ArrowRight className="h-4 w-4" /></Link></div></div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-[2.3rem_0_2.3rem_2.3rem] shadow-soft lg:-mr-8"><Image src="/images/hubs/dog-health-south-africa.webp" alt="Veterinary professional examining a dog with its owner" fill priority sizes="(min-width:1024px) 58vw, 100vw" className="object-cover" /></div>
        </div>
      </section>

      <section className="bg-emerald-deep text-white"><div className="section-shell flex flex-col gap-5 py-8 sm:flex-row sm:items-center"><span className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full border border-white/30 bg-white/10"><Stethoscope className="h-8 w-8" /></span><div className="flex-1"><h2 className="text-2xl font-black text-white">Worried about your dog? Contact your vet.</h2><p className="mt-1 max-w-3xl text-sm leading-6 text-white/80">This platform provides educational information to help you understand common health concerns and prepare for informed conversations with your veterinarian.</p></div><Link href="/emergency" className="secondary-light-button shrink-0">See emergency signs</Link></div></section>

      <section className="section-shell py-14 sm:py-20"><div className="flex flex-col justify-between gap-5 lg:flex-row lg:items-end"><div><p className="section-kicker">Explore by topic</p><h2 className="section-title">Start with the right question.</h2></div><nav className="flex flex-wrap gap-2" aria-label="Health page topics">{[["Routine care","#routine-care"],["Symptoms","#health-guides"],["Parasites","/health/ticks-and-fleas-dogs-south-africa"],["Food safety","/tools/can-my-dog-eat-this"]].map(([label,href], index) => <Link key={href} href={href} className={`rounded-full px-4 py-2 text-sm font-black ${index === 0 ? "bg-sage text-white" : "border border-oat bg-white text-navy hover:text-moss"}`}>{label}</Link>)}</nav></div>
        <div className="mt-8 grid gap-7 lg:grid-cols-[1.15fr_.85fr]"><div className="relative min-h-[370px] overflow-hidden rounded-[1.5rem]"><Image src="/images/guides/ticks-fleas-dog-check-south-africa.webp" alt="Dog outdoors in South Africa for tick and flea prevention guidance" fill sizes="(min-width:1024px) 58vw, 100vw" className="object-cover" /></div><div className="flex flex-col justify-center"><p className="section-kicker">Featured</p><h3 className="mt-3 text-4xl font-black leading-tight text-[#174c9b]">Ticks, fleas and everyday prevention.</h3><p className="mt-4 leading-7 text-bark">Ticks and fleas are common in many parts of South Africa and can affect your dog&apos;s health. Learn how to reduce risk, recognise early signs and build an effective prevention plan with your vet.</p><Link href="/health/ticks-and-fleas-dogs-south-africa" className="primary-button mt-6 self-start">Explore prevention <ArrowRight className="h-4 w-4" /></Link></div></div>
        <div className="mt-7 grid gap-5 md:grid-cols-2">{[
          { title: "Vaccination planning", copy: "Understand core and lifestyle vaccinations, timing and what may be recommended for dogs in South Africa.", href: "/health/vaccination-schedule-south-africa", image: "/images/guides/dog-vaccination-vet-south-africa.webp" },
          { title: "Everyday wellbeing", copy: "Learn how to monitor your dog's general health, recognise early changes and build healthy daily habits.", href: "/health/when-to-take-your-dog-to-the-vet-south-africa", image: "/images/home/south-africa-dog-health-hero.webp" },
        ].map((item) => <Link key={item.href} href={item.href} className="group overflow-hidden rounded-[1.3rem] border border-oat bg-white shadow-panel"><div className="relative aspect-[16/8]"><Image src={item.image} alt="" fill sizes="(min-width:768px) 50vw, 100vw" className="object-cover transition duration-500 group-hover:scale-[1.02]" /></div><div className="p-5"><h3 className="text-2xl font-black text-[#174c9b]">{item.title}</h3><p className="mt-2 leading-6 text-bark">{item.copy}</p><span className="mt-4 inline-flex items-center gap-2 text-sm font-black text-moss">Explore guide <ArrowRight className="h-4 w-4" /></span></div></Link>)}</div>
      </section>

      <section id="routine-care" className="bg-emerald-deep text-white"><div className="section-shell grid min-w-0 gap-10 py-14 lg:grid-cols-[.72fr_1.28fr] lg:py-20"><div className="min-w-0"><p className="light-kicker">Routine care planning</p><h2 className="mt-4 text-4xl font-black leading-tight text-white">A clearer plan for routine care.</h2><p className="mt-4 leading-7 text-white/80">Use the real Dog Haven health calendar to shape a practical prompt list for your dog&apos;s life stage and lifestyle. Your veterinarian&apos;s advice always comes first.</p><div className="mt-7 flex items-start gap-3 rounded-2xl border border-white/20 bg-white/10 p-4 text-sm leading-6 text-white/80"><CalendarDays className="mt-1 h-5 w-5 shrink-0 text-[#f3c76d]" />The calendar runs privately in your browser and does not create medical reminders or store personal data.</div></div><div className="min-w-0 text-bark"><DogHealthCalendar /></div></div></section>

      <section className="section-shell py-14"><div className="grid gap-8 lg:grid-cols-[1fr_.55fr]"><div><p className="section-kicker">Common questions</p><h2 className="section-title">Useful guidance, with clear boundaries.</h2><div className="mt-7"><FAQBlock items={hub.faqs} /></div></div><aside className="rounded-[1.5rem] border border-oat bg-white p-6 shadow-panel"><ShieldAlert className="h-8 w-8 text-gold" /><h2 className="mt-4 text-xl font-black text-navy">Our health content informs and supports you.</h2><p className="mt-3 text-sm leading-6 text-bark">It does not replace professional veterinary advice, examination, diagnosis or treatment.</p><div className="mt-5 grid gap-1"><Link className="inline-flex min-h-11 items-center rounded-lg text-sm font-black text-moss outline-none hover:underline focus-visible:ring-2 focus-visible:ring-moss" href="/editorial-policy">Editorial policy →</Link><Link className="inline-flex min-h-11 items-center rounded-lg text-sm font-black text-moss outline-none hover:underline focus-visible:ring-2 focus-visible:ring-moss" href="/about">About Dog Haven →</Link><Link className="inline-flex min-h-11 items-center rounded-lg text-sm font-black text-moss outline-none hover:underline focus-visible:ring-2 focus-visible:ring-moss" href="/contact">Contact →</Link></div></aside></div></section>

      <section id="health-guides" className="border-t border-oat bg-white/60"><div className="section-shell py-14 sm:py-20"><p className="section-kicker">Full health guide inventory</p><h2 className="section-title">Keep learning. Keep asking questions.</h2><p className="section-copy">Search the full health library. All established health routes and guidance remain available below.</p><div className="mt-8"><GuideLibrary items={uniqueHealthCards} label="Search symptoms, prevention and routine care" /></div></div></section>
    </>
  );
}
