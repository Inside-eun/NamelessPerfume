import { config } from "dotenv";
config({ path: ".env.local" });

async function main() {
  const { prisma } = await import("../src/lib/db");

  await prisma.heroContent.upsert({
    where: { id: 1 },
    update: {},
    create: {
      id: 1,
      headline: "여기 뭘 넣어야 좋을지\n계속 고민중입니다",
      subcopy: "관리자 페이지에서 이 문구와 사진을 직접 바꿀 수 있어요.",
      imageUrl: null,
    },
  });
  console.log("Seeded HeroContent.");

  await prisma.$disconnect();
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
