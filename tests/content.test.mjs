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
  "focus",
  "nowLabel",
  "now",
];

test("Chinese and English content expose the same complete shape", () => {
  for (const locale of ["en", "zh"]) {
    const page = content[locale];
    assert.ok(page, `missing ${locale} content`);
    for (const key of requiredProfile) assert.ok(page.profile[key], `${locale}.profile.${key}`);
    for (const key of ["research", "papers", "projects", "interests"]) {
      assert.ok(page.sections[key].title, `${locale}.sections.${key}.title`);
      assert.ok(page.sections[key].number, `${locale}.sections.${key}.number`);
    }
    assert.equal(page.papers.length, 3);
    assert.equal(page.projects.length, 4);
    assert.ok(page.interests.length >= 4);
    assert.ok(page.disclosure.length > 40);
  }

  assert.deepEqual(Object.keys(content.en), Object.keys(content.zh));
  assert.equal(content.en.papers.length, content.zh.papers.length);
  assert.equal(content.en.projects.length, content.zh.projects.length);
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
  assert.match(content.zh.disclosure, /虚构|测试/);
});
