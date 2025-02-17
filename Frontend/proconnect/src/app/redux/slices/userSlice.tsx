import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import authApi from "@/app/api/authApi";

const initialState = {
  user: {
    id: null,
    email: null,
    name: null,
    profilePic: null,
    isFreelancer: false,
    createdAt: null,
  },
  loading: false,
  error: null as null | string,
  success: false,
  accessToken: null,
};

export const signup = createAsyncThunk(
  "user/signup",
  async (
    data: {
      email: string;
      password: string;
      name: string;
      isFreelancer: boolean;
    },
    thunkAPI
  ) => {
    try {
      const response = await authApi.signup(
        data.email,
        data.password,
        data.name,
        data.isFreelancer
      );
      return response;
    } catch (error: Error | any) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const login = createAsyncThunk(
  "user/login",
  async (data: { email: string; password: string }, thunkAPI) => {
    try {
      const response = await authApi.login(data.email, data.password);
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
    refreshTokenSuccess: (state, action) => {
      state.accessToken = action.payload;
    },

    logout: (state) => {
      state.user = initialState.user;
      state.accessToken = initialState.accessToken;
      state.error = null;
      state.loading = false;
      state.success = false;
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
      })
      .addCase(login.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.success = false;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.user = action.payload.data.user;
        state.accessToken = action.payload.data.accessToken;
        state.success = true;
      });
  },
});

export default userSlice.reducer;
export const { resetInitialState, logout, refreshTokenSuccess } =
  userSlice.actions;
