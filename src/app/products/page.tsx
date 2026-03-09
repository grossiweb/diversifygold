import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Search, Phone, ArrowRight, Calendar } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Products – Physical Gold, Silver & Precious Metals',
  description:
    'Shop hundreds of physical gold, silver, platinum, and palladium products. Coins, bars, and more. Free shipping on qualifying orders.',
}

const categories = ['All', 'Gold', 'Silver', 'Platinum', 'Palladium', 'IRA Eligible']

const placeholderProducts = [
  { slug: 'american-gold-eagle-1oz', name: 'American Gold Eagle 1 oz', metal: 'Gold', type: 'Coin', price: '$2,750', ira: true, image: '/images/hero-coin.png' },
  { slug: 'gold-buffalo-1oz', name: 'Gold Buffalo 1 oz', metal: 'Gold', type: 'Coin', price: '$2,720', ira: true, image: '/images/hero-coin.png' },
  { slug: 'gold-krugerrand-1oz', name: 'Gold Krugerrand 1 oz', metal: 'Gold', type: 'Coin', price: '$2,700', ira: false, image: '/images/hero-coin.png' },
  { slug: 'pamp-suisse-gold-bar-1oz', name: 'PAMP Suisse Gold Bar 1 oz', metal: 'Gold', type: 'Bar', price: '$2,680', ira: true, image: '/images/hero-coin.png' },
  { slug: 'american-silver-eagle-1oz', name: 'American Silver Eagle 1 oz', metal: 'Silver', type: 'Coin', price: '$38', ira: true, image: '/images/hero-coin.png' },
  { slug: 'canadian-silver-maple-1oz', name: 'Canadian Silver Maple 1 oz', metal: 'Silver', type: 'Coin', price: '$36', ira: true, image: '/images/hero-coin.png' },
  { slug: 'silver-bar-10oz', name: 'Silver Bar 10 oz', metal: 'Silver', type: 'Bar', price: '$360', ira: true, image: '/images/hero-coin.png' },
  { slug: 'silver-bar-100oz', name: 'Silver Bar 100 oz', metal: 'Silver', type: 'Bar', price: '$3,400', ira: false, image: '/images/hero-coin.png' },
  { slug: 'platinum-american-eagle-1oz', name: 'Platinum American Eagle 1 oz', metal: 'Platinum', type: 'Coin', price: '$1,020', ira: true, image: '/images/hero-coin.png' },
]

