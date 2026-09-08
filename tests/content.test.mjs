import test from "node:test";
import assert from "node:assert/strict";

import { content } from "../assets/content.js";

const requiredProfile = [
  "name",
  "role",
  "affiliation",
  "department",
  "location",
  "bio",
];

test("Chinese and English content expose the same complete shape", () => {
  for (const locale of ["en", "zh"]) {
    const page = content[locale];
    assert.ok(page, `missing ${locale} content`);
    for (const key of requiredProfile) assert.ok(page.profile[key], `${locale}.profile.${key}`);
    assert.ok(page.atlasTitle, `${locale}.atlasTitle`);
    assert.equal(page.atlas.length, 4, `${locale}.atlas`);
    assert.equal(page.navigation.length, 5, `${locale}.navigation`);
    for (const key of ["research", "experience", "papers", "projects", "interests"]) {
      assert.ok(page.sections[key].title, `${locale}.sections.${key}.title`);
      assert.ok(page.sections[key].number, `${locale}.sections.${key}.number`);
    }
    assert.equal(page.research.length, 4);
    assert.deepEqual(page.atlas.map((item) => item.key), page.research.map((item) => item.key));
    assert.equal(page.experience.length, 4);
    assert.equal(page.papers.length, 6);
    assert.ok(page.publicationsToggle.expand);
    assert.ok(page.publicationsToggle.collapse);
    assert.ok(page.collaboration.title);
    assert.ok(page.collaboration.description);
    assert.equal(page.collaboration.links.length, 2);
    assert.equal(page.projects.length, 4);
    assert.ok(page.interests.length >= 4);
    assert.ok(page.disclosure.length > 40);
  }

  assert.deepEqual(Object.keys(content.en), Object.keys(content.zh));
  assert.equal(content.en.papers.length, content.zh.papers.length);
  assert.equal(content.en.projects.length, content.zh.projects.length);
});

test("the mock profile uses the approved interdisciplinary identity", () => {
  assert.equal(content.zh.profile.name, "陆宣辰");
  assert.equal(content.en.profile.name, "Xuanchen Lu");
  assert.match(content.en.profile.role, /Scholar.*Builder.*Explorer/);
  assert.match(content.en.profile.affiliation, /Yale University/);

  for (const locale of ["en", "zh"]) {
    assert.equal(content[locale].research.length, 4);
    for (const direction of content[locale].research) {
      assert.ok(direction.kicker);
      assert.ok(direction.title);
      assert.ok(direction.description);
      assert.ok(direction.question);
    }
  }
});

test("the profile biographies stay concise enough for a fixed desktop rail", () => {
  assert.ok(content.en.profile.bio.length <= 240);
  assert.ok(content.zh.profile.bio.length <= 110);
});

test("fictional paper selections form a plausible six-paper A-tier conference record", () => {
  const expectedVenues = ["ICLR '26", "ICML '25", "NeurIPS '25", "ACL '25", "KDD '24", "NeurIPS '24"];
  assert.deepEqual(content.en.papers.map((paper) => paper.venue), expectedVenues);
  for (const locale of ["en", "zh"]) {
    for (const paper of content[locale].papers) {
      assert.ok(paper.authors);
      assert.ok(paper.role);
      assert.ok(paper.contribution);
      assert.match(paper.authors, /Xuanchen Lu/);
      assert.ok(paper.title.split(/\s+/).length >= 10, `${paper.title} is too short`);
    }
  }
});

test("fictional experience follows the approved international education path", () => {
  const experience = content.en.experience.map(({ title }) => title).join("\n");
  assert.match(experience, /Yale University/);
  assert.match(experience, /University of Melbourne/);
  assert.match(experience, /UC Berkeley/);
  assert.match(experience, /NYU Shanghai/);
  assert.match(experience, /Information Technology.*Physics/);
  for (const locale of ["en", "zh"]) {
    for (const item of content[locale].experience) assert.ok(item.focus);
    assert.equal(content[locale].experience.filter((item) => item.kind === "exchange").length, 1);
  }
});

test("profile links and collaboration invitation use only verified destinations", () => {
  for (const locale of ["en", "zh"]) {
    const page = content[locale];
    assert.equal(page.contacts.length, 2);
    assert.ok(page.contacts.every((contact) => /^https:\/\//.test(contact.href)));
    assert.deepEqual(
      page.collaboration.links.map((link) => link.href),
      page.contacts.map((contact) => contact.href),
    );
  }
});

test("demo records cannot navigate to unrelated sources", () => {
  for (const locale of ["en", "zh"]) {
    for (const record of [...content[locale].papers, ...content[locale].projects]) {
      assert.equal(record.href, null);
      assert.equal(record.demo, true);
      assert.ok(record.action);
    }
  }
});

test("the disclosure explicitly identifies fictional test data", () => {
  assert.match(content.en.disclosure, /fictional|interface testing/i);
  assert.match(content.en.disclosure, /research directions/i);
  assert.match(content.zh.disclosure, /虚构|测试/);
  assert.match(content.zh.disclosure, /研究方向/);
});
