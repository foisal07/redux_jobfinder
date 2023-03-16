const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
  filteredJobs: [],
  searchedJob: [],
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
    sortBy: (state, action) => {
      console.log(action.payload.jobs);
      if (action.payload.sortBy === "Default") {
        state.filteredJobs.length = 0;
        state.filteredJobs.push(...action.payload.jobs);
      }
      if (action.payload.sortBy === "LowToHigh") {
        state.filteredJobs = action.payload.jobs;
        state.filteredJobs = [...state.filteredJobs].sort(
          (a, b) => a.salary - b.salary
        );
      }
      if (action.payload.sortBy === "HighToLow") {
        state.filteredJobs = action.payload.jobs;
        state.filteredJobs = [...state.filteredJobs].sort(
          (a, b) => b.salary - a.salary
        );
      }
    },
    search: (state, action) => {
      console.log(action.payload.searchTerm);

      state.filteredJobs = action.payload.jobs;
      state.searchedJob = state.filteredJobs.filter(
        (job) => job.title.toLowerCase() === action.payload.searchTerm
      );
    },
  },
});

export default sortFilterSlice.reducer;
export const { filterBy, sortBy, search } = sortFilterSlice.actions;
