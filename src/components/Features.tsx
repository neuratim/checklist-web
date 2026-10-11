import { FEATURE_ICONS } from "./icons/FeatureIcons";
import { SECTION_IDS } from "../constants/routes";
import { useLanguage } from "../i18n/useLanguage";
import { Reveal } from "./Reveal";
import "./Features.css";

export function Features() {
    const { dictionary } = useLanguage();
    const { features } = dictionary;

    return (
        <section className="section section-elevated" id={SECTION_IDS.features}>
            <div className="container">
                <Reveal>
                    <p className="eyebrow">{features.eyebrow}</p>
                    <h2 className="section-heading">{features.heading}</h2>
                </Reveal>

                <div className="features-grid">
                    {features.items.map((feature, index) => (
                        <Reveal className="card feature-card" key={feature.title}>
                            <div className="feature-icon">{FEATURE_ICONS[index]}</div>
                            <h3 className="feature-title">{feature.title}</h3>
                            <p className="feature-body">{feature.body}</p>
                        </Reveal>
                    ))}
                </div>
            </div>
        </section>
    );
}
