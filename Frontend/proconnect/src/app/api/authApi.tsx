import axios from "axios";

const API_URL = process.env.BACKEND_URL || "http://localhost:5000/api/v1";

const signup = async (
  email: string,
  password: string,
  name: string,
  isFreelancer: boolean
) => {
  try {
    const response = await axios.post(`${API_URL}/auth/signup`, {
      email,
      password,
      name,
      isFreelancer,
    });
    if (!response.data) {
      throw new Error("Signup failed");
    }
    return response.data;
  } catch (error: Error | any) {
    throw new Error(error.response.data.message);
  }
};

const login = async (email: string, password: string) => {
  try {
    const response = await axios.post(`${API_URL}/auth/login`, {
      email,
      password,
    });
    if (!response.data) {
      throw new Error("Signup failed");
    }
    return response.data;
  } catch (error: Error | any) {
    throw new Error(error.response.data.message);
  }
};

const authApi = { signup, login };
export default authApi;
