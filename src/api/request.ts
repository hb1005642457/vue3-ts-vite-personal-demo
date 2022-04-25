/*
 * @Descripttion:
 * @Author: hanb
 * @Date: 2022-04-25 16:16:51
 * @LastEditors: hanb
 * @LastEditTime: 2022-04-25 16:51:49
 */
import axios, { AxiosRequestConfig } from "axios";
const instance = axios.create({
  baseURL: "/api/",
  timeout: 30000,
});
instance.interceptors.request.use(
  (config: AxiosRequestConfig) => {
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);
instance.interceptors.response.use(
  (res) => {
    return res;
  },
  (error) => {
    return Promise.reject(error);
  }
);
export default instance;
