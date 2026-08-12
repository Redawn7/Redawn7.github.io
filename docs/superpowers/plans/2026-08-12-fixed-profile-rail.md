# Fixed Profile Rail Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Fix the desktop profile rail to the viewport and shorten the bilingual biography so all profile information fits within one screen.

**Architecture:** Preserve the existing HTML order and mobile layout. At the desktop breakpoint, fix `.profile-rail` to the viewport, offset `main` by the same rail width, and allow internal rail scrolling only when its content exceeds the viewport.

**Tech Stack:** HTML, CSS, browser-native JavaScript, Node.js tests, Playwright.

---

### Task 1: Lock the desired scrolling behavior

**Files:**
- Modify: `tests/browser-acceptance.cjs`
- Modify: `tests/content.test.mjs`

- [ ] Add a desktop assertion that `.profile-rail` uses `position: fixed`, remains at the same viewport Y-coordinate after document scrolling, and fits the viewport at 1440 by 1000.
- [ ] Add bilingual biography length assertions requiring concise copy.
- [ ] Run `npm test` and the Playwright acceptance command; expect failure from the current sticky layout and long biography.

### Task 2: Implement the fixed rail

**Files:**
- Modify: `assets/styles.css`
- Modify: `assets/content.js`
- Modify: `index.html`

- [ ] At the 70rem breakpoint, define one `--profile-rail-width`, fix `.profile-rail` to the viewport, apply that width to `main` as a margin, and set `overflow-y: auto` on the rail.
- [ ] Remove sticky positioning from `.profile-inner`, reduce portrait height and vertical gaps, and keep the final `Now` note in normal compact flow.
- [ ] Replace both biographies with two concise sentences and mirror the English fallback in `index.html`.
- [ ] Run all unit and browser acceptance tests; expect PASS.

### Task 3: Publish

**Files:**
- Commit only files in this plan plus its design document.

- [ ] Review screenshots at mobile, tablet, and desktop sizes.
- [ ] Commit with `fix: keep desktop profile rail fixed` and push `main`.
- [ ] Confirm the GitHub Pages deployment serves the fixed-rail CSS.
