from pathlib import Path
from PIL import Image, ImageDraw, ImageFont
from reportlab.lib import colors
from reportlab.lib.enums import TA_LEFT
from reportlab.lib.pagesizes import A4
from reportlab.lib.styles import ParagraphStyle
from reportlab.lib.utils import ImageReader
from reportlab.pdfgen import canvas
from reportlab.platypus import Paragraph, Table, TableStyle


ROOT = Path(__file__).resolve().parents[1]
PDF_PATH = ROOT / "public" / "downloads" / "dog-emergency-checklist-south-africa.pdf"
OG_PATH = ROOT / "public" / "images" / "guides" / "dog-emergency-checklist-south-africa.png"
LOGO_PATH = ROOT / "public" / "brand" / "dog-haven-south-africa-header-logo-transparent.webp"
MARK_PATH = ROOT / "public" / "brand" / "doghaven-dog-logo.png"

PAGE_W, PAGE_H = A4
MARGIN = 42
CONTENT_W = PAGE_W - 2 * MARGIN

CREAM = colors.HexColor("#fbf5e9")
OAT = colors.HexColor("#e5dcc8")
COCOA = colors.HexColor("#123f8f")
BARK = colors.HexColor("#253044")
SAGE = colors.HexColor("#007a3d")
MOSS = colors.HexColor("#005f32")
HONEY = colors.HexColor("#f1b82d")
PALE_GREEN = colors.HexColor("#eef6ef")
PALE_GOLD = colors.HexColor("#fff7e2")


def register_fonts() -> tuple[str, str]:
    # Built-in PDF fonts keep the download light and remain reliable on home printers.
    return "Helvetica", "Helvetica-Bold"


FONT, FONT_BOLD = register_fonts()

with Image.open(LOGO_PATH) as source_logo:
    PDF_LOGO = source_logo.convert("RGBA")
    PDF_LOGO.thumbnail((420, 185), Image.Resampling.LANCZOS)

BODY_STYLE = ParagraphStyle(
    "body",
    fontName=FONT,
    fontSize=8.5,
    leading=12,
    textColor=BARK,
    alignment=TA_LEFT,
)
SMALL_STYLE = ParagraphStyle(
    "small",
    fontName=FONT,
    fontSize=7.2,
    leading=9.5,
    textColor=BARK,
)
TABLE_HEAD_STYLE = ParagraphStyle(
    "table-head",
    fontName=FONT_BOLD,
    fontSize=7.2,
    leading=9,
    textColor=colors.white,
)
TABLE_CELL_STYLE = ParagraphStyle(
    "table-cell",
    fontName=FONT,
    fontSize=6.8,
    leading=8.4,
    textColor=BARK,
)
TABLE_CELL_BOLD_STYLE = ParagraphStyle(
    "table-cell-bold",
    fontName=FONT_BOLD,
    fontSize=6.8,
    leading=8.4,
    textColor=BARK,
)


def draw_header(c: canvas.Canvas, page_num: int, kicker: str) -> float:
    c.setFillColor(CREAM)
    c.rect(0, PAGE_H - 68, PAGE_W, 68, fill=1, stroke=0)
    c.setFillColor(MOSS)
    c.rect(0, PAGE_H - 7, PAGE_W, 7, fill=1, stroke=0)
    c.setFillColor(HONEY)
    c.rect(0, PAGE_H - 10, PAGE_W, 3, fill=1, stroke=0)
    c.setFont(FONT_BOLD, 8)
    c.setFillColor(MOSS)
    c.drawString(MARGIN, PAGE_H - 31, kicker.upper())
    c.setFont(FONT, 7.5)
    c.setFillColor(BARK)
    c.drawString(MARGIN, PAGE_H - 46, "South African dog-owner preparation resource")
    if LOGO_PATH.exists():
        c.drawImage(
            ImageReader(PDF_LOGO),
            PAGE_W - MARGIN - 105,
            PAGE_H - 59,
            width=105,
            height=46,
            preserveAspectRatio=True,
            mask="auto",
            anchor="c",
        )
    return PAGE_H - 82


