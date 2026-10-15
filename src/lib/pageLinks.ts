import type { LanguageCode } from "../types/language";

/** Preserve the active locale when navigating between separately served pages. */
export function localizedPageHref(path: string, language: LanguageCode, hash = ""): string {
    return `${path}?lang=${language}${hash}`;
}

export function isPrivacyPolicyPath(pathname: string): boolean {
    return pathname === "/privacy-policy" || pathname === "/privacy-policy/";
}
