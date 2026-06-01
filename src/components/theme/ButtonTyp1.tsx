import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

export default function ButtonTyp1({ text = "Click Me", link = "/", target = "_self" }) {
    const btnClass = `relative
        inline-flex
        justify-center
        items-center
        gap-2
        px-4
        py-2
        rounded-[50px]
        bg-transparent
        no-underline
        z-[1]
        font-[var(--font-montserrat)]
        font-[600]
        text-[18px]
        leading-[1.5]
        tracking-normal
        transition-all
        duration-300`
    const pseudoBefore = `
                before:content-[''] 
                before:absolute 
                before:left-0 
                before:top-1/2 
                before:-translate-y-1/2 
                before:h-full 
                before:w-[43px] 
                before:rounded-[50px] 
                before:bg-[var(--orange-theme)]  
                before:z-[-1] 
                before:transition-all 
                before:duration-300
                hover:before:w-full`;
    const finalClassBtn = `${btnClass + pseudoBefore}`.replace(/\s+/g, ' ').trim()

    return (
        <>
            <Link className={finalClassBtn} href={link} target={target}>
                <span>{text}</span>
                <FontAwesomeIcon className='text-[14px]' icon={faArrowRight} />
            </Link>
        </>
    )
}
