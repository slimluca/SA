import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, MapPinned, Wrench } from "lucide-react";
import { FAQBlock } from "@/components/FAQBlock";
import { HomeHero } from "@/components/HomeHero";
import { ProvinceGrid } from "@/components/ProvinceGrid";
import { SearchBox } from "@/components/SearchBox";
import { SourceList } from "@/components/SourceList";
import { TrustBar } from "@/components/TrustBar";
import { categories, featuredGuides, homeFaqs, provinces, sourceLinks, trustItems } from "@/lib/data";
import { homepageMoneyPages, homepagePopularGuides, homepageTools } from "@/lib/promo-links";
import { createMetadata } from "@/lib/seo";
import { JsonLd, faqSchema } from "@/lib/schema";

export const metadata: Metadata = createMetadata({
  title: "Dog Care South Africa | Practical Guides & Free Tools | Dog Haven",
  description:
    "Practical South African dog care guides, free dog tools, puppy help, food safety, symptoms, insurance, dog costs, breeds, adoption and dog-friendly planning.",
  path: "/",
  image: "/images/home/dog-haven-south-africa-hero.webp",
  imageAlt: "Dog and owner walking along a quiet South African coastal path",
  imageWidth: 1536,
  imageHeight: 1024,
});

type EditorialLinkProps = {
  title: string;
  description: string;
  href: string;
  inverse?: boolean;
};

function EditorialLink({ title, description, href, inverse = false }: EditorialLinkProps) {
  return (
    <Link
      href={href}
      className={`group flex items-start justify-between gap-4 border-t py-4 outline-none transition focus-visible:rounded-lg focus-visible:ring-2 ${
        inverse
          ? "border-white/20 text-white focus-visible:ring-white"
          : "border-oat text-cocoa focus-visible:ring-moss"
      }`}
    >
      <span>
        <span className={`block font-black leading-6 ${inverse ? "text-white" : "text-cocoa group-hover:text-moss"}`}>
          {title}
        </span>
        <span className={`mt-1 block text-sm leading-6 ${inverse ? "text-white/80" : "text-bark"}`}>
          {description}
        </span>
      </span>
      <ArrowRight
        className={`mt-1 h-4 w-4 shrink-0 transition-transform group-hover:translate-x-1 ${inverse ? "text-honey" : "text-sage"}`}
        aria-hidden="true"
      />
    </Link>
  );
}

type FeatureLink = {
  title: string;
  description: string;
  href: string;
};

type EditorialFeatureProps = {
  kicker: string;
  title: string;
  paragraphs: string[];
  image: string;
  imageAlt: string;
  links: FeatureLink[];
  imageRight?: boolean;
};

