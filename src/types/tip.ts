export interface TipCheckoutProps {
    readonly publishableKey: string;
}

/**
 * Which of the widget's two tabs is open. `oneOff` creates a PaymentIntent; `monthly`
 * creates a Stripe subscription whose first invoice is paid with the same Payment
 * Element, which is why both steps are shared between them.
 */
export type TipMode = "monthly" | "oneOff";

/** The first entry is the default selection, and a non-empty tuple says so to the compiler. */
export type TipPresets = readonly [number, ...number[]];

export type TipCheckoutStep =
    | { readonly kind: "amount" }
    | { readonly kind: "payment"; readonly amountCents: number; readonly clientSecret: string }
    | { readonly kind: "success" };

export interface CreatePaymentIntentResponse {
    readonly clientSecret?: string;
    readonly error?: string;
}

export interface PaymentFormProps {
    readonly amountLabel: string;
    readonly mode: TipMode;
    readonly onBack: () => void;
    readonly onSuccess: () => void;
}

/** A way to give besides the card form. An unset `href` drops the link from the page. */
export interface TipLink {
    readonly href: string | undefined;
    readonly name: string;
    /** Key into `dictionary.freeSupport` of the line shown under the link, if it has one. */
    readonly noteKey?: "githubSponsorsNote";
}

export interface ResolvedTipLink {
    readonly href: string;
    readonly name: string;
    readonly note?: string;
}
