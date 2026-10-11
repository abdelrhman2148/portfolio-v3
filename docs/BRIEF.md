# Design brief: "Runbook"

The site is one versioned engineering document: `AF-RB-001, rev 2026.10`. It has § sections, a margin column for section numbers, sidenotes, numbered figures and tables, case studies written as post-mortems, and a revision history as the footer.

Why this direction: the first prototype read as AI-generated (near-black with an orange pop, giant grotesk name, pills, stat tiles, marquee, chips, uniform cards). This direction drops all of that, takes its colors from the owner's photos (navy blazer, pink shirt, white trousers), and turns the NDA into a strength, because post-mortems are a format he actually writes.

## Tokens

See `design/tokens.css` for the source of truth.

| Token | Light | Dark | Use |
| --- | --- | --- | --- |
| `--paper` | #F4F5F7 | #0E1626 | page background |
| `--ink` | #15233F | #DCE2EC | text, rules that matter, box strokes |
| `--muted` | #545E72 | #97A3B7 | secondary text, labels |
| `--rule` | #CDD2DB | #27334B | hairlines |
| `--rubric` | #B4325E | #F29BB8 | § numbers, figure labels, link underline, focus ring. The only accent. |
| `--wash` | #F5D9E3 | #3A2233 | highlight behind a result line, key figure node |
| `--fig` | #E8EBF0 | #142038 | figure ground |
| `--fig-line` | #8E98AB | #55637F | connectors in figures |

Contrast (checked): muted/paper ≥ 5.2, rubric/paper ≥ 5.6 in light and dark. Never put white text on `--rubric`. Use `--paper` on `--ink` or `--rubric`.

Theme mechanics: tokens on `:root` are the light theme. Dark comes from `@media (prefers-color-scheme: dark) :root:not([data-theme=light])` and from `:root[data-theme=dark]`. An inline `<head>` script reads `localStorage.theme` before paint, so there is no flash.

## Type

- **Newsreader** (variable, optical sizes): everything readable. H1 clamp(54px, 8.6vw, 108px) weight 500, tracking -0.025em. H2 clamp(34px, 4vw, 46px). H3 26px. Body 19px/1.6 (18px on mobile).
- **Martian Mono** 11–13px: document furniture only (doc ID, § numbers, figure and table captions, dt labels, dates, cert codes). Never use it for sentences.
- **Noto Naskh Arabic**: the owner's name in Arabic, once, under Plate I (`lang="ar" dir="rtl"`).

## Layout

- Max width 1120px. Every section is a 3-column grid: `96px` § margin | `minmax(0, 40rem)` main | `1fr` sidenotes, with a 40px gap.
- Below 1000px: 2 columns, and sidenotes drop under the main column with a dashed top rule.
- Below 640px: 1 column, with the § number above the heading.
- Sections are separated by a 1px `--rule` border. 72px vertical padding (52px on mobile).
- No cards, no border radius, no shadows. Tables and definition lists are used instead of grids of boxes.

## Components

- **RunningHeader**: sticky, 52px. Doc ID + rev on the left. § nav links (scroll horizontally on mobile, never hidden). Theme toggle: a text button "Dark"/"Light" with `aria-pressed`.
- **Title page**: meta line (Runbook · Revision · Cairo), H1 name, italic role, an "Abstract" block with an ink top rule, an availability sentence with `--wash` highlight, and two routes ("If you're hiring" → §3, "If you have a project" → §4). Plate I (square portrait) and the Arabic name sit in the sidenote column.
- **Contents (§0)**: an ordered list of § links with a short mono descriptor on the right.
- **Results (§1)**: "Table 1" caption, a two-column table, and values at 30px. This is the only place headline numbers appear.
- **PostMortem**: an ID line (`PM-01 · sector · Client [Redaction]`), H3 title, Figure, then a `<dl>` with Summary / What I did / Result (`--wash` highlight) / Stack. On the homepage it shows in full; the `/work/[slug]` page adds a longer write-up.
- **Redaction**: an inline ink bar (6.5em × .85em) with `tabindex=0`, `role=img`, `aria-label="Client name withheld under NDA"`, and a tooltip "withheld · NDA" on hover and focus. This is the site's one playful detail; use it once per case and nowhere else.
- **Figure**: a `--fig` ground with an inline SVG drawn only with tokens. Square corners, 1px ink strokes, the key node in `--wash` + `--rubric`. Labels in Newsreader 16 and annotations in Martian Mono 11. Caption: "**Fig. N** sentence." On mobile, if the SVG is wider than the screen, the ground scrolls (`tabindex=0`, `role=region`, `aria-label`). Better still, give a vertical variant below 640px.
- **Experience (§3)**: "Table 2" of roles (dates in mono), a cert list (AWS Security Specialty and SAA in bold first), tools as one plain sentence, and buttons for Download CV (`/cv.pdf`) and LinkedIn.
- **Freelance (§4)**: an intro sentence, a `<dl>` of 4 services, and "How a project runs" as a numbered list (01–04 in rubric mono). It's a real sequence, so numbering is fine here.
- **Known issues (§5)**: `<details>` FAQ, each summary prefixed `KI-01`… in rubric mono.
- **Contact (§6)**: H2 "Contact", one sentence, the email as a large `mailto:` link, a Copy email button with a `role=status` message, and LinkedIn. Plate II (full-body) sits in the sidenote column, decorative (`alt=""`).
- **Footer**: a "Revision history" table plus the colophon "Built with Astro, deployed with GitHub Actions". In the real build, inject the short commit SHA and build date at build time (e.g. `import.meta.env.PUBLIC_COMMIT`).
- **Buttons**: square, 44px min height, mono 13px. Primary is ink fill. Secondary is an ink outline.

## Motion

Almost none. Page-load and scroll animations are off by default. The only transitions allowed are hover color and the redaction tooltip fade (150ms). Nothing loops. Respect `prefers-reduced-motion` anyway.

## Never

- Pill or status badges, pulsing dots, local clocks
- Stat tiles or 4-up number strips (numbers go in Table 1)
- Logo or tool marquees, chip and tag clouds (tools are one sentence)
- Icon-in-tinted-square feature cards, "What sets me apart" grids
- Fake terminal or CI animations, rotating taglines
- Gradients, glassmorphism, blobs, particle backgrounds, shadows, rounded cards
- Slogan headings ("Systems that keep shipping."). Headings are plain nouns.
- Inter, Space Grotesk, or Geist as display type
- Screenshots or names from client work
