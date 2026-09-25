# Decisions

- FrontEnd_Key is an integration center, not the only storage location for original learning files.
- Source discovery will be broad-root-based and incremental.
- External learning directories are read-only; FrontEnd_Key is the writable integration destination.
- React is separate from JavaScript.
- JavaScript follows actual learning progress.
- Raw sources and integrated knowledge remain separate.
- `sources/` holds active evidence; `archive/` holds historical material.
- JavaScript progressively enhances the notes and must not gate core-content visibility.
- Visual assets must be purposeful and source-tracked.
- User-effort minimization is a core design principle.
- FrontEnd_Key is a complete, integrated, easy-to-read personal frontend knowledge base, not a compressed cheat sheet. Completeness takes priority over aggressive summarization.
- Each meaningful source point needs an accountable outcome: Covered, Partially Covered, Merged, Correction, Deferred, or Not Applicable. Topic-level resemblance is insufficient evidence of integration.
- Deduplication merges truly repeated information while preserving useful source-specific details, examples, warnings, reasoning, and course framing.
- Chinese and English are two complete reading modes. All ordinary visible learning/interface content must be naturally translated in each mode; code and identifiers remain unchanged.
- Teaching architecture must be established before final UI/UX redesign. Source completeness alone does not guarantee understandable material. The durable priority order is: source integrity → knowledge completeness → document/source fidelity → teaching architecture → bilingual parity → information design → UI/UX.
- FrontEnd_Key uses a content-first development order: source knowledge → teaching structure → information relationship → interaction model → component → visual styling. Visual and interaction changes need an observable learning or usability benefit.
- Phase 5.3 learner review approved the prototype interaction model: the default diagram state communicates the full concept, hover previews, click/tap persists focus, keyboard activation works, and interaction emphasizes related information without hiding the rest. Phase 5.4 extends this pattern only to concepts where user-controlled focus improves understanding; it does not make interactivity the default for every topic.
- Select the teaching medium by concept. In particular, CSS interactions should demonstrate real CSS behavior or spatial effects; existing components are not a reason to reuse an interaction model that does not fit the concept.
- The approved V2 design direction is Technical Editorial × Industrial Graphic Design × Developer Tool Precision × Learning UX. Browser-rendered evidence and learner feedback guide refinement; automated detector findings alone do not justify changing approved visual decisions.
- Durable interaction/motion principle: animate the concept’s meaningful behavior, not the interface for polish. Use interaction to let a learner cause, observe, compare, trace, select, or step through behavior; let each technology’s concept determine its interaction model. Preserve strong, immediate feedback with restrained expression.
- **Foundation V1 is closed.** Automated knowledge ingestion is the normal growth path; design-system or architecture expansion is exceptional and needs an explicit reason that the established system cannot represent the new knowledge.
- The final identity is Technical Editorial × Industrial Graphic Design × Developer Tool Precision × Learning UX: a calm technical publication that became interactive. The homepage industrial object is the primary 3D identity moment; supporting industrial language is lightweight, purposeful, and grid-aligned.
- Learning Instruments are conceptual patterns, not a framework API. Reuse them only when the learning problem matches; arbitrary-JavaScript execution, a parser, and a generic runtime are explicitly out of scope.
- A dedicated Git repository/history industrial 3D asset is optional future work, not a Foundation V1 blocker. Do not approximate complex 3D objects with weak CSS constructions.

## Bilingual rendering incident — 2026-09-24

A broad `[data-zh][data-en]` selector selected `body`; assigning `body.innerHTML` replaced the page with its title. The fix excludes `data-title` elements. Lesson: scope selectors carefully, and keep core content readable without JavaScript enhancement.
