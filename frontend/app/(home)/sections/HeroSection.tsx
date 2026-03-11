import Image from "next/image";

type Props = {
  isLocalVisitor: boolean;
};

export function HeroSection({ isLocalVisitor }: Props) {
  return (
    <section id="overview" className="section parallax-shell">
      <div className="lux-grid parallax-layer">
        <div className="space-y-6">
          <p className="section-label">High Valleys / Quiet Rituals</p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl leading-tight">
            Parachinar,
            <span className="block text-forest-700">
              where the mountains hold their breath.
            </span>
          </h1>
          <p className="max-w-xl text-sm md:text-base">
            {isLocalVisitor
              ? "Built for those who already know the bazaar by sound and the passes by light—a precise, quiet mirror of home."
              : "A meticulously crafted, editorial window into the frontier town of Parachinar—its Shia heritage, processions, cuisine, and everyday rhythms rendered with Swiss-grade precision."}
          </p>
          <div className="flex flex-wrap gap-3 pt-4">
            <a
              href="#culture"
              className="inline-flex items-center rounded-full bg-forest-900 px-5 py-2.5 text-xs font-medium tracking-wide text-alabaster hover:bg-forest-700 transition-colors"
            >
              Explore the region
            </a>
            <a
              href="#chat"
              className="inline-flex items-center rounded-full border border-slateLuxury-300 px-5 py-2.5 text-xs font-medium tracking-wide text-slateLuxury-900 hover:border-forest-700 transition-colors"
            >
              Ask the local AI
            </a>
          </div>
        </div>
        <div className="relative">
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-forest-900/80 via-forest-700/40 to-alabaster/0 blur-3xl" />
          <div className="relative lux-card overflow-hidden">
            <Image
              src="https://images.pexels.com/photos/17598384/pexels-photo-17598384.jpeg"
              alt="Mountainous landscape reminiscent of the Kurram valley"
              width={900}
              height={640}
              priority
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

