'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Phone, ArrowLeft, ArrowRight, Shield, Truck, Award, Calendar } from 'lucide-react'
import { useState } from 'react'

/* ── Placeholder product data ─────────────────────────────── */
const allProducts: Record<
  string,
  {
    name: string
    metal: string
    type: string
    price: string
    weight: string
    purity: string
    mint: string
    ira: boolean
    images: string[]
    description: string
    specs: { label: string; value: string }[]
  }
> = {
  'american-gold-eagle-1oz': {
    name: 'American Gold Eagle 1 oz',
    metal: 'Gold',
    type: 'Coin',
    price: '$2,750',
    weight: '1 oz (31.1g)',
    purity: '91.67% (22 karat)',
    mint: 'U.S. Mint',
    ira: true,
    images: ['/images/hero-coin.png', '/images/hero-coin.png', '/images/hero-coin.png'],
    description:
      'The American Gold Eagle is one of the most popular gold coins in the world, produced by the United States Mint since 1986. It is backed by the U.S. government for weight, content, and purity, making it a trusted choice for investors and collectors alike. The obverse features Augustus Saint-Gaudens\' iconic Lady Liberty design, while the reverse showcases a family of eagles.',
    specs: [
      { label: 'Weight', value: '1 troy oz (31.1g)' },
      { label: 'Purity', value: '91.67% Gold (22k)' },
      { label: 'Diameter', value: '32.7mm' },
      { label: 'Thickness', value: '2.87mm' },
      { label: 'Mint', value: 'U.S. Mint' },
      { label: 'Face Value', value: '$50 USD' },
      { label: 'IRA Eligible', value: 'Yes' },
      { label: 'Country', value: 'United States' },
    ],
  },
}

/* Fallback product for unknown slugs */
const fallbackProduct = {
  name: 'Gold Coin 1 oz',
  metal: 'Gold',
  type: 'Coin',
  price: '$2,750',
  weight: '1 oz (31.1g)',
  purity: '91.67% (22 karat)',
  mint: 'U.S. Mint',
  ira: true,
  images: ['/images/hero-coin.png', '/images/hero-coin.png', '/images/hero-coin.png'],
  description:
    'A premium gold coin backed by sovereign governments. Ideal for investors looking to diversify their portfolio with physical precious metals. Each coin is authenticated and guaranteed for weight, content, and purity.',
  specs: [
    { label: 'Weight', value: '1 troy oz (31.1g)' },
    { label: 'Purity', value: '99.99% Gold (24k)' },
    { label: 'IRA Eligible', value: 'Yes' },
    { label: 'Type', value: 'Investment Grade' },
  ],
}

const relatedProducts = [
  { slug: 'gold-buffalo-1oz', name: 'Gold Buffalo 1 oz', price: '$2,720', metal: 'Gold', image: '/images/hero-coin.png' },
  { slug: 'gold-krugerrand-1oz', name: 'Gold Krugerrand 1 oz', price: '$2,700', metal: 'Gold', image: '/images/hero-coin.png' },
  { slug: 'pamp-suisse-gold-bar-1oz', name: 'PAMP Suisse Gold Bar 1 oz', price: '$2,680', metal: 'Gold', image: '/images/hero-coin.png' },
]

