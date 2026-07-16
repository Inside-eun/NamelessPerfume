"use server";

import { revalidatePath } from "next/cache";
import { del } from "@vercel/blob";
import { prisma } from "@/lib/db";

type Section = "COMMERCIAL" | "CUSTOM_WORKS";

function adminPathForSection(section: Section) {
  return section === "COMMERCIAL"
    ? "/admin/portfolio/commercial"
    : "/admin/portfolio/custom-works";
}

async function revalidateSection(section: Section) {
  revalidatePath("/");
  revalidatePath(adminPathForSection(section));
}

export async function addPortfolioItem(
  section: Section,
  imageUrl: string,
  blobPath: string,
  caption: string | null
) {
  const last = await prisma.portfolioItem.findFirst({
    where: { section },
    orderBy: { order: "desc" },
  });

  await prisma.portfolioItem.create({
    data: {
      section,
      imageUrl,
      blobPath,
      caption: caption || null,
      order: (last?.order ?? -1) + 1,
    },
  });

  await revalidateSection(section);
}

export async function deletePortfolioItem(id: string) {
  const item = await prisma.portfolioItem.delete({ where: { id } });
  await del(item.blobPath).catch(() => undefined);
  await revalidateSection(item.section as Section);
}

export async function updatePortfolioItemCaption(id: string, caption: string) {
  const item = await prisma.portfolioItem.update({
    where: { id },
    data: { caption },
  });
  await revalidateSection(item.section as Section);
}

export async function movePortfolioItem(id: string, direction: "up" | "down") {
  const item = await prisma.portfolioItem.findUniqueOrThrow({ where: { id } });

  const neighbor = await prisma.portfolioItem.findFirst({
    where: {
      section: item.section,
      order: direction === "up" ? { lt: item.order } : { gt: item.order },
    },
    orderBy: { order: direction === "up" ? "desc" : "asc" },
  });

  if (!neighbor) return;

  await prisma.$transaction([
    prisma.portfolioItem.update({
      where: { id: item.id },
      data: { order: neighbor.order },
    }),
    prisma.portfolioItem.update({
      where: { id: neighbor.id },
      data: { order: item.order },
    }),
  ]);

  await revalidateSection(item.section as Section);
}
