import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getJobs, addJob, updateJob, removeJob } from "./jobsAPI";

const initialState = {
  jobs: [],
  isLoading: false,
  isError: false,
  error: "",
};

export const fetchJobs = createAsyncThunk("jobs/fetchjobs", async () => {
  const jobs = await getJobs();
  return jobs;
});

export const addNewJob = createAsyncThunk("job/addNewJob", async (data) => {
  const jobs = await addJob(data);
  return jobs;
});

export const editJob = createAsyncThunk("editJob", async ({id, data}) => {
  console.log(id, data);
  const jobs = await updateJob(id, data);
  return jobs;
});

export const deleteJob = createAsyncThunk("job/removeJob", async (id) => {
  const jobs = await removeJob(id);
  return jobs;
});

const jobsSlice = createSlice({
  name: "jobs",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchJobs.pending, (state) => {
        state.isError = false;
        state.isLoading = true;
      })
      .addCase(fetchJobs.fulfilled, (state, action) => {
        state.isLoading = false;
        state.jobs = action.payload;
      })
      .addCase(fetchJobs.rejected, (state, action) => {
        state.isLoading = false;
        state.jobs = [];
        state.isError = true;
        state.error = action.error?.message;
      })
      .addCase(addNewJob.pending, (state) => {
        state.isError = false;
        state.isLoading = true;
      })
      .addCase(addNewJob.fulfilled, (state, action) => {
        console.log(action.payload);
        state.isError = false;
        state.isLoading = false;
        state.jobs.push(action.payload);
      })
      .addCase(addNewJob.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.error = action.error?.message;
      })
      .addCase(editJob.pending, (state) => {
        state.isError = false;
        state.isLoading = true;
      })
      .addCase(editJob.fulfilled, (state, action) => {
        console.log(action.payload);
        state.isError = false;
        state.isLoading = false;
      })
      .addCase(editJob.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.error = action.error?.message;
      });
  },
});

export default jobsSlice.reducer;
