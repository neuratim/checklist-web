import {
    useCallback,
    useEffect,
    useLayoutEffect,
    useMemo,
    useRef,
    useState,
    type KeyboardEvent as ReactKeyboardEvent,
} from "react";
import { BRAND_NAME } from "../constants/brand";
import { NAV_LINKS } from "../constants/navigation";
import { PAGE_PATHS, ROUTE_HREFS, SECTION_HREFS, SECTION_IDS } from "../constants/routes";
import {
    APP_ICON_SMALL_SRC,
    NAV_BRAND_ICON_SIZE,
    NAV_HAMBURGER_MENU_ID,
    NAV_MORE_MENU_ID,
    NAV_OVERFLOW_GLYPH,
} from "../constants/ui";
import { useActiveSection } from "../hooks/useActiveSection";
import { useLanguage } from "../i18n/useLanguage";
import { localizedPageHref } from "../lib/pageLinks";
import { shortBrand } from "../lib/brand";
import { countFittingLinks, fittingBrandStage, navContentWidth } from "../lib/navFit";
import type { BrandStage, ResolvedNavLink } from "../types/navigation";
import { LanguageSwitcher } from "./LanguageSwitcher";
import "./Nav.css";

export function Nav() {
    const { dictionary, language } = useLanguage();
    const { nav } = dictionary;

    const brandFull = BRAND_NAME;
    const brandShort = shortBrand(brandFull);

    const navLinks = useMemo<ResolvedNavLink[]>(
        () =>
            NAV_LINKS.map((link) => ({
                href:
                    link.href === ROUTE_HREFS.privacyPolicy
                        ? localizedPageHref(PAGE_PATHS.privacyPolicy, language)
                        : link.href,
                label: nav[link.labelKey],
            })),
        [language, nav],
    );
    const activeSection = useActiveSection(navLinks.map((link) => link.href));

    const innerRef = useRef<HTMLDivElement>(null);
    const brandRef = useRef<HTMLAnchorElement>(null);
    const brandIconRef = useRef<HTMLImageElement>(null);
    const brandFullRef = useRef<HTMLSpanElement>(null);
    const brandShortRef = useRef<HTMLSpanElement>(null);
    const measureRef = useRef<HTMLDivElement>(null);
    const languageSlotRef = useRef<HTMLDivElement>(null);
    const moreMeasureRef = useRef<HTMLSpanElement>(null);
    const hamburgerMeasureRef = useRef<HTMLSpanElement>(null);
    const moreWrapRef = useRef<HTMLDivElement>(null);
    const hamburgerWrapRef = useRef<HTMLDivElement>(null);

    const [visibleCount, setVisibleCount] = useState(NAV_LINKS.length);
    const [brandStage, setBrandStage] = useState<BrandStage>("full");
    // What the last measurement decided, so `recompute` can tell a real layout
    // change from a re-measure that landed on the same answer.
    const lastCountRef = useRef(NAV_LINKS.length);
    const [isMoreOpen, setIsMoreOpen] = useState(false);
    const [isHamburgerOpen, setIsHamburgerOpen] = useState(false);

    const useHamburger = visibleCount === 0;
    const activeHref = activeSection === null ? null : `#${activeSection}`;
    const overflowLinks = useHamburger ? navLinks : navLinks.slice(visibleCount);
    const visibleLinks = useHamburger ? [] : navLinks.slice(0, visibleCount);
    const hasOverflow = !useHamburger && overflowLinks.length > 0;
    const overflowHasActiveSection = overflowLinks.some((link) => link.href === activeHref);

    const recompute = useCallback(() => {
        const inner = innerRef.current;
        const brand = brandRef.current;
        const brandIcon = brandIconRef.current;
        const brandFullMeasure = brandFullRef.current;
        const brandShortMeasure = brandShortRef.current;
        const measure = measureRef.current;
        const languageSlot = languageSlotRef.current;
        const moreButton = moreMeasureRef.current;
        const hamburgerButton = hamburgerMeasureRef.current;
        if (
            !inner ||
            !brand ||
            !brandIcon ||
            !brandFullMeasure ||
            !brandShortMeasure ||
            !measure ||
            !languageSlot ||
            !moreButton ||
            !hamburgerButton
        ) {
            return;
        }

        const end = languageSlot.parentElement;
        const innerStyle = getComputedStyle(inner);
        const endStyle = end ? getComputedStyle(end) : null;
        const rowGap = Number.parseFloat(innerStyle.columnGap || innerStyle.gap) || 0;
        const endGap = Number.parseFloat(endStyle?.columnGap || endStyle?.gap || "0") || 0;
        const measureStyle = getComputedStyle(measure);
        const linkGap = Number.parseFloat(measureStyle.columnGap || measureStyle.gap) || 0;

        const linkWidths = Array.from(
            measure.querySelectorAll<HTMLElement>("[data-nav-measure]"),
            (el) => el.getBoundingClientRect().width,
        );
        const moreWidth = moreButton.getBoundingClientRect().width;
        const hamburgerWidth = hamburgerButton.getBoundingClientRect().width;
        const languageWidth = languageSlot.getBoundingClientRect().width;

        // The row lays out inside the content box, so a container that pads its
        // own sides is padding nothing in here may use.
        const padding =
            (Number.parseFloat(innerStyle.paddingLeft) || 0) +
            (Number.parseFloat(innerStyle.paddingRight) || 0);

        const content = navContentWidth(inner.clientWidth, padding);

        // The language button never goes away, so the room left for the brand is
        // what it does not take. `reserved` is whatever else has to stand there:
        // nothing while the links still fit, the hamburger once they do not.
        const brandStyle = getComputedStyle(brand);
        const brandGap = Number.parseFloat(brandStyle.columnGap || brandStyle.gap) || 0;
        const iconWidth = brandIcon.getBoundingClientRect().width;
        const textWidth: Record<BrandStage, number> = {
            full: brandFullMeasure.getBoundingClientRect().width,
            icon: 0,
            short: brandShortMeasure.getBoundingClientRect().width,
        };
        const brandWidthFor = (stage: BrandStage): number =>
            iconWidth + (stage === "icon" ? 0 : brandGap + textWidth[stage]);
        const brandRoom = content - languageWidth - rowGap;
        const fittingStage = (reserved: number): BrandStage =>
            fittingBrandStage(brandWidthFor, reserved, brandRoom);

        // Brand first, links into what is left: the wordmark only shortens once
        // the language button is genuinely at its shoulder, which is later than
        // the links start folding into ⋯.
        let stage = fittingStage(0);
        const available = content - brandWidthFor(stage) - languageWidth - rowGap - endGap;
        const count = countFittingLinks(linkWidths, available, linkGap, moreWidth);
        if (count === 0) {
            // Hamburger mode: that button now stands beside the language one, so
            // it is the brand's room it takes. The count is deliberately not
            // recomputed against the narrower brand — a link reappearing would
            // widen the brand again, and the bar would flip between the two.
            stage = fittingStage(hamburgerWidth + endGap);
        }

        // A link that moves between the row and a menu leaves an open menu holding
        // entries it no longer owns, so the resize that moved it closes them. This
        // belongs to the measurement, not to a later effect watching the count.
        if (lastCountRef.current !== count) {
            lastCountRef.current = count;
            setIsMoreOpen(false);
            setIsHamburgerOpen(false);
        }

        setBrandStage(stage);
        setVisibleCount(count);
    }, []);

    useLayoutEffect(() => {
        recompute();
    }, [recompute]);

    /**
     * The fit is a function of measured widths, so widths are what is watched: the
     * row's own box plus every element the measurement reads. That one rule covers
     * a window resize, a locale swap relabelling the links, and a webfont landing —
     * each of them moves a width, and none of them has to be listed here.
     */
    useEffect(() => {
        const inner = innerRef.current;
        if (!inner) {
            return;
        }

        if (typeof ResizeObserver === "undefined") {
            window.addEventListener("resize", recompute);
            return () => window.removeEventListener("resize", recompute);
        }

        const observer = new ResizeObserver(() => recompute());
        const targets: readonly (HTMLElement | null)[] = [
            brandFullRef.current,
            brandIconRef.current,
            brandShortRef.current,
            hamburgerMeasureRef.current,
            inner,
            languageSlotRef.current,
            moreMeasureRef.current,
            ...(measureRef.current?.querySelectorAll<HTMLElement>("[data-nav-measure]") ?? []),
        ];

        for (const target of targets) {
            if (target) {
                observer.observe(target);
            }
        }

        return () => observer.disconnect();
    }, [recompute]);

    useEffect(() => {
        if (!isMoreOpen && !isHamburgerOpen) {
            return;
        }

        const handlePointerDown = (event: MouseEvent) => {
            const target = event.target as Node | null;
            if (!target) {
                return;
            }
            if (moreWrapRef.current?.contains(target)) {
                return;
            }
            if (hamburgerWrapRef.current?.contains(target)) {
                return;
            }
            setIsMoreOpen(false);
            setIsHamburgerOpen(false);
        };

        const handleKeyDown = (event: globalThis.KeyboardEvent) => {
            if (event.key === "Escape") {
                setIsMoreOpen(false);
                setIsHamburgerOpen(false);
            }
        };

        document.addEventListener("mousedown", handlePointerDown);
        document.addEventListener("keydown", handleKeyDown);
        return () => {
            document.removeEventListener("mousedown", handlePointerDown);
            document.removeEventListener("keydown", handleKeyDown);
        };
    }, [isHamburgerOpen, isMoreOpen]);

    const handleLinkClick = useCallback(() => {
        setIsMoreOpen(false);
        setIsHamburgerOpen(false);
    }, []);

    const handleToggleMore = useCallback(() => {
        setIsMoreOpen((open) => !open);
        setIsHamburgerOpen(false);
    }, []);

    const handleToggleHamburger = useCallback(() => {
        setIsHamburgerOpen((open) => !open);
        setIsMoreOpen(false);
    }, []);

    const handleMoreKeyDown = useCallback((event: ReactKeyboardEvent<HTMLButtonElement>) => {
        if (event.key === "ArrowDown") {
            event.preventDefault();
            setIsMoreOpen(true);
        }
    }, []);

    const handleMoreItemKeyDown = useCallback((event: ReactKeyboardEvent<HTMLAnchorElement>) => {
        if (event.key === "Escape") {
            event.preventDefault();
            setIsMoreOpen(false);
            moreWrapRef.current?.querySelector("button")?.focus();
        }
    }, []);

    return (
        <header className="nav" id={SECTION_IDS.top}>
            <div className="container nav-inner" ref={innerRef}>
                <a aria-label={brandFull} className="nav-brand" href={SECTION_HREFS.top} ref={brandRef}>
                    {/* 64px so it is still crisp at 2x; the 1024px master is
                        store/PWA artwork, three quarters of a megabyte, and has
                        no business in the page chrome. */}
                    <img
                        alt=""
                        className="nav-brand-icon"
                        height={NAV_BRAND_ICON_SIZE}
                        ref={brandIconRef}
                        src={APP_ICON_SMALL_SRC}
                        width={NAV_BRAND_ICON_SIZE}
                    />
                    {brandStage === "icon" ? null : (
                        <span>{brandStage === "full" ? brandFull : brandShort}</span>
                    )}
                </a>

                <div className="nav-end">
                    {!useHamburger ? (
                        <nav aria-label={nav.label} className="nav-inline">
                            {visibleLinks.map((link) => (
                                <a
                                    aria-current={link.href === activeHref ? "location" : undefined}
                                    href={link.href}
                                    key={link.href}
                                    onClick={handleLinkClick}
                                >
                                    {link.label}
                                </a>
                            ))}

                            {hasOverflow ? (
                                <div className="nav-more-wrap" ref={moreWrapRef}>
                                    <button
                                        aria-controls={NAV_MORE_MENU_ID}
                                        aria-expanded={isMoreOpen}
                                        aria-haspopup="menu"
                                        aria-label={nav.more}
                                        className="nav-more"
                                        data-has-current={overflowHasActiveSection || undefined}
                                        onClick={handleToggleMore}
                                        onKeyDown={handleMoreKeyDown}
                                        type="button"
                                    >
                                        <span aria-hidden="true">{NAV_OVERFLOW_GLYPH}</span>
                                    </button>
                                    {isMoreOpen ? (
                                        <div className="nav-more-menu" id={NAV_MORE_MENU_ID} role="menu">
                                            {overflowLinks.map((link) => (
                                                <a
                                                    aria-current={
                                                        link.href === activeHref ? "location" : undefined
                                                    }
                                                    href={link.href}
                                                    key={link.href}
                                                    onClick={handleLinkClick}
                                                    onKeyDown={handleMoreItemKeyDown}
                                                    role="menuitem"
                                                >
                                                    {link.label}
                                                </a>
                                            ))}
                                        </div>
                                    ) : null}
                                </div>
                            ) : null}
                        </nav>
                    ) : null}

                    <div className="nav-language" ref={languageSlotRef}>
                        <LanguageSwitcher />
                    </div>

                    {useHamburger ? (
                        <div className="nav-hamburger-wrap" ref={hamburgerWrapRef}>
                            <button
                                aria-controls={NAV_HAMBURGER_MENU_ID}
                                aria-expanded={isHamburgerOpen}
                                aria-label={isHamburgerOpen ? nav.closeMenu : nav.openMenu}
                                className="nav-toggle"
                                data-has-current={activeSection !== null || undefined}
                                onClick={handleToggleHamburger}
                                type="button"
                            >
                                <span />
                                <span />
                                <span />
                            </button>
                            <nav
                                aria-label={nav.label}
                                className={
                                    isHamburgerOpen
                                        ? "nav-hamburger-menu nav-hamburger-menu-open"
                                        : "nav-hamburger-menu"
                                }
                                id={NAV_HAMBURGER_MENU_ID}
                            >
                                {navLinks.map((link) => (
                                    <a
                                        aria-current={link.href === activeHref ? "location" : undefined}
                                        href={link.href}
                                        key={link.href}
                                        onClick={handleLinkClick}
                                    >
                                        {link.label}
                                    </a>
                                ))}
                            </nav>
                        </div>
                    ) : null}
                </div>

                {/* Off-screen strip whose widths drive the fit calculation. Same
                    type styles as the real controls so a locale change remeasures. */}
                <div aria-hidden="true" className="nav-measure" ref={measureRef}>
                    {navLinks.map((link) => (
                        <span data-nav-measure key={link.href}>
                            {link.label}
                        </span>
                    ))}
                    <span className="nav-more" ref={moreMeasureRef}>
                        <span>{NAV_OVERFLOW_GLYPH}</span>
                    </span>
                    <span className="nav-toggle" ref={hamburgerMeasureRef}>
                        <span />
                        <span />
                        <span />
                    </span>
                    {/* The wordmark at both its lengths, so the ladder is chosen
                        from type rather than from an estimate of it. */}
                    <span className="nav-brand">
                        <span ref={brandFullRef}>{brandFull}</span>
                        <span ref={brandShortRef}>{brandShort}</span>
                    </span>
                </div>
            </div>
        </header>
    );
}
