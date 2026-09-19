'use client'

import { Minus, Plus, ShoppingBag, Trash2, X } from 'lucide-react'
import { useCart } from '@/components/cart-context'
import { formatRon } from '@/lib/products'

export function CartDrawer() {
  const {
    items,
    isOpen,
    closeCart,
    removeItem,
    updateQuantity,
    subtotal,
    count,
  } = useCart()

  return (
    <>
      {/* overlay */}
      <div
        onClick={closeCart}
        aria-hidden="true"
        className={
          isOpen
            ? 'fixed inset-0 z-[70] bg-black/70 backdrop-blur-sm transition-opacity duration-300'
            : 'pointer-events-none fixed inset-0 z-[70] bg-black/70 opacity-0 transition-opacity duration-300'
        }
      />

      {/* drawer */}
      <aside
        aria-label="Shopping cart"
        className={
          'fixed right-0 top-0 z-[80] flex h-full w-full max-w-md flex-col border-l border-zinc-800 bg-zinc-950 shadow-2xl transition-transform duration-300 ease-out ' +
          (isOpen ? 'translate-x-0' : 'translate-x-full')
        }
      >
        <div className="flex items-center justify-between border-b border-zinc-800 px-5 py-4">
          <h2 className="flex items-center gap-2 text-sm font-bold uppercase tracking-[0.15em] text-white">
            <ShoppingBag className="size-4 text-lime-400" />
            Your Bag
            <span className="text-zinc-500">({count})</span>
          </h2>
          <button
            type="button"
            onClick={closeCart}
            className="grid size-8 place-items-center rounded-md text-zinc-400 hover:bg-zinc-900 hover:text-white"
            aria-label="Close cart"
          >
            <X className="size-5" />
          </button>
        </div>

        {items.length === 0 ? (
          <div className="flex flex-1 flex-col items-center justify-center gap-3 px-6 text-center">
            <div className="grid size-16 place-items-center rounded-full border border-zinc-800 bg-zinc-900">
              <ShoppingBag className="size-7 text-zinc-600" />
            </div>
            <p className="text-sm font-semibold text-white">Your bag is empty</p>
            <p className="text-xs text-zinc-500">
              Add some heat from the latest drops.
            </p>
            <button
              onClick={closeCart}
              className="mt-2 rounded-full bg-lime-400 px-5 py-2.5 text-xs font-bold uppercase tracking-wide text-zinc-950"
            >
              Keep Shopping
            </button>
          </div>
        ) : (
          <>
            <div className="flex-1 space-y-4 overflow-y-auto px-5 py-5">
              {items.map((item) => (
                <div key={item.id} className="flex gap-4">
                  <div className="size-20 shrink-0 overflow-hidden rounded-xl border border-zinc-800 bg-zinc-900">
                    <img
                      src={item.image || '/placeholder.svg'}
                      alt={item.title}
                      className="size-full object-cover"
                    />
                  </div>
                  <div className="flex flex-1 flex-col">
                    <div className="flex items-start justify-between gap-2">
                      <div>
                        <p className="text-[10px] uppercase tracking-wider text-zinc-500">
                          {item.brand}
                        </p>
                        <p className="line-clamp-2 text-xs font-semibold text-white">
                          {item.title}
                        </p>
                      </div>
                      <button
                        type="button"
                        onClick={() => removeItem(item.id)}
                        className="text-zinc-500 hover:text-red-400"
                        aria-label={`Remove ${item.title}`}
                      >
                        <Trash2 className="size-4" />
                      </button>
                    </div>
                    <div className="mt-auto flex items-center justify-between pt-2">
                      <div className="flex items-center rounded-full border border-zinc-800">
                        <button
                          type="button"
                          onClick={() =>
                            updateQuantity(item.id, item.quantity - 1)
                          }
                          className="grid size-7 place-items-center text-zinc-400 hover:text-white"
                          aria-label="Decrease quantity"
                        >
                          <Minus className="size-3.5" />
                        </button>
                        <span className="w-6 text-center text-xs font-bold text-white">
                          {item.quantity}
                        </span>
                        <button
                          type="button"
                          onClick={() =>
                            updateQuantity(item.id, item.quantity + 1)
                          }
                          className="grid size-7 place-items-center text-zinc-400 hover:text-white"
                          aria-label="Increase quantity"
                        >
                          <Plus className="size-3.5" />
                        </button>
                      </div>
                      <p className="text-sm font-bold text-white">
                        {formatRon(item.price * item.quantity)}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="border-t border-zinc-800 px-5 py-5">
              <div className="flex items-center justify-between text-sm">
                <span className="text-zinc-400">Subtotal</span>
                <span className="text-lg font-black text-white">
                  {formatRon(subtotal)}
                </span>
              </div>
              <p className="mt-1 text-[11px] text-zinc-500">
                Shipping &amp; duties calculated at checkout.
              </p>
              <button className="mt-4 w-full rounded-full bg-lime-400 py-3.5 text-sm font-bold uppercase tracking-wide text-zinc-950 shadow-[0_0_30px_-8px] shadow-lime-400/60 transition-transform active:scale-[0.99]">
                Secure Checkout
              </button>
            </div>
          </>
        )}
      </aside>
    </>
  )
}