def draw_footer(c: canvas.Canvas, page_num: int) -> None:
    c.setStrokeColor(OAT)
    c.line(MARGIN, 31, PAGE_W - MARGIN, 31)
    c.setFont(FONT, 6.8)
    c.setFillColor(BARK)
    c.drawString(MARGIN, 19, "doghaven.co.za - Educational preparation resource - Not a substitute for veterinary care")
    c.drawRightString(PAGE_W - MARGIN, 19, f"Page {page_num} of 5")


def draw_page_title(c: canvas.Canvas, title: str, subtitle: str, y: float) -> float:
    c.setFont(FONT_BOLD, 22)
    c.setFillColor(COCOA)
    c.drawString(MARGIN, y, title)
    y -= 17
    p = Paragraph(subtitle, BODY_STYLE)
    _, height = p.wrap(CONTENT_W, 40)
    p.drawOn(c, MARGIN, y - height)
    return y - height - 11


def draw_section_title(c: canvas.Canvas, title: str, y: float, accent=SAGE) -> float:
    c.setFillColor(accent)
    c.roundRect(MARGIN, y - 18, 5, 20, 2, fill=1, stroke=0)
    c.setFont(FONT_BOLD, 12)
    c.setFillColor(COCOA)
    c.drawString(MARGIN + 12, y - 13, title)
    return y - 28


def draw_info_box(c: canvas.Canvas, text: str, y: float, height: float = 52) -> float:
    c.setFillColor(PALE_GOLD)
    c.setStrokeColor(HONEY)
    c.roundRect(MARGIN, y - height, CONTENT_W, height, 8, fill=1, stroke=1)
    p = Paragraph(text, BODY_STYLE)
    _, p_height = p.wrap(CONTENT_W - 24, height - 14)
    p.drawOn(c, MARGIN + 12, y - 10 - p_height)
    return y - height - 13


def draw_field(c: canvas.Canvas, label: str, x: float, y: float, width: float, line_count: int = 1) -> float:
    c.setFont(FONT_BOLD, 7.4)
    c.setFillColor(BARK)
    c.drawString(x, y, label)
    current = y - 12
    for _ in range(line_count):
        c.setStrokeColor(colors.HexColor("#9ba59d"))
        c.line(x, current, x + width, current)
        current -= 18
    return current + 3


def draw_checkbox(c: canvas.Canvas, text: str, x: float, y: float, width: float, font_size: float = 7.6) -> float:
    box = 9
    c.setStrokeColor(SAGE)
    c.setLineWidth(1)
    c.rect(x, y - box + 1, box, box, fill=0, stroke=1)
    style = ParagraphStyle("check", parent=SMALL_STYLE, fontSize=font_size, leading=font_size + 2.2)
    p = Paragraph(text, style)
    _, height = p.wrap(width - box - 8, 50)
    p.drawOn(c, x + box + 7, y - height + 2)
    return y - max(box, height) - 6


def draw_two_column_checklist(c: canvas.Canvas, items: list[str], y: float, bottom: float = 48) -> float:
    gap = 22
    col_w = (CONTENT_W - gap) / 2
    split = (len(items) + 1) // 2
    left = items[:split]
    right = items[split:]
    y_left = y
    y_right = y
    for item in left:
        y_left = draw_checkbox(c, item, MARGIN, y_left, col_w)
    for item in right:
        y_right = draw_checkbox(c, item, MARGIN + col_w + gap, y_right, col_w)
    final_y = min(y_left, y_right)
    if final_y < bottom:
        raise ValueError(f"Checklist overflow: {final_y}")
    return final_y


