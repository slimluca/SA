import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ContentLinkCard } from "@/components/ContentLinkCard";
import { FAQBlock } from "@/components/FAQBlock";
import { JsonLd, collectionPageSchema, faqSchema } from "@/lib/schema";
import { phase20StartHereCards } from "@/lib/phase20-recovery-guides";
import { phase25StartHereCards } from "@/lib/phase25-breed-lifestyle-guides";
import { phase26StartHereCards } from "@/lib/phase26-dog-name-guides";
import { phase27StartHereCards } from "@/lib/phase27-fun-guides";
import { createMetadata } from "@/lib/seo";

const sections = [
  {
    title: "New puppy owners",
    description: "Start with puppy safety, food, vaccines, training, and first-year costs.",
    links: [
      { title: "Puppy Care Hub", description: "First-year puppy guidance for South African homes.", href: "/puppy" },
      { title: "New Puppy Checklist", description: "Records, supplies, safety, and first-week setup.", href: "/puppy/new-puppy-checklist-south-africa" },
      { title: "Puppy Vaccinations", description: "Plan vaccines, rabies, and safe outings with your vet.", href: "/puppy/puppy-vaccination-schedule-south-africa" },
      { title: "Puppy Potty Training", description: "Humane toilet routines for homes, flats, and townhouses.", href: "/puppy/puppy-potty-training-south-africa" },
    ],
  },
  {
    title: "Rescue and adoption",
    description: "Choose carefully, avoid scams, and plan the first week calmly.",
    links: [
      { title: "Dog Adoption South Africa", description: "Shelters, rescue groups, home checks, and records.", href: "/adoption/dog-adoption-south-africa" },
      { title: "Puppy Scam Checklist", description: "Avoid pressure payments and fake adverts.", href: "/adoption/puppy-scam-checklist-south-africa" },
      { title: "Rescue Dog First Week", description: "Set up a calm first week at home.", href: "/adoption/rescue-dog-first-week-home-south-africa" },
      { title: "Questions Before Adopting", description: "Ask better matching questions.", href: "/adoption/questions-to-ask-before-adopting-a-dog" },
      ...phase25StartHereCards,
    ],
  },
  {
    title: "Emergency help",
    description: "Know when a symptom should not wait and what to say when phoning a vet.",
    links: [
      { title: "Emergency Hub", description: "Start here for urgent dog-care guidance.", href: "/emergency" },
      { title: "Dog Poisoning", description: "What to do if poisoning is possible.", href: "/emergency/dog-poisoning-south-africa" },
      { title: "Heatstroke", description: "Hot-weather emergency warning signs.", href: "/emergency/heatstroke-in-dogs-south-africa" },
      { title: "When to Take Your Dog to the Vet", description: "Symptom-led vet decision guide.", href: "/health/when-to-take-your-dog-to-the-vet-south-africa" },
    ],
  },
  {
    title: "Health and vaccinations",
    description: "Build a prevention routine and recognise red flags earlier.",
    links: [
      { title: "Dog Health Hub", description: "Prevention, symptoms, and vet context.", href: "/health" },
      { title: "Vaccination Schedule", description: "Core vaccines and rabies planning.", href: "/health/vaccination-schedule-south-africa" },
      { title: "Ticks and Fleas", description: "Year-round parasite prevention.", href: "/health/ticks-and-fleas-dogs-south-africa" },
      { title: "Toxic Foods", description: "Common foods that can harm dogs.", href: "/health/toxic-foods-for-dogs-south-africa" },
    ],
  },
  {
    title: "Food and costs",
    description: "Choose practical feeding plans and budget before expenses become stressful.",
    links: [
      { title: "Choose Dog Food", description: "Life stage, size, budget, and vet-guided choices.", href: "/food/how-to-choose-dog-food-south-africa" },
      { title: "Feeding Calculator", description: "Estimate daily feeding as a starting point.", href: "/tools/dog-feeding-calculator" },
      { title: "Dog Cost Calculator", description: "Estimate a realistic monthly planning range.", href: "/costs/dog-cost-calculator-south-africa" },
      { title: "Compare Dog Insurance", description: "Understand premiums, excesses, limits, and exclusions.", href: "/insurance/compare-dog-insurance-south-africa" },
      ...phase20StartHereCards,
    ],
  },
  {
    title: "Free tools",
    description: "Use simple calculators, checklists, quizzes, name ideas, and food safety lookups without logins or personal data.",
    links: [
      { title: "Tools Hub", description: "All free DogHaven tools in one place.", href: "/tools" },
      { title: "Dog Age Calculator", description: "Estimate broad life stage reminders.", href: "/tools/dog-age-calculator" },
      { title: "Breed Match Quiz", description: "Explore broad responsible breed categories.", href: "/tools/dog-breed-match-quiz" },
      { title: "Breed Comparison Checklist", description: "Compare breed care needs before choosing.", href: "/tools/dog-breed-comparison-checklist" },
      { title: "Can My Dog Eat This?", description: "Quick safety lookup for common foods.", href: "/tools/can-my-dog-eat-this" },
      ...phase26StartHereCards,
      ...phase27StartHereCards,
    ],
  },
  {
    title: "Training and grooming",
    description: "Make everyday life calmer, safer, cleaner, and kinder.",
    links: [
      { title: "Dog Training South Africa", description: "Humane everyday training foundations.", href: "/training/dog-training-south-africa" },
      { title: "Behaviour Problems", description: "Barking, chewing, fear, and reactivity.", href: "/training/dog-behaviour-problems-south-africa" },
      { title: "Dog Grooming South Africa", description: "Coat, nails, ears, paws, and ticks.", href: "/grooming/dog-grooming-south-africa" },
      { title: "Choose a Groomer", description: "Safety questions before booking.", href: "/grooming/how-to-choose-a-dog-groomer-south-africa" },
    ],
  },
  {
    title: "Dog-friendly lifestyle",
    description: "Plan outings, beaches, parks, travel, accommodation, and hikes safely.",
    links: [
      { title: "Dog-Friendly Places", description: "Verify rules before outings.", href: "/dog-friendly/dog-friendly-places-south-africa" },
      { title: "Dog Parks", description: "Etiquette, safety, and when to leave.", href: "/dog-friendly/dog-parks-south-africa" },
      { title: "Travelling With Dogs", description: "Road trips, heat, records, and stops.", href: "/dog-friendly/travelling-with-dogs-south-africa" },
      { title: "Dog-Friendly Beaches", description: "Beach rules, heat, tides, and salt water.", href: "/dog-friendly/dog-friendly-beaches-south-africa" },
    ],
  },
  {
    title: "Rules and responsible ownership",
    description: "Check local dog rules, rabies responsibilities, barking complaints, rentals, complexes, leads, and beach access.",
    links: [
      { title: "Dog Laws Hub", description: "Plain-English rule checks for South African dog owners.", href: "/laws" },
      { title: "Dog Laws South Africa", description: "What to check before relying on any dog rule.", href: "/laws/dog-laws-south-africa" },
      { title: "Rabies Vaccination Law", description: "Records, bites, travel, and vet questions.", href: "/laws/rabies-vaccination-law-south-africa" },
      { title: "Complexes and Rentals", description: "Written permission, conduct rules, and neighbour issues.", href: "/laws/dogs-in-complexes-and-sectional-title-south-africa" },
    ],
  },
  {
    title: "Province and city guides",
    description: "Use local context for climate, rules, travel, emergency access, and daily care.",
    links: [
      { title: "Province Guides", description: "Dog care by South African province.", href: "/province" },
      { title: "City Guides", description: "Local guidance for major cities.", href: "/city" },
      { title: "Western Cape", description: "Coastal, mountain, and city dog-care context.", href: "/province/western-cape" },
      { title: "Gauteng", description: "Urban, traffic, estate, and thunderstorm planning.", href: "/province/gauteng" },
    ],
  },
];

