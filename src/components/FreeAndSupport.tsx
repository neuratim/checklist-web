import { lazy, Suspense } from "react";
import { CONTACT_MAILTO_URL, STRIPE_PUBLISHABLE_KEY } from "../../site.config";
import { SECTION_IDS } from "../constants/routes";
import { TIP_LINKS } from "../constants/tip";
import { useScrollReveal } from "../hooks/useScrollReveal";
import { useLanguage } from "../i18n/useLanguage";
import { Reveal } from "./Reveal";
import type { ResolvedTipLink } from "../types/tip";
import "./FreeAndSupport.css";

// Stripe's SDK is only needed by the small minority of visitors who open the tip
// checkout, so it's code-split out of the main bundle and only fetched once this
// section scrolls into view instead of on every page load.
const TipCheckout = lazy(() => import("./TipCheckout"));

function TipCheckoutFallback() {
    const { dictionary } = useLanguage();

    return (
        <div className="tip-checkout card">
            <h3 className="tip-checkout-heading">{dictionary.freeSupport.quickTip.heading}</h3>
        </div>
    );
}

// Hoisted so the Suspense boundary receives a referentially stable element
// instead of a fresh one on every render of FreeAndSupport.
const TIP_CHECKOUT_FALLBACK = <TipCheckoutFallback />;

export function FreeAndSupport() {
    const { dictionary } = useLanguage();
    const { freeSupport } = dictionary;
    const { isVisible: isTipCheckoutVisible, ref: tipCheckoutRef } = useScrollReveal<HTMLDivElement>();

    const availableTipLinks: readonly ResolvedTipLink[] = TIP_LINKS.flatMap((link) =>
        link.href
            ? [
                  {
                      href: link.href,
                      name: link.name,
                      note: link.noteKey ? freeSupport[link.noteKey] : undefined,
                  },
              ]
            : [],
    );

    return (
        <section className="section section-elevated" id={SECTION_IDS.free}>
            <div className="container">
                <Reveal>
                    <p className="eyebrow">{freeSupport.eyebrow}</p>
                    <h2 className="section-heading">{freeSupport.heading}</h2>
                    <p className="section-intro">{freeSupport.intro}</p>
                </Reveal>

                <Reveal className="not-here-row">
                    {freeSupport.notHere.map((item) => (
                        <span className="badge not-here-badge" key={item}>
                            {item}
                        </span>
                    ))}
                </Reveal>

                <Reveal className="support-note">
                    <p>{freeSupport.supportBody}</p>

                    {/* The arithmetic behind the ask, set apart from the prose above it so a
                        visitor who only skims still meets it. A bordered aside rather than a
                        .card: it does not lift on hover, because it is the sentence the
                        checkout answers. On a wide screen the two sit side by side, the
                        pledge beside "Leave a tip"; on a narrow one it stacks above it. */}
                    <div className="support-pair" data-with-tip={STRIPE_PUBLISHABLE_KEY ? "" : undefined}>
                        <aside className="support-pledge">
                            <span aria-hidden="true" className="support-pledge-icon">
                                <svg
                                    fill="none"
                                    height="22"
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="1.6"
                                    viewBox="0 0 24 24"
                                    width="22"
                                >
                                    <path d="M12 20s-7-4.35-7-9.5A3.5 3.5 0 0 1 12 8a3.5 3.5 0 0 1 7 2.5c0 5.15-7 9.5-7 9.5Z" />
                                </svg>
                            </span>
                            <div className="support-pledge-text">
                                <h3 className="support-pledge-heading">{freeSupport.pledge.heading}</h3>
                                <p className="support-pledge-body">{freeSupport.pledge.body}</p>
                            </div>
                        </aside>
                        {STRIPE_PUBLISHABLE_KEY && (
                            <div ref={tipCheckoutRef}>
                                {isTipCheckoutVisible && (
                                    <Suspense fallback={TIP_CHECKOUT_FALLBACK}>
                                        <TipCheckout publishableKey={STRIPE_PUBLISHABLE_KEY} />
                                    </Suspense>
                                )}
                            </div>
                        )}
                    </div>

                    {availableTipLinks.length > 0 && (
                        <div className="free-tip-links">
                            <p className="free-tip-links-label">{freeSupport.waysToTip}</p>
                            <div className="free-tip-links-row">
                                {availableTipLinks.map((link) => (
                                    <div className="free-tip-link-item" key={link.name}>
                                        <a
                                            className="btn btn-ghost"
                                            href={link.href}
                                            rel="noreferrer"
                                            target="_blank"
                                        >
                                            {link.name}
                                        </a>
                                        {link.note && <span className="free-tip-link-note">{link.note}</span>}
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}

                    <p className="free-tip-email">
                        {freeSupport.tipEmailLead}{" "}
                        <a
                            href={`${CONTACT_MAILTO_URL}?subject=${encodeURIComponent(freeSupport.tipEmailSubject)}`}
                        >
                            {freeSupport.tipCta}
                        </a>
                    </p>
                </Reveal>
            </div>
        </section>
    );
}
