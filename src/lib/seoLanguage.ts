// Shared static-site language URL contract. Keep standalone site copies identical.
const LANGUAGE_CODES = new Set([
    "ar",
    "bn",
    "cs",
    "de",
    "en",
    "es",
    "fr",
    "hi",
    "id",
    "it",
    "ja",
    "ko",
    "pl",
    "pt",
    "ru",
    "tr",
    "vi",
    "zh",
]);

/** Explicit URL locales outrank stored and browser preferences. */
export function languageFromPath(pathname: string): string | null {
    const code = pathname.split("/")[1] ?? "";
    return LANGUAGE_CODES.has(code) ? code : null;
}

/** Route matching remains independent of a language prefix. */
export function unlocalizedPath(pathname: string): string {
    const language = languageFromPath(pathname);
    return language ? pathname.slice(language.length + 1) || "/" : pathname;
}

/** English retains existing public addresses; other languages have real directories. */
export function localizedPath(pathname: string, language: string): string {
    const path = unlocalizedPath(pathname);
    return language === "en" ? path : `/${language}${path.startsWith("/") ? path : `/${path}`}`;
}

/** Cross-site presentation links retain their destination, query and fragment. */
export function localizedUrl(value: string, language: string): string {
    const url = new URL(value);
    url.pathname = localizedPath(url.pathname, language);
    url.searchParams.delete("lang");
    return url.href;
}

/** Language anchors keep the current section and non-language query values. */
export function currentLanguageHref(language: string): string {
    if (typeof window === "undefined") return localizedPath("/", language);
    const url = new URL(localizedUrl(window.location.href, language));
    return `${url.pathname}${url.search}${url.hash}`;
}

/** Preserve legacy shared links while treating each clean URL as a stable language. */
export function languageFromLocation(): string {
    const explicit = languageFromPath(window.location.pathname);
    if (explicit) return explicit;
    const requested = new URLSearchParams(window.location.search).get("lang");
    return requested && LANGUAGE_CODES.has(requested) ? requested : "en";
}

/** A document navigation keeps translated HTML, metadata and content in agreement. */
export function syncLanguageUrl(language: string): void {
    const url = new URL(window.location.href);
    const legacy = url.searchParams.has("lang");
    url.pathname = localizedPath(url.pathname, language);
    url.searchParams.delete("lang");
    if (url.pathname !== window.location.pathname) {
        if (legacy) window.location.replace(url.href);
        else window.location.assign(url.href);
    } else if (url.href !== window.location.href) {
        window.history.replaceState(window.history.state, "", url);
    }
}
