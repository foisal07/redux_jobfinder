import { configureStore } from "@reduxjs/toolkit";
import jobsReducer from "../features/jobs/jobsSlice";
import sortFilterReducer from "../features/sort_filter_search/sortFilterSlice";

export const store = configureStore({
  reducer: {
    jobs: jobsReducer,
    sortFilter: sortFilterReducer,
  },
});
