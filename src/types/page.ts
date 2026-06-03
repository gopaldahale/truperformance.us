import { ContentfulEntry } from "./contentful";
import { HeroSectionEntry } from "./sections/hero";

export interface PageFields {
  title: string;
  slug: string;

  flexibleContent?: HeroSectionEntry[];
}

export type PageEntry = ContentfulEntry<PageFields>;