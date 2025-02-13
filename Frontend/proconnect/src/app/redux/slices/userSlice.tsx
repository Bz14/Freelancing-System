import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import authApi from "@/app/api/authApi";
import { useEffect } from "react";

const initialState = {
  user: {
    id: null,
    email: null,
    name: null,
    profilePic: null,
    isFreelancer: false,
  },
  loading: false,
  error: null as null | string,
  success: false,
};

export const signup = createAsyncThunk(
  "user/signup",
  async (data: { email: string; password: string; name: string }, thunkAPI) => {
    try {
      const response = await authApi.signup(
        data.email,
        data.password,
        data.name
      );
      console.log(response.data);
      return response;
    } catch (error: Error | any) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    resetInitialState: (state) => {
      state.loading = initialState.loading;
      state.error = initialState.error;
      state.success = initialState.success;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(signup.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.success = false;
      })
      .addCase(signup.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.user.email = action.payload.data.email;
        state.user.id = action.payload.data.id;
        state.success = true;
      })
      .addCase(signup.rejected, (state, action) => {
        state.loading = false;
        state.error = (action.payload as string) ?? "An error occurred";
        state.success = false;
      });
  },
});

export default userSlice.reducer;
export const { resetInitialState } = userSlice.actions;
