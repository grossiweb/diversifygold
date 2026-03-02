import Link from 'next/link'
import Image from 'next/image'
import { Phone, Calendar, CheckCircle2 } from 'lucide-react'

const benefits = [
  'US-owned & operated',
  'Free, no-obligation consultation available in-person, via Zoom, or by phone',
  'No-fee buyback commitment exclusively for Diversify Gold clients',
  'Free nationwide shipping*',
]

interface WhyUsSectionProps {
  title?: string
  description?: string
  imageUrl?: string
}

export default function WhyUsSection({
  title = 'Why Diversify Gold',
  description =
    "A Company where Honesty, transparency, and client-first investing come together to make gold and silver accessible for everyone.",
  imageUrl,
}: WhyUsSectionProps) {
  const imageSrc = imageUrl ?? '/images/why-us-image.png'

  return (
    <section className="bg-[#F7F0DD] py-16 lg:py-24">
      <div className="container-xl">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image */}
          <div className="order-2 lg:order-1">
            <div className="w-full aspect-[4/3] rounded-2xl overflow-hidden relative">
              <Image
                src={imageSrc}
                alt="Why Diversify Gold"
                fill
                className="object-cover object-center"
              />
            </div>
          </div>

          {/* Content */}
          <div className="order-1 lg:order-2 flex flex-col gap-6">
            <div>
              <h2 className="text-3xl lg:text-4xl text-brand-dark font-normal mb-4">
                {title}
              </h2>
              <p className="text-base text-brand-dark leading-relaxed">
                {description}
              </p>
            </div>

            {/* Benefit list with real gold divider from design */}
            <div className="flex gap-4 items-stretch">
              <Image
                src="/images/gold-divider.png"
                alt=""
                width={13}
                height={151}
                className="object-fill flex-shrink-0 self-stretch"
                aria-hidden="true"
              />
              <ul className="flex flex-col gap-3">
                {benefits.map((b) => (
                  <li key={b} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-brand-gold flex-shrink-0 mt-0.5" />
                    <span className="text-brand-dark text-sm leading-relaxed">
                      {b}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <a
                href="tel:+18667614262"
                className="btn-gold flex items-center gap-2"
              >
                <Phone className="w-4 h-4" />
                (866) 761-4262
              </a>
              <Link href="/contact" className="btn-outline-gold flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                Schedule a Call
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
