import { createApi } from "@reduxjs/toolkit/query/react";
import { ResponseData } from "../types/BaseRequestType";
import {
  Auth,
  LoginData,
  NicknameDataType,
  SingInData,
  UserEmailDataType,
} from "../types/LoginType";
import { axiosBaseQuery } from "../config/axios";
import axios from "axios";

const instance = axios.create({
  baseURL: process.env.REACT_APP_SERVER_URL,
});

instance.interceptors.response.use(
  (value) => value,
  (error) => {
    console.log(error);
    return error;
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
  useGetCheckNicknameQuery,
  useGetCheckEmailQuery,
} = Loginapi;
