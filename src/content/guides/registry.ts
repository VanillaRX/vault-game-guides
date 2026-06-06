import type { ComponentType } from "react";
import Anno1800ProductionGuide from "./anno-1800-production-layouts";
import Anno1800BeginnerGuide from "./anno-1800-beginner-guide";
import Civ6DistrictGuide from "./civ6-district-guide";
import Civ6VictoryGuide from "./civ6-victory-paths";
import RimWorldDefenseGuide from "./rimworld-defense-layout";

type GuideComponent = ComponentType<{ gameSlug: string; guideSlug: string }>;

const REGISTRY: Record<string, GuideComponent> = {
  "anno-1800-production-layouts": Anno1800ProductionGuide,
  "anno-1800-beginner-guide": Anno1800BeginnerGuide,
  "civilization-6-district-guide": Civ6DistrictGuide,
  "civilization-6-victory-paths": Civ6VictoryGuide,
  "rimworld-defense-layout": RimWorldDefenseGuide,
};

export function getGuideComponent(gameSlug: string, guideSlug: string): GuideComponent | null {
  return REGISTRY[`${gameSlug}-${guideSlug}`] || null;
}
