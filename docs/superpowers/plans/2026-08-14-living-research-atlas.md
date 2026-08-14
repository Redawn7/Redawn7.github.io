# Living Research Atlas Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Transform the existing bilingual static homepage into the approved Living Research Atlas experience with linked research interactions, restrained motion, and section progress.

**Architecture:** Keep the dependency-free static architecture. Extend the existing content model and semantic HTML fallback, then add small DOM controllers in `assets/app.js` for atlas linkage, reveal state, and reading progress. CSS owns all visual states and motion; JavaScript only toggles semantic state classes and attributes.

**Tech Stack:** Semantic HTML, modern CSS, vanilla ES modules, Node test runner, Playwright acceptance script.

---

## File Map

- `index.html`: semantic fallback markup for the hero, atlas, profile progress navigation, and research linkage.
- `assets/content.js`: bilingual hero, atlas, and progress-navigation copy.
- `assets/app.js`: locale rendering plus interaction controllers.
- `assets/styles.css`: visual direction, motion states, responsive layout, and reduced-motion fallback.
- `tests/content.test.mjs`: bilingual content-shape coverage.
- `tests/site.test.mjs`: semantic and implementation-contract coverage.
- `tests/browser-acceptance.cjs`: runtime interaction, responsive, reduced-motion, and no-JavaScript verification.

### Task 1: Extend the bilingual content contract

**Files:**
- Modify: `tests/content.test.mjs`
- Modify: `assets/content.js`

- [ ] **Step 1: Write the failing content test**

Add assertions inside the locale loop:

```js
assert.ok(page.hero.eyebrow);
assert.ok(page.hero.title);
assert.ok(page.hero.description);
assert.equal(page.atlas.length, 4);
assert.equal(page.navigation.length, 5);
assert.deepEqual(page.atlas.map((item) => item.key), page.research.map((item) => item.key));
```

Update the identity assertion:

```js
assert.match(content.en.profile.role, /Scholar.*Builder.*Explorer/);
```

- [ ] **Step 2: Run the test and verify failure**

Run: `node --test tests/content.test.mjs`

Expected: FAIL because `hero`, `atlas`, `navigation`, and research keys do not exist.

- [ ] **Step 3: Add the minimal bilingual data**

Add this shape to each locale:

```js
hero: {
  eyebrow: "Personal research index · 2026",
  title: "Ideas across scales.",
  description: "From model intelligence and adaptive computation to market dynamics and emergent spacetime.",
},
atlas: [
  { key: "llm-scaling", label: "LLM Scale", accessibleLabel: "Explore LLM Scaling Laws" },
  { key: "inference", label: "Inference", accessibleLabel: "Explore Inference-time Scaling" },
  { key: "markets", label: "Markets", accessibleLabel: "Explore Market Microstructure" },
  { key: "spacetime", label: "Spacetime", accessibleLabel: "Explore AdS/CFT and Quantum Gravity" },
],
navigation: [
  { target: "research", label: "Research Atlas" },
  { target: "experience", label: "Experience" },
  { target: "papers", label: "Selected Papers" },
  { target: "projects", label: "Projects" },
  { target: "interests", label: "Beyond Work" },
],
```

Use equivalent Chinese copy. Add stable `key` values to the four research records and update the English role to `Scholar · Builder · Explorer` with the matching Chinese role.

- [ ] **Step 4: Run the content test**

Run: `node --test tests/content.test.mjs`

Expected: PASS.

- [ ] **Step 5: Commit the content contract**

```bash
git add assets/content.js tests/content.test.mjs
git commit -m "content: add bilingual research atlas copy"
```

### Task 2: Add semantic atlas and progress markup

**Files:**
- Modify: `tests/site.test.mjs`
- Modify: `index.html`

- [ ] **Step 1: Write the failing semantic test**

Add these assertions to the document test:

```js
assert.match(html, /class="hero-statement"/);
assert.match(html, /id="research-atlas"/);
assert.equal((html.match(/data-atlas-key=/g) ?? []).length, 4);
assert.equal((html.match(/data-research-key=/g) ?? []).length, 4);
assert.match(html, /class="section-progress"/);
assert.equal((html.match(/data-section-target=/g) ?? []).length, 5);
```

- [ ] **Step 2: Run the test and verify failure**

Run: `node --test tests/site.test.mjs`

Expected: FAIL because the atlas, hero statement, and progress navigation do not exist.

- [ ] **Step 3: Add fallback HTML**

Add a progress navigation inside the profile rail:

