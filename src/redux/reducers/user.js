import { createReducer } from "@reduxjs/toolkit";

const intialState = {
  isAuthenticate: false,
  loading: true,
  user: null,
  error: null,
};

export const userReducer = createReducer(intialState, {
  loadUserRequest: (state) => {
    state.loading = true;
  },
  loadUserSuccess: (state, action) => {
    state.loading = false;
    state.isAuthenticate = true;
    state.user = action.payload;
  },
  loadUserFail: (state, action) => {
    state.loading = false;
    state.isAuthenticate = false;
    state.error = action.payload;
  },
  clearError: (state) => {
    state.error = null;
  },
});
