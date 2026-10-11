/**
 * Every external address and every `import.meta.env` read of the site, and nothing else. This file
 * imports nothing from `src/`, so any module may import it without risking a cycle.
 *
 * A link written anywhere else is a bug: components and constants name one of these.
 */

// ── Site ────────────────────────────────────────────────────────────────────────────────────────
export const CONTACT_EMAIL = import.meta.env.VITE_CONTACT_EMAIL;
export const CONTACT_MAILTO_URL = `mailto:${CONTACT_EMAIL}`;

// Trim trailing slash so callers can safely do `${SITE_URL}/path`.
export const SITE_URL = import.meta.env.VITE_SITE_URL.replace(/\/$/, "");

// The NeuraTiM site every product page hangs off. The footer links here.
export const NEURATIM_URL = "https://neuratim.com";

// ── Store links ─────────────────────────────────────────────────────────────────────────────────
// One block per platform, always in this order: android, web, ios, mac, windows. Android and iOS
// are always present. Web is present when the product has a hosted build. Mac and Windows come
// together and are optional — Checklist ships on neither, so they are absent rather than empty.

/** Where a reader asks to be put on the closed-test list — `packages/web-testers`. */
export const ANDROID_TESTERS_URL = "https://testers.neuratim.com/#apps";

/**
 * Google Play's opt-in page for the closed test. A tester who is on the list accepts the
 * invitation there and installs from Play afterwards; the store's public listing answers
 * "item not found" until they have.
 */
export const ANDROID_URL = "https://play.google.com/apps/testing/com.neuratim.checklist";

/** The hosted build, embedded by the Try It route. Never handed to a visitor as a bare link. */
export const WEB_URL = import.meta.env.VITE_APP_URL.replace(/\/$/, "");

export const IOS_URL = "https://apps.apple.com/app/neuratim-checklist/id6804685042";

// ── Support ─────────────────────────────────────────────────────────────────────────────────────
// Optional tip links — unset until the corresponding account exists. See ../../web/PAYMENTS.md.
export const GITHUB_SPONSORS_URL = import.meta.env.VITE_GITHUB_SPONSORS_URL;
export const KOFI_URL = import.meta.env.VITE_KOFI_URL;
export const PAYPAL_URL = import.meta.env.VITE_PAYPAL_URL;

// Enables the in-page "quick tip" card/Apple Pay/Google Pay widget when set. The
// PaymentIntent is created by the hub's Worker at STRIPE_API_BASE_URL, called
// cross-origin — see ../../web/AI_TEMPLATE_GUIDE.md §5.
export const STRIPE_PUBLISHABLE_KEY = import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY;
export const STRIPE_API_BASE_URL = import.meta.env.VITE_STRIPE_API_BASE_URL.replace(/\/$/, "");