```html
<nav class="section-progress" id="section-progress" aria-label="Page sections">
  <a href="#research" data-section-target="research" aria-current="true"><span>01</span><span>Research Atlas</span></a>
  <a href="#experience" data-section-target="experience"><span>02</span><span>Experience</span></a>
  <a href="#papers" data-section-target="papers"><span>03</span><span>Selected Papers</span></a>
  <a href="#projects" data-section-target="projects"><span>04</span><span>Projects</span></a>
  <a href="#interests" data-section-target="interests"><span>05</span><span>Beyond Work</span></a>
</nav>
```

Add the hero and atlas before the research rows. Each atlas control uses a key such as:

```html
<button class="atlas-node atlas-node--llm" type="button" data-atlas-key="llm-scaling" aria-label="Explore LLM Scaling Laws">
  <span class="atlas-dot" aria-hidden="true"></span><span>LLM Scale</span>
</button>
```

Add matching `data-research-key` and `tabindex="0"` attributes to each research article. Keep all existing content as a no-JavaScript fallback.

- [ ] **Step 4: Run the semantic tests**

Run: `node --test tests/site.test.mjs`

Expected: PASS.

- [ ] **Step 5: Commit semantic structure**

```bash
git add index.html tests/site.test.mjs
git commit -m "feat: add semantic living research atlas"
```

### Task 3: Render localized atlas content and interaction state

**Files:**
- Modify: `tests/site.test.mjs`
- Modify: `assets/app.js`

- [ ] **Step 1: Add a failing implementation-contract test**

Add assertions:

```js
assert.match(app, /function renderAtlas/);
assert.match(app, /function renderSectionProgress/);
assert.match(app, /function bindResearchAtlas/);
assert.match(app, /function bindSectionProgress/);
assert.match(app, /IntersectionObserver/);
assert.match(app, /requestAnimationFrame/);
```

- [ ] **Step 2: Run the test and verify failure**

Run: `node --test tests/site.test.mjs`

Expected: FAIL because the new renderers and controllers do not exist.

- [ ] **Step 3: Add renderers**

Implement renderers with DOM APIs only:

```js
function renderAtlas(items) {
  const nodes = items.map((item) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = `atlas-node atlas-node--${item.key}`;
    button.dataset.atlasKey = item.key;
    button.setAttribute("aria-label", item.accessibleLabel);
    button.append(textElement("span", "atlas-dot", ""), textElement("span", "atlas-label", item.label));
    return button;
  });
  byId("atlas-nodes").replaceChildren(...nodes);
}

function renderSectionProgress(items) {
  const links = items.map((item, index) => {
    const link = document.createElement("a");
    link.href = `#${item.target}`;
    link.dataset.sectionTarget = item.target;
    link.append(textElement("span", "progress-number", String(index + 1).padStart(2, "0")), textElement("span", "progress-label", item.label));
    return link;
  });
  byId("section-progress").replaceChildren(...links);
}
```

Update `renderResearch` to set `entry.dataset.researchKey = direction.key` and `entry.tabIndex = 0`. Update `applyLocale` to render hero copy, atlas nodes, progress navigation, and then rebind atlas behavior.

- [ ] **Step 4: Add interaction controllers**

Implement a shared activation function:

```js
function bindResearchAtlas() {
  const atlas = byId("research-atlas");
  const targets = [...document.querySelectorAll("[data-atlas-key], [data-research-key]")];
  const activate = (key = "") => {
    document.documentElement.dataset.activeResearch = key;
    for (const target of targets) {
      const targetKey = target.dataset.atlasKey ?? target.dataset.researchKey;
      target.classList.toggle("is-active", Boolean(key) && targetKey === key);
      target.classList.toggle("is-dimmed", Boolean(key) && targetKey !== key);
    }
  };
  for (const target of targets) {
    const key = target.dataset.atlasKey ?? target.dataset.researchKey;
    target.addEventListener("pointerenter", () => activate(key));
    target.addEventListener("pointerleave", () => activate());
    target.addEventListener("focus", () => activate(key));
    target.addEventListener("blur", () => activate());
  }
  let frame = 0;
  atlas.addEventListener("pointermove", (event) => {
    cancelAnimationFrame(frame);
    frame = requestAnimationFrame(() => {
      const bounds = atlas.getBoundingClientRect();
      atlas.style.setProperty("--pointer-x", `${event.clientX - bounds.left}px`);
      atlas.style.setProperty("--pointer-y", `${event.clientY - bounds.top}px`);
    });
  });
}
```

Add one IntersectionObserver for section reveal and one for current-section progress. Mark the current link with `aria-current="true"`; remove that attribute from other links. Add `document.documentElement.classList.add("is-ready")` through two animation frames so no-JavaScript content remains visible.

- [ ] **Step 5: Run unit tests**

Run: `npm test`

Expected: all Node tests PASS.

- [ ] **Step 6: Commit behavior**

```bash
git add assets/app.js tests/site.test.mjs
git commit -m "feat: link atlas interactions and reading progress"
```

### Task 4: Implement the visual system and motion

**Files:**
- Modify: `assets/styles.css`
- Modify: `tests/site.test.mjs`

- [ ] **Step 1: Add failing CSS-contract assertions**

```js
assert.match(css, /\.research-atlas/);
assert.match(css, /\.atlas-node\.is-active/);
assert.match(css, /\.section-progress/);
assert.match(css, /\.reveal-section\.is-visible/);
assert.match(css, /\.paper-row:hover/);
assert.match(css, /\.project-entry:hover/);
assert.match(css, /@media \(prefers-reduced-motion: reduce\)/);
```

- [ ] **Step 2: Run the CSS contract test and verify failure**

Run: `node --test tests/site.test.mjs`

Expected: FAIL because the atlas and interaction selectors do not exist.

- [ ] **Step 3: Add the approved layout and atlas styles**

Use the existing OKLCH palette. Define the hero, atlas grid field, four positioned nodes, connecting paths, node halos, and research linkage. Keep the fixed rail between 19 and 24 rem and maintain compact right-column typography.

Core state rules:

```css
.atlas-node,
.research-feature,
.paper-row,
.project-entry {
  transition: color 220ms var(--ease-out), background-color 220ms var(--ease-out), transform 220ms var(--ease-out), opacity 220ms var(--ease-out);
}

