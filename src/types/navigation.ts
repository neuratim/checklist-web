import type { Dictionary } from "./dictionary";

/** The keys of `dictionary.nav`, each the label of one link. */
export type NavLabelKey = keyof Dictionary["nav"];

export interface NavLink {
    /** The key into `dictionary.nav` that names the link. */
    labelKey: NavLabelKey;
    href: string;
}

/** A link with its label already looked up in the current language. */
export interface ResolvedNavLink {
    href: string;
    label: string;
}

/** How the brand may be drawn in the bar, widest first. */
export type BrandStage = "full" | "icon" | "short";
