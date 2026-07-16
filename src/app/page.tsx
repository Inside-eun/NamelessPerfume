import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { BrandIntro } from "@/components/sections/BrandIntro";
import { Services } from "@/components/sections/Services";
import { Process } from "@/components/sections/Process";
import { Portfolio } from "@/components/sections/Portfolio";
import {
  placeholderHero,
  placeholderCommercialItems,
  placeholderCustomWorksItems,
} from "@/lib/placeholderContent";

export default function Home() {
  return (
    <div className="flex flex-1 flex-col">
      <Header />
      <Hero
        headline={placeholderHero.headline}
        subcopy={placeholderHero.subcopy}
        imageUrl={placeholderHero.imageUrl}
      />
      <BrandIntro />
      <Services />
      <Process />
      <Portfolio
        commercialItems={placeholderCommercialItems}
        customWorksItems={placeholderCustomWorksItems}
      />
      <Footer />
    </div>
  );
}
