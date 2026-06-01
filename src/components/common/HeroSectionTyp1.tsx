import Container from '../common/Container'
import ButtonTyp1 from '@/components/theme/ButtonTyp1'
import { H1, Para } from '@/components/theme'
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { richTextToPlainText } from "@/lib/contentful-richtext";
import { HeroSectionEntry } from "@/types/sections/hero";

type Props = {
    section: HeroSectionEntry;
};

export default function HeroSectionTyp1({ section }: Props) {
    const { title, button } = section.fields;
    const description = richTextToPlainText(
        section.fields.description
    );
    return (
        <section className='py-[48px] md:py-[80px]'>
            <Container>
                <div className="row">
                    <div className="contentBox w-3/5">
                        <H1>{title}</H1>
                        <Para>{description}</Para>
                        <ButtonTyp1
                            text={button[0].fields.buttonText}
                            link={button[0].fields.buttonLink}
                            target={button[0].fields.target}
                        />
                    </div>
                </div>
            </Container>
        </section>
    )
}
