import { headers } from "next/headers";
import { HeroSection } from "./(home)/sections/HeroSection";
import { CultureSection } from "./(home)/sections/CultureSection";
import { LandscapesSection } from "./(home)/sections/LandscapesSection";
import { CuisineSection } from "./(home)/sections/CuisineSection";
import { AICompanionSection } from "./(home)/sections/AICompanionSection";

export default function HomePage() {
  const headerStore = headers();
  const region = (headerStore.get("x-region") || "global").toLowerCase();
  const isLocalVisitor = region === "pk";

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "TouristDestination",
    name: "Parachinar",
    description:
      "A highland town in Pakistan’s Kurram District, known for its Shia heritage, processions, and mountain valley landscapes.",
    geo: {
      "@type": "GeoCoordinates",
      latitude: 33.899,
      longitude: 70.1003,
    },
    containedInPlace: {
      "@type": "AdministrativeArea",
      name: "Kurram District",
    },
    image:
      "https://images.pexels.com/photos/17598384/pexels-photo-17598384.jpeg",
    url: "https://parachinar.example", // replace with your real production URL
  };

  return (
    <main>
      <HeroSection isLocalVisitor={isLocalVisitor} />
      <CultureSection />
      <LandscapesSection />
      <CuisineSection />
      <AICompanionSection />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </main>
  );
}

