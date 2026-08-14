import { content } from "./content.js?v=20260814-6";
import { STORAGE_KEY, detectLocale, persistLocale } from "./locale.js?v=20260814-6";

const byId = (id) => document.getElementById(id);
let atlasController = null;

function setText(id, value) {
  const node = byId(id);
  if (node) node.textContent = value;
}

function textElement(tag, className, value) {
  const node = document.createElement(tag);
  if (className) node.className = className;
  node.textContent = value;
  return node;
}

function renderSimpleList(targetId, items) {
  const target = byId(targetId);
  target.replaceChildren(...items.map((item) => textElement("li", "", item)));
}

function renderContacts(items) {
  const target = byId("contact-links");
  const nodes = items.map((item) => {
    if (!item.href) {
      const label = textElement("span", "", item.label);
      label.setAttribute("aria-disabled", "true");
      return label;
    }
    const link = textElement("a", "", `${item.label} ↗`);
    link.href = item.href;
    link.target = "_blank";
    link.rel = "noreferrer";
    return link;
  });
  target.replaceChildren(...nodes);
}

function demoAction(label) {
  const action = textElement("span", "demo-action", label);
  action.setAttribute("data-demo-action", "");
  action.setAttribute("aria-disabled", "true");
  return action;
}

function renderResearch(items) {
  const entries = items.map((direction, index) => {
    const entry = document.createElement("article");
    entry.className = "research-feature";
    entry.dataset.researchKey = direction.key;
    entry.tabIndex = 0;
    entry.append(
      textElement("p", "research-index", String(index + 1).padStart(2, "0")),
      textElement("p", "micro-label", direction.kicker),
      textElement("h4", "", direction.title),
      textElement("p", "research-description", direction.description),
    );
    return entry;
  });
  byId("research-list").replaceChildren(...entries);
}

function renderAtlas(items) {
  const nodes = items.map((item) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = `atlas-node atlas-node--${item.key}`;
    button.dataset.atlasKey = item.key;
    button.setAttribute("aria-label", item.accessibleLabel);
    button.append(
      textElement("span", "atlas-dot", ""),
      textElement("span", "atlas-label", item.label),
    );
    return button;
  });
  byId("atlas-nodes").replaceChildren(...nodes);
}

function renderSectionProgress(items) {
  const currentTarget = document.querySelector("[data-section-target][aria-current='true']")?.dataset.sectionTarget ?? "research";
  const links = items.map((item, index) => {
    const link = document.createElement("a");
    link.href = `#${item.target}`;
    link.dataset.sectionTarget = item.target;
    if (item.target === currentTarget) link.setAttribute("aria-current", "true");
    link.append(
      textElement("span", "progress-number", String(index + 1).padStart(2, "0")),
      textElement("span", "progress-label", item.label),
    );
    return link;
  });
  byId("section-progress").replaceChildren(...links);
}

function bindResearchAtlas() {
  atlasController?.abort();
  atlasController = new AbortController();
  const { signal } = atlasController;
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
    target.addEventListener("pointerenter", () => activate(key), { signal });
    target.addEventListener("pointerleave", () => activate(), { signal });
    target.addEventListener("focus", () => activate(key), { signal });
    target.addEventListener("blur", () => activate(), { signal });
  }

  if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    let frame = 0;
    atlas.addEventListener("pointermove", (event) => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const bounds = atlas.getBoundingClientRect();
        atlas.style.setProperty("--pointer-x", `${event.clientX - bounds.left}px`);
        atlas.style.setProperty("--pointer-y", `${event.clientY - bounds.top}px`);
      });
    }, { signal });
  }
}

function bindRevealSections() {
  const sections = [...document.querySelectorAll(".reveal-section")];
  if (!("IntersectionObserver" in window) || window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    sections.forEach((section) => section.classList.add("is-visible"));
    return;
  }

  document.documentElement.classList.add("has-reveal-motion");
  const observer = new IntersectionObserver((entries) => {
    for (const entry of entries) {
      if (!entry.isIntersecting) continue;
      entry.target.classList.add("is-visible");
      observer.unobserve(entry.target);
    }
  }, { rootMargin: "0px 0px -12%", threshold: 0.08 });
  sections.forEach((section) => observer.observe(section));
}

