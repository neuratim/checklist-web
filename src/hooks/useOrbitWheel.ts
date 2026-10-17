import { useCallback, useEffect, useRef, useState } from "react";
import { ORBIT_WHEEL_IDLE_MS, ORBIT_WHEEL_PIXELS } from "../constants/siteShareRoller";
import type { OrbitGestureProps } from "../types/siteShareRoller";

export function useOrbitWheel({ disabled, offsetRef, setOffset, stageRef }: OrbitGestureProps) {
    const timer = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);
    const [pending, setPending] = useState(false);
    const stopWheel = useCallback(() => {
        clearTimeout(timer.current);
        setPending(false);
    }, []);

    useEffect(() => {
        const stage = stageRef.current;
        if (!stage) return;
        const handleWheel = (event: WheelEvent) => {
            if (disabled || event.ctrlKey) return;
            const rtl = getComputedStyle(stage).direction === "rtl";
            const delta =
                Math.abs(event.deltaX) > Math.abs(event.deltaY)
                    ? event.deltaX * (rtl ? -1 : 1)
                    : event.deltaY;
            if (!delta) return;
            const unit =
                event.deltaMode === WheelEvent.DOM_DELTA_LINE
                    ? 16
                    : event.deltaMode === WheelEvent.DOM_DELTA_PAGE
                      ? stage.clientWidth
                      : 1;
            event.preventDefault();
            if (stage.contains(document.activeElement)) stage.focus({ preventScroll: true });
            setPending(true);
            setOffset(offsetRef.current + (delta * unit) / ORBIT_WHEEL_PIXELS);
            clearTimeout(timer.current);
            timer.current = setTimeout(() => {
                setOffset(Math.round(offsetRef.current));
                setPending(false);
            }, ORBIT_WHEEL_IDLE_MS);
        };
        stage.addEventListener("wheel", handleWheel, { passive: false });
        return () => {
            clearTimeout(timer.current);
            stage.removeEventListener("wheel", handleWheel);
        };
    }, [disabled, offsetRef, setOffset, stageRef]);

    return { pending, stopWheel };
}
