/** The viewport handed to the embedded app: the narrowest phone it targets. */
export const SCREEN_HEIGHT = 844;
export const SCREEN_WIDTH = 390;

/**
 * The iframe `load` event only signals that the document and its scripts have
 * downloaded — not that the embedded Flutter app has bootstrapped and painted.
 * Since the iframe is cross-origin we cannot observe its first frame directly,
 * so we hold the overlay for a short grace period after `load` to cover the
 * bootstrap gap. If the app ever posts a `checklist-app:ready` message we clear
 * the overlay immediately, upgrading this heuristic to a precise handshake.
 */
export const BOOTSTRAP_GRACE_MS = 1200;
export const READY_MESSAGE = "checklist-app:ready";

/**
 * `allow-same-origin` keeps the frame on the app's origin instead of forcing it into
 * an opaque origin, which the embedded Flutter app needs for localStorage and
 * IndexedDB. That origin is different from this page's, so it grants the
 * frame no access to this document. Top-level navigation, pointer lock and
 * downloads stay blocked by omission.
 */
export const IFRAME_SANDBOX = "allow-forms allow-modals allow-popups allow-same-origin allow-scripts";

/** The CSS custom property `useFitScale` writes and `TryApp.css` reads. */
export const FIT_SCALE_PROPERTY = "--try-scale";
