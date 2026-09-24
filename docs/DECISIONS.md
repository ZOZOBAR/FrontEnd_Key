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

## Bilingual rendering incident — 2026-09-24

A broad `[data-zh][data-en]` selector selected `body`; assigning `body.innerHTML` replaced the page with its title. The fix excludes `data-title` elements. Lesson: scope selectors carefully, and keep core content readable without JavaScript enhancement.
