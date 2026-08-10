from __future__ import annotations

import csv
import json
from pathlib import Path
from statistics import median

from PIL import Image, ImageDraw, ImageFont
from reportlab.graphics.shapes import Drawing, Rect, String
from reportlab.lib import colors
from reportlab.lib.enums import TA_CENTER, TA_LEFT
from reportlab.lib.pagesizes import A4
from reportlab.lib.styles import ParagraphStyle, getSampleStyleSheet
from reportlab.lib.units import mm
from reportlab.platypus import (
    Image as RLImage,
    KeepTogether,
    PageBreak,
    Paragraph,
    SimpleDocTemplate,
    Spacer,
    Table,
    TableStyle,
)
from reportlab.pdfbase.ttfonts import TTFont
from reportlab.pdfbase import pdfmetrics


ROOT = Path(__file__).resolve().parents[1]
DATA_SOURCE = ROOT / "src" / "data" / "south-africa-dog-cost-examples.json"
CSV_PATH = ROOT / "public" / "data" / "south-africa-dog-cost-examples.csv"
PDF_PATH = ROOT / "public" / "downloads" / "south-africa-dog-ownership-cost-report.pdf"
OG_PATH = ROOT / "public" / "images" / "guides" / "south-africa-dog-ownership-cost-report.png"
LOGO_PATH = ROOT / "public" / "brand" / "dog-haven-south-africa-header-logo-transparent.webp"
DOG_MARK_PATH = ROOT / "public" / "brand" / "doghaven-dog-logo.png"

CHECKED = "10 August 2026"
TOTAL_PAGES = 11

CREAM = colors.HexColor("#F8F3E7")
GREEN = colors.HexColor("#173F35")
SAGE = colors.HexColor("#789B7B")
GOLD = colors.HexColor("#D3A433")
COCOA = colors.HexColor("#4E3527")
BLUE = colors.HexColor("#356779")
TERRA = colors.HexColor("#A6573C")
OAT = colors.HexColor("#DED2BC")
PALE_GREEN = colors.HexColor("#EEF3EC")
PALE_GOLD = colors.HexColor("#FBF5DE")
WHITE = colors.white


def load_records() -> list[dict]:
    return json.loads(DATA_SOURCE.read_text(encoding="utf-8"))


def write_csv(records: list[dict]) -> None:
    CSV_PATH.parent.mkdir(parents=True, exist_ok=True)
    fields = [
        "category",
        "subcategory",
        "provider",
        "city",
        "province",
        "price_zar",
        "price_basis",
        "source_url",
        "date_checked",
        "notes",
    ]
    with CSV_PATH.open("w", encoding="utf-8-sig", newline="") as stream:
        writer = csv.DictWriter(stream, fieldnames=fields, lineterminator="\n")
        writer.writeheader()
        writer.writerows(records)


def register_fonts() -> tuple[str, str]:
    candidates = [
        (
            Path("C:/Windows/Fonts/aptos.ttf"),
            Path("C:/Windows/Fonts/aptos-bold.ttf"),
            "Aptos",
            "Aptos-Bold",
        ),
        (
            Path("C:/Windows/Fonts/arial.ttf"),
            Path("C:/Windows/Fonts/arialbd.ttf"),
            "Arial",
            "Arial-Bold",
        ),
    ]
    for regular, bold, regular_name, bold_name in candidates:
        if regular.exists() and bold.exists():
            pdfmetrics.registerFont(TTFont(regular_name, str(regular)))
            pdfmetrics.registerFont(TTFont(bold_name, str(bold)))
            return regular_name, bold_name
    return "Helvetica", "Helvetica-Bold"


BODY_FONT, BOLD_FONT = register_fonts()


def money(value: float) -> str:
    if float(value).is_integer():
        return f"R{int(value):,}"
    return f"R{value:,.2f}"


def records_for(records: list[dict], category: str) -> list[dict]:
    return [record for record in records if record["category"] == category]


