import axios from "axios";

const API_URL = process.env.BACKEND_URL || "http://localhost:5000/api/v1";

const signup = async (email: string, password: string, name: string) => {
  try {
    const response = await axios.post(`${API_URL}/auth/signup`, {
      email,
      password,
      name,
    });
    if (!response.data) {
      throw new Error("Signup failed");
    }
    return response.data;
  } catch (error: Error | any) {
    throw new Error(error.response.data.message);
  }
};

const authApi = { signup };
export default authApi;
