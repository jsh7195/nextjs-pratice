/* eslint-disable @typescript-eslint/restrict-template-expressions */
import _axios from "@utils/network/network";
import { AxiosError, AxiosRequestConfig } from "axios";
import { useMutation, useQuery } from "@tanstack/react-query";

interface IResult {
  resultCode: string;
  resultData?: any;
  resultMessage: string;
}

interface IFetchParam {
  key: any;
  method: "get" | "post" | "put" | "delete";
  url: string;
  param?: {};
  option?: {};
}

/** 지원 method 'get','post','put','delete' */
export const fetchFn = (
  method: IFetchParam["method"],
  url: string,
  param?: any,
  config?: AxiosRequestConfig
) => {
  switch (method.toLowerCase()) {
    case "get":
      return _axios.get(url, { params: param });
    case "post":
      return _axios.post(url, param);
    case "put":
      return _axios.put(url, param);
    case "delete":
      return _axios.delete(url, param);
    default:
      throw new Error(`no fetch info method : ${method}`);
  }
};

/**  */
export const useFetch = (
  key: IFetchParam["key"],
  method: IFetchParam["method"],
  url: IFetchParam["url"],
  param?: any,
  option?: any
) => {
  return useQuery(key, async () => await fetchFn(method, url, param), {
    ...option,
  });
};

/**  */
export const useFetchMute = (
  key: Array<string>,
  method: IFetchParam["method"],
  url: IFetchParam["url"],
  param?: any,
  option?: any
) => {
  return useMutation(async () => await fetchFn(method, url, param), {
    ...option,
  });
};

export default useFetch;
