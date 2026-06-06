export const dynamic = "force-dynamic"; // Always fetch fresh data; bypass Next.js route cache
// export const revalidate = 60; // Regenerate cached page every 60 seconds (ISR)

import { HeroSectionTyp1, GridCardSection1, BannerSectionTyp1 } from "@/components";
import { getPage } from "@/services/page.service"
import { PageEntry } from "@/types/page";
import { HeroSectionEntry } from "@/types/sections/hero";
import { SectionEntry } from "@/types/sections/section";

export default async function Home() {
  const page = await getPage('homepage');
  // const pgdata = JSON.stringify(page, null, 2)
  console.log('data', page)
  const heroSection = page.fields.flexibleContent?.[0] as HeroSectionEntry
  const gridSection = page.fields.flexibleContent?.find((s) => s.fields.internalName === 'Grid section home') as SectionEntry
  const bannerSection = page.fields.flexibleContent?.find((s) => s.fields.internalName === 'Build Your Growth Journey') as SectionEntry
  // const bannerSection = page.fields.flexibleContent?.[2] as SectionEntry
  // console.log(heroSection)
  return (
    <>
      <HeroSectionTyp1 section={heroSection} />
      <GridCardSection1 section={gridSection} />
      <BannerSectionTyp1 section={bannerSection} />
    </>
  );
}
