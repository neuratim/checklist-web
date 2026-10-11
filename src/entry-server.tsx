import { renderToStaticMarkup } from "react-dom/server";
import App from "./App";
import { LanguageProvider } from "./i18n/LanguageContext";

/** Render the actual English landing page at build time, without a browser or network. */
export function renderApp(): string {
    return renderToStaticMarkup(
        <LanguageProvider>
            <App />
        </LanguageProvider>,
    );
}
