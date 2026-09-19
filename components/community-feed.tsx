function Instagram(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M12 2.16c3.2 0 3.58.01 4.85.07 1.17.05 1.8.25 2.23.41.56.22.96.48 1.38.9.42.42.68.82.9 1.38.16.42.36 1.06.41 2.23.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.05 1.17-.25 1.8-.41 2.23-.22.56-.48.96-.9 1.38-.42.42-.82.68-1.38.9-.42.16-1.06.36-2.23.41-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-1.17-.05-1.8-.25-2.23-.41a3.7 3.7 0 0 1-1.38-.9 3.7 3.7 0 0 1-.9-1.38c-.16-.42-.36-1.06-.41-2.23C2.17 15.58 2.16 15.2 2.16 12s.01-3.58.07-4.85c.05-1.17.25-1.8.41-2.23.22-.56.48-.96.9-1.38.42-.42.82-.68 1.38-.9.42-.16 1.06-.36 2.23-.41C8.42 2.17 8.8 2.16 12 2.16Zm0 3.68a6.16 6.16 0 1 0 0 12.32 6.16 6.16 0 0 0 0-12.32Zm0 10.16a4 4 0 1 1 0-8 4 4 0 0 1 0 8Zm6.4-10.4a1.44 1.44 0 1 1-2.88 0 1.44 1.44 0 0 1 2.88 0Z" />
    </svg>
  )
}

const photos = [
  '/community/street-1.png',
  '/community/street-2.png',
  '/community/street-3.png',
  '/community/street-4.png',
]

export function CommunityFeed() {
  return (
    <section className="border-t border-zinc-800 bg-zinc-950">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="flex flex-col items-center text-center">
          <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-lime-400">
            The Community
          </p>
          <h2 className="mt-2 text-4xl font-black uppercase tracking-tight text-white sm:text-5xl">
            As Seen On The Streets
          </h2>
          <a
            href="#"
            className="mt-3 inline-flex items-center gap-2 text-sm font-medium text-zinc-400 transition-colors hover:text-lime-400"
          >
            <Instagram className="size-4" />
            @danx.finds
          </a>
        </div>

        <div className="mt-10 grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
          {photos.map((src, i) => (
            <a
              key={src}
              href="#"
              className="group relative aspect-square overflow-hidden rounded-2xl border border-zinc-800"
            >
              <img
                src={src || '/placeholder.svg'}
                alt={`Community member showcasing DANX FINDS pickups ${i + 1}`}
                className="size-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-zinc-950/60 opacity-0 transition-opacity group-hover:opacity-100">
                <Instagram className="size-7 text-lime-400" />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
