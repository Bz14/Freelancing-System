import axios from "axios";
import store from "@/app/redux/store/store";
import { refreshTokenSuccess, logout } from "@/app/redux/slices/userSlice";

const API_URL = process.env.BACKEND_URL || "http://localhost:5000/api/v1";

const api = axios.create({
  baseURL: API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

const refreshAccessToken = async () => {
  try {
    const state = store.getState();
    const accessToken = state.user?.accessToken;

    if (!accessToken) {
      throw new Error("No access token available");
    }

    const response = await axios.post(
      `${API_URL}/refresh`,
      {},
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );
    console.log("refresh", response);
    const newAccessToken = response.data.accessToken;

    store.dispatch(refreshTokenSuccess(accessToken));

    return newAccessToken;
  } catch (error) {
    console.error("Token refresh failed", error);
    store.dispatch(logout());
    window.location.href = "/login";
    return null;
  }
};

api.interceptors.request.use(
  (config) => {
    const state = store.getState();
    const token = state.user?.accessToken;

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    console.log("here", token);
    return config;
  },
  (error) => Promise.reject(error)
);

api.interceptors.response.use(
  (response) => response,
  async (error) => {
    if (error.response?.status === 401) {
      console.warn("Access token expired, refreshing...");

      const newAccessToken = await refreshAccessToken();

      if (newAccessToken) {
        error.config.headers.Authorization = `Bearer ${newAccessToken}`;
        return axios(error.config);
      }
    }

    return Promise.reject(error);
  }
);

export default api;
