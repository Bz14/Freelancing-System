import api from "./axios";

const API_URL = process.env.BACKEND_URL || "http://localhost:5000/api/v1";

const fetchAllJobs = async (url: string) => {
  try {
    const response = await api.get(`${API_URL}${url}`);
    if (!response.data) {
      throw new Error("Failed to fetch jobs");
    }
    return response.data;
  } catch (error: Error | any) {
    throw new Error(error.message);
  }
};

const jobApi = { fetchAllJobs };
export default jobApi;