def make_table(data: list[list[str]], widths: list[float], row_font_size: float = 6.8) -> Table:
    head_style = TABLE_HEAD_STYLE
    cell_style = ParagraphStyle("dynamic-cell", parent=TABLE_CELL_STYLE, fontSize=row_font_size, leading=row_font_size + 1.6)
    bold_style = ParagraphStyle("dynamic-bold", parent=TABLE_CELL_BOLD_STYLE, fontSize=row_font_size, leading=row_font_size + 1.6)
    prepared = []
    for row_index, row in enumerate(data):
        style = head_style if row_index == 0 else cell_style
        prepared.append([
            Paragraph(cell, style if row_index == 0 or col_index > 0 else bold_style)
            for col_index, cell in enumerate(row)
        ])
    table = Table(prepared, colWidths=widths, repeatRows=1, hAlign="LEFT")
    table.setStyle(TableStyle([
        ("BACKGROUND", (0, 0), (-1, 0), MOSS),
        ("TEXTCOLOR", (0, 0), (-1, 0), colors.white),
        ("BACKGROUND", (0, 1), (-1, -1), colors.white),
        ("ROWBACKGROUNDS", (0, 1), (-1, -1), [colors.white, CREAM]),
        ("GRID", (0, 0), (-1, -1), 0.45, OAT),
        ("VALIGN", (0, 0), (-1, -1), "TOP"),
        ("LEFTPADDING", (0, 0), (-1, -1), 6),
        ("RIGHTPADDING", (0, 0), (-1, -1), 6),
        ("TOPPADDING", (0, 0), (-1, -1), 4.5),
        ("BOTTOMPADDING", (0, 0), (-1, -1), 4.5),
    ]))
    return table


def draw_table(c: canvas.Canvas, table: Table, y: float, max_height: float) -> float:
    width, height = table.wrap(CONTENT_W, max_height)
    if height > max_height:
        raise ValueError(f"Table overflow: {height} > {max_height}")
    table.drawOn(c, MARGIN, y - height)
    return y - height - 11


def page_one(c: canvas.Canvas) -> None:
    y = draw_header(c, 1, "Printable dog emergency checklist")
    y = draw_page_title(
        c,
        "Dog Emergency Checklist",
        "Complete this sheet while your dog is well. Keep a copy at home, share it with the person caring for your dog, and update it whenever health or contact details change.",
        y,
    )
    y = draw_info_box(c, "<b>Emergency:</b> If your dog is collapsing, struggling to breathe, bleeding heavily, having repeated seizures, unable to stand, or may have been poisoned, contact a veterinarian immediately. Do not delay urgent care to complete this form.", y, 56)
    y = draw_section_title(c, "1. Dog details", y)
    gap = 22
    col_w = (CONTENT_W - gap) / 2
    left_x = MARGIN
    right_x = MARGIN + col_w + gap
    rows = [
        ("Dog's name", "Breed or type"),
        ("Age or date of birth", "Sex"),
        ("Current weight", "Microchip number"),
        ("Distinguishing features", "Usual diet or food"),
    ]
    for left_label, right_label in rows:
        draw_field(c, left_label, left_x, y, col_w)
        draw_field(c, right_label, right_x, y, col_w)
        y -= 35
    y -= 2
    y = draw_section_title(c, "2. Medical details", y)
    for label in ["Medical conditions", "Allergies or known reactions", "Current medicines - include name, strength and schedule"]:
        y = draw_field(c, label, MARGIN, y, CONTENT_W, line_count=2)
        y -= 8
    y = draw_section_title(c, "3. Regular veterinary care", y)
    draw_field(c, "Regular veterinary clinic", left_x, y, col_w)
    draw_field(c, "Clinic phone", right_x, y, col_w)
    y -= 38
    draw_field(c, "Veterinarian or contact person, if relevant", MARGIN, y, CONTENT_W)
    draw_footer(c, 1)


