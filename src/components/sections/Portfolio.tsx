import { CommercialList, type CommercialItem } from "./CommercialList";
import { CustomWorksGrid, type CustomWorksItem } from "./CustomWorksGrid";

type PortfolioProps = {
  commercialItems: CommercialItem[];
  customWorksItems: CustomWorksItem[];
};

export function Portfolio({ commercialItems, customWorksItems }: PortfolioProps) {
  return (
    <section className="w-full px-6 sm:px-10 py-20">
      <div className="mx-auto max-w-5xl">
        <div className="text-center">
          <h2 className="font-serif text-sm font-bold tracking-[0.2em]">PORTFOLIO</h2>
          <p className="mt-3 text-xs font-medium tracking-wide text-muted">작업물 모음</p>
        </div>

        <div className="mt-12">
          <CommercialList items={commercialItems} />
          <div className="mt-10 h-px w-full bg-ink/10" />
          <CustomWorksGrid items={customWorksItems} />
        </div>
      </div>
    </section>
  );
}
