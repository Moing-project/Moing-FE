import { createApi } from "@reduxjs/toolkit/query/react";
import { checkAccess } from "../config/hook";
import { ResponseData } from "../types/BaseRequestType";
import {
  Auth,
  EmailCode,
  LoginData,
  NicknameDataType,
  ProjectType,
  SingInData,
  UserEmailDataType,
} from "../types/LoginType";
import { axiosBaseQuery } from "../config/axios";
import axios from "axios";

const instance = axios.create({
  baseURL: process.env.REACT_APP_SERVER_URL,
});

// instance.interceptors.response.use(
//   (value) => value,
//   (error) => {
//     console.log(error);
//     return error;
//   }
// );

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

export const Loginapi = createApi({
  reducerPath: "api",
  baseQuery: axiosBaseQuery(instance),
  endpoints: (builder) => ({
    // 로그인 post mutation
    postLogin: builder.mutation<ResponseData<LoginData>, Auth>({
      query: (payload) => ({
        url: "/api/auth/login",
        method: "POST",
        data: payload,
      }),
      transformResponse: (
        response: { data: ResponseData<LoginData> },
        meta,
        arg
      ) => {
        console.log("response", response);
        console.log("meta", meta);
        console.log("arg", arg);
        return response.data;
      },
    }),
    // 회원가입 post mutation
    SignIn: builder.mutation<ResponseData<any>, SingInData>({
      query: (payload) => ({
        url: "/api/auth/signin",
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
    // 이메일 코드 get query
    getEmailCode: builder.query<ResponseData<any>, EmailCode>({
      query: (payload) => ({
        url: "/api/auth/code",
        method: "get",
        params: payload,
      }),
      transformResponse: (response, meta, arg) => {
        console.log("response", response);
        console.log("meta", meta);
        console.log("arg", arg);
        return response as ResponseData<any>;
      },
      onQueryStarted: (arg, api) => {
        console.log("arg", arg);
        console.log("api", api);
      },
    }),
    getCheckEmailTemp: builder.mutation<boolean, UserEmailDataType>({
      query: (payload) => ({
        url: "/api/auth/email",
        method: "get",
        params: payload,
      }),
      transformResponse: (response: ResponseData<any>, meta, arg) => {
        console.log("response", response);
        console.log("meta", meta);
        console.log("arg", arg);
        return checkAccess(response.msg);
      },
      onQueryStarted: (arg, api) => {
        console.log("arg", arg);
        console.log("api", api);
      },
    }),
    // 이메일 중복확인 get query
    getCheckEmail: builder.query<ResponseData<any>, UserEmailDataType>({
      query: (payload) => ({
        url: "/api/auth/email",
        method: "get",
        params: payload,
      }),
      transformResponse: (response, meta, arg) => {
        console.log("response", response);
        console.log("meta", meta);
        console.log("arg", arg);
        return response as ResponseData<any>;
      },
      onQueryStarted: (arg, api) => {
        console.log("arg", arg);
        console.log("api", api);
      },
    }),
    // 닉네임 중복확인 get query
    getCheckNickname: builder.query<ResponseData<any>, NicknameDataType>({
      query: (payload) => ({
        url: "/api/auth/nickname",
        method: "get",
        params: payload,
      }),
      transformErrorResponse: (
        response: { data: ResponseData<any> },
        meta,
        arg
      ) => {
        console.log("response", response);
        console.log("meta", meta);
        console.log("arg", arg);
        return response.data;
      },
    }),
    // ** 프로젝트 생성
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

export const {
  usePostLoginMutation,
  useSignInMutation,
  useGetEmailCodeQuery,
  useGetCheckNicknameQuery,
  useGetCheckEmailQuery,
  useGetCheckEmailTempMutation,
  usePostProjectMutation,
} = Loginapi;
