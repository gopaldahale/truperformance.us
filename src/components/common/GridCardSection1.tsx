import React from 'react'
import { H2, Para, Container, Card1 } from '@/components'
import { SectionEntry } from '@/types/sections/section'
import { richTextToPlainText } from "@/lib/contentful-richtext";
import styles from "@/components/css/GridCardSection1.module.css";
import { getAssetUrl } from "@/lib/image"


type Props = {
    section: SectionEntry
}

export default function GridCardSection1({ section }: Props) {
    const { title, content, flexibleContent, backgroundImage } = section.fields;

    return (
        <section className={`py-12 md:py-20 ${styles.gridSec}`}
            style={
                {
                    "--desktop-bg": `url(${getAssetUrl(backgroundImage)})`, 
                } as React.CSSProperties
            }
        >
            <Container>
                <div className="row">
                    <div className="contentBox">
                        <H2>{title}</H2>
                        <Para>{content}</Para>
                    </div>
                    <div className="grid">
                        {flexibleContent?.map((item: any, index: number) => (
                            <Card1 key={index} data={item} />
                        ))}
                    </div>

                </div>

            </Container>

        </section>
    )
}
