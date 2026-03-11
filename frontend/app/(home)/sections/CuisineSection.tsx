const cuisineItems = [
  {
    title: "Chapli kebab, but local",
    copy: "Crisp edges, soft interior—spiced for the highland chill and wrapped in warm bread pulled straight from the tandoor.",
  },
  {
    title: "Broths for cold evenings",
    copy: "Slow-cooked stews served in enamel bowls; steam curls into the courtyard air as conversations stretch late.",
  },
  {
    title: "Bazaar sweets",
    copy: "Stacks of halwa, dried fruits, and nuts turning every small purchase into a tiny ritual of its own.",
  },
];

export function CuisineSection() {
  return (
    <section id="experiences" className="section space-y-8">
      <header className="space-y-3 max-w-3xl">
        <p className="section-label">Everyday Life & Cuisine</p>
        <h2 className="text-3xl md:text-4xl">
          The city’s rhythm, plated and poured.
        </h2>
        <p className="text-sm md:text-base">
          Markets, tea houses, and family kitchens form a soft infrastructure
          around Parachinar—quiet, constant, and deeply hospitable.
        </p>
      </header>
      <div className="grid gap-6 md:grid-cols-3">
        {cuisineItems.map((item) => (
          <article key={item.title} className="lux-card p-5 space-y-3">
            <h3 className="text-sm font-semibold text-slateLuxury-900">
              {item.title}
            </h3>
            <p className="text-xs md:text-sm text-slateLuxury-700">
              {item.copy}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}

