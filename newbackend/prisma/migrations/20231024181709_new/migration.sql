/*
  Warnings:

  - Added the required column `id_indikator` to the `jawaban_capaian` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `jawaban_capaian` ADD COLUMN `id_indikator` INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE `jawaban_capaian` ADD CONSTRAINT `jawaban_capaian_id_indikator_fkey` FOREIGN KEY (`id_indikator`) REFERENCES `ref_indikator`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
