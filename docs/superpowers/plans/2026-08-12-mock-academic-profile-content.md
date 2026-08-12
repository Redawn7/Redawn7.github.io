# Mock Academic Profile Content Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Replace the generic demo profile with a bilingual, clearly fictional interdisciplinary AI and theoretical-physics academic profile for 陆宣辰 / Luxuan Chen.

**Architecture:** Keep the existing static GitHub Pages structure and visual system. Store bilingual data in `assets/content.js`, render repeated research, paper, and project records in `assets/app.js`, and keep an equivalent English no-JavaScript fallback in `index.html`.

**Tech Stack:** Semantic HTML, CSS, browser-native ES modules, Node.js built-in test runner, Playwright acceptance tests.

---

### Task 1: Define the new content contract

**Files:**
- Modify: `tests/content.test.mjs`
- Modify: `tests/browser-acceptance.cjs`

- [ ] **Step 1: Write failing content assertions**

Require each locale to expose three research records, five fictional papers, the approved identity, generic fictional authorship, and a disclosure covering research directions.

- [ ] **Step 2: Write failing browser assertions**

Require three `.research-feature` cards, five `.paper-row` records, nine disabled demo actions, and the same five-paper fallback when JavaScript is disabled.

- [ ] **Step 3: Run tests to verify they fail**

Run: `npm test`

Expected: FAIL because the current data contains one research record and three papers.

### Task 2: Implement bilingual data and rendering

**Files:**
- Modify: `assets/content.js`
- Modify: `assets/app.js`

- [ ] **Step 1: Replace the profile copy**

Set the Chinese name to `陆宣辰`, retain `Luxuan Chen` in English, add the Yale PhD researcher identity, interdisciplinary positioning, approved biographies, and current-work statements.

- [ ] **Step 2: Add repeated research records**

Change `research` from one object to a three-item array with `kicker`, `title`, and `description`, then render the array through a dedicated `renderResearch(items)` function.

- [ ] **Step 3: Add five fictional publications**

Use the approved titles and venues with `Luxuan Chen et al.` as the only author string. Keep every link null and every record marked as demo data.

- [ ] **Step 4: Strengthen the disclosure**

Explicitly state in both languages that identity, affiliation, research agenda, papers, authorship, venues, and projects are fictional placeholders.

- [ ] **Step 5: Run content tests**

Run: `npm test`

Expected: PASS.

### Task 3: Update the no-JavaScript fallback and layout

**Files:**
- Modify: `index.html`
- Modify: `assets/styles.css`

- [ ] **Step 1: Mirror the English data in semantic HTML**

Replace the profile fallback, render three research articles and five paper rows, and use the stronger disclosure.

- [ ] **Step 2: Adapt the research layout**

Add `.research-list` and dividers between compact research entries while preserving the existing responsive two-column page.

- [ ] **Step 3: Run automated and browser acceptance tests**

Run: `npm test`

Run: `env NODE_PATH='/Users/luxuanchen/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules' PLAYWRIGHT_CHROMIUM_EXECUTABLE='/Users/luxuanchen/Library/Caches/ms-playwright/chromium_headless_shell-1228/chrome-headless-shell-mac-arm64/chrome-headless-shell' python3 /Users/luxuanchen/.agents/skills/webapp-testing/scripts/with_server.py --server 'python3 -m http.server 4173 --bind 127.0.0.1' --port 4173 -- '/Users/luxuanchen/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/bin/node' tests/browser-acceptance.cjs`

Expected: both commands PASS with no horizontal overflow or browser console errors.

### Task 4: Publish and verify GitHub Pages

**Files:**
- Modify: `README.md` only if its content notes become inaccurate.

- [ ] **Step 1: Review the final diff and generated screenshots**

Confirm the interface remains concise, the left profile rail remains sticky on desktop, and the fictional-data notice is visible but visually quiet.

- [ ] **Step 2: Commit and push**

Run: `git add assets/content.js assets/app.js assets/styles.css index.html tests/content.test.mjs tests/browser-acceptance.cjs docs/superpowers/plans/2026-08-12-mock-academic-profile-content.md`

Run: `git commit -m "feat: add mock interdisciplinary academic profile"`

Run: `git push origin main`

Expected: push succeeds.

- [ ] **Step 3: Verify production**

Open `https://redawn7.github.io/` and confirm the deployed page contains the new paper title `Latent Proofs` and the strengthened demo disclosure.
