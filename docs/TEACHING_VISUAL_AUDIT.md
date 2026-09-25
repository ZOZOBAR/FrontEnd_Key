# Teaching Visual Audit — Foundation V1

Status: canonical teaching-medium taxonomy and current candidate record. It is not a content or source-coverage audit; it identifies the lightest effective medium for a demonstrated learning problem.

| Area | Major concept | Best medium | Decision |
| --- | --- | --- | --- |
| HTML | HTML5 document: `html` → `head` / `body` | Static Technical Diagram | Add: containment and visible-vs-declarative information are easier to see spatially. |
| HTML | Element nesting and closing order | Code + ASCII | Keep: indentation and source code already show the relationship clearly; an interactive DOM inspector would add complexity. |
| HTML | Relative paths | Code + prose | Keep: current examples and path reasoning are more precise than a generic directory picture. |
| HTML | Semantic page structure | Code + prose | Keep: current source-supported example is sufficient; avoid a second structural diagram. |
| CSS | Box Model | Interactive Teaching Diagram | Add: containment layers and property-to-space relationships are spatial and commonly confused. |
| CSS | Selectors/cascade | Text + code + table | Keep: the rule/source-order examples are better traced in text; no generic cascade visual. |
| CSS | Flexbox axes and alignment | Interactive Teaching Diagram | Add: main/cross axis and `justify-content`/`align-items` describe a spatial relationship. |
| CSS | CSS Grid | Text + code | Keep: existing source material does not justify a separate visualization in this rollout. |
| JavaScript | Conditions | Interactive Teaching Diagram | Keep: approved Phase 5.3 reference. |
| JavaScript | `for` loop order | Interactive Teaching Diagram + execution trace | Add: initialization → condition → body → update → condition is a cyclic execution relationship. |
| JavaScript | Arrays/data types/type conversion | Text + code + table | Keep: current small examples and tables explain the scope without adding a decorative structure. |
| JavaScript | Debugging | ASCII + prose | Keep: breakpoint walkthrough is a procedural inspection model, not a simulator need. |
| Git | Core Working/Staging/Local/Remote state model | Interactive Teaching Diagram | Keep: approved Phase 5.3 reference. |
| Git | Branches and merge | ASCII + code + prose | Keep: existing branch sketch is compact and source-faithful; no new interaction is needed. |
| Git | Command safety matrix | Table | Keep and refine its technical safety marker grammar only; a table is the correct comparative medium. |

## Current foundation implementations

Implemented instruments: CSS Box Model Lab, Flexbox Lab, Display Lab, HTML Structure ↔ Source Explorer, and JavaScript Execution Trace / Debug Lab. Display is source-supported by the existing layout notes; no new curriculum was introduced.

Promising future candidates (not implemented): CSS cascade/source-order tracing; HTML nested-element closing-order focus; JavaScript nested-loop trace using multiple iterator variables; Git branch/merge state transition. Arrays, type conversion, relative paths, and Git safety remain better served by their current text/code/table/ASCII forms until a learner review identifies a specific comprehension gap.

## Learner-review correction and interaction audit

### Learner-review correction

**P1 — CSS Box Model Lab geometry:** the original lab used permanent wrapper padding/fills, which could appear to create margin or border even when their CSS values were zero. The corrected model uses real `margin`, `border-width`, and `padding` geometry only. Margin remains transparent; its selected overlay is a separate, value-bound measurement annotation. At `0`, it has no visible extent; a `0px` border has no visible boundary thickness.

### High-value candidates

