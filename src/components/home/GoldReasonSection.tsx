import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight } from 'lucide-react'

interface GoldReasonSectionProps {
  whyTitle?: string
  whyContent?: string
  howTitle?: string
  howContent?: string
  ctaTitle?: string
  imageUrl?: string
}

export default function GoldReasonSection({
  whyTitle = 'Why Are People Turning to Gold?',
  whyContent = `Great question! Investors are exploring gold for many reasons — whether planning for retirement, enjoying their golden years, or simply diversifying their wealth. Concerns about the declining value of the dollar, stock market volatility, recession fears, banking system instability, and inflation are driving many to seek safer, more stable assets.\n\nDiversifying with physical gold and silver is a historically proven strategy to hedge against economic uncertainty and market crashes.`,
  howTitle = 'How to Get Started with Gold and Silver Investments?',
  howContent = `If you're wondering how to diversify your retirement savings with gold IRA rollover, or how to incorporate physical precious metals into your cash reserves, start your journey by reaching out to us by phone or schedule an appointment with us today. From educational resources to personalized consultations, you can learn everything you need to know about gold IRAs, silver IRAs, and physical gold and silver investments.`,
  ctaTitle = 'Looking To Learn More?',
  imageUrl,
}: GoldReasonSectionProps) {
  return (
    <section className="bg-[#F7F0DD] py-16 lg:py-24">
      <div className="container-xl">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Content left */}
          <div className="flex flex-col gap-10">
            <div>
              <h2 className="text-2xl lg:text-3xl text-brand-dark font-normal mb-4">
                {whyTitle}
              </h2>
              {whyContent.split('\n\n').map((para, i) => (
                <p key={i} className="text-brand-dark text-base leading-relaxed mb-3 last:mb-0">
                  {para}
                </p>
              ))}
            </div>

            <div>
              <h3 className="text-2xl lg:text-3xl text-brand-dark font-normal mb-4">
                {howTitle}
              </h3>
              <p className="text-brand-dark text-base leading-relaxed">
                {howContent}
              </p>
            </div>

            <div>
              <h3 className="text-2xl text-brand-dark font-normal mb-6">
                {ctaTitle}
              </h3>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/precious-metals-ira" className="btn-gold flex items-center gap-2">
                  Precious Metals IRA
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link href="/home-delivery" className="btn-outline-gold flex items-center gap-2">
                  Cash Savings Investment
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>

          {/* Image right */}
          <div className="relative">
            <div className="w-full aspect-[3/4] lg:aspect-auto lg:h-[600px] rounded-2xl overflow-hidden relative">
              <Image
                src={imageUrl ?? '/images/why-gold-image.png'}
                alt="Why people turn to gold"
                fill
                className="object-cover object-center"
              />
            </div>

            {/* Floating stat card */}
            <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-5 shadow-xl border border-brand-gold/20">
              <p className="text-3xl font-bold text-brand-gold">+25%</p>
              <p className="text-sm text-brand-dark/70">Gold return in 2024</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
