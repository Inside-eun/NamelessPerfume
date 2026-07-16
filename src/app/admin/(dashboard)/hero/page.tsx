import { getHeroContent } from "@/lib/content";
import { HeroForm } from "@/components/admin/HeroForm";

export default async function AdminHeroPage() {
  const hero = await getHeroContent();

  return (
    <div className="flex flex-col gap-6">
      <h1 className="font-serif text-xl">Hero 편집</h1>
      <HeroForm
        initialHeadline={hero.headline}
        initialSubcopy={hero.subcopy}
        initialImageUrl={hero.imageUrl}
      />
    </div>
  );
}
