import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { server } from "../../server";

export const fetchAllProduct = createAsyncThunk(
  "fetchAllProduct",
  async (id) => {
    try {
      const { data } = await axios.get(`${server}/product/get-all-products`);
      return data.products;
    } catch (error) {
      throw new Error(error.response.data);
    }
  }
);

const allProductSlice = createSlice({
  name: "allProduct",
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
      state.product = state.product.filter((ele) => ele._id !== id);
      console.log(state.product);
    },
    resetallPro: (state) => {
      state.loading = true;
      state.product = [];
      state.error = null;
      state.fetched = false;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchAllProduct.pending, (state, action) => {
      state.loading = true;
      state.fetched = true;
    });
    builder.addCase(fetchAllProduct.fulfilled, (state, action) => {
      state.loading = false;
      state.product.push(...action.payload);
    });
    builder.addCase(fetchAllProduct.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
  },
});

export const { addProduct, deleteProduct, resetallPro } =
  allProductSlice.actions;
export default allProductSlice.reducer;
