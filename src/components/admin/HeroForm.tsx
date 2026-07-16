"use client";

import { useActionState, useState } from "react";
import Image from "next/image";
import { updateHero, type HeroFormState } from "@/lib/actions/hero";
import { ImageUploader } from "@/components/admin/ImageUploader";

type HeroFormProps = {
  initialHeadline: string;
  initialSubcopy: string;
  initialImageUrl: string | null;
};

const initialState: HeroFormState = { error: null, success: false };

export function HeroForm({
  initialHeadline,
  initialSubcopy,
  initialImageUrl,
}: HeroFormProps) {
  const [state, formAction, isPending] = useActionState(
    updateHero,
    initialState
  );
  const [previewUrl, setPreviewUrl] = useState(initialImageUrl);
  const [uploaded, setUploaded] = useState<{ url: string; pathname: string } | null>(
    null
  );

  return (
    <form action={formAction} className="flex max-w-lg flex-col gap-5">
      <div className="flex flex-col gap-1.5">
        <label htmlFor="headline" className="text-xs text-muted">
          헤드라인
        </label>
        <textarea
          id="headline"
          name="headline"
          required
          defaultValue={initialHeadline}
          rows={2}
          className="rounded-sm border border-ink/20 px-3 py-2 text-sm outline-none focus:border-ink"
        />
      </div>

      <div className="flex flex-col gap-1.5">
        <label htmlFor="subcopy" className="text-xs text-muted">
          서브카피
        </label>
        <textarea
          id="subcopy"
          name="subcopy"
          defaultValue={initialSubcopy}
          rows={2}
          className="rounded-sm border border-ink/20 px-3 py-2 text-sm outline-none focus:border-ink"
        />
      </div>

      <div className="flex flex-col gap-2">
        <span className="text-xs text-muted">히어로 이미지</span>
        {previewUrl && (
          <div className="relative h-40 w-full overflow-hidden rounded-sm bg-zinc-200">
            <Image src={previewUrl} alt="" fill className="object-cover" />
          </div>
        )}
        <ImageUploader
          pathPrefix="hero"
          onUploaded={(result) => {
            setUploaded(result);
            setPreviewUrl(result.url);
          }}
        />
        <input type="hidden" name="imageUrl" value={uploaded?.url ?? ""} />
        <input type="hidden" name="blobPath" value={uploaded?.pathname ?? ""} />
      </div>

      {state.error && <p className="text-xs text-red-600">{state.error}</p>}
      {state.success && (
        <p className="text-xs text-green-700">저장되었습니다.</p>
      )}

      <button
        type="submit"
        disabled={isPending}
        className="w-fit rounded-sm bg-ink px-5 py-2.5 text-sm text-white disabled:opacity-50"
      >
        {isPending ? "저장 중..." : "저장"}
      </button>
    </form>
  );
}
