# Curiosity & Commitment — Project Context

## What This Is
A self-guided, multi-page website for **engineers in their first couple of years in the industry** — the stage where good habits, curiosity, and finishing what you start turn a coder into a reliable teammate. It is a field guide for engineers who want to grow from "I close my tickets" to "I own my craft, I speak up, and I see things through."

Hosted on GitHub Pages. Built as static HTML/CSS/JS with no build step. Sibling to:
- `../craft-ownership/` (**Craft & Ownership**) — the *next* step after this guide, for senior engineers (4–8 years) who own features end-to-end and raise the craft bar.
- `../multiplier-playbook/` (**Beyond IC**) — the step after that, for engineers becoming leaders.

The three guides form a progression: **Curiosity & Commitment → Craft & Ownership → Beyond IC**.

## Who It's For
Engineers roughly **2–4 years into the industry**. They write working code, they deliver stories, they know their stack at a surface level. What they're building next: the habits, voice, curiosity, and follow-through that turn a capable coder into the engineer a team can rely on.

They are **not** senior ICs yet — they don't own features end-to-end, they don't yet set team standards, they don't mentor juniors. Those live in the sibling guide. This one is earlier on the road.

## Tone — This Is Critical
This is a **learning resource**, not a report card. The tone must be:
- **Empowering and growth-oriented** — "here's what good engineers at this stage do" not "here's what you're failing at"
- **Mentor-like** — a slightly-more-experienced colleague sharing frameworks, not a tech lead issuing rules
- **Respectful** — assume the reader is smart, capable, and wants to grow
- **Practical** — every section should have actionable frameworks, scenarios, patterns, and anti-patterns
- **Apprentice-forward** — the recurring frame is "grow your curiosity, grow your commitment; both are muscles"

### What to AVOID
- **Leader / manager language** — no "delegate", "manage", "team composition", "performance management"
- **Senior-IC framing** — no "you own the feature end-to-end", "you set team standards", "you mentor juniors"
- **Persona words** — never "Artisan", "Catalyst", "Multiplier" (these are internal framework words, not public-facing)
- **"Craft" in the title or navigation** — the sibling site owns that word; avoid confusing readers. Use "craft" sparingly in body prose only where it's the natural word.
- Accusatory language ("you're not doing X", "this is broken")
- Singling out roles or experience levels
- Team-specific internal references (named tech debt items, named people)

### What to DO
- **Use "grow your craft"** framing — small, consistent steps
- **Use "the team"** when referring to peers — engineer to engineer
- Use reflective questions ("Ask yourself: am I doing X?")
- Frame as frameworks and techniques ("The Five Whys", "Propose, Don't Complain", "The 15-Minute Rule")
- Include external references (books, videos, articles) so readers can go deeper
- Use "common pitfall" and "better approach" in the pitfall/better grid
- Use "Key Insight" for important reflections (not "truth bomb")

### The "Why" Principle — This Is Critical
Every practice, framework, and recommendation in this guide MUST explain WHY it exists — not just WHAT to do. Young-career engineers especially need the reasoning so they can:
1. **Build judgment, not rules-following** — understanding why lets them adapt when context shifts
2. **Defend the practice** — "we write tests because last time someone shipped without tests it took a week to find the bug" beats "best practice says so"
3. **Internalise instead of obey** — a habit you understand sticks; a rule you don't survives only as long as the enforcer

When writing or editing content: for every framework, convention, or recommendation, include the reasoning. What problem does it solve? What is the cost of NOT doing this? What does it look like when it's missing?

## Content Principles — Applied to Every Page
Every content page must include:
1. **The WHY** — for every recommendation
2. **Concrete scenarios** — "you're in standup and…", "you open an MR and…", "you're reviewing a PR and…"
3. **Tips** — short, actionable, grounded in a scenario
4. **Frameworks** — named, short (4–8 steps), action-shaped, practice-able this week
5. **Patterns & anti-patterns** — both called out explicitly
6. **Dos and don'ts** — the pitfall/better grid makes these visible
7. **External references** — 2–3 books, talks, or blogs per major topic

