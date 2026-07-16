import { prisma } from "@/lib/db";

export async function getHeroContent() {
  const hero = await prisma.heroContent.findUnique({ where: { id: 1 } });
  return {
    headline: hero?.headline ?? "",
    subcopy: hero?.subcopy ?? "",
    imageUrl: hero?.imageUrl ?? null,
  };
}

export async function getCommercialItems() {
  const items = await prisma.portfolioItem.findMany({
    where: { section: "COMMERCIAL" },
    orderBy: { order: "asc" },
  });
  return items.map((item) => ({
    id: item.id,
    imageUrl: item.imageUrl,
    caption: item.caption ?? "",
  }));
}

export async function getCustomWorksItems() {
  const items = await prisma.portfolioItem.findMany({
    where: { section: "CUSTOM_WORKS" },
    orderBy: { order: "asc" },
  });
  return items.map((item) => ({
    id: item.id,
    imageUrl: item.imageUrl,
  }));
}
