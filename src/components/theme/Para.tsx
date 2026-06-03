import React from 'react'
interface paraProps {
    children: React.ReactNode; // ReactNode allows strings, numbers, or other elements
    className?: string
}

export default function Para({ children, className }: paraProps) {
    const paragraphStyle = `
  w-full   
  text-[1.125rem] 
  leading-[1.5] 
  tracking-normal 
  text-[var(--secondary-txt-color)] 
  mb-[2.25rem]
  ${className}
`.replace(/\s+/g, ' ').trim();
    return (
        <p className={paragraphStyle}>
            {children}
        </p>
    )
}
