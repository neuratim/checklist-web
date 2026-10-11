import type { BrandStage } from "../types/navigation";

/** Fraction of an element that must be visible before `Reveal` shows it. */
export const REVEAL_THRESHOLD = 0.15;

export const REDUCED_MOTION_QUERY = "(prefers-reduced-motion: reduce)";

/** Where, as a fraction of the viewport height, a section counts as having been reached. */
export const ACTIVE_SECTION_MARKER_RATIO = 0.2;

/**
 * How the brand may be drawn, widest first. It gives way in steps rather than to an
 * ellipsis: the full name, then the product name on its own, then the mark alone.
 */
export const BRAND_STAGES: readonly BrandStage[] = ["full", "short", "icon"];

/** A few pixels of slack absorb sub-pixel rounding so nothing ever paints half-clipped. */
export const NAV_FIT_SLACK_PX = 4;

/** 64px so it is still crisp at 2x; the 1024px master is store/PWA artwork. */
export const APP_ICON_SMALL_SRC = "/app-icon-64.png";
export const NAV_BRAND_ICON_SIZE = 28;

export const NAV_OVERFLOW_GLYPH = "⋯";
export const NAV_MORE_MENU_ID = "nav-more-menu";
export const NAV_HAMBURGER_MENU_ID = "nav-hamburger-menu";

export const LANGUAGE_MENU_ID = "language-switcher-menu";
export const LANGUAGE_OPTION_SELECTOR = "[role='menuitemradio']";

export const LANGUAGE_ICON_PROPS = {
    "aria-hidden": true,
    fill: "none",
    stroke: "currentColor",
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    strokeWidth: 1.6,
    viewBox: "0 0 12 12",
};
