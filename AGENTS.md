# FrontEnd_Key Agent Constitution

## Purpose and invariants

FrontEnd_Key is the canonical integrated frontend learning knowledge base. Adapt to the user's existing learning organization; do not require manual classification, renaming, or source relocation when the project can determine it safely.

Priority order: source integrity → knowledge completeness → source/document fidelity → teaching architecture → bilingual parity → information design → UI polish.

- Original external sources and archive material are read-only unless explicitly authorized.
- Source priority: user notes → BU course material → structured self-study → real project/debugging experience → approved external references.
- Discover sources incrementally from known roots; never default to scanning the whole computer or rereading unchanged material.
- Preserve useful source terminology, examples, reasoning, warnings, corrections, and learning boundaries. Never compress source knowledge for page length or aesthetics.
- Do not add unsupported curriculum. React remains separate from JavaScript.
- Chinese and English are equivalent reading modes; technical code and identifiers remain unchanged.
- Foundation V1 is established. Normal ingestion does not redesign architecture, navigation, dependencies, design language, or interaction runtime.
- Core knowledge must remain readable if JavaScript fails and support `file://` use.
- Do not perform destructive Git operations, stage, commit, or push unless explicitly asked.

## Minimum sufficient context

Read this file, then [docs/PROJECT_STATUS.md](docs/PROJECT_STATUS.md). Do not recursively scan the repository or load every governance document by default.

| Task | Then read | Then inspect |
|---|---|---|
| Content ingestion | `docs/CONTENT_GUIDE.md`, `docs/SOURCE_INDEX.md` | New/changed source and affected page only |
| UI, layout, or knowledge design | `docs/DESIGN_SYSTEM.md` | Affected page(s); mature references only if needed |
| Source traceability | `docs/SOURCE_INDEX.md` | Named source(s) only |
| Historical question | `CHANGELOG.md` | Only relevant history |
| Project policy change | This file and affected canonical contract | Relevant documents only |

## Required decisions

Use the least invasive existing destination and teaching medium. Escalate only for meaningful ambiguity, destructive risk, new authority, or a genuine learning/design decision.

Classify source-derived detail and record its accountable outcome through the ingestion contract. Preserve source framing when correcting a simplified statement. Treat a broader system expansion as exceptional and require explicit justification and approval.

## Document ownership

| File | Owns |
|---|---|
| `README.md` / `README.zh-CN.md` | Human-facing entry and routing |
| `AGENTS.md` | This constitution and task routing |
| `docs/PROJECT_STATUS.md` | Compact current-state recovery |
| `docs/SOURCE_INDEX.md` | Source identity, destination, and incremental processing state |
| `docs/CONTENT_GUIDE.md` | Ingestion contract |
| `docs/DESIGN_SYSTEM.md` | UI and knowledge-design contract |
| `CHANGELOG.md` | Meaningful history |

Supporting reference records may inform a matching task but are not universal required reading: `docs/TEACHING_VISUAL_AUDIT.md` and `docs/INTERACTIVE_VISUALIZATION_PROTOTYPE.md`.

## Completion

Validate only the affected scope, inspect the diff, preserve unrelated working-tree changes, update only documentation whose owned state changed, and report concisely. Stop when the requested outcome is complete.
