"use client";

import { useState, useTransition } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { ImageUploader } from "@/components/admin/ImageUploader";
import {
  addPortfolioItem,
  deletePortfolioItem,
  updatePortfolioItemCaption,
  movePortfolioItem,
} from "@/lib/actions/portfolio";

type Item = { id: string; imageUrl: string; caption: string | null };
type Section = "COMMERCIAL" | "CUSTOM_WORKS";

export function PortfolioEditor({
  section,
  items,
  withCaption,
  pathPrefix,
}: {
  section: Section;
  items: Item[];
  withCaption: boolean;
  pathPrefix: string;
}) {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();

  function refresh() {
    startTransition(() => router.refresh());
  }

  function handleAdd(result: { url: string; pathname: string }) {
    startTransition(async () => {
      await addPortfolioItem(section, result.url, result.pathname, null);
      router.refresh();
    });
  }

  function handleDelete(id: string) {
    startTransition(async () => {
      await deletePortfolioItem(id);
      router.refresh();
    });
  }

  function handleMove(id: string, direction: "up" | "down") {
    startTransition(async () => {
      await movePortfolioItem(id, direction);
      router.refresh();
    });
  }

  return (
    <div className="flex flex-col gap-8">
      <ImageUploader
        pathPrefix={pathPrefix}
        multiple
        label="이미지 추가"
        onUploaded={handleAdd}
      />

      <div
        className={
          withCaption
            ? "grid grid-cols-1 gap-6 sm:grid-cols-3"
            : "grid grid-cols-2 gap-4 sm:grid-cols-4"
        }
      >
        {items.map((item, index) => (
          <div key={item.id} className="flex flex-col gap-2">
            <div className="relative aspect-square w-full overflow-hidden rounded-sm bg-zinc-200">
              <Image src={item.imageUrl} alt="" fill className="object-cover" />
            </div>
            {withCaption && (
              <CaptionField id={item.id} initialCaption={item.caption ?? ""} />
            )}
            <div className="flex items-center gap-2 text-xs text-muted">
              <button
                type="button"
                disabled={isPending || index === 0}
                onClick={() => handleMove(item.id, "up")}
                className="disabled:opacity-30"
              >
                ↑
              </button>
              <button
                type="button"
                disabled={isPending || index === items.length - 1}
                onClick={() => handleMove(item.id, "down")}
                className="disabled:opacity-30"
              >
                ↓
              </button>
              <button
                type="button"
                disabled={isPending}
                onClick={() => handleDelete(item.id)}
                className="ml-auto text-red-600"
              >
                삭제
              </button>
            </div>
          </div>
        ))}
      </div>

      {items.length === 0 && (
        <p className="text-xs text-muted">아직 등록된 이미지가 없어요.</p>
      )}
    </div>
  );
}

function CaptionField({
  id,
  initialCaption,
}: {
  id: string;
  initialCaption: string;
}) {
  const [value, setValue] = useState(initialCaption);
  const [saved, setSaved] = useState(false);
  const [isPending, startTransition] = useTransition();

  function handleSave() {
    startTransition(async () => {
      await updatePortfolioItemCaption(id, value);
      setSaved(true);
      setTimeout(() => setSaved(false), 1500);
    });
  }

  return (
    <div className="flex items-center gap-1.5">
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className="w-full rounded-sm border border-ink/20 px-2 py-1 text-[11px] outline-none focus:border-ink"
        placeholder="캡션"
      />
      <button
        type="button"
        onClick={handleSave}
        disabled={isPending}
        className="shrink-0 text-[11px] text-muted"
      >
        {saved ? "저장됨" : "저장"}
      </button>
    </div>
  );
}
