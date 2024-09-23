import axios from "axios";
import { BASE_URL, TIMEOUT } from './config';

const request = axios.create({
  baseURL: BASE_URL,
  timeout: TIMEOUT
})

// 设置默认请求数据格式
request.defaults.headers.post["Content-Type"] = "application/json;charset=utf-8";

// 请求拦截
request.interceptors.request.use(
  (request) => {
    return request;
  },
  (error) => {
    return error;
  }
);

// 响应拦截
request.interceptors.response.use(
  (response) => {
    return response.data;
  },
  (error) => {
    return error;
  }
);

export default request;