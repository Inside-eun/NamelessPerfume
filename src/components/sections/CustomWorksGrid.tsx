"use client";

import { useState } from "react";
import Image from "next/image";
import { ImageLightbox } from "./ImageLightbox";

export type CustomWorksItem = {
  id: string;
  imageUrl: string | null;
};

const MOBILE_VISIBLE_COUNT = 6;

export function CustomWorksGrid({ items }: { items: CustomWorksItem[] }) {
  const [showAll, setShowAll] = useState(false);
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  if (items.length === 0) return null;

  return (
    <div className="mt-12">
      <p className="flex items-center gap-2 text-xs font-semibold tracking-wide text-ink">
        <span aria-hidden>+</span> CUSTOM WORKS
      </p>
      <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4">
        {items.map((item, index) => (
          <div
            key={item.id}
            className={
              index >= MOBILE_VISIBLE_COUNT && !showAll
                ? "hidden sm:block"
                : "block"
            }
          >
            <button
              type="button"
              onClick={() => setOpenIndex(index)}
              className="relative aspect-square w-full overflow-hidden rounded-sm bg-zinc-200"
            >
              {item.imageUrl ? (
                <Image
                  src={item.imageUrl}
                  alt=""
                  fill
                  className="object-cover"
                />
              ) : (
                <div className="h-full w-full bg-gradient-to-br from-zinc-200 to-zinc-300" />
              )}
            </button>
          </div>
        ))}
      </div>
      {items.length > MOBILE_VISIBLE_COUNT && !showAll && (
        <button
          type="button"
          onClick={() => setShowAll(true)}
          className="mt-6 w-full border border-ink/20 py-2.5 text-xs text-ink sm:hidden"
        >
          더보기
        </button>
      )}

      {openIndex !== null && (
        <ImageLightbox
          items={items.map((item) => ({ imageUrl: item.imageUrl, alt: "" }))}
          index={openIndex}
          onClose={() => setOpenIndex(null)}
          onNavigate={setOpenIndex}
        />
      )}
    </div>
  );
}
