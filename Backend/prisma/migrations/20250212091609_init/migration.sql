/*
  Warnings:

  - You are about to drop the column `jobs` on the `Client` table. All the data in the column will be lost.
  - You are about to drop the column `clientId` on the `Job` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Job" DROP CONSTRAINT "Job_clientId_fkey";

-- AlterTable
ALTER TABLE "Client" DROP COLUMN "jobs";

-- AlterTable
ALTER TABLE "Job" DROP COLUMN "clientId";
