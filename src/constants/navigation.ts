import type { NavLink } from "../types/navigation";
import { ROUTE_HREFS, SECTION_HREFS } from "./routes";

/** The nav's links, in the order it lists them. */
export const NAV_LINKS: readonly NavLink[] = [
    { href: SECTION_HREFS.howItWorks, labelKey: "howItWorks" },
    { href: SECTION_HREFS.features, labelKey: "features" },
    { href: SECTION_HREFS.security, labelKey: "security" },
    { href: SECTION_HREFS.privacy, labelKey: "privacy" },
    { href: SECTION_HREFS.free, labelKey: "free" },
    { href: SECTION_HREFS.getApp, labelKey: "getApp" },
    { href: ROUTE_HREFS.tryApp, labelKey: "tryIt" },
];
