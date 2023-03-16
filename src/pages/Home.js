import React from "react";
import Layout from "../components/Layout";
import Joblistheading from "../components/Joblistheading";
import Jobs from "../components/Jobs";

export default function Home() {
  return (
    <>
      <Layout>
        <Joblistheading title={'All Available Jobs'}/>
        <Jobs />
      </Layout>
    </>
  );
}
