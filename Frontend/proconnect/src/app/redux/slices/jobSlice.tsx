import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import jobApi from "@/app/api/jobApi";

interface Job {
  id: string;
  title: string;
  description: string;
  details?: string;
  company?: string;
  skills: string[];
  experienceLevel: string;
  deadline: string;
  postedTime: string;
  paymentType: string;
  paymentAmount: number;
  location?: string;
  status?: string;
  proposalsSent?: number;
  rating?: number;
  clientId: string;
  createdAt: string;
  updatedAt: string;
}

interface Pagination {
  currentPage: string;
  nextPage: string;
  prevPage: string;
}

const initialState = {
  loading: false,
  error: null as null | string,
  data: {
    jobs: [] as Job[],
    pagination: {} as Pagination,
  },
  success: false,
};

export const fetchAllJobs = createAsyncThunk(
  "jobs/fetchAllJobs",
  async (url: string, thunkAPI) => {
    try {
      const response = await jobApi.fetchAllJobs(url);
      return response.data;
    } catch (error: Error | any) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

const jobs = createSlice({
  name: "jobs",
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
      .addCase(fetchAllJobs.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchAllJobs.fulfilled, (state, action) => {
        state.loading = false;
        state.data.jobs = action.payload.jobs;
        state.data.pagination = action.payload.pagination;
        state.success = true;
      })
      .addCase(fetchAllJobs.rejected, (state, action) => {
        state.loading = false;
        state.error = (action.payload as string) ?? "An error occurred";
      });
  },
});

export const { resetInitialState } = jobs.actions;
export default jobs.reducer;