def page_two(c: canvas.Canvas) -> None:
    y = draw_header(c, 2, "Contacts and transport")
    y = draw_page_title(c, "Contacts and transport plan", "Confirm the details directly. Not every South African area has a 24-hour veterinary practice, so record realistic alternatives and travel routes.", y)
    y = draw_section_title(c, "4. Veterinary and emergency contacts", y)
    gap = 22
    col_w = (CONTENT_W - gap) / 2
    left_x = MARGIN
    right_x = MARGIN + col_w + gap
    fields = [
        ("Regular veterinary clinic", "Clinic phone"),
        ("After-hours or emergency vet", "Emergency phone"),
        ("Alternative emergency clinic", "Alternative clinic phone"),
        ("Pet insurance provider or policy", "Insurance contact"),
        ("Trusted emergency contact", "Trusted contact phone"),
    ]
    for left_label, right_label in fields:
        draw_field(c, left_label, left_x, y, col_w)
        draw_field(c, right_label, right_x, y, col_w)
        y -= 36
    y = draw_field(c, "Confirmed route, entrance or parking notes for emergency clinic", MARGIN, y, CONTENT_W, line_count=2) - 7
    y = draw_section_title(c, "5. Transport checklist", y)
    y = draw_two_column_checklist(c, [
        "Secure lead and well-fitted harness.",
        "Suitable carrier where appropriate.",
        "Clean blanket or towel.",
        "Medical and vaccination records.",
        "Current medicine list.",
        "Relevant product or packaging, when safe.",
        "Insurance or payment information.",
        "Charged phone and offline directions.",
        "Second adult or helper when available.",
        "Clinic called ahead when this will not delay care.",
    ], y)
    y -= 3
    y = draw_info_box(c, "<b>Handling caution:</b> Pain, fear or confusion can change behaviour. Ask the clinic how to move the dog. Never let restraint or a muzzle interfere with breathing, and do not muzzle a vomiting dog or a dog with breathing difficulty or facial injury.", y, 50)
    y = draw_section_title(c, "Transport and access notes", y)
    draw_field(c, "Usual driver or available helper", left_x, y, col_w)
    draw_field(c, "Carrier, blanket and records stored at", right_x, y, col_w)
    y -= 38
    draw_field(c, "Dog-specific handling or lifting guidance from the veterinary team", MARGIN, y, CONTENT_W, line_count=3)
    y -= 58
    draw_field(c, "Alternative route or travel notes", MARGIN, y, CONTENT_W, line_count=2)
    draw_footer(c, 2)


def page_three(c: canvas.Canvas) -> None:
    y = draw_header(c, 3, "Urgent signs and the veterinary call")
    y = draw_page_title(c, "Know what should not wait", "These signs do not identify a diagnosis. They are reasons to contact a veterinarian or emergency animal clinic immediately and follow professional transport instructions.", y)
    y = draw_section_title(c, "6. Urgent warning signs", y)
    warning_rows = [
        ["Sign", "Why it matters", "Action"],
        ["Collapse or inability to stand", "A critical circulation, breathing, neurological, toxin or trauma problem may be involved.", "Phone immediately and follow transport advice."],
        ["Trouble breathing; pale, blue or grey gums", "Airway, oxygen delivery or circulation may be compromised.", "Minimise stress and seek emergency care."],
        ["Repeated or unresolved seizures", "Ongoing seizures can cause injury and need rapid assessment.", "Keep the area safe, time the event and phone urgently."],
        ["Severe or uncontrolled bleeding", "Significant blood loss can become life-threatening.", "Seek immediate guidance; do not improvise a tourniquet."],
        ["Suspected poisoning", "Effects can progress before signs appear; care depends on the substance.", "Call at once; keep packaging if safe. Do not induce vomiting unless directed."],
        ["Severe heat illness", "Distress, weakness, confusion, vomiting, seizures or collapse can be critical.", "Phone immediately and follow current cooling and transport instructions."],
        ["Suspected snake bite", "Venom can affect swelling, breathing, nerves, bleeding or circulation.", "Keep the dog calm, limit movement and travel urgently."],
        ["Swollen abdomen and distress or unproductive retching", "A rapidly progressive gastric emergency may be possible.", "Do not wait for it to settle."],
        ["Serious trauma or repeated vomiting with weakness", "Shock, internal injury, obstruction or dehydration may be possible.", "Contact a vet urgently."],
    ]
    table = make_table(warning_rows, [125, 225, 161], row_font_size=6.2)
    y = draw_table(c, table, y, 370)
    y = draw_section_title(c, "7. What to tell the veterinary team", y)
    y = draw_two_column_checklist(c, [
        "What happened or may have happened.",
        "When it happened or signs began.",
        "Symptoms and whether they are changing.",
        "Possible exposure or trauma.",
        "Product, package or label if relevant.",
        "Approximate amount only if known.",
        "Current medicines and conditions.",
        "Recent food, exercise or travel.",
        "Safe photo or video if already available.",
        "Location of outdoor exposure where relevant.",
    ], y)
    y -= 4
    y = draw_section_title(c, "Emergency event notes", y)
    draw_field(c, "Time the event or symptoms began", MARGIN, y, 225)
    draw_field(c, "Time the veterinary clinic was called", MARGIN + 255, y, 256)
    y -= 38
    y = draw_field(c, "What happened and what changed", MARGIN, y, CONTENT_W, line_count=4)
    y -= 5
    draw_field(c, "Possible product, plant, food, animal or environmental exposure", MARGIN, y, CONTENT_W, line_count=2)
    draw_footer(c, 3)


