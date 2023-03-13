import "@fortawesome/fontawesome-free/css/all.min.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HashRouter } from "react-router-dom";
import Layout from "./components/Layout";
import Joblistheading from "./components/Joblistheading";
import Editjobs from "./components/Editjobs";
import Addnewjob from "./components/Addnewjob";
import Jobs from "./components/Jobs";
import Home from "./pages/Home";

function App() {
  return (
    <>
      {/* <Router>
        <Routes>
          <Route path="/" exact element={<Home />} />
        </Routes>
      </Router> */}
      <Layout>
        <Joblistheading />
        <Jobs />
        {/* <Addnewjob /> */}
        {/* <Editjobs /> */}
      </Layout>
    </>
  );
}

export default App;
