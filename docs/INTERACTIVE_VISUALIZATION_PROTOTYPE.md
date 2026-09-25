# Interactive Knowledge Visualization Prototype

Status: Foundation V1 establishes the reusable Learning Instruments foundation. These are reference patterns, not a component framework; future browser/learner review is required whenever an instrument changes materially.

## Why these two prototypes exist

The Conditions prototype makes the otherwise hidden connection from a value, through a boolean evaluation, to an `if` or `else` branch and its output visible. Selecting a path focuses the matching code line, explanation, and result. The static diagram remains complete without JavaScript.

The Git prototype makes the state boundary between `git add`, `git commit`, and `git push` explicit. Selecting a command focuses only the two states it connects, while the full Working Directory → Staging Area → Local Repository → Remote workflow remains visible.

Both prototypes address a specific beginner problem: knowing a command or syntax word without seeing the state or branch relationship it controls. They are not decorative widgets or general-purpose playgrounds.

## Diagram selection guide

| Use | When it helps | Do not use it for |
| --- | --- | --- |
| ASCII | Terminal-oriented models, short code relationships, compact fallbacks | Spatial relationships that become hard to trace in text |
| Static Technical Diagram | A relationship, hierarchy, or flow needs spatial clarity but no user-controlled state | Facts already clearer as a sentence or table |
| Interactive Teaching Diagram | Selecting a branch or transition materially focuses the relationship to code, explanation, or result | Decorative hover effects or content that must be hidden to create interaction |
| Learning Simulator | A small, controlled sequence of execution states is essential to understanding | A replacement for the learner's code editor, or a full runtime/playground without a teaching need |

## Rules for future use

- Keep the text and code authoritative; diagrams reveal relationships and interaction reveals process.
- Default state must explain the whole relationship. Hover previews; click/tap persists focus; keyboard access is required.
- Prefer vertical flows for sequences, hierarchy, branching, and state changes. Use horizontal space for genuine comparison only.
- Use semantic labels in addition to color. Respect reduced-motion preferences.
- Do not make a concept interactive merely because it can be animated. If a static diagram or ASCII explanation communicates it more simply, use that instead.

## Learning Instruments foundation

- **CSS Box Model Lab:** bounded margin, padding, and border-width controls update a real nested CSS element; selected layers synchronize region, property, and explanation.
- **CSS Flexbox Lab:** bounded direction, main-axis distribution, and cross-axis alignment controls operate a real Flex container. **Display Lab** is included because the source-derived CSS notes explicitly cover block, inline, and inline-block behavior.
- **HTML Structure ↔ Source Explorer:** node selection synchronizes containment, source specimen, explanation, and a deliberately schematic metadata/visible-content preview.
- **JavaScript Execution Trace / Debug Lab:** one deterministic, source-derived accumulation trace supports reset, back, step, and bounded auto-play. Debug Lab is explicitly a FrontEnd_Key teaching simulation that prepares learners for—not replaces—real DevTools.

Shared conventions are semantic native controls where possible, persistent selected/current state, bounded values, reset/back/step naming, synchronized code/value/explanation, visible keyboard focus, bilingual copy, and immediate reduced-motion fallbacks. The trace data can represent multiple variables later, but this phase intentionally does **not** parse or execute arbitrary JavaScript, model closures/async, or provide a generic runtime.

## Canonical interaction conventions

- **Select** persists a concept focus; hover may preview but is never essential.
- **Step / Back / Reset** move through deterministic teaching state, restore the known initial state, and keep current code/state/result synchronized.
- **Auto** is optional; when used it is bounded, stoppable, and ends safely.
- One selected/current layer becomes dominant while context remains perceptible. State is communicated by labels and structure as well as color.
- A useful default state, native semantic controls, keyboard reachability, visible focus, touch targets, bilingual labels, and reduced-motion immediate changes are required.
- Code ↔ visual model ↔ human explanation ↔ result should synchronize whenever that mapping improves comprehension.

Use the conceptual families in the audit—Concept Map, Structure Explorer, Layout/Compare Lab, Execution Trace, State Inspector, Debug Lab, and Flow/Data-Flow Visualizer—as a decision vocabulary only. Create a new family only when the existing patterns cannot express the learner’s actual problem clearly.

## Prototype review criteria

Promote a pattern only if browser and learner review confirms that it improves speed of understanding without increasing distraction, overflow, or maintenance cost. Review Conditions for code ↔ branch ↔ result comprehension, Git for clear separation of add, commit, and push, Box Model for layer/property understanding, Flexbox for axis/alignment understanding, and loops for execution-order understanding.