const faqs = [
  {
    question: "Where should a new DogHaven reader start?",
    answer:
      "Start with the section that matches your immediate question: puppy, adoption, emergency, health, food, costs, training, grooming, dog-friendly lifestyle, or local guides.",
  },
  {
    question: "Does DogHaven replace professional advice?",
    answer:
      "No. DogHaven is educational. Urgent symptoms need a veterinarian, behaviour danger needs qualified help, and insurance or cost decisions should be checked directly with providers.",
  },
  {
    question: "Are DogHaven local pages directories?",
    answer:
      "No. DogHaven does not publish unverified listings. Local pages help owners know what to ask and what to verify directly.",
  },
];

export const metadata: Metadata = createMetadata({
  title: "Start Here | DogHaven South Africa",
  description:
    "A simple starting page for South African dog owners, linking to DogHaven's most useful puppy, adoption, emergency, health, food, tools, cost, training, grooming, lifestyle, rules, province, and city guides.",
  path: "/start-here",
});

export default function StartHerePage() {
  return (
    <>
      <JsonLd
        data={collectionPageSchema({
          title: "Start Here",
          description: "A practical starting point for South African dog owners using DogHaven.",
          path: "/start-here",
        })}
      />
      <JsonLd data={faqSchema(faqs)} />
      <section className="section-shell">
        <Breadcrumbs items={[{ name: "Start Here", href: "/start-here" }]} />
        <p className="section-kicker">Start here</p>
        <h1 className="section-title">Find the right DogHaven guide faster</h1>
        <p className="section-copy">
          DogHaven is built for practical South African dog ownership. Use this page to jump to the
          most useful guides for your dog, your home, and the decision in front of you.
        </p>

        <div className="mt-10 space-y-12">
          {sections.map((section) => (
            <section key={section.title}>
              <h2 className="text-2xl font-black text-cocoa">{section.title}</h2>
              <p className="mt-2 max-w-3xl leading-7 text-bark">{section.description}</p>
              <div className="mt-5 grid items-stretch gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {section.links.map((link) => (
                  <ContentLinkCard key={`${section.title}-${link.title}`} {...link} />
                ))}
              </div>
            </section>
          ))}
        </div>

        <section className="mt-12">
          <h2 className="text-2xl font-black text-cocoa">Common questions</h2>
          <div className="mt-5">
            <FAQBlock items={faqs} />
          </div>
        </section>
      </section>
    </>
  );
}
