import { useEffect } from "react";
import { CONTACT_EMAIL, CONTACT_MAILTO_URL } from "../../site.config";
import { SECTION_HREFS } from "../constants/routes";
import { useLanguage } from "../i18n/useLanguage";
import "./PrivacyPolicy.css";

/**
 * The full legal privacy policy, on its own route rather than in the landing
 * page's scroll flow — it is reached from the nav, the footer, and the
 * Privacy section, and its address is what gets pasted into the Play Console
 * and App Store Connect. The marketing-facing `Privacy` section summarises
 * the same facts; this is the version that has to be complete.
 */
export function PrivacyPolicy() {
    const { dictionary } = useLanguage();
    const { privacyPolicy } = dictionary;

    useEffect(() => {
        // Hash navigation keeps the previous scroll position, so arriving
        // from the footer link would otherwise drop you into the middle of
        // the document. Give the page its own title too, since that is what
        // shows in a tab or a bookmark when the link is shared for review.
        window.scrollTo(0, 0);
        const previousTitle = document.title;
        document.title = `${privacyPolicy.title} — ${privacyPolicy.eyebrow}`;
        return () => {
            document.title = previousTitle;
        };
    }, [privacyPolicy.eyebrow, privacyPolicy.title]);

    return (
        <div className="policy">
            <a className="policy-back" href={SECTION_HREFS.top}>
                {privacyPolicy.back}
            </a>

            <article className="policy-body">
                <header className="policy-header">
                    <p className="eyebrow">{privacyPolicy.eyebrow}</p>
                    <h1 className="policy-title">{privacyPolicy.title}</h1>
                    <p className="policy-updated">{privacyPolicy.lastUpdated}</p>
                    <p className="policy-intro">{privacyPolicy.intro}</p>
                </header>

                {privacyPolicy.sections.map((section) => (
                    <section className="policy-section" key={section.heading}>
                        <h2 className="policy-heading">{section.heading}</h2>
                        {section.paragraphs.map((paragraph) => (
                            <p className="policy-paragraph" key={paragraph}>
                                {paragraph}
                            </p>
                        ))}
                        {section.points && (
                            <ul className="policy-list">
                                {section.points.map((point) => (
                                    <li key={point}>{point}</li>
                                ))}
                            </ul>
                        )}
                    </section>
                ))}

                <section className="policy-section" id="policy-contact">
                    <h2 className="policy-heading">{privacyPolicy.contactHeading}</h2>
                    <p className="policy-paragraph">{privacyPolicy.contactIntro}</p>
                    <p className="policy-contact">
                        <a href={CONTACT_MAILTO_URL}>{CONTACT_EMAIL}</a>
                    </p>
                </section>
            </article>
        </div>
    );
}
