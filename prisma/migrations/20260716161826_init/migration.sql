-- CreateEnum
CREATE TYPE "PortfolioSection" AS ENUM ('COMMERCIAL', 'CUSTOM_WORKS');

-- CreateTable
CREATE TABLE "HeroContent" (
    "id" INTEGER NOT NULL DEFAULT 1,
    "headline" TEXT NOT NULL,
    "subcopy" TEXT NOT NULL,
    "imageUrl" TEXT,
    "blobPath" TEXT,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "HeroContent_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PortfolioItem" (
    "id" TEXT NOT NULL,
    "section" "PortfolioSection" NOT NULL,
    "imageUrl" TEXT NOT NULL,
    "blobPath" TEXT NOT NULL,
    "caption" TEXT,
    "order" INTEGER NOT NULL DEFAULT 0,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "PortfolioItem_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "PortfolioItem_section_order_idx" ON "PortfolioItem"("section", "order");
