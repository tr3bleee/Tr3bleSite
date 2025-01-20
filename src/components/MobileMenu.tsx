'use client'

import { useState } from 'react'
import Link from 'next/link'

const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div className="md:hidden">
      <button
        onClick={toggleMenu}
        className="text-2xl font-bold focus:outline-none"
        aria-label="Toggle menu"
      >
        ☰
      </button>
      {isOpen && (
        <div className="absolute top-16 right-0 w-full bg-white shadow-md">
          <nav className="flex flex-col items-center py-4">
            <Link href="/" className="w-full text-center py-2 text-xl font-bold hover:bg-purple-100 transition-colors duration-300">
              Home
            </Link>
            <Link href="/blog" className="w-full text-center py-2 text-xl font-bold hover:bg-purple-100 transition-colors duration-300">
              Blog
            </Link>
            <Link href="/about" className="w-full text-center py-2 text-xl font-bold hover:bg-purple-100 transition-colors duration-300">
              About
            </Link>
            <Link href="/skills" className="w-full text-center py-2 text-xl font-bold hover:bg-purple-100 transition-colors duration-300">
              Skills
            </Link>
          </nav>
        </div>
      )}
    </div>
  )
}

export default MobileMenu
