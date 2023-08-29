import { createApi } from "@reduxjs/toolkit/query/react";
import { checkAccess } from "../config/hook";
import { ResponseData } from "../types/BaseRequestType";
import {
  Auth,
  EmailCode,
  LoginData,
  NicknameDataType,
  SingInData,
  UserEmailDataType,
} from "../types/LoginType";
import { axiosBaseQuery } from "../config/axios";
import axios from "axios";

const instance = axios.create({
  baseURL: process.env.REACT_APP_SERVER_URL,
  // withCredentials: true, // 이 부분을 추가하여 쿠키를 사용하도록 설정합니다.
});

// 토큰 로컬스토리지에 저장
instance.interceptors.response.use(
  (value) => {
    // let authorization = value.headers;
    // console.log("authorization", authorization);
    value.headers?.authorization &&
      localStorage.setItem("Authorization", value.headers.authorization);
    value.headers?.refreshtoken &&
      localStorage.setItem("RefreshToken", value.headers.refreshtoken);
    return value;
  },
  // 쿠키
  // (value) => {
  //   if (value.headers?.authorization) {
  //     const authToken = value.headers.authorization;
  //     // 쿠키에 토큰 저장
  //     document.cookie = `Authorization=${authToken}; Path=/; SameSite=Strict`;
  //   }
  //   // 나머지 코드...
  //   return value;
  // },
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

export const LoginAPI = createApi({
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
  }),
});

export const {
  usePostLoginMutation,
  useSignInMutation,
  useGetEmailCodeQuery,
  useGetCheckNicknameQuery,
  useGetCheckEmailQuery,
  useGetCheckEmailTempMutation,
} = LoginAPI;
