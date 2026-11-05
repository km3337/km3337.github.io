import type { ComponentType } from "react";
import { FlatbushTacticsDemo } from "./FlatbushTacticsDemo";

// Live demo components shown at the top of a case study, in place of the hero image.
// Key is the case study slug, e.g.:
//   import { InstantAdsDemo } from "./InstantAdsDemo";
//   export const DEMOS = { "instant-ads": InstantAdsDemo };
export const DEMOS: Record<string, ComponentType> = {
    "flatbush-tactics": FlatbushTacticsDemo,
};
