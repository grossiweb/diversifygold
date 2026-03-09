'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Phone, Calendar } from 'lucide-react'
import { useState } from 'react'

/* ── Placeholder product data ─────────────────────────────── */
const allProducts: Record<
  string,
  {
    name: string
    metal: string
    description: string
    specs: string[]
    highlights: string[]
    images: string[]
  }
> = {
  'griffin-quarter-oz': {
    name: 'Mythical Creatures Griffin 1/4 oz Gold Coin',
    metal: 'Gold',
    description:
      'Minted from California Gold Rush bullion, the $20 Liberty Double Eagle displays Liberty with a coronet and a heraldic eagle.',
    specs: [
      'Designer(s): James B. Longacre',
      'Gross Weight: 33.44 g',
      'Composition: 90% Gold, 10% Copper',
      'Content: 0.9675 oz',
      'Date(s): 1849–1907',
      'Condition: BU, MS-64',
      'IRA Approved: No',
    ],
    highlights: [
      'Multiples of 20 are packaged in plastic tubes. All other coins will be in protective packaging.',
      'Obverse: Shows Liberty, facing left, encircled by 13 stars with the word "Liberty" on her hair band.',
      'Reverse: Features a heraldic eagle with a shield on its breast with thirteen stars above. Surrounding the eagle is "United States of America" and the denomination.',
      'U.S. Mint issue from the following mints: Philadelphia, Carson City, Denver, New Orleans or San Francisco.',
    ],
    images: [
      '/images/products/productimage2.png',
      '/images/products/productimage1.png',
      '/images/products/productimage2.png',
    ],
  },
}

const fallbackProduct = {
  name: 'Gold Coin',
  metal: 'Gold',
  description:
    'A premium gold coin backed by sovereign governments. Ideal for investors looking to diversify their portfolio with physical precious metals. Each coin is authenticated and guaranteed for weight, content, and purity.',
  specs: [
    'Weight: 1 troy oz (31.1g)',
    'Purity: 99.99% Gold (24k)',
    'IRA Eligible: Yes',
    'Type: Investment Grade',
  ],
  highlights: [
    'Coins are shipped in protective packaging.',
    'Authenticated and guaranteed for weight, content, and purity.',
    'Ideal for both investment portfolios and personal collections.',
  ],
  images: [
    '/images/products/productimage1.png',
    '/images/products/productimage2.png',
    '/images/products/productimage1.png',
  ],
}

