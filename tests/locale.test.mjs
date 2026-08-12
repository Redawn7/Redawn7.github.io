import test from "node:test";
import assert from "node:assert/strict";

import { detectLocale, normalizeLocale, persistLocale } from "../assets/locale.js";

test("normalizes Chinese variants and falls back to English", () => {
  assert.equal(normalizeLocale("zh-CN"), "zh");
  assert.equal(normalizeLocale("zh-TW"), "zh");
  assert.equal(normalizeLocale("en-GB"), "en");
  assert.equal(normalizeLocale("fr-FR"), "en");
  assert.equal(normalizeLocale(undefined), "en");
});

test("stored preference wins over browser language", () => {
  assert.equal(detectLocale({ stored: "en", browserLanguage: "zh-CN" }), "en");
  assert.equal(detectLocale({ stored: "zh", browserLanguage: "en-US" }), "zh");
  assert.equal(detectLocale({ stored: null, browserLanguage: "zh-HK" }), "zh");
});

test("persists only normalized locales", () => {
  const writes = [];
  const storage = { setItem: (key, value) => writes.push([key, value]) };
  assert.equal(persistLocale(storage, "zh-CN"), "zh");
  assert.deepEqual(writes, [["redawn7-locale", "zh"]]);
});
