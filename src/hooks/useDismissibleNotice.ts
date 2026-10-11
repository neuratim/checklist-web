import { useCallback, useState } from "react";

import { NOTICE_DISMISSED_VALUE } from "../constants/storage";
import { readStored, writeStored } from "../lib/storage";

/**
 * A notice that can be closed, and stays closed on the next visit.
 *
 * The initial value is read once, lazily, rather than in an effect: an effect
 * would render the notice first and then take it away, which is a flash of
 * something the visitor already said they did not want to see.
 */
export function useDismissibleNotice(storageKey: string) {
    const [isDismissed, setIsDismissed] = useState(() => readStored(storageKey) === NOTICE_DISMISSED_VALUE);

    const dismiss = useCallback(() => {
        setIsDismissed(true);
        writeStored(storageKey, NOTICE_DISMISSED_VALUE);
    }, [storageKey]);

    return { dismiss, isDismissed };
}