export default function ProductDetailPage() {
  const [selectedImage, setSelectedImage] = useState(0)

  const slug =
    typeof window !== 'undefined'
      ? window.location.pathname.split('/').pop() || ''
      : ''
  const product = allProducts[slug] || fallbackProduct

  const readableTitle =
    allProducts[slug]?.name ??
    slug
      .replace(/-/g, ' ')
      .replace(/\b\w/g, (c) => c.toUpperCase())

  return (
    <div className="bg-[#FFFCF3]">
      {/* Spacing for fixed header */}
      <div className="pt-24 lg:pt-28" />

      {/* ===== BREADCRUMB + TITLE ===== */}
      <section className="bg-[#FFFCF3] pb-8">
        <div className="container-xl">
          <div className="flex items-center gap-3 text-base mb-8">
            <Link href="/" className="text-[#D8B150] hover:underline">
              Home
            </Link>
            <span className="text-brand-dark">/</span>
            <Link
              href="/products"
              className="text-brand-dark hover:text-[#D8B150]"
            >
              Products
            </Link>
            <span className="text-brand-dark">/</span>
            <span className="text-brand-dark">{readableTitle}</span>
          </div>
          <h1 className="text-[32px] lg:text-[40px] text-brand-dark font-normal leading-snug max-w-xl">
            {readableTitle}
          </h1>
        </div>
      </section>

      {/* ===== PRODUCT CONTENT + SIDEBAR ===== */}
      <section className="pb-16 lg:pb-24 bg-[#FFFCF3]">
        <div className="container-xl">
          <div className="flex items-start gap-7">
            {/* Left: Product info */}
            <div className="flex-1 flex flex-col gap-14">
              {/* Image gallery */}
              <div className="flex flex-col gap-2">
                {/* Main image */}
                <div className="w-full aspect-[4/3] bg-[#F7F0DD] rounded-lg overflow-hidden flex items-center justify-center p-8">
                  <Image
                    src={product.images[selectedImage]}
                    alt={readableTitle}
                    width={500}
                    height={415}
                    className="object-contain max-h-full"
                    priority
                  />
                </div>
                {/* Thumbnails */}
                <div className="flex gap-2">
                  {product.images.slice(0, 2).map((img, idx) => (
                    <button
                      key={idx}
                      onClick={() => setSelectedImage(idx)}
                      className={`w-[196px] h-[118px] bg-[#F7F0DD] rounded overflow-hidden flex items-center justify-center p-3 border-2 transition-all ${
                        selectedImage === idx
                          ? 'border-brand-gold'
                          : 'border-transparent hover:border-brand-gold/40'
                      }`}
                    >
                      <Image
                        src={img}
                        alt={`View ${idx + 1}`}
                        width={160}
                        height={100}
                        className="object-contain max-h-full"
                      />
                    </button>
                  ))}
                </div>
              </div>

              {/* Details section */}
              <div className="flex flex-col gap-9">
                <div className="flex flex-col gap-3.5">
                  <h2 className="text-brand-dark text-xl font-medium">
                    Details
                  </h2>
                  <p className="text-brand-dark text-base leading-relaxed">
                    {product.description}
                  </p>
                </div>

                <div className="flex flex-col gap-3.5">
                  <h2 className="text-brand-dark text-xl font-medium">
                    Specifications
                  </h2>
                  <div className="flex flex-col gap-1">
                    {product.specs.map((spec) => (
                      <p key={spec} className="text-brand-dark text-base">
                        {spec}
                      </p>
                    ))}
                  </div>
                </div>

                <div className="flex flex-col gap-3.5">
                  <h2 className="text-brand-dark text-xl font-medium">
                    Coin Highlights
                  </h2>
                  <div className="flex flex-col gap-2">
                    {product.highlights.map((h) => (
                      <p key={h} className="text-brand-dark text-base leading-relaxed">
                        {h}
                      </p>
                    ))}
                  </div>
                </div>

                {/* CTA buttons */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href="tel:+18667614262"
                    className="btn-gold flex items-center gap-2"
                  >
                    <Phone className="w-5 h-5" />
                    Call Now for Enquiry (866) 761-4262
                  </a>
                  <Link
                    href="/contact"
                    className="btn-gold flex items-center gap-2"
                  >
                    <Calendar className="w-5 h-5" />
                    Schedule a Call
                  </Link>
                </div>
              </div>

              {/* Gold Price Chart */}
              <div className="flex flex-col gap-3.5">
                <h2 className="text-brand-dark text-xl font-medium">
                  Gold Price today
                </h2>
                <div className="relative w-full aspect-[710/524] rounded-lg overflow-hidden">
                  <Image
                    src="/images/products/gold-chart.png"
                    alt="Gold price chart"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
            </div>

            {/* Right: Sidebar */}
            <div className="hidden lg:flex flex-col items-start gap-4 w-[390px] flex-shrink-0">
              {/* Two Ways to Diversify sidebar card */}
              <div
                className="w-full rounded-lg overflow-hidden relative"
                style={{
                  backgroundImage:
                    "url('/images/products/sidebar-card-bg.png')",
                  backgroundSize: '100% 100%',
                }}
              >
                <div
                  className="relative rounded-lg overflow-hidden"
                  style={{
                    backgroundImage:
                      "url('/images/products/sidebar-card-inner.png')",
                    backgroundSize: '100% 100%',
                  }}
                >
                  <div className="flex flex-col items-center pt-11 px-8 pb-64">
                    <p className="text-white text-xl mb-8 text-center">
                      Two Ways to Diversify
                    </p>
                    <p className="text-[#D9B640] text-2xl text-center leading-snug">
                      Cash Savings
                      <br />
                      &amp;
                      <br />
                      Retirement Accounts
                    </p>
                  </div>
                </div>
                <div className="text-center py-3">
                  <p className="text-black text-xl">
                    Compare Gold &amp; Silver Companies
                  </p>
                </div>
                <div className="px-10 pb-8">
                  <Link
                    href="/contact"
                    className="btn-gold w-full text-center block"
                  >
                    Compare Now
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
