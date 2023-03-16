import React from "react";
import { useSelector } from "react-redux";
import Layout from "../components/Layout";
import Joblistheading from "../components/Joblistheading";
import Singlejob from "../components/Singlejob";

export default function FulltimeJobs() {
  const fulltimeJobs = useSelector((state) => state.sortFilter.filteredJobs);

  return (
    <>
      <Layout>
        <Joblistheading title={"Available Fulltime Jobs"} />
        {fulltimeJobs.map((job) => (
          <Singlejob key={job.id} job={job} />
        ))}
      </Layout>
    </>
  );
}
