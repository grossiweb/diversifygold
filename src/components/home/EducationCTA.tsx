import Link from 'next/link'
import Image from 'next/image'
import { Phone } from 'lucide-react'

interface EducationCTAProps {
  title?: string
  subtitle?: string
  body?: string
  iraTitle?: string
  iraContent?: string
}

export default function EducationCTA({
  title = 'Get Your Free Education Today',
  subtitle = 'Schedule a time or call us now!',
  body = `The best part? All of this is no-obligation education. Take a few minutes to understand how gold and silver can help diversify your retirement accounts or cash savings. When you're ready, you'll have the knowledge to make confident, informed decisions about adding precious metals to your diversified portfolio.`,
  iraTitle = 'Are you searching for the best Gold IRA Company?',
  iraContent = `If you're interested in diversifying and rolling over a retirement account into a self directed with physical gold and silver IRA, you're in the right place. We are a top-rated gold IRA company and here to guide you through the process, answer your questions, and help you make informed decisions. Whether you're just starting or looking to expand your existing retirement portfolio, investing in gold IRAs can provide stability and growth potential.`,
}: EducationCTAProps) {
  return (
    <>
      {/* Education CTA */}
      <section className="relative overflow-hidden">
        {/* Background image */}
        <div className="absolute inset-0">
          <Image
            src="/images/section_bg2.png"
            alt=""
            fill
            className="object-cover object-center"
          />
        </div>

        <div className="relative z-10 container-xl py-24 lg:py-36">
          <div className="max-w-lg flex flex-col gap-5">
            <h2 className="text-3xl lg:text-4xl text-white font-normal">
              {title}
            </h2>
            <p className="text-gray-300 text-sm">{subtitle}</p>

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

      {/* Gold IRA Section */}
      <section
        className="py-16 lg:py-24 bg-cover bg-center bg-no-repeat relative"
        style={{ backgroundImage: "url('/images/ira-bg.png')" }}
      >
        <div className="absolute inset-0 bg-[#F7F0DD]/80" />
        <div className="relative z-10 container-xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* IRA image from design */}
            <div className="w-full aspect-video rounded-2xl overflow-hidden relative">
              <Image
                src="/images/ira-image.png"
                alt="Gold IRA investment"
                fill
                className="object-cover object-center"
              />
            </div>

            {/* Content */}
            <div className="flex flex-col gap-6">
              <h2 className="text-2xl lg:text-3xl text-brand-dark font-normal">
                {iraTitle}
              </h2>
              <p className="text-brand-dark text-base leading-relaxed">
                {iraContent}
              </p>
              <Link href="/precious-metals-ira" className="btn-gold self-start">
                Learn About Gold IRA
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
