import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { editJob } from "../features/jobs/jobsSlice";

export default function Editjobs() {
  const { jobsID } = useParams();
  const navigateTo = useNavigate();
  const dispatch = useDispatch();
  const [editedJob, setEditedJob] = useState();

  const updateData = (e) => {
    setEditedJob({
      ...editedJob,
      [e.target.name]: e.target.value,
    });
  };

  const handleEditJob = (e) => {
    e.preventDefault();
    dispatch(editJob({ id: jobsID, data: editedJob }));
    navigateTo("/");
  };
  return (
    <>
      <h1 className="mb-10 text-center lws-section-title">Edit Job</h1>

      <div className="max-w-3xl mx-auto">
        <form className="space-y-6" onSubmit={handleEditJob}>
          <div className="fieldContainer">
            <label className="text-sm font-medium text-slate-300">
              Job Title
            </label>
            <select
              id="lws-JobTitle"
              name="title"
              onChange={updateData}
              required
            >
              <option value="" hidden selected>
                Select Job
              </option>
              <option>Software Engineer</option>
              <option>Software Developer</option>
              <option>Full Stack Developer</option>
              <option>MERN Stack Developer</option>
              <option>DevOps Engineer</option>
              <option>QA Engineer</option>
              <option>Product Manager</option>
              <option>Social Media Manager</option>
              <option>Senior Executive</option>
              <option>Junior Executive</option>
              <option>Android App Developer</option>
              <option>IOS App Developer</option>
              <option>Frontend Developer</option>
              <option>Frontend Engineer</option>
            </select>
          </div>

          <div className="fieldContainer">
            <label>Job Type</label>
            <select id="lws-JobType" name="type" onChange={updateData} required>
              <option value="" hidden selected>
                Select Job Type
              </option>
              <option>Full Time</option>
              <option>Internship</option>
              <option>Remote</option>
            </select>
          </div>

          <div className="fieldContainer">
            <label>Salary</label>
            <div className="flex border rounded-md shadow-sm border-slate-600">
              <span className="input-tag">BDT</span>
              <input
                type="number"
                name="salary"
                id="lws-JobSalary"
                onChange={updateData}
                required
                className="!rounded-l-none !border-0"
                placeholder="20,00,000"
              />
            </div>
          </div>

          <div className="fieldContainer">
            <label>Deadline</label>
            <input
              type="date"
              name="deadline"
              id="lws-JobDeadline"
              onChange={updateData}
              required
            />
          </div>

          <div className="text-right">
            <button
              type="submit"
              id="lws-submit"
              className="cursor-pointer btn btn-primary w-fit"
            >
              Update Job
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
