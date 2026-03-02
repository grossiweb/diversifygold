import { Metadata } from 'next'
import Link from 'next/link'
import { Filter } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Products – Physical Gold, Silver & Precious Metals',
  description:
    'Shop hundreds of physical gold, silver, platinum, and palladium products. Coins, bars, and more. Free shipping on qualifying orders.',
}

const categories = ['All', 'Gold', 'Silver', 'Platinum', 'Palladium', 'IRA Eligible']

const placeholderProducts = [
  { name: 'American Gold Eagle 1 oz', metal: 'Gold', type: 'Coin', price: '$2,750', ira: true },
  { name: 'Gold Buffalo 1 oz', metal: 'Gold', type: 'Coin', price: '$2,720', ira: true },
  { name: 'Gold Krugerrand 1 oz', metal: 'Gold', type: 'Coin', price: '$2,700', ira: false },
  { name: 'PAMP Suisse Gold Bar 1 oz', metal: 'Gold', type: 'Bar', price: '$2,680', ira: true },
  { name: 'American Silver Eagle 1 oz', metal: 'Silver', type: 'Coin', price: '$38', ira: true },
  { name: 'Canadian Silver Maple 1 oz', metal: 'Silver', type: 'Coin', price: '$36', ira: true },
  { name: 'Silver Bar 10 oz', metal: 'Silver', type: 'Bar', price: '$360', ira: true },
  { name: 'Silver Bar 100 oz', metal: 'Silver', type: 'Bar', price: '$3,400', ira: false },
  { name: 'Platinum American Eagle 1 oz', metal: 'Platinum', type: 'Coin', price: '$1,020', ira: true },
  { name: 'Platinum Bar 1 oz', metal: 'Platinum', type: 'Bar', price: '$990', ira: false },
  { name: 'Palladium Maple Leaf 1 oz', metal: 'Palladium', type: 'Coin', price: '$1,080', ira: true },
  { name: 'Gold Bar 10 oz', metal: 'Gold', type: 'Bar', price: '$26,500', ira: false },
]

export default function ProductsPage() {
  return (
    <div className="bg-white">
      {/* Hero */}
      <section
        className="py-20 relative"
        style={{ background: 'linear-gradient(135deg, #09111A 0%, #1a2535 100%)' }}
      >
        <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-transparent via-brand-gold to-transparent" />
        <div className="container-xl text-center flex flex-col items-center gap-4">
          <span className="gold-badge">Our Products</span>
          <h1 className="text-4xl sm:text-5xl text-white font-light">
            Shop Physical Precious Metals
          </h1>
          <p className="text-gray-300 max-w-xl">
            Browse 100s of authentic gold, silver, platinum, and palladium products. IRA-eligible options available.
          </p>
        </div>
      </section>

      {/* Filter bar */}
      <section className="bg-brand-beige py-6 border-b border-brand-gold/20">
        <div className="container-xl flex items-center gap-4 flex-wrap">
          <Filter className="w-4 h-4 text-brand-gold flex-shrink-0" />
          {categories.map((cat) => (
            <button
              key={cat}
              className={`px-4 py-1.5 rounded-full text-sm font-bold transition-all ${
                cat === 'All'
                  ? 'bg-brand-gold text-white'
                  : 'bg-white text-brand-dark border border-gray-200 hover:border-brand-gold/40'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* Products grid */}
      <section className="py-12 lg:py-16 bg-white">
        <div className="container-xl">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {placeholderProducts.map((product) => (
              <div
                key={product.name}
                className="group border border-gray-100 rounded-2xl overflow-hidden hover:border-brand-gold/40 hover:shadow-xl transition-all duration-300"
              >
                {/* Image placeholder */}
                <div className="w-full aspect-square bg-gradient-to-br from-brand-beige to-brand-gold/20 flex items-center justify-center">
                  <span className="text-5xl">
                    {product.metal === 'Gold' ? '🥇' : product.metal === 'Silver' ? '🥈' : '🏅'}
                  </span>
                </div>

                {/* Info */}
                <div className="p-5 flex flex-col gap-3">
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="text-xs font-bold text-brand-gold uppercase tracking-wide bg-brand-gold/10 px-2 py-0.5 rounded">
                      {product.metal}
                    </span>
                    <span className="text-xs text-brand-dark/50">{product.type}</span>
                    {product.ira && (
                      <span className="text-xs font-bold text-green-700 bg-green-50 px-2 py-0.5 rounded">
                        IRA Eligible
                      </span>
                    )}
                  </div>
                  <h3 className="font-semibold text-brand-dark text-sm leading-snug">
                    {product.name}
                  </h3>
                  <div className="flex items-center justify-between">
                    <span className="text-brand-gold font-bold">{product.price}</span>
                    <button className="text-xs btn-gold px-3 py-1.5">
                      Inquire
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <p className="text-center text-brand-dark/50 text-sm mt-12">
            Prices shown are indicative. Contact us for current market prices.{' '}
            <a href="tel:+18667614262" className="text-brand-gold hover:underline">
              (866) 761-4262
            </a>
          </p>
        </div>
      </section>
    </div>
  )
}
