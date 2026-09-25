English | [简体中文](README.zh-CN.md)

# Siyu's Frontend Knowledge Base

A long-term personal frontend knowledge integration system. It consolidates self-study notes, BU coursework, real project and debugging experience, plus selectively approved external references.

This is not intended to become a generic frontend encyclopedia. Its current knowledge areas are HTML, CSS, JavaScript, and Git. React will become a separate area when sufficient real learning material exists.

## Structure

- `index.html` — site entry point
- `pages/` — integrated knowledge pages
- `assets/` — shared site CSS and JavaScript
- `sources/` — active raw learning evidence
- `archive/` — historical, normally read-only material
- `docs/` — project memory and maintenance guidance

Open `index.html` directly in a browser. The site intentionally supports direct `file://` use; JavaScript enhances the notes but does not gate the core content.

## Quick Start / Local Setup

Clone the repository with SSH:

```bash
git clone git@github.com:ZOZOBAR/FrontEnd_Key.git
```

Or clone with HTTPS:

```bash
git clone https://github.com/ZOZOBAR/FrontEnd_Key.git
```

Enter the project:

```bash
cd FrontEnd_Key
```

FrontEnd_Key currently uses vanilla HTML, CSS, and JavaScript. No `npm install` or build step is required. You can open `index.html` directly in a browser. If you prefer a local server, use VS Code Live Server or run:

```bash
python3 -m http.server 8000
```

Then visit [http://localhost:8000](http://localhost:8000).

## Adding New Knowledge

FrontEnd_Key grows by ingesting learning sources, not by repeatedly redesigning the site. Keep original source material intact, and do not manually simplify it merely to make it fit the UI. The documented workflow accounts for useful detail first, then chooses the clearest teaching structure.

```text
New Learning Source
→ Source Inventory
→ Knowledge Extraction
→ Detail Accounting
→ Merge / Complement / Correction
→ Identify Learning Problem
→ Select Teaching Medium
→ Teaching Structure
→ Visualization / Interaction only when justified
→ Bilingual Integration
→ Validation
→ Updated Knowledge Base
```

Read [CONTRIBUTING.md](CONTRIBUTING.md) for the practical workflow and [docs/CONTENT_GUIDE.md](docs/CONTENT_GUIDE.md) for the detailed methodology.

## Using FrontEnd_Key with AI Coding Agents

Before an agent changes the knowledge base, explicitly instruct it to read [AGENTS.md](AGENTS.md) and the governance documents it references. AI coding tools differ in whether they automatically load instruction files, so this explicit request is the safest portable workflow.

Starter prompt:

> Read AGENTS.md and all referenced project governance documents first. Then integrate the new learning material into FrontEnd_Key using the documented knowledge-ingestion workflow. Preserve source detail, merge genuine duplicates without destructive compression, identify the learning problem before selecting a teaching medium, maintain bilingual parity, follow the existing design system, validate the implementation, and do not redesign the architecture unless the existing system genuinely cannot support the new knowledge.

## Contributing

Contributions that preserve source integrity and extend the learning base are welcome. Start with [CONTRIBUTING.md](CONTRIBUTING.md); it explains the contributor workflow, required reading, validation, and the exceptional gate for architecture expansion.

## Learning & Teaching Philosophy

FrontEnd_Key is not a compressed cheat sheet. It preserves useful source detail while making relationships between concepts easy to understand.

- Complete source integration and current learning boundaries come first.
- Explanations assume minimal prior knowledge and introduce one new idea at a time.
- Relationships, execution flow, comparisons, examples, traces, and ASCII/monospace diagrams build mental models.
- Whitespace and hierarchy reduce cognitive load; visual polish serves knowledge rather than shrinking it.
