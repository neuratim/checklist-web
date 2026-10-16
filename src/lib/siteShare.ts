import { SHARE_ENDPOINTS, SHARE_IMAGE_URL, SITE_URL } from "../../site.config";
import { SHARE_ACTIONS, SHARE_SERVICES } from "../constants/siteShare";
import type { ShareSelection, SiteShareData, SiteShareResult } from "../types/siteShare";
import { localizedPath } from "./seoLanguage";

/** Always share the public language homepage, including from a local preview. */
export function getSiteShareData(language: string, title: string): SiteShareData {
    const url = new URL(localizedPath("/", language), SITE_URL);
    url.hash = "";
    url.search = "";
    return { title, url: url.href };
}

export function isShareSelection(value: string): value is ShareSelection {
    return (
        value === SHARE_ACTIONS.copy ||
        value === SHARE_ACTIONS.native ||
        SHARE_SERVICES.some((service) => service.id === value)
    );
}

/** Plain composer links do not load any service until the visitor follows one. */
export function getShareHref(selection: ShareSelection, data: SiteShareData): string | null {
    if (selection === SHARE_ACTIONS.copy || selection === SHARE_ACTIONS.native) return null;
    const target = new URL(SHARE_ENDPOINTS[selection]);
    const text = `${data.title}\n${data.url}`;
    let params: Record<string, string>;
    switch (selection) {
        case "bluesky":
        case "whatsapp":
            params = { text };
            break;
        case "facebook":
            params = { u: data.url };
            break;
        case "hackerNews":
            params = { t: data.title, u: data.url };
            break;
        case "flipboard":
            params = { title: data.title, url: data.url, v: "2" };
            break;
        case "hatena":
        case "linkedin":
        case "xing":
            params = { url: data.url };
            break;
        case "mastodon":
            target.hash = new URLSearchParams({ text }).toString();
            return target.href;
        case "pinterest":
            params = { description: data.title, media: SHARE_IMAGE_URL, url: data.url };
            break;
        case "reddit":
            params = { title: data.title, type: "LINK", url: data.url };
            break;
        case "threads":
            params = { text: data.title, url: data.url };
            break;
        case "tumblr":
            params = { canonicalUrl: data.url, content: data.url, posttype: "link", title: data.title };
            break;
        case "line":
        case "telegram":
        case "x":
            params = { text: data.title, url: data.url };
            break;
        case "odnoklassniki":
        case "qq":
        case "qzone":
        case "vk":
        case "weibo":
            params = { title: data.title, url: data.url };
            break;
    }
    target.search = new URLSearchParams(params).toString();
    return target.href;
}

export function getNativeShareSupport(): boolean {
    return canShareWithDevice({ title: "", url: SITE_URL });
}

export function noNativeShareOnServer(): boolean {
    return false;
}

/** Browser capability is static for a page lifetime; hydration performs the initial read. */
export function subscribeToNativeShareSupport(): () => void {
    return () => {};
}

export function canShareWithDevice(data: SiteShareData): boolean {
    if (typeof navigator === "undefined" || typeof navigator.share !== "function") return false;
    try {
        return typeof navigator.canShare !== "function" || navigator.canShare(data);
    } catch {
        return false;
    }
}

export async function shareWithDevice(data: SiteShareData): Promise<SiteShareResult> {
    try {
        if (!canShareWithDevice(data)) return "error";
        await navigator.share(data);
        return "shared";
    } catch (error) {
        return typeof error === "object" && error !== null && "name" in error && error.name === "AbortError"
            ? "cancelled"
            : "error";
    }
}

export async function copySiteLink(url: string): Promise<SiteShareResult> {
    try {
        if (typeof navigator === "undefined" || typeof navigator.clipboard?.writeText !== "function") {
            return "error";
        }
        await navigator.clipboard.writeText(url);
        return "copied";
    } catch {
        return "error";
    }
}
