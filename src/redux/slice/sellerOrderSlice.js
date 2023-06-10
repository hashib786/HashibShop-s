import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { server } from "../../server";

export const fetchSellerOrder = createAsyncThunk(
  "fetchSellerOrder",
  async (id) => {
    const { data } = await axios.get(
      `${server}/order/get-seller-all-orders/${id}`
    );
    return data.orders;
  }
);

const sellerOrderSlice = createSlice({
  name: "sellerAllOrder",
  initialState: {
    loading: true,
    order: [],
    fetched: false,
  },
  reducers: {
    updateFetching: (state, action) => {
      state.fetched = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchSellerOrder.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(fetchSellerOrder.fulfilled, (state, action) => {
      state.loading = false;
      state.order.push(...action.payload);
      state.fetched = true;
    });
    builder.addCase(fetchSellerOrder.rejected, (state, action) => {
      state.loading = false;
    });
  },
});

export const { updateFetching } = sellerOrderSlice.actions;
export default sellerOrderSlice.reducer;
