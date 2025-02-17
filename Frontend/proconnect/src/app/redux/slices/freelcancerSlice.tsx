import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import freelancerApi from "@/app/api/freelancerApi";

const initialState = {
  loading: false,
  error: null as null | string,
  freelancers: [],
};

export const fetchAllFreelancers = createAsyncThunk(
  "freelancers/fetchAllFreelancers",
  async (_, thunkAPI) => {
    try {
      const response = await freelancerApi.getAllFreelancers();
      return response.data;
    } catch (error: Error | any) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

const freelancers = createSlice({
  name: "freelancers",
  initialState,
  reducers: {
    resetInitialState: (state) => {
      state.loading = initialState.loading;
      state.error = initialState.error;
      state.freelancers = initialState.freelancers;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllFreelancers.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchAllFreelancers.fulfilled, (state, action) => {
        state.loading = false;
        state.freelancers = action.payload;
      })
      .addCase(fetchAllFreelancers.rejected, (state, action) => {
        state.loading = false;
        state.error = (action.payload as string) ?? "An error occurred";
      });
  },
});

export const { resetInitialState } = freelancers.actions;

export default freelancers.reducer;
