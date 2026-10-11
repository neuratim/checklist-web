import { FIT_SCALE_PROPERTY } from "../constants/tryApp";
import { useCallback, useLayoutEffect, useMemo, useRef, useState, type CSSProperties } from "react";

/**
 * The largest scale, never above 1:1, at which a `width x height` screen fits
 * inside the element the returned ref is placed on.
 *
 * This is measured rather than written in CSS because CSS cannot produce it. A
 * scale factor is a *number*, and `calc()` will not divide a length by a length
 * to make one — `clamp(0.62, (100dvh - 19rem) / 844, 1)` reads like it does, but
 * the middle term is a length, so the whole custom property is invalid at
 * computed-value time. Nothing warns: the transform is dropped and the frame
 * silently renders at full size, overflowing the window.
 *
 * The measured element must not be sized by what it contains, or this feeds back
 * on itself. `TryApp.css` gives it `flex: 1 1 0` and takes the frame out of flow,
 * so what is measured is the room left over, which is exactly the question.
 */
export function useFitScale(width: number, height: number) {
    const ref = useRef<HTMLDivElement>(null);
    const [scale, setScale] = useState(1);

    const measure = useCallback(() => {
        const box = ref.current;
        if (!box) {
            return;
        }

        const bounds = box.getBoundingClientRect();
        if (bounds.width > 0 && bounds.height > 0) {
            setScale(Math.min(bounds.width / width, bounds.height / height, 1));
        }
    }, [height, width]);

    useLayoutEffect(() => {
        measure();

        if (typeof ResizeObserver === "undefined") {
            window.addEventListener("resize", measure);
            return () => window.removeEventListener("resize", measure);
        }

        const observer = new ResizeObserver(measure);
        if (ref.current) {
            observer.observe(ref.current);
        }
        return () => observer.disconnect();
    }, [measure]);

    // Handed back ready to spread onto the measured element. Built here rather
    // than at the call site so the object is stable between renders — a fresh
    // one every render is a prop that always differs, which is what
    // `react-perf/jsx-no-new-object-as-prop` is pointing at.
    const style = useMemo(() => ({ [FIT_SCALE_PROPERTY]: scale }) as CSSProperties, [scale]);

    return { ref, scale, style };
}