def page_four(c: canvas.Canvas) -> None:
    y = draw_header(c, 4, "Preparation kit and safety limits")
    y = draw_page_title(c, "Prepare for transport, not home treatment", "Keep supplies together and easy to reach. Their purpose is safer communication, handling and travel while professional veterinary care is arranged.", y)
    y = draw_section_title(c, "8. Conservative preparation kit", y)
    kit_rows = [
        ["Item", "Purpose", "Caution"],
        ["Clean towels and disposable gloves", "Protect hands and help prepare for transport.", "Do not delay urgent travel for cleaning."],
        ["Spare lead and suitable carrier", "Secure movement from home or vehicle.", "Use equipment that suits the dog and condition."],
        ["Flashlight and charging cable", "Read labels and prepare during poor light or power interruption.", "Avoid adding stress to the dog."],
        ["Sterile saline", "General cleaning supply only when a vet advises its use.", "It is not an antidote or treatment for serious injury."],
        ["Familiar, correctly fitted muzzle", "Limited bite protection when safe and appropriate.", "Never obstruct breathing; do not use with vomiting, breathing difficulty or facial injury."],
        ["Records and emergency contact sheet", "Provide health history, medicines, numbers and directions.", "Review after every change."],
    ]
    table = make_table(kit_rows, [125, 200, 186], row_font_size=6.8)
    y = draw_table(c, table, y, 245)
    y = draw_section_title(c, "9. What not to do", y, accent=HONEY)
    y = draw_two_column_checklist(c, [
        "Do not give human medicine, leftover prescriptions or a guessed dose.",
        "Do not induce vomiting unless a veterinary professional specifically directs it.",
        "Do not delay urgent care to search online or collect every item.",
        "Do not force food, water or oral products into a distressed dog.",
        "Do not cut a snake-bite wound, suck venom, apply ice or use home antidotes.",
        "Do not apply an improvised tourniquet.",
        "Do not use restraint that risks injury or interferes with breathing.",
        "Do not assume brief improvement means a serious event has passed.",
    ], y)
    y -= 5
    y = draw_info_box(c, "<b>Use the phone call:</b> The veterinary team can account for the substance, injury, airway, age, existing disease and medicine already in your dog's body. Follow their situation-specific directions.", y, 46)
    y = draw_section_title(c, "Notes from your regular veterinarian", y)
    y = draw_field(c, "Dog-specific preparation or transport notes", MARGIN, y, CONTENT_W, line_count=5)
    y -= 6
    draw_field(c, "Kit last checked", MARGIN, y, 225)
    draw_field(c, "Records and medicine list last updated", MARGIN + 255, y, 256)
    y -= 38
    draw_field(c, "Additional item approved or recommended by the regular veterinarian", MARGIN, y, CONTENT_W, line_count=2)
    draw_footer(c, 4)