function bindSectionProgress() {
  const sections = [...document.querySelectorAll(".indexed-section[id]")];
  const setCurrent = (id) => {
    for (const link of document.querySelectorAll("[data-section-target]")) {
      if (link.dataset.sectionTarget === id) link.setAttribute("aria-current", "true");
      else link.removeAttribute("aria-current");
    }
  };

  if (!("IntersectionObserver" in window)) {
    setCurrent(sections[0]?.id);
    return;
  }

  const observer = new IntersectionObserver((entries) => {
    const visible = entries
      .filter((entry) => entry.isIntersecting)
      .sort((a, b) => Math.abs(a.boundingClientRect.top) - Math.abs(b.boundingClientRect.top));
    if (visible[0]) setCurrent(visible[0].target.id);
  }, { rootMargin: "-16% 0px -68%", threshold: 0 });
  sections.forEach((section) => observer.observe(section));
}

function renderExperience(items) {
  const rows = items.map((item) => {
    const row = document.createElement("article");
    row.className = "experience-row";
    row.append(
      textElement("p", "record-year", item.period),
      textElement("h4", "", item.title),
    );
    return row;
  });
  byId("experience-list").replaceChildren(...rows);
}

function renderPapers(items) {
  const rows = items.map((paper) => {
    const row = document.createElement("article");
    row.className = "paper-row";
    const body = document.createElement("div");
    body.className = "record-body";
    body.append(
      textElement("h4", "", paper.title),
      textElement("p", "", `${paper.authors} · ${paper.venue}`),
      textElement("p", "record-topic", paper.topic),
    );
    row.append(textElement("p", "record-year", paper.year), body, demoAction(paper.action));
    return row;
  });
  byId("paper-list").replaceChildren(...rows);
}

function renderProjects(items) {
  const projects = items.map((project) => {
    const entry = document.createElement("article");
    entry.className = "project-entry";
    entry.append(
      textElement("p", "micro-label", project.category),
      textElement("h4", "", project.title),
      textElement("p", "", project.description),
      demoAction(project.action),
    );
    return entry;
  });
  byId("project-list").replaceChildren(...projects);
}

function applyLocale(locale, { persist = true } = {}) {
  const page = content[locale];
  document.documentElement.lang = locale === "zh" ? "zh-CN" : "en";
  document.title = page.meta.title;
  document.querySelector('meta[name="description"]').content = page.meta.description;
  document.querySelector('meta[property="og:title"]').content = page.meta.title;
  document.querySelector('meta[property="og:description"]').content = page.meta.description;

  setText("skip-link", page.skipLabel);
  setText("profile-role", page.profile.role);
  setText("profile-name", page.profile.name);
  setText("profile-affiliation", page.profile.affiliation);
  setText("profile-department", page.profile.department);
  setText("profile-location", page.profile.location);
  setText("profile-bio", page.profile.bio);
  setText("now-label", page.profile.nowLabel);
  setText("now-text", page.profile.now);
  byId("portrait").alt = page.profile.portraitAlt;
  renderSimpleList("focus-list", page.profile.focus);
  renderContacts(page.contacts);

  for (const key of ["research", "experience", "papers", "projects", "interests"]) {
    setText(`${key}-number`, page.sections[key].number);
    setText(`${key}-section-title`, page.sections[key].title);
  }
  renderResearch(page.research);
  renderAtlas(page.atlas);
  renderSectionProgress(page.navigation);
  renderExperience(page.experience);
  renderPapers(page.papers);
  renderProjects(page.projects);
  renderSimpleList("interest-list", page.interests);
  setText("disclosure-label", page.disclosureLabel);
  setText("disclosure-text", page.disclosure);
  setText("footer-text", page.footer);
  bindResearchAtlas();

  const switcher = document.querySelector("[data-language-switch]");
  switcher.setAttribute("aria-label", page.languageLabel);
  byId("section-progress").setAttribute("aria-label", page.navigationLabel);
  for (const button of switcher.querySelectorAll("button")) {
    const active = button.dataset.locale === locale;
    button.classList.toggle("is-active", active);
    button.setAttribute("aria-pressed", String(active));
  }
  if (persist) persistLocale(window.localStorage, locale);
}

let stored = null;
try {
  stored = window.localStorage.getItem(STORAGE_KEY);
} catch {
  stored = null;
}

const initialLocale = detectLocale({ stored, browserLanguage: navigator.language });
applyLocale(initialLocale, { persist: false });
byId("year").textContent = String(new Date().getFullYear());
bindRevealSections();
bindSectionProgress();
requestAnimationFrame(() => requestAnimationFrame(() => document.documentElement.classList.add("is-ready")));

document.querySelector("[data-language-switch]").addEventListener("click", (event) => {
  const button = event.target.closest("button[data-locale]");
  if (button) applyLocale(button.dataset.locale);
});
