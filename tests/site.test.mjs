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
  assert.match(html, /class="hero-statement"/);
  assert.match(html, /id="research-atlas"/);
  assert.equal((html.match(/data-atlas-key=/g) ?? []).length, 4);
  assert.equal((html.match(/data-research-key=/g) ?? []).length, 4);
  assert.match(html, /class="section-progress"/);
  assert.equal((html.match(/data-section-target=/g) ?? []).length, 5);
  for (const id of ["research", "experience", "papers", "projects", "interests", "demo-disclosure"]) {
    assert.match(html, new RegExp(`id="${id}"`));
  }
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
  assert.match(css, /height:\s*100dvh/);
  assert.match(css, /\.research-atlas/);
  assert.match(css, /\.atlas-node\.is-active/);
  assert.match(css, /\.section-progress/);
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
  assert.match(app, /function bindSectionProgress/);
  assert.match(app, /IntersectionObserver/);
  assert.match(app, /requestAnimationFrame/);
});
