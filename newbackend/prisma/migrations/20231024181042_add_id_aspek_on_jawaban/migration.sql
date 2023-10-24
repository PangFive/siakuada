/*
  Warnings:

  - Added the required column `id_aspek` to the `jawaban_capaian` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `jawaban_capaian` ADD COLUMN `id_aspek` INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE `jawaban_capaian` ADD CONSTRAINT `jawaban_capaian_id_aspek_fkey` FOREIGN KEY (`id_aspek`) REFERENCES `ref_aspek`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
