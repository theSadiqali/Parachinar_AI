import Link from "next/link";

const navItems: { href: string; label: string }[] = [
  { href: "#overview", label: "Overview" },
  { href: "#culture", label: "Culture" },
  { href: "#seasons", label: "Seasons" },
  { href: "#experiences", label: "Experiences" },
  { href: "#chat", label: "AI Guide" },
];

export function SiteHeader() {
  return (
    <header className="shell sticky top-0 z-40 flex items-center justify-between border-b border-white/40 bg-alabaster/85 py-4 backdrop-blur-xl">
      <Link href="/" className="flex items-baseline gap-2">
        <span className="text-xs tracking-[0.35em] uppercase text-slateLuxury-300">
          Parachinar
        </span>
        <span className="font-serif text-lg tracking-tight text-slateLuxury-900">
          Observatory
        </span>
      </Link>
      <nav className="hidden md:flex items-center gap-6 text-xs font-medium text-slateLuxury-700">
        {navItems.map((item) => (
          <a
            key={item.href}
            href={item.href}
            className="transition-colors hover:text-forest-700"
          >
            {item.label}
          </a>
        ))}
      </nav>
    </header>
  );
}

