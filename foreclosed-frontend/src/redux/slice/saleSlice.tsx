import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import type { RootState } from "../store/store";

interface Sale {
  home_sale_id: number;
  sale_type: string;
  sale_details: string;
}

interface SaleState {
  sales: Sale[];
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
}

const initialState: SaleState = {
  sales: [],
  status: "idle",
  error: null,
};

export const fetchSales = createAsyncThunk("sales/fetchSales", async () => {
  const response = await fetch("http://localhost:8080/sales/showAllSales");
  const data = await response.json();
  return data as Sale[];
});

const saleSlice = createSlice({
  name: "sale",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchSales.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchSales.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.sales = action.payload;
      })
      .addCase(fetchSales.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message || null;
      });
  },
});

export const selectSales = (state: RootState) => state.sale.sales;

export default saleSlice.reducer;
