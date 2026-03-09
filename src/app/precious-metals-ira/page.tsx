import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { Phone, Calendar } from 'lucide-react'
import FeaturedOnSection from '@/components/home/FeaturedOnSection'
import BlogSection from '@/components/home/BlogSection'

export const metadata: Metadata = {
  title: 'Precious Metals IRA – Gold & Silver IRA Rollover',
  description:
    'Roll over your 401(k) or IRA into a self-directed precious metals IRA. Tax-advantaged gold and silver retirement accounts. Free consultation.',
}

const steps = [
  {
    title: 'Call us to check eligibility',
    desc: 'Make sure you have a retirement account that can be self-directed (e.g., traditional IRA, Roth IRA, or 401(k) rollover).',
  },
  {
    title: 'Open your new self-directed IRA',
    desc: 'We handle the heavy lifting with our in-house IRA team — simply fill out an application to open your new self-directed IRA with your new custodian.',
  },
  {
    title: 'Initiate the transfer',
    desc: 'Complete a rollover/transfer from your chosen account. You have the option of a partial rollover or a full rollover. We and your custodian coordinate to move funds directly to your new self-directed IRA.',
  },
  {
    title: 'Fund the account',
    desc: 'Your funds are deposited into the new self-directed IRA. Congratulations — your account is funded. Your funds are now safe and ready to be converted into gold and silver.',
  },
  {
    title: 'A trade call is scheduled',
    desc: 'Know what you want? No problem. If you need guidance, we provide comprehensive education to help you choose how much to allocate to gold vs. silver, and what mix of IRS-approved coins and bars you want.',
  },
  {
    title: 'Education call',
    desc: 'Know what you want? No problem. If you need guidance, we provide comprehensive education to help you choose how much to allocate to gold vs. silver.',
  },
  {
    title: 'Place the order',
    desc: 'With your approval, the order is confirmed and your prices are locked in, protected from price fluctuations. Regardless of whether the metals have shipped yet, you now own precious metals.',
  },
  {
    title: 'Choose storage',
    desc: 'Select an IRS-approved depository. Decide between segregated and non-segregated storage.',
  },
  {
    title: 'Delivery and storage',
    desc: 'Metals are delivered to the depository of your choice and credited to your IRA.',
  },
  {
    title: 'Review and plan',
    desc: 'Update beneficiaries and set a simple distribution plan. Schedule periodic reviews to rebalance as needed.',
  },
]

const infoCards = [
  {
    icon: '/images/ira/icon-diversify.png',
    title: 'So, how do you diversify your retirement account?',
    desc: "It's easier than you think! Imagine holding real, physical gold and silver in your existing retirement fund — and yes, your retirement account may qualify for a tax- and penalty-free rollover into a Self-Directed Gold and Silver IRA. See our step-by-step guide below.",
  },
  {
    icon: '/images/ira/icon-rollover.png',
    title: 'Rolling over your account is a breeze!',
    desc: 'You can choose a full rollover or a partial amount of your account, just a piece of your retirement pie. Your gold and silver coins and bars will be stored securely in an IRS-approved depository of your choice, safe and sound.',
  },
  {
    icon: '/images/ira/icon-qualify.png',
    title: 'Wondering if your account qualifies?',
    desc: "A few things come into play — like the type of account you have, your age, and your current employment situation. But don't worry — We are ready to help. Give us a call to see if your account qualifies. Eligible accounts: Traditional IRA, Roth IRA, 401(k), 403(b), Thrift Savings Plan (TSP), 457.",
  },
]

