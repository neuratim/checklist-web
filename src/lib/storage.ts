/**
 * `localStorage` behind the try/catch that every access to it needs.
 *
 * Reading a key looks total and is not. Safari throws a `SecurityError` on the
 * *property access itself* when the visitor has "Block all cookies" on, or when
 * the page is inside a third-party frame that Intelligent Tracking Prevention
 * has partitioned away from its storage — and it throws on `setItem` again when
 * a private window's quota is zero. Chrome returns `null` in the same
 * situations, so a bare `window.localStorage.getItem(...)` is code that works
 * everywhere it is developed and fails only where it is used.
 *
 * A throw here is not a small thing: these accesses run inside the initial
 * render, so an uncaught one takes the whole page down and leaves the visitor
 * with an empty `<div id="root">`. Forgetting a preference is the right way to
 * fail — the site comes up, in its default language, and nothing else is lost.
 *
 * Every read and write of persisted state on this site goes through these two,
 * so there is no call site left to remember the wrapping at.
 */

/** The stored value, or `null` when there is none *or* storage is unreachable. */
export function readStored(key: string): string | null {
    try {
        return window.localStorage.getItem(key);
    } catch {
        return null;
    }
}

/** Stores `value`, reporting whether it will still be there next time. */
export function writeStored(key: string, value: string): boolean {
    try {
        window.localStorage.setItem(key, value);
        return true;
    } catch {
        return false;
    }
}
