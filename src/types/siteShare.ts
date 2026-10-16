export interface SiteShareCopy {
    copied: string;
    copyLink: string;
    error: string;
    heading: string;
    manualCopy: string;
    nativeShare: string;
    selectLabel: string;
    share: string;
}

export interface SiteShareProps {
    bottomInsetConsumed?: boolean;
}

export interface SiteShareData {
    title: string;
    url: string;
}

export type ShareServiceId =
    | "bluesky"
    | "facebook"
    | "flipboard"
    | "hackerNews"
    | "hatena"
    | "line"
    | "linkedin"
    | "mastodon"
    | "odnoklassniki"
    | "pinterest"
    | "qq"
    | "qzone"
    | "reddit"
    | "telegram"
    | "threads"
    | "tumblr"
    | "vk"
    | "weibo"
    | "whatsapp"
    | "x"
    | "xing";

export type ShareSelection = ShareServiceId | "copy" | "native";

export interface ShareService {
    id: ShareServiceId;
    label: string;
}

export type SiteShareResult = "cancelled" | "copied" | "error" | "shared";
export type SiteShareStatus = "copied" | "error" | "idle";
