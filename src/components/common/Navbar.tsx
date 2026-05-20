import React from 'react'

export default function Navbar() {
    return (
        <nav className="border-b">
            <div className="mx-auto max-w-7xl px-4 py-4 flex items-center justify-between">
                <h2 className="font-bold">Logo</h2>

                <div className="flex gap-6">
                    <a href="/">Home</a>
                    <a href="/about">About</a>
                    <a href="/blogs">Blogs</a>
                    <a href="/contact">Contact</a>
                </div>
            </div>
        </nav>
    );
}