import "@fortawesome/fontawesome-free/css/all.min.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AddJobs from "./pages/AddJobs";
import Home from "./pages/Home";
import EditJobs from "./pages/EditJobs";
import InternshipJobs from "./pages/InternshipJobs";
import FulltimeJobs from "./pages/FulltimeJobs";
import RemoteJobs from "./pages/RemoteJobs";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/addjobs" exact element={<AddJobs />} />
          <Route path="/editjobs" exact element={<EditJobs />} />
          <Route path="/jobs/internship" exact element={<InternshipJobs />} />
          <Route path="/jobs/fulltime" exact element={<FulltimeJobs />} />
          <Route path="/jobs/remote" exact element={<RemoteJobs />} />
        </Routes>
      </Router>
      {/* <Layout>
        <Joblistheading />
        <Jobs />
        {/* <Addnewjob /> */}
      {/* <Editjobs />
      {/* </Layout> */}
    </>
  );
}

export default App;
