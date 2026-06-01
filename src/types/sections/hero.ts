import { ContentfulEntry } from "../contentful";
import { ButtonEntry } from "../ui/button";

export interface HeroSectionFields {
  title: string;
  description?: any;
  backgroundImageDesktop?: any;
  backgroundImageMobile?: any;
  button: ButtonEntry[];
}

export type HeroSectionEntry = ContentfulEntry<HeroSectionFields>;