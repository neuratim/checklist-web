import type { Dictionary } from "./dictionary";

/**
 * The currency a locale is quoted and charged in. Stripe is told this too, so a reader sees
 * one currency from the donation appeal through to the card form and their statement.
 */
export type CurrencyCode = "EUR" | "USD";

export type LanguageCode =
    | "ar"
    | "bn"
    | "cs"
    | "de"
    | "en"
    | "es"
    | "fr"
    | "hi"
    | "id"
    | "it"
    | "ja"
    | "ko"
    | "pl"
    | "pt"
    | "ru"
    | "tr"
    | "vi"
    | "zh";

export type TextDirection = "ltr" | "rtl";

export interface LanguageMeta {
    code: LanguageCode;
    /**
     * What this locale's readers are asked for. USD is the default; the European languages
     * take EUR. It lives on the language rather than in a separate table so a language
     * cannot be added without deciding it.
     */
    currency: CurrencyCode;
    dir: TextDirection;
    nativeName: string;
}

export interface LanguageContextValue {
    dictionary: Dictionary;
    language: LanguageCode;
    languages: readonly LanguageMeta[];
    setLanguage: (language: LanguageCode) => void;
}

/** Optional deterministic initial locale for static rendering and verification. */
export interface LanguageProviderProps {
    initialDictionary?: Dictionary;
    initialLanguage?: LanguageCode;
}
