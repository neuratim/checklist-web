import { useCallback, useEffect, useRef, useState } from "react";
import { useDismissibleNotice } from "../hooks/useDismissibleNotice";
import { useFitScale } from "../hooks/useFitScale";
import { WEB_URL } from "../../site.config";
import { BRAND_NAME } from "../constants/brand";
import { SECTION_HREFS } from "../constants/routes";
import { TRY_NOTICE_STORAGE_KEY } from "../constants/storage";
import {
    BOOTSTRAP_GRACE_MS,
    IFRAME_SANDBOX,
    READY_MESSAGE,
    SCREEN_HEIGHT,
    SCREEN_WIDTH,
} from "../constants/tryApp";
import { useLanguage } from "../i18n/useLanguage";
import "./TryApp.css";

const APP_ORIGIN = new URL(WEB_URL).origin;

/**
 * The real app, embedded — its own route rather than a section.
 *
 * There is one layout here, not two. The stage is a phone shell on a screen with
 * room for one and the whole viewport on a screen without, and `TryApp.css`
 * decides which by media query alone. Branching in JS would put the iframe in a
 * different place in the tree per branch, so crossing the breakpoint would reboot
 * the app instead of resizing it.
 */
export function TryApp() {
    const { dictionary } = useLanguage();
    const { tryApp } = dictionary;
    const { ref: fitRef, style: fitStyle } = useFitScale(SCREEN_WIDTH, SCREEN_HEIGHT);
    const { dismiss: dismissNotice, isDismissed: isNoticeDismissed } =
        useDismissibleNotice(TRY_NOTICE_STORAGE_KEY);
    const [isAppLoaded, setIsAppLoaded] = useState(false);
    const graceTimerRef = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);

    useEffect(() => {
        const handleReadyMessage = (event: MessageEvent) => {
            if (event.origin !== APP_ORIGIN || event.data !== READY_MESSAGE) {
                return;
            }
            clearTimeout(graceTimerRef.current);
            setIsAppLoaded(true);
        };

        window.addEventListener("message", handleReadyMessage);
        return () => {
            window.removeEventListener("message", handleReadyMessage);
            clearTimeout(graceTimerRef.current);
        };
    }, []);

    const handleIframeLoad = useCallback(() => {
        graceTimerRef.current = setTimeout(() => setIsAppLoaded(true), BOOTSTRAP_GRACE_MS);
    }, []);

    return (
        <div className="try-app">
            <header className="try-app-bar">
                <a className="try-app-back" href={SECTION_HREFS.top}>
                    <span aria-hidden="true" className="try-app-back-arrow">
                        ←
                    </span>
                    <span className="try-app-back-label">{tryApp.back}</span>
                </a>
                <h1 className="try-app-name">{BRAND_NAME}</h1>
            </header>

            {!isNoticeDismissed && (
                <aside className="try-app-notice">
                    <div className="try-app-notice-text">
                        <p>{tryApp.intro}</p>
                    </div>
                    <button
                        aria-label={tryApp.dismissNotice}
                        className="try-app-notice-close"
                        onClick={dismissNotice}
                        type="button"
                    >
                        <span aria-hidden="true">×</span>
                    </button>
                </aside>
            )}

            <div className="try-app-fit" ref={fitRef} style={fitStyle}>
                <div className="try-app-stage">
                    <div className="try-app-screen">
                        <iframe
                            className="try-app-iframe"
                            onLoad={handleIframeLoad}
                            sandbox={IFRAME_SANDBOX}
                            src={WEB_URL}
                            title={tryApp.iframeTitle}
                        />
                        {!isAppLoaded && (
                            <output aria-live="polite" className="try-app-loading">
                                <span aria-hidden="true" className="try-app-spinner" />
                                <span>{tryApp.loading}</span>
                            </output>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
