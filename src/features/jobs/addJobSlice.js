import { addJob } from "./addJobAPI";
const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");

const initialState = {};

export const addNewJob = createAsyncThunk("job/addNewJob", async (data) => {
  const jobs = await addJob(data);
  return jobs;
});


const addNewJobSlice = createSlice({
  name: "addNewJob",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(addNewJob.pending, (state) => {
        state.isError = false;
        state.isLoading = true;
      })
      .addCase(addNewJob.fulfilled, (state, action) => {
        state.isError = false;
        state.isLoading = false;
        state.transactions.push(action.payload);
      })
      .addCase(addNewJob.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.error = action.error?.message;
      });
  },
});

export default addNewJobSlice.reducer;
