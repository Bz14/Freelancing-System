/*
  Warnings:

  - The `experience` column on the `Freelancer` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - Added the required column `bio` to the `Freelancer` table without a default value. This is not possible if the table is not empty.
  - Added the required column `title` to the `Freelancer` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `Freelancer` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Freelancer" ADD COLUMN     "accounts" TEXT[],
ADD COLUMN     "bio" TEXT NOT NULL,
ADD COLUMN     "certificates" JSONB,
ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "education" JSONB,
ADD COLUMN     "languages" TEXT[],
ADD COLUMN     "portfolioWork" JSONB,
ADD COLUMN     "testimonials" JSONB,
ADD COLUMN     "title" TEXT NOT NULL,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL,
DROP COLUMN "experience",
ADD COLUMN     "experience" JSONB;
