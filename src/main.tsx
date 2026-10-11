import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import { LanguageProvider } from "./i18n/LanguageContext";
import { installAnchorScroll } from "./lib/anchorScroll";
import "./index.css";

installAnchorScroll();

createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <LanguageProvider>
            <App />
        </LanguageProvider>
    </StrictMode>,
);
