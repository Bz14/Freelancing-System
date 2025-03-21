import { configureStore } from "@reduxjs/toolkit";
import userSlice from "../slices/userSlice";
import jobSlice from "../slices/jobSlice";

const store = configureStore({
  reducer: {
    user: userSlice,
    jobs: jobSlice,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
