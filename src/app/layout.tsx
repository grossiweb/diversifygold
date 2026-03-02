import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import './globals.css'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
})

export const metadata: Metadata = {
  title: {
    default: 'Diversify Gold – Premium Gold & Silver Investments',
    template: '%s | Diversify Gold',
  },
  description:
    'Diversify your retirement accounts or cash savings with physical gold and silver. US-owned & operated. Free consultation available.',
  keywords: [
    'gold IRA',
    'silver IRA',
    'precious metals',
    'gold investment',
    'diversify gold',
    'retirement accounts',
    'gold rollover',
  ],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    siteName: 'Diversify Gold',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body>
        <Header />
        <main className="pt-[108px] lg:pt-[124px]">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
