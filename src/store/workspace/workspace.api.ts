import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { RootState } from "..";
import type { Workspace } from "./workspace.model";

export const workspaceApi = createApi({
  reducerPath: "workspaceApi",
  baseQuery: fetchBaseQuery(),
  endpoints: (builder) => ({}),
});

export const { util: workspaceApiUtil } = workspaceApi;
