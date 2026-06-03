import Image from "next/image";
import styles from '@/components/css/Card1.module.css'
import { CardEntry } from '@/types/sections/card'
import { richTextToPlainText } from "@/lib/contentful-richtext";
import { getAssetUrl } from "@/lib/image"


type Props = {
    data: CardEntry
}

export default function Card1({ data }: Props) {
    const { content, link, logo, title } = data.fields
    const desc = richTextToPlainText(content);
    // console.log('src', logo)
    const src = getAssetUrl(logo) ?? '';
    return (
        <>
            <div className="">
                {link && <a className="" href={link} target=""></a>}
                <div className="">
                    <Image
                        height={80}
                        width={80}
                        className={`${styles.card1}`}
                        style={{ 'height': `80px`, 'width': `80px` }}
                        src={src} alt="" unoptimized />
                </div>
                <h3>{title}</h3>
                <p>{desc}</p>
            </div>
        </>
    )
}
