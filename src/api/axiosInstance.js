import axios from "axios";

const BASE_URL = "http://localhost:3500/api";

export const axiosPublicInstance = axios.create({
  baseURL: BASE_URL,
});

export const axiosPrivateInstance = axios.create({
  baseURL: BASE_URL,
  headers: { "Content-Type": "application/json" },
  withCredentials: true,
});
