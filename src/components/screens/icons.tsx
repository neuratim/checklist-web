import type { SVGProps } from "react";

const BASE = {
    fill: "none",
    stroke: "currentColor",
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    strokeWidth: 2,
    viewBox: "0 0 24 24",
};

function Icon(props: SVGProps<SVGSVGElement>) {
    return <svg height={15} width={15} {...BASE} {...props} />;
}

export function SearchIcon(props: SVGProps<SVGSVGElement>) {
    return (
        <Icon {...props}>
            <circle cx="11" cy="11" r="7" />
            <path d="m21 21-4.3-4.3" />
        </Icon>
    );
}

export function SettingsIcon(props: SVGProps<SVGSVGElement>) {
    return (
        <Icon {...props}>
            <circle cx="12" cy="12" r="3" />
            <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
        </Icon>
    );
}

export function PlayIcon(props: SVGProps<SVGSVGElement>) {
    return (
        <Icon fill="currentColor" stroke="none" {...props}>
            <path d="M7 4v16l14-8Z" />
        </Icon>
    );
}

export function AlarmIcon(props: SVGProps<SVGSVGElement>) {
    return (
        <Icon {...props}>
            <circle cx="12" cy="13" r="8" />
            <path d="M12 9v4l3 2" />
            <path d="M5 3 3 5M19 3l2 2" />
        </Icon>
    );
}

export function MenuIcon(props: SVGProps<SVGSVGElement>) {
    return (
        <Icon {...props}>
            <circle cx="12" cy="5" r="1.4" fill="currentColor" stroke="none" />
            <circle cx="12" cy="12" r="1.4" fill="currentColor" stroke="none" />
            <circle cx="12" cy="19" r="1.4" fill="currentColor" stroke="none" />
        </Icon>
    );
}

export function ArchiveIcon(props: SVGProps<SVGSVGElement>) {
    return (
        <Icon {...props}>
            <rect x="3" y="4" width="18" height="4" rx="1" />
            <path d="M5 8v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8" />
            <path d="M10 13h4" />
        </Icon>
    );
}

export function PlusIcon(props: SVGProps<SVGSVGElement>) {
    return (
        <Icon {...props}>
            <path d="M12 5v14M5 12h14" />
        </Icon>
    );
}

export function DragHandleIcon(props: SVGProps<SVGSVGElement>) {
    return (
        <Icon {...props}>
            <path d="M4 8h16M4 12h16M4 16h16" />
        </Icon>
    );
}

export function FlagIcon(props: SVGProps<SVGSVGElement>) {
    return (
        <Icon {...props}>
            <path d="M5 3v18" />
            <path d="M5 4h11l-1.5 3.5L16 11H5" />
        </Icon>
    );
}

export function CheckCircleIcon(props: SVGProps<SVGSVGElement>) {
    return (
        <Icon fill="currentColor" stroke="none" {...props}>
            <path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20Zm-1.2 14.4-4.2-4.2 1.7-1.7 2.5 2.5 5.7-5.7 1.7 1.7Z" />
        </Icon>
    );
}

export function ChecklistIcon(props: SVGProps<SVGSVGElement>) {
    return (
        <Icon {...props}>
            <path d="m3.5 6 1.5 1.5L8 4" />
            <path d="M12 6h9" />
            <path d="m3.5 13 1.5 1.5L8 11" />
            <path d="M12 13h9" />
            <path d="m3.5 20 1.5 1.5L8 18" />
            <path d="M12 20h9" />
        </Icon>
    );
}

export function RuleIcon(props: SVGProps<SVGSVGElement>) {
    return (
        <Icon {...props}>
            <path d="m3.5 6 1.5 1.5L8 4" />
            <path d="M12 6h9" />
            <path d="M4 12v4a2 2 0 0 0 2 2h6" />
            <path d="m10 16 2 2-2 2" />
        </Icon>
    );
}

export function BoltIcon(props: SVGProps<SVGSVGElement>) {
    return (
        <Icon fill="currentColor" stroke="none" {...props}>
            <path d="M13 2 4 14h6l-1 8 9-12h-6Z" />
        </Icon>
    );
}

export function LockIcon(props: SVGProps<SVGSVGElement>) {
    return (
        <Icon {...props}>
            <rect x="4" y="10" width="16" height="11" rx="2.5" />
            <path d="M8 10V7a4 4 0 0 1 8 0v3" />
        </Icon>
    );
}

export function LockOpenIcon(props: SVGProps<SVGSVGElement>) {
    return (
        <Icon {...props}>
            <rect x="4" y="10" width="16" height="11" rx="2.5" />
            <path d="M8 10V7a4 4 0 0 1 7.5-2" />
        </Icon>
    );
}

export function RestoreIcon(props: SVGProps<SVGSVGElement>) {
    return (
        <Icon {...props}>
            <path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8Z" />
            <path d="M14 3v5h5" />
            <path d="M9 15h5l-2-2" />
        </Icon>
    );
}

export function WriteIcon(props: SVGProps<SVGSVGElement>) {
    return (
        <Icon {...props}>
            <path d="M4 6h11M4 11h8M4 16h5" />
            <path d="m20 9-6.5 6.5-3 .8.8-3L17.8 7Z" />
        </Icon>
    );
}

export function BackIcon(props: SVGProps<SVGSVGElement>) {
    return (
        <Icon {...props}>
            <path d="M19 12H5" />
            <path d="m11 18-6-6 6-6" />
        </Icon>
    );
}

export function CloseIcon(props: SVGProps<SVGSVGElement>) {
    return (
        <Icon {...props}>
            <path d="M18 6 6 18M6 6l12 12" />
        </Icon>
    );
}

export function SwapIcon(props: SVGProps<SVGSVGElement>) {
    return (
        <Icon {...props}>
            <path d="M4 8h16l-3-3" />
            <path d="M20 16H4l3 3" />
        </Icon>
    );
}

export function TemplatesIcon(props: SVGProps<SVGSVGElement>) {
    return (
        <Icon {...props}>
            <rect x="3" y="3" width="7" height="7" rx="1.5" />
            <rect x="14" y="3" width="7" height="7" rx="1.5" />
            <rect x="3" y="14" width="7" height="7" rx="1.5" />
            <rect x="14" y="14" width="7" height="7" rx="1.5" />
        </Icon>
    );
}
