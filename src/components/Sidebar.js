import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { filter } from "../features/sort_filter_search/sortFilterSlice";

export default function Sidebar() {
  const dispatch = useDispatch();
  // const { jobs } = useSelector((state) => state.jobs);
  const handleFilter = (e) => {
    console.log('hi');
    e.preventDefault();
    const filterBy = e.target.innerHTML.replace(/\s+/g, "").toLowerCase();
    console.log(filterBy);
    dispatch(filter(filterBy));
  };

  return (
    <>
      <div className="sidebar">
        <nav>
          <ul className="space-y-4">
            <li onClick={handleFilter}>
              <a
                href="/jobs"
                className="main-menu menu-active"
                id="lws-alljobs-menu"
              >
                <i className="fa-solid fa-briefcase"></i>
                <span> All Available Jobs</span>
              </a>
              <ul className="space-y-6 lg:space-y-2 ">
                <li>
                  <a
                    className="sub-menu"
                    href="/jobs/internship"
                    id="lws-internship-menu"
                    onClick={handleFilter}
                  >
                    <i className="fa-solid fa-stop !text-[#FF5757]"></i>
                    Internship
                  </a>
                </li>
                <li>
                  <a
                    className="sub-menu"
                    href="/jobs/fulltime"
                    id="lws-fulltime-menu"
                  >
                    <i className="fa-solid fa-stop !text-[#FF8A00]"></i>
                    Full Time
                  </a>
                </li>
                <li>
                  <a
                    className="sub-menu"
                    href="/jobs/remote"
                    id="lws-remote-menu"
                  >
                    <i className="fa-solid fa-stop !text-[#56E5C4]"></i>
                    Remote
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <a href="/jobs" className="main-menu" id="lws-addJob-menu">
                <i className="fa-solid fa-file-circle-plus"></i>
                <span>Add NewJob</span>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}
