import { SECTION_IDS } from "../constants/routes";
import { useLanguage } from "../i18n/useLanguage";
import { ConditionScreen } from "./screens/ConditionScreen";
import { PhoneFrame } from "./screens/PhoneFrame";
import { Showcase } from "./Showcase";

/**
 * The one feature that needs more than a card to explain — a rule builder is
 * abstract in prose and obvious in a screenshot — so it gets the phone
 * mockup alongside the copy.
 */
export function ConditionalItems() {
    const { dictionary } = useLanguage();
    const { conditionalItems } = dictionary;

    return (
        <Showcase
            eyebrow={conditionalItems.eyebrow}
            heading={conditionalItems.heading}
            id={SECTION_IDS.conditionalItems}
            intro={conditionalItems.intro}
            points={conditionalItems.points}
        >
            <PhoneFrame>
                <ConditionScreen />
            </PhoneFrame>
        </Showcase>
    );
}
