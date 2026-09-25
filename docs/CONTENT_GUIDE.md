# Content Guide

Editorial pipeline:

```text
raw learning material
→ source registration
→ compare with existing knowledge
→ classify
→ integrate
→ verify
→ update project memory
```

FrontEnd_Key is a complete, integrated, easy-to-read personal frontend knowledge base, not a compressed cheat sheet. Simplicity comes from information architecture and explanation, not from deleting useful learning detail.

For every meaningful source point, record an accountable outcome during comparison:

- **COVERED** — meaning and useful detail are represented
- **PARTIALLY COVERED** — topic exists but useful source detail is absent
- **MERGED** — genuinely repeated information combined while unique detail remains
- **CORRECTION** — source framing is retained where useful and accompanied by clarification
- **DEFERRED** — meaningful but beyond the current learning boundary
- **NOT APPLICABLE** — not suitable for the knowledge base, with a stated reason

Do not consider a broad topic heading evidence of coverage. Review meaningful sub-points, including definitions, syntax variations, examples, reasoning steps, warnings, learning notes, expected outputs, and course-specific framing. Deduplicate only genuinely identical material; preserve useful unique details and examples from every source.

Classify incoming material as:

- **NEW** — not represented yet
- **DUPLICATE** — already represented without useful difference
- **EXPANSION** — adds depth or examples to an existing topic
- **CORRECTION** — fixes an error, outdated statement, or course simplification
- **PROJECT EXPERIENCE** — a real implementation or debugging lesson
- **TOO ADVANCED** — retain as evidence, but defer integration

For intake comparison, also mark every individual detail **NEW**, **OVERLAP**, **COMPLEMENTARY**, **CORRECTION**, or **POSSIBLE CONFLICT** before choosing its final accountable outcome. An overlap may be merged only when it is genuinely repeated; complementary examples, wording, warnings, and reasoning remain. A possible conflict must retain the source framing and be resolved visibly as a correction, more accurate understanding, modern-web note, or supplementary explanation—not silently overwritten.

Integrated pages may use Definition, Quick Understanding, Syntax, How It Works, Step-by-Step, Example, Example Walkthrough, Course Note, More Accurate Understanding, Modern Web Note, Supplementary Knowledge, Common Mistake, Real Project Pitfall, Warning/Danger, and Quick Reference. Not every topic needs every block. Use these structures to keep detailed content readable rather than deleting it.

Both language modes must translate all ordinary visible learning and interface content naturally. Code and code-language syntax remain unchanged.

## Teaching architecture review

A source item is not educationally finished merely because it appears somewhere on a page. For logic-heavy material, check whether a learner can understand what it is, why it exists, where it belongs, syntax, important symbols, the smallest example, execution/state changes, the result, and its relationship to nearby concepts.

Use one new idea at a time in introductory examples. Prefer a smallest example before adding an accumulator, array, function, DOM operation, or larger algorithm. Use a tree, sequence, branch, comparison, or trace alongside prose when a relationship is central. At first formal syntax appearance, explain important symbols generally and in the current example; later use short reminders.

When useful, progress from why/what/mental model through syntax, a small example, line explanation, execution trace, result, practical case, contrast or mistake, and a larger case. This is guidance, not a required template. Preserve source detail and solve length through structure, not removal.

### Select the teaching medium

Choose a medium because the concept needs it, not because a section looks empty:

- **Text** explains meaning and reasoning.
- **Code** demonstrates implementation.
- **Table** supports genuinely tabular comparison or reference.
- **ASCII** shows lightweight developer or terminal relationships.
- **Static technical diagram** clarifies hierarchy, structure, containment, or simple relationships.
- **Interactive teaching diagram** is useful when user-controlled focus reveals a relationship more clearly.
- **Learning simulator** is justified only when manipulating or stepping through behavior materially improves learning.

Keep knowledge authoritative and complete before choosing a visualization. The working order is source knowledge → teaching structure → information relationship → interaction model → component → visual styling. Do not create interaction just because an existing component can be reused. HTML interactions should reveal structure/semantics, CSS interactions should show real spatial or style behavior, JavaScript interactions should expose execution/branching/value/state, and Git interactions should expose state transitions/workflow. Interaction should focus attention while the default view still communicates the full concept.

### Source-to-teaching pipeline

When new notes or course material arrive, do not simply append them as prose. Process them through:

```text
source material
→ inventory and source boundary
→ read source and existing target
→ knowledge extraction and detail accounting
→ new / overlap / complementary / correction / conflict classification
→ concept decomposition
→ prerequisite and unfamiliar-symbol check
→ relationship/behavior analysis
→ learning-problem identification
→ lightest effective teaching medium
→ teaching structure and examples
→ visual/interaction model when justified
→ bilingual parity
→ browser and learner review
```

Before visualizing, name the problem the learner cannot easily see: hierarchy, spatial relationship, state, execution order, branching, transformation, dependency, data flow, before/after, cause/effect, containment, or comparison. First expose the relationship, then layer in syntax and detail. Visualization adapts to knowledge; knowledge does not adapt to visualization. Useful knowledge is never shortened merely to fit a visual or interaction model.

Promote interaction only when causing, observing, comparing, tracing, selecting, or stepping through behavior helps the learner discover or verify a rule. Connect code, visual model, human-language explanation, and result where that connection helps comprehension. Begin with the smallest useful model and progress to practical use, edge cases/mistakes, and larger integrated cases. During browser/learner review, check whether learners can explain the relationship, predict what happens next, connect behavior back to code, and understand the default state without interaction. If removing motion does not reduce understanding, reconsider whether it is needed.

### Intake and merge rules

Do not create a destination page because a source file exists. Integrate in this order: existing section, existing chapter, new chapter in an existing domain, then a new domain/page only when the concept requires it. Future sources can include course notes, PDF/HTML exports, Markdown, plaintext, code examples, user-transcribed screenshots, debugging records, project lessons, and later React/API/backend material; their format does not change the integrity requirement.

The default teaching progression is prerequisite → smallest example → plain-language explanation → relationship → code → behavior/execution → practical example → common mistake → edge case → integrated example. Use only the stages that the material justifies. Preserve classroom wording, simplified explanations, warnings, and project discoveries where they contribute to learning. Do not introduce outside research as if it were source-derived; mark it as supplementary or corrective material.
