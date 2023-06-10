import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { server } from "../../server";

export const fetchProduct = createAsyncThunk("fetchProduct", async (id) => {
  try {
    const { data } = await axios.get(
      `${server}/product/get-all-products-shop/${id}`
    );
    return data.products;
  } catch (error) {
    throw new Error(error.response.data);
  }
});

const sellerAllProductSlice = createSlice({
  name: "product",
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
    },
    resetSellerPro: (state) => {
      state.loading = true;
      state.product = [];
      state.error = null;
      state.fetched= false;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchProduct.pending, (state, action) => {
      state.loading = true;
      state.fetched = true;
    });
    builder.addCase(fetchProduct.fulfilled, (state, action) => {
      state.loading = false;
      state.product.push(...action.payload);
    });
    builder.addCase(fetchProduct.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
  },
});

export const { addProduct, deleteProduct, resetSellerPro } =
  sellerAllProductSlice.actions;
export default sellerAllProductSlice.reducer;
