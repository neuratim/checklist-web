import type { StatTile } from "../types/screens";

/** Chrome of the phone mockups. A clock face and dots, not copy. */
export const PHONE_TIME = "9:41";
export const PHONE_STATUS_ICONS = "•••";

/** The Statistics mockup's numerals: literal, because they are digits in every locale. */
export const STAT_TILES: readonly StatTile[] = [
    { labelKey: "templates", value: "6" },
    { labelKey: "finishedRuns", value: "34" },
    { labelKey: "inProgress", value: "2" },
    { labelKey: "itemsChecked", value: "281" },
];

/** The Checklists mockup: progress on the run in flight, and how many runs are in flight. */
export const CHECKLISTS_PROGRESS = "3/5";
export const CHECKLISTS_IN_PROGRESS_COUNT = "1";

export const CHECK_MARK = "✓";
