// src/axiosInstance.js
import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'http://127.0.0.1:5000', // replace with your API base URL
  timeout: 1000,
  headers: {
    'Content-Type': 'application/json',
  },

  withCredentials: true,
});

// src/axiosInstance.js
axiosInstance.defaults.xsrfCookieName = 'csrf_token'; // the name of the cookie
axiosInstance.defaults.xsrfHeaderName = 'X-CSRFToken'; // the name of the header where CSRF token is placed

export default axiosInstance;

