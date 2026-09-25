# FrontEnd_Key Operating Policy

## Project purpose

FrontEnd_Key is Siyu's canonical integrated frontend knowledge base. The user's normal learning directories remain organized according to the user's own habits. Agents adapt to that organization; the user should not have to reorganize learning files for an agent.

## User effort minimization

This is a first-class project principle. If existing rules safely establish classification, destination, naming, or integration behavior, do not ask the user to manually classify files, rename files, move files, repeat known context, or maintain exact subfolder paths. Ask only when meaningful ambiguity, destructive risk, or a genuine learning/design decision remains.

## Source discovery

Future source discovery is root-based and incremental. Do not require exact subfolder paths. Known roots will later include broad frontend self-study and BU CS303 roots.

- External source roots are read-only.
- FrontEnd_Key is the canonical read/write integration destination.
- Do not scan the entire computer.
- Prefer detecting new, modified, unregistered, or previously processed sources whose content changed.
- Do not reprocess unchanged material unnecessarily.

## Source priority

1. User-provided notes
2. BU course material
3. Structured self-study material
4. User real-project/debugging experience
5. External authoritative references when explicitly useful or approved

## Content policy

The knowledge base grows with actual learning. It is a complete, integrated, easy-to-read personal frontend knowledge base—not a compressed cheat sheet. The user's original learning notes are the primary knowledge evidence. Do not silently introduce advanced material that has not been studied. JavaScript follows actual learning progress; React is separate from JavaScript. Raw source material and integrated notes remain separate. Never overwrite source evidence.

### Completeness over aggressive summarization

When integrating a source, review every meaningful knowledge point. Do not reduce detailed material to only a high-level summary, or remove useful examples, step-by-step reasoning, source-specific warnings, learning notes, syntax variations, or small meaningful details merely for brevity. A broad topic heading is not proof of complete coverage: meaningful sub-points must be evaluated individually.

Every meaningful source point must eventually be accountable as **COVERED**, **PARTIALLY COVERED**, **MERGED**, **CORRECTION**, **DEFERRED**, or **NOT APPLICABLE**. A source is not fully integrated simply because its general topics appear in the knowledge base.

Deduplication means merging genuinely repeated information without losing unique details. Preserve useful details, examples, and course-specific framing from each source; never use “duplicate” as permission to retain only the shortest explanation.

Manage complexity through organization, hierarchy, explanation, examples, progressive disclosure, navigation, and visual design—not by deleting useful learning detail.

## Permanent priority order

Resolve tradeoffs in this order:

1. **P0 — Source integrity:** original source material must not be damaged or silently rewritten.
2. **P1 — Knowledge completeness:** useful source-derived detail must not disappear merely for brevity.
3. **P2 — Document / source fidelity:** respect source structure, terminology, learning boundaries, document responsibilities, and approved knowledge architecture.
4. **P3 — Teaching architecture:** make complete knowledge understandable with minimal assumed prior knowledge.
5. **P4 — Bilingual parity:** Chinese and English preserve equivalent knowledge structure.
6. **P5 — Information design:** hierarchy, spacing, diagrams, typography, comparison, and traces reduce cognitive load.
7. **P6 — UI / UX:** visual polish comes last.

UI serves knowledge. Never compress knowledge to fit UI.

### Content-first development order

Use this order for learning-page and product changes:

```text
source knowledge
→ teaching structure
→ information relationship
→ interaction model
→ component
→ visual styling
```

Do not reverse this order to fit a mockup or component. Every UI, diagram, animation, or interaction change must solve a learning problem, clarify a relationship, improve an action, or provide useful feedback—and should be simpler or clearer than the current solution. If it has no meaningful learning or usability benefit, do not add it. Do not change a successful live component solely to resemble a concept mockup; mockups are references, while the live product and observed use are product evidence.

FrontEnd_Key favors high-aesthetic information design, strong interaction feedback, motion that explains content, and restrained technical visual language. The aim is not frequent movement: animate the idea. Interaction and motion should expose concept behavior, such as DOM hierarchy, real CSS layout/style changes, JavaScript execution/state, or Git transitions. Other technologies need interaction models based on their own behavior. Prefer cause-and-effect actions that let learners cause, observe, compare, trace, select, or step through something; motion is useful when the transition itself matters. If removing motion does not reduce understanding, reconsider it. Give unmistakable but calm feedback for hover, focus, activation, selection, navigation, copy, and learning controls. Do not add motion to make a page feel premium or static.

