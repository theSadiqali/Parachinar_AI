const cultureItems = [
  {
    title: "Ashura in Parachinar",
    body: "Processions move through the bazaar in measured silence; banners, chest-beating, and elegies trace centuries of Shia memory.",
  },
  {
    title: "Courtyard Majalis",
    body: "Homes become sanctuaries where poetry, laments, and whispered prayers build a communal archive of grief and resilience.",
  },
  {
    title: "Shared Tables",
    body: "After ritual comes warmth—chai, bread, and stews shared across neighborhoods, balancing solemnity with hospitality.",
  },
];

export function CultureSection() {
  return (
    <section id="culture" className="section space-y-10">
      <header className="space-y-3 max-w-3xl">
        <p className="section-label">Culture & Rituals</p>
        <h2 className="text-3xl md:text-4xl">
          A calendar written in processions, poetry, and shared meals.
        </h2>
        <p className="text-sm md:text-base">
          Parachinar’s Shia community shapes the year through Ashura
          commemorations, courtyard majalis, and the steady choreography of
          generosity.
        </p>
      </header>
      <div className="grid gap-6 md:grid-cols-3">
        {cultureItems.map((item) => (
          <article key={item.title} className="lux-card p-6 space-y-3">
            <h3 className="text-sm font-semibold tracking-wide uppercase text-slateLuxury-700">
              {item.title}
            </h3>
            <p className="text-xs md:text-sm">{item.body}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

