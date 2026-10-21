import assert from "node:assert/strict";
import { existsSync } from "node:fs";
import { join } from "node:path";
import { after, before, test } from "node:test";
import { fileURLToPath } from "node:url";
import { createServer } from "vite";

const root = fileURLToPath(new URL("../", import.meta.url));
const data = {
    title: "Share + discover: Čeština 日本語 العربية & friends #1",
    url: "https://example.com/cs/?source=a+b&next=https%3A%2F%2Fexample.org%2F#details",
};
const text = `${data.title}\n${data.url}`;
let server;
let sharing;
let config;
let services;

before(async () => {
    server = await createServer({
        configFile: false,
        logLevel: "error",
        optimizeDeps: { noDiscovery: true, include: [] },
        root,
        server: { hmr: false, middlewareMode: true, watch: null, ws: false },
    });
    [sharing, config, services] = await Promise.all([
        server.ssrLoadModule("/src/lib/siteShare.ts"),
        server.ssrLoadModule("/site.config.ts"),
        server.ssrLoadModule("/src/constants/siteShare.ts"),
    ]);
});

after(async () => {
    await server?.close();
});

test("all 21 evaluated services preserve the complete URL and encode their composer parameters", () => {
    const expected = {
        bluesky: ["https://bsky.app/intent/compose", { text }],
        facebook: ["https://www.facebook.com/sharer/sharer.php", { u: data.url }],
        flipboard: [
            "https://share.flipboard.com/bookmarklet/popout",
            { title: data.title, url: data.url, v: "2" },
        ],
        hackerNews: ["https://news.ycombinator.com/submitlink", { t: data.title, u: data.url }],
        hatena: ["https://b.hatena.ne.jp/entry/panel/", { url: data.url }],
        line: ["https://social-plugins.line.me/lineit/share", { text: data.title, url: data.url }],
        linkedin: ["https://www.linkedin.com/sharing/share-offsite/", { url: data.url }],
        mastodon: ["https://share.joinmastodon.org/", { text }],
        odnoklassniki: ["https://connect.ok.ru/offer", { title: data.title, url: data.url }],
        pinterest: [
            "https://www.pinterest.com/pin/create/button/",
            { description: data.title, media: config.SHARE_IMAGE_URL, url: data.url },
        ],
        qq: ["https://connect.qq.com/widget/shareqq/index.html", { title: data.title, url: data.url }],
        qzone: [
            "https://sns.qzone.qq.com/cgi-bin/qzshare/cgi_qzshare_onekey",
            { title: data.title, url: data.url },
        ],
        reddit: ["https://www.reddit.com/submit", { title: data.title, type: "LINK", url: data.url }],
        telegram: ["https://t.me/share/url", { text: data.title, url: data.url }],
        threads: ["https://www.threads.com/intent/post", { text: data.title, url: data.url }],
        tumblr: [
            "https://www.tumblr.com/widgets/share/tool",
            { canonicalUrl: data.url, content: data.url, posttype: "link", title: data.title },
        ],
        vk: ["https://vk.com/share.php", { title: data.title, url: data.url }],
        weibo: ["https://service.weibo.com/share/share.php", { title: data.title, url: data.url }],
        whatsapp: ["https://wa.me/", { text }],
        x: ["https://x.com/intent/tweet", { text: data.title, url: data.url }],
        xing: ["https://www.xing.com/spi/shares/new", { url: data.url }],
    };
    assert.deepEqual(
        services.SHARE_SERVICES.map(({ id }) => id).toSorted(),
        Object.keys(expected).toSorted(),
        "Every supported destination must be selectable exactly once",
    );
    for (const [id, [endpoint, params]] of Object.entries(expected)) {
        const url = new URL(sharing.getShareHref(id, data));
        assert.equal(`${url.origin}${url.pathname}`, endpoint, id);
        const actual = id === "mastodon" ? new URLSearchParams(url.hash.slice(1)) : url.searchParams;
        assert.deepEqual(Object.fromEntries(actual), params, id);
        assert.equal([...actual].length, Object.keys(params).length, `${id}: no injected parameters`);
        assert.equal(id === "mastodon" ? url.search : url.hash, "", `${id}: correct parameter location`);
    }
    const image = new URL(config.SHARE_IMAGE_URL);
    assert.equal(image.protocol, "https:", "Pinterest receives a public absolute artwork URL");
    assert.equal(image.origin, new URL(config.SITE_URL).origin);
    assert.notEqual(image.pathname, "/", "Pinterest must receive an image rather than the site homepage");
    assert.ok(existsSync(join(root, "public", image.pathname)), "Pinterest artwork must ship with the site");
});

