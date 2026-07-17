"use client";

import { useState } from "react";

type UploadResult = { url: string; pathname: string };

type ImageUploaderProps = {
  pathPrefix: string;
  multiple?: boolean;
  label?: string;
  onUploaded: (result: UploadResult) => void;
};

const MAX_DIMENSION = 2400;
const JPEG_QUALITY = 0.85;

async function resizeImage(file: File): Promise<File> {
  if (file.type === "image/avif") return file;

  const bitmap = await createImageBitmap(file);
  const scale = Math.min(
    1,
    MAX_DIMENSION / Math.max(bitmap.width, bitmap.height)
  );

  if (scale === 1 && file.size < 4 * 1024 * 1024) {
    bitmap.close();
    return file;
  }

  const width = Math.round(bitmap.width * scale);
  const height = Math.round(bitmap.height * scale);
  const canvas = document.createElement("canvas");
  canvas.width = width;
  canvas.height = height;
  const ctx = canvas.getContext("2d");
  if (!ctx) return file;
  ctx.drawImage(bitmap, 0, 0, width, height);
  bitmap.close();

  const outputType = file.type === "image/png" ? "image/png" : "image/jpeg";
  const blob: Blob | null = await new Promise((resolve) =>
    canvas.toBlob(resolve, outputType, JPEG_QUALITY)
  );
  if (!blob) return file;

  const newName =
    outputType === "image/jpeg" && !file.name.match(/\.jpe?g$/i)
      ? file.name.replace(/\.[^.]+$/, "") + ".jpg"
      : file.name;

  return new File([blob], newName, { type: outputType });
}

export function ImageUploader({
  pathPrefix,
  multiple,
  label,
  onUploaded,
}: ImageUploaderProps) {
  const [isUploading, setIsUploading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    const files = event.target.files;
    if (!files || files.length === 0) return;

    setIsUploading(true);
    setError(null);
    try {
      for (const original of Array.from(files)) {
        const file = await resizeImage(original);
        const formData = new FormData();
        formData.append("file", file);
        formData.append("pathPrefix", pathPrefix);

        const response = await fetch("/api/admin/upload", {
          method: "POST",
          body: formData,
        });

        if (!response.ok) {
          const body = await response.json().catch(() => null);
          throw new Error(body?.error ?? "업로드에 실패했습니다.");
        }

        const result = (await response.json()) as UploadResult;
        onUploaded(result);
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : "업로드에 실패했습니다.");
    } finally {
      setIsUploading(false);
      event.target.value = "";
    }
  }

  return (
    <div className="flex flex-col gap-1.5">
      {label && <label className="text-xs text-muted">{label}</label>}
      <input
        type="file"
        accept="image/png,image/jpeg,image/webp,image/avif"
        multiple={multiple}
        onChange={handleChange}
        disabled={isUploading}
        className="text-xs file:mr-3 file:rounded-sm file:border-0 file:bg-ink file:px-3 file:py-1.5 file:text-xs file:text-paper"
      />
      {isUploading && <p className="text-xs text-muted">업로드 중...</p>}
      {error && <p className="text-xs text-red-600">{error}</p>}
    </div>
  );
}
