/*
  Warnings:

  - Added the required column `id_pemda` to the `users` table without a default value. This is not possible if the table is not empty.
  - Added the required column `role` to the `users` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `users` ADD COLUMN `auditor` INTEGER NOT NULL DEFAULT 0,
    ADD COLUMN `id_pemda` INTEGER NOT NULL,
    ADD COLUMN `role` VARCHAR(191) NOT NULL;

-- CreateTable
CREATE TABLE `ref_data_keuangan` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `id_pemda` INTEGER NOT NULL,
    `tahun` INTEGER NOT NULL,
    `nilai_anggaran` INTEGER NULL,
    `nomor_perkada_rkpd` VARCHAR(191) NULL,
    `tanggal_perkada_rkpd` DATETIME(3) NULL,
    `nomor_kua_ppas` VARCHAR(191) NULL,
    `tanggal_kua_ppas` DATETIME(3) NULL,
    `nomor_perda_apbd` VARCHAR(191) NULL,
    `tanggal_perda__apbd` DATETIME(3) NULL,
    `created_at` DATETIME(3) NULL DEFAULT CURRENT_TIMESTAMP(3),
    `update_at` DATETIME(3) NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `ref_data_statistik` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `id_pemda` INTEGER NOT NULL,
    `tahun` INTEGER NOT NULL,
    `capaian_ipm_nasional` DOUBLE NULL,
    `capaian_ipm_pemda` DOUBLE NULL,
    `pdrb_nasional` DOUBLE NULL,
    `pdrb_pemda` DOUBLE NULL,
    `angka_kemiskinan_nasional` DOUBLE NULL,
    `angka_kemiskinan_pemda` DOUBLE NULL,
    `prevalensi_stunting_nasional` DOUBLE NULL,
    `prevalensi_stunting_pemda` DOUBLE NULL,
    `created_at` DATETIME(3) NULL DEFAULT CURRENT_TIMESTAMP(3),
    `update_at` DATETIME(3) NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `ref_indikator` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nama_indikator` VARCHAR(191) NOT NULL,
    `created_at` DATETIME(3) NULL DEFAULT CURRENT_TIMESTAMP(3),
    `update_at` DATETIME(3) NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `ref_aspek` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `id_indikator` INTEGER NOT NULL,
    `nama_aspek` VARCHAR(191) NOT NULL,
    `bobot_total` DOUBLE NOT NULL,
    `created_at` DATETIME(3) NULL DEFAULT CURRENT_TIMESTAMP(3),
    `update_at` DATETIME(3) NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `ref_parameter` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `id_aspek` INTEGER NOT NULL,
    `nama_parameter` VARCHAR(191) NOT NULL,
    `point_total` DOUBLE NOT NULL,
    `type` VARCHAR(191) NOT NULL,
    `created_at` DATETIME(3) NULL DEFAULT CURRENT_TIMESTAMP(3),
    `update_at` DATETIME(3) NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `ref_kriteria` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `id_parameter` INTEGER NOT NULL,
    `nama_kriteria` VARCHAR(191) NOT NULL,
    `point` DOUBLE NOT NULL,
    `type` VARCHAR(191) NOT NULL,
    `created_at` DATETIME(3) NULL DEFAULT CURRENT_TIMESTAMP(3),
    `update_at` DATETIME(3) NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `jawaban_capaian` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `tahun` INTEGER NOT NULL,
    `id_pemda` INTEGER NOT NULL,
    `id_parameter` INTEGER NOT NULL,
    `id_kriteria` INTEGER NOT NULL,
    `created_by` INTEGER NOT NULL,
    `updated_by` INTEGER NULL,
    `created_at` DATETIME(3) NULL DEFAULT CURRENT_TIMESTAMP(3),
    `update_at` DATETIME(3) NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `users` ADD CONSTRAINT `users_id_pemda_fkey` FOREIGN KEY (`id_pemda`) REFERENCES `ref_data_pemda`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `access_management` ADD CONSTRAINT `access_management_id_user_fkey` FOREIGN KEY (`id_user`) REFERENCES `users`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `access_management` ADD CONSTRAINT `access_management_id_pemda_fkey` FOREIGN KEY (`id_pemda`) REFERENCES `ref_data_pemda`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `ref_data_keuangan` ADD CONSTRAINT `ref_data_keuangan_id_pemda_fkey` FOREIGN KEY (`id_pemda`) REFERENCES `ref_data_pemda`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `ref_data_statistik` ADD CONSTRAINT `ref_data_statistik_id_pemda_fkey` FOREIGN KEY (`id_pemda`) REFERENCES `ref_data_pemda`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `ref_aspek` ADD CONSTRAINT `ref_aspek_id_indikator_fkey` FOREIGN KEY (`id_indikator`) REFERENCES `ref_indikator`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `ref_parameter` ADD CONSTRAINT `ref_parameter_id_aspek_fkey` FOREIGN KEY (`id_aspek`) REFERENCES `ref_aspek`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `ref_kriteria` ADD CONSTRAINT `ref_kriteria_id_parameter_fkey` FOREIGN KEY (`id_parameter`) REFERENCES `ref_parameter`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `jawaban_capaian` ADD CONSTRAINT `jawaban_capaian_id_pemda_fkey` FOREIGN KEY (`id_pemda`) REFERENCES `ref_data_pemda`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `jawaban_capaian` ADD CONSTRAINT `jawaban_capaian_id_parameter_fkey` FOREIGN KEY (`id_parameter`) REFERENCES `ref_parameter`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `jawaban_capaian` ADD CONSTRAINT `jawaban_capaian_id_kriteria_fkey` FOREIGN KEY (`id_kriteria`) REFERENCES `ref_kriteria`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `jawaban_capaian` ADD CONSTRAINT `jawaban_capaian_created_by_fkey` FOREIGN KEY (`created_by`) REFERENCES `users`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `jawaban_capaian` ADD CONSTRAINT `jawaban_capaian_updated_by_fkey` FOREIGN KEY (`updated_by`) REFERENCES `users`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
