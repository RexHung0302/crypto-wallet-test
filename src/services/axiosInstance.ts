import axios from "axios";

const api = axios.create({
  // baseURL: `${env.xxx}/api`,
  timeout: 15000,
  headers: {
    'Content-Type': 'application/json',
  },
});

api.interceptors.request.use(config => {
  return {
    ...config,
  };
});

api.interceptors.response.use(
  response => {
    if ('warning' in response.data) {
      // Handle warning

      return Promise.reject(response.data.warning);
    } else {
      return response;
    }
  },
  error => {
    return Promise.reject(error);
  }
);

export default api;
