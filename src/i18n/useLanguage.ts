import { useContext } from "react";
import { LanguageContext } from "./LanguageContext.context";
import type { LanguageContextValue } from "../types/language";

export function useLanguage(): LanguageContextValue {
    const context = useContext(LanguageContext);
    if (!context) {
        throw new Error("useLanguage must be used within a LanguageProvider");
    }

    return context;
}
