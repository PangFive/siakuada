// ApiController
import res from "../app/helpers/return";
import indikatorService from "../services/indikator.service";

const indikator = async ({ set, request, headers, cookie, params }: any) => {

  const indikatorId = params.indikator == 'keuangan' ? 1 : 2;
  const indikator = await indikatorService.getIndikatrById(indikatorId);

  return res({ status: 'success', data: indikator })
}

const saveIndikator = async ({ cookie, jwt, body }: any) => {

  let token: string = cookie["x-access-token"]
  const profile = await jwt.verify(token);

  let data = body.filter((item: any) => item !== null)

  data = data.map((item: any) => ({ ...item, tahun: 2023, id_pemda: 1, created_by: profile.id, updated_by: profile.id }))

  const response = await indikatorService.saveIndikator(data);

  return res({ status: 'success', data: response })
}

const getJawabanKriteria = async ({ cookie, jwt, params }: any) => {
  let token: string = cookie["x-access-token"]
  const profile = await jwt.verify(token);

  const tahun = Number(profile.tahun);
  const aspekId = Number(params.aspekId);
  const id_pemda = Number(profile.id_pemda);

  const response = await indikatorService.getJawabanByAspek(aspekId, tahun, id_pemda)

  return res({ status: 'success', data: response });
}


export default { indikator, saveIndikator, getJawabanKriteria };