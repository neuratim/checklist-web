import type { StripeElementsOptions } from "@stripe/stripe-js";
import { GITHUB_SPONSORS_URL, KOFI_URL, PAYPAL_URL } from "../../site.config";
import type { TipLink, TipMode, TipPresets } from "../types/tip";

// A one-off tip and a standing order are different decisions, so they get different
// ladders: a monthly donor is choosing what to give every month from now on, and the
// section's whole argument is that one currency unit of it is already enough.
export const TIP_PRESETS: Record<TipMode, TipPresets> = {
    monthly: [1, 3, 5, 10],
    oneOff: [1, 5, 10, 25],
};

export const DEFAULT_TIP_MODE: TipMode = "oneOff";

// In whichever currency the language declares — both have 100 minor units to the major
// one, so one pair of bounds covers them. Keep in sync with worker/index.ts.
export const TIP_MIN_AMOUNT = 1;
export const TIP_MAX_AMOUNT = 500;
export const MINOR_UNITS_PER_MAJOR = 100;

export const TIP_ENDPOINTS: Record<TipMode, string> = {
    monthly: "/create-subscription",
    oneOff: "/create-payment-intent",
};

// Deliberately permissive, and only ever a first pass: Stripe validates the address it is
// actually given, and this is here so a plain typo is caught without a round trip.
export const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

export const ELEMENTS_APPEARANCE: StripeElementsOptions["appearance"] = {
    theme: "night",
    variables: {
        borderRadius: "10px",
        colorBackground: "#12121c",
        colorDanger: "#f87171",
        colorPrimary: "#3aa8ff",
        colorText: "#f2f3f7",
        fontFamily:
            "-apple-system, BlinkMacSystemFont, 'Segoe UI', Inter, Roboto, 'Helvetica Neue', Arial, sans-serif",
    },
};

/** The "other ways to give" links. An unset address drops the link from the page. */
export const TIP_LINKS: readonly TipLink[] = [
    { href: KOFI_URL, name: "Ko-fi" },
    { href: PAYPAL_URL, name: "PayPal" },
    { href: GITHUB_SPONSORS_URL, name: "GitHub Sponsors", noteKey: "githubSponsorsNote" },
];
