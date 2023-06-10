import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { server } from "../../server";

export const fetchSeller = createAsyncThunk("fetchSeller", async () => {
  try {
    const res = await axios.get(`${server}/shop/getSeller`, {
      withCredentials: true,
    });
    return res.data.seller;
  } catch (error) {
    throw new Error("Please Provide write Email and Password");
  }
});

const sellerSlice = createSlice({
  name: "seller",
  initialState: {
    isAuthenticate: false,
    loading: true,
    seller: null,
    error: null,
  },
  reducers: {
    loadSellerRequest: (state) => {
      state.loading = true;
    },
    loadSellerSuccess: (state, action) => {
      state.loading = false;
      state.isAuthenticate = true;
      state.seller = action.payload;
    },
    loadSellerFail: (state, action) => {
      state.loading = false;
      state.isAuthenticate = false;
      state.error = action.payload;
    },
    clearError: (state) => {
      state.error = null;
    },
    clearSeller: (state) => {
      state.isAuthenticate = false;
      state.loading = false;
      state.seller = null;
      state.error = null;
    },
    resetSeller: (state) => {
      state.loading = true;
      state.isAuthenticate = false;
      state.seller = null;
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchSeller.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(fetchSeller.fulfilled, (state, action) => {
      state.loading = false;
      state.isAuthenticate = true;

      state.seller = action.payload;
    });
    builder.addCase(fetchSeller.rejected, (state, action) => {
      state.loading = false;
      state.isAuthenticate = false;
      state.error = action.payload;
    });
  },
});

export const {
  clearSeller,
  loadSellerFail,
  loadSellerRequest,
  loadSellerSuccess,
  clearError,
  resetSeller,
} = sellerSlice.actions;
export default sellerSlice.reducer;
