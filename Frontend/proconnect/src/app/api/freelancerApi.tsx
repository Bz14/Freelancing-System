import api from "./axios";

const API_URL = process.env.BACKEND_URL || "http://localhost:5000/api/v1";

const getAllFreelancers = async () => {
  try {
    const response = await api.get(`${API_URL}/freelancers`);
    if (!response.data) {
      throw new Error("Failed to fetch freelancers");
    }
    return response.data;
  } catch (error: Error | any) {
    throw new Error(error.message);
  }
};

const freelancerApi = { getAllFreelancers };

export default freelancerApi;
