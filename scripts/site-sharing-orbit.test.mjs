import assert from "node:assert/strict";
import { createHash } from "node:crypto";
import { readFile, readdir } from "node:fs/promises";
import { join } from "node:path";
import { after, before, test } from "node:test";
import { fileURLToPath } from "node:url";
import { createServer } from "vite";

const root = fileURLToPath(new URL("../", import.meta.url));
let server;
let services;
let languages;
let orbit;

before(async () => {
    server = await createServer({
        configFile: false,
        logLevel: "error",
        optimizeDeps: { include: [], noDiscovery: true },
        root,
        server: { hmr: false, middlewareMode: true, watch: null, ws: false },
    });
    [{ SHARE_SERVICES: services }, orbit] = await Promise.all([
        server.ssrLoadModule("/src/constants/siteShare.ts"),
        server.ssrLoadModule("/src/lib/siteShareOrbit.ts"),
    ]);
    languages = (await readdir(join(root, "src/i18n/locales")))
        .filter((file) => file.endsWith(".ts"))
        .map((file) => ({ code: file.slice(0, -3) }));
});

after(async () => {
    await server?.close();
});

test("every supported locale supplies an intact translated orbit hint", async () => {
    const dictionaries = await Promise.all(
        languages.map(({ code }) => server.ssrLoadModule(`/src/i18n/locales/${code}.ts`)),
    );
    const fullInventory = [
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
    const supported = languages.map(({ code }) => code).toSorted();
    assert.deepEqual(
        supported,
        supported.length === 2 ? ["cs", "en"] : fullInventory,
        "The held bilingual draft and the full translated sites preserve their locale inventory",
    );
    const english = dictionaries[languages.findIndex(({ code }) => code === "en")].default;
    const scripts = {
        ar: /\p{Script=Arabic}/u,
        bn: /\p{Script=Bengali}/u,
        hi: /\p{Script=Devanagari}/u,
        ja: /[\p{Script=Hiragana}\p{Script=Katakana}\p{Script=Han}]/u,
        ko: /\p{Script=Hangul}/u,
        ru: /\p{Script=Cyrillic}/u,
        zh: /\p{Script=Han}/u,
    };
    for (const [index, { default: dictionary }] of dictionaries.entries()) {
        const code = languages[index].code;
        assert.deepEqual(Object.keys(dictionary.siteShareRoller ?? {}), ["hint"], code);
        const hint = dictionary.siteShareRoller.hint;
        assert.equal(typeof hint, "string", code);
        assert.ok(hint.trim().length > 0, code);
        assert.match(hint, /← →/u, `${code}: rotation includes the keyboard instruction`);
        assert.doesNotMatch(hint, /[?\uFFFD]/u, `${code}: Unicode survives delivery`);
        if (code !== "en")
            assert.notEqual(hint, english.siteShareRoller.hint, `${code}: no English fallback`);
        if (scripts[code]) assert.match(hint, scripts[code], `${code}: the native script is preserved`);
        assert.equal(typeof dictionary.siteShare?.selectLabel, "string");
    }
});

test("orbit wrapping crosses both ends and chooses the shortest cyclic displacement", () => {
    for (const [value, expected] of [
        [0, 0],
        [23, 0],
        [47, 1],
        [-1, 22],
        [-24, 22],
        [-0.25, 22.75],
        [23.5, 0.5],
    ]) {
        assert.equal(orbit.wrapOrbit(value, 23), expected);
    }
    for (const [index, offset, count, expected] of [
        [0, 22, 23, 1],
        [22, 0, 23, -1],
        [2, 22, 23, 3],
        [21, 1, 23, -3],
        [0, 22.5, 23, 0.5],
        [11, 0, 22, -11],
        [0, 11, 22, -11],
    ]) {
        assert.equal(orbit.orbitDelta(index, offset, count), expected);
    }
});

test("responsive orbit capacity honors narrow widths and enlarged text", () => {
    for (const [width, fontSize, count] of [
        [239, 16, 1],
        [240, 16, 3],
        [511, 16, 3],
        [512, 16, 5],
        [735, 16, 5],
        [736, 16, 7],
        [280, 32, 1],
        [480, 32, 3],
        [1024, 32, 5],
        [1472, 32, 7],
    ]) {
        assert.equal(
            orbit.orbitMetrics(width, fontSize).visibleCount,
            count,
            `${width}px, ${fontSize}px text`,
        );
    }
    const compact = orbit.orbitMetrics(280, 16);
    assert.equal(compact.spacing, 87.5);
    assert.equal(compact.cardWidth, 79.5);
    assert.equal(orbit.orbitMetrics(52, 16).cardWidth, 44, "Narrow slots preserve the minimum hit target");
});

test("planets follow a finite elliptical depth, fade at the sides and mirror in RTL", () => {
    const metrics = orbit.orbitMetrics(280, 16);
    const center = orbit.orbitPlanet(4, 4, 23, metrics, false);
    const right = orbit.orbitPlanet(5, 4, 23, metrics, false);
    const left = orbit.orbitPlanet(3, 4, 23, metrics, false);
    const hidden = orbit.orbitPlanet(6, 4, 23, metrics, false);
    assert.deepEqual([center.x, center.y, center.opacity, center.scale, center.visible], [0, 40, 1, 1, true]);
    assert.equal(right.x, 87.5);
    assert.equal(left.x, -87.5);
    assert.equal(left.y, right.y);
    assert.equal(left.opacity, right.opacity);
    assert.ok(right.y > 0 && right.y < center.y, "Side icons sit behind the front of the flat orbit");
    assert.ok(
        right.opacity > 0.6 && right.opacity < 0.7,
        "The central icon is prominent and side icons fade",
    );
    assert.ok(right.scale < center.scale);
    assert.ok(Math.abs((right.x / metrics.radius) ** 2 + (right.y / 40) ** 2 - 1) < 1e-12);
    assert.deepEqual([hidden.x, hidden.y, hidden.opacity, hidden.visible], [175, 0, 0, false]);
    for (const offset of [4, 4.5, 22.75]) {
        for (let index = 0; index < 23; index++) {
            const ltr = orbit.orbitPlanet(index, offset, 23, metrics, false);
            const rtl = orbit.orbitPlanet(index, offset, 23, metrics, true);
            assert.ok([ltr.x, ltr.y, ltr.opacity, ltr.scale].every(Number.isFinite));
            assert.ok(ltr.opacity >= 0 && ltr.opacity <= 1);
            assert.ok(ltr.y >= 0 && ltr.y <= 40);
            assert.equal(rtl.x, -ltr.x);
            assert.deepEqual(
                [rtl.y, rtl.opacity, rtl.scale, rtl.visible],
                [ltr.y, ltr.opacity, ltr.scale, ltr.visible],
            );
            assert.deepEqual(
                orbit.orbitPlanet(index, offset + 23, 23, metrics, false).style,
                ltr.style,
                "A full revolution keeps rendered geometry identical",
            );
            assert.deepEqual(
                orbit.orbitPlanet(index, offset - 23, 23, metrics, false).iconStyle,
                ltr.iconStyle,
                "Wrapping preserves icon scale",
            );
        }
    }
});

test("all selectable destinations ship local inert glyphs with license and integrity records", async () => {
    const directory = join(root, "public/share-icons");
    const manifest = JSON.parse(await readFile(join(directory, "manifest.json"), "utf8"));
    const expected = [...services.map(({ id }) => id), "copy", "native"].toSorted();
    assert.deepEqual(manifest.icons.map(({ id }) => id).toSorted(), expected);
    const files = await readdir(directory);
    assert.deepEqual(
        files.filter((name) => name.endsWith(".svg")).toSorted(),
        expected.map((id) => `${id}.svg`),
    );
    const glyphs = await Promise.all(manifest.icons.map(({ file }) => readFile(join(directory, file))));
    for (const [index, glyph] of glyphs.entries()) {
        const icon = manifest.icons[index];
        assert.equal(createHash("sha256").update(glyph).digest("hex"), icon.sha256, icon.id);
        assert.match(glyph.toString(), /viewBox="0 0 24 24"/);
        assert.doesNotMatch(glyph.toString(), /<script|<foreignObject|\bon\w+=|\b(?:href|src)=/i);
        assert.ok(["CC0-1.0", "MIT"].includes(icon.license), icon.id);
    }
    assert.ok(files.includes("LICENSE.bootstrap-icons.txt"));
    assert.ok(files.includes("LICENSE.simple-icons.txt"));
});
