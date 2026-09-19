import { BadgeCheck, PackageCheck, Truck, Zap } from 'lucide-react'

const trust = [
  { icon: BadgeCheck, label: '100% Verified Authentic' },
  { icon: PackageCheck, label: 'Double-Boxed Express Delivery' },
  { icon: Zap, label: 'Instant Payouts for Sellers' },
]

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden border-b border-zinc-800">
      {/* glow accents */}
      <div className="pointer-events-none absolute -left-40 top-0 size-96 rounded-full bg-lime-400/10 blur-3xl" />
      <div className="pointer-events-none absolute -right-40 bottom-0 size-96 rounded-full bg-zinc-400/5 blur-3xl" />

      <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:gap-8 lg:py-24 lg:px-8">
        <div className="relative z-10">
          <span className="inline-flex items-center gap-2 rounded-full border border-lime-400/30 bg-lime-400/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-lime-400">
            <span className="size-1.5 rounded-full bg-lime-400" />
            This Week&apos;s Drop
          </span>
          <h1 className="mt-6 text-balance text-5xl font-black uppercase leading-[0.95] tracking-tight text-white sm:text-6xl lg:text-7xl">
            Hyped Kicks &amp;{' '}
            <span className="text-lime-400">Luxury Finds</span>
          </h1>
          <p className="mt-6 max-w-md text-pretty text-base leading-relaxed text-zinc-400 sm:text-lg">
            Your curated plug for 100% verified authentic sneakers, grails, and
            high-fashion streetwear.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href="#latest-heat"
              className="group relative inline-flex items-center justify-center rounded-full bg-lime-400 px-7 py-3.5 text-sm font-bold uppercase tracking-wide text-zinc-950 shadow-[0_0_30px_-5px] shadow-lime-400/60 transition-all hover:shadow-[0_0_45px_-3px] hover:shadow-lime-400/70"
            >
              Shop New Drops
            </a>
            <a
              href="#consign"
              className="inline-flex items-center justify-center rounded-full border border-zinc-700 px-7 py-3.5 text-sm font-bold uppercase tracking-wide text-white transition-colors hover:border-lime-400/50 hover:text-lime-400"
            >
              Consign Your Pair
            </a>
          </div>

          <ul className="mt-10 flex flex-col gap-3 border-t border-zinc-800 pt-6 sm:flex-row sm:flex-wrap sm:gap-6">
            {trust.map(({ icon: Icon, label }) => (
              <li
                key={label}
                className="flex items-center gap-2 text-sm text-zinc-300"
              >
                <Icon className="size-4 text-lime-400" />
                {label}
              </li>
            ))}
          </ul>
        </div>

        <div className="relative z-10">
          <div className="relative overflow-hidden rounded-3xl border border-zinc-800 bg-gradient-to-b from-zinc-900 to-zinc-950">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,rgba(163,230,53,0.12),transparent_60%)]" />
            <img
              src="/products/hero-jordan-4.png"
              alt="Featured Air Jordan 4 Retro sneaker in white cement colorway"
              className="relative aspect-square w-full object-cover"
            />
            <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between rounded-2xl border border-zinc-800 bg-zinc-950/80 p-4 backdrop-blur-xl">
              <div>
                <p className="text-[11px] uppercase tracking-wider text-zinc-500">
                  Grail of the Week
                </p>
                <p className="mt-0.5 text-sm font-bold text-white">
                  Air Jordan 4 "White Cement"
                </p>
              </div>
              <div className="text-right">
                <p className="text-[11px] uppercase tracking-wider text-zinc-500">
                  From
                </p>
                <p className="mt-0.5 flex items-center gap-1 text-sm font-bold text-lime-400">
                  <Truck className="size-3.5" />
                  599 RON
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
