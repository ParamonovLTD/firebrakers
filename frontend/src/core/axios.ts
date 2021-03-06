import axios from 'axios';

const axiosInstance = axios.create({
  baseURL:
    process.env.REACT_APP_API_URL ||
    'http://localhost:5000',
  headers: {
    'Content-Type': 'application/json',
  },
});

axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('authToken');

    if (token != null) {
      config.headers.Authorization = token;
    }
    return config;

  },
  (err) => Promise.reject(err),
);

export { axiosInstance };
