'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'

const navLinks = [
  { label: 'Home', href: '#hero' },
  { label: 'Work', href: '#projects' },
  { label: 'About', href: '#about' },
  { label: 'Resume', href: 'https://drive.google.com/file/d/1xGPT98DkSS4AAb-zZ5JelQWa-HpFt5eA/view?usp=sharing' },
]

export default function Navbar() {
  const [activeSection, setActiveSection] = useState('hero')
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)

      const sections = ['hero', 'projects', 'about', 'carousel', 'footer']
      for (const id of sections.reverse()) {
        const el = document.getElementById(id)
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActiveSection(id === 'carousel' ? 'about' : id)
          break
        }
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav
      className={`fixed top-5 left-1/2 z-100 flex -translate-x-1/2 items-center gap-1.5 whitespace-nowrap rounded-full border border-[#e8e6e0] px-4 py-2.5 backdrop-blur-2xl transition-[box-shadow,background] duration-300 ${
        scrolled
          ? 'bg-white/90 shadow-[0_8px_32px_rgba(0,0,0,0.10)]'
          : 'bg-white/85 shadow-[0_4px_24px_rgba(0,0,0,0.06)]'
      }`}
    >
      <div className="ml-1.5 flex items-center gap-0.5">
        {navLinks.map((link) => {
          const sectionId = link.href.replace('#', '')
          const isActive = activeSection === sectionId

          return (
            <Link
              key={link.href}
              href={link.href}
              target={link.href.startsWith('https') ? '_blank' : undefined}
              className={`rounded-full px-3.5 py-1.5 font-sans text-[13px] font-medium no-underline transition-all ${
                isActive
                  ? 'bg-[#0d0d0d] text-white'
                  : 'bg-transparent text-[#5c5a54]'
              }`}
            >
              {link.label}
            </Link>
          )
        })}
      </div>
    </nav>
  )
}
