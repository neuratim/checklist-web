import { currentLanguageHref } from "../lib/seoLanguage";
import {
    useCallback,
    useEffect,
    useRef,
    useState,
    type KeyboardEvent as ReactKeyboardEvent,
    type MouseEvent as ReactMouseEvent,
} from "react";
import { LANGUAGE_ICON_PROPS, LANGUAGE_MENU_ID, LANGUAGE_OPTION_SELECTOR } from "../constants/ui";
import { isLanguageCode } from "../i18n/languages";
import { useLanguage } from "../i18n/useLanguage";
import "./LanguageSwitcher.css";

/**
 * A native <select> paints its own popup — OS chrome, its own font, its own width,
 * and a caret at a UA-decided offset that no padding can move. This is the same
 * control built from a button and a menu of radio items, so the closed control and
 * the open panel are one object: same width, same border, edges lined up.
 */
export function LanguageSwitcher() {
    const { dictionary, language, languages, setLanguage } = useLanguage();

    const [isOpen, setIsOpen] = useState(false);

    const listRef = useRef<HTMLDivElement>(null);
    const rootRef = useRef<HTMLDivElement>(null);
    const triggerRef = useRef<HTMLButtonElement>(null);

    const label = dictionary.languageSwitcher.label;
    const currentName = languages.find((meta) => meta.code === language)?.nativeName ?? language;

    const close = useCallback((returnFocus: boolean) => {
        setIsOpen(false);

        if (returnFocus) {
            triggerRef.current?.focus();
        }
    }, []);

    // Opening moves focus onto the selected row, so the list is arrow-navigable the
    // moment it appears and a scrolled list opens showing the current choice.
    useEffect(() => {
        if (!isOpen) {
            return;
        }

        const selected = listRef.current?.querySelector<HTMLElement>("[aria-checked='true']");
        selected?.focus();
        selected?.scrollIntoView({ block: "nearest" });
    }, [isOpen]);

    useEffect(() => {
        if (!isOpen) {
            return;
        }

        // mousedown, not click: the panel must be gone before the press lands, or a
        // click on something underneath is spent closing the panel instead.
        const handlePointerDown = (event: MouseEvent) => {
            const target = event.target as Node | null;

            if (target && rootRef.current?.contains(target)) {
                return;
            }

            setIsOpen(false);
        };

        document.addEventListener("mousedown", handlePointerDown);
        return () => document.removeEventListener("mousedown", handlePointerDown);
    }, [isOpen]);

    const handleToggle = useCallback(() => {
        setIsOpen((open) => !open);
    }, []);

    const handleTriggerKeyDown = useCallback((event: ReactKeyboardEvent<HTMLButtonElement>) => {
        if (event.key === "ArrowDown" || event.key === "ArrowUp") {
            event.preventDefault();
            setIsOpen(true);
        }
    }, []);

    const handleListKeyDown = useCallback(
        (event: ReactKeyboardEvent<HTMLDivElement>) => {
            if (event.key === " " && event.target instanceof HTMLAnchorElement) {
                event.preventDefault();
                event.target.click();
                return;
            }
            if (event.key === "Escape") {
                event.preventDefault();
                close(true);
                return;
            }

            if (event.key === "Tab") {
                close(false);
                return;
            }

            const options = Array.from(
                listRef.current?.querySelectorAll<HTMLElement>(LANGUAGE_OPTION_SELECTOR) ?? [],
            );
            if (options.length === 0) {
                return;
            }

            const index = options.indexOf(document.activeElement as HTMLElement);
            let next: number;

            switch (event.key) {
                case "ArrowDown":
                    next = Math.min(index + 1, options.length - 1);
                    break;
                case "ArrowUp":
                    next = Math.max(index - 1, 0);
                    break;
                case "End":
                    next = options.length - 1;
                    break;
                case "Home":
                    next = 0;
                    break;
                default:
                    return;
            }

            event.preventDefault();
            options[next]?.focus();
            options[next]?.scrollIntoView({ block: "nearest" });
        },
        [close],
    );

    const handleOptionClick = useCallback(
        (event: ReactMouseEvent<HTMLAnchorElement>) => {
            if (event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey)
                return;
            event.preventDefault();
            const code = event.currentTarget.dataset.code;

            if (code && isLanguageCode(code)) {
                setLanguage(code);
            }

            close(true);
        },
        [close, setLanguage],
    );

    return (
        <div className="language-switcher" ref={rootRef}>
            <button
                aria-controls={LANGUAGE_MENU_ID}
                aria-expanded={isOpen}
                aria-haspopup="menu"
                className="language-switcher-trigger"
                onClick={handleToggle}
                onKeyDown={handleTriggerKeyDown}
                ref={triggerRef}
                type="button"
            >
                <span className="sr-only">{label}</span>
                <span className="language-switcher-value">
                    <span className="language-switcher-current">{currentName}</span>
                    {/* Width-only twin of every name: it holds the control at the width of
                        the longest one, so choosing a language never resizes the nav bar
                        and the panel can share that exact width with its borders lined up. */}
                    <span aria-hidden="true" className="language-switcher-sizer">
                        {languages.map((meta) => (
                            <span key={meta.code}>{meta.nativeName}</span>
                        ))}
                    </span>
                </span>
                <svg className="language-switcher-caret" {...LANGUAGE_ICON_PROPS}>
                    <path d="M3.6 7.4 6 9.8l2.4-2.4M3.6 4.6 6 2.2l2.4 2.4" />
                </svg>
            </button>

            {isOpen ? (
                <div
                    aria-label={label}
                    className="language-switcher-list"
                    id={LANGUAGE_MENU_ID}
                    onKeyDown={handleListKeyDown}
                    ref={listRef}
                    role="menu"
                    tabIndex={-1}
                >
                    {languages.map((meta) => (
                        <a
                            aria-checked={meta.code === language}
                            className="language-switcher-option"
                            href={currentLanguageHref(meta.code)}
                            data-code={meta.code}
                            key={meta.code}
                            lang={meta.code}
                            onClick={handleOptionClick}
                            role="menuitemradio"
                            tabIndex={-1}
                        >
                            <span className="language-switcher-option-name">{meta.nativeName}</span>
                            <svg className="language-switcher-check" {...LANGUAGE_ICON_PROPS}>
                                <path d="m2.6 6.3 2.4 2.4 4.4-5.4" />
                            </svg>
                        </a>
                    ))}
                </div>
            ) : null}
        </div>
    );
}
