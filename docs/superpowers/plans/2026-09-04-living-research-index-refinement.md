# Living Research Index Refinement Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Refine the existing bilingual GitHub Pages profile into a compact, navigable living research index with a viewport-safe identity rail, connected research atlas, credible experience timeline, progressive publication list, and concise collaboration close.

**Architecture:** Keep the existing dependency-free static architecture. Bilingual content remains the source of truth in `assets/content.js`; `assets/app.js` renders both locales and binds accessible behavior; `index.html` supplies a complete no-JavaScript English fallback; `assets/styles.css` owns responsive layout and restrained motion. Node tests validate structure and content, while the Playwright script verifies browser behavior.

**Tech Stack:** HTML, CSS, vanilla JavaScript, Node test runner, Playwright

---

## Task 1: Lock the new content and semantic contract

**Files:**
- Modify: `tests/content.test.mjs`
- Modify: `tests/site.test.mjs`
- Modify: `assets/content.js`
- Modify: `index.html`

- [ ] Add failing content tests for four research questions, timeline focus metadata, nested exchange semantics, paper role/contribution text, publication-toggle labels, and bilingual collaboration copy.
- [ ] Add failing markup tests for `h2` section headings, atlas anchor destinations, research entry IDs, connector keys, timeline structure, publication toggle, collaboration block, and removal of unavailable contact controls.
- [ ] Run `npm test` and confirm the new assertions fail for the expected missing features.
- [ ] Update both locale objects and the no-JavaScript HTML fallback to satisfy the new content contract without inventing external links or claims.
- [ ] Run `npm test` and confirm the content and semantic tests pass.

## Task 2: Make the research atlas functional

**Files:**
- Modify: `tests/site.test.mjs`
- Modify: `tests/browser-acceptance.cjs`
- Modify: `assets/app.js`
- Modify: `assets/styles.css`
- Modify: `index.html`

- [ ] Add failing assertions for atlas anchors, matching research IDs, active connector paths, and scroll targeting.
- [ ] Render atlas nodes as links to `#research-<key>` and render each research entry with a stable ID and plain-language question.
- [ ] Extend atlas binding so pointer and keyboard focus activate the matching node, connector, and research entry.
- [ ] Add visible focus, scroll margin, and reduced-motion-safe active styles.
- [ ] Run the Node tests and the atlas browser assertions.

## Task 3: Connect experience and publications into a credible story

**Files:**
- Modify: `tests/browser-acceptance.cjs`
- Modify: `assets/app.js`
- Modify: `assets/styles.css`
- Modify: `index.html`

- [ ] Add failing browser assertions for the nested UC Berkeley exchange, three initially visible papers, six expanded papers, and six papers in the no-JavaScript fallback.
- [ ] Render experience as a vertical timeline with date, institution/program, focus phrase, and a nested exchange state.
- [ ] Render paper role and concise contribution text, marking rows four through six as secondary.
- [ ] Add an accessible bilingual inline publication toggle that preserves all six rows when JavaScript is disabled.
- [ ] Run the Node tests and the relevant browser assertions.

## Task 4: Compact the profile rail and finish the page

**Files:**
- Modify: `assets/app.js`
- Modify: `assets/styles.css`
- Modify: `index.html`

- [ ] Remove duplicated profile research chips, the separate Now block, and unavailable Email/CV controls.
- [ ] Compress spacing and portrait scale so the fixed profile rail has no internal scroll at 1280 by 720.
- [ ] Add the compact collaboration invitation with only GitHub and Yale Computer Science destinations, followed immediately by the fictional-data disclosure.
- [ ] Keep the language control visually small while providing a 44px effective target.
- [ ] Add mobile section-nav edge cue, scroll snapping, and responsive safeguards for 390px width.

## Task 5: Verify and deliver

**Files:**
- Modify if needed: `tests/browser-acceptance.cjs`
- Verify: `index.html`
- Verify: `assets/content.js`
- Verify: `assets/app.js`
- Verify: `assets/styles.css`

- [ ] Run `npm test`.
- [ ] Run `git diff --check`.
- [ ] Run the Playwright browser acceptance script against the local server.
- [ ] Inspect 1280 by 720 and 390 by 844 layouts, confirming profile fit, no horizontal overflow, correct atlas navigation, publication expansion, bilingual rendering, keyboard focus, and reduced-motion behavior.
- [ ] Commit the coherent implementation without pushing it unless publication is explicitly requested.
