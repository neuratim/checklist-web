import type { PropsWithChildren } from "react";
import type { FeatureItem } from "./dictionary";

export interface RevealProps extends PropsWithChildren {
    className?: string;
    delayMs?: number;
}

export type PhoneFrameProps = PropsWithChildren;

export interface NativeAppScreenProps {
    priority?: boolean;
    view:
        | "01-packing-progress"
        | "02-reusable-templates"
        | "03-daily-weekly-reminders"
        | "06-progress-and-history"
        | "07-condition-editor"
        | "08-statistics"
        | "09-backup"
        | "10-start-checklist";
}

export interface ShowcaseProps extends PropsWithChildren {
    eyebrow: string;
    heading: string;
    id: string;
    intro: string;
    /** A closing line under the points, for a caveat the points shouldn't carry. */
    note?: string;
    points: readonly FeatureItem[];
    /** Puts the phone on the trailing side instead of the leading one. */
    reversed?: boolean;
    /** Sits the section on the elevated background, as `.section-elevated` does. */
    elevated?: boolean;
}
