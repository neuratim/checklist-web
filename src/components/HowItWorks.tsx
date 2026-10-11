import { SECTION_IDS } from "../constants/routes";
import { useLanguage } from "../i18n/useLanguage";
import { STEP_SCREENS } from "./HowItWorksScreens";
import { Reveal } from "./Reveal";
import "./HowItWorks.css";

export function HowItWorks() {
    const { dictionary } = useLanguage();
    const { howItWorks } = dictionary;

    return (
        <section className="section" id={SECTION_IDS.howItWorks}>
            <div className="container">
                <Reveal>
                    <p className="eyebrow">{howItWorks.eyebrow}</p>
                    <h2 className="section-heading">{howItWorks.heading}</h2>
                    <p className="section-intro">{howItWorks.intro}</p>
                </Reveal>

                <div className="steps">
                    {howItWorks.steps.map((step, index) => (
                        <Reveal className={`step ${index % 2 === 1 ? "step-reverse" : ""}`} key={step.title}>
                            <div className="step-visual">{STEP_SCREENS[index]}</div>
                            <div className="step-copy">
                                <p className="eyebrow">{step.eyebrow}</p>
                                <h3 className="step-title">{step.title}</h3>
                                <p className="step-body">{step.body}</p>
                            </div>
                        </Reveal>
                    ))}
                </div>
            </div>
        </section>
    );
}
