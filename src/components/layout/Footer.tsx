import Link from 'next/link'
import Image from 'next/image'

const quickLinks = [
  { label: 'Privacy Policy', href: '/privacy-policy' },
  { label: 'Terms of Use', href: '/terms-of-use' },
  { label: 'ADA Website Accessibility', href: '/accessibility' },
  { label: 'Cookie Policy & Opt-Out', href: '/cookie-policy' },
  { label: 'California Privacy Rights', href: '/california-privacy' },
  { label: 'Contact Us', href: '/contact' },
  { label: 'Become a Partner', href: '/partners' },
  { label: 'Site Map', href: '/sitemap' },
]

const disclaimer = `Disclaimer: The information provided above is for general informational and educational purposes only. The views and opinions expressed are solely those of the author and do not necessarily reflect the views of any affiliated organizations or entities, including Diversify Gold. No representations or warranties of any kind, express or implied, are made about the completeness, accuracy, reliability, or suitability of any of the information, products, services, or related graphics contained herein for any purpose. Any reliance on such information is strictly at your own risk. This content should not be taken as, and is not, professional advice (legal, financial, tax, or otherwise) and it should not be used as a substitute for such advice. Always consult with a qualified professional before making any legal, financial, or tax related decisions. Past performance of any particular asset (including precious metals) is no indication of future performance or returns. Precious metals, like all investments, carry risks and uncertainty. The decision to purchase or sell precious metals, and which precious metals to purchase or sell, are the customer's decision alone; purchases and sales should be made subject to the customer's own research, prudence, and judgement, all in concurrence with the advice of one or more professionals of the customer's choosing. Diversify Gold does not provide investment, legal, retirement planning, or tax advice.`

export default function Footer() {
  return (
    <footer style={{ background: 'radial-gradient(100% 100% at 50% 0%, #382B03 0%, #131313 60.5%), #BDBDBD' }}>
      {/* Main footer content */}
      <div className="container-xl py-16">
        <div className="grid md:grid-cols-3 gap-12">
          {/* Logo + links */}
          <div className="flex flex-col gap-8">
            {/* Logo */}
            <Image
              src="/images/footer-logo.png"
              alt="Diversify Gold"
              width={208}
              height={55}
              className="h-12 w-auto object-contain"
            />

            {/* Links */}
            <ul className="flex flex-col gap-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-[#D2D2D2] text-sm font-bold hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Disclaimer */}
          <div className="md:col-span-2">
            <p className="text-[#D2D2D2] text-xs leading-relaxed">
              {disclaimer}
            </p>
            <p className="text-[#D2D2D2] text-xs leading-relaxed mt-4">
              Copyright Disclaimer (Fair Use): This channel or website may contain copyrighted material used under the fair use provisions of copyright law (Section 107, U.S. Copyright Act). Such material is included for purposes of commentary, criticism, news reporting, education, and analysis. We do not claim ownership of third-party content, and all rights remain with the original copyright holders.
            </p>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/20 py-6">
        <div className="container-xl flex flex-col sm:flex-row items-center justify-between gap-4">
          <Image
            src="/images/footer-icon.png"
            alt="Diversify Gold"
            width={68}
            height={65}
            className="w-12 h-12 object-contain"
          />
          <p className="text-[#D2D2D2] text-sm font-bold text-center">
            © {new Date().getFullYear()} Diversify Gold Private Network. All rights reserved.
          </p>
          <div className="flex gap-4">
            <a href="tel:+18667614262" className="text-brand-gold text-sm font-bold hover:text-white transition-colors">
              (866) 761-4262
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
