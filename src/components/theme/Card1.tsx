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
            <div className={`p-8.75 bg-[#FFFFFF] rounded-[10px] border border-transparent box-border relative transition duration-0 overflow-hidden ${styles.card1}`}>
                {link && <a className="" href={link} target=""></a>}
                <div className="relative size-21 mb-4 z-1">
                    <Image
                        height={80}
                        width={80}
                        className={`${styles.card1}`}
                        style={{ 'height': `80px`, 'width': `80px` }}
                        src={src} alt="" unoptimized />
                </div>
                <h3 className="text-[#191B1F)] text-[34px] font-medium leading-[1.3] capitalize tracking-[-0.56px] mb-[15px] transition-all duration-300 z-[3] relative">{title}</h3>
                <p className="text-[#7A7A7A] text-base font-normal leading-normal mb-0 transition-all duration-300">{desc}</p>
            </div>
        </>
    )
}
