"use client";

import {
  useCallback,
  useEffect,
} from 'react';

export type LightboxItem = {
  imageUrl: string | null;
  alt: string;
};

type ImageLightboxProps = {
  items: LightboxItem[];
  index: number;
  onClose: () => void;
  onNavigate: (index: number) => void;
};

export function ImageLightbox({ items, index, onClose, onNavigate }: ImageLightboxProps) {
  const goPrev = useCallback(() => {
    onNavigate((index - 1 + items.length) % items.length);
  }, [index, items.length, onNavigate]);

  const goNext = useCallback(() => {
    onNavigate((index + 1) % items.length);
  }, [index, items.length, onNavigate]);

  useEffect(() => {
    function handleKey(event: KeyboardEvent) {
      if (event.key === "Escape") onClose();
      if (event.key === "ArrowLeft") goPrev();
      if (event.key === "ArrowRight") goNext();
    }
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [onClose, goPrev, goNext]);

  const item = items[index];
  if (!item) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 px-4"
      onClick={onClose}
    >
      <div
        className="relative flex h-160 w-160 flex-col rounded-md bg-white p-10 shadow-xl"
        onClick={(event) => event.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="닫기"
          className="absolute right-4 top-4 text-xs tracking-wide text-ink/60 hover:text-ink"
        >
          닫기 ✕
        </button>

        <div className="flex min-h-0 flex-1 items-center justify-center gap-4">
          {items.length > 1 && (
            <button
              type="button"
              onClick={goPrev}
              aria-label="이전 이미지"
              className="flex shrink-0 items-center justify-center px-1 text-2xl leading-none text-ink/50 hover:text-ink"
            >
              ‹
            </button>
          )}

          <div className="relative h-125 w-125 shrink-0 overflow-hidden">
            {item.imageUrl ? (
              // eslint-disable-next-line @next/next/no-img-element -- absolutely positioned so intrinsic size can't push parent flex layout
              <img
                src={item.imageUrl}
                alt={item.alt}
                className="absolute inset-0 h-full w-full rounded-sm object-contain"
              />
            ) : (
              <div className="absolute inset-0 rounded-sm bg-gradient-to-br from-zinc-200 to-zinc-300" />
            )}
          </div>

          {items.length > 1 && (
            <button
              type="button"
              onClick={goNext}
              aria-label="다음 이미지"
              className="flex shrink-0 items-center justify-center px-1 text-2xl leading-none text-ink/50 hover:text-ink"
            >
              ›
            </button>
          )}
        </div>

        <p
          className={`mt-3 text-center text-xs text-ink/70 ${item.alt ? "" : "invisible"}`}
        >
          {item.alt || " "}
        </p>
      </div>
    </div>
  );
}
