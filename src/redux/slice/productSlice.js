import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { server } from "../../server";

export const createProduct = createAsyncThunk(
  "createProduct",
  async (newForm) => {
    try {
      const config = { headers: { "Content-Type": "multipart/form-data" } };
      const { data } = await axios.post(
        `${server}/product/create-product`,
        newForm,
        config
      );
      return data.product;
    } catch (error) {
      throw new Error(error.response.data);
    }
  }
);

const productSlice = createSlice({
  name: "product",
  initialState: {
    creating: false,
    product: null,
    success: false,
    error: null,
  },
  reducers: {
    reset: (state) => {
      state.creating = false;
      state.product = null;
      state.success = false;
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(createProduct.pending, (state, action) => {
      state.creating = true;
    });
    builder.addCase(createProduct.fulfilled, (state, action) => {
      state.creating = false;
      state.product = action.payload;
      state.success = true;
    });
    builder.addCase(createProduct.rejected, (state, action) => {
      state.creating = false;
      state.error = action.payload;
    });
  },
});

export const { reset } = productSlice.actions;
export default productSlice.reducer;
