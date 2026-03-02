import { Metadata } from 'next'
import Link from 'next/link'
import { Phone, Calendar, Star, Award, Users, Shield } from 'lucide-react'

export const metadata: Metadata = {
  title: 'About Us – Diversify Gold',
  description:
    'Learn about Diversify Gold — a US-owned and operated precious metals company dedicated to honesty, transparency, and client-first investing.',
}

const stats = [
  { icon: Users, number: '10,000+', label: 'Satisfied Clients' },
  { icon: Star, number: '4.9/5', label: 'Average Rating' },
  { icon: Award, number: '15+', label: 'Years of Excellence' },
  { icon: Shield, number: '$500M+', label: 'Metals Placed' },
]

const values = [
  { title: 'Honesty', desc: "We believe in complete transparency about pricing, fees, and the metals we sell. No hidden charges, ever." },
  { title: 'Transparency', desc: 'Every transaction is fully documented and explained so you always know exactly what you own and why.' },
  { title: 'Client-First', desc: 'Your financial goals are our priority. We educate before we sell — because informed clients make better decisions.' },
  { title: 'US Owned & Operated', desc: 'Proudly American, we understand the unique needs of US investors and the domestic regulatory landscape.' },
]

export default function AboutPage() {
  return (
    <div className="bg-white">
      {/* Hero */}
      <section
        className="py-24 lg:py-36 relative"
        style={{ background: 'linear-gradient(135deg, #09111A 0%, #1a2535 100%)' }}
      >
        <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-transparent via-brand-gold to-transparent" />
        <div className="container-xl text-center flex flex-col items-center gap-6">
          <span className="gold-badge">About Us</span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl text-white font-light max-w-3xl leading-tight">
            A Simple and Easy Change
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl">
            Diversify Gold is a US-owned and operated precious metals company where honesty, transparency, and client-first investing come together to make gold and silver accessible for everyone.
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 bg-brand-beige">
        <div className="container-xl grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="w-12 h-12 bg-brand-gold/10 rounded-xl flex items-center justify-center mx-auto mb-3">
                <stat.icon className="w-6 h-6 text-brand-gold" />
              </div>
              <p className="text-3xl font-bold text-brand-gold">{stat.number}</p>
              <p className="text-sm text-brand-dark/70 mt-1">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container-xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl text-brand-dark font-normal mb-6">Our Story</h2>
              <div className="flex flex-col gap-4 text-brand-dark/80 text-base leading-relaxed">
                <p>
                  Diversify Gold was founded with a single mission: to make precious metals investing accessible, transparent, and straightforward for every American — whether you're protecting your retirement savings or building physical wealth.
                </p>
                <p>
                  We saw too many investors confused by complex processes, hidden fees, and salespeople who prioritized commissions over client outcomes. We decided to build something different.
                </p>
                <p>
                  Today, we serve thousands of clients across the country, helping them navigate gold IRA rollovers, physical precious metals purchases, and everything in between — with education first and sales second.
                </p>
              </div>
            </div>
            <div className="w-full aspect-video bg-gradient-to-br from-brand-beige to-brand-gold/20 rounded-2xl flex items-center justify-center">
              <div className="text-center px-8">
                <div className="text-6xl mb-4">🇺🇸</div>
                <p className="text-brand-dark font-semibold">US Owned &amp; Operated</p>
                <p className="text-brand-dark/60 text-sm mt-1">Serving Americans Nationwide</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 lg:py-24 bg-brand-beige">
        <div className="container-xl">
          <h2 className="text-3xl text-brand-dark font-normal text-center mb-12">Our Core Values</h2>
          <div className="grid sm:grid-cols-2 gap-8">
            {values.map((v) => (
              <div key={v.title} className="bg-white rounded-2xl p-8 border border-gray-100">
                <div className="w-2 h-8 bg-brand-gold rounded-full mb-4" />
                <h3 className="text-xl font-bold text-brand-dark mb-3">{v.title}</h3>
                <p className="text-brand-dark/70 text-sm leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 text-center bg-white">
        <div className="container-xl flex flex-col items-center gap-6">
          <h2 className="text-3xl text-brand-dark font-normal">Let's Talk About Your Goals</h2>
          <p className="text-brand-dark/60 max-w-xl">
            Whether you're just starting out or looking to expand your precious metals portfolio, our team is here to help — no obligation, no pressure.
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
