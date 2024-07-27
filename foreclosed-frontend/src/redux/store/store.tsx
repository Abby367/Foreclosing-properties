import { configureStore } from "@reduxjs/toolkit";
import saleReducer from "../slice/saleSlice";

export const store = configureStore({
  reducer: {
    sale: saleReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
