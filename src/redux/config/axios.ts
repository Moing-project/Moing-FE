import { BaseQueryFn, FetchBaseQueryMeta } from "@reduxjs/toolkit/dist/query";
import axios, {
  AxiosError,
  AxiosInstance,
  AxiosResponse,
  HttpStatusCode,
  InternalAxiosRequestConfig,
} from "axios";
import { AxiosArgs, ResponseData } from "../types/BaseRequestType";

export const instance: AxiosInstance = axios.create({
  baseURL: process.env.REACT_APP_SERVER_URL,
});

// 요청 인터셉터 - 토큰 추가
instance.interceptors.request.use(
  function (config: InternalAxiosRequestConfig<any>) {
    let accessToken;
    config.headers.Authorization =
      !!(accessToken = localStorage.getItem("Authorization")) && accessToken;
    console.log("accessToken", accessToken);
    return config;
  },
  function (error) {
    // 요청 오류가 있는 작업 수행
    return Promise.reject(error);
  }
);

// 응답 인터셉터 - 상태 코드가 200인 경우 응답 데이터를 반환 /아닐 경우 응답 데이터의 msg 필드를 반환
instance.interceptors.response.use(
  function (config: AxiosResponse<ResponseData<any>, any>) {
    if (config.status === HttpStatusCode.Ok)
      return { ...config, data: config.data };
    else
      return {
        ...config,
        data: config.data.msg,
      };
  },
  function (error: AxiosError<ResponseData<any>>) {
    // 요청 오류가 있는 작업 수행
    return { ...error, data: error.response?.data };
  }
);

export type customAPIType = BaseQueryFn<
  AxiosArgs,
  unknown,
  unknown,
  {},
  FetchBaseQueryMeta
>;

// 커스텀한 API 요청 함수
export const axiosBaseQuery =
  (instance = axios.create({ baseURL: "" })): customAPIType =>
  async ({ url, method, data, params }) => {
    try {
      console.log(data);
      const result = await instance({
        url,
        method,
        data,
        params,
      });
      console.log("result", result);
      return {
        data: result.data,
        meta: {
          request: result.request,
        },
      };
    } catch (axiosError) {
      let err = axiosError as AxiosError;
      console.log(err);
      let data = err.response?.data as ResponseData<any>;
      if (data !== null) {
        return {
          error: {
            msg: data.msg,
            data: !!data.data ? data.data : null,
          },
          meta: {
            request: err.request,
            response: err.response,
          } as FetchBaseQueryMeta,
        };
      }
      console.log("error", err);
      return {
        error: {
          status: err.status,
          data: err.response?.data || err.message,
        },
        meta: {
          request: err.request,
          response: err.response,
        } as FetchBaseQueryMeta,
      };
    }
  };
