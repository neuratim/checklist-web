import { ANDROID_TESTERS_URL, ANDROID_URL } from "../../site.config";
import { usePlatformAvailability } from "../i18n/platformAvailability";
import "./PlatformAvailability.css";

function ArrowIcon() {
    return (
        <svg
            aria-hidden="true"
            fill="none"
            height="14"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 20 20"
            width="14"
        >
            <path d="M4 10h11m-4-4 4 4-4 4" />
        </svg>
    );
}

/**
 * What the Android card offers while the build is in closed testing: the status,
 * the way in for a tester who already has the invitation, and the way onto the
 * list for everybody else.
 */
export function AndroidTesting() {
    const copy = usePlatformAvailability();

    return (
        <div className="platform-availability">
            <div className="platform-availability__status">
                <span className="platform-availability__badge">{copy.inTesting}</span>
                <a
                    className="platform-availability__join"
                    href={ANDROID_TESTERS_URL}
                    rel="noreferrer"
                    target="_blank"
                >
                    {copy.joinTesting}
                    <ArrowIcon />
                </a>
            </div>
            <a className="platform-availability__cta" href={ANDROID_URL} rel="noreferrer" target="_blank">
                {copy.androidCta}
            </a>
        </div>
    );
}

/**
 * A platform whose build is not out yet. A genuinely disabled button rather than
 * a link painted to look dead: there is nothing to focus and nothing to click,
 * and assistive technology reports the state instead of offering a way nowhere.
 */
export function InPreparation() {
    const copy = usePlatformAvailability();

    return (
        <div className="platform-availability">
            <button className="platform-availability__pending" disabled type="button">
                {copy.inPreparation}
            </button>
        </div>
    );
}

/** Opens the iOS app's listing in the App Store. */
export function GetOnAppStoreButton({ url }: { url: string }) {
    const copy = usePlatformAvailability();

    return (
        <div className="platform-availability">
            <a className="platform-availability__cta" href={url} rel="noreferrer" target="_blank">
                {copy.iosCta}
            </a>
        </div>
    );
}
