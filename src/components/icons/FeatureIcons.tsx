import type { ReactNode } from "react";

const ICON_PROPS = {
    fill: "none" as const,
    height: 26,
    stroke: "currentColor",
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    strokeWidth: 1.7,
    viewBox: "0 0 24 24",
    width: 26,
};

/** One icon per feature, in the order `dictionary.features.items` lists them. */
export const FEATURE_ICONS: readonly ReactNode[] = [
    <svg {...ICON_PROPS} key="templates">
        <rect x="3" y="3" width="7" height="7" rx="1.5" />
        <rect x="14" y="3" width="7" height="7" rx="1.5" />
        <rect x="3" y="14" width="7" height="7" rx="1.5" />
        <rect x="14" y="14" width="7" height="7" rx="1.5" />
    </svg>,
    <svg {...ICON_PROPS} key="history">
        <circle cx="12" cy="12" r="9" />
        <path d="M12 7v5l3.5 2" />
    </svg>,
    <svg {...ICON_PROPS} key="reminders">
        <circle cx="12" cy="13" r="8" />
        <path d="M12 9v4l3 2" />
        <path d="M5 3 3 5M19 3l2 2" />
    </svg>,
    <svg {...ICON_PROPS} key="offline">
        <path d="M3 15a9 9 0 0 1 18 0" />
        <path d="M8 15a4 4 0 0 1 8 0" />
        <circle cx="12" cy="19" r="1.4" fill="currentColor" stroke="none" />
        <path d="m4 4 16 16" />
    </svg>,
    <svg {...ICON_PROPS} key="search">
        <circle cx="11" cy="11" r="7" />
        <path d="m21 21-4.3-4.3" />
    </svg>,
    <svg {...ICON_PROPS} key="platforms">
        <rect x="4" y="2" width="16" height="20" rx="3" />
        <path d="M9 18h6" />
    </svg>,
    <svg {...ICON_PROPS} key="conditional">
        <path d="m3 6 2 2 3.5-3.5" />
        <path d="M12 6h9" />
        <path d="M5 11v5a2 2 0 0 0 2 2h5" />
        <path d="m9.5 15.5 2.5 2.5-2.5 2.5" />
        <path d="M16 18h5" />
    </svg>,
    <svg {...ICON_PROPS} key="detail">
        <rect x="3" y="5" width="18" height="14" rx="2.5" />
        <circle cx="8.5" cy="10" r="1.6" />
        <path d="m4 17 4.5-4.5L12 16l3-3 6 5" />
    </svg>,
    <svg {...ICON_PROPS} key="long-lists">
        <path d="M4 7h10M4 12h7M4 17h4" />
        <path d="m15.5 15.5 5 5M20.5 15.5l-5 5" />
    </svg>,
    <svg {...ICON_PROPS} key="bulk">
        <rect x="3" y="3" width="12" height="12" rx="2" />
        <path d="M9 21h10a2 2 0 0 0 2-2V9" />
        <path d="m6 8 2 2 3.5-3.5" />
    </svg>,
    <svg {...ICON_PROPS} key="progress">
        <rect x="6" y="2" width="12" height="20" rx="3" />
        <path d="M9 6h6" />
        <path d="M9 12h6M9 16h3" />
    </svg>,
    <svg {...ICON_PROPS} key="share">
        <circle cx="18" cy="5" r="2.5" />
        <circle cx="6" cy="12" r="2.5" />
        <circle cx="18" cy="19" r="2.5" />
        <path d="m8.3 10.8 7.4-4.3M8.3 13.2l7.4 4.3" />
    </svg>,
    <svg {...ICON_PROPS} key="backups">
        <rect x="3" y="10" width="18" height="11" rx="2.5" />
        <path d="M7.5 10V7a4.5 4.5 0 0 1 9 0v3" />
        <path d="M12 14v3" />
    </svg>,
    <svg {...ICON_PROPS} key="app-lock">
        <path d="M12 3 4 6v6c0 4.5 3.2 7.6 8 9 4.8-1.4 8-4.5 8-9V6Z" />
        <circle cx="12" cy="11" r="2" />
        <path d="M12 13v3" />
    </svg>,
    <svg {...ICON_PROPS} key="history-retention">
        <path d="M3 12a9 9 0 1 0 3-6.7L3 8" />
        <path d="M3 4v4h4" />
        <path d="M12 8v4.5l3 1.8" />
    </svg>,
];
