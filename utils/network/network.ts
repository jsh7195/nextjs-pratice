import axios, {
  AxiosInstance,
  AxiosInterceptorManager,
  AxiosRequestConfig,
  AxiosResponse,
} from "axios";
import { getCookies } from "../common/utils";

interface CustomResponseFormat<T = any> {
  response: T;
  refreshedToken?: string;
}

interface CustomInstance extends AxiosInstance {
  interceptors: {
    request: AxiosInterceptorManager<AxiosRequestConfig>;
    response: AxiosInterceptorManager<AxiosResponse<CustomResponseFormat>>;
  };
  getUri: (config?: AxiosRequestConfig) => string;
  request: <T>(config: AxiosRequestConfig) => Promise<T>;
  get: <T>(url: string, param?: any, config?: AxiosRequestConfig) => Promise<T>;
  delete: <T>(url: string, config?: AxiosRequestConfig) => Promise<T>;
  head: <T>(url: string, config?: AxiosRequestConfig) => Promise<T>;
  options: <T>(url: string, config?: AxiosRequestConfig) => Promise<T>;
  post: <T>(url: string, data?: any, config?: AxiosRequestConfig) => Promise<T>;
  put: <T>(url: string, data?: any, config?: AxiosRequestConfig) => Promise<T>;
  patch: <T>(
    url: string,
    data?: any,
    config?: AxiosRequestConfig
  ) => Promise<T>;
}

const isProd = process.env.NODE_ENV === "production";
const _axios: CustomInstance = axios.create({
  //baseURL: isProd ? "backend-url" : "backend-url",
});

_axios.interceptors.response.use((res) => {
  return res;
});

_axios.interceptors.request.use((request) => {
  if (request.headers) {
    request.headers.authorization = getCookies("authorization");
  }
  return request;
});

export default _axios;
