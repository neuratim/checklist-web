import { SECTION_IDS } from "../constants/routes";
import { useLanguage } from "../i18n/useLanguage";
import { BackupScreen } from "./screens/BackupScreen";
import { PhoneFrame } from "./screens/PhoneFrame";
import { Showcase } from "./Showcase";

/** What backups and shares contain, the app lock, and device-level protection. */
export function Security() {
    const { dictionary } = useLanguage();
    const { security } = dictionary;

    return (
        <Showcase
            elevated
            eyebrow={security.eyebrow}
            heading={security.heading}
            id={SECTION_IDS.security}
            intro={security.intro}
            note={security.note}
            points={security.points}
        >
            <PhoneFrame>
                <BackupScreen />
            </PhoneFrame>
        </Showcase>
    );
}
