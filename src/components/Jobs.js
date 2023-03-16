import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchJobs } from "../features/jobs/jobsSlice";
import Singlejob from "./Singlejob";

export default function Jobs() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchJobs());
  }, [dispatch]);

  const { jobs, isLoading, isError, error } = useSelector(
    (state) => state.jobs
  );

  const sortedJobs = useSelector((state) => state.sortFilter.filteredJobs);
  const searchedJob = useSelector((state) => state.sortFilter.searchedJob);
  console.log(jobs);

  let show;

  if (isLoading) show = <div className="col-span-12">Loading...</div>;

  if (!isLoading && isError) show = <div className="col-span-12">{error}</div>;

  if (!isError && !isLoading && jobs?.length === 0) {
    show = <div className="col-span-12">No jobs found!</div>;
  }

  if (!isError && !isLoading && jobs?.length > 0) {
    show = jobs.map((job) => <Singlejob key={job.id} job={job} />);
  }

  if (sortedJobs?.length > 0) {
    show = sortedJobs.map((job) => <Singlejob key={job.id} job={job} />);
  }

  if (searchedJob?.length > 0) {
    show = searchedJob.map((job) => <Singlejob key={job.id} job={job} />);
  }

  return <div>{show}</div>;
}
