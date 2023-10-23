import { configureStore } from "@reduxjs/toolkit";

import counterReducer from "./counter/counterSlice";
import CustomizerReducer from "./customizer/CustomizerSlice";
import authReducer from "./apps/auth/authSlice";


export const store = configureStore({
  reducer: {
    counter: counterReducer,
    customizer: CustomizerReducer,
    auth: authReducer,
  },
  devTools: process.env.NODE_ENV !== "production",
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
