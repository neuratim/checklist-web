import { createContext } from "react";
import type { LanguageContextValue } from "../types/language";

/**
 * Kept apart from the provider component so that neither the context object nor
 * the `useLanguage` hook shares a module with a component export — a module that
 * mixes the two breaks React Fast Refresh.
 */
export const LanguageContext = createContext<LanguageContextValue | null>(null);
