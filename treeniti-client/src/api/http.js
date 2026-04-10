import axios from "axios";

const http = axios.create({ baseURL: "http://localhost:5000" });

http.interceptors.request.use((config) => {
  const token = localStorage.getItem("tr_token");
  if (token) config.headers.Authorization = `Bearer ${token}`;
  return config;
});

export default http;