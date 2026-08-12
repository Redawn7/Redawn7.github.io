# Redawn7 Personal Homepage Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build and publish a dependency-free, bilingual personal homepage at `https://redawn7.github.io/` with a fixed desktop profile rail and scannable research, paper, and project sections.

**Architecture:** Serve semantic HTML, CSS, and ES modules directly from the repository root. Keep bilingual data in a pure content module, locale behavior in a separately testable module, and DOM rendering in the application entry point. GitHub Pages publishes `main` with no build step.

**Tech Stack:** HTML5, CSS, vanilla JavaScript ES modules, Node.js built-in test runner, GitHub Pages.

---

### Task 1: Content contract and locale behavior

**Files:**
- Create: `package.json`
- Create: `tests/content.test.mjs`
- Create: `tests/locale.test.mjs`
- Create: `assets/content.js`
- Create: `assets/locale.js`

- [ ] Write tests that require matching bilingual profile, section, paper, project, interest, and disclosure fields; require three papers and four projects; and reject navigable URLs on demo records.
- [ ] Run `npm test` and confirm it fails because the content and locale modules do not exist.
- [ ] Implement the bilingual content object and pure `normalizeLocale`, `detectLocale`, and `persistLocale` functions.
- [ ] Run `npm test` and confirm all content and locale tests pass.

### Task 2: Semantic document and safe rendering

**Files:**
- Create: `tests/site.test.mjs`
- Create: `index.html`
- Create: `assets/app.js`
- Create: `.nojekyll`

- [ ] Write structural tests requiring profile, research, papers, projects, interests, disclosure, language control, metadata, JSON-LD, and local-only runtime assets.
- [ ] Run `npm test` and confirm the new site tests fail because `index.html` and the renderer do not exist.
- [ ] Implement a useful English no-JavaScript document and progressively enhance it from `assets/content.js`.
- [ ] Implement the language control, document-language update, translated metadata, active state, and local-storage persistence.
- [ ] Ensure demo publication and project actions render as non-navigating labels.
- [ ] Run `npm test` and confirm the full suite passes.

### Task 3: Editorial visual system and responsive layout

**Files:**
- Create: `assets/styles.css`
- Create: `assets/avatar.svg`
- Extend: `tests/site.test.mjs`

- [ ] Extend tests to require the stylesheet, portrait asset, responsive viewport, reduced-motion handling, mobile breakpoint, and visible focus styling.
- [ ] Run `npm test` and confirm the visual-contract tests fail.
- [ ] Implement warm-neutral design tokens, editorial typography, two-column desktop layout, sticky profile rail, numbered content sections, dense paper rows, and varied project composition.
- [ ] Implement tablet and mobile layouts, 44-pixel targets, wrapping metadata, 200% zoom resilience, focus-visible states, and reduced-motion behavior.
- [ ] Run `npm test` and confirm all tests pass.

### Task 4: Local acceptance and documentation

**Files:**
- Create: `README.md`

- [ ] Document local preview, content replacement, portrait replacement, test execution, fictional-data policy, and GitHub Pages deployment.
- [ ] Run `npm test` and confirm the suite is green with no warnings.
- [ ] Start `python3 -m http.server 4173` and inspect the page at desktop and mobile viewport sizes.
- [ ] Verify English and Chinese switching, keyboard focus, disabled demo actions, disclosure visibility, console output, and direct reload.
- [ ] Run a link and asset check against the local server.

### Task 5: Commit and publish

**Files:**
- Commit all explicitly reviewed site files; exclude unrelated workspace files.

- [ ] Inspect `git status`, staged paths, and the complete staged diff.
- [ ] Commit the tested implementation to `main`.
- [ ] Create the public GitHub repository `Redawn7/Redawn7.github.io` if it does not exist.
- [ ] Push the local `main` commit to the repository.
- [ ] Verify the repository metadata and the public page response without retrying uncertain writes.
- [ ] Report the published URL and any GitHub Pages propagation delay.

