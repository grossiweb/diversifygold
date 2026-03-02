import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight } from 'lucide-react'

interface ProductsSectionProps {
  title?: string
}

export default function ProductsSection({
  title = "Shop 100's of top physical gold & silver products",
}: ProductsSectionProps) {
  return (
    <section
      className="py-16 lg:py-20 bg-cover bg-center bg-no-repeat relative bg-[#FFFCF3]"
      style={{ backgroundImage: "url('/images/products-bg.png')" }}
    >
      {/* Subtle overlay to keep text readable */}
     
      <div className="relative z-10 container-xl">
        <div className="text-center mb-10">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl text-brand-dark font-normal">
            {title}
          </h2>
        </div>

        {/* Products image strip from design */}
        <div className="mb-10">
          <Image
            src="/images/products-strip.png"
            alt="Physical gold and silver products"
            width={1200}
            height={149}
            className="w-full h-auto object-contain"
            priority
          />
        </div>

        <div className="text-center">
          <Link
            href="/products"
            className="btn-gold inline-flex items-center gap-2"
          >
            View All Products
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}
