import {
    useCallback,
    useEffect,
    useId,
    useRef,
    useState,
    useSyncExternalStore,
    type FocusEvent,
} from "react";
import { SHARE_ACTIONS } from "../constants/siteShare";
import { useLanguage } from "../i18n/useLanguage";
import {
    copySiteLink,
    getNativeShareSupport,
    getSiteShareData,
    noNativeShareOnServer,
    shareWithDevice,
    subscribeToNativeShareSupport,
} from "../lib/siteShare";
import type { ShareSelection, SiteShareProps, SiteShareResult, SiteShareStatus } from "../types/siteShare";
import { SiteShareRoller } from "./SiteShareRoller";
import "./SiteShare.css";

function handleManualFocus(event: FocusEvent<HTMLInputElement>) {
    event.currentTarget.select();
}

export function SiteShare({ bottomInsetConsumed = false }: SiteShareProps) {
    const { dictionary, language } = useLanguage();
    const copy = dictionary.siteShare;
    const data = getSiteShareData(language, "NeuraTiM Checklist");
    const headingId = useId();
    const fallbackId = useId();
    const busyRef = useRef(false);
    const mountedRef = useRef(false);
    const [isBusy, setIsBusy] = useState(false);
    const nativeAvailable = useSyncExternalStore(
        subscribeToNativeShareSupport,
        getNativeShareSupport,
        noNativeShareOnServer,
    );
    const [status, setStatus] = useState<SiteShareStatus>("idle");

    useEffect(() => {
        mountedRef.current = true;
        return () => {
            mountedRef.current = false;
        };
    }, []);

    const complete = useCallback(
        (result: SiteShareResult) => {
            busyRef.current = false;
            if (!mountedRef.current) return;
            setIsBusy(false);
            setStatus(result === "copied" || result === "error" ? result : "idle");
        },
        [setIsBusy, setStatus],
    );

    const { title, url } = data;
    const handleShare = useCallback(
        (selection: ShareSelection) => {
            if (busyRef.current) return false;
            setStatus("idle");
            if (selection !== SHARE_ACTIONS.native && selection !== SHARE_ACTIONS.copy) return true;
            busyRef.current = true;
            setIsBusy(true);
            // Invoke the browser API in this click's activation, before any await.
            const request =
                selection === SHARE_ACTIONS.native ? shareWithDevice({ title, url }) : copySiteLink(url);
            void request.then(complete);
            return true;
        },
        [complete, setIsBusy, setStatus, title, url],
    );

    return (
        <section
            aria-busy={isBusy}
            aria-labelledby={headingId}
            className={bottomInsetConsumed ? "site-share site-share--bottom-consumed" : "site-share"}
        >
            <div className="site-share-inner">
                <h2 className="site-share-heading" id={headingId}>
                    {copy.heading}
                </h2>
                <div className="site-share-controls">
                    <SiteShareRoller
                        copyLabel={copy.copyLink}
                        data={data}
                        disabled={isBusy}
                        label={copy.selectLabel}
                        nativeAvailable={nativeAvailable}
                        nativeLabel={copy.nativeShare}
                        onActivate={handleShare}
                    />
                </div>
                <output aria-live="polite" className="site-share-status">
                    {status === "copied" ? copy.copied : status === "error" ? copy.error : ""}
                </output>
                {status === "error" && (
                    <div className="site-share-fallback">
                        <label htmlFor={fallbackId}>{copy.manualCopy}</label>
                        <input
                            className="site-share-url"
                            id={fallbackId}
                            onFocus={handleManualFocus}
                            readOnly
                            type="url"
                            value={data.url}
                        />
                    </div>
                )}
            </div>
        </section>
    );
}
