import callAPI from "@/config/api/callApi";
import { AppDispatch } from "@/store/store";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import Cookies from 'js-cookie';

type AuthState = {
  isAuthenticated: boolean;
  infoUser: {
    name?: string,
    id?: number,
    email?: string,
    username?: string,
  };
};

const initialState: AuthState = {
  isAuthenticated: true,
  infoUser: {
    name: '',
    id: 0,
    email: '',
    username: '',
  }
};

export const auth = createSlice({
  name: "auth",
  initialState,
  reducers: {
    changeAuth: (state, action: PayloadAction<boolean>) => {
      state.isAuthenticated = action.payload;
    },
    updateUser: (state, action: PayloadAction<AuthState['infoUser']>) => {
      if (action.payload) {
        state.infoUser.email = action.payload.email;
        state.infoUser.name = action.payload.name;
        state.infoUser.username = action.payload.username;
        state.infoUser.id = action.payload.id;
      }
    }
  },
});

export const {
  changeAuth, updateUser
} = auth.actions;

export default auth.reducer;

export const checkAuth = () => async (dispatch: AppDispatch) => {

  try {
    const response = await callAPI({ url: '/auth', method: "GET", serverToken: Cookies.get('x-access-token') });
    if (response.status === 200) {
      dispatch(updateUser(response.data.data));
    }
    if (response.status === 401) {
      dispatch(changeAuth(false))
    }
  } catch (err: any) {
    throw new Error(err);
  }
};