def make_styles():
    sample = getSampleStyleSheet()
    return {
        "cover_kicker": ParagraphStyle(
            "CoverKicker", parent=sample["Normal"], fontName=BOLD_FONT, fontSize=9,
            leading=12, textColor=GREEN, spaceAfter=5, uppercase=True,
        ),
        "cover_title": ParagraphStyle(
            "CoverTitle", parent=sample["Title"], fontName=BOLD_FONT, fontSize=28,
            leading=31, textColor=GREEN, alignment=TA_LEFT, spaceAfter=8,
        ),
        "cover_subtitle": ParagraphStyle(
            "CoverSubtitle", parent=sample["Normal"], fontName=BODY_FONT, fontSize=13,
            leading=18, textColor=COCOA, spaceAfter=12,
        ),
        "page_title": ParagraphStyle(
            "PageTitle", parent=sample["Heading1"], fontName=BOLD_FONT, fontSize=20,
            leading=23, textColor=GREEN, spaceAfter=8,
        ),
        "section": ParagraphStyle(
            "Section", parent=sample["Heading2"], fontName=BOLD_FONT, fontSize=12,
            leading=15, textColor=COCOA, spaceBefore=6, spaceAfter=5,
        ),
        "body": ParagraphStyle(
            "Body", parent=sample["BodyText"], fontName=BODY_FONT, fontSize=9.5,
            leading=13.2, textColor=COCOA, spaceAfter=7,
        ),
        "small": ParagraphStyle(
            "Small", parent=sample["BodyText"], fontName=BODY_FONT, fontSize=8.1,
            leading=10.5, textColor=COCOA,
        ),
        "small_bold": ParagraphStyle(
            "SmallBold", parent=sample["BodyText"], fontName=BOLD_FONT, fontSize=8.1,
            leading=10.5, textColor=COCOA,
        ),
        "callout": ParagraphStyle(
            "Callout", parent=sample["BodyText"], fontName=BOLD_FONT, fontSize=9,
            leading=12.5, textColor=GREEN, spaceAfter=0,
        ),
        "center": ParagraphStyle(
            "Center", parent=sample["BodyText"], fontName=BODY_FONT, fontSize=8,
            leading=11, textColor=COCOA, alignment=TA_CENTER,
        ),
    }


STYLES = make_styles()


def P(text: str, style: str = "body") -> Paragraph:
    return Paragraph(text, STYLES[style])


def header_footer(canvas, doc):
    canvas.saveState()
    width, height = A4
    canvas.setFillColor(CREAM)
    canvas.rect(0, 0, width, height, fill=1, stroke=0)
    canvas.setFillColor(GREEN)
    canvas.rect(0, height - 9 * mm, width, 9 * mm, fill=1, stroke=0)
    canvas.setFillColor(GOLD)
    canvas.rect(0, height - 10.5 * mm, width, 1.5 * mm, fill=1, stroke=0)

    try:
        canvas.drawImage(
            str(LOGO_PATH), width - 45 * mm, height - 25 * mm,
            width=35 * mm, height=15.4 * mm, preserveAspectRatio=True, mask="auto",
        )
    except Exception:
        canvas.setFont(BOLD_FONT, 8)
        canvas.setFillColor(GREEN)
        canvas.drawRightString(width - 15 * mm, height - 19 * mm, "DOG HAVEN SOUTH AFRICA")

    canvas.setStrokeColor(OAT)
    canvas.line(15 * mm, 14 * mm, width - 15 * mm, 14 * mm)
    canvas.setFillColor(COCOA)
    canvas.setFont(BODY_FONT, 7)
    canvas.drawString(15 * mm, 9.5 * mm, "Public prices checked 10 August 2026 | doghaven.co.za")
    canvas.drawRightString(width - 15 * mm, 9.5 * mm, f"Page {doc.page} of {TOTAL_PAGES}")
    canvas.restoreState()


def add_page_title(story: list, kicker: str, title: str, intro: str | None = None):
    story.append(Spacer(1, 8 * mm))
    story.append(P(kicker.upper(), "cover_kicker"))
    story.append(P(title, "page_title"))
    if intro:
        story.append(P(intro))


