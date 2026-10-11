import type { ReactNode } from "react";

export type PlatformId = "android" | "ios" | "web";

/** What a card on the "get the app" section is, before its copy and action are looked up. */
export interface PlatformConfig {
    readonly iconClassName: string;
    readonly id: PlatformId;
    /** A proper name, the same in every language. */
    readonly name: string;
}

export interface PlatformCard {
    /**
     * The card's own call to action: the Web app, Google Play's closed test,
     * or the iOS App Store listing — see components/PlatformAvailability.tsx.
     */
    readonly action: ReactNode;
    readonly detail: string;
    readonly icon: ReactNode;
    readonly iconClassName: string;
    readonly name: string;
}
