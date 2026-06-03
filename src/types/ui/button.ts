import { ContentfulEntry } from "../contentful";

export interface ButtonFields {
  buttonText: string;
  buttonLink: string;
  target?: string;
}

export type ButtonEntry = ContentfulEntry<ButtonFields>;