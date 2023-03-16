import React from "react";
import Layout from "../components/Layout";
import Joblistheading from "../components/Joblistheading";

import { useSelector } from "react-redux";
import Singlejob from "../components/Singlejob";

export default function RemoteJobs() {
  const remoteJobs = useSelector((state) => state.sortFilter.filteredJobs);

  return (
    <>
      <Layout>
        <Joblistheading title={"Available Remote Jobs"} />
        {remoteJobs.map((job) => (
          <Singlejob key={job.id} job={job} />
        ))}
      </Layout>
    </>
  );
}
