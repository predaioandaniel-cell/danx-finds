'use client'

import { useEffect, useState } from 'react'
import {
  ChevronDown,
  Flame,
  Heart,
  Menu,
  Search,
  ShoppingBag,
  X,
} from 'lucide-react'
import { useCart } from '@/components/cart-context'
import { brands } from '@/lib/products'

const navLinks = [
  { label: 'New Drops', href: '#latest-heat' },
  { label: 'Sneakers', href: '#latest-heat' },
  { label: 'Luxury Apparel', href: '#latest-heat' },
  { label: 'Sell / Consign', href: '#consign' },
  { label: 'Authenticity', href: '#authenticity' },
]

const brandMenu = [
  'Nike',
  'Air Jordan',
  'Balenciaga',
  'Dior',
  'Louis Vuitton',
  'Travis Scott',
]

export function SiteHeader() {
  const { count, openCart } = useCart()
  const [searchOpen, setSearchOpen] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault()
        setSearchOpen((v) => !v)
      }
      if (e.key === 'Escape') setSearchOpen(false)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  return (
    <>
      <div className="sticky top-0 z-50">
        {/* Announcement banner */}
        <div className="flex items-center justify-center gap-2 bg-lime-400 px-4 py-2 text-center text-[11px] font-semibold uppercase tracking-[0.18em] text-zinc-950">
          <Flame className="size-3.5" aria-hidden="true" />
          <span>100% Authentic Guaranteed · Express Shipping Available</span>
        </div>

        {/* Main nav */}
        <header className="border-b border-zinc-800 bg-zinc-950/80 backdrop-blur-xl">
          <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={() => setMobileOpen((v) => !v)}
                className="grid size-9 place-items-center rounded-md text-zinc-300 hover:bg-zinc-900 hover:text-white lg:hidden"
                aria-label="Toggle menu"
              >
                {mobileOpen ? (
                  <X className="size-5" />
                ) : (
                  <Menu className="size-5" />
                )}
              </button>
              <a
                href="#top"
                className="text-lg font-black uppercase tracking-[0.25em] text-white"
              >
                DANX<span className="text-lime-400">.</span>FINDS
              </a>
            </div>

            <nav className="hidden items-center gap-1 lg:flex">
              <div className="group relative">
                <button className="flex items-center gap-1 rounded-md px-3 py-2 text-sm font-medium text-zinc-300 transition-colors hover:text-white">
                  Brands
                  <ChevronDown className="size-4 transition-transform group-hover:rotate-180" />
                </button>
                <div className="invisible absolute left-0 top-full w-52 translate-y-1 rounded-xl border border-zinc-800 bg-zinc-900/95 p-2 opacity-0 shadow-2xl shadow-black/50 backdrop-blur-xl transition-all group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
                  {brandMenu.map((b) => (
                    <a
                      key={b}
                      href="#latest-heat"
                      className="block rounded-lg px-3 py-2 text-sm text-zinc-300 transition-colors hover:bg-zinc-800 hover:text-lime-400"
                    >
                      {b}
                    </a>
                  ))}
                </div>
              </div>
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="rounded-md px-3 py-2 text-sm font-medium text-zinc-300 transition-colors hover:text-white"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => setSearchOpen(true)}
                className="hidden items-center gap-2 rounded-lg border border-zinc-800 bg-zinc-900/60 px-3 py-2 text-sm text-zinc-400 transition-colors hover:border-zinc-700 hover:text-zinc-200 sm:flex"
              >
                <Search className="size-4" />
                <span>Search</span>
                <kbd className="ml-2 rounded border border-zinc-700 bg-zinc-800 px-1.5 py-0.5 text-[10px] font-medium text-zinc-400">
                  Ctrl K
                </kbd>
              </button>
              <button
                type="button"
                onClick={() => setSearchOpen(true)}
                className="grid size-9 place-items-center rounded-md text-zinc-300 hover:bg-zinc-900 hover:text-white sm:hidden"
                aria-label="Search"
              >
                <Search className="size-5" />
              </button>
              <button
                type="button"
                className="grid size-9 place-items-center rounded-md text-zinc-300 hover:bg-zinc-900 hover:text-white"
                aria-label="Wishlist"
              >
                <Heart className="size-5" />
              </button>
              <button
                type="button"
                onClick={openCart}
                className="relative grid size-9 place-items-center rounded-md text-zinc-300 hover:bg-zinc-900 hover:text-white"
                aria-label={`Cart, ${count} items`}
              >
                <ShoppingBag className="size-5" />
                {count > 0 && (
                  <span className="absolute -right-1 -top-1 grid min-w-[18px] place-items-center rounded-full bg-lime-400 px-1 text-[10px] font-bold text-zinc-950">
                    {count}
                  </span>
                )}
              </button>
            </div>
          </div>

          {/* Mobile menu */}
          {mobileOpen && (
            <div className="border-t border-zinc-800 bg-zinc-950 px-4 py-3 lg:hidden">
              <nav className="flex flex-col">
                {navLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="rounded-md px-3 py-2.5 text-sm font-medium text-zinc-300 hover:bg-zinc-900 hover:text-white"
                  >
                    {link.label}
                  </a>
                ))}
              </nav>
            </div>
          )}
        </header>
      </div>

      {/* Search modal */}
      {searchOpen && (
        <div
          className="fixed inset-0 z-[60] flex items-start justify-center bg-black/70 px-4 pt-24 backdrop-blur-sm"
          onClick={() => setSearchOpen(false)}
        >
          <div
            className="w-full max-w-xl overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center gap-3 border-b border-zinc-800 px-4">
              <Search className="size-5 text-zinc-500" />
              {/* eslint-disable-next-line jsx-a11y/no-autofocus */}
              <input
                autoFocus
                placeholder="Search sneakers, brands, grails…"
                className="flex-1 bg-transparent py-4 text-sm text-white placeholder:text-zinc-500 focus:outline-none"
              />
              <kbd className="rounded border border-zinc-700 bg-zinc-800 px-1.5 py-0.5 text-[10px] text-zinc-400">
                ESC
              </kbd>
            </div>
            <div className="p-3">
              <p className="px-2 py-1 text-[11px] font-semibold uppercase tracking-wider text-zinc-500">
                Trending Brands
              </p>
              <div className="flex flex-wrap gap-2 p-2">
                {brands.map((b) => (
                  <button
                    key={b}
                    className="rounded-full border border-zinc-700 bg-zinc-800/60 px-3 py-1.5 text-xs font-medium text-zinc-300 transition-colors hover:border-lime-400/50 hover:text-lime-400"
                  >
                    {b}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
