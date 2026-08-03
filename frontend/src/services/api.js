import axios from "axios";

const API = axios.create({
  baseURL: "http://127.0.0.1:8000",
});

API.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

export const loginUser = (data) => API.post("/auth/login", data);
export const registerUser = (data) => API.post("/auth/register", data);
export const getDashboardData = () => API.get("/dashboard");
export const reportLostItem = (formData) => API.post("/lost-item", formData, {
  headers: { "Content-Type": "multipart/form-data" },
});
export const reportFoundItem = (formData) => API.post("/found-item", formData, {
  headers: { "Content-Type": "multipart/form-data" },
});
export const getMatches = () => API.get("/match");

export default API;