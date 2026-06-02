import Container from '../common/Container'
import ButtonTyp1 from '@/components/theme/ButtonTyp1'
import { H1, Para } from '@/components'
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { richTextToPlainText } from "@/lib/contentful-richtext";
import { getAssetUrl } from "@/lib/image"
import { HeroSectionEntry } from "@/types/sections/hero";
import styles from "@/components/css/HeroSectionTyp1.module.css";


type Props = {
    section: HeroSectionEntry;
};

export default function HeroSectionTyp1({ section }: Props) {
    const { title, button, backgroundImageDesktop, backgroundImageMobile } = section.fields;
    const primaryButton = button[0];
    const description = richTextToPlainText(section.fields.description);
    return (
        <section
            className={`py-12 md:py-20 ${styles.heroSection}`}
            style={
                {
                    "--desktop-bg": `url(${getAssetUrl(backgroundImageDesktop)})`,
                    "--mobile-bg": `url(${getAssetUrl(backgroundImageMobile)})`,
                } as React.CSSProperties
            }

        >
            <Container>
                <div className="row">
                    <div className="contentBox w-3/5">
                        <H1>{title}</H1>
                        <Para>{description}</Para>
                        <ButtonTyp1 button={primaryButton} />
                        {/* <ButtonTyp1
                            text={button[0].fields.buttonText}
                            link={button[0].fields.buttonLink}
                            target={button[0].fields.target}
                        /> */}
                    </div>
                </div>
            </Container>
        </section>
    )
}
