import { BRAND_NAME } from "../constants/brand";
import { ROUTE_HREFS, SECTION_HREFS } from "../constants/routes";
import { useLanguage } from "../i18n/useLanguage";
import { ChecklistsScreen } from "./screens/ChecklistsScreen";
import { PhoneFrame } from "./screens/PhoneFrame";
import "./Hero.css";

export function Hero() {
    const { dictionary } = useLanguage();
    const { hero } = dictionary;

    return (
        <section className="hero">
            <div className="container hero-inner">
                <div className="hero-copy">
                    <p className="eyebrow">{BRAND_NAME}</p>
                    <h1 className="hero-heading">
                        {hero.headingLead} <span className="gradient-text">{hero.headingHighlight}</span>
                    </h1>
                    <p className="hero-subhead">{hero.subhead}</p>
                    <div className="hero-actions">
                        {/* Try It rather than the app's own address: the app is reached
                            through the embed on every surface now, so the raw origin is
                            never handed to a visitor. */}
                        <a className="btn btn-primary" href={ROUTE_HREFS.tryApp}>
                            {hero.ctaPrimary}
                        </a>
                        <a className="btn btn-ghost" href={SECTION_HREFS.howItWorks}>
                            {hero.ctaSecondary}
                        </a>
                    </div>
                    <div className="hero-tags">
                        {hero.badges.map((badge) => (
                            <span className="badge" key={badge}>
                                {badge}
                            </span>
                        ))}
                    </div>
                </div>

                <div className="hero-visual">
                    <div className="hero-glow" />
                    <PhoneFrame>
                        <ChecklistsScreen />
                    </PhoneFrame>
                </div>
            </div>
        </section>
    );
}
