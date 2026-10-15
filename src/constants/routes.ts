/** Dedicated static pages; legacy hash links remain supported. */
export const PAGE_PATHS = { home: "/", privacyPolicy: "/privacy-policy/" } as const;

/** The element ids of the page sections. Anything that links to a section reads them from here. */
export const SECTION_IDS = {
    conditionalItems: "conditional-items",
    features: "features",
    free: "free",
    getApp: "get-app",
    howItWorks: "how-it-works",
    insights: "insights",
    privacy: "privacy",
    quickStart: "quick-start",
    security: "security",
    top: "top",
} as const;

/** Routes that replace the page rather than scroll to a section of it. */
export const ROUTE_IDS = {
    privacyPolicy: "privacy-policy",
    tryApp: "try",
} as const;

export const SECTION_HREFS = {
    features: `#${SECTION_IDS.features}`,
    free: `#${SECTION_IDS.free}`,
    getApp: `#${SECTION_IDS.getApp}`,
    howItWorks: `#${SECTION_IDS.howItWorks}`,
    privacy: `#${SECTION_IDS.privacy}`,
    security: `#${SECTION_IDS.security}`,
    top: `#${SECTION_IDS.top}`,
} as const;

export const ROUTE_HREFS = {
    privacyPolicy: `#${ROUTE_IDS.privacyPolicy}`,
    tryApp: `#${ROUTE_IDS.tryApp}`,
} as const;
