import { Fingerprint, ScanLine, ShieldCheck } from 'lucide-react'

const steps = [
  {
    icon: ScanLine,
    step: '01',
    title: 'Multi-Point Physical Inspection',
    desc: 'Every pair is checked for stitching, scent, box, and UV light markers by trained specialists.',
  },
  {
    icon: Fingerprint,
    step: '02',
    title: 'Digital AI Verification',
    desc: 'Our proprietary model cross-references thousands of data points to confirm authenticity.',
  },
  {
    icon: ShieldCheck,
    step: '03',
    title: 'Tamper-Proof Legit Tag',
    desc: 'A tamper-proof DANX FINDS Legit Tag is attached to every verified item before it ships.',
  },
]

export function Authenticity() {
  return (
    <section
      id="authenticity"
      className="border-y border-zinc-800 bg-gradient-to-b from-zinc-900/50 to-zinc-950"
    >
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-lime-400">
            Zero Fakes. Ever.
          </p>
          <h2 className="mt-2 text-4xl font-black uppercase tracking-tight text-white sm:text-5xl">
            Why DANX FINDS?
          </h2>
          <p className="mt-4 text-pretty text-sm text-zinc-400 sm:text-base">
            Every single item passes a rigorous three-stage authentication
            process before it ever reaches your doorstep.
          </p>
        </div>

        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {steps.map(({ icon: Icon, step, title, desc }) => (
            <div
              key={step}
              className="group relative overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900/40 p-7 transition-colors hover:border-lime-400/30"
            >
              <span className="absolute right-5 top-4 text-5xl font-black text-zinc-800 transition-colors group-hover:text-zinc-700">
                {step}
              </span>
              <div className="grid size-12 place-items-center rounded-xl border border-lime-400/30 bg-lime-400/10 text-lime-400">
                <Icon className="size-6" />
              </div>
              <h3 className="mt-5 text-lg font-bold text-white">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-zinc-400">
                {desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
