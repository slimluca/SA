import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ContentLinkCard } from "@/components/ContentLinkCard";
import { FAQBlock } from "@/components/FAQBlock";
import { JsonLd, collectionPageSchema, faqSchema } from "@/lib/schema";
import { createMetadata } from "@/lib/seo";

const sections = [
  {
    title: "New puppy owners",
    description: "Start with puppy safety, food, vaccines, training, and first-year costs.",
    links: [
      { title: "Adopting a Puppy", description: "Questions before bringing a puppy home.", href: "/adoption/adopting-a-puppy-south-africa" },
      { title: "Puppy Training", description: "Toilet habits, biting, settling, and socialisation.", href: "/training/puppy-training-south-africa" },
      { title: "Puppy Food", description: "Growth feeding and safe transitions.", href: "/food/puppy-food-south-africa" },
      { title: "Puppy First-Year Cost", description: "Budget for the expensive first year.", href: "/costs/puppy-first-year-cost-south-africa" },
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
      { title: "Dog Food South Africa", description: "Life stage, size, budget, and vet diets.", href: "/food/dog-food-south-africa" },
      { title: "Dog Food Labels", description: "Read food labels without marketing fog.", href: "/food/how-to-read-dog-food-labels-south-africa" },
      { title: "Monthly Dog Costs", description: "Build a realistic South African budget.", href: "/costs/monthly-cost-of-owning-a-dog-south-africa" },
      { title: "Pet Insurance", description: "Understand cover, excesses, and exclusions.", href: "/insurance/pet-insurance-for-dogs-south-africa" },
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
    "A simple starting page for South African dog owners, linking to DogHaven's most useful puppy, adoption, emergency, health, food, cost, training, grooming, lifestyle, province, and city guides.",
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
