import axios from "../../utilities/axios";

export const getJobs = async () => {
  const response = await axios.get("/jobs");
  return response.data;
};

export const addJob = async (data) => {
  const response = await axios.post("/jobs", data);

  return response.data;
};

export const updateJob = async (jobsID, data) => {
  const response = await axios.put(`/jobs/${jobsID}`, data);

  return response.data;
};

export const removeJob = async (id) => {
  const response = axios.delete(`/jobs/${id}`);

  return response.data;
};
