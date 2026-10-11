import { IOS_URL } from "../../site.config";
import { PLATFORMS } from "../constants/platforms";
import { ROUTE_HREFS, SECTION_IDS } from "../constants/routes";
import { usePlatformAvailability } from "../i18n/platformAvailability";
import { useLanguage } from "../i18n/useLanguage";
import type { PlatformCard, PlatformId } from "../types/platform";
import { AndroidIcon, AppleIcon, WebIcon } from "./icons/PlatformIcons";
import { AndroidTesting, GetOnAppStoreButton } from "./PlatformAvailability";
import { Reveal } from "./Reveal";
import "./GetApp.css";

export function GetApp() {
    const { dictionary } = useLanguage();
    const { getApp } = dictionary;
    const availability = usePlatformAvailability();

    const cardFor = (id: PlatformId): Pick<PlatformCard, "action" | "detail" | "icon"> => {
        switch (id) {
            case "web":
                return {
                    action: (
                        <a className="btn btn-ghost platform-link" href={ROUTE_HREFS.tryApp}>
                            {getApp.platforms.web.cta}
                        </a>
                    ),
                    detail: getApp.platforms.web.detail,
                    icon: <WebIcon />,
                };
            case "android":
                return {
                    action: <AndroidTesting />,
                    detail: availability.androidDetail,
                    icon: <AndroidIcon />,
                };
            case "ios":
                return {
                    action: <GetOnAppStoreButton url={IOS_URL} />,
                    detail: getApp.platforms.ios.detail,
                    icon: <AppleIcon />,
                };
        }
    };
    const platforms: readonly PlatformCard[] = PLATFORMS.map((platform) => {
        const { action, detail, icon } = cardFor(platform.id);
        return { action, detail, icon, iconClassName: platform.iconClassName, name: platform.name };
    });

    return (
        <section className="section" id={SECTION_IDS.getApp}>
            <div className="container">
                <Reveal>
                    <p className="eyebrow">{getApp.eyebrow}</p>
                    <h2 className="section-heading">{getApp.heading}</h2>
                    <p className="section-intro">{getApp.intro}</p>
                </Reveal>

                <div className="platform-grid">
                    {platforms.map((platform) => (
                        <Reveal className="card platform-card" key={platform.name}>
                            <span aria-hidden="true" className={`platform-icon ${platform.iconClassName}`}>
                                {platform.icon}
                            </span>
                            <h3 className="platform-name">{platform.name}</h3>
                            <p className="platform-detail">{platform.detail}</p>
                            {platform.action}
                        </Reveal>
                    ))}
                </div>
            </div>
        </section>
    );
}
