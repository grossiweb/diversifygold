import Link from 'next/link'
import Image from 'next/image'

export default function DiversifySection() {
  return (
    <section className="py-16 lg:py-24 bg-[#FFFCF3]">
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
              {/* Left panel */}
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

              {/* Right panel */}
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
  )
}
