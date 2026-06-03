import React from 'react'
interface H1Props {
    children: React.ReactNode; // ReactNode allows strings, numbers, or other elements
    className?: string
}

export default function H1({ children, className }: H1Props) {
    const h1Class = `
        text-[var(--primary-txt-color)]
        text-6xl
        font-semibold
        leading-[1.3]
        tracking-[-1.12px]
        capitalize
        mb-3 
        ${className}
    `.replace(/\s+/g, ' ').trim();
    return (
        <>
            <h1 className={h1Class}>{children}</h1>
        </>
    )
}
