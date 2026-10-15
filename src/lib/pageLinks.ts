import { localizedPath, unlocalizedPath } from "./seoLanguage.ts";
import type { LanguageCode } from "../types/language";

/** Preserve the active locale when navigating between separately served pages. */
export function localizedPageHref(path: string, language: LanguageCode, hash = ""): string {
    return `${localizedPath(path, language)}${hash}`;
}

export function isPrivacyPolicyPath(pathname: string): boolean {
    const path = unlocalizedPath(pathname);
    return path === "/privacy-policy" || path === "/privacy-policy/";
}
