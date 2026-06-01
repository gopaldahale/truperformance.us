import HeroSectionTyp1 from "@/components/common/HeroSectionTyp1";
import { getPage } from "@/services/page.service"
import { PageEntry } from "@/types/page";

export default async function Home() {
  const page = await getPage('homepage') as PageEntry;
  // const pgdata = JSON.stringify(page, null, 2)
  // console.log('data', page)
  const heroSection = page.fields.flexibleContent?.[0]

  // console.log(heroSection)
  return (
    <>
      <HeroSectionTyp1 section={heroSection} />
    </>
  );
}
