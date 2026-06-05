import { ContentfulEntry } from "../contentful";
import { ButtonEntry } from "../ui/button";

export interface Section {
    title: string;
    content?: any;
    image?: any;
    backgroundImage?: any;
    internalName?: string;
    button: ButtonEntry[];
    flexibleContent: any[]
}

export type SectionEntry = ContentfulEntry<Section>;