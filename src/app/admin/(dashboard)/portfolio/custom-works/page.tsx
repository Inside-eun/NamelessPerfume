import { getCustomWorksItems } from "@/lib/content";
import { PortfolioEditor } from "@/components/admin/PortfolioEditor";

export default async function AdminCustomWorksPage() {
  const items = await getCustomWorksItems();

  return (
    <div className="flex flex-col gap-6">
      <h1 className="font-serif text-xl">Portfolio · Custom Works 편집</h1>
      <PortfolioEditor
        section="CUSTOM_WORKS"
        items={items.map((item) => ({ ...item, caption: null }))}
        withCaption={false}
        pathPrefix="portfolio/custom-works"
      />
    </div>
  );
}
