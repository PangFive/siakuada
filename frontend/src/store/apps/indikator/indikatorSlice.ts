import callAPI from "@/config/api/callApi";
import { AppDispatch } from "@/store/store";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import Cookies from 'js-cookie';
import { changeAuth } from "../auth/authSlice";

interface Kriteria {
  id: number;
  id_parameter: number;
  nama_kriteria: string;
  point: number;
  type: string;
}

interface Parameter {
  id: number;
  id_aspek: number;
  nama_parameter: string;
  bobot: number;
  type: string;
  ref_kriteria: Kriteria[];
}

interface Aspek {
  id: number;
  id_indikator: number;
  nama_aspek: string;
  bobot_total: number;
  ref_parameter: Parameter[];
}

interface Indikator {
  id: number;
  nama_indikator: string;
  ref_aspek: Aspek[];
}

type TypeIndikator = {
  indikator: Indikator,
  activeAspekId: number,
  activeJawaban: [],
}

const initialState: TypeIndikator = {
  indikator: {
    id: 0,
    nama_indikator: '',
    ref_aspek: [{
      id: 0,
      id_indikator: 0,
      nama_aspek: "",
      bobot_total: 0,
      ref_parameter: []
    }]
  },
  activeAspekId: 0,
  activeJawaban: [],
};

export const auth = createSlice({
  name: "indikator",
  initialState,
  reducers: {
    updateIndikator: (state, action) => {
      state.indikator.id = action.payload.id;
      state.indikator.nama_indikator = action.payload.nama_indikator;
      state.indikator.ref_aspek = action.payload.ref_aspek;
    },
    updateActive: (state, action) => {
      state.activeAspekId = action.payload
    },
    updateActiveJawaban: (state, action) => {
      state.activeJawaban = action.payload
    }
  },
});

export const {
  updateIndikator, updateActive, updateActiveJawaban
} = auth.actions;

export default auth.reducer;

export const getIndikator = (param: string) => async (dispatch: AppDispatch) => {

  try {
    const response = await callAPI({ url: `/indikator/${param}`, method: "GET", serverToken: Cookies.get('x-access-token') });
    if (response.status === 200) {
      dispatch(updateIndikator(response.data.data));
      dispatch(updateActive(response.data.data.ref_aspek[0].id))
    }
    if (response.status === 401) {
      dispatch(changeAuth(false))
    }
  } catch (err: any) {
    throw new Error(err);
  }
};

export const getJawabanKriteria = (aspek: number) => async (dispatch: AppDispatch) => {

  try {
    const response = await callAPI({ url: `/indikator/getJawabanKriteria/${aspek}`, method: "GET", serverToken: Cookies.get('x-access-token') });
    if (response.status === 200) {
      dispatch(updateActiveJawaban(response.data.data));
    }
    if (response.status === 401) {
      dispatch(changeAuth(false))
    }
  } catch (err: any) {
    throw new Error(err);
  }
};

export const saveIndikator = (payload: object) => async (dispatch: AppDispatch) => {
  console.log(payload);
  try {
    const response = await callAPI({ url: `/indikator/save`, method: "POST", serverToken: Cookies.get('x-access-token'), data: payload });
    if (response.status === 200) {
      return response.data.data;
    }
    if (response.status === 401) {
      dispatch(changeAuth(false))
    }
  } catch (err: any) {
    throw new Error(err);
  }
};
