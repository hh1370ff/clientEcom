import axios from "axios";

const BASE_URL = "https://hh13ffecommerce.onrender.com";

export const axiosPublicInstance = axios.create({
  baseURL: BASE_URL,
});

export const axiosPrivateInstance = axios.create({
  baseURL: BASE_URL,
  headers: { "Content-Type": "application/json" },
  withCredentials: true,
});
