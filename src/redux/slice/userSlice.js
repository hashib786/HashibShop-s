import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { server } from "../../server";

export const fetchUser = createAsyncThunk("fetchUser", async () => {
  try {
    const res = await axios.get(`${server}/user/getuser`, {
      withCredentials: true,
    });
    return res.data.user;
  } catch (error) {
    throw new Error(error);
  }
});

export const updateUser = createAsyncThunk("updateUser", async ({name, email, phoneNumber, password}) => {
  const res = await axios.put(`${server}/user/update-user-info`,{
    email,
    password,
    phoneNumber,
    name,
  }, {
    withCredentials: true,
  });

  return res.data.User;
});

export const updateAdress = createAsyncThunk("updateAdress", async (address) => {
  const res = await axios.put(`${server}/user/update-user-addresses`,address, {
    withCredentials: true,
  });
  return res.data.user;
});

export const deleteUserAddress = createAsyncThunk("deleteUserAddress", async (id) => {
  const res = await axios.delete(`${server}/user/delete-user-address/${id}`, {
    withCredentials: true,
  });
  return res.data.user;
});

const userSlice = createSlice({
  name: "user",
  initialState: {
    isAuthenticate: false,
    user: null,
    loading: true,
    error: null,
    success : null,
    loadingAdd: true,
    errorAdd: null,
    successAdd: null,
  },
  reducers: {
    clearUser:(state, action)=>{
      state.isAuthenticate= false;
      state.loading= true;
      state.user= null;
      state.error= null;
      state.success= null;
    }, 
    clearError:(state)=>{
      state.error = null;
    },
    clearSuccess:(state)=>{
      state.success = null;
    },
    updateUserImage:(state, action)=>{
      state.user.avatar = action.payload;
    }
  },
  extraReducers: (builder) => {
    builder.addCase(fetchUser.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(fetchUser.fulfilled, (state, action) => {
      state.loading = false;
      state.isAuthenticate = true;
      state.user = action.payload;
    });
    builder.addCase(fetchUser.rejected, (state, action) => {
      state.loading = false;
      state.isAuthenticate = false;
      state.error = action.payload;
    });

    builder.addCase(updateUser.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(updateUser.fulfilled, (state, action) => {
      state.loading = false;
      state.user = action.payload;
      state.success = "User Updated Successfully";
    });
    builder.addCase(updateUser.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });

    builder.addCase(updateAdress.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(updateAdress.fulfilled, (state, action) => {
      state.loading = false;
      state.user = action.payload;
      state.success = "User Address Updated Successfully";
    });
    builder.addCase(updateAdress.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });

    builder.addCase(deleteUserAddress.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(deleteUserAddress.fulfilled, (state, action) => {
      state.loading = false;
      state.user = action.payload;
      state.success = "User Address Deleted Successfully";
    });
    builder.addCase(deleteUserAddress.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });
  },
});


export const {clearUser, clearError, clearSuccess, updateUserImage} = userSlice.actions;
export default userSlice.reducer;
