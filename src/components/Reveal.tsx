import { useMemo, type CSSProperties } from "react";
import { useScrollReveal } from "../hooks/useScrollReveal";
import type { RevealProps } from "../types/components";

export function Reveal({ children, className, delayMs }: RevealProps) {
    const { isVisible, ref } = useScrollReveal<HTMLDivElement>();
    const classes = ["reveal", isVisible ? "reveal-visible" : "", className].filter(Boolean).join(" ");
    // Memoized purely for referential stability: the reveal transition restarts
    // if React sees a fresh style object on every scroll-driven re-render.
    const style = useMemo<CSSProperties | undefined>(
        () => (delayMs ? { transitionDelay: `${delayMs}ms` } : undefined),
        [delayMs],
    );

    return (
        <div className={classes} ref={ref} style={style}>
            {children}
        </div>
    );
}
