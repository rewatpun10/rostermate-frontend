import { createApi } from "@reduxjs/toolkit/query/react";
import { baseQuery } from "./baseApi";

export interface LoginResponse {
  token: string;
  staffId: string;
  email: string;
  firstName: string;
  role: string;
}

export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery,
  endpoints: (builder) => ({
    login: builder.mutation<LoginResponse, { email: string; password: string }>(
      {
        query: (credentials) => ({
          url: "/auth/login",
          method: "POST",
          body: credentials,
        }),
      }
    ),
  }),
});

export const { useLoginMutation } = authApi;
