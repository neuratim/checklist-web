import { SECTION_IDS } from "../constants/routes";
import { useLanguage } from "../i18n/useLanguage";
import { PhoneFrame } from "./screens/PhoneFrame";
import { StatsScreen } from "./screens/StatsScreen";
import { Showcase } from "./Showcase";

/** Statistics — the one page of numbers, and why they never leave the device. */
export function Insights() {
    const { dictionary } = useLanguage();
    const { insights } = dictionary;

    return (
        <Showcase
            eyebrow={insights.eyebrow}
            heading={insights.heading}
            id={SECTION_IDS.insights}
            intro={insights.intro}
            points={insights.points}
            reversed
        >
            <PhoneFrame>
                <StatsScreen />
            </PhoneFrame>
        </Showcase>
    );
}
