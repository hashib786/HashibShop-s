import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { server } from "../../server";

export const createEvent = createAsyncThunk("createEvent", async (newForm) => {
  try {
    const config = { headers: { "Content-Type": "multipart/form-data" } };
    const { data } = await axios.post(
      `${server}/event/create-event`,
      newForm,
      config
    );
    return data.product;
  } catch (error) {
    throw new Error(error.response.data);
  }
});

const eventSlice = createSlice({
  name: "events",
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
    builder.addCase(createEvent.pending, (state, action) => {
      state.creating = true;
    });
    builder.addCase(createEvent.fulfilled, (state, action) => {
      state.creating = false;
      state.product = action.payload;
      state.success = true;
    });
    builder.addCase(createEvent.rejected, (state, action) => {
      state.creating = false;
      state.error = action.payload;
    });
  },
});

export const { reset } = eventSlice.actions;
export default eventSlice.reducer;
