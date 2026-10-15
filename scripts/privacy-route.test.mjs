import assert from "node:assert/strict";
import test from "node:test";
import { PAGE_PATHS } from "../src/constants/routes.ts";
import { isPrivacyPolicyPath, localizedPageHref } from "../src/lib/pageLinks.ts";

test("dedicated privacy URLs accept only the canonical path and its slashless form", () => {
    assert.equal(PAGE_PATHS.privacyPolicy, "/privacy-policy/");
    for (const pathname of [
        "/privacy-policy",
        "/privacy-policy/",
        "/cs/privacy-policy/",
        "/ar/privacy-policy",
    ])
        assert.equal(isPrivacyPolicyPath(pathname), true);
    for (const pathname of ["/", "/privacy-policy-other", "/other/privacy-policy", "/privacy-policy//"])
        assert.equal(isPrivacyPolicyPath(pathname), false);
});
test("page links retain the active locale and optional home section", () => {
    assert.equal(localizedPageHref(PAGE_PATHS.privacyPolicy, "cs"), "/cs/privacy-policy/");
    assert.equal(localizedPageHref(PAGE_PATHS.home, "ar", "#top"), "/ar/#top");
});