.atlas-node.is-active .atlas-dot {
  transform: scale(1.22);
  box-shadow: 0 0 0 0.55rem color-mix(in oklch, var(--blue) 16%, transparent);
}

.research-feature.is-active {
  color: var(--blue-deep);
  background: color-mix(in oklch, var(--blue) 7%, transparent);
  transform: translateX(0.25rem);
}

.paper-row:hover,
.paper-row:focus-within,
.project-entry:hover,
.project-entry:focus-within {
  background: color-mix(in oklch, var(--blue) 6%, transparent);
}
```

Add initial-load and reveal rules gated by `.js` and `.is-ready`, so content is never hidden when JavaScript fails. Add mobile atlas and horizontal progress-navigation adaptations.

- [ ] **Step 4: Add reduced-motion overrides**

Inside the existing media query, force initial and reveal content visible, remove transforms, disable atlas pointer glow, and keep instant navigation.

- [ ] **Step 5: Run Node tests**

Run: `npm test`

Expected: all Node tests PASS.

- [ ] **Step 6: Commit visual implementation**

```bash
git add assets/styles.css tests/site.test.mjs
git commit -m "style: create living research atlas experience"
```

### Task 5: Extend browser acceptance and verify the completed page

**Files:**
- Modify: `tests/browser-acceptance.cjs`
- Modify: `index.html`

- [ ] **Step 1: Add runtime checks**

Add desktop assertions:

```js
if ((await page.locator("[data-atlas-key]").count()) !== 4) throw new Error("desktop: wrong atlas node count");
await page.locator('[data-research-key="llm-scaling"]').hover();
if (!(await page.locator('[data-atlas-key="llm-scaling"]').evaluate((node) => node.classList.contains("is-active")))) throw new Error("desktop: atlas linkage failed");
await page.locator("#papers").scrollIntoViewIfNeeded();
await page.waitForTimeout(100);
if ((await page.locator('[data-section-target="papers"]').getAttribute("aria-current")) !== "true") throw new Error("desktop: progress did not update");
```

Add a reduced-motion page using `page.emulateMedia({ reducedMotion: "reduce" })` and assert that `.reveal-section` opacity is `1` and transform is `none`.

- [ ] **Step 2: Update cache-busting asset versions**

Change the query string for `styles.css`, `app.js`, and the imported module URLs to a matching `20260814-5` value.

- [ ] **Step 3: Run the complete Node suite**

Run: `npm test`

Expected: all tests PASS.

- [ ] **Step 4: Run browser acceptance**

Run a static server at port 4173, then:

```bash
PLAYWRIGHT_CHROMIUM_EXECUTABLE="$(node -e 'console.log(require("playwright").chromium.executablePath())')" node tests/browser-acceptance.cjs
```

Expected: the script prints the browser acceptance success line with no console or page errors.

- [ ] **Step 5: Inspect desktop and mobile screenshots**

Open `artifacts/desktop.png` and `artifacts/mobile.png`. Confirm readable hierarchy, no overlap, visible disclosure, compact paper rows, and restrained atlas motion states.

- [ ] **Step 6: Commit acceptance coverage and cache refresh**

```bash
git add index.html assets/app.js tests/browser-acceptance.cjs
git commit -m "test: verify living research atlas interactions"
```

- [ ] **Step 7: Final repository verification**

Run:

```bash
npm test
git status --short
git log -5 --oneline
```

Expected: tests pass; only pre-existing untracked content documentation and visual-companion files remain outside the implementation commits.
