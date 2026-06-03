// src/services/page.service.ts

import { client } from "@/lib/contentful";
import { ContentfulEntry } from "@/types/contentful";


export async function getPage(slug: string) {
  const response = await client.getEntries({
    content_type: "page",
    "fields.slug": slug,
    include: 10,
    limit:1
  });

  return response.items[0] as ContentfulEntry<PageFields>;
}