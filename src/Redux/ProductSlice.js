import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { product_end } from "../ApiUrl/Apiurl";
// import axios from "axios";
import axiosInstances from "../ApiUrl/AxiosInstance";

// api end points

const prod_end = product_end;

export const prod = createAsyncThunk("products/prod", async () => {
  const response = await axiosInstances.get(prod_end);
  console.log(response.data);
  return response.data;
});

const productSlice = createSlice({
  name: "products",
  initialState: {
    items: [],
    status: "idle",
  },
  extraReducers: (bulider) => {
    bulider.addCase(prod.pending, (state) => {
      state.status = "loading";
    })
    .addCase(prod.fulfilled,(state,action)=>{
        state.status='succeed'
        state.items=action.payload
    })
    .addCase(prod.rejected,(state)=>{
        state.status='failed'
    })
  },
});
export default productSlice.reducer;
