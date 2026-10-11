import type { CurrencyCode, LanguageCode, LanguageMeta, TextDirection } from "../types/language";

export const DEFAULT_LANGUAGE: LanguageCode = "en";
export const DEFAULT_DIRECTION: TextDirection = "ltr";

/** Length of the primary-language subtag in a BCP 47 tag: the `en` of `en-GB`. */
const PRIMARY_SUBTAG_LENGTH = 2;

export const LANGUAGES: readonly LanguageMeta[] = [
    { code: "ar", currency: "USD", dir: "rtl", nativeName: "العربية" },
    { code: "bn", currency: "USD", dir: "ltr", nativeName: "বাংলা" },
    { code: "cs", currency: "EUR", dir: "ltr", nativeName: "Čeština" },
    { code: "de", currency: "EUR", dir: "ltr", nativeName: "Deutsch" },
    { code: "en", currency: "USD", dir: "ltr", nativeName: "English" },
    { code: "es", currency: "EUR", dir: "ltr", nativeName: "Español" },
    { code: "fr", currency: "EUR", dir: "ltr", nativeName: "Français" },
    { code: "hi", currency: "USD", dir: "ltr", nativeName: "हिन्दी" },
    { code: "id", currency: "USD", dir: "ltr", nativeName: "Bahasa Indonesia" },
    { code: "it", currency: "EUR", dir: "ltr", nativeName: "Italiano" },
    { code: "ja", currency: "USD", dir: "ltr", nativeName: "日本語" },
    { code: "ko", currency: "USD", dir: "ltr", nativeName: "한국어" },
    { code: "pl", currency: "EUR", dir: "ltr", nativeName: "Polski" },
    { code: "pt", currency: "EUR", dir: "ltr", nativeName: "Português" },
    { code: "ru", currency: "USD", dir: "ltr", nativeName: "Русский" },
    { code: "tr", currency: "USD", dir: "ltr", nativeName: "Türkçe" },
    { code: "vi", currency: "USD", dir: "ltr", nativeName: "Tiếng Việt" },
    { code: "zh", currency: "USD", dir: "ltr", nativeName: "中文" },
];

export const DEFAULT_CURRENCY: CurrencyCode = "USD";

const CURRENCY_BY_LANGUAGE = new Map(LANGUAGES.map((language) => [language.code, language.currency]));

/** What to quote and charge a reader of this language in. See LANGUAGES above. */
export function currencyForLanguage(code: LanguageCode): CurrencyCode {
    return CURRENCY_BY_LANGUAGE.get(code) ?? DEFAULT_CURRENCY;
}

/** The supported language a browser locale tag such as `de-AT` maps to, or the default. */
export function languageFromLocale(tag: string): LanguageCode {
    const primary = tag.slice(0, PRIMARY_SUBTAG_LENGTH);
    return isLanguageCode(primary) ? primary : DEFAULT_LANGUAGE;
}

export function isLanguageCode(value: string): value is LanguageCode {
    return LANGUAGES.some((language) => language.code === value);
}
