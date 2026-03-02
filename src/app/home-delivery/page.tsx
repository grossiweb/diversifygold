import { Metadata } from 'next'
import Link from 'next/link'
import { Phone, Calendar, Package, Lock, Truck, RefreshCw } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Home Delivery – Physical Gold & Silver Delivered to Your Door',
  description:
    'Buy physical gold and silver coins and bars with free nationwide delivery. Secure, insured shipping direct to your door.',
}

const features = [
  { icon: Package, title: 'Wide Selection', desc: 'Hundreds of gold, silver, platinum, and palladium products to choose from.' },
  { icon: Lock, title: 'Secure & Insured', desc: 'Every shipment is fully insured and discreetly packaged for your peace of mind.' },
  { icon: Truck, title: 'Free Nationwide Shipping', desc: 'Free shipping on qualifying orders throughout the continental United States.' },
  { icon: RefreshCw, title: 'No-Fee Buyback', desc: 'We buy back metals purchased from us at competitive market prices — no fees.' },
]

export default function HomeDeliveryPage() {
  return (
    <div className="bg-white">
      {/* Hero */}
      <section
        className="py-24 lg:py-36 relative"
        style={{ background: 'linear-gradient(135deg, #09111A 0%, #1a2535 100%)' }}
      >
        <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-transparent via-brand-gold to-transparent" />
        <div className="container-xl text-center flex flex-col items-center gap-6">
          <span className="gold-badge">Home Delivery</span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl text-white font-light max-w-3xl leading-tight">
            Physical Gold &amp; Silver Delivered to Your Door
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl">
            Purchase authentic, IRS-eligible gold and silver with free insured shipping nationwide. Hold real wealth in your hands.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Link href="/products" className="btn-gold flex items-center gap-2">
              Shop Products
            </Link>
            <Link href="/contact" className="btn-outline-gold flex items-center gap-2">
              <Calendar className="w-4 h-4" /> Free Consultation
            </Link>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 lg:py-24 bg-brand-beige">
        <div className="container-xl">
          <h2 className="text-3xl text-brand-dark font-normal text-center mb-12">
            Why Buy Physical Gold &amp; Silver?
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((f) => (
              <div key={f.title} className="bg-white rounded-2xl p-6 flex flex-col gap-4 shadow-sm border border-gray-100">
                <div className="w-12 h-12 bg-brand-gold/10 rounded-xl flex items-center justify-center">
                  <f.icon className="w-6 h-6 text-brand-gold" />
                </div>
                <h3 className="font-bold text-brand-dark">{f.title}</h3>
                <p className="text-sm text-brand-dark/70 leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container-xl">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl text-brand-dark font-normal mb-8">
                How It Works
              </h2>
              <div className="flex flex-col gap-6">
                {[
                  { n: '1', t: 'Browse & Select', d: 'Choose from our wide selection of gold, silver, and other precious metal products.' },
                  { n: '2', t: 'Secure Payment', d: 'Complete your purchase securely online or over the phone with one of our specialists.' },
                  { n: '3', t: 'Fully Insured Shipment', d: 'Your metals are carefully packaged and shipped with full insurance coverage.' },
                  { n: '4', t: 'Hold Real Wealth', d: 'Receive your authentic precious metals and take control of your financial future.' },
                ].map((item) => (
                  <div key={item.n} className="flex gap-4">
                    <div className="w-10 h-10 bg-brand-gold rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">
                      {item.n}
                    </div>
                    <div>
                      <h3 className="font-bold text-brand-dark mb-1">{item.t}</h3>
                      <p className="text-sm text-brand-dark/70">{item.d}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="w-full aspect-square lg:aspect-auto lg:h-[500px] bg-gradient-to-br from-brand-beige to-brand-gold/20 rounded-2xl flex items-center justify-center">
              <div className="text-center px-8">
                <div className="text-7xl mb-4">📦</div>
                <p className="text-brand-dark font-semibold text-lg">Free Insured Shipping</p>
                <p className="text-brand-dark/60 text-sm mt-2">Nationwide delivery on qualifying orders</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-brand-beige text-center">
        <div className="container-xl flex flex-col items-center gap-6">
          <h2 className="text-3xl text-brand-dark font-normal">Start Building Your Physical Stack</h2>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="tel:+18667614262" className="btn-gold flex items-center gap-2">
              <Phone className="w-4 h-4" /> Call Now
            </a>
            <Link href="/products" className="btn-outline-gold">Browse Products</Link>
          </div>
        </div>
      </section>
    </div>
  )
}
