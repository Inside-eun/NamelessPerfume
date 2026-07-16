import { getCommercialItems } from "@/lib/content";
import { PortfolioEditor } from "@/components/admin/PortfolioEditor";

export default async function AdminCommercialPage() {
  const items = await getCommercialItems();

  return (
    <div className="flex flex-col gap-6">
      <h1 className="font-serif text-xl">Portfolio · Commercial 편집</h1>
      <PortfolioEditor
        section="COMMERCIAL"
        items={items}
        withCaption
        pathPrefix="portfolio/commercial"
      />
    </div>
  );
}
