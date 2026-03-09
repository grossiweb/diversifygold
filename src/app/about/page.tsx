import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { Phone, Calendar } from 'lucide-react'
import FeaturedOnSection from '@/components/home/FeaturedOnSection'
import BlogSection from '@/components/home/BlogSection'

export const metadata: Metadata = {
  title: 'About Us – Diversify Gold',
  description:
    'Learn about Diversify Gold — a US-owned and operated precious metals company dedicated to honesty, transparency, and client-first investing.',
}

const stats = [
  { number: '10,000+', label: 'Satisfied Clients' },
  { number: '4.9/5', label: 'Average Rating' },
  { number: '15+', label: 'Years of Excellence' },
  { number: '$500M+', label: 'Metals Placed' },
]

const values = [
  {
    title: 'Honesty',
    desc: 'We believe in complete transparency about pricing, fees, and the metals we sell. No hidden charges, ever.',
  },
  {
    title: 'Transparency',
    desc: 'Every transaction is fully documented and explained so you always know exactly what you own and why.',
  },
  {
    title: 'Client-First',
    desc: 'Your financial goals are our priority. We educate before we sell — because informed clients make better decisions.',
  },
  {
    title: 'US Owned & Operated',
    desc: 'Proudly American, we understand the unique needs of US investors and the domestic regulatory landscape.',
  },
]

const infoCards = [
  {
    icon: '/images/ira/icon-diversify.png',
    title: 'Our mission',
    desc: 'To make precious metals investing accessible, transparent, and straightforward for every American — whether you\'re protecting your retirement savings or building physical wealth.',
  },
  {
    icon: '/images/ira/icon-rollover.png',
    title: 'Education first, sales second',
    desc: 'We saw too many investors confused by complex processes, hidden fees, and salespeople who prioritized commissions over client outcomes. We decided to build something different.',
  },
  {
    icon: '/images/ira/icon-qualify.png',
    title: 'Serving thousands nationwide',
    desc: 'Today, we serve thousands of clients across the country, helping them navigate gold IRA rollovers, physical precious metals purchases, and everything in between.',
  },
]

