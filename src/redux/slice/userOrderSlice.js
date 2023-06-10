import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { server } from "../../server";

export const fetchUserOrder = createAsyncThunk("fetchUserOrder", async (id) => {
  const { data } = await axios.get(`${server}/order/get-all-orders/${id}`);
  return data.orders;
});

const userOrderSlice = createSlice({
  name: "userAllOrder",
  initialState: {
    loading: true,
    order: [],
    fetched: false,
  },
  extraReducers: (builder) => {
    builder.addCase(fetchUserOrder.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(fetchUserOrder.fulfilled, (state, action) => {
      state.loading = false;
      state.order.push(...action.payload);
      state.fetched = true;
    });
    builder.addCase(fetchUserOrder.rejected, (state, action) => {
      state.loading = false;
    });
  },
});

export default userOrderSlice.reducer;