If a section only says "do X" without WHY, or without a scenario, or without a do/don't, it is incomplete.

## Design System
- **Theme:** "Forge & Ember" — warm ember/terracotta accent, cream background, warm dark text. Workshop/apprentice metaphor.
- **Fonts:** Source Sans 3 (body) + Inter (headings/UI) via Google Fonts
- **Colors (light):** `#B8461C` accent, `#A13E16` link, `#FBF4EC` background, `#2B1E17` text
- **Colors (dark):** `#E89064` accent/link, `#1B140F` background, `#F2E6D3` text
- **Dark mode:** supported via `data-theme` attribute on html element, toggled with localStorage key `cc-theme`
- **Layout:** max content width 720px, page width 960px, line-height 1.75
- **No emojis in prose** — only in path card icons and tip boxes

## File Structure
```
curiosity-commitment/
  index.html              — Home page with hero and "Choose Your Path" grid
  foundations.html        — Apprentice mindset, curiosity & commitment muscles, propose-don't-complain, time & focus, career ownership
  clean-code.html         — Readability, naming, refactoring habits, modern language features, anti-patterns
  depth.html              — Tech depth: your language, framework, DB. Exploration habits, reading docs/source
  debugging-reading.html  — Scientific method for bugs, reproducing, stack traces, ramping up on codebases
  testing.html            — Why test, what to test, basic test pyramid, writing testable code, not skipping tests
  git-reviews.html        — Git hygiene, small MRs, self-review, writing reviewable MRs, reviewing others, receiving review
  delivery.html           — Estimation, finishing what you started, dogfooding, getting unstuck, not overcommitting, velocity
  questioning.html        — Five Whys, asking good questions, challenging anti-patterns, business context, propose-don't-complain
  speaking-up.html        — Huddle voice, having opinions, feedback both ways, receiving feedback, asking for feedback
  team-citizenship.html   — Pairing etiquette, standups, helping peers/onboarding, async communication, being a team player
  resources.html          — Books, videos, podcasts, blogs, framework quick-reference
  self-assessment.html    — Interactive checklist with localStorage persistence (keys: cc-check-sa-XX)
  css/styles.css          — Shared design system (Forge & Ember palette)
  js/script.js            — Shared interactivity (theme, nav, accordion, tabs, checklist, fade-in)
  CLAUDE.md               — This file
  .nojekyll               — GitHub Pages asset serving
```

## Key CSS Classes
Same component library as sibling sites:
- `.framework` — bordered box for named frameworks and step-by-step processes
- `.key-insight` — accent-bordered box for important reflections
- `.tip` — tinted box with icon (variants: `.success-tip`, `.warning-tip`, `.danger-tip`, `.info-tip`, `.purple-tip`)
- `.pitfall` / `.better` — red/green comparison grid for "watch out for" vs "try this instead"
- `.checklist` — interactive checkbox lists with localStorage persistence (`cc-check-*`)
- `.accordion` — expandable sections for detailed content (single-open)
- `.comparison` — side-by-side comparison tables
- `.card-grid` / `.card` — content cards in responsive grids
- `.page-toc` — in-page table of contents at top of each content page
- `.path-card` — home page navigation cards
- `.hero` — tall centered home-page section
- `.fade-in` — triggered by IntersectionObserver on scroll

## Content Themes (What 2–4 Year Engineers Need to Practice)

### Foundations
1. **The apprentice mindset** — curiosity and commitment as the two muscles you grow now
2. **Propose, don't complain** — the foundational habit that unlocks everything else
3. **Curiosity as a practice** — questioning, exploring, asking "why does this work this way?"
4. **Commitment as a practice** — finishing what you started, not overcommitting, keeping promises small
5. **Time & focus** — deep work, avoiding context-switch thrash, protecting learning hours
6. **Career ownership** — learning goals, asking for feedback, tracking your growth

