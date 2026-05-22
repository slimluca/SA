import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ContentLinkCard } from "@/components/ContentLinkCard";
import { DogCostEstimator } from "@/components/DogCostEstimator";
import { FAQBlock } from "@/components/FAQBlock";
import { BreedMatchQuiz } from "@/components/tools/BreedMatchQuiz";
import { ChecklistTool, type ChecklistGroup } from "@/components/tools/ChecklistTool";
import { DogAgeCalculator } from "@/components/tools/DogAgeCalculator";
import { DogFeedingCalculator } from "@/components/tools/DogFeedingCalculator";
import { DogHealthCalendar } from "@/components/tools/DogHealthCalendar";
import { DogNameGenerator } from "@/components/tools/DogNameGenerator";
import { DogSterilisationPlanner } from "@/components/tools/DogSterilisationPlanner";
import { FoodSafetyLookup } from "@/components/tools/FoodSafetyLookup";
import { SeniorDogCareChecklist } from "@/components/tools/SeniorDogCareChecklist";
import { JsonLd, articleSchema, faqSchema } from "@/lib/schema";
import { createMetadata } from "@/lib/seo";
import { getTool, tools, type ToolSlug } from "@/lib/tools-data";

type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};

const checklistGroups: Record<string, ChecklistGroup[]> = {
  "puppy-checklist": [
    { title: "Before puppy arrives", items: ["Choose a vet and save the number.", "Confirm vaccination and deworming records.", "Prepare a safe sleeping area.", "Buy the same food the puppy is currently eating."] },
    { title: "First vet visit", items: ["Book a check soon after arrival.", "Ask about vaccines, rabies, deworming, ticks, and fleas.", "Discuss microchip or ID options.", "Ask what symptoms should be urgent."] },
    { title: "Vaccinations and deworming", items: ["Keep the vaccine card safe.", "Set reminders for next doses.", "Avoid risky public dog areas until your vet advises.", "Ask about safe puppy socialisation."] },
    { title: "Food and bowls", items: ["Use puppy-appropriate food.", "Measure meals.", "Keep fresh water available.", "Avoid sudden food changes."] },
    { title: "Bedding and crate area", items: ["Create a quiet rest area.", "Keep bedding washable.", "Avoid leaving collars on in crates if unsafe.", "Let children know the rest area is calm space."] },
    { title: "Puppy-proofing", items: ["Secure cables and chargers.", "Move medicines, bait, and cleaning products.", "Block stairs, pools, and balcony gaps.", "Remove toxic plants where possible."] },
    { title: "Toilet training", items: ["Plan frequent toilet trips.", "Reward outdoor toileting.", "Clean accidents calmly.", "Avoid punishment for mistakes."] },
    { title: "Safe socialisation", items: ["Introduce sounds gently.", "Meet safe vaccinated dogs only with guidance.", "Keep outings short.", "Avoid overwhelming crowds."] },
    { title: "ID and microchip questions", items: ["Ask your vet about microchipping.", "Use an ID tag.", "Keep contact details current.", "Store adoption or breeder paperwork."] },
    { title: "Puppy scam warning checks", items: ["Avoid pressure payments.", "Check records before paying.", "Be cautious with delivery-only adverts.", "Pause if the story keeps changing."] },
  ],
  "new-dog-shopping-list": [
    { title: "Food basics", items: ["Current food for transition.", "Measuring cup or kitchen scale.", "Safe treats for training.", "Food storage container."] },
    { title: "Bowls", items: ["Water bowl.", "Food bowl.", "Non-slip mat if needed.", "Travel water bowl."] },
    { title: "Collar, harness, lead", items: ["Flat collar with ID tag.", "Comfortable harness if suitable.", "Standard lead.", "Car restraint or carrier."] },
    { title: "Bed and safe space", items: ["Washable bed.", "Crate or pen if appropriate.", "Baby gate for boundaries.", "Quiet rest area."] },
    { title: "Grooming basics", items: ["Brush suited to coat.", "Nail clipper or groomer plan.", "Dog-safe shampoo.", "Towel for muddy days."] },
    { title: "Cleaning supplies", items: ["Enzymatic cleaner.", "Waste bags.", "Old towels.", "Laundry plan for bedding."] },
    { title: "Toys and enrichment", items: ["Safe chew toys.", "Food puzzle.", "Soft toy if suitable.", "Training rewards."] },
    { title: "Vet paperwork", items: ["Vaccination records.", "Microchip details.", "Insurance documents if relevant.", "Emergency vet number."] },
    { title: "Travel safety", items: ["Lead and harness.", "Water bottle.", "Car restraint.", "Waste bags."] },
    { title: "Puppy-specific extras", items: ["Puppy pads only if part of your plan.", "Chew-safe barriers.", "Extra cleaning supplies.", "Puppy class research."] },
  ],
  "vet-visit-checklist": [
    { title: "Symptoms to note", items: ["When symptoms started.", "Whether they are improving or worsening.", "Energy level changes.", "Pain, limping, coughing, itching, or behaviour changes."] },
    { title: "Eating and drinking", items: ["Food eaten today.", "Treats or scraps.", "Water intake changes.", "Any diet change."] },
    { title: "Vomiting or diarrhoea notes", items: ["How many times.", "Colour and consistency.", "Blood or foreign material.", "Photos if useful and safe."] },
    { title: "Medication or supplements", items: ["Current medicines.", "Supplements.", "Tick and flea products.", "Never give human medicine unless a vet says so."] },
    { title: "Vaccination record", items: ["Vaccine card.", "Rabies record.", "Deworming history.", "Previous vet notes if changing clinics."] },
    { title: "Questions to ask", items: ["What signs mean urgent return?", "What should I feed?", "When is follow-up?", "What costs should I expect?"] },
    { title: "Emergency warning signs", items: ["Collapse.", "Trouble breathing.", "Repeated vomiting.", "Seizures or severe weakness."] },
  ],
  "dog-friendly-travel-checklist": [
    { title: "Water", items: ["Fresh water.", "Travel bowl.", "Extra water for hot days.", "Stop often for breaks."] },
    { title: "Leash and harness", items: ["Standard lead.", "Harness or collar.", "ID tag.", "Backup lead if travelling far."] },
    { title: "Vaccination record", items: ["Rabies proof.", "Vaccine card photo.", "Medication details.", "Vet contact details."] },
    { title: "Tick and flea prevention", items: ["Ask vet before high-risk trips.", "Check coat after walks.", "Pack tick remover if trained to use it.", "Watch for biliary signs after trips."] },
    { title: "Heat precautions", items: ["Avoid hot cars.", "Avoid midday walks.", "Check sand and tar heat.", "Plan shade and rest."] },
    { title: "Accommodation rule checks", items: ["Dog policy in writing.", "Fees or deposits.", "Whether dogs may be left alone.", "Garden and fencing safety."] },
    { title: "Beach or park rule checks", items: ["Check official rules.", "Check lead requirements.", "Check seasonal restrictions.", "Respect wildlife and other visitors."] },
    { title: "Waste bags", items: ["Pack more than you expect.", "Use bins properly.", "Do not leave bags behind.", "Clean shared spaces."] },
    { title: "Emergency vet planning", items: ["Save nearby vet details.", "Know after-hours options.", "Carry records.", "Plan transport if your dog is injured."] },
  ],
};

