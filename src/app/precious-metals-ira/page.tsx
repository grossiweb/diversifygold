import { Metadata } from 'next'
import Link from 'next/link'
import { Phone, Calendar, CheckCircle2, Shield, TrendingUp, Building2 } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Precious Metals IRA – Gold & Silver IRA Rollover',
  description:
    'Roll over your 401(k) or IRA into a self-directed precious metals IRA. Tax-advantaged gold and silver retirement accounts. Free consultation.',
}

const steps = [
  { step: '01', title: 'Open Your Account', desc: 'We help you open a self-directed IRA with an IRS-approved custodian — simple, fast, and fully guided.' },
  { step: '02', title: 'Fund Your Account', desc: 'Roll over or transfer funds from your existing 401(k), IRA, 403(b), or other retirement account — tax-free.' },
  { step: '03', title: 'Select Your Metals', desc: 'Choose from IRS-approved gold, silver, platinum, or palladium coins and bars.' },
  { step: '04', title: 'Secure Storage', desc: 'Your metals are stored in an IRS-approved, insured depository vault on your behalf.' },
]

const benefits = [
  { icon: Shield, title: 'Tax Advantages', desc: 'Traditional or Roth IRA options with tax-deferred or tax-free growth.' },
  { icon: TrendingUp, title: 'Inflation Hedge', desc: 'Gold and silver historically maintain purchasing power during inflation.' },
  { icon: Building2, title: 'Diversification', desc: 'Reduce reliance on paper assets and stock market volatility.' },
  { icon: CheckCircle2, title: 'IRS Compliant', desc: 'We ensure all metals meet IRS purity and fineness requirements.' },
]

export default function PreciousMetalsIRAPage() {
  return (
    <div className="bg-white">
      {/* Hero */}
      <section
        className="py-24 lg:py-36 relative"
        style={{ background: 'linear-gradient(135deg, #09111A 0%, #1a2535 100%)' }}
      >
        <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-transparent via-brand-gold to-transparent" />
        <div className="container-xl text-center flex flex-col items-center gap-6">
          <span className="gold-badge">Precious Metals IRA</span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl text-white font-light max-w-3xl leading-tight">
            Protect Your Retirement with Gold &amp; Silver
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl">
            Roll over your existing retirement account into a self-directed precious metals IRA. Tax-advantaged, IRS-compliant, and fully guided by our team.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <a href="tel:+18667614262" className="btn-gold flex items-center gap-2">
              <Phone className="w-4 h-4" /> Call (866) 761-4262
            </a>
            <Link href="/contact" className="btn-outline-gold flex items-center gap-2">
              <Calendar className="w-4 h-4" /> Free Consultation
            </Link>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 lg:py-24 bg-brand-beige">
        <div className="container-xl">
          <h2 className="text-3xl text-brand-dark font-normal text-center mb-12">
            Why Choose a Precious Metals IRA?
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((b) => (
              <div key={b.title} className="bg-white rounded-2xl p-6 flex flex-col gap-4 shadow-sm border border-gray-100">
                <div className="w-12 h-12 bg-brand-gold/10 rounded-xl flex items-center justify-center">
                  <b.icon className="w-6 h-6 text-brand-gold" />
                </div>
                <h3 className="font-bold text-brand-dark">{b.title}</h3>
                <p className="text-sm text-brand-dark/70 leading-relaxed">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Steps */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container-xl">
          <h2 className="text-3xl text-brand-dark font-normal text-center mb-14">
            How It Works — 4 Simple Steps
          </h2>
          <div className="grid sm:grid-cols-2 gap-8">
            {steps.map((s) => (
              <div key={s.step} className="flex gap-5">
                <div className="flex-shrink-0 w-12 h-12 bg-brand-gold rounded-full flex items-center justify-center text-white font-bold text-sm">
                  {s.step}
                </div>
                <div>
                  <h3 className="font-bold text-brand-dark text-lg mb-2">{s.title}</h3>
                  <p className="text-brand-dark/70 text-sm leading-relaxed">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-brand-beige text-center">
        <div className="container-xl flex flex-col items-center gap-6">
          <h2 className="text-3xl text-brand-dark font-normal">Ready to Get Started?</h2>
          <p className="text-brand-dark/70 max-w-xl">
            Our specialists are available to answer all your questions about gold IRA rollovers — completely free, no obligation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="tel:+18667614262" className="btn-gold flex items-center gap-2">
              <Phone className="w-4 h-4" /> Call Now
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
