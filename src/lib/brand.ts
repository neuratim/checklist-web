import { BRAND_PREFIX_PATTERN } from "../constants/brand";

/**
 * The product name without the "NeuraTiM" prefix — the middle rung of the
 * ladder. Every product's full name carries that prefix (workspace naming
 * rule), so it is what gives way first; a title without it is left alone.
 */
export const shortBrand = (full: string): string => full.replace(BRAND_PREFIX_PATTERN, "");
