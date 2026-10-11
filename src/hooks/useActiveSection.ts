import { useEffect, useState } from "react";
import { ACTIVE_SECTION_MARKER_RATIO } from "../constants/ui";

export function useActiveSection(hrefs: readonly string[]): string | null {
    const sectionIdsKey = hrefs
        .filter((href) => href.startsWith("#") && href.length > 1)
        .map((href) => href.slice(1))
        .join("\n");
    const [activeSection, setActiveSection] = useState<string | null>(null);

    useEffect(() => {
        const sections = sectionIdsKey
            .split("\n")
            .filter(Boolean)
            .map((id) => document.getElementById(id))
            .filter((section): section is HTMLElement => section !== null);

        let frame = 0;
        const updateActiveSection = () => {
            frame = 0;
            const headerHeight =
                document.querySelector<HTMLElement>("header")?.getBoundingClientRect().height ?? 0;
            const marker = window.scrollY + headerHeight + window.innerHeight * ACTIVE_SECTION_MARKER_RATIO;
            let nextSection: string | null = null;
            let nextSectionTop = Number.NEGATIVE_INFINITY;
            let finalSection: HTMLElement | null = null;
            let finalSectionTop = Number.NEGATIVE_INFINITY;

            for (const section of sections) {
                const sectionTop = section.getBoundingClientRect().top + window.scrollY;
                if (sectionTop > finalSectionTop) {
                    finalSection = section;
                    finalSectionTop = sectionTop;
                }
                if (sectionTop <= marker && sectionTop > nextSectionTop) {
                    nextSection = section.id;
                    nextSectionTop = sectionTop;
                }
            }

            const isAtPageEnd =
                window.scrollY + window.innerHeight >= document.documentElement.scrollHeight - 1;
            if (isAtPageEnd && finalSection) {
                nextSection = finalSection.id;
            }

            setActiveSection((current) => (current === nextSection ? current : nextSection));
        };
        const queueUpdate = () => {
            if (!frame) {
                frame = window.requestAnimationFrame(updateActiveSection);
            }
        };

        // The scroll position is the external system this hook follows, so the first reading has to
        // be taken here. With no sections on the page the update resolves to null on its own, which
        // is why the empty case needs no branch of its own — only the listeners, which would have
        // nothing to report.
        updateActiveSection();

        if (sections.length === 0) {
            return;
        }

        window.addEventListener("resize", queueUpdate);
        window.addEventListener("scroll", queueUpdate, { passive: true });
        return () => {
            window.cancelAnimationFrame(frame);
            window.removeEventListener("resize", queueUpdate);
            window.removeEventListener("scroll", queueUpdate);
        };
    }, [sectionIdsKey]);

    return activeSection;
}
