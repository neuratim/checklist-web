import type { ReactNode } from "react";
import { PhoneFrame } from "./screens/PhoneFrame";
import { RunScreen } from "./screens/RunScreen";
import { ScheduleScreen } from "./screens/ScheduleScreen";
import { TemplatesScreen } from "./screens/TemplatesScreen";

/** One mockup per step, in the order `dictionary.howItWorks.steps` lists them. */
export const STEP_SCREENS: readonly ReactNode[] = [
    <PhoneFrame key="templates">
        <TemplatesScreen />
    </PhoneFrame>,
    <PhoneFrame key="run">
        <RunScreen />
    </PhoneFrame>,
    <PhoneFrame key="schedule">
        <ScheduleScreen />
    </PhoneFrame>,
];
