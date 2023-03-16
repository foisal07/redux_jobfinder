import React from "react";
import Layout from "../components/Layout";
import Joblistheading from "../components/Joblistheading";
import { useSelector } from "react-redux";
import Singlejob from "../components/Singlejob";

export default function InternshipJobs() {
  const internshipJobs = useSelector((state) => state.sortFilter.filteredJobs);
  const searchedJob = useSelector((state) => state.sortFilter.searchedJob);

  let show;

  if (internshipJobs?.length > 0) {
    show = internshipJobs.map((job) => <Singlejob key={job.id} job={job} />);
  }

  if (searchedJob?.length > 0) {
    show = searchedJob.map((job) => <Singlejob key={job.id} job={job} />);
  }

  return (
    <>
      <Layout>
        <Joblistheading title={"Available Internship"} jobs={internshipJobs} />
        {show}
      </Layout>
    </>
  );
}
