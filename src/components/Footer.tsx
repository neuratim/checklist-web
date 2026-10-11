import { useState } from "react";
import { CONTACT_MAILTO_URL, NEURATIM_URL } from "../../site.config";
import { ROUTE_HREFS } from "../constants/routes";
import { useLanguage } from "../i18n/useLanguage";
import { formatCopy } from "../lib/formatCopy";
import "./Footer.css";

export function Footer() {
    const { dictionary } = useLanguage();
    const { footer } = dictionary;
    const [year] = useState(() => new Date().getFullYear());

    return (
        <footer className="footer">
            <div className="container footer-inner">
                <p className="footer-line">{formatCopy(footer.tagline, { year })}</p>
                <div className="footer-links">
                    <a href={ROUTE_HREFS.privacyPolicy}>{footer.privacyPolicy}</a>
                    <a href={NEURATIM_URL} rel="noreferrer" target="_blank">
                        {footer.mainSite}
                    </a>
                    <a href={CONTACT_MAILTO_URL}>{footer.contact}</a>
                </div>
            </div>
        </footer>
    );
}
