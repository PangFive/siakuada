import { prismaClient } from "../app/database"

const getIndikatrById = async (indikatorId: number) => {
  const indikator = prismaClient.refIndikator.findUnique({
    where: { id: indikatorId },
    select: {
      id: true,
      nama_indikator: true,
      ref_aspek: {
        select: {
          id: true,
          id_indikator: true,
          nama_aspek: true,
          bobot_total: true,
          ref_parameter: {
            select: {
              id: true,
              id_aspek: true,
              nama_parameter: true,
              bobot: true,
              type: true,
              ref_kriteria: {
                select: {
                  id: true,
                  id_parameter: true,
                  nama_kriteria: true,
                  point: true,
                  type: true,
                }
              }
            }
          }
        }
      }
    },

  });

  return indikator;
}

const saveIndikator = async (body: []) => {
  let response = [];

  for (const item of body) {
    const { tahun, id_pemda, id_parameter, id_kriteria, updated_by }: any = item;

    // Check if a record with the same keys already exists
    const existingRecord = await prismaClient.jawabanCapaian.findFirst({
      where: {
        tahun,
        id_parameter,
        id_pemda,
      },
    });

    if (existingRecord) {
      // If a record exists, update it
      response.push(await prismaClient.jawabanCapaian.update({
        where: {
          id: existingRecord.id,
        },
        data: {
          id_kriteria,
          updated_by,
          update_at: new Date(),
        },
      }));
    } else {
      // If a record doesn't exist, create a new one
      response.push(await prismaClient.jawabanCapaian.create({
        data: item,
      }));
    }
  }

  return response;
}

const getJawabanByAspek = async (aspekId: number, tahun: number, id_pemda: any) => {
  const jawaban = prismaClient.jawabanCapaian.findMany({
    where: { id_aspek: aspekId, tahun: tahun, id_pemda: id_pemda },
    select: {
      id_aspek: true,
      id_parameter: true,
      id_kriteria: true,
      id_indikator: true,
    },

  });

  return jawaban;
}

export default { getIndikatrById, saveIndikator, getJawabanByAspek };