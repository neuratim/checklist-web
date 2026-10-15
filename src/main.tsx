import { retainStaticPage } from "./lib/retainStaticPage";
import { DEFAULT_LANGUAGE, isLanguageCode } from "./i18n/languages";
import { loadDictionary } from "./i18n/registry";
import { languageFromLocation } from "./lib/seoLanguage";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import { LanguageProvider } from "./i18n/LanguageContext";
import { installAnchorScroll } from "./lib/anchorScroll";
import "./index.css";

installAnchorScroll();

async function mount() {
    const root = document.getElementById("root");
    if (!root) return;
    const requested = languageFromLocation();
    const language = isLanguageCode(requested) ? requested : DEFAULT_LANGUAGE;
    const dictionary = await loadDictionary(language);
    createRoot(root).render(
        <StrictMode>
            <LanguageProvider initialDictionary={dictionary} initialLanguage={language}>
                <App />
            </LanguageProvider>
        </StrictMode>,
    );
}
void mount().catch((error: unknown) => {
    const root = document.getElementById("root");
    if (root) retainStaticPage(root);
    console.error("Unable to initialize the page language.", error);
});
