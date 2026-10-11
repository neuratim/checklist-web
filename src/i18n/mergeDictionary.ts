import en from "./locales/en";
import type { Dictionary, LocaleDictionary } from "../types/dictionary";

function isPlainObject(value: unknown): value is Record<string, unknown> {
    return typeof value === "object" && value !== null && !Array.isArray(value);
}

/**
 * Overlays `override` onto `base`, key by key and index by index, keeping
 * whatever `base` has wherever `override` says nothing.
 */
function overlay(base: unknown, override: unknown): unknown {
    if (override === undefined) {
        return base;
    }

    if (Array.isArray(base)) {
        const overrides = Array.isArray(override) ? override : [];
        // Index-aligned rather than replaced wholesale, so a locale that
        // translated the first three of four list entries keeps its three.
        return base.map((entry, index) => overlay(entry, overrides[index]));
    }

    if (isPlainObject(base) && isPlainObject(override)) {
        const merged: Record<string, unknown> = { ...base };
        for (const key of Object.keys(base)) {
            merged[key] = overlay(base[key], override[key]);
        }
        return merged;
    }

    return override;
}

/**
 * Completes a translation with English wherever it is missing.
 *
 * English is the source of truth: new copy is written in `en.ts` alone, and
 * every other locale is a {@link LocaleDictionary} — a partial that may lag
 * behind. Rather than forcing all 18 files to change in lockstep (or letting
 * a missing key render as `undefined`), each locale is overlaid onto English,
 * so an untranslated string simply appears in English until someone
 * translates it.
 *
 * The cast is the one place completeness is asserted: `base` is the full
 * English dictionary and every key of it is visited, so the result cannot be
 * missing anything `Dictionary` requires.
 */
export function withEnglishFallback(locale: LocaleDictionary): Dictionary {
    return overlay(en, locale) as Dictionary;
}
