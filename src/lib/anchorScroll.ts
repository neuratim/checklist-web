import { ABANDON_EVENTS, INITIAL_RENDER_MS, SETTLED_FRAMES, WATCH_MS } from "../constants/anchorScroll";

/**
 * Makes an in-page anchor land on the section it names — and stay there.
 *
 * The browser resolves `<a href="#privacy">` exactly once. It measures where
 * `#privacy` is at the moment of the click, starts travelling towards that
 * offset, and never looks again. These pages are not finished growing at that
 * moment, and the scroll is itself what makes them grow: passing a section
 * reveals it, a revealed section mounts the code-split half it had been
 * deferring, and an image with no reserved box takes its real height when the
 * bytes land. Every pixel gained *above* the target after that one measurement
 * is a pixel the reader ends up short of it.
 *
 * Nothing in the platform corrects for this. The fragment jump is one-shot, and
 * the browser's own scroll anchoring deliberately stands aside while a
 * programmatic scroll is running. Measured on these sites over a throttled
 * connection, clicking the last menu entry finished between 400 and 1,055 px
 * above the heading it named — the reader arrives inside the section *before*
 * the one they asked for, and has to go looking for it.
 *
 * So the destination is re-measured rather than trusted. Once the travel has
 * settled, the target's real offset is compared with where it ought to be and
 * the difference is taken up in one silent jump — repeatedly, for as long as
 * the page is still moving under it, and never once the reader has taken over,
 * because a page that fights somebody for their own wheel is worse than the bug
 * this fixes.
 */

let installed = false;
let cancelActive: (() => void) | null = null;

/**
 * The element a fragment names, or null when it names something else.
 *
 * Null is the important answer: several of these sites route on the hash rather
 * than scroll to it (`#privacy-policy`, `#try`), and the whole of what keeps
 * this out of their way is that a route names no element. Those clicks are left
 * to the browser, whose `hashchange` is what the routing listens for.
 */
function targetFor(hash: string): HTMLElement | null {
    const raw = hash.startsWith("#") ? hash.slice(1) : hash;
    if (!raw) {
        return null;
    }

    let id = raw;
    try {
        id = decodeURIComponent(raw);
    } catch {
        // A malformed escape is not an id — match the literal text instead.
    }

    return document.getElementById(id) ?? document.getElementsByName(id)[0] ?? null;
}

/**
 * Where the document has to sit for `element` to clear the header.
 *
 * Both of these count, and both are in use here: the platform lines the
 * element's scroll-margin box up with the scrollport's padding edge, and these
 * sites clear their sticky nav with whichever of the two they happened to pick
 * — `scroll-margin-top` on the section in most of them, `scroll-padding-top` on
 * the document in `recordry`, `web-ai` and `web-testers`. Reading only one
 * would land those three with the heading tucked under their own nav bar, which
 * is a different bug of the same shape as the one this file exists for.
 *
 * The result is clamped because a section near the foot of the page cannot be
 * brought any higher than the last scroll position — unclamped, that reads as a
 * miss no amount of correcting could ever close.
 */
function intendedOffset(element: HTMLElement): number {
    const scroller = document.scrollingElement ?? document.documentElement;
    const margin = Number.parseFloat(getComputedStyle(element).scrollMarginTop) || 0;
    const padding = Number.parseFloat(getComputedStyle(scroller).scrollPaddingTop) || 0;
    const wanted = window.scrollY + element.getBoundingClientRect().top - margin - padding;
    const furthest = Math.max(0, document.documentElement.scrollHeight - window.innerHeight);

    return Math.min(Math.max(wanted, 0), furthest);
}

/**
 * Gives the section the focus the fragment jump would have given it.
 *
 * Preventing the default takes that away, and it is not cosmetic: it is what
 * makes the next Tab continue from the section just jumped to rather than from
 * the menu, and what tells a screen reader where it landed. `preventScroll`
 * matters because focusing scrolls, and the scrolling here is ours to do.
 */
function focusWithoutScrolling(element: HTMLElement): void {
    const spelledItsOwn = element.hasAttribute("tabindex");
    if (!spelledItsOwn) {
        element.setAttribute("tabindex", "-1");
    }

    element.focus({ preventScroll: true });

    if (!spelledItsOwn) {
        // -1 is not a tab stop, so this is tidiness rather than a fix — but an
        // attribute this code invented should not outlive the reason for it.
        element.addEventListener("blur", () => element.removeAttribute("tabindex"), { once: true });
    }
}

/** Calls `onTakeover` the first time the reader moves the page themselves. */
function watchForTakeover(onTakeover: () => void): () => void {
    for (const type of ABANDON_EVENTS) {
        window.addEventListener(type, onTakeover, { passive: true });
    }

    return () => {
        for (const type of ABANDON_EVENTS) {
            window.removeEventListener(type, onTakeover);
        }
    };
}

