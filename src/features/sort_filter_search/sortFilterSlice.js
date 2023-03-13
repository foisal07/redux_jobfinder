const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
  // filteredJobs: [],
  filterBy: "",
};

export const sortFilterSlice = createSlice({
  name: "sortfilter",
  initialState,
  reducers: {
    filter: (state, action) => {
      state.filterBy = action.payload;
      // state.filteredJobs = action.payload.jobs.filter(
      //   (job) => job.type === action.payload.filterBy
      // );
    },
  },
});

export default sortFilterSlice.reducer;
export const { filter } = sortFilterSlice.actions;
