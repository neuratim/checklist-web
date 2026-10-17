import { useCallback, useEffect, useRef, useState, type KeyboardEvent } from "react";
import { DEFAULT_SHARE_SELECTION, SHARE_SERVICES } from "../constants/siteShare";
import { fitOrbitLabels } from "../lib/fitOrbitLabels";
import { orbitMetrics, wrapOrbit } from "../lib/siteShareOrbit";
import { useOrbitGestures } from "./useOrbitGestures";

export function useSiteShareRoller(count: number, disabled: boolean) {
    const initial = SHARE_SERVICES.findIndex(({ id }) => id === DEFAULT_SHARE_SELECTION);
    const [offset, updateOffset] = useState(initial);
    const offsetRef = useRef(initial);
    const stageRef = useRef<HTMLDivElement>(null);
    const focusFrame = useRef<number | undefined>(undefined);
    const [metrics, setMetrics] = useState(() => orbitMetrics(280, 16));
    const frontIndex = wrapOrbit(Math.round(offset), count);
    const setOffset = useCallback(
        (value: number) => {
            const next = wrapOrbit(value, count);
            offsetRef.current = next;
            updateOffset(next);
        },
        [count],
    );
    const gestures = useOrbitGestures({ disabled, offsetRef, setOffset, spacing: metrics.spacing, stageRef });

    useEffect(() => {
        const stage = stageRef.current;
        if (!stage) return;
        let mounted = true;
        const refresh = () => {
            if (!mounted) return;
            const width = stage.clientWidth;
            const fontSize = Number.parseFloat(getComputedStyle(document.documentElement).fontSize);
            if (!width) return;
            const next = orbitMetrics(width, fontSize);
            setMetrics((previous) =>
                Object.keys(next).every(
                    (key) => next[key as keyof typeof next] === previous[key as keyof typeof previous],
                )
                    ? previous
                    : next,
            );
        };
        const observer = new ResizeObserver(refresh);
        observer.observe(stage);
        void document.fonts.ready.then(refresh);
        refresh();
        return () => {
            mounted = false;
            observer.disconnect();
            if (focusFrame.current !== undefined) cancelAnimationFrame(focusFrame.current);
        };
    }, []);

    useEffect(() => {
        const stage = stageRef.current;
        if (stage?.querySelectorAll(".site-share-planet").length === count) {
            fitOrbitLabels(stage, metrics.cardWidth, metrics.fontSize);
        }
    }, [count, metrics]);

    const handleKeyDown = useCallback(
        (event: KeyboardEvent<HTMLDivElement>) => {
            const stage = stageRef.current;
            if (!stage || disabled) return;
            const rtl = getComputedStyle(stage).direction === "rtl";
            let next = frontIndex;
            if (event.key === "ArrowRight") next += rtl ? -1 : 1;
            else if (event.key === "ArrowLeft") next += rtl ? 1 : -1;
            else if (event.key === "Home") next = 0;
            else if (event.key === "End") next = count - 1;
            else return;
            event.preventDefault();
            setOffset(next);
            if (focusFrame.current !== undefined) cancelAnimationFrame(focusFrame.current);
            focusFrame.current = requestAnimationFrame(() =>
                stage
                    .querySelector<HTMLElement>('.site-share-planet[tabindex="0"]')
                    ?.focus({ preventScroll: true }),
            );
        },
        [count, disabled, frontIndex, setOffset],
    );

    return { ...gestures, frontIndex, handleKeyDown, metrics, offset, stageRef };
}
