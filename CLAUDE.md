# Portfolio — Josuke

## Purpose
- Personal portfolio website (coded), also intended for Design graduate school applications
- Website is the primary format; no PDF version is planned for now

## About
- Student at Northwestern University: Design, Data Science/Statistics, Economics (minor)
- Interested in combining design, data, and behavioral economics to understand
  human decision-making and incentives
- Long-term goal: found a company that uses design, data, and technology to address
  social challenges, collaborating with existing institutions
  (government, corporations, education, healthcare)
- Plans a Design graduate degree to develop a personal design philosophy

## Design philosophy (core message)
- Design and data science work together in BOTH directions — not "design first, data second":
  - Design → data: fieldwork (interviews, observation) finds a real issue for a few people;
    data science shows whether it holds for many
  - Data → design: data science surfaces patterns/assumptions; fieldwork checks them
    and finds the why — reaching real issues faster
  - Goal: find real issues faster and address them more effectively
- Roles as Josuke frames them (2026-11-16): design = finding people's real needs in the field
  (small scale); data science = showing those needs are shared by many people AND using data
  to form hypotheses that guide the search for needs through design
- Avoid copy that implies a fixed sequence (e.g., "design finds…, then data proves…")
- Focus on the structures and root causes behind problems, not just surface solutions
- Work with existing institutions rather than disrupting them
- Individual-level and structural-level problems matter equally
- "Design" is broader than UX — avoid UX-only framing and vocabulary
  (e.g., "seamless", "user experience" as the headline)

## Tagline candidates
- Hero (decided 2026-11-13): "People and data, read together."
- Previous / alternatives: "Grounded in people. Proven with data." (dropped: reads one-directional) /
  "Design beneath the surface." / "Human insight, tested at scale."
- Avoid "solve" — overclaims for structural problems

## Featured project: myPOMO
- Pomodoro-based study/task management app, team project
- Role (confirmed 2026-11-18): Co-founder / Design & Marketing Lead
- Pre-beta survey = beta sign-up form: 817 responses. Number of actual beta users is unknown.
  57 pieces of beta feedback, used to improve the app (ongoing). No "15 design areas / 49 addressed" figures.
- Award as shown on the site (confirmed 2026-11-17): National Grand Prix, National PC Olympiad 2022
  (パソコン甲子園 / PC Koshien); 3rd Place, Teen Apps Awards 2023 (アプリ甲子園 — use the English name "Teen Apps Awards")
- Started 2022. Target users: mainly students who have things they want to work on
  but can't manage their time to take them on; secondarily adults in the same situation
- Josuke leads both the design team (UI/UX design) and the marketing team (pre-beta survey,
  beta, feedback analysis) (confirmed 2026-11-18)
- Scheduling inputs (confirmed 2026-11-18): free time, deadlines, estimated time to finish each task, priority
- Not yet released → no in-app usage data; frame impact through research process
- Make individual contribution clear without downplaying the team

## Project selection (decided 2026-11-17)
- Projects page (in order): myPOMO, Elementals, 77th NADA School Festival
  (home "Main Projects" shows the same three)
- Convertible Table and Selected Visual Work live in About → "Other Work", not on the Projects page
- European Football removed from the site (page/content files kept but unlinked)

## Other project candidates
- Nada Junior & Senior High School — redesign of the English School Profile in Figma,
  based on reviewer comments
- Behavioral economics research on anchoring (AI vs. Wikipedia source trust) —
  data visualization (scatterplots, regression, deviation scores in Chart.js)
  and conceptual framing (Bayes' rule, anchoring bias, overconfidence)
- (Removed from site 2026-11-17) Shiny dashboard: competitive balance across Top 5 European football leagues
  (Gini coefficient, title race gap). Solo, published Mar 2026; seasons 2014/15–2024/25;
  5 metrics (CV & Gini of points, title / UCL (4th–5th) / relegation gaps);
  metric dropdown + season slider; line plot + cross-league bar chart.
  STAT 302 final project (Winter 2026). Live app: https://jotakanu.shinyapps.io/App-1/ Source notes: Additional_Information.qmd in the
  STAT302/shiny_labs/Josuke_Takashima_Final Drive folder.
  Findings: CV and Gini rank leagues almost identically; La Liga had a small title gap early,
  PL the smallest over the last 5 seasons; La Liga & Ligue 1 have larger UCL (4th–5th) gaps;
  PL relegation gap far larger than other leagues; La Liga two-tier = top clubs compete
  closely among themselves (small title gap, large UCL gap), rest evenly matched below
  (small relegation gap except 2017/18)
- Kaggle projects: Airbnb price prediction (LightGBM), on-time delivery
  classification (feature engineering, target encoding)

## Experience
- teamLab — Solution Catalyst internship (2 weeks)
- SoftBank — CEO office research/slides (5 weeks) + business-team data analysis/R&D (5 weeks)
- Rakuten Eagles — data analyst (upcoming, during a one-year leave from Northwestern)

## Writing guidelines
- Don't pigeonhole into one industry or role
- "Entrepreneurship" is not just "business"
- Present individual and structural problems as equally important

## Site goals
- The site itself should demonstrate "design × data science"
  (e.g., data visualization, thoughtful interaction)
- Case studies should show how research shaped decisions,
  with qualitative and quantitative evidence side by side

## Design file
- Figma: https://www.figma.com/design/KNDoM1U23dM0IUyh8SRvqq/dsgn370_portfolio (page node 0:1)
- Landing page designed by Josuke; remaining sections were drafted by Claude Code
- Everything is a draft — expect refinement or drastic changes, especially to the
  Claude-drafted sections. Treat Josuke's own design choices as the reference.

## Tech stack (decided)
- Plain HTML/CSS, no build step; font: Futura PT via Adobe Fonts (kit qah4mdm: futura-pt 300–800 + italics,
  plus futura-pt-condensed 400/700 and futura-pt-bold 700; jo76taka.github.io must be on the kit's allowed domains),
  with Jost (Google Fonts) kept as fallback
- Hosting: GitHub Pages (account jo76taka)
- Pages: index / projects / about (incl. skills + interests) / contact, projects/*.html
- Layout (decided 2026-11-16): 60px left/right page margin on every page (`--gutter`, 20px on phones);
  nav order Home / Project / About / Contact, fixed at top, #000A15 at 60% once scrolled,
  hides while scrolling and reappears when scrolling stops (js/nav.js); full-screen home hero
- `.ph` = image placeholder, `.todo` = highlighted text still to confirm
- Case study structure (decided 2026-11-18, from DSGN 370 guest panel; myPOMO is the reference):
  back link (← All projects, or ← About for Other Work) → hero → statement + summary block
  (Problem / Solution / Outcome + Role, Team, Timeline, Domain, Methods tags, Tools) →
  Problem (with evidence) → Insight → Design Response → Process → Outcome (Result / What I Learned / Next).
  Section h2s carry the orange highlight bar (`<h2><span class="hl">`); case study headers are shortened.
- Project content lives in `content/` as Markdown (source of truth for message + copy;
  HTML in `projects/` is the presentation). Each page starts from a one-sentence message;
  section headings make claims and should convey the message on their own.

## To decide
- Visual direction (draft exists in Figma; not final)
- Contact info and links

## Working with Claude
- Items under "To decide" are open — propose options with a recommendation,
  but don't lock them in without confirmation
- Don't invent facts, numbers, or outcomes for projects or experience;
  ask when details are missing
- Update this file when a decision is made (move it out of "To decide")
