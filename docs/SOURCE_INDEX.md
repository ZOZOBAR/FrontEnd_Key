# Source Index

This registry is the canonical source-traceability and incremental-processing cache. Use the path, last processed date, and status to route targeted work; reread a source only when it is new, changed, reprocessed, or its coverage status requires QA.

| Source | Category | Type | Coverage / processing state | Last processed | Integrated destination |
|---|---|---|---|---|---|
| `sources/javascript/JS笔记_整理版.html` | JavaScript | Original self-study note | Integrated — verified | 2026-09-24 | `pages/javascript.html` |
| `/Users/zozobar/Desktop/Self_Study/自学内容/前端学习/代码/注释/注释-[html].html` | HTML | Original self-study annotation note | Integrated — verified | 2026-09-24 | `pages/html.html` |
| `/Users/zozobar/Desktop/Self_Study/自学内容/前端学习/代码/注释/注释-[CSS]/注释-[CSS].html` | CSS | Original self-study annotation note | Integrated — verified | 2026-09-24 | `pages/css.html` |
| `/Users/zozobar/Desktop/Self_Study/自学内容/前端学习/代码/代码练习/{HTML,CSS,Javascript}/` | HTML / CSS / JavaScript | Self-study exercises (source collection) | Discovered / Audited | 2026-09-24 | Relevant pages (comparison only) |
| `/Users/zozobar/Desktop/Self_Study/自学内容/前端学习/代码/综合案例总集/` | HTML / CSS / JavaScript | Self-study integrated exercises | Discovered / Audited; project-experience review pending | 2026-09-24 | Relevant pages (comparison only) |
| `/Users/zozobar/Desktop/BU_XIN_XUE_QI/cs303/NOTE/HTML-SECT.txt` | HTML | BU CS303 course note | Integrated — verified | 2026-09-24 | `pages/html.html` |
| `/Users/zozobar/Desktop/BU_XIN_XUE_QI/cs303/NOTE/CSS-SECT.txt` | CSS | BU CS303 course note | Integrated — verified | 2026-09-24 | `pages/css.html` |
| `/Users/zozobar/Desktop/BU_XIN_XUE_QI/cs303/NOTE/JS-SECT.txt` | JavaScript | BU CS303 course note | Discovered / Audited; mostly deferred at current boundary | 2026-09-24 | `pages/javascript.html` (comparison only) |
| `/Users/zozobar/Desktop/BU_XIN_XUE_QI/cs303/NOTE/CS303-LEC4-5-NOTES.txt` | Web Data / React | BU CS303 lecture note | Integrated — scoped course coverage | 2026-09-25 | `pages/web-data.html`, `pages/react.html` |
| `/Users/zozobar/Desktop/BU_XIN_XUE_QI/cs303/NOTE/In_class_note.txt` | Web Data / React | BU CS303 class note | Integrated — Sep 28–29 incremental coverage | 2026-09-29 | `pages/web-data.html`, `pages/react.html` |
| `/Users/zozobar/Desktop/BU_XIN_XUE_QI/cs303/LECTURE/lec-6.pdf` | React / Components | BU CS303 lecture PDF | Integrated — Sep 29 incremental coverage | 2026-09-29 | `pages/react.html` |

| `/Users/zozobar/Desktop/BU_XIN_XUE_QI/cs303/discussion/dis-3/CS391 React 1 FULL(1).pdf` | React / HTTP | BU discussion handout | Integrated — scoped course coverage | 2026-09-25 | `pages/react.html`, `pages/web-data.html` |
| `/Users/zozobar/Desktop/BU_XIN_XUE_QI/cs303/discussion/dis-3/src/` | React / TypeScript | BU discussion example source | Integrated — scoped course coverage | 2026-09-25 | `pages/react.html`, `pages/web-data.html` |

## Relationship to archive

At migration time, `sources/javascript/JS笔记_整理版.html` and `archive/original-js-notes.html` were byte-identical (SHA-1: `b6e4003d9cb4befbc0300c9bac113c906dfe71e1`). The source copy is active evidence; the archive copy is historical and normally read-only.
