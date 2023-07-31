/*
  Warnings:

  - You are about to drop the `_categorytoproduct` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `_categorytoproduct` DROP FOREIGN KEY `_CategoryToProduct_A_fkey`;

-- DropForeignKey
ALTER TABLE `_categorytoproduct` DROP FOREIGN KEY `_CategoryToProduct_B_fkey`;

-- DropTable
DROP TABLE `_categorytoproduct`;
