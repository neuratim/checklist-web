import type { PhoneFrameProps } from "../../types/components";
import "./PhoneFrame.css";

/** Native captures already contain system bars; the shell preserves the full frame. */
export function PhoneFrame({ children }: PhoneFrameProps) {
    return (
        <div aria-hidden="true" className="phone-frame">
            <div className="phone-screen">{children}</div>
        </div>
    );
}