When adding learning material, follow the detailed source-to-teaching pipeline in `docs/CONTENT_GUIDE.md`; do not append material as undifferentiated prose. Preserve and account for useful source detail before selecting any visual or interaction treatment.

### Source and document fidelity

FrontEnd_Key is a complete integrated collection of the user's frontend learning notes, not a compressed cheat sheet. Every useful source detail must be reviewed and accounted for. Agents may merge true duplicates, reorganize for readability, connect complementary information, add teaching structure, and preserve useful examples, classroom wording, warnings, reasoning, and project pitfalls.

Agents must not aggressively summarize; delete detail because a page feels long; reduce multiple useful examples to one for aesthetics; silently replace sources with general model knowledge; silently expand the learning boundary; reorganize the whole knowledge architecture for personal preference; or change established document responsibilities without explicit approval.

**Never compress source-derived learning content merely to improve page length, aesthetics, or apparent simplicity.** Solve length through hierarchy, sections, navigation, whitespace, progressive explanation, relationship diagrams, and appropriate information design—not deletion.

### Durable user requirements

When the user gives a requirement, determine whether it is local/one-time or a durable project principle. If it affects future teaching, integration, organization, or design, treat it as a candidate durable rule and update the appropriate project documentation when authorized.

For example, a request to explain a ternary condition, `?`, `:`, and tiny examples establishes the broader rule that important syntax cannot assume symbol knowledge. Apply it to `++`, `--`, `+=`, `-=`, `&&`, `||`, `===`, and future in-scope syntax at first meaningful introduction.

## Teaching architecture

The goal is **complete knowledge + minimal assumed prior knowledge + low cognitive load + clear relationships + comfortable reading**. Beginner-friendly means explicit, not childish. Do not make the learner mentally fill important reasoning gaps.

### Relationship first and ASCII diagrams

When knowledge contains hierarchy, sequence, execution flow, cause/effect, dependency, state transition, true/false branching, comparison, or data flow, show that relationship visually before or alongside prose. Text explains; structure shows relationships.

ASCII / monospace diagrams are a first-class teaching language, not placeholders. Use them for knowledge trees, execution order, branching, state changes, Git workflow, code relationships, and future in-scope DOM/React/API flows. Future redesign must preserve useful ASCII explanatory structure rather than substitute decorative graphics.

Choose the teaching medium that fits the concept: text explains; code demonstrates; tables serve genuinely tabular comparison/reference; ASCII shows lightweight developer relationships; static technical diagrams clarify hierarchy, structure, containment, or simple spatial relationships; interactive teaching diagrams focus user attention when selection helps understanding; learning simulators are reserved for cases where manipulating or stepping through behavior materially improves learning. Do not make everything interactive. The concept determines the interaction: HTML interactions reveal structure and semantics, CSS interactions should demonstrate real CSS and spatial effects, JavaScript interactions reveal execution/branching/value/state, and Git interactions reveal state transitions and workflow. Reuse an interaction only when it suits the concept.

### Examples, symbols, traces, and complexity

- Decompose large logical topics into real understandable branches without artificial fragmentation.
- Introduce one new idea at a time. Start with the smallest example before combining arrays, functions, DOM, or larger algorithms.
- Prefer when useful: WHY → WHAT → mental model → syntax → smallest example → symbol/line explanation → execution trace → result → practical example → common mistake/contrast → larger case.
- Before using a concept in an introductory example, ask whether the learner has learned it. Explain it first or use a simpler example.
- At first formal appearance, explain important symbols both generally and in the current example; later use short reminders where appropriate.
- Connect code ↔ human language ↔ relationship diagram ↔ result for important examples. These representations must correspond directly.
- For logic-heavy topics, prefer concrete execution → observed state changes → pattern → mental model → general rule when it improves understanding.
- Use execution/state traces where intermediate state matters: arrows, iteration tables, variable tables, before → after, condition → result, or state transitions.
- Build progressive complexity: smallest example → change one thing → practical example → combined case → debugging/edge case.

### Clarification, contrast, errors, and Git

