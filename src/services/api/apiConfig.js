import axios from "axios";
import { config } from "../../config";
const BASE_URL = config.API_URL;

// Create an Axios instance with common configurations
const api = axios.create({
  baseURL: BASE_URL, // Replace with your API base URL
  timeout: 5000, // Set the timeout for API requests
  headers: {
    "Content-Type": "application/json",
    // Add any common headers you need for all API requests
  },
});

// Request interceptor
api.interceptors.request.use(
  (config) => {
    // Modify the request config before it is sent
    // For example, you can add headers or modify the request data
    const userToken = localStorage.getItem("token");

    if (userToken) {
      config.headers["Authorization"] = `Bearer ${userToken}`;
    }
    console.log("Request Interceptor:", config);
    return config;
  },
  (error) => {
    // Handle request error
    console.error("Request Error Interceptor:", error);
    return Promise.reject(error);
  }
);

// Response interceptor
api.interceptors.response.use(
  (response) => {
    // Modify the response data before it is returned
    console.log("Response Interceptor:", response);
    return response;
  },
  (error) => {
    // Handle response error
    console.error("Response Error Interceptor:", error);
    return Promise.reject(error);
  }
);

export default api;
