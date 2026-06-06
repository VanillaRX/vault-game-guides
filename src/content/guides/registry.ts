import type { ComponentType } from "react";
import Anno1800ProductionGuide from "./anno-1800-production-layouts";
import Anno1800BeginnerGuide from "./anno-1800-beginner-guide";
import Civ6DistrictGuide from "./civ6-district-guide";
import Civ6VictoryGuide from "./civ6-victory-paths";
import RimWorldDefenseGuide from "./rimworld-defense-layout";
import FarthestFrontierFarmingGuide from "./farthest-frontier-farming-guide";
import GoingMedievalCastleGuide from "./going-medieval-castle-guide";
import FoundationCityLayout from "./foundation-city-layout";

type GuideComponent = ComponentType<{ gameSlug: string; guideSlug: string }>;

const REGISTRY: Record<string, GuideComponent> = {
  "anno-1800-production-layouts": Anno1800ProductionGuide,
  "anno-1800-beginner-guide": Anno1800BeginnerGuide,
  "civilization-6-district-guide": Civ6DistrictGuide,
  "civilization-6-victory-paths": Civ6VictoryGuide,
  "rimworld-defense-layout": RimWorldDefenseGuide,
  "farthest-frontier-farming-guide": FarthestFrontierFarmingGuide,
  "going-medieval-castle-defense": GoingMedievalCastleGuide,
  "foundation-city-layout": FoundationCityLayout,
};

export function getGuideComponent(gameSlug: string, guideSlug: string): GuideComponent | null {
  return REGISTRY[`${gameSlug}-${guideSlug}`] || null;
}
