/*
  Warnings:

  - You are about to drop the column `text` on the `Post` table. All the data in the column will be lost.
  - You are about to drop the column `title` on the `Post` table. All the data in the column will be lost.
  - The `images` column on the `Post` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - Added the required column `textEng` to the `Post` table without a default value. This is not possible if the table is not empty.
  - Added the required column `textRu` to the `Post` table without a default value. This is not possible if the table is not empty.
  - Added the required column `titleEng` to the `Post` table without a default value. This is not possible if the table is not empty.
  - Added the required column `titleRu` to the `Post` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Post" DROP COLUMN "text",
DROP COLUMN "title",
ADD COLUMN     "textEng" TEXT NOT NULL,
ADD COLUMN     "textRu" TEXT NOT NULL,
ADD COLUMN     "titleEng" TEXT NOT NULL,
ADD COLUMN     "titleRu" TEXT NOT NULL,
DROP COLUMN "images",
ADD COLUMN     "images" TEXT[];