def callout(text: str, background=PALE_GOLD):
    table = Table([[P(text, "callout")]], colWidths=[174 * mm])
    table.setStyle(TableStyle([
        ("BACKGROUND", (0, 0), (-1, -1), background),
        ("BOX", (0, 0), (-1, -1), 0.8, GOLD),
        ("LEFTPADDING", (0, 0), (-1, -1), 9),
        ("RIGHTPADDING", (0, 0), (-1, -1), 9),
        ("TOPPADDING", (0, 0), (-1, -1), 8),
        ("BOTTOMPADDING", (0, 0), (-1, -1), 8),
    ]))
    return table


def data_table(headers: list[str], rows: list[list], widths: list[float] | None = None, font_size=7.1):
    cells = [[P(str(value), "small_bold") for value in headers]]
    for row in rows:
        cells.append([P(str(value), "small") for value in row])
    table = Table(cells, colWidths=widths, repeatRows=1, hAlign="LEFT")
    table.setStyle(TableStyle([
        ("BACKGROUND", (0, 0), (-1, 0), GREEN),
        ("TEXTCOLOR", (0, 0), (-1, 0), WHITE),
        ("FONTNAME", (0, 0), (-1, 0), BOLD_FONT),
        ("VALIGN", (0, 0), (-1, -1), "TOP"),
        ("GRID", (0, 0), (-1, -1), 0.35, OAT),
        ("ROWBACKGROUNDS", (0, 1), (-1, -1), [WHITE, colors.HexColor("#FBF8F1")]),
        ("LEFTPADDING", (0, 0), (-1, -1), 4),
        ("RIGHTPADDING", (0, 0), (-1, -1), 4),
        ("TOPPADDING", (0, 0), (-1, -1), 5.5),
        ("BOTTOMPADDING", (0, 0), (-1, -1), 5.5),
        ("FONTSIZE", (0, 0), (-1, -1), font_size),
    ]))
    return table


def example_rows(records: list[dict], category: str, limit: int, include_location=True):
    rows = []
    for record in records_for(records, category)[:limit]:
        row = [record["subcategory"], money(record["price_zar"]), record["price_basis"]]
        if include_location:
            row.extend([record["city"], record["provider"]])
        rows.append(row)
    return rows


def checklist(items: list[str], two_columns=False):
    rows = [[f"[ ] {item}"] for item in items]
    if two_columns:
        half = (len(items) + 1) // 2
        left = items[:half]
        right = items[half:]
        rows = []
        for index in range(max(len(left), len(right))):
            rows.append([
                f"[ ] {left[index]}" if index < len(left) else "",
                f"[ ] {right[index]}" if index < len(right) else "",
            ])
    return data_table(["Planning checklist"] if not two_columns else ["Checklist", "Checklist"], rows, [174 * mm] if not two_columns else [87 * mm, 87 * mm])


def bar_chart(title: str, rows: list[tuple[str, float]], maximum: float, colour=BLUE, width=174 * mm, height=52 * mm):
    drawing = Drawing(width, height)
    drawing.add(String(0, height - 10, title, fontName=BOLD_FONT, fontSize=9, fillColor=GREEN))
    label_width = 67 * mm
    bar_width = width - label_width - 24 * mm
    y = height - 28
    step = 15
    for label, value in rows:
        drawing.add(String(0, y + 2, label[:36], fontName=BODY_FONT, fontSize=6.7, fillColor=COCOA))
        drawing.add(Rect(label_width, y, bar_width, 8, fillColor=colors.HexColor("#E9E2D4"), strokeColor=None))
        drawing.add(Rect(label_width, y, max(1, bar_width * value / maximum), 8, fillColor=colour, strokeColor=None))
        drawing.add(String(label_width + bar_width + 4, y + 1, money(value), fontName=BOLD_FONT, fontSize=6.7, fillColor=COCOA))
        y -= step
    return drawing


def writing_table(labels: list[str], amount_label="Monthly amount"):
    rows = [[label, "R __________________"] for label in labels]
    return data_table(["Budget line", amount_label], rows, [112 * mm, 62 * mm])


