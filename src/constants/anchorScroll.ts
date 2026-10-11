/** Input of the reader's own. Any of them ends the correction on the spot. */
export const ABANDON_EVENTS = ["keydown", "mousedown", "touchstart", "wheel"] as const;

/** How long to keep looking for the target of a hash the page opened at. */
export const INITIAL_RENDER_MS = 4000;

/** Frames at one offset that mean the travel has finished rather than paused. */
export const SETTLED_FRAMES = 3;

/**
 * Hard end to the correction.
 *
 * Long, because what is being waited for is a network. The code-split section
 * that inflates these pages is only fetched once the scroll reveals it, and on
 * a throttled connection it has landed as late as seven seconds after the
 * travel finished. Waiting that long costs nothing: there is no polling behind
 * it, only an observer that stays silent until the page actually moves.
 *
 * Correcting this late is right rather than merely harmless. A reader who has
 * not touched the page is still looking at the heading they asked for, and a
 * section inflating above them takes it off the screen; putting it back is what
 * they would do themselves. Any input of their own cancels the whole thing, so
 * this can only ever act on a page nobody is driving.
 */
export const WATCH_MS = 15000;
