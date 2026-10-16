import type { ShareSelection, ShareService } from "../types/siteShare";

export const DEFAULT_SHARE_SELECTION: ShareSelection = "facebook";

export const SHARE_ACTIONS = {
    copy: "copy",
    native: "native",
} as const;

/** Proper service names remain the same in every translated picker. */
export const SHARE_SERVICES: readonly ShareService[] = [
    { id: "bluesky", label: "Bluesky" },
    { id: "facebook", label: "Facebook" },
    { id: "flipboard", label: "Flipboard" },
    { id: "hackerNews", label: "Hacker News" },
    { id: "hatena", label: "Hatena Bookmark" },
    { id: "line", label: "LINE" },
    { id: "linkedin", label: "LinkedIn" },
    { id: "mastodon", label: "Mastodon" },
    { id: "odnoklassniki", label: "Odnoklassniki" },
    { id: "pinterest", label: "Pinterest" },
    { id: "qq", label: "QQ" },
    { id: "qzone", label: "Qzone" },
    { id: "reddit", label: "Reddit" },
    { id: "telegram", label: "Telegram" },
    { id: "threads", label: "Threads" },
    { id: "tumblr", label: "Tumblr" },
    { id: "vk", label: "VK" },
    { id: "weibo", label: "Weibo" },
    { id: "whatsapp", label: "WhatsApp" },
    { id: "x", label: "X" },
    { id: "xing", label: "XING" },
];