export default function AboutPage() {
  return (
    <div className="bg-[#FFFCF3]">
      {/* ===== HERO SECTION ===== */}
      <section className="relative -mt-[108px] lg:-mt-[124px]" style={{ isolation: 'isolate' }}>
        <div className="absolute inset-0 overflow-hidden">
          <Image
            src="/images/ira/hero-bg.png"
            alt="About Diversify Gold background"
            fill
            className="object-cover object-center"
            priority
            quality={90}
          />
        </div>
        <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-transparent via-brand-gold to-transparent opacity-60" />

        <div className="relative container-xl pt-48 lg:pt-56 pb-20 lg:pb-28">
          <div className="flex flex-col items-start gap-6 max-w-2xl">
            <h1 className="text-4xl sm:text-5xl lg:text-[40px] text-white font-light leading-tight">
              About Us
            </h1>
            <p className="text-gray-300 text-xl lg:text-2xl font-serif">
              A simple and easy change
            </p>
            <p className="text-gray-400 text-lg max-w-xl">
              Diversify Gold is a US-owned and operated precious metals company where honesty,
              transparency, and client-first investing come together to make gold and silver
              accessible for everyone.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="tel:+18667614262" className="btn-gold flex items-center gap-2">
                <Phone className="w-5 h-5" /> Call Now
              </a>
              <Link href="/contact" className="btn-gold flex items-center gap-2">
                <Calendar className="w-5 h-5" /> Schedule a Call
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ===== OUR STORY ===== */}
      <section className="py-16 lg:py-24 bg-[#FFFCF3]">
        <div className="container-xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative w-full aspect-[16/10] rounded-2xl overflow-hidden">
              <Image
                src="/images/ira/portfolio-image.png"
                alt="Our story — Diversify Gold"
                fill
                className="object-cover object-center"
              />
            </div>
            <div className="flex flex-col gap-4">
              <h2 className="text-2xl lg:text-[32px] text-brand-dark font-normal leading-snug">
                Our Story
              </h2>
              <p className="text-brand-dark text-lg leading-relaxed">
                Diversify Gold was founded with a single mission: to make precious metals investing
                accessible, transparent, and straightforward for every American — whether
                you&apos;re protecting your retirement savings or building physical wealth.
              </p>
              <p className="text-brand-dark text-lg leading-relaxed">
                We saw too many investors confused by complex processes, hidden fees, and salespeople
                who prioritized commissions over client outcomes. We decided to build something
                different.
              </p>
              <p className="text-brand-dark text-lg leading-relaxed">
                Today, we serve thousands of clients across the country, helping them navigate gold
                IRA rollovers, physical precious metals purchases, and everything in between — with
                education first and sales second.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-2">
                <a href="tel:+18667614262" className="btn-gold flex items-center gap-2">
                  <Phone className="w-5 h-5" /> (866) 761-4262
                </a>
                <Link href="/contact" className="btn-gold flex items-center gap-2">
                  <Calendar className="w-5 h-5" /> Schedule a Call
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== THREE INFO CARDS (Mission) ===== */}
      <section className="py-16 lg:py-24 bg-[#F7F0DD]">
        <div className="container-xl">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {infoCards.map((card) => (
              <div key={card.title} className="flex flex-col items-center text-center gap-3">
                <Image
                  src={card.icon}
                  alt=""
                  width={40}
                  height={40}
                  className="object-contain"
                />
                <h3 className="text-brand-dark text-xl lg:text-2xl font-normal">{card.title}</h3>
                <p className="text-brand-dark text-sm leading-relaxed">{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== STATS BANNER ===== */}
      <section className="bg-[#F7F0DD] pb-16">
        <div className="container-xl">
          <div
            className="flex flex-wrap items-center justify-center gap-8 lg:gap-16 py-10 px-8 rounded-2xl"
            style={{ background: 'linear-gradient(180deg, #1F2733, #0B0F17)' }}
          >
            {stats.map((stat) => (
              <div key={stat.label} className="text-center min-w-[140px]">
                <p className="text-[#D4AF36] text-3xl lg:text-4xl font-bold">{stat.number}</p>
                <p className="text-white/70 text-sm mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== COINS & BARS ===== */}
      <section className="relative py-16 lg:py-20">
        <div className="absolute inset-0 overflow-hidden">
          <Image
            src="/images/ira/coins-section-bg.png"
            alt=""
            fill
            className="object-cover object-top"
          />
        </div>
        <div className="relative container-xl text-center">
          <h2 className="text-2xl lg:text-[32px] text-brand-dark font-normal mb-3">
            Premium Gold &amp; Silver Products
          </h2>
          <p className="text-brand-dark text-sm mb-10">
            Browse our wide selection of IRS-eligible coins and bars.
          </p>
          <div className="relative w-full max-w-5xl mx-auto aspect-[7/1]">
            <Image
              src="/images/ira/coins-strip.png"
              alt="Gold and silver coins and bars"
              fill
              className="object-contain"
            />
          </div>
        </div>
      </section>

      {/* ===== FEATURED ON ===== */}
      <FeaturedOnSection />

      {/* ===== TWO WAYS TO DIVERSIFY ===== */}
      <section className="py-16 lg:py-24 bg-[#FFFCF3]">
        <div className="container-xl">
          <div
            className="rounded-[32px] overflow-hidden relative"
            style={{ boxShadow: '0px 4px 60px #D8B1504D' }}
          >
            <div className="absolute inset-0">
              <Image
                src="/images/ira/two-ways-bg.png"
                alt=""
                fill
                className="object-cover object-center"
              />
            </div>
            <div className="relative">
              <div className="absolute inset-0">
                <Image
                  src="/images/ira/two-ways-inner.png"
                  alt=""
                  fill
                  className="object-cover object-center"
                />
              </div>
              <div className="relative grid lg:grid-cols-2 gap-8">
                {/* Left panel */}
                <div className="flex flex-col items-start justify-end p-8 lg:p-16 min-h-[350px]">
                  <Image
                    src="/images/ira/logo-card.png"
                    alt="Diversify Gold"
                    width={265}
                    height={71}
                    className="mb-6 object-contain"
                  />
                  <p className="text-white text-lg font-bold leading-snug">
                    Diversify Gold Inc.
                    <br />A Simple and Easy Change
                  </p>
                </div>

                {/* Right panel */}
                <div className="flex flex-col items-start justify-center p-8 lg:p-16 gap-6">
                  <div>
                    <h2 className="text-brand-dark text-2xl lg:text-[32px] font-normal mb-2">
                      Two ways to Diversify
                    </h2>
                    <p className="text-[#D4AF36] text-xl lg:text-[32px] font-normal font-serif">
                      Cash Savings &amp; Retirement Accounts
                    </p>
                  </div>

                  <div className="bg-[#FFF5DF] rounded-2xl py-5 px-6">
                    <p className="text-brand-dark text-sm font-bold uppercase tracking-wider">
                      Call Now
                    </p>
                    <a
                      href="tel:+18667614262"
                      className="text-brand-dark text-2xl font-light hover:text-brand-gold transition-colors"
                    >
                      (866) 761-4262
                    </a>
                  </div>

                  <Link href="/contact" className="btn-gold">
                    Schedule a Call
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== NO-OBLIGATION EDUCATION ===== */}
      <section className="py-16 lg:py-24 bg-[#FFFCF3]">
        <div className="container-xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative w-full aspect-[3/2] rounded-2xl overflow-hidden">
              <Image
                src="/images/ira/education-image.png"
                alt="No-obligation education"
                fill
                className="object-cover object-center"
              />
            </div>
            <div className="flex flex-col gap-6">
              <h2 className="text-2xl lg:text-[32px] text-brand-dark font-normal leading-snug">
                No-Obligation Education — Take Control of Your Financial Future
              </h2>
              <p className="text-[#D4AF36] text-base leading-relaxed">
                Whether you&apos;re just starting out or looking to expand your precious metals
                portfolio, our team is here to help — no obligation, no pressure. Take a few minutes
                to understand how gold and silver can help diversify your retirement accounts or cash
                savings.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== OUR CORE VALUES (Step-by-step style) ===== */}
      <section className="py-16 lg:py-24 bg-[#F6F0DD]">
        <div className="container-xl">
          <h2 className="text-2xl lg:text-[32px] text-brand-dark font-normal mb-12 max-w-2xl">
            Our Core Values
          </h2>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Values timeline */}
            <div className="flex flex-col">
              {values.map((value, i) => (
                <div key={value.title} className="flex gap-4">
                  {/* Timeline dot and line */}
                  <div className="flex flex-col items-center">
                    <div className="w-3 h-3 rounded-full bg-brand-gold flex-shrink-0 mt-2" />
                    {i < values.length - 1 && (
                      <div className="w-[1px] bg-brand-gold/40 flex-1 min-h-[24px]" />
                    )}
                  </div>
                  {/* Content */}
                  <div className="pb-8">
                    <h3 className="text-brand-dark text-lg lg:text-xl font-medium mb-1">
                      {value.title}
                    </h3>
                    <p className="text-brand-dark/70 text-sm leading-relaxed">{value.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Image */}
            <div className="relative w-full aspect-[9/10] rounded-2xl overflow-hidden hidden lg:block">
              <Image
                src="/images/ira/steps-image.png"
                alt="Diversify Gold values"
                fill
                className="object-cover object-center"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ===== BLOG & NEWS ===== */}
      <BlogSection />

      {/* ===== FINAL CTA ===== */}
      <section className="py-16 lg:py-20 bg-[#FFFCF3] text-center">
        <div className="container-xl flex flex-col items-center gap-6">
          <h2 className="text-2xl lg:text-3xl text-brand-dark font-normal">
            Let&apos;s Talk About Your Goals
          </h2>
          <p className="text-brand-dark/70 max-w-xl">
            Whether you&apos;re just starting out or looking to expand your precious metals
            portfolio, our team is here to help — no obligation, no pressure.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="tel:+18667614262" className="btn-gold flex items-center gap-2">
              <Phone className="w-4 h-4" /> Call (866) 761-4262
            </a>
            <Link href="/contact" className="btn-outline-gold flex items-center gap-2">
              <Calendar className="w-4 h-4" /> Schedule a Call
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
