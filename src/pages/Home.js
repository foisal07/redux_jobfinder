import React from "react";
import Layout from "../components/Layout";
import Joblistheading from "../components/Joblistheading";
import Navbar from "../components/Navbar";
import Jobs from "../components/Jobs";

export default function Home() {
  return (
    <>
      <Layout>
        <Joblistheading />
        <Jobs />
      </Layout>
    </>
  );
}
