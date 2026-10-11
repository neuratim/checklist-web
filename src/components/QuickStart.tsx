import { SECTION_IDS } from "../constants/routes";
import { useLanguage } from "../i18n/useLanguage";
import { PhoneFrame } from "./screens/PhoneFrame";
import { StartScreen } from "./screens/StartScreen";
import { Showcase } from "./Showcase";

/** The five ways a list gets into the app without typing it item by item. */
export function QuickStart() {
    const { dictionary } = useLanguage();
    const { quickStart } = dictionary;

    return (
        <Showcase
            elevated
            eyebrow={quickStart.eyebrow}
            heading={quickStart.heading}
            id={SECTION_IDS.quickStart}
            intro={quickStart.intro}
            points={quickStart.points}
            reversed
        >
            <PhoneFrame>
                <StartScreen />
            </PhoneFrame>
        </Showcase>
    );
}
