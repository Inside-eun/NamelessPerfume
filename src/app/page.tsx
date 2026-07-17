import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { BrandIntro } from "@/components/sections/BrandIntro";
import { Services } from "@/components/sections/Services";
import { Process } from "@/components/sections/Process";
import { Portfolio } from "@/components/sections/Portfolio";
import {
  getHeroContent,
  getCommercialItems,
  getCustomWorksItems,
} from "@/lib/content";

export default async function Home() {
  const [hero, commercialItems, customWorksItems] = await Promise.all([
    getHeroContent(),
    getCommercialItems(),
    getCustomWorksItems(),
  ]);

  return (
    <div className="flex flex-1 flex-col">
      <Header />
      <Hero imageUrl={hero.imageUrl} />
      <BrandIntro />
      <Services />
      <Process />
      <Portfolio
        commercialItems={commercialItems}
        customWorksItems={customWorksItems}
      />
      <Footer />
    </div>
  );
}
