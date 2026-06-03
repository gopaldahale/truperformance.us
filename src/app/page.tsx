import { HeroSectionTyp1, GridCardSection1 } from "@/components";
import { getPage } from "@/services/page.service"
import { PageEntry } from "@/types/page";
import { HeroSectionEntry } from "@/types/sections/hero";
import { SectionEntry } from "@/types/sections/section";

export default async function Home() {
  const page = await getPage('homepage');
  // const pgdata = JSON.stringify(page, null, 2)
  console.log('data', page)
  const heroSection = page.fields.flexibleContent?.[0] as HeroSectionEntry
  const gridSection = page.fields.flexibleContent?.[1] as SectionEntry
  // const gridSection = page.fields.flexibleContent.find((i) => i.fields.internalName === "Grid section home")
  // console.log(heroSection)
  return (
    <>
      <HeroSectionTyp1 section={heroSection} />
      <GridCardSection1 section={gridSection} />
    </>
  );
}
