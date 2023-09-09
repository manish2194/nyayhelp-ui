import axios from 'axios';
import { config } from '../../config';
const BASE_URL = config.base_url;

// Create an Axios instance with common configurations
const api = axios.create({
  baseURL: BASE_URL, // Replace with your API base URL
  timeout: 5000, // Set the timeout for API requests
  headers: {
    'Content-Type': 'application/json',
    // Add any common headers you need for all API requests
  },
});

export default api;
