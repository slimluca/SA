import type { CardLink, GuideContent } from "@/lib/content";
import rawRecords from "@/data/south-africa-dog-cost-examples.json";

export const costReportPath = "/costs/south-africa-dog-ownership-cost-report";
export const costReportCsvPath = "/data/south-africa-dog-cost-examples.csv";
export const costReportPdfPath = "/downloads/south-africa-dog-ownership-cost-report.pdf";

export type CostExample = {
  category: string;
  subcategory: string;
  provider: string;
  city: string;
  province: string;
  price_zar: number;
  price_basis: string;
  source_url: string;
  date_checked: string;
  notes: string;
};

export const costExamples = rawRecords as CostExample[];
export const costReportRecordCount = costExamples.length;

export const costReportCards: CardLink[] = [
  {
    title: "South African Dog Ownership Cost Report",
    description: "Explore 46 current public price examples and build a dog-care budget without relying on a fake national average.",
    href: costReportPath,
  },
];

function formatRand(value: number) {
  return new Intl.NumberFormat("en-ZA", {
    style: "currency",
    currency: "ZAR",
    minimumFractionDigits: Number.isInteger(value) ? 0 : 2,
  }).format(value);
}

function examplesFor(category: string, limit: number) {
  return costExamples
    .filter((record) => record.category === category)
    .slice(0, limit)
    .map((record) => [
      record.subcategory,
      formatRand(record.price_zar),
      record.price_basis,
      record.city,
      record.provider,
    ]);
}

const insuranceValues = costExamples
  .filter((record) => record.category === "Insurance")
  .map((record) => record.price_zar)
  .sort((a, b) => a - b);
const insuranceMedian = insuranceValues[Math.floor(insuranceValues.length / 2)];