### Clean Code Habits
7. **Readability first** — code is read more than written
8. **Naming as a design decision** — the most important habit you build now
9. **Refactor-as-you-go** — the Boy Scout rule at the story level
10. **Modern language features** — don't write 2010 code in 2026
11. **Common anti-patterns** — copy-paste programming, magic numbers, god functions, primitive obsession

### Depth in Your Stack
12. **Knowing your language deeply** — idioms, standard library, async/concurrency model
13. **Knowing your framework** — lifecycle, dependency injection, middleware, the "framework tax"
14. **Knowing your database** — indexes, transactions, query plans, the N+1 problem
15. **Reading the source** — the library you use is not a black box
16. **Exploration habit** — 1–2 hours a week learning outside the day's work

### Debugging & Reading Code
17. **The scientific method for bugs** — hypothesis → experiment → evidence
18. **Reproducing before fixing** — bugs you can't reproduce are bugs you can't fix
19. **Reading stack traces properly** — top to bottom, then inward
20. **Using the debugger** — not print-debugging forever
21. **Ramping up on a codebase** — follow a request from entry point to DB and back
22. **Production investigation basics** — logs, dashboards, recent deploys

### Testing Basics
23. **Why we test** — confidence to change, documentation, feedback loop
24. **What to test** — pyramid intro, happy path + edges + error cases
25. **Writing testable code** — pure functions, dependency injection basics
26. **Not skipping tests** — "I was going to write them later" is never true
27. **TDD when it helps** — not dogma, but a technique worth knowing

### Git, MRs & Code Review
28. **Git hygiene** — meaningful commits, small MRs, branches, not force-pushing shared work
29. **Writing MRs others want to review** — small, scoped, described, self-reviewed
30. **Self-review first** — find your own nits before asking others
31. **Reviewing others' code** — it's part of the job, not optional
32. **Receiving review well** — without defense, without argument in the moment

### Delivery & Completion
33. **Estimation basics** — reference stories, the honest "I don't know yet, let me spike"
34. **Finishing what you started** — the canonical failure mode at this stage
35. **Not overcommitting** — one clear yes beats three unclear maybes
36. **Dogfooding before "done"** — actually run what you built
37. **Getting unstuck** — the 15-minute rule, rubber duck, when to ask
38. **Delivering at expected velocity** — velocity is a trailing indicator of habits

### Questioning & Proposing
39. **The Five Whys** — a tool for requirements, bugs, and decisions
40. **Asking good questions** — specific beats vague, written beats verbal for async
41. **Challenging anti-patterns kindly** — "I noticed X — what's the reason?" not "this is wrong"
42. **Getting business context** — why are we building this? who uses it?
43. **Propose, don't just complain** — the core habit this guide drives home, repeatedly

### Speaking Up & Feedback
44. **Voice in huddles and standups** — silence is not neutral; it's absence
45. **Having opinions** — you are allowed, you are expected, you must
46. **Giving feedback to peers** — SBI, timely, specific, kind
47. **Receiving feedback without defense** — the 24-hour rule
48. **Asking for feedback** — "what's one thing I could do better?"

### Team Citizenship
49. **Pairing etiquette** — driver/navigator, the 10-minute switch, not zoning out
50. **Standups that matter** — blockers, progress, help offered
51. **Helping newer joiners** — onboarding is everyone's job
52. **Async written communication** — Slack/email that respects the reader's time
53. **Being a team player** — the quiet cost of takers, the compound value of givers

## Tech Stack Context (for examples in content)
Examples reference Java (modern features up to Java 25), Spring Boot, TypeScript/Angular/React, Python, PostgreSQL, MongoDB, Docker, Git, GitLab CI. Illustrative — not mandates.

## Pain Points This Guide Addresses
These are the real gaps this site is built to close. Every page should address at least one.

