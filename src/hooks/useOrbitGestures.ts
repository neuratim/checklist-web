import { useCallback, useRef, useState, type DragEvent, type PointerEvent } from "react";
import { ORBIT_DRAG_THRESHOLD } from "../constants/siteShareRoller";
import type { OrbitDrag, OrbitGestureProps } from "../types/siteShareRoller";
import { useOrbitWheel } from "./useOrbitWheel";

export function useOrbitGestures(props: OrbitGestureProps) {
    const { disabled, offsetRef, setOffset, spacing, stageRef } = props;
    const drag = useRef<OrbitDrag | null>(null);
    const ignoreClick = useRef(false);
    const [isDragging, setDragging] = useState(false);
    const { pending, stopWheel } = useOrbitWheel(props);

    const handlePointerDown = useCallback(
        (event: PointerEvent<HTMLDivElement>) => {
            if (disabled || event.button !== 0) return;
            stopWheel();
            ignoreClick.current = false;
            drag.current = { moved: false, offset: offsetRef.current, x: event.clientX, y: event.clientY };
        },
        [disabled, offsetRef, stopWheel],
    );

    const handlePointerMove = useCallback(
        (event: PointerEvent<HTMLDivElement>) => {
            const start = drag.current;
            if (!start || disabled) return;
            if (event.pointerType === "mouse" && event.buttons === 0) {
                drag.current = null;
                setDragging(false);
                return;
            }
            const dx = event.clientX - start.x;
            const dy = event.clientY - start.y;
            if (!start.moved && (Math.abs(dx) < ORBIT_DRAG_THRESHOLD || Math.abs(dy) > Math.abs(dx))) return;
            start.moved = true;
            ignoreClick.current = true;
            event.currentTarget.setPointerCapture(event.pointerId);
            event.preventDefault();
            setDragging(true);
            const rtl = getComputedStyle(event.currentTarget).direction === "rtl";
            setOffset(start.offset - (dx / spacing) * (rtl ? -1 : 1));
        },
        [disabled, setOffset, spacing],
    );

    const handlePointerEnd = useCallback(
        (event: PointerEvent<HTMLDivElement>) => {
            const start = drag.current;
            drag.current = null;
            if (start?.moved) {
                setOffset(Math.round(offsetRef.current));
                stageRef.current?.focus({ preventScroll: true });
            }
            setDragging(false);
            if (event.currentTarget.hasPointerCapture(event.pointerId))
                event.currentTarget.releasePointerCapture(event.pointerId);
        },
        [offsetRef, setOffset, stageRef],
    );

    const handleDragStart = useCallback((event: DragEvent<HTMLDivElement>) => event.preventDefault(), []);
    const shouldIgnoreClick = useCallback(() => ignoreClick.current, []);

    return {
        handleDragStart,
        handlePointerDown,
        handlePointerEnd,
        handlePointerMove,
        shouldIgnoreClick,
        isDragging,
        settled: !isDragging && !pending,
        stopWheel,
    };
}
