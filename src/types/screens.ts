export type RunCaption = "conditional" | "optional" | "requiredNow";

export interface RunItem {
    name: string;
    caption?: RunCaption;
}

/** A tile on the Statistics mockup. The numeral is literal: digits in every locale. */
export interface StatTile {
    readonly labelKey: "finishedRuns" | "inProgress" | "itemsChecked" | "templates";
    readonly value: string;
}
