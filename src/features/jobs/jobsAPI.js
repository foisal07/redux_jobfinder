import axios from "../../utilities/axios";

export const getJobs = async () => {
  const response = await axios.get("/jobs");
  return response.data;
};
