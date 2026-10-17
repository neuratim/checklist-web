import { useCallback, useId, type MouseEvent } from "react";
import { SHARE_ICON_BASE_PATH } from "../../site.config";
import { SHARE_ACTIONS, SHARE_SERVICES } from "../constants/siteShare";
import { SHARE_ROLLER_ICON_SIZE } from "../constants/siteShareRoller";
import { useSiteShareRoller } from "../hooks/useSiteShareRoller";
import { useLanguage } from "../i18n/useLanguage";
import { getShareHref, isShareSelection } from "../lib/siteShare";
import { orbitPlanet } from "../lib/siteShareOrbit";
import type { ShareSelection } from "../types/siteShare";
import type { SiteShareRollerProps } from "../types/siteShareRoller";
import "./SiteShareRoller.css";

function planetContent(id: ShareSelection, label: string, iconStyle: { transform: string }) {
    return (
        <>
            <span className="site-share-planet-icon" style={iconStyle}>
                <img
                    alt=""
                    draggable={false}
                    height={SHARE_ROLLER_ICON_SIZE}
                    src={`${SHARE_ICON_BASE_PATH}${id}.svg`}
                    width={SHARE_ROLLER_ICON_SIZE}
                />
            </span>
            <span className="site-share-planet-label">
                {[...label.matchAll(/\S+|\s+/gu)].map((word) =>
                    /^\s+$/u.test(word[0]) ? (
                        word[0]
                    ) : (
                        <span className="site-share-planet-word" key={`${word.index}-${word[0]}`}>
                            {word[0]}
                        </span>
                    ),
                )}
            </span>
        </>
    );
}

export function SiteShareRoller({
    copyLabel,
    data,
    disabled,
    label,
    nativeAvailable,
    nativeLabel,
    onActivate,
}: SiteShareRollerProps) {
    const { dictionary, language } = useLanguage();
    const hintId = useId();
    const options: { id: ShareSelection; label: string }[] = [
        ...SHARE_SERVICES,
        ...(nativeAvailable ? [{ id: SHARE_ACTIONS.native, label: nativeLabel }] : []),
        { id: SHARE_ACTIONS.copy, label: copyLabel },
    ];
    const {
        frontIndex,
        handleDragStart,
        handleKeyDown,
        handlePointerDown,
        handlePointerEnd,
        handlePointerMove,
        isDragging,
        metrics,
        offset,
        settled,
        shouldIgnoreClick,
        stageRef,
    } = useSiteShareRoller(options.length, disabled);
    const handleClick = useCallback(
        (event: MouseEvent<HTMLAnchorElement | HTMLButtonElement>) => {
            const id = event.currentTarget.dataset.service ?? "";
            if (disabled || (event.detail > 0 && shouldIgnoreClick()) || !isShareSelection(id)) {
                event.preventDefault();
                return;
            }
            if (!onActivate(id)) event.preventDefault();
        },
        [disabled, onActivate, shouldIgnoreClick],
    );

    return (
        <div className="site-share-roller-shell">
            <div
                aria-busy={disabled}
                aria-describedby={hintId}
                aria-label={label}
                className={isDragging ? "site-share-orbit site-share-orbit--dragging" : "site-share-orbit"}
                data-front-index={frontIndex}
                data-orbit-position={offset}
                data-orbit-settled={settled}
                onDragStart={handleDragStart}
                onKeyDown={handleKeyDown}
                onPointerCancel={handlePointerEnd}
                onPointerDown={handlePointerDown}
                onPointerMove={handlePointerMove}
                onPointerUp={handlePointerEnd}
                ref={stageRef}
                role="toolbar"
                aria-orientation="horizontal"
                tabIndex={-1}
            >
                {options.map((option, index) => {
                    const planet = orbitPlanet(
                        index,
                        offset,
                        options.length,
                        metrics,
                        String(language) === "ar",
                    );
                    const href = getShareHref(option.id, data);
                    const content = planetContent(option.id, option.label, planet.iconStyle);
                    const tabIndex = !disabled && index === frontIndex ? 0 : -1;
                    return href ? (
                        <a
                            aria-disabled={disabled || undefined}
                            aria-hidden={!planet.visible}
                            className="site-share-planet"
                            data-service={option.id}
                            draggable={false}
                            href={href}
                            key={option.id}
                            onClick={handleClick}
                            rel="noopener noreferrer"
                            style={planet.style}
                            tabIndex={tabIndex}
                            target="_blank"
                        >
                            {content}
                        </a>
                    ) : (
                        <button
                            aria-hidden={!planet.visible}
                            className="site-share-planet"
                            data-service={option.id}
                            disabled={disabled}
                            key={option.id}
                            onClick={handleClick}
                            style={planet.style}
                            tabIndex={tabIndex}
                            type="button"
                        >
                            {content}
                        </button>
                    );
                })}
            </div>
            <p className="site-share-orbit-hint" id={hintId}>
                {dictionary.siteShareRoller.hint}
            </p>
        </div>
    );
}
