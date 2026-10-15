import { languageFromLocation, syncLanguageUrl } from "../lib/seoLanguage";
import { useEffect, useMemo, useState, type PropsWithChildren } from "react";
import { LANGUAGE_STORAGE_KEY } from "../constants/storage";
import { writeStored } from "../lib/storage";
import type { LanguageCode, LanguageContextValue, LanguageProviderProps } from "../types/language";
import { LanguageContext } from "./LanguageContext.context";
import { DEFAULT_DIRECTION, DEFAULT_LANGUAGE, LANGUAGES, isLanguageCode } from "./languages";
import DEFAULT_DICTIONARY from "./locales/en";

function detectInitialLanguage(): LanguageCode {
    if (typeof window === "undefined") return DEFAULT_LANGUAGE;
    const requested = languageFromLocation();
    return isLanguageCode(requested) ? requested : DEFAULT_LANGUAGE;
}

export function LanguageProvider({
    children,
    initialDictionary,
    initialLanguage,
}: PropsWithChildren<LanguageProviderProps>) {
    const [dictionary] = useState(initialDictionary ?? DEFAULT_DICTIONARY);
    const [language] = useState<LanguageCode>(() => initialLanguage ?? detectInitialLanguage());

    useEffect(() => {
        const meta = LANGUAGES.find((candidate) => candidate.code === language);
        document.documentElement.lang = language;
        document.documentElement.dir = meta?.dir ?? DEFAULT_DIRECTION;
        writeStored(LANGUAGE_STORAGE_KEY, language);

        syncLanguageUrl(language);
    }, [language]);

    const value = useMemo<LanguageContextValue>(
        () => ({
            dictionary,
            language,
            languages: LANGUAGES,
            setLanguage: syncLanguageUrl,
        }),
        [dictionary, language],
    );

    return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}