1. **Not following clean coding practices** — readability, naming, refactoring skipped
2. **Purely focused on delivery** — "I wrote the code" as the finish line
3. **Lack of sense of ownership** — story is closed, brain has moved on
4. **Not delivering at expected velocity** — missed estimates, slips, no early signal
5. **Lack of proactiveness to sign up for work** — waiting to be told
6. **Not questioning status quo** — "that's how it's done here"
7. **Following existing anti-patterns without questioning** — copy the old pattern, perpetuate it
8. **Being silent in huddles** — no voice, no opinion, no contribution
9. **Being defensive about feedback** — "but I did it because…"
10. **Not doing frequent feedback** — neither giving nor asking
11. **Not having business context** — building a thing without knowing what it's for
12. **Not asking questions or not asking the right questions** — or worse, pretending to understand
13. **Needing support all the time** — no habit of trying first
14. **Not following agile practices** — standups drift, backlog drift, no closure
15. **Not a team player** — solo worker in a team sport
16. **Taking a backseat in all conversations** — watching, not contributing
17. **Not having opinions** — the everything-is-fine engineer
18. **Abandoning work signed up for** — not taking things to completion
19. **Signing up for too many things** — saying yes to everything, finishing nothing
20. **Not having tech depth** — surface knowledge of language, framework, DB
21. **Not questioning how code is written / not using modern features** — writing 2010-style code
22. **Not helping peers in onboarding or other activities** — head-down, silo'd
23. **Just complaining without proposing a solution** — naming the pain without owning the fix

### Writing Principles — How Every Page Should Be Written

#### 1. Always explain the WHY
For every practice, rule, framework, or recommendation, say *why* it exists. What problem does it solve? What happens when engineers skip it? Without the why, the reader memorises rules they'll abandon the first time they're inconvenient. With the why, they build judgment.

#### 2. Show, don't just tell — concrete scenarios
Every tip, framework, and pitfall should be grounded in a scenario the reader recognises: "you open the repo and see…", "you join standup and…", "you hit a failing test at 5pm and…". Abstract advice is forgettable.

#### 3. Patterns and anti-patterns, side by side
Every topic should show both: what good looks like AND what the common trap looks like. The pitfall/better grid makes this concrete.

#### 4. Dos and don'ts
Where a practice has a clear shape, spell the dos and don'ts out directly. The reader should be able to scan and act.

#### 5. Frameworks should be referenceable and practice-able
- **Named** — a handle the reader can recall
- **Short** — 4–8 steps
- **Action-shaped** — each step is something you *do*
- **Practice-able** — a reader could try it this week

#### 6. Propose, don't just complain — a recurring theme
This phrase and its variants should appear across Foundations, Questioning, Speaking Up, and Team Citizenship. It is the foundational habit of growth: seeing a problem is easy; naming it plus proposing a fix is the engineer move.

#### 7. Feedback flows both ways
Giving, asking for, and receiving feedback are all required skills at this stage. Receiving without defense is often the hardest — make it a named section.

#### 8. External references
Each major topic cites 2–3 books, talks, or blogs for depth. Useful references for this stage:
- **Clean Code** (Robert C. Martin) — readability, naming
- **The Pragmatic Programmer** (Hunt & Thomas) — the foundational mindset book for this stage
- **Code Complete** (McConnell) — the comprehensive craft book
- **Refactoring** (Martin Fowler) — the refactor-as-you-go habit
- **A Philosophy of Software Design** (Ousterhout) — how to think about complexity
- **The Missing README** (Chris Riccomini) — literally written for this career stage
- **The Software Engineer's Guidebook** (Gergely Orosz) — career growth through the early years
- **Debugging** (David Agans) — the scientific method for bugs
- **Working Effectively with Legacy Code** (Feathers) — reading and changing code you didn't write
- **Talks:** Kevlin Henney on readability, Kent Beck on TDD, Sandi Metz on naming, Dan North on software design
- **Blogs:** Martin Fowler, Julia Evans, Dan Luu, The Pragmatic Engineer, Increment
