import axios from 'axios';


const axiosInstance = axios.create({
  // baseURL: '',
  timeout: 30000,
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
  },
});

axiosInstance.interceptors.response.use(
  response => {
    if ('warning' in response.data) {
      // can handle warning
    }
    return response.data;
  },
  error => {
    console.error(error.response.data);
    return error;
  }
);

export default axiosInstance;
