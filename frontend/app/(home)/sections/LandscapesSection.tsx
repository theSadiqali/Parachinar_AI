const landscapeBands = [
  {
    label: "Peiwar & the frontier passes",
    copy: "Where roads thread between ridgelines and winter hangs in the air a little longer than expected.",
  },
  {
    label: "Orchards & river terraces",
    copy: "Apricot, apple, and walnut trees pattern the valley floor, catching the last light of the afternoon.",
  },
  {
    label: "Evening silhouettes",
    copy: "Minarets, rooftops, and distant peaks align against a cooling sky, as the town settles into its own rhythm.",
  },
];

export function LandscapesSection() {
  return (
    <section id="seasons" className="section space-y-8">
      <header className="space-y-3 max-w-3xl">
        <p className="section-label">Terrain & Seasons</p>
        <h2 className="text-3xl md:text-4xl">
          The valley as slow, shifting light.
        </h2>
        <p className="text-sm md:text-base">
          From snow on Peiwar to summer dust in the bazaar, Parachinar is a
          study in gradients—of weather, of movement, of sound.
        </p>
      </header>
      <div className="space-y-4 md:space-y-3">
        {landscapeBands.map((band, idx) => (
          <div
            key={band.label}
            className="group relative overflow-hidden rounded-2xl border border-white/40 bg-gradient-to-r from-forest-900/80 via-forest-700/40 to-alabaster/0 px-6 py-6 md:px-8 md:py-7"
          >
            <div className="relative z-10 flex flex-col md:flex-row md:items-baseline md:justify-between gap-3 text-alabaster">
              <p className="text-xs md:text-sm font-medium tracking-wide uppercase">
                {band.label}
              </p>
              <p className="max-w-xl text-[0.75rem] md:text-xs text-slate-100/80">
                {band.copy}
              </p>
            </div>
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <div className="h-full w-full bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.06),_transparent_60%),radial-gradient(circle_at_bottom,_rgba(255,255,255,0.08),_transparent_65%)]" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

