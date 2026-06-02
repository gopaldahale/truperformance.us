import React from 'react'
import { H2, Para, Container, Card1 } from '@/components'
import { SectionEntry } from '@/types/sections/section'
import { richTextToPlainText } from "@/lib/contentful-richtext";

type Props = {
    section: SectionEntry
}

export default function GridCardSection1({ section }: Props) {
    const { title, content, flexibleContent } = section.fields;

    return (
        <section className='py-12 md:py-20'>
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
