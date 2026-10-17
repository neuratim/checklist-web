import type { RefObject } from "react";
import type { ShareSelection, SiteShareData } from "./siteShare.ts";

export interface SiteShareRollerCopy {
    hint: string;
}

export interface SiteShareRollerProps {
    copyLabel: string;
    data: SiteShareData;
    disabled: boolean;
    label: string;
    nativeAvailable: boolean;
    nativeLabel: string;
    onActivate: (selection: ShareSelection) => boolean;
}

export interface OrbitMetrics {
    cardWidth: number;
    fontSize: number;
    radius: number;
    spacing: number;
    visibleCount: number;
}

export interface OrbitDrag {
    moved: boolean;
    offset: number;
    x: number;
    y: number;
}

export interface OrbitGestureProps {
    disabled: boolean;
    offsetRef: RefObject<number>;
    setOffset: (offset: number) => void;
    spacing: number;
    stageRef: RefObject<HTMLDivElement | null>;
}
