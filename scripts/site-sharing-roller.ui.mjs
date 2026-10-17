import assert from "node:assert/strict";
import { createHash } from "node:crypto";
import { existsSync } from "node:fs";
import { readFile, writeFile } from "node:fs/promises";
import { join, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { loadEnv } from "vite";
import { startBrowserSession, until } from "../../../../scripts/site-navigation-browser-session.mjs";

const site = fileURLToPath(new URL("../", import.meta.url));
const checkoutConfigured = Boolean(loadEnv("production", site, "VITE_").VITE_STRIPE_PUBLISHABLE_KEY);
const artifacts = JSON.parse(process.env.NEURATIM_SHARE_ARTIFACTS ?? "{}");
const output = resolve(
    artifacts["checklist/web"] ?? process.env.NEURATIM_ROLLER_ARTIFACT ?? join(site, "dist"),
);
const allPhases = ["--destinations", "--layouts", "--actions"];
const phases = process.argv.length > 2 ? process.argv.slice(2) : allPhases;
assert.ok(
    phases.every((phase) => allPhases.includes(phase)),
    "Choose --destinations, --layouts or --actions.",
);
assert.ok(existsSync(join(output, "index.html")), "Build Checklist before running the orbit UI suite.");

const endpoints = {
    bluesky: "https://bsky.app/intent/compose",
    facebook: "https://www.facebook.com/sharer/sharer.php",
    flipboard: "https://share.flipboard.com/bookmarklet/popout",
    hackerNews: "https://news.ycombinator.com/submitlink",
    hatena: "https://b.hatena.ne.jp/entry/panel/",
    line: "https://social-plugins.line.me/lineit/share",
    linkedin: "https://www.linkedin.com/sharing/share-offsite/",
    mastodon: "https://share.joinmastodon.org/",
    odnoklassniki: "https://connect.ok.ru/offer",
    pinterest: "https://www.pinterest.com/pin/create/button/",
    qq: "https://connect.qq.com/widget/shareqq/index.html",
    qzone: "https://sns.qzone.qq.com/cgi-bin/qzshare/cgi_qzshare_onekey",
    reddit: "https://www.reddit.com/submit",
    telegram: "https://t.me/share/url",
    threads: "https://www.threads.com/intent/post",
    tumblr: "https://www.tumblr.com/widgets/share/tool",
    vk: "https://vk.com/share.php",
    weibo: "https://service.weibo.com/share/share.php",
    whatsapp: "https://wa.me/",
    x: "https://x.com/intent/tweet",
    xing: "https://www.xing.com/spi/shares/new",
};
const serviceOrigins = new Set(Object.values(endpoints).map((value) => new URL(value).origin));
const interception = `(() => {
    const probe=window.__orbitProbe={clipboard:[],native:[],opened:[],outcome:'success',documentUrl:location.href};
    const wait=async()=>{
        if(probe.outcome==='failure')throw new Error('Synthetic sharing failure');
        if(probe.outcome==='cancel')throw new DOMException('Cancelled','AbortError');
        if(probe.outcome==='pending')await new Promise(resolve=>{probe.resolve=resolve});
    };
    Object.defineProperty(navigator,'share',{configurable:true,value:
        sessionStorage.getItem('orbit-no-native')==='yes'?undefined:async data=>{probe.native.push(data);await wait()}});
    Object.defineProperty(navigator,'canShare',{configurable:true,value:data=>data.title===''||probe.allowed!==false});
    Object.defineProperty(navigator,'clipboard',{configurable:true,value:{writeText:async value=>{probe.clipboard.push(value);await wait()}}});
    window.open=url=>{probe.opened.push(String(url));return{opener:null}};
    // Bubble after React's drag/busy guard; a guarded click must never count as sharing.
    document.addEventListener('click',event=>{
        const anchor=event.target.closest?.('.site-share-planet[href]');
        if(!anchor||event.defaultPrevented)return;
        event.preventDefault();probe.opened.push(anchor.href);
    });
})();`;

const evidence = {
    startedUtc: new Date().toISOString(),
    output,
    phases,
    blockedRequests: [],
    checks: [],
    indexSha256: createHash("sha256")
        .update(await readFile(join(output, "index.html")))
        .digest("hex"),
};
const session = await startBrowserSession();
const { evaluate, send } = session;
const browserErrors = [];
const localScripts = new Set();
let navigationSequence = 0;
session.socket.addEventListener("message", ({ data }) => {
    const message = JSON.parse(data);
    if (message.method === "Network.requestWillBeSent") {
        const { request, requestId } = message.params;
        const url = new URL(request.url);
        if (url.origin === session.origin && url.pathname.endsWith(".js")) localScripts.add(requestId);
    } else if (["Network.loadingFinished", "Network.loadingFailed"].includes(message.method)) {
        localScripts.delete(message.params.requestId);
    } else if (message.method === "Runtime.exceptionThrown") {
        browserErrors.push({ navigation: navigationSequence, details: message.params.exceptionDetails });
    } else if (message.method === "Fetch.requestPaused") {
        const { request, requestId } = message.params;
        const local = new URL(request.url).origin === session.origin;
        if (!local)
            evidence.blockedRequests.push({
                navigation: navigationSequence,
                method: request.method,
                url: request.url,
            });
        void send(local ? "Fetch.continueRequest" : "Fetch.failRequest", {
            requestId,
            ...(local ? {} : { errorReason: "BlockedByClient" }),
        }).catch((error) => {
            evidence.interceptionError = error.message;
        });
    }
});

async function inOrder(items, run, index = 0) {
    if (index >= items.length) return;
    await run(items[index], index);
    await inOrder(items, run, index + 1);
}

async function settle() {
    await evaluate(
        "document.fonts.ready.then(()=>new Promise(done=>requestAnimationFrame(()=>requestAnimationFrame(done))))",
    );
    let previous;
    await until(async () => {
        const current = await evaluate(`JSON.stringify({elements:[...document.querySelectorAll(
            '.site-share,.site-share-orbit,.site-share-planet'
        )].map(e=>{const r=e.getBoundingClientRect();return[r.x,r.y,r.width,r.height,e.tabIndex,getComputedStyle(e).opacity]}),
            position:document.querySelector('.site-share-orbit')?.dataset.orbitPosition,
            viewport:[visualViewport.offsetLeft,visualViewport.offsetTop,visualViewport.scale]})`);
        const settled = await evaluate(
            "document.querySelector('.site-share-orbit')?.dataset.orbitSettled==='true'",
        );
        const animated = await evaluate(
            "document.querySelector('.site-share-orbit')?.getAnimations({subtree:true}).some(animation=>animation.playState==='running')",
        );
        const stable = settled && !animated && current === previous && localScripts.size === 0;
        previous = current;
        return stable;
    }, "Planet positions, viewport and local chunks stabilize");
}

async function bringStage() {
    await evaluate(`(()=>{
        document.querySelector('.site-share').scrollIntoView({block:'start',inline:'nearest',behavior:'instant'});
        document.querySelector('.site-share-orbit').scrollIntoView({block:'center',inline:'nearest',behavior:'instant'});
    })()`);
    await settle();
}

async function visit(language = "en", width = 390, height = 844, insets = {}, scale = 1, motion = "reduce") {
    await send("Emulation.setEmulatedMedia", {
        features: [{ name: "prefers-reduced-motion", value: motion }],
    });
    await send("Emulation.setDeviceMetricsOverride", {
        deviceScaleFactor: 1,
        height,
        mobile: width < 900,
        screenHeight: height,
        screenWidth: width,
        width,
    });
    await send("Emulation.setSafeAreaInsetsOverride", { insets });
    await send("Emulation.setTouchEmulationEnabled", { enabled: true, maxTouchPoints: 1 });
    const url = `${session.origin}${language === "en" ? "/" : `/${language}/`}?orbit=${++navigationSequence}#probe`;
    localScripts.clear();
    await send("Page.navigate", { url });
    await until(
        () =>
            evaluate(`(()=>{
        const planet=document.querySelector('.site-share-planet');
        return __orbitProbe?.documentUrl===${JSON.stringify(url)}&&document.readyState==='complete'&&
            document.documentElement.lang===${JSON.stringify(language)}&&planet&&Object.keys(planet).some(k=>k.startsWith('__reactProps'));
    })()`),
        `Hydrated ${language} planet orbit`,
    );
    if (checkoutConfigured) {
        await evaluate(
            "document.querySelector('.support-pledge').nextElementSibling.scrollIntoView({block:'center',behavior:'instant'})",
        );
        await until(
            () => evaluate("!!document.querySelector('.tip-checkout-presets button')"),
            "Existing checkout amount controls render before geometry",
        );
    }
    if (scale !== 1)
        await evaluate(
            `document.documentElement.style.fontSize=parseFloat(getComputedStyle(document.documentElement).fontSize)*${scale}+'px'`,
        );
    await bringStage();
    await until(
        () =>
            evaluate(
                "[...document.querySelectorAll('.site-share-planet img')].every(img=>img.complete&&img.naturalWidth>0)",
            ),
        "All local planet icons load",
    );
    assert.equal(await front(), "facebook", "Each new page starts with Facebook at the front");
}

async function front() {
    return evaluate("document.querySelector('.site-share-planet[tabindex=\"0\"]')?.dataset.service");
}

async function probeState() {
    return evaluate(
        "JSON.stringify([location.href,__orbitProbe.opened,__orbitProbe.native,__orbitProbe.clipboard])",
    );
}

async function key(name) {
    const codes = { ArrowLeft: 37, ArrowRight: 39, End: 35, Enter: 13, Home: 36 };
    const text = name === "Enter" ? { text: "\r", unmodifiedText: "\r" } : {};
    await send("Input.dispatchKeyEvent", {
        type: "keyDown",
        key: name,
        code: name,
        windowsVirtualKeyCode: codes[name],
        ...text,
    });
    await send("Input.dispatchKeyEvent", {
        type: "keyUp",
        key: name,
        code: name,
        windowsVirtualKeyCode: codes[name],
    });
    await settle();
}

async function focusFront() {
    await bringStage();
    await evaluate(
        "document.querySelector('.site-share-planet[tabindex=\"0\"]').focus({preventScroll:true})",
    );
}

async function rotateTo(id) {
    const state =
        await evaluate(`({ids:[...document.querySelectorAll('.site-share-planet')].map(e=>e.dataset.service),
        front:document.querySelector('.site-share-planet[tabindex="0"]').dataset.service,rtl:document.documentElement.dir==='rtl'})`);
    const current = state.ids.indexOf(state.front),
        target = state.ids.indexOf(id),
        count = state.ids.length;
    assert.ok(target >= 0, `Planet ${id} exists`);
    const forward = (target - current + count) % count,
        backward = (current - target + count) % count;
    const direction =
        forward <= backward
            ? state.rtl
                ? "ArrowLeft"
                : "ArrowRight"
            : state.rtl
              ? "ArrowRight"
              : "ArrowLeft";
    const before = await probeState();
    await focusFront();
    await inOrder(Array.from({ length: Math.min(forward, backward) }), () => key(direction));
    assert.equal(await front(), id, "Arrow keys rotate the requested service to the front");
    assert.equal(await probeState(), before, "Rotation never shares, copies or navigates");
}

async function point(selector) {
    await bringStage();
    return evaluate(`(()=>{
        const e=document.querySelector(${JSON.stringify(selector)}),r=e.getBoundingClientRect();
        const x=r.left+r.width/2,y=r.top+r.height/2,hit=document.elementFromPoint(x,y),v=visualViewport;
        if(!e.contains(hit))throw new Error('Obscured planet target '+e.outerHTML+' by '+hit?.outerHTML);
        return{x:(x-v.offsetLeft)*v.scale,y:(y-v.offsetTop)*v.scale};
    })()`);
}

async function activate(method = "mouse", selector = '.site-share-planet[tabindex="0"]') {
    const center = await point(selector);
    if (method === "keyboard") {
        await evaluate(`document.querySelector(${JSON.stringify(selector)}).focus({preventScroll:true})`);
        await key("Enter");
    } else if (method === "touch") {
        await send("Input.dispatchTouchEvent", { type: "touchStart", touchPoints: [center] });
        await send("Input.dispatchTouchEvent", { type: "touchEnd", touchPoints: [] });
    } else {
        await send("Input.dispatchMouseEvent", {
            type: "mousePressed",
            button: "left",
            clickCount: 1,
            ...center,
        });
        await send("Input.dispatchMouseEvent", {
            type: "mouseReleased",
            button: "left",
            clickCount: 1,
            ...center,
        });
    }
    await settle();
}

async function contract() {
    const result = await evaluate(`(()=>{
        const section=document.querySelector('.site-share'),stage=section.querySelector('.site-share-orbit');
        return{role:stage.getAttribute('role'),orientation:stage.getAttribute('aria-orientation'),label:stage.getAttribute('aria-label'),
            hint:document.getElementById(stage.getAttribute('aria-describedby'))?.textContent,
            oldControls:section.querySelectorAll('select,.site-share-action,.site-share-roller-arrows,.site-share-roll-next,.site-share-roll-previous').length,
            planets:[...stage.querySelectorAll('.site-share-planet')].map(e=>({id:e.dataset.service,tag:e.tagName,
                label:e.querySelector('.site-share-planet-label')?.textContent,alt:e.querySelector('img')?.getAttribute('alt'),
                loaded:e.querySelector('img')?.naturalWidth>0,tabIndex:e.tabIndex}))};
    })()`);
    assert.equal(result.role, "toolbar");
    assert.equal(result.orientation, "horizontal");
    assert.ok(
        result.label?.trim() && result.hint?.trim(),
        "Orbit has a name and translated gesture instructions",
    );
    assert.equal(result.oldControls, 0, "No arrows, select or separate Share action remain");
    assert.deepEqual(
        result.planets.map(({ id }) => id).toSorted(),
        [...Object.keys(endpoints), "native", "copy"].toSorted(),
    );
    assert.ok(
        result.planets.every(
            ({ id, tag, label, alt, loaded }) =>
                tag === (id in endpoints ? "A" : "BUTTON") && label?.trim() && alt === "" && loaded,
        ),
    );
    assert.equal(
        result.planets.filter(({ tabIndex }) => tabIndex === 0).length,
        1,
        "Only the front planet enters the Tab sequence",
    );
    return result;
}

function assertPayload(id, value, canonical) {
    const target = new URL(value);
    assert.equal(target.origin + target.pathname, endpoints[id]);
    const params = id === "mastodon" ? new URLSearchParams(target.hash.slice(1)) : target.searchParams;
    if (["bluesky", "mastodon", "whatsapp"].includes(id))
        assert.ok(params.get("text")?.endsWith(`\n${canonical}`));
    else if (id === "tumblr") {
        assert.equal(params.get("canonicalUrl"), canonical);
        assert.equal(params.get("content"), canonical);
        assert.equal(params.get("posttype"), "link");
    } else assert.equal(params.get(["facebook", "hackerNews"].includes(id) ? "u" : "url"), canonical);
    if (id === "pinterest") {
        const media = new URL(params.get("media"));
        assert.equal(media.origin, new URL(canonical).origin);
        assert.notEqual(media.pathname, "/");
    }
    assert.ok(!target.href.includes("127.0.0.1") && !target.href.includes("orbit%3D"));
}

async function destinations() {
    await visit("en", 1280, 800);
    const result = await contract(),
        canonical = await evaluate("document.querySelector('link[rel=canonical]').href");
    await inOrder(Object.keys(endpoints), async (id, index) => {
        await rotateTo(id);
        const anchor = await evaluate(
            "(()=>{const e=document.querySelector('.site-share-planet[tabindex=\"0\"]');return{tag:e.tagName,target:e.target,rel:e.rel}})()",
        );
        assert.equal(anchor.tag, "A");
        assert.equal(anchor.target, "_blank");
        assert.ok(
            anchor.rel.split(/\s+/u).includes("noopener") && anchor.rel.split(/\s+/u).includes("noreferrer"),
        );
        const before = await evaluate("__orbitProbe.opened.length");
        await activate(index % 3 === 0 ? "keyboard" : index % 3 === 1 ? "touch" : "mouse");
        await until(
            () => evaluate(`__orbitProbe.opened.length===${before + 1}`),
            `${id} directly opens one composer`,
        );
        const opened = await evaluate("__orbitProbe.opened");
        assert.equal(opened.length, before + 1);
        assertPayload(id, opened.at(-1), canonical);
    });
    const sideIds = await evaluate(
        "[...document.querySelectorAll('a.site-share-planet')].filter(e=>e.tabIndex!==0&&e.getAttribute('aria-hidden')!=='true').slice(0,2).map(e=>e.dataset.service)",
    );
    assert.equal(sideIds.length, 2, "Desktop has directly actionable faded side planets");
    await inOrder(sideIds, async (id, index) => {
        const before = await evaluate(
            "({opened:__orbitProbe.opened.length,position:document.querySelector('.site-share-orbit').dataset.orbitPosition})",
        );
        await activate(index ? "touch" : "mouse", `.site-share-planet[data-service="${id}"]`);
        await until(
            () => evaluate(`__orbitProbe.opened.length===${before.opened + 1}`),
            "A faded side icon shares with one click",
        );
        assertPayload(id, await evaluate("__orbitProbe.opened.at(-1)"), canonical);
        assert.equal(
            await evaluate("document.querySelector('.site-share-orbit').dataset.orbitPosition"),
            before.position,
            "A side click shares directly instead of first rotating it forward",
        );
    });
    return { canonical, ids: result.planets.map(({ id }) => id) };
}

async function wheel(deltaY = 120) {
    const center = await point(".site-share-orbit");
    await send("Input.dispatchMouseEvent", { type: "mouseWheel", deltaX: 0, deltaY, ...center });
    await settle();
    assert.equal(
        await evaluate(
            "Number.isInteger(Number(document.querySelector('.site-share-orbit').dataset.orbitPosition))",
        ),
        true,
        "Wheel idle settles onto a whole planet",
    );
}

async function drag(method) {
    const center = await point(".site-share-orbit");
    const width = await evaluate(
        "document.querySelector('.site-share-orbit').getBoundingClientRect().width*visualViewport.scale",
    );
    const distance = Math.min(width * 0.6, 220),
        start = { x: center.x + distance / 2, y: center.y };
    if (method === "touch")
        await send("Input.dispatchTouchEvent", { type: "touchStart", touchPoints: [start] });
    else {
        await send("Input.dispatchMouseEvent", { type: "mouseMoved", ...start });
        await send("Input.dispatchMouseEvent", {
            type: "mousePressed",
            button: "left",
            buttons: 1,
            clickCount: 1,
            ...start,
        });
    }
    await inOrder([0.25, 0.5, 0.75, 1], async (part) => {
        const position = { x: start.x - distance * part, y: start.y };
        if (method === "touch")
            await send("Input.dispatchTouchEvent", { type: "touchMove", touchPoints: [position] });
        else
            await send("Input.dispatchMouseEvent", {
                type: "mouseMoved",
                button: "left",
                buttons: 1,
                ...position,
            });
    });
    if (method === "touch") await send("Input.dispatchTouchEvent", { type: "touchEnd", touchPoints: [] });
    else
        await send("Input.dispatchMouseEvent", {
            type: "mouseReleased",
            button: "left",
            buttons: 0,
            clickCount: 1,
            x: start.x - distance,
            y: start.y,
        });
    await settle();
}

async function gestures(language) {
    const options = await evaluate(
        "[...document.querySelectorAll('.site-share-planet')].map(e=>e.dataset.service)",
    );
    const before = await probeState();
    await focusFront();
    await key("End");
    assert.equal(await front(), "copy");
    await key(language === "ar" ? "ArrowLeft" : "ArrowRight");
    assert.equal(await front(), options[0], "Keyboard rotation wraps at the final planet");
    await key(language === "ar" ? "ArrowRight" : "ArrowLeft");
    assert.equal(await front(), "copy");
    await key("Home");
    assert.equal(await front(), options[0]);
    assert.equal(
        await evaluate("document.activeElement.dataset.service"),
        options[0],
        "Keyboard rotation focuses the new front planet",
    );
    assert.equal(
        await evaluate(
            "(()=>{const e=document.activeElement,s=getComputedStyle(e);return s.outlineStyle!=='none'&&parseFloat(s.outlineWidth)>0})()",
        ),
        true,
        "Front keyboard focus is visible",
    );
    const seen = new Set([await front()]);
    await inOrder(options, async () => {
        await key(language === "ar" ? "ArrowLeft" : "ArrowRight");
        seen.add(await front());
    });
    assert.deepEqual([...seen].toSorted(), options.toSorted(), "Every planet is reachable cyclically");
    assert.equal(await front(), options[0], "One complete rotation returns to its start");
    const initial = await front();
    await wheel();
    assert.notEqual(await front(), initial, "Mouse wheel rotates the orbit");
    await wheel(75);
    await wheel(-75);
    const afterWheel = await front();
    await drag("mouse");
    assert.notEqual(await front(), afterWheel, "Actual mouse drag rotates planets");
    const afterMouse = await front();
    await drag("touch");
    assert.notEqual(await front(), afterMouse, "Actual touch drag rotates planets");
    assert.equal(
        await probeState(),
        before,
        "Keyboard, wheel and drags never accidentally share or navigate",
    );
}

async function layout(insets, expectedVisible) {
    return evaluate(`(()=>{
        const section=document.querySelector('.site-share'),stage=section.querySelector('.site-share-orbit'),v=visualViewport;
        const planets=[...stage.querySelectorAll('.site-share-planet')],visible=planets.filter(e=>getComputedStyle(e).visibility!=='hidden'&&e.getAttribute('aria-hidden')!=='true');
        const problems=[],safe=${JSON.stringify(insets)},r=stage.getBoundingClientRect(),front=stage.querySelector('[tabindex="0"]');
        if(visible.length!==${expectedVisible})problems.push('Expected ${expectedVisible} visible planets, got '+visible.length);
        if(section.scrollWidth>section.clientWidth+1)problems.push('Sharing section overflows horizontally');
        if(stage.scrollWidth>stage.clientWidth+1&&getComputedStyle(stage).overflowX==='auto')problems.push('Orbit became a horizontal native scroller');
        if(r.left-v.offsetLeft<(safe.left||0)-.75||r.right-v.offsetLeft>v.width-(safe.right||0)+.75)problems.push('Stage crosses physical side safe insets');
        for(const planet of planets){
            const s=getComputedStyle(planet),isVisible=visible.includes(planet);
            if(!isVisible){
                if(planet.getAttribute('aria-hidden')!=='true'||s.visibility!=='hidden'||s.pointerEvents!=='none'||planet.tabIndex!==-1)problems.push(planet.dataset.service+': offstage planet remains interactive');
                continue;
            }
            const icon=planet.querySelector('.site-share-planet-icon'),label=planet.querySelector('.site-share-planet-label');
            const b=planet.getBoundingClientRect(),i=icon.getBoundingClientRect(),l=label.getBoundingClientRect();
            if(b.width<44||b.height<44)problems.push(planet.dataset.service+': target is smaller than 44px');
            if(l.top<i.bottom-.75)problems.push(planet.dataset.service+': name is not below its icon');
            const range=document.createRange();range.selectNodeContents(label);
            for(const text of range.getClientRects())if(text.left<l.left-.75||text.right>l.right+.75||text.top<l.top-.75||text.bottom>l.bottom+.75)problems.push(planet.dataset.service+': name paints outside label');
            if(planet!==front&&Number(s.opacity)>=Number(getComputedStyle(front).opacity))problems.push(planet.dataset.service+': side planet is not faded');
        }
        const footer=document.querySelector('footer');
        if(!footer||!(section.compareDocumentPosition(footer)&Node.DOCUMENT_POSITION_FOLLOWING))problems.push('Orbit is not before the footer');
        return{problems,visible:visible.map(e=>e.dataset.service),stage:{width:r.width,height:r.height}};
    })()`);
}

async function reachable(selector, insets) {
    const value = await evaluate(`(()=>{
        const e=document.querySelector(${JSON.stringify(selector)}),r=e.getBoundingClientRect(),v=visualViewport;
        const hit=document.elementFromPoint(r.left+r.width/2,r.top+r.height/2);
        return{left:r.left-v.offsetLeft,right:r.right-v.offsetLeft,top:r.top-v.offsetTop,bottom:r.bottom-v.offsetTop,
            width:r.width,height:r.height,hit:e.contains(hit),viewport:{width:v.width,height:v.height}};
    })()`);
    assert.ok(value.width >= 43.5 && value.height >= 43.5, "Front planet keeps a 44px target");
    assert.ok(
        value.left >= (insets.left ?? 0) - 0.75 &&
            value.right <= value.viewport.width - (insets.right ?? 0) + 0.75,
        `Side safe insets: ${JSON.stringify(value)}`,
    );
    assert.ok(
        value.top >= (insets.top ?? 0) - 0.75 &&
            value.bottom <= value.viewport.height - (insets.bottom ?? 0) + 0.75,
        `Visible physical viewport: ${JSON.stringify(value)}`,
    );
    assert.equal(value.hit, true, "Front planet has an unobscured actual hit target");
}

async function layoutMatrix() {
    const cases = [
        ["en", 320, 844, 2, { top: 24, bottom: 34 }, 1],
        ["ar", 320, 844, 2, { top: 24, right: 18, bottom: 34, left: 18 }, 1],
        ["ar", 390, 844, 1, { top: 24, right: 18, bottom: 34, left: 18 }, 3],
        ["en", 320, 844, 1, { top: 24, bottom: 34 }, 3],
        ["en", 390, 844, 1, { top: 24, bottom: 34 }, 3],
        ["en", 768, 1024, 1, {}, 5],
        ["en", 1280, 800, 1, {}, 7],
        ["en", 844, 390, 1, { top: 12, right: 44, bottom: 21, left: 44 }, 7],
    ];
    const results = [];
    await inOrder(cases, async ([language, width, height, scale, insets, count]) => {
        evidence.currentProfile = { language, width, height, scale, insets };
        console.log(`Checking planet orbit ${language} ${width}×${height}, text ${scale}.`);
        const motion = width === 1280 ? "no-preference" : "reduce";
        await visit(language, width, height, insets, scale, motion);
        const initial = await layout(insets, count);
        assert.deepEqual(initial.problems, [], `${language} ${width}×${height} text ${scale}`);
        await inOrder(["facebook", "hatena", "odnoklassniki", "native", "copy"], async (id) => {
            await rotateTo(id);
            await reachable('.site-share-planet[tabindex="0"]', insets);
            const current = await layout(insets, count);
            assert.deepEqual(current.problems, [], `${id}: readable orbit names and safe geometry`);
        });
        await gestures(language);
        results.push({ language, width, height, scale, insets, motion, ...initial });
    });
    return results;
}

async function reset(outcome = "success") {
    await evaluate(
        `Object.assign(__orbitProbe,{clipboard:[],native:[],opened:[],allowed:true,outcome:${JSON.stringify(outcome)}})`,
    );
}

async function status(value) {
    await until(
        () => evaluate(`document.querySelector('.site-share-status').textContent===${JSON.stringify(value)}`),
        "Visible sharing status",
    );
}

async function recovery(canonical) {
    await until(
        () =>
            evaluate(
                "!!document.querySelector('.site-share-url')&&document.querySelector('.site-share-status').textContent.trim().length>0",
            ),
        "Honest failure with manual copy fallback",
    );
    const value = await evaluate(
        "(()=>{const e=document.querySelector('.site-share-url');e.focus();return{value:e.value,readOnly:e.readOnly,start:e.selectionStart,end:e.selectionEnd}})()",
    );
    assert.deepEqual(value, { value: canonical, readOnly: true, start: 0, end: canonical.length });
    await rotateTo("facebook");
    await activate();
    await status("");
}

async function pending(id) {
    await rotateTo(id);
    const selector = `.site-share-planet[data-service="${id}"]`;
    await reset("pending");
    await activate();
    assert.equal(
        await evaluate("document.querySelector('.site-share-orbit').getAttribute('aria-busy')"),
        "true",
    );
    assert.equal(await evaluate(`document.querySelector(${JSON.stringify(selector)}).disabled`), true);
    const before = await evaluate("document.querySelector('.site-share-orbit').dataset.orbitPosition");
    await evaluate(`document.querySelector(${JSON.stringify(selector)}).click()`);
    await wheel();
    assert.equal(
        await evaluate("document.querySelector('.site-share-orbit').dataset.orbitPosition"),
        before,
        "Pending sharing prevents rotation",
    );
    await evaluate("__orbitProbe.resolve()");
    await until(
        () => evaluate(`!document.querySelector(${JSON.stringify(selector)}).disabled`),
        "Pending direct share completes",
    );
    assert.equal(
        await evaluate(`__orbitProbe.${id === "native" ? "native" : "clipboard"}.length`),
        1,
        "Repeated activation starts only one pending operation",
    );
}

async function browserActions() {
    await visit();
    const canonical = await evaluate("document.querySelector('link[rel=canonical]').href");
    await rotateTo("copy");
    await reset();
    await activate("keyboard");
    await until(
        () => evaluate("document.querySelector('.site-share-status').textContent.trim().length>0"),
        "Copy success is visible",
    );
    const copied = await evaluate("document.querySelector('.site-share-status').textContent");
    assert.deepEqual(await evaluate("__orbitProbe.clipboard"), [canonical]);
    await reset("failure");
    await activate("touch");
    await recovery(canonical);
    await rotateTo("copy");
    await evaluate("Object.defineProperty(navigator,'clipboard',{configurable:true,value:undefined})");
    await activate();
    await recovery(canonical);
    await visit();
    await rotateTo("native");
    await reset();
    await activate("keyboard");
    await status("");
    const shared = await evaluate("__orbitProbe.native");
    assert.equal(shared.length, 1);
    assert.equal(shared[0].url, canonical);
    assert.ok(shared[0].title.trim());
    await reset("cancel");
    await activate();
    await status("");
    assert.equal(await evaluate("__orbitProbe.native.length"), 1);
    assert.equal(await evaluate("!!document.querySelector('.site-share-url')"), false);
    await reset("failure");
    await activate();
    await recovery(canonical);
    await rotateTo("native");
    await reset();
    await evaluate("__orbitProbe.allowed=false");
    await activate();
    await recovery(canonical);
    assert.deepEqual(await evaluate("__orbitProbe.native"), []);
    await pending("native");
    await pending("copy");
    await evaluate("sessionStorage.setItem('orbit-no-native','yes')");
    await visit();
    assert.equal(
        await evaluate("!!document.querySelector('.site-share-planet[data-service=native]')"),
        false,
    );
    await rotateTo("copy");
    await activate();
    await status(copied);
    await evaluate("sessionStorage.removeItem('orbit-no-native')");
    return {
        clipboard: "direct success/failure/unavailable/manual recovery/pending",
        native: "direct success/cancel/failure/unsupported/pending/absent",
    };
}

function assertNetworkAndErrors() {
    // Only the exact unrelated SDK failure caused by this suite's deliberate block is expected.
    const expected = browserErrors.filter(({ navigation, details }) => {
        const description = details.exception?.description ?? "";
        return (
            /^Error: Failed to load Stripe\.js(?:\n|$)/.test(description) &&
            /\/assets\/TipCheckout-[^/]+\.js$/.test(details.url ?? "") &&
            evidence.blockedRequests.some(
                (request) =>
                    request.navigation === navigation &&
                    request.method === "GET" &&
                    /^https:\/\/js\.stripe\.com\/(?:v3\/?(?:\?.*)?|[a-z]+\/stripe\.js(?:\?.*)?)$/.test(
                        request.url,
                    ),
            )
        );
    });
    assert.deepEqual(
        browserErrors.filter((error) => !expected.includes(error)),
        [],
        "No uncaught orbit or unrelated unexpected exceptions",
    );
    evidence.expectedBlockedSdkErrors = expected.map(({ navigation, details }) => ({
        navigation,
        source: details.url,
    }));
    assert.deepEqual(
        evidence.blockedRequests.filter(({ method }) => !["GET", "HEAD", "OPTIONS"].includes(method)),
        [],
        "No external mutation request is attempted",
    );
    assert.deepEqual(
        session.requests.filter((value) => serviceOrigins.has(new URL(value).origin)),
        [],
        "No social network is contacted",
    );
    assert.equal(evidence.interceptionError, undefined, "Network interception completes without error");
}

try {
    session.setDirectory(output);
    await send("Page.addScriptToEvaluateOnNewDocument", { source: interception });
    await send("Fetch.enable", {
        patterns: ["http://*", "https://*"].map((urlPattern) => ({ urlPattern, requestStage: "Request" })),
    });
    if (phases.includes("--layouts")) evidence.checks.push({ layouts: await layoutMatrix() });
    if (phases.includes("--destinations")) evidence.checks.push({ destinations: await destinations() });
    if (phases.includes("--actions")) evidence.checks.push({ actions: await browserActions() });
    assertNetworkAndErrors();
    const finalHash = createHash("sha256")
        .update(await readFile(join(output, "index.html")))
        .digest("hex");
    assert.equal(
        finalHash,
        evidence.indexSha256,
        "The built artifact stays unchanged throughout verification",
    );
    evidence.status = "PASS";
    console.log(`Checklist planet orbit phases passed: ${phases.join(", ")}.`);
} catch (error) {
    evidence.status = "FAIL";
    evidence.error = error.stack;
    process.exitCode = 1;
    console.error(error.stack);
} finally {
    await session.close();
    evidence.cleanup = session.ownership.cleanup;
    const file = join(session.scratch, "planet-orbit-results.json");
    await writeFile(file, JSON.stringify(evidence, null, 2));
    console.log(`Planet orbit evidence: ${file}`);
}
