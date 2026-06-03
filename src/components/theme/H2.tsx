import React from 'react'
interface H2Props {
    children: React.ReactNode; // ReactNode allows strings, numbers, or other elements
    className?: string;
}

export default function H2({ children, className }: H2Props) {
    const hClass = `
        text-[var(--primary-txt-color)]
        text-5xl
        font-semibold
        leading-[1.3]
        tracking-[-1.12px]
        capitalize
        mb-6 
        ${className}
    `.replace(/\s+/g, ' ').trim();
    return (
        <>
            <h1 className={hClass}>{children}</h1>
        </>
    )
}
