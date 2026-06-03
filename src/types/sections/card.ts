import { ContentfulEntry } from "../contentful";
import { ButtonEntry } from "../ui/button";

export interface Card {
    internalName?: string;
    logo?: string;
    title?: string;
    content?: string;
    link?: string;
    backgroundImage?: any;
    button?: ButtonEntry[];
}

export type CardEntry = ContentfulEntry<Card>;