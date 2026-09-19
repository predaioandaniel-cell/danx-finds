import { ArrowRight, TrendingUp } from 'lucide-react'

export function ConsignmentBanner() {
  return (
    <section id="consign" className="bg-zinc-950">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl border border-zinc-800 bg-zinc-900">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_100%_0%,rgba(163,230,53,0.18),transparent_55%)]" />
          <div className="pointer-events-none absolute -bottom-24 -left-16 size-72 rounded-full bg-lime-400/10 blur-3xl" />

          <div className="relative grid items-center gap-8 p-8 sm:p-12 lg:grid-cols-[1.4fr_1fr] lg:p-16">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full border border-lime-400/30 bg-lime-400/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-lime-400">
                <TrendingUp className="size-3.5" />
                Sell With Us
              </span>
              <h2 className="mt-5 text-4xl font-black uppercase leading-[0.95] tracking-tight text-white sm:text-5xl">
                Got Heat To Sell?
              </h2>
              <p className="mt-4 max-w-lg text-pretty text-sm text-zinc-400 sm:text-base">
                Turn your grails into cash. Consign or sell your pairs directly
                to DANX FINDS and get an instant quote with lightning-fast
                payouts once verified.
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-4">
                <a
                  href="#"
                  className="group inline-flex items-center gap-2 rounded-full bg-lime-400 px-7 py-3.5 text-sm font-bold uppercase tracking-wide text-zinc-950 shadow-[0_0_30px_-8px] shadow-lime-400/60 transition-all hover:shadow-[0_0_45px_-4px] hover:shadow-lime-400/70"
                >
                  Get an Instant Quote
                  <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                </a>
                <a
                  href="#"
                  className="inline-flex items-center rounded-full border border-zinc-700 px-7 py-3.5 text-sm font-bold uppercase tracking-wide text-white transition-colors hover:border-lime-400/50 hover:text-lime-400"
                >
                  Sell to Us
                </a>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
              {[
                { value: 'Up to 95%', label: 'Payout on your pairs' },
                { value: '48 Hours', label: 'Average time to payout' },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-2xl border border-zinc-800 bg-zinc-950/60 p-6 backdrop-blur"
                >
                  <p className="text-3xl font-black text-lime-400">
                    {stat.value}
                  </p>
                  <p className="mt-1 text-sm text-zinc-400">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
