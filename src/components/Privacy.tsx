import { PAGE_PATHS, SECTION_IDS } from "../constants/routes";
import { useLanguage } from "../i18n/useLanguage";
import { localizedPageHref } from "../lib/pageLinks";
import { Reveal } from "./Reveal";
import "./Privacy.css";

export function Privacy() {
    const { dictionary, language } = useLanguage();
    const { privacy } = dictionary;

    return (
        <section className="section" id={SECTION_IDS.privacy}>
            <div className="container privacy-inner">
                <Reveal className="privacy-copy">
                    <p className="eyebrow">{privacy.eyebrow}</p>
                    <h2 className="section-heading">{privacy.heading}</h2>
                    <p className="section-intro privacy-intro">{privacy.intro}</p>
                    <ul className="privacy-list">
                        {privacy.points.map((point) => (
                            <li key={point}>{point}</li>
                        ))}
                    </ul>
                    <a
                        className="privacy-policy-link"
                        href={localizedPageHref(PAGE_PATHS.privacyPolicy, language)}
                    >
                        {privacy.policyLink}
                    </a>
                </Reveal>

                <Reveal className="privacy-badge" delayMs={120}>
                    <div className="privacy-badge-inner">
                        <svg
                            fill="none"
                            height="52"
                            stroke="url(#privacy-grad)"
                            strokeWidth="1.6"
                            viewBox="0 0 24 24"
                            width="52"
                        >
                            <defs>
                                <linearGradient id="privacy-grad" x1="0" x2="24" y1="0" y2="24">
                                    <stop offset="0" stopColor="var(--brand-blue)" />
                                    <stop offset="1" stopColor="var(--brand-violet)" />
                                </linearGradient>
                            </defs>
                            <path
                                d="M12 3 4 6v6c0 4.5 3.2 7.6 8 9 4.8-1.4 8-4.5 8-9V6Z"
                                strokeLinejoin="round"
                            />
                            <path d="m9 12 2 2 4-4" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        <p className="privacy-badge-title">{privacy.badgeTitle}</p>
                        <p className="privacy-badge-body">{privacy.badgeBody}</p>
                    </div>
                </Reveal>
            </div>
        </section>
    );
}
