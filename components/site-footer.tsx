'use client'

import { useState } from 'react'
import { ArrowRight, Check } from 'lucide-react'

const columns = [
  {
    title: 'Shop',
    links: ['New Drops', 'Sneakers', 'Luxury Apparel', 'Accessories', 'Sale'],
  },
  {
    title: 'Company',
    links: ['About Us', 'Authenticity', 'Sell / Consign', 'Careers', 'Press'],
  },
  {
    title: 'Support',
    links: ['Contact', 'Shipping', 'Returns', 'FAQ', 'Track Order'],
  },
]

const payments = ['VISA', 'Mastercard', 'Apple Pay', 'Crypto']

function DiscordIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M20.317 4.369A19.79 19.79 0 0 0 16.558 3c-.2.36-.43.845-.588 1.23a18.27 18.27 0 0 0-3.94 0A12.6 12.6 0 0 0 11.44 3c-1.29.222-2.53.61-3.762 1.369C3.08 8.72 2.22 12.96 2.64 17.14a19.9 19.9 0 0 0 6.06 3.06c.49-.67.926-1.38 1.3-2.13-.71-.27-1.39-.6-2.03-.99.17-.13.34-.26.5-.39a14.2 14.2 0 0 0 12.06 0c.16.14.33.27.5.4-.64.38-1.32.71-2.03.98.374.75.81 1.46 1.3 2.13a19.85 19.85 0 0 0 6.06-3.06c.5-4.84-.86-9.04-3.55-12.77ZM9.35 14.85c-1.18 0-2.15-1.08-2.15-2.41 0-1.33.95-2.42 2.15-2.42 1.2 0 2.17 1.1 2.15 2.42 0 1.33-.95 2.41-2.15 2.41Zm5.3 0c-1.18 0-2.15-1.08-2.15-2.41 0-1.33.95-2.42 2.15-2.42 1.2 0 2.17 1.1 2.15 2.42 0 1.33-.94 2.41-2.15 2.41Z" />
    </svg>
  )
}

function TikTokIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M16.6 5.82a4.28 4.28 0 0 1-1.05-2.82h-3.02v12.17a2.4 2.4 0 0 1-2.4 2.4 2.4 2.4 0 0 1-.9-4.63v-3.1a5.42 5.42 0 0 0-3.5 5.04 5.42 5.42 0 0 0 10.84 0V8.9a7.3 7.3 0 0 0 4.27 1.37V7.25a4.28 4.28 0 0 1-4.24-1.43Z" />
    </svg>
  )
}

function InstaIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M12 2.16c3.2 0 3.58.01 4.85.07 1.17.05 1.8.25 2.23.41.56.22.96.48 1.38.9.42.42.68.82.9 1.38.16.42.36 1.06.41 2.23.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.05 1.17-.25 1.8-.41 2.23-.22.56-.48.96-.9 1.38-.42.42-.82.68-1.38.9-.42.16-1.06.36-2.23.41-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-1.17-.05-1.8-.25-2.23-.41a3.7 3.7 0 0 1-1.38-.9 3.7 3.7 0 0 1-.9-1.38c-.16-.42-.36-1.06-.41-2.23C2.17 15.58 2.16 15.2 2.16 12s.01-3.58.07-4.85c.05-1.17.25-1.8.41-2.23.22-.56.48-.96.9-1.38.42-.42.82-.68 1.38-.9.42-.16 1.06-.36 2.23-.41C8.42 2.17 8.8 2.16 12 2.16Zm0 3.68a6.16 6.16 0 1 0 0 12.32 6.16 6.16 0 0 0 0-12.32Zm0 10.16a4 4 0 1 1 0-8 4 4 0 0 1 0 8Zm6.4-10.4a1.44 1.44 0 1 1-2.88 0 1.44 1.44 0 0 1 2.88 0Z" />
    </svg>
  )
}

export function SiteFooter() {
  const [email, setEmail] = useState('')
  const [joined, setJoined] = useState(false)

  function onSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!email) return
    setJoined(true)
    setEmail('')
  }

  return (
    <footer className="border-t border-zinc-800 bg-zinc-950">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        {/* Newsletter */}
        <div className="rounded-3xl border border-zinc-800 bg-gradient-to-br from-zinc-900 to-zinc-950 p-8 sm:p-10">
          <div className="grid items-center gap-8 lg:grid-cols-2">
            <div>
              <h3 className="text-2xl font-black uppercase tracking-tight text-white sm:text-3xl">
                Join the Inner Circle
              </h3>
              <p className="mt-3 max-w-md text-sm text-zinc-400">
                Get secret drop notifications, restock alerts, and early access
                to the most-hyped grails before anyone else.
              </p>
            </div>
            <form onSubmit={onSubmit} className="flex flex-col gap-3 sm:flex-row">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="flex-1 rounded-full border border-zinc-800 bg-zinc-950 px-5 py-3.5 text-sm text-white placeholder:text-zinc-500 focus:border-lime-400/50 focus:outline-none"
              />
              <button
                type="submit"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-lime-400 px-6 py-3.5 text-sm font-bold uppercase tracking-wide text-zinc-950 transition-transform active:scale-95"
              >
                {joined ? (
                  <>
                    <Check className="size-4" />
                    Joined
                  </>
                ) : (
                  <>
                    Subscribe
                    <ArrowRight className="size-4" />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>

        {/* Links */}
        <div className="mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <p className="text-lg font-black uppercase tracking-[0.25em] text-white">
              DANX<span className="text-lime-400">.</span>FINDS
            </p>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-zinc-400">
              The underground plug for 100% verified authentic sneakers, grails,
              and luxury streetwear.
            </p>
            <div className="mt-6 flex items-center gap-3">
              {[InstaIcon, TikTokIcon, DiscordIcon].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="grid size-10 place-items-center rounded-full border border-zinc-800 text-zinc-400 transition-colors hover:border-lime-400/50 hover:text-lime-400"
                  aria-label="Social media"
                >
                  <Icon className="size-[18px]" />
                </a>
              ))}
            </div>
          </div>

          {columns.map((col) => (
            <div key={col.title}>
              <p className="text-xs font-bold uppercase tracking-[0.15em] text-white">
                {col.title}
              </p>
              <ul className="mt-4 space-y-2.5">
                {col.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm text-zinc-400 transition-colors hover:text-lime-400"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-zinc-800 pt-6 sm:flex-row">
          <p className="text-xs text-zinc-500">
            © {new Date().getFullYear()} DANX FINDS. All rights reserved.
          </p>
          <div className="flex items-center gap-2">
            {payments.map((p) => (
              <span
                key={p}
                className="rounded-md border border-zinc-800 bg-zinc-900 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wide text-zinc-400"
              >
                {p}
              </span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
