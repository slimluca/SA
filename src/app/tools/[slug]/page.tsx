import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ContentLinkCard } from "@/components/ContentLinkCard";
import { DogCostEstimator } from "@/components/DogCostEstimator";
import { FAQBlock } from "@/components/FAQBlock";
import { BreedMatchQuiz } from "@/components/tools/BreedMatchQuiz";
import { ChecklistTool, type ChecklistGroup } from "@/components/tools/ChecklistTool";
import { DogAgeCalculator } from "@/components/tools/DogAgeCalculator";
import { DogBreedComparisonChecklist } from "@/components/tools/DogBreedComparisonChecklist";
import { DogFeedingCalculator } from "@/components/tools/DogFeedingCalculator";
import { DogHealthCalendar } from "@/components/tools/DogHealthCalendar";
import { DogNameGenerator } from "@/components/tools/DogNameGenerator";
import { DogSterilisationPlanner } from "@/components/tools/DogSterilisationPlanner";
import { FoodSafetyLookup } from "@/components/tools/FoodSafetyLookup";
import {
  DogCareRoutineBuilder,
  DogFriendlyTripChecklist,
  DogPersonalityQuiz,
  DogWalkPlanner,
  PuppyReadinessQuiz,
  WeeklyDogCarePlanner,
} from "@/components/tools/FunEngagementTools";
import { PrintableChecklistTool } from "@/components/tools/PrintableChecklistTool";
import { PuppyNameShortlist } from "@/components/tools/PuppyNameShortlist";
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
  if (slug === "dog-breed-comparison-checklist") return <DogBreedComparisonChecklist />;
  if (slug === "dog-breed-match-quiz") return <BreedMatchQuiz />;
  if (slug === "dog-name-generator") return <DogNameGenerator />;
  if (slug === "puppy-name-shortlist") return <PuppyNameShortlist />;
  if (slug === "new-puppy-home-checklist") return <PrintableChecklistTool type="puppy" />;
  if (slug === "dog-care-printable-checklist") return <PrintableChecklistTool type="care" />;
  if (slug === "dog-personality-quiz") return <DogPersonalityQuiz />;
  if (slug === "puppy-readiness-quiz") return <PuppyReadinessQuiz />;
  if (slug === "dog-care-routine-builder") return <DogCareRoutineBuilder />;
  if (slug === "weekly-dog-care-planner") return <WeeklyDogCarePlanner />;
  if (slug === "dog-walk-planner") return <DogWalkPlanner />;
  if (slug === "dog-friendly-trip-checklist") return <DogFriendlyTripChecklist />;
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
      <section className="bg-emerald-deep text-white">
        <div className="section-shell py-10 sm:py-14">
          <div className="[&_a]:text-white/75 [&_span]:text-white/70"><Breadcrumbs items={[{ name: "Tools", href: "/tools" }, { name: tool.title, href: tool.path }]} /></div>
          <p className="light-kicker">Free Dog Haven tool</p>
          <h1 className="mt-4 max-w-3xl text-4xl font-black leading-[1.05] tracking-tight text-white sm:text-5xl">{tool.title}</h1>
          <p className="mt-5 max-w-2xl text-base leading-7 text-white/80 sm:text-lg">{tool.intro}</p>
        </div>
      </section>
      <div className="section-shell py-10 sm:py-14">
        <div className="rounded-2xl border border-honey/45 bg-honey/12 p-5 text-sm leading-6 text-bark">
          <p className="font-black text-cocoa">Educational note</p>
          <p className="mt-1">{tool.note}</p>
        </div>
        <div className="mt-6 rounded-[1.5rem] border border-oat bg-white p-3 shadow-panel sm:p-5">
          <ToolWidget slug={tool.slug} />
        </div>
        {tool.slug === "dog-cost-calculator" ? (
          <section className="mt-10" aria-labelledby="cost-calculator-guidance">
            <p className="section-kicker">Use the estimate well</p>
            <h2 id="cost-calculator-guidance" className="section-title">What the dog cost calculator includes</h2>
            <p className="section-copy">
              The result is a planning range built from the choices you enter. It is not a national average, provider quote, or prediction of veterinary needs.
            </p>
            <div className="mt-7 grid gap-5 md:grid-cols-2">
              <article className="rounded-[1.25rem] border border-oat bg-white p-6 shadow-panel">
                <h3 className="text-xl font-black text-navy">Use current local inputs</h3>
                <p className="mt-3 leading-7 text-bark">
                  Enter the food, grooming, training, insurance, parasite-control, service, and routine-care amounts that apply to your dog and area. South African prices vary by city, suburb, dog size, health, provider, and what a quote includes.
                </p>
              </article>
              <article className="rounded-[1.25rem] border border-oat bg-white p-6 shadow-panel">
                <h3 className="text-xl font-black text-navy">Read each input as a monthly allowance</h3>
                <p className="mt-3 leading-7 text-bark">
                  For costs that arrive annually or occasionally, divide the expected yearly total by twelve. This can include check-ups, vaccinations, equipment replacement, licence or property costs where applicable, boarding, and planned dental care.
                </p>
              </article>
              <article className="rounded-[1.25rem] border border-oat bg-white p-6 shadow-panel">
                <h3 className="text-xl font-black text-navy">Interpret the result as a budget check</h3>
                <p className="mt-3 leading-7 text-bark">
                  Compare the estimate with recent bank statements and written quotes. If the total is higher than expected, review optional services separately from welfare essentials and ask professionals about safe, realistic alternatives.
                </p>
              </article>
              <article className="rounded-[1.25rem] border border-oat bg-white p-6 shadow-panel">
                <h3 className="text-xl font-black text-navy">Keep emergencies separate</h3>
                <p className="mt-3 leading-7 text-bark">
                  A routine monthly estimate cannot predict injury, illness, diagnostics, hospitalisation, or chronic care. Add an emergency-savings plan and, if considering insurance, check waiting periods, exclusions, limits, excesses, and whether upfront payment may be required.
                </p>
              </article>
            </div>
          </section>
        ) : null}
        <section className="mt-8">
          <h2 className="text-2xl font-black text-cocoa">Helpful next guides</h2>
          <div className="mt-4 grid items-stretch gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {tool.related.map((card) => (
              <ContentLinkCard key={`${tool.slug}-${card.href}`} {...card} />
            ))}
          </div>
        </section>

        <section className="mt-8 max-w-4xl">
          <h2 className="text-2xl font-black text-cocoa">Common questions</h2>
          <div className="mt-4">
            <FAQBlock items={tool.faqs} />
          </div>
        </section>
      </div>
    </>
  );
}
