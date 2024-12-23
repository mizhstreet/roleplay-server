/*
  Warnings:

  - You are about to drop the column `rate` on the `Product` table. All the data in the column will be lost.
  - Added the required column `rates` to the `Product` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Product" DROP COLUMN "rate",
ADD COLUMN     "rates" INTEGER NOT NULL;