def page_five(c: canvas.Canvas) -> None:
    y = draw_header(c, 5, "South African context and handover")
    y = draw_page_title(c, "Outdoor, travel and sitter preparation", "Plan for local risks and for moments when the person caring for your dog is not the usual owner.", y)
    y = draw_section_title(c, "10. South African outdoor checks", y)
    y = draw_two_column_checklist(c, [
        "Heat, shade, water and route conditions checked before outings.",
        "Dog kept under reliable control around bush, holes, rocks and wildlife.",
        "Tick checks and veterinarian-guided prevention kept current.",
        "Household, garden, bait, medicine and toxic-food access managed.",
        "Nearest suitable after-hours clinic confirmed before rural travel.",
        "Veterinary numbers and directions kept available offline.",
        "Travel time, fuel and an alternative route considered.",
        "Dog checked after outings for weakness, pain, swelling, ticks or breathing change.",
    ], y)
    y -= 3
    y = draw_info_box(c, "A tick or one symptom does not diagnose biliary. Suspected snake bite, poisoning or severe heat illness needs urgent veterinary contact. Do not assume every town has a 24-hour veterinary service.", y, 44)
    y = draw_section_title(c, "11. Pet-sitter, boarding and travel handover", y)
    y = draw_two_column_checklist(c, [
        "Primary owner and backup contact details.",
        "Written medication instructions from current labels.",
        "Feeding routine and known reactions.",
        "Clinic choice and after-hours alternative.",
        "Payment or insurance arrangements.",
        "Limits of the sitter's treatment authority.",
        "Known fears, handling limits and escape risk.",
        "Location of carrier, kit, records and checklist.",
        "Update plan after any veterinary visit.",
        "Records and medicine packed for travel.",
    ], y)
    y -= 4
    y = draw_section_title(c, "12. Review and handover record", y)
    gap = 22
    col_w = (CONTENT_W - gap) / 2
    draw_field(c, "Checklist last reviewed", MARGIN, y, col_w)
    draw_field(c, "Next planned review", MARGIN + col_w + gap, y, col_w)
    y -= 38
    draw_field(c, "Copies stored at", MARGIN, y, CONTENT_W)
    y -= 38
    draw_field(c, "People who have received the current copy", MARGIN, y, CONTENT_W)
    y -= 43
    y = draw_section_title(c, "Travel or boarding details", y)
    draw_field(c, "Destination, boarding facility or sitter", MARGIN, y, col_w)
    draw_field(c, "Travel dates", MARGIN + col_w + gap, y, col_w)
    y -= 38
    draw_field(c, "Confirmed veterinary option near the destination", MARGIN, y, CONTENT_W)
    y -= 40
    c.setFillColor(PALE_GREEN)
    c.setStrokeColor(SAGE)
    c.roundRect(MARGIN, y - 58, CONTENT_W, 58, 8, fill=1, stroke=1)
    c.setFont(FONT_BOLD, 9)
    c.setFillColor(MOSS)
    c.drawString(MARGIN + 12, y - 18, "Keep the plan usable")
    p = Paragraph("Print one copy for the home and another for a sitter or family member. Save essential contacts and directions offline. Review medicine, weight, clinic availability and insurance details before every boarding stay or long trip.", SMALL_STYLE)
    _, height = p.wrap(CONTENT_W - 24, 35)
    p.drawOn(c, MARGIN + 12, y - 27 - height)
    draw_footer(c, 5)