export default function PreciousMetalsIRAPage() {
  return (
    <div className="bg-[#FFFCF3]">
      {/* ===== HERO SECTION ===== */}
      <section className="relative -mt-[108px] lg:-mt-[124px]" style={{ isolation: 'isolate' }}>
        <div className="absolute inset-0 overflow-hidden">
          <Image
            src="/images/ira/hero-bg.png"
            alt="Precious Metals IRA background"
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
              Precious Metals IRA
            </h1>
            <p className="text-gray-300 text-xl lg:text-2xl font-serif">
              A simple and easy change to diversify
            </p>
            <p className="text-gray-400 text-lg">Interested in learning more?</p>
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

      {/* ===== BUILD A STRONGER PORTFOLIO ===== */}
      <section className="py-16 lg:py-24 bg-[#FFFCF3]">
        <div className="container-xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative w-full aspect-[16/10] rounded-2xl overflow-hidden">
              <Image
                src="/images/ira/portfolio-image.png"
                alt="Build a stronger portfolio through diversification"
                fill
                className="object-cover object-center"
              />
            </div>
            <div className="flex flex-col gap-4">
              <h2 className="text-2xl lg:text-[32px] text-brand-dark font-normal leading-snug">
                Build a stronger portfolio through diversification
              </h2>
              <p className="text-brand-dark text-lg leading-relaxed">
                Diversifying a retirement account is simple and easy. We are a top-rated gold and
                silver company that specializes in helping individuals understand how diversifying a
                retirement account with gold and silver works. We are here to answer your questions
                and help you make an informed decision. Whether you&apos;re just starting or looking
                to expand your existing portfolio, investing in a gold IRA can provide stability and
                growth potential.
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

      {/* ===== THREE INFO CARDS ===== */}
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

      {/* ===== EXCLUSIVE BUY BACK COMMITMENT ===== */}
      <section className="bg-[#F7F0DD] pb-16">
        <div className="container-xl">
          <div
            className="flex items-center justify-center gap-8 py-10 px-8 rounded-2xl"
            style={{ background: 'linear-gradient(180deg, #1F2733, #0B0F17)' }}
          >
            <Image
              src="/images/ira/gold-divider-left.png"
              alt=""
              width={66}
              height={1}
              className="hidden sm:block opacity-60"
            />
            <div className="text-center max-w-md">
              <h3 className="text-[#D4AF36] text-2xl lg:text-[28px] font-normal mb-2">
                Exclusive Buy Back Commitment
              </h3>
              <p className="text-white text-sm leading-relaxed">
                With any investment you want to be able to liquidate easily and quickly which is why
                both of our programs qualify for our zero buy back fee commitment exclusively for
                Diversify Gold clients.
              </p>
            </div>
            <Image
              src="/images/ira/gold-divider-right.png"
              alt=""
              width={66}
              height={1}
              className="hidden sm:block opacity-60"
            />
          </div>
        </div>
      </section>

      {/* ===== IRA-APPROVED COINS & BARS ===== */}
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
            Choose Top IRA-Approved Gold &amp; Silver Coins and Bars
          </h2>
          <p className="text-brand-dark text-sm mb-10">
            All coins and bars meet the IRS purity guidelines of 0.995 or higher.
          </p>
          <div className="relative w-full max-w-5xl mx-auto aspect-[7/1]">
            <Image
              src="/images/ira/coins-strip.png"
              alt="IRA-approved gold and silver coins and bars"
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
                The best part? All of this is no-obligation education. Take a few minutes to
                understand how gold and silver can help diversify your retirement accounts or cash
                savings. When you&apos;re ready, you&apos;ll have the knowledge to make confident,
                informed decisions about adding precious metals to your diversified portfolio.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== STEP-BY-STEP GUIDE ===== */}
      <section className="py-16 lg:py-24 bg-[#F6F0DD]">
        <div className="container-xl">
          <h2 className="text-2xl lg:text-[32px] text-brand-dark font-normal mb-12 max-w-2xl">
            Step-by-step guide: Diversify your retirement account into a gold &amp; silver IRA
          </h2>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Steps timeline */}
            <div className="flex flex-col">
              {steps.map((step, i) => (
                <div key={step.title} className="flex gap-4">
                  {/* Timeline dot and line */}
                  <div className="flex flex-col items-center">
                    <div className="w-3 h-3 rounded-full bg-brand-gold flex-shrink-0 mt-2" />
                    {i < steps.length - 1 && (
                      <div className="w-[1px] bg-brand-gold/40 flex-1 min-h-[24px]" />
                    )}
                  </div>
                  {/* Content */}
                  <div className="pb-6">
                    <h3 className="text-brand-dark text-lg lg:text-xl font-medium mb-1">
                      {step.title}
                    </h3>
                    {step.desc && (
                      <p className="text-brand-dark/70 text-sm leading-relaxed">{step.desc}</p>
                    )}
                  </div>
                </div>
              ))}

              {/* Tips box */}
              <div className="mt-4 bg-[#FFFCF3] rounded-lg py-4 px-5">
                <p className="text-brand-dark text-sm">
                  <span className="font-bold">Tips:</span> Compliance first — only eligible
                  coins/bars are allowed. Know the costs: setup, annual, storage, and any premiums.
                </p>
              </div>
            </div>

            {/* Steps image */}
            <div className="relative w-full aspect-[9/10] rounded-2xl overflow-hidden hidden lg:block">
              <Image
                src="/images/ira/steps-image.png"
                alt="Gold and silver IRA step by step"
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
            Ready to Diversify Your Retirement?
          </h2>
          <p className="text-brand-dark/70 max-w-xl">
            Our specialists are available to answer all your questions about gold IRA rollovers —
            completely free, no obligation.
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
