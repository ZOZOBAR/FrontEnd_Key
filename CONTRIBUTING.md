English | [简体中文](CONTRIBUTING.zh-CN.md)

# Contributing to FrontEnd_Key

FrontEnd_Key is a source-grounded, bilingual frontend learning knowledge base. Foundation V1 is frozen: normal contributions add or improve knowledge within the established system; they do not trigger a redesign.

## What contributions are accepted

Useful contributions include new personal learning notes, course material, structured self-study material, real project or debugging lessons, carefully scoped corrections, and improvements that preserve existing learning detail. New external material should be authoritative and explicitly useful to the current learning boundary.

Do not submit speculative curriculum expansion, framework/dependency/build-tool changes, decorative UI changes, or a redesign as part of ordinary knowledge ingestion.

## Read before changing the knowledge base

Read these documents before editing learning content:

- [AGENTS.md](AGENTS.md) — operational rules for coding agents
- [docs/CONTENT_GUIDE.md](docs/CONTENT_GUIDE.md) — detailed content-ingestion methodology
- [docs/DESIGN_SYSTEM.md](docs/DESIGN_SYSTEM.md) — visual and interaction system
- [docs/TEACHING_VISUAL_AUDIT.md](docs/TEACHING_VISUAL_AUDIT.md) — teaching-medium taxonomy
- [docs/INTERACTIVE_VISUALIZATION_PROTOTYPE.md](docs/INTERACTIVE_VISUALIZATION_PROTOTYPE.md) — interactive teaching and Learning Instrument conventions

Responsibilities are deliberately distinct: [README.md](README.md) is the public introduction and quick-start guide; this file is the human contributor workflow; `AGENTS.md` is the operational policy for coding agents. The linked documents remain the authoritative detailed guidance.

## Add a new learning source

1. Inventory the source: identify its format, topic, boundary, likely destination, and overlap risk.
2. Read the source fully enough to account for useful details, then read `docs/PROJECT_STATUS.md` and the relevant existing target.
3. Extract concepts, definitions, syntax, examples, reasoning, warnings, mistakes, fixes, comparisons, edge cases, and project discoveries.
4. Classify each meaningful detail, assign an accountable outcome, and integrate it into the most appropriate existing destination before considering a new page.
5. Identify the learner's problem and select the lightest effective teaching medium.
6. Complete bilingual integration and validate the result.

The path is: source inventory → extraction → detail accounting → merge/complement/correction → learning problem → teaching medium → teaching structure → visualization or interaction only when justified → bilingual integration → validation.

## Protect source integrity and completeness

Original source evidence is read-only. Never overwrite raw notes, protected `sources/` material, or archives without explicit authorization. Preserve useful classroom wording, source framing, examples, warnings, reasoning, syntax variants, and real debugging context.

Do not compress source-derived content for page length, aesthetics, or visual simplicity. Use hierarchy, whitespace, progressive disclosure, examples, navigation, diagrams, and appropriate information design to make complete material readable. Visualization adapts to knowledge; knowledge does not adapt to visualization.

## Account for every meaningful detail

During intake, classify each meaningful item as:

- **NEW** — not represented; integrate it in the appropriate existing structure.
- **OVERLAP** — already represented; merge only genuinely repeated information without losing unique detail.
- **COMPLEMENT** — adds useful depth, wording, examples, warnings, or reasoning; retain it alongside the existing material. (The detailed guide calls this **COMPLEMENTARY**.)
- **CORRECTION** — preserve useful source framing and visibly distinguish the correction, more accurate understanding, or modern-web note.
- **CONFLICT** — do not silently choose one version; retain the source boundary and resolve it visibly or defer it for review. (The detailed guide calls this **POSSIBLE CONFLICT**.)

Give every meaningful source point a final outcome: **COVERED**, **PARTIALLY COVERED**, **MERGED**, **CORRECTION**, **DEFERRED**, or **NOT APPLICABLE**. A heading that names the same topic is not sufficient evidence of coverage.

## Choose the teaching medium from the learning problem

Classify the problem first: hierarchy, containment, spatial behavior, dependency, branching, execution order, state transition, cause and effect, comparison, data flow, syntax mapping, or debugging. Then choose the lightest medium that clarifies it:

- Text for meaning and reasoning; code for implementation.
- Tables for genuine comparison or reference; ASCII for compact developer and terminal relationships.
- Static technical diagrams for spatial hierarchy, containment, or a relationship that needs to be seen.
- Interactive teaching diagrams or bounded Learning Instruments only when a learner can meaningfully cause, observe, compare, trace, select, step through, predict, or verify behavior.

Keep text and code authoritative. Relationship first, content first, and vertical first are the defaults. Default does not mean card: use cards only for semantic grouping. Do not animate the interface; animate the idea—motion must expose a meaningful transition, not decorate a static page.

## Visualization and interaction gate

Use visualization when text or code alone makes an important relationship hard to perceive. Preserve ASCII where it remains clearer. Use interaction only when it materially improves understanding of a bounded concept; the default state must still explain the full relationship without JavaScript. Follow the existing Learning Instrument conventions rather than creating a generic playground or a new component family for convenience.

## Bilingual parity

Chinese and English are complete reading modes. Translate ordinary visible headings, explanations, callouts, tables, controls, helper text, and relevant accessibility labels naturally in both modes. Keep code, commands, APIs, properties, tags, identifiers, and syntax unchanged. Verify actual visible content and English typography/layout; do not assume translation attributes alone establish parity.

## Design-system constraints

Respect the frozen Foundation V1 system. Preserve readability, study-note character, responsive behavior, technical editorial hierarchy, semantic signal color, and restrained feedback. Use whitespace, alignment, typography, rules, and relationship structure before adding a card. Do not make normal knowledge ingestion a reason to redesign the architecture, navigation, dependencies, design language, or interaction runtime.

## Architecture expansion gate

Knowledge ingestion is normal; system expansion is exceptional. Propose a new page architecture, navigation model, dependency, runtime pattern, or Learning Instrument family only when the existing system genuinely cannot represent the source-derived knowledge clearly. Document the specific learner problem and why the lightest existing medium cannot solve it, then obtain explicit approval before expanding the system.

## Validation checklist

Before submitting a contribution:

- Confirm protected sources and archives were not modified.
- Check every meaningful source detail has a classification and final accountable outcome.
- Verify content remains within the current learning boundary and preserves source/correction labels where needed.
- Check Chinese and English visible content for equivalent learning depth.
- Validate affected HTML, CSS, and JavaScript; preserve core readability if JavaScript fails.
- Check responsive behavior and rendered browser evidence for any visual or interactive change.
- Inspect the diff and update only the project-memory documents whose stated responsibility requires it.

## Pull request checklist

- [ ] I read the required governance documents.
- [ ] I preserved source evidence and did not destructively compress learning content.
- [ ] I completed detail accounting and recorded the right treatment for overlaps, complements, corrections, and conflicts.
- [ ] I selected the teaching medium from the learning problem, not from a visual preference.
- [ ] Any visualization or interaction is justified, bounded, accessible, and not decorative.
- [ ] Chinese and English have equivalent visible learning depth.
- [ ] I kept Foundation V1 intact and did not introduce frameworks, dependencies, build tools, or deployment systems.
- [ ] I completed the relevant validation and reviewed the diff.
