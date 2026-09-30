# Content Ingestion Contract

## Scope

Use for new or changed learning material. Source coverage—not response length—defines completeness. Preserve useful source terminology, examples, warnings, workflows, professor/course framing, and corrections; do not add unsupported course content.

## Fast ingestion protocol

```text
ROUTE → READ NEW/CHANGED SOURCE ONCE → COVERAGE CHECKLIST → INGEST
      → ONE SOURCE ↔ PAGE QA → PASS → update materially affected records → report → stop

FAIL → concrete omission list → targeted fix → targeted verification → PASS
```

1. Identify source, type, boundary, likely destination, and overlap risk. Use `SOURCE_INDEX` to avoid rereading unchanged sources.
2. Read the source fully enough to account for meaningful detail, `PROJECT_STATUS`, and the affected page.
3. Inventory concepts, definitions, syntax, examples, reasoning, warnings, mistakes, fixes, comparisons, edge cases, workflows, and discoveries.
4. Classify each item: **NEW**, **OVERLAP**, **COMPLEMENTARY**, **CORRECTION**, or **POSSIBLE CONFLICT**. Give a final outcome: **COVERED**, **PARTIALLY COVERED**, **MERGED**, **CORRECTION**, **DEFERRED**, or **NOT APPLICABLE**.
5. Merge into an existing section, then existing domain, then new chapter; create a page only when conceptually necessary.
6. Build teaching structure before styling. Select the lightest effective medium from text, code, table, ASCII, static diagram, interactive diagram, or bounded instrument.
7. Maintain full visible Chinese/English learning parity. Code and identifiers remain unchanged.
8. Run one affected-scope validation: source coverage, targeted page QA, source/archive protection, bilingual parity, technical sanity, and diff. Do not repeat broad QA after a targeted fix unless that verification exposes a structural problem.

## Constraints

Normal ingestion must not redesign UI, navigation, architecture, dependencies, or interaction runtime. Update `SOURCE_INDEX`, `PROJECT_STATUS`, and `CHANGELOG` only when their owned state materially changes. Do not stage, commit, or push unless explicitly requested.