def build_pdf(records: list[dict]) -> None:
    PDF_PATH.parent.mkdir(parents=True, exist_ok=True)
    doc = SimpleDocTemplate(
        str(PDF_PATH), pagesize=A4, rightMargin=18 * mm, leftMargin=18 * mm,
        topMargin=18 * mm, bottomMargin=18 * mm,
        title="South African Dog Ownership Cost Report",
        author="Dog Haven South Africa Editorial Team",
        subject="Public price examples and dog ownership budget worksheet",
    )
    story: list = []

    # Page 1
    story.append(Spacer(1, 24 * mm))
    story.append(P("DOG HAVEN SOUTH AFRICA | ORIGINAL DATA RESOURCE", "cover_kicker"))
    story.append(P("South African Dog Ownership Cost Report", "cover_title"))
    story.append(P("Current public price examples and a planning worksheet", "cover_subtitle"))
    story.append(callout("46 public price records | 8 categories | Prices checked 10 August 2026", PALE_GREEN))
    story.append(Spacer(1, 7 * mm))
    story.append(P("Executive summary", "section"))
    story.append(P("There is no defensible single national price for owning a dog. This report records public examples from South African providers and keeps the product, service, location and unit attached to every number."))
    story.append(P("Use the examples as research anchors, then replace them with the exact food use, local quotes, insurance terms and lifestyle choices for the individual dog. No emergency-treatment estimate or national average has been invented."))
    story.append(P("Key planning takeaways", "section"))
    story.append(checklist([
        "Record what an adoption or purchase already includes",
        "Calculate food from the actual pack price and days used",
        "Divide annual routine care and occasional services by 12",
        "Compare insurance cover and excess alongside the premium",
        "Keep emergency provision separate from routine vet costs",
        "Recheck every source before buying, booking or publishing",
    ], two_columns=True))
    story.append(P("What is included", "section"))
    story.append(data_table(
        ["Resource", "Purpose"],
        [
            ["11-page printable PDF", "Research summary, sample charts and owner worksheets"],
            ["46-record CSV", "Direct source URLs, units, locations, dates and price notes"],
            ["Indexable HTML report", "Full methodology, accessible tables, FAQs and related planning guides"],
        ],
        [50 * mm, 124 * mm],
    ))
    story.append(Spacer(1, 5 * mm))
    story.append(P("This is a dated purposive sample, not a random survey or a provider ranking.", "callout"))
    story.append(PageBreak())

    # Page 2
    add_page_title(story, "Research method", "How the public-price sample was built")
    story.append(P("Prices were collected from public provider, retailer, clinic, welfare-organisation and insurer pages. Every record stores a direct URL, location where relevant, unit, checked date and a note explaining any promotion, range or starting-price limitation."))
    story.append(checklist([
        "Visible price without requesting a private quote",
        "Exact product or service basis recorded",
        "Location retained for local services",
        "Promotions and starting premiums labelled",
        "No inferred emergency or treatment costs",
        "No unverified aggregator price used",
    ], two_columns=True))
    story.append(P("Narrow sample findings", "section"))
    grooming_values = [r["price_zar"] for r in records if r["provider"] == "Pampered Paws" and r["category"] == "Grooming"]
    insurance_values = [r["price_zar"] for r in records_for(records, "Insurance")]
    vaccine_values = [r["price_zar"] for r in records_for(records, "Routine veterinary") if "Annual dog vaccination" in r["subcategory"]]
    story.append(data_table(
        ["Sample", "Observed result", "Interpretation limit"],
        [
            ["Vitalvet annual vaccination, 3 branches", f"{money(min(vaccine_values))}-{money(max(vaccine_values))}; median {money(median(vaccine_values))}", "One provider group"],
            ["Pampered Paws full grooms, 6 listings", f"{money(min(grooming_values))}-{money(max(grooming_values))}; median {money(median(grooming_values))}", "One Cape Town provider"],
            ["Insurer starting premiums, 9 plans", f"{money(min(insurance_values))}-{money(max(insurance_values))}; median {money(median(insurance_values))}", "Unlike plans; not personal quotes"],
            ["Selected puppy/group courses", "R500-R1,480 per course", "Lengths and structure differ"],
            ["Selected boarding examples", "R130-R350 per day or night", "Size, season and service differ"],
        ],
        [52 * mm, 55 * mm, 67 * mm],
    ))
    story.append(Spacer(1, 5 * mm))
    story.append(callout("More public listings in one place indicate better online data availability, not a cheaper or larger market."))
    story.append(P("Research-update log", "section"))
    story.append(writing_table([
        "Next planned review date", "Provider or category to recheck", "Changed price or service basis",
        "Source URL still public", "Promotion status confirmed", "Reviewer note",
    ], "Update entry"))
    story.append(PageBreak())

    # Page 3
    add_page_title(story, "Setup", "Initial costs before the dog comes home")
    story.append(P("Compare included services before adding each line. Adoption fees may include vaccination, sterilisation, parasite treatment, microchipping and identification. Equipment should be sized for the actual dog and home."))
    story.append(data_table(
        ["Public example", "Price", "Basis", "Location", "Source"],
        example_rows(records, "Initial setup", 6),
        [53 * mm, 18 * mm, 38 * mm, 31 * mm, 34 * mm],
    ))
    story.append(P("Owner setup worksheet", "section"))
    story.append(writing_table([
        "Adoption or acquisition", "Bed and washable cover", "Lead, harness and collar",
        "Bowls and feeding setup", "Carrier, crate or vehicle restraint", "Gate or home-safety changes",
        "Initial veterinary needs not included", "Other setup item", "SETUP TOTAL",
    ], "Owner amount"))
    story.append(P("Before buying equipment", "section"))
    story.append(checklist([
        "Measure the adult dog where possible", "Check vehicle and doorway fit",
        "Choose washable, repairable items", "Keep receipts and warranty information",
    ], two_columns=True))
    story.append(PageBreak())

    # Page 4
    add_page_title(story, "Food and essentials", "Calculate from actual use, not dog size alone")
    story.append(P("Record the chosen pack price and the number of days it lasts. Monthly food equivalent = pack price x 365 / days used / 12. Treats, dental products, waste bags and replacement toys remain separate lines."))
    story.append(data_table(
        ["Public food example", "Price", "Basis", "Location", "Source"],
        example_rows(records, "Food", 3),
        [55 * mm, 20 * mm, 39 * mm, 31 * mm, 29 * mm],
    ))
    story.append(P("Food-use calculation", "section"))
    story.append(writing_table([
        "Chosen food and pack size", "Current pack price", "Days the pack actually lasts",
        "Calculated monthly food equivalent", "Treats", "Dental products",
        "Waste bags and cleaning", "Replacement toys or chews", "FOOD AND ESSENTIALS TOTAL",
    ], "Entry"))
    story.append(Spacer(1, 5 * mm))
    story.append(callout("Retail examples are not brand rankings. Suitability, life stage, body condition and veterinary needs come before price."))
    story.append(P("Price-change notes", "section"))
    story.append(writing_table([
        "Usual price outside promotions", "Delivery or collection cost", "Alternative pack size checked",
        "Date actual usage was measured",
    ], "Owner note"))
    story.append(PageBreak())

    # Page 5
    add_page_title(story, "Health planning", "Routine veterinary care and prevention")
    story.append(P("Public clinic pricing is limited. Ask what a listed fee includes and whether examination, vaccine, consumables, registration or follow-up are separate. Routine prices do not predict emergency treatment."))
    story.append(data_table(
        ["Public veterinary example", "Price", "Basis", "Location", "Source"],
        example_rows(records, "Routine veterinary", 6),
        [55 * mm, 18 * mm, 35 * mm, 30 * mm, 36 * mm],
    ))
    story.append(P("Weight-specific retail prevention examples", "section"))
    story.append(data_table(
        ["Public product example", "Price", "Basis", "Source"],
        example_rows(records, "Parasite prevention", 4, include_location=False),
        [67 * mm, 18 * mm, 47 * mm, 42 * mm],
    ))
    story.append(Spacer(1, 4 * mm))
    story.append(callout("Parasite product and schedule must suit the individual dog. These retail records are cost examples, not medical recommendations.", PALE_GREEN))
    story.append(P("Annual routine-care provision", "section"))
    story.append(writing_table([
        "Annual examination or vaccination plan", "Parasite-prevention plan", "Dental or monitoring provision",
        "Medication or chronic-care provision", "Annual total divided by 12",
    ], "Owner amount"))
    story.append(PageBreak())

    # Page 6
    add_page_title(story, "Services", "Grooming and training")
    story.append(P("Keep service definitions intact. A wash is not a full groom, and a group puppy course is not a private behaviour consultation. Coat condition, class structure, trainer methods and owner support matter."))
    story.append(bar_chart(
        "Pampered Paws full-groom public examples by dog size",
        [("Small dog maximum", 300), ("Medium dog maximum", 350), ("Large dog maximum", 450)],
        450, SAGE, height=37 * mm,
    ))
    story.append(P("Observed across smooth/short and silk/wool/wire/long coat listings. Source: Pampered Paws, Cape Town.", "small"))
    story.append(data_table(
        ["Training example", "Price", "Basis", "Location", "Source"],
        example_rows(records, "Training", 5),
        [49 * mm, 18 * mm, 39 * mm, 31 * mm, 37 * mm],
    ))
    story.append(Spacer(1, 4 * mm))
    story.append(callout("The selected course range is R500-R1,480, but course length and structure differ. No national training average is calculated."))
    story.append(P("Owner service plan", "section"))
    story.append(writing_table([
        "Grooming quote and yearly frequency", "Training course or session plan",
        "Travel or handling surcharge", "Monthly service provision",
    ], "Owner amount"))
    story.append(PageBreak())

    # Page 7
    add_page_title(story, "Insurance and emergencies", "Starting premiums are not equivalent cover")
    story.append(P("The nine values below are insurer-published starting premiums. Actual premiums are personalised. Compare excesses, co-payments, limits, waiting periods, exclusions, pre-existing-condition rules and claims processes."))
    insurance_chart_rows = [
        (f"{r['provider']} {r['subcategory'].replace(' starting premium', '')}", r["price_zar"])
        for r in records_for(records, "Insurance")
    ]
    story.append(bar_chart("Published starting premiums per pet per month", insurance_chart_rows, 430, GOLD, height=72 * mm))
    story.append(P("Sample range R80-R430; sample median R219. Plans are not like-for-like and the figures are not quotes.", "small"))
    story.append(P("Emergency provision", "section"))
    story.append(P("Do not infer emergency bills from routine consultation prices. Diagnostics, medication, surgery, hospitalisation and after-hours care depend on the case. Choose an owner-set monthly contribution, suitable insurance, available credit or a combination."))
    story.append(writing_table(["Insurance premium from personalised quote", "Emergency-fund contribution", "Available payment or credit limit", "TOTAL MONTHLY EMERGENCY PROVISION"], "Owner amount"))
    story.append(PageBreak())

    # Page 8
    add_page_title(story, "Care while away", "Boarding, daycare and travel provision")
    story.append(P("Prices differ by size, season, stay length, social compatibility, medication needs and accommodation. Daycare may require an assessment or minimum attendance. Confirm vaccination, parasite and behaviour requirements before relying on a booking."))
    story.append(data_table(
        ["Public example", "Price", "Basis", "Location", "Source"],
        example_rows(records, "Boarding and daycare", 6),
        [51 * mm, 18 * mm, 43 * mm, 29 * mm, 33 * mm],
    ))
    story.append(P("Owner travel provision", "section"))
    story.append(writing_table([
        "Expected daycare days per month", "Expected boarding nights per year",
        "Peak or holiday surcharge", "Assessment or trial visits", "Pet sitter or walker quote",
        "Food, medication and transport extras", "Annual travel care divided by 12",
        "MONTHLY PET-CARE PROVISION",
    ], "Owner amount"))
    story.append(PageBreak())

    # Page 9
    add_page_title(story, "Planning scenarios", "Small, medium and large dog worksheets")
    story.append(P("These scenarios show how cost drivers change. They deliberately contain blank owner inputs instead of invented monthly totals."))
    scenario_rows = [
        ["Food", "Pack price / actual months", "Pack price / actual months", "Pack price / actual months"],
        ["Parasite prevention", "Vet-selected small band", "Vet-selected medium band", "Vet-selected large band"],
        ["Routine vet provision", "Annual local plan / 12", "Annual local plan / 12", "Annual local plan / 12"],
        ["Grooming", "Quote x annual frequency / 12", "Quote x annual frequency / 12", "Quote x annual frequency / 12"],
        ["Insurance", "Personal quote", "Personal quote", "Personal quote"],
        ["Boarding/daycare", "Expected use x current rate", "Expected use x current rate", "Expected use x current rate"],
        ["Emergency provision", "Owner-selected", "Owner-selected", "Owner-selected"],
        ["MONTHLY TOTAL", "R __________", "R __________", "R __________"],
    ]
    story.append(data_table(["Planning field", "Small dog", "Medium dog", "Large dog"], scenario_rows, [47 * mm, 42 * mm, 42 * mm, 43 * mm]))
    story.append(P("Dog-specific assumptions", "section"))
    story.append(writing_table([
        "Dog's current weight and life stage", "Food product and pack size",
        "Days one pack lasts", "Coat type and grooming frequency", "Medication or chronic care",
        "Expected travel or daycare use", "Insurance policy and excess", "Emergency funding method",
    ], "Owner entry"))
    story.append(Spacer(1, 4 * mm))
    story.append(callout("A researched dataset price becomes relevant only when the product, size band, service definition and location genuinely match the dog."))
    story.append(PageBreak())

    # Page 10
    add_page_title(story, "Printable worksheet", "Build-your-own monthly dog budget")
    story.append(P("Enter actual current amounts. Convert annual or occasional costs into a monthly provision before adding the total."))
    budget_labels = [
        "Food", "Treats", "Routine vet provision", "Parasite prevention", "Insurance",
        "Medication", "Grooming", "Training", "Daycare or walker",
        "Boarding or holiday provision", "Replacement leads, beds and toys",
        "Emergency fund", "Other", "MONTHLY TOTAL",
    ]
    story.append(writing_table(budget_labels))
    story.append(P("Review notes", "section"))
    story.append(writing_table([
        "Next price-review date", "Largest variable cost", "Annual cost not yet included",
        "Quote or policy to update", "Saving action for this month",
    ], "Note"))
    story.append(PageBreak())

    # Page 11
    add_page_title(story, "Audit notes", "Limitations, citation guidance and sources")
    story.append(P("This purposive sample is not statistically representative. Providers without public prices are absent, listings can change without notice, and more records in one city reflect data availability rather than market size or affordability."))
    story.append(P("When citing a figure, retain the provider, service definition, location, price basis and checked date. Label calculated results as sample ranges or sample medians. Recheck the direct source before publication, booking or purchase."))
    story.append(P("Dataset coverage", "section"))
    story.append(data_table(
        ["Coverage item", "Recorded scope"],
        [
            ["Records", "46 public examples"],
            ["Categories", "Setup, food, prevention, routine veterinary, grooming, training, boarding/daycare, insurance"],
            ["Geography", "Gauteng, Western Cape, KwaZulu-Natal, Free State and national online examples"],
            ["Eastern Cape", "No sufficiently current public example included in this collection"],
            ["Downloads", "doghaven.co.za/data/south-africa-dog-cost-examples.csv"],
        ],
        [44 * mm, 130 * mm],
    ))
    story.append(P("Direct source domains", "section"))
    domains = sorted({record["source_url"].split("/")[2].removeprefix("www.") for record in records})
    domain_lines = [domains[index:index + 3] for index in range(0, len(domains), 3)]
    story.append(data_table(["Source domains used"], [[" | ".join(line)] for line in domain_lines], [174 * mm]))
    story.append(Spacer(1, 4 * mm))
    story.append(P("The CSV carries the full direct URL and note for every price record. Providers have not endorsed Dog Haven and inclusion is not a recommendation.", "callout"))
    story.append(P("Citation checklist", "section"))
    story.append(checklist([
        "Name the provider and exact service", "Retain the location and price basis",
        "State that the price was checked 10 August 2026", "Recheck the direct source before publishing",
        "Call calculations sample ranges or medians", "Do not call the sample a national average",
    ], two_columns=True))

    doc.build(story, onFirstPage=header_footer, onLaterPages=header_footer)


