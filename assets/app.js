import { content } from "./content.js?v=20260813-2";
import { STORAGE_KEY, detectLocale, persistLocale } from "./locale.js?v=20260813-2";

const byId = (id) => document.getElementById(id);

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
  const entries = items.map((direction) => {
    const entry = document.createElement("article");
    entry.className = "research-feature";
    entry.append(
      textElement("p", "micro-label", direction.kicker),
      textElement("h4", "", direction.title),
    );
    return entry;
  });
  byId("research-list").replaceChildren(...entries);
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

  setText("page-eyebrow", page.page.eyebrow);
  setText("page-title", page.page.title);
  setText("page-intro", page.page.intro);
  for (const key of ["research", "experience", "papers", "projects", "interests"]) {
    setText(`${key}-number`, page.sections[key].number);
    setText(`${key}-section-title`, page.sections[key].title);
  }
  renderResearch(page.research);
  renderExperience(page.experience);
  renderPapers(page.papers);
  renderProjects(page.projects);
  renderSimpleList("interest-list", page.interests);
  setText("disclosure-label", page.disclosureLabel);
  setText("disclosure-text", page.disclosure);
  setText("footer-text", page.footer);

  const switcher = document.querySelector("[data-language-switch]");
  switcher.setAttribute("aria-label", page.languageLabel);
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

document.querySelector("[data-language-switch]").addEventListener("click", (event) => {
  const button = event.target.closest("button[data-locale]");
  if (button) applyLocale(button.dataset.locale);
});
