import { useEffect, useRef, useState } from "react";
import { REDUCED_MOTION_QUERY, REVEAL_THRESHOLD } from "../constants/ui";

/**
 * Whether there is anything to reveal in the first place. Reduced motion and the
 * prerender (no viewport to intersect with) both want the element on screen from
 * the first render, so that is the initial state rather than something an effect
 * switches on a render later.
 */
const startsRevealed = (): boolean =>
    typeof window === "undefined" || window.matchMedia(REDUCED_MOTION_QUERY).matches;

export function useScrollReveal<T extends HTMLElement>() {
    const ref = useRef<T | null>(null);
    const [isVisible, setIsVisible] = useState(startsRevealed);

    useEffect(() => {
        if (isVisible) {
            return;
        }

        const node = ref.current;
        if (!node) {
            return;
        }

        const observer = new IntersectionObserver(
            (entries) => {
                const entry = entries[0];
                if (entry?.isIntersecting) {
                    setIsVisible(true);
                    observer.disconnect();
                }
            },
            { threshold: REVEAL_THRESHOLD },
        );

        observer.observe(node);
        return () => observer.disconnect();
    }, [isVisible]);

    return { isVisible, ref };
}
