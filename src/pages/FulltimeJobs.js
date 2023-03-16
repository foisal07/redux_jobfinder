import React from "react";
import { useSelector } from "react-redux";
import Layout from "../components/Layout";
import Joblistheading from "../components/Joblistheading";
import Singlejob from "../components/Singlejob";

export default function FulltimeJobs() {
  const fulltimeJobs = useSelector((state) => state.sortFilter.filteredJobs);
  const searchedJob = useSelector((state) => state.sortFilter.searchedJob);

  let show;

  if (fulltimeJobs?.length > 0) {
    show = fulltimeJobs.map((job) => <Singlejob key={job.id} job={job} />);
  }

  if (searchedJob?.length > 0) {
    show = searchedJob.map((job) => <Singlejob key={job.id} job={job} />);
  }

  return (
    <>
      <Layout>
        <Joblistheading title={"Available Fulltime Jobs"} jobs={fulltimeJobs} />
        {show}
      </Layout>
    </>
  );
}
