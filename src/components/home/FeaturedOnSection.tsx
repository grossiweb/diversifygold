import Image from 'next/image'

// Real logos downloaded from the Figma design
const localLogos = [
  { name: 'Media Logo 1', src: '/images/featured-logo-1.png', w: 250, h: 41 },
  { name: 'Media Logo 2', src: '/images/featured-logo-2.png', w: 79, h: 81 },
  { name: 'Media Logo 3', src: '/images/featured-logo-3.png', w: 183, h: 44 },
  { name: 'Media Logo 4', src: '/images/featured-logo-4.png', w: 150, h: 54 },
  { name: 'Media Logo 5', src: '/images/featured-logo-5.png', w: 95, h: 41 },
  { name: 'Media Logo 6', src: '/images/featured-logo-6.png', w: 91, h: 80 },
  { name: 'Media Logo 7', src: '/images/featured-logo-7.png', w: 162, h: 50 },
]

interface FeaturedOnSectionProps {
  logos?: { name: string; imageUrl: string }[]
}

export default function FeaturedOnSection({ logos }: FeaturedOnSectionProps) {
  return (
    <section className="bg-[#FFFCF3] py-12">
      <div className="container-xl">
        <h3 className="text-center text-2xl lg:text-3xl text-brand-dark font-normal mb-10">
          Featured on
        </h3>

        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
          {logos && logos.length > 0
            ? logos.map((logo) => (
                <div
                  key={logo.name}
                  className="flex items-center justify-center opacity-70 hover:opacity-100 transition-opacity duration-200"
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={logo.imageUrl}
                    alt={logo.name}
                    className="h-10 w-auto object-contain"
                  />
                </div>
              ))
            : localLogos.map((logo) => (
                <div
                  key={logo.name}
                  className="flex items-center justify-center opacity-70 hover:opacity-100 transition-opacity duration-200"
                >
                  <Image
                    src={logo.src}
                    alt={logo.name}
                    width={logo.w}
                    height={logo.h}
                    className="h-10 w-auto object-contain"
                  />
                </div>
              ))}
        </div>
      </div>
    </section>
  )
}
