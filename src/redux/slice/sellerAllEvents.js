import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { server } from "../../server";

export const fetchEvent = createAsyncThunk("fetchEvent", async (id) => {
  try {
    const { data } = await axios.get(`${server}/event/get-all-events/${id}`);
    return data.events;
  } catch (error) {
    throw new Error(error.response.data);
  }
});

const sellerAllEventSlice = createSlice({
  name: "allEventSeller",
  initialState: {
    loading: true,
    product: [],
    error: null,
    fetched: false,
  },
  reducers: {
    addProduct: (state, action) => {
      state.product.push(action.payload);
    },
    deleteProduct: (state, action) => {
      const id = action.payload;
      console.log(id);
      console.log(state.product);
      state.product = state.product.filter((ele) => ele._id !== id);
      console.log(state.product);
    },
    resetSellerPro: (state) => {
      state.loading = true;
      state.product = [];
      state.error = null;
      state.fetched = false;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchEvent.pending, (state, action) => {
      state.loading = true;
      state.fetched = true;
    });
    builder.addCase(fetchEvent.fulfilled, (state, action) => {
      state.loading = false;
      state.product.push(...action.payload);
    });
    builder.addCase(fetchEvent.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
  },
});

export const { addProduct, deleteProduct, resetSellerPro } =
  sellerAllEventSlice.actions;
export default sellerAllEventSlice.reducer;
