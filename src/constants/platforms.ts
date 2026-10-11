import type { PlatformConfig } from "../types/platform";

/** The cards on the "get the app" section, in the order they are shown. */
export const PLATFORMS: readonly PlatformConfig[] = [
    { iconClassName: "platform-icon-web", id: "web", name: "Web" },
    { iconClassName: "platform-icon-android", id: "android", name: "Android" },
    { iconClassName: "platform-icon-ios", id: "ios", name: "iOS" },
];
