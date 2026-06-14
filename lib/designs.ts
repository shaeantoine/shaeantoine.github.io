import type { ComponentType } from "react";
import { ManifestoDesign } from "@/components/designs/manifesto/ManifestoDesign";

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
    slug: "manifesto",
    name: "Manifesto",
    tradition: "Editorial · Long-form",
    pitch:
      "H4 as a thesis. Cream paper, deep ink, heavy serifs. Reads like a piece in The Atlantic.",
    swatch: "#f5f0e6",
    Component: ManifestoDesign,
  },
];

export function getDesign(slug: string): DesignMeta | undefined {
  return designs.find((d) => d.slug === slug);
}
