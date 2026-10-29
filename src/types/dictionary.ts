import type { SiteShareCopy } from "./siteShare";
import type { SiteShareRollerCopy } from "./siteShareRoller";

type DeepPartial<T> = T extends readonly (infer Element)[]
    ? readonly DeepPartial<Element>[]
    : T extends object
      ? { [Key in keyof T]?: DeepPartial<T[Key]> }
      : T;

/**
 * What a non-English locale file provides. Every key is optional: English is
 * the source of truth, and anything a translation has not caught up with yet
 * is filled in from it at load time (see `withEnglishFallback`). New copy is
 * therefore added to `en.ts` alone.
 */
export type LocaleDictionary = DeepPartial<Dictionary>;

export interface FeatureItem {
    title: string;
    body: string;
}

export interface Step {
    eyebrow: string;
    title: string;
    body: string;
}

export interface PlatformCopy {
    detail: string;
    cta: string;
}

export interface PolicySection {
    heading: string;
    paragraphs: readonly string[];
    points?: readonly string[];
}

export interface Dictionary {
    conditionalItems: {
        eyebrow: string;
        heading: string;
        intro: string;
        points: [FeatureItem, FeatureItem, FeatureItem];
    };
    features: {
        eyebrow: string;
        heading: string;
        /**
         * Append-only. Every non-English locale is overlaid onto this array
         * *by index* (see `mergeDictionary.ts`), so inserting or reordering an
         * entry would silently re-label seventeen translations.
         */
        items: [
            FeatureItem,
            FeatureItem,
            FeatureItem,
            FeatureItem,
            FeatureItem,
            FeatureItem,
            FeatureItem,
            FeatureItem,
            FeatureItem,
            FeatureItem,
            FeatureItem,
            FeatureItem,
            FeatureItem,
            FeatureItem,
            FeatureItem,
        ];
    };
    footer: {
        contact: string;
        mainSite: string;
        privacyPolicy: string;
        tagline: string;
    };
    freeSupport: {
        eyebrow: string;
        githubSponsorsNote: string;
        heading: string;
        intro: string;
        notHere: [string, string, string, string];
        /**
         * The bordered appeal beside the tip widget: what a single unit of currency a month,
         * from everyone, would actually buy.
         */
        pledge: {
            body: string;
            heading: string;
        };
        quickTip: {
            amountLabel: string;
            backButton: string;
            /** How to stop a monthly donation, shown on the monthly tab and after it succeeds. */
            cancelNote: string;
            customAmountLabel: string;
            /** The monthly tab needs an address for the receipt and for Stripe's customer. */
            emailLabel: string;
            errorAmount: string;
            errorEmail: string;
            errorGeneric: string;
            heading: string;
            monthlyPayButton: string;
            monthlySuccessBody: string;
            payButton: string;
            poweredBy: string;
            processingButton: string;
            successBody: string;
            successHeading: string;
            tabMonthly: string;
            tabOneOff: string;
        };
        supportBody: string;
        tipCta: string;
        tipEmailLead: string;
        /** Subject line of the "send a tip" email. */
        tipEmailSubject: string;
        waysToTip: string;
    };
    getApp: {
        eyebrow: string;
        heading: string;
        intro: string;
        platforms: { web: PlatformCopy; android: PlatformCopy; ios: PlatformCopy };
    };
    hero: {
        badges: [string, string, string, string];
        ctaPrimary: string;
        ctaSecondary: string;
        headingHighlight: string;
        headingLead: string;
        subhead: string;
    };
    howItWorks: {
        eyebrow: string;
        heading: string;
        intro: string;
        steps: [Step, Step, Step];
    };
    insights: {
        eyebrow: string;
        heading: string;
        intro: string;
        points: [FeatureItem, FeatureItem, FeatureItem];
    };
    languageSwitcher: {
        label: string;
    };
    nav: {
        closeMenu: string;
        features: string;
        free: string;
        getApp: string;
        howItWorks: string;
        /** Accessible name for the primary section nav. */
        label: string;
        /** Accessible name for the ⋯ overflow control. */
        more: string;
        openMenu: string;
        privacy: string;
        security: string;
        tryIt: string;
    };
    privacy: {
        badgeBody: string;
        badgeTitle: string;
        eyebrow: string;
        heading: string;
        intro: string;
        /** Append-only — see the note on `features.items`. */
        points: [string, string, string, string, string, string];
        policyLink: string;
    };
    privacyPolicy: {
        back: string;
        contactHeading: string;
        contactIntro: string;
        eyebrow: string;
        intro: string;
        lastUpdated: string;
        sections: readonly PolicySection[];
        title: string;
    };
    quickStart: {
        eyebrow: string;
        heading: string;
        intro: string;
        points: [FeatureItem, FeatureItem, FeatureItem, FeatureItem];
    };
    screens: {
        backup: {
            badgeBody: string;
            badgeNote: string;
            badgeTitle: string;
            exportEncrypted: string;
            exportPlain: string;
            intro: string;
            restore: string;
            title: string;
        };
        condition: {
            addRule: string;
            and: string;
            headerItem: string;
            intro: string;
            isChecked: string;
            isNotChecked: string;
            requiredWhen: string;
            ruleLaptop: string;
            ruleTrip: string;
            save: string;
            summary: string;
            title: string;
        };
        checklists: {
            finishedFriday: string;
            finishedTuesday: string;
            history: string;
            inProgress: string;
            startedToday: string;
            startSubtitle: string;
            startTitle: string;
        };
        common: {
            navChecklists: string;
            navSchedule: string;
            navTemplates: string;
            templateCarryOn: string;
            templateGrocery: string;
            templateHiking: string;
            templatePreFlight: string;
        };
        run: {
            conditional: string;
            doneHeading: string;
            essentials: string;
            filterAll: string;
            filterOptional: string;
            filterRemaining: string;
            finish: string;
            firstAidKit: string;
            headlamp: string;
            optional: string;
            rainCover: string;
            requiredLeftTwo: string;
            requiredNow: string;
            subtitle: string;
            tent: string;
            trailMap: string;
            trekkingPoles: string;
            waterBottle: string;
        };
        schedule: {
            doesNotRepeat: string;
            entry1Title: string;
            entry1When: string;
            entry2Title: string;
            entry2When: string;
            entry3Title: string;
            entry3When: string;
            finishReminderLabel: string;
            newReminder: string;
            repeatsWeekdays: string;
            repeatsWeekly: string;
            startReminderLabel: string;
        };
        start: {
            quickBody: string;
            quickTitle: string;
            title: string;
            writeBody: string;
            writeTitle: string;
        };
        stats: {
            finishedRuns: string;
            inProgress: string;
            itemsChecked: string;
            missedHeading: string;
            missedHelp: string;
            missedItem1: string;
            missedItem1Count: string;
            missedItem2: string;
            missedItem2Count: string;
            missedItem3: string;
            missedItem3Count: string;
            subtitle: string;
            templates: string;
            title: string;
        };
        templates: {
            allChip: string;
            carryOnSummary: string;
            grocerySummary: string;
            hikingSummary: string;
            newTemplate: string;
            preFlightSummary: string;
            tagHome: string;
            tagOutdoors: string;
            tagTravel: string;
        };
    };
    security: {
        eyebrow: string;
        heading: string;
        intro: string;
        note: string;
        points: [FeatureItem, FeatureItem, FeatureItem, FeatureItem];
    };
    siteShare: SiteShareCopy;
    siteShareRoller: SiteShareRollerCopy;
    tryApp: {
        back: string;
        dismissNotice: string;
        iframeTitle: string;
        intro: string;
        loading: string;
    };
}
