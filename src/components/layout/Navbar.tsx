'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'
import { Phone, Menu, X } from 'lucide-react'

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'Precious Metals IRA', href: '/precious-metals-ira' },
  { label: 'Home Delivery', href: '/home-delivery' },
  { label: 'Products', href: '/products' },
  { label: 'News', href: '/news' },
  { label: 'About Us', href: '/about' },
]

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()
  // Pages with a full-bleed hero where the nav overlays
  const heroPages = ['/', '/precious-metals-ira', '/home-delivery', '/about', '/news', '/products']
  const hasHero = heroPages.includes(pathname)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Transparent + white text over hero; solid white + dark text when scrolled or no hero
  const isTransparent = hasHero && !scrolled
  const textColor = isTransparent ? 'text-white' : 'text-[#3B3B3B]'
  const hoverColor = 'hover:text-brand-gold'

  return (
    <nav className={`transition-colors duration-300 ${isTransparent ? 'bg-transparent' : 'bg-white shadow-sm'}`}>
      <div className="container-xl">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <Image
              src="/images/logo.png"
              alt="Diversify Gold"
              width={220}
              height={48}
              className="h-12 lg:h-14 w-auto object-contain"
              priority
            />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`nav-link ${textColor} ${hoverColor} py-2 px-3`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* CTA Phone */}
          <a
            href="tel:+18667614262"
            className="hidden lg:flex items-center gap-2 btn-outline-gold text-sm py-2.5 px-5"
          >
            <Phone className="w-4 h-4" />
            (866) 761-4262
          </a>

          {/* Mobile Hamburger */}
          <button
            className={`lg:hidden ${textColor} p-2`}
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-brand-card border-t border-white/10">
          <div className="container-xl py-4 flex flex-col gap-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="block text-white hover:text-brand-gold font-bold text-sm tracking-wider uppercase py-3 border-b border-white/10"
              >
                {link.label}
              </Link>
            ))}
            <a
              href="tel:+18667614262"
              className="flex items-center justify-center gap-2 border border-brand-gold text-brand-gold font-bold text-sm py-3 px-4 rounded-lg mt-2"
            >
              <Phone className="w-4 h-4" />
              (866) 761-4262
            </a>
          </div>
        </div>
      )}
    </nav>
  )
}
