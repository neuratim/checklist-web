import {
    useCallback,
    useEffect,
    useId,
    useRef,
    useState,
    useSyncExternalStore,
    type ChangeEvent,
    type FocusEvent,
} from "react";
import { DEFAULT_SHARE_SELECTION, SHARE_ACTIONS, SHARE_SERVICES } from "../constants/siteShare";
import { useLanguage } from "../i18n/useLanguage";
import {
    copySiteLink,
    getNativeShareSupport,
    getShareHref,
    getSiteShareData,
    isShareSelection,
    noNativeShareOnServer,
    shareWithDevice,
    subscribeToNativeShareSupport,
} from "../lib/siteShare";
import type {
    ShareSelection,
    SiteShareCopy,
    SiteShareProps,
    SiteShareResult,
    SiteShareStatus,
} from "../types/siteShare";
import "./SiteShare.css";

function handleManualFocus(event: FocusEvent<HTMLInputElement>) {
    event.currentTarget.select();
}

function selectionLabel(selected: ShareSelection, copy: SiteShareCopy): string {
    if (selected === SHARE_ACTIONS.copy) return copy.copyLink;
    if (selected === SHARE_ACTIONS.native) return copy.nativeShare;
    return SHARE_SERVICES.find((service) => service.id === selected)?.label ?? "";
}

function renderLabelSizer(copy: SiteShareCopy) {
    return (
        <span className="site-share-label-sizer">
            {SHARE_SERVICES.map((service) => (
                <span key={service.id}>{service.label}</span>
            ))}
            <span>{copy.nativeShare}</span>
            <span>{copy.copyLink}</span>
        </span>
    );
}

export function SiteShare({ bottomInsetConsumed = false }: SiteShareProps) {
    const { dictionary, language } = useLanguage();
    const copy = dictionary.siteShare;
    const data = getSiteShareData(language, "NeuraTiM Checklist");
    const headingId = useId();
    const pickerId = useId();
    const fallbackId = useId();
    const busyRef = useRef(false);
    const mountedRef = useRef(false);
    const [isBusy, setIsBusy] = useState(false);
    const nativeAvailable = useSyncExternalStore(
        subscribeToNativeShareSupport,
        getNativeShareSupport,
        noNativeShareOnServer,
    );
    const [selected, setSelected] = useState<ShareSelection>(DEFAULT_SHARE_SELECTION);
    const [status, setStatus] = useState<SiteShareStatus>("idle");
    const href = getShareHref(selected, data);

    useEffect(() => {
        mountedRef.current = true;
        return () => {
            mountedRef.current = false;
        };
    }, []);

    const handleSelection = useCallback(
        (event: ChangeEvent<HTMLSelectElement>) => {
            if (!isShareSelection(event.target.value)) return;
            setSelected(event.target.value);
            setStatus("idle");
        },
        [setSelected, setStatus],
    );

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
    const handleShare = useCallback(() => {
        if (busyRef.current) return;
        busyRef.current = true;
        setIsBusy(true);
        setStatus("idle");
        // Invoke the browser API in this click's activation, before any await.
        const request =
            selected === SHARE_ACTIONS.native ? shareWithDevice({ title, url }) : copySiteLink(url);
        void request.then(complete);
    }, [complete, selected, setIsBusy, setStatus, title, url]);

    return (
        <section
            aria-labelledby={headingId}
            className={bottomInsetConsumed ? "site-share site-share--bottom-consumed" : "site-share"}
        >
            <div className="site-share-inner">
                <h2 className="site-share-heading" id={headingId}>
                    {copy.heading}
                </h2>
                <label className="site-share-label" htmlFor={pickerId}>
                    {copy.selectLabel}
                </label>
                <div className="site-share-controls">
                    <div className="site-share-picker-wrap">
                        <select
                            className="site-share-picker"
                            disabled={isBusy}
                            id={pickerId}
                            onChange={handleSelection}
                            value={selected}
                        >
                            {SHARE_SERVICES.map((service) => (
                                <option key={service.id} value={service.id}>
                                    {service.label}
                                </option>
                            ))}
                            {nativeAvailable && (
                                <option value={SHARE_ACTIONS.native}>{copy.nativeShare}</option>
                            )}
                            <option value={SHARE_ACTIONS.copy}>{copy.copyLink}</option>
                        </select>
                        <span aria-hidden="true" className="site-share-picker-display">
                            <span className="site-share-selected-label">
                                {selectionLabel(selected, copy)}
                            </span>
                            {renderLabelSizer(copy)}
                        </span>
                    </div>
                    {href ? (
                        <a
                            className="site-share-action"
                            href={href}
                            rel="noopener noreferrer"
                            target="_blank"
                        >
                            {copy.share}
                        </a>
                    ) : (
                        <button
                            aria-busy={isBusy}
                            className="site-share-action"
                            disabled={isBusy}
                            onClick={handleShare}
                            type="button"
                        >
                            {copy.share}
                        </button>
                    )}
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