def generate_pdf() -> None:
    PDF_PATH.parent.mkdir(parents=True, exist_ok=True)
    c = canvas.Canvas(str(PDF_PATH), pagesize=A4, pageCompression=1)
    c.setTitle("Dog Emergency Checklist for South African Owners")
    c.setAuthor("Dog Haven South Africa Editorial Team")
    c.setSubject("Printable dog emergency information, transport and veterinary contact worksheet")
    for page_function in [page_one, page_two, page_three, page_four, page_five]:
        page_function(c)
        c.showPage()
    c.save()


def get_font(path: str, size: int) -> ImageFont.FreeTypeFont:
    font_path = Path(path)
    if not font_path.exists():
        raise FileNotFoundError(font_path)
    return ImageFont.truetype(str(font_path), size)


def draw_wrapped_text(draw: ImageDraw.ImageDraw, text: str, xy: tuple[int, int], font: ImageFont.FreeTypeFont, fill: str, max_width: int, spacing: int = 8) -> int:
    x, y = xy
    words = text.split()
    lines: list[str] = []
    line = ""
    for word in words:
        candidate = f"{line} {word}".strip()
        if draw.textlength(candidate, font=font) <= max_width:
            line = candidate
        else:
            lines.append(line)
            line = word
    if line:
        lines.append(line)
    for line in lines:
        draw.text((x, y), line, font=font, fill=fill)
        y += font.size + spacing
    return y


def generate_og_image() -> None:
    OG_PATH.parent.mkdir(parents=True, exist_ok=True)
    image = Image.new("RGB", (1200, 630), "#fbf5e9")
    draw = ImageDraw.Draw(image)
    draw.rectangle((0, 0, 32, 630), fill="#005f32")
    draw.rectangle((32, 0, 43, 630), fill="#f1b82d")
    draw.rounded_rectangle((670, 80, 1120, 550), radius=34, fill="#ffffff", outline="#e5dcc8", width=4)
    draw.rounded_rectangle((720, 135, 1070, 498), radius=20, fill="#eef6ef", outline="#007a3d", width=3)

    title_font = get_font("C:/Windows/Fonts/arialbd.ttf", 59)
    sub_font = get_font("C:/Windows/Fonts/arial.ttf", 27)
    small_bold = get_font("C:/Windows/Fonts/arialbd.ttf", 22)
    label_font = get_font("C:/Windows/Fonts/arialbd.ttf", 18)

    draw.text((100, 94), "DOG HAVEN SOUTH AFRICA", font=label_font, fill="#005f32")
    y = draw_wrapped_text(draw, "Dog Emergency Checklist", (100, 145), title_font, "#123f8f", 520, spacing=7)
    y += 21
    y = draw_wrapped_text(draw, "A printable owner worksheet for contacts, records and transport preparation.", (100, y), sub_font, "#253044", 510, spacing=6)
    y += 35
    draw.rounded_rectangle((100, y, 435, y + 56), radius=28, fill="#005f32")
    draw.text((130, y + 15), "FREE 5-PAGE PDF", font=small_bold, fill="#ffffff")
    draw.text((100, 548), "doghaven.co.za", font=small_bold, fill="#005f32")

    mark = Image.open(MARK_PATH).convert("RGBA")
    mark.thumbnail((128, 128), Image.Resampling.LANCZOS)
    mark_x = 831 - mark.width // 2
    image.paste(mark, (mark_x, 168), mark)
    check_y = 340
    for width in [245, 205, 225]:
        draw.rounded_rectangle((770, check_y, 802, check_y + 32), radius=4, outline="#007a3d", width=4)
        draw.line((778, check_y + 17, 787, check_y + 25), fill="#007a3d", width=4)
        draw.line((787, check_y + 25, 797, check_y + 8), fill="#007a3d", width=4)
        draw.rounded_rectangle((820, check_y + 7, 820 + width, check_y + 23), radius=8, fill="#d7e7d9")
        check_y += 58

    image.save(OG_PATH, "PNG", optimize=True)


if __name__ == "__main__":
    generate_pdf()
    generate_og_image()
    print(PDF_PATH)
    print(OG_PATH)
