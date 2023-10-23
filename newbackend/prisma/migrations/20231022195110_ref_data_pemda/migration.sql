/*
  Warnings:

  - You are about to drop the column `updated_at` on the `users` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `users` DROP COLUMN `updated_at`,
    ADD COLUMN `update_at` DATETIME(3) NULL DEFAULT CURRENT_TIMESTAMP(3),
    MODIFY `created_at` DATETIME(3) NULL DEFAULT CURRENT_TIMESTAMP(3);

-- CreateTable
CREATE TABLE `ref_data_pemda` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `kode_pemda` INTEGER NOT NULL,
    `tahun` INTEGER NOT NULL,
    `nama_pemda` VARCHAR(191) NOT NULL,
    `nama_kepala_daerah` VARCHAR(191) NOT NULL,
    `jumlah_satker` INTEGER NOT NULL,
    `created_at` DATETIME(3) NULL DEFAULT CURRENT_TIMESTAMP(3),
    `update_at` DATETIME(3) NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
