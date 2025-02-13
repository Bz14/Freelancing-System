/*
  Warnings:

  - The primary key for the `Client` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `userId` on the `Client` table. All the data in the column will be lost.
  - The primary key for the `Freelancer` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `userId` on the `Freelancer` table. All the data in the column will be lost.
  - You are about to drop the column `clientHistory` on the `Job` table. All the data in the column will be lost.
  - You are about to drop the column `projectLength` on the `Job` table. All the data in the column will be lost.
  - You are about to drop the column `skillsRequired` on the `Job` table. All the data in the column will be lost.
  - The required column `id` was added to the `Client` table with a prisma-level default value. This is not possible if the table is not empty. Please add this column as optional, then populate it before making it required.
  - The required column `id` was added to the `Freelancer` table with a prisma-level default value. This is not possible if the table is not empty. Please add this column as optional, then populate it before making it required.
  - Added the required column `clientId` to the `Job` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Client" DROP CONSTRAINT "Client_userId_fkey";

-- DropForeignKey
ALTER TABLE "Freelancer" DROP CONSTRAINT "Freelancer_userId_fkey";

-- AlterTable
ALTER TABLE "Client" DROP CONSTRAINT "Client_pkey",
DROP COLUMN "userId",
ADD COLUMN     "id" TEXT NOT NULL,
ADD CONSTRAINT "Client_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "Freelancer" DROP CONSTRAINT "Freelancer_pkey",
DROP COLUMN "userId",
ADD COLUMN     "id" TEXT NOT NULL,
ADD CONSTRAINT "Freelancer_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "Job" DROP COLUMN "clientHistory",
DROP COLUMN "projectLength",
DROP COLUMN "skillsRequired",
ADD COLUMN     "clientId" TEXT NOT NULL,
ADD COLUMN     "company" TEXT,
ADD COLUMN     "skills" TEXT[],
ADD COLUMN     "status" TEXT DEFAULT 'Open',
ALTER COLUMN "proposalsSent" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "Client" ADD CONSTRAINT "Client_id_fkey" FOREIGN KEY ("id") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Freelancer" ADD CONSTRAINT "Freelancer_id_fkey" FOREIGN KEY ("id") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Job" ADD CONSTRAINT "Job_clientId_fkey" FOREIGN KEY ("clientId") REFERENCES "Client"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
