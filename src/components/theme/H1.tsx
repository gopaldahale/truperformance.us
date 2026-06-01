import React from 'react'
interface H1Props {
    children: React.ReactNode; // ReactNode allows strings, numbers, or other elements
}

export default function H1({ children }: H1Props) {
    const h1Class = `
        text-[var(--primary-txt-color)]
        text-6xl
        font-semibold
        leading-[1.3]
        tracking-[-1.12px]
        capitalize
        mb-3
        whitespace-pre-line
    `.replace(/\s+/g, ' ').trim();
    return (
        <>
            <h1 className={h1Class}>{children}</h1>
        </>
    )
}
