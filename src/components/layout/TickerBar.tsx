'use client'

import Image from 'next/image'
import { TrendingUp, TrendingDown } from 'lucide-react'

const metals = [
  { name: 'Gold', price: '$4280.32', change: '$73', up: true },
  { name: 'Silver', price: '$4280.32', change: '$73', up: true },
  { name: 'Platinum', price: '$4280.32', change: '$73', up: true },
]

// Duplicate for seamless loop
const tickerItems = [...metals, ...metals]

export default function TickerBar() {
  return (
    <div className="bg-white py-2.5 overflow-hidden border-b-2 border-gray-200">
      <div className="flex items-center">
        {/* Left badge — stays fixed */}
        <div className="flex-shrink-0 flex items-center gap-1.5 bg-brand-gold px-4 py-1 z-10">
          <Image
            src="/images/us-flag.png"
            alt="US Flag"
            width={41}
            height={21}
            className="object-contain"
          />
          <span className="text-[#3B3B3B] text-xs font-bold tracking-widest uppercase">
            US Owned &amp; Operated
          </span>
        </div>

        {/* Scrolling ticker */}
        <div className="overflow-hidden flex-1">
          <div className="ticker-track">
            {tickerItems.map((item, i) => (
              <div
                key={i}
                className="flex items-center gap-2 px-8"
              >
                <span className="text-brand-dark text-sm font-bold">
                  {item.name}
                </span>
                <span className="text-brand-dark text-sm">{item.price}</span>
                <span
                  className={`flex items-center gap-0.5 text-sm font-medium ${
                    item.up ? 'text-brand-green' : 'text-red-500'
                  }`}
                >
                  {item.change}
                  {item.up ? (
                    <TrendingUp className="w-3 h-3" />
                  ) : (
                    <TrendingDown className="w-3 h-3" />
                  )}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
