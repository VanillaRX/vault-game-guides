import type { ComponentType } from "react";
import Anno1800ProductionGuide from "./anno-1800-production-layouts";
import Anno1800BeginnerGuide from "./anno-1800-beginner-guide";
import Civ6DistrictGuide from "./civ6-district-guide";
import Civ6VictoryGuide from "./civ6-victory-paths";
import RimWorldDefenseGuide from "./rimworld-defense-layout";
import RimWorldMoodGuide from "./rimworld-mood-management";
import FarthestFrontierFarmingGuide from "./farthest-frontier-farming-guide";
import FarthestFrontierDefenseGuide from "./farthest-frontier-defense";
import GoingMedievalCastleGuide from "./going-medieval-castle-guide";
import GoingMedievalProductionGuide from "./going-medieval-production";
import FoundationCityLayout from "./foundation-city-layout";
import FoundationEconomy from "./foundation-economy";

type GuideComponent = ComponentType<{ gameSlug: string; guideSlug: string }>;

const REGISTRY: Record<string, GuideComponent> = {
  "anno-1800-production-layouts": Anno1800ProductionGuide,
  "anno-1800-beginner-guide": Anno1800BeginnerGuide,
  "civilization-6-district-guide": Civ6DistrictGuide,
  "civilization-6-victory-paths": Civ6VictoryGuide,
  "rimworld-defense-layout": RimWorldDefenseGuide,
  "rimworld-mood-management": RimWorldMoodGuide,
  "farthest-frontier-farming-guide": FarthestFrontierFarmingGuide,
  "farthest-frontier-defense-guide": FarthestFrontierDefenseGuide,
  "going-medieval-castle-defense": GoingMedievalCastleGuide,
  "going-medieval-production-chains": GoingMedievalProductionGuide,
  "foundation-city-layout": FoundationCityLayout,
  "foundation-economy-mastery": FoundationEconomy,
};

export function getGuideComponent(gameSlug: string, guideSlug: string): GuideComponent | null {
  return REGISTRY[`${gameSlug}-${guideSlug}`] || null;
}