export const costReportGuide: GuideContent = {
  slug: "south-africa-dog-ownership-cost-report",
  path: costReportPath,
  hubTitle: "Dog Costs",
  hubPath: "/costs",
  title: "South African Dog Ownership Cost Report",
  seoTitle: "South African Dog Ownership Cost Report | Public Price Data",
  description:
    "A transparent South African dog-cost report using 46 current public price examples, a downloadable CSV dataset and printable ownership budget worksheet.",
  intro:
    "Dog ownership does not have one honest national price tag. This report records current public examples from South African retailers, veterinary practices, groomers, trainers, boarding services, welfare organisations and insurers, then shows how to turn those examples into a budget for an individual dog.",
  updated: "2026-08-10",
  primaryImage: {
    src: "/images/guides/south-africa-dog-ownership-cost-report.png",
    alt: "Dog owner reviewing household costs for caring for a dog in South Africa",
    width: 1200,
    height: 630,
  },
  downloadAsset: {
    href: costReportPdfPath,
    label: "Download the dog ownership cost report and worksheet",
    description:
      "Print the research summary, compare the public examples and complete the blank monthly budget for your own dog. No email address or signup is required.",
    fileType: "PDF, 11 A4 pages",
  },
  dataAsset: {
    href: costReportCsvPath,
    label: "Download the public price dataset",
    description: "A machine-readable CSV containing every published example, source URL, location, unit, note and checked date.",
    fileType: "CSV, 46 records",
  },
  dataset: {
    name: "South African Dog Cost Public Price Examples",
    description:
      "A curated dataset of 46 publicly listed South African dog ownership price examples checked on 10 August 2026.",
    distributionPath: costReportCsvPath,
    recordCount: costReportRecordCount,
    dateChecked: "2026-08-10",
  },
  originalResource: {
    label: "Research resource",
    summary:
      "Produced by Dog Haven South Africa from a dated collection of public provider and retailer prices. The report, methodology, source-linked dataset and blank planning worksheet are available without signup.",
    citation:
      "Dog Haven South Africa. South African Dog Ownership Cost Report. Dog Haven, August 2026.",
    shareLabel: "Copy report link",
  },
  quickFacts: [
    "The dataset contains 46 public price records across eight cost categories, checked on 10 August 2026.",
    "The examples cover Gauteng, Western Cape, KwaZulu-Natal, Free State and national online retail, but they are not a statistically representative national sample.",
    `Nine insurer-published starting premiums ran from ${formatRand(insuranceValues[0])} to ${formatRand(insuranceValues.at(-1) ?? 0)}; the sample median was ${formatRand(insuranceMedian)}. These are starting prices, not personalised quotes or equivalent cover.`,
    "Dog size changes food use, weight-based parasite products, grooming effort, boarding bands and some veterinary procedures, so owners should calculate from their own dog rather than copy a headline total.",
    "No emergency-treatment estimate is published because consultation, diagnostics, medication, surgery and hospitalisation depend on the case.",
  ],
  sections: [
    {
      heading: "About this data",
      body: [
        "Dog Haven South Africa collected 46 public-price examples on 10 August 2026. The sample covers Gauteng, Western Cape, KwaZulu-Natal, Free State and national online listings across eight dog-ownership cost categories.",
        "This is a dated, purposive sample rather than a national average. Prices are recorded as displayed and can change; unlike services are kept separate. Eastern Cape was omitted because sufficiently current public pricing was not available during this collection period.",
      ],
      table: {
        headers: ["Field", "Report scope"],
        rows: [
          ["Produced by", "Dog Haven South Africa"],
          ["Collected", "10 August 2026"],
          ["Sample", "46 public-price examples across eight categories"],
          ["Coverage", "Gauteng, Western Cape, KwaZulu-Natal, Free State and national online listings"],
          ["Excluded", "Private quotes and Eastern Cape listings without sufficiently current public pricing"],
          ["Interpretation", "Not a national average; prices change and unlike services are not averaged"],
        ],
      },
    },
    {
      heading: "Executive summary and key findings",
      body: [
        "Public prices varied even before differences in dog size, service scope and location were considered. The same broad category can contain services that are not interchangeable: a wash-only appointment is not a full groom, a five-lesson club course is not a private behaviour consultation, and accident-only insurance is not comprehensive illness cover.",
        "The strongest planning method is to record an actual bag price and how long that bag lasts, request local veterinary and service quotes, compare insurance policy wording alongside the premium, and convert annual or occasional expenses into a monthly provision. The report avoids presenting a single national average because this sample cannot support one.",
      ],
      table: {
        headers: ["Comparable public sample", "Observed examples", "Important limit"],
        rows: [
          ["Vitalvet annual dog vaccination across three listed branches", "R325-R450; sample median R375", "One provider group; confirm inclusions and current branch price"],
          ["Pampered Paws full grooms across listed size and coat groups", "R225-R450; sample median R312.50", "One Cape Town provider; coat condition and extras can change price"],
          ["Insurer-published plan starting premiums", "R80-R430 per month; sample median R219", "Nine unlike plans from two insurers; personalised premiums vary"],
          ["Selected group puppy-course examples", "R500-R1,480 per course", "Course length, location and structure differ; no median comparison used"],
          ["Selected standard boarding examples", "R130-R350 per day or night", "Size, season, stay length, facility and inclusions differ"],
        ],
      },
    },
    {
      heading: "How the research was done",
      body: [
        "Dog Haven collected prices visible on public provider or retailer pages on 10 August 2026, preferring direct official pages to aggregators. Each record stores the provider, location where relevant, listed amount, published unit, price basis, direct source URL, checked date and a note explaining a promotion, size band or service limitation.",
        "The sample was deliberately curated rather than inflated with near-duplicate products. Public prices were available for four provinces and national online retail. Suitable current Eastern Cape public examples were not found during this collection period, so none were invented or copied from an unverified aggregator.",
        "Promotional prices are labelled as promotions. A range endpoint is labelled when a provider publishes a range. Prices can change after the checked date, and inclusion in the dataset is not an endorsement or ranking. Unlike services are not averaged; sample medians are used only for narrowly comparable records and are labelled with their limits. Planning scenarios leave unsupported totals blank instead of fabricating a national amount.",
      ],
      checklist: [
        "Official provider, welfare organisation, clinic or retailer page",
        "Price visible without requesting a private quote",
        "Service or product unit recorded",
        "Location recorded when the service is local",
        "Promotion, starting price or range status disclosed",
        "Direct source URL and 2026-08-10 checked date retained",
      ],
    },
    {
      heading: "Initial setup costs",
      body: [
        "Setup begins with the individual dog's needs, not a shopping list copied from another household. Adoption fees may already include sterilisation, vaccination, parasite treatment, microchipping or identification, while a separate purchase may not. Compare what is included before adding every item again.",
        "Beds, carriers, harnesses, gates and bowls vary by dog size and home. Retail examples are useful anchors, but dimensions, durability and safety matter more than choosing the cheapest listing.",
      ],
      table: {
        headers: ["Public example", "Listed price", "Basis", "Location", "Source"],
        rows: examplesFor("Initial setup", 6),
      },
    },
    {
      heading: "Food and everyday essentials",
      body: [
        "Food cost should be calculated from a product that suits the dog's life stage and veterinary needs. Record the pack price, weigh or measure actual use, and track how many days the pack lasts. A useful monthly conversion is pack price multiplied by 365, divided by days the pack lasts, then divided by 12.",
        "The three food records show why pack size and product definition must stay attached to every price. They are retail examples, not brand rankings. Treats, dental products, waste bags and replacement toys should be separate owner-entered lines rather than hidden inside a vague food allowance.",
      ],
      table: {
        headers: ["Public example", "Listed price", "Basis", "Location", "Source"],
        rows: examplesFor("Food", 3),
      },
      links: [
        { title: "Dog food hub", description: "Compare life stage, labels, portions and transitions without affiliate rankings.", href: "/food" },
      ],
    },
    {
      heading: "Routine veterinary and prevention planning",
      body: [
        "Public veterinary prices are unusually scarce. The report includes one provider group's listed vaccination, consultation and microchip examples, while making no claim that these are city or national averages. Ask the clinic what a price includes and whether examination, vaccine, consumables, registration or follow-up are separate.",
        "Parasite products are weight-specific and differ in coverage and duration. The retail amounts in the dataset are shopping examples, not medical recommendations. A veterinarian should guide the product and schedule for the dog's weight, age, health and exposure risk.",
      ],
      table: {
        headers: ["Public example", "Listed price", "Basis", "Location", "Source"],
        rows: [...examplesFor("Routine veterinary", 4), ...examplesFor("Parasite prevention", 3)],
      },
    },
    {
      heading: "Professional grooming",
      body: [
        "Size is only one grooming cost driver. Coat type, matting, behaviour, hand-scissoring, de-shedding, travel and frequency can change the quote. The Cape Town sample keeps one provider's service definition consistent across size and coat groups, which makes it suitable for a narrow observed range chart.",
        "The observed R225-R450 full-groom range and R312.50 sample median belong to six listings from one provider. They should not be relabelled as a Cape Town or South African average.",
      ],
      table: {
        headers: ["Public example", "Listed price", "Basis", "Location", "Source"],
        rows: examplesFor("Grooming", 7),
      },
      links: [
        { title: "Grooming hub", description: "Plan coat care and learn what to ask before booking.", href: "/grooming" },
      ],
    },
    {
      heading: "Training",
      body: [
        "The training sample contains group puppy courses and monthly group tuition. Course length, class size, trainer qualifications, methods and owner support differ, so the report preserves the service basis rather than forcing an average.",
        "A low headline fee is poor value if the approach relies on fear, pain or intimidation. Ask how owners participate, what happens when a dog is fearful or reactive, and whether a behaviour case needs a suitably qualified professional rather than a general class.",
      ],
      table: {
        headers: ["Public example", "Listed price", "Basis", "Location", "Source"],
        rows: examplesFor("Training", 5),
      },
      links: [
        { title: "Training hub", description: "Humane training foundations and provider questions.", href: "/training" },
      ],
    },
    {
      heading: "Insurance",
      body: [
        "The dataset records nine insurer-published starting premiums from Oneplan and dotsure.co.za. The observed range is R80-R430 per pet per month and the sample median is R219. Those numbers compare starting prices, not equivalent protection, and they are not personalised premiums.",
        "A useful comparison includes the excess, co-payment, annual and per-event limits, sub-limits, waiting periods, exclusions, pre-existing-condition rules, hereditary or congenital cover, routine-care benefits and claims process. Request a quote for the actual dog and retain the policy wording used for the decision.",
      ],
      table: {
        headers: ["Public example", "Listed price", "Basis", "Location", "Source"],
        rows: examplesFor("Insurance", 9),
      },
      links: [
        { title: "Compare dog insurance", description: "Work through premiums, excesses, limits and exclusions.", href: "/insurance/compare-dog-insurance-south-africa" },
        { title: "Insurance hub", description: "Read the wider policy-planning guides.", href: "/insurance" },
      ],
    },
    {
      heading: "Boarding, daycare and pet-care services",
      body: [
        "Boarding prices may change by dog size, season, stay length, social compatibility, medication needs and accommodation type. Daycare may require an assessment or minimum attendance. The public examples therefore retain their specific units instead of being merged into one average.",
        "Travel planning should include food, transport, assessment visits, peak surcharges and the possibility that a dog cannot safely join group care. A sitter, walker or home-care service without reliable public pricing remains a user-entered quote in the worksheet.",
      ],
      table: {
        headers: ["Public example", "Listed price", "Basis", "Location", "Source"],
        rows: examplesFor("Boarding and daycare", 6),
      },
    },
    {
      heading: "Unexpected and emergency costs",
      body: [
        "A routine consultation price cannot predict the cost of an emergency. Diagnostics, medication, surgery, oxygen, specialist care, hospitalisation and after-hours staffing depend on the case. This report does not fabricate an emergency-treatment range.",
        "Owners can plan with an emergency-fund contribution, appropriate insurance, access to available credit or a combination. Record the method, realistic limit and clinic payment requirements before an emergency. The amount remains an owner-selected assumption, not a researched national figure.",
      ],
      links: [
        { title: "Printable emergency checklist", description: "Record clinic, transport, insurance and handover information.", href: "/emergency/dog-emergency-checklist-south-africa" },
        { title: "Monthly dog costs", description: "Build routine and irregular provisions into one plan.", href: "/costs/monthly-cost-of-owning-a-dog-south-africa" },
      ],
    },
    {
      heading: "Small, medium and large dog planning scenarios",
      body: [
        "These scenarios identify cost drivers; they do not assign invented monthly totals. Select researched inputs from the dataset where the product or service genuinely matches, then replace every remaining field with the owner's quote or assumption.",
      ],
      table: {
        headers: ["Planning field", "Small dog", "Medium dog", "Large dog"],
        rows: [
          ["Food", "Chosen pack price ÷ actual months used", "Chosen pack price ÷ actual months used", "Chosen pack price ÷ actual months used"],
          ["Parasite prevention", "Vet-selected small weight band", "Vet-selected medium weight band", "Vet-selected large weight band"],
          ["Routine veterinary provision", "Local annual plan ÷ 12", "Local annual plan ÷ 12", "Local annual plan ÷ 12"],
          ["Grooming", "Coat service × yearly frequency ÷ 12", "Coat service × yearly frequency ÷ 12", "Coat service × yearly frequency ÷ 12"],
          ["Insurance", "Personalised quote", "Personalised quote", "Personalised quote"],
          ["Boarding or daycare", "Own expected days × current rate", "Own expected days × current rate", "Own expected days × current rate"],
          ["Emergency provision", "Owner-selected contribution", "Owner-selected contribution", "Owner-selected contribution"],
        ],
      },
    },
    {
      heading: "How location changes the plan",
      body: [
        "The sample shows provider-level variation, but it is too small and uneven to rank cities. Cape Town contributes more public listings because more providers exposed current prices online. That is a data-availability effect, not proof that the city is more or less expensive.",
        "Travel distance matters where after-hours veterinary care, specialist services, boarding or retail delivery is limited. Add fuel, tolls, delivery and time where they materially affect the household plan. Keep those values local rather than assuming a national amount.",
      ],
      bullets: [
        "Gauteng: Johannesburg, Pretoria and Pretoria Rural examples",
        "Western Cape: Cape Town, George and Mossel Bay examples",
        "KwaZulu-Natal: Durban, Umhlanga and Pietermaritzburg-area examples",
        "Free State: Bloemfontein examples",
        "National: insurer and online-retail examples",
        "Eastern Cape: no sufficiently current public sample included in this collection",
      ],
    },
    {
      heading: "Build your own monthly budget",
      body: [
        "Use monthly amounts for food, insurance and recurring services. Divide annual routine care, equipment replacement and planned holiday care by 12. For irregular categories, record a deliberate monthly provision rather than pretending the expense will not occur.",
        "The printable worksheet includes food, treats, routine vet provision, parasite prevention, insurance, medication, grooming, training, daycare or walker, boarding, replacement equipment, emergency fund and other costs. The monthly total remains blank until the owner completes it.",
      ],
      checklist: [
        "Food",
        "Treats",
        "Routine vet provision",
        "Parasite prevention",
        "Insurance",
        "Medication",
        "Grooming",
        "Training",
        "Daycare or walker",
        "Boarding or holiday provision",
        "Replacement leads, beds and toys",
        "Emergency fund",
        "Other",
        "Monthly total",
      ],
      links: [
        { title: "Dog cost calculator", description: "Test a monthly scenario in the existing first-party calculator.", href: "/tools/dog-cost-calculator" },
      ],
    },
    {
      heading: "Download the report and dataset",
      body: [
        "The PDF contains the methodology, selected public examples, two source-backed charts, size-planning prompts and a blank monthly worksheet. The CSV contains all 46 researched records in a reusable table.",
        "Both files are ungated. Prices should be rechecked at the direct source before publication, booking or purchase because the collection is a dated snapshot.",
      ],
      links: [
        { title: "Printable cost report PDF", description: "Download the 11-page A4 report and worksheet.", href: costReportPdfPath },
        { title: "Public price examples CSV", description: "Download all 46 source-linked records.", href: costReportCsvPath },
      ],
    },
    {
      heading: "Using this data",
      body: [
        "Journalists, rescues, trainers, community organisations and other publishers may cite the observed examples with attribution and a link to this report. Quote the provider, service definition, location, price basis and checked date so readers do not mistake an example for a national average.",
        "For analysis, keep unlike services separate and label any calculated result as a sample range or sample median. Do not turn starting insurance premiums into promised quotes or routine consultation prices into emergency-treatment estimates.",
      ],
    },
    {
      heading: "Data notes and limitations",
      body: [
        "This is a purposive public-price sample, not a random survey. Providers without public prices are absent, online availability differs by region, and price pages can change without notice. More listings in one city or category do not imply a larger market or lower prices.",
        "The dataset records displayed prices as published. It does not test provider quality, verify stock at checkout, include private quotes or claim endorsement. Promotional and starting prices are labelled. Scenario fields are owner-selected assumptions unless they point to a specific dataset record.",
      ],
      callout: "important",
    },
  ],
  faqs: [
    {
      question: "Is the report a South African average cost of owning a dog?",
      answer: "No. It is a curated sample of 46 publicly listed examples. The sample is not statistically representative and must not be described as a national average.",
    },
    {
      question: "Why are there no estimated emergency veterinary bills?",
      answer: "Emergency cost depends on examination, diagnostics, medication, surgery, hospitalisation, timing and the individual case. A routine consultation fee cannot support a responsible emergency-treatment estimate.",
    },
    {
      question: "Can I use the CSV in an article or community resource?",
      answer: "Yes. Attribute Dog Haven, link to the report, preserve the provider, service, location, unit and checked date, and recheck time-sensitive prices at the original source before publishing.",
    },
    {
      question: "Are insurer starting premiums the price my dog will receive?",
      answer: "No. They are insurer-published starting prices. The actual premium and cover depend on the policy, dog details, risk profile and current underwriting rules.",
    },
  ],
  related: [
    { title: "Dog Costs Hub", description: "Browse setup, monthly, veterinary and local cost guides.", href: "/costs" },
    { title: "Cost of Owning a Dog", description: "General consumer planning before committing.", href: "/costs/cost-of-owning-a-dog-south-africa" },
    { title: "Monthly Dog Costs", description: "Turn routine and annual expenses into a monthly plan.", href: "/costs/monthly-cost-of-owning-a-dog-south-africa" },
    { title: "Dog Cost Calculator", description: "Build an individual monthly scenario.", href: "/tools/dog-cost-calculator" },
    { title: "Compare Dog Insurance", description: "Compare policy structure beyond the premium.", href: "/insurance/compare-dog-insurance-south-africa" },
    { title: "Dog Food", description: "Plan feeding by life stage, body condition and budget.", href: "/food" },
    { title: "Training", description: "Humane training and provider-selection guidance.", href: "/training" },
    { title: "Grooming", description: "Coat-care planning and groomer questions.", href: "/grooming" },
    { title: "Adoption", description: "Understand adoption preparation and included services.", href: "/adoption" },
    { title: "Emergency Checklist", description: "Prepare contacts, records and transport information.", href: "/emergency/dog-emergency-checklist-south-africa" },
  ],
  sources: [
    { label: "AACL Johannesburg adoption process", href: "https://www.aacl.co.za/adoption-process/", note: "Published Johannesburg adoption fee and included services; checked 10 August 2026." },
    { label: "Woodrock Animal Rescue adoption fees", href: "https://www.woodrockanimalrescue.co.za/adopt-dogs", note: "Published adult-dog and puppy adoption fees; checked 10 August 2026." },
    { label: "Takealot dog product listings", href: "https://www.takealot.com/pets/equipment-and-accessories-26669", note: "Current setup-product examples; promotions and option prices noted in the dataset." },
    { label: "VetEx Royal Canin Mini Adult 8 kg", href: "https://www.vetexonline.co.za/product/royal-canin-mini-adult-8kg/", note: "One-time retail food price example; checked 10 August 2026." },
    { label: "MyPet dog food listings", href: "https://mypet.co.za/shop/index.php/all-categories/food/dog-food.html?dir=asc&limit=15&manufacturer=346&order=manufacturer&packsize=115", note: "KwaZulu-Natal retail food example and delivery-area note." },
    { label: "Pet Heaven parasite products", href: "https://www.petheaven.co.za/dogs/dog-tick-and-flea-treatment/dog-tick-and-flea-chewable-treatments.html", note: "Weight-specific public retail examples; not product recommendations." },
    { label: "Vitalvet pricing", href: "https://vitalvet.co.za/pricing/", note: "Public routine veterinary examples across listed George and Mossel Bay branches." },
    { label: "Pampered Paws grooming", href: "https://pamperedpaws.co.za/grooming/", note: "Full-groom prices by coat group and dog size in Cape Town." },
    { label: "Clean Pets grooming", href: "https://cleanpets.co.za/", note: "Published mobile grooming package in Durban and Umhlanga." },
    { label: "Cape Province Dog Club puppy course", href: "https://capeprovincedogclub.co.za/service/puppy-courses/", note: "Published five-lesson puppy course in Cape Town." },
    { label: "The Dog Club training fees", href: "https://www.thedogclub.co.za/dog-training-centre.html", note: "Published Johannesburg group and course training examples." },
    { label: "Pretoria Shepherd Dog Club fees", href: "https://www.pretoriashepherddogclub.co.za/training/training-times-and-fees/", note: "Published Pretoria puppy-course fee and service basis." },
    { label: "Dogtanian prices", href: "https://www.dogtanian.co.za/prices", note: "Cape Town daycare, boarding and wash examples." },
    { label: "Durban and Coast SPCA boarding", href: "https://spcadbn.org.za/boarding-kennels/", note: "Published size-banded boarding ranges and admission requirements." },
    { label: "Fetch K9 Services", href: "https://www.fetchk9.co.za/", note: "Bloemfontein puppy-school, boarding and seasonal price examples." },
    { label: "Oneplan pet plans", href: "https://www.oneplan.co.za/plans/PetPlans", note: "Insurer-published starting premiums and policy caveats." },
    { label: "dotsure.co.za dog insurance", href: "https://www.dotsure.co.za/pet-insurance-dog", note: "Insurer-published starting premiums; personalised quotes vary." },
  ],
};

export function getCostReportGuide(slug: string) {
  return slug === costReportGuide.slug ? costReportGuide : undefined;
}
