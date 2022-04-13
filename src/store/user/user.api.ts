import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { RootState } from "..";
import type { User } from "./user.model";

export const userApi = createApi({
  reducerPath: "userApi",
  baseQuery: fetchBaseQuery(),
  endpoints: (builder) => ({}),
});

export const { util: userApiUtil } = userApi;
