import { HeroSectionTyp1, GridCardSection1 } from "@/components";
import { getPage } from "@/services/page.service"
import { PageEntry } from "@/types/page";

export default async function Home() {
  const page = await getPage('homepage') as PageEntry;
  // const pgdata = JSON.stringify(page, null, 2)
  console.log('data', page)
  const heroSection = page.fields.flexibleContent?.[0]
  const gridSection = page.fields.flexibleContent?.[1]
  // const gridSection = page.fields.flexibleContent.find((i) => i.fields.internalName === "Grid section home")
  // console.log(heroSection)
  return (
    <>
      <HeroSectionTyp1 section={heroSection} />
      <GridCardSection1 section={gridSection} />
    </>
  );
}