function EditorialFeature({
  kicker,
  title,
  paragraphs,
  image,
  imageAlt,
  links,
  imageRight = false,
}: EditorialFeatureProps) {
  return (
    <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-12">
      <div className={imageRight ? "lg:order-2" : undefined}>
        <div className="relative aspect-[3/2] overflow-hidden rounded-[1.75rem] bg-oat shadow-soft">
          <Image src={image} alt={imageAlt} fill sizes="(min-width: 1024px) 48vw, 100vw" className="object-cover" />
        </div>
      </div>
      <div className={imageRight ? "lg:order-1" : undefined}>
        <p className="section-kicker">{kicker}</p>
        <h2 className="section-title">{title}</h2>
        <div className="mt-5 space-y-4 text-base leading-7 text-bark">
          {paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
        </div>
        <div className="mt-6 grid items-start gap-x-8 sm:grid-cols-2">
          {links.map((link) => <EditorialLink key={link.href} {...link} />)}
        </div>
      </div>
    </div>
  );
}

const extraDestinations = [
  {
    title: "Local Dog Guides",
    description: "Services, climate, outings and practical planning in South African places.",
    href: "/local",
    icon: MapPinned,
  },
  {
    title: "Free Dog Tools",
    description: "Calculators, checklists, quizzes and quick owner lookups.",
    href: "/tools",
    icon: Wrench,
  },
] as const;

const healthLinks: FeatureLink[] = [
  { title: "Dog health", description: "Symptoms, prevention and when veterinary care matters.", href: "/health" },
  { title: "Emergency guidance", description: "Calm next steps for urgent risks and exposures.", href: "/emergency" },
  { title: "Biliary tick bite fever", description: "Recognise locally important warning signs.", href: "/health/biliary-tick-bite-fever-dogs-south-africa" },
  { title: "Rabies in South Africa", description: "Owner actions and urgent human-exposure steps.", href: "/emergency/rabies-south-africa" },
];

const familyLinks: FeatureLink[] = [
  { title: "Breed guides", description: "Compare needs, temperament and household fit.", href: "/breeds" },
  { title: "Dog adoption", description: "Prepare for responsible matching and records.", href: "/adoption" },
  { title: "Puppy care", description: "Plan the first year with realistic routines.", href: "/puppy" },
  { title: "Training", description: "Build useful skills through humane consistency.", href: "/training" },
];

const everydayLinks: FeatureLink[] = [
  { title: "Dog food", description: "Choose and feed with your individual dog in mind.", href: "/food" },
  { title: "Best dog food guide", description: "Assess labels and fit without brand rankings.", href: "/food/best-dog-food-south-africa" },
  { title: "Feeding calculator", description: "Estimate a sensible starting quantity.", href: "/tools/dog-feeding-calculator" },
  { title: "Toxic foods", description: "Check common food risks and urgent warning signs.", href: "/health/toxic-foods-for-dogs-south-africa" },
  { title: "Grooming", description: "Coat, nail, ear and skin-care routines.", href: "/grooming" },
];

const localLinks: FeatureLink[] = [
  { title: "Dog-friendly South Africa", description: "Plan outings with safety and etiquette in mind.", href: "/dog-friendly" },
  { title: "Local guides", description: "Explore practical information by place.", href: "/local" },
  { title: "City guides", description: "Find city-level context where it is available.", href: "/city" },
  { title: "Dog services", description: "Prepare questions before choosing support.", href: "/dog-services" },
  { title: "Dog laws", description: "Understand common owner duties and local rules.", href: "/laws" },
];

export default function HomePage() {
  const destinations = [...categories, ...extraDestinations];

  return (
    <>
      {homeFaqs.length > 0 ? <JsonLd data={faqSchema(homeFaqs)} /> : null}
      <HomeHero />

      <section className="section-shell py-12 sm:py-16">
        <div className="max-w-4xl">
          <p className="section-kicker">A practical place to begin</p>
          <h2 className="section-title">Better dog decisions start with clear local context</h2>
          <div className="mt-5 space-y-4 text-base leading-7 text-bark">
            <p>
              Dog Haven helps South African owners work through real questions about health,
              safety, food, training, adoption, breeds, costs, services and everyday life.
            </p>
            <p>
              Use the guides to understand what matters, what to observe and which questions to
              ask. Individual symptoms, diagnoses and treatments still belong with a veterinarian
              or appropriately qualified professional.
            </p>
            <p>
              Local conditions matter too: heat, parasites, travel distances, housing rules and
              access to care can all change the sensible next step.
            </p>
          </div>
        </div>
        <div className="mt-7 max-w-3xl"><SearchBox /></div>
      </section>

      <section id="explore" className="scroll-mt-24 border-y border-oat bg-white/55">
        <div className="section-shell py-12 sm:py-16">
          <div className="max-w-3xl">
            <p className="section-kicker">Explore Dog Haven</p>
            <h2 className="section-title">Start with the question in front of you</h2>
            <p className="section-copy">
              Move directly into the topic that fits today&apos;s decision. Every pathway leads to a
              focused library of practical guidance.
            </p>
          </div>
          <div className="mt-8 grid items-start gap-x-10 sm:grid-cols-2 lg:grid-cols-3">
            {destinations.map((destination) => {
              const Icon = destination.icon;
              return (
                <Link
                  key={destination.href}
                  href={destination.href}
                  className="group grid grid-cols-[40px_1fr_auto] items-start gap-3 border-t border-oat py-5 outline-none transition focus-visible:rounded-lg focus-visible:ring-2 focus-visible:ring-moss"
                >
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-sage/10 text-moss">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <span>
                    <span className="block font-black leading-6 text-cocoa group-hover:text-moss">{destination.title}</span>
                    <span className="mt-1 block text-sm leading-6 text-bark">{destination.description}</span>
                  </span>
                  <ArrowRight className="mt-1 h-4 w-4 text-sage transition-transform group-hover:translate-x-1" aria-hidden="true" />
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section-shell py-12 sm:py-16 lg:py-20">
        <EditorialFeature
          kicker="Health and emergencies"
          title="Know what can wait, and what should not"
          image="/images/home/south-africa-dog-health-care.webp"
          imageAlt="Dog owner calmly checking a healthy dog's coat and general condition"
          paragraphs={[
            "Everyday observation helps owners notice meaningful changes in appetite, energy, breathing, gums, movement and behaviour. The goal is not home diagnosis; it is a clearer description of what is happening and how quickly it is changing.",
            "South African risks such as biliary, heat exposure and rabies make timing especially important. Poisoning response and vaccination planning also benefit from clear preparation. Emergency guides prioritise immediate safety, professional escalation and the information a clinic may need.",
          ]}
          links={healthLinks}
        />
      </section>

      <section className="border-y border-oat bg-oat/30">
        <div className="section-shell py-12 sm:py-16 lg:py-20">
          <EditorialFeature
            kicker="Choosing and welcoming a dog"
            title="Find the right fit for the household, not the perfect-looking dog"
            image="/images/home/south-africa-dog-family-adoption.webp"
            imageAlt="Family spending calm time with a dog while considering household fit"
            imageRight
            paragraphs={[
              "A strong match considers exercise, noise, grooming, training, children, other animals, housing and the time available every day. Breed tendencies can inform the discussion, but they never replace the temperament and history of the individual dog.",
              "Adoption and puppy guides help families verify records, recognise payment pressure, prepare the home and set realistic expectations for settling in.",
            ]}
            links={familyLinks}
          />
        </div>
      </section>

      <section className="section-shell py-12 sm:py-16 lg:py-20">
        <EditorialFeature
          kicker="Food and everyday care"
          title="Build routines that are sustainable for dog and owner"
          image="/images/home/south-africa-dog-everyday-care.webp"
          imageAlt="Dog owner preparing an everyday care routine for a healthy dog"
          paragraphs={[
            "Food, movement, grooming, parasite prevention and quiet rest all work together. Good routines are consistent enough to notice changes, but flexible enough for age, health, body condition and professional advice.",
            "Dog Haven avoids one-size-fits-all feeding claims and brand rankings. Instead, the guides explain labels, portions, transitions, food safety and useful questions for a veterinary consultation.",
          ]}
          links={everydayLinks}
        />
      </section>

      <section className="bg-sage text-white">
        <div className="section-shell py-12 sm:py-16 lg:py-20">
          <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-12">
            <div>
              <p className="text-sm font-black uppercase tracking-wide text-honey">Costs and insurance</p>
              <h2 className="mt-2 text-3xl font-black leading-tight text-white sm:text-4xl">
                Plan for routine care and the bill you cannot predict
              </h2>
              <div className="mt-5 space-y-4 leading-7 text-white/85">
                <p>
                  Responsible ownership includes recurring food and preventive-care costs, plus a
                  realistic plan for diagnostics, after-hours treatment or hospitalisation.
                </p>
                <p>
                  Compare cover through current policy wording, exclusions, limits, excesses and
                  claim processes. Calculators are planning aids, not quotes or guarantees.
                </p>
              </div>
              <div className="mt-6 grid items-start gap-x-8 sm:grid-cols-2">
                  {homepageMoneyPages.slice(0, 3).map((page) => <EditorialLink key={page.href} {...page} inverse />)}
                  <EditorialLink {...homepageTools[2]} inverse />
              </div>
            </div>
            <div className="relative aspect-[3/2] overflow-hidden rounded-[1.75rem] bg-white/10 shadow-soft">
              <Image
                src="/images/home/south-africa-dog-cost-planning.webp"
                alt="Dog owner planning household costs for responsible dog care"
                fill
                sizes="(min-width: 1024px) 48vw, 100vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="section-shell py-12 sm:py-16 lg:py-20">
        <EditorialFeature
          kicker="Life with dogs in South Africa"
          title="Plan around climate, place and the people you share it with"
          image="/images/home/south-africa-dog-lifestyle.webp"
          imageAlt="Dog and owner enjoying time outdoors in South Africa"
          imageRight
          paragraphs={[
            "A safe outing in one province or season may need different preparation in another. Heat, water, ticks, wildlife, travel distances and access rules all deserve a quick check before the lead goes on.",
              "Local guides also help owners think through rentals, neighbours, public etiquette and the questions to ask a walker, groomer, trainer, sitter or boarding service. Provider details are included only where verified information is available.",
          ]}
          links={localLinks}
        />
      </section>

      <section className="border-y border-oat bg-white/55">
        <div className="section-shell py-12 sm:py-16">
          <div className="max-w-3xl">
            <p className="section-kicker">Free owner tools</p>
            <h2 className="section-title">Estimate, organise and prepare</h2>
            <p className="section-copy">
              Use these quick tools as planning aids, then adjust for your individual dog and
              current professional advice.
            </p>
          </div>
          <div className="mt-7 grid items-start gap-x-10 sm:grid-cols-2">
            {homepageTools.map((tool) => <EditorialLink key={tool.href} {...tool} />)}
          </div>
        </div>
      </section>

      <section className="section-shell py-12 sm:py-16">
        <div className="max-w-3xl">
          <p className="section-kicker">Featured reading</p>
          <h2 className="section-title">South African guides owners reach for first</h2>
          <p className="section-copy">
            Begin with locally important safety, adoption and budgeting guidance, then follow the
            contextual links into more specific decisions.
          </p>
        </div>
        <div className="mt-8 grid gap-6 lg:grid-cols-[1.25fr_0.75fr]">
          <Link href="/health/biliary-tick-bite-fever-dogs-south-africa" className="group overflow-hidden rounded-[1.75rem] border border-oat bg-white shadow-soft">
            <div className="relative aspect-[16/9] overflow-hidden">
              <Image src="/images/guides/biliary-tick-check-dog-south-africa.webp" alt="Owner checking a dog for ticks in South Africa" fill sizes="(min-width: 1024px) 58vw, 100vw" className="object-cover transition duration-500 group-hover:scale-[1.02]" />
            </div>
            <div className="p-6 sm:p-7">
              <p className="section-kicker">Lead health guide</p>
              <h3 className="mt-2 text-2xl font-black text-cocoa group-hover:text-moss">Biliary tick bite fever in dogs</h3>
              <p className="mt-3 leading-7 text-bark">Understand warning signs, why veterinary diagnosis matters and how South African tick exposure changes the conversation.</p>
            </div>
          </Link>
          <div className="grid content-start gap-x-8 sm:grid-cols-2 lg:grid-cols-1">
            {homepagePopularGuides.slice(1).map((guide) => <EditorialLink key={guide.href} {...guide} />)}
          </div>
        </div>
        <div className="mt-8 grid items-start gap-x-10 sm:grid-cols-2">
          {featuredGuides.slice(0, 4).map((guide) => <EditorialLink key={guide.href} title={guide.title} description={guide.description} href={guide.href} />)}
        </div>
      </section>

      <section className="border-y border-oat bg-oat/30">
        <div className="section-shell py-12 sm:py-16">
          <div className="max-w-3xl">
            <p className="section-kicker">Province explorer</p>
            <h2 className="section-title">Dog care varies by place, climate and access</h2>
            <p className="section-copy">
              Weather, tick pressure, travel distances, rental rules, public-space etiquette and
              emergency-care availability all shape responsible planning.
            </p>
          </div>
          <div className="mt-7"><ProvinceGrid provinces={provinces} /></div>
        </div>
      </section>

      <section className="section-shell py-12 sm:py-16">
        <div className="max-w-4xl">
          <p className="section-kicker">Trust and editorial standards</p>
          <h2 className="section-title">Useful guidance with clear boundaries</h2>
          <p className="section-copy">
            Dog Haven combines practical South African context with transparent sourcing and
            correction standards. Medical guidance stays educational and directs owners to
            qualified care when symptoms or risk require it.
          </p>
        </div>
        <div className="mt-7"><TrustBar items={trustItems} /></div>
      </section>

      <section className="border-t border-oat bg-white/55">
        <div className="section-shell space-y-10 py-12 sm:py-16">
          <div className="max-w-4xl">
            <p className="section-kicker">Common questions</p>
            <h2 className="section-title">What Dog Haven can—and cannot—do</h2>
            <p className="section-copy">
              Use the site to prepare, understand and ask better questions, never to delay urgent
              care or treat general information as an individual diagnosis.
            </p>
            <div className="mt-7"><FAQBlock items={homeFaqs} /></div>
          </div>
          <div className="max-w-4xl"><SourceList sources={sourceLinks} /></div>
        </div>
      </section>
    </>
  );
}
