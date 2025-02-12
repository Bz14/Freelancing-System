import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import authApi from "@/app/api/authApi";

const initialState = {
  user: {
    id: null,
    email: null,
    name: null,
    profilePic: null,
    isFreelancer: false,
    isVerified: false,
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
      state.user = initialState.user;
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
        state.user.id = action.payload.id;
        state.user.name = action.payload.name;
        state.user.email = action.payload.email;
        state.user.isFreelancer = action.payload.isFreelancer;
        state.user.isVerified = action.payload.isVerified;
        state.user.profilePic = action.payload.profilePic;
        state.error = null;
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
