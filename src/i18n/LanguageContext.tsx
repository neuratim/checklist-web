import { useEffect, useMemo, useState, type PropsWithChildren } from "react";
import { LANGUAGE_QUERY_PARAM, LANGUAGE_STORAGE_KEY } from "../constants/storage";
import { readStored, writeStored } from "../lib/storage";
import type { LanguageCode, LanguageContextValue } from "../types/language";
import { LanguageContext } from "./LanguageContext.context";
import {
    DEFAULT_DIRECTION,
    DEFAULT_LANGUAGE,
    LANGUAGES,
    isLanguageCode,
    languageFromLocale,
} from "./languages";
import { DICTIONARIES } from "./registry";

function getLanguageFromUrl(): LanguageCode | null {
    const fromQuery = new URLSearchParams(window.location.search).get(LANGUAGE_QUERY_PARAM);
    return fromQuery && isLanguageCode(fromQuery) ? fromQuery : null;
}

function detectInitialLanguage(): LanguageCode {
    if (typeof window === "undefined") return DEFAULT_LANGUAGE;

    const fromUrl = getLanguageFromUrl();
    if (fromUrl) {
        return fromUrl;
    }

    const stored = readStored(LANGUAGE_STORAGE_KEY);
    if (stored && isLanguageCode(stored)) {
        return stored;
    }

    return languageFromLocale(window.navigator.language);
}

export function LanguageProvider({ children }: PropsWithChildren) {
    const [language, setLanguageState] = useState<LanguageCode>(detectInitialLanguage);

    useEffect(() => {
        const meta = LANGUAGES.find((candidate) => candidate.code === language);
        document.documentElement.lang = language;
        document.documentElement.dir = meta?.dir ?? DEFAULT_DIRECTION;
        writeStored(LANGUAGE_STORAGE_KEY, language);

        const url = new URL(window.location.href);
        if (url.searchParams.get(LANGUAGE_QUERY_PARAM) !== language) {
            url.searchParams.set(LANGUAGE_QUERY_PARAM, language);
            window.history.replaceState(null, "", url);
        }
    }, [language]);

    const value = useMemo<LanguageContextValue>(
        () => ({
            dictionary: DICTIONARIES[language],
            language,
            languages: LANGUAGES,
            setLanguage: setLanguageState,
        }),
        [language],
    );

    return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}
