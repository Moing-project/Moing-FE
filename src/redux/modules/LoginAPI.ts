import { createApi } from "@reduxjs/toolkit/query/react";
import { ResponseData } from "../../config/BaseRequestType";
import {
  Auth,
  LoginData,
  NicknameDataType,
  SingInData,
  UsernameDataType,
} from "../../config/LoginType";
import { axiosBaseQuery } from "../config/axios";
import axios from "axios";

const instance = axios.create({
  baseURL: "https://api.moingtool.com",
  //   baseURL: "http://1.244.223.183",
  //   baseURL: process.env.REACT_APP_SERVER_URL,
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
    SignIn: builder.mutation<ResponseData<any>, SingInData>({
      query: (payload) => ({
        url: "/api/auth/signin",
        method: "POST",
        data: payload,
      }),
    }),
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
    getCheckEmail: builder.query<ResponseData<any>, UsernameDataType>({
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
  }),
});

export const {
  usePostLoginMutation,
  useSignInMutation,
  useGetCheckNicknameQuery,
  useGetCheckEmailQuery,
} = Loginapi;

// 주석 있는 코드
// import { createApi } from "@reduxjs/toolkit/query/react";
// import { ResponseData } from "../../config/BaseRequestType";
// import {
//   Auth,
//   LoginData,
//   NicknameDataType,
//   SingInData,
//   UsernameDataType,
// } from "../../config/LoginType";
// import { axiosBaseQuery } from "../config/axios";
// import axios from "axios";

// const instance = axios.create({
//   // baseURL: "http://1.244.223.183",
//   baseURL: process.env.REACT_APP_SERVER_URL,
// });

// instance.interceptors.response.use(
//   (value) => value,
//   (error) => {
//     console.log(error);

//     return error;
//   }
// );

// export const Loginapi = createApi({
//   // The cache reducer expects to be added at `state.api` (already default - this is optional)
//   reducerPath: "api",
//   // All of our requests will have URLs starting with '/fakeApi'
//   baseQuery: axiosBaseQuery(instance),
//   // baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:8080" }),
//   // The "endpoints" represent operations and requests for this server
//   endpoints: (builder) => ({
//     // The `getPosts` endpoint is a "query" operation that returns data
//     postLogin: builder.mutation<ResponseData<LoginData>, Auth>({
//       // The URL for the request is '/fakeApi/posts'
//       query: (payload) => ({
//         url: "/api/auth/login",
//         method: "POST",
//         data: payload,
//       }),
//       transformResponse: (
//         response: { data: ResponseData<LoginData> },
//         meta,
//         arg
//       ) => {
//         console.log("response", response);
//         console.log("meta", meta);
//         console.log("arg", arg);
//         return response.data;
//       },
//     }),
//     SignIn: builder.mutation<ResponseData<any>, SingInData>({
//       // The URL for the request is '/fakeApi/posts'
//       query: (payload) => ({
//         url: "/api/auth/signin",
//         method: "POST",
//         data: payload,
//       }),
//       // transformResponse: (response: ResponseData<any>, meta, arg) => {
//       //   console.log("response", response);
//       //   console.log("meta", meta);
//       //   console.log("arg", arg);
//       //   return response;
//       // },
//       // transformErrorResponse: (response, meta, arg) => {
//       //   console.log("response", response);
//       //   console.log("meta", meta);
//       //   console.log("arg", arg);
//       //   return response as ResponseData<any>;
//       // },
//     }),
//     getCheckNickname: builder.query<ResponseData<any>, NicknameDataType>({
//       // The URL for the request is '/fakeApi/posts'
//       query: (payload) => ({
//         url: "/api/auth/nickname",
//         method: "get",
//         params: payload,
//       }),
//       // transformResponse: (response, meta, arg) => {
//       //   console.log("response", response);
//       //   console.log("meta", meta);
//       //   console.log("arg", arg);
//       //   return response as ResponseData<any>;
//       // },
//       transformErrorResponse: (
//         response: { data: ResponseData<any> },
//         meta,
//         arg
//       ) => {
//         console.log("response", response);
//         console.log("meta", meta);
//         console.log("arg", arg);
//         return response.data;
//       },
//     }),
//     getCheckUsername: builder.query<ResponseData<any>, UsernameDataType>({
//       // The URL for the request is '/fakeApi/posts'
//       query: (payload) => ({
//         url: "/api/auth/username",
//         method: "get",
//         params: payload,
//       }),
//       transformResponse: (response, meta, arg) => {
//         console.log("response", response);
//         console.log("meta", meta);
//         console.log("arg", arg);
//         return response as ResponseData<any>;
//       },
//       onQueryStarted: (arg, api) => {
//         console.log("arg", arg);
//         console.log("api", api);
//       },
//       // transformErrorResponse: (response, meta, arg) => {
//       //   console.log("response", response);
//       //   console.log("meta", meta);
//       //   console.log("arg", arg);
//       //   return response as ResponseData<any>;
//       // },
//     }),
//   }),
// });

// export const {
//   usePostLoginMutation,
//   useSignInMutation,
//   useGetCheckNicknameQuery,
//   useGetCheckUsernameQuery,
// } = Loginapi;