- Explain what a concept does **not** do when a negative distinction prevents likely confusion.
- Compare commonly confused concepts nearby with side-by-side comparison, tables, or ASCII diagrams where useful.
- Teach mistakes as **error/symptom → what happened → why → correct mental model → fix → avoidance**, not merely “wrong / correct.” Preserve useful project debugging experience.
- Give major logical sections a mental map when it helps learners place a concept in a connected tree.
- Git teaches state, not command memorization. For important commands explain: where the learner is, what changes, what has not happened, and what usually happens next. Preserve risk classifications.

### Cognitive load and workflow

One learning step normally has one primary visual focus. Knowledge density may be high; visual density should remain controlled. Whitespace is functional: it separates steps, creates rhythm, reduces simultaneous cognitive load, and shows boundaries.

Permanent workflow: source material → source coverage → integrated knowledge → teaching architecture → relationships/examples/traces → bilingual parity → information design → final UI/UX. Never create a pretty component and then compress knowledge to fit it.

## Correction policy

Do not silently rewrite inaccurate or simplified course notes. Preserve useful source framing and distinguish, when appropriate:

- Course Note
- More Accurate Understanding
- Modern Web Note
- Correction
- Supplementary Knowledge

## Mandatory automated knowledge-ingestion workflow

When the user asks to add, merge, or integrate a learning source, interpret it as a request to run this pipeline—not as permission to append prose or redesign a page. **Content first:** never begin with visual styling.

1. Inventory the source: identify file, type, topic, likely destination, source boundary, and overlap risk.
2. Read the source completely enough to account for useful detail; read `docs/PROJECT_STATUS.md` and the relevant existing target before editing.
3. Make a detail inventory: concepts, definitions, syntax, examples, reasoning, warnings, mistakes, fixes, comparisons, edge cases, workflow lessons, and project discoveries.
4. Classify each meaningful item as **NEW**, **OVERLAP**, **COMPLEMENTARY**, **CORRECTION**, or **POSSIBLE CONFLICT**. Give each a final accountable outcome: **COVERED**, **PARTIALLY COVERED**, **MERGED**, **CORRECTION**, **DEFERRED**, or **NOT APPLICABLE**.
5. Preserve the source boundary. Label material as source-derived, correction/more accurate understanding, modern-web note, or supplementary explanation when that distinction matters. Never silently replace learning history with textbook prose or outside knowledge.
6. Choose the knowledge destination in this order: existing section → existing chapter → new chapter in an existing domain → new page only when conceptually justified. File structure follows knowledge architecture.
7. Merge complete knowledge, including complementary detail and useful source wording; use hierarchy, examples, and progressive disclosure rather than destructive compression.
8. Identify the learning problem, choose the lightest effective medium, and build the teaching structure. Add visualization or interaction only when justified by learner behavior.
9. Apply the existing design system and build/verify equivalent Chinese and English learning depth. Core content must remain useful without JavaScript.
10. Validate content completeness, affected HTML/CSS/JS, responsive behavior, source/archive protection, and the diff. Update `SOURCE_INDEX`, `CHANGELOG`, status, and roadmap only when their stated responsibility requires it.
11. Stop when source integrity, knowledge completeness, teaching structure, justified visualization, bilingual parity, and validation are complete. A detector finding alone does not reopen design work.

Normal ingestion must not change page architecture, navigation, dependencies, design language, interaction runtime, or introduce a new Learning Instrument family. Such system expansion needs explicit justification because existing architecture cannot represent the knowledge clearly.

## Bilingual policy

The knowledge base provides two complete reading modes. Audit actual visible content rather than assuming that the presence of `data-zh`/`data-en` attributes provides coverage.

- Chinese mode must feel like a Chinese frontend knowledge base. Translate navigation, menus, page and section headings, body explanations, callouts, tables, buttons, search and helper UI, footer/interface text, and applicable accessibility labels. Technical terms may retain standard English where useful, preferably with Chinese explanation (for example, 盒模型（Box Model）). Do not leave ordinary translatable headings or explanations in English.
- English mode must feel like a complete English frontend knowledge base. Translate the same visible content naturally into learning-note English, with independent typography/layout checks; do not mechanically translate Chinese word for word.
- In both modes, code, commands, API names, property names, tag names, identifiers, and syntax remain unchanged.

## Design policy