export default function ProductDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const [selectedImage, setSelectedImage] = useState(0)
  const [activeTab, setActiveTab] = useState<'description' | 'specs'>('description')

  // Unwrap params - in Next.js 15+ params is a Promise in page components
  // For client component we use React.use() pattern but for simplicity we'll extract from URL
  const slug = typeof window !== 'undefined' ? window.location.pathname.split('/').pop() || '' : ''
  const product = allProducts[slug] || fallbackProduct

  return (
    <div className="bg-[#FFFCF3]">
      {/* Breadcrumb */}
      <section className="bg-[#FFFCF3] border-b border-brand-gold/10">
        <div className="container-xl py-4">
          <nav className="flex items-center gap-2 text-sm">
            <Link href="/products" className="text-brand-gold hover:underline flex items-center gap-1">
              <ArrowLeft className="w-3.5 h-3.5" />
              Back to Products
            </Link>
            <span className="text-brand-dark/30">/</span>
            <span className="text-brand-dark/60">{product.metal}</span>
            <span className="text-brand-dark/30">/</span>
            <span className="text-brand-dark font-medium">{product.name}</span>
          </nav>
        </div>
      </section>

      {/* Product Hero */}
      <section className="py-10 lg:py-16 bg-[#FFFCF3]">
        <div className="container-xl">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16">
            {/* Left: Image gallery */}
            <div className="flex flex-col gap-4">
              {/* Main image */}
              <div className="w-full aspect-[4/3] bg-brand-beige rounded-2xl overflow-hidden relative flex items-center justify-center p-8">
                <Image
                  src={product.images[selectedImage]}
                  alt={product.name}
                  width={500}
                  height={400}
                  className="object-contain max-h-full"
                  priority
                />
                {product.ira && (
                  <span className="absolute top-4 right-4 text-xs font-bold text-white bg-brand-green px-3 py-1.5 rounded-full">
                    IRA Eligible
                  </span>
                )}
              </div>

              {/* Thumbnails */}
              <div className="flex gap-3">
                {product.images.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setSelectedImage(idx)}
                    className={`w-24 h-[72px] rounded-xl overflow-hidden border-2 transition-all flex items-center justify-center p-2 ${
                      selectedImage === idx
                        ? 'border-brand-gold bg-brand-beige'
                        : 'border-transparent bg-brand-beige/60 hover:border-brand-gold/40'
                    }`}
                  >
                    <Image
                      src={img}
                      alt={`${product.name} view ${idx + 1}`}
                      width={80}
                      height={60}
                      className="object-contain max-h-full"
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* Right: Product info */}
            <div className="flex flex-col gap-6">
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-xs font-bold text-brand-gold uppercase tracking-wide bg-brand-gold/10 px-2.5 py-1 rounded">
                    {product.metal}
                  </span>
                  <span className="text-xs text-brand-dark/50">{product.type}</span>
                  {product.ira && (
                    <span className="text-xs font-bold text-brand-green bg-brand-green/10 px-2.5 py-1 rounded">
                      IRA Eligible
                    </span>
                  )}
                </div>
                <h1 className="text-3xl lg:text-4xl text-brand-dark font-normal leading-tight">
                  {product.name}
                </h1>
              </div>

              <div className="text-3xl lg:text-4xl font-bold text-brand-gold">
                {product.price}
              </div>

              {/* Quick specs */}
              <div className="grid grid-cols-2 gap-3">
                <div className="bg-brand-beige rounded-xl p-4">
                  <p className="text-xs text-brand-dark/50 uppercase tracking-wide mb-1">Weight</p>
                  <p className="text-sm font-bold text-brand-dark">{product.weight}</p>
                </div>
                <div className="bg-brand-beige rounded-xl p-4">
                  <p className="text-xs text-brand-dark/50 uppercase tracking-wide mb-1">Purity</p>
                  <p className="text-sm font-bold text-brand-dark">{product.purity}</p>
                </div>
                <div className="bg-brand-beige rounded-xl p-4">
                  <p className="text-xs text-brand-dark/50 uppercase tracking-wide mb-1">Mint</p>
                  <p className="text-sm font-bold text-brand-dark">{product.mint}</p>
                </div>
                <div className="bg-brand-beige rounded-xl p-4">
                  <p className="text-xs text-brand-dark/50 uppercase tracking-wide mb-1">Type</p>
                  <p className="text-sm font-bold text-brand-dark">{product.type}</p>
                </div>
              </div>

              {/* CTA buttons */}
              <div className="flex flex-col sm:flex-row gap-3 mt-2">
                <a
                  href="tel:+18667614262"
                  className="btn-gold flex-1 flex items-center justify-center gap-2 !py-4"
                >
                  <Phone className="w-5 h-5" />
                  Call to Order
                </a>
                <Link
                  href="/contact"
                  className="btn-outline-gold flex-1 flex items-center justify-center gap-2 !py-4"
                >
                  <Calendar className="w-5 h-5" />
                  Schedule a Call
                </Link>
              </div>

              {/* Trust badges */}
              <div className="flex items-center gap-6 pt-4 border-t border-brand-gold/10">
                <div className="flex items-center gap-2 text-sm text-brand-dark/70">
                  <Shield className="w-4 h-4 text-brand-gold" />
                  Authenticity Guaranteed
                </div>
                <div className="flex items-center gap-2 text-sm text-brand-dark/70">
                  <Truck className="w-4 h-4 text-brand-gold" />
                  Insured Shipping
                </div>
                <div className="flex items-center gap-2 text-sm text-brand-dark/70">
                  <Award className="w-4 h-4 text-brand-gold" />
                  BBB Accredited
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tabs: Description & Specifications */}
      <section className="pb-16 lg:pb-24 bg-[#FFFCF3]">
        <div className="container-xl">
          {/* Tab headers */}
          <div className="flex gap-1 mb-6">
            <button
              onClick={() => setActiveTab('description')}
              className={`flex-1 sm:flex-none sm:min-w-[200px] py-3.5 px-6 rounded-xl text-sm font-bold uppercase tracking-wide transition-all ${
                activeTab === 'description'
                  ? 'btn-gold !rounded-xl'
                  : 'bg-brand-beige text-brand-dark hover:bg-brand-beige/80'
              }`}
            >
              Description
            </button>
            <button
              onClick={() => setActiveTab('specs')}
              className={`flex-1 sm:flex-none sm:min-w-[200px] py-3.5 px-6 rounded-xl text-sm font-bold uppercase tracking-wide transition-all ${
                activeTab === 'specs'
                  ? 'btn-gold !rounded-xl'
                  : 'bg-brand-beige text-brand-dark hover:bg-brand-beige/80'
              }`}
            >
              Specifications
            </button>
          </div>

          {/* Tab content */}
          <div className="bg-brand-beige rounded-2xl p-6 lg:p-10">
            {activeTab === 'description' ? (
              <div className="max-w-3xl">
                <p className="text-brand-dark text-base leading-relaxed">
                  {product.description}
                </p>
              </div>
            ) : (
              <div className="max-w-2xl">
                <div className="grid gap-0">
                  {product.specs.map((spec, idx) => (
                    <div
                      key={spec.label}
                      className={`flex items-center justify-between py-3.5 ${
                        idx !== product.specs.length - 1 ? 'border-b border-brand-gold/10' : ''
                      }`}
                    >
                      <span className="text-brand-dark/60 text-sm font-medium">{spec.label}</span>
                      <span className="text-brand-dark font-bold text-sm">{spec.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Related Products */}
      <section className="py-16 lg:py-20 bg-brand-beige">
        <div className="container-xl">
          <h2 className="text-2xl lg:text-3xl text-brand-dark font-normal text-center mb-10">
            You May Also Like
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {relatedProducts.map((item) => (
              <Link
                key={item.slug}
                href={`/products/${item.slug}`}
                className="group bg-brand-beige rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 flex flex-col border border-brand-gold/10"
              >
                <div className="w-full aspect-[5/3] relative flex items-center justify-center p-6">
                  <Image
                    src={item.image}
                    alt={item.name}
                    width={304}
                    height={182}
                    className="object-contain max-h-full group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-5 flex flex-col gap-2 bg-white flex-1">
                  <span className="text-xs font-bold text-brand-gold uppercase tracking-wide bg-brand-gold/10 px-2 py-0.5 rounded w-fit">
                    {item.metal}
                  </span>
                  <h3 className="font-semibold text-brand-dark text-base">{item.name}</h3>
                  <p className="text-brand-gold font-bold text-lg">{item.price}</p>
                </div>
                <div className="px-5 pb-5 bg-white">
                  <span className="btn-gold w-full !py-3 !text-sm">
                    View Product
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-16 lg:py-20 bg-[#FFFCF3]">
        <div className="container-xl text-center">
          <h2 className="text-2xl lg:text-3xl text-brand-dark font-normal mb-4">
            Need Help Choosing the Right Product?
          </h2>
          <p className="text-brand-dark/70 max-w-xl mx-auto mb-8">
            Our precious metals specialists are here to help you make the best investment decision.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:+18667614262" className="btn-gold flex items-center gap-2">
              <Phone className="w-5 h-5" />
              (866) 761-4262
            </a>
            <Link href="/products" className="btn-outline-gold flex items-center gap-2">
              Browse All Products
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