/**
 * Scrolls to `element`, then holds it there while the page finishes arriving.
 *
 * `travel` is how to get there the first time. A click passes `auto`, which
 * hands the choice of gliding or jumping to the stylesheet's own
 * `scroll-behavior` — where these sites already make it, `prefers-reduced-motion`
 * override included, and naming a behaviour here would quietly overrule it. A
 * page *opened* at a fragment passes `instant` instead: the reader asked to
 * start there rather than to be taken there, and the platform does not glide on
 * arrival either.
 */
function pinTo(element: HTMLElement, travel: ScrollBehavior): void {
    cancelActive?.();

    let arrived = false;
    let expiry = 0;
    let frame = 0;
    let observer: ResizeObserver | null = null;
    let previousOffset: number | null = null;
    let release: (() => void) | null = null;
    let settled = 0;

    const stop = () => {
        cancelAnimationFrame(frame);
        clearTimeout(expiry);
        observer?.disconnect();
        release?.();
        cancelActive = null;
    };

    /**
     * Closes whatever gap the page has opened since it was last measured.
     *
     * Only once the travel is over: while it is running the offset is *meant* to
     * be wrong, and correcting mid-glide would cut the animation short.
     */
    const correct = () => {
        if (!arrived) {
            return;
        }

        const wanted = Math.round(intendedOffset(element));
        if (Math.abs(wanted - Math.round(window.scrollY)) > 1) {
            // No second animation: the reader is already here, and gliding from
            // this point reads as the page wandering off on its own.
            window.scrollTo({ behavior: "instant", top: wanted });
        }
    };

    // There is no event for "the smooth scroll has finished", so the only way to
    // know is to watch it — but only until it stops, which is a fraction of a
    // second, rather than for as long as the page might still be loading.
    const step = () => {
        const offset = Math.round(window.scrollY);
        settled = offset === previousOffset ? settled + 1 : 0;
        previousOffset = offset;

        if (settled >= SETTLED_FRAMES) {
            arrived = true;
            correct();
            return;
        }

        frame = requestAnimationFrame(step);
    };

    release = watchForTakeover(stop);
    cancelActive = stop;

    // Everything that lands late — a code-split section mounting, an image
    // finally taking its height — makes the document taller, and the observer
    // says so at the moment it happens. Watching for it by hand would mean
    // forcing layout every frame for the whole time a page might still be
    // loading; this costs nothing until something actually moves.
    observer = new ResizeObserver(correct);
    observer.observe(document.documentElement);

    expiry = window.setTimeout(stop, WATCH_MS);

    window.scrollTo({ behavior: travel, top: intendedOffset(element) });
    frame = requestAnimationFrame(step);
}

function onClick(event: MouseEvent): void {
    if (event.defaultPrevented || event.button !== 0) {
        return;
    }
    if (event.altKey || event.ctrlKey || event.metaKey || event.shiftKey) {
        return;
    }

    const node = event.target;
    if (!(node instanceof Element)) {
        return;
    }

    const anchor = node.closest("a[href]");
    if (!(anchor instanceof HTMLAnchorElement) || anchor.hasAttribute("download")) {
        return;
    }
    if (anchor.target && anchor.target !== "_self") {
        return;
    }

    const href = anchor.getAttribute("href") ?? "";
    if (!href.startsWith("#") || href === "#") {
        return;
    }

    const target = targetFor(href);
    if (!target) {
        return;
    }

    event.preventDefault();

    // `pushState` rather than assigning the hash: assigning it would fire the
    // browser's own jump, which is the thing being replaced. It also leaves
    // `hashchange` unfired, which is what keeps a section link from waking the
    // hash routing these sites do elsewhere.
    if (window.location.hash !== href) {
        window.history.pushState(null, "", href);
    }

    focusWithoutScrolling(target);
    pinTo(target, "auto");
}

/**
 * The same correction for a page opened *at* a fragment.
 *
 * A shared link to `…/#privacy` is the worst version of this: the browser looks
 * for the element while the document is still an empty `<div id="root">`, finds
 * nothing, and gives up — so the reader lands at the top of a page they asked to
 * enter in the middle of. The element turns up a tick later when React renders,
 * which is too late for the platform and early enough for this.
 */
function honourInitialHash(): void {
    const hash = window.location.hash;
    if (!hash || hash === "#") {
        return;
    }

    const deadline = performance.now() + INITIAL_RENDER_MS;
    let takenOver = false;
    const release = watchForTakeover(() => {
        takenOver = true;
    });

    const look = () => {
        if (takenOver) {
            release();
            return;
        }

        const target = targetFor(hash);
        if (target) {
            release();
            focusWithoutScrolling(target);
            pinTo(target, "instant");
            return;
        }

        if (performance.now() > deadline) {
            release();
            return;
        }

        requestAnimationFrame(look);
    };

    requestAnimationFrame(look);
}

/**
 * Installs the correction for the whole document, once.
 *
 * One delegated listener rather than a handler per link, so that every in-page
 * link goes through it — the menu, the skip link, the hero's own buttons, the
 * footer, and whatever is added next. There is no call site to remember, and so
 * none to forget.
 */
export function installAnchorScroll(): void {
    if (installed || typeof window === "undefined") {
        return;
    }
    installed = true;

    document.addEventListener("click", onClick);
    honourInitialHash();
}
