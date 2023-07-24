import axios from "axios";

const api = axios.create({
  baseURL: "http://192.168.6.20:8080", // The base URL of your backend server
  timeout: 5000, // Set a reasonable timeout in milliseconds
});

export default api;
