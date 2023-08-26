import { createApi } from "@reduxjs/toolkit/query/react";
import { ResponseData } from "../types/BaseRequestType";
import { ProjectType } from "../types/ProjectType";
import { axiosBaseQuery, instance } from "../config/axios";

export const ProjectAPI = createApi({
  reducerPath: "projectApi",
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

export const { usePostProjectMutation } = ProjectAPI;
