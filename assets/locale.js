export const STORAGE_KEY = "redawn7-locale";

export function normalizeLocale(locale) {
  return typeof locale === "string" && locale.toLowerCase().startsWith("zh") ? "zh" : "en";
}

export function detectLocale({ stored, browserLanguage }) {
  if (stored === "en" || stored === "zh") return stored;
  return normalizeLocale(browserLanguage);
}

export function persistLocale(storage, locale) {
  const normalized = normalizeLocale(locale);
  try {
    storage?.setItem(STORAGE_KEY, normalized);
  } catch {
    // The page remains usable when storage is unavailable or blocked.
  }
  return normalized;
}
