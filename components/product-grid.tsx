'use client'

import { Eye, Plus } from 'lucide-react'
import { useCart } from '@/components/cart-context'
import { formatRon, products } from '@/lib/products'

export function ProductGrid() {
  const { addItem } = useCart()

  return (
    <section id="latest-heat" className="bg-zinc-950">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-lime-400">
              Freshly Copped
            </p>
            <h2 className="mt-2 text-4xl font-black uppercase tracking-tight text-white sm:text-5xl">
              Latest Heat
            </h2>
          </div>
          <p className="max-w-sm text-sm text-zinc-400">
            Hand-verified grails, restocked weekly. Every pair authenticated and
            ready to ship double-boxed.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-4">
          {products.map((product) => (
            <article
              key={product.id}
              className="group flex flex-col overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900/40 transition-colors hover:border-zinc-700"
            >
              <div className="relative aspect-square overflow-hidden bg-zinc-900">
                <span className="absolute left-3 top-3 z-10 rounded-full border border-lime-400/40 bg-zinc-950/80 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-lime-400 backdrop-blur">
                  {product.condition}
                </span>
                <img
                  src={product.image || '/placeholder.svg'}
                  alt={product.title}
                  className="size-full object-cover transition-transform duration-500 ease-out group-hover:scale-110"
                />
                <button
                  type="button"
                  className="absolute bottom-3 right-3 z-10 flex translate-y-2 items-center gap-1.5 rounded-full border border-zinc-700 bg-zinc-950/80 px-3 py-1.5 text-[11px] font-semibold text-white opacity-0 backdrop-blur transition-all duration-300 hover:text-lime-400 group-hover:translate-y-0 group-hover:opacity-100"
                >
                  <Eye className="size-3.5" />
                  Quick View
                </button>
              </div>

              <div className="flex flex-1 flex-col p-4">
                <p className="text-[11px] font-medium uppercase tracking-wider text-zinc-500">
                  {product.brand}
                </p>
                <h3 className="mt-1 line-clamp-2 text-sm font-bold leading-snug text-white">
                  {product.title}
                </h3>
                <p className="mt-2 text-xs text-zinc-400">{product.sizes}</p>

                <div className="mt-auto flex items-center justify-between gap-2 pt-4">
                  <div>
                    <p className="text-base font-black text-white">
                      {formatRon(product.price)}
                    </p>
                    <p className="text-[11px] text-zinc-500">
                      Authenticated &amp; ready
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={() => addItem(product)}
                    className="flex items-center gap-1.5 rounded-full bg-lime-400 px-3.5 py-2 text-[11px] font-bold uppercase tracking-wide text-zinc-950 transition-transform active:scale-95"
                  >
                    <Plus className="size-3.5" />
                    Add
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
