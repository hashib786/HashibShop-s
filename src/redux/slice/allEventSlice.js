import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { server } from "../../server";

export const fetchAllEvent = createAsyncThunk("fetchAllEvent", async (id) => {
  try {
    const { data } = await axios.get(`${server}/event/get-all-events`);
    return data.events;
  } catch (error) {
    throw new Error(error.response.data);
  }
});

const allEventSlice = createSlice({
  name: "allEvent",
  initialState: {
    loading: true,
    events: [],
    error: null,
    fetched: false,
  },
  reducers: {
    addEvent: (state, action) => {
      state.events.push(action.payload);
    },
    deleteevents: (state, action) => {
      const id = action.payload;
      state.events = state.events.filter((ele) => ele._id !== id);
      console.log(state.events);
    },
    resetallEvent: (state) => {
      state.loading = true;
      state.events = [];
      state.error = null;
      state.fetched = false;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchAllEvent.pending, (state, action) => {
      state.loading = true;
      state.fetched = true;
    });
    builder.addCase(fetchAllEvent.fulfilled, (state, action) => {
      state.loading = false;
      state.events.push(...action.payload);
    });
    builder.addCase(fetchAllEvent.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
  },
});

export const { addEvent, deleteevents, resetallPro } = allEventSlice.actions;
export default allEventSlice.reducer;
