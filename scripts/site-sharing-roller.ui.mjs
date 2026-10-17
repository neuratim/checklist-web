import {
    parseSiteSharingBrowserOptions,
    runSiteSharingBrowser,
} from "../../../../scripts/site-sharing-browser.mjs";

const options = parseSiteSharingBrowserOptions(process.argv.slice(2));
const result = await runSiteSharingBrowser({ ...options, selectedSites: ["checklist/web"] });
process.exitCode = result.failures.length ? 1 : 0;