def load_font(size: int, bold=False):
    candidates = [
        Path("C:/Windows/Fonts/aptos-bold.ttf" if bold else "C:/Windows/Fonts/aptos.ttf"),
        Path("C:/Windows/Fonts/arialbd.ttf" if bold else "C:/Windows/Fonts/arial.ttf"),
    ]
    for path in candidates:
        if path.exists():
            return ImageFont.truetype(str(path), size)
    return ImageFont.load_default()


def fit_text(draw: ImageDraw.ImageDraw, text: str, max_width: int, start_size: int, bold=True):
    size = start_size
    while size >= 18:
        font = load_font(size, bold)
        if draw.textbbox((0, 0), text, font=font)[2] <= max_width:
            return font
        size -= 1
    return load_font(18, bold)


def build_og() -> None:
    OG_PATH.parent.mkdir(parents=True, exist_ok=True)
    image = Image.new("RGB", (1200, 630), "#F8F3E7")
    draw = ImageDraw.Draw(image)
    draw.rectangle((0, 0, 28, 630), fill="#173F35")
    draw.rectangle((28, 0, 42, 630), fill="#D3A433")
    draw.rounded_rectangle((72, 58, 1128, 572), radius=30, fill="#FFFDFC", outline="#DED2BC", width=3)

    kicker = load_font(25, True)
    title = load_font(60, True)
    subtitle = load_font(29, False)
    pill = load_font(22, True)
    small = load_font(20, False)

    draw.text((112, 103), "DOG HAVEN SOUTH AFRICA", font=kicker, fill="#356779")
    draw.text((112, 157), "South African Dog", font=title, fill="#173F35")
    draw.text((112, 226), "Ownership Cost Report", font=title, fill="#173F35")
    draw.text((112, 318), "Current public price examples", font=subtitle, fill="#4E3527")
    draw.text((112, 358), "and a printable budget worksheet", font=subtitle, fill="#4E3527")
    draw.rounded_rectangle((112, 432, 482, 482), radius=25, fill="#EEF3EC", outline="#789B7B", width=2)
    draw.text((135, 444), "46 SOURCE-LINKED RECORDS", font=pill, fill="#173F35")
    draw.text((112, 510), "Public prices checked August 2026", font=small, fill="#6B5A4A")

    if DOG_MARK_PATH.exists():
        mark = Image.open(DOG_MARK_PATH).convert("RGBA")
        mark.thumbnail((245, 235), Image.Resampling.LANCZOS)
        image.paste(mark, (837, 124), mark)

    # Simple notebook and bar-chart motif; no fabricated price labels.
    draw.rounded_rectangle((785, 350, 1068, 515), radius=18, fill="#F8F3E7", outline="#173F35", width=4)
    draw.line((825, 388, 1025, 388), fill="#D3A433", width=5)
    for idx, width in enumerate((95, 160, 125)):
        y = 420 + idx * 28
        draw.rounded_rectangle((825, y, 825 + width, y + 13), radius=6, fill=("#789B7B", "#356779", "#A6573C")[idx])
    draw.ellipse((747, 374, 793, 420), fill="#D3A433")
    draw.line((770, 397, 770, 501), fill="#173F35", width=5)

    image.save(OG_PATH, format="PNG", optimize=True)


def main() -> None:
    records = load_records()
    if len(records) != 46:
        raise ValueError(f"Expected 46 records, found {len(records)}")
    write_csv(records)
    build_pdf(records)
    build_og()
    print(f"CSV: {CSV_PATH} ({CSV_PATH.stat().st_size} bytes)")
    print(f"PDF: {PDF_PATH} ({PDF_PATH.stat().st_size} bytes)")
    print(f"OG: {OG_PATH} ({OG_PATH.stat().st_size} bytes)")


if __name__ == "__main__":
    main()