export function generateStaticParams() {
  return tools.map((tool) => ({ slug: tool.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const tool = getTool(slug);

  if (!tool) {
    return {};
  }

  return createMetadata({
    title: tool.seoTitle,
    description: tool.description,
    path: tool.path,
  });
}

function ToolWidget({ slug }: { slug: ToolSlug }) {
  if (slug === "dog-feeding-calculator") return <DogFeedingCalculator />;
  if (slug === "dog-cost-calculator") return <DogCostEstimator />;
  if (slug === "dog-age-calculator") return <DogAgeCalculator />;
  if (slug === "dog-health-calendar") return <DogHealthCalendar />;
  if (slug === "dog-sterilisation-planner") return <DogSterilisationPlanner />;
  if (slug === "senior-dog-care-checklist") return <SeniorDogCareChecklist />;
  if (slug === "dog-breed-match-quiz") return <BreedMatchQuiz />;
  if (slug === "dog-name-generator") return <DogNameGenerator />;
  if (slug === "can-my-dog-eat-this") return <FoodSafetyLookup />;

  return <ChecklistTool groups={checklistGroups[slug] ?? []} />;
}

export default async function ToolPage({ params }: PageProps) {
  const { slug } = await params;
  const tool = getTool(slug);

  if (!tool) {
    notFound();
  }

  return (
    <>
      <JsonLd data={articleSchema({ title: tool.title, description: tool.description, path: tool.path, dateModified: "2026-05-15" })} />
      <JsonLd data={faqSchema(tool.faqs)} />
      <section className="section-shell">
        <Breadcrumbs items={[{ name: "Tools", href: "/tools" }, { name: tool.title, href: tool.path }]} />
        <p className="section-kicker">Free DogHaven tool</p>
        <h1 className="section-title">{tool.title}</h1>
        <p className="section-copy">{tool.intro}</p>
        <div className="mt-6 rounded-2xl border border-honey/45 bg-honey/12 p-5 text-sm leading-6 text-bark">
          <p className="font-black text-cocoa">Educational note</p>
          <p className="mt-1">{tool.note}</p>
        </div>
        <div className="mt-8">
          <ToolWidget slug={tool.slug} />
        </div>
        <div className="mt-12 grid gap-8 lg:grid-cols-[1fr_0.8fr]">
          <section>
            <h2 className="text-2xl font-black text-cocoa">Helpful next guides</h2>
            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              {tool.related.map((card) => (
                <ContentLinkCard key={`${tool.slug}-${card.href}`} {...card} />
              ))}
            </div>
          </section>
          <section>
            <h2 className="text-2xl font-black text-cocoa">Common questions</h2>
            <div className="mt-5">
              <FAQBlock items={tool.faqs} />
            </div>
          </section>
        </div>
      </section>
    </>
  );
}
