'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'
import { Phone, Menu, X, ChevronDown } from 'lucide-react'

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'Precious Metals IRA', href: '/precious-metals-ira' },
  { label: 'Home Delivery', href: '/home-delivery' },
  { label: 'Products', href: '/products' },
  { label: 'News', href: '/news' },
  {
    label: 'About Us',
    href: '/about',
    children: [
      { label: 'Our Story', href: '/about' },
      { label: 'Our Team', href: '/about/team' },
      { label: 'Testimonials', href: '/about/testimonials' },
    ],
  },
]

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()
  const isHome = pathname === '/'

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Inner pages always use black text; homepage uses white when not scrolled
  const textColor = isHome && !scrolled ? 'text-white' : 'text-[#3B3B3B]'
  const hoverColor = 'hover:text-brand-gold'

  return (
    <nav className={`transition-colors duration-300 ${isHome && !scrolled ? 'bg-transparent' : 'bg-white'}`}>
      <div className="container-xl">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <Image
              src="/images/logo.png"
              alt="Diversify Gold"
              width={182}
              height={40}
              className="h-10 w-auto object-contain"
              priority
            />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) =>
              link.children ? (
                <div
                  key={link.label}
                  className="relative"
                  onMouseEnter={() => setOpenDropdown(link.label)}
                  onMouseLeave={() => setOpenDropdown(null)}
                >
                  <button className={`nav-link ${textColor} ${hoverColor} flex items-center gap-1 py-2 px-3`}>
                    {link.label}
                    <ChevronDown className="w-3 h-3" />
                  </button>
                  {openDropdown === link.label && (
                    <div className="absolute top-full left-0 bg-brand-card border border-brand-gold/20 rounded-lg shadow-xl py-2 min-w-[180px] z-50">
                      {link.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className="block px-4 py-2 text-sm text-white hover:text-brand-gold hover:bg-white/5 transition-colors"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`nav-link ${textColor} ${hoverColor} py-2 px-3`}
                >
                  {link.label}
                </Link>
              )
            )}
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
              <div key={link.label}>
                <Link
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="block text-white hover:text-brand-gold font-bold text-sm tracking-wider uppercase py-3 border-b border-white/10"
                >
                  {link.label}
                </Link>
                {link.children && (
                  <div className="pl-4">
                    {link.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        onClick={() => setMobileOpen(false)}
                        className="block text-white/70 hover:text-brand-gold text-sm py-2"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
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
