import Axios, { AxiosRequestConfig } from "axios";

const getHttpClient = (options?: AxiosRequestConfig) => {
  const axios = Axios.create(options);

  axios.interceptors.request.use(async (config) => {
    return config;
  });

  axios.interceptors.response.use((response) => {
    if (response.status >= 400) {
      return Promise.reject({ response });
    }
    return response;
  });

  return axios;
};

const httpClient = getHttpClient();

export default httpClient;
