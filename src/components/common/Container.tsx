import React from 'react'

type props = {
    children: React.ReactNode,
    className?: string
}

export default function Container({ children, className = "" }: props) {
    return (
        <div className={`container mx-auto w-full max-w-7xl px-3 ${className}`}>
            {children}
        </div>
    )
}