export default function ProductsPage() {
  return (
    <div className="bg-[#FFFCF3]">
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/hero-bg.jpg"
            alt="Shop precious metals"
            fill
            className="object-cover object-center"
            priority
            quality={90}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70" />
        </div>

        <div className="relative container-xl py-28 lg:py-36 text-center flex flex-col items-center gap-5">
          <span className="gold-badge">Our Products</span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl text-white font-light leading-tight">
            Shop Physical Precious Metals
          </h1>
          <p className="text-gray-300 max-w-2xl text-lg">
            Browse 100s of authentic gold, silver, platinum, and palladium products. IRA-eligible options available.
          </p>

          {/* Search bar */}
          <div className="mt-4 w-full max-w-md">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-brand-dark/40" />
              <input
                type="text"
                placeholder="Search products..."
                className="w-full pl-11 pr-4 py-3 rounded-xl bg-white border border-brand-gold/20 text-brand-dark text-sm placeholder:text-brand-dark/40 focus:outline-none focus:border-brand-gold/60 transition-colors"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Category filter tabs */}
      <section className="bg-[#FFFCF3] py-5 border-b border-brand-gold/10">
        <div className="container-xl flex items-center gap-3 flex-wrap justify-center">
          {categories.map((cat) => (
            <button
              key={cat}
              className={`px-5 py-2 rounded-full text-sm font-bold tracking-wide transition-all ${
                cat === 'All'
                  ? 'btn-gold !py-2 !px-5 !text-sm !tracking-wide'
                  : 'bg-white text-brand-dark border border-brand-gold/20 hover:border-brand-gold hover:bg-brand-beige'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* Products grid */}
      <section className="py-12 lg:py-16 bg-[#FFFCF3]">
        <div className="container-xl">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {placeholderProducts.map((product) => (
              <Link
                key={product.slug}
                href={`/products/${product.slug}`}
                className="group bg-brand-beige rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 flex flex-col"
              >
                {/* Product image */}
                <div className="w-full aspect-[5/3] relative bg-brand-beige flex items-center justify-center p-6">
                  <Image
                    src={product.image}
                    alt={product.name}
                    width={304}
                    height={182}
                    className="object-contain max-h-full group-hover:scale-105 transition-transform duration-500"
                  />
                  {product.ira && (
                    <span className="absolute top-4 right-4 text-xs font-bold text-white bg-brand-green px-2.5 py-1 rounded-full">
                      IRA Eligible
                    </span>
                  )}
                </div>

                {/* Info */}
                <div className="p-5 flex flex-col gap-3 bg-white flex-1">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-bold text-brand-gold uppercase tracking-wide bg-brand-gold/10 px-2 py-0.5 rounded">
                      {product.metal}
                    </span>
                    <span className="text-xs text-brand-dark/50">{product.type}</span>
                  </div>
                  <h3 className="font-semibold text-brand-dark text-base leading-snug">
                    {product.name}
                  </h3>
                  <p className="text-brand-gold font-bold text-lg">{product.price}</p>
                </div>

                {/* CTA Button */}
                <div className="px-5 pb-5 bg-white">
                  <span className="btn-gold w-full !py-3 !text-sm">
                    View Product
                  </span>
                </div>
              </Link>
            ))}
          </div>

          {/* Pagination */}
          <div className="flex items-center justify-center gap-2 mt-12">
            <button className="w-8 h-8 rounded-lg bg-brand-gold text-white text-sm font-bold flex items-center justify-center">
              1
            </button>
            <button className="w-8 h-8 rounded-lg bg-[#FFFCF3] border border-brand-gold/20 text-brand-dark text-sm font-bold flex items-center justify-center hover:border-brand-gold transition-colors">
              2
            </button>
            <button className="w-8 h-8 rounded-lg bg-[#FFFCF3] border border-brand-gold/20 text-brand-dark text-sm font-bold flex items-center justify-center hover:border-brand-gold transition-colors">
              3
            </button>
            <button className="w-8 h-8 rounded-lg bg-[#FFFCF3] border border-brand-gold/20 text-brand-dark text-sm font-bold flex items-center justify-center hover:border-brand-gold transition-colors">
              4
            </button>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-12 lg:py-16 bg-[#FFFCF3]">
        <div className="container-xl">
          <div className="bg-white rounded-[32px] p-8 lg:p-12 flex flex-col lg:flex-row items-center gap-8 lg:gap-12 shadow-lg border border-brand-gold/10">
            {/* Logo */}
            <div className="flex-shrink-0">
              <Image
                src="/images/logo.png"
                alt="Diversify Gold"
                width={265}
                height={71}
                className="w-48 lg:w-64 h-auto"
              />
            </div>

            {/* Info */}
            <div className="flex-1 text-center lg:text-left">
              <div className="inline-block bg-brand-beige-warm rounded-2xl px-6 py-4">
                <p className="text-brand-dark font-medium text-sm lg:text-base">
                  Call us to get the best pricing and expert guidance on your precious metals investment.
                </p>
              </div>
            </div>

            {/* CTA */}
            <a
              href="tel:+18667614262"
              className="btn-gold flex items-center gap-2 flex-shrink-0 !px-8 !py-4"
            >
              <Phone className="w-5 h-5" />
              (866) 761-4262
            </a>
          </div>
        </div>
      </section>

      {/* Why Gold Section */}
      <section className="bg-brand-beige py-16 lg:py-24">
        <div className="container-xl">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            <div className="flex flex-col gap-8">
              <div>
                <h2 className="text-2xl lg:text-3xl text-brand-dark font-normal mb-4">
                  Why Are People Turning to Gold?
                </h2>
                <p className="text-brand-dark text-base leading-relaxed mb-3">
                  Investors are exploring gold for many reasons — whether planning for retirement, enjoying their golden years, or simply diversifying their wealth.
                </p>
                <p className="text-brand-dark text-base leading-relaxed">
                  Concerns about the declining value of the dollar, stock market volatility, recession fears, banking system instability, and inflation are driving many to seek safer, more stable assets.
                </p>
              </div>

              <div>
                <h3 className="text-2xl lg:text-3xl text-brand-dark font-normal mb-4">
                  How to Get Started?
                </h3>
                <p className="text-brand-dark text-base leading-relaxed">
                  Start your journey by reaching out to us by phone or schedule an appointment with us today. From educational resources to personalized consultations, learn everything about gold IRAs, silver IRAs, and physical precious metals.
                </p>
              </div>

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

            <div className="relative">
              <div className="w-full aspect-[3/4] lg:aspect-auto lg:h-[500px] rounded-2xl overflow-hidden relative">
                <Image
                  src="/images/why-gold-image.png"
                  alt="Why people turn to gold"
                  fill
                  className="object-cover object-center"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="bg-brand-beige py-16 lg:py-24 relative overflow-hidden">
        <div className="container-xl relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-2xl lg:text-3xl text-brand-dark font-normal mb-4">
                Ready to Diversify Your Portfolio?
              </h2>
              <p className="text-brand-dark text-base leading-relaxed mb-6">
                Speak with one of our precious metals specialists to find the right investment strategy for your financial goals.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="tel:+18667614262" className="btn-gold flex items-center gap-2">
                  <Phone className="w-5 h-5" />
                  Call Now
                </a>
                <Link href="/contact" className="btn-gold flex items-center gap-2">
                  <Calendar className="w-5 h-5" />
                  Schedule a Call
                </Link>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/images/ira-image.png"
                alt="Diversify your portfolio"
                width={854}
                height={570}
                className="w-full h-auto rounded-2xl"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
