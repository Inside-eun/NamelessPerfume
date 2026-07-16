import Image from "next/image";

export type CommercialItem = {
  id: string;
  imageUrl: string | null;
  caption: string;
};

export function CommercialList({ items }: { items: CommercialItem[] }) {
  if (items.length === 0) return null;

  return (
    <div>
      <p className="flex items-center gap-2 text-xs font-semibold tracking-wide text-ink">
        <span aria-hidden>+</span> COMMERCIAL
      </p>
      <div className="mt-5 grid grid-cols-3 gap-3 sm:gap-6">
        {items.map((item) => (
          <div key={item.id} className="flex flex-col gap-2">
            <div className="relative aspect-[3/4] w-full overflow-hidden rounded-sm bg-zinc-200">
              {item.imageUrl ? (
                <Image
                  src={item.imageUrl}
                  alt={item.caption}
                  fill
                  className="object-cover"
                />
              ) : (
                <div className="h-full w-full bg-gradient-to-br from-zinc-200 to-zinc-300" />
              )}
            </div>
            <p className="text-[11px] leading-snug text-muted">{item.caption}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
