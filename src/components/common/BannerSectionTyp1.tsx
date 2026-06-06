import React from 'react'
import { Container, ButtonTyp1 } from '@/components'
import { SectionEntry } from '@/types/sections/section'
import { getAssetUrl } from '@/lib/image'

type Props = {
    section: SectionEntry
}

export default function BannerSectionTyp1({ section }: Props) {
    const { title, content, flexibleContent, backgroundImage, image, } = section.fields

    const btn = flexibleContent?.find( (item) => item.fields.internalName === 'Button' )

    const mediaImg = image ? getAssetUrl(image) : ''
    const mediaImgType = image?.fields?.file?.contentType

    const mediaBgImg = backgroundImage ? getAssetUrl(backgroundImage) : ''
    const mediaBgType = backgroundImage?.fields?.file?.contentType

    return (
        <section
            className="py-12 md:py-20 relative z-0"
            style={
                mediaBgType?.startsWith('image/')
                    ? {
                        backgroundImage: `url(${mediaBgImg})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                    }
                    : undefined
            }
        >
            {mediaBgType?.startsWith('video/') && mediaBgImg && (
                <video
                    className="absolute inset-0 z-[-1] h-full w-full object-cover"
                    autoPlay
                    muted
                    loop
                    playsInline
                    preload="metadata"
                >
                    <source src={mediaBgImg} type={mediaBgType} />
                </video>
            )}

            <Container>
                <div className="row relative z-10 flex gap-6 items-center">
                    <div className="contentBox w-3/5">
                        <h2 className="secondaryhead">{title}</h2>

                        <div className="paragl">
                            {typeof content === 'string' ? content : ''}
                        </div>

                        {btn && <ButtonTyp1 button={btn} />}
                    </div>

                    {mediaImgType?.startsWith('image/') && mediaImg && (
                        <img
                            src={mediaImg}
                            alt={image?.fields?.description || title}
                            className="max-w-full w-2/5 h-auto mt-8"
                        />
                    )}
                </div>
            </Container>
        </section>
    )
}