import axios from "axios";

const http = axios.create({
  baseURL: "http://localhost:5000",
});

http.interceptors.request.use((config) => {
  const t = localStorage.getItem("tr_token");
  if (t) config.headers.Authorization = `Bearer ${t}`;
  return config;
});

export default http;