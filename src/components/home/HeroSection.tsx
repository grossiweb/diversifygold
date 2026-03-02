import Link from 'next/link'
import Image from 'next/image'
import { Phone, Calendar } from 'lucide-react'

interface HeroSectionProps {
  heading?: string
  subheading?: string
  heroImageUrl?: string
}

export default function HeroSection({
  heading = 'Two ways to Diversify',
  subheading = 'Cash Savings or Retirement Accounts',
  heroImageUrl,
}: HeroSectionProps) {
  const bgSrc = heroImageUrl ?? '/images/hero-bg.png'

  return (
    /**
     * `isolation: isolate` creates a new stacking context for the hero section
     * so its children never bleed above the sticky header (z-[100]).
     * The <Image fill> is clipped inside the absolute inset-0 wrapper
     * instead of on the <section> itself (avoids stacking context conflicts).
     */
    <section
      className="relative min-h-screen flex items-center -mt-[108px] lg:-mt-[124px]"
      style={{ isolation: 'isolate' }}
    >
      {/* Background image — clipped by its own absolute wrapper */}
      <div className="absolute inset-0 overflow-hidden">
        <Image
          src={bgSrc}
          alt="Diversify Gold hero background"
          fill
          className="object-cover object-center"
          priority
          quality={90}
        />
        {/* Dark overlay */}
    </div>

      {/* Gold decorative lines */}
      <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-transparent via-brand-gold to-transparent opacity-60" />
      <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-gradient-to-r from-transparent via-brand-gold to-transparent opacity-40" />

      {/* Main content */}
      <div className="relative container-xl pt-36 lg:pt-48 pb-24 lg:pb-32 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: text + CTAs */}
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-3">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-light text-white leading-tight whitespace-nowrap">
                {heading}
              </h1>
              <p className="text-lg sm:text-xl text-gray-300 font-normal font-serif">
                {subheading}
              </p>
            </div>

            <p className="text-base text-gray-400">
              Interested in learning more?
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="tel:+18667614262"
                className="btn-gold flex items-center gap-2"
              >
                <Phone className="w-5 h-5" />
                Call Now
              </a>
              <Link href="/contact" className="btn-gold flex items-center gap-2">
                <Calendar className="w-5 h-5" />
                Schedule a Call
              </Link>
            </div>
          </div>

          {/* Right: gold coin image */}
          <div className="hidden lg:flex justify-center">
            <div className="relative w-64 h-64">
              <div className="absolute inset-0 rounded-full bg-brand-gold/10 blur-3xl" />
              <Image
                src="/images/hero-coin.png"
                alt="Gold coin"
                width={203}
                height={195}
                className="relative w-full h-full object-contain drop-shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <Image
          src="/images/scroll-indicator.png"
          alt="Scroll down"
          width={38}
          height={37}
          className="opacity-70 hover:opacity-100 transition-opacity"
        />
      </div>
    </section>
  )
}
