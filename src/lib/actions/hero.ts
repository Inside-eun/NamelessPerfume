"use server";

import { revalidatePath } from "next/cache";
import { del } from "@vercel/blob";
import { prisma } from "@/lib/db";

export type HeroFormState = { error: string | null; success: boolean };

export async function updateHero(
  _prevState: HeroFormState,
  formData: FormData
): Promise<HeroFormState> {
  const imageUrl = String(formData.get("imageUrl") ?? "") || null;
  const blobPath = String(formData.get("blobPath") ?? "") || null;

  const existing = await prisma.heroContent.findUnique({ where: { id: 1 } });

  if (existing?.blobPath && blobPath && existing.blobPath !== blobPath) {
    await del(existing.blobPath).catch(() => undefined);
  }

  await prisma.heroContent.upsert({
    where: { id: 1 },
    update: {
      ...(imageUrl ? { imageUrl, blobPath } : {}),
    },
    create: {
      id: 1,
      imageUrl,
      blobPath,
    },
  });

  revalidatePath("/");
  revalidatePath("/admin/hero");

  return { error: null, success: true };
}