`sources/javascript/JS笔记_整理版.html` is an important visual reference. Foundation V1’s live UI is established; do not redesign without explicit user approval and a concrete learner/browser reason. Avoid generic AI SaaS/developer-documentation aesthetics. Prioritize readability, personal study-note character, appropriate information density, and bilingual typography.

The approved V2 direction is Technical Editorial × Industrial Graphic Design × Developer Tool Precision × Learning UX: a technical publication that became interactive. Visual quality should come mainly from typography, grid, proportion, whitespace, hierarchy, relationships, consistency, and feedback—not accumulated effects. The editorial grid is a knowledge coordinate system: it may be more present around figures and identity areas, and quieter behind long reading passages and dense code. Signal colors retain semantic meaning (lime for primary/current/selected, cyan for secondary/informational relationships, red for warning/error/failure, ink/steel for neutral); never rely on color alone. Important actions need immediate, restrained feedback. Prefer rules, markers, path emphasis, labels, and small motion over glow, heavy shadows, bounce, or generic card animation. Vertical-first composition is the default for hierarchy, sequence, branching, execution, and state change; recompose vertically on mobile. Whitespace, typography, alignment, and hairlines come before adding a card.

Static checks and design detectors do not establish visual quality. When browser-rendered evidence is unavailable, report visual QA as unverified or blocked. Treat real browser screenshots and direct learner feedback as stronger evidence than code-only assumptions; classify observed findings by usability/readability, visible polish, minor optical detail, or an intentional validated design decision. Do not change an approved design only to satisfy an automated detector, and do not suppress uncertain findings without evidence.

For significant visual/product design work, use applicable installed Product Design skills and follow their workflow. Do not mark Design QA passed without rendered evidence.

## Visual asset policy

Do not add images merely to decorate topics. Add visuals when they materially improve understanding.

Preferred order:

1. Original FrontEnd_Key diagrams
2. User/course-provided diagrams
3. Authoritative external educational visuals
4. Other external references only when necessary

Prefer original SVG diagrams for Box Model, Flexbox, Grid, DOM, Git workflow, HTTP, and React component/data flow. Never hotlink random external images. External assets must eventually record source, retrieval date, usage/license note, local path, and where used in `docs/ASSET_INDEX.md`.

## Progressive enhancement

Core note content must remain readable if `notes.js` fails. JavaScript enhances the site; it must not be required to reveal learning content. Preserve `file://` compatibility.

## Safety

Never:

- modify external learning source roots
- overwrite raw source notes
- modify archive unless explicitly authorized
- redesign without approval
- delete useful explanations silently
- mix React content into JavaScript notes
- scan unrelated areas of the user's computer
- make destructive Git operations casually

Prefer minimal, reversible changes.

## File responsibility

| File | Purpose | Update when |
|---|---|---|
| `README.md` | Human-facing project overview | Structure or usage materially changes |
| `AGENTS.md` | Permanent agent operating policy | Project policy changes |
| `CHANGELOG.md` | Meaningful project history | A meaningful user-visible/project-level change ships |
| `docs/PROJECT_STATUS.md` | Current learning boundaries | Integrated scope changes |
| `docs/ROADMAP.md` | Future directions | Learning priorities change |
| `docs/SOURCE_INDEX.md` | Source identity and processing state | A source is added, moved, or reprocessed |
| `docs/ASSET_INDEX.md` | Visual asset registry | A visual asset is added or changed |
| `docs/CONTENT_GUIDE.md` | Editorial workflow | Integration rules change |
| `docs/DESIGN_SYSTEM.md` | Current design policy | Approved design direction changes |
| `docs/DECISIONS.md` | Durable architectural decisions | A lasting decision is made |

## Session-end checklist

For substantial work:

1. Verify affected pages.
2. Inspect `git diff` if Git is initialized.
3. Confirm source/archive files were not unintentionally modified.
4. Update only project-memory documents that genuinely require updates.
5. Report what changed, why, files changed, verification performed, and remaining issues.

During implementation, inspect the relevant files, current architecture, tokens/components, and project documentation before editing. Make targeted changes, reuse existing architecture where reasonable, and avoid unnecessary dependencies. After editing, inspect the diff and run relevant syntax, semantic, and whitespace checks. Iterate through audit → small prototype → learner/browser review → targeted correction → rollout → polish when teaching interaction is uncertain; expand only after review confirms that it improves understanding.
