import React from "react";
import Layout from "../components/Layout";
import Joblistheading from "../components/Joblistheading";
import Jobs from "../components/Jobs";
import { useSelector } from "react-redux";

export default function Home() {
  const { jobs } = useSelector((state) => state.jobs);
  return (
    <>
      <Layout>
        <Joblistheading title={"All Available Jobs"} jobs={jobs} />
        <Jobs />
      </Layout>
    </>
  );
}
