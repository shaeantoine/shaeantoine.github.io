import type { ComponentType } from "react";
import { AtlasDesign } from "@/components/designs/atlas/AtlasDesign";
import { TerrainDesign } from "@/components/designs/terrain/TerrainDesign";
import { ConstellationDesign } from "@/components/designs/constellation/ConstellationDesign";
import { FieldGuideDesign } from "@/components/designs/field-guide/FieldGuideDesign";

export type DesignMeta = {
  slug: string;
  name: string;
  tradition: string;
  pitch: string;
  swatch: string;
  Component: ComponentType;
};

export const designs: DesignMeta[] = [
  {
    slug: "atlas",
    name: "Atlas",
    tradition: "Cartographic · Aspirational",
    pitch:
      "Opportunity as territory. Parchment and ink-blue, a map of where students might thrive.",
    swatch: "#e8dcc4",
    Component: AtlasDesign,
  },
  {
    slug: "field-guide",
    name: "Field Guide",
    tradition: "Naturalist's plate · Working",
    pitch:
      "Learners as specimens. Linen ivory with prussian blue, dusty rose, and sage — a working naturalist's record of how a student grows.",
    swatch: "#f4ede0",
    Component: FieldGuideDesign,
  },
  {
    slug: "terrain",
    name: "Terrain",
    tradition: "Topographic · Surveyed",
    pitch:
      "Mastery as elevation. Sage and forest-green with deep teal contour lines, a topographic survey of how deep a learner goes.",
    swatch: "#e8eee5",
    Component: TerrainDesign,
  },
  {
    slug: "constellation",
    name: "Constellation",
    tradition: "Celestial · Mythopoetic",
    pitch:
      "Capability as constellation. Midnight indigo and pale gold, a star chart of what every learner steers by.",
    swatch: "#0d1330",
    Component: ConstellationDesign,
  },
];

export function getDesign(slug: string): DesignMeta | undefined {
  return designs.find((d) => d.slug === slug);
}
