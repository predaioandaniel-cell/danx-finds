'use client'

import { useState } from 'react'
import { brands } from '@/lib/products'

export function BrandPills() {
  const [active, setActive] = useState('AIR JORDAN')

  return (
    <section className="border-b border-zinc-800 bg-zinc-950">
      <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3">
          {brands.map((brand) => {
            const isActive = brand === active
            return (
              <button
                key={brand}
                type="button"
                onClick={() => setActive(brand)}
                className={
                  isActive
                    ? 'rounded-full bg-lime-400 px-4 py-2 text-xs font-bold uppercase tracking-[0.15em] text-zinc-950 transition-colors sm:text-sm'
                    : 'rounded-full border border-zinc-800 bg-zinc-900/50 px-4 py-2 text-xs font-bold uppercase tracking-[0.15em] text-zinc-400 transition-colors hover:border-zinc-700 hover:text-white sm:text-sm'
                }
              >
                {brand}
              </button>
            )
          })}
        </div>
      </div>
    </section>
  )
}
