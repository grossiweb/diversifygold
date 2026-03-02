import Link from 'next/link'
import Image from 'next/image'

export default function DiversifySection() {
  return (
    <section className="py-16 lg:py-24 bg-[#FFFCF3]">
      <div className="container-xl">
        <div className="rounded-2xl overflow-hidden shadow-xl border border-gray-100 relative">
          {/* Full card background using diversify-card-inner.png */}
          <div className="absolute inset-0">
            <Image
              src="/images/diversify-card-inner.png"
              alt=""
              fill
              className="object-cover object-center"
            />
          </div>

          <div className="flex flex-col lg:flex-row relative">
            {/* Left dark panel with wavy gold pattern bg */}
            <div className="relative lg:w-[50%] flex flex-col items-center justify-center py-12 px-8 lg:py-16 lg:px-12 overflow-hidden">
              {/* Dark background with wavy gold pattern */}
              <div className="absolute inset-0">
                <Image
                  src="/images/diversify-card-bg.png"
                  alt=""
                  fill
                  className="object-cover object-center"
                />
              </div>

              {/* Logo and text */}
              <div className="relative z-10 flex flex-col items-center text-center gap-4">
                <Image
                  src="/images/logo.png"
                  alt="Diversify Gold"
                  width={120}
                  height={60}
                  className="h-14 w-auto object-contain brightness-0 invert"
                />
                <div>
                  <p className="text-white/70 text-[10px] font-bold tracking-[0.25em] uppercase">
                    Diversify Gold Inc.
                  </p>
                  <p className="text-brand-gold text-[10px] font-bold tracking-[0.2em] uppercase mt-1">
                    A Simple and Easy Change
                  </p>
                </div>
              </div>
            </div>

            {/* Right light panel */}
            <div className="relative lg:w-[50%] flex flex-col justify-center py-12 px-8 lg:py-16 lg:px-16">
              <div className="relative z-10">
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-normal text-brand-dark mb-2">
                  Two ways to Diversify
                </h2>
                <p className="text-brand-gold text-base sm:text-lg font-serif italic mb-8">
                  Cash savings &amp; retirement accounts
                </p>

                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
                  <div>
                    <p className="text-[10px] font-bold tracking-[0.2em] uppercase text-brand-dark mb-1">
                      Call Now
                    </p>
                    <a
                      href="tel:+18667614262"
                      className="text-brand-dark text-lg sm:text-xl font-light hover:text-brand-gold transition-colors"
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
      </div>
    </section>
  )
}
