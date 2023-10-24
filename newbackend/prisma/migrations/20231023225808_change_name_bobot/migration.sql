/*
  Warnings:

  - You are about to drop the column `point_total` on the `ref_parameter` table. All the data in the column will be lost.
  - Added the required column `bobot` to the `ref_parameter` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `ref_parameter` DROP COLUMN `point_total`,
    ADD COLUMN `bobot` DOUBLE NOT NULL;
