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

The knowledge base grows with actual learning. Do not silently introduce advanced material that has not been studied. JavaScript follows actual learning progress; React is separate from JavaScript. Raw source material and integrated notes remain separate. Never overwrite source evidence.

## Correction policy

Do not silently rewrite inaccurate or simplified course notes. Preserve useful source framing and distinguish, when appropriate:

- Course Note
- More Accurate Understanding
- Modern Web Note
- Correction
- Supplementary Knowledge

## Content integration algorithm

When new learning material arrives:

1. Identify its source.
2. Register/store it appropriately.
3. Read `docs/PROJECT_STATUS.md`.
4. Read the relevant existing knowledge page.
5. Compare new material with existing content.
6. Classify it as NEW, DUPLICATE, EXPANSION, CORRECTION, PROJECT EXPERIENCE, or TOO ADVANCED.
7. Integrate useful changes without duplication.
8. Preserve useful course terminology.
9. Update PROJECT_STATUS if a learning boundary changed.
10. Update ROADMAP only if future priorities changed.
11. Update SOURCE_INDEX if sources changed.
12. Update CHANGELOG for meaningful project changes.
13. Verify affected pages.
14. Report what changed.

## Bilingual policy

- Chinese mode: navigation/menu/UI must be Chinese; technical terms may retain English with Chinese explanation.
- English mode: navigation/menu/UI must be English; check English typography/layout independently; do not use mechanical replacement as the standard of quality.

## Design policy

`sources/javascript/JS笔记_整理版.html` is an important visual reference. Current UI is not final. Do not redesign without explicit user approval. Avoid generic AI SaaS/developer-documentation aesthetics. Prioritize readability, personal study-note character, appropriate information density, and bilingual typography.

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
