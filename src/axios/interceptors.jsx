import axios from 'axios';

axios.interceptors.request.use(
  (request) => {
    request.baseURL = 'https://api.github.com/users';
    request.headers['Accept'] = 'application/json';
    request.headers.Authorization = `Bearer ${
      import.meta.env.VITE_TOKEN
    }`;
    return request;
  },
  (error) => {
    return Promise.reject(error);
  }
);

axios.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    console.log(error);
    return Promise.reject(error);
  }
);
