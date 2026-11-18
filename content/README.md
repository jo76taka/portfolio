# Portfolio content

This folder is the source of truth for what each project page *says*.
The HTML in `projects/` is the presentation; the Markdown here is the message and copy.
Edit the copy here first, then carry it into the HTML.

## How a project page is structured

Each page starts from **one sentence**: what a reader should take away. Every section exists to support that sentence.

1. **Front matter**: title, subtitle, role, team, year, tools, links (becomes the page title and meta list)
2. **Message**: the one sentence (becomes the statement paragraph under the hero)
3. **Sections**: each one has
   - a small **label** (what kind of section it is, e.g. *Problem*, *Insight*)
   - a **heading that makes a claim**, not a topic ("Planning Is the Burden", not "Insight")
   - a lead paragraph
   - one supporting block (stats, list, steps, image)
   - an **Evidence** note: *qualitative* (fieldwork, interviews, feedback), *quantitative* (survey, data), or *design* (artifact)

The section order follows the project's argument, not a fixed Problem → Insight → Process → Outcome template.

### The headings test

Read only a page's headings, top to bottom. If they don't get the message across, the structure isn't done yet.
Each project file lists its headings at the top so this is easy to check.

### Conventions

- `[TODO: …]` = a fact still to confirm (same as `.todo` in the HTML)
- `> **Image placeholder:** …` = an image still to make (same as `.ph` in the HTML)
- Image paths are relative to this file's folder, e.g. `../../images/mypomo/hero.jpg`
- Don't add numbers, results, or outcomes that aren't confirmed

## Projects

| Order | Project | Message |
|---|---|---|
| 1 | [myPOMO](projects/mypomo.md) | Survey data showed people don't lack time; they stall at planning. So myPOMO plans for them, and each version was redesigned from what users said. |
| 2 | [Elementals](projects/elementals.md) | Luxury can be defined by experience rather than price: scents unlocked by real places, using only the sensors already in a phone. |
| 3 | [77th NADA School Festival](projects/nada-school-festival.md) | Reopening the festival to everyone meant its identity had to work for two audiences at once, so I built it from one logo and tested it with both until it did. |

Removed from the site (2026-11-17): European Football Competitiveness (files kept, unlinked).
Moved to About → Other Work, not yet written: Convertible Table, Selected Visual Work.

## Across the portfolio

- The site's core idea is design and data science working **in both directions**.
  myPOMO shows both: the survey surfaced the problem, and beta feedback shaped the redesign.
  NADA and Elementals are design-led. Each file lists what's still missing to show the other side.
- Make Josuke's own contribution clear on every page without downplaying the team.
