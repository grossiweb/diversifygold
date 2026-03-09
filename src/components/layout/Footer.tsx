import Link from 'next/link'
import Image from 'next/image'

const quickLinks = [
  { label: 'Privacy Policy', href: '/privacy-policy' },
  { label: 'Terms of Use', href: '/terms-of-use' },
  { label: 'ADA Website Accessibility', href: '/accessibility' },
  { label: 'Cookie Policy & Opt-Out', href: '/cookie-policy' },
  { label: 'California Privacy Rights', href: '/california-privacy' },
  { label: 'Contact us', href: '/contact' },
  { label: 'Become a Partner', href: '/partners' },
  { label: 'Site Map', href: '/sitemap' },
]

const disclaimer = `Disclaimer: The information provided above is for general informational and educational purposes only. The views and opinions expressed are solely those of the author and do not necessarily reflect the views of any affiliated organizations or entities, including Diversify Gold. No representations or warranties of any kind, express or implied, are made about the completeness, accuracy, reliability, or suitability of any of the information, products, services, or related graphics contained herein for any purpose. Any reliance on such information is strictly at your own risk. This content should not be taken as, and is not, professional advice (legal, financial, tax, or otherwise) and it should not be used as a substitute for such advice. Always consult with a qualified professional before making any legal, financial, or tax related decisions. Past performance of any particular asset (including precious metals) is no indication of future performance or returns. Precious metals, like all investments, carry risks and uncertainty. The decision to purchase or sell precious metals, and which precious metals to purchase or sell, are the customer's decision alone; purchases and sales should be made subject to the customer's own research, prudence, and judgement, all in concurrence with the advice of one or more professionals of the customer's choosing. Diversify Gold does not provide investment, legal, retirement planning, or tax advice.`

const copyrightDisclaimer = `Copyright Disclaimer (Fair Use): This channel or website may contain copyrighted material used under the fair use provisions of copyright law (Section 107, U.S. Copyright Act). Such material is included for purposes of commentary, criticism, news reporting, education, and analysis. We do not claim ownership of third-party content, and all rights remain with the original copyright holders. If you are a rights holder and believe your content has been used improperly, please contact us directly.`

export default function Footer() {
  return (
    <footer style={{ background: 'radial-gradient(100% 100% at 50% 0%, #382B03 0%, #131313 60.5%), #BDBDBD' }}>
      {/* Main footer content */}
      <div className="py-20 lg:py-24 px-6 sm:px-10 lg:px-[100px]">
        <div className="flex flex-col lg:flex-row justify-between items-start gap-12">
          {/* Left: Logo + Links */}
          <div className="flex flex-col gap-8 flex-shrink-0">
            <Image
              src="/images/footer-logo.png"
              alt="Diversify Gold"
              width={208}
              height={55}
              className="h-14 w-auto object-contain"
            />

            <ul className="flex flex-col gap-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-[#D2D2D2] text-base font-bold hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Right: Disclaimer */}
          <div className="lg:max-w-[759px]">
            <p className="text-[#D2D2D2] text-[15px] leading-relaxed">
              {disclaimer}
            </p>
            <p className="text-[#D2D2D2] text-[15px] leading-relaxed mt-4">
              {copyrightDisclaimer}
            </p>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10 py-6">
        <div className="flex flex-col items-center gap-2.5">
          <Image
            src="/images/footer-icon.png"
            alt="Diversify Gold"
            width={68}
            height={65}
            className="w-[68px] h-[65px] object-contain"
          />
          <p className="text-[#D2D2D2] text-base font-bold text-center">
            &copy; {new Date().getFullYear()} Diversify Gold Private Network. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