| Area / concept | Current medium | Learning problem | Recommended medium | Why / learner action | Priority |
| --- | --- | --- | --- | --- | --- |
| HTML document structure | Structure Explorer | containment; visible vs declarative content | Structure Explorer | Select node → inspect source region, role, and schematic result. Implemented and keep. | KEEP |
| HTML nesting / closing order | Code + ASCII | hierarchy; containment | Code + ASCII | Indentation and reverse-close examples remain clearest; interaction adds little before a demonstrated misconception. | DO NOT INTERACT |
| CSS Box Model | Layout Lab | spatial behavior; cause/effect | Layout Lab | Cause margin/padding/border change → observe actual geometry → verify inside/outside. Implemented; corrected in 5.4D. | KEEP |
| CSS Flexbox axes / alignment | Layout Lab | spatial behavior; dependency | Layout Lab | Change one source-supported property → observe positions and axes. Implemented and keep. | KEEP |
| CSS display values | Compare / Layout Lab | before/after; occupied space | Compare Lab | Switch a real element between three source-supported values → compare neighbour and sizing behavior. Implemented and keep. | KEEP |
| CSS cascade / source order | Text + code + table | dependency; before/after | Static trace first | A compact rule-order trace could expose why one rule wins; defer interaction until learner review identifies persistent confusion. | P2 |
| JavaScript conditions | Interactive teaching diagram | branching; result | Interactive teaching diagram | Current selection already maps condition → branch → output. | KEEP |
| JavaScript simple accumulation / `for` order | Code + ASCII + Execution Trace | execution order; state; iteration | Execution Trace | Predict → step → inspect `i`, `total`, condition, output. Implemented and keep. | KEEP |
| JavaScript nested loops | Code + prose | nested iteration; multiple state variables | Execution Trace (bounded) | A future fixed example could let learners trace `i` and `j`; do not create a generic interpreter. | P1 |
| JavaScript arrays / conversions | Text + code + table | comparison; transformation | Table / code | Current small examples expose the supported scope more directly; no simulator yet. | DO NOT INTERACT |
| Debugging with real DevTools | Prose + steps + Debug Lab | pause; inspect; state | Debug Lab → real DevTools | The simulated mental model is preparation, never a claim of runtime debugging. Implemented and keep. | KEEP |
| Git core states | Interactive teaching diagram | state transition; workflow | State Inspector | Existing `add` / `commit` / `push` selection is the right light instrument. | KEEP |
| Git branch / merge | ASCII + code + prose | divergent history; state transition | Static technical diagram or bounded state explorer | Consider only after learner evidence shows the ASCII sketch is insufficient; avoid a decorative Git GUI. | P2 |
| Git command safety matrix | Table | comparison; risk | Table | The matrix is a reference task, not an action/state task. | DO NOT INTERACT |

### Instrument families — conceptual, not a framework

| Family | Solves | Use when | Do not use when |
| --- | --- | --- | --- |
| Structure Explorer | hierarchy, containment, semantics | selecting a node clarifies source ↔ structure | prose/code already makes nesting unambiguous |
| Layout / Compare Lab | real spatial behavior and before/after | a bounded CSS value visibly changes browser layout | values would create a broad playground or exceed studied content |
| Execution Trace | execution order, values, iteration | a known small example has deterministic steps | arbitrary code parsing/execution would be required |
| State Inspector | state transition and workflow | actions cross meaningful system boundaries | a table or ASCII command sequence is clearer |
| Debug Lab | pause, inspect, step mental model | it prepares practice in a real tool | it could be mistaken for the real runtime/tool |

Future active-learning direction: use prediction before action only where a learner can verify a deterministic outcome—e.g., the next loop value, CSS position, or Git state. This means **predict → act → observe → verify**, not quizzes or gamification.

## Rollout rule

Add a diagram only when the learner needs to perceive a relationship—containment, spatial alignment, branching, state transition, or execution order—that text or code alone makes harder to see. Preserve ASCII where it remains the clearest compact or CLI-oriented representation.

## Foundation V1 decision test

Classify the learning problem first: hierarchy, containment, spatial behavior, relationship, state, state transition, execution order, branching, transformation, dependency, data flow, before/after, cause/effect, comparison, syntax mapping, or debugging. Then choose the lightest medium: text, code, table, ASCII, static technical diagram, interactive teaching diagram, or Learning Instrument.

Interaction is justified only when the learner can meaningfully **cause, observe, compare, trace, select, step through, predict, or verify**. Use **predict → act → observe → verify** only for deterministic behavioral concepts; it is not a quiz or gamification requirement. Do not recommend interaction merely because it looks impressive.
