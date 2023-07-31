/*
  Warnings:

  - Added the required column `parentCategory` to the `Category` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `category` ADD COLUMN `parentCategory` INTEGER NOT NULL;
