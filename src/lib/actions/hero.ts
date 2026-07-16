"use server";

import { revalidatePath } from "next/cache";
import { del } from "@vercel/blob";
import { prisma } from "@/lib/db";

export type HeroFormState = { error: string | null; success: boolean };

export async function updateHero(
  _prevState: HeroFormState,
  formData: FormData
): Promise<HeroFormState> {
  const headline = String(formData.get("headline") ?? "").trim();
  const subcopy = String(formData.get("subcopy") ?? "").trim();
  const imageUrl = String(formData.get("imageUrl") ?? "") || null;
  const blobPath = String(formData.get("blobPath") ?? "") || null;

  if (!headline) {
    return { error: "헤드라인을 입력해주세요.", success: false };
  }

  const existing = await prisma.heroContent.findUnique({ where: { id: 1 } });

  if (existing?.blobPath && blobPath && existing.blobPath !== blobPath) {
    await del(existing.blobPath).catch(() => undefined);
  }

  await prisma.heroContent.upsert({
    where: { id: 1 },
    update: {
      headline,
      subcopy,
      ...(imageUrl ? { imageUrl, blobPath } : {}),
    },
    create: {
      id: 1,
      headline,
      subcopy,
      imageUrl,
      blobPath,
    },
  });

  revalidatePath("/");
  revalidatePath("/admin/hero");

  return { error: null, success: true };
}
