import type { LanguageCode } from "./types/language";
import { DICTIONARIES } from "./i18n/registry";
import { renderToStaticMarkup } from "react-dom/server";
import App from "./App";
import { LanguageProvider } from "./i18n/LanguageContext";

/** Render the actual English landing page at build time, without a browser or network. */
export function renderApp(pathname = "/", language: LanguageCode = "en"): string {
    return renderToStaticMarkup(
        <LanguageProvider initialLanguage={language}>
            <App pathname={pathname} />
        </LanguageProvider>,
    );
}

export function renderPrivacyPolicyMetadata() {
    const dictionary = DICTIONARIES.en;
    return {
        path: "/privacy-policy/",
        title: `${dictionary.privacyPolicy.title} — ${dictionary.privacyPolicy.eyebrow}`,
        description: dictionary.privacyPolicy.intro,
    };
}

export function renderPrivacyPolicyCopy(language: LanguageCode = "en") {
    return DICTIONARIES[language].privacyPolicy;
}
