import type { Dictionary, LocaleDictionary } from "../types/dictionary";
import type { LanguageCode } from "../types/language";
import en from "./locales/en";
import { withEnglishFallback } from "./mergeDictionary";

const LOADERS: Record<LanguageCode, () => Promise<LocaleDictionary>> = {
    ar: async () => (await import("./locales/ar")).default,
    bn: async () => (await import("./locales/bn")).default,
    cs: async () => (await import("./locales/cs")).default,
    de: async () => (await import("./locales/de")).default,
    en: async () => en,
    es: async () => (await import("./locales/es")).default,
    fr: async () => (await import("./locales/fr")).default,
    hi: async () => (await import("./locales/hi")).default,
    id: async () => (await import("./locales/id")).default,
    it: async () => (await import("./locales/it")).default,
    ja: async () => (await import("./locales/ja")).default,
    ko: async () => (await import("./locales/ko")).default,
    pl: async () => (await import("./locales/pl")).default,
    pt: async () => (await import("./locales/pt")).default,
    ru: async () => (await import("./locales/ru")).default,
    tr: async () => (await import("./locales/tr")).default,
    vi: async () => (await import("./locales/vi")).default,
    zh: async () => (await import("./locales/zh")).default,
};
const cache = new Map<LanguageCode, Promise<Dictionary>>([["en", Promise.resolve(en)]]);
export const DEFAULT_DICTIONARY = en;

/** Browser startup loads its selected locale; all dictionaries remain available to SSR. */
export function loadDictionary(language: LanguageCode): Promise<Dictionary> {
    const cached = cache.get(language);
    if (cached) return cached;
    const pending = LOADERS[language]()
        .then(withEnglishFallback)
        .catch((error: unknown) => {
            cache.delete(language);
            throw error;
        });
    cache.set(language, pending);
    return pending;
}
