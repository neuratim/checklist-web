import { useLanguage } from "../../i18n/useLanguage";
import type { NativeAppScreenProps } from "../../types/components";
import "./NativeAppScreen.css";

/** Captured native app UI; surrounding translated copy provides its description. */
export function NativeAppScreen({ priority = false, view }: NativeAppScreenProps) {
    const { language } = useLanguage();
    return (
        <img
            alt=""
            className="native-app-screen"
            decoding="async"
            fetchPriority={priority ? "high" : "auto"}
            height={1311}
            loading={priority ? "eager" : "lazy"}
            src={`/screens/${language}/${view}.webp`}
            width={603}
        />
    );
}
