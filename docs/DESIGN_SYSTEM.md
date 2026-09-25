# Design System Policy

- Foundation V1 visual system is established. Preserve the successful live system during normal source ingestion; redesign requires explicit justification and approval.
- `sources/javascript/JS笔记_整理版.html` is an important visual reference.
- Future redesign requires explicit user approval and user-approved visual references.
- Chinese UI must be Chinese; English UI must be English.
- The two modes are complete reading modes, not partially translated shells. In Chinese mode, translate ordinary headings, explanatory text, callouts, tables, controls, and helper/interface text into Chinese; technical English may remain with an educational Chinese explanation. In English mode, provide natural learning-note English rather than mechanical translation. Code and identifiers remain unchanged in both modes.
- English layout and typography require independent checking.
- Avoid generic AI-generated SaaS/documentation aesthetics.
- Preserve readability, study-note character, appropriate information density, and responsive behavior. Favor hierarchy, grouped blocks, progressive disclosure, examples, and navigation to make complete material approachable; do not pursue visual simplicity by deleting useful learning details.

## Information-design grammar

- Relationship first: use visible trees, sequences, arrows, comparisons, and state traces when relationships are central to understanding.
- ASCII/monospace diagrams are permanent explanatory assets. They may be styled for readability and responsive overflow, but their teaching structure must be preserved.
- Typography expresses hierarchy. Whitespace creates separation and breathing room. Indentation expresses dependency/nesting. Arrows express execution, process, and state transition.
- Side-by-side layouts support comparison or code/explanation mapping. Tables support state/value tracing. Code blocks contain code. Notes provide support. Warnings identify genuine risk or important mistakes.
- Cards are semantically grouped units, not the default wrapper for every paragraph. Avoid card soup: if everything is equally prominent, nothing is emphasized.
- One learning step should normally have one primary visual focus. High knowledge density does not require high visual density.

## Approved visual direction and interaction principles

The approved V2 direction is Technical Editorial × Industrial Graphic Design × Developer Tool Precision × Learning UX: the feeling of a technical publication that became interactive. Preserve the successful live system when extending it; a concept mockup is a reference, not a mandate to replace working layouts.

Visual changes need a clear learning or usability reason. Prefer typography, grid, proportion, whitespace, hierarchy, relationships, consistency, and feedback as the sources of visual quality. The editorial grid acts as a knowledge coordinate system: stronger around technical figures and identity areas, quieter around long reading passages and dense code. Use signal colors semantically: lime for primary/current/selected emphasis, cyan for secondary or informational relationships, red for warnings/errors/failure, and ink/steel for neutral states. Pair color with labels or symbols.

Important actions should respond immediately with restrained feedback. Hairlines, technical markers, path emphasis, concise labels, subtle surface changes, and small motion are preferred to heavy shadows, glow, bounce, or generic card animation. Use vertical-first composition for hierarchy, sequence, branching, execution, and state transitions; recompose mobile layouts vertically. Default to whitespace, alignment, typography, and rules before adding a card. Cards need semantic justification.

The interaction preference is high-aesthetic information design + strong feedback + motion that explains content + restrained technical language. The goal is “animate the idea”: use motion when a meaningful from→to change helps the learner perceive cause and effect, such as an item moving under real Flexbox behavior, a branch executing, or state moving between Git stages. Let the concept determine interaction; do not carry an existing animation pattern into another technology just for consistency. Prefer direct manipulation or selection that lets the learner cause, observe, compare, trace, or step through behavior. Feedback for hover, focus, activation, selection, navigation, copy, and learning controls should be clear and immediate, with restrained secondary changes. Avoid movement added only to energize a static page; if removing it does not reduce understanding, reconsider it.

Static code checks and automated design detectors cannot prove visual quality. When browser-rendered evidence is unavailable, record visual QA as unverified or blocked. Use browser screenshots and direct learner feedback to guide targeted refinements; do not make an approved design change just to clear a detector, and do not suppress findings whose status is uncertain.

## Foundation V1 visual standards

The final identity is **Technical Editorial × Industrial Graphic Design × Developer Tool Precision × Learning UX**: a calm developer learning environment and a technical publication that became interactive. The editorial grid is a knowledge coordinate system—stronger around identity, heroes, module introductions, and technical figures; quieter during long-form reading.

| Token | Value | Use |
| --- | --- | --- |
| Paper | `#F1F0E8` | primary surface |
| Ink | `#161714` | text, boundary, neutral precision |
| Steel | `#70736D` | secondary technical information; Git identity |
| Hairline | `#CACBC3` | quiet structure |
| Acid Lime | `#C7E51B` | primary/current/selected; HTML identity |
| Cyan | `#35AFC2` | relationships; CSS identity |
| Signal Red | `#D94A3D` | warning/correction; JavaScript identity |

Neutral surfaces dominate (about 90%); lime is sparse primary emphasis (about 7%); cyan/red are exceptional signal (about 3% combined). Apply color with a label, marker, or state—not color alone. Module hover/active feedback preserves those identities; Git remains steel/ink/neutral.

The homepage industrial object is the primary 3D identity moment. Extract its grammar into quiet, grid-aligned 2D support only when it serves composition or hierarchy: structural frames, transparent planes, construction/projection/measurement lines, crosshairs, coordinate ticks, registration marks, indexed labels, stacked planes, nodes, and connectors. Prefer HTML/CSS/SVG; do not approximate a complex industrial object poorly with CSS. A dedicated rendered Git repository/history asset is optional future work, not a Foundation V1 requirement.

Typography establishes hierarchy before decoration. Chinese explanations use comfortable natural tracking; English display type uses optical, non-destructive tracking; technical/code spelling remains canonical. Metadata may be small and technical but must remain legible. Do not apply one tracking rule indiscriminately across Chinese, English, and code.

Interaction feedback is **strong feedback, restrained expression**: hairline/marker activation, text emphasis, small tint, connector activation, concise annotation, or small translation. Hover enhances but never gates understanding; click/tap and visible keyboard focus remain required. Motion explains meaningful from → to change only. Use Instant 80–120ms, Fast 140–180ms, Base 220–280ms, and Slow 400–600ms; prefer transform, opacity, color, background, and border. Avoid `transition: all`, bounce, glow, large lift/scale, and decorative continuous movement. Respect `prefers-reduced-motion`.

Desktop and mobile share one knowledge system, not one fixed composition. Preserve in this order: knowledge, code, teaching visual, controls, supporting metadata, decoration. On narrow screens, recompose vertically and remove nonessential decoration before reducing learning material. Learning Instruments remain functional editorial teaching devices—not dashboard widgets—and prioritize understanding → interaction → feedback → aesthetics.
