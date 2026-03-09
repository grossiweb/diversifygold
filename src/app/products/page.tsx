import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Phone, Calendar, ArrowRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Products – Physical Gold, Silver & Precious Metals',
  description:
    'Shop hundreds of physical gold, silver, platinum, and palladium products. Coins, bars, and more. Free shipping on qualifying orders.',
}

const categories = ['All', 'Gold', 'Silver', 'IRA Eligible']

const placeholderProducts = [
  { slug: 'american-gold-eagle-1oz', name: 'American Gold Eagle 1 oz BU', metal: 'Gold', price: 'Call for Price', image: '/images/products/productimage1.png' },
  { slug: 'gold-buffalo-1oz', name: 'Gold Buffalo 1 oz BU', metal: 'Gold', price: 'Call for Price', image: '/images/products/productimage2.png' },
  { slug: 'gold-krugerrand-1oz', name: 'Gold Krugerrand 1 oz', metal: 'Gold', price: 'Call for Price', image: '/images/products/productimage1.png' },
  { slug: 'pamp-suisse-gold-bar-1oz', name: 'PAMP Suisse Gold Bar 1 oz', metal: 'Gold', price: 'Call for Price', image: '/images/products/productimage2.png' },
  { slug: 'canadian-gold-maple-1oz', name: 'Canadian Gold Maple Leaf 1 oz', metal: 'Gold', price: 'Call for Price', image: '/images/products/productimage1.png' },
  { slug: 'double-eagle-20', name: '$20 Liberty Double Eagle Gold Coin', metal: 'Gold', price: 'Call for Price', image: '/images/products/productimage2.png' },
  { slug: 'griffin-quarter-oz', name: 'Mythical Creatures Griffin 1/4 oz Gold Coin', metal: 'Gold', price: 'Call for Price', image: '/images/products/productimage1.png' },
  { slug: 'american-silver-eagle-1oz', name: 'American Silver Eagle 1 oz', metal: 'Silver', price: 'Call for Price', image: '/images/products/productimage2.png' },
  { slug: 'silver-bar-10oz', name: 'Silver Bar 10 oz', metal: 'Silver', price: 'Call for Price', image: '/images/products/productimage1.png' },
]

export default function ProductsPage() {
  return (
    <div className="bg-[#FFFCF3]">
      {/* ===== HERO SECTION ===== */}
      <section className="relative -mt-[108px] lg:-mt-[124px]" style={{ isolation: 'isolate' }}>
        <div className="absolute inset-0 overflow-hidden">
          <Image
            src="/images/ira/hero-bg.png"
            alt="Shop precious metals"
            fill
            className="object-cover object-center"
            priority
            quality={90}
          />
        </div>
        <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-transparent via-brand-gold to-transparent opacity-60" />

        <div className="relative container-xl pt-48 lg:pt-56 pb-20 lg:pb-28 text-center">
          <div className="flex flex-col items-center gap-6">
            <span className="gold-badge">Shop</span>
            <h1 className="text-4xl sm:text-5xl lg:text-[40px] text-white font-light leading-tight">
              Explore physical Gold &amp; Silver
            </h1>

            {/* Category filter tabs */}
            <div className="flex items-center gap-3 flex-wrap justify-center mt-4">
              {categories.map((cat) => (
                <button
                  key={cat}
                  className={`px-5 py-2 rounded-full text-sm font-bold tracking-wide transition-all ${
                    cat === 'All'
                      ? 'bg-brand-gold text-white'
                      : 'bg-white/10 text-white border border-white/30 hover:bg-white/20'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ===== PRODUCTS GRID ===== */}
      <section className="py-12 lg:py-16 bg-[#FFFCF3]">
        <div className="container-xl">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {placeholderProducts.map((product) => (
              <Link
                key={product.slug}
                href={`/products/${product.slug}`}
                className="group bg-[#F7F0DD] rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 flex flex-col"
              >
                {/* Product image */}
                <div className="w-full aspect-square relative flex items-center justify-center p-8">
                  <Image
                    src={product.image}
                    alt={product.name}
                    width={300}
                    height={300}
                    className="object-contain max-h-full group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                {/* Info */}
                <div className="p-5 flex flex-col items-center text-center gap-2 bg-[#F7F0DD]">
                  <h3 className="text-brand-dark text-base font-medium leading-snug">
                    {product.name}
                  </h3>
                  <p className="text-brand-dark/60 text-sm">{product.price}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ===== TWO WAYS TO DIVERSIFY ===== */}
      <section className="py-16 lg:py-20 bg-[#FFFCF3]">
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

      {/* ===== GOLD & SILVER SHIPPED TO YOUR DOOR ===== */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/section_bg2.png"
            alt=""
            fill
            className="object-cover object-center"
          />
        </div>
        <div className="relative container-xl py-24 lg:py-36">
          <div className="max-w-lg flex flex-col gap-5">
            <h2 className="text-3xl lg:text-4xl text-white font-normal">
              Gold and silver shipped directly to your door
            </h2>
            <p className="text-gray-300 text-sm leading-relaxed">
              Purchase authentic gold and silver with free insured shipping
              nationwide. Hold real wealth in your hands — discreetly packaged
              and fully insured for your peace of mind.
            </p>
            <div className="flex flex-col gap-3 max-w-sm">
              <div>
                <p className="text-[#D8B150] text-xs font-bold tracking-[0.2em] uppercase mb-2">
                  Call Now
                </p>
                <a
                  href="tel:+18667614262"
                  className="text-[#D8B150] text-3xl lg:text-4xl font-light font-serif hover:opacity-80 transition-opacity"
                >
                  (866) 761-4262
                </a>
              </div>
              <Link href="/contact" className="btn-gold w-full text-center">
                Schedule a Call
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ===== HOW TO GET STARTED ===== */}
      <section className="py-16 lg:py-24 bg-[#F7F0DD]">
        <div className="container-xl">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            <div className="flex flex-col gap-8">
              <div>
                <h2 className="text-2xl lg:text-3xl text-brand-dark font-normal mb-4">
                  Why Are People Turning to Gold?
                </h2>
                <p className="text-brand-dark text-base leading-relaxed mb-3">
                  Investors are exploring gold for many reasons — whether
                  planning for retirement, enjoying their golden years, or simply
                  diversifying their wealth.
                </p>
                <p className="text-brand-dark text-base leading-relaxed">
                  Concerns about the declining value of the dollar, stock market
                  volatility, recession fears, banking system instability, and
                  inflation are driving many to seek safer, more stable assets.
                </p>
              </div>

              <div>
                <h3 className="text-2xl lg:text-3xl text-brand-dark font-normal mb-4">
                  How to Get Started with Gold and Silver Investments?
                </h3>
                <p className="text-brand-dark text-base leading-relaxed">
                  Start your journey by reaching out to us by phone or schedule
                  an appointment with us today. From educational resources to
                  personalized consultations, learn everything about gold IRAs,
                  silver IRAs, and physical precious metals.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/precious-metals-ira"
                  className="btn-gold flex items-center gap-2"
                >
                  Precious Metals IRA
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/home-delivery"
                  className="btn-outline-gold flex items-center gap-2"
                >
                  Cash Savings Investment
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            <div className="relative w-full aspect-[3/4] lg:aspect-auto lg:h-[500px] rounded-2xl overflow-hidden">
              <Image
                src="/images/why-gold-image.png"
                alt="Why people turn to gold"
                fill
                className="object-cover object-center"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
