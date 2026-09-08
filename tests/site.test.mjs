import test from "node:test";
import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";

const root = new URL("../", import.meta.url);
const read = (path) => readFile(new URL(path, root), "utf8");

test("document contains the complete semantic personal homepage", async () => {
  const html = await read("index.html");
  assert.match(html, /<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">/);
  assert.match(html, /<link rel="canonical" href="https:\/\/redawn7\.github\.io\/">/);
  assert.match(html, /<script type="application\/ld\+json">/);
  assert.match(html, /data-language-switch/);
  assert.match(html, /<aside[^>]*class="profile-rail"/);
  assert.match(html, /<main[^>]*id="work"/);
  assert.doesNotMatch(html, /class="hero-statement"/);
  assert.match(html, /id="research-atlas"/);
  assert.match(html, /class="atlas-connections"/);
  assert.equal((html.match(/<line /g) ?? []).length, 3);
  assert.equal((html.match(/data-atlas-line=/g) ?? []).length, 4);
  assert.equal((html.match(/data-atlas-key=/g) ?? []).length, 4);
  assert.equal((html.match(/data-research-key=/g) ?? []).length, 4);
  assert.equal((html.match(/class="atlas-node /g) ?? []).length, 4);
  for (const key of ["llm-scaling", "inference", "markets", "spacetime"]) {
    assert.match(html, new RegExp(`href="#research-${key}"`));
    assert.match(html, new RegExp(`id="research-${key}"`));
  }
  assert.match(html, /class="section-progress"/);
  assert.equal((html.match(/data-section-target=/g) ?? []).length, 5);
  for (const id of ["research", "experience", "papers", "projects", "interests", "demo-disclosure"]) {
    assert.match(html, new RegExp(`id="${id}"`));
  }
  assert.equal((html.match(/<h2 id="[^"]+-section-title"/g) ?? []).length, 5);
  assert.doesNotMatch(html, /<h3 id="[^"]+-section-title"/);
  assert.match(html, /class="experience-list experience-timeline"/);
  assert.match(html, /experience-row--exchange/);
  assert.match(html, /id="publications-toggle"/);
  assert.match(html, /aria-expanded="false"/);
  assert.match(html, /id="collaboration"/);
  assert.doesNotMatch(html, /aria-disabled="true">(?:Email|CV)/);
  assert.match(html, /fictional placeholders/i);
});

test("runtime assets are local and dependency-free", async () => {
  const html = await read("index.html");
  assert.match(html, /href="\.\/assets\/styles\.css(?:\?[^\"]+)?"/);
  assert.match(html, /src="\.\/assets\/app\.js(?:\?[^\"]+)?"/);
  assert.doesNotMatch(html, /<script[^>]+https?:\/\//);
  assert.doesNotMatch(html, /<link[^>]+(?:fonts\.googleapis|cdn\.)/);
  await Promise.all(["assets/styles.css", "assets/app.js", "assets/avatar.svg"].map(read));
});

test("visual contract includes responsive, focus, and reduced-motion rules", async () => {
  const css = await read("assets/styles.css");
  assert.match(css, /:focus-visible/);
  assert.match(css, /@media \(min-width: 48rem\)/);
  assert.match(css, /@media \(min-width: 70rem\)/);
  assert.match(css, /prefers-reduced-motion: reduce/);
  assert.match(css, /min-height:\s*44px/);
  assert.match(css, /\.profile-rail\s*\{[^}]*position:\s*fixed/s);
  assert.match(css, /\.profile-rail h1\s*\{[^}]*white-space:\s*nowrap/s);
  assert.match(css, /height:\s*100dvh/);
  assert.match(css, /\.research-atlas/);
  assert.match(css, /\.atlas-connections/);
  assert.match(css, /#research\s*\{[^}]*position:\s*relative/s);
  assert.match(css, /\.research-toolbar\s*\{[^}]*position:\s*absolute[^}]*inset-block-start:\s*0\.5rem[^}]*inset-inline-end:\s*0/s);
  assert.match(css, /\.language-switch button\s*\{[^}]*min-height:\s*44px[^}]*font-size:\s*0\.58rem/s);
  assert.match(css, /\.atlas-node\.is-active/);
  assert.match(css, /\[data-atlas-line\]\.is-active/);
  assert.match(css, /\.section-progress/);
  assert.match(css, /\.section-key span\s*\{[^}]*font-size:\s*0\.9rem/s);
  assert.match(css, /\.section-key h2\s*\{[^}]*font-size:\s*1rem/s);
  assert.match(css, /scroll-margin-top/);
  assert.match(css, /scroll-snap-type:\s*x proximity/);
  assert.match(css, /\.experience-timeline/);
  assert.match(css, /\.js \.paper-list:not\(\.is-expanded\) \.paper-row--secondary/);
  assert.match(css, /\.reveal-section\.is-visible/);
  assert.match(css, /\.paper-row:hover/);
  assert.match(css, /\.project-entry:hover/);
});

test("application renders demo actions without navigable paper or project links", async () => {
  const app = await read("assets/app.js");
  assert.match(app, /aria-disabled/);
  assert.match(app, /data-demo-action/);
  assert.doesNotMatch(app, /innerHTML\s*=/);
  assert.match(app, /function renderAtlas/);
  assert.match(app, /function renderSectionProgress/);
  assert.match(app, /function bindResearchAtlas/);
  assert.match(app, /function bindPublicationToggle/);
  assert.match(app, /function bindSectionProgress/);
  assert.match(app, /IntersectionObserver/);
  assert.match(app, /requestAnimationFrame/);
});
