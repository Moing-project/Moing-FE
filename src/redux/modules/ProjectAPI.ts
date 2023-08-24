import { createApi } from "@reduxjs/toolkit/query/react";
import { ResponseData } from "../types/BaseRequestType";
import { ProjectType } from "../types/LoginType";
import { axiosBaseQuery } from "../config/axios";
import axios from "axios";

const instance = axios.create({
  baseURL: process.env.REACT_APP_SERVER_URL,
});

instance.interceptors.response.use(
  (value) => value,
  (error) => {
    if (error.response) {
      // 에러 객체에 response가 있는 경우
      return Promise.reject(error.response.data);
    } else {
      // 에러 객체에 response가 없는 경우
      return Promise.reject(error);
    }
  }
);

export const Projectapi = createApi({
  reducerPath: "api",
  baseQuery: axiosBaseQuery(instance),
  endpoints: (builder) => ({
    // 프로젝트 생성 post mutation
    postProject: builder.mutation<ResponseData<any>, ProjectType>({
      query: (payload) => ({
        url: "/work/create",
        method: "POST",
        data: payload,
      }),
      transformResponse: (response: ResponseData<any>, meta, arg) => {
        console.log("response", response);
        console.log("meta", meta);
        console.log("arg", arg);
        return response;
      },
      transformErrorResponse: (response, meta, arg) => {
        console.log("response", response);
        console.log("meta", meta);
        console.log("arg", arg);
        return response as ResponseData<any>;
      },
    }),
  }),
});

export const { usePostProjectMutation } = Projectapi;
