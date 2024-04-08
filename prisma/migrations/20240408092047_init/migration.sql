/*
  Warnings:

  - You are about to drop the `sandwich` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `sauce` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `sauceLike` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "sauceLike" DROP CONSTRAINT "sauceLike_sauce_id_fkey";

-- DropTable
DROP TABLE "sandwich";

-- DropTable
DROP TABLE "sauce";

-- DropTable
DROP TABLE "sauceLike";

-- CreateTable
CREATE TABLE "Sandwich" (
    "sandwich_id" SERIAL NOT NULL,
    "sandwich_name" TEXT NOT NULL,
    "image_url" TEXT NOT NULL,
    "url" TEXT NOT NULL,
    "calories" INTEGER NOT NULL,
    "description" TEXT NOT NULL,

    CONSTRAINT "Sandwich_pkey" PRIMARY KEY ("sandwich_id")
);

-- CreateTable
CREATE TABLE "Sauce" (
    "sauce_id" SERIAL NOT NULL,
    "sauce_name" TEXT NOT NULL,
    "image_url" TEXT NOT NULL,
    "tags" TEXT[],
    "combinationCombination_id" INTEGER,

    CONSTRAINT "Sauce_pkey" PRIMARY KEY ("sauce_id")
);

-- CreateTable
CREATE TABLE "Combination" (
    "combination_id" SERIAL NOT NULL,
    "sandwich_id" INTEGER NOT NULL,
    "likes" INTEGER NOT NULL,
    "tags" TEXT[],

    CONSTRAINT "Combination_pkey" PRIMARY KEY ("combination_id")
);

-- AddForeignKey
ALTER TABLE "Sauce" ADD CONSTRAINT "Sauce_combinationCombination_id_fkey" FOREIGN KEY ("combinationCombination_id") REFERENCES "Combination"("combination_id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Combination" ADD CONSTRAINT "Combination_sandwich_id_fkey" FOREIGN KEY ("sandwich_id") REFERENCES "Sandwich"("sandwich_id") ON DELETE RESTRICT ON UPDATE CASCADE;
