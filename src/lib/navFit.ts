import { BRAND_STAGES, NAV_FIT_SLACK_PX } from "../constants/ui";
import type { BrandStage } from "../types/navigation";

/**
 * How many leading links fit in `available` px. When not everything fits, the
 * more-button width is reserved first so the ellipsis never overflows. A
 * result of 0 means the bar should switch to the hamburger.
 */
export const countFittingLinks = (
    widths: readonly number[],
    available: number,
    linkGap: number,
    moreWidth: number,
): number => {
    if (widths.length === 0) {
        return 0;
    }

    let allWidth = 0;
    for (let index = 0; index < widths.length; index += 1) {
        allWidth += widths[index] ?? 0;
        if (index > 0) {
            allWidth += linkGap;
        }
    }
    if (allWidth <= available) {
        return widths.length;
    }

    const budget = available - moreWidth - linkGap;
    if (budget <= 0) {
        return 0;
    }

    let used = 0;
    let count = 0;
    for (let index = 0; index < widths.length; index += 1) {
        const width = widths[index] ?? 0;
        const next = used === 0 ? width : used + linkGap + width;
        if (next > budget) {
            break;
        }
        used = next;
        count += 1;
    }
    return count;
};

/** The widest brand stage whose width, plus whatever else must stand beside it, fits in `room`. */
export const fittingBrandStage = (
    widthFor: (stage: BrandStage) => number,
    reserved: number,
    room: number,
): BrandStage => BRAND_STAGES.find((stage) => widthFor(stage) + reserved <= room) ?? "icon";

/** The room the row lays out in: its box less its padding and the sub-pixel slack. */
export const navContentWidth = (clientWidth: number, padding: number): number =>
    clientWidth - padding - NAV_FIT_SLACK_PX;
