const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
  filteredJobs: [],
  // filterBy: "",
};

export const sortFilterSlice = createSlice({
  name: "sortfilter",
  initialState,
  reducers: {
    filterBy: (state, action) => {
      state.filteredJobs = action.payload.jobs.filter(
        (job) =>
          job.type.replace(/\s+/g, "").toLowerCase() === action.payload.filterBy
      );
    },
  },
});

export default sortFilterSlice.reducer;
export const { filterBy } = sortFilterSlice.actions;
