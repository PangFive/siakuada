import { configureStore } from "@reduxjs/toolkit";

import counterReducer from "./counter/counterSlice";
import CustomizerReducer from "./customizer/CustomizerSlice";


export const store = configureStore({
  reducer: {
    counter: counterReducer,
    customizer: CustomizerReducer,
  },
  devTools: process.env.NODE_ENV !== "production",
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
