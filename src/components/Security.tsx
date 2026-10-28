import { SECTION_IDS } from "../constants/routes";
import { useLanguage } from "../i18n/useLanguage";
import { BackupScreen } from "./screens/BackupScreen";
import { PhoneFrame } from "./screens/PhoneFrame";
import { Showcase } from "./Showcase";

/** Encrypted backups, plaintext export by choice, the app lock, and OS protection of stored data. */
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
