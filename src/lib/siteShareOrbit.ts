import { ORBIT_DEPTH } from "../constants/siteShareRoller";
import type { OrbitMetrics } from "../types/siteShareRoller";

export function wrapOrbit(value: number, count: number): number {
    return ((value % count) + count) % count;
}

export function orbitDelta(index: number, offset: number, count: number): number {
    return wrapOrbit(index - offset + count / 2, count) - count / 2;
}

export function orbitMetrics(width: number, fontSize: number): OrbitMetrics {
    const visibleCount =
        width >= fontSize * 46 ? 7 : width >= fontSize * 32 ? 5 : width >= fontSize * 15 ? 3 : 1;
    const spacing = width / (visibleCount === 1 ? 1 : visibleCount + 0.2);
    return {
        cardWidth: Math.max(44, Math.min(fontSize * 8, spacing - 8)),
        fontSize,
        radius: width * 0.43,
        spacing,
        visibleCount,
    };
}

export function orbitPlanet(
    index: number,
    offset: number,
    count: number,
    metrics: OrbitMetrics,
    rtl: boolean,
) {
    const delta = orbitDelta(index, offset, count);
    const edge = (metrics.visibleCount - 1) / 2 + 0.8;
    const visible = Math.abs(delta) < edge;
    const opacity = visible ? Math.cos(((Math.abs(delta) / edge) * Math.PI) / 2) : 0;
    const x = delta * metrics.spacing * (rtl ? -1 : 1);
    const y = ORBIT_DEPTH * Math.sqrt(Math.max(0, 1 - (x / metrics.radius) ** 2));
    const scale = 0.72 + opacity * 0.28;
    return {
        iconStyle: { transform: `scale(${scale})` },
        opacity,
        scale,
        style: {
            opacity,
            transform: `translate3d(calc(-50% + ${x}px), ${y}px, 0)`,
            width: metrics.cardWidth,
            zIndex: Math.round(opacity * 100),
        },
        visible,
        x,
        y,
    };
}