test("sharing uses each public language homepage without preview origins, queries or fragments", () => {
    const languages = [
        "ar",
        "bn",
        "cs",
        "de",
        "en",
        "es",
        "fr",
        "hi",
        "id",
        "it",
        "ja",
        "ko",
        "pl",
        "pt",
        "ru",
        "tr",
        "vi",
        "zh",
    ];
    for (const language of languages) {
        const shared = sharing.getSiteShareData(language, data.title);
        const url = new URL(shared.url);
        assert.equal(shared.title, data.title);
        assert.equal(url.origin, new URL(config.SITE_URL).origin, language);
        assert.equal(url.protocol, "https:", language);
        assert.equal(url.pathname, language === "en" ? "/" : `/${language}/`, language);
        assert.equal(url.search, "", language);
        assert.equal(url.hash, "", language);
    }
});

test("selection accepts only evaluated services and local actions", () => {
    for (const { id } of services.SHARE_SERVICES) assert.equal(sharing.isShareSelection(id), true, id);
    for (const action of ["copy", "native"]) {
        assert.equal(sharing.isShareSelection(action), true);
        assert.equal(sharing.getShareHref(action, data), null);
    }
    for (const value of ["", "Facebook", "unknown", "__proto__", "javascript:alert(1)", "https://evil.test"])
        assert.equal(sharing.isShareSelection(value), false, value);
});

async function withNavigator(value, run) {
    const descriptor = Object.getOwnPropertyDescriptor(globalThis, "navigator");
    if (value === undefined) Reflect.deleteProperty(globalThis, "navigator");
    else Object.defineProperty(globalThis, "navigator", { configurable: true, value });
    try {
        return await run();
    } finally {
        if (descriptor) Object.defineProperty(globalThis, "navigator", descriptor);
        else Reflect.deleteProperty(globalThis, "navigator");
    }
}

async function assertRejectedNativeCapability(canShare) {
    await withNavigator(
        { canShare, share: () => assert.fail("Unsupported data must not be shared") },
        async () => {
            assert.equal(sharing.canShareWithDevice(data), false);
            assert.equal(await sharing.shareWithDevice(data), "error");
        },
    );
}

test("server rendering and unavailable or rejected native capabilities fail without throwing", async () => {
    await withNavigator(undefined, async () => {
        assert.equal(sharing.getNativeShareSupport(), false);
        assert.equal(sharing.noNativeShareOnServer(), false);
        assert.equal(sharing.canShareWithDevice(data), false);
        assert.equal(await sharing.shareWithDevice(data), "error");
        assert.equal(await sharing.copySiteLink(data.url), "error");
    });
    await assertRejectedNativeCapability(() => false);
    await assertRejectedNativeCapability(() => {
        throw new Error("Unsupported share data");
    });
    await withNavigator({}, async () => {
        assert.equal(sharing.getNativeShareSupport(), false);
        assert.equal(await sharing.copySiteLink(data.url), "error");
    });
});

async function assertNativeShareFailure(name, expected) {
    const error = new Error(name);
    error.name = name;
    await withNavigator(
        {
            canShare: (actual) => {
                assert.deepEqual(actual, data);
                return true;
            },
            clipboard: {
                writeText: () => assert.fail("Cancellation must not trigger an unrelated action"),
            },
            share: async () => {
                throw error;
            },
        },
        async () => {
            assert.equal(await sharing.shareWithDevice(data), expected);
        },
    );
}

test("native share forwards data once and distinguishes success, cancellation and failure", async () => {
    let calls = 0;
    await withNavigator(
        {
            share: async (actual) => {
                calls++;
                assert.deepEqual(actual, data);
            },
        },
        async () => {
            assert.equal(sharing.getNativeShareSupport(), true);
            assert.equal(sharing.canShareWithDevice(data), true, "canShare is optional");
            assert.equal(await sharing.shareWithDevice(data), "shared");
            assert.equal(calls, 1);
        },
    );
    await assertNativeShareFailure("AbortError", "cancelled");
    await assertNativeShareFailure("NotAllowedError", "error");
});

test("clipboard success copies exactly the URL and denied access reports failure", async () => {
    const copied = [];
    await withNavigator({ clipboard: { writeText: async (value) => copied.push(value) } }, async () => {
        assert.equal(await sharing.copySiteLink(data.url), "copied");
        assert.deepEqual(copied, [data.url]);
    });
    await withNavigator(
        {
            clipboard: {
                writeText: async () => {
                    throw new Error("Clipboard denied");
                },
            },
        },
        async () => {
            assert.equal(await sharing.copySiteLink(data.url), "error");
        },
    );
});
