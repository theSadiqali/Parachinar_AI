export function AICompanionSection() {
  return (
    <section id="chat" className="section pb-28 md:pb-32">
      <div className="lux-card px-6 py-7 md:px-8 md:py-9 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
        <div className="space-y-3 max-w-xl">
          <p className="section-label">AI Companion</p>
          <h2 className="text-2xl md:text-3xl">
            A local-style guide, held within the interface.
          </h2>
          <p className="text-xs md:text-sm">
            Ask about rituals, seasons, routes, or everyday details. The AI
            companion is designed to answer in a tone that matches the pace of
            the valley—considered, measured, and precise.
          </p>
        </div>
        <div className="text-xs text-slateLuxury-600 max-w-xs">
          The floating chat interface appears here and across the experience,
          offering context-aware responses as you move between sections.
        </div>
      </div>
    </section>
  );
}

